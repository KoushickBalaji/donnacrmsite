import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { pageMetadata } from '../../lib/metadata'
import { resolveSiteOrigin } from '../../lib/site'
import { EmailTrackingInGmailPage } from '../../views/EmailTrackingInGmail'
import { emailTrackingFaqs } from '../../views/email-tracking-data'

export const metadata: Metadata = pageMetadata({
  title: 'Email Tracking in Gmail (Open & Click)',
  description:
    'Understand email opens and link clicks in Gmail (where supported). Use engagement signals to time follow-ups and prioritize outreach.',
  canonicalPath: '/email-tracking-in-gmail',
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
      url: `${origin}/email-tracking-in-gmail`,
      description:
        'Understand email opens and link clicks in Gmail (where supported). Use engagement signals to time follow-ups and prioritize outreach.',
    },
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

