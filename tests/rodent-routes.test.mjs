import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {floorRoutes,isRodentShadow,createFloorRodents} from '../dist/floor-rodents.js';

const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
test('rodent paths stay in shadow and clear of the moving camera and furniture',()=>{
 const room=new THREE.Group(),obstacle=new THREE.Mesh(new THREE.BoxGeometry(.6,.5,.6));
 obstacle.position.set(0,.25,-2.7);room.add(obstacle);
 const routes=floorRoutes(room);
 for(const viewer of [{x:1.85221,z:3.1149},{x:-2,z:-.5},{x:2.5,z:-2.5}]){
  let cell=routes.closest(-2.8,-2.8,viewer);
  for(let n=0;n<40;n++){
   const path=routes.path(cell.id,()=>((n*17)%41)/41,viewer);
   assert.ok(path.length,'a usable shadow route exists');
   for(const point of path){
    assert.ok(isRodentShadow(point.x,point.z));
    assert.ok(distance(point,viewer)>=3);
    assert.ok(Math.abs(point.x)>.45||Math.abs(point.z+2.7)>.45);
   }
   cell=path.at(-1);
  }
 }
});

test('a camera approaching a paused rodent triggers an outward escape',()=>{
 const routes=floorRoutes(new THREE.Group()),origin=routes.closest(0,-2.7),viewer={x:.3,z:-2.2};
 const path=routes.path(origin.id,()=>.6,viewer);assert.ok(path.length);
 let clearance=distance(origin,viewer);
 for(const point of path){
  const next=distance(point,viewer);
  assert.ok(next>=3||next>clearance);clearance=next;
 }
 assert.ok(clearance>=3);
});

test('fast dashes cross multiple navigation cells on mobile ticks and hide before the foreground',()=>{
 const previousDocument=globalThis.document;
 const paint={fillRect(){},beginPath(){},moveTo(){},lineTo(){},stroke(){}};
 globalThis.document={createElement:()=>({getContext:()=>paint})};
 try{
  const viewer={x:1.85221,z:3.1149};
  const rodents=createFloorRodents({room:new THREE.Group(),floorSupport:()=>0,viewerPosition:viewer,seed:23});
  const body=rodents.group.getObjectByName('Furry rat and mouse bodies'),matrix=new THREE.Matrix4(),position=new THREE.Vector3(),last=new THREE.Vector3();
  body.getMatrixAt(0,matrix);last.setFromMatrixPosition(matrix);let maxStride=0;
  for(let tick=1;tick<450;tick++){
   rodents.update(tick/15,false,viewer);body.getMatrixAt(0,matrix);position.setFromMatrixPosition(matrix);
   maxStride=Math.max(maxStride,position.distanceTo(last));last.copy(position);
   assert.ok(distance(position,viewer)>2.8);
  }
  assert.ok(maxStride>.2,'a fast stride is not capped to one 0.18-unit grid cell');
  rodents.update(30,true,{x:position.x,z:position.z});body.getMatrixAt(0,matrix);
  assert.equal(matrix.determinant(),0,'a nearby rodent is concealed');
 }finally{
  if(previousDocument===undefined)delete globalThis.document;else globalThis.document=previousDocument;
 }
});
