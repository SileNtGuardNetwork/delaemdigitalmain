# 10_CODEX_PROMPT_LIBRARY — Website Factory

## Purpose
Reusable prompts for Codex/Cursor implementation passes.

All prompts must preserve safety, avoid uncontrolled redesign, and produce verifiable output.

## Global Codex Rules

Use these in every implementation prompt:

```text
Do not run production deploy.
Do not touch env/secrets.
Do not change copy unless explicitly requested.
Do not add fake dashboards or random cards.
Do not use Framer as the core implementation path.
Keep changes scoped.
Run npm run build.
Run npx tsc --noEmit.
Create Vercel preview only if requested.
Report changed files, checks, and preview URL.
```

## 1. Save Factory Docs Prompt

```text
Create /docs/website-factory if it does not exist.
Add or update the Website Factory documentation files.
Keep docs markdown-only.
Do not touch app code.
Run formatting checks if available.
Do not deploy.
```

## 2. Build Hero Prompt

```text
Rebuild only the homepage hero section using the approved Hero Factory Brief.
Use real HTML text, Tailwind, responsive layout, and existing project font system.
Do not touch lower sections unless imports require it.
Do not change copy.
Do not generate images.
No fake dashboards.
Run build and typecheck.
Create preview only.
```

## 3. Build Sections 2–13 Prompt

```text
Implement sections 2–13 from the approved Site Blueprint.
Preserve hero unless explicitly instructed.
Use shared design tokens/components where possible.
Avoid repeated generic card grids.
Each section must have a clear commercial job and mobile behavior.
Run build and typecheck.
Create preview only.
```

## 4. Motion Pass Prompt

```text
Add restrained motion to the homepage.
Allowed: fade, translateY, stagger reveal, route-line draw, hover lift, button arrow movement, FAQ accordion.
Avoid heavy parallax, neon pulse, spinning 3D, scroll hijack.
Respect prefers-reduced-motion.
Run build and typecheck.
```

## 5. Mobile QA Prompt

```text
Perform a mobile QA bugfix pass.
Focus on 390px and 430px widths.
Fix horizontal overflow, CTA visibility, cookie overlap, card spacing, form usability, section rhythm.
Do not redesign desktop.
Do not change copy.
Run build and typecheck.
Create preview only.
```

## 6. Conversion Layer Prompt

```text
Implement or harden the technical conversion layer.
Include form validation, consent, UTM capture, Telegram notification, safe logging, graceful missing-env behavior, and stable API response contracts.
Do not expose secrets.
Do not break valid lead submission if optional notifications fail.
Run build and typecheck.
```

## 7. Analytics Layer Prompt

```text
Add analytics events for CTA clicks, pricing intent, form started, form submitted, form failed, lead accepted.
Do not send raw PII to analytics.
Keep event names stable.
Run build and typecheck.
```

## 8. Final QA Gate Prompt

```text
Run final QA before client/production.
Check desktop, mobile, build, typecheck, forms, analytics, legal links, cookie banner, privacy, consent, and performance risks.
Do not change code unless explicitly instructed.
Return a PASS/FAIL report with blockers and recommended next pass.
```

## First Showcase Rule

The first full run of this library is the personal website of Vitaly / Delaem Digital.
That site must become the proof case for the factory itself.
