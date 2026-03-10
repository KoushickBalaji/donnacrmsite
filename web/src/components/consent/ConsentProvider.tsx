'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import type { Consent } from '../../lib/consent'
import { clearGoogleCookies, isDoNotTrackEnabled, readConsent, writeConsent } from '../../lib/consent'

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
const googleAdsTagId = process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID?.trim()

type ConsentContextValue = {
  isReady: boolean
  consent: Consent | null
  setConsent: (consent: Consent) => void
  preferencesOpen: boolean
  openPreferences: () => void
  closePreferences: () => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)
const consentChangeEvent = 'donna:consent'

function subscribeHydration(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  const id = window.setTimeout(callback, 0)
  return () => window.clearTimeout(id)
}

function getHydrationSnapshot() {
  return true
}

function getHydrationServerSnapshot() {
  return false
}

function subscribeConsent(callback: () => void) {
  if (typeof window === 'undefined') return () => {}

  const handler = () => callback()
  window.addEventListener('storage', handler)
  window.addEventListener(consentChangeEvent, handler)

  const id = window.setTimeout(handler, 0)

  return () => {
    window.removeEventListener('storage', handler)
    window.removeEventListener(consentChangeEvent, handler)
    window.clearTimeout(id)
  }
}

let cachedConsent: Consent | null = null

function getConsentSnapshot(): Consent | null {
  if (isDoNotTrackEnabled()) {
    cachedConsent = null
    return null
  }

  const stored = readConsent()
  if (!stored) {
    cachedConsent = null
    return null
  }

  const next = stored.consent
  if (
    cachedConsent &&
    cachedConsent.analytics === next.analytics &&
    cachedConsent.marketing === next.marketing
  ) {
    return cachedConsent
  }

  cachedConsent = next
  return cachedConsent
}

function getConsentServerSnapshot(): Consent | null {
  return null
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferencesOpen, setPreferencesOpen] = useState(false)

  const isReady = useSyncExternalStore(
    subscribeHydration,
    getHydrationSnapshot,
    getHydrationServerSnapshot,
  )
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getConsentServerSnapshot)

  const consentRef = useRef(consent)
  useEffect(() => {
    consentRef.current = consent
  }, [consent])

  const openPreferences = useCallback(() => setPreferencesOpen(true), [])
  const closePreferences = useCallback(() => setPreferencesOpen(false), [])

  const setConsent = useCallback((next: Consent) => {
    const prev = consentRef.current
    writeConsent(next)
    setPreferencesOpen(false)

    if (!isDoNotTrackEnabled()) {
      window.gtag?.('consent', 'update', {
        ad_storage: next.marketing ? 'granted' : 'denied',
        analytics_storage: next.analytics ? 'granted' : 'denied',
        ad_user_data: next.marketing ? 'granted' : 'denied',
        ad_personalization: next.marketing ? 'granted' : 'denied',
      })

      if (ga4MeasurementId) {
        window.gtag?.('config', ga4MeasurementId, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: Boolean(next.marketing),
        })
      }

      if (googleAdsTagId) {
        window.gtag?.('config', googleAdsTagId)
      }
    }

    const disabledAnalytics = Boolean(prev?.analytics && !next.analytics)
    const disabledMarketing = Boolean(prev?.marketing && !next.marketing)
    const didDisableTracking = disabledAnalytics || disabledMarketing

    const shouldClearAnalytics = !next.analytics
    const shouldClearMarketing = !next.marketing

    if (shouldClearAnalytics || shouldClearMarketing) {
      clearGoogleCookies({ analytics: shouldClearAnalytics, marketing: shouldClearMarketing })
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event(consentChangeEvent))
    }

    if (didDisableTracking) {
      window.location.reload()
    }
  }, [])

  const value = useMemo(
    () => ({
      isReady,
      consent,
      setConsent,
      preferencesOpen,
      openPreferences,
      closePreferences,
    }),
    [isReady, consent, setConsent, preferencesOpen, openPreferences, closePreferences],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsent must be used within ConsentProvider')
  return ctx
}
