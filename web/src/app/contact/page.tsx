import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { ContactPage } from '../../views/Contact'

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact Donna CRM support or get help with setup, billing, and product questions.',
  canonicalPath: '/contact',
})

export default function Page() {
  return <ContactPage />
}
