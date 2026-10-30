-- Idempotency only: never store access tokens, media, post text or profile data.
create table if not exists public.figsaw_linkedin_posts (
 user_id uuid not null references auth.users(id) on delete cascade,
 request_id uuid not null,
 kind text not null check (kind in ('video','graphic')),
 created_at timestamptz not null default now(),
 post_url text,
 primary key (user_id,request_id)
);
alter table public.figsaw_linkedin_posts enable row level security;
revoke all on public.figsaw_linkedin_posts from public,anon,authenticated;
grant select,insert,update on public.figsaw_linkedin_posts to service_role;

create or replace function public.figsaw_claim_linkedin_post(p_user_id uuid,p_request_id uuid,p_kind text)
returns jsonb language plpgsql set search_path = public as $$
declare existing public.figsaw_linkedin_posts;
begin
 perform pg_advisory_xact_lock(hashtextextended(p_user_id::text,981));
 select * into existing from public.figsaw_linkedin_posts where user_id=p_user_id and request_id=p_request_id;
 if found then return case when existing.post_url is not null then jsonb_build_object('url',existing.post_url) else '{"created":false}'::jsonb end; end if;
 if (select count(*) from public.figsaw_linkedin_posts where user_id=p_user_id and created_at>now()-interval '1 hour')>=6 then
  raise exception 'Share limit reached';
 end if;
 insert into public.figsaw_linkedin_posts(user_id,request_id,kind) values(p_user_id,p_request_id,p_kind);
 return '{"created":true}'::jsonb;
end;
$$;
revoke all on function public.figsaw_claim_linkedin_post(uuid,uuid,text) from public,anon,authenticated;
grant execute on function public.figsaw_claim_linkedin_post(uuid,uuid,text) to service_role;
