import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { CancellationRefundsPage } from '../../views/CancellationRefunds'

export const metadata: Metadata = pageMetadata({
  title: 'Cancellation & Refunds',
  description:
    'Cancellation and refunds policy for Donna CRM subscriptions, including trial details, cancellation timing, and refund eligibility.',
  canonicalPath: '/cancellation-refunds',
})

export default function Page() {
  return <CancellationRefundsPage />
}
