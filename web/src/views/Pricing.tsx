'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { FaqList } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { pricingFaqs } from './pricing-data'

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

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background pt-8 pb-4 lg:pt-12 lg:pb-6">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              One plan. Everything included. Start with a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background pt-4 pb-16 lg:pt-6 lg:pb-20">
        <div className="container">
          <div className="mx-auto max-w-lg">
            {(() => {
              const plan = plans[billing]
              const savingsPercent = Math.round(
                ((plan.originalPrice - plan.launchPrice) / plan.originalPrice) * 100,
              )
              return (
                <Card className="relative w-full overflow-hidden border-brand-blue/40 shadow-lg">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent" />

                  <CardHeader className="relative pb-4 text-center">
                    {/* Compact billing toggle */}
                    <div className="mx-auto mb-5 inline-flex rounded-full bg-muted p-0.5">
                      <button
                        onClick={() => setBilling('monthly')}
                        className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                          billing === 'monthly'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBilling('annual')}
                        className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                          billing === 'annual'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Annual{' '}
                        <span className={`${billing === 'annual' ? 'text-brand-orange-foreground' : 'text-brand-orange'} font-semibold`}>
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
                      <p className="mt-2 text-xs text-muted-foreground">{plan.billingNote}</p>
                    </div>

                    <div className="mt-3 inline-flex items-center justify-center">
                      <span className="rounded-full bg-brand-orange px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                        🚀 Launch offer — {savingsPercent}% off
                      </span>
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
                        Start 14-day free trial <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })()}

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Launch pricing is available for a limited time. Lock in your rate by starting a
              trial today.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Pricing FAQs</h2>
              <p className="mt-4 text-muted-foreground">
                Quick answers to common questions about the trial, billing, and whether Donna
                is a fit.
              </p>
              <div className="mt-8">
                <FaqList items={pricingFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-sm font-semibold text-foreground">Still not sure?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                If you want to confirm Donna fits your workflow, these pages cover the core
                Gmail-native model and common questions.
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
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Have Questions?</h2>
          <p className="mb-6 text-muted-foreground">
            Check out our FAQ or contact us for more information.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="outline" asChild>
              <Link href="/faq">View FAQ</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
