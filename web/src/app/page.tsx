import type { Metadata } from 'next'
import { softwareApplicationJsonLd } from '../lib/structuredData'
import { HomePage } from '../views/Home'

const description =
  'A lightweight CRM that works inside Gmail. Track deals, follow-ups, and contact context without leaving your inbox.'

export const metadata: Metadata = {
  // Root route does not reliably apply the layout `title.template`, so keep this explicit.
  title: 'Gmail CRM Extension | Donna CRM',
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Gmail CRM Extension | Donna CRM',
    description,
    url: '/',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    ...softwareApplicationJsonLd({
      description,
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  )
}
