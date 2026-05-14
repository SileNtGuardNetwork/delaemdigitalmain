# 05_HERO_FACTORY — Website Factory

## Purpose
Create a production-grade first screen without falling into endless AI image regeneration.

## Core Rule
Hero is built through a process, not a vague prompt.

## Pipeline

1. Hero Brief
2. Reference Pack
3. Three Layout Concepts
4. Winner Selection
5. Production Implementation in Next.js
6. Desktop QA
7. Mobile QA
8. One Corrective Pass
9. Lock

## Hero Brief

Must define:
- business context;
- target audience;
- main promise;
- primary CTA;
- secondary CTA;
- visual anchor;
- proof markers;
- mobile constraints;
- reject criteria.

## Three Concepts

### A. Founder-Led Editorial
Human trust and founder authority. Best when personal brand drives conversion.

### B. System Architecture
Route map, process nodes, operational clarity. Best when methodology is the main differentiator.

### C. Premium Command Interface
A controlled operating surface. Best when AI, automation, and integrations are central.

## Winner Criteria

A hero wins only if:

- the offer is clear in 3 seconds;
- CTA is visible above the fold;
- text can be rendered as real HTML;
- visual layer does not fight the headline;
- mobile adaptation is obvious;
- it feels premium and commercial;
- it avoids fake dashboards and random cards.

## Reject Criteria

Reject immediately if:

- text is baked into an image;
- portrait is blurry or over-darkened;
- headline overlaps a face;
- layout is generic SaaS;
- buttons look default;
- proof row is unreadable;
- design needs more than two AI polish passes.

## Production Layering

Final hero must be layered:

1. Background / visual asset
2. CSS readability gradients
3. Real HTML header
4. Real HTML headline and body
5. Real buttons
6. Proof row
7. Motion and hover states

## QA

Desktop: 1440×900 and 1920×1080.
Mobile: 390px and 430px.

Check:
- no horizontal overflow;
- H1 readable;
- CTA visible early;
- visual anchor not fighting text;
- cookie banner not hiding CTA;
- no heavy filters destroying image quality.

## Lock Rule
After one corrective pass, either lock the hero or return to the brief. No infinite polishing.
