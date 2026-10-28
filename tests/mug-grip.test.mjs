import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createMugTrap,MUG_VISION_SECONDS} from '../dist/mug-trap.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';

function fixture(fov=62,aspect=16/9){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(fov,aspect,.06,35);
 camera.position.set(1.85,.82,3.11);camera.lookAt(1.15,.75,2.4);camera.updateMatrixWorld();
 const mug=new THREE.Group();mug.scale.setScalar(.72);mug.position.set(.24,.11,3.02);mug.rotation.set(.1,-.5,1.5);scene.add(mug);
 // Match the nested body and rotated ears of the real floor prop.
 const body=new THREE.Group();body.position.y=-.135;mug.add(body);
 const handle=new THREE.Object3D();handle.name='Mug handle grip';handle.position.set(-.249,.141,0);body.add(handle);
 for(const side of[-1,1]){
  const ear=new THREE.Group();ear.position.set(side*.095,.235,.103);ear.rotation.set(-.06,side*Math.atan2(.095,.103),-side*.10);body.add(ear);
  const tip=new THREE.Object3D();tip.name=side<0?'Mug left ear tip':'Mug right ear tip';tip.position.y=.142;ear.add(tip);
 }
 const restraint=createPlayerRestraint(camera);scene.add(restraint.group);
 const trap=createMugTrap({mug,camera,restraint});return {scene,camera,mug,restraint,trap};
}

test('both visible ear tips approach the eye marks throughout the sip on desktop and mobile',()=>{
 for(const fov of[62,48.36])for(const aspect of[16/9,390/844]){
  const {camera,mug,restraint,trap}=fixture(fov,aspect);restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
  trap.update(6.2);
  const face=new THREE.Vector3(0,0,1).applyQuaternion(mug.getWorldQuaternion(new THREE.Quaternion())).applyQuaternion(camera.quaternion.clone().invert());
  assert.ok(face.z<-.999,'the mug must turn 180 degrees before drinking');
  let previousWidth=0;
  for(const elapsed of[2.12,2.5,3.0,3.70,4.05]){
   trap.update(4+elapsed);
   const tips=['Mug left ear tip','Mug right ear tip'].map(name=>mug.getObjectByName(name).getWorldPosition(new THREE.Vector3()).project(camera));
   const width=Math.abs(tips[1].x-tips[0].x);assert.ok(width>=previousWidth-1e-6,'the tips must approach the viewer');previousWidth=width;
   for(const tip of tips){assert.ok(Math.abs(tip.y-.08)<1e-6,'ear drops below the eye line');assert.ok(tip.z>-1&&tip.z<1,'ear is clipped before impact');}
   if(elapsed===4.05)for(const tip of tips)assert.ok(Math.abs(Math.abs(tip.x)-.82)<1e-6,'each ear must meet its red eye mark');
  }
  trap.update(8.33);assert.equal(trap.eyeImpact,1);assert.equal(trap.eyeDarkness,0,'the red contact dots appear before the dark gradients');
  trap.reset();assert.equal(trap.start(10),true);trap.update(14.05);
  const tip=mug.getObjectByName('Mug left ear tip').getWorldPosition(new THREE.Vector3()).project(camera);
  assert.ok(Math.abs(Math.abs(tip.x)-.82)<1e-6,'reset must preserve the same eye alignment');
 }
});

test('mug pickup moves the prop without revealing the unlocked hand or chain',()=>{
 for(const fov of [62,48.36]){
  const {mug,restraint,trap}=fixture(fov),home=mug.position.clone();restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
  for(const elapsed of [.82,1.2,1.8,2.2,2.8,3.25,4.0]){
   trap.update(4+elapsed);restraint.update(4+elapsed,false,true,trap.handPose);
   assert.equal(restraint.group.getObjectByName('Cartoon forearm and right hand').visible,false);
   assert.equal(restraint.group.getObjectByName('Camera-relative reaching hand').visible,false);
   if(elapsed>1.2)assert.ok(mug.position.distanceTo(home)>.1,'the mug must still lift from the floor');
  }
 }
});

test('the mug needs a free wrist, returns to the floor, and releases control before vision recovers',()=>{
 const {mug,restraint,trap}=fixture(),home=mug.position.clone(),rotation=mug.quaternion.clone();
 assert.equal(trap.start(0),false);
 restraint.requestReach(0);restraint.update(.7);restraint.detach(1);assert.equal(trap.start(4),true);
 assert.equal(trap.update(10.3),false);assert.equal(trap.active,false);assert.equal(trap.recovering,true);
 assert.ok(home.distanceTo(mug.position)<1e-7);assert.ok(rotation.angleTo(mug.quaternion)<1e-7);
 assert.equal(trap.handPose,null);assert.equal(trap.start(12),false,'another click cannot restart the recovery clock');
 assert.equal(trap.update(4+4.25+MUG_VISION_SECONDS),true);assert.equal(trap.finished,true);assert.equal(trap.eyeImpact,0);
 assert.equal(trap.update(100),false,'completion is emitted once');
 trap.reset();assert.equal(trap.start(101),true);
});

test('red dots become soft black blind spots and clear after thirty seconds without a fatal cue',()=>{
 const {restraint,trap}=fixture();restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
 const contact=4+4.25;
 trap.update(contact+.08);assert.equal(trap.eyeImpact,1);assert.equal(trap.eyeDarkness,0);
 trap.update(contact+1);assert.ok(trap.eyeDarkness>0&&trap.eyeDarkness<1);assert.equal(trap.eyeImpact,1);
 trap.update(contact+20);assert.equal(trap.eyeDarkness,1);assert.equal(trap.eyeImpact,1);assert.equal(trap.active,false);
 trap.update(contact+28.5);assert.ok(trap.eyeImpact>.4&&trap.eyeImpact<.6);assert.equal(trap.finished,false);
 assert.equal(trap.update(contact+30),true);assert.equal(trap.eyeImpact,0);assert.equal(trap.recovering,false);
 assert.equal(trap.blackout,undefined,'visual impairment must not cue the game-over transition');
});

test('contact follows the full close-up, and a retry immediately clears the visual effect',()=>{
 const {camera,mug,restraint,trap}=fixture();restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
 trap.update(8.20);assert.equal(trap.eyeImpact,0,'hold the close-up before the contact dots appear');
 const tip=mug.getObjectByName('Mug left ear tip').getWorldPosition(new THREE.Vector3()).project(camera);
 assert.ok(Math.abs(tip.x)>.81,'the cup fills the foreground before contact');
 trap.update(12);assert.equal(trap.eyeDarkness,1);trap.reset();
 assert.equal(trap.eyeGrowth,0);assert.equal(trap.eyeImpact,0);assert.equal(trap.eyeDarkness,0);assert.equal(trap.active,false);assert.equal(trap.recovering,false);
});

test('reduced motion skips pickup movement but keeps the full temporary recovery duration',()=>{
 const {mug,restraint,trap}=fixture(),home=mug.position.clone();restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
 trap.update(4.23,true);assert.equal(trap.eyeImpact,1);assert.equal(trap.eyeDarkness,0);
 trap.update(5,true);assert.equal(trap.active,false);assert.equal(trap.recovering,true);assert.ok(mug.position.distanceTo(home)<1e-7);
 assert.equal(trap.update(30,true),false);assert.equal(trap.eyeDarkness,1);
 assert.equal(trap.update(4+.15+MUG_VISION_SECONDS,true),true);assert.equal(trap.eyeImpact,0);
});
