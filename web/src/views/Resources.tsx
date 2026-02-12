import { BookOpen, FileSpreadsheet, Layers, Mail, MailOpen, Sparkles } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Card, CardContent } from '../components/ui/Card'

const resources = [
  {
    icon: BookOpen,
    title: 'Getting started',
    description: 'Install the extension and set up Donna CRM inside Gmail.',
    // TODO: Add step-by-step guide content and screenshots.
  },
  {
    icon: FileSpreadsheet,
    title: 'Import guide (CSV + Google Sheets)',
    description: 'Bring your contacts into Donna CRM using CSV or Google Sheets.',
    // TODO: Document supported columns + examples.
  },
  {
    icon: Layers,
    title: 'How pipelines work',
    description: 'Understand stages and how to move items through your workflow.',
    // TODO: Add examples for non-sales workflows (recruiting, support, etc.).
  },
  {
    icon: Mail,
    title: 'How campaigns work',
    description: 'Create and send bulk email campaigns with basic personalization.',
    // TODO: Add a detailed capabilities list once finalized.
  },
  {
    icon: MailOpen,
    title: 'How tracking works',
    description:
      'Understand open tracking for regular emails and campaigns, plus click tracking limitations.',
    // TODO: Add tracking FAQ + caveats (mail clients, image blocking, etc.).
  },
  {
    icon: Sparkles,
    title: 'AI Assistant guide',
    description: 'Learn what the AI assistant can and can’t do.',
    // TODO: Replace with exact, verified AI Assistant capabilities.
  },
] as const

export function ResourcesPage() {
  return (
    <>
      <Seo
        title="Resources"
        description="Practical guides to help you get the most out of Donna CRM inside Gmail."
        canonicalPath="/resources"
      />
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
              <Card key={r.title} className="border-border">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <r.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{r.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
