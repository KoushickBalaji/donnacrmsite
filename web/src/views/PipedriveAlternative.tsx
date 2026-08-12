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
  pipedrive: ComparisonCell
}

const goodFitFor = [
  'You want an inbox-first workflow inside Gmail',
  'You want follow-ups and context tied to real threads',
  'You are a solo operator and want minimal admin overhead',
  'You want optional deal stages without living in a pipeline dashboard',
] as const

const considerPipedriveIf = [
  'Your workflow is centered around a pipeline board',
  'You need deeper reporting and sales operations processes',
  'You have a team that collaborates inside the CRM',
] as const

const whyPeopleLookForAlternatives = [
  {
    title: 'Pipeline-first can feel like a second job',
    text: 'Pipeline workflows are powerful, but for solo operators they can become one more system to keep updated instead of a tool that reduces work.',
  },
  {
    title: 'You want the inbox to be the main workspace',
    text: 'Pipedrive can sync email on eligible plans, while its primary workflow remains in the CRM. Donna keeps the day-to-day workflow beside Gmail conversations.',
  },
  {
    title: 'You want a simpler next-step loop',
    text: 'A lightweight system is often enough: stage, next step, follow-up date. The rest is execution.',
  },
] as const

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Primary workflow',
    donna: { title: 'Gmail-first', detail: 'Thread context and next steps in the sidebar.' },
    pipedrive: { title: 'Pipeline-first', detail: 'Deals and stages drive daily workflow.' },
  },
  {
    label: 'Best fit',
    donna: { title: 'Individuals', detail: 'Solo Gmail workflows for follow-ups and context.' },
    pipedrive: { title: 'Sales teams', detail: 'When the CRM is the operating system for sales.' },
  },
  {
    label: 'Setup and maintenance',
    donna: { title: 'Minimal', detail: 'Start lightweight and keep it simple.' },
    pipedrive: { title: 'More setup', detail: 'Often benefits from process and ongoing tuning.' },
  },
  {
    label: 'Follow-ups',
    donna: { title: 'Task-first', detail: 'Capture one next step tied to the thread.' },
    pipedrive: { title: 'CRM-driven', detail: 'Follow-ups often managed via CRM activities.' },
  },
  {
    label: 'Email connection',
    donna: { title: 'Built around Gmail', detail: 'Donna runs beside the active conversation.' },
    pipedrive: { title: 'Available by plan', detail: 'Email sync is available on Growth and higher plans.' },
  },
  {
    label: 'AI assistance',
    donna: { title: 'Human-in-the-loop', detail: 'Drafts and suggestions; you confirm.' },
    pipedrive: { title: 'Built into current plans', detail: 'Sales and email assistance varies by feature and plan.' },
  },
  {
    label: 'Reporting',
    donna: { title: 'Basic', detail: 'Simple visibility for one-person workflows.' },
    pipedrive: { title: 'Stronger', detail: 'More pipeline reporting typical of sales CRMs.' },
  },
  {
    label: 'Collaboration',
    donna: { title: 'Not the focus', detail: 'Designed for individual workflows.' },
    pipedrive: { title: 'Team oriented', detail: 'Built for shared processes and visibility.' },
  },
] as const

const pipedriveSources = [
  { label: 'Pipedrive pricing and features', href: 'https://www.pipedrive.com/en/pricing' },
  { label: 'Pipedrive email sync', href: 'https://support.pipedrive.com/en/article/email-sync' },
  { label: 'Pipedrive reporting', href: 'https://www.pipedrive.com/en/features/sales-reporting' },
] as const satisfies readonly ComparisonSource[]

export function PipedriveAlternativePage() {
  const primaryCtaLabel = 'Add Donna to Gmail'

  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <Eyebrow>Pipedrive Alternative</Eyebrow>

              <h1
                className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                A Pipedrive alternative for people who run deals from Gmail
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Pipedrive can be a strong fit when your workflow is a pipeline and you want team
                reporting. Donna is built for solo operators who want follow-ups and relationship
                context next to Gmail threads, without turning their day into CRM maintenance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    className="group"
                    href={chromeWebStoreInstallUrl({ content: 'pipedrive_alt_hero' })}
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
                  <p className="text-xs font-semibold text-muted-foreground">Consider Pipedrive if</p>
                  <div className="mt-3 space-y-2">
                    {considerPipedriveIf.map((item) => (
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
                    Keep deals connected to real conversations and keep next steps visible while
                    you work in Gmail.
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
                Donna vs Pipedrive: a practical comparison
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                If you want a pipeline-first CRM for a team, Pipedrive can be a better fit. If you
                want a lightweight inbox-first workflow for follow-ups and relationship context,
                Donna is built for that.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-md ring-1 ring-black/[0.04]">
              <table className="w-full text-left">
                <thead className="bg-card">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Category</th>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Donna CRM</th>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Pipedrive</th>
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
                        <p className="text-sm font-semibold text-foreground">
                          {row.pipedrive.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{row.pipedrive.detail}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ComparisonSources
              competitorName="Pipedrive"
              checkedDate="August 2026"
              sources={pipedriveSources}
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
                Why some people look for a Pipedrive alternative
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Pipedrive can be a strong CRM. Many solo operators look for an alternative when
                they want less pipeline maintenance and a tighter inbox-first follow-up loop.
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
                A lightweight switching path (no massive migration)
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                If you are switching from a pipeline-first CRM, keep the transition simple: focus
                on active deals and the next step, not historical perfection.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
            <ol className="space-y-4 text-sm text-muted-foreground">
              <li>1. Start with active deals and active relationships only.</li>
              <li>2. For each, capture: current stage, next step, and follow-up date.</li>
              <li>3. Run a weekly review to keep the loop consistent.</li>
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a
                  className="group"
                  href={chromeWebStoreInstallUrl({ content: 'pipedrive_alt_mid_cta' })}
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
                q: 'Is Donna a full sales CRM like Pipedrive?',
                a: 'No. Donna is built for lightweight Gmail-native workflows for individuals. If you need a full pipeline operating system for a team, a sales CRM can be a better fit.',
              },
              {
                q: 'Who should choose Donna over Pipedrive?',
                a: 'People who spend most of their day in Gmail and want follow-ups and relationship context next to the thread, with minimal admin overhead.',
              },
              {
                q: 'What if I still want deal stages?',
                a: 'Donna supports lightweight stages, but the focus stays on execution: next step, follow-up date, and context in the inbox.',
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
                    href={chromeWebStoreInstallUrl({ content: 'pipedrive_alt_bottom_cta' })}
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

