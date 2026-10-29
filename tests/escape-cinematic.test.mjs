import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createExitDoorMotion,createEscapeCinematic,escapeDoorAngle} from '../dist/escape-cinematic.js';

function fixture(aspect=16/9){
 const frame=new THREE.Group(),hinge=new THREE.Group();frame.position.set(-1.2,0,4.43);frame.rotation.y=Math.PI;frame.add(hinge);
 const light=new THREE.PointLight(),door=createExitDoorMotion({object:hinge,frame,light});
 const camera=new THREE.PerspectiveCamera(62,aspect,.06,35),position=new THREE.Vector3(1.85,.82,3.11),state={yaw:1.9,pitch:.1,zoom:.78};
 const shot=createEscapeCinematic({camera,position,state,door,baseFov:62});return {frame,hinge,light,door,camera,position,state,shot};
}

test('winning cuts straight to the hallway with the door fully open on the first frame',()=>{
 const f=fixture();assert.equal(f.shot.update(),false);f.shot.start(10);
 assert.ok(f.camera.position.z>8.5);assert.equal(f.hinge.rotation.y,1.84);assert.ok(f.light.intensity>2.4);
 const pose=f.camera.quaternion.clone(),position=f.position.clone();
 for(const time of [10,10.1,10.9,11.4,12.25,14.8]){
  assert.equal(f.shot.update(time),true,'the chair exit can begin immediately');f.door.update(time);
  assert.equal(f.hinge.rotation.y,1.84,'the door never shuts or replays its opening');assert.ok(f.position.distanceTo(position)<1e-9);assert.ok(f.camera.quaternion.angleTo(pose)<1e-7);
 }
 f.door.reset();f.shot.reset();assert.equal(f.hinge.rotation.y,0);assert.equal(f.light.intensity,0);assert.equal(f.shot.active,false);assert.equal(f.shot.update(),false);
});

test('door and camera motion depend on elapsed time instead of desktop or mobile frame counts',()=>{
 const run=hz=>{const f=fixture();f.shot.start(0);for(let i=0;i<=hz*2;i++){f.shot.update(i/hz);f.door.update(i/hz);}return f;};
 const low=run(24),high=run(120);assert.ok(low.position.distanceTo(high.position)<1e-9);assert.ok(low.camera.quaternion.angleTo(high.camera.quaternion)<1e-7);assert.equal(low.hinge.rotation.y,high.hinge.rotation.y);
 assert.equal(escapeDoorAngle(0),0);assert.equal(escapeDoorAngle(100),1.84);
});

test('reduced motion also starts outside immediately with a steady hallway camera',()=>{
 const f=fixture();f.shot.start(20);assert.equal(f.shot.update(20,true),true);f.door.update(20,true);assert.equal(f.hinge.rotation.y,1.84);
 const pose=f.camera.quaternion.clone(),position=f.position.clone();assert.ok(position.z>8.5);
 assert.equal(f.shot.update(20.5,true),true);assert.ok(position.distanceTo(f.position)<1e-9);assert.ok(pose.angleTo(f.camera.quaternion)<1e-7);
});

test('the outward door sweep clears all waiting chairs and the settled leaf clears the whole exit route',async()=>{
 const {EXIT_DOOR_HINGE,EXIT_DOOR_LEAF_OFFSET}=await import('../dist/escape-cinematic.js');
 const {EXIT_STAGING,planChairTow}=await import('../dist/chair-tow.js');
 const f=fixture(),leaf=new THREE.Group();f.hinge.position.set(...EXIT_DOOR_HINGE);leaf.position.set(...EXIT_DOOR_LEAF_OFFSET);f.hinge.add(leaf);
 const local=new THREE.Vector3();
 // Separate footprints preserve the actual handle position, rather than
 // inflating the hinge side by a handle that exists only on the latch side.
 const footprints=[[-.56,.56,-.021,.021],[-.518,.518,-.002,.046],[-.56,-.48,.047,.092],[.18,.38,.075,.14]];
 const clearance=p=>{f.frame.updateWorldMatrix(true,true);leaf.worldToLocal(local.copy(p));return Math.min(...footprints.map(([left,right,back,front])=>Math.hypot(Math.max(left-local.x,0,local.x-right),Math.max(back-local.z,0,local.z-front))));};
 f.door.unlock(0);
 for(let i=0;i<=600;i++){f.door.update(i/120);for(const p of EXIT_STAGING)assert.ok(clearance(p)>.48,'waiting chairs stay outside the entire moving leaf');}
 const chairs=EXIT_STAGING.map(p=>{const c=new THREE.Group();c.position.copy(p);return c;}),plan=planChairTow(chairs,[],{exit:true});assert.ok(plan);
 for(const move of plan)for(let i=0;i<=240;i++)assert.ok(clearance(move.route.getPoint(i/240,new THREE.Vector3()))>.48,'the open door clears the rolling chair and its casters');
});

