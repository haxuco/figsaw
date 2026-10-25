import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
await build({entryPoints:['dist/app.js'],bundle:true,minify:true,format:'esm',target:['es2022'],outfile:'dist/game.bundle.js',legalComments:'external',sourcemap:false,logLevel:'info'});
const hash=createHash('sha256').update(await readFile('dist/game.bundle.js')).digest('hex').slice(0,12);
const boot=(await readFile('dist/boot.js','utf8')).replace(/game\.bundle\.js\?v=[\w-]+/g,`game.bundle.js?v=${hash}`);
await writeFile('dist/boot.js',boot);
const html=(await readFile('dist/index.html','utf8')).replace(/game\.bundle\.js\?v=[\w-]+/g,`game.bundle.js?v=${hash}`).replace(/boot\.js\?v=[\w-]+/g,`boot.js?v=${hash}`);
await writeFile('dist/index.html',html);
