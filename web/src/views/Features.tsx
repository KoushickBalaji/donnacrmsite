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
import { Eyebrow } from '../components/Eyebrow'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { ScrollSnapActivator } from '../components/ScrollSnapActivator'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

type FeatureSection = {
  icon: ComponentType<{ className?: string }>
  title: string
  headline: string
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
    <Card className="border-border/60 bg-muted/30 shadow-lg ring-1 ring-black/[0.04]">
      <CardContent className="flex min-h-[300px] items-center justify-center p-6">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="max-h-[320px] w-full rounded-lg border border-border/60 object-contain bg-background shadow-sm"
            loading="lazy"
          />
        ) : (
          <div className="w-full">
            <div className="relative overflow-hidden rounded-md border border-border bg-background p-8 text-center">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-blue/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-blue/5 blur-2xl" />
              <Icon className="mx-auto h-16 w-16 text-brand-blue/25" />
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
    headline: 'An AI assistant that lives in your sidebar',
    description:
      'Ask it to summarize threads, draft replies, or turn conversations into tasks. You review everything before it sends.',
    details: [
      'Available inside Gmail while you work - no tab switching',
      'Drafts replies in your voice, you edit before sending',
      'Turns conversations into tasks, notes, and deal updates',
    ],
    screenshotSrc: '/screenshots/Overview%20V2.png',
    screenshotAlt: 'AI Assistant in Donna CRM',
  },
  {
    icon: Users,
    title: 'Contacts',
    headline: 'Every relationship, organized and searchable',
    description:
      'Build a contact database that actually stays up to date - because it lives where your conversations happen.',
    details: [
      'Create profiles with notes, tags, and custom fields',
      'Search and filter to find anyone instantly',
      'Import from CSV or Google Sheets to get started fast',
    ],
    screenshotSrc: '/screenshots/Contacts%20V2.png',
    screenshotAlt: 'Contacts in Donna CRM',
  },
  {
    icon: Target,
    title: 'Pipelines',
    headline: 'Track deals through every stage',
    description:
      'Kanban boards that connect directly to your email threads. Move deals forward without leaving Gmail.',
    details: [
      'Drag-and-drop boards for any workflow',
      'Custom stages that match how you actually sell',
      'Works for sales, recruiting, partnerships, and more',
    ],
    screenshotSrc: '/screenshots/Pipeline%20V2.png',
    screenshotAlt: 'Pipeline Tracking in Donna CRM',
  },
  {
    icon: ClipboardList,
    title: 'Tasks',
    headline: 'Never drop a follow-up again',
    description:
      'Capture next steps the moment they come up - while you\'re still in the conversation.',
    details: [
      'Create tasks linked to contacts and deals',
      'Set due dates so nothing slips through',
      'AI can suggest next steps from your threads',
    ],
    screenshotSrc: '/screenshots/Overview%20V2.png',
    screenshotAlt: 'Tasks in Donna CRM',
  },
  {
    icon: Mail,
    title: 'Campaigns',
    headline: 'Reach your contacts at scale',
    description:
      'Send personalized emails to groups of contacts without leaving Gmail. Templates keep your messaging consistent.',
    details: [
      'Build campaigns from your saved contacts',
      'Reusable templates with merge fields',
      'Personalize with names, companies, and custom data',
    ],
    screenshotSrc: '/screenshots/Campaigns%20V2.png',
    screenshotAlt: 'Bulk Email Campaigns in Donna CRM',
  },
  {
    icon: MailOpen,
    title: 'Tracking',
    headline: 'Know when to follow up',
    description:
      'Open and click tracking gives you signals to prioritize outreach - so you follow up when it matters most.',
    details: [
      'See who opened your emails and clicked your links',
      'Campaign analytics for opens, clicks, and unsubscribes',
      'Use engagement signals to time your follow-ups',
    ],
    screenshotSrc: '/screenshots/Context%20Bar%20V2.png',
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
      <ScrollSnapActivator />
      {/* -- Hero -- */}
      <section data-snap-section className="donna-hero-drift relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>Features</Eyebrow>
              <h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Everything Donna can&nbsp;do
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Contacts, pipelines, tasks, campaigns, tracking, and an AI
                assistant - all inside Gmail, all designed to stay out of
                your&nbsp;way.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Feature sections -- */}
      <section data-snap-section className="bg-background py-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="space-y-24">
            {featureSections.map((section, index) => (
              <Reveal key={section.title}>
                <div
                  className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 space-y-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-blue/5 shadow-sm">
                      <section.icon className="h-5 w-5 text-brand-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {section.headline}
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {section.description}
                    </p>
                    <ul className="space-y-3 pt-2">
                      {section.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ -- */}
      <section data-snap-section className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Common questions
              </h2>
              <div className="mt-8">
                <FaqList items={featuresFaqs} />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-sm font-semibold text-foreground">Explore next</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Evaluating tools? These pages go deeper on pricing and the
                Gmail-native workflow.
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

      {/* -- CTA -- */}
      <section data-snap-section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Ready?</Eyebrow>
            <h2
              className="text-3xl font-bold text-primary-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Try every feature free for 14&nbsp;days
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/60">
              Install the Chrome extension and start using Donna inside Gmail.
              No setup, no credit&nbsp;card.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a
                  href={chromeWebStoreInstallUrl({ content: 'features_bottom_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Gmail - Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-primary-foreground/40">
              Free trial &middot; No credit card &middot; Uninstall anytime
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
