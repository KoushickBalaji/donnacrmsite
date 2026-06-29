import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { HubSpotAlternativePage } from '../../views/HubSpotAlternative'

export const metadata: Metadata = pageMetadata({
  title: 'HubSpot CRM Alternative',
  description:
    'Looking for a HubSpot CRM alternative? Donna CRM is a lightweight Gmail-first CRM for follow-ups, relationship context, and next steps.',
  canonicalPath: '/hubspot-crm-alternative',
})

export default function Page() {
  return <HubSpotAlternativePage />
}
