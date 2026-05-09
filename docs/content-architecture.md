# Content Architecture

This project is set up for future multipage growth without a CMS yet.

## Where content lives

- `lib/content/types.ts` defines the shared content model.
- `lib/content/cases.ts` stores case content entries.
- `lib/content/articles.ts` stores article content entries.
- `lib/content/index.ts` re-exports content helpers for routes and sitemap generation.

## Content model

Each content item supports:

- `slug`
- `title`
- `excerpt`
- `description`
- `publishedAt`
- `updatedAt`
- `status` (`draft` or `published`)
- `tags`
- `locale` (`ru` or `en`)
- SEO metadata
- optional cover metadata
- optional service/category
- structured body blocks for future rendering

## Route behavior

- `/cases` renders the cases index.
- `/cases/[slug]` renders only published cases.
- `/articles` renders the articles index.
- `/articles/[slug]` renders only published articles.
- Draft or missing items return `notFound()`.

## English readiness

- Locale is already part of the content model.
- Future English content should be added as separate `locale: "en"` entries rather than mixed into Russian content.
- A full `/en` homepage can be added later once the content layer and routing strategy are agreed.

## Editable content later

When the site needs an editable layer, the content files can be moved to:

- local JSON/TS config files
- file-based content collections
- a CMS
- or an internal admin layer

The current shape is intentionally simple so the presentation layer can keep working while the source of content changes later.

## Notes

- No CMS, database, or external content service is connected in this pass.
- No fake portfolio or inflated case studies are introduced.
