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
- `/updates`
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

## Product updates workflow

The `/updates` route is a customer-facing explanation of meaningful Donna CRM improvements. It is not an engineering changelog.

- Route metadata: `src/app/updates/page.tsx`
- Page layout: `src/views/Updates.tsx`
- Release content: `src/content/updates.ts`
- Voice and accuracy standard: [content-and-voice.md](./content-and-voice.md)

When adding a version:

1. Confirm that the version is publicly available. Do not use a development manifest version as publication evidence.
2. Confirm the live date from the Chrome Web Store or owner-provided evidence.
3. Verify every capability against the shipped extension in the sibling `gmailCRM` repository.
4. Include meaningful user-facing features only. Leave out cosmetic refinements, refactors, and maintenance work.
5. Write from the user's point of view: what changed, how it helps, and how to use it.
6. Keep the entry out of the published page until the owner approves its final content.
7. Update page metadata or social preview copy if the positioning of the current release changes.
8. Run `npm run qa` before publishing.

The Chrome Web Store is authoritative for the current public version. The extension source is authoritative for behavior. The owner is the final authority for release positioning and publication approval.

## How to add a new page

1. Add `src/app/<route>/page.tsx`.
2. Add or reuse a view component in `src/views/`.
3. Export metadata for indexable pages with `pageMetadata(...)`.
4. Add at least one source-level internal link before adding the page to the sitemap. Use header/footer links for evergreen pages, resource cards for articles, or contextual links inside related pages.
5. If the page should be discoverable by crawlers, add it to `src/app/sitemap.ts`.
6. If the page is required for policy/support but should not be discoverable, set `robots: { index: false, follow: true }` and keep it out of `src/app/sitemap.ts`.
7. Run `npm run qa` before publishing.

New page copy must also pass the review checklist in [content-and-voice.md](./content-and-voice.md).

Do not put redirect routes, noindex pages, or one-off utility pages in the sitemap. Redirect routes should point users and crawlers to the canonical page in one hop.
