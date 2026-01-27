import {
  ArrowRight,
  Check,
  ClipboardList,
  MailOpen,
  Target,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
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
    title: 'Pipeline Tracking',
    description: 'Track work through simple, stage-based pipelines.',
  },
  {
    icon: ClipboardList,
    title: 'Task Management',
    description: 'Capture follow-ups and next steps without leaving Gmail.',
  },
  {
    icon: MailOpen,
    title: 'Bulk Email Campaigns',
    description: 'Send a single message to many recipients with basic personalization.',
  },
  {
    icon: Check,
    title: 'Email Tracking',
    description: 'See opens for everyday emails and campaigns (click tracking for campaigns).',
  },
] as const

export function HomePage() {
  return (
    <>
      <Seo
        title="CRM inside Gmail"
        description="Donna CRM is a Chrome extension that keeps contacts, pipelines, and outreach tools inside Gmail—so you can stay focused and avoid context switching."
        canonicalPath="/"
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your CRM, Right Inside <span className="text-primary">Gmail</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Donna CRM is a Chrome extension that keeps contacts, pipelines, and
              outreach tools inside Gmail—so you can stay focused and avoid
              context switching.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href="https://chromewebstore.google.com/detail/donna-crm/fadjjpednmcoomcpajkfbpchankdoiip"
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

      <section className="bg-background py-12">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  AI Assistant (Live)
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get help right where you work—inside Gmail.
                </p>
                {/* TODO: Replace with exact, verified AI Assistant capabilities. */}
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  Bulk Email Campaigns (Live)
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Send one message to many recipients, with basic personalization.
                </p>
                {/* TODO: Replace with exact, verified campaign capabilities + limits (if any). */}
              </CardContent>
            </Card>
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
              and keep your workflow in one place.
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

      <section className="bg-primary py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to Supercharge Your Gmail?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Install the extension and manage relationships effectively—without
              leaving Gmail.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://chromewebstore.google.com/detail/donna-crm/fadjjpednmcoomcpajkfbpchankdoiip"
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
