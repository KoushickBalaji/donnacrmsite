import type { PropsWithChildren } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}

