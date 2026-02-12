import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import { GmailCrmPage, gmailCrmFaqs } from '../../views/GmailCrm'

export const metadata: Metadata = pageMetadata({
  title: 'Gmail CRM',
  description:
    'Donna CRM is a Gmail-native CRM for solo operators. Track contacts, deal stages, and follow-ups without leaving your inbox.',
  canonicalPath: '/gmail-crm',
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
      url: `${origin}/gmail-crm`,
      description:
        'Donna CRM is a Gmail-native CRM for solo operators. Track contacts, deal stages, and follow-ups without leaving your inbox.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: gmailCrmFaqs.map((faq) => ({
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
      <JsonLd id="donna-jsonld-gmail-crm" data={jsonLd} />
      <GmailCrmPage />
    </>
  )
}

