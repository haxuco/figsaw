export function createRestraintMenu(onDetach,{canDetach=()=>true}={}){
 const menu=document.querySelector('#chain-menu'),button=menu.querySelector('button'),canvas=document.querySelector('#scene');
 function hide(returnFocus=false){menu.hidden=true;if(returnFocus)canvas.focus({preventScroll:true});}
 function show(x,y){
  button.setAttribute('aria-disabled',String(!canDetach()));
  menu.hidden=false;
  menu.style.left=`${Math.max(8,Math.min(x,innerWidth-menu.offsetWidth-8))}px`;
  menu.style.top=`${Math.max(8,Math.min(y,innerHeight-menu.offsetHeight-8))}px`;
  button.focus({preventScroll:true});
 }
 function detach(){if(!canDetach())return;hide(true);onDetach();}
 button.addEventListener('click',detach);
 menu.addEventListener('contextmenu',event=>event.preventDefault());
 document.addEventListener('pointerdown',event=>{if(!menu.hidden&&!menu.contains(event.target))hide();},true);
 document.addEventListener('keydown',event=>{
  if(menu.hidden)return;
  if(event.code==='Escape'){event.preventDefault();event.stopPropagation();hide(true);}
  else if(event.code==='KeyB'&&event.altKey&&event.metaKey&&!event.ctrlKey&&!event.shiftKey){event.preventDefault();event.stopPropagation();if(!event.repeat)detach();}
 },true);
 window.addEventListener('blur',()=>hide());
 return {show,hide,get active(){return !menu.hidden;}};
}
