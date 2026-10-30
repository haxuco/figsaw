import {getPayload} from 'payload';
import config from '../src/payload.config';
const email=process.env.OWNER_EMAIL?.trim().toLowerCase(),password=process.env.OWNER_INITIAL_PASSWORD;
if(!email||!password||password.length<16)throw Error('Set OWNER_EMAIL and a private initial password of at least 16 characters.');
const payload=await getPayload({config});
const existing=await payload.find({collection:'owners',where:{email:{equals:email}},limit:1,overrideAccess:true});
if(existing.totalDocs)console.log('Owner already exists; password was not changed.');
else {await payload.create({collection:'owners',data:{email,password},overrideAccess:true,context:{bootstrapOwner:true}});console.log('Owner created. Remove OWNER_INITIAL_PASSWORD from deployment secrets.');}
await payload.destroy();
