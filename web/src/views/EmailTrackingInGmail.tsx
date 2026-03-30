'use client'

import Link from 'next/link'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList } from '../components/FaqList'
import { ResourceCardGrid } from '../components/ResourceCardGrid'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { emailTrackingFaqs } from './email-tracking-data'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

export function EmailTrackingInGmailPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Email Tracking</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Email tracking in Gmail (opens & clicks)
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Use engagement signals to time follow-ups better-without leaving your inbox. Donna
                CRM brings tracking into Gmail alongside contacts and pipelines.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'email_tracking_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/features">See all features</Link>
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
                  alt="Donna CRM sidebar inside Gmail"
                  className="w-full object-contain"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- What is email tracking? -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is email tracking?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Email tracking helps you see opens and tracked link clicks so you can follow up with
                better timing. It's most useful for proposals, important follow-ups, and outreach
                where timing matters.
              </p>
              <p className="mt-4 text-muted-foreground">
                Learn more about the Gmail-native workflow in our{' '}
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  Gmail CRM guide
                </Link>
                .
              </p>
              <p className="mt-4 text-muted-foreground">
                For a proposal-specific walkthrough, see{' '}
                <Link
                  href="/resources/email-tracking-for-proposals"
                  className="text-primary hover:underline"
                >
                  email tracking for proposals
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                <p className="text-base font-bold text-foreground">Use cases</p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Proposals: follow up after a likely read window',
                    'Cold outreach: focus on the threads with interest',
                    'Renewals: notice engagement before a deadline',
                    'Campaigns: understand aggregate engagement trends',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href="/crm-for-consultants" className="text-primary hover:underline">
                    Consultants
                  </Link>
                  <Link href="/crm-for-freelancers" className="text-primary hover:underline">
                    Freelancers
                  </Link>
                  <Link href="/crm-for-solo-b2b-sales" className="text-primary hover:underline">
                    Solo sales
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- How tracking works -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              How tracking works
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Opens',
                body: 'Donna includes a tracking image in emails you choose. When the recipient loads images, Donna records an open event.',
              },
              {
                title: 'Clicks',
                body: 'Donna tracks clicks on tracked links in your email so you can see interest in proposals, docs, and resources.',
              },
              {
                title: 'Reporting',
                body: 'View engagement alongside the thread so you can prioritize follow-ups and keep your pipeline up to date.',
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

      {/* -- Resource articles -- */}
      <ResourceCardGrid
        title="More tracking and follow-up guides"
        description="Use tracking as a signal, then follow up with a clear next step and a lightweight pipeline habit."
        slugs={[
          'email-tracking-for-proposals',
          'follow-up-system-in-gmail',
          'track-deals-from-email-threads',
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
            <FaqList items={emailTrackingFaqs} />
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
              { label: 'Email tracking for proposals', href: '/resources/email-tracking-for-proposals' },
              { label: 'Follow-up system templates', href: '/resources/follow-up-system-in-gmail' },
              { label: 'Gmail CRM overview', href: '/gmail-crm' },
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
                    href={chromeWebStoreInstallUrl({ content: 'email_tracking_bottom_cta' })}
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
