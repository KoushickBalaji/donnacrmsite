# Styling and design tokens

## Tailwind setup

- Tailwind config: `tailwind.config.cjs`
- PostCSS config: `postcss.config.cjs`
- Global CSS and tokens: `src/app/globals.css`

Tailwind scans:

- `./src/**/*.{ts,tsx}`

## Design tokens in `globals.css`

`:root` defines HSL token variables used by Tailwind mappings:

- Surface/text: `--background`, `--foreground`, `--card`, `--card-foreground`
- Brand: `--primary`, `--primary-foreground`
- UI neutrals: `--secondary`, `--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`
- Status: `--destructive`, `--destructive-foreground`
- Borders/inputs/focus: `--border`, `--input`, `--ring`
- Shape: `--radius`

`tailwind.config.cjs` maps Tailwind colors to these variables with `hsl(var(--...))`.

## Container sizing

Tailwind `container` config:

- Centered content
- Horizontal padding: `1.5rem`
- `2xl` width cap: `1280px`

**Marketing sections** use a wider container instead of the default: `mx-auto w-full max-w-[1440px] px-6 lg:px-10`. This gives hero and feature sections room to breathe on wide screens. The default `container` (1280px) is still appropriate for dense content like blog posts. See `docs/design-guidelines.md` for full details.

## Home scroll snapping styles

`globals.css` defines optional home-page snapping styles:

- `html.home-scroll-snap` enables vertical snap with `scroll-snap-type: y proximity`.
- `[data-home-snap-section]` sections align to snap points.
- `--home-snap-offset` is used for sticky-header offset.
- `proximity` (not `mandatory`) allows scrolling past the last section to reach the footer.

## Design guidelines

Layout, copy, and visual treatment standards are documented in `docs/design-guidelines.md`. These should be followed for all marketing pages.
