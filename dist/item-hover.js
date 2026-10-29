import * as THREE from './vendor/three.module.js';
import {ITEMS} from './inventory.js';
import {isWorldVisible,visibleLocalBounds} from './testing-highlights.js';

// Use the click resolver's result, including its chair/tank click-through rules.
// Labels describe objects, never randomized roles or puzzle answers.
export function resolveHoverItem(hit,refs){
 if(!hit)return null;
 const d=hit.userData,{restraint,laptop,catMug,handsaw,puppet,model,fallenMobile,mobileInspection,figpalHoists}=refs;
 let object=hit,name;
 if(hit===restraint.target){object=hit.getObjectByName('Close-fitting oval wrist cuff')??hit;name='Shackle';}
 else if(hit===laptop.object||d.chargingAction==='laptop'){object=laptop.object;name='MacBook';}
 else if(hit===catMug)name='Cat mug';
 else if(hit===handsaw)name=ITEMS.saw.name;
 else if(hit===puppet){object=model;name='Figsaw';}
 else if(d.mobilePiece){object=fallenMobile.pieces[d.mobilePiece]??hit;name=ITEMS[d.mobilePiece]?.name;}
 else if(d.mobileMount){object=mobileInspection.hookTarget;name='Ceiling hook';}
 else if(d.mobilePuzzle){object=mobileInspection.assembly;name='Animal mobile';}
 else if(d.stuffedAnimal)name=hit.name.replace(/ stuffed animal| plush(ie)?/gi,'')+' plush';
 else if(d.salvagePart){object=refs.rescueChairs.parts[d.salvagePart]??hit;name=ITEMS[d.salvagePart]?.name;}
 else if(d.spareChain)name=ITEMS.chain.name;
 else if(d.supplyAction)name=ITEMS[d.supplyAction]?.name;
 else if(d.chairSeat||Number.isInteger(d.rescueChair))name='Aeron chair';
 else if(Number.isInteger(d.rescueSlot))return null;
 else if(d.keyAction)name=d.keyAction==='pour'?'Ketchup bottle':ITEMS.key.name;
 else if(d.chargingAction)name={drawer:'Supplies',strip:'Power strip',charger:ITEMS.charger.name}[d.chargingAction];
 else if(d.fireAxe)name=ITEMS.axe.name;
 else if(d.fireAlarm)name='Fire alarm';
 else if(d.wallDocument)name=refs.documents.entries.get(d.wallDocument)?.title;
 else if(d.fishClue&&!(refs.axeHeld&&Number.isInteger(d.tankIndex))){object=figpalHoists.fishInspectionTarget;name='Figpal skull';}
 else if(d.exitKeypad)name='Door keypad';
 else if(d.keypadKey)return null;
 else if(Number.isInteger(d.tankIndex))name=['Left tank','Middle tank','Right tank'][d.tankIndex];
 else if(Number.isInteger(d.valveIndex))name='Tank valve';
 else if(Number.isInteger(d.hoistIndex))name=['Pudding','Maki','Puff'][d.hoistIndex]+' winch';
 return name?{object,name}:null;
}

const visibleMaterial=m=>m.visible!==false&&m.colorWrite!==false&&m.opacity!==0;
export function createHoverMask(root){
 const scene=new THREE.Scene(),pairs=[],materials=new Map();
 function maskMaterial(source){
  if(materials.has(source))return materials.get(source);
  const m=new THREE.MeshBasicMaterial({map:source.map??null,alphaMap:source.alphaMap??null,alphaTest:Math.max(.08,source.alphaTest??0),side:THREE.DoubleSide,toneMapped:false,fog:false,visible:visibleMaterial(source),clippingPlanes:source.clippingPlanes,clipIntersection:source.clipIntersection});
  // Retain texture cutouts (chair mesh, paper tears), but make every surface
  // equally white in the mask regardless of its lighting or original colour.
  m.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','#include <opaque_fragment>\ngl_FragColor = vec4(1.0);');};
  m.customProgramCacheKey=()=> 'item-hover-mask-v1';materials.set(source,m);return m;
 }
 root.traverse(o=>{
  if(!o.isMesh||!isWorldVisible(o)||o.userData.testingDecoration)return;
  const sources=Array.isArray(o.material)?o.material:[o.material];if(!sources.some(visibleMaterial))return;
  const material=Array.isArray(o.material)?sources.map(maskMaterial):maskMaterial(o.material);
  const copy=o.isInstancedMesh?new THREE.InstancedMesh(o.geometry,material,o.count):new THREE.Mesh(o.geometry,material);
  if(o.isInstancedMesh){copy.instanceMatrix=o.instanceMatrix;copy.count=o.count;}
  copy.matrixAutoUpdate=false;copy.raycast=()=>{};copy.frustumCulled=false;scene.add(copy);pairs.push([o,copy]);
 });
 return {scene,update(){root.updateWorldMatrix(true,true);for(const [source,copy]of pairs){copy.visible=isWorldVisible(source);copy.matrix.copy(source.matrixWorld);if(source.isInstancedMesh)copy.count=source.count;}},dispose(){for(const m of materials.values())m.dispose();scene.clear();},get meshCount(){return pairs.length;}};
}

