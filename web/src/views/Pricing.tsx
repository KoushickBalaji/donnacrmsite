import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const plan = {
  trialLabel: '14-day free trial',
  priceAfterTrial: '$10',
  period: 'month',
  annualNote: '$8/month billed annually',
  description: 'Start with 14 days free, then keep going for $10/month.',
  features: [
    'CRM inside Gmail (contacts, pipelines, tasks, templates, tracking)',
    'Email campaigns + engagement tracking',
    'AI Assistant access',
    'Email support',
  ],
  cta: 'Start 14-day free trial',
} as const

export function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background pt-14 pb-8 lg:pt-20 lg:pb-12">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Start with a 14-day free trial, then pay to keep using Donna CRM.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Your trial starts on sign-up. After 14 days, continue for $10/month.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background pt-6 pb-16 lg:pt-8 lg:pb-20">
        <div className="container">
          <div className="mx-auto flex max-w-3xl justify-center">
            <div className="relative w-full">
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground shadow-sm">
                  {plan.trialLabel}
                </span>
              </div>

              <Card className="relative w-full overflow-hidden border-primary/40 shadow-lg">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                <CardHeader className="relative text-center pb-4">
                  <div className="mt-5">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-foreground">Free</span>
                      <span className="text-muted-foreground">for 14 days</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Then{' '}
                      <span className="font-semibold text-foreground">
                        {plan.priceAfterTrial}
                      </span>
                      /{plan.period}
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{plan.annualNote}</p>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" asChild>
                    <a
                      href={chromeWebStoreInstallUrl({
                        content: 'pricing_primary',
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Cancel anytime during your trial.
                  </p>
                </CardContent>
              </Card>
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
