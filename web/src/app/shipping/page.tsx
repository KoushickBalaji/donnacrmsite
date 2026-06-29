import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { ShippingPage } from '../../views/Shipping'

export const metadata: Metadata = pageMetadata({
  title: 'Shipping & Delivery',
  description:
    'Shipping and delivery policy for Donna CRM (a digital service), including how access is provided and how to get help with delivery issues.',
  canonicalPath: '/shipping',
  robots: { index: false, follow: true },
})

export default function Page() {
  return <ShippingPage />
}
