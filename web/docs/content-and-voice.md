# Donna CRM content and voice guide

This is the canonical writing standard for the Donna CRM website. It applies to page copy, product updates, metadata, calls to action, resource content, navigation labels, and supporting microcopy.

When this guide conflicts with older wording elsewhere in the site, follow this guide and bring the older wording into alignment when it is in scope.

## The approved voice

Donna sounds like a thoughtful product expert helping someone get more from Gmail. The voice is:

- **Customer-first:** begin with what the reader wants to accomplish.
- **Clear:** use familiar words and concrete situations instead of product or engineering terminology.
- **Warm:** speak directly to the reader using `you` and `your`.
- **Confident:** state benefits plainly without hype, superlatives, or vague claims.
- **Practical:** connect every feature to a real moment in a Gmail-based workday.
- **Credible:** describe only behavior that is available and verified.

The intended reader may be hearing about Donna for the first time. Copy must make sense without prior knowledge of CRM terminology, the extension architecture, or Google permission flows.

## The core message

Donna helps people manage relationships, deals, and follow-ups without leaving Gmail.

Most pages should reinforce at least one of these ideas:

- Keep relationship context beside the conversation.
- Know what needs to happen next.
- Move work forward without switching between tools.
- Spend less time maintaining a CRM.
- Use AI help while staying in control of what is created or sent.

## How to frame a feature

Explain a feature in this order:

1. **Outcome:** what becomes easier or possible for the reader?
2. **Everyday use:** where does this fit in their Gmail workflow?
3. **Mechanism:** what does Donna do to make it happen?
4. **Control or trust detail:** what should the reader know before trying it?

The mechanism should never lead unless the mechanism itself is the customer benefit.

### Good pattern

> Start using Donna without linking every Google service at once. Calendar, Drive, and Sheets are introduced when you choose a feature that uses them.

This begins with a lighter setup experience and explains the product behavior in ordinary language.

### Avoid

> Calendar, Drive, and Sheets access is requested when you choose a related action instead of being required during the first setup screen.

This is accurate but describes a permission implementation, not the experience or value.

## Language rules

### Prefer

- Actions and outcomes: `stay on top of follow-ups`, `see the full relationship`, `keep work moving`.
- Familiar nouns: `conversation`, `contact`, `deal`, `follow-up`, `meeting`, `file`.
- Reader control: `when you are ready`, `review first`, `choose what to add`.
- Concrete context: `inside Gmail`, `beside the conversation`, `while you keep working`.
- Short, active sentences.

### Avoid

- Repository language: `packaged release`, `source backed`, `extension repository`, `internal work`.
- Engineering language: `server-side path`, `browser-specific routing`, `access tokens`, `capability state`.
- Permission-led headlines: `permission requests`, `grant access`, `required scopes`.
- Abstract CRM language when a concrete phrase is available: `workflows already present` or `relationship management capabilities`.
- Empty promotion: `revolutionary`, `game-changing`, `best-in-class`, or claims that cannot be verified.
- Assuming the reader already understands Donna.

Technical facts may be included when they materially support trust or help someone make a decision. Translate them into their user consequence first. For example, prefer `Keep Google access protected outside browser storage` over a description of the token exchange architecture.

## Approved examples

These examples establish the intended tone. Future copy does not need to repeat them word for word, but it should use the same point of view.

| Internal or feature-led | Donna voice |
|---|---|
| A feature-only history of Donna CRM. | See how each Donna CRM update helps you stay closer to your contacts, keep work moving, and get more done from Gmail. |
| Permission requests at the moment you need them | Connect more when you are ready |
| Start with one recommended action, then work through permissions and capabilities. | Donna walks you through the most useful first steps, helping you get value quickly and add more as your workflow grows. |
| Donna can analyze 50 or more recent Gmail threads to identify relationships and workflows. | Donna looks across recent Gmail conversations to find the people, active work, and next steps worth bringing into your CRM. |
| Resumable onboarding scans | An inbox scan that does not interrupt your day |
| Selective application | Review everything before it is created |
| Localized Donna workspace | Six languages, one familiar Donna |

## Headlines and supporting copy

