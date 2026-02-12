import type { MetadataRoute } from 'next'
import { resolveSiteOrigin } from '../lib/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const origin = resolveSiteOrigin()
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${origin}/sitemap.xml`,
  }
}

