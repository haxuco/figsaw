import type {CollectionConfig, PayloadRequest} from 'payload';

export const owner = ({req}:{req:PayloadRequest}):boolean => Boolean(req.user &&
  req.user.collection === 'owners' && process.env.OWNER_EMAIL &&
  req.user.email?.toLowerCase() === process.env.OWNER_EMAIL.toLowerCase());
const internal = () => false;
const privateAccess = {create:internal,read:owner,update:internal,delete:owner};
const text = (name:string, options:Record<string,unknown>={}) => ({name,type:'text' as const,...options});
function record(slug:string):CollectionConfig {
  return {slug,access:privateAccess,admin:{group:'Private service data'},fields:[
    text('key',{required:true,unique:true,index:true}),
    {name:'value',type:'json',required:true},
    {name:'expiresAt',type:'date',index:true}
  ]};
}
export const collections:CollectionConfig[] = [
  {slug:'owners',auth:{maxLoginAttempts:5,lockTime:600000},
    admin:{useAsTitle:'email'},access:{...privateAccess,admin:owner,update:owner},
    hooks:{beforeChange:[({operation,data,context})=>{
      // Payload's first-user registration must not let a visitor claim the CMS.
      if(operation==='create'&&(!context?.bootstrapOwner||!process.env.OWNER_EMAIL||data.email?.toLowerCase()!==process.env.OWNER_EMAIL.toLowerCase()))throw new Error('Owner provisioning is server-only.');
      if(data.email&&data.email.toLowerCase()!==process.env.OWNER_EMAIL?.toLowerCase())throw new Error('Owner email cannot be changed here.');
      return data;
    }]},fields:[]},
  ...['sessions','challenges','limits','post-requests'].map(record),
  {slug:'scores',access:privateAccess,admin:{useAsTitle:'name',group:'Game'},fields:[
    text('key',{required:true,unique:true,index:true}),text('name',{required:true}),
    text('nameKey',{required:true,index:true}),text('nameSource',{required:true}),
    text('ownerKey',{required:true,index:true}),
    {name:'nameConsent',type:'checkbox',defaultValue:false},
    {name:'remainingSeconds',type:'number',required:true,index:true,min:0,max:1200},
    {name:'attempt',type:'number',required:true,min:1},
    {name:'wordsCompleted',type:'number',required:true,min:0,max:3}
  ]},
  {slug:'visits',access:privateAccess,admin:{group:'Anonymous analytics'},fields:[
    text('key',{required:true,unique:true,index:true}),text('secretHash',{required:true}),
    text('environment',{required:true,index:true}),text('device',{required:true}),
    {name:'lastSeenAt',type:'date',required:true,index:true},
    {name:'value',type:'json',required:true}
  ]},
  {slug:'attempts',access:privateAccess,admin:{group:'Anonymous analytics'},fields:[
    text('key',{required:true,unique:true,index:true}),text('visitKey',{required:true,index:true}),
    text('environment',{required:true,index:true}),text('outcome',{required:true,index:true}),
    {name:'sequence',type:'number',required:true},
    {name:'lastSeenAt',type:'date',required:true,index:true},
    {name:'value',type:'json',required:true}
  ]}
];
