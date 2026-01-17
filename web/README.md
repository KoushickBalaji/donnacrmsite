# Donna CRM Website (web)

This package is the Donna CRM marketing website, built as a React SPA (Vite + React Router) and typically deployed on Vercel.

## Quickstart

Prereqs: Node.js 18+.

- Install: `npm install`
- Run: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

## Documentation

Start here: [docs/README.md](docs/README.md).

## SPA routing (fix 404 on refresh)

The site uses client-side routing (React Router). Your host must rewrite all routes (e.g. `/privacy`) to `index.html`.

- Netlify / Cloudflare Pages: `public/_redirects` is included (`/* /index.html 200`).
- Vercel: `vercel.json` rewrites everything except `/api/*` to `/`.
- Nginx: `try_files $uri /index.html;`
- Apache: rewrite all non-files to `index.html` (via `.htaccess`).

## Contact form email (Vercel)

The `/contact` page posts to a Vercel Serverless Function at `/api/contact` (`api/contact.ts`), which sends an email via Resend.

Set these environment variables in your deployment:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (must be a verified sender in Resend)
- `CONTACT_TO_EMAIL` (optional, defaults to `support@donnacrm.com`)

Note: `npm run dev` (Vite) does not run Vercel functions; use `vercel dev` (Vercel CLI) or a proxy if you need to test the contact form locally end-to-end.
