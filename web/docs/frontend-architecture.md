# Frontend architecture

## Entry points

- Root layout: `src/app/layout.tsx`
- Route entry files: `src/app/**/page.tsx`
- Metadata routes: `src/app/robots.ts`, `src/app/sitemap.ts`

## Layout composition

`src/app/layout.tsx` composes the global frame:

- `ConsentProvider` wraps the app and manages consent state.
- `Ga4Script` conditionally injects Google tag script after consent.
- `Ga4Analytics` tracks SPA route changes and install click events.
- `SiteHeader` and `SiteFooter` render shared navigation.
- `CookieConsentBanner` renders the consent UI.
- `JsonLd` injects global Organization/WebSite schema.

## Route composition pattern

Most routes are thin wrappers:

- Route file exports page metadata (usually via `pageMetadata(...)`).
- Route file renders a view component from `src/views/`.
- Indexable routes should have one canonical path, one source-level internal link, and one sitemap entry.

Exceptions:

- `/` has explicit metadata in `src/app/page.tsx`.
- `/resources/[slug]` uses `generateStaticParams` and `generateMetadata` from content.
- `/home` and `/compare` are redirect routes.
- Policy/support utility pages can be noindexed and omitted from the sitemap when they are not intended as search landing pages.

## Content-driven resources

Resources pages are generated from `src/content/resources.ts`:

- `/resources` renders cards from article data.
- `/resources/[slug]` is statically generated with `dynamic = 'force-static'` and `dynamicParams = false`.
- Article pages include BlogPosting JSON-LD.
- Article `title` is the visible reader-facing headline. Use optional `seoTitle` when the visible headline is too long for the browser/search title.

## Styling model

- Tailwind utility classes in components and views.
- CSS variables in `src/app/globals.css` provide color/radius tokens.
- Small primitive layer in `src/components/ui/` for `Button` and `Card`.
