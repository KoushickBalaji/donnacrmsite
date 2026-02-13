import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/metadata'
import { ComparePage } from '../../views/Compare'

export const metadata: Metadata = pageMetadata({
  title: 'Compare',
  description: 'Learn how Donna CRM compares to other CRM approaches - lightweight and built for Gmail.',
  canonicalPath: '/compare',
})

export default function Page() {
  return <ComparePage />
}
