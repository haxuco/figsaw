export const SHARE_WIDTH=1080,SHARE_HEIGHT=1080,SHARE_URL='https://figsaw.haxuco.chatgpt.site/';
export function attemptLabel(count){return `Attempt ${Number.isSafeInteger(count)&&count>0?count:1}`;}

// The artwork is a single pre-render of the real game model. It is fetched only
// after a loss, keeping downloads and WebGL allocations out of room startup.
let artworkPromise;
function loadArtwork(){
 if(!artworkPromise)artworkPromise=new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>{artworkPromise=null;reject(new Error('Artwork unavailable'));};image.src=new URL('./assets/figsaw-share.webp',import.meta.url).href;});
 return artworkPromise;
}
function fittedText(ctx,text,x,y,font,width){ctx.font=font;const scale=Math.min(1,width/ctx.measureText(text).width);ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.fillText(text,0,0);ctx.restore();}
export function drawShareGraphic(ctx,{attempt,artwork}){
 ctx.clearRect(0,0,SHARE_WIDTH,SHARE_HEIGHT);
 ctx.fillStyle='#0b0d0b';ctx.fillRect(0,0,SHARE_WIDTH,SHARE_HEIGHT);
 const glow=ctx.createRadialGradient(670,610,20,670,610,520);glow.addColorStop(0,'#502026');glow.addColorStop(.5,'#271517');glow.addColorStop(1,'#0b0d0b');ctx.fillStyle=glow;ctx.fillRect(0,0,SHARE_WIDTH,SHARE_HEIGHT);
 let seed=8521;for(let i=0;i<3000;i++){seed=(seed*1664525+1013904223)>>>0;const x=seed%SHARE_WIDTH;seed=(seed*1664525+1013904223)>>>0;ctx.fillStyle=i%3?'#d5c6af07':'#00000022';ctx.fillRect(x,seed%SHARE_HEIGHT,1+(i%3),1);}
 ctx.strokeStyle='#6b393a';ctx.lineWidth=1;ctx.strokeRect(24.5,24.5,1031,1031);ctx.strokeStyle='#82373540';ctx.beginPath();ctx.arc(670,610,290,0,Math.PI*2);ctx.stroke();
 ctx.fillStyle='#e64045';ctx.fillRect(68,74,33,3);ctx.fillStyle='#b9aaa1';ctx.font='19px monospace';ctx.fillText('A DESIGN ESCAPE GAME',116,82);
 ctx.fillStyle='#f3eee2';ctx.font='600 148px "Grenze Gotisch",Georgia,serif';ctx.fillText('Figsaw',64,229);
 ctx.fillStyle='#e1d9ca';ctx.font='500 48px "Grenze Gotisch",Georgia,serif';ctx.fillText("Let's play a game",70,290);
 ctx.fillStyle='#b9aaa1';ctx.font='18px monospace';ctx.fillText('ESCAPE ATTEMPT',72,389);
 ctx.fillStyle='#ff454b';fittedText(ctx,String(attemptLabel(attempt).slice(8)).padStart(2,'0'),65,502,'500 112px monospace',230);
 ctx.fillStyle='#141510';ctx.beginPath();ctx.ellipse(670,1004,280,24,0,0,Math.PI*2);ctx.fill();
 if(artwork)ctx.drawImage(artwork,235,265,790,790);
 ctx.fillStyle='#e1d9ca';ctx.font='30px Georgia,serif';ctx.fillText('Can you escape?',70,952);
 ctx.fillStyle='#a3968f';ctx.font='22px monospace';ctx.fillText('figsaw.haxuco.chatgpt.site',70,1008);
}

export function createGameOverShare(root){
 const canvas=root.querySelector('canvas'),save=root.querySelector('[data-save-graphic]'),share=root.querySelector('[data-share-graphic]'),status=root.querySelector('[data-share-status]');
 let ctx,revision=0,currentAttempt=1,blob=null;
 share.hidden=true;save.disabled=true;
 const toBlob=()=>new Promise((resolve,reject)=>canvas.toBlob(result=>result?resolve(result):reject(new Error('Image unavailable')),'image/png'));
 async function prepare(attempt){
  if(!ctx){canvas.width=SHARE_WIDTH;canvas.height=SHARE_HEIGHT;ctx=canvas.getContext('2d');}
  const ticket=++revision;currentAttempt=attempt;blob=null;save.disabled=true;share.hidden=true;status.textContent='';
  canvas.setAttribute('aria-label',`${attemptLabel(attempt)}. Figsaw on his tricycle. Let's play a game.`);
  root.querySelector('[data-attempt]').textContent=attemptLabel(attempt);
  drawShareGraphic(ctx,{attempt});
  try{
   const [artwork]=await Promise.all([loadArtwork(),document.fonts?.load('600 148px "Grenze Gotisch"')]);
   if(ticket!==revision)return;
   drawShareGraphic(ctx,{attempt,artwork});const image=await toBlob();if(ticket!==revision)return;
   blob=image;save.disabled=false;
   try{share.hidden=!(navigator.share&&navigator.canShare?.({files:[new File([blob],'figsaw.png',{type:'image/png'})]}));}catch{share.hidden=true;}
  }catch{if(ticket===revision)status.textContent='The graphic couldn’t load. Try again to reload it.';}
 }
 function download(){
  if(!blob)return;
  const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`figsaw-attempt-${currentAttempt}.png`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
  status.textContent='Graphic saved. Ready to post.';
 }
 save.addEventListener('click',download);
 share.addEventListener('click',async()=>{
  if(!blob)return;
  const file=new File([blob],`figsaw-attempt-${currentAttempt}.png`,{type:'image/png'});
  try{await navigator.share({files:[file],title:`Figsaw — ${attemptLabel(currentAttempt)}`,text:"Let's play a game. Can you escape? "+SHARE_URL});status.textContent='Graphic shared.';}catch(error){if(error.name!=='AbortError')status.textContent='Sharing is unavailable here. Save the graphic instead.';}
 });
 return{prepare,reset(){revision++;blob=null;save.disabled=true;share.hidden=true;status.textContent='';}};
}
