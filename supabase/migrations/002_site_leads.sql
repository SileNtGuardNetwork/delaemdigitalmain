-- Main website lead storage foundation.
-- File only: do not apply automatically during D2.4a.

create extension if not exists "pgcrypto";

create table if not exists public.site_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  received_at timestamptz null,
  name text not null,
  contact text not null,
  contact_type text not null,
  company text null,
  service text not null,
  message text null,
  source text not null,
  page text not null,
  consent boolean not null default false,
  has_message boolean not null default false,
  delivery jsonb not null default '{}'::jsonb,
  notification_status text not null default 'pending',
  storage_metadata jsonb not null default '{}'::jsonb,
  constraint site_leads_contact_type_check
    check (contact_type in ('telegram', 'email', 'phone', 'other', 'empty')),
  constraint site_leads_notification_status_check
    check (notification_status in ('pending', 'sent', 'partial', 'failed', 'skipped')),
  constraint site_leads_delivery_object_check
    check (jsonb_typeof(delivery) = 'object'),
  constraint site_leads_storage_metadata_object_check
    check (jsonb_typeof(storage_metadata) = 'object')
);

create index if not exists site_leads_created_at_idx
  on public.site_leads (created_at desc);

create index if not exists site_leads_source_created_at_idx
  on public.site_leads (source, created_at desc);

create index if not exists site_leads_service_created_at_idx
  on public.site_leads (service, created_at desc);

create index if not exists site_leads_contact_type_created_at_idx
  on public.site_leads (contact_type, created_at desc);

create index if not exists site_leads_notification_status_created_at_idx
  on public.site_leads (notification_status, created_at desc);

alter table public.site_leads enable row level security;

comment on table public.site_leads is 'Durable storage for main website lead form submissions.';
