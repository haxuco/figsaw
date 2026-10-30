export function createNameReviewer({endpoint,token,fetchImpl=globalThis.fetch}){
 return async function reviewName(name){
  if(!endpoint||!token||new URL(endpoint).protocol!=='https:')throw Error('Name review is not configured');
  const response=await fetchImpl(endpoint,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({name,policy:'figsaw-friendly-names-v1'}),signal:AbortSignal.timeout(6000),redirect:'error'});
  if(!response.ok)throw Error('Name review unavailable');
  const verdict=await response.json();
  if(verdict?.policy!=='figsaw-friendly-names-v1'||typeof verdict?.allow!=='boolean')throw Error('Invalid name review');
  return verdict.allow===true;
 };
}
