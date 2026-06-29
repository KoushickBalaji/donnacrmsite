import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { ContactPage } from '../../views/Contact'

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact Donna CRM for setup help, billing questions, product support, or guidance on getting a Gmail-first CRM workflow running.',
  canonicalPath: '/contact',
})

export default function Page() {
  return <ContactPage />
}
