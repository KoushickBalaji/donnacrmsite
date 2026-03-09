'use client'

import { useEffect } from 'react'

/**
 * Enables mandatory scroll-snap on the page.
 * Sections must have `data-snap-section` to become snap targets.
 * Automatically disabled for coarse pointers (touch) and reduced-motion.
 * Cleans up on unmount.
 */
export function useScrollSnap() {
  useEffect(() => {
    const root = document.documentElement
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      root.classList.toggle(
        'scroll-snap-active',
        finePointer.matches && !reducedMotion.matches,
      )
    }

    update()
    finePointer.addEventListener('change', update)
    reducedMotion.addEventListener('change', update)

    return () => {
      root.classList.remove('scroll-snap-active')
      finePointer.removeEventListener('change', update)
      reducedMotion.removeEventListener('change', update)
    }
  }, [])
}
