import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { EmailTrackingInGmailPage } from '../../views/EmailTrackingInGmail'
import { emailTrackingFaqs } from '../../views/email-tracking-data'

const description =
  'Understand email opens and link clicks in Gmail where supported. Use engagement signals to time follow-ups and prioritize outreach.'

export const metadata: Metadata = pageMetadata({
  title: 'Email Tracking in Gmail (Open & Click)',
  description,
  canonicalPath: '/email-tracking-in-gmail',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: emailTrackingFaqs.map((faq) => ({
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
      <JsonLd id="donna-jsonld-email-tracking" data={jsonLd} />
      <EmailTrackingInGmailPage />
    </>
  )
}
