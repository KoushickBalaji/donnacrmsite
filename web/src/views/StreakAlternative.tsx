'use client'

import { ArrowRight, Check, Minus } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
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
    title: 'Pipelines take over your inbox',
    text: 'Over time, threads, boxes, and stages compete for attention. For solo operators, it can feel like you are managing the CRM instead of the relationship.',
  },
  {
    title: 'Setup becomes maintenance',
    text: 'Pipelines, fields, and workflows need tuning to stay useful. That overhead is fine for teams, but it is friction for individuals.',
  },
  {
    title: 'Built for teams, not individuals',
    text: 'Streak is strong when multiple people share a pipeline. If you just want to remember, follow up, and keep context in Gmail, it can feel heavier than necessary.',
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
    streak: { title: 'More setup', detail: 'Pipelines and fields take ongoing tuning.' },
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
    streak: { title: 'Not the core', detail: 'The core workflow is pipeline and boxes.' },
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

export function StreakAlternativePage() {
  const primaryCtaLabel = 'Add Donna to Gmail'

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-10 lg:py-12">
        <div className="container">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <p className="text-sm font-semibold text-primary">
                Looking for a Streak CRM alternative?
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                A simpler Streak alternative for Gmail users
              </h1>

              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Streak is great when your workflow is a pipeline. Donna is built for solo operators
                who want relationship context and follow-ups next to the thread, without turning
                Gmail into a pipeline dashboard.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
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

              <p className="mt-4 text-sm text-muted-foreground">
                Free trial | Minimal setup | Cancel anytime
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

            <Reveal className="mx-auto w-full max-w-2xl">
              <Card className="border-border bg-muted/20">
                <CardContent className="p-4 sm:p-6">
                  <p className="mb-3 text-xs font-semibold text-muted-foreground">
                    Donna inside Gmail
                  </p>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background">
                    <img
                      src="/screenshots/Context%20Bar%20V2.png"
                      alt="Donna CRM running in the Gmail sidebar"
                      className="h-full w-full scale-[1.06] object-cover object-right"
                      loading="eager"
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Works where you already work: open any thread and see contact context, notes,
                    and next steps.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-background py-16 scroll-mt-24 lg:py-20">
        <div className="container">
          <Reveal durationMs={180}>
            <div className="mx-auto max-w-5xl">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Donna vs Streak: feature comparison
                </h2>
                <p className="mt-4 text-muted-foreground">
                  A practical comparison for Gmail users. If you need a pipeline-first CRM for a
                  team, Streak can be a better fit. If you want a simpler solo workflow for
                  follow-ups and relationship context, Donna is built for that.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left">
                  <thead className="bg-muted/30">
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

              <p className="mt-4 text-xs text-muted-foreground">
                Note: This page is a high-level comparison for typical solo workflows. If you have
                a specific use case, contact us and we will point you to the best fit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <Reveal durationMs={180}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why some people move away from Streak
              </h2>
              <p className="mt-4 text-muted-foreground">
                Streak is a strong product for pipeline-driven teams. Many solo operators switch
                when the pipeline model starts to feel like work.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {whyMoveAway.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80} durationMs={180}>
                <Card className="border-border transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="p-7">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-16 lg:py-20">
        <div className="container">
          <Reveal durationMs={180}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why Donna is a Streak alternative
              </h2>
              <p className="mt-4 text-muted-foreground">
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
              <Reveal key={item.title} delayMs={index * 80} durationMs={180}>
                <Card className="border-border bg-background/70">
                  <CardContent className="p-7">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <Link href="/gmail-crm" className="text-sm font-semibold text-primary hover:underline">
              Read: What is a Gmail CRM?
            </Link>
            <span aria-hidden className="mx-3 text-border">
              |
            </span>
            <Link href="/ai-gmail-crm" className="text-sm font-semibold text-primary hover:underline">
              Read: AI Gmail CRM
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-16 lg:py-20">
        <div className="container">
          <Reveal durationMs={180}>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Common questions
              </h2>
              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Is Donna a full CRM like Streak?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    No. Donna is intentionally lightweight. It is built for people who want a
                    simple system for context and follow-ups inside Gmail, with optional deal
                    stages when you want a bit more structure.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Can I migrate data from Streak?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    You can, but you do not have to migrate everything on day one. Many users start
                    by importing the contacts that matter and tracking new conversations going
                    forward.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Who should stick with Streak?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Teams that rely heavily on pipelines, reporting, and shared workflows inside
                    Gmail.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container">
          <Reveal durationMs={180} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Try a simpler Gmail CRM
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Install Donna CRM and manage relationships without leaving Gmail.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <a
                  className="group"
                  href={chromeWebStoreInstallUrl({ content: 'streak_alt_bottom_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Gmail - Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Free trial | Minimal setup | Cancel anytime
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
