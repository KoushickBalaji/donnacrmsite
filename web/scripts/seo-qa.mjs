import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const APP_ROOT = path.resolve('src/app')
const VIEW_ROOT = path.resolve('src/views')
const SITEMAP_PATH = path.resolve('src/app/sitemap.ts')
const RESOURCES_PATH = path.resolve('src/content/resources.ts')
const STRUCTURED_DATA_PATH = path.resolve('src/lib/structuredData.ts')
const LINK_SOURCE_ROOTS = ['src/app', 'src/views', 'src/components', 'src/content']

const TITLE_MAX = 60
const DESCRIPTION_MIN = 110
const DESCRIPTION_MAX = 160

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath)))
    } else if (entry.isFile()) {
      files.push(entryPath)
    }
  }

  return files
}

function routeFromPage(filePath) {
  const rel = path.relative(APP_ROOT, filePath)
  if (rel === 'page.tsx') return '/'
  return `/${path.dirname(rel).split(path.sep).join('/')}`
}

function lineFor(text, index) {
  return text.slice(0, index).split('\n').length
}

function firstStringAfter(text, pattern) {
  const match = pattern.exec(text)
  return match?.[1] ?? null
}

function isRedirectRoute(text) {
  return /\b(?:redirect|permanentRedirect)\(/.test(text)
}

function isNoindexPage(text) {
  return /robots:\s*\{[^}]*index:\s*false/.test(text)
}

function hasDynamicMetadata(text) {
  return /function\s+generateMetadata\b/.test(text)
}

function checkTitle(issues, label, title) {
  if (!title) {
    issues.push(`${label} missing title`)
    return
  }
  if (title.length > TITLE_MAX) {
    issues.push(`${label} title too long (${title.length}): ${title}`)
  }
}

function checkDescription(issues, label, description) {
  if (!description) {
    issues.push(`${label} missing meta description`)
    return
  }
  if (description.length < DESCRIPTION_MIN) {
    issues.push(`${label} meta description too short (${description.length}): ${description}`)
  }
  if (description.length > DESCRIPTION_MAX) {
    issues.push(`${label} meta description too long (${description.length}): ${description}`)
  }
}

function literalLinkPatterns(pathname) {
  const escaped = pathname.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return [
    new RegExp(`href\\s*=\\s*["']${escaped}["']`),
    new RegExp(`href\\s*=\\s*\\{\\s*["']${escaped}["']\\s*\\}`),
    new RegExp(`href:\\s*["']${escaped}["']`),
  ]
}

async function checkPageMetadata(issues) {
  const pageFiles = (await walk(APP_ROOT)).filter((filePath) => filePath.endsWith(`${path.sep}page.tsx`))

  for (const filePath of pageFiles) {
    const text = await readFile(filePath, 'utf8')
    if (isRedirectRoute(text) || isNoindexPage(text) || hasDynamicMetadata(text)) continue

    const route = routeFromPage(filePath)
    const title = firstStringAfter(text, /title:\s*'([^']+)'/)
    const description =
      firstStringAfter(text, /const description\s*=\s*(?:\r?\n\s*)?'([^']+)'/) ??
      firstStringAfter(text, /description:\s*(?:\r?\n\s*)?'([^']+)'/)

    const finalTitle = route === '/' ? title : title ? `${title} | Donna CRM` : title
    checkTitle(issues, route, finalTitle)
    checkDescription(issues, route, description)
  }
}

