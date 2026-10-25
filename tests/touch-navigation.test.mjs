import test from 'node:test';
import assert from 'node:assert/strict';
import {createTouchNavigation} from '../dist/touch-navigation.js';
class Element extends EventTarget{
 constructor(){super();this.children=[];this.style={};this.attrs={};this.hidden=false;}
 append(...elements){this.children.push(...elements);}setAttribute(k,v){this.attrs[k]=v;}setPointerCapture(){}
}
function pointer(element,type,id,x,y,pointerType='touch'){const event=new Event(type,{cancelable:true});Object.assign(event,{pointerId:id,clientX:x,clientY:y,pointerType});element.dispatchEvent(event);}

test('pinch zoom does not become a tap; movement controls release on cancelled touches',()=>{
 const previous=globalThis.document,body=new Element();globalThis.document={createElement:()=>new Element(),body};
 try{
  const canvas=new Element(),state={zoom:1},keys=new Set();let cancels=0,allowed=true;
  const nav=createTouchNavigation({canvas,state,keys,cancel:()=>{cancels++;},canInteract:()=>allowed});
  pointer(canvas,'pointerdown',1,100,100);pointer(canvas,'pointerdown',2,200,100);
  pointer(canvas,'pointermove',2,250,100);assert.ok(Math.abs(state.zoom-2/3)<.001);assert.equal(cancels,1);
  pointer(canvas,'pointerup',1,100,100);pointer(canvas,'pointerup',2,250,100);
  const [toggle,pad]=body.children[0].children;toggle.dispatchEvent(new Event('click'));assert.equal(pad.hidden,false);
  const forward=pad.children[1];pointer(forward,'pointerdown',3,0,0);assert.ok(keys.has('KeyW'));
  pointer(forward,'pointercancel',3,0,0);assert.equal(keys.size,0);
  allowed=false;pointer(forward,'pointerdown',4,0,0);assert.equal(keys.size,0);
  nav.reset();assert.equal(pad.hidden,true);assert.equal(toggle.attrs['aria-expanded'],'false');
 }finally{globalThis.document=previous;}
});
