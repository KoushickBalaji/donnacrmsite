# SEO and analytics

This site is a client-rendered React SPA. That has two practical implications:

- Google can usually index it, but SEO improvements are still worth doing (sitemap, robots, clear page titles, internal linking).
- Some crawlers and link preview bots do not execute JavaScript. For perfect SEO + social previews, consider SSR or pre-rendering.

## Technical SEO checklist (current repo)

- `public/robots.txt` and `public/sitemap.xml` exist and should be submitted in Google Search Console.
- Each route sets its own `<title>`, description, canonical URL, and basic OpenGraph/Twitter metadata via `src/components/Seo.tsx`.

### Configure canonical host (recommended)

If you serve the site on multiple hostnames (for example `www` and non-`www`), pick one as canonical and redirect the other with a 301 at the hosting/CDN layer.

Optionally set `VITE_SITE_ORIGIN` (for example `https://www.donnacrm.com`) so canonicals are consistent across environments.

## Google Analytics (GA4)

This repo supports GA4 (optional). If you want GA4:

1. Create a GA4 property and get your Measurement ID (format: `G-XXXXXXXXXX`).
2. Add it as an environment variable in your deployment:
   - `VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Trigger a *new build/deploy* (Vite env vars are baked at build time).
4. Deploy. Pageviews are recorded on SPA route changes via `src/lib/analytics/Analytics.tsx` (`Ga4Analytics` component).

Notes:

- The GA script is only loaded when `VITE_GA4_MEASUREMENT_ID` is set.
- The Google tag is injected from `index.html` at runtime (so the implementation looks like Google's recommended snippet), and SPA route changes are tracked from React.
- Basic "Do Not Track" is respected (`navigator.doNotTrack === "1"`).
- Chrome Web Store links include UTMs via `src/lib/chromeWebStore.ts` and the `install_click` event includes those UTM fields as parameters.

### Troubleshooting (GA4 shows no realtime traffic)

- Use GA4 **Realtime** or **DebugView**; standard reports can lag.
- Verify the site is actually loading `gtag.js`:
  - In DevTools → Network, filter for `gtag/js` and `google-analytics.com`.
  - Ad blockers / privacy extensions frequently block GA.
- If you set `VITE_GA4_MEASUREMENT_ID` after a deployment, you must redeploy so the build includes it.
- If traffic still doesn't show, confirm your GA4 Measurement ID matches the Web data stream in GA Admin.

If you'd rather avoid GA4, consider a simpler tool (Plausible, Umami, PostHog, Vercel Analytics) depending on your privacy and product needs.
