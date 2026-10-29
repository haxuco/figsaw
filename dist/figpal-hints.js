export const FIGPAL_HINTS=Object.freeze({
 residual:"Don't lower me yet, there's still some acid on the bottom of the tank.",
 landing:"That hole could be an exit... if I had somewhere to land."
});

// Share the existing bubble channel with pleas and descent dialogue. A floor
// wash does not remove the acid heel retained inside a breached tank.
export function createFigpalHints({hoists,bubbles,acidLeaks,rescue,puzzle}){
 const brokenAt=new Map(),said=new Set(),lastSpoke=new Map();let nextAt=0;
 function eligible(index){
  return hoists.tanks[index]?.broken&&hoists.isHanging(index)&&hoists.canSpeak(index)&&
   acidLeaks.outflowFinished(index)&&acidLeaks.remaining(index)>.0001&&
   !rescue.state.canBoard(index,index);
 }
 function say(index,key,time){
  bubbles.show(index,time,FIGPAL_HINTS[key],9);
  said.add(`${index}:${key}`);lastSpoke.set(index,time);nextAt=time+12;
  return {index,key,line:FIGPAL_HINTS[key]};
 }
 return {update(time,blocked=false){
  for(let i=0;i<hoists.tanks.length;i++)if(hoists.tanks[i].broken&&!brokenAt.has(i))brokenAt.set(i,time);
  if(blocked||time<nextAt||bubbles.isActive(time))return null;
  // New breaches get their warning before any repeat contextual follow-up.
  for(const index of brokenAt.keys())if(eligible(index)&&!said.has(`${index}:residual`))return say(index,'residual',time);
  for(const index of brokenAt.keys()){
   if(!eligible(index)||index===puzzle.pmIndex||time-(lastSpoke.get(index)??time)<30)continue;
   if(rescue.state.chairAt(index)>=0)continue;
   const key='landing';
   if(!said.has(`${index}:${key}`))return say(index,key,time);
  }
  return null;
 },reset(){brokenAt.clear();said.clear();lastSpoke.clear();nextAt=0;}};
}
