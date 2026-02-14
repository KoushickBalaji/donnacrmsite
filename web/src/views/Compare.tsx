import Link from 'next/link'

export function ComparePage() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Compare Donna
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We keep comparisons off the homepage. This page lists side-by-side breakdowns we're
            comfortable standing behind.
          </p>

          <div className="mt-8 space-y-3">
            <Link href="/streak-crm-alternative" className="block text-primary hover:underline">
              Donna vs Streak
            </Link>
            <div className="text-sm text-muted-foreground">
              Evaluating another tool?{' '}
              <Link href="/contact" className="text-primary hover:underline">
                Request a comparison
              </Link>{' '}
              and share your workflow.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
