'use client'

import { useScrollSnap } from '../lib/useScrollSnap'

/**
 * Drop this into any page to enable mandatory scroll-snap.
 * Sections must have `data-snap-section` to become snap targets.
 */
export function ScrollSnapActivator() {
  useScrollSnap()
  return null
}
