import {buildConfig} from 'payload';
import {sqliteAdapter} from '@payloadcms/db-sqlite';
import {nodemailerAdapter} from '@payloadcms/email-nodemailer';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {collections} from './collections';

const dirname=path.dirname(fileURLToPath(import.meta.url));
const secret=process.env.PAYLOAD_SECRET || '';
if(secret.length<32)throw new Error('Set a private PAYLOAD_SECRET with at least 32 characters.');
export default buildConfig({
  secret,collections,admin:{user:'owners',importMap:{baseDir:dirname}},
  serverURL:process.env.APP_ORIGIN || 'http://localhost:3000',
  cors:[process.env.APP_ORIGIN || 'http://localhost:3000'],
  csrf:[process.env.APP_ORIGIN || 'http://localhost:3000'],
  graphQL:{disable:true},telemetry:false,
  db:sqliteAdapter({transactionOptions:{behavior:'immediate'},client:{url:process.env.DATABASE_URI || 'file:./figsaw.db',authToken:process.env.DATABASE_AUTH_TOKEN},
    migrationDir:path.resolve(dirname,'migrations'),push:process.env.NODE_ENV!=='production'}),
  ...(process.env.SMTP_HOST ? {email:nodemailerAdapter({
    defaultFromAddress:process.env.EMAIL_FROM_ADDRESS!,defaultFromName:process.env.EMAIL_FROM_NAME || 'Figsaw',
    transportOptions:{host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT || 587),secure:process.env.SMTP_PORT==='465',
      auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}}
  })} : {email:()=>({name:'disabled',defaultFromAddress:'noreply@example.invalid',defaultFromName:'Figsaw',sendEmail:async()=>{throw new Error('Email delivery is not configured.');}})}),
  typescript:{outputFile:path.resolve(dirname,'payload-types.ts')}
});
