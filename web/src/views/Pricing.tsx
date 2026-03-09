'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { FaqList } from '../components/FaqList'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { useScrollSnap } from '../lib/useScrollSnap'
import { pricingFaqs } from './pricing-data'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
      {children}
    </p>
  )
}

const features = [
  'CRM inside Gmail (contacts, pipelines, tasks, templates, tracking)',
  'Email campaigns + engagement tracking',
  'AI Assistant access',
  'Email support',
] as const

const plans = {
  monthly: {
    label: 'Monthly',
    originalPrice: 39,
    launchPrice: 10,
    period: 'month' as const,
    billingNote: 'Billed monthly',
  },
  annual: {
    label: 'Annual',
    originalPrice: 31,
    launchPrice: 8,
    period: 'month' as const,
    billingNote: 'Billed annually at $96/year',
  },
} as const

type BillingCycle = 'monthly' | 'annual'

export function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>('annual')
  useScrollSnap()

  return (
    <>
      {/* ── Hero + Pricing card ── */}
      <section data-snap-section className="donna-hero-drift relative flex min-h-[calc(100svh-4rem)] items-start overflow-hidden bg-background pt-6 pb-6 lg:pt-10 lg:pb-8">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                One plan. Everything&nbsp;included.
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                No tiers to compare, no features locked behind upgrades.
                Start with a 14-day free&nbsp;trial.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="mx-auto mt-10 max-w-lg">
              {(() => {
                const plan = plans[billing]
                const savingsPercent = Math.round(
                  ((plan.originalPrice - plan.launchPrice) / plan.originalPrice) * 100,
                )
                return (
                  <Card className="relative w-full overflow-hidden border-brand-blue/40 shadow-lg">
                    {/* Launch offer banner */}
                    <div className="bg-gradient-to-r from-brand-orange to-brand-orange/85 px-4 py-2.5 text-center">
                      <p className="text-sm font-bold tracking-wide text-white">
                        LAUNCH OFFER - {savingsPercent}% OFF
                      </p>
                    </div>

                    <div className="pointer-events-none absolute inset-0 top-10 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent" />

                    <CardHeader className="relative pb-4 text-center">
                      {/* Billing toggle */}
                      <div className="mx-auto mb-5 inline-flex rounded-full border border-border bg-muted/60 p-1 shadow-inner">
                        <button
                          onClick={() => setBilling('monthly')}
                          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                            billing === 'monthly'
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setBilling('annual')}
                          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                            billing === 'annual'
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          Annual{' '}
                          <span
                            className={`${billing === 'annual' ? 'text-brand-orange-foreground' : 'text-brand-orange'} font-semibold`}
                          >
                            (save 20%)
                          </span>
                        </button>
                      </div>

                      <div>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-lg text-muted-foreground line-through">
                            ${plan.originalPrice}
                          </span>
                          <span className="text-5xl font-bold text-foreground">
                            ${plan.launchPrice}
                          </span>
                          <span className="text-muted-foreground">/{plan.period}</span>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {plan.billingNote}
                        </p>
                      </div>

                      <p className="mt-3 text-sm text-muted-foreground">
                        Includes 14-day free trial. Cancel anytime.
                      </p>
                    </CardHeader>

                    <CardContent className="relative space-y-6">
                      <ul className="space-y-3">
                        {features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue" />
                            <span className="text-sm text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full" asChild>
                        <a
                          href={chromeWebStoreInstallUrl({
                            content: `pricing_${billing}`,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Start 14-day free trial
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })()}

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Launch pricing is available for a limited time. Lock in your rate
                by starting a trial&nbsp;today.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section data-snap-section className="bg-muted/30 py-16 lg:py-20 min-h-screen">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Common questions about pricing
              </h2>
              <div className="mt-8">
                <FaqList items={pricingFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-sm font-semibold text-foreground">Still deciding?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                These pages go deeper on what Donna does and how it fits into
                your Gmail&nbsp;workflow.
              </p>
              <div className="mt-5 flex flex-col gap-2 text-sm font-semibold">
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  Gmail CRM overview
                </Link>
                <Link href="/features" className="text-primary hover:underline">
                  See all features
                </Link>
                <Link href="/resources" className="text-primary hover:underline">
                  Resources and templates
                </Link>
                <Link href="/faq" className="text-primary hover:underline">
                  Full FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-snap-section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Need help?</Eyebrow>
            <h2
              className="text-2xl font-bold text-primary-foreground sm:text-3xl"
              style={{ letterSpacing: '-0.01em' }}
            >
              Questions before you&nbsp;start?
            </h2>
            <p className="mt-4 text-primary-foreground/60">
              We&apos;re happy to help you figure out if Donna is the right fit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="secondary"
                className="shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                asChild
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/20 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="/faq">Browse FAQ</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
