import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { TermsPage } from '../../views/Terms'

export const metadata: Metadata = pageMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using Donna CRM, including eligibility, subscriptions, acceptable use, and legal policies.',
  canonicalPath: '/terms',
})

export default function Page() {
  return <TermsPage />
}
