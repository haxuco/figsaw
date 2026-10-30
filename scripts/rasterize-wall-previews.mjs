// Rebuild only when the authored wall SVGs change. Committed WebP assets let the
// browser load the room without parsing thousands of decorative SVG elements.
import {createRequire} from 'node:module';
import {mkdir} from 'node:fs/promises';
const require=createRequire(import.meta.url);
const sharp=require(require.resolve('sharp',{paths:['./payload']}));
const names=['onboarding','workspace','planning',...Array.from({length:8},(_,i)=>`note-${i}`)];
await mkdir('dist/assets/documents/previews',{recursive:true});
for(const name of names)for(const size of [256,1024,1600]){
 await sharp(`dist/assets/documents/${name}.svg`).resize({width:size,height:size,fit:'inside',withoutEnlargement:true}).webp({quality:size===1600?92:82}).toFile(`dist/assets/documents/previews/${name}-${size}.webp`);
}
