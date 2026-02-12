# UI components

## Layout components

- `src/components/SiteHeader.tsx`
  - Desktop navigation + CTA button to install the Chrome extension.
  - Mobile menu toggle (hamburger) controlled by local state.
  - Active route highlighting uses `usePathname()` from Next.js.

- `src/components/SiteFooter.tsx`
  - Footer navigation groups: Product + Company.
  - Links to legal pages and major marketing pages.

## UI primitives

- `src/components/ui/Button.tsx`
  - Variants: `default`, `secondary`, `outline`, `ghost`, `link`
  - Sizes: `default`, `sm`, `lg`, `icon`
  - `asChild` allows you to style an anchor or other element as a button via `React.cloneElement`.
  - If `asChild` is set and `children` is not a valid React element, it returns `null` (worth knowing when debugging “missing button” issues).

- `src/components/ui/Card.tsx`
  - Primitives: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
  - Used as building blocks for page sections.

## Utility

- `src/lib/cn.ts`
  - `cn()` merges class strings safely: conditional classes via `clsx` and Tailwind conflict resolution via `tailwind-merge`.
