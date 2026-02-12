'use client'

import { ArrowRight, Check } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const forYouIf = [
  'You live inside Gmail all day',
  'You manage relationships yourself (founder, recruiter, operator)',
  "You don't want to maintain CRM pipelines",
  'You tried Streak but found it heavy or messy over time',
] as const

const whyMoveAway = [
  {
    title: 'Pipelines take over your inbox',
    text: 'Streak turns Gmail into a pipeline manager. Over time, threads, boxes, and stages compete for attention.',
  },
  {
    title: 'Setup becomes maintenance',
    text: 'Fields, stages, and workflows need constant tuning — even for solo users.',
  },
  {
    title: 'Built for teams, not individuals',
    text: "Streak shines for structured teams. It's less forgiving for people who just want to remember and follow up.",
  },
] as const

const howDonnaIsDifferent = [
  'Lives entirely inside the Gmail sidebar',
  'Zero setup — no pipelines to configure',
  'Focuses on conversations, not stages',
  'Follow-ups are first-class, not an afterthought',
  'Designed for speed, not reporting',
] as const

const comparisonRows = [
  { label: 'Works inside Gmail', donna: '\u2705', streak: '\u2705' },
  { label: 'Setup required', donna: '\u274C', streak: '\u2705' },
  { label: 'Built for solo users', donna: '\u2705', streak: '\u274C' },
  { label: 'Pipeline complexity', donna: 'Minimal', streak: 'Heavy' },
  { label: 'Follow-ups', donna: 'Native & simple', streak: 'Pipeline-dependent' },
  { label: 'Learning curve', donna: 'Very low', streak: 'Medium' },
  { label: 'Ideal for', donna: 'Operators & founders', streak: 'Structured teams' },
] as const

function FakePipelinePanel() {
  const columns = useMemo(
    () => [
      { title: 'To follow up', items: 6 },
      { title: 'Waiting', items: 5 },
      { title: 'In progress', items: 7 },
    ],
    [],
  )

  return (
    <div className="h-full rounded-lg border border-border bg-background/80 p-4">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-24 rounded-full bg-muted" />
        <div className="flex gap-2">
          <div className="h-7 w-7 rounded-md bg-muted" />
          <div className="h-7 w-7 rounded-md bg-muted" />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title} className="rounded-md border border-border bg-muted/20 p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground">{col.title}</p>
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                {col.items}
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {Array.from({ length: col.items }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-md border border-border bg-background px-3 py-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-20 rounded-full bg-muted" />
                    <div className="h-2 w-10 rounded-full bg-muted" />
                  </div>
                  <div className="mt-2 h-2 w-28 rounded-full bg-muted" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function StreakAlternativePage() {
  const [emphasizeDonna, setEmphasizeDonna] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setEmphasizeDonna(true), 60)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-14 lg:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <h1 className="text-sm font-semibold text-primary">
                Looking for a Streak CRM alternative?
              </h1>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                A simpler alternative to Streak CRM — built for Gmail users
              </h2>

              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Donna CRM keeps relationship context, follow-ups, and deals inside Gmail
                without pipelines getting in the way.
              </p>

              <div className="mt-10">
                <Button size="lg" asChild>
                  <a
                    className="group"
                    href={chromeWebStoreInstallUrl({ content: 'streak_alt_hero' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add Donna to Gmail
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              <div className="mt-5">
                <a
                  href="#comparison"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  See feature comparison ↓
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">
                  Homepage
                </Link>
                <span aria-hidden className="text-border">
                  ·
                </span>
                <Link href="/features" className="hover:text-primary">
                  Features
                </Link>
                <span aria-hidden className="text-border">
                  ·
                </span>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div
                  className={`transition-opacity duration-300 ${
                    emphasizeDonna ? 'opacity-70' : 'opacity-100'
                  }`}
                >
                  <Card className="border-border bg-muted/20">
                    <CardContent className="p-4">
                      <p className="mb-3 text-xs font-semibold text-muted-foreground">
                        Pipeline-style CRM
                      </p>
                      <FakePipelinePanel />
                    </CardContent>
                  </Card>
                </div>

                <div
                  className={`transition-opacity duration-300 ${
                    emphasizeDonna ? 'opacity-100' : 'opacity-90'
                  }`}
                >
                  <Card className="border-border bg-muted/20">
                    <CardContent className="p-4">
                      <p className="mb-3 text-xs font-semibold text-muted-foreground">
                        Gmail + Donna CRM
                      </p>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background">
                        <img
                          src="/screenshots/Context%20Bar.png"
                          alt="Gmail CRM sidebar"
                          className="h-full w-full scale-[1.06] object-cover object-right"
                          loading="eager"
                        />
                        <div className="pointer-events-none absolute inset-0">
                          <div className="absolute right-[6%] top-[14%] h-[72%] w-[32%] rounded-lg ring-2 ring-primary/40 shadow-lg" />
                          <div className="absolute right-[6%] top-[14%] h-[72%] w-[32%] rounded-lg bg-primary/10 blur-xl" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <Reveal durationMs={180}>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                This comparison is for you if:
              </h2>
              <div className="mt-8 space-y-4">
                {forYouIf.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <Reveal durationMs={180}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why people move away from Streak
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {whyMoveAway.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80} durationMs={180}>
                <Card className="border-border transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="p-7">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-20">
        <div className="container">
          <Reveal durationMs={180}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                How Donna CRM is different
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-[560px]">
            <Reveal delayMs={80} durationMs={180}>
              <ul className="space-y-3 leading-snug text-foreground">
                {howDonnaIsDifferent.map((item) => (
                  <li key={item} className="font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-background py-20 scroll-mt-24">
        <div className="container">
          <Reveal durationMs={180}>
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
                Donna CRM vs Streak
              </h2>

              <div className="mt-10 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="px-5 py-4 text-sm font-semibold text-foreground">
                        Feature
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold text-foreground">
                        Donna CRM
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold text-foreground">
                        Streak
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.label} className="border-t border-border">
                        <td className="px-5 py-4 text-sm text-muted-foreground">
                          {row.label}
                        </td>
                        <td className="bg-primary/5 px-5 py-4 text-sm font-medium text-foreground">
                          {row.donna}
                        </td>
                        <td className="px-5 py-4 text-sm text-muted-foreground">
                          {row.streak}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal durationMs={180} className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Donna works where you already work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No new dashboards. No extra tabs. Donna appears next to your emails,
                exactly when you need context.
              </p>
            </Reveal>

            <Reveal durationMs={180} delayMs={80} className="mx-auto w-full max-w-2xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted/30">
                <img
                  src="/screenshots/Context%20Bar.png"
                  alt="Gmail CRM sidebar"
                  className="h-full w-full scale-[1.06] object-cover object-right"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute right-[6%] top-[14%] h-[72%] w-[32%] rounded-lg ring-2 ring-primary/40 shadow-lg" />
                  <div className="absolute right-[6%] top-[14%] h-[72%] w-[32%] rounded-lg bg-primary/10 blur-xl" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-20">
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
                    No. Donna is intentionally lightweight. It’s built for people who
                    don’t want to manage a CRM.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Can I migrate data from Streak?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    You don’t need to. Most users start fresh and track new conversations
                    going forward.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Who should stick with Streak?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Teams that rely heavily on pipelines, reports, and shared workflows.
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
                  Add to Gmail — Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Free trial · No setup · Cancel anytime
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
