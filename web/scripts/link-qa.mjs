import { readdir, readFile, stat, access } from 'node:fs/promises'
import path from 'node:path'

const ROOTS = ['src/views', 'src/app', 'src/components', 'src/lib', 'src/content']
const APP_ROOT = path.resolve('src/app')
const PUBLIC_ROOT = path.resolve('public')

const TEXT_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.json',
  '.md',
  '.mdx',
  '.yml',
  '.yaml',
  '.css',
  '.scss',
  '.txt',
  '.html',
])

function isTextFile(filePath) {
  return TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase())
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath)))
      continue
    }
    if (entry.isFile() && isTextFile(entryPath)) files.push(entryPath)
  }

  return files
}

function indexToLine(text, index) {
  let line = 1
  for (let i = 0; i < index; i += 1) if (text.charCodeAt(i) === 10) line += 1
  return line
}

function stripQueryAndHash(value) {
  return value.split('#')[0].split('?')[0]
}

function normalizePathname(value) {
  if (!value) return ''
  if (!value.startsWith('/')) return value
  const stripped = stripQueryAndHash(value)
  if (stripped === '/') return '/'
  return stripped.endsWith('/') ? stripped.slice(0, -1) : stripped
}

function isRouteGroup(segment) {
  return segment.startsWith('(') && segment.endsWith(')')
}

function isParallelSlot(segment) {
  return segment.startsWith('@')
}

function segmentToPattern(segment) {
  if (segment.startsWith('[[...') && segment.endsWith(']]')) return '**'
  if (segment.startsWith('[...') && segment.endsWith(']')) return '**'
  if (segment.startsWith('[') && segment.endsWith(']')) return '*'
  return segment
}

function routePatternFromAppFile(filePath) {
  const rel = path.relative(APP_ROOT, filePath)
  const parts = rel.split(path.sep)
  const fileName = parts.pop() || ''

  if (!['page.tsx', 'page.jsx', 'page.ts', 'page.js', 'route.ts', 'route.js'].includes(fileName)) {
    return null
  }

  const urlParts = parts
    .filter(Boolean)
    .filter((segment) => !isRouteGroup(segment))
    .filter((segment) => !isParallelSlot(segment))
    .map(segmentToPattern)

  const route = `/${urlParts.join('/')}`
  return route === '/' ? '/' : route.replace(/\/+/g, '/')
}

function matchesRoutePattern(pathname, pattern) {
  const a = normalizePathname(pathname)
  const b = normalizePathname(pattern)
  if (b === '/') return a === '/'

  const pathSegs = a.split('/').filter(Boolean)
  const patSegs = b.split('/').filter(Boolean)

  let i = 0
  let j = 0
  while (i < pathSegs.length && j < patSegs.length) {
    const pat = patSegs[j]
    if (pat === '**') return true
    if (pat !== '*' && pat !== pathSegs[i]) return false
    i += 1
    j += 1
  }

  if (i === pathSegs.length && j === patSegs.length) return true
  if (j < patSegs.length && patSegs[j] === '**') return true
  return false
}

async function fileExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  const issues = []

  const appFiles = await walk(APP_ROOT).catch(() => [])
  const routePatterns = Array.from(new Set(appFiles.map(routePatternFromAppFile).filter(Boolean)))

  const hrefRegex = /href\s*=\s*(?:\{\s*)?["']([^"'<>\\\s]+)["']\s*(?:\})?/g

  for (const root of ROOTS) {
    const rootStat = await stat(root).catch(() => null)
    if (!rootStat) continue

    const files = await walk(root)
    for (const filePath of files) {
      const text = await readFile(filePath, 'utf8').catch(() => null)
      if (text === null) continue

      for (const match of text.matchAll(hrefRegex)) {
        const rawHref = match[1]
        if (!rawHref) continue
        if (rawHref.startsWith('#')) continue
        if (rawHref.startsWith('mailto:')) continue
        if (rawHref.startsWith('tel:')) continue
        if (rawHref.startsWith('http://') || rawHref.startsWith('https://')) continue
        if (!rawHref.startsWith('/') || rawHref.startsWith('//')) continue

        const pathname = normalizePathname(rawHref)
        const hasRoute = routePatterns.some((pattern) => matchesRoutePattern(pathname, pattern))
        if (hasRoute) continue

        const publicPath = path.join(PUBLIC_ROOT, pathname.replace(/^\//, ''))
        if (await fileExists(publicPath)) continue

        issues.push({
          filePath,
          line: indexToLine(text, match.index ?? 0),
          href: rawHref,
        })
      }
    }
  }

  if (issues.length) {
    console.error('Link QA failed. Broken internal links found:')
    for (const issue of issues) {
      console.error(`- ${issue.filePath}:${issue.line} href=${JSON.stringify(issue.href)}`)
    }
    process.exit(1)
  }

  console.log('Link QA passed.')
}

await main()

