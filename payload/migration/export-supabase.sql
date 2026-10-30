-- Run read-only against the old project. Save the returned JSON value privately.
-- This temporary helper tolerates a leaderboard that was never deployed.
create or replace function pg_temp.figsaw_export_rows(table_name text)
returns jsonb language plpgsql as $$
declare result jsonb;
begin
  if table_name not in ('figsaw_scores','figsaw_analytics_visits','figsaw_analytics_runs') then
    raise exception 'Unsupported export';
  end if;
  if to_regclass('public.'||table_name) is null then return '[]'::jsonb; end if;
  execute format('select coalesce(jsonb_agg(to_jsonb(t) - ''user_id'' - ''token_hash''), ''[]''::jsonb) from public.%I t',table_name) into result;
  return result;
end $$;
select jsonb_build_object(
  'kind','figsaw-legacy-export','version',1,
  'scores',pg_temp.figsaw_export_rows('figsaw_scores'),
  'visits',pg_temp.figsaw_export_rows('figsaw_analytics_visits'),
  'attempts',pg_temp.figsaw_export_rows('figsaw_analytics_runs')
) as export;
