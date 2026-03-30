'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/Reveal'
import { faqCategories } from '../content/faqs'

function FaqAccordion({
  catIndex,
  faqIdx,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  catIndex: number
  faqIdx: number
  question: string
  answer: string
  isOpen: boolean
  onToggle: (id: string) => void
}) {
  const id = `${catIndex}-${faqIdx}`
  return (
    <div className="rounded-xl border border-border bg-background px-6 shadow-sm transition-shadow hover:shadow-md">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-foreground hover:text-primary"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-semibold">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  )
}

export function FaqPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['0-0']))

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <>
      {/* -- Hero -- */}
      <section className="bg-background pb-10 pt-20 lg:pb-14 lg:pt-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Donna CRM - frequently asked questions
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about getting started, features, pricing, and privacy - in plain language.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- FAQ categories with sticky sidebar labels -- */}
      <section className="bg-background py-10 lg:py-16">
        <div className="mx-auto w-full max-w-[1120px] px-6 lg:px-10">
          {faqCategories.map((category, catIdx) => (
            <Reveal key={category.title} delayMs={catIdx * 60}>
              <div
                className={`grid grid-cols-1 gap-4 lg:grid-cols-[200px_1fr] lg:gap-12 ${catIdx > 0 ? 'mt-14' : ''}`}
              >
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.items.map((faq, faqIdx) => (
                    <FaqAccordion
                      key={faq.question}
                      catIndex={catIdx}
                      faqIdx={faqIdx}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openItems.has(`${catIdx}-${faqIdx}`)}
                      onToggle={toggle}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
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
                Still have questions?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Reach out and we will get back to you within one business day.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Contact us', href: '/contact' },
              { label: 'Browse resources', href: '/resources' },
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
              <p className="text-sm text-primary-foreground/60">Ready to try it?</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg shadow-black/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