test('the bright hallway is hidden behind the closed door and restored correctly on retry',()=>{
 const f=fixture(),scenery=new THREE.Group(),door=createExitDoorMotion({object:f.hinge,frame:f.frame,light:f.light,scenery});
 assert.equal(scenery.visible,false);door.unlock(0);door.update(.5);assert.equal(scenery.visible,false);door.update(2);assert.equal(scenery.visible,true);door.reset();assert.equal(scenery.visible,false);
});

test('wall stains have a real doorway cutout instead of floating across the open hallway',async()=>{
 const {entranceWallOverlayGeometry}=await import('../dist/coworking-hallway.js');
 const overlay=new THREE.Mesh(entranceWallOverlayGeometry(),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));overlay.position.y=1.675;overlay.updateMatrixWorld(true);
 const ray=new THREE.Raycaster();
 for(const x of [.67,1.2,1.73])for(const y of [.1,1.1,2.30]){ray.set(new THREE.Vector3(x,y,1),new THREE.Vector3(0,0,-1));assert.equal(ray.intersectObject(overlay).length,0);}
 ray.set(new THREE.Vector3(0,1.5,1),new THREE.Vector3(0,0,-1));assert.ok(ray.intersectObject(overlay).length>0);
});

test('hallway walls and ceiling begin beyond the rear wall so they cannot peek into the haunted room',async()=>{
 const {createCoworkingHallway}=await import('../dist/coworking-hallway.js');
 const previous=globalThis.document,gradient={addColorStop(){}},ctx=new Proxy({createRadialGradient:()=>gradient},{get:(o,k)=>k in o?o[k]:()=>{}});
 globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>ctx})};
 try{
  const f=fixture(),hallway=createCoworkingHallway();f.frame.add(hallway);f.frame.updateWorldMatrix(true,true);const p=new THREE.Vector3();
  hallway.traverse(o=>{if(!o.isMesh)return;const positions=o.geometry.attributes.position;for(let i=0;i<positions.count;i++){p.fromBufferAttribute(positions,i).applyMatrix4(o.matrixWorld);if(p.y>.1)assert.ok(p.z>=4.64,'ceiling and furniture stay beyond the back of the wall');}});
  const ray=new THREE.Raycaster(new THREE.Vector3(-1.2,.003,8.10),new THREE.Vector3(0,-1,0));assert.ok(ray.intersectObject(hallway,true).length,'the lead chair has a floor beneath it at the end of the exit route');
 }finally{globalThis.document=previous;}
});

test('the hallway shot keeps both passengers visible on portrait and landscape screens before showing results',()=>{
 for(const aspect of [.4,.55,1,16/9]){
  const f=fixture(aspect);f.shot.start(0);f.shot.update(0);f.door.update(0);f.camera.updateMatrixWorld(true);
  assert.ok(f.camera.position.z>8.5,'the victory camera watches the riders from inside the hallway');
  for(const z of [5.78,6.94])for(const y of [.55,1.35]){const p=new THREE.Vector3(-1.2,y,z).project(f.camera);assert.ok(Math.abs(p.x)<.95&&Math.abs(p.y)<.95,'both saved characters fit in the shot');}
  assert.ok(f.light.intensity>2.4,'the existing doorway light now illuminates their faces');f.door.reset();assert.equal(f.light.intensity,0);assert.ok(f.light.position.equals(new THREE.Vector3()));
 }
});

test('winning keeps an already-unlocked door open while cutting to the hallway',()=>{
 const f=fixture();f.door.unlock(0);f.door.update(8);assert.equal(f.hinge.rotation.y,1.84);
 f.shot.start(10);assert.ok(f.camera.position.z>8.5);f.door.update(10);assert.equal(f.hinge.rotation.y,1.84);f.door.update(12.25);assert.equal(f.hinge.rotation.y,1.84);
});
