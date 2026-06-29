import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { TermsPage } from '../../views/Terms'

export const metadata: Metadata = pageMetadata({
  title: 'Terms & Conditions',
  description:
    'Read Donna CRM terms and conditions, including account eligibility, subscription rules, acceptable use, service limits, and legal policies.',
  canonicalPath: '/terms',
})

export default function Page() {
  return <TermsPage />
}
