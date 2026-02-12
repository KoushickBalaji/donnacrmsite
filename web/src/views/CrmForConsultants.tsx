import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const crmForConsultantsFaqs: FaqItem[] = [
  {
    question: 'How is this different from a traditional consultant CRM?',
    answer:
      'Donna is optimized for staying in Gmail. It’s a lightweight system for tracking client context, engagement stage, and next steps—without heavy configuration.',
  },
  {
    question: 'What pipeline stages work well for consulting?',
    answer:
      'A simple default is Discovery → Proposal → Active → Renewal. Keep stages minimal and focus on always capturing the next step.',
  },
  {
    question: 'Can I use Donna for multiple engagement types?',
    answer:
      'Yes. Use separate pipelines for different workflows (for example, advisory work vs retainer renewals) while keeping your day-to-day inside Gmail.',
  },
  {
    question: 'Is Donna a project management tool?',
    answer:
      'Donna focuses on relationship and follow-up tracking in Gmail. If you need full project planning, pair it with your preferred PM tool.',
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

export function CrmForConsultantsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                CRM for consultants inside Gmail
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Stay on top of follow-ups, engagement status, and client context without switching
                tabs. Built for solo consultants who live in Gmail.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_consultants_hero_primary' })}
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

              <p className="mt-4 text-sm text-muted-foreground">
                Lightweight by design · Minimal setup · Works from your inbox
              </p>
            </div>

            <ScreenshotCard
              src="/screenshots/Context%20Bar.png"
              alt="Consulting client context shown next to a Gmail thread"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Common consulting workflow problems
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  'Follow-ups get buried in threads',
                  'Engagement status lives in docs or memory',
                  'Deliverables and next steps aren’t captured consistently',
                  'A “team CRM” is too heavy for a solo workflow',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">The consultant-friendly loop</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Thread → client context → engagement stage → next step. The goal isn’t perfect data.
                It’s consistent follow-through.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/pricing" className="text-primary hover:underline">
                  See pricing →
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Use pipelines as engagement stages
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              A simple consulting pipeline keeps you honest about where each client stands:
              Discovery → Proposal → Active → Renewal.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                {[
                  { title: 'Discovery', body: 'Early conversations and fit assessment.' },
                  { title: 'Proposal', body: 'Scope, pricing, and decision timelines.' },
                  { title: 'Active', body: 'Deliverables, check-ins, and next milestones.' },
                  { title: 'Renewal', body: 'Retainer renewal or follow-on work.' },
                ].map((stage) => (
                  <Card key={stage.title} className="border-border bg-background">
                    <CardContent className="p-5">
                      <p className="font-semibold text-foreground">{stage.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{stage.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScreenshotCard
                src="/screenshots/Pipeline.png"
                alt="Consulting engagement stages shown in a pipeline"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Tasks and reminders tied to clients
              </h2>
              <p className="mt-4 text-muted-foreground">
                Consulting work is follow-up work: scheduling, confirming, nudging, and closing the
                loop. Capture tasks right where the conversation happens.
              </p>
              <p className="mt-4 text-muted-foreground">
                Want help drafting the follow-up? See{' '}
                <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                  AI Gmail CRM
                </Link>
                .
              </p>
            </div>

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
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                FAQs
              </h2>
              <div className="mt-8">
                <FaqList items={crmForConsultantsFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <p className="text-sm font-semibold text-foreground">Install Donna CRM</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Install the extension and start tracking a real consulting thread in minutes.
              </p>
              <div className="mt-5">
                <Button asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_consultants_bottom_cta' })}
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
