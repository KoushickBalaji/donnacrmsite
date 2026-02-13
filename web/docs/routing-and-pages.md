# Routing and pages

## Where routes are defined

Routes are defined by the Next.js App Router under `src/app/`:

- Each `src/app/<route>/page.tsx` maps to a URL path.
- `/home` redirects to `/` via `src/app/home/page.tsx`.
- 404s are handled by `src/app/not-found.tsx`.

## How to add a new page

1. Create a route file in `src/app/` (e.g. `src/app/about/page.tsx`).
2. Add a page component in `src/views/` if you want to keep route files thin (optional).
3. Add navigation as appropriate:
   - Header links: `src/components/SiteHeader.tsx` (`navItems`)
   - Footer links: `src/components/SiteFooter.tsx`
4. If the page should be indexed, export per-page `metadata` in the route file (see `src/app/*/page.tsx`).

## Current routes (as-is)

- `/` → `src/app/page.tsx`
- `/product` → `src/app/product/page.tsx`
- `/how-it-works` → `src/app/how-it-works/page.tsx`
- `/compare` → `src/app/compare/page.tsx`
- `/features` → `src/app/features/page.tsx`
- `/integrations` → `src/app/integrations/page.tsx`
- `/resources` → `src/app/resources/page.tsx`
- `/pricing` → `src/app/pricing/page.tsx`
- `/faq` → `src/app/faq/page.tsx`
- `/contact` → `src/app/contact/page.tsx`
- `/gmail-crm` → `src/app/gmail-crm/page.tsx`
- `/ai-gmail-crm` → `src/app/ai-gmail-crm/page.tsx`
- `/crm-for-consultants` → `src/app/crm-for-consultants/page.tsx`
- `/crm-for-freelancers` → `src/app/crm-for-freelancers/page.tsx`
- `/crm-for-solo-b2b-sales` → `src/app/crm-for-solo-b2b-sales/page.tsx`
- `/inbox-onboarding` → `src/app/inbox-onboarding/page.tsx`
- `/email-tracking-in-gmail` → `src/app/email-tracking-in-gmail/page.tsx`
- `/privacy` → `src/app/privacy/page.tsx`
- `/cancellation-refunds` → `src/app/cancellation-refunds/page.tsx`
- `/terms` → `src/app/terms/page.tsx`
- `/shipping` → `src/app/shipping/page.tsx`
- `/streak-crm-alternative` → `src/app/streak-crm-alternative/page.tsx`
- `/unsubscribe` → `src/app/unsubscribe/page.tsx`

## Page responsibilities (high level)

- Marketing pages (Home/Features/Pricing/FAQ/Integrations/Resources) are mostly presentational and render copy + screenshots.
- Legal pages (Privacy/Terms/Cancellation & Refunds/Shipping) are static content rendered as React.
- Contact page includes client-side validation and a submit handler that calls `/api/contact`.

## Home page notes

The home page (`/`) is rendered by:

- `src/app/page.tsx` -> `src/views/Home.tsx`

Home page copy and layout live in `src/views/Home.tsx`. The home page also includes a desktop-only "scroll to next section" behavior (wheel-based) implemented in the `HomePage()` component.

For details and tuning knobs, see: `docs/homepage-scroll.md`.
