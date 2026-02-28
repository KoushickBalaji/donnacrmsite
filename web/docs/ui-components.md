# UI components

## Layout components

- `src/components/SiteHeader.tsx`
  - Desktop/mobile nav + primary install CTA.
  - Active nav highlighting via `usePathname()`.
- `src/components/SiteFooter.tsx`
  - Product and Company link groups.
  - Includes Cookie preferences control.

## Consent components

- `src/components/consent/ConsentProvider.tsx`
  - Consent state store + preference modal state.
  - Persists choices and clears tracking cookies on opt-out.
- `src/components/consent/CookieConsentBanner.tsx`
  - Banner and detailed preferences UI.
  - Renders only when tracking tags are configured and eligible to load.
- `src/components/consent/CookiePreferencesButton.tsx`
  - Opens consent preferences from footer.

## Reusable content components

- `src/components/FaqList.tsx`
  - `<details>` based FAQ list.
- `src/components/ResourceCardGrid.tsx`
  - Shared resource-card section built from article slugs.
- `src/components/Reveal.tsx`
  - IntersectionObserver reveal animation wrapper.
- `src/components/JsonLd.tsx`
  - Script tag helper for JSON-LD injection.

## UI primitives

- `src/components/ui/Button.tsx`
  - Variants: `default`, `secondary`, `outline`, `ghost`, `link`.
  - Sizes: `default`, `sm`, `lg`, `icon`.
  - `asChild` mode clones child element and applies button classes.
- `src/components/ui/Card.tsx`
  - `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.

## Utility

- `src/lib/cn.ts`
  - Combines `clsx` + `tailwind-merge` for class merging.
