export const POST_TEXT='I want to play a game.\n\n#Figma';
export const PROMO_SOURCE='https://figsaw.haxuco.chatgpt.site/assets/figsaw-promo.mp4';
const MAX_BODY=5*1024*1024;
function fail(message,status=400){return Object.assign(new Error(message),{status});}
export async function readBounded(request,max=MAX_BODY){
 if(Number(request.headers.get('content-length'))>max)throw fail('The graphic is too large.',413);
 const reader=request.body?.getReader();if(!reader)throw fail('Missing post.');const chunks=[];let size=0;
 for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>max){await reader.cancel();throw fail('The graphic is too large.',413);}chunks.push(value);}
 return new Blob(chunks);
}
function uploadUrl(value){const u=new URL(value);if(u.protocol!=='https:'||!(u.hostname==='www.linkedin.com'||u.hostname.endsWith('.licdn.com')))throw fail('LinkedIn returned an invalid upload destination.',502);return u.href;}
export function createLinkedInHandler({allowedOrigins,authenticate,claim,complete,fetcher=fetch,version='202610'}){
 return async request=>{
  const origin=request.headers.get('origin');const cors={'Access-Control-Allow-Origin':allowedOrigins.includes(origin)?origin:'null','Access-Control-Allow-Headers':'authorization,apikey,content-type','Access-Control-Allow-Methods':'POST,OPTIONS','Vary':'Origin','Cache-Control':'no-store'};
  const reply=(status,value)=>new Response(JSON.stringify(value),{status,headers:{...cors,'Content-Type':'application/json'}});
  if(!allowedOrigins.includes(origin))return reply(403,{message:'Origin not allowed.'});
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
  if(request.method!=='POST')return reply(405,{message:'Method not allowed.'});
  try{
   const user=await authenticate(request);if(!user)return reply(401,{message:'Reconnect LinkedIn before posting.'});
   const raw=await readBounded(request),form=await new Response(raw,{headers:{'Content-Type':request.headers.get('content-type')||''}}).formData();
   const kind=form.get('kind'),id=form.get('requestId'),token=form.get('providerToken');
   if(form.get('confirmed')!=='true'||String(form.get('text')).replace(/\r\n/g,'\n')!==POST_TEXT||!['video','graphic'].includes(kind)||typeof id!=='string'||!/^[-\da-f]{36}$/i.test(id))throw fail('Review and confirm the post first.');
   if(typeof token!=='string'||token.length<10||token.length>8192)throw fail('Reconnect LinkedIn before posting.',401);
   const auth={Authorization:`Bearer ${token}`};
   const profileResponse=await fetcher('https://api.linkedin.com/v2/userinfo',{headers:auth,signal:AbortSignal.timeout(15000)});
   if(!profileResponse.ok)throw fail('Reconnect LinkedIn before posting.',401);const profile=await profileResponse.json();
   const identity=user.identities?.find(i=>i.provider==='linkedin_oidc'&&i.identity_data?.sub===profile.sub);
   if(!profile.sub||!identity)throw fail('The LinkedIn account does not match this sign-in.',403);
   const owner=`urn:li:person:${profile.sub}`,headers={...auth,'Content-Type':'application/json','Linkedin-Version':version,'X-Restli-Protocol-Version':'2.0.0'};
   let media;
   if(kind==='graphic'){
    const file=form.get('graphic');if(!(file instanceof Blob)||file.type!=='image/png'||file.size<8||file.size>4*1024*1024)throw fail('Choose a valid result graphic.');
    const signature=new Uint8Array(await file.slice(0,8).arrayBuffer());if(signature.join(',')!=='137,80,78,71,13,10,26,10')throw fail('Choose a valid PNG graphic.');media=file;
   }
   const reservation=await claim(user.id,id,kind);
   if(reservation?.url)return reply(200,reservation);
   if(!reservation?.created)return reply(409,{message:'This post was already submitted. Check your LinkedIn profile before trying again.'});
   const api=async(path,body)=>{const r=await fetcher('https://api.linkedin.com/rest/'+path,{method:'POST',headers,body:JSON.stringify(body),signal:AbortSignal.timeout(25000)});if(!r.ok)throw fail('LinkedIn could not finish this post. Check your profile before trying again.',502);return r;};
   let mediaId;
   if(kind==='video'){
    const source=await fetcher(PROMO_SOURCE,{signal:AbortSignal.timeout(20000)});if(!source.ok||Number(source.headers.get('content-length'))>25*1024*1024)throw fail('The video is temporarily unavailable.',503);
    media=await readBounded(source,25*1024*1024);
    const {value}=await (await api('videos?action=initializeUpload',{initializeUploadRequest:{owner,fileSizeBytes:media.size,uploadCaptions:false,uploadThumbnail:false}})).json();
    mediaId=value.video;if(!/^urn:li:video:/.test(mediaId)||!Array.isArray(value.uploadInstructions))throw fail('LinkedIn could not prepare the video.',502);
    const parts=[];let next=0;
    for(const part of value.uploadInstructions){
     if(part.firstByte!==next||!Number.isSafeInteger(part.lastByte)||part.lastByte<next||part.lastByte>=media.size)throw fail('LinkedIn returned invalid video parts.',502);
     const uploaded=await fetcher(uploadUrl(part.uploadUrl),{method:'PUT',headers:{'Content-Type':'application/octet-stream'},body:media.slice(part.firstByte,part.lastByte+1),signal:AbortSignal.timeout(30000),redirect:'error'});
     if(!uploaded.ok||!uploaded.headers.get('etag'))throw fail('The video upload did not complete.',502);parts.push(uploaded.headers.get('etag'));next=part.lastByte+1;
    }
    if(next!==media.size)throw fail('The video upload did not complete.',502);
    await api('videos?action=finalizeUpload',{finalizeUploadRequest:{video:mediaId,uploadToken:value.uploadToken,uploadedPartIds:parts}});
   }else{
    const {value}=await (await api('images?action=initializeUpload',{initializeUploadRequest:{owner}})).json();mediaId=value.image;if(!/^urn:li:image:/.test(mediaId))throw fail('LinkedIn could not prepare the graphic.',502);
    const uploaded=await fetcher(uploadUrl(value.uploadUrl),{method:'PUT',headers:{...auth,'Content-Type':'image/png'},body:media,redirect:'error',signal:AbortSignal.timeout(25000)});if(!uploaded.ok)throw fail('The graphic upload did not complete.',502);
   }
   // Publish exactly once. Never retry this request automatically, including on
   // a network timeout: LinkedIn may have accepted it before the connection ended.
   const published=await api('posts',{author:owner,commentary:POST_TEXT,visibility:'PUBLIC',distribution:{feedDistribution:'MAIN_FEED',targetEntities:[],thirdPartyDistributionChannels:[]},content:{media:{title:'Figsaw — I want to play a game',id:mediaId}},lifecycleState:'PUBLISHED',isReshareDisabledByAuthor:false});
   const postId=published.headers.get('x-restli-id');if(!/^urn:li:(share|ugcPost):\d+$/.test(postId||''))throw fail('LinkedIn accepted the request, but its status is unclear. Check your profile.',502);
   const url='https://www.linkedin.com/feed/update/'+postId+'/';await complete(user.id,id,url);return reply(200,{url});
  }catch(error){return reply(error.status||502,{message:error.status?error.message:'We could not confirm the post. Check your LinkedIn profile before trying again.'});}
 };
}
