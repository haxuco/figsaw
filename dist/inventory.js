export const ITEMS=Object.freeze({
 key:{name:'Shackle key',icon:'key'},scissors:{name:'Scissors',icon:'scissors'},string:{name:'Cotton string',icon:'string'},
 hammer:{name:'Claw hammer',icon:'hammer'},screwdriver:{name:'Screwdriver',icon:'screwdriver'},ratchet:{name:'Ratchet wrench',icon:'ratchet'},allen:{name:'Allen socket set',icon:'allen'},
 caster:{name:'Salvaged caster',icon:'caster'},seat:{name:'Salvaged seat',icon:'seat'},base:{name:'Salvaged base',icon:'base'},
 saw:{name:'Handsaw',icon:'saw'},axe:{name:'Fire axe',icon:'axe'},charger:{name:'Charger + cable',icon:'charger'},
 chain0:{name:'Hoist chain 01',icon:'chain'},chain1:{name:'Hoist chain 02',icon:'chain'},chain2:{name:'Hoist chain 03',icon:'chain'}
});
export function createInventory(){
 const collected=new Set();let equipped=null,revision=0;
 return {add(id){if(!ITEMS[id]||collected.has(id))return false;collected.add(id);revision++;return true;},
 remove(id){if(!collected.delete(id))return false;if(equipped===id)equipped=null;revision++;return true;},
 equip(id){if(!collected.has(id))return false;equipped=id;revision++;return true;},
 putAway(){if(equipped!==null){equipped=null;revision++;}},has:id=>collected.has(id),
 reset(){collected.clear();equipped=null;revision++;},get equipped(){return equipped;},get items(){return [...collected];},get revision(){return revision;}};
}
const drawings={
 key:'<circle cx="29" cy="25" r="12"/><path d="M37 34l29 29m-8-8l7-7m-16-2l7-7"/>',
 scissors:'<circle cx="24" cy="61" r="10"/><circle cx="55" cy="61" r="10"/><path d="M30 53L58 15M49 53L22 15"/><circle cx="40" cy="40" r="3"/>',
 string:'<path d="M26 18h28v44H26zM21 18h38M21 62h38M26 28h28M26 36h28M26 44h28M26 52h28M54 54q20 2 10 14"/>',
 hammer:'<path d="M36 30v38h9V30M18 20l9-8h29l10 9-15-3v14H24V20z"/>',
 screwdriver:'<path d="M35 46V20l5-10 5 10v26M30 47h20v20H30zM36 53v9M44 53v9"/>',
 ratchet:'<path d="M36 34v32h9V34"/><circle cx="40" cy="24" r="13"/><path d="M35 20h10v9H35z"/>',
 allen:'<path d="M16 36V17h17v19M40 36V17h17v19M13 36h23v25H13zM37 36h23v25H37zM19 44h11M43 44h11"/>',
 caster:'<path d="M40 12v20l12 10M28 32h24"/><circle cx="32" cy="53" r="14"/><circle cx="53" cy="51" r="12"/>',
 seat:'<path d="M15 30l47-5 7 29-48 7zM23 36l39-4M24 43l40-4M25 50l40-4"/>',
 base:'<path d="M40 22v21m0 0L14 55m26-12l26 12m-26-12l-3 25m3-25L17 31m23 12l24-15"/><circle cx="40" cy="43" r="7"/>',
 saw:'<path d="M11 21h17v27H11zM28 24l41 6-3 19-6-5-5 6-5-5-5 5-5-5-5 5-7-4z"/>',
 axe:'<path d="M38 27L27 69l9 2 13-44M19 17l23 3 21-8 6 25-25-6-25 9z"/>',
 charger:'<rect x="16" y="16" width="31" height="35" rx="5"/><path d="M27 16v-6m11 6v-6M46 35q23-6 19 15T37 65l-8-1"/>',
 chain:'<path d="M27 39l-5 5a11 11 0 0016 16l12-12a11 11 0 00-1-16M53 41l5-5a11 11 0 00-16-16L30 32a11 11 0 001 16M33 47l14-14"/>'
};
export function itemIcon(id){return `<svg viewBox="0 0 80 80" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${drawings[ITEMS[id]?.icon]??''}</svg>`;}
export function createInventoryUI({inventory,onEquip,onPutAway,onOpen=()=>{},canOpen=()=>true}){
 const button=document.createElement('button');button.id='inventory-button';button.type='button';button.textContent='Inventory';button.setAttribute('aria-haspopup','dialog');document.body.append(button);
 const panel=document.createElement('section');panel.id='inventory-panel';panel.hidden=true;panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','Inventory');
 panel.innerHTML='<header><button type="button" data-back>← Back</button><h2>Inventory</h2></header><p>Select an item to equip it.</p><div class="inventory-grid"></div><p data-empty>You haven’t collected anything yet.</p>';document.body.append(panel);
 const equipped=document.createElement('div');equipped.id='equipped-item';equipped.hidden=true;equipped.innerHTML='<span></span><button type="button">Put away</button>';document.body.append(equipped);
 let last=-1,active=false,lastFocus=null;
 function close(){panel.hidden=true;active=false;(lastFocus?.isConnected?lastFocus:button).focus({preventScroll:true});}
 function open(){if(!canOpen())return;onOpen();lastFocus=document.activeElement;panel.hidden=false;active=true;sync();panel.querySelector('[data-back]').focus({preventScroll:true});}
 panel.querySelector('[data-back]').onclick=close;button.onclick=()=>active?close():open();
 equipped.querySelector('button').onclick=()=>{onPutAway();sync();};
 panel.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();}else if(e.key==='Tab'){const buttons=[...panel.querySelectorAll('button')],i=buttons.indexOf(document.activeElement);e.preventDefault();buttons[(i+(e.shiftKey?-1:1)+buttons.length)%buttons.length].focus();}});
 function sync(){
  if(last===inventory.revision)return;last=inventory.revision;
  const grid=panel.querySelector('.inventory-grid');grid.replaceChildren();
  for(const id of inventory.items){const b=document.createElement('button');b.type='button';b.innerHTML=itemIcon(id)+`<span>${ITEMS[id].name}</span>`;b.setAttribute('aria-pressed',String(id===inventory.equipped));b.onclick=()=>{close();onEquip(id);sync();};grid.append(b);}
  panel.querySelector('[data-empty]').hidden=inventory.items.length>0;
  equipped.hidden=!inventory.equipped;equipped.querySelector('span').textContent=inventory.equipped?ITEMS[inventory.equipped].name:'';
  button.textContent=`Inventory${inventory.items.length?' · '+inventory.items.length:''}`;
 }
 return {open,close,sync,setHidden(value){button.hidden=value;if(value){panel.hidden=true;active=false;equipped.hidden=true;}else equipped.hidden=!inventory.equipped;},get active(){return active;}};
}
