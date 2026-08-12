import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { PricingPage } from '../../views/Pricing'
import { pricingFaqs } from '../../views/pricing-data'

const description =
  'Simple Donna CRM pricing for solo Gmail workflows. Start free, then upgrade when you need more contacts, campaigns, and CRM automation.'

export const metadata: Metadata = pageMetadata({
  title: 'Pricing',
  description,
  canonicalPath: '/pricing',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: pricingFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd id="donna-jsonld-pricing" data={jsonLd} />
      <PricingPage />
    </>
  )
}
