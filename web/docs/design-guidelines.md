# Design guidelines

Standards for layout, copy, and visual treatment across all marketing pages. These were established during the homepage redesign and should be followed for every new page or section.

## Layout & spacing

### Wide container for marketing sections

Use `mx-auto w-full max-w-[1440px] px-6 lg:px-10` for hero and feature sections instead of the default Tailwind `container` (capped at 1280px). The 1280px container is fine for dense content like blog posts, but marketing sections need room to breathe on wide screens.

```tsx
{/* Marketing section — wide */}
<section className="bg-background py-20 lg:py-28">
  <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
    ...
  </div>
</section>

{/* Content section — standard container is fine */}
<section className="bg-background py-20 lg:py-28">
  <div className="container">
    ...
  </div>
</section>
```

### No card-within-card nesting

If a section already has a distinct background color (`bg-primary`, `bg-ink-deep`, `bg-muted`), do not wrap content in another card. It makes things look cramped and wastes horizontal space. Use cards only to visually group items _within_ a section.

**Wrong:**
```tsx
<section className="bg-muted py-20">
  <div className="container">
    <div className="rounded-2xl bg-ink-deep p-12">  {/* Unnecessary nesting */}
      <h2>...</h2>
    </div>
  </div>
</section>
```

**Right:**
```tsx
<section className="bg-ink-deep py-20">
  <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
    <h2>...</h2>
  </div>
</section>
```

### Full-width dark sections for emphasis

Use `bg-primary` or `bg-ink-deep` as full-bleed section backgrounds, not as card backgrounds inside white sections. This creates real visual contrast and section rhythm.

### Two-column layouts for text + visuals

Use `lg:grid-cols-2` (or `lg:grid-cols-[1fr_1.1fr]` when one side needs more space) with generous gap (`lg:gap-16` to `lg:gap-20`). Don't cram both text and supporting content into a narrow card.

### Scroll-snap behavior

Use `scroll-snap-type: y proximity` (not `mandatory`). Mandatory snap prevents users from reaching content like footers that doesn't fill a full viewport. Proximity preserves the page-by-page feel while allowing freedom at the edges.

---

## Copy & messaging

### Headlines sell outcomes, not features

Lead with _why it matters to the visitor_, explain the mechanism in the subtext.

| Weak (feature) | Strong (outcome) |
|---|---|
| "A lightweight CRM that works inside Gmail" | "The CRM you'll actually use" |
| "Built to stay lightweight" | "Everything you need, nothing you don't" |
| "Rigorous testing. CASA certified." | "Your data, handled with care" |

### Eyebrows categorize, they don't describe

Keep eyebrow labels to 2-3 words that tell you _what type of section this is_.

| Weak (too long / descriptive) | Strong (categorizing) |
|---|---|
| "Your CRM, right inside Gmail" | "Gmail-native CRM" |
| "Designed for simplicity" | "How it works" |
| "Security & Trust" | "Security" |

### Speak to the reader's pain directly

Use "you" language and describe their actual experience.

| Weak (abstract) | Strong (personal) |
|---|---|
| "Important conversations get buried." | "You meant to circle back. That thread is now buried under hundreds of emails." |
| "Gmail doesn't remember past conversations." | "Who is this person? What did you discuss last? You're scrolling through months of threads." |

### One idea per card

Each card should have a short bold title and one paragraph. Avoid multi-part formats (title / problem / solution) which make cards dense and hard to scan. Let the section heading establish context; cards just need to land one point each.

### Audience targeting placement

Don't list audience segments in the hero ("Best for founders, freelancers, agencies, recruiters, and consultants"). It dilutes focus and feels like it's trying to please everyone. Mention audiences further down the page in a relevant context (e.g., a "Built for solo operators" feature card).

### No em dashes

Never use em dashes (`—`, `&mdash;`, or `&#8212;`) in copy. Use a spaced hyphen (` - `) instead.

| Wrong | Right |
|---|---|
| `Gmail—right next to your conversations` | `Gmail - right next to your conversations` |
| `follow-ups&mdash;all without opening` | `follow-ups - all without opening` |

This applies to all visible text: headings, body copy, cards, labels, banners. Code comments are exempt.

### Friction reducers

Use `text-xs` with middot separators near the CTA: `Free trial · No credit card · Uninstall anytime`. Keep them visually subordinate to the button.

---

## Section structure

### Follow a narrative arc

Every marketing page should tell a story. The homepage pattern:

1. **Hero** — What is this? Why should I care?
2. **Problem** — What's broken today? (Creates urgency)
3. **Solution** — How does this fix it? (Creates desire)
4. **Trust** — Can I trust this? (Removes doubt)
5. **CTA** — What do I do next? (Converts)

Other pages may vary but should still follow a logical flow from _why_ to _how_ to _act_.

### Alternate light and dark sections

Creates visual rhythm and makes each section feel distinct. Typical pattern: `light → dark → light → dark → light`. Use the existing design tokens:

- Light: `bg-background` or `bg-muted`
- Dark: `bg-primary` or `bg-ink-deep`
- Dark text on light: `text-foreground` / `text-muted-foreground`
- Light text on dark: `text-primary-foreground` / `text-white` with `/60` opacity for secondary text

### Eyebrow → heading → subtext hierarchy

Every section needs this hierarchy:

```tsx
<Eyebrow>Short label</Eyebrow>
<h2 className="text-3xl font-bold text-foreground sm:text-4xl"
    style={{ letterSpacing: '-0.02em' }}>
  Outcome-focused headline
</h2>
<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
  One or two sentences of supporting detail.
</p>
```

Don't skip levels. Eyebrow orients, heading makes the point, subtext elaborates.

### One H1 per page

Each page should render exactly one `<h1>`. Use `<h2>` for section headings and non-heading text (`<p>` or `<span>`) for repeated hero labels, sticky labels, or collapsed hero states. If a visual state repeats the page title, it should not become a second H1.

### Images need meaningful alt text

Every `<img>` needs non-empty alt text unless it is intentionally handled by a data-backed alt expression such as `alt={item.screenshotAlt}`. Use concise descriptions of the actual product state or trust asset, not generic text like "image" or "screenshot".

---

## Trust & social proof

### Acknowledge the trust ask

Don't jump straight to certifications. Acknowledge what you're asking the user to trust you with: _"A CRM sees your contacts, your conversations, your deals. That's a lot of trust."_ This is more persuasive than leading with badge names.

### No fake metrics

Never fabricate user counts or adoption numbers. Use honest language: "Join teams around the world" or specific verifiable trust signals (certifications, audit results, Chrome Web Store listing).

### Trust signals as a strip

Small trust indicators (Chrome Extension, Google Workspace compatible, install time) work well as a subtle bottom-of-hero strip — `text-xs text-muted-foreground/70` with middot or pipe separators. Don't give them a whole section.

---

## Component patterns

### Eyebrow component

```tsx
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
      {children}
    </p>
  )
}
```

### IconBubble component

```tsx
function IconBubble({ Icon }: { Icon: typeof Inbox }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-blue/5 text-brand-blue shadow-sm">
      <Icon className="h-5 w-5" />
    </div>
  )
}
```

### CTA button with shadow

```tsx
<Button size="lg" className="shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]" asChild>
  <a href={url} target="_blank" rel="noopener noreferrer">
    Add to Gmail - Free Trial
  </a>
</Button>
```

### Feature card

```tsx
<div className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/[0.04] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
  <IconBubble Icon={Zap} />
  <h3 className="mt-4 text-base font-bold text-foreground">Card title</h3>
  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
    One paragraph of description.
  </p>
</div>
```