- Headlines should promise one clear outcome or describe one meaningful change.
- Supporting copy should make the headline tangible in one or two sentences.
- Feature names can appear after the benefit is clear.
- Use sentence case unless the existing component requires a different treatment.
- Eyebrows should categorize the section in two to four words, not summarize the paragraph.
- Calls to action should name the next step: `See what's new`, `Explore all features`, `Add to Gmail - Free Trial`.

## Product update standard

The `/updates` page is detailed product marketing, not a changelog or engineering log. It should help a prospective or current user understand what Donna added and why they might care.

Each published version must include:

- A benefit-led release title.
- A short summary that connects the release to Gmail-based work.
- One or more user-facing feature sections.
- A feature description written from the reader's point of view.
- `How it helps` bullets with concrete outcomes.
- `How to use it` steps when there is a meaningful workflow to explain.

### Release-entry template

Use this structure in `src/content/updates.ts`:

```ts
{
  version: '0.0.0',
  releasedAt: 'YYYY-MM-DD',
  title: 'Benefit-led release headline',
  summary: 'What this update now helps the reader accomplish inside Gmail.',
  features: [
    {
      title: 'Customer-facing feature title',
      description: 'Why this is useful in a familiar work situation.',
      capabilities: [
        'Concrete outcome one',
        'Concrete outcome two',
      ],
      steps: [
        'Start from a place the user can recognize.',
        'Take the primary action.',
        'Describe the useful result.',
      ],
    },
  ],
}
```

### Product update source of truth

Use evidence in this order:

1. Chrome Web Store listing or owner-provided publication evidence for the live version and release date.
2. Shipped Donna extension behavior in the sibling `gmailCRM` repository.
3. Release-specific product copy, feature documentation, and relevant version-control history.
4. Owner clarification when shipped behavior or intended positioning remains ambiguous.

The extension manifest can contain the next development version. Never treat that number alone as proof that a release is live.

### Publication boundary

- Add only versions that are publicly available.
- Leave planned or in-progress versions out of the page until the owner approves their final content.
- Focus on genuinely new user capabilities.
- Omit cosmetic UI refinements, refactors, maintenance, dependency changes, and implementation details.
- Never expand a narrow feature into a broader claim. For example, Google Sheets support currently means contact import unless additional behavior is verified.

## Accuracy and control

Marketing language may simplify an explanation, but it must not change what the product does.

Before publishing a claim, confirm:

- The feature exists in the published version.
- The described action is available to the user.
- The scope is accurate. `View related Drive files` is not the same as broad Drive editing.
- Choices are described correctly. If users can toggle contacts and tasks but cannot select individual pipelines, say exactly that.
- Numbers are correct. Prefer `up to 50` when that is the actual product limit; do not turn it into `50 or more`.
- Trust statements describe a verified behavior or certification.

When evidence is incomplete, use a narrower claim or ask the owner. Do not fill gaps with plausible-sounding copy.

## Formatting and consistency

- Never use an em dash in visible copy. Use a spaced hyphen (` - `).
- Preserve the site's established naming: `Donna`, `Donna CRM`, `Gmail`, `Google Calendar`, `Google Drive`, and `Google Sheets`.
- Use `version 0.3.7` in prose and `Version 0.3.7` when the UI label begins a sentence or line.
- Avoid long parenthetical explanations.
- Keep lists parallel: every bullet should start with the same grammatical form, usually an action verb.
- Metadata should use the same customer outcome as the page, not a generic description of the document.

## Review checklist

Before considering marketing copy complete, check that:

- A first-time visitor can understand it without knowing Donna's architecture.
- The first sentence communicates a user benefit.
- Each feature explains how it helps in a real Gmail workflow.
- Technical and permission language has been translated into customer meaning.
- Every capability is verified and available in the stated version.
- The copy does not mention internal repositories, maintenance, or release process.
- Headlines are specific and do not rely on hype.
- Bullets are concrete, parallel, and easy to scan.
- The page contains no em dashes.
- Metadata reflects the same positioning.
- `npm run qa` passes from the `web/` directory.

For a new product version, owner approval of the release content remains the final publication gate.
