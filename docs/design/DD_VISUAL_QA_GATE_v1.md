# DD Visual QA Gate v1

**When to run:** After each scoped visual pass (section or shell).  
**Step 1:** Header-only changes — partial gate (nav + docs).

## Blockers (must pass)

- [ ] No change to locked hero copy without owner approval
- [ ] No neon / cyberpunk / violet-primary / rainbow gradients
- [ ] No fake dashboards or random floating metric cards
- [ ] Primary buttons not pill-shaped
- [ ] Copper used for primary CTA and kicker only (not decorative fill everywhere)
- [ ] `npm run build` passes
- [ ] `npm run typecheck` passes
- [ ] No `.env` / secrets touched
- [ ] No unauthorized pricing / positioning changes

## Header shell (Step 1)

- [ ] Nav labels: Подход / Услуги / Кейсы / Обо мне / Контакты
- [ ] Header CTA: Обсудить проект → `#contacts`
- [ ] No Web3 item in main header
- [ ] Sticky bar, restrained dark surface, `backdrop-blur`
- [ ] Nav CTA border-radius 10px (not pill)
- [ ] Documented anchor mismatches (`#founder`)

## Section rebuild (Step 2+)

- [ ] Matches `DD_VISUAL_SYSTEM_v1.md` tokens (`--dd-*`)
- [ ] Rebuilt sections use `FlagshipContainer` / `--dd-container-flagship` (not global `--container`)
- [ ] Mobile checked at 390px and 430px width
- [ ] Text readable over imagery (gradient overlays if needed)
- [ ] Motion respects `prefers-reduced-motion`
- [ ] PostHog `data-analytics-*` preserved on CTAs
- [ ] Section `id` matches `lib/navigation.ts` / footer anchors

## Hero (frozen until explicit pass)

- [ ] Do not edit `hero-section.tsx` / `hero-section.module.css` without dedicated hero task

## Sign-off template

```
Pass: DD-STEP-___
Scope: ___
Reviewer: ___
Build: OK / FAIL
Typecheck: OK / FAIL
Notes: ___
```
