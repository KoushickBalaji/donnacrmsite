import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { faqs } from '../../content/faqs'
import { pageMetadata } from '../../lib/metadata'
import { FaqPage } from '../../views/Faq'

export const metadata: Metadata = pageMetadata({
  title: 'FAQ',
  description: 'Answers to common questions about Donna CRM: installation, features, tracking, and billing.',
  canonicalPath: '/faq',
})

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function Page() {
  return (
    <>
      <JsonLd id="donna-jsonld-faq" data={faqJsonLd} />
      <FaqPage />
    </>
  )
}
