# Codex Visual Implementation Template v1

Use this template for future Delaem Digital visual implementation tasks.

```markdown
Task:
[Layer name, for example D3.3 ClientFlow/Audit Visual Upgrade]

Mode:
Controlled visual implementation only.
Do not commit.
Do not push.
Do not deploy.

Current HEAD:
[Commit hash and message]

Source docs to read:
- docs/delaem-digital-design-bible-v1.md
- docs/delaem-digital-visual-qa-rubric-v1.md
- docs/delaem-digital-design-tokens-v1.md
- docs/rejected-visual-patterns-v1.md
- [Any layer-specific lock doc]

Required local artifacts:
- docs/delaem-digital-design-bible-v1.md
- docs/delaem-digital-visual-qa-rubric-v1.md
- docs/delaem-digital-design-tokens-v1.md
- docs/rejected-visual-patterns-v1.md
- [Layer-specific art-direction/spec doc]
- docs/visual-qa/[layer]/review.md

Visual QA pack to read:
- docs/visual-qa/[layer]/review.md
- [Screenshot path or preview URL]
- [Mobile screenshot path or preview URL]
- [Scroll video path if available]
- [Specific QA notes]

Visual QA rule:
Preview URLs and screenshots are helpful, but Codex must treat `docs/visual-qa/[layer]/review.md` as the primary visual QA source. If `review.md` is missing, the task should be audit-only or ask for `review.md` to be created before implementation.

Allowed files:
- [Exact files]

Forbidden files/areas:
- app/api/*
- lib/leads/*
- components/ui-custom/contact-form.tsx
- Supabase/storage
- Telegram/email notifications
- analytics behavior
- legal pages
- quiz runtime
- package files
- env files
- deploy config
- [Any other no-touch area]

Must preserve:
- Lead flow
- Form behavior
- Analytics attributes
- CTA hrefs
- Existing runtime behavior
- Existing copy that is explicitly locked
- Existing assets unless replacement is approved

Current visual problem:
[Specific screenshot/video diagnosis. Avoid vague taste words.]

Visual target:
[Target from the design bible or layer lock.]

Exact changes:
- [Concrete change 1]
- [Concrete change 2]
- [Concrete change 3]

What to remove:
- [Visual object/pattern to simplify or remove]
- [Overweight spacing/surface/label behavior]

What not to add:
- Dashboard widgets
- Fake metrics
- Card/chip spam
- Excessive glassmorphism
- Neon lime
- Violet primary
- Random SaaS blue
- Crypto/cyber cliches
- Broad global CSS
- New dependencies

Mobile requirements:
- [Mobile hierarchy requirement]
- [Overflow/text fit requirement]
- [Compression requirement]
- [CTA visibility requirement]

Acceptance criteria:
- [Visual score target]
- [Desktop criterion]
- [Mobile criterion]
- [No regression criterion]
- [Runtime preservation criterion]

Validation commands:
npm.cmd run build
npx.cmd tsc --noEmit
git diff --check

Output required:
- Files changed
- What changed
- What was removed/simplified
- Validation results
- Known risks
```

## Rules For Codex Visual Tasks

- No backend edits during visual tasks.
- No env edits.
- No package edits unless separately approved.
- No broad global CSS.
- Prefer fewer stronger elements.
- Preserve lead flow.
- Preserve analytics attributes.
- Preserve form behavior.
- Preserve locked copy.
- Check rejected visual patterns before implementing.
- Use design tokens as direction; do not invent a new palette.
- Do not rely only on chat description. Use project docs as source of truth.
- Treat local `docs/visual-qa/[layer]/review.md` as the primary visual QA source.
- Preview QA should happen before commit.
- Do not commit, push, or deploy unless explicitly requested.

## Prompt Quality Checklist

Before implementation, the prompt should clearly answer:

- What is the current visual problem?
- What does success look like?
- Which files may be touched?
- Which files are forbidden?
- Which behaviors must be preserved?
- What should be removed?
- What must not be added?
- How will mobile be judged?
- Which validation commands must pass?
