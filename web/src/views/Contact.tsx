'use client'

import { Mail, MapPin } from 'lucide-react'
import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

type ContactForm = {
  name: string
  email: string
  subject: string
  message: string
}

function validate(values: ContactForm) {
  const errors: Partial<Record<keyof ContactForm, string>> = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.email.trim()) errors.email = 'Email is required'
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email'
  }
  if (!values.subject.trim()) errors.subject = 'Subject is required'
  if (values.subject.length > 200) {
    errors.subject = 'Subject must be less than 200 characters'
  }
  if (!values.message.trim()) errors.message = 'Message is required'
  if (values.message.length > 2000) {
    errors.message = 'Message must be less than 2000 characters'
  }
  return errors
}

export function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [values, setValues] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>(
    {},
  )
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const canSubmit = useMemo(
    () => Object.keys(validate(values)).length === 0,
    [values],
  )

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(false)
    setSubmitError(null)
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        const message = await res.text().catch(() => '')
        throw new Error(message || 'Message could not be sent')
      }

      setSent(true)
      setValues({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Message could not be sent')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <a
                        href="mailto:support@donnacrm.com"
                        className="hover:text-primary hover:underline"
                      >
                        support@donnacrm.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Mailing Address</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Innov8 Mantri, Outer Ring Rd, Devarabisanahalli, Bellandur, Bengaluru,
                      Karnataka 560103
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-6">
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Name</label>
                        <input
                          name="name"
                          value={values.name}
                          onChange={(e) =>
                            setValues((v) => ({ ...v, name: e.target.value }))
                          }
                          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your name"
                        />
                        {errors.name ? (
                          <p className="text-sm text-destructive">{errors.name}</p>
                        ) : null}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          name="email"
                          value={values.email}
                          onChange={(e) =>
                            setValues((v) => ({ ...v, email: e.target.value }))
                          }
                          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          placeholder="you@company.com"
                        />
                        {errors.email ? (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Subject</label>
                      <input
                        name="subject"
                        value={values.subject}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, subject: e.target.value }))
                        }
                        className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                        placeholder="What can we help with?"
                      />
                      {errors.subject ? (
                        <p className="text-sm text-destructive">{errors.subject}</p>
                      ) : null}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Message</label>
                      <textarea
                        name="message"
                        value={values.message}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, message: e.target.value }))
                        }
                        className="min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Tell us more..."
                      />
                      {errors.message ? (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      ) : null}
                    </div>

                    {submitError ? (
                      <div className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-foreground">
                        {submitError}
                      </div>
                    ) : null}

                    {sent ? (
                      <div className="rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-foreground">
                        Message sent! We'll get back to you soon.
                      </div>
                    ) : null}

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={submitting || !canSubmit}
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
