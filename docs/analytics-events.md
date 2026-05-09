# Analytics Events

This project keeps analytics optional and env-driven.

Analytics is inactive unless `NEXT_PUBLIC_YANDEX_METRICA_ID` is present.
If `NEXT_PUBLIC_ANALYTICS_ENABLED` is set to `0` or `false`, the client analytics layer stays disabled even when the ID exists.

No personal data is sent to analytics.
Only intent-level events and safe metadata are tracked.

## Event map

| Event name | Where it fires | Safe params | Future Yandex goal |
| --- | --- | --- | --- |
| `lead_form_submit_attempt` | Contact form submit after client validation passes | `service`, `source`, `page` | `lead_form_submit_attempt` |
| `lead_form_submit_success` | Contact form after successful `/api/leads` response | `service`, `source`, `page` | `lead_form_submit_success` |
| `lead_form_submit_error` | Contact form after validation/API/network failure | `service`, `source`, `page` | `lead_form_submit_error` |
| `cta_primary_click` | Primary CTA links/buttons in hero and system/audit sections | `label`, `value`, `path` | `cta_primary_click` |
| `cta_secondary_click` | Secondary CTA links/buttons such as header contact and hero secondary CTA | `label`, `value`, `path` | `cta_secondary_click` |
| `pricing_cta_click` | Pricing card CTA buttons | `label`, `value`, `path` | `pricing_cta_click` |
| `telegram_contact_click` | Telegram contact links | `label`, `value`, `path` | `telegram_contact_click` |
| `telegram_channel_click` | Telegram channel links | `label`, `value`, `path` | `telegram_channel_click` |
| `legal_link_click` | Privacy, consent, and cookie links in form/footer/cookie notice | `label`, `value`, `path` | `legal_link_click` |
| `cookie_accept` | Cookie accept button | `label`, `value`, `path` | `cookie_accept` |

## Notes

- Event names are kept stable so Yandex goals can be mapped directly later.
- The click bridge only reacts to elements with `data-analytics-event`.
- The current implementation never sends names, contact details, company names, or message text to analytics.
