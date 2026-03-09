import Link from 'next/link'
import { CookiePreferencesButton } from './consent/CookiePreferencesButton'

export function SiteFooter() {
  return (
    <footer data-snap-section className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <img
                src="/donna-48-v3.png"
                alt=""
                width={48}
                height={48}
                className="h-7 w-7 brightness-200"
                loading="lazy"
              />
              <span>Donna CRM</span>
            </div>
            <p className="text-sm text-primary-foreground/60">Your CRM, right inside Gmail.</p>
            <p className="text-xs text-primary-foreground/40">Built for people who live in Gmail.</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground/50">Product</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/product" className="text-primary-foreground/70 transition-colors hover:text-white">
                Product
              </Link>
              <Link href="/features" className="text-primary-foreground/70 transition-colors hover:text-white">
                Features
              </Link>
              <Link href="/resources" className="text-primary-foreground/70 transition-colors hover:text-white">
                Resources
              </Link>
              <Link href="/gmail-crm" className="text-primary-foreground/70 transition-colors hover:text-white">
                Gmail CRM
              </Link>
              <Link href="/ai-gmail-crm" className="text-primary-foreground/70 transition-colors hover:text-white">
                AI Gmail CRM
              </Link>
              <Link
                href="/how-it-works"
                className="text-primary-foreground/70 transition-colors hover:text-white"
              >
                How it works
              </Link>
              <Link href="/pricing" className="text-primary-foreground/70 transition-colors hover:text-white">
                Pricing
              </Link>
              <Link href="/faq" className="text-primary-foreground/70 transition-colors hover:text-white">
                FAQ
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground/50">Company</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/contact" className="text-primary-foreground/70 transition-colors hover:text-white">
                Contact
              </Link>
              <Link href="/privacy" className="text-primary-foreground/70 transition-colors hover:text-white">
                Privacy
              </Link>
              <CookiePreferencesButton className="text-left text-primary-foreground/70 transition-colors hover:text-white" />
              <Link href="/terms" className="text-primary-foreground/70 transition-colors hover:text-white">
                Terms
              </Link>
              <Link
                href="/cancellation-refunds"
                className="text-primary-foreground/70 transition-colors hover:text-white"
              >
                Cancellation &amp; Refunds
              </Link>
            </div>
          </div>
        </div>

        <span
          aria-hidden
          dangerouslySetInnerHTML={{
            __html: '<!-- Shipping page intentionally unlinked for policy compliance -->',
          }}
        />

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Donna CRM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
