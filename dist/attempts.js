export const ATTEMPT_STORAGE_KEY='figsaw-attempts-v1';
const validCount=value=>/^\d+$/.test(String(value))&&Number.isSafeInteger(Number(value))?Number(value):0;
function browserStorage(){try{return globalThis.localStorage;}catch{return null;}}

// Count a visit once when the game module starts, and every explicit restart.
// Re-read before incrementing so another tab's attempts are not overwritten.
export function createAttemptTracker(storage=browserStorage()){
 let count=0;
 function next(){
  let saved=0;try{saved=validCount(storage?.getItem(ATTEMPT_STORAGE_KEY));}catch{}
  count=Math.min(Number.MAX_SAFE_INTEGER,Math.max(count,saved)+1);
  try{storage?.setItem(ATTEMPT_STORAGE_KEY,String(count));}catch{}
  return count;
 }
 next();return{next,get count(){return count;}};
}
