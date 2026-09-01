'use client'

import { useEffect } from 'react'
import { useConsent } from '../../components/consent/ConsentProvider'
import { isDoNotTrackEnabled } from '../consent'
import {
  initializeOpenAIAdsPixel,
  setOpenAIAdsConsent,
} from './openaiAds'

const pixelScriptSelector = 'script[data-donna="openai-ads-pixel"]'

export function OpenAIAdsPixel() {
  const { isReady, consent } = useConsent()
  const marketingConsent = Boolean(consent?.marketing)

  useEffect(() => {
    if (!isReady) return
    if (isDoNotTrackEnabled()) return

    if (!marketingConsent) {
      setOpenAIAdsConsent(false)
      return
    }

    if (!initializeOpenAIAdsPixel()) return
    if (document.querySelector(pixelScriptSelector)) return

    try {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js'
      script.setAttribute('data-donna', 'openai-ads-pixel')
      document.head.appendChild(script)
    } catch {
      // Conversion measurement must never interrupt the visitor's flow.
    }
  }, [isReady, marketingConsent])

  return null
}
