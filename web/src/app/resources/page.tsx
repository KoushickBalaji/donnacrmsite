import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { ResourcesPage } from '../../views/Resources'

export const metadata: Metadata = pageMetadata({
  title: 'Resources',
  description: 'Practical guides to help you get the most out of Donna CRM inside Gmail.',
  canonicalPath: '/resources',
})

export default function Page() {
  return <ResourcesPage />
}
