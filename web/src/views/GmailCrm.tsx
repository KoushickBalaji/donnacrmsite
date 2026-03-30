'use client'

import Link from 'next/link'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList } from '../components/FaqList'
import { ResourceCardGrid } from '../components/ResourceCardGrid'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { gmailCrmFaqs } from './gmail-crm-data'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

export function GmailCrmPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Gmail CRM</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Manage contacts, deals, and follow-ups without leaving Gmail
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Donna CRM is a Gmail-native CRM for solo operators. Keep relationship context next
                to the conversation-and capture next steps before they slip.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'gmail_crm_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">See pricing</Link>
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
                  alt="Donna CRM running in the Gmail sidebar"
                  className="w-full object-contain"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- What is a Gmail CRM? -- text left / Contacts screenshot right */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is a Gmail CRM?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A Gmail CRM helps you run a simple client or deal workflow from your inbox. Instead
                of switching tools, you keep contact context, deal stage, and tasks alongside real
                email threads.
              </p>
              <p className="mt-4 text-muted-foreground">
                Donna CRM is built for individuals who want a lightweight system: enough structure
                to stay consistent, without the overhead of a traditional CRM.
              </p>

              <div className="mt-8 rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04]">
                <p className="text-sm font-bold text-foreground">Best for</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Consultants, freelancers, and solo B2B sellers who live in Gmail.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link href="/crm-for-consultants" className="text-primary hover:underline">
                    CRM for consultants
                  </Link>
                  <Link href="/crm-for-freelancers" className="text-primary hover:underline">
                    CRM for freelancers
                  </Link>
                  <Link
                    href="/crm-for-solo-b2b-sales"
                    className="text-primary hover:underline"
                  >
                    CRM for solo sales
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={80} durationMs={500}>
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                <img
                  src="/screenshots/Contacts%20V2.png"
                  alt="Contact management inside Gmail"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Workflow -- Pipeline screenshot left / steps right (flipped) */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal durationMs={500}>
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                <img
                  src="/screenshots/Pipeline%20V2.png"
                  alt="Pipeline tracking inside Gmail"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <Eyebrow>How it works</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                A workflow that stays in your inbox
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Keep your process simple and repeatable. A good Gmail CRM is less about fields, and
                more about capturing the next step consistently.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Thread to contact',
                    body: 'Turn real conversations into a contact record with notes and context.',
                  },
                  {
                    title: 'Contact to deal stage',
                    body: "Track what's happening right now: lead, proposal, active, renewal.",
                  },
                  {
                    title: 'Deal stage to next step',
                    body: 'Capture follow-ups as tasks so nothing gets forgotten.',
                  },
                ].map((step) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
                    <div>
                      <p className="text-sm font-bold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- What you can track -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              What you can track in Donna
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Start with one real thread. As you go, add just enough structure to keep your
              follow-ups consistent and your context easy to find.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Contacts', body: 'Keep relationship context next to the conversation.' },
              { title: 'Pipelines', body: 'Use stages as a simple "where are we?" truth.' },
              { title: 'Tasks', body: 'Capture next steps before you close the tab.' },
              { title: 'Tracking', body: 'Use opens/clicks as signals - not guarantees.' },
            ].map((card, index) => (
              <Reveal key={card.title} delayMs={index * 80}>
                <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-base font-bold text-foreground">{card.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={320}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link href="/features" className="text-primary hover:underline">
                Explore features
              </Link>
              <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                How the AI assistant helps
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
              <Link href="/resources" className="text-primary hover:underline">
                Resources
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Resource articles -- */}
      <ResourceCardGrid
        sectionClassName="bg-background py-20 lg:py-28"
        title="Popular Gmail CRM guides"
        description="Practical templates and checklists to help you build a lightweight system that stays updated while you work in Gmail."
        slugs={[
          'personal-crm-inside-gmail-setup',
          'follow-up-system-in-gmail',
          'gmail-crm-extension-checklist',
        ]}
      />

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
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Quick answers for common "is this for me?" questions.
            </p>
          </Reveal>
          <div className="mt-10">
            <FaqList items={gmailCrmFaqs} />
          </div>
          <Reveal delayMs={80}>
            <p className="mt-8 text-sm text-muted-foreground">
              For data and privacy details, see our{' '}
              <Link className="text-primary hover:underline" href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
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
              { label: 'CRM for consultants', href: '/crm-for-consultants' },
              { label: 'CRM for freelancers', href: '/crm-for-freelancers' },
              { label: 'CRM for solo sales', href: '/crm-for-solo-b2b-sales' },
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
                    href={chromeWebStoreInstallUrl({ content: 'gmail_crm_bottom_cta' })}
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
