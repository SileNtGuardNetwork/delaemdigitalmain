# Delaem Digital Design Tokens v1

## Purpose

This document defines concrete visual token recommendations for Delaem Digital. It is a specification only: do not copy these into CSS until a separate implementation task approves CSS edits.

The design system should feel dark, cinematic, founder-led, architectural, controlled, and high-ticket B2B. Codex should use these values before inventing new colors, radii, shadows, or spacing.

## Color Tokens

| Token | Value | Role | Allowed Usage |
| --- | --- | --- | --- |
| `dd-canvas-graphite` | `#05070A` | Base background | Main page canvas, hero base, deepest section backgrounds. |
| `dd-canvas-obsidian` | `#080C12` | Obsidian background | Secondary dark depth, section bands, footer/legal canvas. |
| `dd-surface-obsidian` | `rgba(12, 17, 25, 0.82)` | Elevated surface | Pricing cards, final CTA panels, premium contained surfaces. |
| `dd-surface-control` | `rgba(14, 22, 34, 0.72)` | Deep slate/control surface | Diagnostic blocks, audit surfaces, ClientFlow system panels. |
| `dd-border-steel` | `rgba(148, 163, 184, 0.16)` | Default border | Dark cards, forms, subtle panel edges. |
| `dd-border-cool` | `rgba(113, 151, 198, 0.18)` | Cool system border | Hero linework, system signals, blue atmospheric edges. |
| `dd-text-primary` | `#F5F7FB` | Primary text | H1, H2, important labels, CTA text on dark surfaces. |
| `dd-text-secondary` | `#B8C1CE` | Secondary text | Paragraphs, subtitles, explanatory copy. |
| `dd-text-muted` | `#7F8B9C` | Muted text | Metadata, small labels, secondary captions. |
| `dd-action-copper` | `#B8794B` | Primary action | Primary CTA, selected path, decisive conversion accents. |
| `dd-action-copper-hover` | `#D09A6E` | Primary hover | Primary CTA hover/focus emphasis. |
| `dd-action-steel-blue` | `#7FA6D6` | Secondary/system action | Secondary CTA accents, quiet links, route markers. |
| `dd-atmosphere-blue` | `rgba(92, 132, 180, 0.18)` | Cool ambient | Hero atmosphere, founder rim light, background depth. |
| `dd-diagnostic-blue` | `#5F8ED8` | Diagnostic signal | Audit states, readiness signals, system diagnostics only. |
| `dd-success` | `#6FBF91` | Success | Sent, connected, ready, passed. |
| `dd-danger` | `#D66A6A` | Danger | Validation and failure states only. |

## Color Discipline

- Use dark graphite / obsidian as the base.
- Use cool blue for atmosphere and system intelligence.
- Use copper for primary CTA/action only.
- Use steel-blue for secondary/system cues.
- Do not use violet as primary.
- Do not use neon lime.
- Do not use generic SaaS blue as the main identity.
- Do not create a new one-off color for every section.
- New colors require an explicit reason and should be documented before broader use.

## Radius Scale

| Token | Value | Usage |
| --- | ---: | --- |
| `dd-radius-xs` | `8px` | Small labels, tiny controls, technical markers. |
| `dd-radius-sm` | `12px` | Inputs, compact controls, diagnostic rows. |
| `dd-radius-md` | `16px` | Standard cards, form surfaces, compact panels. |
| `dd-radius-lg` | `20px` | Premium panels, pricing cards, final CTA surfaces. |
| `dd-radius-xl` | `28px` | Large hero/final CTA surfaces used sparingly. |
| `dd-radius-scene` | `32px-40px` | Cinematic founder/hero scene framing only. |

Radius discipline:

- Smaller radii feel more technical and controlled.
- Larger radii are reserved for major premium scene objects.
- Do not use oversized rounded cards for every section.

## Shadow Scale

