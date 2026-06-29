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
- `/streak-crm-alternative`
- `/copper-crm-alternative`
- `/hubspot-crm-alternative`
- `/pipedrive-crm-alternative`
- `/unsubscribe`

`/shipping` exists for direct policy access, but it is noindexed and omitted from the sitemap because it is not intended to be a discoverable SEO page.

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
3. Export metadata for indexable pages with `pageMetadata(...)`.
4. Add at least one source-level internal link before adding the page to the sitemap. Use header/footer links for evergreen pages, resource cards for articles, or contextual links inside related pages.
5. If the page should be discoverable by crawlers, add it to `src/app/sitemap.ts`.
6. If the page is required for policy/support but should not be discoverable, set `robots: { index: false, follow: true }` and keep it out of `src/app/sitemap.ts`.
7. Run `npm run qa` before publishing.

Do not put redirect routes, noindex pages, or one-off utility pages in the sitemap. Redirect routes should point users and crawlers to the canonical page in one hop.
