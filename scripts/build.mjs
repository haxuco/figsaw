import {build} from 'esbuild';
import {readFile,writeFile,cp} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {stageProductionAssets} from './production-assets.mjs';
const options={entryPoints:['dist/app.js'],bundle:true,minify:true,format:'esm',target:['es2022'],legalComments:'external',sourcemap:false,logLevel:'info'};
async function updateEntrypoints(directory,production=false){
 const hash=createHash('sha256').update(await readFile(`${directory}/game.bundle.js`)).digest('hex').slice(0,12);
 const styleHash=createHash('sha256').update(await readFile(`${directory}/style.css`)).digest('hex').slice(0,12);
 const boot=(await readFile(`${directory}/boot.js`,'utf8')).replace(/game\.bundle\.js\?v=[\w-]+/g,`game.bundle.js?v=${hash}`);
 await writeFile(`${directory}/boot.js`,boot);
 let html=(await readFile(`${directory}/index.html`,'utf8')).replace(/game\.bundle\.js\?v=[\w-]+/g,`game.bundle.js?v=${hash}`).replace(/boot\.js\?v=[\w-]+/g,`boot.js?v=${hash}`).replace(/style\.css\?v=[\w-]+/g,`style.css?v=${styleHash}`);
 if(production)html=html.replace('<title>Figsaw</title>','<title>Figsaw</title>\n  <meta name="robots" content="noindex,nofollow,nosnippet,noarchive">');
 await writeFile(`${directory}/index.html`,html);
}
// Preview and deployment use the same production game, without developer controls.
await build({...options,outfile:'dist/game.bundle.js'});
await updateEntrypoints('dist');
await stageProductionAssets('dist','dist/client');
await cp('dist/game.bundle.js','dist/client/game.bundle.js');
await cp('dist/game.bundle.js.LEGAL.txt','dist/client/game.bundle.js.LEGAL.txt');
await updateEntrypoints('dist/client',true);
