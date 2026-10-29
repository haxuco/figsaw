export const KERNING_PASS_SCORE=90;
export const KERNING_WORDS=Object.freeze([
 Object.freeze({word:'SACRIFICE',family:'Arial, sans-serif',weight:'700',style:'normal',fontSize:118,label:'Arial / Bold',positions:Object.freeze([82.039551,160.059604,243.749577,328.356938,414.431849,445.742385,518.412478,555.469733,639.255371])}),
 Object.freeze({word:'PRODUCT',family:'Georgia, serif',weight:'400',style:'normal',fontSize:132,label:'Georgia / Regular',positions:Object.freeze([81.762695,163.144415,256.561104,353.420566,447.927623,546.637989,636.575195])}),
 Object.freeze({word:'MANAGER',family:'Georgia, serif',weight:'400',style:'italic',fontSize:125,label:'Georgia / Italic',positions:Object.freeze([80.236816,201.288692,294.566535,385.608027,461.008042,548.425589,632.055664])})
]);

// Score only movable glyph origins, normalized to the actual rendered type size.
// During ordinary play, failed attempts never reveal a score or reference
// positions in the UI, canvas texture, or accessible labels.
export function scoreKerning(positions,layout){
 if(!Array.isArray(positions)||positions.length!==layout.positions.length||positions.some(x=>!Number.isFinite(x)))return 0;
 let squared=0;for(let i=1;i<positions.length-1;i++)squared+=(positions[i]-layout.positions[i])**2;
 const error=Math.sqrt(squared/(positions.length-2));
 return Math.max(0,Math.min(100,Math.round(100*(1-error/(layout.fontSize*.32)))));
}
export function createLaptopChallenge(sourceLayouts,{random=Math.random}={}){
 if(sourceLayouts.length!==3)throw new Error('The kerning challenge requires three words.');
 const layouts=sourceLayouts.map(layout=>({...layout,positions:[...layout.positions],widths:[...layout.widths]}));
 let round=0,positions=[],accepted=false,checked=false,passed=[false,false,false];
 const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
 function scrambled(layout){
  const result=[...layout.positions],gap=layout.fontSize*.12;
  for(let i=1;i<result.length-1;i++){
   const direction=(i%2?1:-1)*(random()>.5?1:-1),offset=direction*layout.fontSize*(.15+.12*random());
   result[i]=clamp(result[i]+offset,result[i-1]+gap,result[i+1]-gap);
  }
  // A very narrow letter pair must not produce a passing starting arrangement.
  if(scoreKerning(result,layout)>=KERNING_PASS_SCORE){
   const i=1;result[i]=clamp(layout.positions[i]+layout.fontSize*.24,result[0]+gap,result[2]-gap);
  }
  return result;
 }
 function reset(){round=0;accepted=checked=false;passed=[false,false,false];positions=scrambled(layouts[0]);}
 function move(index,x){
  if(accepted||!Number.isInteger(index)||index<1||index>=positions.length-1||!Number.isFinite(x))return false;
  const gap=layouts[round].fontSize*.12,next=clamp(x,positions[index-1]+gap,positions[index+1]-gap);
  if(Math.abs(next-positions[index])<.00001)return false;
  positions[index]=next;checked=false;return true;
 }
 function check(){
  if(accepted)return true;checked=true;
  accepted=scoreKerning(positions,layouts[round])>=KERNING_PASS_SCORE;
  if(accepted)passed[round]=true;return accepted;
 }
 function next(){if(!accepted||round===2)return false;round++;accepted=checked=false;positions=scrambled(layouts[round]);return true;}
 reset();return {
  move,check,next,reset,
  capture(){return {round,positions:[...positions],accepted,checked,passed:[...passed]};},
  restore(value){
   const layout=layouts[value?.round],p=value?.positions,history=value?.passed;
   if(!Number.isInteger(value?.round)||!layout||!Array.isArray(p)||p.length!==layout.positions.length||p.some(x=>!Number.isFinite(x))||p[0]!==layout.positions[0]||p.at(-1)!==layout.positions.at(-1)||p.some((x,i)=>i>0&&x<=p[i-1])||!Array.isArray(history)||history.length!==3||history.some((x,i)=>typeof x!=='boolean'||i<value.round&&!x||i>value.round&&x)||!!value.accepted!==history[value.round]||value.accepted&&scoreKerning(p,layout)<KERNING_PASS_SCORE){reset();return false;}
   round=value.round;positions=[...p];accepted=!!value.accepted;checked=!!value.checked;passed=[...history];return true;
  },
  complete(){round=2;positions=[...layouts[2].positions];accepted=checked=true;passed=[true,true,true];},
  get round(){return round;},get accepted(){return accepted;},get completed(){return passed.every(Boolean);},
  get positions(){return [...positions];},get passed(){return [...passed];},
  get view(){const {word,font,fontSize,label,widths}=layouts[round];return {word,font,fontSize,label,widths:[...widths],positions:[...positions]};},
  get message(){return accepted?(passed.every(Boolean)?'All three words accepted.':'Word accepted.'):(checked?'Not quite. Try again.':'');}
 };
}
