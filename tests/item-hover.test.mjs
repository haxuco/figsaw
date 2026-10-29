import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {resolveHoverItem,createHoverMask,createItemHover} from '../dist/item-hover.js';

const mesh=()=>new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial());
function refs(){return {restraint:{target:new THREE.Group()},laptop:{object:mesh()},catMug:mesh(),handsaw:mesh(),puppet:new THREE.Group(),model:new THREE.Group(),rescueChairs:{parts:{caster:mesh()}},fallenMobile:{pieces:{mobileTiger:mesh()}},mobileInspection:{assembly:mesh(),hookTarget:mesh()},figpalHoists:{fishInspectionTarget:mesh()},documents:{entries:new Map([['org-chart',{title:'Figpal Labs — people & practice'}]])}};}
test('hover labels use the clickable item and the rendered model, not its generous pickup target',()=>{
 const r=refs(),cord=mesh();cord.userData.mobilePiece='mobileTiger';
 assert.deepEqual(resolveHoverItem(cord,r),{object:r.fallenMobile.pieces.mobileTiger,name:'Tiger plush'});
 const cuff=mesh();cuff.name='Close-fitting oval wrist cuff';r.restraint.target.add(cuff);
 assert.deepEqual(resolveHoverItem(r.restraint.target,r),{object:cuff,name:'Shackle'});
 const tank=mesh();tank.userData.fishClue=true;
 assert.deepEqual(resolveHoverItem(tank,r),{object:r.figpalHoists.fishInspectionTarget,name:'Figpal skull'});
 tank.userData={tankIndex:2,fishClue:true};assert.equal(resolveHoverItem(tank,{...r,axeHeld:true}).name,'Right tank');
 const pick=mesh();pick.userData.salvagePart='caster';assert.equal(resolveHoverItem(pick,r).object,r.rescueChairs.parts.caster);
 tank.userData={rescueSlot:1};assert.equal(resolveHoverItem(tank,r),null);
 assert.equal(resolveHoverItem(null,r),null);
});
test('silhouette excludes invisible hitboxes, preserves cutouts/clipping, and never modifies or intercepts the source',()=>{
 const root=new THREE.Group(),item=mesh(),pick=mesh(),hidden=mesh();root.add(item,pick,hidden);root.position.set(3,2,-4);
 pick.material.colorWrite=false;hidden.visible=false;
 item.material.map=new THREE.Texture();item.material.alphaTest=.4;item.material.clippingPlanes=[new THREE.Plane(new THREE.Vector3(0,1,0),0)];
 const mask=createHoverMask(root);mask.update();assert.equal(mask.meshCount,1);
 const copy=mask.scene.children[0];assert.equal(copy.geometry,item.geometry);assert.notEqual(copy.material,item.material);assert.equal(copy.material.map,item.material.map);assert.equal(copy.material.alphaTest,.4);assert.equal(copy.material.clippingPlanes,item.material.clippingPlanes);
 assert.deepEqual(new THREE.Vector3().setFromMatrixPosition(copy.matrix).toArray(),[3,2,-4]);
 assert.deepEqual(new THREE.Raycaster().intersectObject(mask.scene,true),[]);
 root.visible=false;mask.update();assert.equal(copy.visible,false);
 let originalDisposed=false,maskDisposed=false;item.material.addEventListener('dispose',()=>{originalDisposed=true;});copy.material.addEventListener('dispose',()=>{maskDisposed=true;});
 mask.dispose();assert.equal(originalDisposed,false);assert.equal(maskDisposed,true);assert.equal(root.children.length,3);
});
test('instanced chain geometry follows instance updates without duplicating or disposing shared geometry',()=>{
 const source=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial(),3),mask=createHoverMask(source);mask.update();
 const copy=mask.scene.children[0];assert.equal(copy.instanceMatrix,source.instanceMatrix);source.count=2;mask.update();assert.equal(copy.count,2);mask.dispose();assert.equal(source.count,2);
});
test('hover render is lazy, restores renderer state, follows the item, and clears hidden or collected items',()=>{
 const label={hidden:true,textContent:'',style:{},offsetWidth:100,remove(){}};
 const oldDocument=globalThis.document;globalThis.document={createElement:()=>label,body:{append(){}}};
 try{
  const camera=new THREE.PerspectiveCamera(60,1,.1,100);camera.updateMatrixWorld();const item=mesh();item.position.z=-3;
  let draws=0,target=null,alpha=1,color=new THREE.Color(0x112233);
  const renderer={autoClear:true,getDrawingBufferSize:v=>v.set(1600,1600),getRenderTarget:()=>target,setRenderTarget:t=>{target=t;},getClearAlpha:()=>alpha,getClearColor:c=>c.copy(color),setClearColor(c,a){color.set(c);alpha=a;},render(){draws++;}};
  const hover=createItemHover({renderer,camera,canvas:{getBoundingClientRect:()=>({left:0,top:0,right:800,width:800,height:800})},resolve:hit=>hit?{object:hit,name:'Item'}:null});
  hover.render(0);assert.equal(draws,0);hover.set(item);hover.render(0);assert.equal(draws,2);assert.equal(target,null);assert.equal(renderer.autoClear,true);assert.equal(alpha,1);assert.equal(color.getHex(),0x112233);
  const initial=label.style.transform;item.position.x=.5;hover.render(.1);assert.notEqual(label.style.transform,initial);
  hover.render(.11);assert.equal(draws,5,'only the lightweight overlay is redrawn before the mask refresh interval');
  item.visible=false;hover.render(.2);assert.equal(label.hidden,true);assert.equal(hover.active,false);assert.equal(draws,5);hover.dispose();
 }finally{globalThis.document=oldDocument;}
});
