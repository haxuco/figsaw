import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createMobilePuzzleState,createDoorKeypadState,ANIMAL_DIGITS} from '../dist/mobile-puzzle-state.js';
import {createFallenMobile} from '../dist/fallen-mobile.js';
import {createMobileInspection} from '../dist/mobile-inspection.js';
import {createMobileSupplies} from '../dist/mobile-supplies.js';
import {createMobileCamera} from '../dist/mobile-camera.js';
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
test('the actual toys hang in a fixed room position, with rear numbers facing down and a complete floor reset',()=>withCanvas(()=>{
 const mobile=createFallenMobile(new THREE.Vector3(1.85,.82,3.11),()=>.012),state=createMobilePuzzleState();
 const home=mobile.animals.map(a=>({position:a.object.position.clone(),quaternion:a.object.quaternion.clone(),scale:a.object.scale.clone()}));
 const inspect=createMobileInspection({mobile,state}),supplies=createMobileSupplies(new THREE.Group()),scene=new THREE.Scene();scene.add(mobile.group,inspect.group);
 for(const animal of mobile.animals){const patch=animal.object.getObjectByName(`Stitched ${ANIMAL_DIGITS[animal.kind]} under ${animal.kind}`);assert.ok(patch);patch.geometry.computeBoundingBox();const bounds=patch.geometry.boundingBox;assert.ok(bounds.min.z>.12,'number is on the rear haunches');assert.ok(bounds.max.y<.10,'number sits below the tail');}
 state.inspect();inspect.update(0,true);assert.equal(mobile.group.visible,false);assert.equal(inspect.group.visible,true);
 const patches=[];inspect.group.traverse(o=>{if(o.name.startsWith('Stitched '))patches.push(o);});assert.equal(patches.length,4);assert.ok(patches.every(o=>!o.visible));
 collect(state);supplies.sync(state);assert.equal(supplies.objects.scissors.visible,false);assert.equal(supplies.objects.string.visible,false);
 state.cut(0);inspect.update(.3,true);state.restring(.4);inspect.update(.7,true);assert.equal(state.phase,'repaired');assert.ok(patches.every(o=>o.visible));
 scene.updateMatrixWorld(true);
 for(const animal of mobile.animals){const normal=new THREE.Vector3(0,0,1).applyQuaternion(animal.object.getWorldQuaternion(new THREE.Quaternion()));assert.ok(normal.y<-.999,'rear faces below the hanging animal');}
 const fixed=inspect.group.position.clone();state.close();inspect.update(1,true);assert.equal(inspect.group.visible,true);assert.equal(mobile.group.visible,false);assert.ok(inspect.group.position.equals(fixed));
 state.reset();inspect.reset();supplies.sync(state);assert.equal(mobile.group.visible,true);assert.equal(inspect.group.visible,false);assert.equal(supplies.objects.string.visible,true);assert.equal(supplies.objects.scissors.visible,true);
 for(const [i,animal] of mobile.animals.entries()){assert.equal(animal.object.parent,mobile.group);assert.ok(animal.object.position.equals(home[i].position));assert.ok(animal.object.quaternion.angleTo(home[i].quaternion)<1e-7);assert.ok(animal.object.scale.equals(home[i].scale));}
}));

test('inspection camera moves above and beneath the fixed mobile on an arc, then returns to the saved room view',()=>{
 const position=new THREE.Vector3(1.85221,.821615,3.1149),state={yaw:-.8,pitch:.1,zoom:.78},home={position:position.clone(),...state},target=new THREE.Vector3(-1.05,1.32,.55);
 const camera=createMobileCamera({position,state,getTarget:out=>out.copy(target)});
 camera.view('above',0);camera.update(1.2);assert.ok(position.y>target.y+1);assert.equal(camera.underneath,false);
 camera.view('under',2);for(let t=2;t<3.2;t+=.05){camera.update(t);assert.ok(position.distanceTo(target)>1.4,'camera orbits outside the toys instead of passing through them');assert.ok(position.y>=.159&&position.y<3.2);}
 assert.equal(camera.underneath,true);assert.ok(position.y<target.y-1);camera.restore(4);camera.update(5);assert.equal(camera.active,false);assert.ok(position.equals(home.position));assert.equal(state.yaw,home.yaw);assert.equal(state.pitch,home.pitch);assert.equal(state.zoom,home.zoom);
});
test('portrait inspection stays inside the room and a forced interruption restores the player before other camera sequences',()=>{
 const position=new THREE.Vector3(1.8,.8,3.1),state={yaw:0,pitch:0,zoom:1},home=position.clone(),target=new THREE.Vector3(-1.05,1.32,.55);
 const camera=createMobileCamera({position,state,getTarget:out=>out.copy(target),aspect:()=>.48});camera.view('under',0);camera.update(0,true);assert.ok(position.y>=.159);assert.ok(position.z<4.2);assert.equal(camera.underneath,true);camera.drag(100,20,1);camera.update(2.2);assert.ok(position.distanceTo(target)>2);
 camera.restore(3,true);assert.ok(position.equals(home));assert.equal(camera.active,false);camera.reset();camera.update(4);assert.ok(position.equals(home));
});
