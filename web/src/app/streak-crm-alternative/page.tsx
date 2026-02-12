import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { StreakAlternativePage } from '../../views/StreakAlternative'

export const metadata: Metadata = pageMetadata({
  title: 'Donna CRM vs Streak – A Simpler Gmail CRM Alternative',
  description:
    'Looking for a Streak CRM alternative? Donna CRM is a lightweight CRM that works inside Gmail with no setup, no clutter, and no admin overhead.',
  canonicalPath: '/streak-crm-alternative',
})

export default function Page() {
  return <StreakAlternativePage />
}
