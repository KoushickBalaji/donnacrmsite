'use client'

import Link from 'next/link'
import { Eyebrow } from '../components/Eyebrow'
import { FaqList } from '../components/FaqList'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { crmForFreelancersFaqs } from './crm-for-freelancers-data'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

export function CrmForFreelancersPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>CRM for Freelancers</Eyebrow>
              <h1
                className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                CRM for freelancers inside Gmail
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A lightweight client tracker that lives in Gmail. Track leads, quotes, and follow-ups
                without adopting a "team CRM".
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_freelancers_hero_primary' })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCtaLabel}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/gmail-crm">Gmail CRM overview</Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/70">
                Free trial · No credit card · Uninstall anytime
              </p>
            </Reveal>

            <Reveal durationMs={500}>
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                <img
                  src="/screenshots/Contacts%20V2.png"
                  alt="Freelancer client contacts tracked inside Gmail"
                  className="w-full object-contain"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Problem -- */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <Reveal>
              <Eyebrow>The problem</Eyebrow>
              <h2
                className="text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Track work without a "team CRM"
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Freelancers don't need complex admin. You need a consistent place to track who you're
                talking to, what you promised, and when to follow up.
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
                <p className="text-base font-bold text-foreground">A simple gig pipeline</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Lead - Quote - In progress - Paid
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  When in doubt, keep fewer stages to focus on capturing next steps.
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 shadow-lg ring-1 ring-black/[0.04]">
                <img
                  src="/screenshots/Pipeline%20V2.png"
                  alt="Freelance gig stages shown as a pipeline"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Templates & follow-up habits -- */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Follow-up habits</Eyebrow>
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Templates and follow-up habits
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Most freelance deals are won on follow-up. Use Donna's lightweight workflow to stay
              consistent: draft the follow-up, capture the next step, and keep proposal context tied
              to the client.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'The 48-hour nudge',
                body: 'Send a short follow-up after a quote or proposal. Update the client record with the latest status and set the next reminder.',
              },
              {
                title: 'The value add',
                body: 'Follow up with a helpful link, a small idea, or a quick clarification. Keep the thread context attached so you can pick up later.',
              },
              {
                title: 'Close the loop',
                body: 'If it is a no, capture why and move on. If it is a yes, add the next steps as tasks so delivery does not slip.',
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
            <p className="mt-6 text-sm text-muted-foreground">
              Sending proposals from Gmail? Use tracking signals responsibly and treat opens/clicks
              as hints-not truth. See{' '}
              <Link href="/email-tracking-in-gmail" className="text-primary hover:underline">
                email tracking in Gmail
              </Link>
              .
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Learn how the assistant can help with drafts and prioritization in{' '}
              <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                AI Gmail CRM
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="bg-muted py-20 lg:py-28">
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
            <FaqList items={crmForFreelancersFaqs} />
          </div>

          <Reveal delayMs={80}>
            <div className="mt-12 rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/[0.04]">
              <p className="text-base font-bold text-foreground">Related pages</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Helpful if you're comparing tools or want more detail on a specific workflow.
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                <Link href="/gmail-crm" className="text-primary hover:underline">
                  Gmail CRM overview
                </Link>
                <Link
                  href="/resources/freelance-client-tracker-lead-to-paid"
                  className="text-primary hover:underline"
                >
                  Freelance client tracker workflow
                </Link>
                <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                  AI assistant (human-in-the-loop)
                </Link>
                <Link
                  href="/resources/follow-up-system-in-gmail"
                  className="text-primary hover:underline"
                >
                  Follow-up system templates
                </Link>
                <Link
                  href="/resources/email-tracking-for-proposals"
                  className="text-primary hover:underline"
                >
                  Email tracking for proposals
                </Link>
                <Link href="/pricing" className="text-primary hover:underline">
                  Pricing
                </Link>
                <Link href="/resources" className="text-primary hover:underline">
                  Resources
                </Link>
              </div>
            </div>
          </Reveal>
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
              { label: 'Freelancer workflow guide', href: '/resources/freelance-client-tracker-lead-to-paid' },
              { label: 'AI assistant', href: '/ai-gmail-crm' },
              { label: 'Email tracking for proposals', href: '/resources/email-tracking-for-proposals' },
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
                    href={chromeWebStoreInstallUrl({ content: 'crm_for_freelancers_bottom_cta' })}
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
