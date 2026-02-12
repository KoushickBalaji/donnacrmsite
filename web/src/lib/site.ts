export const SITE_NAME = 'Donna CRM'
export const DEFAULT_DESCRIPTION =
  'Donna CRM is a Chrome extension that brings contact management, deal tracking, and email productivity tools directly into your Gmail inbox.'
export const DEFAULT_OG_IMAGE_PATH = '/og.png'

export function resolveSiteOrigin() {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN?.trim()
  if (configuredOrigin) return configuredOrigin.replace(/\/+$/, '')
  return 'https://www.donnacrm.com'
}

