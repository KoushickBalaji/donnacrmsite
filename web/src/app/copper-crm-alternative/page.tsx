import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { CopperAlternativePage } from '../../views/CopperAlternative'

export const metadata: Metadata = pageMetadata({
  title: 'Copper CRM Alternative',
  description:
    'Looking for a Copper CRM alternative? Donna CRM keeps contact context, follow-ups, and next steps inside Gmail for solo operators.',
  canonicalPath: '/copper-crm-alternative',
})

export default function Page() {
  return <CopperAlternativePage />
}
