// Diagnostic drafts never change a scored challenge or its reference spacing.
export function createKerningDraft(layout,positions=layout.positions){
 const x=[...positions],gap=layout.fontSize*.06;
 return {
  layout,
  move(index,value){
   if(!Number.isInteger(index)||index<0||index>=x.length||!Number.isFinite(value))return false;
   const min=index?x[index-1]+gap:24,max=index<x.length-1?x[index+1]-gap:776-layout.widths[index];
   const next=Math.max(min,Math.min(max,value));if(Math.abs(next-x[index])<.00001)return false;x[index]=next;return true;
  },
  get positions(){return [...x];},get view(){return {...layout,positions:[...x]};}
 };
}

export function serializeKerningSettings(layout,positions,round){
 return JSON.stringify({kind:'figsaw-kerning',version:1,round:round+1,word:layout.word,
  typeface:{family:layout.family,weight:layout.weight,style:layout.style,fontSize:layout.fontSize,font:layout.font},
  coordinateSpace:{width:800,height:510,baseline:318},positions:positions.map(x=>Number(x.toFixed(6)))},null,2);
}
