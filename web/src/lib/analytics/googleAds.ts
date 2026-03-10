import { isDoNotTrackEnabled } from '../consent'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const installSendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO?.trim()

export function trackGoogleAdsInstallClick(url?: string) {
  if (!installSendTo) return false
  if (isDoNotTrackEnabled()) return false
  if (!window.gtag) return false

  let didComplete = false
  const complete = () => {
    if (didComplete) return
    didComplete = true
    if (typeof url !== 'undefined') window.location.href = url
  }

  const timeoutId =
    typeof url === 'undefined' ? null : window.setTimeout(() => complete(), 900)

  window.gtag('event', 'conversion', {
    send_to: installSendTo,
    event_callback: () => {
      if (timeoutId) window.clearTimeout(timeoutId)
      complete()
    },
  })

  return true
}
