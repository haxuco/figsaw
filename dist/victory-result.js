export function victoryResult({attempt=1,remainingSeconds=0,figpalsSaved=0}={}){
 return Object.freeze({
  attempt:Number.isSafeInteger(attempt)&&attempt>0?attempt:1,
  remainingSeconds:Number.isFinite(remainingSeconds)?Math.max(0,Math.ceil(remainingSeconds)):0,
  figpalsSaved:Number.isFinite(figpalsSaved)?Math.max(0,Math.min(2,Math.floor(figpalsSaved))):0
 });
}

// Only passengers pulled all the way to the exit have reached safety. Take a
// value snapshot so subsequent clock ticks or retries cannot change the card.
export function captureVictoryResult({attempt,remainingSeconds,rescue}){
 const saved=rescue?.safe?new Set(rescue.chairs.map(c=>c.passenger).filter(i=>Number.isInteger(i)&&i>=0&&i<3)).size:0;
 return victoryResult({attempt,remainingSeconds,figpalsSaved:saved});
}
