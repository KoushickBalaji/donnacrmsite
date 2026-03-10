import Script from 'next/script'

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
const googleAdsTagId = process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID?.trim()

const vercelEnv = process.env.VERCEL_ENV
const isProduction = vercelEnv ? vercelEnv === 'production' : process.env.NODE_ENV === 'production'

const primaryId = ga4MeasurementId || googleAdsTagId
const hasTags = Boolean(primaryId)

function buildBootstrapScript() {
  const ga4IdLiteral = ga4MeasurementId ? JSON.stringify(ga4MeasurementId) : 'null'
  const adsIdLiteral = googleAdsTagId ? JSON.stringify(googleAdsTagId) : 'null'

  return `
(() => {
  const dnt =
    (typeof navigator !== 'undefined' && (navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes')) ||
    (typeof window !== 'undefined' && (window.doNotTrack === '1' || window.doNotTrack === 'yes'))

  if (dnt) return

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments)}

  // Helps preserve ad click IDs (and basic session context) across pages even when storage is denied.
  window.gtag('set', 'url_passthrough', true)

  const storageKey = 'donna_consent_v1'
  let stored = null

  try {
    stored = JSON.parse(window.localStorage.getItem(storageKey) || 'null')
  } catch {
    stored = null
  }

  const hasStoredConsent =
    stored &&
    stored.v === 1 &&
    typeof stored.analytics === 'boolean' &&
    typeof stored.marketing === 'boolean'

  const analyticsGranted = hasStoredConsent ? stored.analytics : false
  const marketingGranted = hasStoredConsent ? stored.marketing : false

  window.gtag('consent', 'default', {
    ad_storage: marketingGranted ? 'granted' : 'denied',
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
    ad_user_data: marketingGranted ? 'granted' : 'denied',
    ad_personalization: marketingGranted ? 'granted' : 'denied',
    wait_for_update: 500,
  })

  window.gtag('js', new Date())

  const ga4Id = ${ga4IdLiteral}
  if (ga4Id) {
    window.gtag('config', ga4Id, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: marketingGranted,
    })
  }

  const adsId = ${adsIdLiteral}
  if (adsId) {
    window.gtag('config', adsId)
  }
})()
`.trim()
}

export function GoogleTagScripts() {
  if (!isProduction) return null
  if (!hasTags || !primaryId) return null

  return (
    <>
      <Script id="donna-google-tag-bootstrap" strategy="beforeInteractive">
        {buildBootstrapScript()}
      </Script>
      <Script
        id="donna-google-tag"
        data-donna="google-tag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`}
      />
    </>
  )
}
