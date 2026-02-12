import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import {
  CrmForConsultantsPage,
  crmForConsultantsFaqs,
} from '../../views/CrmForConsultants'

export const metadata: Metadata = pageMetadata({
  title: 'CRM for Consultants Inside Gmail',
  description:
    'A lightweight Gmail-native CRM for solo consultants. Track client context, engagement stage, and follow-ups without leaving your inbox.',
  canonicalPath: '/crm-for-consultants',
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
      url: `${origin}/crm-for-consultants`,
      description:
        'A lightweight Gmail-native CRM for solo consultants. Track client context, engagement stage, and follow-ups without leaving your inbox.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: crmForConsultantsFaqs.map((faq) => ({
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
      <JsonLd id="donna-jsonld-crm-for-consultants" data={jsonLd} />
      <CrmForConsultantsPage />
    </>
  )
}

