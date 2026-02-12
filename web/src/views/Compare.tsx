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
            We keep comparisons off the homepage. This page is where we’ll add side-by-side
            breakdowns as they’re ready.
          </p>

          <div className="mt-8 space-y-3">
            <Link href="/streak-crm-alternative" className="text-primary hover:underline">
              Detailed comparison →
            </Link>
            <div className="text-sm text-muted-foreground">More comparisons coming soon.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

