import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import { InboxOnboardingPage, inboxOnboardingFaqs } from '../../views/InboxOnboarding'

export const metadata: Metadata = pageMetadata({
  title: 'Set Up Your CRM from Gmail Inbox',
  description:
    'Start your CRM setup from real Gmail conversations. Get to a lightweight pipeline and next-step workflow without heavy configuration.',
  canonicalPath: '/inbox-onboarding',
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
      url: `${origin}/inbox-onboarding`,
      description:
        'Start your CRM setup from real Gmail conversations. Get to a lightweight pipeline and next-step workflow without heavy configuration.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: inboxOnboardingFaqs.map((faq) => ({
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
      <JsonLd id="donna-jsonld-inbox-onboarding" data={jsonLd} />
      <InboxOnboardingPage />
    </>
  )
}

