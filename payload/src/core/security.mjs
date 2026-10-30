import {createHash,createHmac,randomBytes,randomInt,createCipheriv,createDecipheriv,timingSafeEqual} from 'node:crypto';
export const randomToken=()=>randomBytes(32).toString('hex');
export const hash=value=>createHash('sha256').update(value).digest('hex');
export const code=()=>String(randomInt(10000000,100000000));
export const same=(a,b)=>typeof a==='string'&&typeof b==='string'&&a.length===b.length&&timingSafeEqual(Buffer.from(a),Buffer.from(b));
export const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function seal(value,secret){
  const iv=randomBytes(12),cipher=createCipheriv('aes-256-gcm',Buffer.from(hash(secret),'hex'),iv);
  const encrypted=Buffer.concat([cipher.update(JSON.stringify(value),'utf8'),cipher.final()]);
  return Buffer.concat([iv,cipher.getAuthTag(),encrypted]).toString('base64url');
}
export function unseal(value,secret){
  try{const b=Buffer.from(value,'base64url'),d=createDecipheriv('aes-256-gcm',Buffer.from(hash(secret),'hex'),b.subarray(0,12));d.setAuthTag(b.subarray(12,28));return JSON.parse(Buffer.concat([d.update(b.subarray(28)),d.final()]).toString());}catch{return null;}
}
export function cookieName(origin){return origin.startsWith('https:')?'__Host-figsaw':'figsaw-local';}
export function readCookie(request,origin){
  const match=(request.headers.get('cookie')||'').split(';').map(s=>s.trim()).find(s=>s.startsWith(cookieName(origin)+'='));
  const value=match?.slice(match.indexOf('=')+1);return /^[a-f0-9]{64}$/.test(value||'')?value:null;
}
export const sessionCookie=(token,origin,maxAge=7200)=>`${cookieName(origin)}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${origin.startsWith('https:')?'; Secure':''}`;
export function requireOrigin(request,origin){
  if(request.headers.get('origin')!==origin || request.headers.get('sec-fetch-site')==='cross-site')throw httpError(403,'Origin not allowed.');
}
export const httpError=(status,message)=>Object.assign(new Error(message),{status});
export async function jsonBody(request,limit=12288){
  if(!request.headers.get('content-type')?.startsWith('application/json'))throw httpError(415,'Expected JSON.');
  const reader=request.body?.getReader();if(!reader)throw httpError(400,'Missing request.');
  let size=0;const chunks=[];
  for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>limit){await reader.cancel();throw httpError(413,'Request too large.');}chunks.push(value);}
  try{return JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{throw httpError(400,'Invalid request.');}
}
export function rateKey(request,env,now=Date.now()){
  // Trust only a deployment-configured, overwritten proxy header. Otherwise the
  // shared bucket is conservative and cannot be bypassed by forging XFF.
  const ip=env.TRUSTED_IP_HEADER?request.headers.get(env.TRUSTED_IP_HEADER)?.split(',')[0]?.trim():'shared';
  return createHmac('sha256',env.PAYLOAD_SECRET).update(`${Math.floor(now/86400000)}:${ip||'shared'}`).digest('hex');
}
