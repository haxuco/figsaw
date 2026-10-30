export function createAboutUI({button,canOpen=()=>true,onOpen=()=>{},onClose=()=>{}}){
 const dialog=document.createElement('dialog');dialog.id='about-dialog';dialog.setAttribute('aria-labelledby','about-title');
 dialog.innerHTML=`<button type="button" class="leaderboard-close" aria-label="Back to game">← Back</button>
  <h2 id="about-title">About Figsaw</h2>
  <dl class="about-credits">
   <div><dt>Made by</dt><dd><a href="https://www.linkedin.com/in/haxuco/" target="_blank" rel="noopener noreferrer">Hang Xu</a></dd></div>
   <div><dt>Voice by</dt><dd><a href="https://www.linkedin.com/in/jmillspaysbills/" target="_blank" rel="noopener noreferrer">Jeremy Miller</a></dd></div>
   <div><dt>Music by</dt><dd><a href="https://www.youtube.com/watch?v=PM3I3_L0Vio" target="_blank" rel="noopener noreferrer">Marc van der Meulen</a></dd></div>
   <div><dt>Made with</dt><dd><a href="https://www.figma.com/make/?utm_medium=affiliate&amp;utm_source=0f12643e09c6&amp;utm_campaign=make&amp;utm_content=make&amp;pscd=psxid.figma.com&amp;ps_partner_key=MGYxMjY0M2UwOWM2&amp;ps_xid=In10225ck5P4U0&amp;gsxid=In10225ck5P4U0&amp;gspk=MGYxMjY0M2UwOWM2" target="_blank" rel="noopener noreferrer sponsored">Figma Make</a></dd></div>
  </dl>`;
 document.body.append(dialog);
 dialog.querySelector('button').onclick=()=>dialog.close();
 dialog.addEventListener('close',()=>{onClose();button.focus({preventScroll:true});});
 button.onclick=()=>{if(dialog.open||!canOpen())return;dialog.showModal();onOpen();dialog.querySelector('button').focus({preventScroll:true});};
 return {close(){if(dialog.open)dialog.close();},get active(){return dialog.open;}};
}
