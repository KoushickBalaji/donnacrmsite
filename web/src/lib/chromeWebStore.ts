const CHROME_WEB_STORE_INSTALL_URL =
  'https://chromewebstore.google.com/detail/donna-crm/fadjjpednmcoomcpajkfbpchankdoiip'

type UTM = {
  source?: string
  medium?: string
  campaign?: string
  content?: string
  term?: string
}

const DEFAULT_UTM: Required<Pick<UTM, 'source' | 'medium' | 'campaign'>> = {
  source: 'website',
  medium: 'cta',
  campaign: 'extension_install',
}

export function chromeWebStoreInstallUrl(utm: UTM = {}) {
  const url = new URL(CHROME_WEB_STORE_INSTALL_URL)
  url.searchParams.set('utm_source', utm.source ?? DEFAULT_UTM.source)
  url.searchParams.set('utm_medium', utm.medium ?? DEFAULT_UTM.medium)
  url.searchParams.set('utm_campaign', utm.campaign ?? DEFAULT_UTM.campaign)
  if (utm.content) url.searchParams.set('utm_content', utm.content)
  if (utm.term) url.searchParams.set('utm_term', utm.term)
  return url.toString()
}

