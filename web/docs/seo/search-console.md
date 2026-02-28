# Google Search Console (GSC)

This page documents how to operate Search Console for this site.

## Property and canonical host

- Use the Domain property for `donnacrm.com`.
- For URL inspection and sitemap submission, use the canonical origin configured by `NEXT_PUBLIC_SITE_ORIGIN` (default: `https://www.donnacrm.com`).

## Sitemaps

- Submit: `https://www.donnacrm.com/sitemap.xml`
- Re-submit after adding/removing indexable pages or resource slugs.

## Indexing workflow

1. Inspect a canonical URL.
2. Click **Test live URL**.
3. Click **Request indexing**.

Start with core pages first (`/`, `/product`, `/pricing`, `/contact`, `/resources`).

## Performance workflow for non-brand queries

1. Open **Performance -> Search results**.
2. Add filter: Query does not contain `donna`.
3. Use the resulting query list to guide new landing pages or resource topics.
