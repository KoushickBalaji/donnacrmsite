# SEO

This folder documents SEO behavior implemented in code.

Start here for Search Console workflow: `docs/seo/search-console.md`.

## Current implementation

- Canonical and metadata base use `resolveSiteOrigin()` from `src/lib/site.ts`.
  - `NEXT_PUBLIC_SITE_ORIGIN` is used when set.
  - Fallback is `https://www.donnacrm.com`.
- Sitemap and robots are served by metadata routes:
  - `/sitemap.xml` -> `src/app/sitemap.ts`
  - `/robots.txt` -> `src/app/robots.ts`
- Most pages export metadata via `pageMetadata(...)` helper (`src/lib/metadata.ts`).
- Root page (`/`) has explicit metadata in `src/app/page.tsx`.
- Resource article pages (`/resources/[slug]`) generate metadata dynamically per article.
  - Use `title` for the visible article headline.
  - Use optional `seoTitle` when the visible headline is too long for the browser/search title.
- Default Open Graph image is `public/og.png`.
- Structured data includes:
  - Global Organization + WebSite JSON-LD in `src/app/layout.tsx`
  - FAQ and article JSON-LD on relevant supporting pages
  - One SoftwareApplication entity on the homepage from `src/lib/structuredData.ts`

## Publishing rules

- Keep final page titles at or below 60 characters, including the ` | Donna CRM` suffix applied by the root metadata template.
- Keep meta descriptions between 110 and 160 characters.
- Every indexable page needs exactly one H1 in the rendered view.
- Every image needs non-empty alt text or a data-backed alt expression.
- Every indexable sitemap URL needs at least one source-level internal link.
  - Use header/footer links for evergreen sections.
  - Use contextual links for niche landing pages.
  - Use the resources listing for article pages.
- Do not add redirect routes, noindex pages, or utility/policy pages to the sitemap.
- Use `robots: { index: false, follow: true }` for direct-access policy/support pages that should not be search landing pages.
- Keep SoftwareApplication JSON-LD on the homepage only. Supporting product pages should use only the schema type their visible content supports, such as FAQPage.
- Keep the visible homepage rating and monthly price aligned with `src/lib/productFacts.ts`.
- Before changing rating data, verify the current value and count on Donna's Chrome Web Store listing. Before changing offer data, verify the current pricing page.
- Do not publish fake ratings, review counts, adoption metrics, or unavailable offer data in structured data.

## Redirects and indexing behavior

- `/home` permanently redirects to `/`.
- `/compare` permanently redirects to `/streak-crm-alternative`.
- Production middleware redirects `http` requests to `https` and redirects `donnacrm.com` to `www.donnacrm.com` in one hop when both apply.
- Vercel may apply its own HTTP-to-HTTPS redirect before application middleware. Do not add application redirects solely to eliminate that platform-managed hop.
- Global robots metadata in `layout.tsx` uses:
  - `index/follow = true` when `VERCEL_ENV === 'production'` or `NODE_ENV === 'production'`
  - `index/follow = false` otherwise
- `src/middleware.ts` enforces HTTPS in production requests.
- `npm run qa:seo` checks page title lengths, meta description lengths, empty image alt text, duplicate H1s, sitemap discoverability, redirect routes, homepage software schema, and resource-topic linking.
- `npm run qa` runs content QA, internal link QA, SEO QA, and lint before publishing.

## Code locations

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/lib/site.ts`
- `src/lib/metadata.ts`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/resources/[slug]/page.tsx`
- `src/components/JsonLd.tsx`
- `src/lib/structuredData.ts`
- `scripts/seo-qa.mjs`