| Token | Recommended Value | Usage |
| --- | --- | --- |
| `dd-shadow-subtle` | `0 10px 28px rgba(0, 0, 0, 0.24)` | Small dark cards, compact elevated controls. |
| `dd-shadow-panel` | `0 22px 58px rgba(0, 0, 0, 0.32)` | Pricing/form panels, important surfaces. |
| `dd-shadow-scene` | `0 42px 110px rgba(0, 0, 0, 0.42)` | Hero/founder cinematic scene depth. |
| `dd-shadow-copper-action` | `0 16px 42px rgba(184, 121, 75, 0.24)` | Primary CTA hover/action emphasis. |
| `dd-shadow-blue-ambient` | `0 0 88px rgba(92, 132, 180, 0.16)` | Blue rim light, atmospheric depth, hero scene only. |

Shadow discipline:

- Shadows should create hierarchy and depth, not decoration.
- Copper shadow belongs near primary action.
- Blue ambient shadow belongs to atmosphere/system scene, not every card.
- Do not stack multiple dramatic shadows on repeated items.

## Spacing Scale

Use this spacing scale before inventing new values:

| Token | Value | Usage |
| --- | ---: | --- |
| `dd-space-3xs` | `4px` | Micro gaps, icon/text spacing. |
| `dd-space-2xs` | `8px` | Tiny labels, compact route gaps. |
| `dd-space-xs` | `12px` | Tight control gaps, small card internals. |
| `dd-space-sm` | `16px` | Form/control spacing, compact panels. |
| `dd-space-md` | `24px` | Card internals, CTA groups, local layout gaps. |
| `dd-space-lg` | `32px` | Section sub-layout gaps, mobile hero rhythm. |
| `dd-space-xl` | `48px` | Major layout gaps, desktop hero spacing. |
| `dd-space-2xl` | `64px` | Large section rhythm. |
| `dd-space-3xl` | `96px` | Desktop section breathing room. |

Spacing discipline:

- Hero must keep H1 and CTA early.
- Mobile should compress without becoming cramped.
- Repeated cards need tighter spacing than cinematic hero scenes.
- Use fewer elements before reducing spacing too aggressively.

## Typography Rules

Fonts:

- Preserve current Manrope / Onest direction.
- Do not introduce paid or unavailable fonts without approval.

Hero:

- Recommended line-height: `1.02-1.08`.
- Recommended letter-spacing: `-0.02em` to `-0.04em`.
- Avoid tighter than `-0.045em` on Russian hero text unless screenshot QA proves it remains readable.
- Line breaks should feel intentional and not split important phrases awkwardly.

Body:

- Recommended line-height: `1.45-1.65`.
- Keep paragraph width controlled for scanning.

Labels:

- Uppercase labels may use `0.08em-0.16em` letter-spacing.
- Avoid tiny uppercase labels as the main visual device.
- Technical labels must stay subordinate to the offer, CTA, and main section headings.

Russian readability:

- Do not over-compress Cyrillic text.
- Avoid clipped descenders/ascenders through tight line-height.
- Avoid button labels that wrap awkwardly on mobile.
- Use `overflow-wrap` only as a safety net, not as a design strategy.

## Surface Principles

- Canvas: `dd-canvas-graphite` and `dd-canvas-obsidian`.
- Elevated panels: `dd-surface-obsidian` with `dd-border-steel`.
- Control surfaces: `dd-surface-control` with `dd-border-cool` where the signal is system-related.
- Hero atmosphere: scene-level blue depth, not large route-card surfaces.
- Glass is allowed only when selective and meaningful.
- Avoid excessive glassmorphism.

## Token Discipline

- Codex must prefer these tokens/values before inventing new ones.
- New colors require explicit reason.
- Any new reusable visual token must be documented before broader use.
- Do not create one-off random colors for each section.
- If a section needs a unique mood, derive it from these tokens through opacity, layering, or hierarchy.
- If implementation introduces values outside this document, the final answer must call them out as intentional.
