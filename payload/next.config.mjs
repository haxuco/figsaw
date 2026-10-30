import {withPayload} from '@payloadcms/next/withPayload';
import {fileURLToPath} from 'node:url';
export default withPayload({
  poweredByHeader:false,
  outputFileTracingRoot:fileURLToPath(new URL('.',import.meta.url)),
  experimental:{serverActions:{bodySizeLimit:'6mb'}},
  async rewrites(){return {beforeFiles:[{source:'/',destination:'/index.html'},{source:'/insights',destination:'/insights.html'}]};},
  async headers(){return [{source:'/:path*',headers:[
    {key:'X-Content-Type-Options',value:'nosniff'},
    {key:'Referrer-Policy',value:'same-origin'},
    {key:'X-Frame-Options',value:'SAMEORIGIN'}
  ]}];}
});
