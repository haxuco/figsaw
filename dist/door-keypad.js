import * as THREE from './vendor/three.module.js';
import {artCanvas} from './texture-budget.js';
import {createDoorKeypadState} from './mobile-puzzle-state.js';
import {batchStaticScenery} from './static-batching.js';

export function createDoorKeypad(){
 const group=new THREE.Group();group.name='Locked exit door keypad';group.userData.exitKeypad=true;
 const metal=new THREE.MeshStandardMaterial({color:0x686b62,metalness:.55,roughness:.65}),black=new THREE.MeshStandardMaterial({color:0x191c18,roughness:.75});
 function box(w,h,d,x,y,z,mat){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);group.add(m);return m;}
 box(.24,.37,.045,0,0,0,metal);box(.218,.348,.015,0,0,.029,black);
 const[c,p]=artCanvas(256,96);const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
 const display=new THREE.Mesh(new THREE.PlaneGeometry(.183,.069),new THREE.MeshBasicMaterial({map,toneMapped:false}));display.position.set(0,.114,.039);group.add(display);
 const buttons=[];group.userData.inspectionFrame={width:.30,height:.46,center:[0,0,.045]};
 const keys=['1','2','3','4','5','6','7','8','9','×','0','↵'];
 const [labels,ink]=artCanvas(384,440);ink.fillStyle='#c7cab7';ink.font='bold 39px Arial';ink.textAlign='center';ink.textBaseline='middle';
 for(let i=0;i<keys.length;i++){
  const x=(i%3-1)*.064,y=.035-Math.floor(i/3)*.055;const button=box(.049,.040,.013,x,y,.044,metal);button.userData.keypadKey=i===9?'clear':i===11?'enter':keys[i];buttons.push(button);
  ink.fillText(keys[i],192+x*2000,(.0625-y)*2000);
 }
 const labelsMap=new THREE.CanvasTexture(labels);labelsMap.colorSpace=THREE.SRGBColorSpace;
 const label=new THREE.Mesh(new THREE.PlaneGeometry(.192,.220),new THREE.MeshStandardMaterial({map:labelsMap,transparent:true,roughness:.8}));label.position.set(0,-.0475,.052);group.add(label);label.raycast=()=>{};
 for(const x of[-.099,.099])for(const y of[-.161,.161]){const screw=new THREE.Mesh(new THREE.CircleGeometry(.004,8),metal);screw.position.set(x,y,.038);group.add(screw);}
 let last='';function setDisplay(value='LOCKED'){if(last===value)return;last=value;p.fillStyle='#17211c';p.fillRect(0,0,256,96);p.fillStyle=value==='OPEN'?'#8eac7e':'#ba8b68';p.font='bold 40px monospace';p.textAlign='center';p.textBaseline='middle';p.fillText(value,128,51,240);map.needsUpdate=true;}
 setDisplay();batchStaticScenery(group,{exclude:[display,label,...buttons],minObjects:2});return {group,setDisplay};
}
export function createDoorKeypadUI({keypad,locked,onUnlock,onFeedback,puzzle,onOpen,onClose}){
 const state=createDoorKeypadState({puzzle});let active=false;
 function paint(message=''){keypad.setDisplay(state.unlocked?'OPEN':message==='Incorrect order.'?'ERROR':message==='Enter four numbers.'?'4 DIGITS':state.entry||'LOCKED');}
 function press(key){if(!active)return;const message=state.press(key,{locked:locked()});paint(message);onFeedback(message||`Keypad: ${state.entry||'cleared'}.`);if(state.unlocked){hide();onUnlock();}}
 function show(){if(locked()){onFeedback('Unlock your shackle before using the keypad.');return;}active=true;paint();onOpen(keypad.group);onFeedback('Door keypad. Click the keys or type four numbers, then Enter.');}
 function hide(immediate=true){if(!active)return;active=false;onClose(immediate);}
 return {show,hide,press,reset(){state.reset();hide();paint();},get active(){return active;},get unlocked(){return state.unlocked;}};
}
