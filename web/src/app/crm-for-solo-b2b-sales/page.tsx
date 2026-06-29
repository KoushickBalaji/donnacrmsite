import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { softwareApplicationJsonLd } from '../../lib/structuredData'
import { CrmForSoloB2BSalesPage } from '../../views/CrmForSoloB2BSales'
import { crmForSoloB2BSalesFaqs } from '../../views/crm-for-solo-b2b-sales-data'

const description =
  'Track deal stages and follow-ups from Gmail. Donna CRM keeps deal context next to email threads so solo B2B sellers can move faster.'

export const metadata: Metadata = pageMetadata({
  title: 'A Solo B2B Sales CRM Inside Gmail',
  description,
  canonicalPath: '/crm-for-solo-b2b-sales',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    softwareApplicationJsonLd({
      canonicalPath: '/crm-for-solo-b2b-sales',
      description,
    }),
    {
      '@type': 'FAQPage',
      mainEntity: crmForSoloB2BSalesFaqs.map((faq) => ({
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
      <JsonLd id="donna-jsonld-crm-for-solo-b2b-sales" data={jsonLd} />
      <CrmForSoloB2BSalesPage />
    </>
  )
}
