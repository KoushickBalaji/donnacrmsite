'use client'

import Link from 'next/link'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList } from '../components/FaqList'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { crmForSoloB2BSalesFaqs } from './crm-for-solo-b2b-sales-data'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

export function CrmForSoloB2BSalesPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Solo B2B Sales CRM</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                A solo B2B sales CRM inside Gmail
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Track deals and next steps from the same place you're selling: your inbox. Keep deal
                context next to real threads so follow-ups don't slip.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_solo_sales_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/gmail-crm">Gmail CRM overview</Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/70">
                Free trial · No credit card · Uninstall anytime
              </p>
            </Reveal>

            <Reveal durationMs={500}>
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                <img
                  src="/screenshots/Pipeline%20V2.png"
                  alt="Solo sales deal stages tracked in a pipeline"
                  className="w-full object-contain"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Problem -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <Reveal>
              <Eyebrow>The problem</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Why solo sellers lose deals
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  'No clear next step after a call',
                  'Follow-ups spread across threads, notes, and calendar reminders',
                  "Deal status isn't updated while it's fresh",
                  'Important context gets lost when a thread goes quiet',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                <p className="text-base font-bold text-foreground">
                  Thread to deal to next step
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The fastest way to keep your CRM accurate is to update it while you're already in
                  the conversation. Capture the deal stage, add a note, and create the next task in
                  the same flow.
                </p>
                <div className="mt-5 text-sm">
                  <Link
                    href="/ai-gmail-crm"
                    className="text-primary hover:underline"
                  >
                    See how the assistant helps
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Deal stages -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Pipeline stages</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Deal stages you can copy
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Keep the pipeline simple. If you can't remember the stage definitions, there are too
              many stages.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Lead',
                body: 'A real person you are actively talking to. Capture who they are and why they might buy.',
              },
              {
                title: 'Meeting',
                body: 'Discovery call scheduled or completed. Log what matters and set the next follow-up task.',
              },
              {
                title: 'Proposal',
                body: 'Proposal or quote sent. Track the decision date and create a reminder to follow up.',
              },
              {
                title: 'Negotiation',
                body: 'Pricing, scope, or terms are in motion. Keep the latest state in one place so you do not reopen old threads.',
              },
              {
                title: 'Closed',
                body: 'Won or lost. Capture the outcome and the next step (onboarding, invoice, or a future check-in).',
              },
            ].map((stage, index) => (
              <Reveal key={stage.title} delayMs={index * 80}>
                <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-base font-bold text-foreground">{stage.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={400}>
            <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
              Tip: If you sell a longer cycle, add one stage (for example, Legal or Procurement).
              If you sell a shorter cycle, remove one stage and keep it even simpler.
            </p>
          </Reveal>
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              FAQs
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqList items={crmForSoloB2BSalesFaqs} />
          </div>

          <Reveal delayMs={80}>
            <div className="mt-12 rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
              <p className="text-base font-bold text-foreground">Related pages</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Deeper dives for solo sellers evaluating a Gmail-native workflow.
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  Gmail CRM overview
                </Link>
                <Link
                  href="/resources/track-deals-from-email-threads"
                  className="text-primary hover:underline"
                >
                  Track deals from email threads
                </Link>
                <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                  AI assistant (human-in-the-loop)
                </Link>
                <Link
                  href="/resources/follow-up-email-templates-solo-b2b-sales"
                  className="text-primary hover:underline"
                >
                  Follow-up email templates
                </Link>
                <Link href="/email-tracking-in-gmail" className="text-primary hover:underline">
                  Email tracking in Gmail
                </Link>
                <Link href="/pricing" className="text-primary hover:underline">
                  Pricing
                </Link>
                <Link href="/resources" className="text-primary hover:underline">
                  Resources
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Explore more (dark) -- */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-3xl font-bold text-primary-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Keep exploring
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Learn more about how Donna works, or dive into a specific workflow.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'How it works', href: '/how-it-works' },
              { label: 'All features', href: '/features' },
              { label: 'Track deals from threads', href: '/resources/track-deals-from-email-threads' },
              { label: 'AI assistant', href: '/ai-gmail-crm' },
              { label: 'Follow-up email templates', href: '/resources/follow-up-email-templates-solo-b2b-sales' },
              { label: 'Pricing', href: '/pricing' },
            ].map((link, index) => (
              <Reveal key={link.href} delayMs={index * 60}>
                <Link
                  href={link.href}
                  className="block rounded-xl bg-white/10 px-5 py-4 text-sm font-semibold text-primary-foreground ring-1 ring-white/[0.08] transition-all duration-200 hover:bg-white/[0.15] hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={360}>
            <div className="mx-auto mt-10 max-w-md text-center">
              <p className="text-sm text-primary-foreground/60">Ready to try it?</p>
              <div className="mt-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg shadow-black/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_solo_sales_bottom_cta' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
