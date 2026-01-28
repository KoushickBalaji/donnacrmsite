import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '../lib/cn'
import { chromeWebStoreInstallUrl } from '../lib/chromeWebStore'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/resources', label: 'Resources' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
] as const

export function SiteHeader() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm">
            D
          </span>
          <span>Donna CRM</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
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

        <div className="hidden md:block">
          <Button asChild>
            <a
              href={chromeWebStoreInstallUrl({ content: 'header_desktop' })}
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Extension
            </a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
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
              <Button className="mt-2 w-full" asChild>
                <a
                  href={chromeWebStoreInstallUrl({ content: 'header_mobile' })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Extension
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
