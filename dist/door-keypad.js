import * as THREE from './vendor/three.module.js';
import {artCanvas} from './texture-budget.js';
import {createDoorKeypadState} from './mobile-puzzle-state.js';

export function createDoorKeypad(){
 const group=new THREE.Group();group.name='Locked exit door keypad';group.userData.exitKeypad=true;
 const metal=new THREE.MeshStandardMaterial({color:0x686b62,metalness:.55,roughness:.65}),black=new THREE.MeshStandardMaterial({color:0x191c18,roughness:.75});
 function box(w,h,d,x,y,z,mat){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);group.add(m);return m;}
 box(.24,.37,.045,0,0,0,metal);box(.218,.348,.015,0,0,.029,black);
 const[c,p]=artCanvas(256,96);const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
 const display=new THREE.Mesh(new THREE.PlaneGeometry(.183,.069),new THREE.MeshBasicMaterial({map,toneMapped:false}));display.position.set(0,.114,.039);group.add(display);
 const keys=['1','2','3','4','5','6','7','8','9','×','0','↵'];
 for(let i=0;i<keys.length;i++){
  const x=(i%3-1)*.064,y=.035-Math.floor(i/3)*.055;box(.049,.040,.013,x,y,.044,metal);
  const[canvas,ctx]=artCanvas(64);ctx.fillStyle='#c7cab7';ctx.font='bold 43px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(keys[i],32,33);const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;
  const label=new THREE.Mesh(new THREE.PlaneGeometry(.029,.029),new THREE.MeshStandardMaterial({map:t,transparent:true,roughness:.8}));label.position.set(x,y,.052);group.add(label);
 }
 for(const x of[-.099,.099])for(const y of[-.161,.161]){const screw=new THREE.Mesh(new THREE.CircleGeometry(.004,8),metal);screw.position.set(x,y,.038);group.add(screw);}
 let last='';function setDisplay(value='LOCKED'){if(last===value)return;last=value;p.fillStyle='#17211c';p.fillRect(0,0,256,96);p.fillStyle=value==='OPEN'?'#8eac7e':'#ba8b68';p.font='bold 40px monospace';p.textAlign='center';p.textBaseline='middle';p.fillText(value,128,51,240);map.needsUpdate=true;}
 setDisplay();return {group,setDisplay};
}
export function createDoorKeypadUI({keypad,locked,onUnlock,onFeedback}){
 const state=createDoorKeypadState(),dialog=document.querySelector('#door-keypad'),display=dialog.querySelector('output'),status=dialog.querySelector('[data-keypad-status]'),canvas=document.querySelector('#scene');
 function paint(message=''){display.textContent=state.entry.padEnd(4,'—');status.textContent=message;keypad.setDisplay(state.unlocked?'OPEN':state.entry||'LOCKED');}
 function press(key){const message=state.press(key,{locked:locked()});paint(message);if(state.unlocked){onUnlock();hide();onFeedback(message);}}
 function show(){if(locked()){onFeedback('Unlock your shackle before using the keypad.');return;}paint();dialog.showModal();dialog.querySelector('button[data-key="1"]').focus({preventScroll:true});}
 function hide(){if(dialog.open)dialog.close();canvas.focus({preventScroll:true});}
 dialog.addEventListener('click',e=>{const button=e.target.closest('[data-key]');if(!button)return;if(button.dataset.key==='close')hide();else press(button.dataset.key);});
 dialog.addEventListener('cancel',e=>{e.preventDefault();hide();});
 dialog.addEventListener('keydown',e=>{if(/^\d$/.test(e.key)){e.preventDefault();press(e.key);}else if(e.key==='Backspace'){e.preventDefault();press('back');}else if(e.key==='Enter'&&e.target.tagName!=='BUTTON'){e.preventDefault();press('enter');}});
 return {show,hide,reset(){state.reset();hide();paint();},get active(){return dialog.open;},get unlocked(){return state.unlocked;}};
}
