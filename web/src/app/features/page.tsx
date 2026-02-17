import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import { FeaturesPage, featuresFaqs } from '../../views/Features'

export const metadata: Metadata = pageMetadata({
  title: 'Features',
  description:
    'Explore Donna CRM features for Gmail workflows: contact management, pipelines, tasks, campaigns, and tracking.',
  canonicalPath: '/features',
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
      url: `${origin}/features`,
      description:
        'Explore Donna CRM features for Gmail workflows: contact management, pipelines, tasks, campaigns, and tracking.',
    },
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
