// Drain a tipped lathed bottle from its upper end, leaving ketchup at the
// downward-facing neck. The free surface stays horizontal in world space.
export function createBottleLiquid(contents){
 const geometry=contents.geometry,position=geometry.attributes.position;
 const original=position.array.slice(),points=geometry.parameters.points;
 const segments=geometry.parameters.segments,stride=points.length;
 const profile=points.filter(point=>point.x>0),bottom=profile[0].y,top=profile.at(-1).y;
 const cuts=new Float32Array(segments+1),radii=new Float32Array(segments+1);
 let empty=false;
 function radiusAt(y){
  for(let i=1;i<profile.length;i++)if(y<=profile[i].y){
   const a=profile[i-1],b=profile[i],t=(y-a.y)/(b.y-a.y||1);
   return a.x+(b.x-a.x)*t;
  }
  return profile.at(-1).x;
 }
 function reset(){position.array.set(original);position.needsUpdate=true;geometry.computeVertexNormals();contents.visible=true;empty=false;}
 function update(drained){
  if(drained>=.999){contents.visible=false;empty=true;return;}
  if(empty)return;
  contents.updateWorldMatrix(true,false);
  const m=contents.matrixWorld.elements;
  // The bottle is completely tipped before its contents start draining.
  if(m[5]>=-.3||drained<=0)return;
  const axisLevel=bottom+(top-bottom)*drained,level=m[5]*axisLevel;
  for(let j=0;j<=segments;j++){
   const angle=j/segments*Math.PI*2,sin=Math.sin(angle),cos=Math.cos(angle);
   let low=bottom,high=top;
   for(let n=0;n<18;n++){
    const y=(low+high)/2,r=radiusAt(y),height=(m[1]*sin+m[9]*cos)*r+m[5]*y;
    if(height>level)low=y;else high=y;
   }
   cuts[j]=(low+high)/2;radii[j]=radiusAt(cuts[j]);
   for(let i=0;i<stride;i++){
    const index=j*stride+i,offset=index*3,y=original[offset+1];
    if(y<cuts[j]){
     const center=points[i].x===0;
     position.setXYZ(index,center?0:sin*radii[j],center?axisLevel:cuts[j],center?0:cos*radii[j]);
    }else position.setXYZ(index,original[offset],y,original[offset+2]);
   }
  }
  position.needsUpdate=true;geometry.computeVertexNormals();
 }
 return {update,reset};
}
