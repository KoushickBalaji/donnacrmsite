import Link from 'next/link'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList, type FaqItem } from '../components/FaqList'
import { ResourceCardGrid } from '../components/ResourceCardGrid'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

export const inboxOnboardingFaqs: FaqItem[] = [
  {
    question: 'What is "inbox onboarding"?',
    answer:
      'Inbox onboarding is a guided setup flow that starts from your real email: it helps you create a lightweight structure (like pipelines and stages) that matches how you already work in Gmail.',
  },
  {
    question: 'What does it do (and not do)?',
    answer:
      'Inbox onboarding reads your recent threads and recommends contacts to add, pipeline stages to start with, and initial tasks to capture - all based on what is already happening in your inbox. You review every suggestion before anything gets created. It does not send emails, modify threads, or act without your confirmation.',
  },
  {
    question: 'Do I need to connect anything besides Gmail?',
    answer:
      "Donna runs as a Chrome extension inside Gmail. You'll be guided through any permissions needed for the workflow you choose.",
  },
  {
    question: 'Is this safe for sensitive inboxes?',
    answer:
      "Treat AI like a drafting and organization tool. Avoid sharing sensitive information you wouldn't put in an email, and review suggestions before you act.",
  },
  {
    question: 'Where can I read about data and privacy?',
    answer:
      'Donna is CASA certified and has passed an independent third-party security audit. Inbox onboarding reads recent thread subjects and snippets to make recommendations - it does not store email body content. Full details on data handling, permissions, and retention are in the Privacy Policy at /privacy.',
  },
]

const primaryCtaLabel = 'Start onboarding - Free Trial'

export function InboxOnboardingPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Inbox onboarding</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Set up your CRM from your Gmail inbox
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Don't start from blank fields. Start from real conversations. Inbox onboarding turns
                your existing threads into a lightweight CRM setup in about five minutes.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'inbox_onboarding_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/ai-gmail-crm">How the assistant helps</Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/70">
                Lightweight setup - Human-in-the-loop - You stay in control
              </p>
            </Reveal>

            <Reveal durationMs={500}>
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                <img
                  src="/screenshots/Context%20Bar%20V2.png"
                  alt="Donna CRM context sidebar inside Gmail"
                  className="w-full object-contain"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- How it works -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Start with what you already do
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Most solo operators already have a system - it's just scattered across threads,
                calendar reminders, and notes. Inbox onboarding helps you turn that into a simple,
                repeatable workflow inside Gmail.
              </p>
              <p className="mt-4 text-muted-foreground">
                If you are new here, start with the Gmail CRM overview first:{' '}
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  Gmail CRM overview
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                <p className="text-sm font-bold text-foreground">
                  A sensible first setup (about 5 minutes)
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    'The assistant scans recent threads to understand your workflow',
                    'It recommends a lightweight pipeline and stages you will remember',
                    'It proposes initial contacts and context based on what you select',
                    'It suggests follow-up tasks and drafts; you confirm what gets created',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href="/pricing" className="text-primary hover:underline">
                    Pricing
                  </Link>
                  <Link href="/features" className="text-primary hover:underline">
                    Features
                  </Link>
                  <Link href="/faq" className="text-primary hover:underline">
                    FAQ
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- What gets set up -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>What gets set up</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              What onboarding can set up (with confirmation)
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              The assistant recommends a lightweight structure based on real threads. You choose
              what to apply - nothing is created without your review.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Pipelines + stages',
                body: "Start with a simple pipeline you'll actually maintain (and remember).",
              },
              {
                title: 'Contacts + context',
                body: 'Turn important threads into contacts with lightweight notes and tags.',
              },
              {
                title: 'Next-step tasks',
                body: "Capture follow-ups as tasks so the \"next step\" doesn't disappear.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80}>
                <div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-base font-bold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={240}>
            <div className="mt-10 rounded-2xl bg-muted p-6 ring-1 ring-black/[0.04]">
              <p className="text-sm font-bold text-foreground">Permissions and privacy</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Inbox workflows can touch sensitive information. Treat AI like a drafting and
                organization tool, and review suggestions before you take action - especially
                anything client-facing. See the{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{' '}
                for details.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Resource articles -- */}
      <ResourceCardGrid
        title="Next guides to read"
        description="If you are building a Gmail-first system, these guides help you keep it lightweight and consistent."
        slugs={[
          'personal-crm-inside-gmail-setup',
          'inbox-to-pipeline',
          'keep-crm-updated-without-manual-data-entry',
        ]}
      />

      {/* -- FAQ -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              FAQs
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqList items={inboxOnboardingFaqs} />
          </div>
        </div>
      </section>

      {/* -- Explore more (dark) -- */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-3xl font-bold text-primary-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Keep exploring
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Learn more about how Donna works, or dive into a specific workflow.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'How it works', href: '/how-it-works' },
              { label: 'All features', href: '/features' },
              { label: 'AI assistant', href: '/ai-gmail-crm' },
              { label: 'Gmail CRM overview', href: '/gmail-crm' },
              { label: 'Email tracking', href: '/email-tracking-in-gmail' },
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
              <p className="text-sm text-primary-foreground/60">Ready to try it?</p>
              <div className="mt-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg shadow-black/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'inbox_onboarding_bottom_cta' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
