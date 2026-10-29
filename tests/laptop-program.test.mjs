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

test('laptop views preserve progress and keep diagnostic answer editing and copying separate from the scored game',async()=>{
 const previous=globalThis.document;
 const context=new Proxy({measureText:text=>({width:text.length*70-(text.includes('TY')?10:0)})},{get:(target,key)=>key in target?target[key]:()=>{},set:(target,key,value)=>{target[key]=value;return true;}}),paintCanvas={getContext:()=>context};
 const element=(tag='div')=>({tagName:tag.toUpperCase(),hidden:false,value:'',dataset:{},children:[],listeners:{},classList:{toggle(){}},style:{setProperty(){}},setAttribute(){},focus(){this.focused=true;},select(){this.selected=true;},addEventListener(type,fn){this.listeners[type]=fn;},append(node){this.children.push(node);},replaceChildren(){this.children=[];},closest(selector){return selector==='[data-letter]'&&this.dataset.letter!==undefined?this:null;},getBoundingClientRect:()=>({width:800}),setPointerCapture(){},hasPointerCapture:()=>false});
 const play=element(),result=element(),status=element(),check=element('button'),back=element('button'),word=element(),round=element(),type=element(),power=element(),answer=element(),answerLabel=element(),editor=element(),wordInput=element('input'),copyButton=element('button'),exportText=element('textarea'),editorStatus=element(),instruction=element(),nudge=[element('button'),element('button')],progress=Array.from({length:3},()=>element()),root=element();nudge[0].dataset.nudge='-1';nudge[1].dataset.nudge='1';wordInput.closest=selector=>selector==='[data-kern-editor]'?editor:null;
 root.querySelector=selector=>({'[data-play]':play,'[data-result]':result,'[data-status]':status,'[data-check]':check,'[data-return]':back,'[data-word]':word,'[data-round]':round,'[data-typeface]':type,'[data-power]':power,'[data-answer]':answer,'[data-answer-label]':answerLabel,'[data-kern-editor]':editor,'[data-kern-type]':wordInput,'[data-kern-copy]':copyButton,'[data-kern-export]':exportText,'[data-kern-status]':editorStatus,'[data-instruction]':instruction}[selector]);root.querySelectorAll=selector=>selector==='[data-progress]'?progress:nudge;
 globalThis.document={createElement:element,querySelector:()=>root,body:{classList:{add(){},remove(){}}}};
 try{
  const {laptop}=lidFixture();laptop.screen.material.map=new THREE.CanvasTexture(paintCanvas);laptop.setOpenProgress(1);
  const camera=new THREE.PerspectiveCamera(62,1.78,.01,100);camera.position.set(1.85,.82,3.11);camera.lookAt(.4,.3,2.18);camera.updateMatrixWorld(true);
  const start=camera.position.clone(),rotation=camera.quaternion.clone(),canvas={focus(){},getBoundingClientRect:()=>({left:0,top:0,width:853,height:480})};
  let diagnostic=false,failCopy=false;const copies=[];
  const program=createLaptopProgram({camera,canvas,laptop,isDiagnostic:()=>diagnostic,copyText:async text=>{if(failCopy)throw new Error('Clipboard unavailable');copies.push(JSON.parse(text));}}),layouts=measureKerningLayouts(context);assert.equal(program.start(),true);program.update(1,1,true);assert.equal(root.hidden,false);assert.equal(editor.hidden,true);assert.equal(answer.hidden,true);assert.equal(answerLabel.hidden,true);assert.equal(answer.children.length,0,'ordinary play does not build the answer');await copyButton.onclick();assert.equal(copies.length,0);
  const reopen=time=>{laptop.open();laptop.update(1);assert.equal(program.start(),true);program.update(1,time,true);};
  program.restore({...program.capture(),positions:layouts[0].positions});reopen(1);
  const initial=program.capture().positions[1],key=(value,shiftKey=false)=>root.listeners.keydown({key:value,shiftKey,target:word.children[1],preventDefault(){},stopPropagation(){}});
  key('ArrowRight');assert.equal(program.capture().positions[1],initial+1);key('ArrowLeft',true);assert.equal(program.capture().positions[1],initial-9);
  for(let i=0;i<21;i++)nudge[0].onclick();assert.equal(program.capture().positions[1],initial-30);
  const saved=program.capture();program.cancel();assert.equal(laptop.isOpen,false);assert.equal(laptop.isMoving,true);assert.equal(program.completed,false);assert.ok(camera.position.distanceTo(start)<1e-9);assert.ok(camera.quaternion.angleTo(rotation)<1e-7);assert.equal(camera.fov,62);
  laptop.update(1);assert.equal(laptop.openProgress,0);assert.equal(program.start(),false,'a closed lid cannot enter the screen view');
  reopen(2);assert.deepEqual(program.capture(),saved);check.onclick();assert.equal(program.completed,false);assert.match(status.textContent,/Try again/);assert.doesNotMatch(status.textContent,/score|[0-9]/i);
  const untouched=program.capture();diagnostic=true;program.update(.1,2.1);assert.equal(answer.hidden,false);assert.equal(answerLabel.hidden,false);assert.deepEqual(program.capture(),untouched,'viewing the answer cannot change spacing or pass a word');
  assert.equal(editor.hidden,false);await copyButton.onclick();assert.equal(copies[0].word,'SACRIFICE');assert.deepEqual(copies[0].positions,untouched.positions.map(x=>Number(x.toFixed(6))));
  wordInput.value='Figma';editor.listeners.submit({preventDefault(){}});assert.equal(word.children.map(node=>node.textContent).join(''),'Figma');assert.ok(word.children.every(node=>node.tagName==='BUTTON'),'all draft letters, including both ends, are adjustable');
  const first=parseFloat(word.children[0].style.left);nudge[1].onclick();assert.equal(parseFloat(word.children[0].style.left),first+1);await copyButton.onclick();assert.equal(copies.at(-1).word,'Figma');assert.equal(copies.at(-1).positions[0],Number((first+1).toFixed(6)));assert.equal(copies.at(-1).typeface.family,'Arial, sans-serif');assert.deepEqual(program.capture(),untouched);
  const preview=word.children.map(node=>node.style.left);root.listeners.keydown({key:'ArrowLeft',target:wordInput,preventDefault(){throw new Error('Text input must retain arrow keys');}});assert.deepEqual(word.children.map(node=>node.style.left),preview);
  wordInput.value='Figma UI';await copyButton.onclick();assert.equal(copies.at(-1).word,'Figma UI','copy applies a newly typed word even without clicking Edit');assert.equal(copies.at(-1).positions.length,8);
  failCopy=true;await copyButton.onclick();assert.equal(exportText.hidden,false);assert.equal(exportText.selected,true);assert.equal(JSON.parse(exportText.value).word,'Figma UI');failCopy=false;
  check.onclick();assert.deepEqual(program.capture(),untouched);assert.equal(wordInput.value,'SACRIFICE');assert.equal(check.textContent,'Submit spacing');
  wordInput.value='Preview';editor.listeners.submit({preventDefault(){}});
  diagnostic=false;program.update(.1,2.2);assert.equal(answer.hidden,true);assert.equal(answerLabel.hidden,true);diagnostic=true;program.update(.1,2.3);
  assert.equal(wordInput.value,'SACRIFICE','leaving diagnostics restores the scored word');assert.deepEqual(program.capture(),untouched);
  for(let r=0;r<3;r++){
   const targets=layouts[r].positions;
   assert.equal(answer.hidden,false);assert.equal(answer.children.map(node=>node.textContent).join(''),layouts[r].word);assert.equal(answer.style.font,layouts[r].font);assert.deepEqual(answer.children.map(node=>parseFloat(node.style.left)),targets,'each answer uses the exact layout scored for its own word');
   for(let i=1;i<targets.length-1;i++){
    const current=program.capture().positions[i];word.listeners.pointerdown({button:0,target:word.children[i],pointerId:1,clientX:100,preventDefault(){}});word.listeners.pointermove({pointerId:1,clientX:100+targets[i]-current});word.listeners.pointerup();
   }
   check.onclick();assert.equal(program.capture().accepted,true);assert.equal(program.completed,r===2);
   if(r<2){assert.equal(check.textContent,'Next word →');check.onclick();assert.equal(program.capture().round,r+1);}
  }
  assert.equal(result.hidden,false);assert.equal(answer.hidden,true);back.onclick();assert.equal(program.active,false);assert.equal(laptop.isOpen,false);assert.equal(program.completed,true);
  laptop.update(1);assert.equal(laptop.openProgress,0);const finished=program.capture();reopen(3);assert.equal(result.hidden,false);assert.equal(back.focused,true);assert.deepEqual(program.capture(),finished);back.onclick();assert.equal(laptop.isOpen,false);
  program.reset();laptop.open();laptop.update(1);assert.equal(program.start(),true);program.update(1,3,true);assert.equal(program.completed,false);
  const beforePowerLoss=program.capture(),screenView=camera.position.clone();
  laptop.setPower(false);program.update(.1,4);assert.equal(program.active,true);assert.equal(root.hidden,true);assert.equal(answer.hidden,true);assert.equal(laptop.isOpen,true);assert.ok(camera.position.distanceTo(screenView)<1e-9);
  check.onclick();nudge[0].onclick();assert.deepEqual(program.capture(),beforePowerLoss,'the unpowered screen cannot advance or adjust the challenge');
  program.cancel();assert.equal(laptop.isOpen,false);assert.ok(camera.position.distanceTo(start)<1e-9);laptop.update(1);
  reopen(5);assert.equal(program.active,true);assert.equal(root.hidden,true);assert.equal(laptop.isOpen,true);assert.deepEqual(program.capture(),beforePowerLoss);
  laptop.setPower(true);program.update(.1,6);assert.equal(root.hidden,false);assert.deepEqual(program.capture(),beforePowerLoss,'external power restores the same unfinished word');
  program.cancel();assert.equal(laptop.isOpen,false);
 }finally{globalThis.document=previous;}
});
