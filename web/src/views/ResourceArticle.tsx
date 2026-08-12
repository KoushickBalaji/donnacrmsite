import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { getRelatedResourceArticles, type ResourceArticle } from '../content/resources'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

function formatIsoDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return isoDate
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function ResourceArticlePage({ article }: { article: ResourceArticle }) {
  const relatedArticles = getRelatedResourceArticles(article)
  const faqs: FaqItem[] = article.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  return (
    <>
      {/* -- Article hero -- */}
      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Resources
            </Link>

            <div className="mt-6 max-w-3xl">
              <Eyebrow>{article.category}</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {article.description}
              </p>

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
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: `resource_${article.slug}_hero` })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href={article.primaryInternalLink.href}>
                    {article.primaryInternalLink.label}
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Article body -- */}
      <section className="bg-background pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">

            {/* Main content */}
            <div className="max-w-3xl space-y-12">
              {article.sections.map((section) => (
                <Reveal key={section.id}>
                  <div id={section.id} className="scroll-mt-24">
                    <h2
                      className="text-2xl font-bold text-foreground"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {section.heading}
                    </h2>

                    {section.paragraphs?.length ? (
                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="leading-relaxed text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    {section.bullets?.length ? (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
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
                          <div
                            key={template.label}
                            className="rounded-2xl bg-muted p-6 ring-1 ring-black/[0.04]"
                          >
                            <p className="text-sm font-bold text-foreground">{template.label}</p>
                            <pre className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                              {template.content}
                            </pre>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {section.note ? (
                      <div className="mt-6 rounded-xl bg-muted p-5 ring-1 ring-black/[0.04]">
                        <p className="text-sm text-muted-foreground">{section.note}</p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ))}

              {/* Mid-article CTA */}
              <Reveal>
                <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Want this workflow inside Gmail?
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Donna CRM runs inside Gmail as a Chrome extension. Use these workflows with real contact context, pipeline stages, and follow-up tasks - without leaving your inbox.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                      asChild
                    >
                      <a
                        href={chromeWebStoreInstallUrl({
                          content: `resource_${article.slug}_mid_cta`,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {primaryCtaLabel}{' '}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/how-it-works">See how it works</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>

              {/* FAQs */}
              <Reveal>
                <div>
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    FAQs
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    {article.faqSubtitle ?? 'Common questions about this workflow.'}
                  </p>
                  <div className="mt-6">
                    <FaqList items={faqs} />
                  </div>
                </div>
              </Reveal>

              {/* Related pages */}
              <Reveal>
                <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Related reading
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Continue with practical guides for the same workflow, or explore how Donna
                    helps inside Gmail.
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-bold text-foreground">Related guides</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {relatedArticles.map((relatedArticle) => (
                        <Link
                          key={relatedArticle.slug}
                          href={`/resources/${relatedArticle.slug}`}
                          className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                        >
                          {relatedArticle.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-bold text-foreground">Explore Donna</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Link
                        href={article.primaryInternalLink.href}
                        className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                      >
                        {article.primaryInternalLink.label}
                      </Link>
                      {article.supportingInternalLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="rounded-full bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/70"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sticky sidebar */}
            <aside className="self-start lg:sticky lg:top-24 lg:space-y-6">
              <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04]">
                <p className="text-sm font-bold text-foreground">On this page</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {article.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-primary hover:underline">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-muted p-6 ring-1 ring-black/[0.04]">
                <p className="text-sm font-bold text-foreground">Start here</p>
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
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
