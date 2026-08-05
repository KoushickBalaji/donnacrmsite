# Donna CRM website agent guidance

These instructions apply to the entire repository.

## Required reading

Before writing or revising any visitor-facing copy, read:

- `web/docs/content-and-voice.md` for the canonical Donna CRM voice.
- `web/docs/design-guidelines.md` for layout, copy hierarchy, and visual standards.

Before changing the product updates page, also read:

- `web/docs/routing-and-pages.md`, especially the product updates workflow.
- `web/src/content/updates.ts` for the current published release history.

## Marketing copy standard

- Write for someone discovering or using Donna for the first time.
- Lead with what the visitor can accomplish, then explain how Donna helps.
- Use direct, warm, confident language grounded in everyday Gmail work.
- Translate product implementation into familiar benefits. Do not expose repository, architecture, permission-state, or internal release language unless it is essential to a user decision.
- Keep every claim factual and supported by shipped product behavior.
- Never invent release details, metrics, integrations, dates, screenshots, or product capabilities.
- Use a spaced hyphen (` - `), never an em dash, in visible copy.

The examples, vocabulary, and review checklist in `web/docs/content-and-voice.md` are authoritative when copy choices are unclear.

## Product updates

- Document meaningful user-facing features, not cosmetic refinements or internal maintenance.
- Do not add an unreleased version to `/updates`. A development manifest version is not proof of publication.
- Confirm the live version and publication date from the Chrome Web Store or owner-provided evidence.
- Verify behavior against the Donna extension source in the sibling `gmailCRM` repository before describing it.
- Explain each release in this order: what changed, how it helps, and how to use it.
- Preserve the difference between a planned feature, a shipped feature, and a marketing interpretation. If evidence is ambiguous, narrow the claim or ask the owner.

## Validation

Run `npm run qa` from `web/` after visitor-facing content changes. Keep the updates page unpublished until the owner approves the content for that version.