export function createItemHover({renderer,camera,canvas,resolve}){
 const label=document.createElement('div');label.id='item-hover-label';label.hidden=true;document.body.append(label);
 const overlay=new THREE.Scene(),overlayCamera=new THREE.Camera(),size=new THREE.Vector2(),point=new THREE.Vector3(),bounds=new THREE.Box3(),clearColor=new THREE.Color();
 const material=new THREE.ShaderMaterial({transparent:true,depthTest:false,depthWrite:false,toneMapped:false,uniforms:{mask:{value:null},pixel:{value:new THREE.Vector2()},area:{value:new THREE.Vector4(-1,-1,1,1)}},vertexShader:'uniform vec4 area; varying vec2 uvMask; void main(){vec2 p=mix(area.xy,area.zw,uv);uvMask=p*.5+.5;gl_Position=vec4(p,0.0,1.0);}',fragmentShader:`
  uniform sampler2D mask; uniform vec2 pixel; varying vec2 uvMask;
  float ring(float radius){
   float sum=0.0;
   for(int i=0;i<12;i++){float a=float(i)*0.523598776;sum+=texture2D(mask,uvMask+vec2(cos(a),sin(a))*pixel*radius).a;}
   return sum/12.0;
  }
  void main(){
   float inside=texture2D(mask,uvMask).a;
   float edge=(ring(1.1)*.24+ring(2.4)*.11+ring(4.0)*.035)*(1.0-inside);
   gl_FragColor=vec4(.76,.82,.74,edge);
  }`});
 const quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),material);quad.frustumCulled=false;overlay.add(quad);
 let selected=null,mask=null,target=null,lastMaskTime=-Infinity,labelWidth=0;
 function clear(){selected=null;label.hidden=true;if(mask){mask.dispose();mask=null;}}
 function set(hit){
  const next=resolve(hit);if(next?.object===selected?.object&&next?.name===selected?.name)return;
  clear();if(!next||!isWorldVisible(next.object))return;
  const box=visibleLocalBounds(next.object);if(box.isEmpty())return;
  selected={...next,box};mask=createHoverMask(next.object);lastMaskTime=-Infinity;
  label.textContent=next.name;label.hidden=false;labelWidth=label.offsetWidth;
 }
 function render(time){
  if(!selected)return;
  if(!isWorldVisible(selected.object)){clear();return;}
  const rect=canvas.getBoundingClientRect();
  selected.object.updateWorldMatrix(true,false);bounds.copy(selected.box);
  let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity,visible=false;
  for(let i=0;i<8;i++){
   point.set(i&1?bounds.max.x:bounds.min.x,i&2?bounds.max.y:bounds.min.y,i&4?bounds.max.z:bounds.min.z).applyMatrix4(selected.object.matrixWorld).project(camera);
   if(point.z<-1||point.z>1)continue;visible=true;
   minX=Math.min(minX,point.x);maxX=Math.max(maxX,point.x);minY=Math.min(minY,-point.y);maxY=Math.max(maxY,-point.y);
  }
  if(!visible||maxX<-1||minX>1||minY>1){clear();return;}
  const x=THREE.MathUtils.clamp(rect.left+((minX+maxX)*.25+.5)*rect.width,rect.left+labelWidth/2+12,rect.right-labelWidth/2-12);
  const y=Math.max(rect.top+40,rect.top+(minY*.5+.5)*rect.height-12);
  label.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-100%)`;
  // Allocate only after the first real mouse hover. A capped mask and a 20 Hz
  // refresh keep this effect inexpensive, with no extra pass while unhovered.
  renderer.getDrawingBufferSize(size);const scale=Math.min(1,1024/size.x,768/size.y);
  const width=Math.max(1,Math.round(size.x*scale)),height=Math.max(1,Math.round(size.y*scale));
  if(!target){target=new THREE.WebGLRenderTarget(width,height,{depthBuffer:true,stencilBuffer:false});material.uniforms.mask.value=target.texture;}
  if(target.width!==width||target.height!==height){target.setSize(width,height);lastMaskTime=-Infinity;}
  material.uniforms.pixel.value.set(1/rect.width,1/rect.height);
  // Shade only the item's screen rectangle, not millions of unrelated pixels.
  const padX=16/rect.width,padY=16/rect.height;
  material.uniforms.area.value.set(Math.max(-1,minX-padX),Math.max(-1,-maxY-padY),Math.min(1,maxX+padX),Math.min(1,-minY+padY));
  const previousTarget=renderer.getRenderTarget(),autoClear=renderer.autoClear,clearAlpha=renderer.getClearAlpha(),autoReset=renderer.info?.autoReset;renderer.getClearColor(clearColor);
  if(renderer.info)renderer.info.autoReset=false;
  try{
   if(time-lastMaskTime>=.05){
    mask.update();renderer.setRenderTarget(target);renderer.setClearColor(0x000000,0);renderer.autoClear=true;renderer.render(mask.scene,camera);lastMaskTime=time;
   }
   renderer.setRenderTarget(previousTarget);renderer.autoClear=false;renderer.render(overlay,overlayCamera);
  }finally{renderer.setRenderTarget(previousTarget);renderer.autoClear=autoClear;renderer.setClearColor(clearColor,clearAlpha);if(renderer.info)renderer.info.autoReset=autoReset;}
 }
 return {set,clear,render,get active(){return !!selected;},dispose(){clear();target?.dispose();quad.geometry.dispose();material.dispose();label.remove();}};
}
