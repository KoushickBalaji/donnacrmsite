# HowItWorks Page Redesign Plan

Goal: Bring the How It Works page up to the same visual and tonal standard as the Homepage and Product page, following the design guidelines.

---

## Issues Found

1. **No section rhythm** - Almost all sections are light (`bg-background` or `bg-muted`). Only the CTA is dark. Homepage alternates light/dark/light/dark.
2. **No full-viewport sections** - Homepage uses `min-h-[calc(100svh-4rem)]` with `flex items-center`. HowItWorks uses short padding only.
3. **Tight padding** - Uses `py-14 lg:py-20` vs homepage's standard `py-20 lg:py-28`.
4. **Scroll snap pattern inconsistency** - Uses `<ScrollSnapActivator />` component instead of `'use client'` + `useScrollSnap()` hook (like Home, Product, Pricing).
5. **AI section has broken hierarchy** - IconBubble appears before Eyebrow label, violating the Eyebrow -> heading -> subtext guideline.
6. **Copy could be more outcome-focused** - "Install and connect in minutes", "What Donna adds to your inbox", "A simple loop that stays in Gmail" are process/feature-focused.
7. **Daily workflow cards lack staggered animation** - Setup steps cards have individual `<Reveal delayMs>` wrappers; daily workflow cards are all in one `<Reveal>`.

---

## Changes

### 1. Scroll snap pattern (consistency with other pages)

**File: `src/views/HowItWorks.tsx`**

- Add `'use client'` directive at top of file
- Replace `import { ScrollSnapActivator } from '../components/ScrollSnapActivator'` with `import { useScrollSnap } from '../lib/useScrollSnap'`
- Call `useScrollSnap()` inside the component body (before the return)
- Remove `<ScrollSnapActivator />` from JSX

### 2. Section rhythm - alternate backgrounds

| Section | Current | New |
|---|---|---|
| Hero | `bg-background` (light) | `bg-background` (keep) |
| Setup steps | `bg-background` (light) | **`bg-primary`** (dark) |
| What Donna adds | `bg-muted` (light) | **`bg-background`** (light) |
| Daily workflow | `bg-background` (light) | **`bg-ink-deep`** (dark) |
| AI assistant | `bg-muted` (light) | **`bg-background`** (light) |
| CTA | `bg-primary` (dark) | `bg-primary` (keep) |

New rhythm: light -> dark -> light -> dark -> light -> dark

### 3. Full-viewport sections

Add `flex min-h-[calc(100svh-4rem)] items-center` to:
- Hero section (use `flex items-center` since it's centered content)
- Setup steps section
- What Donna adds section
- Daily workflow section
- AI assistant section

### 4. Padding standardization

Change all `py-14 lg:py-20` to `py-20 lg:py-28`.
Change hero's `py-16 lg:py-24` to `py-20 lg:py-28`.

### 5. Text colors for dark sections

**Setup steps (bg-primary):**
- Section heading: `text-foreground` -> `text-primary-foreground`
- Section subtext: `text-muted-foreground` -> `text-primary-foreground/60`
- Cards remain white (`bg-card`), so card text stays unchanged

**Daily workflow (bg-ink-deep):**
- Section heading: `text-foreground` -> `text-white`
- Section subtext: `text-muted-foreground` -> `text-white/60`
- Cards remain white (`bg-card`), so card text stays unchanged

### 6. Eyebrow dark variant

Add `variant` prop to local Eyebrow component:
```tsx
function Eyebrow({ children, variant = 'light' }: { children: React.ReactNode; variant?: 'light' | 'dark' }) {
  return (
    <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.12em] ${variant === 'dark' ? 'text-blue-400' : 'text-brand-blue'}`}>
      {children}
    </p>
  )
}
```

Use `variant="dark"` for Eyebrows in Setup steps and Daily workflow sections.
`text-blue-400` (#60a5fa) has ~5.5:1 contrast on both dark backgrounds.

### 7. Copy improvements

**Setup steps heading:**
- Old: "Install and connect in minutes"
- New: "Four steps. No configuration."
- Rationale: Punchier, avoids contradicting the hero's "30 seconds" claim

**What Donna adds heading:**
- Old: "What Donna adds to your inbox"
- New: "Your inbox becomes your CRM"
- Rationale: Outcome-focused instead of feature-listing

**Daily workflow heading:**
- Old: "A simple loop that stays in Gmail"
- New: "A workflow you'll actually stick to"
- Rationale: Outcome-focused, mirrors homepage's "The CRM you'll actually use" tone

### 8. AI section hierarchy fix

Remove the standalone `<div>` with `<Sparkles>` icon that appears before the Eyebrow.
The Eyebrow -> heading -> subtext hierarchy should be clean, matching the "What Donna adds" section pattern.

### 9. Staggered Reveal on daily workflow cards

Wrap each of the 4 daily workflow cards in individual `<Reveal>` with staggered delays:
- Card 1: `<Reveal delayMs={0} durationMs={400}>`
- Card 2: `<Reveal delayMs={80} durationMs={400}>`
- Card 3: `<Reveal delayMs={160} durationMs={400}>`
- Card 4: `<Reveal delayMs={240} durationMs={400}>`

(Matching the setup steps card animation pattern)

### 10. Image frame adjustments for dark sections

**Setup steps image (on bg-primary):**
- Old: `bg-muted/30 shadow-[0_24px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.04]`
- New: `bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.25)] ring-1 ring-white/10`

**Daily workflow image (on bg-ink-deep):**
- Old: `border border-border bg-background shadow-lg ring-1 ring-black/[0.04]` with inner `bg-muted/10 p-4`
- New: `border border-white/10 bg-white/5 shadow-lg ring-1 ring-white/[0.06]` with inner `bg-white/5 p-4`

---

## Files Modified

- `src/views/HowItWorks.tsx` (all changes in this single file)

## Verification

After changes, check:
1. `npx tsc --noEmit` passes
2. Visual check on localhost:3000/how-it-works for section rhythm, text readability on dark sections, card contrast
