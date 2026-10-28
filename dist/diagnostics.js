// This mode is deliberately session-only; ordinary games never retain cheats.
export function createDiagnosticTrigger(activate,{now=()=>performance.now(),timeout=1600}={}){
 let typed='',last=-Infinity;
 return event=>{
  if(event.repeat||event.ctrlKey||event.metaKey||event.altKey||event.isComposing||event.target?.closest?.('input,textarea,select,[contenteditable="true"]')){typed='';return false;}
  if(event.key.length!==1){typed='';return false;}
  const time=now(),key=event.key.toLowerCase();if(time-last>timeout)typed='';last=time;
  typed='set'.startsWith(typed+key)?typed+key:key==='s'?'s':'';
  if(typed!=='set')return false;typed='';activate();return true;
 };
}

export function createDiagnostics({clock,actions,onActivate=()=>{},onExit=()=>{},onInvulnerability=()=>{},canRun=()=>true,historyLimit=12}){
 let enabled=false,invulnerable=false,message='',history=[];
 function immunity(value){invulnerable=enabled&&!!value;onInvulnerability(invulnerable);}
 function activate(){if(enabled)return;enabled=true;immunity(true);onActivate();message='Diagnostic mode on. Invulnerability enabled.';}
 return {
  activate,exit(){if(!enabled)return;clock.resume();enabled=false;immunity(false);history=[];message='';onExit();},
  setInvulnerable(value){if(enabled)immunity(value);},
  toggleTimer(){if(!enabled)return;clock.paused?clock.resume():clock.pause();message=clock.paused?'Countdown paused.':'Countdown resumed.';},
  run(id,target=0){
   if(!enabled)return false;
   if(!canRun()){message='Wait for the current animation to finish.';return false;}
   const action=actions.find(a=>a.id===id);if(!action)return false;
   try{const undo=action.run(target);if(typeof undo!=='function'){message='That action is not available in the current state.';return false;}
    history.push({label:action.label,undo});if(history.length>historyLimit)history.shift();message=`Ran: ${action.label}.`;return true;
   }catch{message='Action could not be completed.';return false;}
  },
  undo(){
   if(!enabled||!history.length)return false;
   if(!canRun()){message='Wait for the current animation to finish.';return false;}
   const entry=history.at(-1);try{entry.undo();history.pop();message=`Undid: ${entry.label}.`;return true;}catch{message='Undo could not be completed.';return false;}
  },
  clearHistory(){history=[];},report(value){message=value;},
  get enabled(){return enabled;},get invulnerable(){return invulnerable;},get message(){return message;},get undoLabel(){return history.at(-1)?.label??null;}
 };
}

export function createDiagnosticUI({mode,clock,actions,focusScene=()=>{}}){
 const root=document.createElement('details');root.id='diagnostic-tools';root.hidden=true;
 root.innerHTML='<summary>Diagnostics <span data-badge>Invulnerable</span></summary><div class="diagnostic-panel"><label><input type="checkbox" data-pause> Pause countdown</label><label><input type="checkbox" data-immune> Invulnerability</label><label class="diagnostic-field">Action<select data-action></select></label><label class="diagnostic-field" data-target-label>Target<select data-target><option value="0">Tank / Figpal 01</option><option value="1">Tank / Figpal 02</option><option value="2">Tank / Figpal 03</option></select></label><div class="diagnostic-actions"><button type="button" data-run>Run action</button><button type="button" data-undo>Undo last action</button></div><p data-status role="status" aria-live="polite"></p><button type="button" data-exit>Exit diagnostics</button></div>';document.body.append(root);
 const select=root.querySelector('[data-action]'),target=root.querySelector('[data-target]'),targetLabel=root.querySelector('[data-target-label]'),pause=root.querySelector('[data-pause]'),immune=root.querySelector('[data-immune]'),undo=root.querySelector('[data-undo]'),status=root.querySelector('[data-status]'),badge=root.querySelector('[data-badge]');
 for(const action of actions){const option=document.createElement('option');option.value=action.id;option.textContent=action.label;select.append(option);}
 const targetVisibility=()=>{targetLabel.hidden=!actions.find(a=>a.id===select.value)?.target;};select.onchange=targetVisibility;targetVisibility();
 pause.onchange=()=>{if(pause.checked!==clock.paused)mode.toggleTimer();sync();};immune.onchange=()=>{mode.setInvulnerable(immune.checked);sync();};
 root.querySelector('[data-run]').onclick=()=>{mode.run(select.value,Number(target.value));sync();};undo.onclick=()=>{mode.undo();sync();};
 root.querySelector('[data-exit]').onclick=()=>{mode.exit();sync();focusScene();};
 const trigger=createDiagnosticTrigger(()=>{mode.activate();root.open=true;sync();});
 document.addEventListener('keydown',event=>{if(trigger(event)){event.preventDefault();event.stopImmediatePropagation();}else if(event.key==='Escape'&&root.open){root.open=false;focusScene();event.preventDefault();event.stopImmediatePropagation();}},true);
 function sync(){
  root.hidden=!mode.enabled;pause.checked=clock.paused;immune.checked=mode.invulnerable;undo.disabled=!mode.undoLabel;undo.title=mode.undoLabel?`Undo: ${mode.undoLabel}`:'';
  const text=mode.message;if(status.textContent!==text)status.textContent=text;
  const label=mode.invulnerable?'Invulnerable':'Vulnerable';if(badge.textContent!==label)badge.textContent=label;
 }
 sync();return {sync,close(){root.open=false;}};
}
