import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import {
  CrmForFreelancersPage,
  crmForFreelancersFaqs,
} from '../../views/CrmForFreelancers'

export const metadata: Metadata = pageMetadata({
  title: 'CRM for Freelancers Inside Gmail',
  description:
    'A lightweight client tracker inside Gmail for freelancers. Track leads, quotes, and follow-ups without a heavy team CRM.',
  canonicalPath: '/crm-for-freelancers',
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
      url: `${origin}/crm-for-freelancers`,
      description:
        'A lightweight client tracker inside Gmail for freelancers. Track leads, quotes, and follow-ups without a heavy team CRM.',
    },
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

