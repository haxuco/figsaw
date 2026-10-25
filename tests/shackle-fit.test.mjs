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
