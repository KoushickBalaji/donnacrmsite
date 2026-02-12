'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/cn'

type RevealVariant = 'fade-up' | 'scale'

export function Reveal({
  children,
  className,
  variant = 'fade-up',
  delayMs = 0,
  durationMs = 180,
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
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const base = 'transition-all ease-out will-change-transform'
  const hidden =
    variant === 'scale'
      ? 'opacity-0 translate-y-2 scale-[0.97]'
      : 'opacity-0 translate-y-3.5'
  const shown =
    variant === 'scale'
      ? 'opacity-100 translate-y-0 scale-100'
      : 'opacity-100 translate-y-0'

  return (
    <div
      ref={ref}
      className={cn(base, visible ? shown : hidden, className)}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </div>
  )
}
