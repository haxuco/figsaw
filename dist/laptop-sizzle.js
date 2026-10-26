// Short, locally generated water hiss and electrical crackles; no audio download.
export function createLaptopSizzle({getContext=()=>{const Audio=globalThis.AudioContext||globalThis.webkitAudioContext;return Audio?new Audio():null;}}={}){
 let context=null,source=null,gain=null;
 function stop(){if(source){try{source.stop();}catch{}source.disconnect();source=null;}if(gain){gain.disconnect();gain=null;}}
 function play(){
  stop();
  try{
   context??=getContext();if(!context)return false;
   context.resume()?.catch(()=>{});
   const sampleRate=22050,duration=3.25,buffer=context.createBuffer(1,Math.ceil(duration*sampleRate),sampleRate),samples=buffer.getChannelData(0);
   let seed=91;
   for(let i=0;i<samples.length;i++){
    seed=(seed*1664525+1013904223)>>>0;const noise=seed/4294967296*2-1,t=i/sampleRate;
    const crackle=Math.max(0,Math.sin(t*47)+Math.sin(t*113)-1.46)**2;
    samples[i]=noise*(.28+crackle*1.4)*(.72+.28*Math.sin(t*8)**2);
   }
   const node=context.createBufferSource(),filter=context.createBiquadFilter();source=node;node.buffer=buffer;filter.type='highpass';filter.frequency.value=1100;
   gain=context.createGain();const start=context.currentTime+.85;
   gain.gain.setValueAtTime(0,context.currentTime);gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(.12,start+.12);gain.gain.setValueAtTime(.12,start+2.3);gain.gain.linearRampToValueAtTime(0,start+duration);
   node.connect(filter);filter.connect(gain);gain.connect(context.destination);node.start(start);node.stop(start+duration);
   node.onended=()=>{node.disconnect();filter.disconnect();if(source===node){source=null;gain?.disconnect();gain=null;}};
   return true;
  }catch{stop();return false;}
 }
 return {play,stop};
}
