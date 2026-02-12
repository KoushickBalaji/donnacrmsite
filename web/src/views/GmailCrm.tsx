import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const gmailCrmFaqs: FaqItem[] = [
  {
    question: 'What is a Gmail CRM?',
    answer:
      'A Gmail CRM is a lightweight CRM that lives inside Gmail, so you can track contacts, deals, notes, and follow-ups while you work in email.',
  },
  {
    question: 'Is Donna CRM a full CRM replacement?',
    answer:
      'Donna CRM is designed for individuals who live in Gmail and want a simple system for contacts, deal stages, and next steps—without a heavy admin setup.',
  },
  {
    question: 'Do I need to set up pipelines and fields?',
    answer:
      'You can start simple and keep it lightweight. Most solo workflows work well with a small pipeline and a handful of stages.',
  },
  {
    question: 'Does Donna work for teams?',
    answer:
      'Donna is optimized for solo operators. If you need deep role permissions and complex reporting, a team CRM may be a better fit.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Install the Chrome extension, open Gmail, and start tracking a real thread: add the contact, add context, and capture the next step as a task.',
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

export function GmailCrmPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/50">
                Pillar page
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Manage contacts, deals, and follow-ups without leaving Gmail
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Donna CRM is a Gmail-native CRM for solo operators. Keep relationship context next
                to the conversation—and capture next steps before they slip.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'gmail_crm_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                No setup · No credit card · Uninstall anytime
              </p>
            </div>

            <ScreenshotCard
              src="/screenshots/Overview.png"
              alt="Donna CRM inside Gmail (overview)"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                What is a Gmail CRM?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A Gmail CRM helps you run a simple client or deal workflow from your inbox. Instead
                of switching tools, you keep contact context, deal stage, and tasks alongside real
                email threads.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Donna CRM is built for individuals who want a lightweight system: enough structure
                to stay consistent, without the overhead of a traditional CRM.
              </p>

              <div className="mt-6 rounded-lg border border-border bg-muted/30 p-5">
                <p className="text-sm font-semibold text-foreground">Best for</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Consultants, freelancers, and solo B2B sellers who live in Gmail.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link href="/crm-for-consultants" className="text-primary hover:underline">
                    CRM for consultants →
                  </Link>
                  <Link href="/crm-for-freelancers" className="text-primary hover:underline">
                    CRM for freelancers →
                  </Link>
                  <Link
                    href="/crm-for-solo-b2b-sales"
                    className="text-primary hover:underline"
                  >
                    CRM for solo sales →
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ScreenshotCard
                src="/screenshots/Contacts.png"
                alt="Contact management inside Gmail"
              />
              <ScreenshotCard
                src="/screenshots/Pipeline.png"
                alt="Pipeline tracking inside Gmail"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              A workflow that stays in your inbox
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Keep your process simple and repeatable. A good Gmail CRM is less about fields, and
              more about capturing the next step consistently.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Thread → Contact',
                  body: 'Turn real conversations into a contact record with notes and context.',
                },
                {
                  title: 'Contact → Deal stage',
                  body: 'Track what’s happening right now: lead, proposal, active, renewal.',
                },
                {
                  title: 'Deal stage → Next step',
                  body: 'Capture follow-ups as tasks so nothing gets forgotten.',
                },
              ].map((step) => (
                <Card key={step.title} className="border-border bg-background">
                  <CardContent className="p-6">
                    <p className="text-base font-semibold text-foreground">{step.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/features" className="text-primary hover:underline">
                Explore features →
              </Link>
              <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                How the AI assistant helps →
              </Link>
              <Link href="/inbox-onboarding" className="text-primary hover:underline">
                Inbox onboarding →
              </Link>
              <Link href="/email-tracking-in-gmail" className="text-primary hover:underline">
                Email tracking →
              </Link>
              <Link href="/pricing" className="text-primary hover:underline">
                Pricing →
              </Link>
              <Link href="/resources" className="text-primary hover:underline">
                Resources →
              </Link>
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
              <p className="mt-4 text-muted-foreground">
                Quick answers for common “is this for me?” questions.
              </p>
              <div className="mt-8">
                <FaqList items={gmailCrmFaqs} />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                For data and privacy details, see our <Link className="text-primary hover:underline" href="/privacy">Privacy Policy</Link>.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Ready to try it?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Install in under 2 minutes and start tracking a real thread today.
              </p>
              <div className="mt-5">
                <Button asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'gmail_crm_bottom_cta' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Human-in-the-loop: review AI suggestions before acting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
