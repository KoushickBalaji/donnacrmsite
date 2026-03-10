import { isDoNotTrackEnabled } from '../consent'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()

function ensureGtagShim() {
  window.dataLayer ??= []
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }
}

function canTrack() {
  if (!measurementId) return false
  if (isDoNotTrackEnabled()) return false
  return true
}

export function trackPageView(path: string, location?: string) {
  if (!canTrack()) return

  ensureGtagShim()

  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: location ?? window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!canTrack()) return

  ensureGtagShim()
  window.gtag?.('event', name, params)
}
