import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { HowItWorksPage } from '../../views/HowItWorks'

export const metadata: Metadata = pageMetadata({
  title: 'How Donna works inside Gmail',
  description:
    'See how Donna CRM works inside Gmail: install the extension, view contact context, track deals in pipelines, and stay on top of follow-ups.',
  canonicalPath: '/how-it-works',
})

export default function Page() {
  return <HowItWorksPage />
}
