-- Verified profile names are approved by identity, with explicit display consent.
-- Tokens are never persisted; only the chosen name and consent timestamp are saved.
alter table public.figsaw_scores drop constraint figsaw_scores_name_check;
alter table public.figsaw_scores add constraint figsaw_scores_name_check check (char_length(name) between 1 and 100);
alter table public.figsaw_scores add column name_source text not null default 'alias' check (name_source in ('alias','linkedin'));
alter table public.figsaw_scores add column name_consented_at timestamptz;
alter table public.figsaw_scores add constraint figsaw_linkedin_name_consent check (name_source <> 'linkedin' or name_consented_at is not null);

create or replace function public.figsaw_top_ten() returns jsonb
language sql stable security definer set search_path = '' as $$
 select coalesce(jsonb_agg(to_jsonb(r) order by r."remainingSeconds" desc,r."createdAt",r.id),'[]'::jsonb)
 from (select id,name,name_source as "nameSource",remaining_seconds as "remainingSeconds",attempt,created_at as "createdAt"
       from public.figsaw_scores order by remaining_seconds desc,created_at,id limit 10) r;
$$;

create function public.figsaw_submit_score_with_identity(p_user_id uuid,p_run_id uuid,p_name text,p_name_key text,p_remaining_seconds integer,p_attempt integer,p_name_source text,p_name_consent boolean) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare existing public.figsaw_submissions%rowtype; previous public.figsaw_scores%rowtype;
 chosen_key text; improved boolean := false; entries jsonb; entry jsonb; place integer;
begin
 if p_name is null or char_length(p_name) not between 1 and 100 or p_name_source not in ('alias','linkedin') or (p_name_source='linkedin' and p_name_consent is distinct from true) or (p_name_source='alias' and char_length(p_name) not between 2 and 24) or p_name_key is null or char_length(p_name_key) not between 2 and 48 or p_remaining_seconds is null or p_remaining_seconds not between 0 and 1200 or p_attempt is null or p_attempt < 1 then
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
   insert into public.figsaw_scores(id,user_id,name,name_key,remaining_seconds,attempt,name_source,name_consented_at)
   values(p_run_id,p_user_id,p_name,p_name_key,p_remaining_seconds,p_attempt,p_name_source,case when p_name_source='linkedin' then now() else null end)
   on conflict(name_key) do update set id=excluded.id,user_id=excluded.user_id,name=excluded.name,
     remaining_seconds=excluded.remaining_seconds,attempt=excluded.attempt,created_at=excluded.created_at,name_source=excluded.name_source,name_consented_at=excluded.name_consented_at;
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
revoke all on function public.figsaw_submit_score_with_identity(uuid,uuid,text,text,integer,integer,text,boolean) from public,anon,authenticated;
grant execute on function public.figsaw_submit_score_with_identity(uuid,uuid,text,text,integer,integer,text,boolean) to service_role;
