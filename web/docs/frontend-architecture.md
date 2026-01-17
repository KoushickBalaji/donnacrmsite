# Frontend architecture

## Entry points

- HTML shell: `index.html`
- React mount + router: `src/main.tsx`
- App composition + routes: `src/App.tsx`

## Layout composition

`src/App.tsx` wraps all routes in `SiteLayout`:

- `src/components/SiteLayout.tsx` provides the overall page frame.
- `src/components/SiteHeader.tsx` renders the top navigation (desktop + mobile menu).
- `src/components/SiteFooter.tsx` renders footer links (Product + Company + legal pages).

## Design system (lightweight)

This codebase uses Tailwind utility classes directly in page/components. There is a minimal set of reusable UI primitives:

- `src/components/ui/Button.tsx`: variants, sizes, and an `asChild` pattern (to style links as buttons).
- `src/components/ui/Card.tsx`: card primitives used throughout pages.

For class name merging and Tailwind conflict resolution:

- `src/lib/cn.ts` combines `clsx` and `tailwind-merge`.

## Static assets

Anything under `public/` is served at the site root. Screenshots used by pages live in:

- `public/screenshots/`

Pages reference these via paths like `/screenshots/Contacts.png`.
