-- Anonymous, first-party telemetry. No player identity, IP, referrer, or input text.
create table if not exists public.figsaw_analytics_owners (
 email text primary key check (email = lower(trim(email)))
);
create table if not exists public.figsaw_analytics_visits (
 id uuid primary key,
 token_hash text not null,
 started_at timestamptz not null default now(),
 last_seen_at timestamptz not null default now(),
 environment text not null check (environment in ('official','staging')),
 device text not null check (device in ('mobile','desktop')),
 active_ms integer not null default 0,
 visible_ms integer not null default 0,
 interactions integer not null default 0,
 load_ms integer,
 ready boolean not null default false
);
create table if not exists public.figsaw_analytics_runs (
 id uuid primary key,
 visit_id uuid not null references public.figsaw_analytics_visits(id) on delete cascade,
 started_at timestamptz not null default now(),
 last_seen_at timestamptz not null default now(),
 sequence integer not null default 0,
 active_ms integer not null default 0,
 interactions integer not null default 0,
 outcome text not null default 'playing' check (outcome in ('playing','won','lost','error')),
 cause text check (cause in ('acid','saw','fire','explosion','laptop','deadline','flood','objective','load')),
 milestones jsonb not null default '{}'::jsonb,
 saved integer not null default 0 check (saved between 0 and 2)
);
create index if not exists figsaw_analytics_visits_started on public.figsaw_analytics_visits(started_at);
create index if not exists figsaw_analytics_runs_visit on public.figsaw_analytics_runs(visit_id);
alter table public.figsaw_analytics_owners enable row level security;
alter table public.figsaw_analytics_visits enable row level security;
alter table public.figsaw_analytics_runs enable row level security;
revoke all on public.figsaw_analytics_owners, public.figsaw_analytics_visits, public.figsaw_analytics_runs from public, anon, authenticated;

create or replace function public.figsaw_record_analytics(p_visit uuid, p_secret text, p_run uuid, p_data jsonb)
returns boolean language plpgsql security definer set search_path = pg_catalog, public as $$
declare
 v public.figsaw_analytics_visits; r public.figsaw_analytics_runs;
 field text; entry record; stages jsonb := '{}'; merged jsonb;
 result text; reason text; seq integer; run_ms integer; budget integer;
 allowed text[] := array['room_ready','intro_complete','key_collected','shackle_unlocked','charger_connected','laptop_opened','kerning_1','kerning_2','kerning_complete','org_chart_viewed','pm_revealed','skull_viewed','mobile_collected','mobile_hung','mobile_repaired','chairs_repaired','chairs_positioned','chairs_linked','tank_broken','fire_extinguished','figpal_saved','two_figpals_saved','door_unlocked','chairs_at_door','escaped'];
