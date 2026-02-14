import type { ReactNode } from 'react'

export type FaqItem = {
  question: string
  answer: ReactNode
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="rounded-lg border border-border bg-background px-5 py-4"
          open={index === 0}
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
            {item.question}
          </summary>
          <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</div>
        </details>
      ))}
    </div>
  )
}
