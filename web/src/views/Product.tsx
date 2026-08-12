'use client'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useScrollSnap } from '../lib/useScrollSnap'


export function ProductPage() {
  const showcaseItems = useMemo(
    () =>
      [
        {
          id: 'pipelines',
          label: 'Pipelines',
          badge: 'Task tracking',
          title: 'Simple pipelines',
          description:
            'Stage-based boards that keep every deal moving. Drag, drop, done.',
          screenshotSrc: '/screenshots/Pipeline%20V2.png',
          screenshotAlt: 'Pipeline tracking in Donna CRM',
        },
        {
          id: 'overview',
          label: 'Overview',
          title: 'Your CRM dashboard inside Gmail',
          description:
            'Tasks, AI summaries, and campaign performance - all in one view without leaving your inbox.',
          screenshotSrc: '/screenshots/Overview%20V2.png',
          screenshotAlt: 'Donna CRM overview dashboard inside Gmail',
        },
        {
          id: 'mail-merge',
          label: 'Mail merge',
          title: 'Mail merge campaigns',
          description:
            'Send personalized messages to your contacts in bulk. Templates keep your voice consistent.',
          screenshotSrc: '/screenshots/Campaigns%20V2.png',
          screenshotAlt: 'Campaigns in Donna CRM',
        },
        {
          id: 'context',
          label: 'Contact context',
          title: 'Full context at a glance',
          description:
            'Notes, past interactions, deal history, and tags - all visible in the sidebar while you read the thread.',
          screenshotSrc: '/screenshots/Context%20Bar%20V2.png',
          screenshotAlt: 'Contact context bar in Donna CRM',
        },
      ] as const,
    [],
  )

  const [activeId, setActiveId] = useState<(typeof showcaseItems)[number]['id']>(
    showcaseItems[0].id,
  )

  const activeIndex = useMemo(
    () => Math.max(0, showcaseItems.findIndex((item) => item.id === activeId)),
    [activeId, showcaseItems],
  )

  useScrollSnap()

  /* -- Collapsing hero animation -- */
  const [collapsed, setCollapsed] = useState(false)
  const prefersReducedMotion = useRef(false)
  const userInteracted = useRef(false)

  useEffect(() => {
    // Respect reduced-motion preference - skip animation entirely
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.current = mq.matches
    const timer = setTimeout(() => setCollapsed(true), mq.matches ? 0 : 1800)
    return () => clearTimeout(timer)
  }, [])

  /* -- Auto-cycle tabs after hero collapses -- */
  useEffect(() => {
    if (!collapsed || prefersReducedMotion.current) return

    // Wait a beat after collapse before starting the cycle
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (userInteracted.current) {
          clearInterval(interval)
          return
        }
        setActiveId((prev) => {
          const currentIndex = showcaseItems.findIndex((item) => item.id === prev)
          const nextIndex = (currentIndex + 1) % showcaseItems.length
          return showcaseItems[nextIndex].id
        })
      }, 3500)

      // Store interval id so we can clean up
      intervalRef.current = interval
    }, 800)

    return () => {
      clearTimeout(startDelay)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [collapsed, showcaseItems])

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  /** User clicked a tab - stop auto-cycling permanently */
  const handleTabClick = (id: (typeof showcaseItems)[number]['id']) => {
    userInteracted.current = true
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setActiveId(id)
  }

  /** Navigate to prev/next slide */
  const navigateSlide = (direction: 'prev' | 'next') => {
    userInteracted.current = true
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setActiveId((prev) => {
      const currentIdx = showcaseItems.findIndex((item) => item.id === prev)
      const nextIdx =
        direction === 'next'
          ? (currentIdx + 1) % showcaseItems.length
          : (currentIdx - 1 + showcaseItems.length) % showcaseItems.length
      return showcaseItems[nextIdx].id
    })
  }

  return (
    <>
      {/* -- Hero + Feature showcase -- */}
      <section data-snap-section className="donna-hero-drift relative overflow-hidden bg-background pt-2 pb-6 lg:pt-4 lg:pb-10">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10">

          {/* -- Expanded hero (fades out) -- */}
          <div
            className="overflow-hidden motion-reduce:!transition-none"
            style={{
              maxHeight: collapsed ? '0px' : '300px',
              opacity: collapsed ? 0 : 1,
              transition:
                'max-height 600ms cubic-bezier(0.4,0,0.2,1), opacity 400ms ease',
            }}
            aria-hidden={collapsed}
          >
            <div className="pb-6 pt-4 text-center sm:pb-8 lg:pt-6">
              <h1
                className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Your inbox, upgraded
              </h1>
              <p className="mx-auto mt-3 max-w-lg text-lg text-muted-foreground sm:text-xl">
                Contacts, pipelines, and campaigns - all inside Gmail.
              </p>
            </div>
          </div>

          {/* -- Collapsed bar (fades in) -- */}
          <div
            className="overflow-hidden motion-reduce:!transition-none"
            style={{
              maxHeight: collapsed ? '60px' : '0px',
              opacity: collapsed ? 1 : 0,
              transition:
                'max-height 600ms cubic-bezier(0.4,0,0.2,1), opacity 400ms 200ms ease',
            }}
            aria-hidden={!collapsed}
          >
            <div className="pb-2">
              <p
                className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
                style={{ letterSpacing: '-0.01em' }}
              >
                Your inbox, upgraded
              </p>
            </div>
          </div>

          {/* Feature tabs + screenshot - the main event */}
          <div className="mt-1">
            <div className="border-b border-border">
              <div className="flex gap-6 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {showcaseItems.map((item) => {
                  const active = item.id === activeId
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleTabClick(item.id)}
                      className={[
                        'flex-shrink-0 border-b-2 px-1 pb-2 pt-1.5 text-sm font-semibold transition-colors',
                        active
                          ? 'border-brand-blue text-foreground'
                          : 'border-transparent text-muted-foreground hover:text-foreground',
                      ].join(' ')}
                      aria-current={active ? 'true' : undefined}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Screenshot + description side by side */}
            {/* ~170px accounts for header + collapsed bar + tabs + gap above */}
            <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8" style={{ minHeight: 'calc(100vh - 190px)' }}>
              {/* Screenshot slider (left, ~70%) with nav arrows */}
              <div className="group/carousel relative lg:flex-[7] lg:self-stretch">
                <div className="h-full overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-lg ring-1 ring-black/[0.04]">
                  <div
                    className="flex h-full motion-reduce:!transition-none"
                    style={{
                      width: `${showcaseItems.length * 100}%`,
                      transform: `translateX(-${activeIndex * (100 / showcaseItems.length)}%)`,
                      transition: 'transform 500ms cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    {showcaseItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex h-full w-full items-center justify-center p-3"
                        style={{ flex: `0 0 ${100 / showcaseItems.length}%` }}
                      >
                        <img
                          src={item.screenshotSrc}
                          alt={item.screenshotAlt}
                          className="h-full w-full object-contain"
                          loading="eager"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev strip */}
                <button
                  type="button"
                  onClick={() => navigateSlide('prev')}
                  className="absolute inset-y-0 left-0 flex w-10 items-center justify-center rounded-l-2xl bg-black/0 backdrop-blur-[2px] transition-all duration-200 hover:bg-black/[0.06] opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground/50 transition-colors duration-200 group-hover/carousel:[&]:text-foreground/80" />
                </button>

                {/* Next strip */}
                <button
                  type="button"
                  onClick={() => navigateSlide('next')}
                  className="absolute inset-y-0 right-0 flex w-10 items-center justify-center rounded-r-2xl bg-black/0 backdrop-blur-[2px] transition-all duration-200 hover:bg-black/[0.06] opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-5 w-5 text-foreground/50 transition-colors duration-200 group-hover/carousel:[&]:text-foreground/80" />
                </button>
              </div>

              {/* Description panel (right, ~30%) - crossfade */}
              <div className="relative min-h-[120px] lg:flex-[3] lg:pt-4">
                {showcaseItems.map((item, i) => (
                  <div
                    key={item.id}
                    className="lg:absolute lg:inset-0 motion-reduce:!transition-none"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transition: 'opacity 350ms ease',
                      pointerEvents: i === activeIndex ? 'auto' : 'none',
                    }}
                    aria-hidden={i !== activeIndex}
                  >
                    <p className="text-xl font-bold text-foreground sm:text-2xl">
                      {item.title}
                    </p>
                    {'badge' in item && item.badge ? (
                      <span className="mt-2 inline-flex items-center rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-blue">
                        {item.badge}
                      </span>
                    ) : null}
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- CTA -- */}
      <section data-snap-section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">Curious?</Eyebrow>
            <h2
              className="text-3xl font-bold text-primary-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              See how Donna works
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/60">
              A quick walkthrough of how Donna fits into your Gmail
              workflow - from install to first deal.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="group shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <Link href="/how-it-works">
                  How it works
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/integrations">Google integrations</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
