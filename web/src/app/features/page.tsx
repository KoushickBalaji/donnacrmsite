import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { FeaturesPage } from '../../views/Features'

export const metadata: Metadata = pageMetadata({
  title: 'Features',
  description:
    'Explore Donna CRM features for Gmail workflows: contact management, pipelines, tasks, campaigns, and tracking.',
  canonicalPath: '/features',
})

export default function Page() {
  return <FeaturesPage />
}
