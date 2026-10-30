export const PUZZLE_HINT_DELAY=30;
export const PUZZLE_HINTS=Object.freeze({
 key:'The ketchup bottle is amazing UX',
 battery:'If only you had a charger for the laptop.',
 laptop:'Maybe the laptop has a clue on what you should do next.',
 pm:'I wonder who the PM is?',
 skull:'Was his sacrifice for nothing?!',
 mobile:'Looks like the animals are a set, but they might be tangled',
 perspective:'maybe you should shift your perspective and sit down for a second'
});

// Choose from actual unfinished tasks, including discoveries made out of order.
// A charged laptop reads 0%, so power availability (not the displayed percent)
// determines whether the charger hint is useful.
export function nextPuzzleHint(progress,seen){
 if(progress.locked)return 'key';
 if(!progress.laptopComplete&&!progress.pmRevealed){
  if(!progress.laptopPowered)return progress.chargerDamaged?null:'battery';
  return 'laptop';
 }
 if(progress.laptopComplete&&!progress.pmRevealed&&!seen.has('org-chart'))return 'pm';
 if(progress.pmRevealed&&!seen.has('skull'))return 'skull';
 if(seen.has('skull')&&!progress.mobileRepaired)return 'mobile';
 if(progress.laptopComplete&&progress.pmRevealed&&seen.has('skull')&&progress.mobileRepaired&&!progress.chairOccupied&&!progress.keypadUnlocked&&!seen.has('keypad'))return 'perspective';
 return null;
}

export function createPuzzleHints({hoists,bubbles,getProgress,chooseSpeaker=(eligible,last)=>eligible.find(i=>i!==last)??eligible[0]}){
 const seen=new Set();let stage=null,lastAction=0,lastRevision=null,started=false,shown=false,speaker=null,lastSpeaker=-1;
 function clear(){shown=false;speaker=null;bubbles.clearHint();}
 function activity(time){lastAction=time;}
 return {
  activity,
  inspect(kind,time){seen.add(kind);activity(time);},
  update(time,{enabled=true,blocked=false,dialogueTime=time}={}){
   if(!enabled){clear();started=false;return null;}
   const progress=getProgress(),next=nextPuzzleHint(progress,seen);
   if(!started||progress.revision!==lastRevision){activity(time);started=true;lastRevision=progress.revision;}
   if(next!==stage){stage=next;activity(time);clear();}
   if(!stage)return null;
   // An unrelated pickup or inventory equip resets a pending delay, but never
   // dismisses a hint that has already appeared for an unfinished task.
   if(!shown&&(blocked||time-lastAction<PUZZLE_HINT_DELAY||bubbles.isActive(dialogueTime)))return null;
   // The final discovery hint remains available after the living Figpals have
   // boarded their chairs; ordinary pleas still come only from hanging Figpals.
   const eligible=hoists.speechAnchors.map((_,i)=>i).filter(i=>stage==='perspective'&&hoists.canHint?hoists.canHint(i):hoists.isHanging(i)&&hoists.canSpeak(i));
   if(!eligible.includes(speaker)){
    speaker=chooseSpeaker(eligible,lastSpeaker)??null;
    if(speaker!==null)lastSpeaker=speaker;
   }
   if(speaker===null){bubbles.clearHint();return null;}
   shown=true;bubbles.setHint(speaker,PUZZLE_HINTS[stage]);
   return {key:stage,index:speaker,line:PUZZLE_HINTS[stage]};
  },
  reset(){seen.clear();clear();stage=null;lastAction=0;lastRevision=null;started=false;lastSpeaker=-1;},
  get active(){return shown;},get stage(){return stage;}
 };
}
