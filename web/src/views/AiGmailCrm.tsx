'use client'

import Link from 'next/link'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList } from '../components/FaqList'
import { ResourceCardGrid } from '../components/ResourceCardGrid'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { aiGmailCrmFaqs } from './ai-gmail-crm-data'

const primaryCtaLabel = 'Try the AI assistant - Free Trial'

export function AiGmailCrmPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>AI Gmail CRM</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                An AI assistant that turns conversations into next steps
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Donna CRM pairs a Gmail-native CRM with an assistant that helps you move faster-while
                keeping you in control.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'ai_gmail_crm_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/gmail-crm">What is a Gmail CRM?</Link>
                </Button>
              </div>

              <div className="mt-8 rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04]">
                <p className="text-sm font-bold text-foreground">In plain English</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Donna is a Gmail-native CRM for individuals, with an assistant that helps you
                  summarize, draft, and capture next steps-without taking action behind your back.
                </p>
              </div>
            </Reveal>

            <Reveal durationMs={500}>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                  <img
                    src="/screenshots/Overview%20V2.png"
                    alt="Donna CRM AI assistant in the Gmail sidebar"
                    className="w-full object-contain"
                    loading="eager"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                  <img
                    src="/screenshots/Context%20Bar%20V2.png"
                    alt="Donna CRM context sidebar inside Gmail"
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Human-in-the-loop -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Human-in-the-loop</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              What "human-in-the-loop" means here
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              "Agentic" only matters if it's safe. The goal is simple: the assistant helps you
              prepare actions quickly, and you confirm the final outcome.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Grounded in context',
                body: 'Work where you already are: a real thread, a real contact, and a real next step.',
              },
              {
                title: "Suggests, doesn't assume",
                body: 'Get drafts and recommendations you can accept, edit, or ignore.',
              },
              {
                title: 'You stay in control',
                body: 'You review what gets sent or saved-especially anything client-facing.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80}>
                <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-base font-bold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Practical examples -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <Reveal>
              <Eyebrow>Use cases</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Practical examples inside Gmail
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Use the assistant where it saves time: summarizing, drafting, and converting
                conversations into clear next steps.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Summarize a long thread before you reply',
                  'Draft a follow-up and rewrite it in your voice',
                  'Create tasks for next steps and follow-ups',
                  'Capture deal notes and update status after a meeting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href="/features" className="text-primary hover:underline">
                  Explore features
                </Link>
                <Link href="/inbox-onboarding" className="text-primary hover:underline">
                  Inbox onboarding
                </Link>
                <Link href="/email-tracking-in-gmail" className="text-primary hover:underline">
                  Email tracking
                </Link>
                <Link href="/pricing" className="text-primary hover:underline">
                  Pricing
                </Link>
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy
                </Link>
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="space-y-6">
                <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                  <p className="text-base font-bold text-foreground">Inbox onboarding</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    If you want a faster starting point, ask the assistant to recommend a lightweight
                    setup from your real inbox. It can propose pipelines, contacts, and next step
                    tasks - you review before anything is created.
                  </p>
                  <p className="mt-4 text-sm">
                    <Link href="/inbox-onboarding" className="text-primary hover:underline">
                      Learn about inbox onboarding
                    </Link>
                  </p>
                </div>

                <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                  <p className="text-base font-bold text-foreground">Accuracy + privacy note</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    AI suggestions can be incorrect. Avoid sharing sensitive information you wouldn't
                    put in an email, and always review drafts before you send or save changes.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    For details about data handling and permissions, see our{' '}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Resource articles -- */}
      <ResourceCardGrid
        title="More on AI workflows"
        description="If you are evaluating human-in-the-loop AI, these guides explain what to expect and how to keep control while moving faster."
        slugs={[
          'what-is-an-agentic-crm',
          'keep-crm-updated-without-manual-data-entry',
          'inbox-to-pipeline',
        ]}
      />

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
            <FaqList items={aiGmailCrmFaqs} />
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
              { label: 'Gmail CRM overview', href: '/gmail-crm' },
              { label: 'Inbox onboarding', href: '/inbox-onboarding' },
              { label: 'What is an agentic CRM?', href: '/resources/what-is-an-agentic-crm' },
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
                    href={chromeWebStoreInstallUrl({ content: 'ai_gmail_crm_bottom_cta' })}
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
