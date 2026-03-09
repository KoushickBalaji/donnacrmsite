import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { resourceArticles } from '../content/resources'

const resourcesFaqs: FaqItem[] = [
  {
    question: 'Are these guides specific to Donna CRM?',
    answer:
      'They are written for Gmail-first workflows that solo operators actually use. The examples reference Donna CRM, but the underlying habits (stages and next steps) apply to any lightweight CRM system.',
  },
  {
    question: 'Do I need the AI assistant to use these workflows?',
    answer:
      'No. You can run a lightweight Gmail CRM workflow without AI. The assistant can help you move faster by drafting follow-ups and suggesting next steps, but you stay in control and review before acting.',
  },
  {
    question: 'Can I reuse the templates as-is?',
    answer:
      'Yes, but you will get better results if you personalize them. Add one specific detail from the thread so the message sounds like you and feels relevant to the recipient.',
  },
]

export function ResourcesPage() {
  const articles = [...resourceArticles].sort((a, b) => {
    return (b.updatedAt ?? b.publishedAt).localeCompare(a.updatedAt ?? a.publishedAt)
  })

  return (
    <>
      <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center bg-gradient-to-b from-primary/5 to-background py-14 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Resources for Gmail CRM Workflows
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Practical guides, templates, and checklists for solo operators who sell and deliver from their inbox.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Start with Gmail CRM basics, then pick a workflow guide that matches how you work.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">Start with the pillars</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                If you are new to Gmail CRMs, these pages explain the core model: keep context next to
                email threads, track work in simple pipelines, and capture the next step as a task.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                <Link
                  href="/gmail-crm"
                  className="rounded-full bg-background px-4 py-2 text-primary ring-1 ring-black/[0.04] hover:underline"
                >
                  Gmail CRM overview
                </Link>
                <Link
                  href="/ai-gmail-crm"
                  className="rounded-full bg-background px-4 py-2 text-primary ring-1 ring-black/[0.04] hover:underline"
                >
                  AI assistant in Gmail
                </Link>
                <Link
                  href="/inbox-onboarding"
                  className="rounded-full bg-background px-4 py-2 text-primary ring-1 ring-black/[0.04] hover:underline"
                >
                  Inbox onboarding
                </Link>
                <Link
                  href="/email-tracking-in-gmail"
                  className="rounded-full bg-background px-4 py-2 text-primary ring-1 ring-black/[0.04] hover:underline"
                >
                  Email tracking in Gmail
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-full bg-background px-4 py-2 text-primary ring-1 ring-black/[0.04] hover:underline"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Latest guides</h2>
                  <p className="mt-2 text-muted-foreground">
                    Pick a workflow guide, copy the templates, and keep your system lightweight.
                  </p>
                </div>
                <Link href="/contact" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
                  Suggest a topic
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/resources/${article.slug}`}
                    className="group rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Card className="h-full border-border transition-colors group-hover:border-primary/50">
                      <CardContent className="flex h-full flex-col p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/50">
                          {article.category}
                        </p>
                        <h3 className="mt-3 text-lg font-semibold text-foreground">
                          {article.title}
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground">{article.description}</p>
                        <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-background p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">Resources FAQ</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                A few quick answers before you dive into the templates and workflows.
              </p>
              <div className="mt-6">
                <FaqList items={resourcesFaqs} />
              </div>
            </div>

            <div className="mt-16 rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground">Need help?</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                If you have a question about setup, billing, or whether Donna is a fit for your workflow,
                reach out and we will get back to you.
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
