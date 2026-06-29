'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '../lib/cn'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const navItems = [
  { path: '/product', label: 'Product' },
  { path: '/how-it-works', label: 'How it works' },
  { path: '/resources', label: 'Resources' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/faq', label: 'FAQ' },
] as const

const primaryCtaLabel = 'Add to Gmail - Free Trial'

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActiveNavItem = (itemPath: string) => {
    return itemPath === pathname
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b backdrop-blur transition-[background-color,border-color,box-shadow] duration-300',
        scrolled
          ? 'border-border bg-background/95 shadow-sm'
          : 'border-transparent bg-background/60',
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <img
            src="/donna-48-v3.png"
            alt="Donna CRM logo"
            width={48}
            height={48}
            className="h-7 w-7"
            loading="eager"
          />
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
                  'relative text-sm font-medium transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-[1.35rem] left-0 right-0 h-[2px] rounded-full bg-brand-blue" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="whitespace-normal text-center text-xs leading-tight shadow-sm transition-all duration-200 hover:shadow-md md:h-10 md:px-4 md:py-2 md:text-sm md:leading-normal md:whitespace-nowrap"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-muted md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu with slide transition */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 border-t-0 opacity-0',
        )}
      >
        <div className="container py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActiveNavItem(item.path)
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
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
    </header>
  )
}
