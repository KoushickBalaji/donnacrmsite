import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { UpdatesPage } from '../../views/Updates'

const description =
  'See what is new in Donna CRM and discover how every update helps you manage relationships, deals, and follow-ups more easily inside Gmail.'

const baseMetadata = pageMetadata({
  title: 'Product Updates',
  description,
  canonicalPath: '/updates',
})

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    images: [
      {
        url: '/og-updates.png',
        width: 1400,
        height: 560,
        alt: 'Donna CRM - Your CRM, Inside Gmail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Updates',
    description,
    images: ['/og-updates.png'],
  },
}

export default function Page() {
  return <UpdatesPage />
}
