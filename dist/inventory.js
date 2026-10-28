export const ITEMS=Object.freeze({
 key:{name:'Shackle key'},scissors:{name:'Scissors'},string:{name:'Cotton string'},
 ratchet:{name:'Ratchet wrench'},
 caster:{name:'Salvaged caster'},seat:{name:'Salvaged seat'},base:{name:'Salvaged base'},
 saw:{name:'Handsaw'},axe:{name:'Fire axe'},charger:{name:'Charger + cable'},
 chain0:{name:'Hoist chain 01'},chain1:{name:'Hoist chain 02'},chain2:{name:'Hoist chain 03'}
});
export function createInventory(){
 const collected=new Set();let equipped=null,revision=0,lastPickup=null;
 return {add(id){if(!ITEMS[id]||collected.has(id))return false;collected.add(id);lastPickup={id};revision++;return true;},
 remove(id){if(!collected.delete(id))return false;if(equipped===id)equipped=null;revision++;return true;},
 equip(id){if(!collected.has(id))return false;equipped=id;revision++;return true;},
 putAway(){if(equipped!==null){equipped=null;revision++;}},has:id=>collected.has(id),
 reset(){collected.clear();equipped=null;lastPickup=null;revision++;},get lastPickup(){return lastPickup;},get equipped(){return equipped;},get items(){return [...collected];},get revision(){return revision;}};
}
export function createInventoryUI({inventory,previews,onEquip,onPutAway,onOpen=()=>{},canOpen=()=>true}){
 const button=document.createElement('button');button.id='inventory-button';button.type='button';button.textContent='Inventory';button.setAttribute('aria-haspopup','dialog');document.body.append(button);
 const panel=document.createElement('section');panel.id='inventory-panel';panel.hidden=true;panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','Inventory');
 panel.innerHTML='<header><button type="button" data-back>← Back</button><h2>Inventory</h2></header><div class="inventory-grid"></div><p data-empty>You haven’t collected anything yet.</p>';document.body.append(panel);
 const equipped=document.createElement('div');equipped.id='equipped-item';equipped.hidden=true;equipped.innerHTML='<span></span><button type="button">Put away</button>';document.body.append(equipped);
 const pickupNotice=document.createElement('p');pickupNotice.id='inventory-pickup-notice';pickupNotice.hidden=true;pickupNotice.setAttribute('role','status');pickupNotice.setAttribute('aria-live','polite');pickupNotice.setAttribute('aria-atomic','true');document.body.append(pickupNotice);
 let last=-1,active=false,lastFocus=null,lastPickup=null,pickupTimeout=null;
 function hidePickupNotice(){clearTimeout(pickupTimeout);pickupTimeout=null;pickupNotice.hidden=true;pickupNotice.textContent='';}
 function close(){hidePickupNotice();panel.hidden=true;active=false;(lastFocus?.isConnected?lastFocus:button).focus({preventScroll:true});}
 function open(){if(!canOpen())return;hidePickupNotice();onOpen();lastFocus=document.activeElement;panel.hidden=false;active=true;sync();panel.querySelector('[data-back]').focus({preventScroll:true});}
 panel.querySelector('[data-back]').onclick=close;button.onclick=()=>active?close():open();
 equipped.querySelector('button').onclick=()=>{onPutAway();sync();};
 panel.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();}else if(e.key==='Tab'){const buttons=[...panel.querySelectorAll('button')],i=buttons.indexOf(document.activeElement);e.preventDefault();buttons[(i+(e.shiftKey?-1:1)+buttons.length)%buttons.length].focus();}});
 function sync(){
  if(last===inventory.revision)return;last=inventory.revision;previews.clearPending();
  if(lastPickup!==inventory.lastPickup){
   lastPickup=inventory.lastPickup;hidePickupNotice();
   if(lastPickup&&!active&&!button.hidden){pickupNotice.textContent='To use it, equip it from the inventory menu.';pickupNotice.hidden=false;pickupTimeout=setTimeout(hidePickupNotice,4500);}
  }
  const grid=panel.querySelector('.inventory-grid');grid.replaceChildren();
  for(const id of inventory.items){const b=document.createElement('button');b.type='button';b.innerHTML=`<span class="inventory-model" aria-hidden="true"></span><span>${ITEMS[id].name}</span>`;b.setAttribute('aria-pressed',String(id===inventory.equipped));b.onclick=()=>{close();onEquip(id);sync();};grid.append(b);previews.attach(id,b.querySelector('.inventory-model'));}
  panel.querySelector('[data-empty]').hidden=inventory.items.length>0;
  equipped.hidden=!inventory.equipped;equipped.querySelector('span').textContent=inventory.equipped?ITEMS[inventory.equipped].name:'';
  button.textContent=`Inventory${inventory.items.length?' · '+inventory.items.length:''}`;
 }
 return {open,close,sync,setHidden(value){button.hidden=value;if(value){hidePickupNotice();panel.hidden=true;active=false;equipped.hidden=true;}else equipped.hidden=!inventory.equipped;},get active(){return active;}};
}
