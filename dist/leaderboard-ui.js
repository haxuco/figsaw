import {formatCountdown} from './countdown-clock.js';
import {prospectiveRank,LEADERBOARD_STORAGE_KEY} from './leaderboard.js';
import {validateDisplayName,DISPLAY_NAME_GUIDANCE} from './display-name.js';

function boardMarkup(){return '<header class="leaderboard-header"><div><p class="leaderboard-eyebrow">THE ONES WHO MADE IT</p><h2>Top 10 escapes</h2></div><span data-scope>On this device</span></header><p class="leaderboard-caption">Both Figpals saved. Ranked by time remaining.</p><table><thead><tr><th scope="col">Rank</th><th scope="col">Name</th><th scope="col">Time left</th></tr></thead><tbody data-scores></tbody></table><p data-empty>No perfect escapes recorded here yet.</p>';}
function renderBoard(root,entries,highlight,scopeLabel){
 const body=root.querySelector('[data-scores]');body.replaceChildren();root.querySelector('[data-empty]').hidden=entries.length>0;root.querySelector('[data-empty]').textContent='No perfect escapes recorded here yet.';
 root.querySelector('table').hidden=entries.length===0;root.querySelector('[data-scope]').textContent=scopeLabel;
 entries.forEach((entry,index)=>{
  const row=document.createElement('tr');if(entry.id===highlight){row.className='leaderboard-you';row.setAttribute('aria-label','Your ranked escape');}
  for(const text of [String(index+1).padStart(2,'0'),entry.name,formatCountdown(entry.remainingSeconds)]){const cell=document.createElement('td');cell.textContent=text;row.append(cell);}body.append(row);
 });
}

