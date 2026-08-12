import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { InboxOnboardingPage, inboxOnboardingFaqs } from '../../views/InboxOnboarding'

const description =
  'Start CRM setup from real Gmail conversations. Donna CRM helps turn active threads into a lightweight pipeline and next-step workflow.'

export const metadata: Metadata = pageMetadata({
  title: 'Set Up Your CRM from Gmail Inbox',
  description,
  canonicalPath: '/inbox-onboarding',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
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
