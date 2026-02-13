import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const emailTrackingFaqs: FaqItem[] = [
  {
    question: 'What is email tracking in Gmail?',
    answer:
      "Email tracking is a way to see engagement signals like opens and link clicks for sent emails (where supported). It's useful for follow-ups, but it's not perfect.",
  },
  {
    question: 'Is open tracking always accurate?',
    answer:
      'No. Opens can be affected by image blocking and privacy features. Treat opens as a signal-not a source of truth.',
  },
  {
    question: 'What about click tracking?',
    answer:
      'Click tracking typically applies to tracked links. Results can vary by email client and recipient settings.',
  },
  {
    question: 'Is email tracking legal?',
    answer:
      'It depends on your audience and region. Make sure you understand consent and disclosure requirements for your use case.',
  },
  {
    question: 'Where can I read about privacy?',
    answer:
      'See the Privacy Policy for details about data handling and permissions.',
  },
]

const primaryCtaLabel = 'Add to Gmail - Free Trial'

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

export function EmailTrackingInGmailPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Email tracking in Gmail (opens & clicks)
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Use engagement signals to time follow-ups better-without leaving your inbox. Donna
                CRM brings tracking into Gmail alongside contacts and pipelines.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'email_tracking_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/features">See all features</Link>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Signals, not guarantees | Be mindful of compliance
              </p>
            </div>

            <ScreenshotCard
              src="/screenshots/Campaigns.png"
              alt="Campaigns and engagement tracking overview in Donna CRM"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                What is email trackingv
              </h2>
              <p className="mt-4 text-muted-foreground">
                Email tracking helps you see whether an email was opened and whether tracked links
                were clicked (where supported). It's most useful for proposals, important follow-ups,
                and outreach where timing matters.
              </p>
              <p className="mt-4 text-muted-foreground">
                If you want the Gmail-native CRM basics first, start here:{' '}
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  /gmail-crm
                </Link>
                .
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Use cases</p>
              <ul className="mt-4 space-y-3">
                {[
                  'Proposals: follow up after a likely read window',
                  'Cold outreach: prioritize replies and warm signals',
                  'Renewals: notice engagement before a deadline',
                  'Campaigns: understand aggregate engagement trends',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href="/crm-for-consultants" className="text-primary hover:underline">
                  Consultants
                </Link>
                <Link href="/crm-for-freelancers" className="text-primary hover:underline">
                  Freelancers
                </Link>
                <Link href="/crm-for-solo-b2b-sales" className="text-primary hover:underline">
                  Solo sales
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl rounded-xl border border-border bg-background p-8">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              How tracking works (high level)
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Opens',
                  body: 'Affected by image blocking and privacy features. Helpful signal, not a guarantee.',
                },
                {
                  title: 'Clicks',
                  body: 'Usually applies to tracked links. Can vary by client and recipient settings.',
                },
                {
                  title: 'Reporting',
                  body: 'Use trends to prioritize follow-ups and understand what resonates over time.',
                },
              ].map((item) => (
                <Card key={item.title} className="border-border bg-muted/30">
                  <CardContent className="p-6">
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Compliance note</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Laws and norms vary. If you're tracking for regulated audiences or certain regions,
                make sure your disclosures and consent flow are appropriate.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                See{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{' '}
                for details.
              </p>
            </div>
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
                <FaqList items={emailTrackingFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Try Donna CRM</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Install the extension and manage your workflow from Gmail.
              </p>
              <div className="mt-5">
                <Button asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'email_tracking_bottom_cta' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Also useful: <Link href="/inbox-onboarding" className="underline underline-offset-2">inbox onboarding</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
