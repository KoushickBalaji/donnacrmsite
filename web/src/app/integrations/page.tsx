import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { IntegrationsPage } from '../../views/Integrations'

export const metadata: Metadata = pageMetadata({
  title: 'Integrations',
  description:
    'See how Donna CRM works with Gmail-first workflows, including contact context, CSV imports, Google Sheets imports, and lightweight CRM setup.',
  canonicalPath: '/integrations',
})

export default function Page() {
  return <IntegrationsPage />
}
