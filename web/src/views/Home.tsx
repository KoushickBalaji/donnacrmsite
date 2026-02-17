'use client'

import { useEffect } from 'react'
import { History, Inbox, Kanban, ListChecks, Settings, User, Zap } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const primaryCtaLabel = 'Add to Gmail - Free Trial'
const stickyHeaderOffsetPx = 64

const surfaceTileClassName =
  'h-full min-h-[200px] rounded-[20px] bg-[#F7F8FA] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-[220ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]'

function IconBubble({ Icon }: { Icon: typeof Inbox }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
      <Icon className="h-5 w-5" />
    </div>
  )
}

function MiniTile({ Icon, label }: { Icon: typeof Inbox; label: string }) {
  return (
    <div className="flex h-full items-start gap-3 rounded-[18px] bg-white/70 p-5 ring-1 ring-black/[0.04]">
      <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <p className="pt-1 text-[15px] font-semibold leading-[1.4] text-foreground">
        {label}
      </p>
    </div>
  )
}

export function HomePage() {
  const router = useRouter()

  useEffect(() => {
    function applyHashRedirect() {
      const hash = window.location.hash
      if (hash === '#product') router.replace('/product')
      if (hash === '#how-it-works') router.replace('/how-it-works')
    }

    applyHashRedirect()
    window.addEventListener('hashchange', applyHashRedirect)
    return () => window.removeEventListener('hashchange', applyHashRedirect)
  }, [router])

  useEffect(() => {
    const root = document.documentElement
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointerQuery = window.matchMedia('(pointer: fine)')

    const updateHomeSnapMode = () => {
      const shouldEnableSnap = finePointerQuery.matches && !reducedMotionQuery.matches
      root.classList.toggle('home-scroll-snap', shouldEnableSnap)
      if (shouldEnableSnap) {
        root.style.setProperty('--home-snap-offset', `${stickyHeaderOffsetPx}px`)
      } else {
        root.style.removeProperty('--home-snap-offset')
      }
    }

    const attachMediaListener = (query: MediaQueryList, handler: () => void) => {
      query.addEventListener('change', handler)
      return () => query.removeEventListener('change', handler)
    }

    updateHomeSnapMode()
    const removeReducedMotionListener = attachMediaListener(reducedMotionQuery, updateHomeSnapMode)
    const removeFinePointerListener = attachMediaListener(finePointerQuery, updateHomeSnapMode)

    return () => {
      removeReducedMotionListener()
      removeFinePointerListener()
      root.classList.remove('home-scroll-snap')
      root.style.removeProperty('--home-snap-offset')
    }
  }, [])

  return (
    <>
      <section
        data-home-snap-section
        className="relative flex min-h-[calc(100svh-4rem)] items-center bg-background py-14 lg:py-20"
      >
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                A lightweight CRM that works inside Gmail
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Track deals, follow-ups, and contact context without leaving your inbox.
                Built for people who actually live in Gmail.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Best for founders, freelancers, agencies, recruiters, and consultants.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'home_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/how-it-works">See how it works</Link>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                No setup | No card needed for trial | Uninstall anytime
              </p>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
                <img
                  src="/stock/gmail.jpg"
                  alt="Gmail"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        data-home-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-[#F6F7F9] py-14 lg:py-20"
      >
        <div className="container">
          <Reveal>
            <div className="w-full">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Why Gmail alone isn't enough
              </h2>

              <div className="relative mt-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[32px]"
                >
                  <img
                    src="/stock/busy-woman.jpg"
                    alt=""
                    className="h-full w-full object-cover opacity-[0.16] saturate-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#F6F7F9]/85" />
                </div>

                <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <Reveal delayMs={0} durationMs={400}>
                    <div className={`${surfaceTileClassName} flex flex-col`}>
                      <div className="flex items-start justify-between gap-4">
                        <IconBubble Icon={Inbox} />
                      </div>

                      <div className="mt-5 flex flex-1 flex-col">
                        <p className="h-[3.5rem] overflow-hidden text-[22px] font-[650] leading-[1.2] text-foreground">
                          Follow-ups slip
                        </p>
                        <p className="mt-2 h-[4.8rem] overflow-hidden text-[15px] leading-[1.6] text-foreground/70">
                          Important conversations get buried. Next steps live in memory.
                        </p>
                        <p className="mt-auto h-[3.2rem] text-[15px] leading-[1.6] text-foreground">
                          Donna adds a clear next step to every thread.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delayMs={80} durationMs={400}>
                    <div className={`${surfaceTileClassName} flex flex-col`}>
                      <div className="flex items-start justify-between gap-4">
                        <IconBubble Icon={History} />
                      </div>

                      <div className="mt-5 flex flex-1 flex-col">
                        <p className="h-[3.5rem] overflow-hidden text-[22px] font-[650] leading-[1.2] text-foreground">
                          No relationship context
                        </p>
                        <p className="mt-2 h-[4.8rem] overflow-hidden text-[15px] leading-[1.6] text-foreground/70">
                          Gmail doesn't remember past conversations, deals, or notes.
                        </p>
                        <p className="mt-auto h-[3.2rem] text-[15px] leading-[1.6] text-foreground">
                          Donna keeps context inside the inbox.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delayMs={160} durationMs={400}>
                    <div className={`${surfaceTileClassName} flex flex-col`}>
                      <div className="flex items-start justify-between gap-4">
                        <IconBubble Icon={Kanban} />
                      </div>

                      <div className="mt-5 flex flex-1 flex-col">
                        <p className="h-[3.5rem] overflow-hidden text-[22px] font-[650] leading-[1.2] text-foreground">
                          CRMs break flow
                        </p>
                        <p className="mt-2 h-[4.8rem] overflow-hidden text-[15px] leading-[1.6] text-foreground/70">
                          Switching tools kills momentum. Tabs multiply and follow-ups stall.
                        </p>
                        <p className="mt-auto h-[3.2rem] text-[15px] leading-[1.6] text-foreground">
                          Donna stays in Gmail.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delayMs={240} durationMs={400}>
                    <div className={`${surfaceTileClassName} flex flex-col`}>
                      <div className="flex items-start justify-between gap-4">
                        <IconBubble Icon={ListChecks} />
                      </div>

                      <div className="mt-5 flex flex-1 flex-col">
                        <p className="h-[3.5rem] overflow-hidden text-[22px] font-[650] leading-[1.2] text-foreground">
                          No deal clarity
                        </p>
                        <p className="mt-2 h-[4.8rem] overflow-hidden text-[15px] leading-[1.6] text-foreground/70">
                          Deal stage, status, and notes end up scattered across threads and docs.
                        </p>
                        <p className="mt-auto h-[3.2rem] text-[15px] leading-[1.6] text-foreground">
                          Donna keeps deal status next to the conversation.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        data-home-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-background py-14 lg:py-20"
      >
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-[24px] bg-[#F7F8FA] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] lg:p-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h2 className="text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl">
                      Built to stay lightweight
                    </h2>
                    <p className="mt-4 text-[15px] leading-[1.6] text-foreground/70">
                      Donna is designed for people who need a simple system - without turning
                      relationship-tracking into a second job.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        href="/product"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Explore the product
                      </Link>
                      <Link
                        href="/gmail-crm"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Read: Gmail CRM
                      </Link>
                      <Link
                        href="/ai-gmail-crm"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Read: AI assistant
                      </Link>
                      <Link
                        href="/streak-crm-alternative"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Compare Donna vs Streak
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <MiniTile Icon={Settings} label="No setup or configuration" />
                    <MiniTile Icon={User} label="Designed for solo operators" />
                    <MiniTile Icon={Inbox} label="Works entirely inside Gmail" />
                    <MiniTile Icon={Zap} label="Fast and distraction-free" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        data-home-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-background py-14 lg:py-20"
      >
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-[24px] bg-[#F7F8FA] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] lg:p-12">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                  <div className="mx-auto w-fit flex-shrink-0 rounded-2xl bg-[#0B1220] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.14)] ring-1 ring-white/10 sm:mx-0">
                    <img
                      src="/esof-shield.png"
                      alt="ESOF Shield Certified"
                      width="150"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                      Rigorous testing. CASA certified.
                    </h2>
                    <p className="mt-4 text-[15px] leading-[1.6] text-foreground/70">
                      Donna has undergone rigorous third-party security testing and earned CASA
                      certification through an independent audit by TAC Security. Your data is stored and processed using industry standard methodologies.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-home-snap-section className="bg-[#F6F7F9] py-14 lg:py-20">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Try Donna CRM inside Gmail
            </h2>
            <p className="mt-4 text-muted-foreground">
              Install in under 2 minutes. No setup. Cancel anytime.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'home_final_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCtaLabel}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
