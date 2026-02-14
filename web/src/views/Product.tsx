'use client'

import { Reveal } from '../components/Reveal'
import { Button } from '../components/ui/Button'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'
import { useMemo, useState } from 'react'
import Link from 'next/link'

const primaryCtaLabel = 'Add to Gmail - Free Trial'

export function ProductPage() {
  const showcaseItems = useMemo(
    () =>
      [
        {
          id: 'pipelines',
          label: 'Pipelines',
          badge: 'Task tracking',
          title: 'Simple pipelines',
          description: 'Stage-based pipelines with built-in task tracking.',
          screenshotSrc: '/screenshots/Pipeline.png',
          screenshotAlt: 'Pipeline tracking in Donna CRM',
        },
        {
          id: 'deals',
          label: 'Deals',
          title: 'Turn emails into deals',
          description: 'Create and move deals directly from conversations.',
          screenshotSrc: '/screenshots/Overview.png',
          screenshotAlt: 'Donna CRM inside Gmail',
        },
        {
          id: 'mail-merge',
          label: 'Mail merge',
          title: 'Mail merge campaigns',
          description: 'Send personalized messages to many contacts in one go.',
          screenshotSrc: '/screenshots/Campaigns.png',
          screenshotAlt: 'Campaigns in Donna CRM',
        },
        {
          id: 'context',
          label: 'Contact context',
          title: 'See contact context',
          description: 'Notes, past interactions, and related deals in one place.',
          screenshotSrc: '/screenshots/Context%20Bar.png',
          screenshotAlt: 'Contact context bar in Donna CRM',
        },
      ] as const,
    [],
  )

  const [activeId, setActiveId] = useState<(typeof showcaseItems)[number]['id']>(
    showcaseItems[0].id,
  )

  const activeItem = useMemo(() => {
    return showcaseItems.find((item) => item.id === activeId) ?? showcaseItems[0]
  }, [activeId, showcaseItems])

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-10 lg:py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Product
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {'Pipelines, tasks, mail merge, and contact context - without leaving your inbox.'}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'product_hero_primary' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCtaLabel}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">See how it works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F7F9] py-10 lg:py-14">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                What you can do with Donna
              </h2>

              <div className="mt-6">
                <div className="border-b border-border">
                  <div className="flex gap-6 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {showcaseItems.map((item) => {
                    const active = item.id === activeId
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        className={[
                          'flex-shrink-0 border-b-2 px-1 pb-3 pt-2 text-sm font-semibold transition-colors',
                          active
                            ? 'border-primary text-foreground'
                            : 'border-transparent text-muted-foreground hover:text-foreground',
                        ].join(' ')}
                        aria-current={active ? 'true' : undefined}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-background shadow-sm">
                  <div className="flex min-h-[260px] items-center justify-center bg-muted/10 p-4 sm:min-h-[340px] lg:min-h-[460px]">
                    <img
                      src={activeItem.screenshotSrc}
                      alt={activeItem.screenshotAlt}
                      className="h-full max-h-[520px] w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-semibold text-foreground">
                        {activeItem.title}
                      </p>
                      {'badge' in activeItem && activeItem.badge ? (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                          {activeItem.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{activeItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
             <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to try Donna?
             </h2>
            <p className="mt-4 text-muted-foreground">
              Install in under 2 minutes. No setup. Cancel anytime.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'product_bottom_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCtaLabel}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
