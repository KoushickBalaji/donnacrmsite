'use client'

import { useEffect } from 'react'
import { isDoNotTrackEnabled } from '../consent'
import { useConsent } from '../../components/consent/ConsentProvider'

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
const googleAdsTagId = process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID?.trim()
const isProduction =
  process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'

export function Ga4Script() {
  const { isReady, consent } = useConsent()
  const analyticsConsent = Boolean(consent?.analytics)
  const marketingConsent = Boolean(consent?.marketing)

  useEffect(() => {
    if (!isProduction) return
    if (!ga4MeasurementId && !googleAdsTagId) return
    if (!isReady) return
    if (isDoNotTrackEnabled()) return

    const shouldLoadAnalytics = Boolean(ga4MeasurementId && analyticsConsent)
    const shouldLoadMarketing = Boolean((googleAdsTagId || ga4MeasurementId) && marketingConsent)

    if (!shouldLoadAnalytics && !shouldLoadMarketing) return

    const primaryId =
      (shouldLoadAnalytics && ga4MeasurementId) ||
      (shouldLoadMarketing && googleAdsTagId) ||
      (shouldLoadMarketing && ga4MeasurementId) ||
      ''

    if (!primaryId) return

    window.dataLayer ||= []
    window.gtag ||= (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }

    const existing = document.querySelector(
      'script[data-donna="google-tag"]',
    ) as HTMLScriptElement | null

    if (!existing) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`
      script.setAttribute('data-donna', 'google-tag')
      document.head.appendChild(script)
    }

    window.gtag?.('js', new Date())

    if (shouldLoadAnalytics && ga4MeasurementId) {
      window.gtag?.('config', ga4MeasurementId, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: marketingConsent,
      })
    }

    if (marketingConsent && googleAdsTagId) {
      window.gtag?.('config', googleAdsTagId)
    }
  }, [isReady, analyticsConsent, marketingConsent])

  return null
}
