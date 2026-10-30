import {cp,lstat,mkdir,rm} from 'node:fs/promises';
import {resolve,relative,join} from 'node:path';

// Publish an explicit asset set, not the development directory. Bundled code
// is still inspectable; omitting raw modules and QA pages only reduces exposure.
export async function stageProductionAssets(source,output){
 source=resolve(source);output=resolve(output);
 const child=relative(source,output);
 if(!child||child.startsWith('..'))throw new Error('Production output must be a child of the development directory.');
 await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
 for(const file of ['index.html','boot.js','style.css','robots.txt','linkedin-callback.html','linkedin-callback.js','analytics.js','linkedin-config.js','insights.html','insights.js','insights.css'])await cp(join(source,file),join(output,file));
 for(const directory of ['assets','fonts','labels'])await cp(join(source,directory),join(output,directory),{recursive:true,filter:async path=>{
  const entry=await lstat(path);return entry.isDirectory()||entry.isFile()&&/\.(?:png|jpe?g|webp|gif|svg|woff2?|ttf|txt|mp4)$/i.test(path);
 }});
}
