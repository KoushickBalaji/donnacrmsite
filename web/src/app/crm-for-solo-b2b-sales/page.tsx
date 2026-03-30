import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import { CrmForSoloB2BSalesPage } from '../../views/CrmForSoloB2BSales'
import { crmForSoloB2BSalesFaqs } from '../../views/crm-for-solo-b2b-sales-data'

export const metadata: Metadata = pageMetadata({
  title: 'A Solo B2B Sales CRM Inside Gmail',
  description:
    'Track deal stages and follow-ups from Gmail. Donna CRM keeps deal context next to email threads so you can move faster as a solo seller.',
  canonicalPath: '/crm-for-solo-b2b-sales',
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
      url: `${origin}/crm-for-solo-b2b-sales`,
      description:
        'Track deal stages and follow-ups from Gmail. Donna CRM keeps deal context next to email threads so you can move faster as a solo seller.',
    },
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

