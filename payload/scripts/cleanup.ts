import {getPayload} from 'payload';
import config from '../src/payload.config';
const payload=await getPayload({config});
for(const collection of ['sessions','challenges','limits','post-requests'])await payload.delete({collection,where:{expiresAt:{less_than:new Date().toISOString()}},overrideAccess:true});
for(const collection of ['attempts','visits'])await payload.delete({collection,where:{createdAt:{less_than:new Date(Date.now()-91*86400000).toISOString()}},overrideAccess:true});
console.log('Expired credentials and analytics older than 91 days removed.');
await payload.destroy();
