export function createSawMenu({onShackle,onAnimal,canSawShackle,canSawAnimal}){
 const dialog=document.querySelector('#saw-menu'),canvas=document.querySelector('#scene');
 const shackle=dialog.querySelector('[data-saw="shackle"]'),animal=dialog.querySelector('[data-saw="animal"]'),cancel=dialog.querySelector('[data-saw="cancel"]');
 function hide(focus=false){if(dialog.open)dialog.close();if(focus)canvas.focus({preventScroll:true});}
 function show(){shackle.disabled=!canSawShackle();animal.disabled=!canSawAnimal();dialog.showModal();(shackle.disabled?(animal.disabled?cancel:animal):shackle).focus({preventScroll:true});}
 shackle.addEventListener('click',()=>{if(!canSawShackle())return;hide(true);onShackle();});
 animal.addEventListener('click',()=>{if(!canSawAnimal())return;hide(true);onAnimal();});
 cancel.addEventListener('click',()=>hide(true));
 dialog.addEventListener('cancel',event=>{event.preventDefault();hide(true);});
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)hide(true);}});
 return {show,hide,get active(){return dialog.open;}};
}
