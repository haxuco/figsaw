export function createRestraintMenu(onDetach){
 const menu=document.querySelector('#chain-menu'),button=menu.querySelector('button'),canvas=document.querySelector('#scene');
 function hide(returnFocus=false){menu.hidden=true;if(returnFocus)canvas.focus({preventScroll:true});}
 function show(x,y){
  menu.hidden=false;
  menu.style.left=`${Math.max(8,Math.min(x,innerWidth-menu.offsetWidth-8))}px`;
  menu.style.top=`${Math.max(8,Math.min(y,innerHeight-menu.offsetHeight-8))}px`;
  button.focus({preventScroll:true});
 }
 button.addEventListener('click',()=>{hide(true);onDetach();});
 menu.addEventListener('contextmenu',event=>event.preventDefault());
 document.addEventListener('pointerdown',event=>{if(!menu.hidden&&!menu.contains(event.target))hide();},true);
 document.addEventListener('keydown',event=>{if(menu.hidden)return;if(event.code==='Escape'){event.preventDefault();event.stopPropagation();hide(true);}},true);
 window.addEventListener('blur',()=>hide());
 return {show,hide,get active(){return !menu.hidden;}};
}
