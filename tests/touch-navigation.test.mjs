import test from 'node:test';
import assert from 'node:assert/strict';
import {createTouchNavigation} from '../dist/touch-navigation.js';
class Element extends EventTarget{
 constructor(){super();this.children=[];this.style={};this.attrs={};this.hidden=false;}
 append(...elements){this.children.push(...elements);}setAttribute(k,v){this.attrs[k]=v;}setPointerCapture(){}
}
function pointer(element,type,id,x,y,pointerType='touch'){const event=new Event(type,{cancelable:true});Object.assign(event,{pointerId:id,clientX:x,clientY:y,pointerType});element.dispatchEvent(event);}

test('touch controls preserve look dragging and pinch zoom without creating a movement pad',()=>{
 const previous=globalThis.document,body=new Element();globalThis.document={createElement:()=>new Element(),body};
 try{
  const canvas=new Element(),state={zoom:1};let cancels=0,taps=0;
  const nav=createTouchNavigation({canvas,state,cancel:()=>cancels++,canInteract:()=>true});
  canvas.addEventListener('pointerup',()=>taps++);
  pointer(canvas,'pointerdown',1,100,100);pointer(canvas,'pointerup',1,100,100);assert.equal(taps,1,'one finger still reaches the scene controls');
  pointer(canvas,'pointerdown',1,100,100);pointer(canvas,'pointerdown',2,200,100);pointer(canvas,'pointermove',2,250,100);
  assert.ok(Math.abs(state.zoom-2/3)<.001);assert.equal(cancels,1);
  pointer(canvas,'pointerup',1,100,100);pointer(canvas,'pointerup',2,250,100);assert.equal(taps,1,'pinch must not activate a prop');
  assert.equal(body.children.length,0,'no movement buttons are available on mobile');
  nav.reset();pointer(canvas,'pointerdown',3,100,100);pointer(canvas,'pointerup',3,100,100);assert.equal(taps,2);
 }finally{globalThis.document=previous;}
});

test('cancelled or blocked touch gestures cannot leave zoom stuck',()=>{
 const canvas=new Element(),state={zoom:1};let allowed=true;
 const nav=createTouchNavigation({canvas,state,cancel(){},canInteract:()=>allowed});
 pointer(canvas,'pointerdown',1,0,0);pointer(canvas,'pointerdown',2,100,0);pointer(canvas,'pointercancel',1,0,0);pointer(canvas,'pointercancel',2,100,0);
 allowed=false;pointer(canvas,'pointerdown',3,0,0);pointer(canvas,'pointerdown',4,100,0);pointer(canvas,'pointermove',4,200,0);assert.equal(state.zoom,1);
 nav.reset();allowed=true;pointer(canvas,'pointerdown',5,0,0);pointer(canvas,'pointerdown',6,100,0);pointer(canvas,'pointermove',6,200,0);assert.equal(state.zoom,.60);
});

test('pinching an inspection uses its own zoom without overwriting the camera transition',()=>{
 const canvas=new Element(),state={zoom:.78};let zoom=1;
 createTouchNavigation({canvas,state,cancel(){},canInteract:()=>true,getZoom:()=>zoom,setZoom:value=>zoom=value});
 pointer(canvas,'pointerdown',1,0,0);pointer(canvas,'pointerdown',2,100,0);pointer(canvas,'pointermove',2,300,0);
 assert.equal(zoom,1/3);assert.equal(state.zoom,.78);
});
