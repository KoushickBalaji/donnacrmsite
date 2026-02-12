import {
  ArrowRight,
  ClipboardList,
  Mail,
  MailOpen,
  Target,
  Users,
} from 'lucide-react'
import type { ComponentType } from 'react'
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
    // TODO: Replace with an AI Assistant-specific screenshot once captured.
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
      'Onboarding can read contacts and auto-add contacts',
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
      'Reminders are handled through the AI assistant',
    ],
    screenshotAlt: 'Tasks in Donna CRM',
    // TODO: Add a real Tasks screenshot once captured.
  },
  {
    icon: Mail,
    title: 'Bulk Email Campaigns',
    description: 'Send one message to many recipients, with basic personalization.',
    details: [
      'Create campaigns using your saved contacts',
      'Reuse templates to keep messaging consistent',
      'Personalization placeholders: sender name, receiver name, company name',
    ],
    screenshotSrc: '/screenshots/Campaigns.png',
    screenshotAlt: 'Bulk Email Campaigns in Donna CRM',
    // TODO: Replace with a verified, detailed capabilities list once finalized.
  },
  {
    icon: MailOpen,
    title: 'Email Tracking',
    description: 'Understand engagement across regular emails and campaigns.',
    details: [
      'Open tracking: supported for campaign emails and regular emails',
      'Click tracking: supported for campaigns and for regular emails when manually enabled',
      'Campaign analytics show to-date totals for opens, clicks, and unsubscribes',
      'Follow-up reminders: coming soon',
    ],
    screenshotAlt: 'Email Tracking in Donna CRM',
    // TODO: Add a real Email Tracking screenshot once captured.
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
              Donna CRM keeps CRM and outreach tools inside Gmail—so you can move
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
                  Add to Gmail — Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
