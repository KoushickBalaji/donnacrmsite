import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { softwareApplicationJsonLd } from '../../lib/structuredData'
import { AiGmailCrmPage } from '../../views/AiGmailCrm'
import { aiGmailCrmFaqs } from '../../views/ai-gmail-crm-data'

const description =
  'Use a human-in-the-loop AI assistant inside Gmail to summarize threads, draft follow-ups, and capture next steps while you stay in control.'

export const metadata: Metadata = pageMetadata({
  title: 'AI Gmail CRM (Human-in-the-loop)',
  description,
  canonicalPath: '/ai-gmail-crm',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    softwareApplicationJsonLd({
      canonicalPath: '/ai-gmail-crm',
      description,
    }),
    {
      '@type': 'FAQPage',
      mainEntity: aiGmailCrmFaqs.map((faq) => ({
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
      <JsonLd id="donna-jsonld-ai-gmail-crm" data={jsonLd} />
      <AiGmailCrmPage />
    </>
  )
}
