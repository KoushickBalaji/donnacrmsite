import {
  BookOpen,
  FileSpreadsheet,
  Layers,
  Mail,
  MailOpen,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

const resources = [
  {
    id: 'getting-started',
    icon: BookOpen,
    title: 'Getting started',
    description: 'Install the extension and start using Donna CRM inside Gmail.',
    bullets: [
      'Install Donna CRM from the Chrome Web Store.',
      'Open Gmail and click the Donna CRM icon in the sidebar.',
      'Create your first contact and add a note from a real thread.',
      'Set up a pipeline stage and move one item through it.',
    ],
  },
  {
    id: 'imports',
    icon: FileSpreadsheet,
    title: 'Import guide (CSV + Google Sheets)',
    description: 'Bring your contacts into Donna CRM using CSV or Google Sheets.',
    bullets: [
      'Start with a sheet that has at least name + email columns.',
      'Clean duplicates and verify emails before importing.',
      'Run a small import first to confirm mapping and formatting.',
      'Use tags/notes to preserve context during your migration.',
    ],
  },
  {
    id: 'pipelines',
    icon: Layers,
    title: 'How pipelines work',
    description: 'Use stages to track work and keep momentum in one place.',
    bullets: [
      'Create stages that match your real workflow (sales, recruiting, partnerships).',
      'Move items as the next step happens—keep stages lightweight.',
      'Use notes/tasks to capture handoffs and follow-ups.',
      'Review your pipeline regularly to unblock stalled work.',
    ],
  },
  {
    id: 'campaigns',
    icon: Mail,
    title: 'How campaigns work',
    description: 'Create and send bulk email campaigns with basic personalization.',
    bullets: [
      'Create a template you’d be comfortable sending 1:1.',
      'Segment recipients into a focused list (keep it specific).',
      'Personalize the opener and preview before sending.',
      'Track opens/clicks and follow up only where it makes sense.',
    ],
  },
  {
    id: 'tracking',
    icon: MailOpen,
    title: 'How tracking works',
    description: 'Understand engagement signals and their limitations.',
    bullets: [
      'Open tracking depends on recipient settings (image blocking and privacy features).',
      'Click tracking applies to tracked links and may vary by client.',
      'Use tracking as a signal—not the source of truth.',
      'Be mindful of compliance requirements for your audience and region.',
    ],
  },
  {
    id: 'ai-assistant',
    icon: Sparkles,
    title: 'AI Assistant tips',
    description: 'Use the AI assistant to move faster while staying accurate.',
    bullets: [
      'Ask for a summary of a thread before responding.',
      'Generate a first draft, then edit in your own voice.',
      'Double-check facts, dates, and names before sending.',
      'Avoid sharing sensitive data you wouldn’t email normally.',
    ],
  },
] as const

export function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Resources
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Practical guides to help you get the most out of Donna CRM inside Gmail.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                className="group rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="h-full border-border transition-colors group-hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <r.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground">{r.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
                    <p className="mt-4 text-sm font-medium text-primary">
                      Read guide
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-5xl space-y-12">
            {resources.map((r) => (
              <div key={r.id} id={r.id} className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <r.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground">{r.title}</h3>
                    <p className="mt-2 text-muted-foreground">{r.description}</p>
                    <ul className="mt-4 space-y-3">
                      {r.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground">Need help?</h3>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                If you have a question about setup, billing, or whether a feature is a
                fit for your workflow, reach out and we’ll get back to you.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/contact">Contact support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
