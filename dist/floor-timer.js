import {renderQuality as quality} from './render-quality.js';
import {batchStaticScenery} from './static-batching.js';
import * as THREE from './vendor/three.module.js';
import { createCountdownClock, formatCountdown } from './countdown-clock.js';

export function createFloorTimer(viewerPosition,position){
 const group=new THREE.Group();group.name='Ten-minute red LED countdown timer';group.position.copy(position);group.position.y=.006;
 group.rotation.y=Math.atan2(viewerPosition.x-position.x,viewerPosition.z-position.z)-THREE.MathUtils.degToRad(16);
 group.scale.setScalar(.72);
 const clock=createCountdownClock();
 const caseGroup=new THREE.Group();caseGroup.position.y=.13;caseGroup.rotation.x=-.24;group.add(caseGroup);
 const c=document.createElement('canvas');c.width=512;c.height=256;const ctx=c.getContext('2d');
 ctx.fillStyle='#555951';ctx.fillRect(0,0,512,256);
 let seed=7418;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<1800;i++){ctx.fillStyle=i%4?'rgba(13,16,12,.18)':'rgba(180,171,142,.26)';ctx.fillRect(random()*512,random()*256,1+random()*4,1+random()*2);}
 for(let i=0;i<35;i++){ctx.strokeStyle='rgba(194,190,163,.24)';ctx.lineWidth=.6;const x=random()*512,y=random()*256;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+8+random()*39,y+random()*5);ctx.stroke();}
 const wear=new THREE.CanvasTexture(c);wear.colorSpace=THREE.SRGBColorSpace;
 const casing=new THREE.MeshStandardMaterial({color:0x373c36,map:wear,bumpMap:wear,bumpScale:.0007,roughness:.82});
 const black=new THREE.MeshStandardMaterial({color:0x080b09,roughness:.66});
 const screwMat=new THREE.MeshStandardMaterial({color:0x777366,metalness:.65,roughness:.68});
 function mesh(geometry,material,parent=caseGroup){const object=new THREE.Mesh(geometry,material);object.castShadow=true;object.receiveShadow=true;parent.add(object);return object;}
 function box(size,pos,material,parent=caseGroup){const object=mesh(new THREE.BoxGeometry(...size),material,parent);object.position.set(...pos);return object;}
 const shape=new THREE.Shape(),w=.59,h=.19,r=.022;
 shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
 const shell=new THREE.ExtrudeGeometry(shape,{depth:.174,bevelEnabled:true,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});shell.translate(0,0,-.087);mesh(shell,casing);
 box([.538,.160,.010],[0,0,.096],black);
 const lens=box([.518,.143,.002],[0,0,.110],new THREE.MeshPhysicalMaterial({color:0x54191a,transparent:true,opacity:.09,depthWrite:false,roughness:.22,clearcoat:1,clearcoatRoughness:.10}));lens.castShadow=false;
 for(const x of[-.279,.279])for(const y of[-.071,.071]){
  const screw=mesh(new THREE.CylinderGeometry(.008,.008,.006,12),screwMat);screw.rotation.x=Math.PI/2;screw.position.set(x,y,.098);
  box([.010,.0015,.001],[x,y,.102],black);
 }
 for(const x of[-.23,.23])for(const z of[-.06,.06])box([.052,.016,.052],[x,.008,z],black,group);
 for(const side of[-1,1])for(let j=0;j<6;j++)box([.002,.040,.006],[side*.301,-.018,-.061+j*.019],black);
 // Printed MIN / SEC legends sit above an inset seven-segment LED face.
 const legend=document.createElement('canvas');legend.width=512;legend.height=64;const lc=legend.getContext('2d');lc.font='500 20px monospace';lc.fillStyle='#8e8b7a';lc.textAlign='center';lc.fillText('MIN',128,42);lc.fillText('SEC',384,42);
 const legendMap=new THREE.CanvasTexture(legend);legendMap.colorSpace=THREE.SRGBColorSpace;
 const legendMesh=mesh(new THREE.PlaneGeometry(.43,.018),new THREE.MeshBasicMaterial({map:legendMap,transparent:true,depthWrite:false}));legendMesh.position.set(0,.069,.104);legendMesh.castShadow=false;
 const length=.066,thickness=.010,b=.005;
 const patterns=['abcdef','bc','abdeg','abcdg','bcfg','acdfg','acdefg','abc','abcdefg','abcdfg'];
 const positions={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]};
 const spill=new THREE.PointLight(0xff1a08,.12,.70,2);spill.position.set(0,.06,.16);caseGroup.add(spill);
 // The flat LED segments and their glow share one texture on every device.
 // Redraw only when the displayed second changes, keeping the physical case/lens.
 let mobileDisplay=null,mobilePaint=null,mobileMap=null;
 {const canvas=document.createElement('canvas');canvas.width=512;canvas.height=160;mobilePaint=canvas.getContext('2d');mobileMap=new THREE.CanvasTexture(canvas);mobileMap.colorSpace=THREE.SRGBColorSpace;mobileMap.generateMipmaps=false;mobileMap.minFilter=THREE.LinearFilter;
 mobileDisplay=mesh(new THREE.PlaneGeometry(.46,.136),new THREE.MeshBasicMaterial({map:mobileMap,toneMapped:false}));mobileDisplay.position.set(0,-.005,.108);mobileDisplay.castShadow=false;spill.visible=!quality.mobile;}
 batchStaticScenery(group,{minObjects:2,exclude:[...caseGroup.children.filter(c=>c.isGroup),mobileDisplay],dispose:false});
 let lastSeconds=-1;
 function update(){
  const seconds=clock.remainingSeconds;
  if(seconds!==lastSeconds){
   const text=formatCountdown(seconds).replace(':','');
   if(mobilePaint){
    const ctx=mobilePaint;ctx.fillStyle='#100302';ctx.fillRect(0,0,512,160);ctx.shadowColor='#ff1907';
    [-.187,-.081,.081,.187].forEach((x,i)=>{const active=patterns[Number(text[i])];
     for(const[key,[sx,sy,vertical]]of Object.entries(positions)){
      const on=active.includes(key);ctx.save();ctx.translate(256+(x+sx)*1050,85-sy*1050);ctx.scale(1050,-1050);if(vertical)ctx.rotate(Math.PI/2);ctx.scale(vertical?.76:1,1);
      ctx.beginPath();ctx.moveTo(-length/2,0);ctx.lineTo(-length/2+b,thickness/2);ctx.lineTo(length/2-b,thickness/2);ctx.lineTo(length/2,0);ctx.lineTo(length/2-b,-thickness/2);ctx.lineTo(-length/2+b,-thickness/2);ctx.closePath();ctx.fillStyle=on?'#ff3928':'#230705';ctx.shadowBlur=on?7:0;ctx.fill();ctx.restore();
     }
    });ctx.fillStyle='#ff3928';for(const y of[65,105]){ctx.beginPath();ctx.arc(256,y,4,0,Math.PI*2);ctx.fill();}ctx.shadowBlur=0;mobileMap.needsUpdate=true;
   }
   lastSeconds=seconds;
  }
  return seconds;
 }
 update();
 return {group,display:mobileDisplay,start:()=>clock.start(),reset(){clock.reset();update();},update,get status(){return clock.status;}};
}
