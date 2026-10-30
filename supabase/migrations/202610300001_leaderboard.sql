-- Only the Edge Function's service role can access these tables/functions.
-- Browser JWTs and publishable keys cannot insert or alter leaderboard rows.
create table public.figsaw_scores (
 id uuid primary key,
 user_id uuid not null references auth.users(id) on delete cascade,
 name text not null check (char_length(name) between 2 and 24),
 name_key text not null unique,
 remaining_seconds integer not null check (remaining_seconds between 0 and 1200),
 attempt integer not null check (attempt > 0),
 created_at bigint not null default (extract(epoch from clock_timestamp()) * 1000)::bigint
);
create table public.figsaw_submissions (
 run_id uuid primary key,
 user_id uuid not null references auth.users(id) on delete cascade,
 name_key text not null
);
create table public.figsaw_submission_limits (
 user_id uuid not null references auth.users(id) on delete cascade,
 bucket bigint not null,
 attempts integer not null default 1,
 primary key (user_id,bucket)
);
alter table public.figsaw_scores enable row level security;
alter table public.figsaw_submissions enable row level security;
alter table public.figsaw_submission_limits enable row level security;
revoke all on public.figsaw_scores,public.figsaw_submissions,public.figsaw_submission_limits from public,anon,authenticated;
grant all on public.figsaw_scores,public.figsaw_submissions,public.figsaw_submission_limits to service_role;
create index figsaw_scores_order on public.figsaw_scores (remaining_seconds desc,created_at asc,id asc);

create function public.figsaw_top_ten() returns jsonb
language sql stable security definer set search_path = '' as $$
 select coalesce(jsonb_agg(to_jsonb(r) order by r."remainingSeconds" desc,r."createdAt",r.id),'[]'::jsonb)
 from (select id,name,remaining_seconds as "remainingSeconds",attempt,created_at as "createdAt"
       from public.figsaw_scores order by remaining_seconds desc,created_at,id limit 10) r;
$$;

create function public.figsaw_submission_quota(p_user_id uuid) returns boolean
language plpgsql security definer set search_path = '' as $$
declare used integer; current_bucket bigint := floor(extract(epoch from now()) / 3600)::bigint;
begin
 delete from public.figsaw_submission_limits where bucket < current_bucket - 1;
 insert into public.figsaw_submission_limits(user_id,bucket) values(p_user_id,current_bucket)
 on conflict(user_id,bucket) do update set attempts=public.figsaw_submission_limits.attempts+1
 returning attempts into used;
 return used <= 6;
end;
$$;

create function public.figsaw_submit_score(p_user_id uuid,p_run_id uuid,p_name text,p_name_key text,p_remaining_seconds integer,p_attempt integer) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare existing public.figsaw_submissions%rowtype; previous public.figsaw_scores%rowtype;
 chosen_key text; improved boolean := false; entries jsonb; entry jsonb; place integer;
begin
 if p_name is null or char_length(p_name) not between 2 and 24 or p_name_key is null or char_length(p_name_key) not between 2 and 48 or p_remaining_seconds is null or p_remaining_seconds not between 0 and 1200 or p_attempt is null or p_attempt < 1 then
  raise exception 'Invalid score';
 end if;
 -- Serialize ranking changes so simultaneous submissions preserve best scores
 -- and one submission per run. The transaction rolls back on every error.
 perform pg_advisory_xact_lock(72461030);
 select * into existing from public.figsaw_submissions where run_id=p_run_id;
 if found then
  if existing.user_id <> p_user_id then raise exception 'Invalid run'; end if;
  chosen_key := existing.name_key;
 else
  chosen_key := p_name_key;
  select * into previous from public.figsaw_scores where name_key=p_name_key;
  if not found or p_remaining_seconds > previous.remaining_seconds then
   insert into public.figsaw_scores(id,user_id,name,name_key,remaining_seconds,attempt)
   values(p_run_id,p_user_id,p_name,p_name_key,p_remaining_seconds,p_attempt)
   on conflict(name_key) do update set id=excluded.id,user_id=excluded.user_id,name=excluded.name,
     remaining_seconds=excluded.remaining_seconds,attempt=excluded.attempt,created_at=excluded.created_at;
   improved := true;
  end if;
  insert into public.figsaw_submissions(run_id,user_id,name_key) values(p_run_id,p_user_id,p_name_key);
 end if;
 entries := public.figsaw_top_ten();
 select ranked.value,ranked.ordinality::integer into entry,place
 from jsonb_array_elements(entries) with ordinality as ranked(value,ordinality)
 join public.figsaw_scores s on s.id=(ranked.value->>'id')::uuid where s.name_key=chosen_key;
 return jsonb_build_object('ok',true,'entries',entries,'entry',entry,'rank',place,'improved',improved);
end;
$$;
revoke all on function public.figsaw_top_ten() from public,anon,authenticated;
revoke all on function public.figsaw_submission_quota(uuid) from public,anon,authenticated;
revoke all on function public.figsaw_submit_score(uuid,uuid,text,text,integer,integer) from public,anon,authenticated;
grant execute on function public.figsaw_top_ten() to service_role;
grant execute on function public.figsaw_submission_quota(uuid) to service_role;
grant execute on function public.figsaw_submit_score(uuid,uuid,text,text,integer,integer) to service_role;
