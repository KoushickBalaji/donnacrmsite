import {
  ArrowRight,
  ClipboardList,
  Mail,
  MailOpen,
  Target,
  Users,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

const featureSections = [
  {
    icon: Users,
    title: 'Contact Management',
    description:
      'Keep all your contacts organized and accessible right within Gmail.',
    details: [
      'Create and edit contact profiles with custom fields',
      'View contact history and previous interactions',
      'Add notes and tags for better organization',
      'Quick search and filter contacts',
      'Import contacts from various sources',
    ],
  },
  {
    icon: Target,
    title: 'Deal & Pipeline Tracking',
    description:
      'Visualize your sales pipeline and track deals from lead to close.',
    details: [
      'Kanban-style pipeline boards',
      'Customizable deal stages',
      'Deal value and probability tracking',
      'Activity timeline for each deal',
      'Revenue forecasting insights',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Task Management',
    description: 'Stay on top of follow-ups and never miss an important action.',
    details: [
      'Create tasks linked to contacts or deals',
      'Due date reminders and notifications',
      'Priority levels and categorization',
      'Recurring task support',
      'Task completion tracking',
    ],
  },
  {
    icon: Mail,
    title: 'Email Templates',
    description: 'Save time with reusable templates for your most common emails.',
    details: [
      'Create and organize template libraries',
      'Personalize templates with placeholders',
      'Quick insert templates while composing',
      'Team template sharing (Team plan)',
      'Template performance insights',
    ],
  },
  {
    icon: MailOpen,
    title: 'Email Tracking',
    description: 'Know when recipients engage with your emails and links.',
    details: [
      'Real-time email open notifications',
      'Link click tracking',
      'Engagement analytics dashboard',
      'Optimal send time suggestions',
      'Follow-up reminders for unopened emails',
    ],
  },
] as const

export function FeaturesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Powerful Features for Modern Sales Teams
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Donna CRM brings everything you need to manage customer
              relationships directly into your Gmail workflow.
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
                  <p className="text-lg text-muted-foreground">
                    {section.description}
                  </p>
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
                  <Card className="border-border bg-muted/30">
                    <CardContent className="flex min-h-[300px] items-center justify-center p-8">
                      <div className="text-center">
                        <section.icon className="mx-auto mb-4 h-24 w-24 text-primary/20" />
                        <p className="text-muted-foreground">Feature Screenshot</p>
                      </div>
                    </CardContent>
                  </Card>
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
              Add Donna CRM to Chrome and start managing your relationships
              directly inside Gmail.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Extension <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

