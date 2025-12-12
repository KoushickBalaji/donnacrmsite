import {
  ArrowRight,
  Check,
  ClipboardList,
  MailOpen,
  Target,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

const homeFeatures = [
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Organize and access all your contacts directly within Gmail.',
  },
  {
    icon: Target,
    title: 'Deal Tracking',
    description: 'Track deals through your sales pipeline with visual boards.',
  },
  {
    icon: ClipboardList,
    title: 'Task Management',
    description: 'Never miss a follow-up with integrated task management.',
  },
  {
    icon: MailOpen,
    title: 'Email Templates',
    description: 'Save time with reusable email templates for common responses.',
  },
  {
    icon: Check,
    title: 'Mail Tracking',
    description: 'Know when your emails are opened and read.',
  },
] as const

const testimonials = [
  {
    quote:
      "Donna CRM has transformed how I manage my client relationships. It's like having a personal assistant right in Gmail.",
    author: 'Sarah Johnson',
    role: 'Sales Manager',
    rating: 5,
  },
  {
    quote:
      'The pipeline tracking feature alone has helped us close 30% more deals. Absolutely essential for any sales team.',
    author: 'Michael Chen',
    role: 'Startup Founder',
    rating: 5,
  },
  {
    quote:
      "Finally, a CRM that doesn't require switching between apps. Everything I need is right where I work.",
    author: 'Emily Rodriguez',
    role: 'Business Development',
    rating: 5,
  },
] as const

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-primary">
          ★
        </span>
      ))}
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your CRM, Right Inside <span className="text-primary">Gmail</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Donna CRM is a powerful Chrome extension that brings contact
              management, deal tracking, and email productivity tools directly
              into your Gmail inbox.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Free Extension <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">See All Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Everything You Need to Manage Relationships
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Powerful features designed to help you build stronger connections
              and close more deals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="border-border transition-colors hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Trusted by Professionals
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              See what our users are saying about Donna CRM.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.author} className="border-border">
                <CardContent className="p-6">
                  <Stars count={t.rating} />
                  <p className="mt-4 text-muted-foreground">"{t.quote}"</p>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to Supercharge Your Gmail?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands of professionals who use Donna CRM to manage their
              relationships more effectively.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

