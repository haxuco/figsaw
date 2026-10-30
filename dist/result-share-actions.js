// Small, local SVGs keep result controls crisp without a font or icon dependency.
const icons={
 retry:'<path d="M3 10a9 9 0 1 1 2.6 8.4M3 4v6h6"/>',
 linkedin:'<path fill="currentColor" stroke="none" d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.6v12H3.4V9Zm5.8 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.6v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6H9.2V9Z"/>',
 x:'<path fill="currentColor" stroke="none" d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l8.2-9.4L2.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L8.4 4H6.6l11.2 16Z"/>',
 instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
 facebook:'<path fill="currentColor" stroke="none" d="M14 22v-9h3l.5-3.5H14V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8v2.4H7V13h3.2v9H14Z"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 15v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5"/>',
 share:'<path d="M12 16V3m-4 4 4-4 4 4M5 10H3v11h18V10h-2"/>',
 link:'<path d="m10 13 4-4m-6 7-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 1 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 1)"/>'
};
function icon(name){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[name]}</svg>`;}
export function resultShareURL(platform,{text='',url}){
 const target=new URL(platform==='x'?'https://x.com/intent/tweet':'https://www.facebook.com/sharer/sharer.php');
 if(platform==='x'){target.searchParams.set('text',text.replaceAll(url,'').trim());target.searchParams.set('url',url);}
 else target.searchParams.set('u',url);
 return target.href;
}
export function canShareGraphic(file,nav=navigator){try{return !!(nav.share&&nav.canShare?.({files:[file]}));}catch{return false;}}

export function createResultShareActions(root,{url,getResult,download}){
 const status=root.querySelector('[data-share-status]'),more=root.querySelector('[data-share-graphic]');
 const platforms=['x','instagram','facebook'].map(name=>[name,root.querySelector(`[data-share-${name}]`)]);
 for(const node of root.querySelectorAll('[data-result-icon]'))node.innerHTML=icon(node.dataset.resultIcon);
 let dialog=null,objectURL=null,lastFocus=null,revision=0;
 const fileFor=result=>new File([result.blob],result.name,{type:'image/png'});
 function ready(){
  revision++;const result=getResult(),native=!!result&&canShareGraphic(fileFor(result));
  for(const [,button]of platforms)if(button)button.disabled=!result;
  more.disabled=!result;more.hidden=false;
  more.setAttribute('aria-label',native?'More sharing options':'Copy game link');
  more.title=native?'Share using another app':'Copy game link';
  const label=more.querySelector('[data-share-label]'),symbol=more.querySelector('[data-result-icon]');
  if(label)label.textContent=native?'More':'Copy link';if(symbol)symbol.innerHTML=icon(native?'share':'link');
 }
 async function shareNative(result,{instagram=false,feedback=status}={}){
  const ticket=revision;
  try{
   await navigator.share(instagram?{files:[fileFor(result)]}:{files:[fileFor(result)],title:result.title,text:result.text});
   if(ticket===revision)feedback.textContent='Graphic handed to your sharing app.';
  }catch(error){if(ticket===revision&&error.name!=='AbortError')feedback.textContent='Sharing is unavailable here. Save the graphic and upload it to your post.';}
 }
 for(const [platform,button]of platforms)button?.addEventListener('click',()=>{
  const result=getResult();if(!result)return;
  if(platform==='instagram'){openInstagram(result);return;}
  window.open(resultShareURL(platform,{text:result.text,url}),'_blank','noopener,noreferrer');
  status.textContent=`${platform==='x'?'X':'Facebook'} opens with the game link. Use Save to attach your graphic.`;
 });
 more.addEventListener('click',async()=>{
  const result=getResult();if(!result)return;
  if(canShareGraphic(fileFor(result)))return shareNative(result);
  const ticket=revision;
  try{await navigator.clipboard.writeText(url);if(ticket===revision)status.textContent='Game link copied.';}
  catch{if(ticket===revision)status.textContent=`Copy this link: ${url}`;}
 });
 function openInstagram(result){
  if(!dialog){
   dialog=document.createElement('dialog');dialog.className='instagram-share-dialog';dialog.setAttribute('aria-label','Share on Instagram');
   dialog.innerHTML='<header><h2>Share on Instagram</h2><button type="button" data-close aria-label="Close Instagram preview">×</button></header><img alt="Your Figsaw result graphic"><p data-instructions></p><textarea readonly aria-label="Instagram caption" rows="3"></textarea><p data-status role="status" aria-live="polite"></p><footer><button type="button" data-copy>Copy caption</button><button type="button" data-export></button><button type="button" data-save>Save graphic</button><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Open Instagram ↗</a></footer>';
   document.body.append(dialog);dialog.querySelector('[data-close]').onclick=()=>dialog.close();
   dialog.addEventListener('close',()=>{if(objectURL)URL.revokeObjectURL(objectURL);objectURL=null;dialog.querySelector('img').removeAttribute('src');lastFocus?.focus({preventScroll:true});});
  }
  if(dialog.open)return;
  lastFocus=document.activeElement;objectURL=URL.createObjectURL(result.blob);dialog.querySelector('img').src=objectURL;
  dialog.querySelector('textarea').value=result.text;
  const feedback=dialog.querySelector('[data-status]');feedback.textContent='';
  const native=canShareGraphic(fileFor(result));
  dialog.querySelector('[data-instructions]').textContent=native?'Choose Instagram in your device’s share menu. If it isn’t listed, save the graphic and upload it in Instagram.':'Save the graphic, then upload it in a new Instagram post. You can copy the caption below.';
  const saveButton=dialog.querySelector('[data-save]');saveButton.hidden=!native;saveButton.onclick=()=>{download();feedback.textContent='Graphic downloaded. Open Instagram to add it to a post.';};
  const exportButton=dialog.querySelector('[data-export]');exportButton.textContent=native?'Share graphic':'Save graphic';
  exportButton.onclick=()=>{if(native)shareNative(result,{instagram:true,feedback});else{download();feedback.textContent='Graphic downloaded. Open Instagram to add it to a post.';}};
  dialog.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(result.text);feedback.textContent='Caption copied.';}catch{const area=dialog.querySelector('textarea');area.focus();area.select();feedback.textContent='Copy the selected caption.';}};
  dialog.showModal();dialog.querySelector('[data-close]').focus();
 }
 ready();
 return {ready,reset(){dialog?.close();ready();}};
}
