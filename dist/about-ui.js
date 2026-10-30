import {ABOUT_CREDITS} from './info-posters.js';

export function createAboutUI(){
 const element=document.createElement('section');element.className='about-poster';element.setAttribute('aria-labelledby','about-title');
 element.innerHTML='<p class="poster-eyebrow">Figpal Labs / Office notices</p><h2 id="about-title">About Figsaw</h2><p class="poster-caption">The people behind the room</p><dl class="about-credits"></dl><footer>FIGSAW · figsaw.figma.site</footer>';
 const credits=element.querySelector('dl');
 for(const credit of ABOUT_CREDITS){
  const row=document.createElement('div'),label=document.createElement('dt'),name=document.createElement('dd'),link=document.createElement('a');
  label.textContent=credit.label;link.textContent=credit.name;link.href=credit.url;link.target='_blank';link.rel=`noopener noreferrer${credit.sponsored?' sponsored':''}`;name.append(link);row.append(label,name);credits.append(row);
 }
 return {element};
}
