# LazyWeb Capture Protocol v1

## Purpose

This protocol defines how to use LazyWeb references for Delaem Digital visual work. Do not claim LazyWeb was used unless actual LazyWeb tools or manually captured LazyWeb references were available.

LazyWeb is for UX structure and pattern research. Refero is for style, art direction, and token behavior.

## When LazyWeb Tools Are Available

Capture 5-8 strong references per block maximum. More references are not better if they are weak or repetitive.

For each reference, extract:

- layout pattern;
- hierarchy;
- mobile compression;
- cards vs rows vs route lines;
- interaction or state model if visible;
- anti-patterns to avoid;
- what should not be copied.

## Manual Capture Protocol

If LazyWeb MCP tools are not exposed:

1. State clearly that LazyWeb findings are pending.
2. Create a structured research brief with exact search targets.
3. Do not invent screenshots, app findings, or visual references.
4. If the user provides screenshots later, store notes under `docs/lazyweb-research/`.
5. Convert strong findings into `docs/block-specs/*` before implementation.

## Storage

Research notes:

- `docs/lazyweb-research/[topic]-vN.md`

Visual QA:

- `docs/visual-qa/[layer]/review.md`

Block specs:

- `docs/block-specs/[block]-spec-vN.md`

## Required Output Format

Each research note should include:

- research status: actual / pending;
- source method: LazyWeb MCP / manual screenshots / placeholder brief;
- search targets;
- strongest patterns;
- anti-patterns;
- mobile findings;
- implementation implications;
- related block spec.

## How Findings Become Block Specs

1. Extract common patterns from references.
2. Filter through Delaem Digital design bible and rejected-pattern memory.
3. Translate into allowed/forbidden visual elements.
4. Add token usage from `docs/delaem-digital-design-tokens-v1.md`.
5. Define likely files and acceptance criteria.
6. Only then create an implementation prompt.

## Quality Rules

- Use 5-8 references per block maximum.
- A strong reference must directly illustrate the pattern.
- Do not use mismatched screenshots just to fill the report.
- Do not copy a reference brand.
- Do not use LazyWeb style as the final identity.
- Do not skip local `review.md`; implementation must start from local QA.
