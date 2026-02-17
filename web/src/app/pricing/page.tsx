import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import { PricingPage, pricingFaqs } from '../../views/Pricing'

export const metadata: Metadata = pageMetadata({
  title: 'Pricing',
  description: 'Simple pricing for Donna CRM, a Chrome extension that brings CRM workflows into Gmail.',
  canonicalPath: '/pricing',
})

const origin = resolveSiteOrigin()

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Donna CRM',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Chrome',
      url: `${origin}/pricing`,
      description:
        'Simple pricing for Donna CRM, a Chrome extension that brings CRM workflows into Gmail.',
    },
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
