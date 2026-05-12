alter table public.site_leads
  add column if not exists utm_source text null,
  add column if not exists utm_medium text null,
  add column if not exists utm_campaign text null,
  add column if not exists utm_content text null,
  add column if not exists utm_term text null,
  add column if not exists referrer text null,
  add column if not exists landing_path text null;

create index if not exists site_leads_utm_source_created_at_idx
  on public.site_leads (utm_source, created_at desc);

create index if not exists site_leads_utm_campaign_created_at_idx
  on public.site_leads (utm_campaign, created_at desc);

create index if not exists site_leads_landing_path_created_at_idx
  on public.site_leads (landing_path, created_at desc);
