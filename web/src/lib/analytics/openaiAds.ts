import { isDoNotTrackEnabled, readConsent } from '../consent'

type OpenAIAdsQueue = ((...args: unknown[]) => void) & {
  q?: unknown[][]
}

declare global {
  interface Window {
    oaiq?: OpenAIAdsQueue
    __donnaOpenAIAdsPixelId?: string
  }
}

export const openAIAdsPixelId =
  process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID?.trim() || 'Qu56HHWggwyxkPXmk5cUEk'

function ensureOpenAIAdsQueue() {
  if (window.oaiq) return window.oaiq

  const queue = ((...args: unknown[]) => {
    queue.q?.push(args)
  }) as OpenAIAdsQueue

  queue.q = []
  window.oaiq = queue
  return queue
}

export function initializeOpenAIAdsPixel() {
  if (!openAIAdsPixelId) return false
  if (isDoNotTrackEnabled()) return false

  try {
    const oaiq = ensureOpenAIAdsQueue()
    oaiq('consent', true)

    if (window.__donnaOpenAIAdsPixelId !== openAIAdsPixelId) {
      oaiq('init', { pixelId: openAIAdsPixelId })
      window.__donnaOpenAIAdsPixelId = openAIAdsPixelId
    }

    return true
  } catch {
    return false
  }
}

export function setOpenAIAdsConsent(granted: boolean) {
  try {
    window.oaiq?.('consent', granted)
  } catch {
    // Conversion measurement must never interrupt the visitor's flow.
  }
}

export function trackOpenAIAdsInstallClick() {
  if (!openAIAdsPixelId) return false
  if (isDoNotTrackEnabled()) return false
  if (!readConsent()?.consent.marketing) return false
  if (!window.oaiq) return false

  try {
    window.oaiq(
      'measure',
      'custom',
      { type: 'custom' },
      { custom_event_name: 'install_cta_clicked' },
    )
    return true
  } catch {
    return false
  }
}
