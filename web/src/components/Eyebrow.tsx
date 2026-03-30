export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={
        className ??
        'mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue'
      }
    >
      {children}
    </p>
  )
}
