import type { MetadataRoute } from 'next'
import { resolveSiteOrigin } from '../lib/site'

export const dynamic = 'force-static'

const paths = [
  '/',
  '/product',
  '/how-it-works',
  '/compare',
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
  '/shipping',
  '/streak-crm-alternative',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = resolveSiteOrigin()
  const lastModified = new Date()

  return paths.map((pathname) => ({
    url: pathname === '/' ? `${origin}/` : `${origin}${pathname}`,
    lastModified,
  }))
}
