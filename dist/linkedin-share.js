import {createLinkedInClient,LINKEDIN_POST_TEXT,PROMO_URL} from './linkedin-client.js';
export function createLinkedInShare({client=createLinkedInClient()}={}){
 const dialog=document.createElement('dialog');dialog.className='linkedin-share-dialog';dialog.setAttribute('aria-labelledby','linkedin-preview-title');
 dialog.innerHTML=`<header><div><p class="li-eyebrow">SHARE YOUR ESCAPE</p><h2 id="linkedin-preview-title">Preview your post</h2></div><button type="button" data-close aria-label="Close post preview">×</button></header><div class="li-media-tabs" role="group" aria-label="Post attachment"><button type="button" data-kind="video" aria-pressed="true">Game video</button><button type="button" data-kind="graphic" aria-pressed="false">My result graphic</button></div><article class="li-post"><div class="li-profile"><span class="li-avatar" aria-hidden="true">in</span><div><strong data-account>Your LinkedIn profile</strong><small>Public post · Anyone on LinkedIn</small></div></div><p class="li-post-text"></p><video controls playsinline preload="none" poster="./assets/figsaw-promo-poster.webp" aria-label="Figsaw video preview"></video><img hidden alt="Your Figsaw result graphic"></article><p class="li-consent">Nothing is posted when you connect. Review this preview, then choose Post to LinkedIn.</p><p data-status role="status" aria-live="polite"></p><footer><div class="li-secondary"><button type="button" data-download>Save video</button><button type="button" data-copy>Copy text</button></div><button class="li-primary" type="button" data-publish>Connect LinkedIn</button></footer>`;
 document.body.append(dialog);
 const video=dialog.querySelector('video'),image=dialog.querySelector('img'),status=dialog.querySelector('[data-status]'),publish=dialog.querySelector('[data-publish]'),download=dialog.querySelector('[data-download]'),close=dialog.querySelector('[data-close]');
 dialog.querySelector('.li-post-text').textContent=LINKEDIN_POST_TEXT;
 let graphic=null,filename='',objectUrl=null,kind='video',busy=false,finished=false,attempted=false,requestId='',lastFocus=null;
 const refresh=()=>{publish.textContent=finished?'Posted':client.connected?'Post to LinkedIn':'Connect LinkedIn';publish.disabled=busy||finished||attempted;dialog.querySelector('[data-account]').textContent=client.name||'Your LinkedIn profile';};
 function setKind(next){if(busy)return;kind=next;video.pause();video.hidden=kind!=='video';image.hidden=kind!=='graphic';download.textContent=kind==='video'?'Save video':'Save graphic';for(const button of dialog.querySelectorAll('[data-kind]'))button.setAttribute('aria-pressed',String(button.dataset.kind===kind));}
 for(const button of dialog.querySelectorAll('[data-kind]'))button.onclick=()=>setKind(button.dataset.kind);
 close.onclick=()=>{if(!busy)dialog.close();};
 dialog.addEventListener('cancel',event=>{if(busy)event.preventDefault();});
 dialog.addEventListener('close',()=>{video.pause();video.removeAttribute('src');video.load();if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl=null;if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});});
 dialog.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(LINKEDIN_POST_TEXT);status.textContent='Post text copied.';}catch{status.textContent='Select and copy the text from the preview.';}};
 download.onclick=()=>{const a=document.createElement('a');a.href=kind==='video'?PROMO_URL:objectUrl;a.download=kind==='video'?'Figsaw-LinkedIn-Promo.mp4':filename;a.click();};
 publish.onclick=async()=>{
  if(busy||finished||attempted)return;
  busy=true;close.disabled=true;for(const b of dialog.querySelectorAll('[data-kind]'))b.disabled=true;refresh();
  try{
   if(!client.connected){status.textContent='Complete LinkedIn sign-in in the new window.';await client.connect();status.textContent='Connected. Review your post, then choose Post to LinkedIn.';}
   else{attempted=true;video.pause();status.textContent=kind==='video'?'Uploading the video and publishing your post…':'Uploading the graphic and publishing your post…';const result=await client.post({kind,graphic,requestId,confirmed:true});finished=true;status.textContent='Posted to LinkedIn.';if(result.url){const a=document.createElement('a');a.href=result.url;a.textContent=' View post';a.target='_blank';a.rel='noopener noreferrer';status.append(a);}}
  }catch(error){status.textContent=error.message;}
  finally{busy=false;close.disabled=false;for(const b of dialog.querySelectorAll('[data-kind]'))b.disabled=attempted;refresh();}
 };
 return {open({blob,name}){if(dialog.open)return;lastFocus=document.activeElement;graphic=blob;filename=name;requestId=crypto.randomUUID();finished=attempted=false;status.textContent='';objectUrl=URL.createObjectURL(blob);image.src=objectUrl;video.src=PROMO_URL;for(const b of dialog.querySelectorAll('[data-kind]'))b.disabled=false;setKind('video');refresh();dialog.showModal();close.focus();},close(){if(!busy&&dialog.open)dialog.close();}};
}
