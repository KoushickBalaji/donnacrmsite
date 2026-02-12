type JsonLdProps = {
  id: string
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // JSON-LD can live in head or body; Next will hoist scripts safely.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

