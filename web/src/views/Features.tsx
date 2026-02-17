import {
  ArrowRight,
  ClipboardList,
  Mail,
  MailOpen,
  Target,
  Users,
} from 'lucide-react'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

type FeatureSection = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
  details: string[]
  screenshotSrc?: string
  screenshotAlt: string
}

function Screenshot({
  icon: Icon,
  src,
  alt,
}: {
  icon: FeatureSection['icon']
  src?: string
  alt: string
}) {
  return (
    <Card className="border-border bg-muted/30">
      <CardContent className="flex min-h-[300px] items-center justify-center p-6">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="max-h-[320px] w-full rounded-md border border-border object-contain bg-background"
            loading="lazy"
          />
        ) : (
          <div className="w-full">
            <div className="relative overflow-hidden rounded-md border border-border bg-background p-8 text-center">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-primary/5 blur-2xl" />
              <Icon className="mx-auto h-16 w-16 text-primary/25" />
              <p className="mt-4 text-sm font-medium text-foreground">
                Preview in Donna CRM
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Screenshots vary by workflow.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

const featureSections: FeatureSection[] = [
  {
    icon: Mail,
    title: 'AI Assistant',
    description:
      'An assistant inside Gmail to help you work faster, with less context switching.',
    details: [
      'Available inside the Gmail sidebar while you work',
      'Designed to support everyday CRM and outreach workflows',
      'Works alongside contacts, pipelines, tasks, and campaigns',
    ],
    screenshotSrc: '/screenshots/Overview.png',
    screenshotAlt: 'AI Assistant in Donna CRM',
  },
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Keep contacts organized and accessible right within Gmail.',
    details: [
      'Create and update contact profiles',
      'Add notes and tags for better organization',
      'Quickly search and filter contacts',
      'Import contacts from CSV and Google Sheets',
      'Inbox onboarding can recommend a starting setup (with confirmation)',
    ],
    screenshotSrc: '/screenshots/Contacts.png',
    screenshotAlt: 'Contacts in Donna CRM',
  },
  {
    icon: Target,
    title: 'Pipeline Tracking',
    description: 'Track work through simple, stage-based pipelines for any workflow.',
    details: [
      'Kanban-style pipeline boards',
      'Customizable stages',
      'Move items between stages as work progresses',
      'Use pipelines for sales, recruiting, partnerships, support, and more',
    ],
    screenshotSrc: '/screenshots/Pipeline.png',
    screenshotAlt: 'Pipeline Tracking in Donna CRM',
  },
  {
    icon: ClipboardList,
    title: 'Task Management',
    description: 'Capture next steps and stay on top of follow-ups.',
    details: [
      'Create tasks linked to contacts or pipeline items',
      'Set due dates and track completion',
      'Use the assistant to turn threads into clear next steps',
    ],
    screenshotSrc: '/screenshots/Context%20Bar.png',
    screenshotAlt: 'Tasks in Donna CRM',
  },
  {
    icon: Mail,
    title: 'Bulk Email Campaigns',
    description: 'Send one message to many recipients, with basic personalization.',
    details: [
      'Create campaigns using your saved contacts',
      'Reuse templates to keep messaging consistent',
      'Basic merge fields: sender name, recipient name, company name',
    ],
    screenshotSrc: '/screenshots/Campaigns.png',
    screenshotAlt: 'Bulk Email Campaigns in Donna CRM',
  },
  {
    icon: MailOpen,
    title: 'Email Tracking',
    description: 'Understand engagement across regular emails and campaigns.',
    details: [
      'Open tracking (where supported): a helpful signal, not a guarantee',
      'Click tracking (where supported): typically applies to tracked links',
      'Campaign analytics show to-date totals for opens, clicks, and unsubscribes',
      'Follow-ups: turn engagement into a clear next step',
    ],
    screenshotSrc: '/screenshots/Campaigns.png',
    screenshotAlt: 'Email Tracking in Donna CRM',
  },
]

export const featuresFaqs: FaqItem[] = [
  {
    question: 'Does Donna work inside Gmail?',
    answer:
      'Yes. Donna runs as a Chrome extension and lives in your Gmail sidebar. The goal is to keep context, stages, and next steps close to the thread so you do not have to switch tabs to keep your CRM updated.',
  },
  {
    question: 'Is the AI assistant required?',
    answer:
      'No. You can use Donna as a Gmail-native CRM without the assistant. When you do use AI, it is designed to be human-in-the-loop: it suggests drafts and next steps, and you review before acting.',
  },
  {
    question: 'Can I import contacts?',
    answer:
      'Yes. You can import contacts from CSV and Google Sheets, then add notes and tags to preserve context. Many people start with active relationships first, then import more once the workflow feels natural.',
  },
  {
    question: 'How reliable is email tracking?',
    answer:
      'Tracking is a helpful signal, but it is not perfect. Some recipients block images or use privacy features that affect opens and clicks. Use tracking to prioritize follow-ups, not as proof that someone read your message.',
  },
  {
    question: 'Where should I start if I am new to Gmail CRMs?',
    answer:
      'Start with a simple pipeline and the next-step habit: every active relationship has a follow-up task. Once that loop works, explore AI onboarding and tracking to move faster with less manual admin.',
  },
]

export function FeaturesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Features Built for Gmail Workflows
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Donna CRM keeps CRM and outreach tools inside Gmail-so you can move
              faster without switching tabs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="space-y-16">
            {featureSections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <section.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">{section.description}</p>
                  <ul className="space-y-3">
                    {section.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <Screenshot
                    icon={section.icon}
                    src={section.screenshotSrc}
                    alt={section.screenshotAlt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Feature FAQs</h2>
              <p className="mt-4 text-muted-foreground">
                Quick answers to common questions about what is included and how the workflow fits inside Gmail.
              </p>
              <div className="mt-8">
                <FaqList items={featuresFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-sm font-semibold text-foreground">Explore next</p>
              <p className="mt-2 text-sm text-muted-foreground">
                If you are evaluating tools, these pages go deeper on pricing and the Gmail-native workflow.
              </p>
              <div className="mt-5 flex flex-col gap-2 text-sm font-semibold">
                <Link href="/pricing" className="text-primary hover:underline">
                  See pricing
                </Link>
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  Gmail CRM overview
                </Link>
                <Link href="/resources" className="text-primary hover:underline">
                  Resources and templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Install Donna CRM in Minutes
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Add Donna CRM to Chrome and start managing your relationships directly
              inside Gmail.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'features_bottom_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Gmail - Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
