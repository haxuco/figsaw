import {getPayload} from 'payload';
import config from '@payload-config';
import {createStore} from '../../../../core/store.mjs';
import {createBackend} from '../../../../core/handler.mjs';
export const runtime='nodejs',dynamic='force-dynamic';
async function handle(request:Request){
  const payload=await getPayload({config});
  return createBackend({store:createStore(payload),env:process.env,sendEmail:(message:object)=>payload.sendEmail(message)})(request);
}
export const GET=handle,POST=handle;
