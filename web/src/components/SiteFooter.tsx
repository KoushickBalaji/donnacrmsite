import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm">
                D
              </span>
              <span>Donna CRM</span>
            </div>
            <p className="text-sm text-muted-foreground">Your CRM, right inside Gmail.</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Product</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/product" className="text-muted-foreground hover:text-primary">
                Product
              </Link>
              <Link href="/gmail-crm" className="text-muted-foreground hover:text-primary">
                Gmail CRM
              </Link>
              <Link href="/ai-gmail-crm" className="text-muted-foreground hover:text-primary">
                AI Gmail CRM
              </Link>
              <Link
                href="/how-it-works"
                className="text-muted-foreground hover:text-primary"
              >
                How it works
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Company</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Terms
              </Link>
              <Link
                href="/cancellation-refunds"
                className="text-muted-foreground hover:text-primary"
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

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            (c) {new Date().getFullYear()} Donna CRM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
