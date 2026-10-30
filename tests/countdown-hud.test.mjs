import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createCountdownHUD} from '../dist/countdown-hud.js';
import {createCountdownClock} from '../dist/countdown-clock.js';
import {createFigpalRounds} from '../dist/figpal-rounds.js';

function setup(reducedMotion=false){
 const group=new THREE.Group(),display=new THREE.Mesh(new THREE.PlaneGeometry(.46,.136),new THREE.MeshBasicMaterial());group.add(display);
 const camera=new THREE.PerspectiveCamera(60,1,.01,30);camera.position.z=2;camera.lookAt(0,0,0);
 const timer={group,display,status:'running'},corner={hidden:true,textContent:''},warning={hidden:true,textContent:''},occluders=[group];
 const hud=createCountdownHUD({timer,camera,occluders,corner,warning,reducedMotion});return {hud,timer,camera,corner,warning,occluders};
}
test('corner timer follows the actual readout visibility, including occlusion and its rear face',()=>{
 const {hud,timer,camera,corner,occluders}=setup();
 hud.update(0,120);assert.equal(corner.hidden,true);
 camera.lookAt(4,0,2);hud.update(.3,120);assert.equal(corner.hidden,false);assert.equal(corner.textContent,'02:00');
 camera.lookAt(0,0,0);hud.update(.6,120);assert.equal(corner.hidden,true);
 const blocker=new THREE.Mesh(new THREE.BoxGeometry(1,1,.1),new THREE.MeshBasicMaterial());blocker.position.z=1;blocker.updateMatrixWorld();occluders.push(blocker);
 hud.update(.9,120);assert.equal(corner.hidden,false);
 blocker.visible=false;hud.update(1.2,120);assert.equal(corner.hidden,true);
 timer.group.rotation.y=Math.PI;hud.update(1.5,120);assert.equal(corner.hidden,false);
});
test('last five seconds pulse once per second independently of floor visibility, and stop at zero',()=>{
 const {hud,warning,corner,timer}=setup();hud.update(0,6);assert.equal(warning.hidden,true);
 for(let second=5;second>0;second--){const time=6-second;
  hud.update(time,second);assert.equal(corner.hidden,true);assert.equal(warning.hidden,false);assert.equal(warning.textContent,`00:0${second}`);
  hud.update(time+.6,second);assert.equal(warning.hidden,true);
 }
 timer.status='finished';hud.update(6,0);assert.equal(warning.hidden,true);
 hud.update(7,0,{enabled:false});assert.equal(corner.hidden,true);assert.equal(warning.hidden,true);
});
test('inspection overlays retain a corner timer; retry and reduced motion have predictable warning states',()=>{
 const {hud,timer,corner,warning}=setup(true);
 timer.status='waiting';hud.update(0,600);assert.equal(corner.hidden,true);assert.equal(warning.hidden,true);
 timer.status='running';hud.update(1,5,{forceCorner:true});assert.equal(corner.hidden,false);assert.equal(warning.hidden,false);
 hud.update(1.9,5);assert.equal(warning.hidden,false,'reduced motion leaves the warning steady');
 hud.hide();assert.equal(corner.hidden,true);assert.equal(warning.hidden,true);
 hud.update(2,600);assert.equal(warning.hidden,true);assert.equal(corner.textContent,'10:00');
});

test('seated survivors suppress both center warnings while the corner clock and twenty-minute loss still work',()=>{
 for(const reducedMotion of[false,true]){
  const {hud,timer,corner,warning}=setup(reducedMotion);let now=0;
  const clock=createCountdownClock(undefined,()=>now),rescued=new Set([2,0]);
  const rounds=createFigpalRounds({movingIndex:null,isRescued:i=>rescued.has(i),lower(){assert.fail('a seated Figpal must not be lowered');}},clock,{dropOrder:[2,0,1]});
  Object.defineProperty(timer,'status',{get:()=>clock.status});clock.start();
  for(const start of[0,600]){
   for(now=start+595;now<start+600;now++){
    assert.equal(rounds.update(now),null);
    hud.update(now,clock.remainingSeconds,{forceCorner:true,warningEnabled:rounds.willLowerNext});
    assert.equal(warning.hidden,true);assert.equal(corner.hidden,false);assert.equal(corner.textContent,`00:0${start+600-now}`);
   }
   assert.equal(rounds.update(now).type,start===0?'restart':'ending');
  }
  now=1205.2;assert.deepEqual(rounds.update(now),{type:'gameover'});
 }
});

test('a last-second rescue clears the active pulse, other unrescued Figpals still warn, and retry restores warnings',()=>{
 const {hud,warning}=setup();let now=0;const rescued=new Set();
 const clock=createCountdownClock(undefined,()=>now),rounds=createFigpalRounds({movingIndex:null,isRescued:i=>rescued.has(i),reset(){rescued.clear();}},clock,{dropOrder:[1,2,0]});
 clock.start();now=595;hud.update(now,5,{warningEnabled:rounds.willLowerNext});assert.equal(warning.hidden,false);
 rescued.add(1);hud.update(now+.1,5,{warningEnabled:rounds.willLowerNext});assert.equal(warning.hidden,true);
 now=600;assert.equal(rounds.update(now).type,'restart');
 now=1195;hud.update(now,5,{warningEnabled:rounds.willLowerNext});
 now=1196;hud.update(now,4,{warningEnabled:rounds.willLowerNext});assert.equal(warning.hidden,false);
 rescued.add(2);hud.update(now+.1,4,{warningEnabled:rounds.willLowerNext});assert.equal(warning.hidden,true);
 rounds.reset();clock.reset();clock.start();hud.hide();
 now+=595;hud.update(now,5,{warningEnabled:rounds.willLowerNext});assert.equal(warning.hidden,false);
});