begin
 if p_visit is null or p_run is null or p_secret is null or p_secret !~ '^[a-f0-9]{64}$' or p_data is null or jsonb_typeof(p_data) <> 'object' or octet_length(p_data::text)>4096 then raise exception 'Invalid analytics packet' using errcode='22023'; end if;
 foreach field in array array['sequence','run_ms','active_ms','visible_ms','interactions','run_interactions','saved'] loop
  if coalesce(p_data->>field,'') !~ '^[0-9]{1,9}$' then raise exception 'Invalid analytics counter' using errcode='22023'; end if;
 end loop;
 if p_data->>'environment' not in ('official','staging') or p_data->>'environment' is null or p_data->>'device' not in ('mobile','desktop') or p_data->>'device' is null then raise exception 'Invalid source' using errcode='22023'; end if;
 result:=p_data->>'outcome'; reason:=p_data->>'cause';
 if result is null or result not in ('playing','won','lost','error') or (reason is not null and reason not in ('acid','saw','fire','explosion','laptop','deadline','flood','objective','load')) or (result='lost' and reason is null) or (result='error' and reason is distinct from 'load') or (result in ('won','playing') and reason is not null) then raise exception 'Invalid outcome' using errcode='22023'; end if;
 if coalesce(jsonb_typeof(p_data->'milestones'),'') <> 'object' then raise exception 'Invalid milestones' using errcode='22023'; end if;
 for entry in select * from jsonb_each(p_data->'milestones') loop
  if not (entry.key=any(allowed)) or entry.value::text !~ '^[0-9]{1,5}$' or (entry.value::text)::integer>86400 then raise exception 'Invalid milestone' using errcode='22023'; end if;
  stages:=stages||jsonb_build_object(entry.key,(entry.value::text)::integer);
 end loop;
 if p_data->'load_ms' is not null and p_data->'load_ms'<>'null'::jsonb and (p_data->>'load_ms') !~ '^[0-9]{1,7}$' then raise exception 'Invalid load time' using errcode='22023'; end if;
 if (p_data->>'saved')::integer>2 then raise exception 'Invalid rescue count' using errcode='22023'; end if;
 insert into public.figsaw_analytics_visits(id,token_hash,environment,device) values(p_visit,encode(sha256(convert_to(p_secret,'UTF8')),'hex'),p_data->>'environment',p_data->>'device') on conflict do nothing;
 select * into v from public.figsaw_analytics_visits where id=p_visit for update;
 if v.token_hash<>encode(sha256(convert_to(p_secret,'UTF8')),'hex') then raise exception 'Invalid analytics session' using errcode='42501'; end if;
 if now()-v.started_at>interval '24 hours' then return false; end if;
 select * into r from public.figsaw_analytics_runs where id=p_run;
 if found and r.visit_id<>p_visit then raise exception 'Invalid attempt' using errcode='42501'; end if;
 if r.id is null then
  if (select count(*) from public.figsaw_analytics_runs where visit_id=p_visit)>=100 then return false; end if;
  insert into public.figsaw_analytics_runs(id,visit_id) values(p_run,p_visit) returning * into r;
 end if;
 seq:=(p_data->>'sequence')::integer;
 if seq<=r.sequence then return true; end if;
 -- Snapshots are cumulative and idempotent. Never let a delayed packet undo a loss/win.
 if r.outcome<>'playing' then return true; end if;
 if seq>1 and now()-r.last_seen_at<interval '3 seconds' and result='playing' then return false; end if;
 budget:=least(86400000,ceil(extract(epoch from (now()-v.started_at))*1000)::integer+30000);
 update public.figsaw_analytics_visits set last_seen_at=now(),
  active_ms=greatest(active_ms,least((p_data->>'active_ms')::integer,budget)),
  visible_ms=greatest(visible_ms,least((p_data->>'visible_ms')::integer,budget)),
  interactions=greatest(interactions,least((p_data->>'interactions')::integer,1000000)),
  load_ms=coalesce(load_ms,least((p_data->>'load_ms')::integer,600000)),
  ready=ready or stages ? 'room_ready' where id=p_visit;
 select coalesce(jsonb_object_agg(key,value),'{}') into merged from (
  select key,min(value::text::integer) as value from (select * from jsonb_each(r.milestones) union all select * from jsonb_each(stages)) m group by key
 ) combined;
 run_ms:=least((p_data->>'run_ms')::integer,budget);
 update public.figsaw_analytics_runs set last_seen_at=now(),sequence=seq,active_ms=greatest(active_ms,run_ms),interactions=greatest(interactions,least((p_data->>'run_interactions')::integer,1000000)),outcome=result,cause=reason,milestones=merged,saved=greatest(saved,(p_data->>'saved')::integer) where id=p_run;
 return true;
end $$;
revoke all on function public.figsaw_record_analytics(uuid,text,uuid,jsonb) from public;
grant execute on function public.figsaw_record_analytics(uuid,text,uuid,jsonb) to anon,authenticated;

