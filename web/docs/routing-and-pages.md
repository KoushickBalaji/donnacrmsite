# Routing and pages

## Where routes are defined

Routes come from Next.js App Router files under `src/app/`.

- `src/app/<segment>/page.tsx` maps to `/<segment>`.
- `src/app/page.tsx` maps to `/`.
- `src/app/not-found.tsx` handles 404 rendering.

## Current route surface

### Public pages

- `/`
- `/product`
- `/how-it-works`
- `/features`
- `/integrations`
- `/resources`
- `/pricing`
- `/faq`
- `/contact`
- `/gmail-crm`
- `/ai-gmail-crm`
- `/crm-for-consultants`
- `/crm-for-freelancers`
- `/crm-for-solo-b2b-sales`
- `/inbox-onboarding`
- `/email-tracking-in-gmail`
- `/privacy`
- `/terms`
- `/cancellation-refunds`
- `/shipping`
- `/streak-crm-alternative`
- `/unsubscribe`

### Redirect routes

- `/home` -> `/` (`src/app/home/page.tsx`)
- `/compare` -> `/streak-crm-alternative` (`src/app/compare/page.tsx`)

### Dynamic static route

- `/resources/[slug]` from `src/app/resources/[slug]/page.tsx`
  - Slugs are defined in `src/content/resources.ts`.
  - Pages are pre-rendered via `generateStaticParams()`.

### Metadata routes

- `/robots.txt` -> `src/app/robots.ts`
- `/sitemap.xml` -> `src/app/sitemap.ts`

### API route

- `POST /api/contact` (and `GET` 405 response) -> `src/app/api/contact/route.ts`

## Navigation wiring

- Header nav items: `src/components/SiteHeader.tsx`
- Footer link groups: `src/components/SiteFooter.tsx`

## How to add a new page

1. Add `src/app/<route>/page.tsx`.
2. Add or reuse a view component in `src/views/`.
3. Export metadata for indexable pages.
4. Add links in header/footer as needed.
5. If it should be discoverable by crawlers, add it to `src/app/sitemap.ts`.
