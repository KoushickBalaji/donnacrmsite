'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

/**
 * Resets scroll-snap on every client-side navigation.
 * Pages that need snap will re-enable it via their own ScrollSnapActivator.
 *
 * Uses useLayoutEffect (fires before paint) so the browser never sees
 * a stale scroll-snap-active class on non-snap pages like Resources.
 * useEffect was too late — the browser would snap to the footer before
 * the class was removed.
 */
export function ScrollSnapReset() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    document.documentElement.classList.remove('scroll-snap-active')
  }, [pathname])

  return null
}
