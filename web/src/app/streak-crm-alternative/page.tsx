import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { StreakAlternativePage } from '../../views/StreakAlternative'

export const metadata: Metadata = pageMetadata({
  title: 'Streak CRM Alternative',
  description:
    'Looking for a Streak CRM alternative? Donna CRM keeps CRM context, follow-ups, and next steps inside Gmail without pipeline clutter.',
  canonicalPath: '/streak-crm-alternative',
})

export default function Page() {
  return <StreakAlternativePage />
}
