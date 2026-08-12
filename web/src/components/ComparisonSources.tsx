export type ComparisonSource = {
  label: string
  href: string
}

export type ComparisonSourcesProps = {
  competitorName: string
  checkedDate: string
  sources: readonly ComparisonSource[]
}

export function ComparisonSources({
  competitorName,
  checkedDate,
  sources,
}: ComparisonSourcesProps) {
  return (
    <div className="mt-6 border-t border-border pt-6">
      <p className="text-sm font-semibold text-foreground">Check current details</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Competitor features and pricing can change. These official {competitorName} pages were
        checked in {checkedDate}.
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
        {sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        This is a high-level comparison for typical solo workflows. Check the official product
        pages above for current plan and feature details.
      </p>
    </div>
  )
}
