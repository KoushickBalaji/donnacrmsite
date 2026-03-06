import {
  ArrowRight,
  ClipboardList,
  Download,
  Inbox,
  Kanban,
  MailOpen,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

const surfaceTileClassName =
  'h-full min-h-[200px] rounded-[20px] bg-card p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-[220ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]'

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/50">
      {children}
    </p>
  )
}

function IconBubble({ Icon }: { Icon: typeof Inbox }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
      <Icon className="h-5 w-5" />
    </div>
  )
}

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
      <span className="text-foreground/70">{children}</span>
    </li>
  )
}

export function HowItWorksPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              How Donna works inside Gmail
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Donna is a Gmail-native CRM for individuals. It keeps contacts, deal context,
              tasks, and an AI assistant in your sidebar-so conversations turn into next
              steps without switching tools.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'how_it_works_hero' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCtaLabel}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">Explore features</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No setup | No credit card | Uninstall anytime
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 lg:py-20">
        <div className="container">
          <Reveal>
            <div className="w-full">
              <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  Install and connect in minutes
                </h2>
                <p className="mt-3 max-w-3xl text-muted-foreground">
                  Donna installs as a Chrome extension and runs directly in the Gmail UI.
                  After you grant permissions, it can show CRM context next to the threads
                  you're already working on.
                </p>
              </div>

              <div className="mt-2 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
                  <Reveal delayMs={0} durationMs={400}>
                    <div className={surfaceTileClassName}>
                      <div className="flex items-start justify-between gap-4">
                        <IconBubble Icon={Download} />
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          1
                        </span>
                      </div>

                      <div className="mt-5 space-y-2">
                        <Eyebrow>Step 1</Eyebrow>
                        <p className="text-[22px] font-[650] leading-[1.2] text-foreground">
                          Install Donna
                        </p>
                        <p className="text-[15px] leading-[1.6] text-foreground/70">
                          Add Donna from the Chrome Web Store.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delayMs={80} durationMs={400}>
                    <div className={surfaceTileClassName}>
                      <div className="flex items-start justify-between gap-4">
                        <IconBubble Icon={MailOpen} />
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          2
                        </span>
                      </div>

                      <div className="mt-5 space-y-2">
                        <Eyebrow>Step 2</Eyebrow>
                        <p className="text-[22px] font-[650] leading-[1.2] text-foreground">
                          Open Gmail
                        </p>
                        <p className="text-[15px] leading-[1.6] text-foreground/70">
                          Donna appears in the Gmail sidebar.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delayMs={160} durationMs={400}>
                    <div className={surfaceTileClassName}>
                      <div className="flex items-start justify-between gap-4">
                        <IconBubble Icon={ShieldCheck} />
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          3
                        </span>
                      </div>

                      <div className="mt-5 space-y-2">
                        <Eyebrow>Step 3</Eyebrow>
                        <p className="text-[22px] font-[650] leading-[1.2] text-foreground">
                          Grant permissions
                        </p>
                        <p className="text-[15px] leading-[1.6] text-foreground/70">
                          Approve the prompts to connect Donna to your Gmail.
                        </p>
                        <p className="pt-1 text-[15px] leading-[1.6] text-foreground/70">
                          You'll see two permission screens - one for the extension and one
                          for Donna's service.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delayMs={240} durationMs={400}>
                    <div className={surfaceTileClassName}>
                      <div className="flex items-start justify-between gap-4">
                        <IconBubble Icon={Kanban} />
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          4
                        </span>
                      </div>

                      <div className="mt-5 space-y-2">
                        <Eyebrow>Step 4</Eyebrow>
                        <p className="text-[22px] font-[650] leading-[1.2] text-foreground">
                          Start using Donna
                        </p>
                        <p className="text-[15px] leading-[1.6] text-foreground/70">
                          Deals, notes, and follow-ups - right where you reply.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <Reveal delayMs={120} durationMs={500} className="lg:pl-6">
                  <div className="overflow-hidden rounded-[28px] bg-muted/30 shadow-[0_24px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.04]">
                    <img
                      src="/stock/laptop-hands.jpg"
                      alt="Working in an inbox"
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-14 lg:py-20">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                    What Donna adds to your inbox
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Instead of jumping between Gmail, a CRM, and notes, Donna keeps the
                    essentials attached to the conversation.
                  </p>

                  <ul className="mt-6 space-y-3">
                    <Bullet>
                      Contact context: notes, tags, and recent activity alongside a thread.
                    </Bullet>
                    <Bullet>
                      Deals and pipelines: turn an email into a deal and track stage as it
                      progresses.
                    </Bullet>
                    <Bullet>
                      Tasks and follow-ups: capture next steps with due dates so nothing
                      stalls.
                    </Bullet>
                    <Bullet>
                      Outreach and tracking: send campaigns and understand opens/clicks as
                      signals.
                    </Bullet>
                    <Bullet>
                      AI assistant: ask for summaries and drafts, then edit before sending.
                    </Bullet>
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button asChild>
                      <Link href="/features">
                        Explore features <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/resources">Read the guides</Link>
                    </Button>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[24px] border border-border bg-background shadow-sm">
                  <div className="bg-muted/10 p-4">
                    <img
                      src="/screenshots/Context%20Bar.png"
                      alt="Donna CRM showing contact context inside Gmail"
                      className="w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-14 lg:py-20">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  A simple workflow that stays in Gmail
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Use Donna where the work already happens: inside threads, and inside your
                  inbox.
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className={surfaceTileClassName}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBubble Icon={Inbox} />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </span>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Eyebrow>Step 1</Eyebrow>
                    <p className="text-[22px] font-[650] leading-[1.2] text-foreground">
                      Open a real thread
                    </p>
                    <p className="text-[15px] leading-[1.6] text-foreground/70">
                      Donna anchors CRM context to the conversation you're working on.
                    </p>
                  </div>
                </div>

                <div className={surfaceTileClassName}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBubble Icon={Users} />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </span>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Eyebrow>Step 2</Eyebrow>
                    <p className="text-[22px] font-[650] leading-[1.2] text-foreground">
                      Save contact context
                    </p>
                    <p className="text-[15px] leading-[1.6] text-foreground/70">
                      Add notes and tags so you remember what matters next time.
                    </p>
                  </div>
                </div>

                <div className={surfaceTileClassName}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBubble Icon={ClipboardList} />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      3
                    </span>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Eyebrow>Step 3</Eyebrow>
                    <p className="text-[22px] font-[650] leading-[1.2] text-foreground">
                      Capture the next step
                    </p>
                    <p className="text-[15px] leading-[1.6] text-foreground/70">
                      Create a task or follow-up with a due date while you reply.
                    </p>
                  </div>
                </div>

                <div className={surfaceTileClassName}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBubble Icon={Kanban} />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      4
                    </span>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Eyebrow>Step 4</Eyebrow>
                    <p className="text-[22px] font-[650] leading-[1.2] text-foreground">
                      Review your pipeline
                    </p>
                    <p className="text-[15px] leading-[1.6] text-foreground/70">
                      See what's in motion, what's blocked, and what needs attention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-[24px] border border-border bg-background shadow-sm">
                <div className="bg-muted/10 p-4">
                  <img
                    src="/screenshots/Pipeline.png"
                    alt="Pipeline tracking in Donna CRM"
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-14 lg:py-20">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="order-2 overflow-hidden rounded-[24px] border border-border bg-background shadow-sm lg:order-1">
                  <div className="bg-muted/10 p-4">
                    <img
                      src="/screenshots/Overview.png"
                      alt="Donna CRM AI assistant in the Gmail sidebar"
                      className="w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
                    An AI assistant, built into the workflow
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Use the assistant to move faster without losing accuracy or control.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <Bullet>Summarize a thread before you respond.</Bullet>
                    <Bullet>Generate a first draft, then edit in your own voice.</Bullet>
                    <Bullet>
                      Turn a conversation into concrete next steps (tasks, notes, deal updates).
                    </Bullet>
                    <Bullet>
                      Stay mindful of sensitive data, just like you would in email.
                    </Bullet>
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button variant="outline" asChild>
                      <Link href="/integrations">Permissions and integrations</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/privacy">Privacy policy</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-14 lg:py-20">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Try Donna CRM inside Gmail
            </h2>
            <p className="mt-4 text-muted-foreground">
              Install in under 2 minutes. No card required for trial. Cancel anytime.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'how_it_works_bottom_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCtaLabel}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
