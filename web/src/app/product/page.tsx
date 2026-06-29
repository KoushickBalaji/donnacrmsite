import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { softwareApplicationJsonLd } from '../../lib/structuredData'
import { ProductPage } from '../../views/Product'

const description =
  'Donna CRM brings pipelines, task tracking, mail merge, and contact context into Gmail so solo operators can manage follow-ups without a heavy CRM.'

export const metadata: Metadata = pageMetadata({
  title: 'Product',
  description,
  canonicalPath: '/product',
})

const productJsonLd = {
  '@context': 'https://schema.org',
  ...softwareApplicationJsonLd({
    canonicalPath: '/product',
    description,
  }),
}

export default function Page() {
  return (
    <>
      <JsonLd id="donna-jsonld-product" data={productJsonLd} />
      <ProductPage />
    </>
  )
}
