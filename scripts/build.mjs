import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
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
// Local previews retain the owner's diagnostics. The hosted bundle compiles
// those entry points and shortcut actions out, regardless of browser hostname.
await build({...options,outfile:'dist/game.bundle.js',define:{__FIGSAW_PRODUCTION__:'false'}});
await updateEntrypoints('dist');
await stageProductionAssets('dist','dist/client');
await build({...options,outfile:'dist/client/game.bundle.js',define:{__FIGSAW_PRODUCTION__:'true'}});
await updateEntrypoints('dist/client',true);