async function checkResourceMetadata(issues) {
  const text = await readFile(RESOURCES_PATH, 'utf8').catch(() => null)
  if (!text) return

  const articleRegex =
    /slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'(?<between>[\s\S]*?)description:\s*(?:\r?\n\s*)?'([^']+)'/g
  for (const match of text.matchAll(articleRegex)) {
    const [, slug, title, , description] = match
    const seoTitle = match.groups?.between.match(/seoTitle:\s*'([^']+)'/)?.[1] ?? title
    const label = `/resources/${slug}`
    checkTitle(issues, label, `${seoTitle} | Donna CRM`)
    checkDescription(issues, label, description)
  }
}

async function checkSoftwareApplicationSchema(issues) {
  const helperText = await readFile(STRUCTURED_DATA_PATH, 'utf8').catch(() => null)
  if (!helperText) {
    issues.push('missing SoftwareApplication structured-data helper')
    return
  }

  if (!/aggregateRating:\s*\{/.test(helperText)) {
    issues.push('SoftwareApplication schema is missing AggregateRating')
  }
  if (!/price:\s*String\(DONNA_PRODUCT_FACTS\.monthlyPriceUsd\)/.test(helperText)) {
    issues.push('SoftwareApplication offer must use the shared nonzero monthly price')
  }
  if (!/priceCurrency:\s*'USD'/.test(helperText)) {
    issues.push('SoftwareApplication offer is missing USD price currency')
  }

  const consumers = []
  const pageFiles = (await walk(APP_ROOT)).filter((filePath) => filePath.endsWith(`${path.sep}page.tsx`))
  for (const filePath of pageFiles) {
    const text = await readFile(filePath, 'utf8')
    if (text.includes('softwareApplicationJsonLd')) consumers.push(routeFromPage(filePath))
  }

  if (consumers.length !== 1 || consumers[0] !== '/') {
    issues.push(
      `SoftwareApplication schema must be used only on / (found: ${consumers.join(', ') || 'none'})`,
    )
  }
}

async function checkResourceClusters(issues) {
  const text = await readFile(RESOURCES_PATH, 'utf8').catch(() => null)
  if (!text) return

  const validClusters = new Set([
    'gmail-crm-foundations',
    'consulting-workflows',
    'freelance-workflows',
    'ai-assisted-workflows',
    'solo-sales-workflows',
    'outreach-tool-workflows',
    'follow-up-workflows',
  ])
  const slugs = Array.from(text.matchAll(/^\s{4}slug:\s*'([^']+)',/gm), (match) => match[1])
  const articles = Array.from(
    text.matchAll(/^\s{4}slug:\s*'([^']+)',\s*\r?\n\s{4}topicCluster:\s*'([^']+)',/gm),
    (match) => ({ slug: match[1], topicCluster: match[2] }),
  )

  if (articles.length !== slugs.length) {
    const clusteredSlugs = new Set(articles.map((article) => article.slug))
    const missing = slugs.filter((slug) => !clusteredSlugs.has(slug))
    issues.push(`resources missing a topic cluster: ${missing.join(', ')}`)
  }

  const clusters = new Map()
  for (const article of articles) {
    if (!validClusters.has(article.topicCluster)) {
      issues.push(`${article.slug} uses unknown topic cluster ${article.topicCluster}`)
      continue
    }
    const clusterArticles = clusters.get(article.topicCluster) ?? []
    clusterArticles.push(article)
    clusters.set(article.topicCluster, clusterArticles)
  }

  for (const cluster of validClusters) {
    const clusterArticles = clusters.get(cluster) ?? []
    if (clusterArticles.length < 3) {
      issues.push(`resource topic cluster ${cluster} has fewer than three articles`)
    }
  }

  const inboundCounts = new Map(articles.map((article) => [article.slug, 0]))
  for (const article of articles) {
    const clusterArticles = clusters.get(article.topicCluster) ?? []
    const currentIndex = clusterArticles.findIndex((candidate) => candidate.slug === article.slug)
    const related = []
    const resultLimit = Math.min(3, clusterArticles.length - 1)

    for (let offset = 1; related.length < resultLimit && offset <= clusterArticles.length; offset += 1) {
      const candidate = clusterArticles[(currentIndex + offset) % clusterArticles.length]
      if (candidate && candidate.slug !== article.slug && !related.includes(candidate.slug)) {
        related.push(candidate.slug)
      }
    }

    if (related.length < 2 || related.length > 3) {
      issues.push(`${article.slug} resolves to ${related.length} related resource links`)
    }
    for (const relatedSlug of related) {
      inboundCounts.set(relatedSlug, (inboundCounts.get(relatedSlug) ?? 0) + 1)
    }
  }

  for (const [slug, count] of inboundCounts) {
    if (count < 2) issues.push(`/resources/${slug} receives only ${count} resource links`)
  }
}

async function checkImages(issues) {
  const roots = ['src/app', 'src/views', 'src/components']

  for (const root of roots) {
    const rootStat = await stat(root).catch(() => null)
    if (!rootStat) continue

    const files = (await walk(root)).filter((filePath) => filePath.endsWith('.tsx'))
    for (const filePath of files) {
      const text = await readFile(filePath, 'utf8')
      for (const match of text.matchAll(/<img\b[^>]*>/g)) {
        const tag = match[0]
        const alt = tag.match(/\balt=\{?["']([^"']*)["']\}?/)
        const expressionAlt = /\balt=\{[^}]+\}/.test(tag)
        if ((!alt || alt[1].trim() === '') && !expressionAlt) {
          issues.push(`${filePath}:${lineFor(text, match.index ?? 0)} image missing non-empty alt text`)
        }
      }
    }
  }
}

async function checkDuplicateH1s(issues) {
  const files = (await walk(VIEW_ROOT)).filter((filePath) => filePath.endsWith('.tsx'))

  for (const filePath of files) {
    const text = await readFile(filePath, 'utf8')
    const h1Count = (text.match(/<h1\b/g) ?? []).length
    if (h1Count > 1) {
      issues.push(`${filePath} has ${h1Count} H1 tags`)
    }
  }
}

async function checkSitemapRedirectEntries(issues) {
  const text = await readFile(SITEMAP_PATH, 'utf8').catch(() => null)
  if (!text) return

  for (const redirectPath of ['/home', '/compare']) {
    if (text.includes(`'${redirectPath}'`) || text.includes(`"${redirectPath}"`)) {
      issues.push(`sitemap includes redirect route ${redirectPath}`)
    }
  }
}

async function checkSitemapDiscoverability(issues) {
  const sitemapText = await readFile(SITEMAP_PATH, 'utf8').catch(() => null)
  if (!sitemapText) return

  const staticPaths = Array.from(sitemapText.matchAll(/'\/[^']*'/g))
    .map((match) => match[0].slice(1, -1))
    .filter((pathname) => pathname !== '/')

  const sourceTexts = []
  for (const root of LINK_SOURCE_ROOTS) {
    const rootStat = await stat(root).catch(() => null)
    if (!rootStat) continue

    const files = (await walk(root)).filter((filePath) => filePath.endsWith('.tsx') || filePath.endsWith('.ts'))
    for (const filePath of files) {
      if (path.resolve(filePath) === SITEMAP_PATH) continue
      sourceTexts.push(await readFile(filePath, 'utf8'))
    }
  }

  const combinedSource = sourceTexts.join('\n')
  for (const pathname of staticPaths) {
    const hasInternalLink = literalLinkPatterns(pathname).some((pattern) => pattern.test(combinedSource))
    if (!hasInternalLink) {
      issues.push(`sitemap path ${pathname} has no source-level internal link`)
    }
  }
}

async function main() {
  const issues = []

  await checkPageMetadata(issues)
  await checkResourceMetadata(issues)
  await checkSoftwareApplicationSchema(issues)
  await checkResourceClusters(issues)
  await checkImages(issues)
  await checkDuplicateH1s(issues)
  await checkSitemapRedirectEntries(issues)
  await checkSitemapDiscoverability(issues)

  if (issues.length) {
    console.error('SEO QA failed. Issues found:')
    for (const issue of issues) console.error(`- ${issue}`)
    process.exit(1)
  }

  console.log('SEO QA passed.')
}

await main()
