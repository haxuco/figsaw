import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createLaptopLid} from '../dist/laptop-lid.js';
import {createLaptopProgram,laptopProgramDistance,screenHomography,measureKerningLayouts} from '../dist/laptop-program.js';

function lidFixture(){
 const object=new THREE.Group(),lid=new THREE.Group(),screen=new THREE.Mesh(new THREE.PlaneGeometry(.823,.525),new THREE.MeshBasicMaterial({color:0xc3c8ca})),screenSpill=new THREE.PointLight();
 object.position.set(.45,.027,2.18);object.rotation.y=.98;lid.position.set(0,.034,-.295);screen.position.set(0,.3,.013);object.add(lid);lid.add(screen);
 const laptop=createLaptopLid({object,screen,lid,displayMaterial:screen.material,screenSpill});return {laptop,lid,screenSpill};
}
test('the real lid closes smoothly, turns off its screen, and can reopen after completing the game',()=>{
 const {laptop,lid,screenSpill}=lidFixture();laptop.setOpenProgress(1);assert.equal(laptop.isReady,true);
 const openedAngle=lid.rotation.x;laptop.close(false);assert.equal(laptop.isOpen,false);assert.equal(laptop.isMoving,true);assert.equal(laptop.openProgress,1);
 laptop.update(.20);assert.ok(lid.rotation.x>openedAngle&&lid.rotation.x<Math.PI/2);assert.ok(laptop.openProgress>0&&laptop.openProgress<1);
 laptop.update(.5);assert.equal(laptop.openProgress,0);assert.equal(lid.rotation.x,Math.PI/2);assert.equal(screenSpill.intensity,0);assert.equal(laptop.isMoving,false);
 assert.equal(laptop.open(),true);laptop.update(1);assert.equal(laptop.isReady,true);assert.ok(screenSpill.intensity>0);
 laptop.close();assert.equal(laptop.openProgress,0,'retry retains its instant-close behavior');
});

test('closing works without power and does not erase water or battery damage',()=>{
 const {laptop,screenSpill}=lidFixture();laptop.setOpenProgress(1);laptop.setPower(false);laptop.close(false);laptop.update(.7);
 assert.equal(laptop.openProgress,0);assert.equal(laptop.isPowered,false);assert.equal(screenSpill.intensity,0);
 laptop.setPower(true);laptop.damageWater(1);laptop.open();laptop.update(1);assert.equal(laptop.isPowered,false);assert.equal(screenSpill.intensity,0);
});

test('an empty battery does not stop the hinge and shows its own symbol only on an open, undamaged display',()=>{
 const {laptop,screenSpill}=lidFixture(),indicator=laptop.screen.getObjectByName('Empty MacBook battery indicator');
 assert.equal(indicator.visible,false);laptop.setPower(false);assert.equal(indicator.visible,false);
 assert.equal(laptop.open(),true);laptop.update(1);assert.equal(laptop.isReady,true);assert.equal(laptop.isPowered,false);assert.equal(indicator.visible,true);assert.equal(screenSpill.intensity,0);assert.equal(laptop.screen.material.color.getHex(),0);
 laptop.close(false);laptop.update(1);assert.equal(indicator.visible,false);laptop.open();laptop.update(1);assert.equal(indicator.visible,true);
 const checkpoint=laptop.capture();laptop.setPower(true);assert.equal(indicator.visible,false);assert.ok(screenSpill.intensity>0);
 laptop.restore(checkpoint);assert.equal(indicator.visible,true);laptop.damageWater(1);assert.equal(indicator.visible,false,'water damage is not an empty battery');
});

test('the actual screen and its input projection fit both portrait and landscape cameras',()=>{
 for(const aspect of [.46,.75,1,1.78,2.4]){
  const camera=new THREE.PerspectiveCamera(48,aspect,.01,100);camera.position.z=laptopProgramDistance(aspect);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);
  const points=[[-.823/2,.525/2],[.823/2,.525/2],[.823/2,-.525/2],[-.823/2,-.525/2]].map(([x,y])=>new THREE.Vector3(x,y,0).project(camera));
  for(const point of points)assert.ok(Math.abs(point.x)<.92&&Math.abs(point.y)<.92);
  const matrix=screenHomography(points,800,510);
  for(const [i,[x,y]]of[[0,0],[800,0],[800,510],[0,510]].entries()){
   const w=matrix[3]*x+matrix[7]*y+1;
   assert.ok(Math.abs((matrix[0]*x+matrix[4]*y+matrix[12])/w-points[i].x)<1e-9);
   assert.ok(Math.abs((matrix[1]*x+matrix[5]*y+matrix[13])/w-points[i].y)<1e-9);
  }
 }
});

