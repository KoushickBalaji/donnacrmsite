'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '../lib/cn'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const navItems = [
  { path: '/product', label: 'Product' },
  { path: '/how-it-works', label: 'How it works' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/faq', label: 'FAQ' },
] as const

const primaryCtaLabel = 'Add to Gmail - Free Trial'

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActiveNavItem = (itemPath: string) => {
    return itemPath === pathname
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm">
            D
          </span>
          <span>Donna CRM</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = isActiveNavItem(item.path)
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  'text-sm font-medium transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="whitespace-normal text-center text-xs leading-tight md:h-10 md:px-4 md:py-2 md:text-sm md:leading-normal md:whitespace-nowrap"
            asChild
          >
            <a
              href={chromeWebStoreInstallUrl({ content: 'header' })}
              target="_blank"
              rel="noopener noreferrer"
            >
              {primaryCtaLabel}
            </a>
          </Button>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = isActiveNavItem(item.path)
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-primary',
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
