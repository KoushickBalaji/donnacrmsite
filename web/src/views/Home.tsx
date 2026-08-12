'use client'

import { useEffect } from 'react'
import { useScrollSnap } from '../lib/useScrollSnap'
import {
  ArrowRight,
  Chrome,
  History,
  Inbox,
  Kanban,
  ListChecks,
  Settings,
  ShieldCheck,
  User,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { DONNA_PRODUCT_FACTS } from '../lib/productFacts'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

const cwsReviews = [
  {
    author: 'Daniela James',
    stars: 5,
    body: 'Feels like having a simple CRM without needing another tab or complicated software. Everything stays inside Gmail where I already work.',
  },
  {
    author: 'Dominic Zeabur',
    stars: 4,
    body: 'Nice tool if live in Gmail all day. Tasks, contacts, and notes are all connected to the email thread.',
  },
  {
    author: 'Williams',
    stars: 5,
    body: 'Pretty cool idea - it turns Gmail into a mini CRM.',
  },
]

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < rating ? 'text-brand-orange' : 'text-border'}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

const surfaceTileClassName =
  'h-full min-h-[200px] rounded-[20px] bg-card p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-[220ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]'

function IconBubble({ Icon }: { Icon: typeof Inbox }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-blue/5 text-brand-blue shadow-sm">
      <Icon className="h-5 w-5" />
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

  useScrollSnap()

  return (
    <>
      {/* -- Hero -- */}
      <section
        data-snap-section
        className="donna-hero-drift relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-background"
      >
        {/* Main hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-6 pt-8 pb-6 lg:px-10 lg:pt-12 lg:pb-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                  style={{ letterSpacing: '-0.02em' }}>
                The CRM you&apos;ll actually&nbsp;use
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Donna lives inside Gmail - right next to your conversations.
                Track deals, follow-ups, and contacts without switching tabs
                or learning new&nbsp;software.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'home_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="group transition-all duration-200" asChild>
                  <Link href="/how-it-works">
                    See how it works
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                {DONNA_PRODUCT_FACTS.trialDays}-day free trial &middot; $
                {DONNA_PRODUCT_FACTS.monthlyPriceUsd}/month after trial &middot; Cancel anytime
              </p>
            </Reveal>

            <Reveal durationMs={500}>
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-2xl shadow-black/10 ring-1 ring-black/[0.04]">
                <img
                  src="/stock/marquee-promo.jpg"
                  alt="Donna CRM in action"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Trust strip - anchored at bottom of viewport */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-8 lg:px-10">
          <Reveal delayMs={300}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground/70">
              <span className="flex items-center gap-1.5">
                <Chrome className="h-3.5 w-3.5" />
                Chrome Extension
              </span>
              <span className="hidden h-3 w-px bg-border sm:block" aria-hidden />
              <span>Works with Google Workspace &amp; personal Gmail</span>
              <span className="hidden h-3 w-px bg-border sm:block" aria-hidden />
              <span>Installs in 30 seconds</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- The Problem -- */}
      <section
        data-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-primary py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}>
              Gmail wasn&apos;t built to manage relationships
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-primary-foreground/60">
              It handles email brilliantly. But tracking who you talked to, what you
              promised, and what happens next? That&apos;s where things fall&nbsp;apart.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delayMs={0} durationMs={400}>
              <div className={surfaceTileClassName}>
                <IconBubble Icon={Inbox} />
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  Follow-ups vanish
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-foreground/65">
                  You meant to circle back. That thread is now buried under
                  hundreds of emails and the deal goes&nbsp;cold.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={80} durationMs={400}>
              <div className={surfaceTileClassName}>
                <IconBubble Icon={History} />
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  Context lives in your head
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-foreground/65">
                  Who is this person? What did you discuss last? You&apos;re scrolling
                  through months of threads to piece it&nbsp;together.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={160} durationMs={400}>
              <div className={surfaceTileClassName}>
                <IconBubble Icon={Kanban} />
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  CRMs break your flow
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-foreground/65">
                  You&apos;re mid-conversation and need to switch tabs to update
                  your CRM. So you don&apos;t. And the data&nbsp;rots.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={240} durationMs={400}>
              <div className={surfaceTileClassName}>
                <IconBubble Icon={ListChecks} />
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  Deals have no&nbsp;home
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-foreground/65">
                  Notes in spreadsheets, stages in your head, context scattered
                  across threads. Nothing connects&nbsp;back.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- How Donna works -- */}
      <section
        data-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-background py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}>
                Everything you need, nothing you&nbsp;don&apos;t
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Donna adds a CRM sidebar right inside Gmail. See contact history,
                track deals, and set follow-ups - all without opening
                another&nbsp;app.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/product"
                  className="group inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Explore the product
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="group inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  See how it works
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <IconBubble Icon={Zap} />
                  <h3 className="mt-4 text-base font-bold text-foreground">Zero setup</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Install the extension and it just works. No integrations to configure, no data to&nbsp;import.
                  </p>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <IconBubble Icon={User} />
                  <h3 className="mt-4 text-base font-bold text-foreground">Built for solo operators</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Founders, freelancers, recruiters, consultants - anyone who manages relationships from their&nbsp;inbox.
                  </p>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <IconBubble Icon={Inbox} />
                  <h3 className="mt-4 text-base font-bold text-foreground">Lives in Gmail</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    No new tabs, no context switching. Your CRM data appears right next to your&nbsp;conversations.
                  </p>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <IconBubble Icon={Settings} />
                  <h3 className="mt-4 text-base font-bold text-foreground">Stays out of your way</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    No bloated dashboards or 50-field forms. Donna keeps things fast, simple, and&nbsp;focused.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Security & Trust -- */}
      <section
        data-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-ink-deep py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
            <Reveal>
              <div className="mx-auto w-fit rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 sm:mx-0">
                <img
                  src="/esof-shield.png"
                  alt="CASA Security Certification by TAC Security"
                  width="180"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <h2 className="text-3xl font-bold text-white sm:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}>
                Your data, handled with&nbsp;care
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
                A CRM sees your contacts, your conversations, your deals. That&apos;s
                a lot of trust. Donna has earned CASA certification through an independent
                security audit by TAC Security - the same standard Google requires
                for extensions that access sensitive&nbsp;data.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/40">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Third-party audited
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  CASA certified
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Industry-standard encryption
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Reviews -- */}
      <section
        data-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-muted py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground shadow-sm ring-1 ring-black/[0.06]">
              <Chrome className="h-3.5 w-3.5 text-brand-blue" />
              Featured on Chrome Web Store
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="text-5xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
                {DONNA_PRODUCT_FACTS.ratingValue}
              </span>
              <div className="text-left">
                <div className="flex gap-0.5 text-lg text-brand-orange">★★★★★</div>
                <p className="text-sm text-muted-foreground">
                  {DONNA_PRODUCT_FACTS.ratingCount} ratings
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {cwsReviews.map((review, i) => (
              <Reveal key={review.author} delayMs={i * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04]">
                  <StarRating rating={review.stars} />
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground">
                    &ldquo;{review.body}&rdquo;
                  </p>
                  <p className="mt-5 text-sm font-medium text-muted-foreground">{review.author}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <a
              href={`${DONNA_PRODUCT_FACTS.chromeWebStoreUrl}/reviews`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground/70 underline-offset-2 hover:text-muted-foreground hover:underline"
            >
              Read all reviews on Chrome Web Store
            </a>
          </Reveal>
        </div>
      </section>

      {/* -- Final CTA -- */}
      <section data-snap-section className="bg-background py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}>
              See Donna in your inbox today
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Install the Chrome extension, open Gmail, and you&apos;re up and running.
              No configuration, no onboarding calls, no credit card.
            </p>
            <div className="mt-8">
              <Button size="lg" className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'home_final_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCtaLabel}
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {DONNA_PRODUCT_FACTS.trialDays}-day free trial &middot; $
              {DONNA_PRODUCT_FACTS.monthlyPriceUsd}/month after trial &middot; Cancel anytime
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
