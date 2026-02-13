import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const aiGmailCrmFaqs: FaqItem[] = [
  {
    question: 'What does "human-in-the-loop" mean?',
    answer:
      'It means the assistant can suggest drafts and next steps, but you stay in control and review before anything important happens.',
  },
  {
    question: 'Does the AI send emails automatically?',
    answer:
      'Donna is designed to keep you in control. Use the assistant to draft and prepare actions, then review and send yourself.',
  },
  {
    question: 'What can the AI help with inside Gmail?',
    answer:
      'Common workflows include summarizing threads, drafting follow-ups, and helping you capture next steps as tasks or notes.',
  },
  {
    question: 'Is AI output always correct?',
    answer:
      'No. Like any AI tool, it can be wrong. Always double-check facts, dates, and names-especially in client communication.',
  },
  {
    question: 'Where can I learn more about privacy?',
    answer:
      'Review the Privacy Policy for details about how the website and product handle data and permissions.',
  },
]

const primaryCtaLabel = 'Try the AI assistant - Free Trial'

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

export function AiGmailCrmPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/50">
                AI assistant in Gmail
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                An AI assistant that turns conversations into next steps
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Donna CRM pairs a Gmail-native CRM with an assistant that helps you move faster-while
                keeping you in control.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'ai_gmail_crm_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/gmail-crm">What is a Gmail CRMv</Link>
                </Button>
              </div>

              <div className="mt-6 rounded-lg border border-border bg-muted/30 p-5">
                <p className="text-sm font-semibold text-foreground">In plain English</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Donna is a Gmail-native CRM for individuals, with an assistant that helps you
                  summarize, draft, and capture next steps-without taking action behind your back.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <ScreenshotCard
                src="/screenshots/Overview.png"
                alt="Donna CRM AI assistant in the Gmail sidebar"
              />
              <ScreenshotCard
                src="/screenshots/Context%20Bar.png"
                alt="Donna CRM context sidebar inside Gmail"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              What "human-in-the-loop" means here
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              "Agentic" only matters if it's safe. The goal is simple: the assistant helps you
              prepare actions quickly, and you confirm the final outcome.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Grounded in context',
                  body: 'Work where you already are: a real thread, a real contact, and a real next step.',
                },
                {
                  title: "Suggests, doesn't assume",
                  body: 'Get drafts and recommendations you can accept, edit, or ignore.',
                },
                {
                  title: 'You stay in control',
                  body: 'You review what gets sent or saved-especially anything client-facing.',
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

      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Practical examples inside Gmail
              </h2>
              <p className="mt-4 text-muted-foreground">
                Use the assistant where it saves time: summarizing, drafting, and converting
                conversations into clear next steps.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Summarize a long thread before you reply',
                  'Draft a follow-up and rewrite it in your voice',
                  'Create tasks for next steps and follow-ups',
                  'Capture deal notes and update status after a meeting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href="/features" className="text-primary hover:underline">
                  Explore features
                </Link>
                <Link href="/inbox-onboarding" className="text-primary hover:underline">
                  Inbox onboarding
                </Link>
                <Link href="/email-tracking-in-gmail" className="text-primary hover:underline">
                  Email tracking
                </Link>
                <Link href="/pricing" className="text-primary hover:underline">
                  Pricing
                </Link>
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-sm font-semibold text-foreground">Inbox onboarding (optional)</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  If you want a faster starting point, ask the assistant to recommend a lightweight
                  setup from your real inbox. It can propose pipelines, contacts, and next-step
                  tasks-and you review before anything is created.
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/inbox-onboarding" className="text-primary hover:underline">
                    Learn about inbox onboarding
                  </Link>
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-sm font-semibold text-foreground">Accuracy + privacy note</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  AI suggestions can be incorrect. Avoid sharing sensitive information you wouldn't
                  put in an email, and always review drafts before you send or save changes.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  For details about data handling and permissions, see our{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
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
                <FaqList items={aiGmailCrmFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Try Donna CRM</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Install the extension and see the assistant in your Gmail sidebar.
              </p>
              <div className="mt-5">
                <Button asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'ai_gmail_crm_bottom_cta' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Looking for a Gmail CRM first? Start with <Link href="/gmail-crm" className="underline underline-offset-2">/gmail-crm</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
