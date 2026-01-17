# Routing and pages

## Where routes are defined

Routes are defined in `src/App.tsx` using React Router:

- Each `<Route path="...">` maps to a page component from `src/pages/`.
- A redirect exists from `/home` → `/`.
- A catch-all `*` route renders `src/pages/NotFound.tsx`.

## How to add a new page

1. Create a page component in `src/pages/` (follow existing naming, e.g. `About.tsx` exporting `AboutPage`).
2. Add a `<Route>` in `src/App.tsx`.
3. Add navigation as appropriate:
   - Header links: `src/components/SiteHeader.tsx` (`navItems`)
   - Footer links: `src/components/SiteFooter.tsx`
4. Confirm your host rewrites deep links to `index.html` (see `docs/deployment.md`).

## Current routes (as-is)

- `/` → `src/pages/Home.tsx`
- `/features` → `src/pages/Features.tsx`
- `/integrations` → `src/pages/Integrations.tsx`
- `/resources` → `src/pages/Resources.tsx`
- `/pricing` → `src/pages/Pricing.tsx`
- `/faq` → `src/pages/Faq.tsx`
- `/contact` → `src/pages/Contact.tsx`
- `/privacy` → `src/pages/Privacy.tsx`
- `/cancellation-refunds` → `src/pages/CancellationRefunds.tsx`
- `/terms` → `src/pages/Terms.tsx`
- `/shipping` → `src/pages/Shipping.tsx`
- `*` → `src/pages/NotFound.tsx`

## Page responsibilities (high level)

- Marketing pages (Home/Features/Pricing/FAQ/Integrations/Resources) are mostly presentational and render copy + screenshots.
- Legal pages (Privacy/Terms/Cancellation & Refunds/Shipping) are static content rendered as React.
- Contact page includes client-side validation and a submit handler that calls `/api/contact`.
