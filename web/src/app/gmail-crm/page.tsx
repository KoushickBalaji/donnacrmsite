import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { softwareApplicationJsonLd } from '../../lib/structuredData'
import { GmailCrmPage } from '../../views/GmailCrm'
import { gmailCrmFaqs } from '../../views/gmail-crm-data'

const description =
  'Donna CRM is a Gmail-native CRM for solo operators. Track contacts, deal stages, and follow-ups without leaving your inbox.'

export const metadata: Metadata = pageMetadata({
  title: 'Gmail CRM',
  description,
  canonicalPath: '/gmail-crm',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    softwareApplicationJsonLd({
      canonicalPath: '/gmail-crm',
      description,
    }),
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
