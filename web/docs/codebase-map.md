# Codebase map

This is a “where do I change X?” guide for the `web/` package.

## Top-level files

- `package.json`
  - `scripts.dev`: starts Vite
  - `scripts.build`: typecheck (`tsc -b`) then build (`vite build`)
  - `scripts.lint`: runs ESLint

- `index.html`
  - SPA HTML shell and metadata (title, description)
  - React mounts into `<div id="root"></div>`

- `vite.config.ts`
  - Vite config (currently only `@vitejs/plugin-react`)

- `eslint.config.js`
  - ESLint flat config for `*.ts` and `*.tsx` files

- `tailwind.config.js`, `postcss.config.js`
  - Tailwind + PostCSS wiring

- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
  - TypeScript project references and build settings

- `vercel.json`
  - SPA rewrite rules for Vercel while preserving `/api/*` routes

## Frontend app (`src/`)

- `src/main.tsx`
  - App entry: mounts React and sets up `BrowserRouter`

- `src/App.tsx`
  - Route table (URLs → page components)
  - Wraps routes in `SiteLayout`

- `src/index.css`
  - Tailwind directives + CSS variables used as design tokens

### Pages (`src/pages/`)

All route-level pages are in `src/pages/` and are referenced from `src/App.tsx`.

- Marketing: `Home.tsx`, `Features.tsx`, `Pricing.tsx`, `Faq.tsx`, `Integrations.tsx`, `Resources.tsx`
- Contact: `Contact.tsx` (form + client validation + submit)
- Legal: `Privacy.tsx`, `Terms.tsx`, `CancellationRefunds.tsx`, `Shipping.tsx`
- Error: `NotFound.tsx`

### Shared components (`src/components/`)

- `SiteLayout.tsx`: layout frame
- `SiteHeader.tsx`: nav + mobile menu + CTA
- `SiteFooter.tsx`: footer links and legal links

### UI primitives (`src/components/ui/`)

- `Button.tsx`
- `Card.tsx`

### Utilities (`src/lib/`)

- `cn.ts`: Tailwind-safe class merging helper

## Static assets (`public/`)

- `public/_redirects`: SPA rewrite rule for Netlify/Cloudflare Pages
- `public/screenshots/*`: images referenced by marketing pages via `/screenshots/...`

## Serverless (`api/`)

- `api/contact.ts`
  - Implements `POST /api/contact`
  - Sends contact-form submissions via Resend
