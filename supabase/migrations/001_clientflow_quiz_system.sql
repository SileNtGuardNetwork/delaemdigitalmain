-- ClientFlow AI Quiz System v1 foundation migration.
-- File only: do not apply automatically during Phase 1.

create extension if not exists "pgcrypto";

create table if not exists public.clientflow_quizzes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  status text not null check (status in ('draft', 'preview', 'active', 'archived')),
  version text not null,
  config jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.clientflow_quiz_submissions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid references public.clientflow_quizzes(id) on delete set null,
  quiz_slug text not null,
  submission_code text not null unique,
  contact jsonb not null,
  answers jsonb not null,
  scores jsonb not null,
  segment text not null,
  offer_route jsonb not null,
  ai_result jsonb,
  sales_brief jsonb,
  reward jsonb,
  source jsonb,
  consent jsonb not null,
  device jsonb,
  status text not null default 'accepted',
  notification_status text not null default 'pending',
  crm_sync_status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.clientflow_quiz_events (
  id uuid primary key default gen_random_uuid(),
  quiz_slug text not null,
  submission_id uuid references public.clientflow_quiz_submissions(id) on delete set null,
  session_id text,
  event_name text not null,
  event_payload jsonb,
  source jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.clientflow_quiz_delivery_logs (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid references public.clientflow_quiz_submissions(id) on delete cascade,
  channel text not null,
  provider text not null,
  status text not null,
  error text,
  attempts integer not null default 1,
  last_attempt_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists clientflow_quizzes_slug_idx
  on public.clientflow_quizzes (slug);

create index if not exists clientflow_quiz_submissions_slug_created_idx
  on public.clientflow_quiz_submissions (quiz_slug, created_at desc);

create index if not exists clientflow_quiz_submissions_segment_idx
  on public.clientflow_quiz_submissions (segment);

create index if not exists clientflow_quiz_events_slug_event_created_idx
  on public.clientflow_quiz_events (quiz_slug, event_name, created_at desc);

create index if not exists clientflow_quiz_delivery_logs_submission_idx
  on public.clientflow_quiz_delivery_logs (submission_id);
