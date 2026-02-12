import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            The page you’re looking for doesn’t exist.
          </p>
          <div className="mt-10">
            <Link href="/" className="text-sm font-semibold text-primary hover:underline">
              Go to homepage →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

