// The privileged Local API is confined to this server module. Public collection
// writes are disabled; application handlers validate/authenticate before use.
const writers=new WeakMap();
function serialize(payload,operation){
  const prior=writers.get(payload)||Promise.resolve();
  const result=prior.then(operation,operation);
  const settled=result.then(()=>{},()=>{});writers.set(payload,settled);
  void settled.then(()=>{if(writers.get(payload)===settled)writers.delete(payload);});
  return result;
}
export function createStore(payload,req){
  const options={overrideAccess:true,depth:0,...(req?{req}:{})};
  // SQLite has one writer. The process queue avoids local lock contention;
  // database transactions and unique constraints remain the cross-process guard.
  const write=operation=>req?operation():serialize(payload,operation);
  async function get(collection,key){return (await payload.find({...options,collection,where:{key:{equals:key}},limit:1})).docs[0]||null;}
  return {
    get,
    async transaction(operation){
      return write(async()=>{
      const transactionID=await payload.db.beginTransaction();
      if(!transactionID)throw Error('A transactional database is required.');
      try{const result=await operation(createStore(payload,{transactionID}));await payload.db.commitTransaction(transactionID);return result;}
      catch(error){await payload.db.rollbackTransaction(transactionID);throw error;}
      });
    },
    create:(collection,data)=>write(()=>payload.create({...options,collection,data})),
    update:(collection,id,data)=>write(()=>payload.update({...options,collection,id,data})),
    async insertOnce(collection,key,data){
      try{return {created:true,doc:await write(()=>payload.create({...options,collection,data:{...data,key}}))};}
      catch(error){const doc=await get(collection,key);if(doc)return {created:false,doc};throw error;}
    },
    async claim(key,limit=1,windowMs=3600000,now=Date.now()){
      const bucket=Math.floor(now/windowMs);
      // Unique inserts, rather than read/increment counters, enforce quotas
      // across simultaneous requests and multiple server processes.
      for(let i=0;i<limit;i++){
        const result=await this.insertOnce('limits',`${key}:${bucket}:${i}`,{value:{},expiresAt:new Date((bucket+2)*windowMs).toISOString()});
        if(result.created)return true;
      }return false;
    },
    async consume(key,expiresAt){return (await this.insertOnce('limits','used:'+key,{value:{},expiresAt})).created;},
    async rows(collection,where={},sort='createdAt',limit=20000){
      const docs=[];let page=1,more;
      do{const r=await payload.find({...options,collection,where,sort,limit:Math.min(500,limit-docs.length),page});docs.push(...r.docs);more=r.hasNextPage;page++;}while(more&&docs.length<limit);
      return {docs,truncated:Boolean(more)};
    },
    async conditionalUpdate(collection,where,data){return payload.update({...options,collection,where,data});}
  };
}
