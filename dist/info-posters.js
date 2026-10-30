import * as THREE from './vendor/three.module.js';

export const ABOUT_CREDITS=Object.freeze([
 {label:'Made by',name:'Hang Xu',url:'https://www.linkedin.com/in/haxuco/'},
 {label:'Voice by',name:'Jeremy Miller',url:'https://www.linkedin.com/in/jmillspaysbills/'},
 {label:'Music by',name:'Marc van der Meulen',url:'https://www.youtube.com/watch?v=PM3I3_L0Vio'},
 {label:'Made with',name:'Figma Make',url:'https://www.figma.com/make/?utm_medium=affiliate&utm_source=0f12643e09c6&utm_campaign=make&utm_content=make&pscd=psxid.figma.com&ps_partner_key=MGYxMjY0M2UwOWM2&ps_xid=In10225ck5P4U0&gsxid=In10225ck5P4U0&gspk=MGYxMjY0M2UwOWM2',sponsored:true}
]);

// Reuse small world textures; inspected boards have accessible HTML on the
// same surface so names and links remain legible without large GPU textures.
export function createInfoPosterEntries(){
 return ['about','top10'].map(id=>{
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=640;
  const ctx=canvas.getContext('2d'),map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
  const title=id==='about'?'About Figsaw':'Top 10 escapes';
  function paint(entries=[]){
   ctx.fillStyle='#c3b899';ctx.fillRect(0,0,512,640);
   const age=ctx.createRadialGradient(250,280,80,240,300,400);age.addColorStop(0,'#d5cbb0');age.addColorStop(1,'#81765b');ctx.fillStyle=age;ctx.fillRect(0,0,512,640);
   ctx.strokeStyle='#564f3a';ctx.lineWidth=2;ctx.strokeRect(22,22,468,596);
   ctx.fillStyle='#444a3b';ctx.font='bold 13px Arial';ctx.fillText('FIGPAL LABS  /  OFFICE NOTICES',44,57);
   ctx.fillStyle='#262d25';ctx.font='bold 47px Georgia';ctx.fillText(id==='about'?'About Figsaw':'Top 10',42,120);
   ctx.font='14px Arial';ctx.fillText(id==='about'?'THE PEOPLE BEHIND THE ROOM':'THE ONES WHO MADE IT',44,151);
   ctx.fillRect(44,174,424,2);
   if(id==='about')ABOUT_CREDITS.forEach((credit,i)=>{
    const y=220+i*84;ctx.fillStyle='#5b604b';ctx.font='15px Arial';ctx.fillText(credit.label.toUpperCase(),44,y);
    ctx.fillStyle='#262d25';ctx.font='bold 26px Georgia';ctx.fillText(credit.name,44,y+34,424);
   });
   else{
    ctx.fillStyle='#464b3c';ctx.font='15px Arial';ctx.fillText('Both Figpals saved · Time remaining',44,203);
    for(let i=0;i<10;i++){
     const y=242+i*30,entry=entries[i];ctx.font='15px Arial';ctx.fillText(String(i+1).padStart(2,'0'),44,y);
     ctx.fillText(entry?.name??'—',85,y,280);
     if(entry){const seconds=Math.max(0,Math.floor(entry.remainingSeconds));ctx.textAlign='right';ctx.fillText(`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`,468,y);ctx.textAlign='left';}
     ctx.fillStyle='#484c3930';ctx.fillRect(44,y+8,424,1);ctx.fillStyle='#464b3c';
    }
   }
   ctx.font='13px Arial';ctx.fillStyle='#484e3d';ctx.fillText('FIGSAW  /  figsaw.figma.site',44,589);
   for(let i=0;i<160;i++){ctx.fillStyle=`rgba(45,39,21,${.015+(i%5)*.008})`;ctx.fillRect((i*137)%512,(i*71)%640,1+i%4,2+i%11);}
   ctx.strokeStyle='#51452e28';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(5,309);ctx.lineTo(506,319);ctx.stroke();
   ctx.strokeStyle='#51452e18';ctx.lineWidth=11;ctx.beginPath();ctx.arc(450,526,45,0,Math.PI*2);ctx.stroke();map.needsUpdate=true;
  }
  paint();return {id,title,width:512,height:640,map,infoPoster:true,paint};
 });
}
