# 09_QA_GATE — Website Factory

## Purpose
Prevent unfinished work from reaching the client or production.

A website is not done when it looks good. It is done when it passes visual, responsive, technical, conversion, and legal checks.

## Visual QA

### Desktop
Check:

- 1440×900;
- 1920×1080;
- section rhythm;
- headline hierarchy;
- CTA visibility;
- no visual clutter;
- no repetitive card grids;
- no broken alignment.

### Mobile
Check:

- 390px;
- 430px;
- iPhone SE width risk if required;
- no horizontal overflow;
- readable H1/H2;
- CTA not hidden by cookie banner;
- cards stack cleanly;
- forms are usable.

## Technical QA

Required:

- build passes;
- typecheck passes;
- no console-breaking errors;
- no missing assets;
- no broken links;
- no uncontrolled layout shift;
- no secrets in code;
- no destructive migrations.

## Conversion QA

Check:

- primary CTA scrolls or routes correctly;
- pricing CTA preserves service intent;
- form accepts valid submission;
- form rejects invalid submission;
- success state appears;
- error state is understandable;
- Telegram/CRM delivery works when env is configured;
- missing env does not break public submit if graceful mode is expected.

## Analytics QA

Check:

- analytics script loads;
- goals/events fire;
- UTM captured;
- CTA clicks are trackable;
- lead submit is trackable;
- no raw PII in analytics event names or logs.

## Legal QA

Check:

- privacy page exists;
- consent checkbox exists;
- cookie banner appears;
- cookie banner can be closed;
- footer legal links work;
- industry disclaimers included if required.

## Performance Gate

Targets:

- Lighthouse mobile: 85+;
- Lighthouse desktop: 90+;
- no huge unoptimized images;
- no heavy animation blocking mobile;
- no unnecessary client-side JS.

## Final Gate Rule

If any critical item fails, the site does not go to client or production.

Critical failures:

- form broken;
- mobile overflow;
- CTA hidden;
- privacy/consent missing;
- build/typecheck failing;
- production secrets exposed;
- analytics impossible to verify.
