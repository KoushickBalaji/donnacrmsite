import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import { getResourceArticleBySlug } from '../content/resources'

type ResourceCardGridProps = {
  title: string
  description: string
  slugs: string[]
  viewAllHref?: string
  viewAllLabel?: string
  sectionClassName?: string
}

export function ResourceCardGrid({
  title,
  description,
  slugs,
  viewAllHref = '/resources',
  viewAllLabel = 'View all resources',
  sectionClassName = 'bg-muted py-20 lg:py-28',
}: ResourceCardGridProps) {
  const articles = slugs
    .map((slug) => getResourceArticleBySlug(slug))
    .filter((article) => article !== null)

  if (!articles.length) return null

  return (
    <section className={sectionClassName}>
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">{description}</p>
            </div>
            <Link href={viewAllHref} className="text-sm font-semibold text-primary hover:underline">
              {viewAllLabel}
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="h-full border-border transition-all duration-200 group-hover:border-primary/50 group-hover:-translate-y-0.5 group-hover:shadow-md">
                  <CardContent className="flex h-full flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
                      {article.category}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">{article.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{article.description}</p>
                    <p className="mt-5 text-xs text-muted-foreground">
                      {article.readingTimeMinutes} min read
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read guide{' '}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
