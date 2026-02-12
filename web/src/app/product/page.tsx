import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { ProductPage } from '../../views/Product'

export const metadata: Metadata = pageMetadata({
  title: 'Product',
  description: 'Donna CRM brings lightweight pipelines, task tracking, mail merge, and contact context into Gmail.',
  canonicalPath: '/product',
})

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Donna CRM',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Chrome',
  url: 'https://www.donnacrm.com/product',
  description:
    'Donna CRM brings lightweight pipelines, task tracking, mail merge, and contact context into Gmail.',
}

export default function Page() {
  return (
    <>
      <JsonLd id="donna-jsonld-product" data={productJsonLd} />
      <ProductPage />
    </>
  )
}
