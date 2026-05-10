# Legal, Consent and Cookies

## Purpose

Provide technical legal infrastructure for quiz launches. Final legal validation must be done by a qualified lawyer for each jurisdiction and niche.

## Required legal elements

- Privacy policy link
- Cookie policy link
- Personal data processing consent
- Marketing communication consent when needed
- Consent checkbox before submit
- Cookie banner
- Cookie settings screen
- Consent version storage
- Policy version storage
- Timestamp storage
- Source and session storage

## Cookie categories

- Necessary
- Analytics
- Marketing
- Functional

## Consent storage

Each submission must store:

- consentAccepted
- consentAcceptedAt
- consentVersion
- privacyPolicyVersion
- cookiePolicyVersion
- marketingConsentAccepted
- sourceUrl
- utm data

## Runtime rule

Analytics and marketing scripts must respect selected cookie mode.

Strict mode: non-essential analytics and marketing scripts load only after consent.

## Legal boundary

The product provides infrastructure, templates and logs. It does not replace legal review.

## High-risk niches

Additional review is required for:

- medicine
- finance
- real estate
- education
- children-related services
- international traffic
- sensitive personal data

## QA rule

No quiz submit is allowed without required consent state.
