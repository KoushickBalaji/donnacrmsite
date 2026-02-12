'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { faqs } from '../content/faqs'

export function FaqPage() {
  const [open, setOpen] = useState<string | null>('item-0')
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Find answers to common questions about Donna CRM.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const id = `item-${index}`
              const isOpen = open === id
              return (
                <div key={faq.question} className="rounded-lg border border-border px-6">
                  <button
                    className="flex w-full items-center justify-between py-5 text-left text-foreground hover:text-primary"
                    onClick={() => setOpen((v) => (v === id ? null : id))}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen ? (
                    <div className="pb-5 text-muted-foreground">{faq.answer}</div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Still Have Questions?</h2>
          <p className="mb-6 text-muted-foreground">
            Our team is here to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