test('laptop views preserve scoring, completed words, power state and progress without developer controls',()=>{
 const previous=globalThis.document;
 const context=new Proxy({measureText:text=>({width:text.length*70-(text.includes('TY')?10:0)})},{get:(target,key)=>key in target?target[key]:()=>{},set:(target,key,value)=>{target[key]=value;return true;}}),paintCanvas={getContext:()=>context};
 const element=(tag='div')=>({tagName:tag.toUpperCase(),hidden:false,value:'',dataset:{},children:[],listeners:{},classList:{toggle(){},add(){}},style:{setProperty(){}},setAttribute(name,value){this.attributes??={};this.attributes[name]=String(value);},focus(){this.focused=true;},select(){this.selected=true;},addEventListener(type,fn){this.listeners[type]=fn;},append(node){this.children.push(node);},replaceChildren(){this.children=[];},closest(selector){return selector==='[data-letter]'&&this.dataset.letter!==undefined?this:null;},getBoundingClientRect:()=>({width:800}),setPointerCapture(){},hasPointerCapture:()=>false});
 const position=element('input'),selection=element(),fontSize=element(),artboard=element(),pageLabels=Array.from({length:3},()=>element());
 const completedWords=element(),play=element(),result=element(),status=element(),check=element('button'),back=element('button'),word=element(),round=element(),type=element(),power=element(),nudge=[element('button'),element('button')],progress=Array.from({length:3},()=>element()),root=element();nudge[0].dataset.nudge='-1';nudge[1].dataset.nudge='1';
 progress.forEach((node,i)=>node.querySelector=()=>pageLabels[i]);
 root.querySelector=selector=>({'[data-position]':position,'[data-selection]':selection,'[data-font-size]':fontSize,'[data-artboard-name]':artboard,'[data-completed-words]':completedWords,'[data-play]':play,'[data-result]':result,'[data-status]':status,'[data-check]':check,'[data-return]':back,'[data-word]':word,'[data-round]':round,'[data-typeface]':type,'[data-power]':power}[selector]);root.querySelectorAll=selector=>selector==='[data-progress]'?progress:nudge;
 globalThis.document={createElement:element,createElementNS:(_,tag)=>element(tag),querySelector:()=>root,body:{classList:{add(){},remove(){}}}};
 try{
  const {laptop}=lidFixture();laptop.screen.material.map=new THREE.CanvasTexture(paintCanvas);laptop.setOpenProgress(1);
  const camera=new THREE.PerspectiveCamera(62,1.78,.01,100);camera.position.set(1.85,.82,3.11);camera.lookAt(.4,.3,2.18);camera.updateMatrixWorld(true);
  const start=camera.position.clone(),rotation=camera.quaternion.clone(),canvas={focus(){},getBoundingClientRect:()=>({left:0,top:0,width:853,height:480})};
  const program=createLaptopProgram({camera,canvas,laptop}),layouts=measureKerningLayouts(context);assert.equal(program.start(),true);program.update(1,1,true);assert.equal(root.hidden,false);
  assert.deepEqual(pageLabels.map(node=>node.textContent),['Word 1','Locked','Locked']);assert.deepEqual(progress.map(node=>node.attributes['aria-disabled']),['false','true','true']);
  const reopen=time=>{laptop.open();laptop.update(1);assert.equal(program.start(),true);program.update(1,time,true);};
  program.restore({...program.capture(),positions:layouts[0].positions});reopen(1);
  assert.equal(artboard.textContent,'SACRIFICE');assert.equal(fontSize.textContent,118);assert.equal(selection.textContent,'T A');
  const beforeInput=program.capture().positions[1];position.value=String(beforeInput+5);position.listeners.change();assert.equal(program.capture().positions[1],beforeInput+5,'the inspector edits only the selected current position');
  position.value='';position.listeners.change();assert.equal(program.capture().positions[1],beforeInput+5,'empty input cannot move a glyph');
  const beforeFieldArrow=program.capture();root.listeners.keydown({key:'ArrowRight',target:position,preventDefault(){throw Error('field editing should remain native');}});assert.deepEqual(program.capture(),beforeFieldArrow);
  const initial=program.capture().positions[1],key=(value,shiftKey=false)=>root.listeners.keydown({key:value,shiftKey,target:word.children[1],preventDefault(){},stopPropagation(){}});
  key('ArrowRight');assert.equal(program.capture().positions[1],initial+1);key('ArrowLeft',true);assert.equal(program.capture().positions[1],initial-9);
  for(let i=0;i<21;i++)nudge[0].onclick();assert.equal(program.capture().positions[1],initial-30);
  const saved=program.capture();program.cancel();assert.equal(laptop.isOpen,false);assert.equal(laptop.isMoving,true);assert.equal(program.completed,false);assert.ok(camera.position.distanceTo(start)<1e-9);assert.ok(camera.quaternion.angleTo(rotation)<1e-7);assert.equal(camera.fov,62);
  laptop.update(1);assert.equal(laptop.openProgress,0);assert.equal(program.start(),false,'a closed lid cannot enter the screen view');
  reopen(2);assert.deepEqual(program.capture(),saved);check.onclick();assert.equal(program.completed,false);assert.match(status.textContent,/Try again/);assert.doesNotMatch(status.textContent,/score|[0-9]/i);
  for(let attempt=0;attempt<3;attempt++)check.onclick();assert.equal(program.capture().round,0);assert.equal(artboard.textContent,'SACRIFICE');assert.equal(result.hidden,true);assert.deepEqual(pageLabels.map(node=>node.textContent),['Word 1','Locked','Locked']);
  for(let r=0;r<3;r++){
   assert.equal(artboard.textContent,layouts[r].word);assert.deepEqual(pageLabels.map(node=>node.textContent),[0,1,2].map(i=>i>r?'Locked':`Word ${i+1}`));assert.deepEqual(progress.map(node=>node.attributes['aria-disabled']),[0,1,2].map(i=>String(i>r)));
   const targets=layouts[r].positions;
   for(let i=1;i<targets.length-1;i++){
    const current=program.capture().positions[i];word.listeners.pointerdown({button:0,target:word.children[i],pointerId:1,clientX:100,preventDefault(){}});word.listeners.pointermove({pointerId:1,clientX:100+targets[i]-current});word.listeners.pointerup();
   }
   check.onclick();assert.equal(program.capture().accepted,true);assert.equal(position.disabled,true,'accepted text is locked in the inspector');assert.equal(program.completed,r===2);
   if(r<2){assert.equal(check.textContent,'Next word →');check.onclick();assert.equal(program.capture().round,r+1);}
  }
  assert.equal(result.hidden,false);assert.deepEqual(completedWords.children.map(row=>row.attributes['aria-label']),['SACRIFICE','PRODUCT','MANAGER']);assert.deepEqual(completedWords.children.map(row=>row.children.map(glyph=>glyph.textContent).join('')),['SACRIFICE','PRODUCT','MANAGER']);assert.ok(completedWords.children[2].children[0].style.font.includes('italic'));back.onclick();assert.equal(program.active,false);assert.equal(laptop.isOpen,false);assert.equal(program.completed,true);
  laptop.update(1);assert.equal(laptop.openProgress,0);const finished=program.capture();reopen(3);assert.equal(result.hidden,false);assert.equal(back.focused,true);assert.equal(completedWords.children.length,3);assert.deepEqual(program.capture(),finished);back.onclick();assert.equal(laptop.isOpen,false);
  program.reset();assert.equal(completedWords.children.length,0);laptop.open();laptop.update(1);assert.equal(program.start(),true);program.update(1,3,true);assert.equal(program.completed,false);
  const beforePowerLoss=program.capture(),screenView=camera.position.clone();
  laptop.setPower(false);program.update(.1,4);assert.equal(program.active,true);assert.equal(root.hidden,true);assert.equal(laptop.isOpen,true);assert.ok(camera.position.distanceTo(screenView)<1e-9);
  check.onclick();nudge[0].onclick();position.value='200';position.listeners.change();assert.deepEqual(program.capture(),beforePowerLoss,'the unpowered screen cannot advance or adjust the challenge');
  program.cancel();assert.equal(laptop.isOpen,false);assert.ok(camera.position.distanceTo(start)<1e-9);laptop.update(1);
  reopen(5);assert.equal(program.active,true);assert.equal(root.hidden,true);assert.equal(laptop.isOpen,true);assert.deepEqual(program.capture(),beforePowerLoss);
  laptop.setPower(true);program.update(.1,6);assert.equal(root.hidden,false);assert.deepEqual(program.capture(),beforePowerLoss,'external power restores the same unfinished word');
  program.cancel();assert.equal(laptop.isOpen,false);
 }finally{globalThis.document=previous;}
});
