// Text-paced jaw cues, independent of audio or the persistent speech bubble.
export function createDialogueSpeech(text,startTime){
 const words=text.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[];
 const cues=[];let cursor=.10;
 for(const token of words){
  const word=token.replace(/[^\p{L}\p{N}'’]/gu,'');
  const vowelGroups=(word.toLowerCase().replace(/e$/,'').match(/[aeiouy]+/g)||[]).length;
  const syllables=Math.max(1,Math.min(4,vowelGroups));
  const duration=.24+Math.min(word.length,10)*.025+(syllables-1)*.09;
  for(let i=0;i<syllables;i++){
   const width=duration/syllables;
   cues.push({start:cursor+i*width,end:cursor+(i+.87)*width,amount:.78+Math.min(word.length,6)*.025});
  }
  cursor+=duration+(/[.!?…]/u.test(token)?.40:/[,;:]/.test(token)?.24:.11);
 }
 return {startTime,cues,duration:cursor};
}

export function dialogueMouthAmount(speech,time){
 if(!speech)return 0;
 const elapsed=time-speech.startTime;
 for(const cue of speech.cues){
  if(elapsed<cue.start)return 0;
  if(elapsed<=cue.end){
   const phase=(elapsed-cue.start)/(cue.end-cue.start);
   // A quick opening, a short hold, and a smooth close leave pauses between words.
   const open=Math.min(1,phase/.22),close=Math.min(1,(1-phase)/.35);
   const envelope=Math.min(open,close);
   return cue.amount*envelope*envelope*(3-2*envelope);
  }
 }
 return 0;
}
