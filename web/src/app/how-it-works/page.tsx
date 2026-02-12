import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { HowItWorksPage } from '../../views/HowItWorks'

export const metadata: Metadata = pageMetadata({
  title: 'How Donna works inside Gmail',
  description:
    'How Donna CRM works inside Gmail: install the extension, see contact context in every thread, track deals in pipelines, and stay on top of follow-ups without leaving your inbox.',
  canonicalPath: '/how-it-works',
})

export default function Page() {
  return <HowItWorksPage />
}
