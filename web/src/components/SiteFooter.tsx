import { Link } from 'react-router-dom'

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
            <p className="text-sm text-muted-foreground">
              Your CRM, right inside Gmail.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Product</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/features" className="text-muted-foreground hover:text-primary">
                Features
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Company</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Donna CRM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
