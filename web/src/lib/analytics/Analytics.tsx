'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initGa4, trackEvent, trackPageView } from './ga4'
import { trackGoogleAdsInstallClick } from './googleAds'
import { useConsent } from '../../components/consent/ConsentProvider'

type SearchParamsLike = {
  entries(): IterableIterator<[string, string]>
}

function buildAllowedQueryString(params: SearchParamsLike | null | undefined) {
  if (!params) return ''
  const allowed = new URLSearchParams()

  for (const [key, value] of params.entries()) {
    const lower = key.toLowerCase()
    if (lower.startsWith('utm_') || lower === 'gclid' || lower === 'gbraid' || lower === 'wbraid') {
      allowed.append(key, value)
    }
  }

  const qs = allowed.toString()
  return qs ? `?${qs}` : ''
}

export function Ga4Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { consent } = useConsent()

  const consentRef = useRef(consent)
  useEffect(() => {
    consentRef.current = consent
  }, [consent])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const currentConsent = consentRef.current
      const analyticsAllowed = Boolean(currentConsent?.analytics)
      const marketingAllowed = Boolean(currentConsent?.marketing)
      if (!analyticsAllowed && !marketingAllowed) return

      const target = e.target as Element | null
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') ?? ''
      if (!href) return

      const resolvedHref = href.startsWith('http') ? href : anchor.href
      if (!resolvedHref.includes('chromewebstore.google.com/detail/donna-crm/')) return

      let utmSource: string | undefined
      let utmMedium: string | undefined
      let utmCampaign: string | undefined
      let utmContent: string | undefined

      try {
        const url = new URL(resolvedHref)
        utmSource = url.searchParams.get('utm_source') || undefined
        utmMedium = url.searchParams.get('utm_medium') || undefined
        utmCampaign = url.searchParams.get('utm_campaign') || undefined
        utmContent = url.searchParams.get('utm_content') || undefined
      } catch {
        // ignore URL parsing failures
      }

      const allowedQuery = buildAllowedQueryString(new URLSearchParams(window.location.search))
      const pagePath = `${window.location.pathname}${allowedQuery}`

      if (analyticsAllowed) {
        initGa4({ allowAdPersonalizationSignals: marketingAllowed })
        trackEvent('install_click', {
          link_url: resolvedHref,
          link_text: anchor.textContent?.trim() || undefined,
          page_path: pagePath,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_content: utmContent,
        })
      }

      const opensNewTab = (anchor.getAttribute('target') ?? '').toLowerCase() === '_blank'
      const isPlainLeftClick =
        e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey

      if (marketingAllowed) {
        if (!opensNewTab && isPlainLeftClick) {
          const didStartConversion = trackGoogleAdsInstallClick(resolvedHref)
          if (didStartConversion) {
            e.preventDefault()
            return
          }
        } else {
          trackGoogleAdsInstallClick()
        }
      }
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  useEffect(() => {
    if (!consent?.analytics) return
    initGa4({ allowAdPersonalizationSignals: Boolean(consent.marketing) })

    const qs = buildAllowedQueryString(searchParams)
    const pagePath = `${pathname}${qs}`
    const pageLocation = `${window.location.origin}${pathname}${qs}`
    trackPageView(pagePath, pageLocation)
  }, [pathname, searchParams, consent?.analytics, consent?.marketing])

  return null
}
