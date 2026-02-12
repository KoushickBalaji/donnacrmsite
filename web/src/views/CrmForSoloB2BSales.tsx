import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const crmForSoloB2BSalesFaqs: FaqItem[] = [
  {
    question: 'What is a “solo sales CRM”?',
    answer:
      'A solo sales CRM is a lightweight system for one person to track deals, next steps, and follow-ups—without the overhead of a team CRM.',
  },
  {
    question: 'How does this help me avoid stale CRM data?',
    answer:
      'By keeping context and next steps next to email threads, it’s easier to update deal status while the conversation is fresh.',
  },
  {
    question: 'Can I track deal stages from email threads?',
    answer:
      'Yes. Use a simple pipeline for stages like Lead → Meeting → Proposal → Negotiation → Closed, and capture tasks for the next step.',
  },
  {
    question: 'Does Donna automate follow-ups?',
    answer:
      'Donna helps you capture and prioritize follow-ups. Always review drafts and actions before sending anything client-facing.',
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

export function CrmForSoloB2BSalesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                A solo B2B sales CRM inside Gmail
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Track deals and next steps from the same place you’re selling: your inbox. Keep deal
                context next to real threads so follow-ups don’t slip.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_solo_sales_hero_primary' })}
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
              src="/screenshots/Pipeline.png"
              alt="Solo sales deal stages tracked in a pipeline"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Why solo sellers lose deals
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  'No clear next step after a call',
                  'Follow-ups spread across threads, notes, and calendar reminders',
                  'Deal status isn’t updated while it’s fresh',
                  'Important context gets lost when a thread goes quiet',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">
                Thread → deal → next step
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The fastest way to keep your CRM accurate is to update it while you’re already in
                the conversation. Capture the deal stage, add a note, and create the next task in
                the same flow.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                  See how the assistant helps →
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Deal stages you can copy
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Keep the pipeline simple. If you can’t remember the stage definitions, there are too
              many stages.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-5">
              {['Lead', 'Meeting', 'Proposal', 'Negotiation', 'Closed'].map((stage) => (
                <Card key={stage} className="border-border bg-muted/30">
                  <CardContent className="p-5 text-center">
                    <p className="text-sm font-semibold text-foreground">{stage}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
              <ScreenshotCard
                src="/screenshots/Context%20Bar.png"
                alt="Deal context displayed next to a Gmail thread"
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
                <FaqList items={crmForSoloB2BSalesFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Try Donna CRM</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Install the extension and run your solo sales workflow directly from Gmail.
              </p>
              <div className="mt-5">
                <Button asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_solo_sales_bottom_cta' })}
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
