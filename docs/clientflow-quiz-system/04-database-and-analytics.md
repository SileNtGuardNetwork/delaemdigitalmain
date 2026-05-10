# Database and Analytics

## Supabase project

Primary project: Delaem Digital
Project ref: kvfzybzvhorroewpwbrv
Region: eu-west-1
Status: active healthy

## Main tables

### clientflow_quizzes

Stores quiz metadata and config versions.

Fields:

- id
- slug
- title
- status
- version
- config jsonb
- created_at
- updated_at

### clientflow_quiz_submissions

Stores submitted leads and computed intelligence.

Fields:

- id
- quiz_id
- quiz_slug
- submission_code
- contact jsonb
- answers jsonb
- scores jsonb
- segment
- offer_route
- ai_result jsonb
- sales_brief jsonb
- reward jsonb
- source jsonb
- consent jsonb
- device jsonb
- status
- notification_status
- crm_sync_status
- created_at
- updated_at

### clientflow_quiz_events

Stores product analytics events when PostHog is not enough or server-side audit is needed.

Fields:

- id
- quiz_slug
- submission_id
- session_id
- event_name
- event_payload jsonb
- source jsonb
- created_at

### clientflow_quiz_delivery_logs

Stores Telegram, email and webhook delivery attempts.

Fields:

- id
- submission_id
- channel
- provider
- status
- error
- attempts
- last_attempt_at
- created_at

## Event taxonomy

- quiz_viewed
- quiz_started
- question_answered
- question_back_clicked
- quiz_abandoned
- contact_gate_shown
- contact_submitted
- consent_accepted
- quiz_completed
- lead_scored
- segment_assigned
- offer_routed
- ai_result_generated
- ai_result_failed
- reward_delivered
- telegram_notification_sent
- telegram_notification_failed
- crm_webhook_sent
- crm_webhook_failed
- result_viewed
- cta_clicked

## Analytics dimensions

- quiz_slug
- quiz_version
- traffic_source
- utm_source
- utm_medium
- utm_campaign
- utm_content
- utm_term
- device_type
- segment
- lead_temperature
- offer_route
- result_type

## Reporting metrics

- views
- starts
- completions
- contact conversion
- completion rate
- drop-off by question
- HOT/WARM/COLD leads
- average score
- offer route distribution
- CTA click rate
- lead magnet delivery rate
- source quality
- CRM delivery success
- Telegram delivery success

## Data rules

Public analytics must not contain raw personal data.
Server logs must not leak secrets.
Submission storage must capture consent version and policy versions.
