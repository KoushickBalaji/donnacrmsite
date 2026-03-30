import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const ROOTS = ['src/views', 'src/app', 'src/components', 'src/lib', 'src/content']
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

const PLACEHOLDER_PATTERNS = [
  /differentiator here/i,
  /highlight product features here/i,
  /\blorem\b/i,
  /\bipsum\b/i,
  /\bTKTK\b/i,
  /\bTBD\b/i,
  /\bFIXME\b/i,
  /\bTODO\b/i,
  /\bcoming soon\b/i,
]

const MOJIBAKE_PATTERNS = [
  /â€™/,
  /â€œ/,
  /â€\x9d/,
  /â€“/,
  /â€”/,
  /ï»¿/,
]

// Catches common "?" -> "v" corruption like "Donnav", "helpv", "alternativev".
// Excludes common real words/identifiers ending in "v".
// Negative lookbehind (?<!En) excludes camelCase identifiers like vercelEnv, nextEnv.
const TRAILING_V_ARTIFACT = /\b(?!dev\b|nav\b|div\b|env\b|rev\b|prev\b|srv\b|svg\b|tsv\b|csv\b|argv\b|mov\b)[A-Za-z]{4,}(?<!En)v\b/

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

function findFirstMatch(text, regex) {
  const match = regex.exec(text)
  if (!match || match.index === undefined) return null
  return { index: match.index, match: match[0] }
}

// Unicode code points that are intentional UI characters and should not be flagged.
// U+00B7 = middle dot (·) used as a separator in trust badges.
// U+2019 = right single quotation mark (') used in contractions if present.
// U+2605 = filled star (★) used in review/rating displays.
// U+2606 = empty star (☆) used in review/rating displays.
const ALLOWED_NON_ASCII = new Set([0x00b7, 0x2019, 0x2605, 0x2606])

// These are always flagged regardless of allowlist - copy rule violations.
const BANNED_CODEPOINTS = new Map([
  [0x2014, 'Em dash (—) found - use a hyphen instead'],
  [0x2013, 'En dash (-) found - use a hyphen instead'],
])

function firstNonAsciiChar(text) {
  for (let i = 0; i < text.length; i += 1) {
    const codePoint = text.codePointAt(i)
    if (codePoint === undefined) continue
    if (codePoint > 0xffff) i += 1
    if (codePoint <= 127) continue
    if (BANNED_CODEPOINTS.has(codePoint)) return { index: i, codePoint }
    if (ALLOWED_NON_ASCII.has(codePoint)) continue
    return { index: i, codePoint }
  }
  return null
}

async function main() {
  const issues = []

  for (const root of ROOTS) {
    const rootStat = await stat(root).catch(() => null)
    if (!rootStat) continue

    const files = await walk(root)
    for (const filePath of files) {
      const text = await readFile(filePath, 'utf8').catch(() => null)
      if (text === null) continue

      if (text.includes('\uFFFD')) {
        const index = text.indexOf('\uFFFD')
        issues.push({
          filePath,
          line: indexToLine(text, index),
          reason: 'U+FFFD replacement character found',
        })
      }

      for (const pattern of MOJIBAKE_PATTERNS) {
        const match = findFirstMatch(text, pattern)
        if (!match) continue
        issues.push({
          filePath,
          line: indexToLine(text, match.index),
          reason: `Mojibake sequence found: ${JSON.stringify(match.match)}`,
        })
      }

      for (const pattern of PLACEHOLDER_PATTERNS) {
        const match = findFirstMatch(text, pattern)
        if (!match) continue
        issues.push({
          filePath,
          line: indexToLine(text, match.index),
          reason: `Placeholder text found: ${JSON.stringify(match.match)}`,
        })
      }

      const vArtifact = findFirstMatch(text, TRAILING_V_ARTIFACT)
      if (vArtifact) {
        issues.push({
          filePath,
          line: indexToLine(text, vArtifact.index),
          reason: `Suspicious trailing "v" artifact found: ${JSON.stringify(vArtifact.match)}`,
        })
      }

      const nonAscii = firstNonAsciiChar(text)
      if (nonAscii) {
        const bannedMsg = BANNED_CODEPOINTS.get(nonAscii.codePoint)
        issues.push({
          filePath,
          line: indexToLine(text, nonAscii.index),
          reason: bannedMsg ?? `Non-ASCII character found: U+${nonAscii.codePoint.toString(16).toUpperCase().padStart(4, '0')}`,
        })
      }
    }
  }

  if (issues.length) {
    console.error('Content QA failed. Issues found:')
    for (const issue of issues) {
      console.error(`- ${issue.filePath}:${issue.line} ${issue.reason}`)
    }
    process.exit(1)
  }

  console.log('Content QA passed.')
}

await main()

