import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,readdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {build} from 'esbuild';
import {stageProductionAssets} from '../scripts/production-assets.mjs';
import {createDiagnostics,createDiagnosticTrigger,isLocalDiagnosticHost} from '../dist/diagnostics.js';

test('diagnostics allow exact local preview hosts, never lookalike public hosts',()=>{
 for(const host of ['localhost','127.0.0.1','::1','[::1]'])assert.equal(isLocalDiagnosticHost(host),true);
 for(const host of ['figsaw.haxuco.chatgpt.site','localhost.evil.example','127.0.0.1.evil.example','',undefined])assert.equal(isLocalDiagnosticHost(host),false);
 const mode=createDiagnostics({available:false});mode.activate();mode.setInvulnerable(true);mode.toggleTimer();assert.equal(mode.enabled,false);assert.equal(mode.invulnerable,false);assert.equal(mode.run('challenge'),false);assert.equal(mode.undo(),false);
 const trigger=createDiagnosticTrigger(()=>assert.fail('Unavailable diagnostics activated'),{available:false});for(const key of 'set')assert.equal(trigger({key}),false);
});

test('the public compile cannot enable cheats or construct a diagnostic UI, even with an available override',async()=>{
 const result=await build({stdin:{contents:`import {createDiagnostics,createDiagnosticUI,createDiagnosticTrigger} from './dist/diagnostics.js';export {createDiagnostics,createDiagnosticUI,createDiagnosticTrigger};`,resolveDir:resolve('.')},bundle:true,format:'esm',minify:true,write:false,define:{__FIGSAW_PRODUCTION__:'true'}});
 const code=result.outputFiles[0].text;
 assert.doesNotMatch(code,/diagnostic-tools|Invulnerability enabled|Pause countdown|Countdown paused|startsWith/);
 const publicModule=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
 const mode=publicModule.createDiagnostics({available:true,onActivate:()=>assert.fail('Production diagnostic mode activated')});mode.activate();mode.toggleTimer();mode.setInvulnerable(true);assert.equal(mode.enabled,false);assert.equal(mode.invulnerable,false);assert.equal(mode.run('challenge'),false);
 const trigger=publicModule.createDiagnosticTrigger(()=>assert.fail('Production shortcut activated'),{available:true});for(const key of 'set')assert.equal(trigger({key}),false);
 assert.doesNotThrow(()=>publicModule.createDiagnosticUI({available:true}), 'production must not touch document or register keyboard listeners');
});

test('the public package excludes raw source, QA pages, maps and asset notes, including stale output',async()=>{
 const root=await mkdtemp(join(tmpdir(),'figsaw-public-'));
 try{
  for(const directory of ['assets/documents','fonts','labels','client'])await mkdir(join(root,directory),{recursive:true});
  const fixtures={'index.html':'<title>Figsaw</title>','boot.js':'boot','style.css':'style','robots.txt':'User-agent: *\nDisallow: /\n','app.js':'private source','_qa.html':'answers','game.bundle.js.map':'source map','client/old-answer.js':'stale','assets/documents/org-chart.svg':'poster','assets/documents/asset-sources.md':'notes','assets/hidden.js':'source','fonts/font.woff':'font','labels/bottle.svg':'label'};
  for(const [file,content]of Object.entries(fixtures))await writeFile(join(root,file),content);
  await stageProductionAssets(root,join(root,'client'));
  assert.deepEqual((await readdir(join(root,'client'))).sort(),['assets','boot.js','fonts','index.html','labels','robots.txt','style.css']);
  assert.deepEqual(await readdir(join(root,'client/assets/documents')),['org-chart.svg']);assert.deepEqual(await readdir(join(root,'client/assets')),['documents']);
  assert.match(await readFile(join(root,'client/robots.txt'),'utf8'),/Disallow: \//);
  await assert.rejects(()=>stageProductionAssets(root,root));
 }finally{await rm(root,{recursive:true,force:true});}
});
