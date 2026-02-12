# Styling and design tokens

## Tailwind setup

- Tailwind config: `tailwind.config.js`
- PostCSS config: `postcss.config.js`
- Base CSS and design tokens: `src/app/globals.css`

Tailwind scans these for class usage:

- `./src/**/*.{ts,tsx}`

## Design tokens (CSS variables)

`src/app/globals.css` defines HSL-based CSS variables on `:root`:

- `--background`, `--foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--muted`, `--accent`, `--destructive`
- `--border`, `--input`, `--ring`
- `--radius`

`tailwind.config.js` maps Tailwind color names to these variables using `hsl(var(--...))`.

## Container sizing

The Tailwind `container` is configured to:

- Center content
- Use `1.5rem` padding
- Cap `2xl` at `1280px`

This is why most pages use `className="container"` at the top level of sections.
