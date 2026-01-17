# Project overview

## Purpose

This package (`web/`) is the Donna CRM marketing website:

- A React single-page app (SPA) rendered client-side.
- Navigation is handled by React Router.
- The Contact page submits to a Vercel serverless function that sends an email via Resend.

## Tech stack

- Build tool: Vite (`vite.config.ts`)
- UI: React + TypeScript (`src/`)
- Routing: React Router DOM (BrowserRouter) (`src/main.tsx`, `src/App.tsx`)
- Styling: Tailwind CSS + CSS variables (`src/index.css`, `tailwind.config.js`)
- Icons: `lucide-react`
- Serverless: Vercel Functions (`api/`)

## Repository layout (high level)

- `src/`: React application source
  - `src/pages/`: route-level page components (each corresponds to a URL path)
  - `src/components/`: shared layout/components used across pages
  - `src/components/ui/`: minimal reusable UI primitives (Button, Card)
  - `src/lib/`: small utilities (currently `cn` for className merging)
- `public/`: static assets served at the site root (for example screenshots referenced by pages)
- `api/`: Vercel serverless functions (currently only `api/contact.ts`)
- `vercel.json`: rewrite rules to support SPA routing while keeping `/api/*` working

## Core “website features”

- Marketing pages: Home, Features, Pricing, FAQ, Integrations, Resources, legal pages
- Header navigation and footer links
- Contact form with client-side validation and server-side email delivery (when deployed on Vercel)

If you’re looking for extension functionality (contacts, pipelines, tasks, campaigns, AI assistant), this repo only contains marketing copy and screenshots for those features.
