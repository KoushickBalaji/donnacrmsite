'use client'

import { ArrowRight, Check, Minus } from 'lucide-react'
import Link from 'next/link'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

type ComparisonCell = {
  title: string
  detail: string
}

type ComparisonRow = {
  label: string
  donna: ComparisonCell
  hubspot: ComparisonCell
}

const goodFitFor = [
  'You want a lightweight CRM that lives in Gmail',
  'You care more about follow-ups than dashboards',
  'You are solo and want minimal setup and maintenance',
  'You want AI assistance with confirmation, not automation by default',
] as const

const considerHubSpotIf = [
  'You want a full CRM platform and multi-team workflows',
  'You need advanced reporting and a larger tool ecosystem',
  'You are running a sales org with shared admin and processes',
] as const

const whyPeopleLookForAlternatives = [
  {
    title: 'The tool becomes the work',
    text: 'Full platforms can be powerful, but they often add overhead: more configuration, more places to check, more admin work.',
  },
  {
    title: 'You live in email, not in dashboards',
    text: 'If most selling and coordination happens in Gmail threads, an inbox-first CRM can feel faster than switching contexts all day.',
  },
  {
    title: 'You want a simpler follow-up system',
    text: 'For many solo operators, success is one habit: every active relationship has a clear next step and date.',
  },
] as const

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Primary workflow',
    donna: { title: 'Inbox-first', detail: 'Thread context and next steps inside Gmail.' },
    hubspot: { title: 'Platform-first', detail: 'A full CRM platform with many surfaces.' },
  },
  {
    label: 'Best fit',
    donna: { title: 'Individuals', detail: 'Solo operators who run relationship workflows in Gmail.' },
    hubspot: { title: 'Teams', detail: 'Sales and marketing orgs with shared processes.' },
  },
  {
    label: 'Setup and maintenance',
    donna: { title: 'Minimal', detail: 'Start small and keep it simple.' },
    hubspot: { title: 'More setup', detail: 'Often benefits from configuration and ops support.' },
  },
  {
    label: 'Follow-ups',
    donna: { title: 'Next-step driven', detail: 'Tasks tied to threads keep follow-ups visible.' },
    hubspot: { title: 'Process driven', detail: 'Often managed via CRM activities and workflows.' },
  },
  {
    label: 'AI assistance',
    donna: { title: 'Human-in-the-loop', detail: 'Drafts and suggestions; you confirm.' },
    hubspot: { title: 'Varies', detail: 'Depends on your stack and how you run operations.' },
  },
  {
    label: 'Reporting',
    donna: { title: 'Basic', detail: 'Simple visibility built for one-person workflows.' },
    hubspot: { title: 'Stronger', detail: 'More advanced reporting typical of a full platform.' },
  },
  {
    label: 'Collaboration',
    donna: { title: 'Not the focus', detail: 'Designed for individual use.' },
    hubspot: { title: 'Team oriented', detail: 'Built for shared visibility and coordination.' },
  },
] as const

export function HubSpotAlternativePage() {
  const primaryCtaLabel = 'Add Donna to Gmail'

  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <Eyebrow>HubSpot Alternative</Eyebrow>

              <h1
                className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                A lightweight HubSpot alternative for people who live in Gmail
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                HubSpot can be a strong choice when you want a full platform and team workflows.
                Donna is built for solo operators who want a Gmail-native follow-up system and
                relationship context next to the thread, with minimal setup.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    className="group"
                    href={chromeWebStoreInstallUrl({ content: 'hubspot_alt_hero' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#comparison">See comparison</a>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/70">Free trial - Minimal setup - Cancel anytime</p>

              <div className="mt-7 grid gap-6 text-left sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">Pick Donna if</p>
                  <div className="mt-3 space-y-2">
                    {goodFitFor.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-blue" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">Consider HubSpot if</p>
                  <div className="mt-3 space-y-2">
                    {considerHubSpotIf.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal durationMs={500} className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                <div className="bg-muted/30 px-4 pt-4 sm:px-6 sm:pt-6">
                  <p className="mb-3 text-xs font-semibold text-muted-foreground">
                    Donna inside Gmail
                  </p>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg border border-b-0 border-border bg-background">
                    <img
                      src="/screenshots/Context%20Bar%20V2.png"
                      alt="Donna CRM running in the Gmail sidebar"
                      className="h-full w-full scale-[1.06] object-cover object-right"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="px-4 pb-4 pt-3 sm:px-6 sm:pb-6">
                  <p className="text-sm text-muted-foreground">
                    Keep your follow-up loop close to the conversation: context, tasks, and next
                    steps in the sidebar.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Comparison table -- */}
      <section id="comparison" className="bg-muted py-20 scroll-mt-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Comparison</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Donna vs HubSpot: a practical comparison
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                If you want a full platform and team processes, HubSpot can be a better fit. If
                you want a lightweight inbox-first workflow for follow-ups and relationship
                context, Donna is built for that.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-md ring-1 ring-black/[0.04]">
              <table className="w-full text-left">
                <thead className="bg-card">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Category</th>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Donna CRM</th>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-t border-border">
                      <td className="px-5 py-4 text-sm text-muted-foreground">{row.label}</td>
                      <td className="bg-brand-blue/5 px-5 py-4">
                        <p className="text-sm font-semibold text-foreground">{row.donna.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{row.donna.detail}</p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold text-foreground">{row.hubspot.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{row.hubspot.detail}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Note: This page is a high-level comparison for typical solo workflows. If you have a
              specific use case, contact us and we will point you to the best fit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* -- Why people look for alternatives -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Common reasons</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Why some people look for a HubSpot alternative
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                HubSpot can be a great platform. Many solo operators look for an alternative when
                they want to keep their workflow in Gmail and reduce operational overhead.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {whyPeopleLookForAlternatives.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80}>
                <div className="rounded-2xl bg-card p-7 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Switching guide -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Switching</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Switching without rebuilding your process
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                If you are solo, you do not need enterprise operations. Start with active
                relationships, keep one simple stage model, and run a weekly follow-up review.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
            <ol className="space-y-4 text-sm text-muted-foreground">
              <li>1. Pick 10-20 active relationships you do not want to lose.</li>
              <li>2. For each, store one note: what they care about and the next step.</li>
              <li>3. Run a 15-minute weekly review to keep follow-ups from slipping.</li>
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a
                  className="group"
                  href={chromeWebStoreInstallUrl({ content: 'hubspot_alt_mid_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCtaLabel}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resources">Browse workflow guides</Link>
              </Button>
            </div>
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
              Common questions
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-8">
            {[
              {
                q: 'Is Donna a full CRM platform like HubSpot?',
                a: 'No. Donna is built for lightweight Gmail-native workflows for individuals. If you want a full CRM platform with deep reporting and multi-team processes, a platform can be a better fit.',
              },
              {
                q: 'Who should choose Donna over HubSpot?',
                a: 'Solo operators who want a simple follow-up system and relationship context next to Gmail threads, without heavy setup or operational overhead.',
              },
              {
                q: 'Can I start small and expand later?',
                a: 'Yes. Many people start with the active relationships that matter today. If you later need a larger platform, you can evolve your workflow.',
              },
            ].map((item) => (
              <Reveal key={item.q}>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.q}</h3>
                  <p className="mt-2 text-muted-foreground">{item.a}</p>
                </div>
              </Reveal>
            ))}
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
              <p className="text-sm text-primary-foreground/60">Ready to try it?</p>
              <div className="mt-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg shadow-black/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    className="group"
                    href={chromeWebStoreInstallUrl({ content: 'hubspot_alt_bottom_cta' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
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

