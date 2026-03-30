import type { Metadata } from 'next'
import { HomePage } from '../views/Home'

export const metadata: Metadata = {
  // Root route does not reliably apply the layout `title.template`, so keep this explicit.
  title: 'Gmail CRM Extension | Donna CRM',
  description:
    'A lightweight CRM that works inside Gmail. Track deals, follow-ups, and contact context without leaving your inbox.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Gmail CRM Extension | Donna CRM',
    description:
      'A lightweight CRM that works inside Gmail. Track deals, follow-ups, and contact context without leaving your inbox.',
    url: '/',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Donna CRM',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Chrome',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '5',
      bestRating: '5',
      worstRating: '1',
    },
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
