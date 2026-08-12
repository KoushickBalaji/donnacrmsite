import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { ProductPage } from '../../views/Product'

const description =
  'Donna CRM brings pipelines, task tracking, mail merge, and contact context into Gmail so solo operators can manage follow-ups without a heavy CRM.'

export const metadata: Metadata = pageMetadata({
  title: 'Product',
  description,
  canonicalPath: '/product',
})

export default function Page() {
  return <ProductPage />
}
