import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { ResourcesPage } from '../../views/Resources'

export const metadata: Metadata = pageMetadata({
  title: 'Gmail CRM Resources',
  description:
    'Guides, templates, and checklists for Gmail CRM workflows: follow-ups, pipelines, and human-in-the-loop AI for solo operators.',
  canonicalPath: '/resources',
})

export default function Page() {
  return <ResourcesPage />
}
