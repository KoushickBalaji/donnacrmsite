import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { PipedriveAlternativePage } from '../../views/PipedriveAlternative'

export const metadata: Metadata = pageMetadata({
  title: 'Pipedrive CRM Alternative',
  description:
    'Looking for a Pipedrive alternative? Donna CRM keeps deal context, follow-ups, and next steps inside Gmail for solo operators.',
  canonicalPath: '/pipedrive-crm-alternative',
})

export default function Page() {
  return <PipedriveAlternativePage />
}
