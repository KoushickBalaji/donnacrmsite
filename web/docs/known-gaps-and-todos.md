# Known gaps and TODOs

This section is intentionally blunt: it’s here to help developers know what is “placeholder” vs “final”.

## In-code TODOs (copy/feature accuracy)

Several pages include `TODO` comments indicating that copy or capability lists are not verified and should be updated when product details are finalized. Examples include:

- `src/pages/Home.tsx` (AI Assistant and campaigns sections)
- `src/pages/Features.tsx` (AI assistant details, tasks screenshot, tracking screenshot/copy)
- `src/pages/Integrations.tsx` (permission mapping)
- `src/pages/Resources.tsx` (resource cards are placeholders)
- `src/pages/Pricing.tsx` (billing copy)

## Content quality issues worth fixing (not addressed here)

While reading the code, a few strings appear to contain character encoding artifacts (for example sequences like `ƒ?` or `youƒ?Tll`). This likely came from copy/paste through a bad encoding path and will show up in the UI.

Places to check:

- `src/pages/Home.tsx`
- `src/pages/Features.tsx`
- `src/pages/Pricing.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Faq.tsx`
- `src/pages/Integrations.tsx`
- `src/pages/Resources.tsx`

Also, `src/components/SiteFooter.tsx` renders `Ac {year}` which looks like it was intended to be a copyright symbol.

If you want, I can make a separate PR that cleans these strings up safely (with a quick pass through the rendered pages).
