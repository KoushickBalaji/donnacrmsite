# Home page scroll behavior

The marketing home page (`/`) has a desktop-only "scroll to next section" behavior to help users progress through the page without needing to scroll all the way down.

This is implemented directly in:

- `src/views/Home.tsx` (`HomePage()` - the wheel handler `useEffect`)

## What it does

- On desktop (fine pointer) and when `prefers-reduced-motion` is not enabled:
  - As the user scrolls down, the code accumulates wheel distance.
  - Once the accumulated distance is roughly equivalent to `wheelSnapNotches` wheel notches (regardless of timing), the page smoothly scrolls to the next home section.
- The home sections that participate are the `<section>` blocks marked with `data-home-snap-section`.

## Where to change copy

Home page section copy and card text is defined in:

- `src/views/Home.tsx`

For example, the "Why Gmail alone isn't enough" card titles and descriptions are hard-coded strings in that file.

## How to change it

All tuning knobs live at the top of `src/views/Home.tsx`:

- `wheelSnapNotches`: how much wheel intent is required before advancing to the next section.
- `initialNotchEstimatePx`: initial estimate of "pixels per wheel notch" (the code auto-calibrates from real wheel input).
- `minWheelDeltaPx`: ignore tiny wheel deltas/noise.
- `snapAnimationDurationMs`: how long the transition takes (milliseconds).
- `stickyHeaderOffsetPx`: keeps the destination section aligned below the sticky header.

To change which sections snap:

- Add/remove the `data-home-snap-section` attribute on a home `<section>`.

## Notes / constraints

- The handler uses a non-passive `wheel` listener and calls `event.preventDefault()` only when it is taking over to animate to the next/previous section.
- Scrolling is disabled entirely when `prefers-reduced-motion: reduce` is set.
