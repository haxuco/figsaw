import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createMobilePuzzleState,createDoorKeypadState,ANIMAL_DIGITS} from '../dist/mobile-puzzle-state.js';
import {createFallenMobile} from '../dist/fallen-mobile.js';
import {createMobileInspection} from '../dist/mobile-inspection.js';
import {createMobileSupplies} from '../dist/mobile-supplies.js';
import {createFireAxe} from '../dist/fire-axe.js';

test('decorative axe grain does not intercept a ray aimed at the neighboring door keypad',()=>{
 const axe=createFireAxe();axe.mount.position.set(-.4,2.06,4.43);axe.mount.rotation.y=Math.PI;axe.mount.updateMatrixWorld(true);
 const origin=new THREE.Vector3(1.85221,.821615,3.1149),target=new THREE.Vector3(-1.96,1.22,4.395);
 const ray=new THREE.Raycaster(origin,target.sub(origin).normalize());assert.equal(ray.intersectObject(axe.mount,true).length,0);
});

function collect(state){for(const item of['scissors','string'])assert.equal(state.collect(item,{drawerReady:true}),true);}
test('supplies require a free wrist and an open ready drawer; cutting and restringing have distinct dependencies',()=>{
 const s=createMobilePuzzleState();assert.equal(s.inspect(true),false);assert.equal(s.collect('scissors',{locked:true,drawerReady:true}),false);assert.equal(s.collect('string'),false);assert.equal(s.collect('charger',{drawerReady:true}),false);
 assert.equal(s.inspect(),true);assert.equal(s.cut(0),false);assert.equal(s.restring(0),false);collect(s);assert.equal(s.collect('scissors',{drawerReady:true}),false);
 assert.equal(s.restring(1),false);assert.equal(s.cut(1),true);assert.equal(s.close(),false);assert.equal(s.cut(1.1),false);assert.equal(s.update(2),null);assert.equal(s.update(2.5),'cut');assert.equal(s.phase,'cut');assert.equal(s.has('string'),true);
 assert.equal(s.close(),true);assert.equal(s.restring(3),false);s.inspect();assert.equal(s.restring(3),true);assert.equal(s.update(4),null);assert.equal(s.update(5.1),'restring');assert.equal(s.phase,'repaired');assert.equal(s.has('string'),false);assert.equal(s.has('scissors'),true);assert.equal(s.restring(6),false);
 s.reset();assert.equal(s.phase,'tangled');assert.equal(s.active,false);assert.equal(s.action,null);assert.equal(s.has('scissors'),false);
});
test('reduced motion completes each repair step once, and interruption does not expose a half repaired clue',()=>{
 const s=createMobilePuzzleState();collect(s);s.inspect();s.cut(0);assert.equal(s.update(.25,true),'cut');assert.equal(s.update(.5,true),null);s.restring(1);s.close(true);assert.equal(s.active,false);assert.equal(s.phase,'cut');s.reset();assert.equal(s.phase,'tangled');s.inspect();assert.equal(s.cut(2),false);
});
test('keypad limits input and stays locked while the future ordering clue is unassigned',()=>{
 const k=createDoorKeypadState();assert.equal(k.configured,false);k.press('7',{locked:true});assert.equal(k.entry,'');
 for(const digit of'73821')k.press(digit);assert.equal(k.entry,'7382');assert.match(k.press('enter'),/animal order/);assert.equal(k.unlocked,false);assert.equal(k.entry,'');k.press('3');k.press('back');assert.equal(k.entry,'');assert.match(k.press('enter'),/four/);
});
test('a configured animal order unlocks only the matching digits and resets completely',()=>{
 const k=createDoorKeypadState({order:['Fox','Elephant','Pig','Tiger']});assert.equal(k.configured,true);
 for(const digit of'7382')k.press(digit);assert.match(k.press('enter'),/Incorrect/);assert.equal(k.unlocked,false);
 for(const digit of'2873')k.press(digit);assert.equal(k.press('enter'),'Door unlocked.');assert.equal(k.unlocked,true);k.reset();assert.equal(k.unlocked,false);assert.equal(k.entry,'');
});
function withCanvas(fn){const previous=globalThis.document;const gradient={addColorStop(){}};const ctx=new Proxy({createRadialGradient:()=>gradient,createLinearGradient:()=>gradient},{get:(t,k)=>k in t?t[k]:()=>{}});globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>ctx})};try{fn();}finally{globalThis.document=previous;}}
test('actual repaired mobile shows four underside patches, follows the camera, restores its floor pose and supplies reset',()=>withCanvas(()=>{
 const mobile=createFallenMobile(new THREE.Vector3(1.85,.82,3.11),()=>.012),state=createMobilePuzzleState(),camera=new THREE.PerspectiveCamera(62,1,.06,35);camera.position.set(1.85,.82,3.11);camera.lookAt(1,.7,2);camera.updateMatrixWorld();
 const inspect=createMobileInspection({mobile,state,camera}),supplies=createMobileSupplies(new THREE.Group()),scene=new THREE.Scene();scene.add(mobile.group,inspect.group);
 for(const animal of mobile.animals){const patch=animal.object.getObjectByName(`Stitched ${ANIMAL_DIGITS[animal.kind]} under ${animal.kind}`);assert.ok(patch);assert.ok(new THREE.Vector3(0,0,1).applyQuaternion(patch.quaternion).y<-.999);}
 state.inspect();inspect.update(0,true);assert.equal(mobile.group.visible,false);assert.equal(inspect.group.visible,true);assert.equal(inspect.underneath,false);
 const patches=[];inspect.group.traverse(o=>{if(o.name.startsWith('Stitched '))patches.push(o);});assert.equal(patches.length,4);assert.ok(patches.every(o=>!o.visible));
 collect(state);supplies.sync(state);assert.equal(supplies.objects.scissors.visible,false);assert.equal(supplies.objects.string.visible,false);
 state.cut(0);inspect.update(.3,true);assert.equal(mobile.tangled.visible,false);assert.ok(mobile.strings.every(o=>!o.visible));state.restring(.4);inspect.update(.7,true);assert.equal(state.phase,'repaired');assert.equal(inspect.underneath,false);
 inspect.view('under');inspect.update(.8,true);assert.equal(inspect.underneath,true);assert.ok(mobile.strings.every(o=>o.visible));assert.ok(patches.every(o=>o.visible));
 const local=inspect.group.position.clone().applyMatrix4(camera.matrixWorld.clone().invert());assert.ok(local.distanceTo(new THREE.Vector3(0,.045,-1.65))<1e-7);
 state.close();inspect.update(1,true);assert.equal(mobile.group.visible,true);assert.equal(inspect.group.visible,false);state.reset();inspect.reset();supplies.sync(state);assert.equal(mobile.tangled.visible,true);assert.equal(supplies.objects.string.visible,true);assert.equal(supplies.objects.scissors.visible,true);
}));
