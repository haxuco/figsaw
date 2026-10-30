import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const {PGlite}=await import(process.env.PGLITE_MODULE||'@electric-sql/pglite'),db=new PGlite();
try{
 await db.exec('create role anon; create role authenticated; create role service_role bypassrls; create schema auth; create table auth.users(id uuid primary key);');
 await db.exec(await readFile(new URL('../legacy/supabase/migrations/202610300002_linkedin_posts.sql',import.meta.url),'utf8'));
 const user='123e4567-e89b-12d3-a456-426614174001';await db.query('insert into auth.users values ($1)',[user]);
 const id=i=>`123e4567-e89b-12d3-a456-${String(i).padStart(12,'0')}`;
 const claim=async i=>(await db.query('select public.figsaw_claim_linkedin_post($1,$2,$3) as result',[user,id(i),'video'])).rows[0].result;
 await db.exec('set role service_role');assert.equal((await claim(1)).created,true);assert.equal((await claim(1)).created,false);
 await db.query('update public.figsaw_linkedin_posts set post_url=$1 where request_id=$2',['https://www.linkedin.com/feed/update/urn:li:share:1/',id(1)]);assert.ok((await claim(1)).url);
 for(let i=2;i<=6;i++)assert.equal((await claim(i)).created,true);await assert.rejects(()=>claim(7));await db.exec('reset role');
 for(const role of ['anon','authenticated']){await db.exec(`set role ${role}`);await assert.rejects(()=>claim(8));await assert.rejects(()=>db.query('select * from public.figsaw_linkedin_posts'));await db.exec('reset role');}
 console.log('LinkedIn post duplicate protection, per-user quota, and browser-role denial passed.');
}finally{await db.close();}
