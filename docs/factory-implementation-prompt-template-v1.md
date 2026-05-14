# Factory Implementation Prompt Template v1

## Purpose

Use this template whenever Codex is asked to implement a Delaem Digital site, homepage, hero, section, or corrective patch. It forces the task to include the pattern winner, the allowed files, the locked copy, the rejection rules, and the QA commands.

## Template Fields

```text
Layer:
{layer id and name}

Mode:
{documentation only | controlled implementation | corrective patch}

Goal:
{what should change and what should not change}

Context:
{business context, brand direction, selected references, locked assets, prior issues}

Allowed files:
{exact file list}

Forbidden files/actions:
{explicit list of files and systems not to touch}

Required docs:
{factory docs, design docs, research docs, block specs, gate docs}

Pattern winner:
{exact selected pattern name and source of selection}

Content locks:
{exact copy, CTA labels, hrefs, analytics attributes, prices, section anchors}

Visual target:
{desktop and mobile behavior, composition, typography, surface, motion}

Rejection rules:
{what must not appear}

Checks:
- npm.cmd run build
- npx.cmd tsc --noEmit
- git diff --check

Report format:
{files changed, what changed, checks result, risks, git status}
```

## Homepage Rebuild Prompt Skeleton

```text
Layer:
D3X-FX — Homepage Rebuild

Mode:
Controlled pattern-based implementation.

Goal:
Rebuild the homepage as a cohesive premium Next.js ClientFlow site using the selected pattern winner.

Context:
- factory docs are locked;
- references are selected;
- current brand direction is premium dark founder-led ClientFlow;
- use existing content and lead flow;
- do not invent a new visual language.

Allowed files:
- {exact files}

Forbidden:
- backend/API/env/package/deploy
- lead flow changes
- analytics attribute changes
- new dependencies
- commit/push/deploy

Required docs:
- docs/factory-stack-v1.md
- docs/factory-workflow-v1.md
- docs/factory-pattern-selection-protocol-v1.md
- docs/factory-visual-gate-v1.md
- docs/factory-homepage-blueprint-v1.md
- docs/factory-section-pattern-library-v1.md
- relevant design and research docs

Pattern winner:
- {pattern name}

Content locks:
- {locked hero copy, CTA labels, nav order, anchor names, prices, section labels}

Visual target:
- {desktop and mobile requirements}

Rejection rules:
- generic SaaS
- fake dashboard
- prompt bar
- chip cloud
- purple/cyber
- photo-card portrait
- huge CSS scene

Checks:
- npm.cmd run build
- npx.cmd tsc --noEmit
- git diff --check

Report:
- files changed
- section-level changes
- hero changes
- navigation changes
- checks result
- git status
```

## Hero-Only Prompt Skeleton

```text
Layer:
D3X-FX — Hero Rebuild

Mode:
Controlled hero implementation only.

Goal:
Implement the selected founder-led hero pattern and preserve all locked copy, CTA behavior, analytics, and assets.

Allowed files:
- {hero file}
- app/globals.css

Do not touch:
- backend/API
- lead flow
- env/package/deploy
- unrelated sections

Pattern winner:
- Founder-Led Editorial Control Room

Content locks:
- H1 exact text
- subtitle exact text
- CTA labels
- CTA hrefs and analytics
- portrait asset

Visual target:
- premium dark
- integrated portrait
- thin route cue
- copper primary action
- steel-blue secondary system cues

Checks:
- npm.cmd run build
- npx.cmd tsc --noEmit
- git diff --check

Report:
- exact changes
- visual result
- risks
- git status
```

## Section-Only Prompt Skeleton

```text
Layer:
D3X-FX — Section Implementation

Mode:
Controlled section implementation only.

Goal:
Implement one approved section pattern from the factory library without changing page behavior outside the section.

Allowed files:
- {section file}
- app/globals.css

Forbidden:
- homepage redesign outside the section
- backend/API changes
- new dependencies
- lead flow changes

Pattern winner:
- {section pattern}

Content locks:
- {section copy and CTA locks}

Visual target:
- {visual and mobile behavior}

Checks:
- npm.cmd run build
- npx.cmd tsc --noEmit
- git diff --check

Report:
- files changed
- what changed visually
- what remained stable
- checks result
- git status
```

## Corrective Patch Skeleton

```text
Layer:
D3X-FX — Corrective Visual Patch

Mode:
CSS-only / minimal corrective patch.

Goal:
Fix the specific visual defect without rebuilding the section from scratch.

Allowed files:
- {exact CSS file}

Forbidden:
- component structure changes
- text changes
- CTA changes
- asset changes
- backend/API/env/package/deploy

Problem:
- {specific defect}

Patch intent:
- {what to soften, tighten, or remove}

Checks:
- git diff --check

Report:
- exact CSS changes
- visual effect
- remaining risk
- git status
```

## Rollback Protocol

Use rollback when the implementation drifts from the selected pattern or the visual gate fails.

1. Stop adding more fixes.
2. Identify the smallest visual layer that caused the drift.
3. Remove or simplify that layer before adding new styling.
4. Re-run the required checks.
5. If the base composition is still wrong, revert the visual pass and restart from a better pattern or reference set.

Rollback is preferred over endless patching when the page still feels like the wrong pattern.

