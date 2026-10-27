import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createObjectInspectionCamera} from '../dist/object-inspection-camera.js';
import {createFigpalTransformation} from '../dist/figpal-transformation.js';
import {createDoorKeypadUI} from '../dist/door-keypad.js';
import {wornPaperGeometry} from '../dist/wall-decay.js';
import {createEscapePuzzle} from '../dist/mobile-puzzle-state.js';
function fixture(aspect=1.5){const position=new THREE.Vector3(1.8,.8,3.1),state={yaw:.7,pitch:-.1,zoom:.78};return {position,state,view:createObjectInspectionCamera({position,state,aspect:()=>aspect})};}
for(const [name,rotation]of[['back wall',[0,0,0]],['rear wall',[0,Math.PI,0]],['left wall',[0,Math.PI/2,0]],['floor',[-Math.PI/2,0,0]]])test(`inspection frames the real ${name} and restores the original pose`,()=>{
 const {view,position,state}=fixture(),home=position.clone(),original={...state},doc=new THREE.Mesh(new THREE.PlaneGeometry(1.8,1.1));doc.position.set(-1,name==='floor'?.01:2,-3);doc.rotation.set(...rotation);view.show(doc,0);view.update(1);
 const normal=new THREE.Vector3(0,0,1).applyEuler(doc.rotation);assert.ok(position.clone().sub(doc.position).dot(normal)>.4,'camera stays on the printed side');assert.ok(position.y>.15);assert.ok(view.origin.equals(home));
 const before=position.clone();view.drag(120,-80);view.setZoom(.3);view.update(2);assert.ok(position.equals(before),'drag pans the view, not the prop');assert.ok(state.zoom<original.zoom);
 view.restore(3);view.update(3.4);assert.equal(view.active,true);view.update(4);assert.deepEqual(state,original);assert.ok(position.equals(home));assert.equal(view.active,false);
});
test('portrait framing fits the artwork width and inspection tracks a swaying skull',()=>{
 const {view,position,state}=fixture(.45),skull=new THREE.Group();skull.userData.inspectionFrame={center:[-.1,.055,.133],width:.6,height:.5,distance:.95,lift:.2};skull.position.set(-2,1,-2);skull.scale.setScalar(.62);view.show(skull,0);view.update(1);
 const initial=position.clone();skull.position.x+=.2;skull.position.y+=.3;view.update(2);assert.ok(position.clone().sub(initial).distanceTo(new THREE.Vector3(.2,.3,0))<1e-9);assert.ok(Number.isFinite(state.yaw));
 view.setZoom(0);assert.equal(view.zoom,.22);view.setZoom(99);assert.equal(view.zoom,1.5);view.restore(3,true);assert.equal(view.active,false);
});
test('new skull lettering shares bone clipping while the fish is still partially intact',()=>{
 const parent=new THREE.Group(),skin=new THREE.Mesh(new THREE.BoxGeometry(.6,.6,.3),new THREE.MeshStandardMaterial());parent.add(skin);
 const t=createFigpalTransformation(skin,2),letters=new THREE.Mesh(new THREE.PlaneGeometry(.194,.060),new THREE.MeshStandardMaterial());letters.position.y=.185;t.attachBoneDetail(letters);
 let bone; t.skeleton.traverse(o=>{if(o.isMesh&&o!==letters)bone=o;});assert.strictEqual(letters.material.clippingPlanes[0],bone.material.clippingPlanes[0]);
 t.update(.185);assert.equal(t.transformed,false);assert.equal(t.skeleton.visible,true);assert.equal(letters.visible,true);const plane=letters.material.clippingPlanes[0];assert.ok(plane.distanceToPoint(new THREE.Vector3(0,.16,0))*plane.distanceToPoint(new THREE.Vector3(0,.21,0))<0,'the waterline cuts through the lettering');
 t.update(.4);assert.equal(t.transformed,true);t.update(-10);assert.equal(t.transformed,true);t.reset();assert.equal(t.skeleton.visible,false);
});
test('real keypad input respects the wrist lock and uses the same randomized exit code',()=>{
 const puzzle=createEscapePuzzle(()=>.2);let locked=true,opened=0,closed=0,escaped=0,display='';const ui=createDoorKeypadUI({keypad:{group:{},setDisplay:v=>display=v},puzzle,locked:()=>locked,onOpen:()=>opened++,onClose:()=>closed++,onUnlock:()=>escaped++,onFeedback(){}});
 ui.show();assert.equal(opened,0);ui.press('1');assert.equal(display,'');locked=false;ui.show();assert.equal(opened,1);for(const digit of puzzle.code)ui.press(digit);assert.equal(display,puzzle.code);ui.press('enter');assert.equal(escaped,1);assert.equal(closed,1);assert.equal(ui.active,false);assert.equal(display,'OPEN');
});

test('wrinkled posters never sink into their frame and cover the printed clues',()=>{
 for(const [w,h]of[[1.87,1.286],[.35,.43],[.205,.215]])for(let i=0;i<12;i++){const geo=wornPaperGeometry(w,h,i);geo.computeBoundingBox();assert.ok(geo.boundingBox.min.z>=0);geo.dispose();}
});
