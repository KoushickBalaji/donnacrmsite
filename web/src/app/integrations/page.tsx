import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { IntegrationsPage } from '../../views/Integrations'

export const metadata: Metadata = pageMetadata({
  title: 'Integrations',
  description: 'See how Donna CRM works with Gmail and your workflow (including CSV and Google Sheets imports).',
  canonicalPath: '/integrations',
})

export default function Page() {
  return <IntegrationsPage />
}
