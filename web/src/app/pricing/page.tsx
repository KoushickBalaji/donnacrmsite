import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { PricingPage } from '../../views/Pricing'

export const metadata: Metadata = pageMetadata({
  title: 'Pricing',
  description: 'Simple pricing for Donna CRM, a Chrome extension that brings CRM workflows into Gmail.',
  canonicalPath: '/pricing',
})

export default function Page() {
  return <PricingPage />
}
