import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsubscribe',
  robots: { index: false, follow: false, noarchive: true },
}

const copyByStatus: Record<string, { title: string; body: string; support: boolean }> = {
  ok: {
    title: 'Unsubscribed',
    body: 'You won’t receive further emails from this organization.',
    support: false,
  },
  invalid: {
    title: 'Link expired',
    body: 'This unsubscribe link is invalid or has already been used.',
    support: false,
  },
  missing: {
    title: 'Invalid link',
    body: 'This unsubscribe link is missing required information.',
    support: false,
  },
  error: {
    title: 'Something went wrong',
    body: 'Please try again. If the problem continues, contact support.',
    support: true,
  },
}

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined

  const rawStatus = resolvedSearchParams?.status
  const status = (Array.isArray(rawStatus) ? rawStatus[0] : rawStatus ?? 'invalid').toLowerCase()
  const content = copyByStatus[status] ?? copyByStatus.invalid

  return (
    <main className="min-h-[calc(100svh-4rem)] bg-background px-4 py-12">
      <div className="mx-auto w-full max-w-[560px] rounded-xl border border-border bg-background p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {content.title}
        </h1>
        <p className="mt-2 text-muted-foreground">{content.body}</p>
        {content.support ? (
          <div className="mt-5">
            <a href="mailto:support@donnacrm.com" className="underline underline-offset-2">
              Contact support
            </a>
          </div>
        ) : null}
      </div>
    </main>
  )
}

