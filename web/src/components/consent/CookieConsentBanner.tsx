'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/Button'
import { openAIAdsPixelId } from '../../lib/analytics/openaiAds'
import { isDoNotTrackEnabled } from '../../lib/consent'
import { useConsent } from './ConsentProvider'

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
const googleAdsTagId = process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID?.trim()
const hasOptionalTracking = Boolean(ga4MeasurementId || googleAdsTagId || openAIAdsPixelId)

type CookieConsentBannerProps = {
  enabled: boolean
}

export function CookieConsentBanner({ enabled }: CookieConsentBannerProps) {
  const { isReady, consent, setConsent, preferencesOpen, closePreferences } = useConsent()

  const [customizeOpen, setCustomizeOpen] = useState(false)

  if (!enabled) return null
  if (!hasOptionalTracking) return null
  if (!isReady) return null
  if (isDoNotTrackEnabled()) return null

  const shouldShow = preferencesOpen || !consent
  if (!shouldShow) return null

  const hasExistingChoice = Boolean(consent)
  const showDetails = preferencesOpen ? true : customizeOpen

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/95 backdrop-blur"
      role="dialog"
      aria-label="Cookie preferences"
    >
      <div className="container py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Cookie preferences</p>
            <p className="text-sm text-muted-foreground">
              We use cookies (and cookieless signals) to understand site usage and measure marketing performance.{' '}
              <Link
                href="/privacy#cookies-and-analytics"
                className="text-primary hover:underline"
              >
                Learn more
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <Button
              variant="secondary"
              className="sm:min-w-48"
              type="button"
              onClick={() => setConsent({ analytics: false, marketing: false })}
            >
              Reject non-essential
            </Button>
            <Button
              variant="secondary"
              className="sm:min-w-48"
              type="button"
              onClick={() => setConsent({ analytics: true, marketing: true })}
            >
              Accept all
            </Button>
            {preferencesOpen ? null : (
              <Button
                variant="ghost"
                type="button"
                onClick={() => setCustomizeOpen((v) => !v)}
              >
                {showDetails ? 'Hide' : 'Customize'}
              </Button>
            )}
          </div>
        </div>

        {showDetails ? (
          <form
            className="mt-4 rounded-lg border border-border bg-background p-4"
            onSubmit={(e) => {
              e.preventDefault()
              const data = new FormData(e.currentTarget)
              setConsent({
                analytics: data.get('analytics') === 'true',
                marketing: data.get('marketing') === 'true',
              })
            }}
          >
            <div className="grid gap-4 md:grid-cols-3">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 rounded border-input bg-background"
                />
                <span className="space-y-1">
                  <span className="block text-sm font-medium text-foreground">
                    Essential
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Required for the website to function.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="analytics"
                  value="true"
                  defaultChecked={Boolean(consent?.analytics)}
                  className="mt-1 h-4 w-4 rounded border-input bg-background"
                />
                <span className="space-y-1">
                  <span className="block text-sm font-medium text-foreground">
                    Analytics
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Enables analytics cookies (GA4). When disabled, we may still receive cookieless, aggregated measurement.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="marketing"
                  value="true"
                  defaultChecked={Boolean(consent?.marketing)}
                  className="mt-1 h-4 w-4 rounded border-input bg-background"
                />
                <span className="space-y-1">
                  <span className="block text-sm font-medium text-foreground">
                    Marketing
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Enables marketing measurement from Google Ads and OpenAI Ads. When disabled,
                    OpenAI Ads is not loaded or sent conversion events; Google Ads may use
                    cookieless measurement.
                  </span>
                </span>
              </label>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
              {hasExistingChoice ? (
                <Button variant="outline" type="button" onClick={closePreferences}>
                  Cancel
                </Button>
              ) : null}
              <Button type="submit">Save preferences</Button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  )
}
