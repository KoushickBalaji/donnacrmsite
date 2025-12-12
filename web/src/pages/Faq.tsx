import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

const faqs = [
  {
    question: 'What is Donna CRM?',
    answer:
      'Donna CRM is a Chrome extension that adds powerful CRM functionality directly into your Gmail inbox. It helps you manage contacts, track deals, handle tasks, use email templates, and monitor email opens—all without leaving Gmail.',
  },
  {
    question: 'How do I install Donna CRM?',
    answer:
      "Simply visit the Chrome Web Store, search for 'Donna CRM', and click 'Add to Chrome'. Once installed, you'll see the Donna CRM sidebar when you open Gmail. Follow the quick setup wizard to get started.",
  },
  {
    question: 'Is Donna CRM free to use?',
    answer:
      'Yes! Donna CRM offers a free plan that includes basic contact management, limited email templates, and basic tracking features. For more advanced features like unlimited contacts and deal pipeline tracking, you can upgrade to our Pro or Team plans.',
  },
  {
    question: 'Does Donna CRM work with Google Workspace?',
    answer:
      'Absolutely. Donna CRM is fully compatible with both personal Gmail accounts and Google Workspace (formerly G Suite) business accounts. It works seamlessly within the Gmail interface.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. All data is encrypted in transit and at rest. We follow industry best practices for data protection and never share your information with third parties. You can read more in our Privacy Policy.',
  },
  {
    question: 'Can I use Donna CRM with my team?',
    answer:
      'Yes! Our Team plan allows multiple users to share contacts, templates, and pipeline data. Administrators can manage team access and view team-wide analytics.',
  },
  {
    question: 'What browsers are supported?',
    answer:
      "Donna CRM is currently available as a Chrome extension. We're working on support for other Chromium-based browsers like Edge and Brave, coming soon.",
  },
  {
    question: 'Can I import my existing contacts?',
    answer:
      'Yes, you can import contacts from CSV files, Google Contacts, and other CRM platforms. Our import wizard guides you through the process and helps map your data fields correctly.',
  },
  {
    question: 'How does email tracking work?',
    answer:
      "When you send an email with tracking enabled, Donna CRM adds a tiny invisible pixel to your message. When the recipient opens the email, you'll receive a notification. Link clicks are tracked when recipients click on trackable links in your emails.",
  },
  {
    question: 'What if I need help or have issues?',
    answer:
      "We offer multiple support channels: in-app help documentation, email support for all users, and priority support with faster response times for Pro and Team subscribers. You can also reach us through our Contact page.",
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
