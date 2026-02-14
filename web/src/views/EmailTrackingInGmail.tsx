import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const emailTrackingFaqs: FaqItem[] = [
  {
    question: 'What is email tracking in Gmail?',
    answer:
      "Email tracking helps you see engagement for emails you send - opens and link clicks - so you can follow up with better timing and context.",
  },
  {
    question: 'How does open tracking work?',
    answer:
      "Open tracking records an event when the recipient's email client loads the tracking image included in the email you send.",
  },
  {
    question: 'How does click tracking work?',
    answer:
      "Click tracking records an event when someone clicks a tracked link in your email. It's useful for proposals, docs, and key resources.",
  },
  {
    question: 'Where can I read about privacy?',
    answer: (
      <>
        Read the{' '}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>{' '}
        for details about data handling and permissions.
      </>
    ),
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
                Track engagement from Gmail | Follow up with better timing | Keep context in one place
              </p>
            </div>

            <ScreenshotCard
              src="/screenshots/Context%20Bar.png"
              alt="Donna CRM sidebar inside Gmail"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                What is email tracking?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Email tracking helps you see opens and tracked link clicks so you can follow up with
                better timing. It's most useful for proposals, important follow-ups, and outreach
                where timing matters.
              </p>
              <p className="mt-4 text-muted-foreground">
                Learn more about the Gmail-native workflow in our{' '}
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  Gmail CRM guide
                </Link>
                .
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Use cases</p>
              <ul className="mt-4 space-y-3">
                {[
                  'Proposals: follow up after a likely read window',
                  'Cold outreach: focus on the threads with interest',
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
              How tracking works
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Opens',
                  body: 'Donna includes a tracking image in emails you choose. When the recipient loads images, Donna records an open event.',
                },
                {
                  title: 'Clicks',
                  body: 'Donna tracks clicks on tracked links in your email so you can see interest in proposals, docs, and resources.',
                },
                {
                  title: 'Reporting',
                  body: 'View engagement alongside the thread so you can prioritize follow-ups and keep your pipeline up to date.',
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
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">FAQs</h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <FaqList items={emailTrackingFaqs} />
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <p className="text-sm font-semibold text-foreground">Try Donna CRM</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Install the extension and track engagement directly from Gmail.
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
                  Also useful:{' '}
                  <Link
                    href="/inbox-onboarding"
                    className="underline underline-offset-2"
                  >
                    inbox onboarding
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
