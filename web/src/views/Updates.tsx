import type { ComponentType } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  Compass,
  ExternalLink,
  GraduationCap,
  Languages,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { latestProductUpdate, productUpdates } from '../content/updates'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const releaseIcons: Record<string, ComponentType<{ className?: string }>> = {
  '0.3.7': Compass,
  '0.3.6': GraduationCap,
  '0.3.5': ScanSearch,
  '0.3.4': Languages,
  '0.3.1': Sparkles,
  '0.3': Boxes,
}

function formatReleaseDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00.000Z`))
}

export function UpdatesPage() {
  const latest = latestProductUpdate

  return (
    <>
      <section className="donna-hero-drift relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>Product updates</Eyebrow>
                <h1
                  className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                  style={{ letterSpacing: '-0.035em' }}
                >
                  What is new in Donna CRM
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  See how each Donna CRM update helps you stay closer to your contacts, keep work
                  moving, and get more done from Gmail. Explore what&apos;s new and how to put it to work.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button size="lg" asChild>
                    <a href={`#version-${latest.version}`}>
                      Read version {latest.version}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/features">Explore all features</Link>
                  </Button>
                </div>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
                  <span>{productUpdates.length} product updates</span>
                  <span>New ways to work</span>
                  <span>Available in Donna today</span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="scale" delayMs={80}>
              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-7 shadow-xl ring-1 ring-black/[0.04] sm:p-9">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-blue/15 blur-3xl" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <img
                      src="/donna-128-spec.png"
                      alt="Donna CRM app icon"
                      width={128}
                      height={128}
                      className="h-16 w-16 rounded-2xl shadow-lg"
                      loading="eager"
                    />
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                      {latest.releaseLabel}
                    </span>
                  </div>
                  <p className="mt-9 text-sm font-semibold uppercase tracking-[0.12em] text-brand-blue">
                    Version {latest.version}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                    {latest.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{latest.summary}</p>
                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-border pt-5">
                    <span className="text-sm text-muted-foreground">
                      {formatReleaseDate(latest.releasedAt)}
                    </span>
                    <a
                      href={`#version-${latest.version}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-brand-blue"
                    >
                      See what&apos;s new
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <nav aria-label="Version history" className="border-y border-border bg-muted/50">
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-6 overflow-x-auto px-6 py-4 lg:px-10">
          <span className="flex-none text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Version history
          </span>
          <div className="flex items-center gap-2">
            {productUpdates.map((update) => (
              <a
                key={update.version}
                href={`#version-${update.version}`}
                className="flex-none rounded-full bg-background px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-border transition-colors hover:bg-brand-blue/10 hover:text-brand-blue"
              >
                {update.version}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Release history</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.025em' }}
              >
                See how Donna has grown
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                From the first release, Donna has focused on one goal: helping you turn Gmail
                conversations into organized relationships and clear next steps, without adding
                more CRM admin.
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            {productUpdates.map((update, updateIndex) => {
              const ReleaseIcon = releaseIcons[update.version] ?? Sparkles
              return (
                <article
                  id={`version-${update.version}`}
                  key={update.version}
                  className={`scroll-mt-28 ${
                    updateIndex > 0 ? 'mt-20 border-t border-border pt-20 lg:mt-28 lg:pt-28' : ''
                  }`}
                >
                  <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                          <ReleaseIcon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
                            {update.releaseLabel ?? 'New in this version'}
                          </p>
                          <p className="font-bold text-foreground">Version {update.version}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        {formatReleaseDate(update.releasedAt)}
                      </p>
                      <nav aria-label={`Version ${update.version} contents`} className="mt-6 border-t border-border pt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          In this release
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {update.features.map((feature, featureIndex) => (
                            <li key={feature.title}>
                              <a
                                href={`#version-${update.version}-feature-${featureIndex + 1}`}
                                className="text-sm leading-snug text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {feature.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </aside>

                    <div className="min-w-0">
                      <Reveal>
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <p className="text-sm font-semibold text-brand-blue">
                              What&apos;s new in version {update.version}
                            </p>
                            <h3
                              className="mt-3 max-w-4xl text-3xl font-bold text-foreground sm:text-4xl"
                              style={{ letterSpacing: '-0.025em' }}
                            >
                              {update.title}
                            </h3>
                            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                              {update.summary}
                            </p>
                          </div>
                          {update.accentImageSrc ? (
                            <img
                              src={update.accentImageSrc}
                              alt={update.accentImageAlt ?? ''}
                              width={256}
                              height={256}
                              className="hidden h-24 w-24 flex-none rounded-full bg-brand-blue/5 object-cover ring-1 ring-brand-blue/10 sm:block"
                              loading="lazy"
                            />
                          ) : null}
                        </div>
                      </Reveal>

                      {update.screenshotSrc ? (
                        <Reveal delayMs={60}>
                          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-muted/30 p-3 shadow-lg ring-1 ring-black/[0.04] sm:p-5">
                            <img
                              src={update.screenshotSrc}
                              alt={update.screenshotAlt ?? ''}
                              className="w-full rounded-xl border border-border/60 bg-background object-contain shadow-sm"
                              loading="lazy"
                            />
                          </div>
                        </Reveal>
                      ) : null}

                      <div className="mt-10 space-y-5">
                        {update.features.map((feature, featureIndex) => (
                          <Reveal key={feature.title} delayMs={featureIndex * 40}>
                            <section
                              id={`version-${update.version}-feature-${featureIndex + 1}`}
                              className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-sm ring-1 ring-black/[0.025] sm:p-8"
                            >
                              <div className="flex items-start gap-4">
                                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-blue/10 text-xs font-bold text-brand-blue">
                                  {String(featureIndex + 1).padStart(2, '0')}
                                </span>
                                <div>
                                  <h4 className="text-xl font-bold text-foreground">{feature.title}</h4>
                                  <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>

                              <div className={`mt-7 grid gap-7 ${feature.steps ? 'lg:grid-cols-2' : ''}`}>
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                                    How it helps
                                  </p>
                                  <ul className="mt-4 space-y-3">
                                    {feature.capabilities.map((capability) => (
                                      <li key={capability} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <Check className="mt-0.5 h-4 w-4 flex-none text-brand-blue" />
                                        <span className="leading-relaxed">{capability}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {feature.steps ? (
                                  <div className="rounded-xl bg-muted/60 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                                      How to use it
                                    </p>
                                    <ol className="mt-4 space-y-3">
                                      {feature.steps.map((step, stepIndex) => (
                                        <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-background text-[11px] font-bold text-foreground ring-1 ring-border">
                                            {stepIndex + 1}
                                          </span>
                                          <span className="leading-relaxed">{step}</span>
                                        </li>
                                      ))}
                                    </ol>
                                  </div>
                                ) : null}
                              </div>
                            </section>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <Eyebrow>Built around real work</Eyebrow>
                <h2
                  className="text-3xl font-bold text-foreground sm:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Every update, explained through what it helps you do
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  No maintenance logs or behind-the-scenes details - just the improvements that make
                  Donna more useful in your inbox.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { title: 'More value in Gmail', body: 'See new ways to organize, follow up, and stay closer to customers.' },
                  { title: 'Practical examples', body: 'Learn when to use each feature and how it fits into a normal workday.' },
                  { title: 'Ready when you are', body: 'Everything shown here is available in the published Donna CRM extension.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/[0.04]">
                    <ShieldCheck className="h-5 w-5 text-brand-blue" />
                    <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 text-center lg:px-10">
          <Reveal>
            <Eyebrow className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
              Current release
            </Eyebrow>
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Try Donna {latest.version} in your inbox
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/65">
              Install Donna CRM and keep contacts, pipelines, follow-ups, and email context where
              you already work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'updates_footer' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Gmail - Free Trial
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/resources">Browse guides</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