export function createLeaderboardUI({repository,root,button,canOpen=()=>true,onOpen=()=>{},onClose=()=>{},onRank=()=>{},getCountdown=()=>null}){
 root.innerHTML='<div class="leaderboard-celebration" data-celebration hidden><span class="leaderboard-laurel" aria-hidden="true">✦</span><div><p class="leaderboard-eyebrow">TOP 10 ESCAPE</p><h2 data-celebration-title></h2><p data-celebration-copy></p></div><strong data-rank></strong></div><div class="leaderboard-card" data-victory-board>'+boardMarkup()+'<form data-name-form hidden novalidate autocomplete="off"><label for="escape-display-name">Leave your name among the survivors.</label><div class="leaderboard-name-row"><input id="escape-display-name" name="escapeLeaderboardName" type="text" maxlength="48" autocomplete="off" autocapitalize="words" spellcheck="false" placeholder="Your name" aria-describedby="winner-name-error"><button type="submit">Claim your place</button></div><p id="winner-name-error" class="leaderboard-form-error" role="alert"></p><small>2–24 characters · Best escape per name</small><small>'+DISPLAY_NAME_GUIDANCE+'</small></form><p class="leaderboard-feedback" data-feedback role="status" aria-live="polite"></p></div>';
 const board=root.querySelector('[data-victory-board]'),form=root.querySelector('form'),input=root.querySelector('input'),submit=form.querySelector('button'),error=form.querySelector('[role="alert"]'),feedback=root.querySelector('[data-feedback]'),celebration=root.querySelector('[data-celebration]');
 board.insertBefore(form,board.querySelector('table'));
 const dialog=document.createElement('dialog');dialog.id='leaderboard-dialog';dialog.setAttribute('aria-label','Top 10 escapes');dialog.innerHTML='<button type="button" class="leaderboard-close" aria-label="Back to room">‹ BACK</button><output class="leaderboard-view-timer" data-live-countdown aria-label="Game countdown"></output><div class="leaderboard-card">'+boardMarkup()+'</div>';document.body.append(dialog);
 const dialogBoard=dialog.querySelector('.leaderboard-card');
 let run=null,revision=0,currentEntry=null,currentRank=null,busy=false,lastFocus=null;
 function celebrate(rank,name=null){
  currentRank=rank;celebration.hidden=!rank;if(!rank)return;
  root.querySelector('[data-rank]').textContent=`#${rank}`;
  root.querySelector('[data-celebration-title]').textContent=name?`${name}, you made it.`:'You made the top 10.';
  root.querySelector('[data-celebration-copy]').textContent=name?'Two Figpals. One remarkable escape.':`${formatCountdown(run.remainingSeconds)} left. Both Figpals safe.`;
 }
 function draw(entries){for(const target of [board,dialogBoard])renderBoard(target,entries,currentEntry?.id,repository.scopeLabel);}
 function close(){if(dialog.open)dialog.close();}
 function update(){if(!dialog.open)return;const seconds=getCountdown(),clock=dialog.querySelector('[data-live-countdown]'),text=seconds===null?'':formatCountdown(seconds);if(clock.textContent!==text)clock.textContent=text;}
 dialog.querySelector('button').onclick=close;
 dialog.addEventListener('close',()=>{onClose();if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});});
 button.onclick=async()=>{
  if(dialog.open||!canOpen())return;lastFocus=document.activeElement;dialog.showModal();onOpen();update();dialog.querySelector('button').focus({preventScroll:true});
  try{draw(await repository.list());}catch{dialogBoard.querySelector('[data-empty]').textContent='The top 10 could not load. Try opening it again.';}
 };
 input.addEventListener('input',()=>{error.textContent='';input.removeAttribute('aria-invalid');});
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(busy||!run?.eligible)return;
  const checked=validateDisplayName(input.value);error.textContent='';
  if(!checked.ok){error.textContent=checked.message;input.setAttribute('aria-invalid','true');input.focus();return;}
  const ticket=revision,completedRun=run;busy=true;submit.disabled=true;input.disabled=true;
  try{
   const result=await repository.submit({run:completedRun,name:checked.name});if(ticket!==revision)return;
   if(!result.ok){error.textContent=result.message;return;}
   draw(result.entries);form.hidden=true;
   if(!result.rank){celebrate(null);feedback.textContent='This escape is outside the current top 10.';return;}
   currentEntry=result.entry;draw(result.entries);celebrate(result.rank,result.entry.name);
   feedback.textContent=result.improved?`Your escape is #${result.rank}. ${repository.savedMessage}`:`Your best escape is already #${result.rank}.`;
   onRank({...completedRun,name:result.entry.name,rank:result.entry.id===completedRun.id?result.rank:null});
  }catch{if(ticket===revision)error.textContent='Your name could not be saved. Please try again.';}
  finally{if(ticket===revision){busy=false;submit.disabled=input.disabled=false;}}
 });
 async function showResult(value){
  const ticket=++revision;run=value;busy=false;currentEntry=null;currentRank=null;celebration.hidden=true;form.hidden=true;input.disabled=submit.disabled=false;input.value='';error.textContent=feedback.textContent='';input.removeAttribute('aria-invalid');
  try{
   const entries=await repository.list();if(ticket!==revision)return;draw(entries);
   if(!run.eligible){feedback.textContent=run.reason==='diagnostic'?'Diagnostic runs aren’t ranked.':'Top 10 escapes bring both Figpals out alive.';return;}
   const rank=prospectiveRank(entries,run.remainingSeconds);
   if(rank>10){feedback.textContent='Both Figpals are safe. The top 10 is just a little faster.';return;}
   celebrate(rank);form.hidden=false;
  }catch{if(ticket===revision)feedback.textContent='The top 10 could not load.';}
 }
 function reset(){revision++;run=currentEntry=null;currentRank=null;busy=false;celebration.hidden=form.hidden=true;feedback.textContent=error.textContent='';input.disabled=submit.disabled=false;close();}
 window.addEventListener('storage',async event=>{
  if(event.key!==null&&event.key!==LEADERBOARD_STORAGE_KEY||!dialog.open&&!run)return;const ticket=revision;
  try{const entries=await repository.list();if(ticket!==revision)return;draw(entries);if(currentEntry){const index=entries.findIndex(entry=>entry.id===currentEntry.id);celebrate(index<0?null:index+1,currentEntry.name);}}catch{}
 });
 return {showResult,reset,close,focusResult(){if(form.hidden)return false;input.focus({preventScroll:true});return true;},update,get active(){return dialog.open;},get rank(){return currentRank;}};
}
