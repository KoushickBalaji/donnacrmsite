import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const inboxOnboardingFaqs: FaqItem[] = [
  {
    question: 'What is “inbox onboarding”?',
    answer:
      'Inbox onboarding is a guided setup flow that starts from your real email: it helps you create a lightweight structure (like pipelines and stages) that matches how you already work in Gmail.',
  },
  {
    question: 'What does it do (and not do)?',
    answer:
      'It helps you get to a sensible starting point quickly. It’s not a fully automated background agent, and it won’t replace your judgment about which contacts and deals matter.',
  },
  {
    question: 'Do I need to connect anything besides Gmail?',
    answer:
      'Donna runs as a Chrome extension inside Gmail. You’ll be guided through any permissions needed for the workflow you choose.',
  },
  {
    question: 'Is this safe for sensitive inboxes?',
    answer:
      'Treat AI like a drafting and organization tool. Avoid sharing sensitive information you wouldn’t put in an email, and review suggestions before you act.',
  },
  {
    question: 'Where can I read about data and privacy?',
    answer:
      'See the Privacy Policy for details about data handling and permissions.',
  },
]

const primaryCtaLabel = 'Start onboarding — Free Trial'

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

export function InboxOnboardingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Set up your CRM from your Gmail inbox
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Don’t start from blank fields. Start from real conversations. Inbox onboarding helps
                you get to a lightweight setup fast—so you can track deals and follow-ups without
                leaving Gmail.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'inbox_onboarding_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/ai-gmail-crm">How the assistant helps</Link>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Lightweight setup · Human-in-the-loop · You stay in control
              </p>
            </div>

            <ScreenshotCard
              src="/screenshots/Context%20Bar.png"
              alt="Donna CRM context sidebar inside Gmail"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Start with what you already do
              </h2>
              <p className="mt-4 text-muted-foreground">
                Most solo operators already have a system—it’s just scattered across threads,
                calendar reminders, and notes. Inbox onboarding helps you turn that into a simple,
                repeatable workflow inside Gmail.
              </p>
              <p className="mt-4 text-muted-foreground">
                If you’re new here, start with the Gmail CRM overview first:{' '}
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  /gmail-crm
                </Link>
                .
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">A sensible “first setup”</p>
              <ul className="mt-4 space-y-3">
                {[
                  'Pick a lightweight pipeline (or use a simple default)',
                  'Define 3–6 stages you’ll actually remember',
                  'Start tracking real threads right away',
                  'Capture next steps as tasks before you close the tab',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href="/pricing" className="text-primary hover:underline">
                  Pricing →
                </Link>
                <Link href="/features" className="text-primary hover:underline">
                  Features →
                </Link>
                <Link href="/faq" className="text-primary hover:underline">
                  FAQ →
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl rounded-xl border border-border bg-background p-8">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Permissions and privacy (high level)
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Inbox workflows can touch sensitive information. Keep the mental model simple:
              treat AI like a drafting and organization tool, and review suggestions before you
              take action—especially anything client-facing.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              See the{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{' '}
              for details.
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
                <FaqList items={inboxOnboardingFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Ready to start?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Install the extension and set up a simple workflow from your inbox.
              </p>
              <div className="mt-5">
                <Button asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'inbox_onboarding_bottom_cta' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Also useful: <Link href="/email-tracking-in-gmail" className="underline underline-offset-2">email tracking in Gmail</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