create or replace function public.figsaw_analytics_dashboard(p_days integer default 30,p_environment text default 'official')
returns jsonb language plpgsql security definer set search_path = pg_catalog, public as $$
declare answer jsonb;
begin
 -- Verify the current Auth user against a private allowlist; client flags are never trusted.
 if not exists(select 1 from auth.users u join public.figsaw_analytics_owners o on o.email=lower(u.email) where u.id=auth.uid() and u.email_confirmed_at is not null and not coalesce(u.is_anonymous,false)) then
  raise exception 'Owner access required' using errcode='42501';
 end if;
 if p_days is null or p_days not in (7,30,90) or p_environment is null or p_environment not in ('official','staging','all') then raise exception 'Invalid date range' using errcode='22023'; end if;
 with visits as (
  select * from public.figsaw_analytics_visits where started_at>=now()-make_interval(days=>p_days) and (p_environment='all' or environment=p_environment)
 ), runs as (
  select r.* from public.figsaw_analytics_runs r join visits v on r.visit_id=v.id
 ), completed_visits as (
  select v.* from visits v where v.last_seen_at<now()-interval '2 minutes' or exists(select 1 from runs r where r.visit_id=v.id and r.outcome in ('won','lost','error'))
 ), days as (select generate_series((now() at time zone 'UTC')::date-p_days+1,(now() at time zone 'UTC')::date,interval '1 day')::date as day),
 stage_keys as (select unnest(array['room_ready','intro_complete','key_collected','shackle_unlocked','charger_connected','laptop_opened','kerning_1','kerning_2','kerning_complete','org_chart_viewed','pm_revealed','skull_viewed','mobile_collected','mobile_hung','mobile_repaired','chairs_repaired','chairs_positioned','chairs_linked','tank_broken','fire_extinguished','figpal_saved','two_figpals_saved','door_unlocked','chairs_at_door','escaped']) as key),
 stages as (select k.key,count(r.id) as count,round(avg((r.milestones->>k.key)::numeric)) as seconds from stage_keys k left join runs r on r.milestones ? k.key group by k.key),
 failures as (select cause,count(*) as count from runs where outcome='lost' group by cause),
 devices as (select device,count(*) as visits,round(avg(active_ms)/1000) as seconds from visits group by device)
 select jsonb_build_object(
  'generatedAt',now(),'days',p_days,'environment',p_environment,
  'summary',jsonb_build_object('visits',(select count(*) from visits),'attempts',(select count(*) from runs),'completedVisits',(select count(*) from completed_visits),'bounces',(select count(*) from completed_visits where interactions=0 and active_ms<30000),'wins',(select count(*) from runs where outcome='won'),'losses',(select count(*) from runs where outcome='lost'),'loadErrors',(select count(*) from runs where outcome='error'),'abandoned',(select count(*) from runs where outcome='playing' and last_seen_at<now()-interval '2 minutes'),'playing',(select count(*) from runs where outcome='playing' and last_seen_at>=now()-interval '2 minutes'),'avgActiveSeconds',(select round(coalesce(avg(active_ms),0)/1000) from visits),'avgVisibleSeconds',(select round(coalesce(avg(visible_ms),0)/1000) from visits),'medianAttemptSeconds',(select round(coalesce(percentile_cont(.5) within group(order by active_ms),0)/1000) from runs),'avgLoadMs',(select round(avg(load_ms)) from visits)),
  'daily',(select coalesce(jsonb_agg(jsonb_build_object('day',d.day,'visits',(select count(*) from visits v where (v.started_at at time zone 'UTC')::date=d.day),'attempts',(select count(*) from runs r where (r.started_at at time zone 'UTC')::date=d.day),'wins',(select count(*) from runs r where (r.started_at at time zone 'UTC')::date=d.day and outcome='won')) order by d.day),'[]') from days d),
  'stages',(select coalesce(jsonb_agg(to_jsonb(s)),'[]') from stages s),
  'failures',(select coalesce(jsonb_agg(to_jsonb(f) order by count desc),'[]') from failures f),
  'devices',(select coalesce(jsonb_agg(to_jsonb(d)),'[]') from devices d),
  'recent',(select coalesce(jsonb_agg(to_jsonb(recent)),'[]') from (select started_at,last_seen_at,active_ms,outcome,cause,milestones,saved from runs order by started_at desc limit 100) recent),
  'duration',(select jsonb_build_array(jsonb_build_object('label','< 30 sec','count',count(*) filter(where active_ms<30000)),jsonb_build_object('label','30 sec–2 min','count',count(*) filter(where active_ms>=30000 and active_ms<120000)),jsonb_build_object('label','2–5 min','count',count(*) filter(where active_ms>=120000 and active_ms<300000)),jsonb_build_object('label','5–10 min','count',count(*) filter(where active_ms>=300000 and active_ms<600000)),jsonb_build_object('label','10+ min','count',count(*) filter(where active_ms>=600000))) from runs)
 ) into answer;
 return answer;
end $$;
revoke all on function public.figsaw_analytics_dashboard(integer,text) from public,anon;
grant execute on function public.figsaw_analytics_dashboard(integer,text) to authenticated;
