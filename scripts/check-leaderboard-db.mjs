// Optional isolated PostgreSQL smoke test. Install @electric-sql/pglite in a
// temporary directory and set PGLITE_MODULE to its dist/index.js file URL.
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const {PGlite}=await import(process.env.PGLITE_MODULE||'@electric-sql/pglite');
const db=new PGlite();
try{
 await db.exec('create role anon; create role authenticated; create role service_role bypassrls; create schema auth; create table auth.users(id uuid primary key);');
 await db.exec(await readFile(new URL('../supabase/migrations/202610300001_leaderboard.sql',import.meta.url),'utf8'));
 const user='123e4567-e89b-12d3-a456-426614174001',other='123e4567-e89b-12d3-a456-426614174002';
 await db.query('insert into auth.users values ($1),($2)',[user,other]);
 let counter=0;const nextId=()=>`123e4567-e89b-12d3-a456-${String(++counter).padStart(12,'0')}`;
 const submit=async(id,name,seconds,owner=user)=>(await db.query('select public.figsaw_submit_score($1,$2,$3,$4,$5,$6) as result',[owner,id,name,name.toLowerCase(),seconds,1])).rows[0].result;
 const first=nextId();assert.equal((await submit(first,'Ava',900)).rank,1);
 assert.equal((await submit(nextId(),'Ava',800)).improved,false);
 assert.equal((await submit(nextId(),'Ava',1000)).entry.remainingSeconds,1000);
 const duplicate=await submit(first,'Changed',1200);assert.equal(duplicate.entry.name,'Ava');assert.equal(duplicate.entry.remainingSeconds,1000);
 await assert.rejects(()=>submit(first,'Ava',900,other));
 await assert.rejects(()=>submit(nextId(),'Kai',1201));
 for(let i=0;i<12;i++)await submit(nextId(),`Player ${i}`,900+i);
 const rows=(await db.query('select public.figsaw_top_ten() as entries')).rows[0].entries;
 assert.equal(rows.length,10);assert.equal(rows[0].name,'Ava');assert.equal(rows[1].remainingSeconds,911);
 for(let i=0;i<7;i++)assert.equal((await db.query('select public.figsaw_submission_quota($1) as allowed',[user])).rows[0].allowed,i<6);
 for(const role of ['anon','authenticated']){
  await db.exec(`set role ${role}`);
  await assert.rejects(()=>db.query('select * from public.figsaw_scores'));
  await assert.rejects(()=>db.query('select public.figsaw_top_ten()'));
  await assert.rejects(()=>submit(nextId(),'Unauthorized',800));
  await db.exec('reset role');
 }
 await db.exec('set role service_role');assert.equal((await db.query('select public.figsaw_top_ten() as entries')).rows[0].entries.length,10);
 console.log('PostgreSQL migration, ranking, duplicate protection, quotas and browser-role denial passed.');
}finally{await db.close();}
