import {linkedinConfig} from './linkedin-config.js';
export const ANALYTICS_STAGES=Object.freeze({room_ready:'Room loaded',intro_complete:'Intro finished',key_collected:'Key collected',shackle_unlocked:'Shackle unlocked',charger_connected:'Charger connected',laptop_opened:'Laptop opened',kerning_1:'Kerning: first word',kerning_2:'Kerning: second word',kerning_complete:'Kerning completed',org_chart_viewed:'Org chart inspected',pm_revealed:'PM clue revealed',skull_viewed:'Skull inspected',mobile_collected:'Mobile collected',mobile_hung:'Mobile hung',mobile_repaired:'Mobile repaired',chairs_repaired:'Both chairs repaired',chairs_positioned:'Chairs positioned',chairs_linked:'All chairs linked',tank_broken:'Tank broken',fire_extinguished:'Fire extinguished',figpal_saved:'One Figpal saved',two_figpals_saved:'Two Figpals saved',door_unlocked:'Door unlocked',chairs_at_door:'Chairs at the door',escaped:'Escaped'});
export const ANALYTICS_CAUSES=Object.freeze({acid:'Acid exposure',saw:'Saw injury',fire:'Fire',explosion:'Explosion',laptop:'Laptop destroyed',deadline:'Time ran out',flood:'Flood blocked escape',objective:'Objective failed',load:'Loading failed'});

// An attempt is not a person. Identifiers live only in memory; refresh = new visit.
export function createAnalyticsState({uuid,secret,environment,device}){
 const visit=uuid();let activeMs=0,visibleMs=0,interactions=0,loadMs=null,run;
 function reset(){run={id:uuid(),sequence:0,ms:0,interactions:0,outcome:'playing',cause:null,milestones:{},saved:0};if(loadMs!==null)run.milestones.room_ready=0;}
 reset();
 return {
  tick(ms,{visible=true,active=true}={}){ms=Math.max(0,Math.min(ms,2000));if(visible)visibleMs+=ms;if(active&&visible&&run.outcome==='playing'){activeMs+=ms;run.ms+=ms;}},
  interact(){interactions++;run.interactions++;},
  ready(ms){loadMs=Math.max(0,Math.round(ms));this.mark('room_ready');},
  mark(key){if(!(key in ANALYTICS_STAGES)||key in run.milestones)return false;run.milestones[key]=Math.round(run.ms/1000);return true;},
  rescued(count){run.saved=Math.max(run.saved,Math.min(2,count));},
  finish(outcome,cause=null){if(run.outcome!=='playing'||!['won','lost','error'].includes(outcome))return false;run.outcome=outcome;run.cause=outcome==='lost'?(cause in ANALYTICS_CAUSES?cause:'objective'):outcome==='error'?'load':null;if(outcome==='won')this.mark('escaped');return true;},
  retry:reset,
  packet(){return {p_visit:visit,p_secret:secret,p_run:run.id,p_data:{sequence:++run.sequence,environment,device,active_ms:Math.round(activeMs),visible_ms:Math.round(visibleMs),run_ms:Math.round(run.ms),interactions,run_interactions:run.interactions,load_ms:loadMs,outcome:run.outcome,cause:run.cause,milestones:{...run.milestones},saved:run.saved}};},
  get ended(){return run.outcome!=='playing';}
 };
}
const noop=Object.freeze({ready(){},mark(){},finish(){},retry(){},observe(){},flush(){}});
export function startAnalytics({window:win=globalThis.window,document:doc=globalThis.document,fetch:send=globalThis.fetch,config=linkedinConfig}={}){
 const environment=win?.location.hostname==='figsaw.figma.site'?'official':win?.location.hostname==='figsaw.haxuco.chatgpt.site'?'staging':null;
 // Development, browser privacy signals, and the owner dashboard are excluded.
 if(win?.location.pathname.endsWith('/insights.html')||!environment||!win.crypto?.randomUUID||win.navigator.globalPrivacyControl||win.navigator.doNotTrack==='1'||!config.projectUrl)return noop;
 const secret=Array.from(win.crypto.getRandomValues(new Uint8Array(32)),v=>v.toString(16).padStart(2,'0')).join('');
 const state=createAnalyticsState({uuid:()=>win.crypto.randomUUID(),secret,environment,device:win.matchMedia('(pointer: coarse)').matches?'mobile':'desktop'});
 const now=()=>win.performance.now();let last=now(),lastInput=last,read=null,pause=()=>false,lastSent=0,inFlight=false,disabled=false;
 const endpoint=config.projectUrl+'/rest/v1/rpc/figsaw_record_analytics';
 function sample(){const t=now();state.tick(t-last,{visible:doc.visibilityState==='visible',active:t-lastInput<60000&&!pause()});last=t;if(read&&!state.ended){try{const value=read();for(const key of value.stages||[])state.mark(key);state.rescued(value.saved||0);}catch{/* Telemetry never interrupts gameplay. */}}}
 function post(packet,keepalive=false){return send(endpoint,{method:'POST',headers:{apikey:config.publishableKey,'Content-Type':'application/json'},body:JSON.stringify(packet),keepalive,signal:keepalive?undefined:AbortSignal.timeout(8000)}).then(r=>{if([401,403,404].includes(r.status))disabled=true;}).catch(()=>{});}
 function flush(keepalive=false){if(disabled||inFlight&&!keepalive)return;sample();lastSent=now();inFlight=true;void post(state.packet(),keepalive).finally(()=>{inFlight=false;});}
 const input=()=>{lastInput=now();state.interact();};
 win.addEventListener('pointerdown',input,{passive:true});win.addEventListener('keydown',input,{passive:true});
 doc.addEventListener('visibilitychange',()=>{sample();if(doc.visibilityState==='hidden')flush(true);else{last=now();lastInput=last;}});
 win.addEventListener('pagehide',()=>flush(true));
 win.setInterval(()=>{sample();if(!state.ended&&doc.visibilityState==='visible'&&now()-lastSent>=15000)flush();},1000);
 flush();
 return {ready(){state.ready(now());flush();},mark:key=>state.mark(key),observe(reader,isPaused){read=reader;pause=isPaused||pause;},finish(outcome,cause){sample();if(state.finish(outcome,cause))flush(true);},retry(){flush(true);state.retry();lastInput=now();last=lastInput;void post(state.packet(),true);},flush};
}
// One shared instance for the early loader and the bundled game.
export const analytics=globalThis.window?(window.__figsawAnalytics??=startAnalytics()):noop;
