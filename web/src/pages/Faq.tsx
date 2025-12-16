import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

const faqs = [
  {
    question: 'What is Donna CRM?',
    answer:
      'Donna CRM is a Chrome extension that adds CRM and outreach tools directly into Gmail. It helps you manage contacts, track work in pipelines, manage tasks, run bulk email campaigns, and track engagement—without leaving Gmail.',
  },
  {
    question: 'How do I install Donna CRM?',
    answer:
      'Install Donna CRM from the Chrome Web Store. After installation, you’ll see the Donna CRM sidebar when you open Gmail. Follow the in-extension onboarding steps to get started.',
  },
  {
    question: 'What are the pricing plans?',
    answer:
      'Donna CRM offers two plans: Basic and Paid. A 14-day trial of Paid starts on sign-up.',
  },
  {
    question: 'Does Donna CRM work with Google Workspace?',
    answer:
      'Absolutely. Donna CRM is fully compatible with both personal Gmail accounts and Google Workspace (formerly G Suite) business accounts. It works seamlessly within the Gmail interface.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'We take security seriously and apply standard safeguards to protect data. For more details, see our Privacy Policy.',
  },
  {
    question: 'Can I use Donna CRM with my team?',
    answer:
      'Not yet. Donna CRM is single-user only for now.',
  },
  {
    question: 'What browsers are supported?',
    answer:
      'Donna CRM is currently available as a Chrome extension.',
  },
  {
    question: 'Can I import my existing contacts?',
    answer:
      'Yes. You can import contacts from CSV files and Google Sheets.',
  },
  {
    question: 'How does email tracking work?',
    answer:
      'Open tracking is supported for campaign emails and regular emails. Click tracking is supported for campaign emails only.',
  },
  {
    question: 'What if I need help or have issues?',
    answer:
      'Email support is available—reach out via the Contact page and we’ll get back to you.',
  },
  {
    question: "What’s coming next?",
    answer:
      'Coming soon: follow-up reminders, broader integrations, and more workflow improvements. Roadmap items are subject to change.',
  },
] as const

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
                <div
                  key={faq.question}
                  className="rounded-lg border border-border px-6"
                >
                  <button
                    className="flex w-full items-center justify-between py-5 text-left text-foreground hover:text-primary"
                    onClick={() => setOpen((v) => (v === id ? null : id))}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
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
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Our team is here to help. Reach out and we'll get back to you as soon
            as possible.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
