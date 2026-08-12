import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { CrmForConsultantsPage } from '../../views/CrmForConsultants'
import { crmForConsultantsFaqs } from '../../views/crm-for-consultants-data'

const description =
  'A lightweight Gmail-native CRM for solo consultants. Track client context, engagement stage, and follow-ups without leaving your inbox.'

export const metadata: Metadata = pageMetadata({
  title: 'CRM for Consultants Inside Gmail',
  description,
  canonicalPath: '/crm-for-consultants',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
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
