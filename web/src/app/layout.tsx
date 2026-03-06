import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { ConsentProvider } from '../components/consent/ConsentProvider'
import { CookieConsentBanner } from '../components/consent/CookieConsentBanner'
import { JsonLd } from '../components/JsonLd'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { Ga4Analytics } from '../lib/analytics/Analytics'
import { Ga4Script } from '../lib/analytics/Ga4Script'
import { resolveSiteOrigin, SITE_NAME } from '../lib/site'
import './globals.css'

const siteOrigin = resolveSiteOrigin()
const isProduction =
  process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111827',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `CRM inside Gmail | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: '/donna-16-v3.png',
    shortcut: '/donna-16-v3.png',
  },
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    siteName: SITE_NAME,
  },
}

const globalJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteOrigin}/#organization`,
      name: SITE_NAME,
      url: siteOrigin,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteOrigin}/#website`,
      name: SITE_NAME,
      url: siteOrigin,
      publisher: { '@id': `${siteOrigin}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ConsentProvider>
          <Ga4Script />
          <JsonLd id="donna-jsonld-global" data={globalJsonLd} />
          <div className="min-h-screen bg-background">
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <Suspense fallback={null}>
                <Ga4Analytics />
              </Suspense>
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </div>
          <CookieConsentBanner />
        </ConsentProvider>
      </body>
    </html>
  )
}
