# 08_TECHNICAL_CONVERSION_LAYER — Website Factory

## Purpose
Turn a premium website into a working ClientFlow system ready for traffic, lead capture, analytics, and follow-up.

## Minimum Conversion Stack

1. Lead form with validation.
2. Consent checkbox.
3. Cookie banner.
4. Privacy policy.
5. UTM capture.
6. Telegram notification.
7. CRM or webhook delivery.
8. Durable lead storage.
9. Analytics goals.
10. Safe logs without PII.
11. Error states.
12. Success states.

## Lead Form Requirements

Fields depend on niche, but baseline:

- name;
- contact;
- project/company;
- selected service or intent;
- message/context;
- consent.

Validation:

- required contact;
- max field lengths;
- honeypot or Turnstile;
- safe error response;
- no raw PII in logs.

## UTM / Attribution

Capture:

- utm_source;
- utm_medium;
- utm_campaign;
- utm_content;
- utm_term;
- referrer;
- landing path;
- selected pricing/CTA intent.

## Notifications

Telegram message should include:

- lead source;
- selected service;
- contact;
- message/context;
- page path;
- UTM summary;
- delivery status.

CRM/webhook delivery is optional per project, but the architecture must allow it.

## Durable Storage

Store every accepted lead when storage env is configured.

Recommended fields:

- id;
- created_at;
- name;
- contact;
- company;
- service;
- message;
- source;
- utm;
- consent;
- notification_status;
- delivery_status;
- metadata.

## Analytics

Minimum events:

- hero_cta_clicked;
- secondary_cta_clicked;
- pricing_cta_clicked;
- form_started;
- form_submitted;
- form_submit_failed;
- lead_accepted.

## Legal

Every traffic-ready website needs:

- privacy policy;
- personal data consent;
- cookie notice;
- consent checkbox near forms;
- industry disclaimers when relevant.

## Failure Rules

- Notification failure must not break lead submission.
- Storage failure must not break lead submission unless the project specifically requires strict storage.
- Never log secrets.
- Never log full raw payload with PII.
- Always return a stable response contract.

## ClientFlow Rule

A beautiful site without capture, routing, analytics, and follow-up is not a complete ClientFlow system.
