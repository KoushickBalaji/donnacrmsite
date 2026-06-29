import type { MetadataRoute } from 'next'
import { resolveSiteOrigin } from '../lib/site'
import { resourceArticles } from '../content/resources'

export const dynamic = 'force-static'

const paths = [
  '/',
  '/product',
  '/how-it-works',
  '/features',
  '/integrations',
  '/resources',
  '/pricing',
  '/faq',
  '/contact',
  '/gmail-crm',
  '/ai-gmail-crm',
  '/crm-for-consultants',
  '/crm-for-freelancers',
  '/crm-for-solo-b2b-sales',
  '/inbox-onboarding',
  '/email-tracking-in-gmail',
  '/privacy',
  '/cancellation-refunds',
  '/terms',
  '/streak-crm-alternative',
  '/copper-crm-alternative',
  '/hubspot-crm-alternative',
  '/pipedrive-crm-alternative',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = resolveSiteOrigin()
  const lastModified = new Date()

  const resourceEntries = resourceArticles.map((article) => {
    const articleLastModified = new Date(`${(article.updatedAt ?? article.publishedAt)}T00:00:00.000Z`)
    return {
      url: `${origin}/resources/${article.slug}`,
      lastModified: Number.isNaN(articleLastModified.getTime()) ? lastModified : articleLastModified,
    }
  })

  const staticEntries = paths.map((pathname) => ({
    url: pathname === '/' ? `${origin}/` : `${origin}${pathname}`,
    lastModified,
  }))

  return [...staticEntries, ...resourceEntries]
}
