import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import type { ResourceArticle } from '../content/resources'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

function formatIsoDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return isoDate
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function ResourceArticlePage({ article }: { article: ResourceArticle }) {
  const faqs: FaqItem[] = article.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-14 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Resources
            </Link>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/50">
                {article.category}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{article.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatIsoDate(article.updatedAt ?? article.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readingTimeMinutes} min read
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a
                    href={chromeWebStoreInstallUrl({ content: `resource_${article.slug}_hero` })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href={article.primaryInternalLink.href}>{article.primaryInternalLink.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_300px]">
            <div className="space-y-12">
              {article.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>

                  {section.paragraphs?.length ? (
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets?.length ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.steps?.length ? (
                    <ol className="mt-5 space-y-3">
                      {section.steps.map((step, index) => (
                        <li key={step} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {section.templates?.length ? (
                    <div className="mt-6 space-y-4">
                      {section.templates.map((template) => (
                        <Card key={template.label} className="border-border bg-muted/30">
                          <CardContent className="p-6">
                            <p className="text-sm font-semibold text-foreground">
                              {template.label}
                            </p>
                            <pre className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                              {template.content}
                            </pre>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : null}

                  {section.note ? (
                    <div className="mt-6 rounded-lg border border-border bg-muted/30 p-5">
                      <p className="text-sm text-muted-foreground">{section.note}</p>
                    </div>
                  ) : null}
                </div>
              ))}

              <div className="rounded-lg border border-border bg-muted/30 p-8">
                <h2 className="text-2xl font-bold text-foreground">Want this workflow inside Gmail?</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Donna CRM is a lightweight Gmail-native CRM for solo operators. Keep context next to
                  threads, track work in simple pipelines, and capture next steps before they slip.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild>
                    <a
                      href={chromeWebStoreInstallUrl({ content: `resource_${article.slug}_mid_cta` })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {primaryCtaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/how-it-works">See how it works</Link>
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">FAQs</h2>
                <p className="mt-3 text-muted-foreground">
                  Common questions about this workflow and how to keep it lightweight.
                </p>
                <div className="mt-6">
                  <FaqList items={faqs} />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">Related pages</h2>
                <p className="mt-3 text-muted-foreground">
                  Keep exploring: these pages go deeper on the feature set and the core Gmail CRM workflow.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={article.primaryInternalLink.href}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/15"
                  >
                    {article.primaryInternalLink.label}
                  </Link>
                  {article.supportingInternalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full bg-muted/50 px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="self-start lg:sticky lg:top-24">
              <Card className="border-border bg-background">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-foreground">On this page</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {article.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="text-primary hover:underline">
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 border-border bg-muted/30">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-foreground">Start here</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    If you are new to Gmail CRMs, these pages explain the core concepts.
                  </p>
                  <div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                    <Link href="/gmail-crm" className="text-primary hover:underline">
                      Gmail CRM overview
                    </Link>
                    <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                      AI assistant in Gmail
                    </Link>
                    <Link href="/pricing" className="text-primary hover:underline">
                      Pricing
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

