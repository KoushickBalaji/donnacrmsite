import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { FeaturesPage, featuresFaqs } from '../../views/Features'

const description =
  'Explore Donna CRM features for Gmail workflows: contact management, pipelines, tasks, campaigns, email tracking, and AI-assisted follow-ups.'

export const metadata: Metadata = pageMetadata({
  title: 'Features',
  description,
  canonicalPath: '/features',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: featuresFaqs.map((faq) => ({
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
      <JsonLd id="donna-jsonld-features" data={jsonLd} />
      <FeaturesPage />
    </>
  )
}
