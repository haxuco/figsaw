import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';

// Inspect the rendered geometry, including the ink shells, across the entire
// reach/strain/retract animation. A fitted cuff must enclose all skin within
// its full axial width, not just the wrist center.
test('cuff clears the palm and curved forearm throughout restrained reaching',()=>{
 const camera=new THREE.PerspectiveCamera(62,1,.06,35),r=createPlayerRestraint(camera);
 const cuff=r.group.getObjectByName('Close-fitting oval wrist cuff'),hand=r.group.getObjectByName('Cartoon right hand'),forearm=r.group.getObjectByName('Full curved forearm');
 const inv=new THREE.Matrix4(),v=new THREE.Vector3();
 r.requestReach(0);
 for(const fov of[62,48.36]){
  camera.fov=fov;camera.position.set(1.85,.82,3.11);camera.lookAt(1.15,.75,2.4);camera.updateMatrixWorld();
  for(let t=.04;t<5.15;t+=.08){
   r.update(t);r.group.updateMatrixWorld(true);inv.copy(cuff.matrixWorld).invert();
   for(const root of[hand,forearm])root.traverse(m=>{
    if(!m.isMesh)return;
    const pos=m.geometry.attributes.position;
    for(let i=0;i<pos.count;i++){
     v.fromBufferAttribute(pos,i).applyMatrix4(m.matrixWorld).applyMatrix4(inv);
     if(Math.abs(v.z)>.025)continue;
     assert.ok((v.x/.0494)**2+(v.y/.0374)**2<.96,`skin/cuff intersection at ${t}s`);
    }
   });
  }
 }
});

test('hinged cuff keeps its offset on release and opens clear of the wrist',()=>{
 const camera=new THREE.PerspectiveCamera(62,1,.06,35),r=createPlayerRestraint(camera);
 const cuff=r.group.getObjectByName('Close-fitting oval wrist cuff'),hand=r.group.getObjectByName('Cartoon right hand'),gate=r.group.getObjectByName('Hinged upper cuff');
 const inv=new THREE.Matrix4(),v=new THREE.Vector3();
 r.requestReach(0);r.update(.7);const start=cuff.position.clone();r.detach(1);r.update(1,false,true);
 assert.ok(start.distanceTo(cuff.position)<1e-7,'the cuff must not jump back onto the palm');
 for(let t=1;t<2.7;t+=.025){
  r.update(t,false,true);r.group.updateMatrixWorld(true);inv.copy(hand.matrixWorld).invert();
  cuff.traverse(m=>{
   if(!m.isMesh||m.material.opacity===0)return;
   const pos=m.geometry.attributes.position;
   for(let i=0;i<pos.count;i++){
    v.fromBufferAttribute(pos,i).applyMatrix4(m.matrixWorld).applyMatrix4(inv);
    if(v.z<0||v.z>.075)continue;
    const rx=.038+.009*v.z/.075,ry=.026+.007*v.z/.075;
    assert.ok((v.x/(rx+.0015))**2+(v.y/(ry+.0015))**2>1,`metal entered wrist during release at ${t}s`);
   }
  });
  if(t>1.54)assert.ok(gate.rotation.z>1.94);
 }
});

test('raised pipe anchor keeps the chain clear of the arm throughout reaching',()=>{
 const camera=new THREE.PerspectiveCamera(62,1,.06,35),r=createPlayerRestraint(camera);
 const arm=r.group.getObjectByName('Cartoon forearm and right hand'),chain=r.group.getObjectByName('Heavy interlocking wrist chain');
 const anchor=r.group.getObjectByName('Raised wrist-chain pipe anchor');
 const matrix=new THREE.Matrix4(),a=new THREE.Vector3(),b=new THREE.Vector3(),direction=new THREE.Vector3(),ray=new THREE.Raycaster();
 camera.position.set(1.85221,.821615,3.1149);
 assert.ok(anchor.position.y>camera.position.y+1,'the chain attaches above the viewer on the rear pipe');
 for(const fov of[62,48.36])for(const turn of[-.6,0,.6]){
  camera.fov=fov;camera.lookAt(1.155084,.748275,2.401713);camera.rotateY(turn);camera.updateMatrixWorld();r.reset();r.requestReach(0);
  for(const time of[.08,.3,.55,.8,1.25,2,4.9]){
   r.update(time);r.group.updateMatrixWorld(true);
   arm.traverse(object=>{if(object.isMesh){object.geometry.computeBoundingSphere();object.geometry.computeBoundingBox();}});
   chain.getMatrixAt(chain.count-1,matrix);b.setFromMatrixPosition(matrix).applyMatrix4(chain.matrixWorld);
   assert.ok(b.distanceTo(anchor.getWorldPosition(a))<1e-6,'the far link must remain attached to the pipe');
   for(let i=0;i<chain.count-1;i++){
    chain.getMatrixAt(i,matrix);a.setFromMatrixPosition(matrix).applyMatrix4(chain.matrixWorld);
    chain.getMatrixAt(i+1,matrix);b.setFromMatrixPosition(matrix).applyMatrix4(chain.matrixWorld);
    direction.subVectors(b,a);ray.far=direction.length();ray.set(a,direction.normalize());
    assert.equal(ray.intersectObject(arm,true).length,0,`chain crosses the arm at ${time}s, turn ${turn}, FOV ${fov}`);
   }
  }
 }
});
