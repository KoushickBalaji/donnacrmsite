declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const installSendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO?.trim()

export function trackGoogleAdsInstallClick(url?: string) {
  if (!installSendTo) return false
  if (!window.gtag) return false

  const callback = () => {
    if (typeof url !== 'undefined') {
      window.location.href = url
    }
  }

  window.gtag('event', 'conversion', {
    send_to: installSendTo,
    event_callback: callback,
  })

  return true
}
