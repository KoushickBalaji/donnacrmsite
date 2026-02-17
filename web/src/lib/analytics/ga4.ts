import { isDoNotTrackEnabled } from '../consent'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID as string | undefined

function ensureGtagShim() {
  window.dataLayer ??= []
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }
}

let initialized = false

export function initGa4(options?: { allowAdPersonalizationSignals?: boolean }) {
  if (initialized) return
  if (!measurementId) return
  if (isDoNotTrackEnabled()) return

  ensureGtagShim()

  window.gtag?.('js', new Date())
  window.gtag?.('config', measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: Boolean(options?.allowAdPersonalizationSignals),
  })

  initialized = true
}

export function trackPageView(path: string, location?: string) {
  if (!initialized) return
  if (!measurementId) return

  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: location ?? window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!initialized) return
  window.gtag?.('event', name, params)
}
