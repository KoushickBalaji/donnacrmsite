# Codebase map

This is a “where do I change X?” guide for the `web/` package.

## Top-level files

- `package.json`
  - `scripts.dev`: starts Next dev server
  - `scripts.build`: builds the Next app (`next build`)
  - `scripts.lint`: runs ESLint
  - `scripts.start`: runs the production server (`next start`)

- `next.config.ts`
  - Next.js configuration

- `eslint.config.js`
  - ESLint flat config for `*.ts` and `*.tsx` files

- `tailwind.config.js`, `postcss.config.js`
  - Tailwind + PostCSS wiring

- `tsconfig.json`, `next-env.d.ts`
  - TypeScript configuration for Next.js

## Frontend app (`src/`)

- `src/app/layout.tsx`
  - Global layout (header/footer) + global metadata

- `src/app/**/page.tsx`
  - Route files (URLs → pages) + per-page metadata

- `src/app/globals.css`
  - Tailwind directives + CSS variables used as design tokens

### Views (`src/views/`)

Shared page UI components used by route files in `src/app/`.

- Marketing: `Home.tsx`, `Features.tsx`, `Pricing.tsx`, `Faq.tsx`, `Integrations.tsx`, `Resources.tsx`
- Contact: `Contact.tsx` (form + client validation + submit)
- Legal: `Privacy.tsx`, `Terms.tsx`, `CancellationRefunds.tsx`, `Shipping.tsx`

### Shared components (`src/components/`)

- `SiteHeader.tsx`: nav + mobile menu + CTA
- `SiteFooter.tsx`: footer links and legal links
- `JsonLd.tsx`: JSON-LD helper (structured data)

### UI primitives (`src/components/ui/`)

- `Button.tsx`
- `Card.tsx`

### Utilities (`src/lib/`)

- `cn.ts`: Tailwind-safe class merging helper
- `metadata.ts`: shared metadata helper for route pages
- `site.ts`: canonical origin + site constants

## Static assets (`public/`)

- `public/screenshots/*`: images referenced by marketing pages via `/screenshots/...`
- `public/og.png`: default share image

## Serverless (`src/app/api/`)

- `src/app/api/contact/route.ts`
  - Implements `POST /api/contact`
  - Sends contact-form submissions via Resend
