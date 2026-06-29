import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { softwareApplicationJsonLd } from '../../lib/structuredData'
import { CrmForFreelancersPage } from '../../views/CrmForFreelancers'
import { crmForFreelancersFaqs } from '../../views/crm-for-freelancers-data'

const description =
  'A lightweight client tracker inside Gmail for freelancers. Track leads, quotes, client context, and follow-ups without a heavy team CRM.'

export const metadata: Metadata = pageMetadata({
  title: 'CRM for Freelancers Inside Gmail',
  description,
  canonicalPath: '/crm-for-freelancers',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    softwareApplicationJsonLd({
      canonicalPath: '/crm-for-freelancers',
      description,
    }),
    {
      '@type': 'FAQPage',
      mainEntity: crmForFreelancersFaqs.map((faq) => ({
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
      <JsonLd id="donna-jsonld-crm-for-freelancers" data={jsonLd} />
      <CrmForFreelancersPage />
    </>
  )
}
