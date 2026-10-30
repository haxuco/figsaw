import {readFile,stat} from 'node:fs/promises';
import {prepareLegacyImport,importLegacy} from '../src/core/legacy-import.mjs';
import {createNameReviewer} from '../src/shared/name-review.js';
const file=process.argv.slice(2).find(v=>!v.startsWith('--')),apply=process.argv.includes('--apply');
if(!file)throw Error('Usage: npm run import:legacy -- /private/path/export.json [--apply]');
if((await stat(file)).size>25*1024*1024)throw Error('Split exports larger than 25 MB before importing.');
const plan=prepareLegacyImport(JSON.parse(await readFile(file,'utf8')));
if(!apply){console.log(JSON.stringify(await importLegacy(null,plan),null,2));console.log('Dry run only. No data written; typed aliases are re-reviewed during --apply.');}
else {
 const {getPayload}=await import('payload'),{default:config}=await import('../src/payload.config'),{createStore}=await import('../src/core/store.mjs');
 const payload=await getPayload({config});
 try{console.log(JSON.stringify(await importLegacy(createStore(payload),plan,{apply:true,reviewName:createNameReviewer({endpoint:process.env.NAME_REVIEW_URL,token:process.env.NAME_REVIEW_TOKEN})}),null,2));}
 finally{await payload.destroy();}
}
