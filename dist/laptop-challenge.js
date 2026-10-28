// Temporary design challenge. Completion belongs to this attempt, not the lid.
export function createLaptopChallenge(){
 let offsets=[-1,1,-1],completed=false,checked=false;
 return {
  cycle(index){if(completed||!Number.isInteger(index)||index<0||index>=3)return false;offsets[index]=offsets[index]===1?-1:offsets[index]+1;checked=false;return true;},
  check(){checked=true;if(offsets.every(value=>value===0))completed=true;return completed;},
  reset(){offsets=[-1,1,-1];completed=checked=false;},
  get offsets(){return [...offsets];},get completed(){return completed;},
  get message(){return completed?'Challenge complete.':checked?'The components are not aligned yet.':'Align all three components with their dotted guides.';}
 };
}
