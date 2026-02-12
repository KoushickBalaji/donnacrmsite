# Known gaps and TODOs

This section is intentionally blunt: it’s here to help developers know what is “placeholder” vs “final”.

## In-code TODOs (copy/feature accuracy)

Several pages include `TODO` comments indicating that copy or capability lists are not verified and should be updated when product details are finalized. Examples include:

- `src/views/Home.tsx` (AI Assistant and campaigns sections)
- `src/views/Features.tsx` (AI assistant details, tasks screenshot, tracking screenshot/copy)
- `src/views/Integrations.tsx` (permission mapping)
- `src/views/Resources.tsx` (resource cards are placeholders)
- `src/views/Pricing.tsx` (billing copy)

## Content quality issues worth fixing (not addressed here)

While reading the code, a few strings appear to contain character encoding artifacts (for example sequences like `ƒ?` or `youƒ?Tll`). This likely came from copy/paste through a bad encoding path and will show up in the UI.

Places to check:

- `src/views/Home.tsx`
- `src/views/Features.tsx`
- `src/views/Pricing.tsx`
- `src/views/Contact.tsx`
- `src/views/Faq.tsx`
- `src/views/Integrations.tsx`
- `src/views/Resources.tsx`

Also, `src/components/SiteFooter.tsx` renders `Ac {year}` which looks like it was intended to be a copyright symbol.

If you want, I can make a separate PR that cleans these strings up safely (with a quick pass through the rendered pages).
