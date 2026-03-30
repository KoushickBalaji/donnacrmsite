import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList, type FaqItem } from '../components/FaqList'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
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
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Resources</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Practical guides for Gmail-native CRM workflows
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Templates, frameworks, and step-by-step workflows for consultants, freelancers, and
                solo B2B sellers who manage relationships from Gmail.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="mt-10 rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
              <p className="text-sm font-bold text-foreground">Start with the pillars</p>
              <p className="mt-2 text-sm text-muted-foreground">
                If you are new to Gmail CRMs, these pages explain the core model: keep context next
                to email threads, track work in simple pipelines, and capture the next step as a task.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                <Link
                  href="/gmail-crm"
                  className="rounded-full bg-muted px-4 py-2 text-primary ring-1 ring-black/[0.04] transition-colors hover:bg-muted/70"
                >
                  Gmail CRM overview
                </Link>
                <Link
                  href="/ai-gmail-crm"
                  className="rounded-full bg-muted px-4 py-2 text-primary ring-1 ring-black/[0.04] transition-colors hover:bg-muted/70"
                >
                  AI assistant in Gmail
                </Link>
                <Link
                  href="/inbox-onboarding"
                  className="rounded-full bg-muted px-4 py-2 text-primary ring-1 ring-black/[0.04] transition-colors hover:bg-muted/70"
                >
                  Inbox onboarding
                </Link>
                <Link
                  href="/email-tracking-in-gmail"
                  className="rounded-full bg-muted px-4 py-2 text-primary ring-1 ring-black/[0.04] transition-colors hover:bg-muted/70"
                >
                  Email tracking in Gmail
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-full bg-muted px-4 py-2 text-primary ring-1 ring-black/[0.04] transition-colors hover:bg-muted/70"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Article grid -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <Eyebrow>Guides</Eyebrow>
                <h2
                  className="text-3xl font-bold text-foreground sm:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Latest guides
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Pick a workflow guide, copy the templates, and keep your system lightweight.
                </p>
              </div>
              <Link
                href="/contact"
                className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
              >
                Suggest a topic
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal key={article.slug} delayMs={index * 40}>
                <Link
                  href={`/resources/${article.slug}`}
                  className="group block rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
                    {article.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read guide{' '}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Resources FAQ
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Common questions about the guides, templates, and how they work inside Gmail.
            </p>
          </Reveal>
          <div className="mt-10">
            <FaqList items={resourcesFaqs} />
          </div>
        </div>
      </section>

      {/* -- CTA (dark) -- */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-3xl font-bold text-primary-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Start putting it into practice
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Install Donna and use these workflows in your real inbox - or explore the features
                and pricing first.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Contact support', href: '/contact' },
              { label: 'View FAQ', href: '/faq' },
              { label: 'How it works', href: '/how-it-works' },
              { label: 'All features', href: '/features' },
              { label: 'Gmail CRM overview', href: '/gmail-crm' },
              { label: 'Pricing', href: '/pricing' },
            ].map((link, index) => (
              <Reveal key={link.href} delayMs={index * 60}>
                <Link
                  href={link.href}
                  className="block rounded-xl bg-white/10 px-5 py-4 text-sm font-semibold text-primary-foreground ring-1 ring-white/[0.08] transition-all duration-200 hover:bg-white/[0.15] hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={360}>
            <div className="mx-auto mt-10 max-w-md text-center">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg shadow-black/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <Link href="/contact">Contact support</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
