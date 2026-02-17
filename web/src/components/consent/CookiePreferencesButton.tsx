'use client'

import { useConsent } from './ConsentProvider'

export function CookiePreferencesButton({ className }: { className?: string }) {
  const { openPreferences } = useConsent()

  return (
    <button type="button" className={className} onClick={openPreferences}>
      Cookie preferences
    </button>
  )
}

