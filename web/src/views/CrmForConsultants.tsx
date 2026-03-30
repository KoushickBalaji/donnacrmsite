'use client'

import Link from 'next/link'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList } from '../components/FaqList'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { crmForConsultantsFaqs } from './crm-for-consultants-data'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

export function CrmForConsultantsPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>CRM for Consultants</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                CRM for consultants inside Gmail
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Stay on top of follow-ups, engagement status, and client context without switching
                tabs. Built for solo consultants who live in Gmail.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_consultants_hero_primary' })}
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
                  src="/screenshots/Context%20Bar%20V2.png"
                  alt="Consulting client context shown next to a Gmail thread"
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
                Common consulting workflow problems
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  'Follow-ups get buried in threads',
                  'Engagement status lives in docs or memory',
                  "Deliverables and next steps aren't captured consistently",
                  'A "team CRM" is too heavy for a solo workflow',
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
                  The consultant-friendly loop
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thread to client context to engagement stage to next step. The goal isn't perfect
                  data. It's consistent follow-through.
                </p>
                <div className="mt-5 text-sm">
                  <Link href="/pricing" className="text-primary hover:underline">
                    See pricing
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Pipeline stages -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Pipeline stages</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Use pipelines as engagement stages
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              A simple consulting pipeline keeps you honest about where each client stands:
              Discovery - Proposal - Active - Renewal.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              {[
                { title: 'Discovery', body: 'Early conversations and fit assessment.' },
                { title: 'Proposal', body: 'Scope, pricing, and decision timelines.' },
                { title: 'Active', body: 'Deliverables, check-ins, and next milestones.' },
                { title: 'Renewal', body: 'Retainer renewal or follow-on work.' },
              ].map((stage, index) => (
                <Reveal key={stage.title} delayMs={index * 80}>
                  <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <p className="text-base font-bold text-foreground">{stage.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {stage.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal durationMs={500} delayMs={160}>
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                <img
                  src="/screenshots/Pipeline%20V2.png"
                  alt="Consulting engagement stages shown in a pipeline"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Tasks & related pages -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <Reveal>
              <Eyebrow>Follow-ups</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Tasks and follow-ups tied to clients
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Consulting work is follow-up work: scheduling, confirming, nudging, and closing the
                loop. Capture tasks right where the conversation happens.
              </p>
              <p className="mt-4 text-muted-foreground">
                Want help drafting the follow-up? See{' '}
                <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                  AI Gmail CRM
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                <p className="text-base font-bold text-foreground">Related pages</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  If you're evaluating Donna, these pages fill in the details.
                </p>
                <div className="mt-4 flex flex-col gap-2.5 text-sm">
                  <Link href="/gmail-crm" className="text-primary hover:underline">
                    Gmail CRM overview
                  </Link>
                  <Link
                    href="/resources/gmail-crm-for-consultants-workflow"
                    className="text-primary hover:underline"
                  >
                    Consultant Gmail CRM workflow
                  </Link>
                  <Link
                    href="/resources/consultant-pipeline-stages"
                    className="text-primary hover:underline"
                  >
                    Consultant pipeline stages
                  </Link>
                  <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                    AI assistant (human-in-the-loop)
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
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="bg-background py-20 lg:py-28">
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
            <FaqList items={crmForConsultantsFaqs} />
          </div>
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
              { label: 'Consultant workflow guide', href: '/resources/gmail-crm-for-consultants-workflow' },
              { label: 'AI assistant', href: '/ai-gmail-crm' },
              { label: 'Email tracking', href: '/email-tracking-in-gmail' },
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
              <p className="text-sm text-primary-foreground/60">
                Ready to try it?
              </p>
              <div className="mt-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg shadow-black/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_consultants_bottom_cta' })}
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
