'use client'

import { ArrowRight, Check, Minus } from 'lucide-react'
import Link from 'next/link'
import {
  ComparisonSources,
  type ComparisonSource,
} from '../components/ComparisonSources'
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
  copper: ComparisonCell
}

const goodFitFor = [
  'You spend most of your day in Gmail',
  'You want relationship context and next steps next to the thread',
  'You want a lightweight system that is easy to maintain solo',
  'You want optional deal stages without heavy admin work',
] as const

const considerCopperIf = [
  'You need a full CRM experience outside the inbox',
  'You have a team workflow with shared reporting needs',
  'You want deeper customization and admin configuration',
] as const

const whyPeopleLookForAlternatives = [
  {
    title: 'You want less CRM administration',
    text: 'Copper connects closely with Google Workspace while also offering a full CRM. Solo operators may prefer fewer fields, reports, and processes to maintain.',
  },
  {
    title: 'Setup becomes a project',
    text: 'Fields, workflows, and configuration can be valuable, but they also create maintenance. Solo operators often want less overhead.',
  },
  {
    title: 'You want a simpler follow-up loop',
    text: 'For many people, the job is follow-ups and next steps. A lightweight Gmail-native loop can be easier than a full CRM system.',
  },
] as const

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Primary workflow',
    donna: { title: 'Gmail-first', detail: 'Context and next steps in the Gmail sidebar.' },
    copper: { title: 'Google Workspace CRM', detail: 'Records, pipelines, tasks, and reporting across Gmail, Calendar, and the CRM.' },
  },
  {
    label: 'Best fit',
    donna: { title: 'Solo operators', detail: 'Consultants, freelancers, founders, recruiters.' },
    copper: { title: 'Teams', detail: 'When shared CRM processes matter day to day.' },
  },
  {
    label: 'Setup and maintenance',
    donna: { title: 'Minimal', detail: 'Start simple and keep it lightweight.' },
    copper: { title: 'More configuration', detail: 'Often benefits from setup and ongoing tuning.' },
  },
  {
    label: 'Follow-ups',
    donna: { title: 'Task-first', detail: 'Capture the next step tied to the thread.' },
    copper: { title: 'CRM-driven', detail: 'Follow-ups often live as CRM activities.' },
  },
  {
    label: 'AI assistance',
    donna: { title: 'Human-in-the-loop', detail: 'Drafts and suggestions; you confirm.' },
    copper: { title: 'Plan-dependent AI tools', detail: 'Includes email writing assistance on eligible plans.' },
  },
  {
    label: 'Reporting',
    donna: { title: 'Basic', detail: 'Simple visibility for individuals.' },
    copper: { title: 'Stronger', detail: 'More reporting typical of full CRMs.' },
  },
  {
    label: 'Collaboration',
    donna: { title: 'Not the focus', detail: 'Built for individuals, not teams.' },
    copper: { title: 'Team oriented', detail: 'Designed for shared workflows and visibility.' },
  },
]

const copperSources = [
  { label: 'Copper for Google Workspace', href: 'https://www.copper.com/google-workspace-crm' },
  { label: 'Copper pricing and features', href: 'https://www.copper.com/pricing' },
] as const satisfies readonly ComparisonSource[]

export function CopperAlternativePage() {
  const primaryCtaLabel = 'Add Donna to Gmail'

  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <Eyebrow>Copper Alternative</Eyebrow>

              <h1
                className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                A Gmail-first alternative to Copper for solo operators
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Copper can be a strong fit when you want a full CRM system and team workflows.
                Donna is built for people who live in Gmail and want relationship context and
                follow-ups next to the thread, with minimal setup.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    className="group"
                    href={chromeWebStoreInstallUrl({ content: 'copper_alt_hero' })}
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
                  <p className="text-xs font-semibold text-muted-foreground">Consider Copper if</p>
                  <div className="mt-3 space-y-2">
                    {considerCopperIf.map((item) => (
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
                    Open any thread and keep context, notes, and next steps close to the
                    conversation.
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
                Donna vs Copper: a practical comparison
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                If you want a full CRM system and team reporting, Copper can be a better fit. If
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
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Copper</th>
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
                        <p className="text-sm font-semibold text-foreground">{row.copper.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{row.copper.detail}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ComparisonSources
              competitorName="Copper"
              checkedDate="August 2026"
              sources={copperSources}
            />
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
                Why some people look for a Copper alternative
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Copper can be a great CRM. Many solo operators look for an alternative when they
                want less overhead and a tighter inbox-first follow-up loop.
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
                Switching without migrating everything
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Most people do not need a full migration on day one. Start with the relationships
                that matter right now and build from there.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
            <ol className="space-y-4 text-sm text-muted-foreground">
              <li>
                1. Pick 10-20 active relationships and add only those first.
              </li>
              <li>
                2. For each one, capture one note: what they care about and the next step date.
              </li>
              <li>
                3. Keep one simple stage model and run a weekly 15-minute review.
              </li>
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a
                  className="group"
                  href={chromeWebStoreInstallUrl({ content: 'copper_alt_mid_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCtaLabel}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/gmail-crm">Read: Gmail CRM overview</Link>
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
                q: 'Is Donna a full CRM like Copper?',
                a: 'No. Donna is intentionally lightweight and built for individuals. If you need deeper team workflows, admin controls, and reporting, a full CRM can be a better fit.',
              },
              {
                q: 'Do I need to migrate everything to switch?',
                a: 'Not usually. Many people start with active relationships and track new conversations going forward. You can migrate more later if you want.',
              },
              {
                q: 'Who should stick with Copper?',
                a: 'Teams that want a full CRM workflow and shared reporting, especially when CRM work happens outside the inbox as much as inside it.',
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
                    href={chromeWebStoreInstallUrl({ content: 'copper_alt_bottom_cta' })}
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

