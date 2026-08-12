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
  streak: ComparisonCell
}

const goodFitFor = [
  'You spend most of your day in Gmail',
  'You want follow-ups and context next to the thread',
  'You want a simple system that stays lightweight over time',
  'You want the option of deal stages without living in a pipeline dashboard',
] as const

const notIdealIf = [
  'You need advanced reporting and pipeline analytics',
  'You run a multi-user sales org with shared workflows',
  'You want a full admin layer and heavy customization inside Gmail',
] as const

const whyMoveAway = [
  {
    title: 'You need less pipeline structure',
    text: 'Streak brings configurable pipelines into Gmail. If your main need is remembering context and the next follow-up, a lighter structure may be easier to maintain.',
  },
  {
    title: 'Setup becomes maintenance',
    text: 'Pipelines, fields, and workflows need tuning to stay useful. That overhead is fine for teams, but it is friction for individuals.',
  },
  {
    title: 'Your workflow is primarily individual',
    text: 'Streak supports individual and shared pipeline workflows. Donna focuses on solo operators who want context and follow-ups without a highly configurable CRM.',
  },
] as const

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Primary workflow',
    donna: { title: 'Gmail-first', detail: 'Context and next steps in the sidebar.' },
    streak: { title: 'Pipeline-first', detail: 'Boxes and stages drive the workflow.' },
  },
  {
    label: 'Setup and maintenance',
    donna: { title: 'Minimal', detail: 'Start with simple defaults and refine later.' },
    streak: { title: 'Highly configurable', detail: 'Pipelines, fields, and automations can be tailored.' },
  },
  {
    label: 'Best fit',
    donna: { title: 'Solo operators', detail: 'Consultants, freelancers, founders, recruiters.' },
    streak: { title: 'Teams', detail: 'Shared pipelines and structured processes.' },
  },
  {
    label: 'Follow-ups',
    donna: { title: 'Tasks and follow-ups', detail: 'Capture the next step tied to the thread.' },
    streak: { title: 'Pipeline-driven', detail: 'Often managed through boxes and stages.' },
  },
  {
    label: 'AI assistance',
    donna: { title: 'Human-in-the-loop', detail: 'Suggests updates and drafts; you confirm.' },
    streak: { title: 'CRM-aware AI', detail: 'Supports CRM summaries, research, and workflow assistance by plan.' },
  },
  {
    label: 'Deal tracking',
    donna: { title: 'Lightweight (optional)', detail: 'Enough structure without admin overhead.' },
    streak: { title: 'Full pipeline model', detail: 'Great when the pipeline is the product.' },
  },
  {
    label: 'Learning curve',
    donna: { title: 'Low', detail: 'Feels like an inbox workflow.' },
    streak: { title: 'Medium', detail: 'Pipeline concepts and configuration.' },
  },
  {
    label: 'Reporting',
    donna: { title: 'Basic', detail: 'Simple visibility for individuals.' },
    streak: { title: 'Stronger', detail: 'More reporting for pipeline-driven teams.' },
  },
  {
    label: 'Collaboration',
    donna: { title: 'Not the focus', detail: 'Designed for individuals.' },
    streak: { title: 'Strong', detail: 'Built for shared pipelines and teams.' },
  },
  {
    label: 'Works inside Gmail',
    donna: { title: 'Yes', detail: 'Lives in the Gmail sidebar.' },
    streak: { title: 'Yes', detail: 'Runs in Gmail.' },
  },
]

const streakSources = [
  { label: 'Streak for Google Workspace', href: 'https://www.streak.com/google-workspace-crm' },
  { label: 'Streak AI', href: 'https://www.streak.com/ai' },
  { label: 'Streak pricing', href: 'https://www.streak.com/pricing' },
] as const satisfies readonly ComparisonSource[]

export function StreakAlternativePage() {
  const primaryCtaLabel = 'Add Donna to Gmail'

  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <Eyebrow>Streak Alternative</Eyebrow>

              <h1
                className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                A simpler Streak alternative for Gmail users
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Streak is great when your workflow is a pipeline. Donna is built for solo operators
                who want relationship context and follow-ups next to the thread, without turning
                Gmail into a pipeline dashboard.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    className="group"
                    href={chromeWebStoreInstallUrl({ content: 'streak_alt_hero' })}
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

              <p className="mt-4 text-xs text-muted-foreground/70">
                Free trial · Minimal setup · Cancel anytime
              </p>

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
                  <p className="text-xs font-semibold text-muted-foreground">Consider Streak if</p>
                  <div className="mt-3 space-y-2">
                    {notIdealIf.map((item) => (
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
                    Works where you already work: open any thread and see contact context, notes,
                    and next steps.
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
                Donna vs Streak: feature comparison
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A practical comparison for Gmail users. If you need a pipeline-first CRM for a
                team, Streak can be a better fit. If you want a simpler solo workflow for
                follow-ups and relationship context, Donna is built for that.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-md ring-1 ring-black/[0.04]">
              <table className="w-full text-left">
                <thead className="bg-card">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Category</th>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Donna CRM</th>
                    <th className="px-5 py-4 text-sm font-semibold text-foreground">Streak</th>
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
                          {row.streak.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{row.streak.detail}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ComparisonSources
              competitorName="Streak"
              checkedDate="August 2026"
              sources={streakSources}
            />
          </Reveal>
        </div>
      </section>

      {/* -- Why people move away -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Common reasons</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Why some people move away from Streak
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Streak is a strong product for pipeline-driven teams. Many solo operators switch
                when the pipeline model starts to feel like work.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {whyMoveAway.map((item, index) => (
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

      {/* -- Why Donna -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>The alternative</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Why Donna is a Streak alternative
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A Gmail-native CRM that helps you keep context and execute the next step
                consistently, without building your day around pipelines.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Thread to context',
                text: 'Turn a real conversation into a record with notes and history, anchored to the email thread.',
              },
              {
                title: 'Context to next step',
                text: 'Capture follow-ups as tasks so you always know what to do next and when.',
              },
              {
                title: 'AI with confirmation',
                text: 'Use the assistant as a drafting and organization tool. Review suggestions before taking action.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80}>
                <div className="rounded-2xl bg-card p-7 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <Link href="/gmail-crm" className="text-sm font-semibold text-primary hover:underline">
              Read: What is a Gmail CRM?
            </Link>
            <span aria-hidden className="mx-3 text-border">
              ·
            </span>
            <Link href="/ai-gmail-crm" className="text-sm font-semibold text-primary hover:underline">
              Read: AI Gmail CRM
            </Link>
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
                q: 'Is Donna a full CRM like Streak?',
                a: 'No. Donna is intentionally lightweight. It is built for people who want a simple system for context and follow-ups inside Gmail, with optional deal stages when you want a bit more structure.',
              },
              {
                q: 'Can I migrate data from Streak?',
                a: 'You can, but you do not have to migrate everything on day one. Many users start by importing the contacts that matter and tracking new conversations going forward.',
              },
              {
                q: 'Who should stick with Streak?',
                a: 'Teams that rely heavily on pipelines, reporting, and shared workflows inside Gmail.',
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
                    href={chromeWebStoreInstallUrl({ content: 'streak_alt_bottom_cta' })}
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
