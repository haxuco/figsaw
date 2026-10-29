import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createFigpalVats} from '../dist/figpal-vats.js';
import {createVictoryParade} from '../dist/victory-parade.js';

function withCanvas(run){
 const previous=globalThis.document,path=globalThis.Path2D,gradient={addColorStop(){}};
 const ctx=new Proxy({createRadialGradient:()=>gradient,createLinearGradient:()=>gradient,measureText:()=>({width:50})},{get:(o,k)=>k in o?o[k]:()=>{}});
 globalThis.Path2D=class {};globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>ctx}),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
 try{run();}finally{globalThis.document=previous;globalThis.Path2D=path;}
}

test('only saved Figpals smile and bounce on the original chairs, with moving clipping planes and clean retry poses',()=>withCanvas(()=>{
 const vats=createFigpalVats(),scene=new THREE.Group(),eye=new THREE.Vector3(.15,1.55,9.05);scene.add(vats.group);
 const rigs=vats.rigs,chairs=[0,1,2].map(i=>{const c=new THREE.Group();c.position.set(-1.2,0,6.94-i*1.16);scene.add(c);return c;});
 for(let i=0;i<2;i++){const r=rigs[i];r.rescued=true;chairs[i].add(r.hanger);r.hanger.position.set(0,.72,0);r.hanger.quaternion.identity();}
 const original=rigs.map(r=>({p:r.captive.position.clone(),q:r.captive.quaternion.clone(),s:r.captive.scale.clone()})),parade=createVictoryParade({rigs});parade.start(10);assert.equal(parade.count,2);
 for(let i=0;i<2;i++){assert.equal(rigs[i].captive.expressions.happy.visible,true);assert.equal(rigs[i].captive.expressions.worried.visible,false);assert.equal(rigs[i].sling.visible,false);}
 assert.equal(rigs[2].captive.expressions.happy.visible,false,'the unsaved PM never joins the celebration');
 const heights=[[],[]];
 for(let frame=0;frame<180;frame++){
  chairs[0].position.z+=.006;chairs[1].position.z+=.005;parade.update(10+frame/60,eye);scene.updateMatrixWorld(true);
  for(let i=0;i<2;i++){
   const r=rigs[i];heights[i].push(r.captive.position.y);assert.equal(r.hanger.parent,chairs[i]);assert.equal(r.captive.visible,true);assert.equal(r.transformation.skeleton.visible,false);
   const center=r.captive.localToWorld(new THREE.Vector3());r.captive.traverse(o=>{if(!o.isMesh)return;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m.clippingPlanes)assert.ok(m.clippingPlanes[0].distanceToPoint(center)>0,'the entire living center stays above its moving dissolve plane');});
  }
 }
 assert.ok(Math.max(...heights[0])-Math.min(...heights[0])>.14);assert.notDeepEqual(heights[0],heights[1],'their bounces are staggered');
 parade.reset();for(let i=0;i<3;i++){assert.ok(rigs[i].captive.position.equals(original[i].p));assert.ok(rigs[i].captive.quaternion.equals(original[i].q));assert.ok(rigs[i].captive.scale.equals(original[i].s));assert.equal(rigs[i].captive.expressions.happy.visible,false);assert.equal(rigs[i].sling.visible,true);}
 rigs[1].rescued=false;parade.start(20);assert.equal(parade.count,1,'a one-survivor win celebrates only that survivor');
 parade.update(23,eye,true);const p=rigs[0].captive.position.clone();parade.update(25,eye,true);assert.ok(rigs[0].captive.position.equals(p),'reduced motion keeps the happy expression without bouncing');
}));

test('results wait until the last chair is outside and the final celebration has played',()=>{
 const parade=createVictoryParade({rigs:[]});parade.start(0);
 assert.equal(parade.readyForResults(12,false),false);assert.equal(parade.readyForResults(13,true),false);assert.equal(parade.readyForResults(14.7,true),false);assert.equal(parade.readyForResults(14.81,true),true);
 parade.reset();parade.start(30);assert.equal(parade.readyForResults(31,true,true),false);assert.equal(parade.readyForResults(31.61,true,true),true);
});
