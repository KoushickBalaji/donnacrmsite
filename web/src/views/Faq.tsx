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
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-primary/5 to-background pb-10 pt-14 lg:pb-14 lg:pt-20">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Questions? Answers.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about Donna CRM - from setup to
                security.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ categories with sticky sidebar labels ── */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1120px] px-6 lg:px-10">
          {faqCategories.map((category, catIdx) => (
            <Reveal key={category.title} delayMs={catIdx * 60}>
              <div
                className={`grid grid-cols-1 gap-4 lg:grid-cols-[200px_1fr] lg:gap-12 ${catIdx > 0 ? 'mt-14' : ''}`}
              >
                {/* Sticky sidebar label */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
                    {category.title}
                  </h2>
                </div>

                {/* Accordion items */}
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

      {/* ── CTA ── */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Still have questions?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Reach out and we will get back to you within one business day.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resources">Browse resources</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
