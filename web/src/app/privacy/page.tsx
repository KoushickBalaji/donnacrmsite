import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { PrivacyPage } from '../../views/Privacy'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy policy for Donna CRM, including how we collect, use, and protect information for our Chrome extension and related services.',
  canonicalPath: '/privacy',
})

export default function Page() {
  return <PrivacyPage />
}
