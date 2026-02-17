import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
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

export const pricingFaqs: FaqItem[] = [
  {
    question: 'How does the 14-day free trial work?',
    answer:
      'Your trial starts on sign-up. You can use Donna CRM in your real Gmail workflow during the trial, and you can cancel anytime before the trial ends to avoid being charged.',
  },
  {
    question: 'What happens after the trial?',
    answer:
      'After the trial, continue on the same plan for $10/month. Annual billing is available at an effective $8/month billed annually.',
  },
  {
    question: 'Is there more than one plan?',
    answer:
      'No. Donna CRM keeps pricing simple with one plan that includes the core Gmail CRM workflow, tracking, campaigns, and AI assistant access.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. You can cancel during the trial or later. You will not be charged if you cancel before the trial ends.',
  },
  {
    question: 'Is this built for teams?',
    answer:
      'Donna CRM is optimized for individuals and solo operators. If you need complex team permissions and reporting, a team CRM may be a better fit.',
  },
]

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

      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Pricing FAQs</h2>
              <p className="mt-4 text-muted-foreground">
                Quick answers to common questions about the trial, billing, and whether Donna is a fit.
              </p>
              <div className="mt-8">
                <FaqList items={pricingFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-sm font-semibold text-foreground">Still not sure?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                If you want to confirm Donna fits your workflow, these pages cover the core Gmail-native model and common questions.
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
