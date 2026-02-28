# Home page scroll behavior

The home page (`/`) uses CSS scroll snapping that is toggled at runtime.

Implementation:

- `src/views/Home.tsx`
- `src/app/globals.css`

## How it works

`HomePage` toggles `home-scroll-snap` on the root `<html>` element when:

- Pointer is fine (`(pointer: fine)`), and
- Reduced motion is not requested (`(prefers-reduced-motion: reduce)` is false)

When enabled:

- `html.home-scroll-snap` applies `scroll-snap-type: y mandatory`.
- `--home-snap-offset` is set to `64px` for sticky header offset.
- Sections marked with `data-home-snap-section` become snap targets.

When disabled, the class and CSS variable are removed.

## Hash redirect behavior

`HomePage` also listens to URL hash changes:

- `#product` redirects to `/product`
- `#how-it-works` redirects to `/how-it-works`

## Tuning points

- Sticky offset value: `stickyHeaderOffsetPx` in `src/views/Home.tsx`
- Snap section participation: add/remove `data-home-snap-section` on home page `<section>` blocks
- Scroll snap CSS: `src/app/globals.css`
