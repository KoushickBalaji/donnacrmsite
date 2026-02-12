import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const crmForFreelancersFaqs: FaqItem[] = [
  {
    question: 'Is this a freelancer client tracker or a full CRM?',
    answer:
      'Think of Donna as a lightweight client tracker that lives in Gmail: contacts, deal/gig stages, and follow-ups—without a heavy setup.',
  },
  {
    question: 'What pipeline stages work for freelance gigs?',
    answer:
      'A simple default is Lead → Quote → In progress → Paid. Keep stages small and focus on capturing next steps.',
  },
  {
    question: 'Can I track proposals and follow-ups?',
    answer:
      'Yes. Use tasks for follow-ups, and keep proposal context attached to the client and thread so you don’t lose the story.',
  },
  {
    question: 'Does Donna replace invoicing tools?',
    answer:
      'No. Donna focuses on relationship and follow-up tracking in Gmail. Keep invoicing in your existing billing tool.',
  },
]

const primaryCtaLabel = 'Add to Gmail — Free Trial'

function ScreenshotCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Card className="border-border bg-muted/30">
      <CardContent className="p-6">
        <img
          src={src}
          alt={alt}
          className="w-full rounded-md border border-border bg-background object-contain"
          loading="lazy"
        />
      </CardContent>
    </Card>
  )
}

export function CrmForFreelancersPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                CRM for freelancers inside Gmail
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                A lightweight client tracker that lives in Gmail. Track leads, quotes, and follow-ups
                without adopting a “team CRM”.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_freelancers_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/gmail-crm">Gmail CRM overview</Link>
                </Button>
              </div>
            </div>

            <ScreenshotCard
              src="/screenshots/Contacts.png"
              alt="Freelancer client contacts tracked inside Gmail"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Track work without a “team CRM”
              </h2>
              <p className="mt-4 text-muted-foreground">
                Freelancers don’t need complex admin. You need a consistent place to track who you’re
                talking to, what you promised, and when to follow up.
              </p>

              <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
                <p className="text-sm font-semibold text-foreground">A simple gig pipeline</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lead → Quote → In progress → Paid
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  When in doubt, keep fewer stages and focus on capturing the next step.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <ScreenshotCard
                src="/screenshots/Pipeline.png"
                alt="Freelance gig stages shown as a pipeline"
              />
              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-sm font-semibold text-foreground">Internal links</p>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  <Link href="/gmail-crm" className="text-primary hover:underline">
                    Gmail CRM pillar →
                  </Link>
                  <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                    AI assistant page →
                  </Link>
                <Link href="/pricing" className="text-primary hover:underline">
                  Pricing →
                </Link>
                <Link href="/email-tracking-in-gmail" className="text-primary hover:underline">
                  Email tracking →
                </Link>
                <Link href="/resources" className="text-primary hover:underline">
                  Resources →
                </Link>
              </div>
            </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl rounded-xl border border-border bg-muted/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Templates and follow-up habits
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Most freelance deals are won on follow-up. Use Donna’s lightweight workflow to stay
              consistent: draft the follow-up, capture the next step, and keep proposal context tied
              to the client.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Learn how the assistant can help with drafts and prioritization on{' '}
              <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                /ai-gmail-crm
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                FAQs
              </h2>
              <div className="mt-8">
                <FaqList items={crmForFreelancersFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Try Donna CRM</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Install the extension and start tracking a real client thread in minutes.
              </p>
              <div className="mt-5">
                <Button asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_freelancers_bottom_cta' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
