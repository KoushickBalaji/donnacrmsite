# How It Works Page - Redesign Plan

## Visitor context

People arrive here from:
- Home hero "See how it works" (understand the value prop, want the process)
- Product CTA "See how Donna works" (seen screenshots, want workflow clarity)
- Direct nav click (exploring)

They need to believe: it's easy to set up, it meaningfully changes their inbox,
it fits how they already work, and it's safe. Then they install.

## Current problems

1. Hero 3-step icons (Install -> Open Gmail -> You're ready) immediately contradict
   the next section titled "Four steps. That's it."
2. Color rhythm is flat: light -> light -> muted -> light -> muted -> dark
3. "What Donna adds" is a feature list that overlaps with Product/Features pages
4. No trust signal anywhere (Home has a full trust section)
5. Setup section has a generic stock photo that doesn't add value

## Proposed 6-section structure

Color rhythm: light -> dark -> light -> muted -> very dark -> light
(matches Home's strong alternation pattern)

---

### Section 1: Hero
- **Background:** bg-background (light) with donna-hero-drift
- **Eyebrow:** "How it works"
- **Headline:** "Up and running in 30 seconds"
- **Subtext:** "Install a Chrome extension, open Gmail, and your CRM is right
  there in the sidebar. No onboarding calls, no data migration, no learning curve."
- **CTAs:** Primary install + secondary "Explore features"
- **Friction reducers:** "Free trial . No credit card . Uninstall anytime"
- **Layout:** Centered text block, vertically centered in viewport

**REMOVE:** The 3-step icon strip. It contradicts the setup section and adds
visual noise. The headline "30 seconds" IS the hook - keep it clean.

---

### Section 2: Setup (dark navy)
- **Background:** bg-primary (dark navy) - creates strong contrast from hero
- **Eyebrow:** "Getting started" (use text-brand-blue, visible on dark)
- **Headline:** "Four steps. That's it." (text-primary-foreground)
- **Subtext:** "Donna runs directly inside Gmail. Most people go from install
  to first deal in under a minute." (text-primary-foreground/60)
- **Layout:** Single row of 4 compact step cards (lg:grid-cols-4).
  Light cards on dark background = high contrast.

**REMOVE:** The stock photo (laptop-hands.jpg). It's generic and forces a
cramped two-column layout. A clean 4-card row on dark background is more dramatic
and matches Home's Problem section pattern (heading + 4 cards on dark bg).

**Card styling:** Use compactTileClassName (bg-card = light cards on dark bg).
Number badges stay bg-primary which is navy on the white card surface - works fine.

Step content stays the same:
1. Install Donna - "One click from the Chrome Web Store..."
2. Open Gmail - "Head to your inbox - Donna is already waiting..."
3. Grant permissions - "Two quick prompts to connect your account..."
4. Start using Donna - "Deals, notes, and follow-ups - right where you reply."

---

### Section 3: Your inbox, transformed (light)
- **Background:** bg-background (light)
- **Eyebrow:** "Inside your inbox"
- **Headline:** "Everything you need, right where you work"
- **Subtext:** "Stop jumping between Gmail, a CRM, and a notes app. Donna keeps
  everything attached to the conversation it belongs to."
- **Layout:** Two-column grid. Text + benefit bullets left, Context Bar screenshot right.
- **Screenshot:** Context Bar.png

**Key difference from Product page:** Product shows screenshots in a tab carousel
(feature-by-feature). This section shows ONE screenshot and describes the
experience holistically - what it FEELS like to have context at your fingertips.

Bullet copy (benefit-first, no colon labels):
- "See who you're talking to - notes, tags, and history appear next to every thread"
- "Turn any email into a deal and track it through your pipeline"
- "Capture follow-ups with due dates so nothing falls through the cracks"
- "Send targeted outreach and see who opens, clicks, and replies"
- "Get AI-powered summaries and draft replies you can edit before sending"

Secondary CTAs: "Explore features" + "Read the guides"

---

### Section 4: Daily workflow (muted)
- **Background:** bg-muted (subtle shift from section 3)
- **Eyebrow:** "Your daily workflow"
- **Headline:** "The routine that actually sticks"
- **Subtext:** "Donna works because it fits the way you already work. Open your
  inbox, handle your conversations, and the CRM updates along the way."
- **Layout:** Centered heading, then 4 step tiles in a row (lg:grid-cols-4),
  then Pipeline screenshot below.
- **Screenshot:** Pipeline.png

Step tiles use surfaceTileClassName (the standard size, not compact - these
are the main content of this section and have room to breathe).

Steps:
1. Open a thread - "Click into any conversation and Donna pulls up everything
   you know about that contact."
2. Save context - "Jot down what matters while it's fresh. Notes and tags are
   right there next time."
3. Capture the next step - "Set a task or follow-up before you move on.
   Nothing slips through."
4. Review your pipeline - "See what's moving, what's stalled, and what needs
   your attention."

---

### Section 5: AI + Trust (very dark navy)
- **Background:** bg-ink-deep (very dark navy - dramatic before the final CTA)
- **Layout:** Two-column grid. Overview screenshot left, text + trust strip right.
- **Screenshot:** Overview.png

**AI portion:**
- IconBubble with Sparkles icon
- **Eyebrow:** "AI assistant"
- **Headline:** "Move faster without losing control" (text-white)
- **Subtext:** "Donna's AI helps you move through your inbox faster. You always
  review and edit before anything sends." (text-white/60)
- Bullets (text-white/70):
  - "Get a quick summary before diving into a long thread"
  - "Generate a first draft, then tweak it in your own voice"
  - "Turn conversations into tasks, notes, and deal updates automatically"
  - "Built with privacy in mind - your data is handled the way you'd expect"

**Trust strip** (below bullets, subtle):
- A horizontal row of shield-icon trust signals (text-white/40):
  - Third-party audited
  - CASA certified
  - Industry-standard encryption
- Links: "Permissions & integrations" + "Privacy policy"

**Why combine AI + Trust:** Visitors from Home already saw the full trust section.
This page needs a lighter touch. The AI section naturally bridges into trust
because the #1 AI anxiety is "will it act without my approval?" The privacy bullet
flows directly into the trust strip. Keeping them in one dark section avoids
having two dark sections back-to-back.

---

### Section 6: CTA (light)
- **Background:** bg-background (light - clean finish, same as Home's CTA)
- **Eyebrow:** "Ready to try it?"
- **Headline:** "See Donna in your inbox today"
- **Subtext:** "Install the Chrome extension, open Gmail, and you're up and running.
  No configuration, no onboarding calls, no credit card."
- **CTAs:** Primary install + secondary "View pricing"
- **Friction reducers:** "Free trial . No credit card . Uninstall anytime"

Light background creates a clean, open feel after the heavy dark section.
Matches Home's CTA pattern (bg-background after bg-ink-deep trust section).

---

## Summary of changes from current page

| What | Current | Proposed |
|------|---------|----------|
| Hero step icons | 3-step strip (contradicts setup) | Removed |
| Setup background | bg-background (light) | bg-primary (dark navy) |
| Setup layout | 2-col (cards + stock photo) | Single row 4 cards, no photo |
| Setup cards | compactTileClassName | compactTileClassName (same) |
| "What Donna adds" | bg-muted | bg-background (light) |
| "What Donna adds" copy | Unchanged | Unchanged (already rewritten) |
| Daily workflow | bg-background | bg-muted |
| AI section | bg-muted, standalone | bg-ink-deep, with trust strip |
| Trust | None | Woven into AI section |
| CTA | bg-primary (dark) | bg-background (light) |
| Color rhythm | light-light-muted-light-muted-dark | light-dark-light-muted-dark-light |

## What to verify after implementation

- Hero fills viewport cleanly, no bleed from section 2
- Dark setup section: light cards readable, number badges visible
- Color alternation creates visual punch on scroll
- AI + Trust section: text legible on bg-ink-deep
- CTA "View pricing" button styled correctly on light bg
- All snap targets land correctly
- No em dashes anywhere
