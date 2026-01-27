declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined

function isDoNotTrackEnabled() {
  return (
    navigator.doNotTrack === '1' ||
    (window as unknown as { doNotTrack?: string }).doNotTrack === '1'
  )
}

function ensureGtagShim() {
  window.dataLayer ??= []
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }
}

let initialized = false

export function initGa4() {
  if (initialized) return
  if (!measurementId) return
  if (isDoNotTrackEnabled()) return

  ensureGtagShim()

  window.gtag?.('js', new Date())
  window.gtag?.('config', measurementId, { send_page_view: false })

  initialized = true
}

export function trackPageView(path: string) {
  if (!initialized) return
  if (!measurementId) return

  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!initialized) return
  window.gtag?.('event', name, params)
}
