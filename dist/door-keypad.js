import * as THREE from './vendor/three.module.js';
import {artCanvas} from './texture-budget.js';
import {createDirectionalKeypadState} from './mobile-puzzle-state.js';
import {batchStaticScenery} from './static-batching.js';

export function createDoorKeypad(){
 const group=new THREE.Group();group.name='Locked exit door keypad';group.userData.exitKeypad=true;
 const metal=new THREE.MeshStandardMaterial({color:0x686b62,metalness:.55,roughness:.65}),black=new THREE.MeshStandardMaterial({color:0x191c18,roughness:.75});
 function box(w,h,d,x,y,z,mat){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);group.add(m);return m;}
 box(.24,.37,.045,0,0,0,metal);box(.218,.348,.015,0,0,.029,black);
 const[c,p]=artCanvas(256,96);const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
 const display=new THREE.Mesh(new THREE.PlaneGeometry(.183,.069),new THREE.MeshBasicMaterial({map,toneMapped:false}));display.position.set(0,.114,.039);group.add(display);
 const buttons=[];group.userData.inspectionFrame={width:.30,height:.46,center:[0,0,.045]};
 const keys=[['up','↑',0,.035],['left','←',-.064,-.025],['enter','OK',0,-.025],['right','→',.064,-.025],['down','↓',0,-.085]];
 for(const [id,text,x,y]of keys){
  const button=box(.050,.045,.013,x,y,.044,metal);button.userData.keypadKey=id;buttons.push(button);
  const [c,p]=artCanvas(96,80);p.fillStyle='#c7cab7';p.font=text==='OK'?'bold 32px Arial':'bold 55px Arial';p.textAlign='center';p.textBaseline='middle';p.fillText(text,48,40);
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
  const ink=new THREE.Mesh(new THREE.PlaneGeometry(.040,.034),new THREE.MeshStandardMaterial({map,transparent:true,roughness:.8}));ink.position.z=.007;ink.raycast=()=>{};button.add(ink);
 }
 let entry='0000',selected=0,message='',last='';
 function paint(time=0){const blink=Math.floor(time*2)%2===0,key=[entry,selected,message,blink].join('|');if(last===key)return;last=key;
  p.fillStyle='#17211c';p.fillRect(0,0,256,96);p.textAlign='center';p.textBaseline='middle';
  if(message){p.fillStyle=message==='OPEN'?'#8eac7e':'#ba8b68';p.font='bold 38px monospace';p.fillText(message,128,49,240);}
  else for(let i=0;i<4;i++){const x=13+i*61;p.fillStyle='#232e25';p.fillRect(x,13,48,69);p.strokeStyle=i===selected&&blink?'#c3c6a1':'#48503c';p.lineWidth=i===selected?3:1;p.strokeRect(x,13,48,69);p.fillStyle=i===selected&&blink?'#e0d5aa':'#a1af83';p.font='bold 48px monospace';p.fillText(entry[i],x+24,48);}
  map.needsUpdate=true;
 }
 function setDisplay(value='0000',slot=0,status=''){entry=value;selected=slot;message=status;last='';paint();}
 for(const x of[-.099,.099])for(const y of[-.161,.161]){const screw=new THREE.Mesh(new THREE.CircleGeometry(.004,8),metal);screw.position.set(x,y,.038);group.add(screw);}
 setDisplay();batchStaticScenery(group,{exclude:[display,...buttons],minObjects:2});return {group,setDisplay,update:paint};
}
export function createDoorKeypadUI({keypad,locked,onUnlock,puzzle,onOpen,onClose}){
 const state=createDirectionalKeypadState(puzzle);let active=false;
 function paint(message=''){keypad.setDisplay(state.entry,state.selected,state.unlocked?'OPEN':message==='Incorrect order.'?'ERROR':'');}
 function press(key){if(!active)return;const message=state.press(key,{locked:locked()});paint(message);if(state.unlocked){hide();onUnlock();}}
 function show(){if(locked())return;active=true;paint();onOpen(keypad.group);}
 function hide(immediate=true){if(!active)return;active=false;onClose(immediate);}
 return {show,hide,press,reset(){state.reset();hide();paint();},get active(){return active;},get unlocked(){return state.unlocked;}};
}
