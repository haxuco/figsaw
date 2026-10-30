import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,readdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {build} from 'esbuild';
import {stageProductionAssets} from '../scripts/production-assets.mjs';

test('the game has no diagnostics, answer editor, testing controls or camera export in any build',async()=>{
 const result=await build({entryPoints:['dist/app.js'],bundle:true,format:'esm',minify:true,write:false,metafile:true});
 const code=result.outputFiles[0].text;
 assert.doesNotMatch(code,/diagnostic-tools|Invulnerability enabled|Pause countdown|createDiagnosticTrigger|Diagnostic answer|Testing: |Matching target wireframes|Copy view|Set this as the default camera view|Copy settings|data-kern-editor/);
 const inputs=Object.keys(result.metafile.inputs).join('\n');
 assert.doesNotMatch(inputs,/diagnostics\.js|diagnostic-actions\.js|interaction-targets\.js|performance-report\.js|kerning-settings\.js/);
 for(const path of ['dist/index.html','dist/style.css']){
  const content=await readFile(path,'utf8');
  assert.doesNotMatch(content,/copy-view|copy-fallback|copy-status|diagnostic-tools|testing-tools|kern-editor|kern-answer/);
 }
 const buildScript=await readFile('scripts/build.mjs','utf8');
 assert.doesNotMatch(buildScript,/__FIGSAW_PRODUCTION__:'false'/,'local previews must not enable developer controls');
});

test('the public package excludes raw source, QA pages, maps and asset notes, including stale output',async()=>{
 const root=await mkdtemp(join(tmpdir(),'figsaw-public-'));
 try{
  for(const directory of ['assets/documents','fonts','labels','client'])await mkdir(join(root,directory),{recursive:true});
  const fixtures={'analytics.js':'analytics','linkedin-config.js':'public config','insights.html':'owner sign in','insights.js':'owner UI','insights.css':'owner styles','linkedin-callback.html':'callback','linkedin-callback.js':'callback code','assets/figsaw-promo.mp4':'video','index.html':'<title>Figsaw</title>','boot.js':'boot','style.css':'style','robots.txt':'User-agent: *\nDisallow: /\n','app.js':'private source','_qa.html':'answers','game.bundle.js.map':'source map','client/old-answer.js':'stale','assets/documents/org-chart.svg':'poster','assets/documents/asset-sources.md':'notes','assets/hidden.js':'source','fonts/font.woff':'font','labels/bottle.svg':'label'};
  for(const [file,content]of Object.entries(fixtures))await writeFile(join(root,file),content);
  await stageProductionAssets(root,join(root,'client'));
  assert.deepEqual((await readdir(join(root,'client'))).sort(),['analytics.js','assets','boot.js','fonts','index.html','insights.css','insights.html','insights.js','labels','linkedin-callback.html','linkedin-callback.js','linkedin-config.js','robots.txt','style.css']);
  assert.deepEqual(await readdir(join(root,'client/assets/documents')),['org-chart.svg']);assert.deepEqual(await readdir(join(root,'client/assets')),['documents','figsaw-promo.mp4']);
  assert.match(await readFile(join(root,'client/robots.txt'),'utf8'),/Disallow: \//);
  await assert.rejects(()=>stageProductionAssets(root,root));
 }finally{await rm(root,{recursive:true,force:true});}
});
