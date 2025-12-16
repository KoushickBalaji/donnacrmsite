import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'

const plans = [
  {
    name: 'Basic',
    price: '$0',
    period: '',
    description: 'Core CRM inside Gmail to help you stay organized.',
    features: [
      'Contacts, pipelines, tasks, templates, and tracking inside Gmail',
      'Single-user account',
      'Email support',
    ],
    cta: 'Install extension',
    popular: false,
  },
  {
    name: 'Paid',
    price: '$10',
    period: 'per month',
    description: 'Unlock AI Assistant and paid features.',
    features: [
      'Everything in Basic',
      'AI Assistant access',
      '14-day trial included',
      'Email support',
    ],
    cta: 'Start 14-day trial',
    popular: true,
  },
] as const

export function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Start with Basic, then unlock Paid features when you’re ready.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Paid includes a 14-day trial that starts on sign-up.
              {/* TODO: If billing flow changes, update this copy to match the product. */}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative border-border ${
                  plan.popular ? 'scale-[1.03] border-primary shadow-lg' : ''
                }`}
              >
                {plan.popular ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                      Recommended
                    </span>
                  </div>
                ) : null}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period ? (
                      <span className="ml-2 text-muted-foreground">
                        /{plan.period}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  {plan.name === 'Paid' ? (
                    <p className="mt-2 text-xs text-muted-foreground">
                      $8/month billed annually
                      {/* TODO: Confirm whether annual billing is displayed elsewhere and link to it. */}
                    </p>
                  ) : null}
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a
                      href="https://chromewebstore.google.com/detail/donna-crm/fadjjpednmcoomcpajkfbpchankdoiip"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
              <Link to="/faq">View FAQ</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
