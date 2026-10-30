import test from 'node:test';
import assert from 'node:assert/strict';
import {resultShareURL,canShareGraphic,createResultShareActions} from '../dist/result-share-actions.js';

const url='https://figsaw.figma.site/';
function node(){return {disabled:false,hidden:false,textContent:'',listeners:{},attributes:{},children:{},querySelector(selector){return this.children[selector]??null;},setAttribute(key,value){this.attributes[key]=value;},addEventListener(type,fn){this.listeners[type]=fn;}};}
function setup(nav){
 const previous=Object.getOwnPropertyDescriptor(globalThis,'navigator');
 Object.defineProperty(globalThis,'navigator',{configurable:true,value:nav});
 const nodes=Object.fromEntries(['status','graphic','x','instagram','facebook'].map(name=>[`[data-share-${name}]`,node()]));
 nodes['[data-share-graphic]'].children['[data-share-label]']=node();
 let result={blob:new Blob(['result'],{type:'image/png'}),name:'figsaw-attempt-87.png',title:'Figsaw',text:`Can you escape? ${url}`};
 const root={querySelector:s=>nodes[s]??null,querySelectorAll:()=>[]};
 const actions=createResultShareActions(root,{url,getResult:()=>result,download(){}});
 return {nodes,actions,setResult:value=>{result=value;},restore(){if(previous)Object.defineProperty(globalThis,'navigator',previous);else delete globalThis.navigator;}};
}
test('X composes the caption and official link once, correctly escaping punctuation',()=>{
 const link=new URL(resultShareURL('x',{url,text:`I escaped! #3 & 2 Figpals ${url}`}));
 assert.equal(link.origin,'https://x.com');assert.equal(link.pathname,'/intent/tweet');
 assert.equal(link.searchParams.get('text'),'I escaped! #3 & 2 Figpals');assert.equal(link.searchParams.get('url'),url);
});
test('Facebook shares only the official URL, never a fabricated image upload',()=>{
 const link=new URL(resultShareURL('facebook',{url,text:'A private name'}));
 assert.equal(link.origin,'https://www.facebook.com');assert.equal(link.searchParams.get('u'),url);
 assert.equal(link.searchParams.has('text'),false);assert.equal(link.searchParams.has('picture'),false);
});
test('native sharing is feature detected, including browsers that throw',()=>{
 const file=new File(['test'],'result.png',{type:'image/png'});
 assert.equal(canShareGraphic(file,{}),false);
 assert.equal(canShareGraphic(file,{share(){},canShare(){throw Error('blocked');}}),false);
 assert.equal(canShareGraphic(file,{share(){},canShare:({files})=>files[0]===file}),true);
});
test('desktop fallback copies the game URL without posting or downloading',async()=>{
 const copies=[],s=setup({clipboard:{writeText:async text=>copies.push(text)}});
 try{
  assert.equal(s.nodes['[data-share-graphic]'].attributes['aria-label'],'Copy game link');
  await s.nodes['[data-share-graphic]'].listeners.click();assert.deepEqual(copies,[url]);
  assert.equal(s.nodes['[data-share-status]'].textContent,'Game link copied.');
 }finally{s.restore();}
});
test('native sharing carries the result PNG and cancellation stays quiet',async()=>{
 const calls=[],s=setup({canShare:()=>true,share:async data=>{calls.push(data);throw Object.assign(Error('cancel'),{name:'AbortError'});}});
 try{
  await s.nodes['[data-share-graphic]'].listeners.click();
  assert.equal(calls[0].files[0].name,'figsaw-attempt-87.png');assert.equal(calls[0].text,`Can you escape? ${url}`);
  assert.equal(s.nodes['[data-share-status]'].textContent,'');
 }finally{s.restore();}
});
test('reset disables stale result actions and ignores a previous sharing completion',async()=>{
 let finish;const s=setup({canShare:()=>true,share:()=>new Promise(resolve=>{finish=resolve;})});
 try{
  const pending=s.nodes['[data-share-graphic]'].listeners.click();
  s.setResult(null);s.actions.reset();finish();await pending;
  for(const name of ['graphic','x','instagram','facebook'])assert.equal(s.nodes[`[data-share-${name}]`].disabled,true);
  assert.equal(s.nodes['[data-share-status]'].textContent,'');
 }finally{s.restore();}
});
test('social buttons open a composer only, without calling a publishing API',()=>{
 const previous=globalThis.window,calls=[],s=setup({});globalThis.window={open:(...args)=>calls.push(args)};
 try{
  s.nodes['[data-share-x]'].listeners.click();s.nodes['[data-share-facebook]'].listeners.click();
  assert.equal(calls.length,2);
  for(const [,target,features]of calls){assert.equal(target,'_blank');assert.equal(features,'noopener,noreferrer');}
  s.setResult(null);s.actions.reset();s.nodes['[data-share-x]'].listeners.click();assert.equal(calls.length,2);
 }finally{s.restore();globalThis.window=previous;}
});
