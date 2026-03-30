import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import { AiGmailCrmPage } from '../../views/AiGmailCrm'
import { aiGmailCrmFaqs } from '../../views/ai-gmail-crm-data'

export const metadata: Metadata = pageMetadata({
  title: 'AI Gmail CRM (Human-in-the-loop)',
  description:
    'An AI assistant inside Gmail that helps you summarize threads, draft follow-ups, and capture next steps-while keeping you in control.',
  canonicalPath: '/ai-gmail-crm',
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
      url: `${origin}/ai-gmail-crm`,
      description:
        'An AI assistant inside Gmail that helps you summarize threads, draft follow-ups, and capture next steps-while keeping you in control.',
    },
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

