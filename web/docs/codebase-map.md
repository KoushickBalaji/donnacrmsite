# Codebase map

This is a "where do I change X?" guide for `web/`.

## Top-level files

- `package.json`
  - `dev`: clean dist dir, then run Next dev through wrapper
  - `build`: clean dist dir, then run Next build through wrapper
  - `start`: run Next start through wrapper
  - `lint`: run ESLint
  - `qa`: run content QA, internal link QA, SEO QA, and ESLint
  - `qa:content`: run static content QA checks
  - `qa:links`: run static internal link checks
  - `qa:seo`: run static SEO publication checks
- `next.config.ts`
  - Next.js config (`reactStrictMode`, `poweredByHeader`, Windows dist dir override)
- `eslint.config.js`
  - ESLint flat config
- `tailwind.config.cjs`, `postcss.config.cjs`
  - Tailwind and PostCSS config
- `tsconfig.json`, `next-env.d.ts`
  - TypeScript config for Next.js

## Scripts

- `scripts/clean-next.mjs`
  - Removes active dist directory (`.next` or `.next-windows`) before dev/build.
- `scripts/next-wrapper.mjs`
  - Starts Next with a Windows trace workaround.
- `scripts/content-qa.mjs`
  - Detects placeholders, mojibake patterns, suspicious artifacts, and non-ASCII in source content.
- `scripts/link-qa.mjs`
  - Detects broken source-level internal links against App Router routes and public assets.
- `scripts/seo-qa.mjs`
  - Detects title/description length issues, duplicate H1s, missing image alt text, redirect routes in the sitemap, and sitemap paths without source-level internal links.

## Frontend app (`src/`)

- `src/app/layout.tsx`
  - Global metadata and page frame.
  - Mounts header/footer, consent provider, analytics components, and cookie banner.
- `src/app/**/page.tsx`
  - Route entrypoints.
- `src/app/resources/[slug]/page.tsx`
  - Generates static resource article pages from `src/content/resources.ts`.
- `src/app/robots.ts`, `src/app/sitemap.ts`
  - Metadata routes for `/robots.txt` and `/sitemap.xml`.
- `src/app/api/contact/route.ts`
  - `GET/POST` handler for contact form email.
- `src/middleware.ts`
  - Enforces HTTPS redirects in production.

## Views (`src/views/`)

Page-level React components rendered by route files.

Examples:

- Marketing: `Home.tsx`, `Product.tsx`, `HowItWorks.tsx`, `Features.tsx`, `Pricing.tsx`
- SEO landing pages: `GmailCrm.tsx`, `AiGmailCrm.tsx`, `CrmForConsultants.tsx`, etc.
- Resources: `Resources.tsx`, `ResourceArticle.tsx`
- Legal/support: `Privacy.tsx`, `Terms.tsx`, `Shipping.tsx`, `CancellationRefunds.tsx`, `Contact.tsx`

## Shared components (`src/components/`)

- Layout: `SiteHeader.tsx`, `SiteFooter.tsx`
- Structured data: `JsonLd.tsx`
- Reusable UI blocks: `FaqList.tsx`, `ResourceCardGrid.tsx`, `Reveal.tsx`
- Consent UI: `consent/*`
- UI primitives: `ui/Button.tsx`, `ui/Card.tsx`

## Content and utilities

- `src/content/resources.ts`
  - Resource article source data (slugs, metadata, sections, FAQs).
- `src/content/faqs.ts`
  - Shared FAQ content.
- `src/lib/`
  - `metadata.ts` page metadata helper
  - `site.ts` site constants and canonical origin resolver
  - `chromeWebStore.ts` install URL + UTM builder
  - `consent.ts` consent state and cookie cleanup logic
  - `analytics/*` GA4 and Google Ads tracking helpers
  - `cn.ts` class merge helper

## Static assets (`public/`)

- `public/screenshots/*` product screenshots
- `public/stock/*` stock imagery
- `public/og.png` default social share image
- `public/donna-16-v3.png` site icon
