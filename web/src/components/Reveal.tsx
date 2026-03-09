'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/cn'

type RevealVariant = 'fade-up' | 'scale' | 'fade-left' | 'fade-right'

export function Reveal({
  children,
  className,
  variant = 'fade-up',
  delayMs = 0,
  durationMs = 400,
}: {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delayMs?: number
  durationMs?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const base = 'transition-all ease-out will-change-[transform,opacity]'

  const hiddenMap: Record<RevealVariant, string> = {
    'fade-up': 'opacity-0 translate-y-4',
    scale: 'opacity-0 translate-y-2 scale-[0.97]',
    'fade-left': 'opacity-0 -translate-x-4',
    'fade-right': 'opacity-0 translate-x-4',
  }

  const shownMap: Record<RevealVariant, string> = {
    'fade-up': 'opacity-100 translate-y-0',
    scale: 'opacity-100 translate-y-0 scale-100',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
  }

  return (
    <div
      ref={ref}
      className={cn(base, visible ? shownMap[variant] : hiddenMap[variant], className)}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </div>
  )
}
