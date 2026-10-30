import {createLinkedInHandler} from './handler.js';
const project=Deno.env.get('SUPABASE_URL')!,secret=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const origins=['https://figsaw.figma.site','https://figsaw.haxuco.chatgpt.site'];
async function database(path:string,options:RequestInit={}){
 const r=await fetch(project+'/rest/v1/'+path,{...options,headers:{apikey:secret,Authorization:`Bearer ${secret}`,'Content-Type':'application/json',...options.headers},signal:AbortSignal.timeout(10000)});return r;
}
Deno.serve(createLinkedInHandler({allowedOrigins:origins,
 async authenticate(request:Request){const bearer=request.headers.get('Authorization');if(!bearer?.startsWith('Bearer '))return null;const r=await fetch(project+'/auth/v1/user',{headers:{apikey:secret,Authorization:bearer},signal:AbortSignal.timeout(10000)});return r.ok?r.json():null;},
 async claim(userId:string,id:string,kind:string){
  const r=await database('rpc/figsaw_claim_linkedin_post',{method:'POST',body:JSON.stringify({p_user_id:userId,p_request_id:id,p_kind:kind})});if(!r.ok)throw Error('Post tracking unavailable');return r.json();
 },
 async complete(userId:string,id:string,url:string){await database(`figsaw_linkedin_posts?user_id=eq.${encodeURIComponent(userId)}&request_id=eq.${encodeURIComponent(id)}`,{method:'PATCH',body:JSON.stringify({post_url:url})});}
}));
