import test from 'node:test';
import assert from 'node:assert/strict';
import {installGraphicsRecovery} from '../dist/graphics-recovery.js';

test('context loss pauses rendering; restoration lowers quality without reloading or resetting gameplay',()=>{
 const canvas=new EventTarget(),status={hidden:true,textContent:''},calls=[];
 const previous=globalThis.sessionStorage;globalThis.sessionStorage={setItem:(key,value)=>calls.push([key,value])};
 const recovery=installGraphicsRecovery(canvas,{pause:()=>calls.push('pause'),resume:()=>calls.push('resume'),lowerQuality:()=>calls.push('lower'),status});
 try{
  const event=new Event('webglcontextlost',{cancelable:true});canvas.dispatchEvent(event);
  assert.equal(event.defaultPrevented,true);assert.equal(recovery.lost,true);assert.equal(status.hidden,false);assert.ok(calls.includes('pause'));
  canvas.dispatchEvent(new Event('webglcontextrestored'));
  assert.equal(recovery.lost,false);assert.equal(status.hidden,true);assert.deepEqual(calls.slice(-2),['lower','resume']);
  canvas.dispatchEvent(new Event('webglcontextrestored'));assert.equal(calls.filter(x=>x==='resume').length,1);
 }finally{recovery.dispose();globalThis.sessionStorage=previous;}
});
