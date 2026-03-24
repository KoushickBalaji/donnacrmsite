import {
  ArrowRight,
  ClipboardList,
  Download,
  Inbox,
  Kanban,
  MailOpen,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { ScrollSnapActivator } from '../components/ScrollSnapActivator'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const surfaceTileClassName =
  'h-full min-h-[200px] rounded-[20px] bg-card p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-[220ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]'

const compactTileClassName =
  'h-full rounded-[20px] bg-card p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-[220ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
      {children}
    </p>
  )
}

function IconBubble({ Icon }: { Icon: typeof Inbox }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-blue/5 text-brand-blue shadow-sm">
      <Icon className="h-5 w-5" />
    </div>
  )
}

function LightBullet({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
      <span className="text-white/70">{children}</span>
    </li>
  )
}

export function HowItWorksPage() {
  return (
    <>
      <ScrollSnapActivator />

      {/* ── Hero + Setup ── */}
      <section
        data-snap-section
        className="donna-hero-drift relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-background py-16 lg:py-24"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - headline + CTAs */}
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
              <h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Up and running in 30&nbsp;seconds
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Install a Chrome extension, open Gmail, and your CRM is right
                there in the sidebar. No onboarding calls, no data migration,
                no learning&nbsp;curve.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'how_it_works_hero' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try it free
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link href="/features">
                    Explore features
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Free trial &middot; No credit card &middot; Uninstall anytime
              </p>
            </Reveal>

            {/* Right column - 4 setup steps */}
            <Reveal delayMs={100}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className={compactTileClassName}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBubble Icon={Download} />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </span>
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="text-lg font-bold text-foreground">Install Donna</h3>
                    <p className="text-[15px] leading-[1.6] text-foreground/70">
                      One click from the Chrome Web&nbsp;Store.
                    </p>
                  </div>
                </div>

                <div className={compactTileClassName}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBubble Icon={MailOpen} />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </span>
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="text-lg font-bold text-foreground">Open Gmail</h3>
                    <p className="text-[15px] leading-[1.6] text-foreground/70">
                      Donna is already waiting in the&nbsp;sidebar.
                    </p>
                  </div>
                </div>

                <div className={compactTileClassName}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBubble Icon={ShieldCheck} />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      3
                    </span>
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                      Grant permissions
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-foreground/70">
                      Two quick prompts. Nothing&nbsp;complicated.
                    </p>
                  </div>
                </div>

                <div className={compactTileClassName}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBubble Icon={Kanban} />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      4
                    </span>
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                      Start using Donna
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-foreground/70">
                      Deals, notes, and follow-ups - right where you&nbsp;reply.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Your inbox, transformed (dark) ── */}
      <section
        data-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-primary py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <Eyebrow>Inside your inbox</Eyebrow>
                <h2
                  className="text-3xl font-bold text-primary-foreground sm:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Everything you need, right where you&nbsp;work
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-primary-foreground/60">
                  Stop jumping between Gmail, a CRM, and a notes app. Donna keeps
                  everything attached to the conversation it belongs&nbsp;to.
                </p>

                <ul className="mt-6 space-y-3">
                  <LightBullet>
                    See who you&apos;re talking to - notes, tags, and history appear next to every thread
                  </LightBullet>
                  <LightBullet>
                    Turn any email into a deal and track it through your pipeline
                  </LightBullet>
                  <LightBullet>
                    Capture follow-ups with due dates so nothing falls through the cracks
                  </LightBullet>
                  <LightBullet>
                    Send targeted outreach and see who opens, clicks, and replies
                  </LightBullet>
                  <LightBullet>
                    Get AI-powered summaries and draft replies you can edit before sending
                  </LightBullet>
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    variant="secondary"
                    className="group"
                    asChild
                  >
                    <Link href="/features">
                      Explore features
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                    asChild
                  >
                    <Link href="/resources">Read the guides</Link>
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg ring-1 ring-white/[0.04]">
                <div className="p-4">
                  <img
                    src="/screenshots/Context%20Bar%20V2.png"
                    alt="Donna CRM showing contact context inside Gmail"
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Daily workflow ── */}
      <section
        data-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-background py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <Eyebrow>Your daily workflow</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                The routine that actually&nbsp;sticks
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Donna works because it fits the way you already work. Open your inbox,
                handle your conversations, and the CRM updates along the&nbsp;way.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className={surfaceTileClassName}>
                <div className="flex items-start justify-between gap-4">
                  <IconBubble Icon={Inbox} />
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    1
                  </span>
                </div>
                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Open a thread
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-foreground/70">
                    Click into any conversation and Donna pulls up everything
                    you know about that&nbsp;contact.
                  </p>
                </div>
              </div>

              <div className={surfaceTileClassName}>
                <div className="flex items-start justify-between gap-4">
                  <IconBubble Icon={Users} />
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2
                  </span>
                </div>
                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Save context
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-foreground/70">
                    Jot down what matters while it&apos;s fresh. Notes and tags
                    are right there next&nbsp;time.
                  </p>
                </div>
              </div>

              <div className={surfaceTileClassName}>
                <div className="flex items-start justify-between gap-4">
                  <IconBubble Icon={ClipboardList} />
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    3
                  </span>
                </div>
                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Capture the next step
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-foreground/70">
                    Set a task or follow-up before you move on. Nothing
                    slips&nbsp;through.
                  </p>
                </div>
              </div>

              <div className={surfaceTileClassName}>
                <div className="flex items-start justify-between gap-4">
                  <IconBubble Icon={Kanban} />
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    4
                  </span>
                </div>
                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Review your pipeline
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-foreground/70">
                    See what&apos;s moving, what&apos;s stalled, and what needs
                    your&nbsp;attention.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-lg ring-1 ring-black/[0.04]">
              <div className="bg-muted/10 p-4">
                <img
                  src="/screenshots/Pipeline%20V2.png"
                  alt="Pipeline tracking in Donna CRM"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── AI + Trust ── */}
      <section
        data-snap-section
        className="flex min-h-[calc(100svh-4rem)] items-center bg-ink-deep py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="order-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg ring-1 ring-white/[0.04] lg:order-1">
                <div className="p-4">
                  <img
                    src="/screenshots/Overview%20V2.png"
                    alt="Donna CRM AI assistant in the Gmail sidebar"
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/25 to-brand-blue/10 text-brand-blue shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <Eyebrow>AI assistant</Eyebrow>
                <h2
                  className="text-3xl font-bold text-white sm:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Move faster without losing&nbsp;control
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  Donna&apos;s AI helps you move through your inbox faster. You always
                  review and edit before anything&nbsp;sends.
                </p>
                <ul className="mt-6 space-y-3">
                  <LightBullet>Get a quick summary before diving into a long thread</LightBullet>
                  <LightBullet>Generate a first draft, then tweak it in your own voice</LightBullet>
                  <LightBullet>
                    Turn conversations into tasks, notes, and deal updates automatically
                  </LightBullet>
                  <LightBullet>
                    Built with privacy in mind - your data is handled the way you&apos;d expect
                  </LightBullet>
                </ul>

                {/* Trust strip */}
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

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href="/integrations">Permissions &amp; integrations</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href="/privacy">Privacy policy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-snap-section className="bg-background py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Ready to try it?</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              See Donna in your inbox&nbsp;today
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Install the Chrome extension, open Gmail, and you&apos;re up and running.
              No configuration, no onboarding calls, no credit&nbsp;card.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a
                  href={chromeWebStoreInstallUrl({ content: 'how_it_works_bottom_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start your free trial
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Free trial &middot; No credit card &middot; Uninstall anytime
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
