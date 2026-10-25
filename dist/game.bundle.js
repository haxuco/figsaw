var H1=0,ep=1,N1=2;var f0=1,_d=2,Sr=3,ni=0,Tn=1,Ct=2,Xr=0,qr=1,Oc=2,tp=3,np=4,F1=5,ys=100,z1=101,O1=102,B1=103,k1=104,V1=200,G1=201,W1=202,X1=203,nu=204,iu=205,q1=206,Y1=207,$1=208,Z1=209,K1=210,J1=211,Q1=212,j1=213,ex=214,ru=0,su=1,ou=2,ho=3,au=4,cu=5,lu=6,hu=7,bd=0,tx=1,nx=2,Yr=0,ix=1,rx=2,sx=3,wd=4,ox=5,ax=6,cx=7;var p0=300,uo=301,fo=302,ma=303,uu=304,ml=306,_s=1e3,Es=1001,du=1002,gi=1003,lx=1004;var sc=1005;var gn=1006,Eh=1007;var ji=1008;var Rr=1009,m0=1010,g0=1011,ga=1012,Sd=1013,bs=1014,hr=1015,Pa=1016,Td=1017,Rd=1018,po=1020,x0=35902,y0=1021,v0=1022,Si=1023,M0=1024,E0=1025,ao=1026,mo=1027,Ad=1028,Cd=1029,_0=1030,Pd=1031;var Id=1033,Dc=33776,Uc=33777,Hc=33778,Nc=33779,fu=35840,pu=35841,mu=35842,gu=35843,xu=36196,yu=37492,vu=37496,Mu=37808,Eu=37809,_u=37810,bu=37811,wu=37812,Su=37813,Tu=37814,Ru=37815,Au=37816,Cu=37817,Pu=37818,Iu=37819,Lu=37820,Du=37821,Fc=36492,Uu=36494,Hu=36495,b0=36283,Nu=36284,Fu=36285,zu=36286;var Bc=2300,Ou=2301,_h=2302,ip=2400,rp=2401,sp=2402;var hx=3200,Ld=3201;var Dd=0,ux=1,Wr="",yt="srgb",es="srgb-linear",Ud="display-p3",gl="display-p3-linear",kc="linear",ln="srgb",Vc="rec709",Gc="p3";var Gs=7680;var op=519,dx=512,fx=513,px=514,w0=515,mx=516,gx=517,xx=518,yx=519,ap=35044,yn=35048;var cp="300 es",Tr=2e3,Wc=2001,Zr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lp=1234567,ha=Math.PI/180,go=180/Math.PI;function Rs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function Un(i,e,t){return Math.max(e,Math.min(t,i))}function Hd(i,e){return(i%e+e)%e}function vx(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Mx(i,e,t){return i!==e?(t-i)/(e-i):0}function ua(i,e,t){return(1-t)*i+t*e}function Ex(i,e,t,n){return ua(i,e,1-Math.exp(-t*n))}function _x(i,e=1){return e-Math.abs(Hd(i,e*2)-e)}function bx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tx(i,e){return i+Math.random()*(e-i)}function Rx(i){return i*(.5-Math.random())}function Ax(i){i!==void 0&&(lp=i);let e=lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cx(i){return i*ha}function Px(i){return i*go}function Ix(i){return(i&i-1)===0&&i!==0}function Lx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ux(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),u=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ro(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ke={DEG2RAD:ha,RAD2DEG:go,generateUUID:Rs,clamp:Un,euclideanModulo:Hd,mapLinear:vx,inverseLerp:Mx,lerp:ua,damp:Ex,pingpong:_x,smoothstep:bx,smootherstep:wx,randInt:Sx,randFloat:Tx,randFloatSpread:Rx,seededRandom:Ax,degToRad:Cx,radToDeg:Px,isPowerOfTwo:Ix,ceilPowerOfTwo:Lx,floorPowerOfTwo:Dx,setQuaternionFromProperEuler:Ux,normalize:hi,denormalize:ro},Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],g=n[8],y=r[0],p=r[3],d=r[6],M=r[1],x=r[4],_=r[7],R=r[2],b=r[5],T=r[8];return s[0]=o*y+a*M+l*R,s[3]=o*p+a*x+l*b,s[6]=o*d+a*_+l*T,s[1]=c*y+h*M+f*R,s[4]=c*p+h*x+f*b,s[7]=c*d+h*_+f*T,s[2]=u*y+m*M+g*R,s[5]=u*p+m*x+g*b,s[8]=u*d+m*_+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*s,m=c*s-o*l,g=t*f+n*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(r*c-h*n)*y,e[2]=(a*n-r*o)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bh.makeScale(e,t)),this}rotate(e){return this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bh=new wt;function S0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hx(){let i=xa("canvas");return i.style.display="block",i}var hp={};function zc(i){i in hp||(hp[i]=!0,console.warn(i))}function Nx(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Fx(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zx(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var up=new wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dp=new wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[es]:{transfer:kc,primaries:Vc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[yt]:{transfer:ln,primaries:Vc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[gl]:{transfer:kc,primaries:Gc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(dp),fromReference:i=>i.applyMatrix3(up)},[Ud]:{transfer:ln,primaries:Gc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(dp),fromReference:i=>i.applyMatrix3(up).convertLinearToSRGB()}},Ox=new Set([es,gl]),Jt={enabled:!0,_workingColorSpace:es,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ox.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ea[e].toReference,r=ea[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ea[i].primaries},getTransfer:function(i){return i===Wr?kc:ea[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ea[e].luminanceCoefficients)}};function co(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ws,Bu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=xa("canvas")),Ws.width=e.width,Ws.height=e.height;let n=Ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=co(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(co(t[n]/255)*255):t[n]=co(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bx=0,Xc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sh(r[o].image)):s.push(Sh(r[o]))}else s=Sh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Sh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kx=0,di=class i extends Zr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Es,r=Es,s=gn,o=ji,a=Si,l=Rr,c=i.DEFAULT_ANISOTROPY,h=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Rs(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=p0;di.DEFAULT_ANISOTROPY=1;var tn=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],g=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(m+1)/2,R=(d+1)/2,b=(h+u)/4,T=(f+y)/4,P=(g+p)/4;return x>_&&x>R?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=b/n,s=T/n):_>R?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=b/r,s=P/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=T/s,r=P/s),this.set(n,r,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ku=class extends Zr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new di(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ar=class extends ku{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qc=class extends di{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vu=class extends di{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3],u=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(f!==y||l!==u||c!==m||h!==g){let p=1-a,d=l*u+c*m+h*g+f*y,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let R=Math.sqrt(x),b=Math.atan2(R,d*M);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}let _=a*M;if(l=l*p+u*_,c=c*p+m*_,h=h*p+g*_,f=f*p+y*_,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*m-c*u,e[t+1]=l*g+h*u+c*f-a*m,e[t+2]=c*g+h*m+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),f=a(s/2),u=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"YZX":this._x=u*h*f+c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f-u*m*g;break;case"XZY":this._x=u*h*f-c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Th=new w,fp=new dt,Rn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),ac.subVectors(this.max,ta),Xs.subVectors(e.a,ta),qs.subVectors(e.b,ta),Ys.subVectors(e.c,ta),zr.subVectors(qs,Xs),Or.subVectors(Ys,qs),us.subVectors(Xs,Ys);let t=[0,-zr.z,zr.y,0,-Or.z,Or.y,0,-us.z,us.y,zr.z,0,-zr.x,Or.z,0,-Or.x,us.z,0,-us.x,-zr.y,zr.x,0,-Or.y,Or.x,0,-us.y,us.x,0];return!Rh(t,Xs,qs,Ys,ac)||(t=[1,0,0,0,1,0,0,0,1],!Rh(t,Xs,qs,Ys,ac))?!1:(cc.crossVectors(zr,Or),t=[cc.x,cc.y,cc.z],Rh(t,Xs,qs,Ys,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mr=[new w,new w,new w,new w,new w,new w,new w,new w],Ki=new w,oc=new Rn,Xs=new w,qs=new w,Ys=new w,zr=new w,Or=new w,us=new w,ta=new w,ac=new w,cc=new w,ds=new w;function Rh(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ds.fromArray(i,s);let a=r.x*Math.abs(ds.x)+r.y*Math.abs(ds.y)+r.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Vx=new Rn,na=new w,Ah=new w,Kr=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(na,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Ah)),this.expandByPoint(na.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Er=new w,Ch=new w,lc=new w,Br=new w,Ph=new w,hc=new w,Ih=new w,ya=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ch.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Ch);let s=e.distanceTo(t)*.5,o=-this.direction.dot(lc),a=Br.dot(this.direction),l=-Br.dot(lc),c=Br.lengthSq(),h=Math.abs(1-o*o),f,u,m,g;if(h>0)if(f=o*l-a,u=o*a-l,g=s*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,m=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ch).addScaledVector(lc,u),m}intersectSphere(e,t){Er.subVectors(e.center,this.origin);let n=Er.dot(this.direction),r=Er.dot(Er)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,n,r,s){Ph.subVectors(t,e),hc.subVectors(n,e),Ih.crossVectors(Ph,hc);let o=this.direction.dot(Ih),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Br.subVectors(this.origin,e);let l=a*this.direction.dot(hc.crossVectors(Br,hc));if(l<0)return null;let c=a*this.direction.dot(Ph.cross(Br));if(c<0||l+c>o)return null;let h=-a*Br.dot(Ih);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class i{constructor(e,t,n,r,s,o,a,l,c,h,f,u,m,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,f,u,m,g,y,p)}set(e,t,n,r,s,o,a,l,c,h,f,u,m,g,y,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=g,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=o*h,m=o*f,g=a*h,y=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,m=l*f,g=c*h,y=c*f;t[0]=u+y*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,m=l*f,g=c*h,y=c*f;t[0]=u-y*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,m=o*f,g=a*h,y=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-u*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=u-y*f}else if(e.order==="XZY"){let u=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gx,e,Wx)}lookAt(e,t,n){let r=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),kr.crossVectors(n,bi),kr.lengthSq()===0&&(Math.abs(n.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),kr.crossVectors(n,bi)),kr.normalize(),uc.crossVectors(bi,kr),r[0]=kr.x,r[4]=uc.x,r[8]=bi.x,r[1]=kr.y,r[5]=uc.y,r[9]=bi.y,r[2]=kr.z,r[6]=uc.z,r[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],g=n[2],y=n[6],p=n[10],d=n[14],M=n[3],x=n[7],_=n[11],R=n[15],b=r[0],T=r[4],P=r[8],O=r[12],v=r[1],S=r[5],N=r[9],W=r[13],$=r[2],ee=r[6],X=r[10],z=r[14],ae=r[3],he=r[7],F=r[11],te=r[15];return s[0]=o*b+a*v+l*$+c*ae,s[4]=o*T+a*S+l*ee+c*he,s[8]=o*P+a*N+l*X+c*F,s[12]=o*O+a*W+l*z+c*te,s[1]=h*b+f*v+u*$+m*ae,s[5]=h*T+f*S+u*ee+m*he,s[9]=h*P+f*N+u*X+m*F,s[13]=h*O+f*W+u*z+m*te,s[2]=g*b+y*v+p*$+d*ae,s[6]=g*T+y*S+p*ee+d*he,s[10]=g*P+y*N+p*X+d*F,s[14]=g*O+y*W+p*z+d*te,s[3]=M*b+x*v+_*$+R*ae,s[7]=M*T+x*S+_*ee+R*he,s[11]=M*P+x*N+_*X+R*F,s[15]=M*O+x*W+_*z+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],m=e[14],g=e[3],y=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*u+n*c*u+r*a*m-n*l*m)+y*(+t*l*m-t*c*u+s*o*u-r*o*m+r*c*h-s*l*h)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*h-n*c*h)+d*(-r*a*h-t*l*f+t*a*u+r*o*f-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],m=e[11],g=e[12],y=e[13],p=e[14],d=e[15],M=f*p*c-y*u*c+y*l*m-a*p*m-f*l*d+a*u*d,x=g*u*c-h*p*c-g*l*m+o*p*m+h*l*d-o*u*d,_=h*y*c-g*f*c+g*a*m-o*y*m-h*a*d+o*f*d,R=g*f*l-h*y*l-g*a*u+o*y*u+h*a*p-o*f*p,b=t*M+n*x+r*_+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return e[0]=M*T,e[1]=(y*u*s-f*p*s-y*r*m+n*p*m+f*r*d-n*u*d)*T,e[2]=(a*p*s-y*l*s+y*r*c-n*p*c-a*r*d+n*l*d)*T,e[3]=(f*l*s-a*u*s-f*r*c+n*u*c+a*r*m-n*l*m)*T,e[4]=x*T,e[5]=(h*p*s-g*u*s+g*r*m-t*p*m-h*r*d+t*u*d)*T,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*T,e[7]=(o*u*s-h*l*s+h*r*c-t*u*c-o*r*m+t*l*m)*T,e[8]=_*T,e[9]=(g*f*s-h*y*s-g*n*m+t*y*m+h*n*d-t*f*d)*T,e[10]=(o*y*s-g*a*s+g*n*c-t*y*c-o*n*d+t*a*d)*T,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*m-t*a*m)*T,e[12]=R*T,e[13]=(h*y*r-g*f*r+g*n*u-t*y*u-h*n*p+t*f*p)*T,e[14]=(g*a*r-o*y*r-g*n*l+t*y*l+o*n*p-t*a*p)*T,e[15]=(o*f*r-h*a*r+h*n*l-t*f*l-o*n*u+t*a*u)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,u=s*c,m=s*h,g=s*f,y=o*h,p=o*f,d=a*f,M=l*c,x=l*h,_=l*f,R=n.x,b=n.y,T=n.z;return r[0]=(1-(y+d))*R,r[1]=(m+_)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(m-_)*b,r[5]=(1-(u+d))*b,r[6]=(p+M)*b,r[7]=0,r[8]=(g+x)*T,r[9]=(p-M)*T,r[10]=(1-(u+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=$s.set(r[0],r[1],r[2]).length(),o=$s.set(r[4],r[5],r[6]).length(),a=$s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ji.copy(this);let c=1/s,h=1/o,f=1/a;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=h,Ji.elements[5]*=h,Ji.elements[6]*=h,Ji.elements[8]*=f,Ji.elements[9]*=f,Ji.elements[10]*=f,t.setFromRotationMatrix(Ji),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Tr){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),u=(n+r)/(n-r),m,g;if(a===Tr)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Wc)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Tr){let l=this.elements,c=1/(t-e),h=1/(n-r),f=1/(o-s),u=(t+e)*c,m=(n+r)*h,g,y;if(a===Tr)g=(o+s)*f,y=-2*f;else if(a===Wc)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$s=new w,Ji=new Lt,Gx=new w(0,0,0),Wx=new w(1,1,1),kr=new w,uc=new w,bi=new w,pp=new Lt,mp=new dt,fi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xx=0,gp=new w,Zs=new dt,_r=new Lt,dc=new w,ia=new w,qx=new w,Yx=new dt,xp=new w(1,0,0),yp=new w(0,1,0),vp=new w(0,0,1),Mp={type:"added"},$x={type:"removed"},Ks={type:"childadded",child:null},Lh={type:"childremoved",child:null},gt=class i extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new fi,n=new dt,r=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new wt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dc.copy(e):dc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(ia,dc,this.up):_r.lookAt(dc,ia,this.up),this.quaternion.setFromRotationMatrix(_r),r&&(_r.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(_r),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($x),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,Yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};gt.DEFAULT_UP=new w(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qi=new w,br=new w,Dh=new w,wr=new w,Js=new w,Qs=new w,Ep=new w,Uh=new w,Hh=new w,Nh=new w,Fh=new tn,zh=new tn,Oh=new tn,vs=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qi.subVectors(e,t),r.cross(Qi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qi.subVectors(r,t),br.subVectors(n,t),Dh.subVectors(e,t);let o=Qi.dot(Qi),a=Qi.dot(br),l=Qi.dot(Dh),c=br.dot(br),h=br.dot(Dh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wr.x),l.addScaledVector(o,wr.y),l.addScaledVector(a,wr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Fh.setScalar(0),zh.setScalar(0),Oh.setScalar(0),Fh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,n),Oh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fh,s.x),o.addScaledVector(zh,s.y),o.addScaledVector(Oh,s.z),o}static isFrontFacing(e,t,n,r){return Qi.subVectors(n,t),br.subVectors(e,t),Qi.cross(br).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Qi.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Js.subVectors(r,n),Qs.subVectors(s,n),Uh.subVectors(e,n);let l=Js.dot(Uh),c=Qs.dot(Uh);if(l<=0&&c<=0)return t.copy(n);Hh.subVectors(e,r);let h=Js.dot(Hh),f=Qs.dot(Hh);if(h>=0&&f<=h)return t.copy(r);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Js,o);Nh.subVectors(e,s);let m=Js.dot(Nh),g=Qs.dot(Nh);if(g>=0&&m<=g)return t.copy(s);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qs,a);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return Ep.subVectors(s,r),a=(f-h)/(f-h+(m-g)),t.copy(r).addScaledVector(Ep,a);let d=1/(p+y+u);return o=y*d,a=u*d,t.copy(n).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Bh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Jt.workingColorSpace){if(e=Hd(e,1),t=Un(t,0,1),n=Un(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Bh(o,s,e+1/3),this.g=Bh(o,s,e),this.b=Bh(o,s,e-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=T0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}copyLinearToSRGB(e){return this.r=wh(e.r),this.g=wh(e.g),this.b=wh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Jt.fromWorkingColorSpace(ti.copy(this),e),Math.round(Un(ti.r*255,0,255))*65536+Math.round(Un(ti.g*255,0,255))*256+Math.round(Un(ti.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(ti.copy(this),t);let n=ti.r,r=ti.g,s=ti.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=yt){Jt.fromWorkingColorSpace(ti.copy(this),e);let t=ti.r,n=ti.g,r=ti.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(fc);let n=ua(Vr.h,fc.h,t),r=ua(Vr.s,fc.s,t),s=ua(Vr.l,fc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new pt;pt.NAMES=T0;var Zx=0,er=class extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=qr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nu&&(n.blendSrc=this.blendSrc),this.blendDst!==iu&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mt=class extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Sn=new w,pc=new Be,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ap,this.updateRanges=[],this.gpuType=hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ro(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array),r=hi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array),r=hi(r,this.array),s=hi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ap&&(e.usage=this.usage),e}};var Yc=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $c=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kx=0,Ii=new Lt,kh=new gt,js=new w,wi=new Rn,ra=new Rn,kn=new w,Rt=class i extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S0(e)?$c:Yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];wi.setFromBufferAttribute(s),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(kn.addVectors(wi.min,ra.min),wi.expandByPoint(kn),kn.addVectors(wi.max,ra.max),wi.expandByPoint(kn)):(wi.expandByPoint(ra.min),wi.expandByPoint(ra.max))}wi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kn.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),kn.add(js)),r=Math.max(r,n.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new w,l[P]=new w;let c=new w,h=new w,f=new w,u=new Be,m=new Be,g=new Be,y=new w,p=new w;function d(P,O,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,O),f.fromBufferAttribute(n,v),u.fromBufferAttribute(s,P),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,v),h.sub(c),f.sub(c),m.sub(u),g.sub(u);let S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(S),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(S),a[P].add(y),a[O].add(y),a[v].add(y),l[P].add(p),l[O].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,O=M.length;P<O;++P){let v=M[P],S=v.start,N=v.count;for(let W=S,$=S+N;W<$;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let x=new w,_=new w,R=new w,b=new w;function T(P){R.fromBufferAttribute(r,P),b.copy(R);let O=a[P];x.copy(O),x.sub(R.multiplyScalar(R.dot(O))).normalize(),_.crossVectors(b,O);let S=_.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,S)}for(let P=0,O=M.length;P<O;++P){let v=M[P],S=v.start,N=v.count;for(let W=S,$=S+N;W<$;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let r=new w,s=new w,o=new w,a=new w,l=new w,c=new w,h=new w,f=new w;if(e)for(let u=0,m=e.count;u<m;u+=3){let g=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new nn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_p=new Lt,fs=new ya,mc=new Kr,bp=new w,gc=new w,xc=new w,yc=new w,Vh=new w,vc=new w,wp=new w,Mc=new w,at=class extends gt{constructor(e=new Rt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){vc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Vh.fromBufferAttribute(f,e),o?vc.addScaledVector(Vh,h):vc.addScaledVector(Vh.sub(t),h))}t.add(vc)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),fs.copy(e.ray).recast(e.near),!(mc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(mc,bp)===null||fs.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(_p.copy(s).invert(),fs.copy(e.ray).applyMatrix4(_p),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=M,R=x;_<R;_+=3){let b=a.getX(_),T=a.getX(_+1),P=a.getX(_+2);r=Ec(this,d,e,n,c,h,f,b,T,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){let M=a.getX(p),x=a.getX(p+1),_=a.getX(p+2);r=Ec(this,o,e,n,c,h,f,M,x,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=M,R=x;_<R;_+=3){let b=_,T=_+1,P=_+2;r=Ec(this,d,e,n,c,h,f,b,T,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){let M=p,x=p+1,_=p+2;r=Ec(this,o,e,n,c,h,f,M,x,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function Jx(i,e,t,n,r,s,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ni,a),l===null)return null;Mc.copy(a),Mc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Mc);return c<t.near||c>t.far?null:{distance:c,point:Mc.clone(),object:i}}function Ec(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,gc),i.getVertexPosition(l,xc),i.getVertexPosition(c,yc);let h=Jx(i,e,t,n,gc,xc,yc,wp);if(h){let f=new w;vs.getBarycoord(wp,gc,xc,yc,f),r&&(h.uv=vs.getInterpolatedAttribute(r,a,l,c,f,new Be)),s&&(h.uv1=vs.getInterpolatedAttribute(s,a,l,c,f,new Be)),o&&(h.normal=vs.getInterpolatedAttribute(o,a,l,c,f,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new w,materialIndex:0};vs.getNormal(gc,xc,yc,u.normal),h.face=u,h.barycoord=f}return h}var St=class i extends Rt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(f,2));function g(y,p,d,M,x,_,R,b,T,P,O){let v=_/T,S=R/P,N=_/2,W=R/2,$=b/2,ee=T+1,X=P+1,z=0,ae=0,he=new w;for(let F=0;F<X;F++){let te=F*S-W;for(let J=0;J<ee;J++){let ce=J*v-N;he[y]=ce*M,he[p]=te*x,he[d]=$,c.push(he.x,he.y,he.z),he[y]=0,he[p]=0,he[d]=b>0?1:-1,h.push(he.x,he.y,he.z),f.push(J/T),f.push(1-F/P),z+=1}}for(let F=0;F<P;F++)for(let te=0;te<T;te++){let J=u+te+ee*F,ce=u+te+ee*(F+1),V=u+(te+1)+ee*(F+1),ie=u+(te+1)+ee*F;l.push(J,ce,ie),l.push(ce,V,ie),ae+=6}a.addGroup(m,ae,O),m+=ae,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xo(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ui(i){let e={};for(let t=0;t<i.length;t++){let n=xo(i[t]);for(let r in n)e[r]=n[r]}return e}function Qx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function R0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}var jx={clone:xo,merge:ui},ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Di=class extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Zc=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gr=new w,Sp=new Be,Tp=new Be,$n=class extends Zc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,Sp,Tp),t.subVectors(Tp,Sp)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eo=-90,to=1,Gu=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $n(eo,to,e,t);r.layers=this.layers,this.add(r);let s=new $n(eo,to,e,t);s.layers=this.layers,this.add(s);let o=new $n(eo,to,e,t);o.layers=this.layers,this.add(o);let a=new $n(eo,to,e,t);a.layers=this.layers,this.add(a);let l=new $n(eo,to,e,t);l.layers=this.layers,this.add(l);let c=new $n(eo,to,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Tr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Kc=class extends di{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:uo,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wu=class extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Kc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new St(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Xr});s.uniforms.tEquirect.value=t;let o=new at(r,s),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=gn),new Gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Gh=new w,ny=new w,iy=new wt,Li=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gh.subVectors(n,t).cross(ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Gh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||iy.getNormalMatrix(e),r=this.coplanarPoint(Gh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new Kr,_c=new w,Ma=class{constructor(e=new Li,t=new Li,n=new Li,r=new Li,s=new Li,o=new Li){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tr){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],u=r[7],m=r[8],g=r[9],y=r[10],p=r[11],d=r[12],M=r[13],x=r[14],_=r[15];if(n[0].setComponents(l-s,u-c,p-m,_-d).normalize(),n[1].setComponents(l+s,u+c,p+m,_+d).normalize(),n[2].setComponents(l+o,u+h,p+g,_+M).normalize(),n[3].setComponents(l-o,u-h,p-g,_-M).normalize(),n[4].setComponents(l-a,u-f,p-y,_-x).normalize(),t===Tr)n[5].setComponents(l+a,u+f,p+y,_+x).normalize();else if(t===Wc)n[5].setComponents(a,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_c.x=r.normal.x>0?e.max.x:e.min.x,_c.y=r.normal.y>0?e.max.y:e.min.y,_c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function A0(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ry(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){let g=f[u],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){let y=f[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Mt=class i extends Rt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,f=e/a,u=t/l,m=[],g=[],y=[],p=[];for(let d=0;d<h;d++){let M=d*u-o;for(let x=0;x<c;x++){let _=x*f-s;g.push(_,-M,0),y.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let x=M+c*d,_=M+c*(d+1),R=M+1+c*(d+1),b=M+1+c*d;m.push(x,_,b),m.push(_,R,b)}this.setIndex(m),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Py=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ny=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,av=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,At={alphahash_fragment:sy,alphahash_pars_fragment:oy,alphamap_fragment:ay,alphamap_pars_fragment:cy,alphatest_fragment:ly,alphatest_pars_fragment:hy,aomap_fragment:uy,aomap_pars_fragment:dy,batching_pars_vertex:fy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:xy,iridescence_fragment:yy,bumpmap_pars_fragment:vy,clipping_planes_fragment:My,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:_y,clipping_planes_vertex:by,color_fragment:wy,color_pars_fragment:Sy,color_pars_vertex:Ty,color_vertex:Ry,common:Ay,cube_uv_reflection_fragment:Cy,defaultnormal_vertex:Py,displacementmap_pars_vertex:Iy,displacementmap_vertex:Ly,emissivemap_fragment:Dy,emissivemap_pars_fragment:Uy,colorspace_fragment:Hy,colorspace_pars_fragment:Ny,envmap_fragment:Fy,envmap_common_pars_fragment:zy,envmap_pars_fragment:Oy,envmap_pars_vertex:By,envmap_physical_pars_fragment:Jy,envmap_vertex:ky,fog_vertex:Vy,fog_pars_vertex:Gy,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:qy,lightmap_pars_fragment:Yy,lights_lambert_fragment:$y,lights_lambert_pars_fragment:Zy,lights_pars_begin:Ky,lights_toon_fragment:Qy,lights_toon_pars_fragment:jy,lights_phong_fragment:ev,lights_phong_pars_fragment:tv,lights_physical_fragment:nv,lights_physical_pars_fragment:iv,lights_fragment_begin:rv,lights_fragment_maps:sv,lights_fragment_end:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:hv,map_fragment:uv,map_pars_fragment:dv,map_particle_fragment:fv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:xv,morphcolor_vertex:yv,morphnormal_vertex:vv,morphtarget_pars_vertex:Mv,morphtarget_vertex:Ev,normal_fragment_begin:_v,normal_fragment_maps:bv,normal_pars_fragment:wv,normal_pars_vertex:Sv,normal_vertex:Tv,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Iv,opaque_fragment:Lv,packing:Dv,premultiplied_alpha_fragment:Uv,project_vertex:Hv,dithering_fragment:Nv,dithering_pars_fragment:Fv,roughnessmap_fragment:zv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Bv,shadowmap_pars_vertex:kv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Gv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:$v,specularmap_pars_fragment:Zv,tonemapping_fragment:Kv,tonemapping_pars_fragment:Jv,transmission_fragment:Qv,transmission_pars_fragment:jv,uv_pars_fragment:e2,uv_pars_vertex:t2,uv_vertex:n2,worldpos_vertex:i2,background_vert:r2,background_frag:s2,backgroundCube_vert:o2,backgroundCube_frag:a2,cube_vert:c2,cube_frag:l2,depth_vert:h2,depth_frag:u2,distanceRGBA_vert:d2,distanceRGBA_frag:f2,equirect_vert:p2,equirect_frag:m2,linedashed_vert:g2,linedashed_frag:x2,meshbasic_vert:y2,meshbasic_frag:v2,meshlambert_vert:M2,meshlambert_frag:E2,meshmatcap_vert:_2,meshmatcap_frag:b2,meshnormal_vert:w2,meshnormal_frag:S2,meshphong_vert:T2,meshphong_frag:R2,meshphysical_vert:A2,meshphysical_frag:C2,meshtoon_vert:P2,meshtoon_frag:I2,points_vert:L2,points_frag:D2,shadow_vert:U2,shadow_frag:H2,sprite_vert:N2,sprite_frag:F2},Ze={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},lr={basic:{uniforms:ui([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:ui([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new pt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:ui([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:ui([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:ui([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new pt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:ui([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:ui([Ze.points,Ze.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:ui([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:ui([Ze.common,Ze.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:ui([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:ui([Ze.sprite,Ze.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:ui([Ze.common,Ze.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:ui([Ze.lights,Ze.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};lr.physical={uniforms:ui([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var bc={r:0,b:0,g:0},ms=new fi,z2=new Lt;function O2(i,e,t,n,r,s,o){let a=new pt(0),l=s===!0?0:1,c,h,f=null,u=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function y(M){let x=!1,_=g(M);_===null?d(a,l):_&&_.isColor&&(d(_,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){let _=g(x);_&&(_.isCubeTexture||_.mapping===ml)?(h===void 0&&(h=new at(new St(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:xo(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ms.copy(x.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(z2.makeRotationFromEuler(ms)),h.material.toneMapped=Jt.getTransfer(_.colorSpace)!==ln,(f!==_||u!==_.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,u=_.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new at(new Mt(2,2),new Di({name:"BackgroundMaterial",uniforms:xo(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(_.colorSpace)!==ln,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||u!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,u=_.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,x){M.getRGB(bc,R0(i)),n.buffers.color.setClear(bc.r,bc.g,bc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:y,addToRenderList:p}}function B2(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(v,S,N,W,$){let ee=!1,X=f(W,N,S);s!==X&&(s=X,c(s.object)),ee=m(v,W,N,$),ee&&g(v,W,N,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,_(v,S,N,W),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function f(v,S,N){let W=N.wireframe===!0,$=n[v.id];$===void 0&&($={},n[v.id]=$);let ee=$[S.id];ee===void 0&&(ee={},$[S.id]=ee);let X=ee[W];return X===void 0&&(X=u(l()),ee[W]=X),X}function u(v){let S=[],N=[],W=[];for(let $=0;$<t;$++)S[$]=0,N[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:W,object:v,attributes:{},index:null}}function m(v,S,N,W){let $=s.attributes,ee=S.attributes,X=0,z=N.getAttributes();for(let ae in z)if(z[ae].location>=0){let F=$[ae],te=ee[ae];if(te===void 0&&(ae==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),ae==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),F===void 0||F.attribute!==te||te&&F.data!==te.data)return!0;X++}return s.attributesNum!==X||s.index!==W}function g(v,S,N,W){let $={},ee=S.attributes,X=0,z=N.getAttributes();for(let ae in z)if(z[ae].location>=0){let F=ee[ae];F===void 0&&(ae==="instanceMatrix"&&v.instanceMatrix&&(F=v.instanceMatrix),ae==="instanceColor"&&v.instanceColor&&(F=v.instanceColor));let te={};te.attribute=F,F&&F.data&&(te.data=F.data),$[ae]=te,X++}s.attributes=$,s.attributesNum=X,s.index=W}function y(){let v=s.newAttributes;for(let S=0,N=v.length;S<N;S++)v[S]=0}function p(v){d(v,0)}function d(v,S){let N=s.newAttributes,W=s.enabledAttributes,$=s.attributeDivisors;N[v]=1,W[v]===0&&(i.enableVertexAttribArray(v),W[v]=1),$[v]!==S&&(i.vertexAttribDivisor(v,S),$[v]=S)}function M(){let v=s.newAttributes,S=s.enabledAttributes;for(let N=0,W=S.length;N<W;N++)S[N]!==v[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function x(v,S,N,W,$,ee,X){X===!0?i.vertexAttribIPointer(v,S,N,$,ee):i.vertexAttribPointer(v,S,N,W,$,ee)}function _(v,S,N,W){y();let $=W.attributes,ee=N.getAttributes(),X=S.defaultAttributeValues;for(let z in ee){let ae=ee[z];if(ae.location>=0){let he=$[z];if(he===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),he!==void 0){let F=he.normalized,te=he.itemSize,J=e.get(he);if(J===void 0)continue;let ce=J.buffer,V=J.type,ie=J.bytesPerElement,k=V===i.INT||V===i.UNSIGNED_INT||he.gpuType===Sd;if(he.isInterleavedBufferAttribute){let B=he.data,G=B.stride,de=he.offset;if(B.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ae.locationSize;Ee++)d(ae.location+Ee,B.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Ee=0;Ee<ae.locationSize;Ee++)p(ae.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Ee=0;Ee<ae.locationSize;Ee++)x(ae.location+Ee,te/ae.locationSize,V,F,G*ie,(de+te/ae.locationSize*Ee)*ie,k)}else{if(he.isInstancedBufferAttribute){for(let B=0;B<ae.locationSize;B++)d(ae.location+B,he.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let B=0;B<ae.locationSize;B++)p(ae.location+B);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let B=0;B<ae.locationSize;B++)x(ae.location+B,te/ae.locationSize,V,F,te*ie,te/ae.locationSize*B*ie,k)}}else if(X!==void 0){let F=X[z];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(ae.location,F);break;case 3:i.vertexAttrib3fv(ae.location,F);break;case 4:i.vertexAttrib4fv(ae.location,F);break;default:i.vertexAttrib1fv(ae.location,F)}}}}M()}function R(){P();for(let v in n){let S=n[v];for(let N in S){let W=S[N];for(let $ in W)h(W[$].object),delete W[$];delete S[N]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;let S=n[v.id];for(let N in S){let W=S[N];for(let $ in W)h(W[$].object),delete W[$];delete S[N]}delete n[v.id]}function T(v){for(let S in n){let N=n[S];if(N[v.id]===void 0)continue;let W=N[v.id];for(let $ in W)h(W[$].object),delete W[$];delete N[v.id]}}function P(){O(),o=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function k2(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];t.update(m,n,1)}function l(c,h,f,u){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y];for(let y=0;y<u.length;y++)t.update(g,n,u[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function V2(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Si&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Rr&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hr&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:R,maxSamples:b}}function G2(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Li,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){let g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{let M=s?0:n,x=M*4,_=d.clippingState||null;l.value=_,_=h(g,u,x,m);for(let R=0;R!==x;++R)_[R]=t[R];d.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,m,g){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let d=m+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,_=m;x!==y;++x,_+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function W2(i){let e=new WeakMap;function t(o,a){return a===ma?o.mapping=uo:a===uu&&(o.mapping=fo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ma||a===uu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Wu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Jc=class extends Zc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},so=4,Rp=[.125,.215,.35,.446,.526,.582],Ms=20,Wh=new Jc,Ap=new pt,Xh=null,qh=0,Yh=0,$h=!1,xs=(1+Math.sqrt(5))/2,no=1/xs,Cp=[new w(-xs,no,0),new w(xs,no,0),new w(-no,0,xs),new w(no,0,xs),new w(0,xs,-no),new w(0,xs,no),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,qh,Yh),this._renderer.xr.enabled=$h,e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===uo||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Pa,format:Si,colorSpace:es,depthBuffer:!1},r=Pp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X2(s)),this._blurMaterial=q2(s,e,t)}return r}_compileMaterial(e){let t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Wh)}_sceneToCubeUV(e,t,n,r){let a=new $n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Ap),h.toneMapping=Yr,h.autoClear=!1;let m=new mt({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new at(new St,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Ap),y=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;wc(r,M*x,d>2?x:0,x,x),h.setRenderTarget(r),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===uo||e.mapping===fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;wc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cp[(r-s-1)%Cp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new at(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ms-1),y=s/g,p=isFinite(s)?1+Math.floor(h*y):Ms;p>Ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ms}`);let d=[],M=0;for(let T=0;T<Ms;++T){let P=T/y,O=Math.exp(-P*P/2);d.push(O),T===0?M+=O:T<p&&(M+=2*O)}for(let T=0;T<d.length;T++)d[T]=d[T]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let _=this._sizeLods[r],R=3*_*(r>x-so?r-x+so:0),b=4*(this._cubeSize-_);wc(t,R,b,3*_,2*_),l.setRenderTarget(t),l.render(f,Wh)}};function X2(i){let e=[],t=[],n=[],r=i,s=i-so+1+Rp.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-so?l=Rp[o-i+so-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,y=3,p=2,d=1,M=new Float32Array(y*g*m),x=new Float32Array(p*g*m),_=new Float32Array(d*g*m);for(let b=0;b<m;b++){let T=b%3*2/3-1,P=b>2?0:-1,O=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(O,y*g*b),x.set(u,p*g*b);let v=[b,b,b,b,b,b];_.set(v,d*g*b)}let R=new Rt;R.setAttribute("position",new nn(M,y)),R.setAttribute("uv",new nn(x,p)),R.setAttribute("faceIndex",new nn(_,d)),e.push(R),r>so&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pp(i,e,t){let n=new Ar(i,e,t);return n.texture.mapping=ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function q2(i,e,t){let n=new Float32Array(Ms),r=new w(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Ip(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Lp(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y2(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ma||l===uu,h=l===uo||l===fo;if(c||h){let f=e.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new yo(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new yo(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $2(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&zc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Z2(i,e,t,n){let r={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let p=0,d=y.length;p<d;p++)e.remove(y[p])}u.removeEventListener("dispose",o),delete r[u.id];let m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let y=m[g];for(let p=0,d=y.length;p<d;p++)e.update(y[p],i.ARRAY_BUFFER)}}function c(f){let u=[],m=f.index,g=f.attributes.position,y=0;if(m!==null){let M=m.array;y=m.version;for(let x=0,_=M.length;x<_;x+=3){let R=M[x+0],b=M[x+1],T=M[x+2];u.push(R,b,b,T,T,R)}}else if(g!==void 0){let M=g.array;y=g.version;for(let x=0,_=M.length/3-1;x<_;x+=3){let R=x+0,b=x+1,T=x+2;u.push(R,b,b,T,T,R)}}else return;let p=new(S0(u)?$c:Yc)(u,1);p.version=y;let d=s.get(f);d&&e.remove(d),s.set(f,p)}function h(f){let u=s.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function K2(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,m){i.drawElements(n,m,s,u*o),t.update(m,n,1)}function c(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,u*o,g),t.update(m,n,g))}function h(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,u,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function f(u,m,g,y){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<u.length;d++)c(u[d]/o,m[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,u,0,y,0,g);let d=0;for(let M=0;M<g;M++)d+=m[M];for(let M=0;M<y.length;M++)t.update(d,n,y[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function J2(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Q2(i,e,t){let n=new WeakMap,r=new tn;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let O=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),y===!0&&(x=3);let _=a.attributes.position.count*x,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*R*4*f),T=new qc(b,_,R,f);T.type=hr,T.needsUpdate=!0;let P=x*4;for(let v=0;v<f;v++){let S=p[v],N=d[v],W=M[v],$=_*R*4*v;for(let ee=0;ee<S.count;ee++){let X=ee*P;m===!0&&(r.fromBufferAttribute(S,ee),b[$+X+0]=r.x,b[$+X+1]=r.y,b[$+X+2]=r.z,b[$+X+3]=0),g===!0&&(r.fromBufferAttribute(N,ee),b[$+X+4]=r.x,b[$+X+5]=r.y,b[$+X+6]=r.z,b[$+X+7]=0),y===!0&&(r.fromBufferAttribute(W,ee),b[$+X+8]=r.x,b[$+X+9]=r.y,b[$+X+10]=r.z,b[$+X+11]=W.itemSize===4?r.w:1)}}u={count:f,texture:T,size:new Be(_,R)},n.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function j2(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Qc=class extends di{constructor(e,t,n,r,s,o,a,l,c,h=ao){if(h!==ao&&h!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ao&&(n=bs),n===void 0&&h===mo&&(n=po),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gi,this.minFilter=l!==void 0?l:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},C0=new di,Dp=new Qc(1,1),P0=new qc,I0=new Vu,L0=new Kc,Up=[],Hp=[],Np=new Float32Array(16),Fp=new Float32Array(9),zp=new Float32Array(4);function bo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Up[r];if(s===void 0&&(s=new Float32Array(r),Up[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xl(i,e){let t=Hp[e];t===void 0&&(t=new Int32Array(e),Hp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2fv(this.addr,e),Nn(t,e)}}function nM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Hn(t,e))return;i.uniform3fv(this.addr,e),Nn(t,e)}}function iM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4fv(this.addr,e),Nn(t,e)}}function rM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Hn(t,n))return;zp.set(n),i.uniformMatrix2fv(this.addr,!1,zp),Nn(t,n)}}function sM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Hn(t,n))return;Fp.set(n),i.uniformMatrix3fv(this.addr,!1,Fp),Nn(t,n)}}function oM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Hn(t,n))return;Np.set(n),i.uniformMatrix4fv(this.addr,!1,Np),Nn(t,n)}}function aM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2iv(this.addr,e),Nn(t,e)}}function lM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3iv(this.addr,e),Nn(t,e)}}function hM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4iv(this.addr,e),Nn(t,e)}}function uM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2uiv(this.addr,e),Nn(t,e)}}function fM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3uiv(this.addr,e),Nn(t,e)}}function pM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4uiv(this.addr,e),Nn(t,e)}}function mM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Dp.compareFunction=w0,s=Dp):s=C0,t.setTexture2D(e||s,r)}function gM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||I0,r)}function xM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||L0,r)}function yM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||P0,r)}function vM(i){switch(i){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return cM;case 35668:case 35672:return lM;case 35669:case 35673:return hM;case 5125:return uM;case 36294:return dM;case 36295:return fM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}function MM(i,e){i.uniform1fv(this.addr,e)}function EM(i,e){let t=bo(e,this.size,2);i.uniform2fv(this.addr,t)}function _M(i,e){let t=bo(e,this.size,3);i.uniform3fv(this.addr,t)}function bM(i,e){let t=bo(e,this.size,4);i.uniform4fv(this.addr,t)}function wM(i,e){let t=bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function SM(i,e){let t=bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TM(i,e){let t=bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function RM(i,e){i.uniform1iv(this.addr,e)}function AM(i,e){i.uniform2iv(this.addr,e)}function CM(i,e){i.uniform3iv(this.addr,e)}function PM(i,e){i.uniform4iv(this.addr,e)}function IM(i,e){i.uniform1uiv(this.addr,e)}function LM(i,e){i.uniform2uiv(this.addr,e)}function DM(i,e){i.uniform3uiv(this.addr,e)}function UM(i,e){i.uniform4uiv(this.addr,e)}function HM(i,e,t){let n=this.cache,r=e.length,s=xl(t,r);Hn(n,s)||(i.uniform1iv(this.addr,s),Nn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||C0,s[o])}function NM(i,e,t){let n=this.cache,r=e.length,s=xl(t,r);Hn(n,s)||(i.uniform1iv(this.addr,s),Nn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||I0,s[o])}function FM(i,e,t){let n=this.cache,r=e.length,s=xl(t,r);Hn(n,s)||(i.uniform1iv(this.addr,s),Nn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||L0,s[o])}function zM(i,e,t){let n=this.cache,r=e.length,s=xl(t,r);Hn(n,s)||(i.uniform1iv(this.addr,s),Nn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||P0,s[o])}function OM(i){switch(i){case 5126:return MM;case 35664:return EM;case 35665:return _M;case 35666:return bM;case 35674:return wM;case 35675:return SM;case 35676:return TM;case 5124:case 35670:return RM;case 35667:case 35671:return AM;case 35668:case 35672:return CM;case 35669:case 35673:return PM;case 5125:return IM;case 36294:return LM;case 36295:return DM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return zM}}var Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vM(t.type)}},qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OM(t.type)}},Yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Zh=/(\w+)(\])?(\[|\.)?/g;function Op(i,e){i.seq.push(e),i.map[e.id]=e}function BM(i,e,t){let n=i.name,r=n.length;for(Zh.lastIndex=0;;){let s=Zh.exec(n),o=Zh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Op(t,c===void 0?new Xu(a,i,e):new qu(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Yu(a),Op(t,f)),t=f}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);BM(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Bp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kM=37297,VM=0;function GM(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function WM(i){let e=Jt.getPrimaries(Jt.workingColorSpace),t=Jt.getPrimaries(i),n;switch(e===t?n="":e===Gc&&t===Vc?n="LinearDisplayP3ToLinearSRGB":e===Vc&&t===Gc&&(n="LinearSRGBToLinearDisplayP3"),i){case es:case gl:return[n,"LinearTransferOETF"];case yt:case Ud:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GM(i.getShaderSource(e),o)}else return r}function XM(i,e){let t=WM(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qM(i,e){let t;switch(e){case ix:t="Linear";break;case rx:t="Reinhard";break;case sx:t="Cineon";break;case wd:t="ACESFilmic";break;case ax:t="AgX";break;case cx:t="Neutral";break;case ox:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sc=new w;function YM(){Jt.getLuminanceCoefficients(Sc);let i=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function ZM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function la(i){return i!==""}function Vp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var JM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(JM,jM)}var QM=new Map;function jM(i,e){let t=At[e];if(t===void 0){let n=QM.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $u(t)}var eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(i){return i.replace(eE,tE)}function tE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sr&&(e="SHADOWMAP_TYPE_VSM"),e}function iE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case uo:case fo:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function sE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bd:e="ENVMAP_BLENDING_MULTIPLY";break;case tx:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function oE(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aE(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nE(t),c=iE(t),h=rE(t),f=sE(t),u=oE(t),m=$M(t),g=ZM(s),y=r.createProgram(),p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(la).join(`
`),d.length>0&&(d+=`
`)):(p=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),d=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yr?"#define TONE_MAPPING":"",t.toneMapping!==Yr?At.tonemapping_pars_fragment:"",t.toneMapping!==Yr?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,XM("linearToOutputTexel",t.outputColorSpace),YM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=$u(o),o=Vp(o,t),o=Gp(o,t),a=$u(a),a=Vp(a,t),a=Gp(a,t),o=Wp(o),a=Wp(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=M+p+o,_=M+d+a,R=Bp(r,r.VERTEX_SHADER,x),b=Bp(r,r.FRAGMENT_SHADER,_);r.attachShader(y,R),r.attachShader(y,b),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(S){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(y).trim(),W=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(b).trim(),ee=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,R,b);else{let z=kp(r,R,"vertex"),ae=kp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+z+`
`+ae)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(W===""||$==="")&&(X=!1);X&&(S.diagnostics={runnable:ee,programLog:N,vertexShader:{log:W,prefix:p},fragmentShader:{log:$,prefix:d}})}r.deleteShader(R),r.deleteShader(b),P=new lo(r,y),O=KM(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let O;this.getAttributes=function(){return O===void 0&&T(this),O};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(y,kM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=b,this}var cE=0,Zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ku(e),t.set(e,n)),n}},Ku=class{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}};function lE(i,e,t,n,r,s,o){let a=new va,l=new Zu,c=new Set,h=[],f=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function d(v,S,N,W,$){let ee=W.fog,X=$.geometry,z=v.isMeshStandardMaterial?W.environment:null,ae=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),he=ae&&ae.mapping===ml?ae.image.height:null,F=y[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let te=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=te!==void 0?te.length:0,ce=0;X.morphAttributes.position!==void 0&&(ce=1),X.morphAttributes.normal!==void 0&&(ce=2),X.morphAttributes.color!==void 0&&(ce=3);let V,ie,k,B;if(F){let Pt=lr[F];V=Pt.vertexShader,ie=Pt.fragmentShader}else V=v.vertexShader,ie=v.fragmentShader,l.update(v),k=l.getVertexShaderID(v),B=l.getFragmentShaderID(v);let G=i.getRenderTarget(),de=$.isInstancedMesh===!0,Ee=$.isBatchedMesh===!0,De=!!v.map,K=!!v.matcap,I=!!ae,pe=!!v.aoMap,ye=!!v.lightMap,ge=!!v.bumpMap,ve=!!v.normalMap,Le=!!v.displacementMap,Se=!!v.emissiveMap,H=!!v.metalnessMap,A=!!v.roughnessMap,re=v.anisotropy>0,_e=v.clearcoat>0,Ae=v.dispersion>0,Te=v.iridescence>0,Je=v.sheen>0,Me=v.transmission>0,He=re&&!!v.anisotropyMap,Ke=_e&&!!v.clearcoatMap,Pe=_e&&!!v.clearcoatNormalMap,Ve=_e&&!!v.clearcoatRoughnessMap,Qe=Te&&!!v.iridescenceMap,Q=Te&&!!v.iridescenceThicknessMap,se=Je&&!!v.sheenColorMap,we=Je&&!!v.sheenRoughnessMap,Ie=!!v.specularMap,be=!!v.specularColorMap,U=!!v.specularIntensityMap,Re=Me&&!!v.transmissionMap,oe=Me&&!!v.thicknessMap,fe=!!v.gradientMap,Ue=!!v.alphaMap,ze=v.alphaTest>0,it=!!v.alphaHash,Et=!!v.extensions,Wt=Yr;v.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let xt={shaderID:F,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:ie,defines:v.defines,customVertexShaderID:k,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ee,batchingColor:Ee&&$._colorsTexture!==null,instancing:de,instancingColor:de&&$.instanceColor!==null,instancingMorph:de&&$.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:es,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:K,envMap:I,envMapMode:I&&ae.mapping,envMapCubeUVHeight:he,aoMap:pe,lightMap:ye,bumpMap:ge,normalMap:ve,displacementMap:m&&Le,emissiveMap:Se,normalMapObjectSpace:ve&&v.normalMapType===ux,normalMapTangentSpace:ve&&v.normalMapType===Dd,metalnessMap:H,roughnessMap:A,anisotropy:re,anisotropyMap:He,clearcoat:_e,clearcoatMap:Ke,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ve,dispersion:Ae,iridescence:Te,iridescenceMap:Qe,iridescenceThicknessMap:Q,sheen:Je,sheenColorMap:se,sheenRoughnessMap:we,specularMap:Ie,specularColorMap:be,specularIntensityMap:U,transmission:Me,transmissionMap:Re,thicknessMap:oe,gradientMap:fe,opaque:v.transparent===!1&&v.blending===qr&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ze,alphaHash:it,combine:v.combine,mapUv:De&&p(v.map.channel),aoMapUv:pe&&p(v.aoMap.channel),lightMapUv:ye&&p(v.lightMap.channel),bumpMapUv:ge&&p(v.bumpMap.channel),normalMapUv:ve&&p(v.normalMap.channel),displacementMapUv:Le&&p(v.displacementMap.channel),emissiveMapUv:Se&&p(v.emissiveMap.channel),metalnessMapUv:H&&p(v.metalnessMap.channel),roughnessMapUv:A&&p(v.roughnessMap.channel),anisotropyMapUv:He&&p(v.anisotropyMap.channel),clearcoatMapUv:Ke&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(v.sheenRoughnessMap.channel),specularMapUv:Ie&&p(v.specularMap.channel),specularColorMapUv:be&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:Re&&p(v.transmissionMap.channel),thicknessMapUv:oe&&p(v.thicknessMap.channel),alphaMapUv:Ue&&p(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ve||re),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!X.attributes.uv&&(De||Ue),fog:!!ee,useFog:v.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ln,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ct,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Et&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&v.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function M(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(S,v),_(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function _(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){let S=y[v.type],N;if(S){let W=lr[S];N=jx.clone(W.uniforms)}else N=v.uniforms;return N}function b(v,S){let N;for(let W=0,$=h.length;W<$;W++){let ee=h[W];if(ee.cacheKey===S){N=ee,++N.usedTimes;break}}return N===void 0&&(N=new aE(i,S,v,s),h.push(N)),N}function T(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function O(){l.dispose()}return{getParameters:d,getProgramCacheKey:M,getUniforms:R,acquireProgram:b,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:O}}function hE(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function uE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,u,m,g,y,p){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:y,group:p},i[e]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=p),e++,d}function a(f,u,m,g,y,p){let d=o(f,u,m,g,y,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,u,m,g,y,p){let d=o(f,u,m,g,y,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,u){t.length>1&&t.sort(f||uE),n.length>1&&n.sort(u||qp),r.length>1&&r.sort(u||qp)}function h(){for(let f=e,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function dE(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Yp,i.set(n,[o])):r>=s.length?(o=new Yp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fE(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new pt};break;case"SpotLight":t={position:new w,direction:new w,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function pE(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mE=0;function gE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xE(i){let e=new fE,t=pE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let r=new w,s=new Lt,o=new Lt;function a(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,y=0,p=0,d=0,M=0,x=0,_=0,R=0,b=0,T=0;c.sort(gE);for(let O=0,v=c.length;O<v;O++){let S=c[O],N=S.color,W=S.intensity,$=S.distance,ee=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*W,f+=N.g*W,u+=N.b*W;else if(S.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(S.sh.coefficients[X],W);T++}else if(S.isDirectionalLight){let X=e.get(S);if(X.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let z=S.shadow,ae=t.get(S);ae.shadowIntensity=z.intensity,ae.shadowBias=z.bias,ae.shadowNormalBias=z.normalBias,ae.shadowRadius=z.radius,ae.shadowMapSize=z.mapSize,n.directionalShadow[m]=ae,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=S.shadow.matrix,M++}n.directional[m]=X,m++}else if(S.isSpotLight){let X=e.get(S);X.position.setFromMatrixPosition(S.matrixWorld),X.color.copy(N).multiplyScalar(W),X.distance=$,X.coneCos=Math.cos(S.angle),X.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),X.decay=S.decay,n.spot[y]=X;let z=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,z.updateMatrices(S),S.castShadow&&b++),n.spotLightMatrix[y]=z.matrix,S.castShadow){let ae=t.get(S);ae.shadowIntensity=z.intensity,ae.shadowBias=z.bias,ae.shadowNormalBias=z.normalBias,ae.shadowRadius=z.radius,ae.shadowMapSize=z.mapSize,n.spotShadow[y]=ae,n.spotShadowMap[y]=ee,_++}y++}else if(S.isRectAreaLight){let X=e.get(S);X.color.copy(N).multiplyScalar(W),X.halfWidth.set(S.width*.5,0,0),X.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=X,p++}else if(S.isPointLight){let X=e.get(S);if(X.color.copy(S.color).multiplyScalar(S.intensity),X.distance=S.distance,X.decay=S.decay,S.castShadow){let z=S.shadow,ae=t.get(S);ae.shadowIntensity=z.intensity,ae.shadowBias=z.bias,ae.shadowNormalBias=z.normalBias,ae.shadowRadius=z.radius,ae.shadowMapSize=z.mapSize,ae.shadowCameraNear=z.camera.near,ae.shadowCameraFar=z.camera.far,n.pointShadow[g]=ae,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=S.shadow.matrix,x++}n.point[g]=X,g++}else if(S.isHemisphereLight){let X=e.get(S);X.skyColor.copy(S.color).multiplyScalar(W),X.groundColor.copy(S.groundColor).multiplyScalar(W),n.hemi[d]=X,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ze.LTC_FLOAT_1,n.rectAreaLTC2=Ze.LTC_FLOAT_2):(n.rectAreaLTC1=Ze.LTC_HALF_1,n.rectAreaLTC2=Ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==p||P.hemiLength!==d||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=p,P.hemiLength=d,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=T,n.version=mE++)}function l(c,h){let f=0,u=0,m=0,g=0,y=0,p=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let x=c[d];if(x.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),f++}else if(x.isSpotLight){let _=n.spot[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function $p(i){let e=new xE(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function yE(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new $p(i),e.set(r,[a])):s>=o.length?(a=new $p(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ea=class extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ju=class extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EE(i,e,t){let n=new Ma,r=new Be,s=new Be,o=new tn,a=new Ea({depthPacking:Ld}),l=new Ju,c={},h=t.maxTextureSize,f={[ni]:Tn,[Tn]:ni,[Ct]:Ct},u=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:vE,fragmentShader:ME}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new at(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f0;let d=this.type;this.render=function(b,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;let O=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Xr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let W=d!==Sr&&this.type===Sr,$=d===Sr&&this.type!==Sr;for(let ee=0,X=b.length;ee<X;ee++){let z=b[ee],ae=z.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;r.copy(ae.mapSize);let he=ae.getFrameExtents();if(r.multiply(he),s.copy(ae.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/he.x),r.x=s.x*he.x,ae.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/he.y),r.y=s.y*he.y,ae.mapSize.y=s.y)),ae.map===null||W===!0||$===!0){let te=this.type!==Sr?{minFilter:gi,magFilter:gi}:{};ae.map!==null&&ae.map.dispose(),ae.map=new Ar(r.x,r.y,te),ae.map.texture.name=z.name+".shadowMap",ae.camera.updateProjectionMatrix()}i.setRenderTarget(ae.map),i.clear();let F=ae.getViewportCount();for(let te=0;te<F;te++){let J=ae.getViewport(te);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),N.viewport(o),ae.updateMatrices(z,te),n=ae.getFrustum(),_(T,P,ae.camera,z,this.type)}ae.isPointLightShadow!==!0&&this.type===Sr&&M(ae,P),ae.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(O,v,S)};function M(b,T){let P=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ar(r.x,r.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,P,u,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,P,m,y,null)}function x(b,T,P,O){let v=null,S=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)v=S;else if(v=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=v.uuid,W=T.uuid,$=c[N];$===void 0&&($={},c[N]=$);let ee=$[W];ee===void 0&&(ee=v.clone(),$[W]=ee,T.addEventListener("dispose",R)),v=ee}if(v.visible=T.visible,v.wireframe=T.wireframe,O===Sr?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=i.properties.get(v);N.light=P}return v}function _(b,T,P,O,v){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Sr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let W=e.update(b),$=b.material;if(Array.isArray($)){let ee=W.groups;for(let X=0,z=ee.length;X<z;X++){let ae=ee[X],he=$[ae.materialIndex];if(he&&he.visible){let F=x(b,he,O,v);b.onBeforeShadow(i,b,T,P,W,F,ae),i.renderBufferDirect(P,null,W,F,b,ae),b.onAfterShadow(i,b,T,P,W,F,ae)}}}else if($.visible){let ee=x(b,$,O,v);b.onBeforeShadow(i,b,T,P,W,ee,null),i.renderBufferDirect(P,null,W,ee,b,null),b.onAfterShadow(i,b,T,P,W,ee,null)}}let N=b.children;for(let W=0,$=N.length;W<$;W++)_(N[W],T,P,O,v)}function R(b){b.target.removeEventListener("dispose",R);for(let P in c){let O=c[P],v=b.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}var _E={[ru]:su,[ou]:lu,[au]:hu,[ho]:cu,[su]:ru,[lu]:ou,[hu]:au,[cu]:ho};function bE(i){function e(){let U=!1,Re=new tn,oe=null,fe=new tn(0,0,0,0);return{setMask:function(Ue){oe!==Ue&&!U&&(i.colorMask(Ue,Ue,Ue,Ue),oe=Ue)},setLocked:function(Ue){U=Ue},setClear:function(Ue,ze,it,Et,Wt){Wt===!0&&(Ue*=Et,ze*=Et,it*=Et),Re.set(Ue,ze,it,Et),fe.equals(Re)===!1&&(i.clearColor(Ue,ze,it,Et),fe.copy(Re))},reset:function(){U=!1,oe=null,fe.set(-1,0,0,0)}}}function t(){let U=!1,Re=!1,oe=null,fe=null,Ue=null;return{setReversed:function(ze){Re=ze},setTest:function(ze){ze?k(i.DEPTH_TEST):B(i.DEPTH_TEST)},setMask:function(ze){oe!==ze&&!U&&(i.depthMask(ze),oe=ze)},setFunc:function(ze){if(Re&&(ze=_E[ze]),fe!==ze){switch(ze){case ru:i.depthFunc(i.NEVER);break;case su:i.depthFunc(i.ALWAYS);break;case ou:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case au:i.depthFunc(i.EQUAL);break;case cu:i.depthFunc(i.GEQUAL);break;case lu:i.depthFunc(i.GREATER);break;case hu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ze}},setLocked:function(ze){U=ze},setClear:function(ze){Ue!==ze&&(i.clearDepth(ze),Ue=ze)},reset:function(){U=!1,oe=null,fe=null,Ue=null}}}function n(){let U=!1,Re=null,oe=null,fe=null,Ue=null,ze=null,it=null,Et=null,Wt=null;return{setTest:function(xt){U||(xt?k(i.STENCIL_TEST):B(i.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!U&&(i.stencilMask(xt),Re=xt)},setFunc:function(xt,Pt,an){(oe!==xt||fe!==Pt||Ue!==an)&&(i.stencilFunc(xt,Pt,an),oe=xt,fe=Pt,Ue=an)},setOp:function(xt,Pt,an){(ze!==xt||it!==Pt||Et!==an)&&(i.stencilOp(xt,Pt,an),ze=xt,it=Pt,Et=an)},setLocked:function(xt){U=xt},setClear:function(xt){Wt!==xt&&(i.clearStencil(xt),Wt=xt)},reset:function(){U=!1,Re=null,oe=null,fe=null,Ue=null,ze=null,it=null,Et=null,Wt=null}}}let r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,u=[],m=null,g=!1,y=null,p=null,d=null,M=null,x=null,_=null,R=null,b=new pt(0,0,0),T=0,P=!1,O=null,v=null,S=null,N=null,W=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,X=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),ee=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ee=X>=2);let ae=null,he={},F=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),J=new tn().fromArray(F),ce=new tn().fromArray(te);function V(U,Re,oe,fe){let Ue=new Uint8Array(4),ze=i.createTexture();i.bindTexture(U,ze),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<oe;it++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Re+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return ze}let ie={};ie[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),k(i.DEPTH_TEST),s.setFunc(ho),ye(!1),ge(ep),k(i.CULL_FACE),I(Xr);function k(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function B(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function G(U,Re){return h[U]!==Re?(i.bindFramebuffer(U,Re),h[U]=Re,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function de(U,Re){let oe=u,fe=!1;if(U){oe=f.get(Re),oe===void 0&&(oe=[],f.set(Re,oe));let Ue=U.textures;if(oe.length!==Ue.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,it=Ue.length;ze<it;ze++)oe[ze]=i.COLOR_ATTACHMENT0+ze;oe.length=Ue.length,fe=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,fe=!0);fe&&i.drawBuffers(oe)}function Ee(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let De={[ys]:i.FUNC_ADD,[z1]:i.FUNC_SUBTRACT,[O1]:i.FUNC_REVERSE_SUBTRACT};De[B1]=i.MIN,De[k1]=i.MAX;let K={[V1]:i.ZERO,[G1]:i.ONE,[W1]:i.SRC_COLOR,[nu]:i.SRC_ALPHA,[K1]:i.SRC_ALPHA_SATURATE,[$1]:i.DST_COLOR,[q1]:i.DST_ALPHA,[X1]:i.ONE_MINUS_SRC_COLOR,[iu]:i.ONE_MINUS_SRC_ALPHA,[Z1]:i.ONE_MINUS_DST_COLOR,[Y1]:i.ONE_MINUS_DST_ALPHA,[J1]:i.CONSTANT_COLOR,[Q1]:i.ONE_MINUS_CONSTANT_COLOR,[j1]:i.CONSTANT_ALPHA,[ex]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,Re,oe,fe,Ue,ze,it,Et,Wt,xt){if(U===Xr){g===!0&&(B(i.BLEND),g=!1);return}if(g===!1&&(k(i.BLEND),g=!0),U!==F1){if(U!==y||xt!==P){if((p!==ys||x!==ys)&&(i.blendEquation(i.FUNC_ADD),p=ys,x=ys),xt)switch(U){case qr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFunc(i.ONE,i.ONE);break;case tp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case np:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case np:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,M=null,_=null,R=null,b.set(0,0,0),T=0,y=U,P=xt}return}Ue=Ue||Re,ze=ze||oe,it=it||fe,(Re!==p||Ue!==x)&&(i.blendEquationSeparate(De[Re],De[Ue]),p=Re,x=Ue),(oe!==d||fe!==M||ze!==_||it!==R)&&(i.blendFuncSeparate(K[oe],K[fe],K[ze],K[it]),d=oe,M=fe,_=ze,R=it),(Et.equals(b)===!1||Wt!==T)&&(i.blendColor(Et.r,Et.g,Et.b,Wt),b.copy(Et),T=Wt),y=U,P=!1}function pe(U,Re){U.side===Ct?B(i.CULL_FACE):k(i.CULL_FACE);let oe=U.side===Tn;Re&&(oe=!oe),ye(oe),U.blending===qr&&U.transparent===!1?I(Xr):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);let fe=U.stencilWrite;o.setTest(fe),fe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):B(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(U){O!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),O=U)}function ge(U){U!==H1?(k(i.CULL_FACE),U!==v&&(U===ep?i.cullFace(i.BACK):U===N1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):B(i.CULL_FACE),v=U}function ve(U){U!==S&&(ee&&i.lineWidth(U),S=U)}function Le(U,Re,oe){U?(k(i.POLYGON_OFFSET_FILL),(N!==Re||W!==oe)&&(i.polygonOffset(Re,oe),N=Re,W=oe)):B(i.POLYGON_OFFSET_FILL)}function Se(U){U?k(i.SCISSOR_TEST):B(i.SCISSOR_TEST)}function H(U){U===void 0&&(U=i.TEXTURE0+$-1),ae!==U&&(i.activeTexture(U),ae=U)}function A(U,Re,oe){oe===void 0&&(ae===null?oe=i.TEXTURE0+$-1:oe=ae);let fe=he[oe];fe===void 0&&(fe={type:void 0,texture:void 0},he[oe]=fe),(fe.type!==U||fe.texture!==Re)&&(ae!==oe&&(i.activeTexture(oe),ae=oe),i.bindTexture(U,Re||ie[U]),fe.type=U,fe.texture=Re)}function re(){let U=he[ae];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Je(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(U){J.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),J.copy(U))}function se(U){ce.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ce.copy(U))}function we(U,Re){let oe=l.get(Re);oe===void 0&&(oe=new WeakMap,l.set(Re,oe));let fe=oe.get(U);fe===void 0&&(fe=i.getUniformBlockIndex(Re,U.name),oe.set(U,fe))}function Ie(U,Re){let fe=l.get(Re).get(U);a.get(Re)!==fe&&(i.uniformBlockBinding(Re,fe,U.__bindingPointIndex),a.set(Re,fe))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ae=null,he={},h={},f=new WeakMap,u=[],m=null,g=!1,y=null,p=null,d=null,M=null,x=null,_=null,R=null,b=new pt(0,0,0),T=0,P=!1,O=null,v=null,S=null,N=null,W=null,J.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:k,disable:B,bindFramebuffer:G,drawBuffers:de,useProgram:Ee,setBlending:I,setMaterial:pe,setFlipSided:ye,setCullFace:ge,setLineWidth:ve,setPolygonOffset:Le,setScissorTest:Se,activeTexture:H,bindTexture:A,unbindTexture:re,compressedTexImage2D:_e,compressedTexImage3D:Ae,texImage2D:Ve,texImage3D:Qe,updateUBOMapping:we,uniformBlockBinding:Ie,texStorage2D:Ke,texStorage3D:Pe,texSubImage2D:Te,texSubImage3D:Je,compressedTexSubImage2D:Me,compressedTexSubImage3D:He,scissor:Q,viewport:se,reset:be}}function Zp(i,e,t,n){let r=wE(n);switch(t){case y0:return i*e;case M0:return i*e;case E0:return i*e*2;case Ad:return i*e/r.components*r.byteLength;case Cd:return i*e/r.components*r.byteLength;case _0:return i*e*2/r.components*r.byteLength;case Pd:return i*e*2/r.components*r.byteLength;case v0:return i*e*3/r.components*r.byteLength;case Si:return i*e*4/r.components*r.byteLength;case Id:return i*e*4/r.components*r.byteLength;case Dc:case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pu:case gu:return Math.max(i,16)*Math.max(e,8)/4;case fu:case mu:return Math.max(i,8)*Math.max(e,8)/2;case xu:case yu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _u:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Du:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Uu:case Hu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case b0:case Nu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fu:case zu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wE(i){switch(i){case Rr:case m0:return{byteLength:1,components:1};case ga:case g0:case Pa:return{byteLength:2,components:1};case Td:case Rd:return{byteLength:2,components:4};case bs:case Sd:case hr:return{byteLength:4,components:1};case x0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function SE(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,f,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(H,A){return m?new OffscreenCanvas(H,A):xa("canvas")}function y(H,A,re){let _e=1,Ae=Se(H);if((Ae.width>re||Ae.height>re)&&(_e=re/Math.max(Ae.width,Ae.height)),_e<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let Te=Math.floor(_e*Ae.width),Je=Math.floor(_e*Ae.height);f===void 0&&(f=g(Te,Je));let Me=A?g(Te,Je):f;return Me.width=Te,Me.height=Je,Me.getContext("2d").drawImage(H,0,0,Te,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+Te+"x"+Je+")."),Me}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),H;return H}function p(H){return H.generateMipmaps&&H.minFilter!==gi&&H.minFilter!==gn}function d(H){i.generateMipmap(H)}function M(H,A,re,_e,Ae=!1){if(H!==null){if(i[H]!==void 0)return i[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let Te=A;if(A===i.RED&&(re===i.FLOAT&&(Te=i.R32F),re===i.HALF_FLOAT&&(Te=i.R16F),re===i.UNSIGNED_BYTE&&(Te=i.R8)),A===i.RED_INTEGER&&(re===i.UNSIGNED_BYTE&&(Te=i.R8UI),re===i.UNSIGNED_SHORT&&(Te=i.R16UI),re===i.UNSIGNED_INT&&(Te=i.R32UI),re===i.BYTE&&(Te=i.R8I),re===i.SHORT&&(Te=i.R16I),re===i.INT&&(Te=i.R32I)),A===i.RG&&(re===i.FLOAT&&(Te=i.RG32F),re===i.HALF_FLOAT&&(Te=i.RG16F),re===i.UNSIGNED_BYTE&&(Te=i.RG8)),A===i.RG_INTEGER&&(re===i.UNSIGNED_BYTE&&(Te=i.RG8UI),re===i.UNSIGNED_SHORT&&(Te=i.RG16UI),re===i.UNSIGNED_INT&&(Te=i.RG32UI),re===i.BYTE&&(Te=i.RG8I),re===i.SHORT&&(Te=i.RG16I),re===i.INT&&(Te=i.RG32I)),A===i.RGB_INTEGER&&(re===i.UNSIGNED_BYTE&&(Te=i.RGB8UI),re===i.UNSIGNED_SHORT&&(Te=i.RGB16UI),re===i.UNSIGNED_INT&&(Te=i.RGB32UI),re===i.BYTE&&(Te=i.RGB8I),re===i.SHORT&&(Te=i.RGB16I),re===i.INT&&(Te=i.RGB32I)),A===i.RGBA_INTEGER&&(re===i.UNSIGNED_BYTE&&(Te=i.RGBA8UI),re===i.UNSIGNED_SHORT&&(Te=i.RGBA16UI),re===i.UNSIGNED_INT&&(Te=i.RGBA32UI),re===i.BYTE&&(Te=i.RGBA8I),re===i.SHORT&&(Te=i.RGBA16I),re===i.INT&&(Te=i.RGBA32I)),A===i.RGB&&re===i.UNSIGNED_INT_5_9_9_9_REV&&(Te=i.RGB9_E5),A===i.RGBA){let Je=Ae?kc:Jt.getTransfer(_e);re===i.FLOAT&&(Te=i.RGBA32F),re===i.HALF_FLOAT&&(Te=i.RGBA16F),re===i.UNSIGNED_BYTE&&(Te=Je===ln?i.SRGB8_ALPHA8:i.RGBA8),re===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),re===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)}return(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function x(H,A){let re;return H?A===null||A===bs||A===po?re=i.DEPTH24_STENCIL8:A===hr?re=i.DEPTH32F_STENCIL8:A===ga&&(re=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===bs||A===po?re=i.DEPTH_COMPONENT24:A===hr?re=i.DEPTH_COMPONENT32F:A===ga&&(re=i.DEPTH_COMPONENT16),re}function _(H,A){return p(H)===!0||H.isFramebufferTexture&&H.minFilter!==gi&&H.minFilter!==gn?Math.log2(Math.max(A.width,A.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?A.mipmaps.length:1}function R(H){let A=H.target;A.removeEventListener("dispose",R),T(A),A.isVideoTexture&&h.delete(A)}function b(H){let A=H.target;A.removeEventListener("dispose",b),O(A)}function T(H){let A=n.get(H);if(A.__webglInit===void 0)return;let re=H.source,_e=u.get(re);if(_e){let Ae=_e[A.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&P(H),Object.keys(_e).length===0&&u.delete(re)}n.remove(H)}function P(H){let A=n.get(H);i.deleteTexture(A.__webglTexture);let re=H.source,_e=u.get(re);delete _e[A.__cacheKey],o.memory.textures--}function O(H){let A=n.get(H);if(H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let Ae=0;Ae<A.__webglFramebuffer[_e].length;Ae++)i.deleteFramebuffer(A.__webglFramebuffer[_e][Ae]);else i.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)i.deleteFramebuffer(A.__webglFramebuffer[_e]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let re=H.textures;for(let _e=0,Ae=re.length;_e<Ae;_e++){let Te=n.get(re[_e]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(re[_e])}n.remove(H)}let v=0;function S(){v=0}function N(){let H=v;return H>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+r.maxTextures),v+=1,H}function W(H){let A=[];return A.push(H.wrapS),A.push(H.wrapT),A.push(H.wrapR||0),A.push(H.magFilter),A.push(H.minFilter),A.push(H.anisotropy),A.push(H.internalFormat),A.push(H.format),A.push(H.type),A.push(H.generateMipmaps),A.push(H.premultiplyAlpha),A.push(H.flipY),A.push(H.unpackAlignment),A.push(H.colorSpace),A.join()}function $(H,A){let re=n.get(H);if(H.isVideoTexture&&ve(H),H.isRenderTargetTexture===!1&&H.version>0&&re.__version!==H.version){let _e=H.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(re,H,A);return}}t.bindTexture(i.TEXTURE_2D,re.__webglTexture,i.TEXTURE0+A)}function ee(H,A){let re=n.get(H);if(H.version>0&&re.__version!==H.version){ce(re,H,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,re.__webglTexture,i.TEXTURE0+A)}function X(H,A){let re=n.get(H);if(H.version>0&&re.__version!==H.version){ce(re,H,A);return}t.bindTexture(i.TEXTURE_3D,re.__webglTexture,i.TEXTURE0+A)}function z(H,A){let re=n.get(H);if(H.version>0&&re.__version!==H.version){V(re,H,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture,i.TEXTURE0+A)}let ae={[_s]:i.REPEAT,[Es]:i.CLAMP_TO_EDGE,[du]:i.MIRRORED_REPEAT},he={[gi]:i.NEAREST,[lx]:i.NEAREST_MIPMAP_NEAREST,[sc]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Eh]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},F={[dx]:i.NEVER,[yx]:i.ALWAYS,[fx]:i.LESS,[w0]:i.LEQUAL,[px]:i.EQUAL,[xx]:i.GEQUAL,[mx]:i.GREATER,[gx]:i.NOTEQUAL};function te(H,A){if(A.type===hr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===gn||A.magFilter===Eh||A.magFilter===sc||A.magFilter===ji||A.minFilter===gn||A.minFilter===Eh||A.minFilter===sc||A.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,ae[A.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,ae[A.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,ae[A.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,he[A.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,he[A.minFilter]),A.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gi||A.minFilter!==sc&&A.minFilter!==ji||A.type===hr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(H,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function J(H,A){let re=!1;H.__webglInit===void 0&&(H.__webglInit=!0,A.addEventListener("dispose",R));let _e=A.source,Ae=u.get(_e);Ae===void 0&&(Ae={},u.set(_e,Ae));let Te=W(A);if(Te!==H.__cacheKey){Ae[Te]===void 0&&(Ae[Te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,re=!0),Ae[Te].usedTimes++;let Je=Ae[H.__cacheKey];Je!==void 0&&(Ae[H.__cacheKey].usedTimes--,Je.usedTimes===0&&P(A)),H.__cacheKey=Te,H.__webglTexture=Ae[Te].texture}return re}function ce(H,A,re){let _e=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=i.TEXTURE_3D);let Ae=J(H,A),Te=A.source;t.bindTexture(_e,H.__webglTexture,i.TEXTURE0+re);let Je=n.get(Te);if(Te.version!==Je.__version||Ae===!0){t.activeTexture(i.TEXTURE0+re);let Me=Jt.getPrimaries(Jt.workingColorSpace),He=A.colorSpace===Wr?null:Jt.getPrimaries(A.colorSpace),Ke=A.colorSpace===Wr||Me===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Pe=y(A.image,!1,r.maxTextureSize);Pe=Le(A,Pe);let Ve=s.convert(A.format,A.colorSpace),Qe=s.convert(A.type),Q=M(A.internalFormat,Ve,Qe,A.colorSpace,A.isVideoTexture);te(_e,A);let se,we=A.mipmaps,Ie=A.isVideoTexture!==!0,be=Je.__version===void 0||Ae===!0,U=Te.dataReady,Re=_(A,Pe);if(A.isDepthTexture)Q=x(A.format===mo,A.type),be&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Q,Pe.width,Pe.height):t.texImage2D(i.TEXTURE_2D,0,Q,Pe.width,Pe.height,0,Ve,Qe,null));else if(A.isDataTexture)if(we.length>0){Ie&&be&&t.texStorage2D(i.TEXTURE_2D,Re,Q,we[0].width,we[0].height);for(let oe=0,fe=we.length;oe<fe;oe++)se=we[oe],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,Ve,Qe,se.data):t.texImage2D(i.TEXTURE_2D,oe,Q,se.width,se.height,0,Ve,Qe,se.data);A.generateMipmaps=!1}else Ie?(be&&t.texStorage2D(i.TEXTURE_2D,Re,Q,Pe.width,Pe.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe.width,Pe.height,Ve,Qe,Pe.data)):t.texImage2D(i.TEXTURE_2D,0,Q,Pe.width,Pe.height,0,Ve,Qe,Pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ie&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Q,we[0].width,we[0].height,Pe.depth);for(let oe=0,fe=we.length;oe<fe;oe++)if(se=we[oe],A.format!==Si)if(Ve!==null)if(Ie){if(U)if(A.layerUpdates.size>0){let Ue=Zp(se.width,se.height,A.format,A.type);for(let ze of A.layerUpdates){let it=se.data.subarray(ze*Ue/se.data.BYTES_PER_ELEMENT,(ze+1)*Ue/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,ze,se.width,se.height,1,Ve,it,0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,se.width,se.height,Pe.depth,Ve,se.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Q,se.width,se.height,Pe.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,se.width,se.height,Pe.depth,Ve,Qe,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Q,se.width,se.height,Pe.depth,0,Ve,Qe,se.data)}else{Ie&&be&&t.texStorage2D(i.TEXTURE_2D,Re,Q,we[0].width,we[0].height);for(let oe=0,fe=we.length;oe<fe;oe++)se=we[oe],A.format!==Si?Ve!==null?Ie?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,Ve,se.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Q,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,Ve,Qe,se.data):t.texImage2D(i.TEXTURE_2D,oe,Q,se.width,se.height,0,Ve,Qe,se.data)}else if(A.isDataArrayTexture)if(Ie){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Q,Pe.width,Pe.height,Pe.depth),U)if(A.layerUpdates.size>0){let oe=Zp(Pe.width,Pe.height,A.format,A.type);for(let fe of A.layerUpdates){let Ue=Pe.data.subarray(fe*oe/Pe.data.BYTES_PER_ELEMENT,(fe+1)*oe/Pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,Pe.width,Pe.height,1,Ve,Qe,Ue)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,Ve,Qe,Pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,Pe.width,Pe.height,Pe.depth,0,Ve,Qe,Pe.data);else if(A.isData3DTexture)Ie?(be&&t.texStorage3D(i.TEXTURE_3D,Re,Q,Pe.width,Pe.height,Pe.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,Ve,Qe,Pe.data)):t.texImage3D(i.TEXTURE_3D,0,Q,Pe.width,Pe.height,Pe.depth,0,Ve,Qe,Pe.data);else if(A.isFramebufferTexture){if(be)if(Ie)t.texStorage2D(i.TEXTURE_2D,Re,Q,Pe.width,Pe.height);else{let oe=Pe.width,fe=Pe.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Q,oe,fe,0,Ve,Qe,null),oe>>=1,fe>>=1}}else if(we.length>0){if(Ie&&be){let oe=Se(we[0]);t.texStorage2D(i.TEXTURE_2D,Re,Q,oe.width,oe.height)}for(let oe=0,fe=we.length;oe<fe;oe++)se=we[oe],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ve,Qe,se):t.texImage2D(i.TEXTURE_2D,oe,Q,Ve,Qe,se);A.generateMipmaps=!1}else if(Ie){if(be){let oe=Se(Pe);t.texStorage2D(i.TEXTURE_2D,Re,Q,oe.width,oe.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,Qe,Pe)}else t.texImage2D(i.TEXTURE_2D,0,Q,Ve,Qe,Pe);p(A)&&d(_e),Je.__version=Te.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}function V(H,A,re){if(A.image.length!==6)return;let _e=J(H,A),Ae=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+re);let Te=n.get(Ae);if(Ae.version!==Te.__version||_e===!0){t.activeTexture(i.TEXTURE0+re);let Je=Jt.getPrimaries(Jt.workingColorSpace),Me=A.colorSpace===Wr?null:Jt.getPrimaries(A.colorSpace),He=A.colorSpace===Wr||Je===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Pe=A.image[0]&&A.image[0].isDataTexture,Ve=[];for(let fe=0;fe<6;fe++)!Ke&&!Pe?Ve[fe]=y(A.image[fe],!0,r.maxCubemapSize):Ve[fe]=Pe?A.image[fe].image:A.image[fe],Ve[fe]=Le(A,Ve[fe]);let Qe=Ve[0],Q=s.convert(A.format,A.colorSpace),se=s.convert(A.type),we=M(A.internalFormat,Q,se,A.colorSpace),Ie=A.isVideoTexture!==!0,be=Te.__version===void 0||_e===!0,U=Ae.dataReady,Re=_(A,Qe);te(i.TEXTURE_CUBE_MAP,A);let oe;if(Ke){Ie&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,we,Qe.width,Qe.height);for(let fe=0;fe<6;fe++){oe=Ve[fe].mipmaps;for(let Ue=0;Ue<oe.length;Ue++){let ze=oe[Ue];A.format!==Si?Q!==null?Ie?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,ze.width,ze.height,Q,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,we,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,ze.width,ze.height,Q,se,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,we,ze.width,ze.height,0,Q,se,ze.data)}}}else{if(oe=A.mipmaps,Ie&&be){oe.length>0&&Re++;let fe=Se(Ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,we,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Pe){Ie?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ve[fe].width,Ve[fe].height,Q,se,Ve[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,we,Ve[fe].width,Ve[fe].height,0,Q,se,Ve[fe].data);for(let Ue=0;Ue<oe.length;Ue++){let it=oe[Ue].image[fe].image;Ie?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,it.width,it.height,Q,se,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,we,it.width,it.height,0,Q,se,it.data)}}else{Ie?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Q,se,Ve[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,we,Q,se,Ve[fe]);for(let Ue=0;Ue<oe.length;Ue++){let ze=oe[Ue];Ie?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,Q,se,ze.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,we,Q,se,ze.image[fe])}}}p(A)&&d(i.TEXTURE_CUBE_MAP),Te.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}function ie(H,A,re,_e,Ae,Te){let Je=s.convert(re.format,re.colorSpace),Me=s.convert(re.type),He=M(re.internalFormat,Je,Me,re.colorSpace);if(!n.get(A).__hasExternalTextures){let Pe=Math.max(1,A.width>>Te),Ve=Math.max(1,A.height>>Te);Ae===i.TEXTURE_3D||Ae===i.TEXTURE_2D_ARRAY?t.texImage3D(Ae,Te,He,Pe,Ve,A.depth,0,Je,Me,null):t.texImage2D(Ae,Te,He,Pe,Ve,0,Je,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,H),ge(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Ae,n.get(re).__webglTexture,0,ye(A)):(Ae===i.TEXTURE_2D||Ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,Ae,n.get(re).__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(H,A,re){if(i.bindRenderbuffer(i.RENDERBUFFER,H),A.depthBuffer){let _e=A.depthTexture,Ae=_e&&_e.isDepthTexture?_e.type:null,Te=x(A.stencilBuffer,Ae),Je=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=ye(A);ge(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,Te,A.width,A.height):re?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Te,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Je,i.RENDERBUFFER,H)}else{let _e=A.textures;for(let Ae=0;Ae<_e.length;Ae++){let Te=_e[Ae],Je=s.convert(Te.format,Te.colorSpace),Me=s.convert(Te.type),He=M(Te.internalFormat,Je,Me,Te.colorSpace),Ke=ye(A);re&&ge(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,He,A.width,A.height):ge(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,He,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,He,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(H,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,H),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);let _e=n.get(A.depthTexture).__webglTexture,Ae=ye(A);if(A.depthTexture.format===ao)ge(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(A.depthTexture.format===mo)ge(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function G(H){let A=n.get(H),re=H.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==H.depthTexture){let _e=H.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){let Ae=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",Ae)};_e.addEventListener("dispose",Ae),A.__depthDisposeCallback=Ae}A.__boundDepthTexture=_e}if(H.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");B(A.__webglFramebuffer,H)}else if(re){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=i.createRenderbuffer(),k(A.__webglDepthbuffer[_e],H,!1);else{let Ae=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=A.__webglDepthbuffer[_e];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,Te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),k(A.__webglDepthbuffer,H,!1);else{let _e=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(H,A,re){let _e=n.get(H);A!==void 0&&ie(_e.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),re!==void 0&&G(H)}function Ee(H){let A=H.texture,re=n.get(H),_e=n.get(A);H.addEventListener("dispose",b);let Ae=H.textures,Te=H.isWebGLCubeRenderTarget===!0,Je=Ae.length>1;if(Je||(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=A.version,o.memory.textures++),Te){re.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[Me]=[];for(let He=0;He<A.mipmaps.length;He++)re.__webglFramebuffer[Me][He]=i.createFramebuffer()}else re.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let Me=0;Me<A.mipmaps.length;Me++)re.__webglFramebuffer[Me]=i.createFramebuffer()}else re.__webglFramebuffer=i.createFramebuffer();if(Je)for(let Me=0,He=Ae.length;Me<He;Me++){let Ke=n.get(Ae[Me]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(H.samples>0&&ge(H)===!1){re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Me=0;Me<Ae.length;Me++){let He=Ae[Me];re.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,re.__webglColorRenderbuffer[Me]);let Ke=s.convert(He.format,He.colorSpace),Pe=s.convert(He.type),Ve=M(He.internalFormat,Ke,Pe,He.colorSpace,H.isXRRenderTarget===!0),Qe=ye(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Ve,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,re.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),k(re.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),te(i.TEXTURE_CUBE_MAP,A);for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)ie(re.__webglFramebuffer[Me][He],H,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He);else ie(re.__webglFramebuffer[Me],H,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);p(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let Me=0,He=Ae.length;Me<He;Me++){let Ke=Ae[Me],Pe=n.get(Ke);t.bindTexture(i.TEXTURE_2D,Pe.__webglTexture),te(i.TEXTURE_2D,Ke),ie(re.__webglFramebuffer,H,Ke,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),p(Ke)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Me=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,_e.__webglTexture),te(Me,A),A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)ie(re.__webglFramebuffer[He],H,A,i.COLOR_ATTACHMENT0,Me,He);else ie(re.__webglFramebuffer,H,A,i.COLOR_ATTACHMENT0,Me,0);p(A)&&d(Me),t.unbindTexture()}H.depthBuffer&&G(H)}function De(H){let A=H.textures;for(let re=0,_e=A.length;re<_e;re++){let Ae=A[re];if(p(Ae)){let Te=H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Je=n.get(Ae).__webglTexture;t.bindTexture(Te,Je),d(Te),t.unbindTexture()}}}let K=[],I=[];function pe(H){if(H.samples>0){if(ge(H)===!1){let A=H.textures,re=H.width,_e=H.height,Ae=i.COLOR_BUFFER_BIT,Te=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Je=n.get(H),Me=A.length>1;if(Me)for(let He=0;He<A.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let He=0;He<A.length;He++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(Ae|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(Ae|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Je.__webglColorRenderbuffer[He]);let Ke=n.get(A[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,re,_e,0,0,re,_e,Ae,i.NEAREST),l===!0&&(K.length=0,I.length=0,K.push(i.COLOR_ATTACHMENT0+He),H.depthBuffer&&H.resolveDepthBuffer===!1&&(K.push(Te),I.push(Te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let He=0;He<A.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Je.__webglColorRenderbuffer[He]);let Ke=n.get(A[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&l){let A=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ye(H){return Math.min(r.maxSamples,H.samples)}function ge(H){let A=n.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ve(H){let A=o.render.frame;h.get(H)!==A&&(h.set(H,A),H.update())}function Le(H,A){let re=H.colorSpace,_e=H.format,Ae=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||re!==es&&re!==Wr&&(Jt.getTransfer(re)===ln?(_e!==Si||Ae!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}function Se(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(c.width=H.naturalWidth||H.width,c.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(c.width=H.displayWidth,c.height=H.displayHeight):(c.width=H.width,c.height=H.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=de,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ge}function TE(i,e){function t(n,r=Wr){let s,o=Jt.getTransfer(r);if(n===Rr)return i.UNSIGNED_BYTE;if(n===Td)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===x0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===m0)return i.BYTE;if(n===g0)return i.SHORT;if(n===ga)return i.UNSIGNED_SHORT;if(n===Sd)return i.INT;if(n===bs)return i.UNSIGNED_INT;if(n===hr)return i.FLOAT;if(n===Pa)return i.HALF_FLOAT;if(n===y0)return i.ALPHA;if(n===v0)return i.RGB;if(n===Si)return i.RGBA;if(n===M0)return i.LUMINANCE;if(n===E0)return i.LUMINANCE_ALPHA;if(n===ao)return i.DEPTH_COMPONENT;if(n===mo)return i.DEPTH_STENCIL;if(n===Ad)return i.RED;if(n===Cd)return i.RED_INTEGER;if(n===_0)return i.RG;if(n===Pd)return i.RG_INTEGER;if(n===Id)return i.RGBA_INTEGER;if(n===Dc||n===Uc||n===Hc||n===Nc)if(o===ln)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Dc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Dc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===pu||n===mu||n===gu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xu||n===yu||n===vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xu||n===yu)return o===ln?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mu||n===Eu||n===_u||n===bu||n===wu||n===Su||n===Tu||n===Ru||n===Au||n===Cu||n===Pu||n===Iu||n===Lu||n===Du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Su)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ru)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Iu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Du)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Uu||n===Hu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fc)return o===ln?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===b0||n===Nu||n===Fu||n===zu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qu=class extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xe=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},RE={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},AE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new di,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Di({vertexShader:AE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new Mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends Zr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,g=null,y=new ju,p=t.getContextAttributes(),d=null,M=null,x=[],_=[],R=new Be,b=null,T=new $n;T.layers.enable(1),T.viewport=new tn;let P=new $n;P.layers.enable(2),P.viewport=new tn;let O=[T,P],v=new Qu;v.layers.enable(1),v.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ie=x[V];return ie===void 0&&(ie=new da,x[V]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(V){let ie=x[V];return ie===void 0&&(ie=new da,x[V]=ie),ie.getGripSpace()},this.getHand=function(V){let ie=x[V];return ie===void 0&&(ie=new da,x[V]=ie),ie.getHandSpace()};function W(V){let ie=_.indexOf(V.inputSource);if(ie===-1)return;let k=x[ie];k!==void 0&&(k.update(V.inputSource,V.frame,c||o),k.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let V=0;V<x.length;V++){let ie=_[V];ie!==null&&(_[V]=null,x[V].disconnect(ie))}S=null,N=null,y.reset(),e.setRenderTarget(d),m=null,u=null,f=null,r=null,M=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Ar(m.framebufferWidth,m.framebufferHeight,{format:Si,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,k=null,B=null;p.depth&&(B=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?mo:ao,k=p.stencil?po:bs);let G={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(G),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ar(u.textureWidth,u.textureHeight,{format:Si,type:Rr,depthTexture:new Qc(u.textureWidth,u.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ee(V){for(let ie=0;ie<V.removed.length;ie++){let k=V.removed[ie],B=_.indexOf(k);B>=0&&(_[B]=null,x[B].disconnect(k))}for(let ie=0;ie<V.added.length;ie++){let k=V.added[ie],B=_.indexOf(k);if(B===-1){for(let de=0;de<x.length;de++)if(de>=_.length){_.push(k),B=de;break}else if(_[de]===null){_[de]=k,B=de;break}if(B===-1)break}let G=x[B];G&&G.connect(k)}}let X=new w,z=new w;function ae(V,ie,k){X.setFromMatrixPosition(ie.matrixWorld),z.setFromMatrixPosition(k.matrixWorld);let B=X.distanceTo(z),G=ie.projectionMatrix.elements,de=k.projectionMatrix.elements,Ee=G[14]/(G[10]-1),De=G[14]/(G[10]+1),K=(G[9]+1)/G[5],I=(G[9]-1)/G[5],pe=(G[8]-1)/G[0],ye=(de[8]+1)/de[0],ge=Ee*pe,ve=Ee*ye,Le=B/(-pe+ye),Se=Le*-pe;if(ie.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Se),V.translateZ(Le),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),G[10]===-1)V.projectionMatrix.copy(ie.projectionMatrix),V.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let H=Ee+Le,A=De+Le,re=ge-Se,_e=ve+(B-Se),Ae=K*De/A*H,Te=I*De/A*H;V.projectionMatrix.makePerspective(re,_e,Ae,Te,H,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function he(V,ie){ie===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ie.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let ie=V.near,k=V.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(k=y.depthFar)),v.near=P.near=T.near=ie,v.far=P.far=T.far=k,(S!==v.near||N!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,N=v.far);let B=V.parent,G=v.cameras;he(v,B);for(let de=0;de<G.length;de++)he(G[de],B);G.length===2?ae(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),F(V,v,B)};function F(V,ie,k){k===null?V.matrix.copy(ie.matrixWorld):(V.matrix.copy(k.matrixWorld),V.matrix.invert(),V.matrix.multiply(ie.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ie.projectionMatrix),V.projectionMatrixInverse.copy(ie.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=go*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let te=null;function J(V,ie){if(h=ie.getViewerPose(c||o),g=ie,h!==null){let k=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let B=!1;k.length!==v.cameras.length&&(v.cameras.length=0,B=!0);for(let de=0;de<k.length;de++){let Ee=k[de],De=null;if(m!==null)De=m.getViewport(Ee);else{let I=f.getViewSubImage(u,Ee);De=I.viewport,de===0&&(e.setRenderTargetTextures(M,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(M))}let K=O[de];K===void 0&&(K=new $n,K.layers.enable(de),K.viewport=new tn,O[de]=K),K.matrix.fromArray(Ee.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ee.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(De.x,De.y,De.width,De.height),de===0&&(v.matrix.copy(K.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),B===!0&&v.cameras.push(K)}let G=r.enabledFeatures;if(G&&G.includes("depth-sensing")){let de=f.getDepthInformation(k[0]);de&&de.isValid&&de.texture&&y.init(e,de,r.renderState)}}for(let k=0;k<x.length;k++){let B=_[k],G=x[k];B!==null&&G!==void 0&&G.update(B,ie,c||o)}te&&te(V,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let ce=new A0;ce.setAnimationLoop(J),this.setAnimationLoop=function(V){te=V},this.dispose=function(){}}},gs=new fi,PE=new Lt;function IE(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,R0(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,M,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,_)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Tn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Tn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d),x=M.envMap,_=M.envMapRotation;x&&(p.envMap.value=x,gs.copy(_),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),p.envMapRotation.value.setFromMatrix4(PE.makeRotationFromEuler(gs)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function LE(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let _=x.program;n.uniformBlockBinding(M,_)}function c(M,x){let _=r[M.id];_===void 0&&(g(M),_=h(M),r[M.id]=_,M.addEventListener("dispose",p));let R=x.program;n.updateUBOMapping(M,R);let b=e.render.frame;s[M.id]!==b&&(u(M),s[M.id]=b)}function h(M){let x=f();M.__bindingPointIndex=x;let _=i.createBuffer(),R=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let x=r[M.id],_=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,T=_.length;b<T;b++){let P=Array.isArray(_[b])?_[b]:[_[b]];for(let O=0,v=P.length;O<v;O++){let S=P[O];if(m(S,b,O,R)===!0){let N=S.__offset,W=Array.isArray(S.value)?S.value:[S.value],$=0;for(let ee=0;ee<W.length;ee++){let X=W[ee],z=y(X);typeof X=="number"||typeof X=="boolean"?(S.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,N+$,S.__data)):X.isMatrix3?(S.__data[0]=X.elements[0],S.__data[1]=X.elements[1],S.__data[2]=X.elements[2],S.__data[3]=0,S.__data[4]=X.elements[3],S.__data[5]=X.elements[4],S.__data[6]=X.elements[5],S.__data[7]=0,S.__data[8]=X.elements[6],S.__data[9]=X.elements[7],S.__data[10]=X.elements[8],S.__data[11]=0):(X.toArray(S.__data,$),$+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,_,R){let b=M.value,T=x+"_"+_;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{let P=R[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(M){let x=M.uniforms,_=0,R=16;for(let T=0,P=x.length;T<P;T++){let O=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,S=O.length;v<S;v++){let N=O[v],W=Array.isArray(N.value)?N.value:[N.value];for(let $=0,ee=W.length;$<ee;$++){let X=W[$],z=y(X),ae=_%R,he=ae%z.boundary,F=ae+he;_+=he,F!==0&&R-F<z.storage&&(_+=R-F),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=z.storage}}}let b=_%R;return b>0&&(_+=R-b),M.__size=_,M.__cache={},this}function y(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(let M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var jc=class{constructor(e={}){let{canvas:t=Hx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=Yr,this.toneMappingExposure=1;let x=this,_=!1,R=0,b=0,T=null,P=-1,O=null,v=new tn,S=new tn,N=null,W=new pt(0),$=0,ee=t.width,X=t.height,z=1,ae=null,he=null,F=new tn(0,0,ee,X),te=new tn(0,0,ee,X),J=!1,ce=new Ma,V=!1,ie=!1,k=new Lt,B=new Lt,G=new w,de=new tn,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function K(){return T===null?z:1}let I=n;function pe(L,j){return t.getContext(L,j)}try{let L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ze,!1),I===null){let j="webgl2";if(I=pe(j,L),I===null)throw pe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ye,ge,ve,Le,Se,H,A,re,_e,Ae,Te,Je,Me,He,Ke,Pe,Ve,Qe,Q,se,we,Ie,be,U;function Re(){ye=new $2(I),ye.init(),Ie=new TE(I,ye),ge=new V2(I,ye,e,Ie),ve=new bE(I),ge.reverseDepthBuffer&&ve.buffers.depth.setReversed(!0),Le=new J2(I),Se=new hE,H=new SE(I,ye,ve,Se,ge,Ie,Le),A=new W2(x),re=new Y2(x),_e=new ry(I),be=new B2(I,_e),Ae=new Z2(I,_e,Le,be),Te=new j2(I,Ae,_e,Le),Q=new Q2(I,ge,H),Pe=new G2(Se),Je=new lE(x,A,re,ye,ge,be,Pe),Me=new IE(x,Se),He=new dE,Ke=new yE(ye),Qe=new O2(x,A,re,ve,Te,u,l),Ve=new EE(x,Te,ge),U=new LE(I,Le,ge,ve),se=new k2(I,ye,Le),we=new K2(I,ye,Le),Le.programs=Je.programs,x.capabilities=ge,x.extensions=ye,x.properties=Se,x.renderLists=He,x.shadowMap=Ve,x.state=ve,x.info=Le}Re();let oe=new ed(x,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let L=ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(ee,X,!1))},this.getSize=function(L){return L.set(ee,X)},this.setSize=function(L,j,le=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=L,X=j,t.width=Math.floor(L*z),t.height=Math.floor(j*z),le===!0&&(t.style.width=L+"px",t.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(ee*z,X*z).floor()},this.setDrawingBufferSize=function(L,j,le){ee=L,X=j,z=le,t.width=Math.floor(L*le),t.height=Math.floor(j*le),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(v)},this.getViewport=function(L){return L.copy(F)},this.setViewport=function(L,j,le,ue){L.isVector4?F.set(L.x,L.y,L.z,L.w):F.set(L,j,le,ue),ve.viewport(v.copy(F).multiplyScalar(z).round())},this.getScissor=function(L){return L.copy(te)},this.setScissor=function(L,j,le,ue){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,j,le,ue),ve.scissor(S.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(L){ve.setScissorTest(J=L)},this.setOpaqueSort=function(L){ae=L},this.setTransparentSort=function(L){he=L},this.getClearColor=function(L){return L.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(L=!0,j=!0,le=!0){let ue=0;if(L){let ne=!1;if(T!==null){let Ne=T.texture.format;ne=Ne===Id||Ne===Pd||Ne===Cd}if(ne){let Ne=T.texture.type,We=Ne===Rr||Ne===bs||Ne===ga||Ne===po||Ne===Td||Ne===Rd,Ge=Qe.getClearColor(),je=Qe.getClearAlpha(),ht=Ge.r,ft=Ge.g,tt=Ge.b;We?(m[0]=ht,m[1]=ft,m[2]=tt,m[3]=je,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=ht,g[1]=ft,g[2]=tt,g[3]=je,I.clearBufferiv(I.COLOR,0,g))}else ue|=I.COLOR_BUFFER_BIT}j&&(ue|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),le&&(ue|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),He.dispose(),Ke.dispose(),Se.dispose(),A.dispose(),re.dispose(),Te.dispose(),be.dispose(),U.dispose(),Je.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",dn),oe.removeEventListener("sessionend",sr),ci.stop()};function fe(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let L=Le.autoReset,j=Ve.enabled,le=Ve.autoUpdate,ue=Ve.needsUpdate,ne=Ve.type;Re(),Le.autoReset=L,Ve.enabled=j,Ve.autoUpdate=le,Ve.needsUpdate=ue,Ve.type=ne}function ze(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function it(L){let j=L.target;j.removeEventListener("dispose",it),Et(j)}function Et(L){Wt(L),Se.remove(L)}function Wt(L){let j=Se.get(L).programs;j!==void 0&&(j.forEach(function(le){Je.releaseProgram(le)}),L.isShaderMaterial&&Je.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,le,ue,ne,Ne){j===null&&(j=Ee);let We=ne.isMesh&&ne.matrixWorld.determinant()<0,Ge=In(L,j,le,ue,ne);ve.setMaterial(ue,We);let je=le.index,ht=1;if(ue.wireframe===!0){if(je=Ae.getWireframeAttribute(le),je===void 0)return;ht=2}let ft=le.drawRange,tt=le.attributes.position,Dt=ft.start*ht,bt=(ft.start+ft.count)*ht;Ne!==null&&(Dt=Math.max(Dt,Ne.start*ht),bt=Math.min(bt,(Ne.start+Ne.count)*ht)),je!==null?(Dt=Math.max(Dt,0),bt=Math.min(bt,je.count)):tt!=null&&(Dt=Math.max(Dt,0),bt=Math.min(bt,tt.count));let kt=bt-Dt;if(kt<0||kt===1/0)return;be.setup(ne,ue,Ge,le,je);let Vt,It=se;if(je!==null&&(Vt=_e.get(je),It=we,It.setIndex(Vt)),ne.isMesh)ue.wireframe===!0?(ve.setLineWidth(ue.wireframeLinewidth*K()),It.setMode(I.LINES)):It.setMode(I.TRIANGLES);else if(ne.isLine){let ot=ue.linewidth;ot===void 0&&(ot=1),ve.setLineWidth(ot*K()),ne.isLineSegments?It.setMode(I.LINES):ne.isLineLoop?It.setMode(I.LINE_LOOP):It.setMode(I.LINE_STRIP)}else ne.isPoints?It.setMode(I.POINTS):ne.isSprite&&It.setMode(I.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)It.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))It.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let ot=ne._multiDrawStarts,vn=ne._multiDrawCounts,Bt=ne._multiDrawCount,sn=je?_e.get(je).bytesPerElement:1,Ye=Se.get(ue).currentProgram.getUniforms();for(let $e=0;$e<Bt;$e++)Ye.setValue(I,"_gl_DrawID",$e),It.render(ot[$e]/sn,vn[$e])}else if(ne.isInstancedMesh)It.renderInstances(Dt,kt,ne.count);else if(le.isInstancedBufferGeometry){let ot=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,vn=Math.min(le.instanceCount,ot);It.renderInstances(Dt,kt,vn)}else It.render(Dt,kt)};function xt(L,j,le){L.transparent===!0&&L.side===Ct&&L.forceSinglePass===!1?(L.side=Tn,L.needsUpdate=!0,_t(L,j,le),L.side=ni,L.needsUpdate=!0,_t(L,j,le),L.side=Ct):_t(L,j,le)}this.compile=function(L,j,le=null){le===null&&(le=L),p=Ke.get(le),p.init(j),M.push(p),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),L!==le&&L.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights();let ue=new Set;return L.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Ne=ne.material;if(Ne)if(Array.isArray(Ne))for(let We=0;We<Ne.length;We++){let Ge=Ne[We];xt(Ge,le,ne),ue.add(Ge)}else xt(Ne,le,ne),ue.add(Ne)}),M.pop(),p=null,ue},this.compileAsync=function(L,j,le=null){let ue=this.compile(L,j,le);return new Promise(ne=>{function Ne(){if(ue.forEach(function(We){Se.get(We).currentProgram.isReady()&&ue.delete(We)}),ue.size===0){ne(L);return}setTimeout(Ne,10)}ye.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Pt=null;function an(L){Pt&&Pt(L)}function dn(){ci.stop()}function sr(){ci.start()}let ci=new A0;ci.setAnimationLoop(an),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(L){Pt=L,oe.setAnimationLoop(L),L===null?ci.stop():ci.start()},oe.addEventListener("sessionstart",dn),oe.addEventListener("sessionend",sr),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,j,T),p=Ke.get(L,M.length),p.init(j),M.push(p),B.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ce.setFromProjectionMatrix(B),ie=this.localClippingEnabled,V=Pe.init(this.clippingPlanes,ie),y=He.get(L,d.length),y.init(),d.push(y),oe.enabled===!0&&oe.isPresenting===!0){let Ne=x.xr.getDepthSensingMesh();Ne!==null&&or(Ne,j,-1/0,x.sortObjects)}or(L,j,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(ae,he),De=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,De&&Qe.addToRenderList(y,L),this.info.render.frame++,V===!0&&Pe.beginShadows();let le=p.state.shadowsArray;Ve.render(le,L,j),V===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=y.opaque,ne=y.transmissive;if(p.setupLights(),j.isArrayCamera){let Ne=j.cameras;if(ne.length>0)for(let We=0,Ge=Ne.length;We<Ge;We++){let je=Ne[We];et(ue,ne,L,je)}De&&Qe.render(L);for(let We=0,Ge=Ne.length;We<Ge;We++){let je=Ne[We];st(y,L,je,je.viewport)}}else ne.length>0&&et(ue,ne,L,j),De&&Qe.render(L),st(y,L,j);T!==null&&(H.updateMultisampleRenderTarget(T),H.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(x,L,j),be.resetDefaultState(),P=-1,O=null,M.pop(),M.length>0?(p=M[M.length-1],V===!0&&Pe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function or(L,j,le,ue){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)le=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ce.intersectsSprite(L)){ue&&de.setFromMatrixPosition(L.matrixWorld).applyMatrix4(B);let We=Te.update(L),Ge=L.material;Ge.visible&&y.push(L,We,Ge,le,de.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ce.intersectsObject(L))){let We=Te.update(L),Ge=L.material;if(ue&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),de.copy(L.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),de.copy(We.boundingSphere.center)),de.applyMatrix4(L.matrixWorld).applyMatrix4(B)),Array.isArray(Ge)){let je=We.groups;for(let ht=0,ft=je.length;ht<ft;ht++){let tt=je[ht],Dt=Ge[tt.materialIndex];Dt&&Dt.visible&&y.push(L,We,Dt,le,de.z,tt)}}else Ge.visible&&y.push(L,We,Ge,le,de.z,null)}}let Ne=L.children;for(let We=0,Ge=Ne.length;We<Ge;We++)or(Ne[We],j,le,ue)}function st(L,j,le,ue){let ne=L.opaque,Ne=L.transmissive,We=L.transparent;p.setupLightsView(le),V===!0&&Pe.setGlobalState(x.clippingPlanes,le),ue&&ve.viewport(v.copy(ue)),ne.length>0&&rt(ne,j,le),Ne.length>0&&rt(Ne,j,le),We.length>0&&rt(We,j,le),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function et(L,j,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new Ar(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Pa:Rr,minFilter:ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let Ne=p.state.transmissionRenderTarget[ue.id],We=ue.viewport||v;Ne.setSize(We.z,We.w);let Ge=x.getRenderTarget();x.setRenderTarget(Ne),x.getClearColor(W),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),De&&Qe.render(le);let je=x.toneMapping;x.toneMapping=Yr;let ht=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),V===!0&&Pe.setGlobalState(x.clippingPlanes,ue),rt(L,le,ue),H.updateMultisampleRenderTarget(Ne),H.updateRenderTargetMipmap(Ne),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let tt=0,Dt=j.length;tt<Dt;tt++){let bt=j[tt],kt=bt.object,Vt=bt.geometry,It=bt.material,ot=bt.group;if(It.side===Ct&&kt.layers.test(ue.layers)){let vn=It.side;It.side=Tn,It.needsUpdate=!0,ct(kt,le,ue,Vt,It,ot),It.side=vn,It.needsUpdate=!0,ft=!0}}ft===!0&&(H.updateMultisampleRenderTarget(Ne),H.updateRenderTargetMipmap(Ne))}x.setRenderTarget(Ge),x.setClearColor(W,$),ht!==void 0&&(ue.viewport=ht),x.toneMapping=je}function rt(L,j,le){let ue=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,Ne=L.length;ne<Ne;ne++){let We=L[ne],Ge=We.object,je=We.geometry,ht=ue===null?We.material:ue,ft=We.group;Ge.layers.test(le.layers)&&ct(Ge,j,le,je,ht,ft)}}function ct(L,j,le,ue,ne,Ne){L.onBeforeRender(x,j,le,ue,ne,Ne),L.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(x,j,le,ue,L,Ne),ne.transparent===!0&&ne.side===Ct&&ne.forceSinglePass===!1?(ne.side=Tn,ne.needsUpdate=!0,x.renderBufferDirect(le,j,ue,ne,L,Ne),ne.side=ni,ne.needsUpdate=!0,x.renderBufferDirect(le,j,ue,ne,L,Ne),ne.side=Ct):x.renderBufferDirect(le,j,ue,ne,L,Ne),L.onAfterRender(x,j,le,ue,ne,Ne)}function _t(L,j,le){j.isScene!==!0&&(j=Ee);let ue=Se.get(L),ne=p.state.lights,Ne=p.state.shadowsArray,We=ne.state.version,Ge=Je.getParameters(L,ne.state,Ne,j,le),je=Je.getProgramCacheKey(Ge),ht=ue.programs;ue.environment=L.isMeshStandardMaterial?j.environment:null,ue.fog=j.fog,ue.envMap=(L.isMeshStandardMaterial?re:A).get(L.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,ht===void 0&&(L.addEventListener("dispose",it),ht=new Map,ue.programs=ht);let ft=ht.get(je);if(ft!==void 0){if(ue.currentProgram===ft&&ue.lightsStateVersion===We)return lt(L,Ge),ft}else Ge.uniforms=Je.getUniforms(L),L.onBeforeCompile(Ge,x),ft=Je.acquireProgram(Ge,je),ht.set(je,ft),ue.uniforms=Ge.uniforms;let tt=ue.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(tt.clippingPlanes=Pe.uniform),lt(L,Ge),ue.needsLights=mn(L),ue.lightsStateVersion=We,ue.needsLights&&(tt.ambientLightColor.value=ne.state.ambient,tt.lightProbe.value=ne.state.probe,tt.directionalLights.value=ne.state.directional,tt.directionalLightShadows.value=ne.state.directionalShadow,tt.spotLights.value=ne.state.spot,tt.spotLightShadows.value=ne.state.spotShadow,tt.rectAreaLights.value=ne.state.rectArea,tt.ltc_1.value=ne.state.rectAreaLTC1,tt.ltc_2.value=ne.state.rectAreaLTC2,tt.pointLights.value=ne.state.point,tt.pointLightShadows.value=ne.state.pointShadow,tt.hemisphereLights.value=ne.state.hemi,tt.directionalShadowMap.value=ne.state.directionalShadowMap,tt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,tt.spotShadowMap.value=ne.state.spotShadowMap,tt.spotLightMatrix.value=ne.state.spotLightMatrix,tt.spotLightMap.value=ne.state.spotLightMap,tt.pointShadowMap.value=ne.state.pointShadowMap,tt.pointShadowMatrix.value=ne.state.pointShadowMatrix),ue.currentProgram=ft,ue.uniformsList=null,ft}function Oe(L){if(L.uniformsList===null){let j=L.currentProgram.getUniforms();L.uniformsList=lo.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function lt(L,j){let le=Se.get(L);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function In(L,j,le,ue,ne){j.isScene!==!0&&(j=Ee),H.resetTextureUnits();let Ne=j.fog,We=ue.isMeshStandardMaterial?j.environment:null,Ge=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:es,je=(ue.isMeshStandardMaterial?re:A).get(ue.envMap||We),ht=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ft=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),tt=!!le.morphAttributes.position,Dt=!!le.morphAttributes.normal,bt=!!le.morphAttributes.color,kt=Yr;ue.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(kt=x.toneMapping);let Vt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,It=Vt!==void 0?Vt.length:0,ot=Se.get(ue),vn=p.state.lights;if(V===!0&&(ie===!0||L!==O)){let qn=L===O&&ue.id===P;Pe.setState(ue,L,qn)}let Bt=!1;ue.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==vn.state.version||ot.outputColorSpace!==Ge||ne.isBatchedMesh&&ot.batching===!1||!ne.isBatchedMesh&&ot.batching===!0||ne.isBatchedMesh&&ot.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&ot.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&ot.instancing===!1||!ne.isInstancedMesh&&ot.instancing===!0||ne.isSkinnedMesh&&ot.skinning===!1||!ne.isSkinnedMesh&&ot.skinning===!0||ne.isInstancedMesh&&ot.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ot.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ot.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ot.instancingMorph===!1&&ne.morphTexture!==null||ot.envMap!==je||ue.fog===!0&&ot.fog!==Ne||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Pe.numPlanes||ot.numIntersection!==Pe.numIntersection)||ot.vertexAlphas!==ht||ot.vertexTangents!==ft||ot.morphTargets!==tt||ot.morphNormals!==Dt||ot.morphColors!==bt||ot.toneMapping!==kt||ot.morphTargetsCount!==It)&&(Bt=!0):(Bt=!0,ot.__version=ue.version);let sn=ot.currentProgram;Bt===!0&&(sn=_t(ue,j,ne));let Ye=!1,$e=!1,jn=!1,Gt=sn.getUniforms(),Ln=ot.uniforms;if(ve.useProgram(sn.program)&&(Ye=!0,$e=!0,jn=!0),ue.id!==P&&(P=ue.id,$e=!0),Ye||O!==L){ge.reverseDepthBuffer?(k.copy(L.projectionMatrix),Fx(k),zx(k),Gt.setValue(I,"projectionMatrix",k)):Gt.setValue(I,"projectionMatrix",L.projectionMatrix),Gt.setValue(I,"viewMatrix",L.matrixWorldInverse);let qn=Gt.map.cameraPosition;qn!==void 0&&qn.setValue(I,G.setFromMatrixPosition(L.matrixWorld)),ge.logarithmicDepthBuffer&&Gt.setValue(I,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Gt.setValue(I,"isOrthographic",L.isOrthographicCamera===!0),O!==L&&(O=L,$e=!0,jn=!0)}if(ne.isSkinnedMesh){Gt.setOptional(I,ne,"bindMatrix"),Gt.setOptional(I,ne,"bindMatrixInverse");let qn=ne.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Gt.setValue(I,"boneTexture",qn.boneTexture,H))}ne.isBatchedMesh&&(Gt.setOptional(I,ne,"batchingTexture"),Gt.setValue(I,"batchingTexture",ne._matricesTexture,H),Gt.setOptional(I,ne,"batchingIdTexture"),Gt.setValue(I,"batchingIdTexture",ne._indirectTexture,H),Gt.setOptional(I,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Gt.setValue(I,"batchingColorTexture",ne._colorsTexture,H));let Go=le.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0)&&Q.update(ne,le,sn),($e||ot.receiveShadow!==ne.receiveShadow)&&(ot.receiveShadow=ne.receiveShadow,Gt.setValue(I,"receiveShadow",ne.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Ln.envMap.value=je,Ln.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&j.environment!==null&&(Ln.envMapIntensity.value=j.environmentIntensity),$e&&(Gt.setValue(I,"toneMappingExposure",x.toneMappingExposure),ot.needsLights&&Zt(Ln,jn),Ne&&ue.fog===!0&&Me.refreshFogUniforms(Ln,Ne),Me.refreshMaterialUniforms(Ln,ue,z,X,p.state.transmissionRenderTarget[L.id]),lo.upload(I,Oe(ot),Ln,H)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(lo.upload(I,Oe(ot),Ln,H),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Gt.setValue(I,"center",ne.center),Gt.setValue(I,"modelViewMatrix",ne.modelViewMatrix),Gt.setValue(I,"normalMatrix",ne.normalMatrix),Gt.setValue(I,"modelMatrix",ne.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let qn=ue.uniformsGroups;for(let Fs=0,eh=qn.length;Fs<eh;Fs++){let Ci=qn[Fs];U.update(Ci,sn),U.bind(Ci,sn)}}return sn}function Zt(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function mn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,j,le){Se.get(L.texture).__webglTexture=j,Se.get(L.depthTexture).__webglTexture=le;let ue=Se.get(L);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,j){let le=Se.get(L);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,le=0){T=L,R=j,b=le;let ue=!0,ne=null,Ne=!1,We=!1;if(L){let je=Se.get(L);if(je.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(I.FRAMEBUFFER,null),ue=!1;else if(je.__webglFramebuffer===void 0)H.setupRenderTarget(L);else if(je.__hasExternalTextures)H.rebindTextures(L,Se.get(L.texture).__webglTexture,Se.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let tt=L.depthTexture;if(je.__boundDepthTexture!==tt){if(tt!==null&&Se.has(tt)&&(L.width!==tt.image.width||L.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(L)}}let ht=L.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(We=!0);let ft=Se.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ft[j])?ne=ft[j][le]:ne=ft[j],Ne=!0):L.samples>0&&H.useMultisampledRTT(L)===!1?ne=Se.get(L).__webglMultisampledFramebuffer:Array.isArray(ft)?ne=ft[le]:ne=ft,v.copy(L.viewport),S.copy(L.scissor),N=L.scissorTest}else v.copy(F).multiplyScalar(z).floor(),S.copy(te).multiplyScalar(z).floor(),N=J;if(ve.bindFramebuffer(I.FRAMEBUFFER,ne)&&ue&&ve.drawBuffers(L,ne),ve.viewport(v),ve.scissor(S),ve.setScissorTest(N),Ne){let je=Se.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,je.__webglTexture,le)}else if(We){let je=Se.get(L.texture),ht=j||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,le||0,ht)}P=-1},this.readRenderTargetPixels=function(L,j,le,ue,ne,Ne,We){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Se.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&We!==void 0&&(Ge=Ge[We]),Ge){ve.bindFramebuffer(I.FRAMEBUFFER,Ge);try{let je=L.texture,ht=je.format,ft=je.type;if(!ge.textureFormatReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-ue&&le>=0&&le<=L.height-ne&&I.readPixels(j,le,ue,ne,Ie.convert(ht),Ie.convert(ft),Ne)}finally{let je=T!==null?Se.get(T).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(L,j,le,ue,ne,Ne,We){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Se.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&We!==void 0&&(Ge=Ge[We]),Ge){let je=L.texture,ht=je.format,ft=je.type;if(!ge.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=L.width-ue&&le>=0&&le<=L.height-ne){ve.bindFramebuffer(I.FRAMEBUFFER,Ge);let tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,tt),I.bufferData(I.PIXEL_PACK_BUFFER,Ne.byteLength,I.STREAM_READ),I.readPixels(j,le,ue,ne,Ie.convert(ht),Ie.convert(ft),0);let Dt=T!==null?Se.get(T).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Dt);let bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Nx(I,bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ne),I.deleteBuffer(tt),I.deleteSync(bt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,j=null,le=0){L.isTexture!==!0&&(zc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,L=arguments[1]);let ue=Math.pow(2,-le),ne=Math.floor(L.image.width*ue),Ne=Math.floor(L.image.height*ue),We=j!==null?j.x:0,Ge=j!==null?j.y:0;H.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,le,0,0,We,Ge,ne,Ne),ve.unbindTexture()},this.copyTextureToTexture=function(L,j,le=null,ue=null,ne=0){L.isTexture!==!0&&(zc("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,L=arguments[1],j=arguments[2],ne=arguments[3]||0,le=null);let Ne,We,Ge,je,ht,ft;le!==null?(Ne=le.max.x-le.min.x,We=le.max.y-le.min.y,Ge=le.min.x,je=le.min.y):(Ne=L.image.width,We=L.image.height,Ge=0,je=0),ue!==null?(ht=ue.x,ft=ue.y):(ht=0,ft=0);let tt=Ie.convert(j.format),Dt=Ie.convert(j.type);H.setTexture2D(j,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);let bt=I.getParameter(I.UNPACK_ROW_LENGTH),kt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Vt=I.getParameter(I.UNPACK_SKIP_PIXELS),It=I.getParameter(I.UNPACK_SKIP_ROWS),ot=I.getParameter(I.UNPACK_SKIP_IMAGES),vn=L.isCompressedTexture?L.mipmaps[ne]:L.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,vn.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ne,ht,ft,Ne,We,tt,Dt,vn.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ne,ht,ft,vn.width,vn.height,tt,vn.data):I.texSubImage2D(I.TEXTURE_2D,ne,ht,ft,Ne,We,tt,Dt,vn),I.pixelStorei(I.UNPACK_ROW_LENGTH,bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,kt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ot),ne===0&&j.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(L,j,le=null,ue=null,ne=0){L.isTexture!==!0&&(zc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,L=arguments[2],j=arguments[3],ne=arguments[4]||0);let Ne,We,Ge,je,ht,ft,tt,Dt,bt,kt=L.isCompressedTexture?L.mipmaps[ne]:L.image;le!==null?(Ne=le.max.x-le.min.x,We=le.max.y-le.min.y,Ge=le.max.z-le.min.z,je=le.min.x,ht=le.min.y,ft=le.min.z):(Ne=kt.width,We=kt.height,Ge=kt.depth,je=0,ht=0,ft=0),ue!==null?(tt=ue.x,Dt=ue.y,bt=ue.z):(tt=0,Dt=0,bt=0);let Vt=Ie.convert(j.format),It=Ie.convert(j.type),ot;if(j.isData3DTexture)H.setTexture3D(j,0),ot=I.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)H.setTexture2DArray(j,0),ot=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);let vn=I.getParameter(I.UNPACK_ROW_LENGTH),Bt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),sn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ye=I.getParameter(I.UNPACK_SKIP_ROWS),$e=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,kt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,kt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ft),L.isDataTexture||L.isData3DTexture?I.texSubImage3D(ot,ne,tt,Dt,bt,Ne,We,Ge,Vt,It,kt.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(ot,ne,tt,Dt,bt,Ne,We,Ge,Vt,kt.data):I.texSubImage3D(ot,ne,tt,Dt,bt,Ne,We,Ge,Vt,It,kt),I.pixelStorei(I.UNPACK_ROW_LENGTH,vn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e),ne===0&&j.generateMipmaps&&I.generateMipmap(ot),ve.unbindTexture()},this.initRenderTarget=function(L){Se.get(L).__webglFramebuffer===void 0&&H.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?H.setTextureCube(L,0):L.isData3DTexture?H.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?H.setTexture2DArray(L,0):H.setTexture2D(L,0),ve.unbindTexture()},this.resetState=function(){R=0,b=0,T=null,ve.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ud?"display-p3":"srgb",t.unpackColorSpace=Jt.workingColorSpace===gl?"display-p3":"srgb"}};var el=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},tl=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ur=class extends di{constructor(e=null,t=1,n=1,r,s,o,a,l,c=gi,h=gi,f,u){super(null,o,a,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cr=class extends nn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},io=new Lt,Kp=new Lt,Tc=[],Jp=new Rn,DE=new Lt,sa=new at,oa=new Kr,hn=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,DE)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,io),Jp.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(Jp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,io),oa.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,io),Kp.multiplyMatrices(n,io),sa.matrixWorld=Kp,sa.raycast(e,Tc);for(let o=0,a=Tc.length;o<a;o++){let l=Tc[o];l.instanceId=s,l.object=this,t.push(l)}Tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ur(new Float32Array(r*this.count),r,this.count,Ad,hr));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var tr=class extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},nl=new w,il=new w,Qp=new Lt,aa=new ya,Rc=new Kr,Kh=new w,jp=new w,td=class extends gt{constructor(e=new Rt,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)nl.fromBufferAttribute(t,r-1),il.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=nl.distanceTo(il);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=s,e.ray.intersectsSphere(Rc)===!1)return;Qp.copy(r).invert(),aa.copy(e.ray).applyMatrix4(Qp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=m,p=g-1;y<p;y+=c){let d=h.getX(y),M=h.getX(y+1),x=Ac(this,e,aa,l,d,M);x&&t.push(x)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(m),d=Ac(this,e,aa,l,y,p);d&&t.push(d)}}else{let m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=m,p=g-1;y<p;y+=c){let d=Ac(this,e,aa,l,y,y+1);d&&t.push(d)}if(this.isLineLoop){let y=Ac(this,e,aa,l,g-1,m);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ac(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(nl.fromBufferAttribute(o,r),il.fromBufferAttribute(o,s),t.distanceSqToSegment(nl,il,Kh,jp)>n)return;Kh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Kh);if(!(l<e.near||l>e.far))return{distance:l,point:jp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var e0=new w,t0=new w,dr=class extends td{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)e0.fromBufferAttribute(t,r),t0.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+e0.distanceTo(t0);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zt=class extends di{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],u=n[r+1]-h,m=(o-h)/u;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Be:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,r=[],s=[],o=[],a=new w,l=new Lt;for(let m=0;m<=e;m++){let g=m/e;r[m]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Un(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Un(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_a=class extends ii{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Be){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*f+this.aX,c=u*f+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nd=class extends _a{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fd(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,m*=h,r(o,a,u,m)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Cc=new w,Jh=new Fd,Qh=new Fd,jh=new Fd,Yt=class extends ii{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new w){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Cc.subVectors(r[0],r[1]).add(r[0]),c=Cc);let f=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Cc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Jh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,y,p),Qh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,y,p),jh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Qh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),jh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Jh.calc(l),Qh.calc(l),jh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function n0(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function UE(i,e){let t=1-i;return t*t*e}function HE(i,e){return 2*(1-i)*i*e}function NE(i,e){return i*i*e}function fa(i,e,t,n){return UE(i,e)+HE(i,t)+NE(i,n)}function FE(i,e){let t=1-i;return t*t*t*e}function zE(i,e){let t=1-i;return 3*t*t*i*e}function OE(i,e){return 3*(1-i)*i*i*e}function BE(i,e){return i*i*i*e}function pa(i,e,t,n,r){return FE(i,e)+zE(i,t)+OE(i,n)+BE(i,r)}var rl=class extends ii{constructor(e=new Be,t=new Be,n=new Be,r=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Be){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(pa(e,r.x,s.x,o.x,a.x),pa(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends ii{constructor(e=new w,t=new w,n=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(pa(e,r.x,s.x,o.x,a.x),pa(e,r.y,s.y,o.y,a.y),pa(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sl=class extends ii{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},id=class extends ii{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends ii{constructor(e=new Be,t=new Be,n=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Be){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(fa(e,r.x,s.x,o.x),fa(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends ii{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(fa(e,r.x,s.x,o.x),fa(e,r.y,s.y,o.y),fa(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(n0(a,l.x,c.x,h.x,f.x),n0(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Be().fromArray(r))}return this}},ll=Object.freeze({__proto__:null,ArcCurve:nd,CatmullRomCurve3:Yt,CubicBezierCurve:rl,CubicBezierCurve3:ba,EllipseCurve:_a,LineCurve:sl,LineCurve3:id,QuadraticBezierCurve:ol,QuadraticBezierCurve3:al,SplineCurve:cl}),rd=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new ll[r.type]().fromJSON(r))}return this}},pi=class extends rd{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sl(this.currentPoint.clone(),new Be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new ol(this.currentPoint.clone(),new Be(e,t),new Be(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new rl(this.currentPoint.clone(),new Be(e,t),new Be(n,r),new Be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new cl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new _a(e,t,n,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Jr=class i extends Rt{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Un(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/t,f=new w,u=new Be,m=new w,g=new w,y=new w,p=0,d=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,m.x=d*1,m.y=-p,m.z=d*0,y.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:p=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,m.x=d*1,m.y=-p,m.z=d*0,g.copy(m),m.x+=y.x,m.y+=y.y,m.z+=y.z,m.normalize(),l.push(m.x,m.y,m.z),y.copy(g)}for(let M=0;M<=t;M++){let x=n+M*h*r,_=Math.sin(x),R=Math.cos(x);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*_,f.y=e[b].y,f.z=e[b].x*R,o.push(f.x,f.y,f.z),u.x=M/t,u.y=b/(e.length-1),a.push(u.x,u.y);let T=l[3*b+0]*_,P=l[3*b+1],O=l[3*b+0]*R;c.push(T,P,O)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){let _=x+M*e.length,R=_,b=_+e.length,T=_+e.length+1,P=_+1;s.push(R,b,P),s.push(T,P,b)}this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ui=class i extends Rt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new w,h=new Be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let m=n+f/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nt=class i extends Rt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],u=[],m=[],g=0,y=[],p=n/2,d=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(m,2));function M(){let _=new w,R=new w,b=0,T=(t-e)/n;for(let P=0;P<=s;P++){let O=[],v=P/s,S=v*(t-e)+e;for(let N=0;N<=r;N++){let W=N/r,$=W*l+a,ee=Math.sin($),X=Math.cos($);R.x=S*ee,R.y=-v*n+p,R.z=S*X,f.push(R.x,R.y,R.z),_.set(ee,T,X).normalize(),u.push(_.x,_.y,_.z),m.push(W,1-v),O.push(g++)}y.push(O)}for(let P=0;P<r;P++)for(let O=0;O<s;O++){let v=y[O][P],S=y[O+1][P],N=y[O+1][P+1],W=y[O][P+1];e>0&&(h.push(v,S,W),b+=3),t>0&&(h.push(S,N,W),b+=3)}c.addGroup(d,b,0),d+=b}function x(_){let R=g,b=new Be,T=new w,P=0,O=_===!0?e:t,v=_===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,p*v,0),u.push(0,v,0),m.push(.5,.5),g++;let S=g;for(let N=0;N<=r;N++){let $=N/r*l+a,ee=Math.cos($),X=Math.sin($);T.x=O*X,T.y=p*v,T.z=O*ee,f.push(T.x,T.y,T.z),u.push(0,v,0),b.x=ee*.5+.5,b.y=X*.5*v+.5,m.push(b.x,b.y),g++}for(let N=0;N<r;N++){let W=R+N,$=S+N;_===!0?h.push($,$+1,W):h.push($+1,$,W),P+=3}c.addGroup(d,P,_===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qr=class i extends Nt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sd=class i extends Rt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new w,_=new w,R=new w;for(let b=0;b<t.length;b+=3)m(t[b+0],x),m(t[b+1],_),m(t[b+2],R),l(x,_,R,M)}function l(M,x,_,R){let b=R+1,T=[];for(let P=0;P<=b;P++){T[P]=[];let O=M.clone().lerp(_,P/b),v=x.clone().lerp(_,P/b),S=b-P;for(let N=0;N<=S;N++)N===0&&P===b?T[P][N]=O:T[P][N]=O.clone().lerp(v,N/S)}for(let P=0;P<b;P++)for(let O=0;O<2*(b-P)-1;O++){let v=Math.floor(O/2);O%2===0?(u(T[P][v+1]),u(T[P+1][v]),u(T[P][v])):(u(T[P][v+1]),u(T[P+1][v+1]),u(T[P+1][v]))}}function c(M){let x=new w;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(M),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function h(){let M=new w;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];let _=p(M)/2/Math.PI+.5,R=d(M)/Math.PI+.5;o.push(_,1-R)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){let x=o[M+0],_=o[M+2],R=o[M+4],b=Math.max(x,_,R),T=Math.min(x,_,R);b>.9&&T<.1&&(x<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function m(M,x){let _=M*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){let M=new w,x=new w,_=new w,R=new w,b=new Be,T=new Be,P=new Be;for(let O=0,v=0;O<s.length;O+=9,v+=6){M.set(s[O+0],s[O+1],s[O+2]),x.set(s[O+3],s[O+4],s[O+5]),_.set(s[O+6],s[O+7],s[O+8]),b.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),R.copy(M).add(x).add(_).divideScalar(3);let S=p(R);y(b,v+0,M,S),y(T,v+2,x,S),y(P,v+4,_,S)}}function y(M,x,_,R){R<0&&M.x===1&&(o[x]=M.x-1),_.x===0&&_.z===0&&(o[x]=R/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Tt=class extends pi{constructor(e){super(e),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new pi().fromJSON(r))}return this}},kE={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=D0(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,u,m;if(n&&(s=qE(i,e,s,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<r;g+=t)f=i[g],u=i[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return wa(s,o,t,a,l,m,0),o}};function D0(i,e,t,n,r){let s,o;if(r===i_(i,e,t,n)>0)for(s=e;s<t;s+=n)o=i0(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=i0(s,i[s],i[s+1],o);return o&&yl(o,o.next)&&(Ta(o),o=o.next),o}function ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(yl(t,t.next)||xn(t.prev,t,t.next)===0)){if(Ta(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wa(i,e,t,n,r,s,o){if(!i)return;!o&&s&&JE(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?GE(i,n,r,s):VE(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ta(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=WE(ws(i),e,t),wa(i,e,t,n,r,s,2)):o===2&&XE(i,e,t,n,r,s):wa(ws(i),e,t,n,r,s,1);break}}}function VE(i){let e=i.prev,t=i,n=i.next;if(xn(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,u=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=m&&oo(r,a,s,l,o,c,g.x,g.y)&&xn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function GE(i,e,t,n){let r=i.prev,s=i,o=i.next;if(xn(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,u=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,y=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,d=od(m,g,e,t,n),M=od(y,p,e,t,n),x=i.prevZ,_=i.nextZ;for(;x&&x.z>=d&&_&&_.z<=M;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&oo(a,h,l,f,c,u,x.x,x.y)&&xn(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=m&&_.x<=y&&_.y>=g&&_.y<=p&&_!==r&&_!==o&&oo(a,h,l,f,c,u,_.x,_.y)&&xn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&oo(a,h,l,f,c,u,x.x,x.y)&&xn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=m&&_.x<=y&&_.y>=g&&_.y<=p&&_!==r&&_!==o&&oo(a,h,l,f,c,u,_.x,_.y)&&xn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function WE(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!yl(r,s)&&U0(r,n,n.next,s)&&Sa(r,s)&&Sa(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ta(n),Ta(n.next),n=i=s),n=n.next}while(n!==i);return ws(n)}function XE(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&e_(o,a)){let l=H0(o,a);o=ws(o,o.next),l=ws(l,l.next),wa(o,e,t,n,r,s,0),wa(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function qE(i,e,t,n){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=D0(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(jE(c));for(r.sort(YE),s=0;s<r.length;s++)t=$E(r[s],t);return t}function YE(i,e){return i.x-e.x}function $E(i,e){let t=ZE(i,e);if(!t)return e;let n=H0(t,i);return ws(n,n.next),ws(t,t.next)}function ZE(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>n&&(n=u,r=t.x<t.next.x?t:t.next,u===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,l=r.x,c=r.y,h=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&oo(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Sa(t,i)&&(f<h||f===h&&(t.x>r.x||t.x===r.x&&KE(r,t)))&&(r=t,h=f)),t=t.next;while(t!==a);return r}function KE(i,e){return xn(i.prev,i,e.prev)<0&&xn(e.next,i,i.next)<0}function JE(i,e,t,n){let r=i;do r.z===0&&(r.z=od(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,QE(r)}function QE(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function od(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jE(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function oo(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function e_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!t_(i,e)&&(Sa(i,e)&&Sa(e,i)&&n_(i,e)&&(xn(i.prev,i,e.prev)||xn(i,e.prev,e))||yl(i,e)&&xn(i.prev,i,i.next)>0&&xn(e.prev,e,e.next)>0)}function xn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yl(i,e){return i.x===e.x&&i.y===e.y}function U0(i,e,t,n){let r=Ic(xn(i,e,t)),s=Ic(xn(i,e,n)),o=Ic(xn(t,n,i)),a=Ic(xn(t,n,e));return!!(r!==s&&o!==a||r===0&&Pc(i,t,e)||s===0&&Pc(i,n,e)||o===0&&Pc(t,i,n)||a===0&&Pc(t,e,n))}function Pc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ic(i){return i>0?1:i<0?-1:0}function t_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&U0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Sa(i,e){return xn(i.prev,i,i.next)<0?xn(i,e,i.next)>=0&&xn(i,i.prev,e)>=0:xn(i,e,i.prev)<0||xn(i,i.next,e)<0}function n_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function H0(i,e){let t=new ad(i.i,i.x,i.y),n=new ad(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function i0(i,e,t,n){let r=new ad(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ad(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function i_(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var $r=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];r0(e),s0(n,e);let o=e.length;t.forEach(r0);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,s0(n,t[l]);let a=kE.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function r0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function s0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var rn=class i extends Rt{constructor(e=new Tt([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ut(r,3)),this.setAttribute("uv",new ut(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:r_,x,_=!1,R,b,T,P;d&&(x=d.getSpacedPoints(h),_=!0,u=!1,R=d.computeFrenetFrames(h,!1),b=new w,T=new w,P=new w),u||(p=0,m=0,g=0,y=0);let O=a.extractPoints(c),v=O.shape,S=O.holes;if(!$r.isClockWise(v)){v=v.reverse();for(let K=0,I=S.length;K<I;K++){let pe=S[K];$r.isClockWise(pe)&&(S[K]=pe.reverse())}}let W=$r.triangulateShape(v,S),$=v;for(let K=0,I=S.length;K<I;K++){let pe=S[K];v=v.concat(pe)}function ee(K,I,pe){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(I,pe)}let X=v.length,z=W.length;function ae(K,I,pe){let ye,ge,ve,Le=K.x-I.x,Se=K.y-I.y,H=pe.x-K.x,A=pe.y-K.y,re=Le*Le+Se*Se,_e=Le*A-Se*H;if(Math.abs(_e)>Number.EPSILON){let Ae=Math.sqrt(re),Te=Math.sqrt(H*H+A*A),Je=I.x-Se/Ae,Me=I.y+Le/Ae,He=pe.x-A/Te,Ke=pe.y+H/Te,Pe=((He-Je)*A-(Ke-Me)*H)/(Le*A-Se*H);ye=Je+Le*Pe-K.x,ge=Me+Se*Pe-K.y;let Ve=ye*ye+ge*ge;if(Ve<=2)return new Be(ye,ge);ve=Math.sqrt(Ve/2)}else{let Ae=!1;Le>Number.EPSILON?H>Number.EPSILON&&(Ae=!0):Le<-Number.EPSILON?H<-Number.EPSILON&&(Ae=!0):Math.sign(Se)===Math.sign(A)&&(Ae=!0),Ae?(ye=-Se,ge=Le,ve=Math.sqrt(re)):(ye=Le,ge=Se,ve=Math.sqrt(re/2))}return new Be(ye/ve,ge/ve)}let he=[];for(let K=0,I=$.length,pe=I-1,ye=K+1;K<I;K++,pe++,ye++)pe===I&&(pe=0),ye===I&&(ye=0),he[K]=ae($[K],$[pe],$[ye]);let F=[],te,J=he.concat();for(let K=0,I=S.length;K<I;K++){let pe=S[K];te=[];for(let ye=0,ge=pe.length,ve=ge-1,Le=ye+1;ye<ge;ye++,ve++,Le++)ve===ge&&(ve=0),Le===ge&&(Le=0),te[ye]=ae(pe[ye],pe[ve],pe[Le]);F.push(te),J=J.concat(te)}for(let K=0;K<p;K++){let I=K/p,pe=m*Math.cos(I*Math.PI/2),ye=g*Math.sin(I*Math.PI/2)+y;for(let ge=0,ve=$.length;ge<ve;ge++){let Le=ee($[ge],he[ge],ye);B(Le.x,Le.y,-pe)}for(let ge=0,ve=S.length;ge<ve;ge++){let Le=S[ge];te=F[ge];for(let Se=0,H=Le.length;Se<H;Se++){let A=ee(Le[Se],te[Se],ye);B(A.x,A.y,-pe)}}}let ce=g+y;for(let K=0;K<X;K++){let I=u?ee(v[K],J[K],ce):v[K];_?(T.copy(R.normals[0]).multiplyScalar(I.x),b.copy(R.binormals[0]).multiplyScalar(I.y),P.copy(x[0]).add(T).add(b),B(P.x,P.y,P.z)):B(I.x,I.y,0)}for(let K=1;K<=h;K++)for(let I=0;I<X;I++){let pe=u?ee(v[I],J[I],ce):v[I];_?(T.copy(R.normals[K]).multiplyScalar(pe.x),b.copy(R.binormals[K]).multiplyScalar(pe.y),P.copy(x[K]).add(T).add(b),B(P.x,P.y,P.z)):B(pe.x,pe.y,f/h*K)}for(let K=p-1;K>=0;K--){let I=K/p,pe=m*Math.cos(I*Math.PI/2),ye=g*Math.sin(I*Math.PI/2)+y;for(let ge=0,ve=$.length;ge<ve;ge++){let Le=ee($[ge],he[ge],ye);B(Le.x,Le.y,f+pe)}for(let ge=0,ve=S.length;ge<ve;ge++){let Le=S[ge];te=F[ge];for(let Se=0,H=Le.length;Se<H;Se++){let A=ee(Le[Se],te[Se],ye);_?B(A.x,A.y+x[h-1].y,x[h-1].x+pe):B(A.x,A.y,f+pe)}}}V(),ie();function V(){let K=r.length/3;if(u){let I=0,pe=X*I;for(let ye=0;ye<z;ye++){let ge=W[ye];G(ge[2]+pe,ge[1]+pe,ge[0]+pe)}I=h+p*2,pe=X*I;for(let ye=0;ye<z;ye++){let ge=W[ye];G(ge[0]+pe,ge[1]+pe,ge[2]+pe)}}else{for(let I=0;I<z;I++){let pe=W[I];G(pe[2],pe[1],pe[0])}for(let I=0;I<z;I++){let pe=W[I];G(pe[0]+X*h,pe[1]+X*h,pe[2]+X*h)}}n.addGroup(K,r.length/3-K,0)}function ie(){let K=r.length/3,I=0;k($,I),I+=$.length;for(let pe=0,ye=S.length;pe<ye;pe++){let ge=S[pe];k(ge,I),I+=ge.length}n.addGroup(K,r.length/3-K,1)}function k(K,I){let pe=K.length;for(;--pe>=0;){let ye=pe,ge=pe-1;ge<0&&(ge=K.length-1);for(let ve=0,Le=h+p*2;ve<Le;ve++){let Se=X*ve,H=X*(ve+1),A=I+ye+Se,re=I+ge+Se,_e=I+ge+H,Ae=I+ye+H;de(A,re,_e,Ae)}}}function B(K,I,pe){l.push(K),l.push(I),l.push(pe)}function G(K,I,pe){Ee(K),Ee(I),Ee(pe);let ye=r.length/3,ge=M.generateTopUV(n,r,ye-3,ye-2,ye-1);De(ge[0]),De(ge[1]),De(ge[2])}function de(K,I,pe,ye){Ee(K),Ee(I),Ee(ye),Ee(I),Ee(pe),Ee(ye);let ge=r.length/3,ve=M.generateSideWallUV(n,r,ge-6,ge-3,ge-2,ge-1);De(ve[0]),De(ve[1]),De(ve[3]),De(ve[1]),De(ve[2]),De(ve[3])}function Ee(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function De(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return s_(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ll[r.type]().fromJSON(r)),new i(n,e.options)}},r_={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new Be(s,o),new Be(a,l),new Be(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[r*3],m=e[r*3+1],g=e[r*3+2],y=e[s*3],p=e[s*3+1],d=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Be(o,1-l),new Be(c,1-f),new Be(u,1-g),new Be(y,1-d)]:[new Be(a,1-l),new Be(h,1-f),new Be(m,1-g),new Be(p,1-d)]}};function s_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var hl=class i extends sd{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fr=class i extends Rt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],f=e,u=(t-e)/r,m=new w,g=new Be;for(let y=0;y<=r;y++){for(let p=0;p<=n;p++){let d=s+p/n*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let y=0;y<r;y++){let p=y*(n+1);for(let d=0;d<n;d++){let M=d+p,x=M,_=M+n+1,R=M+n+2,b=M+1;a.push(x,_,b),a.push(_,R,b)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},nr=class i extends Rt{constructor(e=new Tt([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(o,2));function c(h){let f=r.length/3,u=h.extractPoints(t),m=u.shape,g=u.holes;$r.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){let M=g[p];$r.isClockWise(M)===!0&&(g[p]=M.reverse())}let y=$r.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){let M=g[p];m=m.concat(M)}for(let p=0,d=m.length;p<d;p++){let M=m[p];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let p=0,d=y.length;p<d;p++){let M=y[p],x=M[0]+f,_=M[1]+f,R=M[2]+f;n.push(x,_,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return o_(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function o_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var en=class i extends Rt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new w,u=new w,m=[],g=[],y=[],p=[];for(let d=0;d<=n;d++){let M=[],x=d/n,_=0;d===0&&o===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let b=R/t;f.x=-e*Math.cos(r+b*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),p.push(b+_,1-x),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let x=h[d][M+1],_=h[d][M],R=h[d+1][M],b=h[d+1][M+1];(d!==0||o>0)&&m.push(x,_,b),(d!==n-1||l<Math.PI)&&m.push(_,R,b)}this.setIndex(m),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qt=class i extends Rt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],h=new w,f=new w,u=new w;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let y=g/r*s,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let y=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,d=(r+1)*(m-1)+g,M=(r+1)*m+g;o.push(y,p,M),o.push(p,d,M)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var un=class i extends Rt{constructor(e=new al(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,l=new w,c=new Be,h=new w,f=[],u=[],m=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(m,2));function y(){for(let x=0;x<t;x++)p(x);p(s===!1?t:0),M(),d()}function p(x){h=e.getPointAt(x/t,h);let _=o.normals[x],R=o.binormals[x];for(let b=0;b<=r;b++){let T=b/r*Math.PI*2,P=Math.sin(T),O=-Math.cos(T);l.x=O*_.x+P*R.x,l.y=O*_.y+P*R.y,l.z=O*_.z+P*R.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=t;x++)for(let _=1;_<=r;_++){let R=(r+1)*(x-1)+(_-1),b=(r+1)*x+(_-1),T=(r+1)*x+_,P=(r+1)*(x-1)+_;g.push(R,b,P),g.push(b,T,P)}}function M(){for(let x=0;x<=t;x++)for(let _=0;_<=r;_++)c.x=x/t,c.y=_/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ll[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Fe=class extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$t=class extends Fe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jr=class extends er{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Lc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function a_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cd=class extends vo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ip,endingEnd:ip}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case rp:s=e,a=2*t-n;break;case sp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rp:o=e,l=2*n-t;break;case sp:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),y=g*g,p=y*g,d=-u*p+2*u*y-u*g,M=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,x=(-1-m)*p+(1.5+m)*y+.5*g,_=m*p-m*y;for(let R=0;R!==a;++R)s[R]=d*o[h+R]+M*o[c+R]+x*o[l+R]+_*o[f+R];return s}},ld=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},hd=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ir=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lc(t,this.TimeBufferType),this.values=Lc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lc(e.times,Array),values:Lc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ld(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bc:t=this.InterpolantFactoryMethodDiscrete;break;case Ou:t=this.InterpolantFactoryMethodLinear;break;case _h:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bc;case this.InterpolantFactoryMethodLinear:return Ou;case this.InterpolantFactoryMethodSmooth:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&a_(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_h,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*n,u=f-n,m=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[u+g]||y!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let m=0;m!==n;++m)t[u+m]=t[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ir.prototype.TimeBufferType=Float32Array;ir.prototype.ValueBufferType=Float32Array;ir.prototype.DefaultInterpolation=Ou;var Ss=class extends ir{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Bc;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ud=class extends ir{};ud.prototype.ValueTypeName="color";var dd=class extends ir{};dd.prototype.ValueTypeName="number";var fd=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)dt.slerpFlat(s,0,o,c-a,o,c,l);return s}},ul=class extends ir{InterpolantFactoryMethodLinear(e){return new fd(this.times,this.values,this.getValueSize(),e)}};ul.prototype.ValueTypeName="quaternion";ul.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends ir{constructor(e,t,n){super(e,t,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Bc;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var pd=class extends ir{};pd.prototype.ValueTypeName="vector";var o0={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},md=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},c_=new md,Ra=class{constructor(e){this.manager=e!==void 0?e:c_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var gd=class extends Ra{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=o0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=xa("img");function l(){h(),o0.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){h(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Mo=class extends Ra{constructor(e){super(e)}load(e,t,n,r){let s=new di,o=new gd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Eo=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},dl=class extends Eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},eu=new Lt,a0=new w,c0=new w,Aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;a0.setFromMatrixPosition(e.matrixWorld),t.position.copy(a0),c0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c0),t.updateMatrixWorld(),eu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xd=class extends Aa{constructor(){super(new $n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=go*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_o=class extends Eo{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new xd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},l0=new Lt,ca=new w,tu=new w,yd=class extends Aa{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new tn(2,1,1,1),new tn(0,1,1,1),new tn(3,1,1,1),new tn(1,1,1,1),new tn(3,0,1,1),new tn(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),n.position.copy(ca),tu.copy(n.position),tu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tu),n.updateMatrixWorld(),r.makeTranslation(-ca.x,-ca.y,-ca.z),l0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(l0)}},An=class extends Eo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new yd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vd=class extends Aa{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fl=class extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var pl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=h0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=h0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function h0(){return performance.now()}var zd="\\[\\]\\.:\\/",l_=new RegExp("["+zd+"]","g"),Od="[^"+zd+"]",h_="[^"+zd.replace("\\.","")+"]",u_=/((?:WC+[\/:])*)/.source.replace("WC",Od),d_=/(WCOD+)?/.source.replace("WCOD",h_),f_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Od),p_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Od),m_=new RegExp("^"+u_+d_+f_+p_+"$"),g_=["material","materials","bones","map"],Md=class{constructor(e,t,n){let r=n||fn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},fn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l_,"")}static parseTrackName(e){let t=m_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);g_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fn.Composite=Md;fn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fn.prototype.GetterByBindingType=[fn.prototype._getValue_direct,fn.prototype._getValue_array,fn.prototype._getValue_arrayElement,fn.prototype._getValue_toArray];fn.prototype.SetterByBindingTypeAndVersioning=[[fn.prototype._setValue_direct,fn.prototype._setValue_direct_setNeedsUpdate,fn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_array,fn.prototype._setValue_array_setNeedsUpdate,fn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_arrayElement,fn.prototype._setValue_arrayElement_setNeedsUpdate,fn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_fromArray,fn.prototype._setValue_fromArray_setNeedsUpdate,fn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yb=new Float32Array(1);var u0=new Lt,Ca=class{constructor(e,t,n=0,r=1/0){this.ray=new ya(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return u0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(u0),this}intersectObject(e,t=!0,n=[]){return Ed(e,this,n,t),n.sort(d0),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ed(e[r],this,n,t);return n.sort(d0),n}};function d0(i,e){return i.distance-e.distance}function Ed(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Ed(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function x_({coarse:i=!1,width:e=1280,cores:t=8,memory:n=8,dpr:r=1,mobileHint:s=!1,safe:o=!1}={}){let a=o||s||i||e<700||t<=4||n<=4;return Object.freeze({mobile:a,safe:o,pixelRatio:Math.min(r,a?o?.75:1:1.5),minPixelRatio:Math.min(r,a?.6:1),maxPixels:o?26e4:a?52e4:22e5,maxFps:a?30:60,shadowSize:a?512:1536,shadowHz:a?5:24,shadows:!a&&!o,textureSize:a?128:512,maxTextureSize:o?128:a?256:1024,chainSegments:a?12:24,chainRadialSegments:a?3:5,effectsHz:a?15:40,targetFrameMs:a?33.3:22})}function N0(i,e,t,n=i.pixelRatio){return Math.min(n,Math.sqrt(i.maxPixels/Math.max(1,e*t)))}var F0=!1;try{F0=sessionStorage.getItem("figsaw-safe-graphics")==="1"}catch{}var y_=typeof window>"u"?{}:{coarse:matchMedia("(pointer:coarse)").matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1,mobileHint:new URLSearchParams(location.search).get("quality")==="mobile"||/Android|iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,safe:F0},Ce=x_(y_);function Zn(i,{exclude:e=[],minObjects:t=3,allowInteractiveRoot:n=!1,dispose:r=!0,palette:s=!1}={}){let o=new Map,a=new Set(e),l=new Map,c=new Set,h=new w,f=new w,u=new wt;i.updateWorldMatrix(!0,!0);let m=i.matrixWorld.clone().invert();function g(x){if(!s||x.isMeshPhysicalMaterial||x.vertexColors||x.clippingPlanes?.length||!x.color)return null;if(!o.has(x)){let R=["type","roughness","metalness","opacity","alphaTest","side","blending","depthWrite","depthTest","colorWrite","flatShading","toneMapped","polygonOffset","polygonOffsetFactor","polygonOffsetUnits","emissiveIntensity","envMapIntensity","fog","dithering","premultipliedAlpha","reflectivity","shininess","wireframe"].map(b=>x[b]).concat(x.emissive?.getHex(),x.specular?.getHex(),x.customProgramCacheKey());for(let b of["map","alphaMap","aoMap","bumpMap","normalMap","roughnessMap","metalnessMap","emissiveMap","envMap","lightMap"])R.push(x[b]?.uuid);o.set(x,JSON.stringify(R))}return o.get(x)}function y(x){if(!(!x.visible||a.has(x)||!(x===i&&n)&&(x.userData.chargingAction||x.userData.keyAction||Number.isInteger(x.userData.hoistIndex)||Number.isInteger(x.userData.valveIndex)))){if(x.isMesh&&!x.isInstancedMesh&&!x.isSkinnedMesh&&!x.children.length){let _=x.geometry,R=x.material,b=_.attributes;if(R&&!Array.isArray(R)&&!R.transparent&&!_.morphAttributes.position&&_.drawRange.start===0&&_.drawRange.count===1/0&&b.position&&Object.keys(b).every(T=>["position","normal","uv"].includes(T))){x.getWorldPosition(h);let T=`${Math.floor(h.x/3)},${Math.floor(h.z/3)}`,P=[g(R)||R.uuid,x.castShadow,x.receiveShadow,x.renderOrder,Object.keys(b).sort().join(","),T].join("|");l.has(P)||l.set(P,[]),l.get(P).push(x)}}for(let _ of x.children)y(_)}}y(i);let p=0,d=0;for(let x of l.values()){if(x.length<t)continue;let _=Object.keys(x[0].geometry.attributes),R=x.reduce((X,z)=>X+z.geometry.attributes.position.count,0),b=x.reduce((X,z)=>X+(z.geometry.index?.count||z.geometry.attributes.position.count),0),T=new Rt,P={};for(let X of _){let z=x[0].geometry.attributes[X].itemSize;P[X]=new Float32Array(R*z),T.setAttribute(X,new nn(P[X],z))}let O=!!g(x[0].material);O&&(P.color=new Float32Array(R*3),T.setAttribute("color",new nn(P.color,3)));let v=R<=65535?new Uint16Array(b):new Uint32Array(b),S=0,N=0;for(let X of x){let z=X.geometry,ae=new Lt().multiplyMatrices(m,X.matrixWorld);u.getNormalMatrix(ae);for(let F=0;F<z.attributes.position.count;F++)h.fromBufferAttribute(z.attributes.position,F).applyMatrix4(ae),h.toArray(P.position,(S+F)*3),O&&X.material.color.toArray(P.color,(S+F)*3),P.normal&&(f.fromBufferAttribute(z.attributes.normal,F).applyMatrix3(u).normalize(),f.toArray(P.normal,(S+F)*3)),P.uv&&(P.uv[(S+F)*2]=z.attributes.uv.getX(F),P.uv[(S+F)*2+1]=z.attributes.uv.getY(F));let he=z.index?.count||z.attributes.position.count;for(let F=0;F<he;F++)v[N++]=S+(z.index?z.index.getX(F):F);if(ae.determinant()<0)for(let F=N-he;F<N;F+=3){let te=v[F+1];v[F+1]=v[F+2],v[F+2]=te}S+=z.attributes.position.count,c.add(z),X.removeFromParent(),p++}T.setIndex(new nn(v,1)),T.computeBoundingBox(),T.computeBoundingSphere();let W=x[0],$=W.material;O&&($=W.material.clone(),$.onBeforeCompile=W.material.onBeforeCompile,$.customProgramCacheKey=W.material.customProgramCacheKey,$.color.setHex(16777215),$.vertexColors=!0);let ee=new at(T,$);ee.name="Batched static office scenery",ee.castShadow=W.castShadow,ee.receiveShadow=W.receiveShadow,ee.renderOrder=W.renderOrder,ee.matrixAutoUpdate=!1,i.add(ee),d++}let M=new Set;i.traverse(x=>{x.geometry&&M.add(x.geometry)});for(let x of c)r&&!M.has(x)&&x.dispose();return{removed:p,batches:d}}function z0(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,"#111812"),n.addColorStop(.48,"#3a4636"),n.addColorStop(1,"#171d12"),t.fillStyle=n,t.fillRect(0,0,256,128),t.fillStyle="#a9b7a3",t.fillRect(78,19,72,3),t.fillStyle="#596e68",t.fillRect(190,38,29,25),t.fillStyle="#435827",t.fillRect(25,64,34,15);let r=new zt(e);r.colorSpace=yt,r.mapping=ma;let s=new yo(i),o=s.fromEquirectangular(r);return s.dispose(),r.dispose(),o}function O0(i,e){if(!new URLSearchParams(location.search).has("profile"))return{mark(){},frame(){}};let t=document.createElement("output");t.id="performance-report",t.hidden=!0,document.body.append(t);let n=performance.now(),r={},s=[],o=null,a=0,l=0,c=0;function h(u){r[u]=Math.round(performance.now()-n)}function f(){let u=new Set,m=new Set,g=[],y=0,p=0,d=0;e.traverse(M=>{M.isLight&&M.visible&&d++,M.geometry&&u.add(M.geometry);for(let x of Array.isArray(M.material)?M.material:[M.material])if(x)for(let _ of Object.values(x))_?.isTexture&&m.add(_);if(M.isGroup&&M.name){let x=0,_=0;M.traverse(R=>{R.isMesh&&(x++,_+=(R.geometry?.index?.count||R.geometry?.attributes.position?.count||0)/3*(R.isInstancedMesh?R.count:1))}),x>15&&g.push({name:M.name,meshes:x,triangles:Math.round(_)})}});for(let M of u){for(let x of Object.values(M.attributes))y+=x.array.byteLength;y+=M.index?.array.byteLength||0}for(let M of m){let x=M.image;p+=(x?.width||0)*(x?.height||0)*4*(M.generateMipmaps?4/3:1)}return{geometryMB:+(y/1048576).toFixed(1),textureMB:+(p/1048576).toFixed(1),lights:d,largestTextures:[...m].map(M=>({w:M.image?.width,h:M.image?.height})).sort((M,x)=>x.w*x.h-M.w*M.h).slice(0,10),groups:g.sort((M,x)=>x.meshes-M.meshes).slice(0,18)}}return{mark:h,frame(u){let m=performance.now();if(a||(a=m-n),l&&(s.push(m-l),s.length>90&&s.shift()),l=m,c++,c===1||c%30===0){let g=0;e.traverse(y=>{y.isMesh&&g++}),o??=f(),t.textContent=JSON.stringify({inventory:o,programs:i.info.programs.length,firstFrameMs:Math.round(a),stages:r,frameMs:s.length?Math.round(s.reduce((y,p)=>y+p,0)/s.length*10)/10:0,renderCpuMs:Math.round((m-u)*10)/10,frames:c,calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,textures:i.info.memory.textures,meshes:g,pixelRatio:i.getPixelRatio()})}}}}function vl(i=512,e=i,t=Ce.maxTextureSize){let n=Math.min(1,t/Math.max(i,e)),r=document.createElement("canvas");r.width=Math.max(1,Math.round(i*n)),r.height=Math.max(1,Math.round(e*n));let s=r.getContext("2d");return s.scale(r.width/i,r.height/e),[r,s]}function Ml(i,e=Ce.maxTextureSize){let t=i.image;if(!t||Math.max(t.width,t.height)<=e)return i;let n=e/Math.max(t.width,t.height),r=document.createElement("canvas");return r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n)),r.getContext("2d").drawImage(t,0,0,r.width,r.height),i.image=r,i.needsUpdate=!0,i}function B0(i){let n=[],r=new Map,s=0,o=new Mt(.735,.41);function a(){return vl(1024,576)}function l(f,u=!0){let m=new zt(f);return u&&(m.colorSpace=yt),m.anisotropy=Math.min(Ce.mobile?2:8,i.capabilities.getMaxAnisotropy()),m}function c(f,u){let m=13817+u*7319+(f==="hole"?20001:f==="live"?481:0),g=()=>(m=m*1664525+1013904223>>>0,m/4294967296),y=(F,te)=>F+(te-F)*g(),[p,d]=a(),[M,x]=a(),[_,R]=a(),[b,T]=a();d.fillStyle="#080d10",d.fillRect(0,0,1024,576),R.fillStyle="#545454",R.fillRect(0,0,1024,576),T.fillStyle="#777",T.fillRect(0,0,1024,576);let P=f==="live"||f==="cracked"&&u%2===0,O=d.createLinearGradient(0,0,1024,576);if(O.addColorStop(0,"#1b262a"),O.addColorStop(.45,"#0b1217"),O.addColorStop(1,"#040709"),d.fillStyle=O,d.fillRect(0,0,1024,576),P){d.fillStyle="#253438",d.fillRect(0,0,1024,27),d.fillRect(0,27,150,576);for(let F=0;F<28;F++){let te=174;for(let J=0;J<y(3,10);J++){d.fillStyle=["#365b51","#47615d","#354847"][Math.floor(g()*3)];let ce=y(9,93);d.fillRect(te,53+F*17,ce,2),te+=ce+y(5,15)}}for(let F=0;F<576;F+=3)d.fillStyle="rgba(0,0,0,.18)",d.fillRect(0,F,1024,1)}let v={x:y(1024*.2,1024*.78),y:y(576*.22,576*.78)};function S(F,te,J,ce,V=0,ie=0){te.strokeStyle=J,te.lineWidth=ce,te.beginPath(),F.forEach(([k,B],G)=>G?te.lineTo(k+V,B+ie):te.moveTo(k+V,B+ie)),te.stroke()}function N(F,te=1){S(F,x,"rgba(0,3,6,.86)",te*1.9),S(F,x,`rgba(185,212,216,${y(.45,.9)})`,te*.7,-.7,.35),g()<.3&&S(F,x,"rgba(113,153,163,.35)",.5,.75,-.35),S(F,T,"#242424",te*1.6),S(F,T,"#bfbfbf",te*.7,-.7,.35),S(F,R,"#b9b9b9",te*1.5)}let W=[];if(f!=="live"){let ce=function(k,B,G=1){d.fillStyle=B,d.beginPath(),k.forEach(([de,Ee],De)=>{de=v.x+(de-v.x)*G,Ee=v.y+(Ee-v.y)*G,De?d.lineTo(de,Ee):d.moveTo(de,Ee)}),d.closePath(),d.fill()},F=[],te=f==="hole"?y(68,107):y(42,78),J=te*y(.42,.75);for(let k=0;k<72;k++){let B=k/72*Math.PI*2,G=1+.13*Math.sin(B*5+u)+.07*Math.sin(B*13);F.push([v.x+Math.cos(B)*te*G,v.y+Math.sin(B)*J*G])}for(let[k,B]of[[1.18,"rgba(56,39,73,.46)"],[1.1,"rgba(36,72,74,.55)"],[1.05,"#151c2a"],[1,"#010204"]])ce(F,B,k);if(P||f==="hole"&&u===1){for(let G=0;G<61;G++){let de=v.x+y(-te*1.7,te*1.7),Ee=G%3?0:v.y,De=G%3?v.y:576;d.fillStyle=["rgba(85,129,115,.65)","rgba(130,62,94,.6)","rgba(70,103,146,.60)","rgba(172,177,161,.48)"][G%4],d.fillRect(de,Ee,y(.4,2),De-Ee)}let k=v.x+te*.4,B=y(35,108);d.fillStyle="rgba(130,151,153,.23)",d.fillRect(k,0,B,v.y);for(let G=0;G<v.y;G+=3)d.fillStyle=`rgba(15,28,32,${y(.15,.65)})`,d.fillRect(k,G,B,1);for(let G=0;G<9;G++)d.fillStyle=G%3?"rgba(2,5,8,.85)":"rgba(129,156,153,.45)",d.fillRect(0,v.y+y(-15,18),1024,y(.5,2.4));ce(F,"#010204",.98)}let V=12+u%4,ie=Array.from({length:V},(k,B)=>B/V*Math.PI*2+y(-.11,.11));for(let k of ie){let B=[[v.x+Math.cos(k)*3,v.y+Math.sin(k)*3]],G=y(7,13);for(;G<1300;){let de=y(-.021,.021),Ee=v.x+Math.cos(k+de)*G,De=v.y+Math.sin(k+de)*G;if(B.push([Ee,De]),G+=y(16,47),Ee<0||Ee>1024||De<0||De>576)break}N(B,y(.55,1.2));for(let de=2;de<B.length-1;de++)if(g()<.33){let[Ee,De]=B[de],K=g()<.5?-1:1,I=k+K*y(.18,.65),pe=y(28,145),ye=[[Ee,De]];for(let ge=1;ge<=5;ge++)ye.push([Ee+Math.cos(I)*pe*ge/5+y(-3,3),De+Math.sin(I)*pe*ge/5+y(-3,3)]);N(ye,y(.3,.64))}}for(let k of[18,35,61,101,155])for(let B=0;B<V;B++){if(g()<.28||k>70&&g()<.45)continue;let G=ie[B],de=B===V-1?ie[0]+Math.PI*2:ie[B+1],Ee=k*y(.8,1.12),De=[];for(let K=0;K<=4;K++){let I=G+(de-G)*K/4;De.push([v.x+Math.cos(I)*Ee+y(-3,3),v.y+Math.sin(I)*Ee*.84+y(-2,2)])}N(De,y(.35,.75))}for(let k=0;k<90;k++){let B=g()*Math.PI*2,G=y(2,25),de=v.x+Math.cos(B)*G,Ee=v.y+Math.sin(B)*G*.7;N([[de,Ee],[de+y(-6,6),Ee+y(-5,5)]],y(.3,.8))}if(f==="hole")for(let k=0;k<7;k++){let B=k/7*Math.PI*2,G=y(8,26),de=v.x+Math.cos(B)*G,Ee=v.y+Math.sin(B)*G*.7,De=[[de,Ee],[de+y(4,11),Ee+y(-6,2)],[de+y(-3,5),Ee+y(4,13)]];W.push(De),d.fillStyle="#000102",d.beginPath(),De.forEach(([K,I],pe)=>pe?d.lineTo(K,I):d.moveTo(K,I)),d.closePath(),d.fill(),N([...De,De[0]],1)}}for(let F=0;F<35;F++){let te=g()*1024,J=g()*576,ce=y(20,115),V=R.createRadialGradient(te,J,0,te,J,ce);V.addColorStop(0,"rgba(205,205,205,.20)"),V.addColorStop(1,"rgba(160,160,160,0)"),R.fillStyle=V,R.fillRect(te-ce,J-ce,ce*2,ce*2)}for(let F=0;F<3800;F++){let te=g()*1024,J=g()*576;R.fillStyle=`rgba(230,230,230,${y(.06,.4)})`,R.fillRect(te,J,y(.4,1.3),y(.4,1.1)),F%9===0&&(x.fillStyle="rgba(135,149,146,.13)",x.fillRect(te,J,.65,.65))}for(let F=0;F<70;F++){let te=g()*1024,J=g()*576;S([[te,J],[te+y(3,31),J+y(-8,8)]],R,"rgba(189,189,189,.35)",.7)}x.strokeStyle="rgba(89,93,83,.50)",x.lineWidth=2.4,x.strokeRect(1,1,1022,574),Ce.mobile&&d.drawImage(M,0,0,1024,576);let $=l(p),ee=Ce.mobile?null:l(_,!1),X=Ce.mobile?null:l(b,!1),z=new Fe({map:$,roughness:.62,metalness:0,emissiveMap:$,emissive:16777215,emissiveIntensity:f==="live"?.52:P?.28:.025}),ae=new $t({color:10137267,metalness:.08,roughness:.36,roughnessMap:ee,bumpMap:X,bumpScale:38e-5,transparent:!0,opacity:.27,depthWrite:!1,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:ee,ior:1.52,envMapIntensity:.85,side:ni});n.push(ae);let he=new Fe({map:l(M),transparent:!0,depthWrite:!1,roughness:.38,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return{lcdMaterial:z,glass:ae,cracksMaterial:he,holes:W}}function h(f,u){let m=s++%(Ce.mobile?1:3),g=`${u}-${m}`;r.has(g)||r.set(g,c(u,m));let y=r.get(g);for(let[p,d,M]of[[y.lcdMaterial,.019,"Damaged liquid-crystal panel"],[y.glass,.0205,"Reflective laminated screen glass"],[y.cracksMaterial,.0213,"Fine branching glass fractures"]]){if(Ce.mobile&&p===y.cracksMaterial)continue;let x=new at(o,p);x.position.set(0,.381,d),x.name=M,x.castShadow=!1,x.receiveShadow=!0,f.add(x)}for(let p of Ce.mobile?[]:y.holes){let d=p.flatMap(([_,R],b)=>[(_/1024-.5)*.735,(.5-R/576)*.41+.381,.0215+(b===1?.0018:0)]),M=new Rt;M.setAttribute("position",new ut(d,3)),M.computeVertexNormals();let x=new at(M,y.glass);x.castShadow=!1,f.add(x)}}return{add:h,setEnvironment(f){for(let u of n)u.envMap=f,u.needsUpdate=!0}}}var bl=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Pr=i=>(i=bl(i),i*i*(3-2*i));function El(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function Ti(i,e){let t=Math.floor(i),n=Math.floor(e),r=Pr(i-t),s=Pr(e-n);return ke.lerp(ke.lerp(El(t,n),El(t+1,n),r),ke.lerp(El(t,n+1),El(t+1,n+1),r),s)}function _l(i,e){return Ti(i*5,e*5)*.48+Ti(i*17+3,e*17)*.29+Ti(i*61,e*61+9)*.15+Ti(i*187,e*187)*.08}function wo(i,e=Ce.textureSize,t=!1){let n=new Uint8Array(e*e*4);for(let s=0;s<e;s++)for(let o=0;o<e;o++){let a=i(o/e,s/e,o,s),l=(s*e+o)*4;for(let c=0;c<4;c++)n[l+c]=Math.round(bl(a[c]??1)*255)}let r=new ur(n,e,e,Si);return r.wrapS=r.wrapT=_s,r.magFilter=gn,r.minFilter=ji,r.generateMipmaps=!0,r.anisotropy=4,t&&(r.colorSpace=yt),r.needsUpdate=!0,r}var Bd;function xi(i=16777215){if(!Bd){let e=(l,c)=>{let h=_l(l,c),f=Ti(l*48,c*3),u=Pr((h+f*.13-.51)*9),m=Pr((Ti(l*150,c*150)-.64)*8);return{n:h,rust:u,pit:m}},t=new Float32Array(Ce.textureSize*Ce.textureSize*3),n=wo((l,c,h,f)=>{let{n:u,rust:m,pit:g}=e(l,c),y=Math.pow(Ti(l*4,c*260),18)*.24,p=(f*Ce.textureSize+h)*3;return t[p]=.45+m*.21+u*.18-g*.25,t[p+1]=.35+m*.57+g*.07,t[p+2]=.88-m*.86,[.39+u*.34,.42+u*.34,.39+u*.32].map((d,M)=>ke.lerp(d,[.35+u*.3,.12+u*.19,.045+u*.1][M],m)-g*.1+y)},Ce.textureSize,!0),r=wo((l,c,h,f)=>{let u=(f*Ce.textureSize+h)*3;return[t[u],t[u+1],t[u+2]]});Bd={map:n,roughnessMap:r,metalnessMap:r,bumpMap:r}}return new Fe({color:i,...Bd,roughness:1,metalness:1,bumpScale:Ce.mobile?0:.0035,envMapIntensity:.7})}function k0(){let i=(y,p)=>{let d=_l(y+3,p+2),M=Ti(y*70,p*2.3)*Ti(y*19,p*6),x=Ti(y*170,p*190),_=(1-Pr(p/.23))*.78,R=Pr((p-.86)/.14)*.34,b=Math.exp(-(((p-.844)*75)**2))*(.2+Ti(y*38,1)*.8),T=bl(_+R+b*.52+Pr((d-.49)*7)*.45+M*.2),P=Pr((d-.37)*4)*.7;return{dirt:T,fog:P,runs:M,scale:x,tide:b}},e=new Float32Array(Ce.textureSize*Ce.textureSize*2),t=wo((y,p,d,M)=>{let{dirt:x,fog:_,runs:R,scale:b,tide:T}=i(y,p),P=Math.pow(Ti(y*105,p*69),12)*.65,O=(M*Ce.textureSize+d)*2;return e[O]=.4+x*.1+R*.09+b*.025+P,e[O+1]=.08+_*.36+x*.43+R*.1,[.59-x*.3,.63-x*.3,.48-x*.3,bl(.03+_*.23+x*.55+T*.12+b*.025)]},Ce.textureSize,!0),n=wo((y,p,d,M)=>{let x=(M*Ce.textureSize+d)*2;return[e[x],e[x+1],0]}),r=n,s=new $t({color:14542029,roughness:.7,roughnessMap:r,metalness:0,transparent:!0,opacity:.17,depthWrite:!1,clearcoat:Ce.mobile?0:1,clearcoatRoughness:.14,bumpMap:Ce.mobile?null:n,bumpScale:.003,side:Ce.mobile?ni:Ct,envMapIntensity:.85}),o=new Fe({map:t,roughness:.9,bumpMap:Ce.mobile?null:n,bumpScale:.002,transparent:!0,depthWrite:!1,side:Ce.mobile?ni:Ct}),a=wo((y,p)=>{let d=_l(y+11,p+7),M=Ti(y*12,p*9);return[.11+d*.19,.24+d*.35,.026+M*.08]},Ce.textureSize/2,!0),l=wo((y,p)=>{let d=_l(y+5,p+3),M=Pr(p);return[.1+d*.12+M*.06,.17+d*.22+M*.12,.025+d*.055,.93-M*.43]},Ce.textureSize/2,!0),c=new $t({map:l,color:13228945,roughness:.26,transparent:!0,opacity:.76,depthWrite:!1,side:Ce.mobile?ni:Ct,emissive:1981189,emissiveIntensity:.48,envMapIntensity:.35}),h=new $t({map:a,color:16777215,roughness:.17,metalness:0,ior:1.333,clearcoat:Ce.mobile?0:1,clearcoatRoughness:.12,side:Ce.mobile?ni:Ct,emissive:2374407,emissiveIntensity:.3,envMapIntensity:1.15}),f={value:0};h.onBeforeCompile=y=>{y.uniforms.waterTime=f,y.fragmentShader=`uniform float waterTime;
`+y.fragmentShader,y.fragmentShader=y.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`)},h.customProgramCacheKey=()=>"slow-water-currents-v1";let u=new Fe({color:9546090,roughness:.79,transparent:!0,opacity:.75,depthWrite:!1,emissive:2503177,emissiveIntensity:.12}),m=new $t({color:13097881,roughness:.07,metalness:0,transparent:!0,opacity:.23,depthWrite:!1,clearcoat:Ce.mobile?0:1,clearcoatRoughness:.04,envMapIntensity:1.25}),g=new mt({color:12505482,transparent:!0,opacity:.18,depthWrite:!1,side:Ce.mobile?ni:Ct});return{glass:s,haze:o,fluid:c,liquidTop:h,foam:u,bubble:m,ripple:g,waterTime:f}}var v_=i=>Math.max(0,Math.min(1,i)),Vd=i=>{let e=v_(i);return e*e*(3-2*e)};function kd(i,e,t,n,r){if(i<e)return 0;let s=i-e;return s<t?Vd(s/t):s<t+n?1:1-Vd((s-t-n)/r)}var M_=[{at:5,head:-.32,eye:-.52,pitch:.035,hold:1.7},{at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},{at:31.1,head:-.23,eye:-.4,pitch:-.1,hold:1.3}];function V0(i,e=!1,t={}){if(t.headYaw=0,t.gazeYaw=0,t.gazePitch=0,e||i<0)return t;let n=i%43.7;for(let r of M_){let s=kd(n,r.at,.24,r.hold+1,.65),o=kd(n,r.at+.38,.95,r.hold,1.25);t.headYaw+=r.head*o,t.gazeYaw+=r.eye*s,t.gazePitch+=r.pitch*s}return t.gazePitch-=.12*kd(n,25.2,.22,.8,.5),t}function G0(i,e,t,n,r=!1,s={}){let o=Vd((e-1.08)/.42),a=1.1+n*.055,l=r?0:o*.105*(Math.sin(i*a+n)+.12*Math.sin(i*.47+n*.6))/1.12,c=t-.1-e;return s.angle=l,s.x=Math.sin(l)*c,s.y=t-.1-Math.cos(l)*c,s.hookX=s.x-Math.sin(l)*.52,s.hookY=s.y+Math.cos(l)*.52,s}var wl;function E_(){if(wl)return wl;let i=128,e=new Uint8Array(i*i*4),t=new Uint8Array(i*i*4),n=8817,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=(a*i+l)*4,h=r(),f=Math.max(0,Math.sin(l*.056+Math.sin(a*.05)*2)*Math.cos(a*.041)-.15),u=h>.965?.22:0;e[c]=223-f*67-h*16-u*140,e[c+1]=219-f*49-h*15-u*130,e[c+2]=186-f*72-h*17-u*130,e[c+3]=255,t[c]=t[c+1]=t[c+2]=145+h*24-u*255,t[c+3]=255}let s=new ur(e,i,i),o=new ur(t,i,i);for(let a of[s,o])a.wrapS=a.wrapT=_s,a.magFilter=gn,a.minFilter=ji,a.generateMipmaps=!0,a.needsUpdate=!0;return s.colorSpace=yt,wl=new Fe({map:s,bumpMap:o,bumpScale:.0011,color:16052183,roughness:.72,emissive:12563852,emissiveIntensity:.28}),wl}var __=new en(1,20,14),Ia=new Fe({color:1580302,roughness:1});function yi(i,e,t=E_()){let n=new at(i,t);return n.castShadow=!0,n.receiveShadow=!0,e.add(n),n}function Ni(i,e,t,n){let r=yi(__,i,n);return r.position.set(...e),r.scale.set(...t),r}function Hi(i,e,t=.012){return yi(new un(new Yt(e.map(n=>new w(...n))),32,t,8,!1),i)}function Sl(i,e,t,n=.012){let r=new w(...e),s=new w(...t),o=s.clone().sub(r),a=yi(new Nt(n*.82,n,o.length(),10),i);return a.position.copy(r).add(s).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new w(0,1,0),o.normalize()),a}function Gd(i=!1){let e=new xe;e.name=i?"Slender forearm bone":"Worn femur";let t=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.1],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]],n=new Jr(t.map(s=>new Be(s[0]*(i?.62:1),s[1])),20),r=n.attributes.position;for(let s=0;s<r.count;s++)r.setX(s,r.getX(s)+.009*Math.sin((r.getY(s)+.16)*Math.PI/.315));return n.computeVertexNormals(),yi(n,e),Ni(e,[.022,.14,0],[.043,.038,.039]),Ni(e,[-.015,-.147,.002],[.028,.03,.034]),Ni(e,[.02,-.15,-.002],[.029,.032,.032]),i&&e.scale.set(.75,1,.8),e}function W0(){let i=new xe;i.name="Curved rib fragment";let e=[];for(let t=0;t<=20;t++){let n=-.85+t/20*2.9;e.push([Math.cos(n)*.123-.018,Math.sin(n)*.123,.018*Math.sin(n*1.3)])}return Hi(i,e),Ni(i,e[0],[.017,.015,.018]),i}function X0(){let i=new xe;i.name="Detached jaw with uneven teeth",Hi(i,[[-.088,.045,-.035],[-.08,-.025,.035],[-.043,-.05,.071],[0,-.054,.082],[.043,-.05,.071],[.08,-.025,.035],[.088,.045,-.035]],.013);for(let e=0;e<8;e++){let t=(e-3.5)*.017,n=.078-Math.abs(t)*.3,r=yi(new St(.013,.02+e%3*.002,.013),i);r.position.set(t,-.041,n),r.rotation.y=-t*3}return i}function b_(){let i=new xe;i.name="Goofy buck-toothed skull with wonky eye sockets";let e=new Tt;e.moveTo(-.076,-.061),e.quadraticCurveTo(-.133,-.035,-.121,.067),e.bezierCurveTo(-.119,.171,.123,.165,.12,.06),e.quadraticCurveTo(.136,-.029,.077,-.061),e.lineTo(.047,-.071),e.lineTo(-.047,-.073),e.closePath();for(let[s,o,a,l,c]of[[-.052,.019,.039,.043,-.2],[.052,.011,.033,.035,.18]]){let h=new pi;h.absellipse(s,o,a,l,0,Math.PI*2,!0,c),e.holes.push(h)}let t=new pi;t.moveTo(.001,-.026),t.lineTo(-.012,-.05),t.quadraticCurveTo(.001,-.045,.013,-.05),t.closePath(),e.holes.push(t);let n=yi(new rn(e,{depth:.022,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),i);n.position.z=.043,Ni(i,[0,.04,-.055],[.12,.121,.077]),Ni(i,[0,.012,.027],[.109,.093,.01],Ia);for(let s of[-1,1])Ni(i,[s*.093,-.042,.047],[.028,.022,.025]);for(let[s,o,a,l,c]of[[-.019,-.084,.028,.042,-.11],[.017,-.08,.027,.036,.17],[-.06,-.073,.014,.018,-.28],[.06,-.071,.012,.015,.23]]){let h=yi(new St(a,l,.018),i);h.position.set(s,o,.064),h.rotation.z=c}let r=new xe;r.name="Lopsided cartoon jaw",r.position.set(.004,-.071,-.003),r.rotation.z=-.12,i.add(r),Hi(r,[[-.087,.04,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.04,-.025]],.014);for(let[s,o]of[[-.052,-.04],[.038,-.041],[.057,-.036]]){let a=yi(new St(.015,.016,.015),r);a.position.set(s,o,.071),a.rotation.z=s*3}return Hi(i,[[-.009,.154,-.016],[.003,.15,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=Ia,i}function Wd(){let i=new xe;i.name="Short articulated spine";for(let e=0;e<6;e++){let t=(e-2.5)*.038,n=.01*Math.sin(e*.7);Ni(i,[0,t,n],[.025,.016,.02]);for(let r of[-1,1])Sl(i,[r*.012,t,n],[r*.045,t-.009,n-.008],.007);Sl(i,[0,t,n],[0,t+.008,n-.043],.006)}return i}function q0(){let i=new xe;i.name="Broken rib cage",i.add(Wd());for(let e=0;e<5;e++)for(let t of[-1,1]){if(e===4&&t===1)continue;let n=.08-e*.043,r=.08+Math.sin(e/5*Math.PI)*.038;Hi(i,[[0,n,-.02],[t*r*.65,n+.018,-.045],[t*r,n-.004,.008],[t*r*.82,n-.031,.065],[t*.018,n-.044,.08]],.0085)}return Sl(i,[0,.06,.081],[0,-.12,.079],.01),i}function w_(i){let e=i===0,t=new xe;t.name=e?"Pudding-shaped skull with bony party hat":"Sushi-shaped skull with bony beanie";let n=new Tt;if(e)n.moveTo(-.3,-.27),n.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),n.quadraticCurveTo(0,.34,.29,.24),n.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),n.quadraticCurveTo(0,-.34,-.3,-.27);else{n.moveTo(-.31,-.225),n.quadraticCurveTo(-.39,-.16,-.34,-.025),n.lineTo(-.41,.17),n.quadraticCurveTo(-.4,.22,-.21,.29),n.quadraticCurveTo(0,.33,.21,.29),n.quadraticCurveTo(.4,.22,.41,.17),n.lineTo(.34,-.025),n.quadraticCurveTo(.39,-.16,.31,-.225);for(let c=7;c>=0;c--){let h=-.31+c*.0775;n.quadraticCurveTo(h+.038,-.285,h,-.225)}}n.closePath();let r=e?.015:-.055,s=e?.13:.14;for(let c of[-1,1]){let h=new pi;h.absellipse(c*s,r,.07,c<0?.065:.057,0,Math.PI*2,!0,c*.18),n.holes.push(h)}let o=new pi;o.moveTo(0,r-.037),o.lineTo(-.023,r-.083),o.quadraticCurveTo(0,r-.075,.023,r-.083),o.closePath(),n.holes.push(o);let a=new pi;a.absellipse(0,e?-.19:-.192,e?.208:.227,e?.064:.042,0,Math.PI*2,!0),n.holes.push(a);let l=yi(new rn(n,{depth:.055,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24}),t);l.position.z=.135,Ni(t,[0,.012,-.035],[e?.355:.37,.235,.16]),Ni(t,[0,-.025,.126],[.325,.265,.008],Ia);for(let c=0;c<7;c++){if(c===1||c===5)continue;let h=yi(new St(.039,c%2?.037:.05,.035),t);h.position.set((c-3)*.053,e?-.147:-.169,.175),h.rotation.z=(c%3-1)*.12}if(e){Hi(t,[[-.3,.19,.19],[-.24,.13,.2],[-.18,.195,.21],[-.11,.095,.21],[-.045,.17,.21],[.025,.085,.21],[.09,.17,.21],[.16,.105,.21],[.23,.19,.2],[.3,.15,.19]],.015);let c=new xe;c.name="Ivory party-hat crest",c.position.set(.02,.285,0),c.rotation.z=-.12,t.add(c);let h=yi(new Qr(.123,.3,32),c);h.position.y=.15;let f=yi(new Qt(.12,.012,8,32),c);f.rotation.x=Math.PI/2;for(let u=0;u<5;u++){let m=u/5*Math.PI*2;Hi(c,[[Math.cos(m)*.12,.005,Math.sin(m)*.12],[Math.cos(m)*.065,.15,Math.sin(m)*.065],[0,.3,0]],.004)}Ni(c,[0,.314,0],[.028,.03,.028]),Hi(t,[[-.2,.27,.15],[-.18,.23,.195],[-.205,.2,.2],[-.18,.17,.2]],.0025).material=Ia}else{for(let u of[-1,1])Hi(t,[[u*.115,.027,.197],[u*.12,.16,.198],[u*.13,.292,.16]],.0035).material=Ia;Hi(t,[[-.37,.01,.17],[-.2,.036,.199],[0,.048,.2],[.2,.036,.199],[.37,.01,.17]],.012);let c=new xe;c.name="Ribbed ivory beanie crest",c.position.y=.3,t.add(c),yi(new en(1,32,16,0,Math.PI*2,0,Math.PI/2),c).scale.set(.235,.235,.2);let f=yi(new Qt(.238,.02,10,40),c);f.rotation.x=Math.PI/2,f.scale.y=.86;for(let u=0;u<10;u++){let m=u/10*Math.PI*2,g=[];for(let y=0;y<=8;y++){let p=y/8*Math.PI/2;g.push([Math.cos(m)*.238*Math.cos(p),.237*Math.sin(p),Math.sin(m)*.203*Math.cos(p)])}Hi(c,g,.006)}}return t}function Y0(i){let e=new xe;if(e.name=["Pudding Figpal skeleton","Sushi Figpal skeleton","Pufferfish skeleton"][i],i===2){let t=b_();t.scale.set(1.25,1.35,1.05),t.position.set(-.16,.035,.055),e.add(t);for(let n=0;n<7;n++){let r=-.05+n*.055;if(Ni(e,[r,0,0],[.028,.021,.02]),n<5)for(let s of[-1,1])Hi(e,[[r,0,0],[r+.026,s*.09,-.01],[r+.014,s*(.22-n*.023),.015]],.01)}for(let n of[-.16,-.08,0,.08,.16])Sl(e,[.29,0,0],[.47,n,0],.009)}else e.add(w_(i));return e}var S_=[[{kind:"femur",x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.9}],[{kind:"ribs",x:.02,y:.4,z:.1,tilt:.3,yaw:-.2,scale:.78},{kind:"spine",x:-.16,y:.4,z:-.08,tilt:-.5,yaw:.4,scale:.75},{kind:"rib",x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}],[{kind:"forearm",x:-.13,y:.42,z:.16,tilt:-.68,yaw:.2,scale:.88},{kind:"jaw",x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}]],T_={femur:Gd,forearm:()=>Gd(!0),rib:W0,ribs:q0,spine:Wd,jaw:X0};function $0(i){let e=new xe;e.name=`Bones floating in canister ${i+1}`;let t=S_[i].map((r,s)=>{let o=T_[r.kind]();return o.scale.multiplyScalar(r.scale),e.add(o),{...r,object:o,phase:i*1.91+s*2.3}});function n(r,s=!1){let o=s?0:r;for(let a of t){let l=a.phase,c=.022,h=.46;a.object.position.set(a.x+c*Math.sin(o*.27+l),a.y+.014*Math.sin(o*.57+l),a.z+.018*Math.cos(o*.23+l)),a.object.rotation.set(.1*Math.sin(o*.19+l),a.yaw+h*Math.sin(o*.17+l),a.tilt+.11*Math.sin(o*.31+l),"YXZ")}}return n(0),{group:e,update:n}}function Z0(i,e){let t=Y0(e);t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.parent.add(t),i.updateWorldMatrix(!0,!0);let n=i.matrixWorld.clone().invert(),r=new Rn,s=new Rn;i.traverse(g=>{g.isMesh&&(g.geometry.computeBoundingBox(),s.copy(g.geometry.boundingBox).applyMatrix4(new Lt().multiplyMatrices(n,g.matrixWorld)),r.union(s))});let o=new Li,a=new Li;function l(g,y){let p=new Map;g.traverse(d=>{if(!d.isMesh)return;let M=x=>{if(!p.has(x)){let _=x.clone();_.onBeforeCompile=x.onBeforeCompile,_.customProgramCacheKey=x.customProgramCacheKey,_.clippingPlanes=[y],_.clipShadows=!0,p.set(x,_)}return p.get(x)};d.material=Array.isArray(d.material)?d.material.map(M):M(d.material)})}l(i,o),l(t,a);let c=r.min.y-.04,h=!1,f=new w;function u(g){i.updateWorldMatrix(!0,!1),f.setFromMatrixPosition(i.matrixWorld),f.y=g,i.worldToLocal(f),c=Math.max(c,Math.min(r.max.y+.04,f.y)),o.set(new w(0,1,0),-c).applyMatrix4(i.matrixWorld),a.copy(o).negate(),h=c>=r.max.y+.015,i.visible=!h,t.visible=c>r.min.y}u(-100);function m(){c=r.min.y-.04,h=!1,u(-100)}return{skeleton:t,update:u,reset:m,get transformed(){return h},get cutHeight(){return c}}}function K0(){let i=new Mo().load(new URL("./assets/open-to-work.png",import.meta.url).href,r=>{Ce.mobile&&Ml(r,256)});i.colorSpace=yt,i.anisotropy=4;let e=new Fe({map:i,transparent:!0,alphaTest:.025,depthWrite:!1,roughness:.86,metalness:0,emissiveMap:i,emissive:16777215,emissiveIntensity:.18}),t=new Mt(.78,.78,48,2),n=t.attributes.position;for(let r=0;r<n.count;r++)n.setZ(r,Math.sqrt(.49**2-n.getX(r)**2));return t.computeVertexNormals(),t.computeBoundingSphere(),()=>{let r=new at(t,e);return r.name="#OPENTOWORK decal on curved tank glass",r.position.y=.7,r.renderOrder=8,r}}function J0(){let i=new xe;i.name="Three suspended Figpals over bubbling green canisters";let e=Math.PI*2,t=193108,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=(Q,se=.78,we=.005)=>new Fe({color:Q,roughness:se,emissive:Q,emissiveIntensity:we}),s=r(1184789,.85,0),o=r(16772534),a=r(16184551),l=r(36072),c=r(15226636),h=r(11022601),f=r(16755746),u=r(16754855),m=r(10214644),g=r(294108),y=r(16765992),p=new mt({color:1053459,side:Tn});p.onBeforeCompile=Q=>{Q.vertexShader=Q.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.009;`)},p.customProgramCacheKey=()=>"figpal-outline-v1";function d(Q,se,we=i,Ie=!1){let be=new at(Q,se);if(be.castShadow=!0,be.receiveShadow=!0,we.add(be),Ie){let U=new at(Q,p);U.name="Ink outline",be.add(U)}return be}function M(Q,se,we,Ie,be=!1){let U=d(new en(1,Ce.mobile?12:24,Ce.mobile?8:16),we,Ie,be);return U.position.set(...Q),U.scale.set(...se),U}function x(Q,se,we,Ie=i){let be=d(new St(...Q),we,Ie);return be.position.set(...se),be}function _(Q,se,we,Ie,be=i,U=!1){let Re=d(new Nt(Q,Q,se,Ce.mobile?16:48,1,U),Ie,be);return Re.position.set(...we),Re}function R(Q,se,we,Ie=i){let be=new Yt(Q.map(U=>new w(...U)));return d(new un(be,Math.max(12,Q.length*(Ce.mobile?2:5)),se,Ce.mobile?4:6,!1),we,Ie)}function b(Q,se,we,Ie,be=i){let U=new w(...Q),Re=new w(...se),oe=Re.clone().sub(U),fe=_(we,oe.length(),U.clone().add(Re).multiplyScalar(.5).toArray(),Ie,be);return fe.quaternion.setFromUnitVectors(new w(0,1,0),oe.normalize()),fe}function T(Q,se,we,Ie,be=i){let U=d(new Qt(Q,se,Ce.mobile?5:8,Ce.mobile?32:64),Ie,be);return U.rotation.x=Math.PI/2,U.position.y=we,U}function P(Q,se,we,Ie,be=.035){let U=new rn(Q,{depth:se-be*2,bevelEnabled:!0,bevelSize:be,bevelThickness:be,bevelSegments:Ce.mobile?1:3,steps:1,curveSegments:Ce.mobile?8:16});return U.translate(0,0,-se/2+be),d(U,we,Ie,!0)}function O(Q,se,we,Ie=.105,be="worried"){let U=new xe;U.name=`${be} expression`,Q.add(U);for(let Re of[-1,1])M([Re*Ie,se,we],[.022,.031,.013],s,U),R([[Re*(Ie+.035),se+.041,we+.004],[Re*Ie,se+.055,we+.007],[Re*(Ie-.035),se+.074,we+.007]],.01,s,U);be==="afraid"?M([0,se-.075,we+.003],[.026,.038,.012],s,U):R([[-.052,se-.091,we],[0,se-.06,we+.005],[.052,se-.091,we]],.012,s,U)}function v(){let Q=new xe;Q.name="Party-hat pudding Figpal";let se=new Tt;se.moveTo(-.3,-.27),se.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),se.quadraticCurveTo(0,.34,.29,.24),se.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),se.quadraticCurveTo(0,-.34,-.3,-.27),P(se,.37,f,Q,.035);let we=new Tt;we.moveTo(-.29,.25),we.quadraticCurveTo(0,.34,.29,.25),we.lineTo(.3,.13),we.quadraticCurveTo(.28,.1,.22,.16),we.lineTo(.15,.055),we.quadraticCurveTo(.13,.035,.08,.115),we.lineTo(.01,.045),we.quadraticCurveTo(-.02,.028,-.09,.12),we.lineTo(-.17,.065),we.quadraticCurveTo(-.2,.05,-.22,.16),we.lineTo(-.3,.13),we.closePath();let Ie=P(we,.025,o,Q,.006);Ie.position.z=.191,O(Q,-.045,.222);for(let ze of[-1,1])M([ze*.24,-.085,.206],[.045,.028,.012],u,Q);let be=new xe;be.position.set(.02,.285,0),be.rotation.z=-.12,be.scale.setScalar(.6),Q.add(be);let U=document.createElement("canvas");U.width=512,U.height=256;let Re=U.getContext("2d");Re.fillStyle="#ffd62d",Re.fillRect(0,0,512,256),Re.fillStyle="#0088ea";for(let ze=0;ze<4;ze++)for(let it=0;it<7;it++)Re.beginPath(),Re.ellipse(it*85+ze%2*42,30+ze*67,18,14,0,0,e),Re.fill();let oe=new zt(U);oe.colorSpace=yt;let fe=new Fe({map:oe,roughness:.82}),Ue=d(new Qr(.205,.5,48),fe,be,!0);Ue.position.y=.25,T(.205,.009,0,s,be),M([0,.515,0],[.042,.045,.041],l,be);for(let ze=0;ze<8;ze++){let it=ze/8*e;b([0,.515,.005],[Math.cos(it)*.07,.515+Math.sin(it)*.07,.006],.012,l,be)}return{object:Q}}function S(){let Q=new xe;Q.name="Orange-beanie sushi Figpal";let se=new Tt;se.moveTo(-.32,-.035),se.quadraticCurveTo(-.38,-.11,-.31,-.2);for(let fe=0;fe<8;fe++){let Ue=-.31+fe*.0775;se.quadraticCurveTo(Ue+.038,-.285,Ue+.0775,-.225)}se.quadraticCurveTo(.39,-.13,.32,-.035),se.quadraticCurveTo(0,.035,-.32,-.035),P(se,.43,a,Q,.025);let we=new Tt;we.moveTo(-.37,-.015),we.lineTo(-.41,.17),we.quadraticCurveTo(-.4,.22,-.21,.29),we.quadraticCurveTo(0,.33,.21,.29),we.quadraticCurveTo(.4,.22,.41,.17),we.lineTo(.37,-.015),we.quadraticCurveTo(0,.055,-.37,-.015),P(we,.43,y,Q,.022);let Ie=new Tt;Ie.moveTo(-.12,.022),Ie.lineTo(-.13,.31),Ie.quadraticCurveTo(0,.33,.13,.31),Ie.lineTo(.12,.022),Ie.closePath();let be=P(Ie,.44,s,Q,.006);be.position.z=.008,O(Q,-.1,.253,.1,"afraid");for(let fe=0;fe<16;fe++){let Ue=fe/16*e;M([Math.cos(Ue)*.29,-.18+Math.sin(Ue)*.025,Math.sin(Ue)*.17],[.031,.022,.015],a,Q)}let U=new xe;U.position.y=.3,Q.add(U),d(new en(1,32,16,0,e,0,Math.PI/2),c,U,!0).scale.set(.235,.235,.2);for(let fe=0;fe<10;fe++){let Ue=fe/10*e,ze=[];for(let it=0;it<=14;it++){let Et=.08+it/14*(Math.PI/2-.08);ze.push([Math.sin(Et)*Math.cos(Ue)*.238,Math.cos(Et)*.237,Math.sin(Et)*Math.sin(Ue)*.204])}R(ze,.006,h,U)}let oe=_(.258,.065,[0,.002,0],c,U);oe.scale.z=.86,T(.26,.009,-.03,s,U).scale.y=.86,T(.26,.008,.034,s,U).scale.y=.86;for(let fe=0;fe<30;fe++){let Ue=fe/30*e;b([Math.cos(Ue)*.259,-.025,Math.sin(Ue)*.224],[Math.cos(Ue)*.259,.027,Math.sin(Ue)*.224],.0045,h,U)}return{object:Q}}function N(){let Q=new xe;Q.name="Propeller-hat pufferfish Figpal",M([0,0,0],[.335,.33,.25],m,Q,!0);let se=new Tt;se.moveTo(.26,.03),se.quadraticCurveTo(.34,.06,.4,.16),se.quadraticCurveTo(.49,.23,.5,.06),se.quadraticCurveTo(.51,-.11,.43,-.13),se.lineTo(.33,-.05),se.closePath(),P(se,.11,m,Q,.02);for(let U=0;U<3;U++)R([[.38,-.025+U*.04,.078],[.465,-.075+U*.085,.078]],.012,g,Q);for(let U of[-1,1]){let Re=M([U*.303,-.02,.13],[.065,.1,.035],m,Q,!0);Re.rotation.z=U*.25;for(let oe=0;oe<3;oe++)R([[U*.3,-.06+oe*.04,.168],[U*.338,-.075+oe*.05,.16]],.01,g,Q)}O(Q,.015,.252,.09,"worried");for(let U=0;U<11;U++){let Re=Math.PI*1.03+U/10*Math.PI*.9,oe=Math.cos(Re)*.26,fe=Math.sin(Re)*.25,Ue=.25*Math.sqrt(Math.max(.04,1-(oe/.335)**2-(fe/.33)**2))+.008;R([[oe,fe,Ue],[oe+.008,fe-.027,Ue]],.011,g,Q)}for(let U=0;U<7;U++){let Re=.15+U/6*Math.PI*.88;b([Math.cos(Re)*.31,Math.sin(Re)*.31,0],[Math.cos(Re)*.37,Math.sin(Re)*.37,0],.012,g,Q)}let we=new xe;we.position.set(0,.275,0),Q.add(we);let Ie=[r(15746581),y,r(4802281),y];for(let U=0;U<4;U++)d(new en(1,12,12,U*e/4,e/4,0,Math.PI/2),Ie[U],we).scale.set(.215,.2,.215);T(.218,.011,0,s,we),b([0,.2,0],[0,.27,0],.012,a,we);let be=new xe;be.position.y=.275,we.add(be),M([0,0,0],[.025,.018,.025],a,be);for(let U of[-1,1])M([U*.066,0,0],[.083,.012,.029],a,be);return{object:Q,propeller:be}}let W=xi(14802384),$=xi(9606540),ee=xi(15065300),X=xi(14012614);X.bumpScale=7e-4,X.envMapIntensity=.85;let z=new Fe({color:1382417,roughness:.29,metalness:.08}),ae=[];for(let Q=0;Q<=12;Q++){let se=Q/12*Math.PI;ae.push(new w(Math.cos(se)*.015,.01+Math.sin(se)*.015,0))}for(let Q=0;Q<=12;Q++){let se=Math.PI+Q/12*Math.PI;ae.push(new w(Math.cos(se)*.015,-.01+Math.sin(se)*.015,0))}let he=new un(new Yt(ae,!0),Ce.chainSegments,.0048,Ce.chainRadialSegments,!0),F=new gt,te=new w(0,1,0),J=new dt;function ce(Q,se,we=null){let Ie=new Yt(Q.map(fe=>new w(...fe))),be=Ie.getLength(),U=we??Math.max(2,Math.ceil(be/.033)),Re=new hn(he,X,U);Re.name="Interlocking steel chain links",Re.castShadow=!0,Re.receiveShadow=!0,Re.frustumCulled=!1,se.add(Re);for(let fe=0;fe<U;fe++)Re.setColorAt(fe,new pt().setRGB(.67+n()*.3,.58+n()*.3,.45+n()*.34));function oe(fe,Ue){let ze=new w(...fe),it=new w(...Ue),Et=it.clone().sub(ze),Wt=Et.length(),xt=Math.min(U,Math.max(2,Math.ceil(Wt/.033)));Re.count=xt,Et.normalize();for(let Pt=0;Pt<xt;Pt++)F.position.copy(ze).lerp(it,Pt/(xt-1)),F.quaternion.setFromUnitVectors(te,Et),J.setFromAxisAngle(te,(Pt%2?Math.PI/2:0)+Math.sin(Pt*7.17)*.07),F.quaternion.multiply(J),F.scale.setScalar(1),F.updateMatrix(),Re.setMatrixAt(Pt,F.matrix);Re.instanceMatrix.needsUpdate=!0}if(we)Re.instanceMatrix.setUsage(yn),oe(Q[0],Q.at(-1));else for(let fe=0;fe<U;fe++){let Ue=fe/(U-1);F.position.copy(Ie.getPointAt(Ue)),F.quaternion.setFromUnitVectors(te,Ie.getTangentAt(Ue)),J.setFromAxisAngle(te,(fe%2?Math.PI/2:0)+Math.sin(fe*7.17)*.07),F.quaternion.multiply(J),F.scale.setScalar(1),F.updateMatrix(),Re.setMatrixAt(fe,F.matrix)}return{object:Re,setPoints:oe}}let V=k0(),ie=K0(),{glass:k,haze:B,fluid:G,liquidTop:de,foam:Ee,bubble:De,ripple:K,waterTime:I}=V,pe=[],ye=[],ge=[],ve=[],Le=new gt,Se=[{x:-3.05,z:-1.05,height:2.02,winchY:2.8},{x:-2.85,z:.3,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.6,winchY:2.38}];for(let Q=0;Q<Se.length-1;Q++){let se=Se[Q],we=Se[Q+1];b([se.x,3.065,se.z],[we.x,3.065,we.z],.052,W)}let H=[v,S,N];for(let Q=0;Q<3;Q++){let{x:se,z:we,height:Ie,winchY:be}=Se[Q],U=new xe;U.position.set(se,.012,we),U.name=`Green bubbling canister ${Q+1}`,i.add(U),_(.515,.16,[0,.1,0],W,U),_(.46,.035,[0,.025,0],$,U);for(let Ye=0;Ye<8;Ye++){let $e=Ye/8*e;M([Math.cos($e)*.49,.15,Math.sin($e)*.49],[.022,.022,.022],ee,U)}let Re=_(.485,1.02,[0,.72,0],k,U,!0);Re.castShadow=!1,Re.renderOrder=6;let oe=_(.487,1.02,[0,.72,0],B,U,!0);oe.name="Condensation, mineral streaks and algae tide marks",oe.castShadow=!1,oe.renderOrder=7,U.add(ie());let fe=_(.444,.865,[0,.64,0],G,U,!0);fe.castShadow=!1,fe.renderOrder=2;let Ue=$0(Q);U.add(Ue.group);for(let Ye of Ue.group.children)Zn(Ye,{minObjects:2,dispose:!1});_(.444,.018,[0,.215,0],de,U);for(let Ye of[.225,1.235])T(.484,.036,Ye,W,U),T(.454,.01,Ye-.018,$,U);for(let Ye of[.15,2.24,4.34]){let $e=Math.cos(Ye)*.485,jn=Math.sin(Ye)*.485;b([$e,.22,jn],[$e,1.23,jn],.021,W,U)}for(let Ye of[-1,1])R([[Ye*.47,.96,0],[Ye*.58,.96,0],[Ye*.58,.74,0],[Ye*.48,.74,0]],.022,W,U);let ze=new fr(0,.444,Ce.mobile?32:48,Ce.mobile?6:10);ze.rotateX(-Math.PI/2);let it=d(ze,de,U);it.position.y=1.074,it.castShadow=!1,it.renderOrder=4,T(.441,.006,1.075,de,U).renderOrder=4;let Et=Array.from({length:Ce.mobile?18:48},()=>({x:(n()-.5)*.61,z:(n()-.5)*.61,r:.007+n()**2*.023,phase:n(),speed:.15+n()*.17})),Wt=new hn(new en(1,12,8),De,Et.length);Wt.name="Rising liquid bubbles",Wt.instanceMatrix.setUsage(yn),Wt.frustumCulled=!1,Wt.renderOrder=3,U.add(Wt);let xt=[];for(let Ye=0;Ye<(Ce.mobile?6:24);Ye++){let $e=n()*e,jn=Ye<18?.4+n()*.025:n()*.34,Gt=.006+n()*.016,Ln=M([Math.cos($e)*jn,1.074,Math.sin($e)*jn],[Gt,Gt*.65,Gt],Ee,U);Ln.castShadow=!1,Ln.renderOrder=5,xt.push({mesh:Ln,baseRadius:Gt,phase:n()*e})}let Pt=[];for(let Ye=0;Ye<(Ce.mobile?2:5);Ye++){let $e=d(new fr(.96,1,Ce.mobile?20:40),K.clone(),U);$e.rotation.x=-Math.PI/2,$e.position.set((n()-.5)*.45,1.078,(n()-.5)*.45),$e.castShadow=!1,$e.renderOrder=5,Pt.push({mesh:$e,phase:n()})}let an=document.createElement("canvas");an.width=256,an.height=128;let dn=an.getContext("2d");dn.fillStyle="#bec39f",dn.fillRect(0,0,256,128),dn.fillStyle="#242c22",dn.font="bold 67px monospace",dn.textAlign="center",dn.fillText(`0${Q+1}`,128,87);let sr=new zt(an);sr.colorSpace=yt;let ci=d(new Mt(.17,.085),new Fe({map:sr,roughness:.9}),U);ci.position.set(0,.115,.517),ci.castShadow=!1;for(let Ye=0;Ye<5;Ye++){let $e=x([.065,.065,.007],[-.23+Ye*.115,.12,.5],Ye%2?s:r(10064462,.85,0),U);$e.rotation.z=-.45}ci.position.z=.52;let or=_(.064,.03,[.32,1.19,.37],W,U);or.rotation.x=Math.PI/2,d(new Ui(.052,24),o,U).position.set(.32,1.19,.391),R([[.32,1.19,.395],[.3,1.219,.395]],.003,s,U);let et=new xe;et.name=`Tank ${Q+1} drain valve`,et.position.set(.3,.29,.43),et.userData.valveIndex=Q,U.add(et);let rt=_(.042,.19,[0,0,0],W,et);rt.rotation.x=Math.PI/2,R([[0,0,.045],[0,-.035,.16],[0,-.1,.23]],.033,W,et);let ct=new gt;ct.position.set(0,-.1,.23),et.add(ct);let _t=d(new fr(.024,.034,20),W,et);_t.position.copy(ct.position),_t.rotation.x=.6;let Oe=d(new Ui(.024,20),$,et);Oe.position.copy(ct.position),Oe.position.z-=.001,Oe.rotation.x=.6,b([0,0,.01],[0,.075,.11],.012,W,et);let lt=new xe;lt.name="Spinning red drain handwheel",lt.position.set(0,.075,.12),et.add(lt),d(new Qt(.088,.01,8,32),h,lt);for(let Ye=0;Ye<3;Ye++){let $e=Ye/3*e;b([0,0,0],[Math.cos($e)*.084,Math.sin($e)*.084,0],.007,h,lt)}let In=_(.018,.028,[0,0,0],ee,lt);In.rotation.x=Math.PI/2;let Zt=d(new en(.102,12,8),new mt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),lt);Zt.castShadow=!1,ge.push({object:et,outlet:ct,setOpen(Ye){lt.rotation.z=-Ye*Math.PI*4,lt.position.z=.12+Ye*.018}});let mn=new An(7052325,.58,1.7,2);mn.position.set(0,.85,0),mn.userData.mobileEssential=Q===1,U.add(mn),Ce.mobile&&(mn.visible=Q===1),ye.push({surface:it,bubbles:Wt,bubbleData:Et,foam:xt,ripples:Pt,floatingBones:Ue,phase:Q*1.7});let L=Math.atan2(1.85221-se,3.1149-we);U.rotation.y=L;let j=new xe;j.name=`Chain hoist ${Q+1}`,j.position.set(se,0,we),j.rotation.y=L,i.add(j),x([.4,.05,.34],[0,3.13,0],W,j);for(let Ye of[-1,1])b([Ye*.16,3.12,0],[Ye*.16,be+.1,0],.023,W,j),M([Ye*.16,3.12,.08],[.026,.026,.026],ee,j);let le=new xe;le.name=`Winch ${Q+1}: lower or raise Figpal`,le.position.y=be,le.userData.hoistIndex=Q,j.add(le),x([.46,.12,.3],[0,.1,-.03],W,le);for(let Ye of[-1,1]){x([.035,.22,.27],[Ye*.191,.012,-.01],W,le);let $e=_(.057,.055,[Ye*.205,0,0],z,le);$e.rotation.z=Math.PI/2;for(let jn of[-.073,.093])for(let Gt of[-.106,.096]){let Ln=d(new Nt(.013,.013,.018,6),ee,le);Ln.position.set(Ye*.215,jn,Gt),Ln.rotation.z=Math.PI/2}}x([.105,.09,.11],[.3,.15,-.035],$,le),R([[.3,.18,.01],[.38,.21,.06],[.43,.12,.1],[.4,-.04,.07]],.008,z,le);let ue=document.createElement("canvas");ue.width=256,ue.height=128;let ne=ue.getContext("2d");ne.fillStyle="#817653",ne.fillRect(0,0,256,128),ne.fillStyle="#2a2b24",ne.font="bold 22px monospace",ne.fillText("CHAIN HOIST",15,30),ne.font="18px monospace",ne.fillText("250 KG / 1978",15,62),ne.fillText("SERVICE OVERDUE",15,103);for(let Ye=0;Ye<90;Ye++)ne.fillStyle=Ye%2?"rgba(42,25,12,.48)":"rgba(170,156,116,.7)",ne.fillRect(n()*256,n()*128,n()*17,n()*3);let Ne=new zt(ue);Ne.colorSpace=yt;let We=d(new Mt(.25,.1),new Fe({map:Ne,roughness:.87}),le);We.position.set(-.005,.1,.124),We.rotation.z=.028;let Ge=new xe;Ge.rotation.z=Math.PI/2,le.add(Ge);let je=new xe;je.name="Rotating chain sprocket",Ge.add(je),_(.1,.28,[0,0,0],$,je);for(let Ye of[-1,1]){_(.136,.026,[0,Ye*.16,0],W,je);for(let $e=0;$e<12;$e++){let jn=$e/12*e;x([.026,.03,.032],[Math.cos(jn)*.13,Ye*.16,Math.sin(jn)*.13],ee,je)}}let ht=[];for(let Ye=0;Ye<=120;Ye++){let $e=Ye/120*e*4;ht.push([Math.cos($e)*.106,-.1+Ye/120*.2,Math.sin($e)*.106])}ce(ht,je).object.name="Greasy chain wound around the drum";let ft=_(.105,.24,[.3,.015,-.04],$,le);ft.rotation.z=Math.PI/2;for(let Ye=0;Ye<6;Ye++){let $e=_(.115,.009,[.215+Ye*.033,.015,-.04],W,le);$e.rotation.z=Math.PI/2}let tt=new xe;tt.position.set(-.22,0,0),le.add(tt),b([0,0,0],[0,-.13,0],.014,W,tt),b([0,-.13,0],[-.09,-.13,0],.021,$,tt);let Dt=new An(12371885,.4,.85,2);Dt.position.set(-.24,.12,.36),le.add(Dt),Ce.mobile&&(Dt.visible=!1),M([0,.17,.28],[.018,.011,.012],new mt({color:7767659}),le);let bt=new xe;bt.name=`Suspended Figpal ${Q+1}`,bt.position.y=Ie,j.add(bt);let kt=H[Q]();kt.object.scale.setScalar(.62),kt.object.rotation.z=(Q-1)*.035,bt.add(kt.object);let Vt=Z0(kt.object,Q);Zn(kt.object,{exclude:[kt.propeller],minObjects:2,dispose:!1}),Vt.skeleton.visible=!0,Zn(Vt.skeleton,{minObjects:2,dispose:!1}),Vt.skeleton.visible=!1;let It=new gt;It.position.set(0,.5,0),bt.add(It),ve.push(It),b([-.22,.45,0],[.22,.45,0],.019,W,bt);let ot=d(new Qt(.045,.01,6,18,Math.PI*1.65),ee,bt);ot.position.set(0,.49,0),ot.rotation.z=-.5,b([-.028,.476,.008],[.016,.511,.008],.004,$,bt);for(let Ye of[-1,1])ce([[Ye*.21,.45,0],[Ye*.245,.11,0],[Ye*.23,-.12,.015],[Ye*.16,-.205,.04],[0,-.222,.045]],bt);let vn=ce([[0,be-.1,.025],[0,Ie+.52,0]],j,72),Bt=ce([[-.1,be-.01,-.11],[-.11,be-.36,-.12],[-.16,be-.4,-.1],[-.2,be-.05,-.08]],j);Bt.object.name="Winch return chain loop";let sn=new xe;sn.name=`Canister ${Q+1} winch control`,sn.position.set(.39,.85,.4),sn.rotation.y=.35,sn.userData.hoistIndex=Q,U.add(sn),x([.12,.21,.07],[0,0,0],$,sn),M([0,.047,.047],[.024,.024,.015],r(8072739,.6,0),sn),M([0,-.047,.047],[.024,.024,.015],r(6913097,.6,0),sn),R([[.39,.95,.4],[.44,1.02,.35],[.46,1.27,.12],[.44,be-.13,.06],[.24,be,0]],.007,$,j);for(let Ye of[je,tt,sn,lt])Zn(Ye,{minObjects:2,allowInteractiveRoot:!0,dispose:!1});Zn(le,{exclude:[Ge,tt],minObjects:2,allowInteractiveRoot:!0,dispose:!1}),Zn(j,{exclude:[bt,le],minObjects:2,dispose:!1}),Zn(U,{exclude:[it,Ue.group,...xt.map(Ye=>Ye.mesh),...Pt.map(Ye=>Ye.mesh)],minObjects:2,dispose:!1}),pe.push({rig:j,hanger:bt,transformation:Vt,captive:kt.object,propeller:kt.propeller,drum:je,crank:tt,loadChain:vn,height:Ie,homeHeight:Ie,targetHeight:Ie,winchY:be,phase:Q*2.1,lowered:!1})}let A=new An(11712685,.75,3.8,2);A.position.set(-1.75,2.75,-.2),i.add(A);let re=()=>{let Q=pe.findIndex(se=>Math.abs(se.height-se.targetHeight)>.005);return Q<0?null:Q};function _e(Q){let se=pe[Q],we=re();return!se||we!==null&&we!==Q?!1:(se.lowered=!0,se.targetHeight=.65,!0)}function Ae(Q){let se=pe[Q],we=re();return!se||we!==null&&we!==Q?null:(se.lowered=!se.lowered,se.targetHeight=se.lowered?.65:se.homeHeight,`Figpal ${Q+1}${se.transformation.transformed?"'s bones":""} ${se.lowered?"lowering into the canister":"rising above the canister"}.`)}function Te(Q,se,we){let Ie=pe[Q];Ie.rig.localToWorld(se.set(0,1.65,2.7)),Ie.rig.localToWorld(we.set(0,Math.max(1.03,Ie.height*.55+.59),0))}function Je(){for(let Q of pe)Q.lowered=!1,Q.height=Q.targetHeight=Q.homeHeight,Q.hanger.position.set(0,Q.homeHeight,0),Q.hanger.rotation.z=0,Q.loadChain.setPoints([0,Q.winchY-.1,.025],[0,Q.homeHeight+.52,0]),Q.drum.rotation.y=Q.crank.rotation.x=0,Q.transformation.reset()}let Me=0,He={};function Ke(Q,se=!1){let we=Math.max(0,Math.min(.12,Q-Me));Me=Q;let Ie=se?0:Q;I.value=Ie;for(let be of pe){let U=be.targetHeight-be.height;be.height=se?be.targetHeight:be.height+Math.sign(U)*Math.min(Math.abs(U),we*.15),G0(Q,be.height,be.winchY,be.phase,se,He),be.hanger.position.set(He.x,He.y,0),be.hanger.rotation.z=He.angle,be.loadChain.setPoints([0,be.winchY-.1,.025],[He.hookX,He.hookY,0]),be.drum.rotation.y=(be.homeHeight-be.height)/.1,be.crank.rotation.x=(be.homeHeight-be.height)/.1,be.transformation.update(1.086),be.propeller&&(be.propeller.rotation.y=Ie*.18)}for(let be of ye){be.floatingBones.update(Q,se);let U=be.surface.geometry.attributes.position,Re=be.surface.geometry.attributes.normal;for(let oe=0;oe<U.count;oe++){let fe=U.getX(oe),Ue=U.getZ(oe),ze=fe*17+Ie*1.4+be.phase,it=Ue*14-Ie*1.1,Et=(fe+Ue)*28-Ie*2.1;U.setY(oe,Math.sin(ze)*Math.cos(it)*.0035+Math.sin(Et)*.0012);let Wt=Math.cos(ze)*Math.cos(it)*.0595+Math.cos(Et)*.0336,xt=-Math.sin(ze)*Math.sin(it)*.049+Math.cos(Et)*.0336,Pt=Math.hypot(Wt,1,xt);Re.setXYZ(oe,-Wt/Pt,1/Pt,-xt/Pt)}U.needsUpdate=!0,Re.needsUpdate=!0,be.bubbleData.forEach((oe,fe)=>{let Ue=(Ie*oe.speed+oe.phase)%1;Le.position.set(oe.x+Math.sin(Ie*1.3+fe)*.012,.25+Ue*.84,oe.z+Math.cos(Ie+fe)*.009),Le.scale.setScalar(oe.r*(.65+Ue*.5)),Le.updateMatrix(),be.bubbles.setMatrixAt(fe,Le.matrix)}),be.bubbles.instanceMatrix.needsUpdate=!0;for(let oe of be.foam){let fe=(Math.sin(Ie*2.4+oe.phase)+1)*.5;oe.mesh.scale.set(oe.baseRadius,oe.baseRadius*(.12+fe*.28),oe.baseRadius)}for(let oe of be.ripples){let fe=(Ie*.48+oe.phase)%1,Ue=.012+fe*.075;oe.mesh.scale.setScalar(Ue),oe.mesh.visible=fe<.88,oe.mesh.material.opacity=(1-fe)*.16}}}Ke(0);function Pe(Q){for(let se of[W,$,ee,X,k,G,de,De])se.envMap=Q,se.needsUpdate=!0}function Ve(Q){let se=pe[Q];return!!se&&!se.transformation.transformed}function Qe(Q){let se=pe[Q];return Ve(Q)&&!se.lowered&&Math.abs(se.height-se.homeHeight)<.025}return{group:i,update:Ke,valves:ge,toggleHoist:Ae,lower:_e,getFocusView:Te,count:pe.length,get movingIndex(){return re()},isLowered:Q=>pe[Q]?.lowered??!1,isSubmerged:Q=>!!pe[Q]?.lowered&&pe[Q].height<=.655&&pe[Q].transformation.transformed,canSpeak:Ve,isHanging:Qe,reset:Je,speechAnchors:ve,setEnvironment:Pe}}function Q0(i=[]){let e=i.map(n=>(n.updateWorldMatrix(!0,!1),{inverse:n.matrixWorld.clone().invert(),width:n.geometry.parameters.width/2,depth:n.geometry.parameters.depth/2,top:n.getWorldPosition(new w).y+n.geometry.parameters.height/2})),t=new w;return(n,r)=>{let s=.003;for(let o of e)t.set(n,0,r).applyMatrix4(o.inverse),Math.abs(t.x)<=o.width&&Math.abs(t.z)<=o.depth&&(s=Math.max(s,o.top));return s}}function Xd(i,e){i.updateWorldMatrix(!0,!0);let t=1/0,n=new w,r=new Lt,s=new Lt;function o(a){if(a.userData.ignoreFloorContact)return;let l=a.isMesh&&a.geometry.attributes.position;if(l)for(let c=0;c<(a.isInstancedMesh?a.count:1);c++){a.isInstancedMesh?(a.getMatrixAt(c,r),s.multiplyMatrices(a.matrixWorld,r)):s.copy(a.matrixWorld);for(let h=0;h<l.count;h++)n.fromBufferAttribute(l,h).applyMatrix4(s),t=Math.min(t,n.y-e(n.x,n.z))}for(let c of a.children)o(c)}return o(i),t}function As(i,e=()=>.003){let t=Xd(i,e);if(!Number.isFinite(t))return i;let n=i.getWorldPosition(new w);return n.y+=6e-4-t,i.parent&&i.parent.worldToLocal(n),i.position.copy(n),i.updateWorldMatrix(!1,!0),i.userData.floorProp=!0,i}function Tl(i,e){i.updateWorldMatrix(!0,!1);let t=i.geometry,n=t.attributes.position,r=t.parameters.radialSegments+1,s=i.matrixWorld.clone().invert(),o=new w,a=new w,l=t.parameters.radius;for(let c=0;c<n.count;c+=r){o.set(0,0,0);for(let y=0;y<r-1;y++)o.add(a.fromBufferAttribute(n,c+y).applyMatrix4(i.matrixWorld));o.divideScalar(r-1);let h=e(o.x,o.z),f=1-ke.smoothstep(o.y-h,.055,.15),u=i.userData.anchorStart?ke.smoothstep(c/r,0,3):1,m=i.userData.anchorEnd?ke.smoothstep((n.count-r-c)/r,0,3):1,g=(h+l+6e-4-o.y)*f*u*m;for(let y=0;y<r;y++)a.fromBufferAttribute(n,c+y).applyMatrix4(i.matrixWorld),a.y+=g,a.applyMatrix4(s),n.setXYZ(c+y,a.x,a.y,a.z)}n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere()}function j0(i,e=()=>.003){let t=new xe;t.name="Fallen nursery mobile with four soft animals",t.position.set(-1.05,0,.55);let n=48319,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=document.createElement("canvas");s.width=s.height=512;let o=s.getContext("2d");o.fillStyle="#c6c1ac",o.fillRect(0,0,512,512);for(let k=0;k<7e3;k++){let B=r()*512,G=r()*512;o.strokeStyle=k%2?"rgba(58,52,36,.12)":"rgba(246,236,212,.28)",o.lineWidth=.6,o.beginPath(),o.moveTo(B,G),o.lineTo(B+2,G+3),o.stroke()}for(let k=0;k<45;k++){let B=r()*512,G=r()*512,de=8+r()*70,Ee=o.createRadialGradient(B,G,0,B,G,de);Ee.addColorStop(0,"rgba(63,52,31,.15)"),Ee.addColorStop(1,"rgba(63,52,31,0)"),o.fillStyle=Ee,o.fillRect(B-de,G-de,de*2,de*2)}function a(k){let B=new zt(k);return B.colorSpace=yt,B.anisotropy=4,B}let l=a(s);function c(k,B=l){return new $t({color:k,map:B,bumpMap:l,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:12433832,sheenRoughness:.95})}let h=c(13801630),f=c(14792108),u=c(7839145),m=c(5270656),g=c(14132309),y=c(15128233),p=c(3420203),d=new Fe({color:6313803,roughness:1}),M=new Fe({color:10525568,roughness:1}),x=new Fe({color:1645337,roughness:.48}),_=new Fe({color:12762273,map:l,roughness:.68,bumpMap:l,bumpScale:.001}),R=new Fe({color:8159861,metalness:.65,roughness:.56}),b=document.createElement("canvas");b.width=b.height=512;let T=b.getContext("2d");T.drawImage(s,0,0),T.fillStyle="#343027";for(let k=0;k<12;k++){let B=k*45-15,G=k%2*30;T.beginPath(),T.moveTo(B,G),T.bezierCurveTo(B+55,105,B+8,180,B+51,268),T.lineTo(B+23,238),T.bezierCurveTo(B-12,148,B+26,93,B-9,G),T.fill(),T.beginPath(),T.moveTo(B+25,512),T.bezierCurveTo(B+69,417,B+6,367,B+45,285),T.lineTo(B+24,314),T.bezierCurveTo(B-11,395,B+41,438,B-3,512),T.fill()}let P=c(14262365,a(b)),O=new en(1,24,16);function v(k,B,G=t){let de=new at(k,B);return de.castShadow=!0,de.receiveShadow=!0,G.add(de),de}function S(k,B,G,de){let Ee=v(O,G,de);return Ee.position.set(...k),Ee.scale.set(...B),Ee}function N(k,B,G,de=t){return v(new un(new Yt(k.map(Ee=>new w(...Ee))),Math.max(20,k.length*6),B,6,!1),G,de)}function W(k,B,G,de,Ee=t){let De=new w(...k),K=new w(...B),I=K.clone().sub(De),pe=v(new Nt(G,G,I.length(),12),de,Ee);return pe.position.copy(De).add(K).multiplyScalar(.5),pe.quaternion.setFromUnitVectors(new w(0,1,0),I.normalize()),pe}function $(k,B,G,de=t){let Ee=v(new St(...k),G,de);return Ee.position.set(...B),Ee}function ee(k,B,G,de){let Ee=new Tt;Ee.moveTo(-.5,0),Ee.quadraticCurveTo(-.48,.44,0,1),Ee.quadraticCurveTo(.49,.49,.5,0),Ee.quadraticCurveTo(0,-.1,-.5,0);let De=new rn(Ee,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});De.translate(0,0,-.09);let K=v(De,G,de);return K.scale.set(...B),K.position.set(...k),K}function X(k,B,G=.092,de=.047){for(let Ee of[-1,1])S([Ee*de,G,B],[.009,.012,.007],x,k)}function z(k){let B=new xe;B.name=`${k} mobile animal`;let G=k==="Pig"?h:k==="Elephant"?u:k==="Tiger"?P:g,de=S([0,.065,-.025],[.112,.091,.154],G,B);de.name="Soft body resting on the floor";for(let K of[-1,1])S([K*.047,.073,.08],[.077,.09,.09],G,B);N([[0,.13,.116],[0,.092,.166],[0,.036,.16],[0,.008,.136]],.0018,d,B);for(let K of[-1,1])for(let I of[-.106,.1]){let pe=S([K*.11,.002,I],[.043,.043,.062],G,B);if(pe.rotation.z=K*.28,S([K*.134,-.007,I+.015],[.021,.03,.041],k==="Pig"?p:k==="Elephant"?m:f,B),k==="Tiger"||k==="Fox")for(let ye=0;ye<3;ye++)S([K*.151,-.012+(ye-1)*.014,I+.034],[.004,.004,.006],p,B)}let Ee=S([0,.102,-.17],k==="Elephant"?[.097,.094,.094]:[.09,.083,.083],G,B);if(k==="Pig"){S([0,.08,-.244],[.049,.032,.024],f,B);for(let I of[-1,1])S([I*.019,.082,-.267],[.006,.009,.003],p,B);for(let I of[-1,1]){let pe=ee([I*.061,.153,-.177],[.072,.083,.09],h,B);pe.rotation.z=-I*.35}let K=[];for(let I=0;I<=45;I++){let pe=I/45*Math.PI*3.9,ye=.025*(1-I/70);K.push([Math.sin(pe)*ye,.115+Math.cos(pe)*ye,.167+I/45*.028])}N(K,.0065,f,B),X(B,-.242,.122)}else if(k==="Elephant"){for(let K of[-1,1])S([K*.098,.098,-.16],[.071,.08,.027],u,B),S([K*.113,.101,-.184],[.047,.055,.009],m,B);N([[0,.099,-.24],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,u,B),X(B,-.248,.127,.043),N([[0,.122,.15],[.025,.115,.185],[.042,.08,.199]],.006,m,B),S([.044,.077,.2],[.013,.018,.012],m,B)}else{for(let K of[-1,1]){let I=ee([K*.057,.155,-.172],[.067,.071,.1],G,B);I.rotation.z=-K*.26,ee([K*.057,.162,-.184],[.038,.045,.055],f,B)}for(let K of[-1,1])S([K*.025,.076,-.235],[.035,.027,.023],y,B);if(S([0,.091,-.26],[.015,.011,.011],p,B),X(B,-.241,.124,.044),k==="Tiger")N([[0,.134,.15],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,P,B),S([.075,.129,.182],[.014,.015,.016],p,B);else{let K=S([.042,.13,.191],[.058,.061,.131],g,B);K.rotation.x=-.45,K.rotation.z=-.25;let I=S([.039,.182,.271],[.045,.046,.061],y,B);I.rotation.x=-.45}}for(let K of[-1,1])N([[K*.1,.1,.07],[K*.113,.065,-.02],[K*.094,.092,-.1]],.0015,d,B);let De=v(new Qt(.014,.004,6,16,Math.PI*1.75),M,B);return De.position.set(0,.158,-.065),De.rotation.x=Math.PI/2,{object:B,tab:De,body:de}}function ae(k,B){k.updateWorldMatrix(!0,!0);let G=k.getWorldPosition(new w);G.y-=Xd(B,e)+.006,k.parent.worldToLocal(G),k.position.copy(G),k.updateWorldMatrix(!0,!0);let de=new w,Ee=new Lt;k.traverse(De=>{if(!De.isMesh)return;let K=De.geometry.clone(),I=K.attributes.position;Ee.copy(De.matrixWorld).invert();let pe=!1;for(let ye=0;ye<I.count;ye++){de.fromBufferAttribute(I,ye).applyMatrix4(De.matrixWorld);let ge=e(de.x,de.z)+6e-4;de.y>=ge||(de.y=ge,de.applyMatrix4(Ee),I.setXYZ(ye,de.x,de.y,de.z),pe=!0)}pe?(I.needsUpdate=!0,K.computeVertexNormals(),K.computeBoundingBox(),K.computeBoundingSphere(),De.geometry=K):K.dispose()}),k.userData.floorProp=!0}let he=new xe;he.name="Toppled mobile support",t.add(he),$([.16,.055,.12],[-.6,.0305,.48],_,he),$([.12,.028,.1],[-.6,.0765,.48],_,he),W([-.6,.0565,.48],[-.6,.1425,.48],.012,R,he),S([-.6,.1455,.48],[.043,.012,.02],_,he),N([[-.59,.039,.44],[-.63,.017,.1],[-.48,.017,-.3],[-.2,.02,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,_,he),As(he,e);let F=new xe;F.name="Scuffed mobile music box",F.position.set(0,.116,0),F.rotation.set(.21,0,-.18),t.add(F);let te=v(new Nt(.103,.103,.068,40),_,F),J=v(new Qt(.103,.002,6,40),d,F);J.rotation.x=Math.PI/2;let ce=S([0,.039,0],[.034,.009,.034],g,F);for(let k=0;k<5;k++)$([.03,.002,.002],[-.049+k*.019,.035,.041],d,F);W([0,-.02,-.093],[0,-.02,-.145],.005,R,F),S([0,-.02,-.15],[.026,.012,.005],R,F),t.updateMatrixWorld(!0),As(F,e);let V=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];for(let k of V)k[1]=e(t.position.x+k[0],t.position.z+k[2])+.0076,W([0,F.position.y,0],k,.007,R);for(let k of V){let B=v(new Qt(.014,.003,6,16),R);B.rotation.x=Math.PI/2,B.position.set(k[0],k[1]-.004,k[2])}let ie=[{kind:"Pig",x:.29,z:.35,rear:!0,yaw:-.12,roll:.08,arm:3},{kind:"Tiger",x:-.38,z:.17,rear:!0,yaw:.36,roll:-.12,arm:0},{kind:"Elephant",x:.34,z:-.29,rear:!1,yaw:-.28,roll:-.24,arm:1},{kind:"Fox",x:-.27,z:-.43,rear:!0,yaw:1.12,roll:.2,arm:2}];for(let k of ie){let{object:B,tab:G,body:de}=z(k.kind);B.position.set(k.x,0,k.z),B.scale.setScalar(.88);let Ee=Math.atan2(i.x-(t.position.x+k.x),i.z-(t.position.z+k.z));B.rotation.set(k.kind==="Pig"?-.06:.03,Ee+(k.rear?0:Math.PI)+k.yaw,k.roll,"YXZ"),t.add(B),t.updateMatrixWorld(!0),ae(B,de),t.updateMatrixWorld(!0);let De=t.worldToLocal(G.getWorldPosition(new w)),K=V[k.arm],I=N([K,[K[0]+.06,.024,K[2]+.08],[(K[0]+De.x)/2-.05,.023,(K[2]+De.z)/2+.08],[De.x-.04,.025,De.z+.035],De.toArray()],.0021,M);I.userData.anchorStart=I.userData.anchorEnd=!0,Tl(I,e);let pe=document.createElement("canvas");pe.width=pe.height=64;let ye=pe.getContext("2d"),ge=ye.createRadialGradient(32,32,5,32,32,32);ge.addColorStop(0,"rgba(0,0,0,.65)"),ge.addColorStop(.48,"rgba(0,0,0,.32)"),ge.addColorStop(1,"rgba(0,0,0,0)"),ye.fillStyle=ge,ye.fillRect(0,0,64,64);let ve=new Rn().setFromObject(B),Le=ve.getSize(new w),Se=t.worldToLocal(ve.getCenter(new w)),H=new Mt(Le.x+.05,Le.z+.05,12,12);H.rotateX(-Math.PI/2),H.translate(Se.x,0,Se.z);let A=H.attributes.position;for(let _e=0;_e<A.count;_e++)A.setY(_e,e(t.position.x+A.getX(_e),t.position.z+A.getZ(_e))+2e-4);H.computeVertexNormals();let re=v(H,new mt({map:new zt(pe),transparent:!0,depthWrite:!1}));re.name=`${k.kind} floor contact shadow`,re.castShadow=!1,re.userData.ignoreFloorContact=!0}return t}var So=new Map,qd=31.7;function R_(i){if(So.has(i))return So.get(i);let e=9678115+Math.imul(i,2654435761)>>>0,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=[],r=.65+t()*1.4;for(;r<qd-2;){let s=2+Math.floor(t()*5);for(let o=0;o<s;o++){let a=.028+t()*.072;n.push([r,a,t()*.045,t()>.23]),r+=a+.045+t()*.16}t()<.42&&(n.push([r,.22+t()*.4,.005,!0]),r+=.75),r+=1.3+t()*4.2}return So.size>4&&So.delete(So.keys().next().value),So.set(i,n),n}function A_(i,e=!1){if(e)return[.88,.79];let t=Math.floor(i/qd),n=i-t*qd,r=R_(t);return[0,1].map(s=>{let o=s?.79:.88;for(let a=0;a<r.length;a++){let[l,c,h,f]=r[a];if(s===1&&!f)continue;let u=l+(s?(a%3-1)*.013:0),m=u+c;if(n>=u&&n<m){let g=Math.min((n-u)/.003,(m-n)/.005,1);o=ke.lerp(o,h,Math.max(0,g))}else n>=m&&n<m+.025&&(o*=1+.16*(1-(n-m)/.025))}return o*(.985+.015*Math.sin(i*8.7+s))})}function em(){let i=new xe;i.name="Crooked failing fluorescent fixture",i.position.set(.22,2.98,-.55),i.rotation.set(.02,.12,-.075);let e=xi(9673098),t=xi(15065545),n=new Fe({color:2369569,roughness:.9}),r=new Fe({color:11183498,roughness:.72});function s(g,y,p=[0,0,0]){let d=new at(g,y);return d.position.set(...p),d.castShadow=!0,d.receiveShadow=!0,i.add(d),d}let o=(g,y,p=e)=>s(new St(...g),p,y);function a(g,y,p,d=e){return s(new Nt(g,g,y,16),d,p)}function l(g,y=n,p=.004){return s(new un(new Yt(g.map(d=>new w(...d))),24,p,5,!1),y)}o([1.53,.055,.32],[0,.012,0],t);for(let g of[-1,1]){let y=o([1.53,.08,.016],[0,-.033,g*.157],t);y.rotation.x=g*.25,o([1.46,.006,.012],[0,-.017,g*.121],n)}o([.38,.045,.085],[.12,.055,0],n);for(let g of[-.69,.69]){o([.065,.05,.275],[g,-.02,0],e);for(let y of[-.132,.132]){let p=a(.012,.012,[g,-.051,y]);o([.016,.002,.003],[g,-.058,y],n),p.rotation.z=.05}}let c=[];for(let[g,y]of[-.078,.078].entries()){let p=document.createElement("canvas");p.width=512,p.height=64;let d=p.getContext("2d"),M=d.createLinearGradient(0,0,512,0);M.addColorStop(0,"#29271f"),M.addColorStop(.035,"#5a5948"),M.addColorStop(.09,"#b4b9a0"),M.addColorStop(.19,"#d9dfc4"),M.addColorStop(.77,"#d0d8bd"),M.addColorStop(.93,"#92977e"),M.addColorStop(.98,"#383c32"),M.addColorStop(1,"#272b22"),d.fillStyle=M,d.fillRect(0,0,512,64);for(let b=0;b<170;b++){let T=b*73.29%512,P=b*23.87%64;d.fillStyle="rgba(35,36,24,.12)",d.fillRect(T,P,1+b%5,1)}let x=new zt(p);x.colorSpace=yt,x.center.set(.5,.5),x.rotation=Math.PI/2;let _=new Fe({map:x,emissiveMap:x,emissive:15003084,emissiveIntensity:2,roughness:.27});c.push(_);let R=a(.019,1.34,[0,-.073,y],_);R.rotation.z=Math.PI/2,R.castShadow=!1;for(let b of[-1,1]){let T=a(.021,.035,[b*.657,-.073,y],e);T.rotation.z=Math.PI/2,o([.037,.075,.056],[b*.704,-.045,y],r);for(let P of[-.007,.007]){let O=a(.0025,.024,[b*.684,-.073,y+P],e);O.rotation.z=Math.PI/2}}l([[-.73,.03,y],[-.77,-.01,y],[-.72,-.04,y+.025]],g?n:new Fe({color:7031093,roughness:.8}))}let h=a(.015,.034,[.54,-.035,0],r);h.rotation.x=.08,l([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],e,.004),l([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],n,.006);let f=new An(11647895,.25,1.2,2);f.position.set(0,.1,0),i.add(f);function u(g,y){let p=A_(g,y);return c.forEach((d,M)=>d.emissiveIntensity=p[M]*2.9),f.intensity=(p[0]+p[1])*.2,(p[0]+p[1])/1.67}function m(g){for(let y of[e,t])y.envMap=g,y.needsUpdate=!0}return u(0,!1),{group:i,update:u,setEnvironment:m}}function Rl(i){let e=Math.max(0,Math.ceil(i));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function tm(i=300,e=()=>performance.now()/1e3){let t=null;return{start(){return t!==null?!1:(t=e()+i,!0)},reset(){t=null},get remainingSeconds(){return t===null?i:Math.max(0,Math.ceil(t-e()))},get status(){return t===null?"waiting":e()>=t?"finished":"running"}}}function nm(i,e){let t=new xe;t.name="Five-minute red LED countdown timer",t.position.copy(e),t.position.y=.006,t.rotation.y=Math.atan2(i.x-e.x,i.z-e.z)-ke.degToRad(16),t.scale.setScalar(.72);let n=tm(),r=new xe;r.position.y=.13,r.rotation.x=-.24,t.add(r);let s=document.createElement("canvas");s.width=512,s.height=256;let o=s.getContext("2d");o.fillStyle="#555951",o.fillRect(0,0,512,256);let a=7418,l=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let k=0;k<1800;k++)o.fillStyle=k%4?"rgba(13,16,12,.18)":"rgba(180,171,142,.26)",o.fillRect(l()*512,l()*256,1+l()*4,1+l()*2);for(let k=0;k<35;k++){o.strokeStyle="rgba(194,190,163,.24)",o.lineWidth=.6;let B=l()*512,G=l()*256;o.beginPath(),o.moveTo(B,G),o.lineTo(B+8+l()*39,G+l()*5),o.stroke()}let c=new zt(s);c.colorSpace=yt;let h=new Fe({color:3619894,map:c,bumpMap:c,bumpScale:7e-4,roughness:.82}),f=new Fe({color:527113,roughness:.66}),u=new Fe({color:7828326,metalness:.65,roughness:.68});function m(k,B,G=r){let de=new at(k,B);return de.castShadow=!0,de.receiveShadow=!0,G.add(de),de}function g(k,B,G,de=r){let Ee=m(new St(...k),G,de);return Ee.position.set(...B),Ee}let y=new Tt,p=.59,d=.19,M=.022;y.moveTo(-p/2+M,-d/2),y.lineTo(p/2-M,-d/2),y.quadraticCurveTo(p/2,-d/2,p/2,-d/2+M),y.lineTo(p/2,d/2-M),y.quadraticCurveTo(p/2,d/2,p/2-M,d/2),y.lineTo(-p/2+M,d/2),y.quadraticCurveTo(-p/2,d/2,-p/2,d/2-M),y.lineTo(-p/2,-d/2+M),y.quadraticCurveTo(-p/2,-d/2,-p/2+M,-d/2);let x=new rn(y,{depth:.174,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});x.translate(0,0,-.087),m(x,h),g([.538,.16,.01],[0,0,.096],f);let _=g([.518,.143,.002],[0,0,.11],new $t({color:5511450,transparent:!0,opacity:.09,depthWrite:!1,roughness:.22,clearcoat:1,clearcoatRoughness:.1}));_.castShadow=!1;for(let k of[-.279,.279])for(let B of[-.071,.071]){let G=m(new Nt(.008,.008,.006,12),u);G.rotation.x=Math.PI/2,G.position.set(k,B,.098),g([.01,.0015,.001],[k,B,.102],f)}for(let k of[-.23,.23])for(let B of[-.06,.06])g([.052,.016,.052],[k,.008,B],f,t);for(let k of[-1,1])for(let B=0;B<6;B++)g([.002,.04,.006],[k*.301,-.018,-.061+B*.019],f);let R=document.createElement("canvas");R.width=512,R.height=64;let b=R.getContext("2d");b.font="500 20px monospace",b.fillStyle="#8e8b7a",b.textAlign="center",b.fillText("MIN",128,42),b.fillText("SEC",384,42);let T=new zt(R);T.colorSpace=yt;let P=m(new Mt(.43,.018),new mt({map:T,transparent:!0,depthWrite:!1}));P.position.set(0,.069,.104),P.castShadow=!1;let O=new mt({color:16721943,toneMapped:!1}),v=new mt({color:2295557,toneMapped:!1}),S=new mt({color:16718087,transparent:!0,opacity:.12,depthWrite:!1,blending:Oc,toneMapped:!1}),N=new Tt,W=.066,$=.01,ee=.005;N.moveTo(-W/2,0),N.lineTo(-W/2+ee,$/2),N.lineTo(W/2-ee,$/2),N.lineTo(W/2,0),N.lineTo(W/2-ee,-$/2),N.lineTo(-W/2+ee,-$/2),N.closePath();let X=new nr(N),z=["abcdef","bc","abdeg","abcdg","bcfg","acdfg","acdefg","abc","abcdefg","abcdfg"],ae={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]},he=[];for(let k of Ce.mobile?[]:[-.187,-.081,.081,.187]){let B=new xe;B.position.set(k,-.005,.106),r.add(B);let G=[];for(let[de,[Ee,De,K]]of Object.entries(ae)){let I=m(X,v,B);I.position.set(Ee,De,0),I.rotation.z=K?Math.PI/2:0,I.scale.x=K?.76:1,I.castShadow=!1;let pe=m(X,S,B);pe.position.set(Ee,De,-2e-4),pe.rotation.z=I.rotation.z,pe.scale.set(I.scale.x*1.12,1.9,1),pe.castShadow=!1,G.push({key:de,segment:I,glow:pe})}he.push(G)}for(let k of[-.025,.015]){let B=m(new Ui(.005,16),O);B.position.set(0,k,.106),B.castShadow=!1}let F=new An(16718344,.12,.7,2);F.position.set(0,.06,.16),r.add(F);let te=null,J=null,ce=null;if(Ce.mobile){let k=document.createElement("canvas");k.width=512,k.height=160,J=k.getContext("2d"),ce=new zt(k),ce.colorSpace=yt,ce.generateMipmaps=!1,ce.minFilter=gn,te=m(new Mt(.46,.136),new mt({map:ce,toneMapped:!1})),te.position.set(0,-.005,.108),te.castShadow=!1,F.visible=!1}Zn(t,{minObjects:2,exclude:[...r.children.filter(k=>k.isGroup),te],dispose:!1});let V=-1;function ie(){let k=n.remainingSeconds;if(k!==V){let B=Rl(k).replace(":","");if(J){let G=J;G.fillStyle="#100302",G.fillRect(0,0,512,160),G.shadowColor="#ff1907",[-.187,-.081,.081,.187].forEach((de,Ee)=>{let De=z[Number(B[Ee])];for(let[K,[I,pe,ye]]of Object.entries(ae)){let ge=De.includes(K);G.save(),G.translate(256+(de+I)*1050,85-pe*1050),G.scale(1050,-1050),ye&&G.rotate(Math.PI/2),G.scale(ye?.76:1,1),G.beginPath(),G.moveTo(-W/2,0),G.lineTo(-W/2+ee,$/2),G.lineTo(W/2-ee,$/2),G.lineTo(W/2,0),G.lineTo(W/2-ee,-$/2),G.lineTo(-W/2+ee,-$/2),G.closePath(),G.fillStyle=ge?"#ff3928":"#230705",G.shadowBlur=ge?7:0,G.fill(),G.restore()}}),G.fillStyle="#ff3928";for(let de of[65,105])G.beginPath(),G.arc(256,de,4,0,Math.PI*2),G.fill();G.shadowBlur=0,ce.needsUpdate=!0}he.forEach((G,de)=>{let Ee=z[Number(B[de])];for(let De of G){let K=Ee.includes(De.key);De.segment.material=K?O:v,De.glow.visible=K}}),V=k}return k}return ie(),{group:t,start:()=>n.start(),reset(){n.reset(),ie()},update:ie,get status(){return n.status}}}function Yd(i,e,t,n){let r=n/2,s=r/2;i.save(),i.translate(e,t);function o(a,l){i.fillStyle=l,i.beginPath(),i.moveTo(r,a),i.lineTo(s,a),i.arc(s,a+s,s,-Math.PI/2,Math.PI/2,!0),i.lineTo(r,a+r),i.closePath(),i.fill()}o(0,"#f24e1e"),o(r,"#a259ff"),i.fillStyle="#ff7262",i.beginPath(),i.moveTo(r,0),i.lineTo(r+s,0),i.arc(r+s,s,s,-Math.PI/2,Math.PI/2),i.lineTo(r,r),i.closePath(),i.fill(),i.fillStyle="#1abcfe",i.beginPath(),i.arc(r+s,r+s,s,0,Math.PI*2),i.fill(),i.fillStyle="#0acf83",i.beginPath(),i.moveTo(r,2*r),i.lineTo(r,2*r+s),i.arc(s,2*r+s,s,0,Math.PI*1.5),i.closePath(),i.fill(),i.restore()}function im(i){let e=new xe;e.name="Worn handsaw beside the countdown timer",e.position.copy(i).add(new w(-.34,0,.25)),e.position.y=0,e.rotation.y=-.12,e.rotation.z=.026;let t=new xe;t.rotation.x=-Math.PI/2,e.add(t);let n=xi(12963014);n.bumpScale=45e-5;let r=new Fe({color:11121068,metalness:.72,roughness:.38}),s=new Fe({color:10258264,metalness:.68,roughness:.62}),o=new Fe({color:3156253,roughness:1}),a=new Uint8Array(256*256*4),l=1903;for(let x=0;x<256;x++)for(let _=0;_<256;_++){l=1664525*l+1013904223>>>0;let R=Math.sin(x*.54+Math.sin(_*.026)*2)*5+Math.sin(x*1.4+_*.012)*3,b=(l>>>24)/255,T=b>.99?28:0,P=(x*256+_)*4;a[P]=98+R+b*12+T,a[P+1]=57+R*.7+b*9+T,a[P+2]=30+R*.3+b*6+T,a[P+3]=255}let c=new ur(a,256,256);c.colorSpace=yt,c.needsUpdate=!0,c.magFilter=gn;let h=new Fe({map:c,roughness:.83,bumpMap:c,bumpScale:5e-4});function f(x,_,R=t){let b=new at(x,_);return b.castShadow=!0,b.receiveShadow=!0,R.add(b),b}function u(x,_,R,b){let T=new rn(x,{depth:_,bevelEnabled:R>0,bevelSize:R,bevelThickness:R,bevelSegments:2,curveSegments:24});T.translate(0,0,-_/2);let P=T.attributes.uv;for(let O=0;O<P.count;O++)P.setXY(O,(P.getX(O)+.37)/.72,(P.getY(O)+.115)/.23);return f(T,b)}let m=new Tt;m.moveTo(-.36,.035),m.lineTo(.19,.081),m.lineTo(.205,-.083);let g=38;for(let x=g;x>=0;x--){let _=-.36+x/g*.55,R=-.035-(_+.36)/.55*.048;m.lineTo(_,R),x>0&&m.lineTo(_-.55/g*.4,R-.009)}m.lineTo(-.365,.025),m.closePath();let y=u(m,.0028,35e-5,[n,r]);y.name="Tapered pitted steel blade with saw teeth";let p=new Tt;p.moveTo(.145,.092),p.bezierCurveTo(.19,.119,.31,.116,.338,.079),p.lineTo(.326,-.079),p.quadraticCurveTo(.314,-.111,.278,-.102),p.lineTo(.172,-.085),p.quadraticCurveTo(.153,-.07,.157,-.047),p.lineTo(.17,.046),p.closePath();let d=new pi;d.moveTo(.214,.055),d.quadraticCurveTo(.24,.072,.283,.055),d.lineTo(.283,-.057),d.quadraticCurveTo(.253,-.065,.226,-.052),d.lineTo(.209,.032),d.closePath(),p.holes.push(d);let M=u(p,.026,.006,h);M.name="Worn wooden open grip";for(let[x,_]of[[.176,.055],[.183,-.053],[.199,.003]])for(let R of[-1,1]){let b=f(new Nt(.006,.006,.0035,18),s);b.rotation.x=Math.PI/2,b.position.set(x,_,R*.02);let T=f(new St(.007,.0012,6e-4),o);T.position.set(x,_,R*.022),T.rotation.z=.35}return{group:e,setEnvironment(x){n.envMap=r.envMap=s.envMap=x;for(let _ of[n,r,s])_.envMapIntensity=.9,_.needsUpdate=!0}}}function Al({flies:i=10,moths:e=5,spread:t=[.82,.17,.47],seed:n=29,sizeScale:r=1,dive:s=0}={}){let o=new xe;o.name="Flies and moths circling the light";let a=new en(1,8,6),l=new Fe({color:1382678,roughness:.65}),c=new Fe({color:5589814,roughness:1}),h=new Fe({color:12899016,roughness:.35,transparent:!0,opacity:.58,depthWrite:!1,side:Ct}),f=document.createElement("canvas");f.width=f.height=128;let u=f.getContext("2d");u.fillStyle="#b8aa83",u.fillRect(0,0,128,128);for(let he=0;he<190;he++)u.fillStyle=he%2?"#89795255":"#e2d3ab66",u.fillRect(he*47%128,he*73%128,2,1);u.strokeStyle="#695c3d",u.lineWidth=4,u.beginPath(),u.moveTo(76,0),u.quadraticCurveTo(99,60,76,128),u.stroke(),u.fillStyle="#5b5039",u.beginPath(),u.ellipse(57,68,13,18,.25,0,Math.PI*2),u.fill(),u.fillStyle="#d5c59a",u.beginPath(),u.ellipse(57,68,6,9,.25,0,Math.PI*2),u.fill(),u.strokeStyle="#75684788",u.lineWidth=1;for(let he=0;he<5;he++)u.beginPath(),u.moveTo(0,64),u.lineTo(128,12+he*26),u.stroke();let m=new zt(f);m.colorSpace=yt;let g=new Fe({map:m,roughness:.9,side:Ct,emissive:10127718,emissiveMap:m,emissiveIntensity:.15});function y(he){let F=new Tt;F.moveTo(0,-.008),he?(F.bezierCurveTo(.02,-.031,.052,-.036,.058,-.018),F.bezierCurveTo(.06,-.007,.044,.004,.039,.009),F.bezierCurveTo(.047,.026,.023,.034,.013,.019)):(F.bezierCurveTo(.008,-.021,.03,-.024,.033,-.013),F.bezierCurveTo(.035,-.003,.015,.016,.005,.012)),F.lineTo(0,.008),F.closePath();let te=new nr(F,10),J=te.attributes.position,ce=te.attributes.uv;for(let V=0;V<J.count;V++)ce.setXY(V,J.getX(V)/.06,(J.getY(V)+.036)/.07);return te.rotateX(-Math.PI/2),te}function p(he,F,te,J){let ce=new hn(he,F,te);return ce.name=J,ce.instanceMatrix.setUsage(yn),ce.frustumCulled=!1,ce.raycast=()=>{},o.add(ce),ce}let d=p(a,l,i*2,"Small dark flies"),M=p(a,c,e*2,"Moth bodies"),x=p(y(!1),h,i*2,"Translucent fly wings"),_=p(y(!0),g,e*2,"Dusty patterned moth wings"),R=new gt,b=new w,T=new w,P=new w,O=new w(0,0,-1),v=new w(0,0,1),S=new w(0,1,0),N=new w,W=new dt,$=new dt,ee=new dt().setFromAxisAngle(S,Math.PI),X=Array.from({length:i+e},(he,F)=>({moth:F>=i,index:F>=i?F-i:F,phase:F*2.399+n*.17,size:r*(.72+(F*17+n)%13/28),speed:F>=i?.95+F%3*.23:1.8+F%4*.46}));function z(he,F,te){let J=he*F.speed+F.phase,ce=F.phase,V=F.moth?.72:.46;return te.set(t[0]*(V*Math.cos(J)+.17*Math.sin(J*2.37+ce)),t[1]*(.7*Math.sin(J*1.73+ce)+.23*Math.cos(J*4.13)),t[2]*(V*Math.sin(J*.91)+.18*Math.cos(J*2.71-ce))),te.y-=s*(F.moth?1:.38)*Math.pow(.5+.5*Math.sin(J*.43+ce),6),F.moth||(te.x+=.035*Math.sin(J*7.3),te.y+=.014*Math.cos(J*9.7)),te}function ae(he,F=!1,te=1){let J=F?0:he;for(let ce of X){let{moth:V,index:ie,phase:k,size:B}=ce,G=V?M:d,de=V?_:x;z(J,ce,b),z(J+.012,ce,T),P.copy(T).sub(b).normalize(),W.setFromUnitVectors(O,P),$.setFromAxisAngle(v,.25*Math.sin(J*2.1+k)),W.multiply($),R.position.copy(b),R.quaternion.copy(W),R.scale.set(V?.006:.0065,V?.007:.0055,V?.021:.011).multiplyScalar(B),R.updateMatrix(),G.setMatrixAt(ie*2,R.matrix),N.set(0,0,V?-.022:-.013).applyQuaternion(W),R.position.copy(b).addScaledVector(N,B),R.scale.setScalar((V?.006:.0068)*B),R.updateMatrix(),G.setMatrixAt(ie*2+1,R.matrix);let Ee=F?.42:.18+Math.sin(J*(V?39:92)+k)*(V?.9:.74);for(let[De,K]of[-1,1].entries())N.set(K*.004,0,0).applyQuaternion(W),R.position.copy(b).addScaledVector(N,B),$.setFromAxisAngle(v,K*Ee),R.quaternion.copy(W).multiply($),K<0&&R.quaternion.multiply(ee),R.scale.setScalar(B),R.updateMatrix(),de.setMatrixAt(ie*2+De,R.matrix)}g.emissiveIntensity=.055+.14*Math.max(0,te);for(let ce of[d,M,x,_])ce.instanceMatrix.needsUpdate=!0}return ae(0),{group:o,update:ae}}var To=3,C_=2.8;function P_(i,e){return e<-1.55||Math.abs(i)>2.55&&e<.45}var Cs=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function I_(i){let o=[],a=new Rn,l=new w;i.updateWorldMatrix(!0,!0);function c(g){if(g.visible){g.isMesh&&!g.isInstancedMesh&&g.geometry&&(g.geometry.computeBoundingBox(),a.copy(g.geometry.boundingBox).applyMatrix4(g.matrixWorld),a.getSize(l),a.min.y<.13&&a.max.y>.1&&l.y>.065&&Math.min(l.x,l.z)>.018&&o.push({x0:a.min.x-.15,x1:a.max.x+.15,z0:a.min.z-.15,z1:a.max.z+.15}));for(let y of g.children)c(y)}}for(let g of i.children)c(g);let h=Array.from({length:1763},(g,y)=>{let p=y%41,d=Math.floor(y/41),M=-3.6+p*.18,x=-3.65+d*.18;return{id:y,col:p,row:d,x:M,z:x,free:P_(M,x)&&!o.some(_=>M>=_.x0&&M<=_.x1&&x>=_.z0&&x<=_.z1),neighbors:[]}});for(let g of h)if(g.free)for(let y=-1;y<=1;y++)for(let p=-1;p<=1;p++){if(!p&&!y)continue;let d=g.col+p,M=g.row+y;if(d<0||d>=41||M<0||M>=43)continue;let x=h[M*41+d];x.free&&(!p||!y||h[g.row*41+d].free&&h[M*41+g.col].free)&&g.neighbors.push(x.id)}let f=h.filter(g=>g.free&&g.neighbors.length);function u(g,y,p){return(p?f.filter(M=>Cs(M,p)>=To):f).reduce((M,x)=>!M||(x.x-g)**2+(x.z-y)**2<(M.x-g)**2+(M.z-y)**2?x:M,null)}function m(g,y,p){let d=new Int32Array(h.length).fill(-1),M=[g];d[g]=g;for(let T=0;T<M.length;T++){let P=h[M[T]],O=Cs(P,p);for(let v of P.neighbors){let S=Cs(h[v],p);d[v]<0&&(S>=To||S>O+.001)&&(d[v]=P.id,M.push(v))}}let x=h[g],_=M.filter(T=>{let P=h[T],O=Math.hypot(P.x-x.x,P.z-x.z);return O>.8&&O<2.8&&Cs(P,p)>=To});if(!_.length)return[];let R=_[Math.floor(y()*_.length)],b=[];for(;R!==g;)b.push(h[R]),R=d[R];return b.reverse()}return{closest:u,path:m}}function rm({room:i,floorSupport:e,viewerPosition:t,seed:n=Math.floor(Math.random()*4294967295)}){let r=new xe;r.name="Tiny mice and rats darting through distant shadows",r.userData.ignoreAcid=!0;let s=n>>>0,o=()=>(s=s*1664525+1013904223>>>0,s/4294967296),a=I_(i),l=new gt,c=new w,h=new w,f=new w,u=new w(0,1,0),m=document.createElement("canvas");m.width=m.height=128;let g=m.getContext("2d");g.fillStyle="#e8e3d9",g.fillRect(0,0,128,128);for(let J=0;J<1400;J++){g.strokeStyle=J%3?"#7d766f30":"#ffffff66";let ce=o()*128,V=o()*128;g.beginPath(),g.moveTo(ce,V),g.lineTo(ce+(o()-.5)*2,V+3+o()*5),g.stroke()}let y=new zt(m);y.colorSpace=yt;let p=new Fe({map:y,roughness:.96}),d=new Fe({roughness:.72}),M=new Fe({roughness:.88});function x(J,ce,V,ie){let k=new hn(J,ce,V);return k.name=ie,k.instanceMatrix.setUsage(yn),k.frustumCulled=!1,k.castShadow=!0,k.receiveShadow=!0,k.raycast=()=>{},r.add(k),k}let _=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],R=_.length,b=new en(1,14,9),T=x(b,p,R*6,"Furry rat and mouse bodies"),P=x(b,d,R*9,"Ears, eyes, noses and running paws"),O=x(new Nt(1,1,1,7),M,R*9,"Long tapered swishing tails"),v=new Float32Array(R*4*2*3),S=new Rt;S.setAttribute("position",new nn(v,3).setUsage(yn));let N=new dr(S,new tr({color:12300704,transparent:!0,opacity:.45}));N.frustumCulled=!1,N.raycast=()=>{},r.add(N);let W=[5327684,5854283,4539454],$=_.map(([J,ce],V)=>{let ie=a.closest(J,ce,t)||a.closest(J,ce),k=V!==0;return{mouse:k,cell:ie.id,x:ie.x,z:ie.z,yaw:o()*Math.PI*2,size:.28*(k?.58+o()*.08:.92+o()*.12),color:new pt(W[V]),phase:o()*6.28,speed:3.6*(k?1.05+o()*.3:.88+o()*.25),route:[],pause:1.2+V*1.6+o()*2,gait:0,moving:!1,visibility:1}}),ee=new pt(7889757),X=new pt(6771019),z=new pt(1118478),ae=null;function he(J,ce,V,ie,k=c){let B=Math.cos(J.yaw),G=Math.sin(J.yaw),de=J.size*J.visibility;return k.set(J.x+(ce*B+ie*G)*de,e(J.x,J.z)+V*de,J.z+(-ce*G+ie*B)*de)}function F(J,ce,V,ie,k,B,G=0){he(V,...ie),l.position.copy(c),l.rotation.set(0,V.yaw,G),l.scale.set(...k).multiplyScalar(V.size*V.visibility),l.updateMatrix(),J.setMatrixAt(ce,l.matrix),J.setColorAt(ce,B)}function te(J,ce=!1,V=t){let ie=ae===null?0:Math.min(.1,Math.max(0,J-ae));ae=J;let k=0;for(let[B,G]of $.entries()){let ge=function(ve,Le){let Se=ve/9;return he(G,Math.sin(Se*3.5+Ee*(G.moving?8:1.6)+G.phase)*.045*Se,.026*(1-Se)+.009,.126+ye*Se,Le)};G.moving=!1;let de=Cs(G,V);if(G.visibility=ke.smoothstep(de,C_,To+.25),!ce){let ve=G.route[0];if(ve&&Cs(ve,V)<To&&Cs(ve,V)<=de&&(G.route=[]),de<To+.35&&(G.pause=0),G.pause>0)G.pause-=ie;else{G.route.length||(G.route=a.path(G.cell,o,V));let Le=G.speed*ie;for(;G.route.length&&Le>0;){let Se=G.route[0],H=Se.x-G.x,A=Se.z-G.z,re=Math.hypot(H,A),_e=Math.min(re,Le);if(G.moving=!0,G.gait+=_e*45,Le-=_e,re>1e-4){G.x+=H/re*_e,G.z+=A/re*_e;let Ae=Math.atan2(-H,-A),Te=ke.euclideanModulo(Ae-G.yaw+Math.PI,Math.PI*2)-Math.PI;G.yaw+=Te*(1-Math.exp(-ie*28))}_e>=re-1e-4&&(G.x=Se.x,G.z=Se.z,G.cell=Se.id,G.route.shift(),G.route.length||(G.pause=3+o()*5))}!G.route.length&&!G.moving&&(G.pause=1)}}let Ee=ce?0:J,De=G.moving?Math.abs(Math.sin(G.gait))*.005:Math.sin(Ee*3+G.phase)*.0015,K=G.moving?0:Math.sin(Ee*12+G.phase)*.002,I=B*6,pe=B*9;F(T,I,G,[0,.077+De,0],[.068,.063,.125],G.color),F(T,I+1,G,[0,.081+De,.068],[.07,.069,.071],G.color),F(T,I+2,G,[0,.078+De,-.115],[.046,.044,.066],G.color),F(T,I+3,G,[0,.057+De+K,-.177],[.03,.024,.05],G.color);for(let[ve,Le]of[-1,1].entries()){let Se=G.mouse?1.23:.88;F(T,I+4+ve,G,[Le*.044,.126+De,-.102],[.03*Se,.038*Se,.012],G.color,Le*.2),F(P,pe+ve,G,[Le*.044,.128+De,-.113],[.022*Se,.028*Se,.004],ee,Le*.2),F(P,pe+2+ve,G,[Le*.032,.094+De,-.149],[.007,.008,.007],z)}F(P,pe+4,G,[0,.057+De+K,-.221],[.011,.009,.009],X);for(let ve=0;ve<4;ve++){let Le=ve%2?-1:1,Se=ve>1,H=G.gait+(ve===0||ve===3?0:Math.PI),A=G.moving?Math.max(0,Math.sin(H))*.023:0,re=G.moving?Math.cos(H)*.027:0;F(P,pe+5+ve,G,[Le*(Se?.055:.043),.01+A,(Se?.08:-.087)+re],[.018,.01,.031],ee)}let ye=G.mouse?.23:.29;for(let ve=0;ve<9;ve++){ge(ve,c),ge(ve+1,h),f.copy(h).sub(c);let Le=f.length();l.position.copy(c).add(h).multiplyScalar(.5),l.quaternion.setFromUnitVectors(u,f.normalize());let Se=(.009*(1-ve/9)+.001)*G.size*G.visibility;l.scale.set(Se,Le,Se),l.updateMatrix(),O.setMatrixAt(B*9+ve,l.matrix),O.setColorAt(B*9+ve,ee)}for(let ve of[-1,1])for(let Le=0;Le<2;Le++)he(G,ve*.018,.061+De,-.195),c.toArray(v,k),k+=3,he(G,ve*.08,.062+De+K,-.2+Le*.027),c.toArray(v,k),k+=3}for(let B of[T,P,O])B.instanceMatrix.needsUpdate=!0,B.instanceColor.needsUpdate=!0;S.attributes.position.needsUpdate=!0}return te(0),{group:r,update:te}}function sm(){let i="drawer",e=!1,t=8;function n(r,s=!1){return s?"Detach your shackle before using the charger.":r==="drawer"?(e=!e,e?"Drawer opened. Take the MacBook charger and cable.":"Drawer closed."):i==="damaged"?"The charger cable has burned through. It cannot charge the MacBook.":r==="charger"?i!=="drawer"?"You already collected the charger.":e?(i="carrying","Charger collected. Plug it into the power strip behind you."):"Open the rear drawer first.":r==="strip"?i==="drawer"?"The power strip is on. Find the charger in the rear drawer.":i==="carrying"?(i="powered","Charger plugged in. Connect its cable to the MacBook."):i==="charging"?"The MacBook is charging.":"The charger has power. Connect the MacBook.":r==="laptop"?i==="powered"?(i="charging","Cable connected. The MacBook is charging."):i==="charging"?`MacBook battery: ${Math.floor(t)}%.`:i==="carrying"?"Plug the charger into the power strip first.":"Find the charger in the rear drawer.":""}return{use:n,damageCable(){(i==="powered"||i==="charging")&&(i="damaged")},update(r){i==="charging"&&(t=Math.min(100,t+Math.max(0,r)*.65))},reset(){i="drawer",e=!1,t=8},get phase(){return i},get drawerOpen(){return e},get battery(){return t},get nextAction(){return i==="drawer"?e?"charger":"drawer":i==="carrying"?"strip":i==="powered"?"laptop":null}}}function om({adapterExit:i,connectorExit:e,laptop:t,floorSupport:n,strip:r}){let s=i.getWorldPosition(new w),o=e.getWorldPosition(new w),a=new w(1,0,0).transformDirection(i.matrixWorld),l=new w(-1,0,0).transformDirection(e.matrixWorld),c=y=>(y.y=n(y.x,y.z)+.0055,y),h=(y,p)=>c(t.localToWorld(new w(y,0,p))),f=[s,s.clone().addScaledVector(a,.065),c(s.clone().addScaledVector(a,.22))];if(r){let y=r.worldToLocal(s.clone()),p=Math.max(.24,y.y+.045),d=(M,x)=>r.localToWorld(new w(y.x,M,x));f=[s,s.clone().addScaledVector(a,.045),d(p,-.1),d(.1,-.19),c(d(0,-.29))]}let u=[...f,h(-.32,1.45),h(-.61,1.12),h(-.85,.85),h(-.91,.48),h(-.9,.06),c(o.clone().addScaledVector(l,.23)),o.clone().addScaledVector(l,.09),o],m=new Yt(u,!1,"centripetal"),g=new ii;return g.getPoint=(y,p=new w)=>(m.getPoint(y,p),p.y=Math.max(p.y,n(p.x,p.z)+.0055),p),new un(g,112,.0045,8,!1)}function $d(i,e,t){let n=new Tt,r=i/2,s=e/2;return n.moveTo(-r+t,-s),n.lineTo(r-t,-s),n.quadraticCurveTo(r,-s,r,-s+t),n.lineTo(r,s-t),n.quadraticCurveTo(r,s,r-t,s),n.lineTo(-r+t,s),n.quadraticCurveTo(-r,s,-r,s-t),n.lineTo(-r,-s+t),n.quadraticCurveTo(-r,-s,-r+t,-s),n}function Zd(i,e,t=.001){let n=new rn(i,{depth:e-2*t,bevelEnabled:t>0,bevelSize:t,bevelThickness:t,bevelSegments:2,curveSegments:6});return n.translate(0,0,-e/2+t),n}function Ir(i,e,t,n,r){let s=new at(e,t);return s.position.set(...n),s.name=r,s.castShadow=s.receiveShadow=!0,i.add(s),s}function am(i,e,t,n,r){return Ir(i,new St(...e),n,t,r)}function Cl(i,e,t,n,r,s=.012){return Ir(i,Zd($d(e[0],e[1],s),e[2],Math.min(.002,e[2]/4)),n,t,r)}function ts(i,e,t,n,r,s,o,a=.012){let l=Ir(i,Zd($d(e,t,a),n,Math.min(.002,n/4)),s,r,o);return l.rotation.x=-Math.PI/2,l}function cm(){let i=new xe;i.name="MacBook USB-C power adapter",i.userData.chargingAction="charger";let e=new Fe({color:15065816,roughness:.36}),t=new Fe({color:10855836,roughness:.7}),n=new Fe({color:12239556,metalness:.8,roughness:.3}),r=new Fe({color:1909537,roughness:.8});Cl(i,[.142,.147,.065],[0,.083,0],e,"Upright rounded adapter shell"),Cl(i,[.143,.148,.0015],[0,.083,0],t,"Adapter casing seam"),Cl(i,[.06,.029,.062],[0,.014,-.012],e,"Removable AC duckhead",.006);for(let c of[-.014,.014])am(i,[.005,.023,.014],[c,-.01,-.012],n,"Downward AC prong");let s=ts(i,.025,.01,.002,[0,.158,0],r,"USB-C port on top",.003),o=new xe;o.name="USB-C adapter plug and strain relief",o.visible=!1,i.add(o),Cl(o,[.027,.034,.014],[0,.177,0],e,"Upright USB-C plug",.005);let a=Ir(o,new Nt(.0045,.007,.024,12),e,[0,.204,0],"Adapter cable strain relief"),l=new gt;return l.name="Adapter cable exit",l.position.set(0,.216,0),l.rotation.z=Math.PI/2,i.add(l),{group:i,plug:o,exit:l}}function lm(){let i=new xe;i.name="Powered floor power strip",i.userData.chargingAction="strip";let e=new Fe({color:13223864,roughness:.65}),t=new Fe({color:14736848,roughness:.52}),n=new Fe({color:2369312,roughness:.9}),r=new Fe({color:9279897,metalness:.75,roughness:.45});ts(i,.646,.132,.05,[0,0,0],e,"Rounded power strip housing",.025),ts(i,.646,.133,.006,[0,-.012,0],n,"Dark housing joint",.025);for(let u of[-.255,.255])for(let m of[-.041,.041])ts(i,.035,.021,.006,[u,-.028,m],n,"Rubber foot",.005);let s=[-.205,-.095,.015,.125];for(let[u,m]of s.entries()){ts(i,.094,.103,.003,[m,.0255,0],n,"Recessed socket surround",.013);let g=$d(.088,.097,.011);for(let d of[-1,1]){let M=d<0?.0055:.0045,x=.016,_=new pi,R=d*.014,b=.012;_.moveTo(R-M/2,b-x/2),_.lineTo(R-M/2,b+x/2),_.lineTo(R+M/2,b+x/2),_.lineTo(R+M/2,b-x/2),_.closePath(),g.holes.push(_)}let y=new pi;y.absarc(0,-.024,.006,0,Math.PI*2,!0),g.holes.push(y);let p=Ir(i,Zd(g,.005,4e-4),t,[m,.03,0],`Recessed grounded outlet ${u+1}`);p.rotation.x=-Math.PI/2}ts(i,.054,.075,.006,[.253,.029,0],n,"Recessed switch bezel",.01);let o=new Fe({color:12074535,roughness:.29,emissive:10232082,emissiveIntensity:.18}),a=ts(i,.037,.055,.01,[.253,.034,0],o,"Illuminated on-off rocker",.007);a.rotation.z=.1,ts(i,.003,.014,.001,[.245,.04,0],t,"Switch on symbol",7e-4);let l=new mt({color:8767595});Ir(i,new Nt(.003,.003,.001,10),l,[.211,.028,.039],"Surge protection indicator");for(let u of[-.303,.303])Ir(i,new Nt(.006,.006,.002,12),r,[u,.026,0],"Recessed casing screw"),am(i,[.008,8e-4,.001],[u,.0273,0],n,"Screw slot");let c=Ir(i,new Nt(.009,.012,.052,12),n,[.344,-.004,0],"Moulded mains strain relief");c.rotation.z=-Math.PI/2;for(let u=0;u<5;u++){let m=Ir(i,new Qt(.01-u*45e-5,.0014,5,12),n,[.326+u*.009,-.004,0],"Strain relief rib");m.rotation.y=Math.PI/2}let h=new gt;h.name="Power strip mains cable exit",h.position.set(.37,-.004,0),i.add(h);let f=new gt;return f.name="Charger plug seat",f.position.set(s[0],.033,0),i.add(f),{group:i,leadExit:h,adapterSeat:f}}function hm({exit:i,wallPlug:e,floorSupport:t}){let n=i.getWorldPosition(new w),r=new w(1,0,0).transformDirection(i.matrixWorld),s=e.clone(),o=h=>(h.y=t(h.x,h.z)+.0085,h),a=[n,n.clone().addScaledVector(r,.07),o(n.clone().addScaledVector(r,.22)),o(new w(2.73,0,4)),o(new w(2.5,0,4.27)),new w(s.x+.08,.07,s.z-.07),s.clone().add(new w(0,-.06,-.02)),s],l=new Yt(a,!1,"centripetal"),c=new ii;return c.getPoint=(h,f=new w)=>(l.getPoint(h,f),f.y=Math.max(f.y,t(f.x,f.z)+.0085),f),new un(c,88,.0075,7,!1)}function um({filing:i,laptop:e,floorSupport:t,drawerMaterial:n}){let r=new xe;r.name="Interactive MacBook charging kit",r.userData.ignoreAcid=!0;let s=new An(10794149,1.5,2.8,2);s.position.set(1.55,1.25,3.25),s.userData.mobileEssential=!0,r.add(s);let o=sm(),a=new Fe({color:14275780,roughness:.51}),l=new Fe({color:15131609,roughness:.42}),c=new Fe({color:2435105,roughness:.88}),h=new Fe({color:9082261,roughness:.4,metalness:.7}),f=l.clone(),u={value:new w},m={value:0};f.onBeforeCompile=Me=>{Me.uniforms.cableBurnPoint=u,Me.uniforms.cableBurnAmount=m,Me.vertexShader=`uniform vec3 cableBurnPoint;uniform float cableBurnAmount;varying float vCableBurn;
`+Me.vertexShader,Me.vertexShader=Me.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
   vCableBurn=(1.0-smoothstep(.025,.18,distance((modelMatrix*vec4(position,1.0)).xyz,cableBurnPoint)))*cableBurnAmount;
   transformed-=normal*vCableBurn*.0025;`),Me.fragmentShader=`varying float vCableBurn;
`+Me.fragmentShader,Me.fragmentShader=Me.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.055,.026,.012),vCableBurn);`)},f.customProgramCacheKey=()=>"melting-charger-insulation-v1";let g=new mt({color:16757557}),y=new mt({color:9422728});function p(Me,He,Ke=r){let Pe=new at(Me,He);return Pe.castShadow=!0,Pe.receiveShadow=!0,Ke.add(Pe),Pe}function d(Me,He,Ke,Pe){let Ve=p(new St(...Me),Ke,Pe);return Ve.position.set(...He),Ve}function M(Me,He,Ke,Pe){let[Ve,Qe,Q]=Me,se=Math.min(.012,Qe*.24),we=new Tt,Ie=Ve/2,be=Qe/2;we.moveTo(-Ie+se,-be),we.lineTo(Ie-se,-be),we.quadraticCurveTo(Ie,-be,Ie,-be+se),we.lineTo(Ie,be-se),we.quadraticCurveTo(Ie,be,Ie-se,be),we.lineTo(-Ie+se,be),we.quadraticCurveTo(-Ie,be,-Ie,be-se),we.lineTo(-Ie,-be+se),we.quadraticCurveTo(-Ie,-be,-Ie+se,-be);let U=Math.min(.004,Q/6),Re=new rn(we,{depth:Q-2*U,bevelEnabled:!0,bevelSize:U,bevelThickness:U,bevelSegments:2,curveSegments:5});Re.translate(0,0,-Q/2+U);let oe=p(Re,Ke,Pe);return oe.position.set(...He),oe}function x(Me,He,Ke,Pe=r){return p(new un(new Yt(Me.map(Ve=>Ve.isVector3?Ve:new w(...Ve))),48,He,7,!1),Ke,Pe)}function _(Me,He,Ke,Pe,Ve){let Qe=document.createElement("canvas");Qe.width=512,Qe.height=128;let Q=Qe.getContext("2d");Q.fillStyle="#c4c4b6",Q.fillRect(0,0,512,128),Q.fillStyle="#353b35",Q.font="600 58px Arial",Q.textAlign="center",Q.fillText(Me,256,85,480);let se=new zt(Qe);se.colorSpace=yt;let we=p(new Mt(He,Ke),new Fe({map:se,roughness:.9}),Ve);return we.position.set(...Pe),we}let R=new xe;R.name="Rear drawer containing the MacBook charger",R.userData.chargingAction="drawer",R.position.set(-.38,.56,0),i.add(R),d([.71,.32,.025],[0,0,.231],n,R),M([.22,.022,.028],[0,.04,.264],h,R),_("CHARGERS",.2,.047,[0,-.065,.246],R),d([.66,.018,.36],[0,-.145,.025],n,R);for(let Me of[-.33,.33])d([.015,.27,.36],[Me,-.01,.025],n,R);d([.66,.27,.015],[0,-.01,-.155],n,R);for(let Me of[-.348,.348])d([.013,.027,.43],[Me,-.08,.015],h,R);let{group:b,plug:T,exit:P}=cm();R.add(b);let O=new w(.105,-.105,-.055);b.position.copy(O),b.rotation.x=Math.PI/2;let v=_("96W USB-C",.077,.018,[0,.082,-.034],b);v.rotation.y=Math.PI,v.material.color.setHex(10066834);let S=new xe;S.name="Coiled charger cable",S.userData.chargingAction="charger",R.add(S),S.position.set(-.145,-.127,.06);let N=[];for(let Me=0;Me<=120;Me++){let He=Me/120*Math.PI*6;N.push([Math.cos(He)*(.086+Me*12e-5),Me*45e-6,Math.sin(He)*.06])}let W=x(N,.0045,f,S);M([.041,.014,.019],[.12,.01,0],l,S),d([.014,.009,.014],[.145,.01,0],h,S);let{group:$,leadExit:ee,adapterSeat:X}=lm();$.position.set(1.94,t(1.94,3.72)+.032,3.72),$.rotation.y=-.16,r.add($),_("SURGE",.04,.012,[.253,.043,-.042],$).rotation.x=-Math.PI/2;let z=M([.12,.16,.018],[2.15,.27,4.424],a,r);for(let Me of[.235,.3]){d([.065,.042,.006],[2.15,Me,4.411],l,r);for(let He of[2.136,2.164])d([.005,.016,.003],[He,Me+.004,4.406],c,r)}M([.054,.043,.055],[2.15,.3,4.383],c,r);let ae=p(hm({exit:ee,wallPlug:new w(2.15,.3,4.35),floorSupport:t}),c);ae.name="Power strip mains lead to wall socket",ae.raycast=()=>{};let he=new xe;he.name="MacBook charging port",he.userData.chargingAction="laptop",he.position.set(-.446,.002,-.18),e.object.add(he),d([.005,.01,.035],[0,0,0],c,he);let F=p(new St(.045,.048,.085),new mt({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}),he);F.castShadow=!1;let te=new xe;te.name="Connected MacBook charging cable",te.visible=!1,r.add(te),M([.048,.018,.026],[0,0,0],l,te),d([.014,.008,.022],[.03,0,0],h,te);let J=p(new Nt(.0048,.008,.032,12),a,te);J.rotation.z=Math.PI/2,J.position.x=-.041;let ce=new gt;ce.name="Laptop cable exit",ce.position.x=-.057,te.add(ce);let V=d([.01,.003,.007],[.005,.011,0],g,te);V.castShadow=!1;let ie=document.createElement("canvas");ie.width=512,ie.height=96;let k=ie.getContext("2d"),B=new zt(ie);B.colorSpace=yt;let G=p(new Mt(.245,.046),new mt({map:B}),e.screen);G.name="MacBook battery charge readout",G.position.set(.282,.235,.001),G.visible=!1,G.castShadow=!1;let de=0,Ee=-1/0,De=-1/0,K=null,I=-1,pe="",ye=null,ge=new w,ve=new w,Le=[];function Se(Me,He){He.updateWorldMatrix(!0,!1),Le.length=0;for(let Ke=0;Ke<=96;Ke++){let Pe=Me.parameters.path.getPoint(Ke/96).applyMatrix4(He.matrixWorld);Pe.y<t(Pe.x,Pe.z)+.035&&Le.push(Pe)}}function H(Me){let He=K?.geometry,Ke=om({adapterExit:P,connectorExit:ce,laptop:e.object,floorSupport:t,strip:$});K?(K.geometry=Ke,He.dispose()):(K=p(Ke,f),K.name="Charging cable resting across the floor",K.raycast=()=>{}),Se(Ke,K),I=Me}function A(Me,He,Ke=!1){let Pe=o.phase,Ve=o.use(Me,Ke);return Ke||(Pe==="drawer"&&o.phase==="carrying"&&(b.visible=!1,S.visible=!1),Pe==="carrying"&&o.phase==="powered"&&($.add(b),b.visible=!0,b.rotation.set(0,0,0),b.position.copy(X.position),Ee=He,r.add(S),S.visible=!0,S.rotation.set(0,.4,0),S.position.set(1.7,t(1.7,3.42)+.008,3.42),Se(W.geometry,W)),Pe==="powered"&&o.phase==="charging"&&(De=He,te.visible=!0,T.visible=!0,S.visible=!1)),Ve}function re(Me,He=!1){let Ke=ye===null?0:Math.max(0,Math.min(.05,Me-ye));ye=Me,o.update(Ke);let Pe=o.drawerOpen?1:0;if(de=He?Pe:ke.damp(de,Pe,8,Ke),R.position.z=de*.43,(o.phase==="powered"||o.phase==="charging")&&(b.position.y=X.position.y+(He?0:.19*(1-ke.smootherstep(Me-Ee,0,.65)))),o.phase==="charging"){let se=He?1:ke.smootherstep(Me-De,0,.65);he.getWorldPosition(ve),te.quaternion.copy(e.object.getWorldQuaternion(new dt)),ge.set(-.032-(1-se)*.12,(1-se)*.028,0).applyQuaternion(te.quaternion),te.position.copy(ve).add(ge),(Math.abs(se-I)>.02||se===1&&I!==1)&&H(se),V.material=o.battery>=100?y:g}G.visible=e.openProgress>.35;let Ve=Math.floor(o.battery),Qe=o.phase==="charging",Q=`${Qe?"\u26A1 ":""}${Ve}%`;Q!==pe&&(pe=Q,k.fillStyle="#222e36",k.fillRect(0,0,512,96),k.fillStyle=Qe?"#93dba3":"#e3b36d",k.font="500 44px Arial",k.textAlign="right",k.fillText(Q,385,63),k.strokeStyle=Qe?"#93dba3":"#e3b36d",k.lineWidth=5,k.strokeRect(405,25,72,44),k.fillRect(480,37,7,19),k.fillRect(413,33,56*Ve/100,28),B.needsUpdate=!0)}function _e(){o.reset(),Le.length=0,m.value=0,V.visible=!0,de=0,R.position.z=0,R.add(b,S),b.visible=S.visible=!0,b.position.copy(O),b.rotation.set(Math.PI/2,0,0),S.position.set(-.145,-.127,.06),S.rotation.set(0,0,0),te.visible=!1,T.visible=!1,K&&(r.remove(K),K.geometry.dispose(),K=null),I=-1,pe="",ye=null}function Ae(Me){return o.phase==="damaged"?"Charger cable burned through":Me==="drawer"?o.drawerOpen?"Close charger drawer":"Open charger drawer":Me==="charger"?"Take MacBook charger + cable":Me==="strip"?o.phase==="carrying"?"Plug charger into power strip":"Powered power strip":Me==="laptop"?o.phase==="powered"?"Connect charger to MacBook":`MacBook battery \xB7 ${Math.floor(o.battery)}%`:o.phase==="carrying"?"Charger collected \xB7 Plug into the power strip [F]":o.phase==="powered"?"Charger powered \xB7 Connect the MacBook [F]":o.phase==="charging"?`${o.battery>=100?"Fully charged":"Charging"} \xB7 ${Math.floor(o.battery)}%`:""}function Te(Me,He){i.updateWorldMatrix(!0,!1),i.localToWorld(Me.set(R.position.x,R.position.y+.94,1.08)),i.localToWorld(He.set(R.position.x,R.position.y-.085,.48))}function Je(Me,He){u.value.copy(Me),m.value=He,He>=1&&(o.damageCable(),V.visible=!1)}return re(0),{group:r,use:A,update:re,reset:_e,hint:Ae,getDrawerView:Te,meltCable:Je,get cablePoints(){return Le},get energized(){return o.phase==="powered"||o.phase==="charging"},get drawerOpen(){return o.drawerOpen},get phase(){return o.phase},get nextAction(){return o.nextAction},get drawerReady(){return de>.85},get battery(){return o.battery}}}function dm(){let i="sealed",e=-1/0;return{get phase(){return i},get hasKey(){return i==="collected"},get startedAt(){return e},pour(t){return i!=="sealed"?!1:(i="pouring",e=t,!0)},update(t){i==="pouring"&&t-e>=3.4&&(i="revealed")},collect(){return i!=="revealed"?!1:(i="collected",!0)},reset(){i="sealed",e=-1/0}}}function fm(i){let e=i.geometry,t=e.attributes.position,n=t.array.slice(),r=e.parameters.points,s=e.parameters.segments,o=r.length,a=r.filter(p=>p.x>0),l=a[0].y,c=a.at(-1).y,h=new Float32Array(s+1),f=new Float32Array(s+1),u=!1;function m(p){for(let d=1;d<a.length;d++)if(p<=a[d].y){let M=a[d-1],x=a[d],_=(p-M.y)/(x.y-M.y||1);return M.x+(x.x-M.x)*_}return a.at(-1).x}function g(){t.array.set(n),t.needsUpdate=!0,e.computeVertexNormals(),i.visible=!0,u=!1}function y(p){if(p>=.999){i.visible=!1,u=!0;return}if(u)return;i.updateWorldMatrix(!0,!1);let d=i.matrixWorld.elements;if(d[5]>=-.3||p<=0)return;let M=l+(c-l)*p,x=d[5]*M;for(let _=0;_<=s;_++){let R=_/s*Math.PI*2,b=Math.sin(R),T=Math.cos(R),P=l,O=c;for(let v=0;v<18;v++){let S=(P+O)/2,N=m(S);(d[1]*b+d[9]*T)*N+d[5]*S>x?P=S:O=S}h[_]=(P+O)/2,f[_]=m(h[_]);for(let v=0;v<o;v++){let S=_*o+v,N=S*3,W=n[N+1];if(W<h[_]){let $=r[v].x===0;t.setXYZ(S,$?0:b*f[_],$?M:h[_],$?0:T*f[_])}else t.setXYZ(S,n[N],W,n[N+2])}}t.needsUpdate=!0,e.computeVertexNormals()}return{update:y,reset:g}}function pm({bottle:i,contents:e,cap:t,floorSupport:n}){let r=new xe;r.name="Ketchup spill and hidden shackle key";let s=dm(),o=i.position.clone(),a=i.quaternion.clone();i.userData.keyAction="pour";let l=new w(0,1,0).applyQuaternion(a),c=new dt().setFromUnitVectors(l,new w(-.12,-.99,.06).normalize()).multiply(a),h=o.clone().add(new w(-.32,.42,-.04)),f=fm(e),u=new w(0,.469,0).applyMatrix4(i.children[0].matrix).multiply(i.scale).applyQuaternion(c).add(h);u.y=n(u.x,u.z)+.009;let m=t.position.clone(),g=t.quaternion.clone();t.updateWorldMatrix(!0,!1);let y=t.getWorldPosition(new w),p=t.getWorldQuaternion(new dt),d=y.clone().add(new w(-.13,0,.1));d.y=n(d.x,d.z)+.016;let M=new Fe({color:13674833,metalness:.72,roughness:.27,emissive:7161877,emissiveIntensity:.18}),x=new xe;x.name="Brass shackle key",x.userData.keyAction="collect",r.add(x),x.visible=!1;function _(J,ce,V){let ie=new at(J,ce);return ie.castShadow=!0,ie.receiveShadow=!0,V.add(ie),ie}let R=_(new Qt(.025,.0055,8,24),M,x);R.rotation.x=Math.PI/2,R.position.x=-.042;let b=_(new St(.078,.009,.01),M,x);b.position.x=.013;for(let J of[.027,.047])_(new St(.01,.009,.022),M,x).position.set(J,0,.01);let T=_(new St(.15,.04,.1),new mt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),x);T.castShadow=!1,T.receiveShadow=!1;let P=new $t({color:12001548,roughness:.28,clearcoat:1,clearcoatRoughness:.18}),O=new xe;O.position.copy(u),O.position.y-=.006,r.add(O),O.visible=!1;let v=new Tt;for(let J=0;J<=64;J++){let ce=J/64*Math.PI*2,V=1+.1*Math.sin(ce*5)+.07*Math.cos(ce*9),ie=Math.cos(ce)*.2*V,k=Math.sin(ce)*.13*V;J===0?v.moveTo(ie,k):v.lineTo(ie,k)}let S=_(new nr(v,32),P,O);S.rotation.x=-Math.PI/2,S.castShadow=!1;let N=[];for(let J=0;J<7;J++){let ce=J*2.4,V=.05+J*.016,ie=_(new en(1,12,8),P,O);ie.position.set(Math.cos(ce)*V,.003,Math.sin(ce)*V*.6),ie.scale.set(.015+J%3*.005,.004,.012),N.push(ie)}let W=_(new Nt(.7,1,1,10),P,r);W.name="Downward ketchup stream",W.visible=!1,W.castShadow=!1;let $=new w,ee=new w,X=new w,z=new w(0,1,0),ae=J=>{let ce=ke.clamp(J,0,1);return ce*ce*(3-2*ce)},he=!1;function F(){s.reset(),i.position.copy(o),i.quaternion.copy(a),f.reset(),i.children[0].add(t),t.position.copy(m),t.quaternion.copy(g),t.scale.setScalar(1),he=!1,x.visible=!1,O.visible=!1,W.visible=!1}function te(J,ce){if(s.update(J),s.phase==="sealed")return;let V=J-s.startedAt,ie=ae(V/.8)*(1-ae((V-3.35)/.8));i.position.copy(o).lerp(h,ie),i.quaternion.copy(a).slerp(c,ie),he||(r.attach(t),he=!0),t.position.copy(y).lerp(d,ae(V/.55)),t.position.y+=Math.sin(Math.min(1,V/.55)*Math.PI)*.08,t.quaternion.copy(p).multiply(new dt().setFromAxisAngle(new w(0,0,1),ae(V/.55)*2));let k=ae((V-.8)/2.5);if(f.update(k),O.visible=V>.75,O.scale.setScalar(Math.max(.01,k)),i.updateWorldMatrix(!0,!0),i.children[0].localToWorld($.set(0,.469,0)),W.visible=V>.8&&V<3.3,W.visible){ee.copy($).add(u).multiplyScalar(.5),X.subVectors($,u),W.position.copy(ee),W.quaternion.setFromUnitVectors(z,X.clone().normalize());let B=ce?1:1+Math.sin(V*21)*.12;W.scale.set(.012*B,X.length(),.012*B)}if(x.visible=V>=2.5&&!s.hasKey,x.visible){let B=ae((V-2.5)/.9);x.position.copy($).lerp(u,B),x.position.y+=Math.sin(B*Math.PI)*.065,x.rotation.set((1-B)*2,B*.5,(1-B)*3),M.emissiveIntensity=ce?.22:.22+.1*Math.sin(J*3)}}return{group:r,bottle:i,key:x,update:te,reset:F,get hasKey(){return s.hasKey},get phase(){return s.phase},pour:J=>s.pour(J),collect:()=>s.collect(),hint(J){return J==="collect"&&!s.hasKey?s.phase==="revealed"?"Pick up the shackle key":"A key is sliding out\u2026":J==="pour"?s.phase==="sealed"?"Pour out the ketchup":s.phase==="pouring"?"Pouring ketchup\u2026":s.hasKey?"The bottle is empty":"Pick up the key in the ketchup":""}}}var Pl=(i,e,t)=>Math.max(e,Math.min(t,i));function mm({speed:i=.38,maxPoints:e=180}={}){let t=[],n=null,r=!1;function s(a,l,c,h=!1){return h||n!==null||t.some(f=>f.index===a)?!1:(t.push({index:a,openedAt:c,progress:0,origin:{...l},head:{x:l.x,z:l.z},points:[]}),!0)}function o(a,l,c,{target:h=c}={}){if(r)return!1;for(let f of t){if(f.progress=Pl((a-f.openedAt)/1.35,0,1),a-f.openedAt<.48)continue;f.points.length||f.points.push({...f.head,born:a,radius:.13});let u=h.x-f.head.x,m=h.z-f.head.z,g=Math.hypot(u,m),y=Math.min(g,i*Pl(l,0,.08));if(g>.001){let d=.18*Math.sin((a-f.openedAt)*.85+f.index*1.9),M=Math.sqrt(1+d*d);f.head.x+=(u/g-m/g*d)*y/M,f.head.z+=(m/g+u/g*d)*y/M}let p=f.points.at(-1);Math.hypot(p.x-f.head.x,p.z-f.head.z)>.075&&(f.points.push({...f.head,born:a,radius:.13}),f.points.length>e&&f.points.splice(1,1));for(let[d,M]of f.points.entries()){let x=Pl((a-M.born)/3,0,1);M.radius=d===0?.16+.23*x:.12+(.13+.025*Math.sin(M.born*1.8+f.index))*x,n===null&&Math.hypot(c.x-M.x,c.z-M.z)<M.radius+.15&&(n=a)}}return n!==null&&a-n>=.85?(r=!0,!0):!1}return{open:s,update:o,leaks:t,reset(){t.length=0,n=null,r=!1},get dying(){return n!==null},get finished(){return r},blackout(a){return n===null?0:Pl((a-n)/.7,0,1)}}}function gm(i,e,t){let n=Ce.textureSize,r=document.createElement("canvas");r.width=r.height=n;let s=r.getContext("2d"),o=new zt(r);o.flipY=!1,o.generateMipmaps=!1,o.minFilter=gn;let a={value:o};function l(x){let _=new $t({color:6519843,roughness:.12,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.08,emissive:2571784,emissiveIntensity:.15,transparent:x,opacity:x?.92:1,depthWrite:!x,side:Ct,envMapIntensity:1.4});return _.onBeforeCompile=R=>{R.uniforms.acidTime=t,R.uniforms.acidWet=a,R.vertexShader=`varying vec3 vWetWorld;
`+R.vertexShader,R.vertexShader=R.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 wetVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     wetVertex=instanceMatrix*wetVertex;
    #endif
    vWetWorld=(modelMatrix*wetVertex).xyz;`),R.fragmentShader=`uniform float acidTime;uniform sampler2D acidWet;varying vec3 vWetWorld;
`+R.fragmentShader,R.fragmentShader=R.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 flowUV=vWetWorld.xz;
    float eddy=sin(flowUV.x*14.0+sin(flowUV.y*9.0-acidTime*.7)+acidTime*.35)*sin(flowUV.y*17.0-acidTime*.8);
    float fine=sin(flowUV.x*71.0+flowUV.y*43.0-acidTime*2.5)*sin(flowUV.y*81.0-flowUV.x*29.0+acidTime*1.8);
    ${x?`float wet=texture2D(acidWet,(flowUV+vec2(4.1,4.2))/vec2(8.2,8.8)).r;
    wet-=.035*eddy+.018*fine;
    if(wet<.055)discard;
    float depth=smoothstep(.12,.95,wet);
    diffuseColor.rgb=mix(vec3(.31,.42,.085),diffuseColor.rgb*.62,depth);
    diffuseColor.a*=smoothstep(.055,.22,wet)*mix(.48,1.0,depth);`:""}
    diffuseColor.rgb*=.94+.07*eddy+.025*fine;`),R.fragmentShader=R.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
    float dx=.045*cos(vWetWorld.x*24.0+vWetWorld.z*12.0-acidTime*2.1)+.018*cos(vWetWorld.x*83.0-vWetWorld.z*36.0+acidTime*3.0);
    float dz=.035*sin(vWetWorld.z*27.0-vWetWorld.x*9.0+acidTime*1.7)+.012*sin(vWetWorld.z*79.0+acidTime*3.4);
    normal=normalize(normal+mat3(viewMatrix)*vec3(dx,0.0,dz));`)},_.customProgramCacheKey=()=>`acid-water-${x?"surface":"jet"}-v2`,_}let c=l(!0),h=l(!1),f=Ce.mobile?48:72,u=new Mt(8.2,8.8,f,f);u.rotateX(-Math.PI/2),u.translate(0,0,.2);let m=u.attributes.position,g=u.attributes.uv;for(let x=0;x<m.count;x++){let _=m.getX(x),R=m.getZ(x);m.setY(x,i(_,R)+.006),g.setXY(x,(_+4.1)/8.2,(R+4.2)/8.8)}m.needsUpdate=!0,g.needsUpdate=!0,u.computeVertexNormals();let y=new at(u,c);y.name="Continuous reflective acid film",y.renderOrder=4,y.receiveShadow=!0;let p=new at(u,new mt({color:1053961,alphaMap:e,transparent:!0,opacity:.44,depthWrite:!1,alphaTest:.01}));p.name="Damp corroded edge beneath acid",p.position.y=-.002,p.renderOrder=3;let d=-1/0;function M(x,_){if(!(x-d<.1)){d=x,s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,n,n),s.globalCompositeOperation="lighten";for(let R of _)for(let b of R.points){let T=(b.x+4.1)/8.2*n,P=(b.z+4.2)/8.8*n,O=b.radius*n/8.2,v=s.createRadialGradient(T,P,0,T,P,O);v.addColorStop(0,"#fff"),v.addColorStop(.62,"#fff"),v.addColorStop(.85,"#999"),v.addColorStop(1,"#000"),s.fillStyle=v,s.fillRect(T-O,P-O,O*2,O*2)}o.needsUpdate=!0}}return{pool:y,scorch:p,jetMaterial:h,update:M,reset(){d=-1/0,s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,n,n),o.needsUpdate=!0},setEnvironment(x){for(let _ of[c,h])_.envMap=x,_.needsUpdate=!0}}}function xm(i,e,t){let n=new w,r=new dt;i.getWorldPosition(n),i.getWorldQuaternion(r);let s=new w(0,-.25,.6).applyQuaternion(r),o=9.81,a=e(n.x,n.z)+.009,l=Math.max(.01,n.y-a),c=(s.y+Math.sqrt(s.y*s.y+2*o*l))/o,h=n.clone().addScaledVector(s,c);h.y=e(h.x,h.z)+.009;let f=20,u=10,m=new Rt,g=new Float32Array((f+1)*(u+1)*3),y=new Float32Array(g.length),p=[];for(let P=1;P<=f;P++)for(let O=1;O<=u;O++){let v=P*(u+1)+O;p.push(v,v-u-2,v-1,v,v-u-1,v-u-2)}m.setAttribute("position",new nn(g,3).setUsage(yn)),m.setAttribute("normal",new nn(y,3).setUsage(yn)),m.setIndex(p);let d=new at(m,t);d.name="Gravity-fed wavering drain stream",d.frustumCulled=!1,d.raycast=()=>{};let M=new w,x=new w,_=new w,R=new w,b=new w;function T(P,O){let v=ke.smoothstep(O,0,.65);for(let S=0;S<=f;S++){let N=S/f,W=N*c;M.copy(n).addScaledVector(s,W),M.y-=.5*o*W*W,M.x+=Math.sin(P*19-N*13)*.002*N,M.z+=Math.sin(P*16-N*11)*.0015*N,x.copy(s),x.y-=o*W,x.normalize(),_.set(1,0,0).addScaledVector(x,-x.x).normalize(),R.crossVectors(_,x);let $=(.021-.01*N)*(1+.12*Math.sin(N*25-P*23))*v;for(let ee=0;ee<=u;ee++){let X=ee/u*Math.PI*2,z=(S*(u+1)+ee)*3;b.copy(_).multiplyScalar(Math.cos(X)).addScaledVector(R,Math.sin(X)),b.toArray(y,z),g[z]=M.x+b.x*$,g[z+1]=M.y+b.y*$,g[z+2]=M.z+b.z*$}}m.attributes.position.needsUpdate=m.attributes.normal.needsUpdate=!0}return T(0,1),{mesh:d,origin:h,update:T}}function ym({valves:i,floorSupport:e}){let t=new xe;t.name="Corrosive green liquid, bubbles and contact smoke",t.userData.ignoreAcid=!0,t.visible=!1;let n=mm(),r=new gt,s=new dt,o={value:0},a=new Map,l=new Map,c=[],h=-1/0,f=document.createElement("canvas");f.width=f.height=512;let u=f.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,512,512);let m=new zt(f);m.generateMipmaps=!1,m.minFilter=gn,m.flipY=!1;let g={value:m};function y(F){if(l.has(F))return l.get(F);let te=F.clone(),J=F.onBeforeCompile,ce=F.customProgramCacheKey();return F.color&&(te.color=F.color),F.emissive&&(te.emissive=F.emissive),te.onBeforeCompile=V=>{J.call(F,V),V.uniforms.acidBurn=g,V.vertexShader=`varying vec3 vAcidWorld;
`+V.vertexShader,V.vertexShader=V.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 acidVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     acidVertex=instanceMatrix*acidVertex;
    #endif
    vAcidWorld=(modelMatrix*acidVertex).xyz;`),V.fragmentShader=`uniform sampler2D acidBurn;varying vec3 vAcidWorld;
`+V.fragmentShader,V.fragmentShader=V.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 acidUV=(vAcidWorld.xz+vec2(4.1,4.2))/vec2(8.2,8.8);
    float burned=texture2D(acidBurn,clamp(acidUV,0.0,1.0)).r*(1.0-smoothstep(.035,.32,vAcidWorld.y));
    float pitting=fract(sin(dot(floor(vAcidWorld*145.0),vec3(17.17,83.23,39.71)))*43758.5453);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.063,.025)+pitting*.035,burned*.94);
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`)},te.customProgramCacheKey=()=>ce+"-acid-corrosion-v1",l.set(F,te),te}function p(F){let te=new Rn;function J(ce){if(!ce.userData.ignoreAcid){if(ce.isMesh&&ce.material&&(te.setFromObject(ce),te.min.y<.4&&te.max.y>-.01)){te.max.y>.02&&te.max.y<.65&&c.push(te.clone());let V=ie=>ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial||ie.isMeshBasicMaterial||ie.isMeshToonMaterial?y(ie):ie;ce.material=Array.isArray(ce.material)?ce.material.map(V):V(ce.material)}for(let V of ce.children)J(V)}}for(let ce of F)ce.updateWorldMatrix(!0,!0),J(ce)}let d=gm(e,m,o);t.add(d.scorch,d.pool);let M=new hn(new en(1,10,7),new $t({color:10530404,roughness:.13,clearcoat:1,transparent:!0,opacity:.72,depthWrite:!1}),54);M.instanceMatrix.setUsage(yn),M.frustumCulled=!1,M.count=0,t.add(M);let x=new hn(new en(1,8,6),d.jetMaterial,42);x.instanceMatrix.setUsage(yn),x.frustumCulled=!1,x.count=0,x.name="Small falling splash droplets",t.add(x);let _=new fr(.9,1,32);_.rotateX(-Math.PI/2);let R=new Cr(new Float32Array(12),1);_.setAttribute("rippleAlpha",R);let b=new mt({color:11978123,transparent:!0,opacity:.32,depthWrite:!1,side:Ct});b.onBeforeCompile=F=>{F.vertexShader=`attribute float rippleAlpha;varying float vRippleAlpha;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRippleAlpha=rippleAlpha;`),F.fragmentShader=`varying float vRippleAlpha;
`+F.fragmentShader,F.fragmentShader=F.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vRippleAlpha;`)};let T=new hn(_,b,12);T.instanceMatrix.setUsage(yn),T.frustumCulled=!1,T.count=0,T.renderOrder=6,T.name="Expanding impact rings",t.add(T);let P=document.createElement("canvas");P.width=P.height=128;let O=P.getContext("2d");for(let F=0;F<7;F++){let te=64+Math.sin(F*2.4)*23,J=64+Math.cos(F*3.1)*21,ce=O.createRadialGradient(te,J,0,te,J,36);ce.addColorStop(0,"rgba(220,231,199,.3)"),ce.addColorStop(1,"rgba(220,231,199,0)"),O.fillStyle=ce,O.fillRect(0,0,128,128)}let v=new zt(P),S=new Mt(1,1),N=new Cr(new Float32Array(84),1);S.setAttribute("smokeAlpha",N);let W=new mt({map:v,transparent:!0,opacity:.27,depthWrite:!1,color:12699827,side:Ct});W.onBeforeCompile=F=>{F.vertexShader=`attribute float smokeAlpha;varying float vSmokeAlpha;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeAlpha=smokeAlpha;`),F.fragmentShader=`varying float vSmokeAlpha;
`+F.fragmentShader,F.fragmentShader=F.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vSmokeAlpha;`)};let $=new hn(S,W,84);$.name="Smoke rising from corroding surfaces",$.instanceMatrix.setUsage(yn),$.frustumCulled=!1,$.count=0,$.renderOrder=12,t.add($),t.traverse(F=>{F.isMesh&&(F.raycast=()=>{})});function ee(F,te){let J=e(F,te);for(let ce of c)F>=ce.min.x&&F<=ce.max.x&&te>=ce.min.z&&te<=ce.max.z&&(J=Math.max(J,Math.min(.27,ce.max.y)));return J}function X(F,te,J=!1){let ce=i[F];if(!ce||J||n.dying||n.leaks.some(ie=>ie.index===F))return!1;let V=xm(ce.outlet,e,d.jetMaterial);return n.open(F,V.origin,te,J)?(V.mesh.visible=!1,t.add(V.mesh),a.set(F,V),t.visible=!0,!0):(V.mesh.geometry.dispose(),!1)}function z(F){if(!(F-h<.1)){h=F;for(let te of n.leaks)for(let J of te.points){let ce=(J.x+4.1)/8.2*512,V=(J.z+4.2)/8.8*512,ie=J.radius*512/8.2*1.18,k=u.createRadialGradient(ce,V,ie*.45,ce,V,ie);k.addColorStop(0,"rgba(255,255,255,.13)"),k.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=k,u.fillRect(ce-ie,V-ie,ie*2,ie*2)}m.needsUpdate=!0}}function ae(F,te,J,ce,V=!1,ie={}){if(!n.leaks.length)return!1;let k=n.update(F,te,J,ie),B=V?0:F;o.value=B,ce.getWorldQuaternion(s);let G=0,de=0,Ee=0,De=0;for(let K of n.leaks){i[K.index].setOpen(V?1:ke.smootherstep(K.progress,0,1));let I=a.get(K.index);if(I.mesh.visible=K.points.length>0,I.update(B,K.progress),!!K.points.length){for(let pe=0;pe<18;pe++){let ye=K.points[(pe*17+K.index*5)%K.points.length],ge=(B*.9+pe*.618)%1,ve=pe*2.399,Le=ye.radius*.57;r.position.set(ye.x+Math.cos(ve)*Le,e(ye.x,ye.z)+.008+Math.sin(ge*Math.PI)*.005,ye.z+Math.sin(ve)*Le);let Se=(.005+pe%4*.0025)*Math.sin(ge*Math.PI);r.scale.set(Se,Se*.45,Se),r.quaternion.identity(),r.updateMatrix(),M.setMatrixAt(G++,r.matrix)}for(let pe=0;pe<14;pe++){let ye=(B*2.7+pe*.618)%1,ge=pe*2.399+K.index,ve=.015+ye*(.07+pe%3*.02),Le=.045+pe%4*.012;r.position.set(K.origin.x+Math.cos(ge)*ve,K.origin.y+4*Le*ye*(1-ye),K.origin.z+Math.sin(ge)*ve);let Se=(.003+pe%3*.0015)*(1-ye*.45);r.scale.set(Se,Se*(1.3+ye),Se),r.quaternion.identity(),r.updateMatrix(),x.setMatrixAt(Ee++,r.matrix)}for(let pe=0;pe<4;pe++){let ye=(B*1.6+pe*.25)%1,ge=.018+ye*.16;r.position.set(K.origin.x,e(K.origin.x,K.origin.z)+.01,K.origin.z),r.quaternion.identity(),r.scale.set(ge,1,ge*.92),r.updateMatrix(),T.setMatrixAt(De,r.matrix),R.setX(De++,Math.sin(ye*Math.PI)*(1-ye))}for(let pe=0;pe<16;pe++){let ye=pe*7%Math.min(35,K.points.length),ge=K.points[Math.max(0,K.points.length-1-ye)],ve=(B*.46+pe*.381)%1,Le=pe*2.4+K.index,Se=ge.radius*(.45+ve*.5),H=.075+ve*.22;r.position.set(ge.x+Math.cos(Le)*Se+Math.sin(B+pe)*ve*.06,ee(ge.x,ge.z)+.015+ve*.34,ge.z+Math.sin(Le)*Se),r.quaternion.copy(s),r.rotateZ(pe*.9+ve*.4),r.scale.set(H,H*1.5,1),r.updateMatrix(),$.setMatrixAt(de,r.matrix),N.setX(de++,Math.sin(ve*Math.PI)*.58)}}}M.count=G,$.count=de,x.count=Ee,T.count=De;for(let K of[M,$,x,T])K.instanceMatrix.needsUpdate=!0;return N.needsUpdate=!0,R.needsUpdate=!0,d.update(F,n.leaks),z(F),k}function he(){n.reset(),d.reset(),t.visible=!1,M.count=$.count=x.count=T.count=0;for(let F of a.values())t.remove(F.mesh),F.mesh.geometry.dispose();a.clear();for(let F of i)F.setOpen(0);u.clearRect(0,0,512,512),u.fillStyle="#000",u.fillRect(0,0,512,512),m.needsUpdate=!0,h=-1/0}return{group:t,open:X,update:ae,reset:he,bindTargets:p,get leaks(){return n.leaks},setEnvironment:d.setEnvironment,blackout:F=>n.blackout(F),get dying(){return n.dying},get active(){return n.leaks.length>0}}}var ns=(i,e=0,t=1)=>Math.max(e,Math.min(t,i));function vm(){let i="idle",e=!1,t=null,n=null,r=null,s=null,o=null,a=null,l=0,c=0,h=[];function f(u,m,{contact:g=null,live:y=!1,viewer:p}){if(i==="dead")return!1;if(i==="idle"&&y&&g&&(o={...g},a={x:g.x,z:g.z},t=u,i="melting"),i==="melting"&&(c=ns((u-t)/1.4),c===1&&(i="burning",n=u,h.push({...a,born:u,radius:.1}))),i==="burning"||i==="extinguishing"){let d=u-n;e&&r===null&&d>=1.1&&(r=u,i="extinguishing");let M=r===null?0:ns((u-r)/2.8);if(l=ns(d/1.2)*(1-M),i==="burning"&&d>.8){let x=p.x-a.x,_=p.z-a.z,R=Math.hypot(x,_),b=Math.min(R,.32*ns(m,0,.08));R>.001&&(a.x+=x/R*b,a.z+=_/R*b),Math.hypot(a.x-h.at(-1).x,a.z-h.at(-1).z)>.14&&h.length<60&&h.push({...a,born:u,radius:.1})}for(let x of h)x.radius=.1+.35*ns((u-x.born)/3),r===null&&s===null&&d>2.4&&Math.hypot(p.x-x.x,p.z-x.z)<x.radius+.17&&(s=u);M===1&&(i="extinguished",l=0)}return s!==null&&u-s>=1.1?(i="dead",!0):!1}return{update:f,patches:h,activateSprinklers(){e=!0},reset(){i="idle",e=!1,t=n=r=s=o=a=null,l=c=0,h.length=0},blackout(u){return s===null?0:ns((u-s)/1)},get phase(){return i},get armed(){return e},get origin(){return o},get melt(){return c},get intensity(){return l},get dying(){return s!==null},water(u){return r===null?0:ns((u-r)/.45)*(1-ns((u-r-7)/2))}}}function Mm({floorSupport:i,pipeMaterial:e}){let t=new xe;t.name="Ceiling sprinkler pipework and automatic spray",t.userData.ignoreAcid=!0;let n=new xe;t.add(n);let r=e.clone();r.color.setHex(9008999),r.roughness=.87,r.emissive.setHex(1512207),r.emissiveIntensity=.18;let s=new Fe({color:9598547,metalness:.72,roughness:.58,emissive:3351834,emissiveIntensity:.16}),o=new Fe({color:7346965,roughness:.3,metalness:.25}),a=[[-1.9,2.96,-1.4],[1.6,2.96,-1.4],[-1.9,2.96,2.2],[1.6,2.96,2.2]],l=new w(0,1,0),c=new w,h=new w;function f(b,T,P,O=r,v=12){let S=new at(new Nt(b,b,T,v),O);return S.position.set(...P),S.castShadow=!0,n.add(S),S}function u(b,T,P=.024,O=r){c.set(...b),h.set(...T);let v=h.clone().sub(c),S=f(P,v.length(),c.clone().add(h).multiplyScalar(.5).toArray(),O);return S.quaternion.setFromUnitVectors(l,v.normalize()),S}u([1.6,3.075,-3.97],[1.6,3.075,3.8]),u([1.6,3.075,-3.97],[1.6,2.48,-3.97]);for(let b of[-1.4,2.2]){u([-2.2,3.075,b],[1.6,3.075,b]);for(let T of[-1.9,1.6]){f(.039,.045,[T,3.075,b]),f(.018,.09,[T,3,b],s);let P=f(.083,.014,[T,3.102,b],r,24);P.receiveShadow=!0,f(.03,.024,[T,2.948,b],s,6);for(let O of[-1,1])u([T+O*.024,2.94,b],[T+O*.032,2.89,b],.005,s),u([T+O*.032,2.89,b],[T,2.87,b],.005,s);f(.007,.048,[T,2.913,b],o,8),f(.038,.006,[T,2.865,b],s,16);for(let O=0;O<10;O++){let v=O/10*Math.PI*2;u([T+Math.cos(v)*.025,2.864,b+Math.sin(v)*.025],[T+Math.cos(v)*.049,2.859,b+Math.sin(v)*.049],.003,s)}}}for(let b of[-2.9,.4,3.4])f(.033,.02,[1.6,3.08,b]),u([1.6,3.08,b],[1.6,3.15,b],.009);Zn(n);let m=Ce.mobile?160:320,g=new Float32Array(m*6),y=new Rt;y.setAttribute("position",new nn(g,3).setUsage(yn));let p=new tr({color:12637404,transparent:!0,opacity:.38,depthWrite:!1}),d=new dr(y,p);d.name="Sprinkler droplets falling from ceiling deflectors",d.frustumCulled=!1,d.visible=!1,d.raycast=()=>{},t.add(d);let M=new fr(.8,1,20);M.rotateX(-Math.PI/2);let x=new hn(M,new mt({color:10336187,transparent:!0,opacity:.24,side:Ct,depthWrite:!1}),40);x.name="Sprinkler splashes on the floor",x.visible=!1,x.frustumCulled=!1,x.raycast=()=>{},t.add(x);let _=new gt;function R(b,T,P=!1){if(d.visible=x.visible=T>0,!!T){p.opacity=T*(P?.15:.42);for(let O=0;O<m;O++){let v=a[O%a.length],S=(b*(.75+O%7*.035)+O*.618)%1,N=O*2.3999,W=.4+O%19/19*1.65,$=W*S,ee=2.86*(1-S*S),X=v[0]+Math.cos(N)*$,z=v[2]+Math.sin(N)*$,ae=i(X,z)+.012,he=O*6;g[he]=X,g[he+1]=Math.max(ae,ee),g[he+2]=z,g[he+3]=X-Math.cos(N)*.022,g[he+4]=Math.max(ae,ee+.045+S*.08),g[he+5]=z-Math.sin(N)*.022}y.attributes.position.needsUpdate=!0,x.material.opacity=.22*T;for(let O=0;O<40;O++){let v=a[O%a.length],S=(b*1.7+O*.618)%1,N=O*2.399,W=.4+O%11/11*1.6,$=v[0]+Math.cos(N)*W,ee=v[2]+Math.sin(N)*W;_.position.set($,i($,ee)+.012,ee),_.scale.setScalar(.006+S*.042),_.updateMatrix(),x.setMatrixAt(O,_.matrix)}x.instanceMatrix.needsUpdate=!0}}return{group:t,update:R,setEnvironment(b){for(let T of[r,s])T.envMap=b,T.envMapIntensity=.7,T.needsUpdate=!0},reset(){d.visible=x.visible=!1}}}var L_=`attribute float seed;varying vec2 vUv;varying float vSeed;
 void main(){vUv=uv;vSeed=seed;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,Em=`
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 float fbm(vec2 p){return .57*noise(p)+.28*noise(p*2.03)+.15*noise(p*4.1);}`;function _m({chargingKit:i,acidLeaks:e,floorSupport:t,pipeMaterial:n}){let r=new xe;r.name="Acid-damaged charger fire and ceiling sprinklers",r.userData.ignoreAcid=!0;let s=Mm({floorSupport:t,pipeMaterial:n});r.add(s.group);let o=vm(),a={value:0},l={value:0},c=new gt,h=new dt,f=new w,u=null,m="",g="idle";function y(N,W,$=qr){let ee=new Mt(1,1),X=new Float32Array(N);for(let he=0;he<N;he++)X[he]=he*.731;ee.setAttribute("seed",new Cr(X,1));let z=new Di({uniforms:{time:a,power:l},vertexShader:L_,fragmentShader:W,transparent:!0,depthWrite:!1,side:Ct,blending:$,toneMapped:!1}),ae=new hn(ee,z,N);return ae.instanceMatrix.setUsage(yn),ae.frustumCulled=!1,ae.raycast=()=>{},ae.count=0,r.add(ae),ae}let p=y(Ce.mobile?90:180,`uniform float time;uniform float power;varying vec2 vUv;varying float vSeed;${Em}
 void main(){vec2 p=vUv;float n=fbm(vec2(p.x*5.+vSeed,p.y*5.-time*3.8));
 float bend=sin(p.y*6.-time*3.+vSeed)*.13*p.y;
 float width=(1.-p.y)*.43;float edge=width-abs(p.x-.5+bend)+(n-.5)*.27;
 float alpha=smoothstep(-.035,.09,edge)*smoothstep(0.,.08,p.y)*(1.-smoothstep(.72,1.,p.y))*power;
 vec3 color=mix(vec3(1.,.10,.008),vec3(1.,.72,.12),clamp((edge+.08)*3.,0.,1.));color=mix(color,vec3(1.,.95,.65),(1.-p.y)*smoothstep(.14,.3,edge));
 gl_FragColor=vec4(color,alpha*.94);}`);p.name="Spreading tongues of electrical fire",p.renderOrder=10;let d=y(Ce.mobile?36:66,`uniform float time;uniform float power;varying vec2 vUv;varying float vSeed;${Em}
 void main(){float d=length((vUv-.5)*2.);float n=fbm(vUv*4.+vec2(vSeed,-time*.22));float a=smoothstep(1.,.15,d)*(.35+n*.6)*power;gl_FragColor=vec4(vec3(.075,.068,.058)+n*.045,a*.56);}`);d.name="Dark smoke from burned cable insulation",d.renderOrder=11;let M=new Ui(1,24);M.rotateX(-Math.PI/2);let x=new hn(M,new Fe({color:1051399,roughness:.95,transparent:!0,opacity:.62,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),60);x.count=0,x.frustumCulled=!1,x.raycast=()=>{},x.receiveShadow=!0,r.add(x);let _=new An(16739858,0,5,2),R=new An(16747557,0,3,2);r.add(_,R);let b=new Float32Array(84),T=new Rt;T.setAttribute("position",new nn(b,3).setUsage(yn));let P=new dr(T,new tr({color:16757581,transparent:!0,opacity:.9,depthWrite:!1}));P.name="Sparks at the melted charger cable",P.frustumCulled=!1,P.visible=!1,P.raycast=()=>{},r.add(P);function O(){if(o.origin)return o.origin;if(!i.energized||!e.leaks.length){u=null;return}let N=1/0;u=null;for(let W of e.leaks)for(let $ of i.cablePoints){let ee=Math.hypot($.x-W.origin.x,$.z-W.origin.z);ee<N&&(N=ee,u=$)}return u||void 0}function v(){if(!i.energized)return null;for(let N of i.cablePoints)for(let W of e.leaks)for(let $ of W.points)if(Math.hypot(N.x-$.x,N.z-$.z)<$.radius+.006)return N;return null}function S(N,W,$,ee,X=!1){if(o.phase==="idle"&&(!i.energized||e.leaks.length===0))return!1;let z=o.update(N,W,{live:i.energized,contact:o.phase==="idle"?v():null,viewer:$});o.origin&&(f.set(o.origin.x,o.origin.y,o.origin.z),i.meltCable(f,o.melt)),g!==o.phase&&(m={melting:"The acid is melting the plugged-in charger cable\u2026",burning:"The damaged cable sparks. Fire is spreading across the floor!",extinguishing:"The armed sprinklers trigger automatically. Water smothers the flames.",extinguished:"The fire is out. The charger is ruined, and the spilled acid is still dangerous."}[o.phase]||"",g=o.phase);let ae=o.water(N);s.update(N,ae,X),a.value=X?0:N,l.value=o.intensity;let he=0,F=0,te=0;ee.getWorldQuaternion(h);let J=Ce.mobile?2:3;for(let[ce,V]of o.patches.entries()){let ie=Math.min(1,(N-V.born)/1.2),k=t(V.x,V.z)+.014;if(c.position.set(V.x,k,V.z),c.quaternion.identity(),c.scale.set(V.radius*1.1,1,V.radius*.88),c.updateMatrix(),x.setMatrixAt(te++,c.matrix),!(o.intensity<=0))for(let B=0;B<J&&he<p.instanceMatrix.count;B++){let G=ce*2.4+B*2.1,de=V.radius*.4,Ee=(.34+(ce+B)%4*.12)*ie;c.position.set(V.x+Math.cos(G)*de,k+Ee*.5,V.z+Math.sin(G)*de),c.rotation.set(0,Math.atan2(ee.position.x-c.position.x,ee.position.z-c.position.z),0),c.scale.set(.25+V.radius*.85,Ee,1),c.updateMatrix(),p.setMatrixAt(he++,c.matrix)}}if(o.origin&&(o.intensity>0||o.phase==="melting")){let ce=Ce.mobile?24:42,V=o.origin;for(let ie=0;ie<ce;ie++){let k=(N*.27+ie*.618)%1,B=o.patches[ie%Math.max(1,o.patches.length)]||V,G=.15+k*1.65,de=.15+k*.85;c.position.set(B.x+Math.sin(ie*2.1+N*.3)*k*.25,t(B.x,B.z)+G,B.z+Math.cos(ie*1.7)*k*.19),c.quaternion.copy(h),c.rotateZ(ie+k*.6),c.scale.set(de,de*1.3,1),c.updateMatrix(),d.setMatrixAt(F++,c.matrix)}}if(p.count=he,d.count=F,x.count=te,p.instanceMatrix.needsUpdate=d.instanceMatrix.needsUpdate=x.instanceMatrix.needsUpdate=!0,o.origin){_.position.set(o.origin.x,.36,o.origin.z);let ce=o.patches.at(-1)||o.origin;R.position.set(ce.x,.26,ce.z);let V=X?1:.88+.07*Math.sin(N*17)+.05*Math.sin(N*29);_.intensity=4.5*o.intensity*V,R.intensity=2*o.intensity*V}if(P.visible=!X&&(o.phase==="melting"&&o.melt>.55||o.phase==="burning"&&o.patches.length<8),P.visible){for(let ce=0;ce<14;ce++){let V=(N*3+ce*.618)%1,ie=ce*2.4,k=V*.19,B=Math.max(0,.28*V-.26*V*V),G=o.origin,de=ce*6;b[de]=G.x+Math.cos(ie)*k,b[de+1]=G.y+.015+B,b[de+2]=G.z+Math.sin(ie)*k,b[de+3]=b[de]-.013*Math.cos(ie),b[de+4]=b[de+1]-.02,b[de+5]=b[de+2]-.013*Math.sin(ie)}T.attributes.position.needsUpdate=!0}return z}return{group:r,update:S,flowTarget:O,setEnvironment:s.setEnvironment,activateSprinklers:o.activateSprinklers,get phase(){return o.phase},get dying(){return o.dying},get sprinklersArmed(){return o.armed},blackout:o.blackout,takeMessage(){let N=m;return m="",N},reset(){o.reset(),s.reset(),u=null,m="",g="idle",p.count=d.count=x.count=0,P.visible=!1,_.intensity=R.intensity=0,l.value=0}}}async function bm(i,e,t=async()=>{}){let n=new xe;n.name="Abandoned technology office";let r=[],s=[],o=E=>(r.push(E),E),a=87021,l=()=>(a=a*1664525+1013904223>>>0,a/4294967296),c=(E,C)=>E+(C-E)*l(),h=vl;function f(E){let C=new zt(E);return C.colorSpace=yt,C.anisotropy=Math.min(Ce.mobile?2:8,i.capabilities.getMaxAnisotropy()),C}function u(E,C,D,q,Y,Z){let me=E.createRadialGradient(C,D,0,C,D,q);me.addColorStop(0,`rgba(${Y},${Z})`),me.addColorStop(1,`rgba(${Y},0)`),E.fillStyle=me,E.fillRect(C-q,D-q,q*2,q*2)}function m(E,C,D,q,Y){for(let Z=0;Z<D;Z++){E.fillStyle=`rgba(${q},${l()*Y})`;let me=l()*C,Xe=l()*C,nt=c(.4,2.2),Ht=c(.4,2);(!Ce.mobile||Z%4===0)&&E.fillRect(me,Xe,nt,Ht)}}function g(E,C="paint"){let[D,q]=h();q.fillStyle=E,q.fillRect(0,0,512,512);for(let Y=0;Y<210;Y++)u(q,l()*512,l()*512,c(4,70),Y%3?"27,33,23":"110,83,48",c(.025,.15));if(m(q,512,12e3,"18,25,18",.24),m(q,512,4e3,"200,192,159",.18),C==="wood")for(let Y=0;Y<550;Y++){q.strokeStyle=`rgba(36,29,17,${c(.02,.16)})`,q.lineWidth=c(.4,2);let Z=l()*512;q.beginPath(),q.moveTo(0,Z),q.bezierCurveTo(170,Z+c(-12,12),340,Z+c(-12,12),512,Z),q.stroke()}if(C==="metal")for(let Y=0;Y<250;Y++)u(q,l()*512,l()*512,c(2,18),"112,56,24",c(.1,.5));for(let Y=0;Y<80;Y++){q.strokeStyle=`rgba(197,190,160,${c(.08,.3)})`,q.lineWidth=c(.3,1.3);let Z=l()*512,me=l()*512;q.beginPath(),q.moveTo(Z,me),q.lineTo(Z+c(3,50),me+c(-2,4)),q.stroke()}return f(D)}let y=g("#8b8c77"),p=g("#b2b09a"),d=g("#817157","wood"),M=g("#4e5550","metal"),x=g("#44534b"),_=g("#66695a"),R=new Map,b=(E,C=.88,D=null,q=0)=>{let Y=[E,C,D?.uuid,q].join("|");return R.has(Y)||R.set(Y,Ce.mobile&&q===0?new jr({color:E,map:D}):new Fe({color:E,roughness:C,map:D,bumpMap:Ce.mobile?null:D,bumpScale:D?.008:0,metalness:q})),R.get(Y)},T=b(16777215,.98,y),P=b(16777215,.86,d),O=b(16777215,.8,p),v=b(16777215,.73,M,.42),S=b(16777215,.95,x),N=b(1514521,.86),W=b(1053970,.95),$=b(16777215,.98,_),ee=b(8555654,.4,null,.8);function X(E,C,D=n){let q=new at(E,C);return q.castShadow=!0,q.receiveShadow=!0,D.add(q),q}function z(E,C,D=v,q=n){let Y=X(new St(...E),D,q);return Y.position.set(...C),Y}let ae=new en(1,Ce.mobile?12:20,Ce.mobile?8:12);function he(E,C,D,q=n){let Y=X(ae,D,q);return Y.scale.set(...E),Y.position.set(...C),Y}function F(E,C,D,q=v,Y=n,Z=12){let me=X(new Nt(E,E,C,Ce.mobile?Math.min(Z,12):Z),q,Y);return me.position.set(...D),me}function te(E,C,D=.015,q=v,Y=n){let Z=new w(...E),me=new w(...C),Xe=me.clone().sub(Z),nt=F(D,Xe.length(),Z.clone().add(me).multiplyScalar(.5).toArray(),q,Y);return nt.quaternion.setFromUnitVectors(new w(0,1,0),Xe.normalize()),nt}function J(E,C=.008,D=N,q=n){let Y=new Yt(E.map(me=>new w(...me))),Z=X(new un(Y,Math.max(12,E.length*(Ce.mobile?3:8)),C,Ce.mobile?4:6,!1),D,q);return q===n&&E.some(me=>me[1]<.06)&&s.push(Z),Z}function ce(E,C,D,q=.025){q=Math.min(q,E*.45,C*.45);let Y=new Tt,Z=E/2,me=C/2;Y.moveTo(-Z+q,-me),Y.lineTo(Z-q,-me),Y.quadraticCurveTo(Z,-me,Z,-me+q),Y.lineTo(Z,me-q),Y.quadraticCurveTo(Z,me,Z-q,me),Y.lineTo(-Z+q,me),Y.quadraticCurveTo(-Z,me,-Z,me-q),Y.lineTo(-Z,-me+q),Y.quadraticCurveTo(-Z,-me,-Z+q,-me);let Xe=Math.min(.012,E/6,C/6,D/6),nt=new rn(Y,{depth:D-Xe*2,bevelEnabled:!0,bevelSize:Xe,bevelThickness:Xe,bevelSegments:2,steps:1,curveSegments:4});return nt.translate(0,0,-D/2+Xe),nt}function V(E,C,D,q=n){let Y=X(ce(...E),D,q);return Y.position.set(...C),Y}function ie(E,C,D,q=!1){let[Y,Z]=h(1024);for(let Xe=0;Xe<290;Xe++)u(Z,l()*1024,q?l()*1024:l()<.6?c(600,1060):l()*1024,c(12,140),"24,30,19",c(.03,.26));if(!q){let Xe=Z.createLinearGradient(0,0,0,1024);Xe.addColorStop(0,"rgba(29,35,24,.4)"),Xe.addColorStop(.3,"rgba(29,35,24,0)"),Xe.addColorStop(.75,"rgba(29,35,24,.07)"),Xe.addColorStop(1,"rgba(23,30,21,.72)"),Z.fillStyle=Xe,Z.fillRect(0,0,1024,1024);for(let nt=0;nt<80;nt++){let Ht=l()*1024,cn=l()*220;Z.strokeStyle=`rgba(62,51,30,${c(.03,.26)})`,Z.lineWidth=c(1,6),Z.beginPath(),Z.moveTo(Ht,cn),Z.lineTo(Ht+c(-8,8),cn+c(80,750)),Z.stroke()}}m(Z,1024,17e3,"16,25,17",.28);let me=X(new Mt(E,C),new Fe({map:f(Y),transparent:!0,depthWrite:!1,roughness:1}),D);return me.castShadow=!1,me}z([7.8,.15,8.6],[0,-.075,.2],$);let k=ie(7.8,8.6,n,!0);k.rotation.x=-Math.PI/2,k.position.set(0,.003,.2);let B=z([7.8,3.35,.16],[0,1.675,-4.08],T),G=z([.16,3.35,8.6],[-3.98,1.675,.2],b(8556677,.98,y));z([.16,1.1,8.6],[3.98,.55,.2],T),z([.16,.65,8.6],[3.98,3.025,.2],T),z([.16,1.6,1.2],[3.98,1.9,-3.4],T),z([.16,1.6,4.8],[3.98,1.9,2.1],T),ie(7.8,3.35,n).position.set(0,1.675,-3.99);let Ee=ie(8.6,3.35,n);Ee.rotation.y=Math.PI/2,Ee.position.set(-3.89,1.675,.2);for(let E=0;E<9;E++)z([.012,2.2,.014],[-3.85+E*.96,1.66,-3.977],v);z([7.8,.045,.035],[0,.58,-3.96],v),z([7.8,.045,.035],[0,2.76,-3.96],v);for(let E of[-3.86,3.86])z([.045,.13,8.6],[E,.065,.2],N);z([7.8,.13,.04],[0,.065,-3.95],N);for(let E=0;E<26;E++){let C=new Tt,D=c(-3.65,3.65),q=c(.24,3.1),Y=c(.05,.22),Z=c(.05,.26);for(let Xe=0;Xe<9;Xe++){let nt=Xe/9*Math.PI*2,Ht=c(.6,1),cn=D+Math.cos(nt)*Y*Ht,Kt=q+Math.sin(nt)*Z*Ht;Xe?C.lineTo(cn,Kt):C.moveTo(cn,Kt)}C.closePath();let me=X(new nr(C),b(E%3?5199175:11644305,.99));me.position.z=-3.972,me.castShadow=!1}let De=z([7.8,.1,8.6],[0,3.36,.2],N);for(let E=-3.6;E<3.9;E+=1.2)z([.028,.032,8.6],[E,3.12,.2],v);for(let E=-3.9;E<4.5;E+=1.2)z([7.8,.032,.028],[0,3.12,E],v);let K=b(10132616,.98,y);for(let E=-3;E<3.9;E+=1.2)for(let C=-3.3;C<4.5;C+=1.2){if(l()<.25)continue;let D=z([1.15,.035,1.15],[E,3.145,C],K);l()<.12&&(D.rotation.z=c(-.13,.13),D.position.y-=.06)}for(let E=0;E<5;E++)J([[-2+E*.45,3.3,-1.6],[-1.9+E*.45,2.8,-1.5],[-1.7+E*.4,2.53,-1.6],[-1.3+E*.35,3.29,-1.8]],.009,N);let I=new xe;I.position.set(3.88,1.9,-1.5),I.rotation.y=-Math.PI/2,n.add(I);let[pe,ye]=h();ye.fillStyle="#778c88",ye.fillRect(0,0,512,512);for(let E=0;E<15;E++){let C=E*43,D=c(25,60),q=c(70,290);ye.fillStyle=E%2?"#4b5d58":"#526560",ye.fillRect(C,512-q,D,q);for(let Y=0;Y<5;Y++)ye.fillStyle="#879186",ye.fillRect(C+8,512-q+18+Y*34,4,10)}let ge=X(new Mt(2.8,1.6),new mt({map:f(pe),color:3622209}),I);ge.position.z=-.13,ge.castShadow=!1;for(let E of[-1.43,0,1.43])z([.055,1.7,.09],[E,0,.025],v,I);for(let E of[-.83,.83])z([2.92,.055,.09],[0,E,.025],v,I);let ve=b(10336426,.25,null,.25);ve.transparent=!0,ve.opacity=.18,ve.side=Ct;for(let E of[-.72,.72]){let C=z([1.37,1.55,.008],[E,0,.04],ve,I);C.castShadow=!1}for(let E=0;E<17;E++){if([5,9,14].includes(E))continue;let C=z([2.77,.047,.015],[0,.73-E*.086,.11],b(8160114,.82,p),I);C.rotation.x=.35,(E===7||E===12)&&(C.rotation.z=E===7?.035:-.05,C.rotation.x=.9)}for(let E of[-.86,.86])J([[E,.8,.15],[E,.12,.16],[E,-.77,.15]],.005,N,I);J([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.1,.18]],.006,N,I),await t("Setting up the workstations\u2026");let Le=B0(i);a=577513849;let Se=ce(.77,.45,.035,.012),H=b(7042164,.38,null,.7);function A(E,C,D=0,q="cracked",Y=1){let Z=new xe;Z.position.set(...C),Z.rotation.y=D,Z.scale.setScalar(Y),E.add(Z),Z.name="Damaged widescreen monitor",X(Se,N,Z).position.set(0,.375,0),V([.31,.018,.2],[0,.013,-.025],H,Z),z([.055,.24,.025],[0,.14,-.035],H,Z),Le.add(Z,q),z([.18,.16,.032],[0,.36,-.03],H,Z),he([.004,.004,.003],[.35,.163,.022],q==="live"?new mt({color:9223008}):N,Z);for(let nt=0;nt<11;nt++)z([.015,.002,.003],[-.25+nt*.05,.585,-.02],v,Z);let Xe=J([[.1,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,N,Z);return Xe.name="Monitor power cable",Xe.userData.ignoreFloorContact=!0,Z}let re=new St(.023,.008,.023);function _e(E,C,D=0){let q=new xe;q.position.set(...C),q.rotation.y=D,E.add(q),V([.47,.035,.18],[0,0,0],O,q);let Y=new hn(re,b(6844e3,.8),56);for(let Z=0;Z<56;Z++){let me=new gt;me.position.set(-.206+Z%14*.031,.024,-.065+Math.floor(Z/14)*.036),me.updateMatrix(),Y.setMatrixAt(Z,me.matrix)}return q.add(Y),z([.14,.008,.022],[0,.024,.07],N,q),q}function Ae(E,C,D=0,q=!1){let Y=new xe;Y.position.set(...C),Y.rotation.y=D,E.add(Y),V([.25,.53,.46],[0,.265,0],O,Y);for(let Z=.32;Z<.49;Z+=.065)z([.195,.042,.012],[0,Z,.239],N,Y);for(let Z=0;Z<7;Z++)z([.16,.008,.012],[0,.055+Z*.025,.239],v,Y);if(q){z([.012,.42,.35],[.139,.27,0],N,Y);for(let Z=0;Z<3;Z++)z([.015,.09,.25],[.15,.16+Z*.105,-.02],b(2706228,.83),Y)}return Y}function Te(E,C,D,q=0){let Y=new xe;Y.position.set(E,0,C),Y.rotation.y=q,n.add(Y),z([D,.075,.86],[0,.82,0],P,Y),z([D,.035,.025],[0,.794,.443],v,Y);for(let Z of[-D/2+.08,D/2-.08])z([.048,.79,.68],[Z,.39,0],v,Y),z([.24,.035,.74],[Z,.018,0],N,Y);return z([D-.16,.19,.035],[0,.45,-.35],v,Y),Y}let Je=Te(-1,-3.37,5.4);for(let E=0;E<6;E++){let C=-2.24+E*.84;A(Je,[C,.86,-.05],c(-.13,.13),E===3?"live":E%2?"hole":"cracked",c(.88,1.04)),_e(Je,[C+.03,.87,.3],c(-.16,.16)),E%2===0&&Ae(Je,[C+.18,0,-.1],c(-.1,.1),!0)}let Me=Te(-1.1,-2.25,2.6,0);for(let E=0;E<3;E++)A(Me,[-.84+E*.83,.86,-.1],c(-.2,.2),E===0?"live":"hole",.9),_e(Me,[-.84+E*.83,.87,.3],c(-.2,.2));let He=A(n,[-.8,.31,-1.45],.42,"hole",.95);He.rotation.set(-1.38,.42,.21),o(He);let Ke=A(n,[-2.72,.24,2.58],-.45,"cracked",.73);Ke.rotation.x=-.56,Ke.rotation.z=.24,o(Ke);let Pe=Ae(n,[-2.22,.13,-.72],.35,!0);Pe.rotation.z=Math.PI/2,o(Pe);for(let E=0;E<3;E++)o(Ae(n,[-3.32,0,-2.45+E*.31],-.18,!0)).scale.setScalar(.9);let Ve=a,Qe=b(16777215,.78,g("#afb4a9","metal"),.22),Q=b(6449762,.7,null,.25),se=b(3225908,.86,x),we=b(11383205,.82),Ie=b(6845548,.46,null,.73);function be(E=0){let[C,D]=h(512);D.lineWidth=1.8;for(let q=0;q<512;q+=7)D.strokeStyle=q%21?"#a0a59a":"#686f65",D.beginPath(),D.moveTo(q,0),D.lineTo(q,512),D.stroke();for(let q=0;q<512;q+=6)D.strokeStyle=q%18?"#7f897e":"#b0b4a5",D.lineWidth=q%18?1.6:2.1,D.beginPath(),D.moveTo(0,q),D.lineTo(512,q),D.stroke();if(E){D.globalCompositeOperation="destination-out",D.fillStyle="#000",D.beginPath();let q=E===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];q.forEach(([Y,Z],me)=>me?D.lineTo(Y,Z):D.moveTo(Y,Z)),D.closePath(),D.fill(),D.lineWidth=3;for(let Y=0;Y<16;Y++){let[Z,me]=q[Y%q.length];D.beginPath(),D.moveTo(Z,me),D.lineTo(Z+c(-24,24),me+c(-18,18)),D.stroke()}}return new Fe({map:f(C),color:14803929,roughness:.93,side:Ct,alphaTest:.3,alphaToCoverage:!0})}let U=[be(),be(1),be(2)];function Re(E,C,D,q,Y=0){let me=new Yt(E.map(_n=>new w(_n[0],_n[1],0)),!0,"centripetal").getSpacedPoints(96).slice(0,-1),Xe=[],nt=[],Ht=[],cn=12,Kt=me.length,_i=Math.min(...me.map(_n=>_n.x)),Zi=Math.max(...me.map(_n=>_n.x)),Ko=Math.min(...me.map(_n=>_n.y)),D1=Math.max(...me.map(_n=>_n.y));for(let _n=0;_n<=cn;_n++)for(let Fr=0;Fr<Kt;Fr++){let Qo=_n/cn,rc=C[0]+(me[Fr].x-C[0])*Qo,jo=C[1]+(me[Fr].y-C[1])*Qo;if(Xe.push(...D(rc,jo,Qo)),nt.push((rc-_i)/(Zi-_i),(jo-Ko)/(D1-Ko)),_n<cn){let vh=_n*Kt+Fr,Mh=_n*Kt+(Fr+1)%Kt;Ht.push(vh,Mh,vh+Kt,Mh,Mh+Kt,vh+Kt)}}let Jo=new Rt;Jo.setAttribute("position",new ut(Xe,3)),Jo.setAttribute("uv",new ut(nt,2)),Jo.setIndex(Ht),Jo.computeVertexNormals();let U1=X(Jo,U[Y],q);U1.customDepthMaterial=new Ea({depthPacking:Ld,map:U[Y].map,alphaTest:.3,side:Ct});for(let[_n,Fr,Qo]of[[1,.025,Qe],[.925,.007,Q]]){let rc=me.map(jo=>new w(...D(C[0]+(jo.x-C[0])*_n,C[1]+(jo.y-C[1])*_n,_n)));X(new un(new Yt(rc,!0),96,Fr,8,!0),Qo,q)}}function oe(E,C=1){let D=new xe;D.name="Torn mesh back and lumbar support",E.add(D),Re([[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.6],[0,.615],[.17,.6],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]],[0,.3],(Y,Z,me)=>[Y,Z,-.11*Z/.615+.035*(1-me*me)],D,C),J([[0,-.09,-.07],[0,.13,-.08],[-.17,.3,-.09],[-.23,.37,-.09]],.018,Qe,D),J([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,Qe,D);for(let Y of[.12,.235])he([.048,.073,.024],[0,Y,-.055],se,D);if(J([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,Q,D),C)for(let Y=0;Y<5;Y++)J([[-.13+Y*.012,.2,-.015],[-.12+Y*.012,.15,.001],[-.14+Y*.012,.1,-.02]],.0016,U[0],D);return D}function fe(E,C,D=!1){let q=new xe;E.add(q);let Y=C*.295;if(J([[C*.22,.46,-.17],[Y,.53,-.2],[Y,.67,-.17],[Y,.72,-.07]],.023,Qe,q),D)return he([.025,.011,.026],[Y,.72,-.07],we,q),q;let Z=he([.058,.034,.15],[Y,.745,.01],se,q);return Z.rotation.z=C*.06,te([Y,.68,-.085],[Y,.734,.045],.019,Q,q),q}function Ue(E,C,D,q,Y=0){let Z=new xe;Z.position.set(C,D,q),Z.rotation.y=Y,E.add(Z),te([0,.028,0],[0,.078,.015],.012,Ie,Z);for(let me of[-1,1]){let Xe=F(.039,.022,[me*.021,0,0],W,Z,16);Xe.rotation.z=Math.PI/2,he([.002,.018,.018],[me*.033,0,0],Q,Z)}return Z}function ze(E,C=-1){let D=new xe;D.name="Five-spoke caster base",E.add(D),F(.057,.09,[0,.16,0],Qe,D,16),F(.031,.2,[0,.28,0],Ie,D,16);for(let q=0;q<5;q++){let Y=q/5*Math.PI*2+.25,Z=Math.cos(Y),me=Math.sin(Y);if(q===C){te([0,.16,0],[Z*.13,.135,me*.13],.025,Qe,D),he([.024,.014,.018],[Z*.13,.135,me*.13],we,D);continue}J([[0,.18,0],[Z*.14,.145,me*.14],[Z*.31,.092,me*.31]],.022,Qe,D),Ue(D,Z*.31,.04,me*.31,Y)}return D}function it(E,C,D,q){return E.position.set(C,0,D),E.rotation.set(...q),E.updateMatrixWorld(!0),o(E)}function Et(E,C,D,q={}){let Y=new xe;Y.name="Broken Aeron-style mesh chair",n.add(Y),q.noBase||ze(Y,q.missingSpoke??-1),V([.24,.095,.27],[0,.405,-.035],Q,Y),F(.045,.13,[0,.405,0],Qe,Y,16),te([-.14,.41,.015],[-.245,.405,.05],.012,Ie,Y),he([.035,.016,.055],[-.25,.405,.055],se,Y),he([.055,.025,.04],[.18,.407,-.04],se,Y),Re([[-.2,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.2,-.23],[0,-.25]],[0,0],(me,Xe,nt)=>[me,.51-.035*(1-nt*nt)-.025*Math.max(0,Xe/.25),Xe],Y,q.seatTear??1);for(let me of[-1,1])J([[me*.12,.41,-.14],[me*.22,.46,-.2],[me*.24,.49,-.15]],.023,Qe,Y),fe(Y,me,me===q.brokenArm);if(!q.noBack){let me=oe(Y,q.backTear??1);me.position.set(0,.55,-.22),me.rotation.set(q.backLean??0,0,q.backTwist??0)}return it(Y,E,C,D)}Et(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2}),Et(-.3,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16}),Et(2.75,3.3,[-.55,-.8,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.2}),Et(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:!0}),Et(1.35,1.42,[-.3,-.5,-1.28],{noBase:!0,brokenArm:-1,backTwist:-.14,backTear:2});let Wt=ze(n,1);Wt.name="Detached chair base",it(Wt,2.35,2.53,[2.7,.36,.22]);let xt=oe(n,2);xt.name="Snapped mesh backrest",it(xt,-.75,2.3,[-1.6,.22,-.4]);let Pt=fe(n,1);Pt.name="Broken chair arm",it(Pt,1.4,2.62,[1.48,.71,.15]),o(Ue(n,2.37,.045,2.84,.7)),o(Ue(n,-2.15,.045,.95,-.4)),a=Ve;for(let E=0;E<22;E++)l();let an=Te(2.55,-3.38,1.92);z([1.7,.72,.72],[0,.4,-.025],b(6713960,.94,d),an);for(let E of[-.42,.42]){let C=z([.77,.24,.045],[E,.66,.37],P,an);E>0&&(C.position.z=.51,C.rotation.z=-.04),te([E-.13,.66,.41],[E+.13,.66,.41],.014,v,an)}let dn=new xe;dn.position.set(-.27,.87,-.04),an.add(dn),V([.49,.6,.37],[0,.3,0],v,dn),z([.4,.35,.025],[0,.26,.2],N,dn),V([.34,.15,.06],[0,.5,.2],O,dn),z([.12,.05,.008],[-.07,.515,.236],b(2243883,.4),dn);for(let E of[-.08,.08])te([E,.38,.21],[E,.31,.26],.018,ee,dn);z([.37,.04,.23],[0,.045,.22],N,dn);for(let E=0;E<7;E++)z([.017,.012,.19],[-.14+E*.047,.07,.22],ee,dn);let sr=F(.12,.17,[0,.68,-.015],new Fe({color:5069384,transparent:!0,opacity:.55,roughness:.45}),dn,24),ci=z([.27,.022,.25],[.025,.78,-.015],N,dn);ci.rotation.z=.13;let or=b(12039066,.7,p);function st(E,C,D=0){let q=new xe;q.position.set(...C),q.rotation.z=D,E.add(q);let Y=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(me=>new Be(...me));X(new Jr(Y,24,0,Math.PI*1.9),or,q);let Z=X(new Qt(.036,.008,8,20,Math.PI*1.6),or,q);return Z.rotation.x=Math.PI/2,Z.position.set(.066,.07,0),q}st(dn,[0,.07,.23]),st(an,[.46,.87,.25],1.25),st(an,[.64,.87,-.02]);let et=b(3877398,.33),rt=X(new Ui(.18,32),et,an);rt.rotation.x=-Math.PI/2,rt.position.set(.48,.862,.19),rt.scale.y=.65,rt.castShadow=!1,V([.52,.83,.54],[3.28,.42,-2.4],O);let ct=z([.49,.78,.045],[3.21,.43,-2.1],O);ct.rotation.y=.24,z([.035,.23,.04],[3.04,.56,-2.065],v),z([.36,.8,.36],[3.39,.4,-1.72],O);let _t=F(.16,.4,[3.39,1.04,-1.72],new Fe({color:7378315,transparent:!0,opacity:.38,roughness:.34}),n,24);_t.rotation.z=.08;let Oe=new xe;Oe.name="Broken lopsided foosball table",Oe.position.set(2.24,-.104,.03),Oe.rotation.set(0,-.18,-.22),n.add(Oe);let lt=b(13812642,.87,d),In=b(8099956,.92,x);z([1.18,.25,1.91],[0,.91,0],lt,Oe),z([1.04,.025,1.74],[0,1.048,0],In,Oe);for(let E of[-.61,.61])z([.1,.18,2.02],[E,1.12,0],lt,Oe);z([1.14,.18,.08],[0,1.12,-.99],lt,Oe);let Zt=new Tt;Zt.moveTo(-.57,1.03),Zt.lineTo(.57,1.03),Zt.lineTo(.57,1.21),Zt.lineTo(.23,1.21),Zt.lineTo(.12,1.07),Zt.lineTo(.02,1.15),Zt.lineTo(-.09,1.07),Zt.lineTo(-.16,1.21),Zt.lineTo(-.57,1.21),Zt.closePath();let mn=X(new rn(Zt,{depth:.08,bevelEnabled:!1}),lt,Oe);mn.position.z=.95;for(let E of[-.99,.99])z([.3,.1,.012],[0,1.085,E+(E>0?-.045:.045)],N,Oe);for(let E of[-.47,.47])for(let C of[-.8,.8]){let D=E>0&&C>0,q=E>0;if(z([.11,D?.24:q?.57:.8,.12],[E,D?.68:q?.515:.4,C],v,Oe),D)for(let Y=0;Y<4;Y++)z([.012,.09,.018],[E-.04+Y*.023,.555,C+c(-.04,.04)],P,Oe).rotation.z=c(-.2,.2)}let L=z([.11,.57,.12],[2.89,.09,.98],v);L.rotation.set(.05,.37,1.42);let j=z([.45,.045,.08],[2.55,.045,1.32],lt);j.rotation.y=.4;let le=[];function ue(E,C){le.push(...E,...C)}for(let E of[-.8,.8])ue([-.48,1.065,E],[.48,1.065,E]);for(let E of[-.48,.48])ue([E,1.065,-.8],[E,1.065,.8]);ue([-.48,1.065,0],[.48,1.065,0]);for(let E=0;E<48;E++){let C=E/48*Math.PI*2,D=(E+1)/48*Math.PI*2;ue([Math.cos(C)*.19,1.065,Math.sin(C)*.19],[Math.cos(D)*.19,1.065,Math.sin(D)*.19])}let ne=new Rt;ne.setAttribute("position",new ut(le,3)),Oe.add(new dr(ne,new tr({color:9674366})));let Ne=[b(9124144,.8),b(10658186,.8)];for(let E=0;E<8;E++){let C=-.78+E*.223,D=E%2?1:-1;E===5?J([[-.91,1.21,C],[-.24,1.21,C],[.18,1.36,C+.13],[.91,1.17,C+.08]],.012,ee,Oe):te([-.91,1.21,C],[.91,1.21,C],.012,ee,Oe),E!==4&&te([D*.8,1.21,C],[D*1.02,1.21,C],.034,N,Oe);let q=E===0||E===7?1:E===1||E===6?2:3;for(let Y=0;Y<q;Y++){if(E===3&&Y===0||E===6&&Y===1)continue;let Z=(Y-(q-1)/2)*.29;z([.055,.1,.037],[Z,1.195,C],Ne[E%2],Oe),he([.031,.035,.031],[Z,1.28,C],Ne[E%2],Oe),z([.06,.045,.045],[Z,1.11,C],Ne[E%2],Oe)}}he([.024,.024,.024],[.46,1.09,.69],O,Oe),J([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.3],[.12,1.068,.23],[.48,1.068,.37]],.007,N,Oe);let We=z([.055,.13,.04],[.38,1.09,.51],Ne[0],Oe);We.rotation.z=Math.PI/2;for(let E of[-1.07,1.07]){te([-.32,1.27,E],[.32,1.27,E],.008,ee,Oe);for(let C=0;C<5;C++)he([.025,.03,.025],[-.25+C*.07,1.27,E],Ne[E>0?1:0],Oe)}let Ge=new xe;Ge.name="MacBook Pro on the floor",Ge.position.set(.45,.027,2.18),Ge.rotation.y=Math.atan2(e.x-Ge.position.x,e.z-Ge.position.z),n.add(Ge);let je=Ge.position.clone().add(new w(1.18,0,0).applyAxisAngle(new w(0,1,0),Ge.rotation.y)),ht=nm(e,je);n.add(ht.group);let ft=im(je);n.add(ft.group),o(ft.group);let tt=b(8884628,.35,null,.72),Dt=b(1053975,.7);function bt(E,C,D,q,Y,Z,me=!1){let Xe=Math.min(.012,E/6,C/6,D/6),nt=X(ce(E-2*Xe,C-2*Xe,D,.026-Xe),Y,Z);return nt.position.set(...q),me&&(nt.rotation.x=-Math.PI/2),nt}bt(.88,.59,.026,[0,0,0],tt,Ge,!0),bt(.66,.275,.003,[0,.0145,-.065],Dt,Ge,!0);let kt=F(.013,.77,[0,.02,-.281],N,Ge,20);kt.rotation.z=Math.PI/2;let Vt=new xe;Vt.position.set(0,.034,-.295),Vt.rotation.x=Math.PI/2,Ge.add(Vt),bt(.88,.59,.018,[0,.295,0],tt,Vt),bt(.856,.566,.005,[0,.295,.01],Dt,Vt);for(let E of[-.34,.34])for(let C of[-.21,.21])he([.025,.006,.025],[E,-.014,C],W,Ge);let It=document.createElement("canvas");It.width=256,It.height=384;let ot=It.getContext("2d");Yd(ot,28,42,200);let vn=f(It),Bt=new Fe({map:vn,transparent:!0,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:vn,emissive:16777215,emissiveIntensity:.14}),sn=X(new Mt(.115,.1725),Bt,Vt);sn.name="Off-center Figma vinyl sticker",sn.position.set(.265,.365,-.0108),sn.rotation.set(0,Math.PI,-.14),sn.castShadow=!1;let[Ye,$e]=h(1024,640);$e.fillStyle="#111b22",$e.fillRect(0,0,1024,640),$e.fillStyle="#222e36",$e.fillRect(0,0,1024,38),$e.fillRect(0,38,140,602),$e.fillRect(894,38,130,602),Yd($e,15,6,17),$e.font="13px sans-serif",$e.fillStyle="#bac6ca",$e.fillText("Figma / Wireframes",44,25);for(let E=0;E<7;E++)$e.fillStyle=E===2?"#48616b":"#657a80",$e.fillRect(18,85+E*34,85-E%3*18,3);for(let E=0;E<3;E++){let C=181+E*231;$e.fillStyle="#b2bfbb",$e.fillRect(C,118,197,390),$e.fillStyle="#465b62",$e.fillRect(C+12,137,173,19),$e.fillRect(C+12,175,173,86),$e.strokeStyle="#53696d",$e.lineWidth=2,$e.beginPath(),$e.moveTo(C+12,175),$e.lineTo(C+185,261),$e.moveTo(C+185,175),$e.lineTo(C+12,261),$e.stroke();for(let D=0;D<5;D++)$e.fillStyle="#82918f",$e.fillRect(C+13,278+D*20,c(75,170),4);$e.fillStyle="#526c72",$e.fillRect(C+14,401,169,28),$e.strokeStyle="#788c8d",$e.strokeRect(C+14,447,78,39),$e.strokeRect(C+105,447,78,39)}for(let E=0;E<12;E++)$e.fillStyle="#50666e",$e.fillRect(912,84+E*31,c(35,90),3);let jn=f(Ye),Gt=new mt({map:jn,color:8360598}),Ln=X(new Mt(.823,.525),Gt,Vt);Ln.position.set(0,.3,.013),Ln.castShadow=!1,z([.076,.014,.002],[0,.556,.014],Dt,Vt),he([.003,.003,.001],[0,.553,.0155],b(1978424,.2),Vt);let[Go,qn]=h(512,64);qn.font="22px sans-serif",qn.textAlign="center",qn.fillStyle="#9ca5a6",qn.fillText("MacBook Pro",256,40);let Fs=X(new Mt(.14,.018),new mt({map:f(Go),transparent:!0}),Vt);Fs.position.set(0,.025,.013),Fs.castShadow=!1;let[eh,Ci]=h(1024);Ci.fillStyle="#151b1e",Ci.fillRect(0,0,1024,1024),Ci.strokeStyle="#3e494d",Ci.fillStyle="#9ca5a6",Ci.font="25px sans-serif",Ci.textAlign="center";let Qg=["1234567890-=","QWERTYUIOP[]","ASDFGHJKL;\u2019","ZXCVBNM,./"];for(let E=0;E<4;E++)for(let C=0;C<12;C++){let D=18+C*83,q=74+E*181;Ci.strokeRect(D,q,72,145),Ci.fillText(Qg[E][C]||"",D+36,q+86)}Ci.strokeRect(250,825,524,125);let Af=X(new Mt(.635,.257),new Fe({map:f(eh),roughness:.7}),Ge);Af.rotation.x=-Math.PI/2,Af.position.set(0,.0165,-.065);let db=bt(.34,.17,.001,[0,.0135,.174],b(6714488,.44,null,.62),Ge,!0),Cf=new hn(new Ui(.0012,5),N,480);for(let E=0;E<480;E++){let C=new gt,D=E<240?-1:1,q=E%240;C.position.set(D*(.355+q%8*.006),.017,-.196+Math.floor(q/8)*.0085),C.rotation.x=-Math.PI/2,C.updateMatrix(),Cf.setMatrixAt(E,C.matrix)}Ge.add(Cf);for(let E of[-1,1])for(let C=0;C<3;C++)z([.003,.006,.035],[E*.444,.001,-.18+C*.065],Dt,Ge);let th=new An(9285310,0,1.4,2);th.position.set(0,.29,.14),Vt.add(th);let jg=Gt.color.clone();Gt.color.setScalar(0);let zs=!1,ar=0,Xa=!1;function nh(E){Vt.rotation.x=ke.lerp(Math.PI/2,-.2,E);let C=ke.smoothstep(E,.22,.72);Gt.color.copy(jg).multiplyScalar(C),th.intensity=.6*C}let Pf={object:Ge,screen:Ln,get isReady(){return ar===1},get isOpen(){return zs},get openProgress(){return ar},getLidGrip(E){return Vt.updateWorldMatrix(!0,!1),Vt.localToWorld(E.set(.12,.6,-.004))},setOpenProgress(E){Xa=!0,ar=ke.clamp(E,0,1),zs=ar>0,nh(ar)},open(){return zs?!1:(Xa=!1,zs=!0,!0)},close(){Xa=!1,zs=!1,ar=0,nh(0)},update(E,C=!1){Xa||!zs||ar===1||(ar=C?1:Math.min(1,ar+E/.95),nh(ke.smootherstep(ar,0,1)))}};function e1(){let[E,C]=h();C.fillStyle="#b2af94",C.fillRect(0,0,512,512),C.fillStyle="#4f584c";for(let D=0;D<35;D++){let q=35+D*12;C.fillRect(30,q,c(100,430),c(1,3))}return C.strokeStyle="rgba(64,54,28,.4)",C.lineWidth=4,C.beginPath(),C.arc(345,130,61,0,Math.PI*2),C.stroke(),m(C,512,8e3,"49,45,27",.16),f(E)}let t1=b(16777215,.99,e1()),n1=b(2836532,.88),i1=[O,v,P,b(8619381,.97)],ih=[],rh=[];for(let E=0;E<82;E++){let C=c(-3.62,3.58),D=c(-3.75,4);Math.abs(C)<.65&&D<.8&&D>-.9&&(C-=1.2);let q=X(new Mt(c(.13,.29),c(.17,.37),4,4),t1),Y=c(-.1,.1),Z=c(-.07,.07),me=l()*Math.PI*2,Xe=c(.012,.038);q.rotation.set(-Math.PI/2,0,me),q.position.set(C,.005,D),q.material.side=Ct,q.name="Paper resting on the floor";let nt=q.geometry.attributes.position;for(let Ht=0;Ht<nt.count;Ht++)nt.setZ(Ht,Math.abs(Math.sin(nt.getX(Ht)*33+Y)*Math.sin(nt.getY(Ht)*24+Z))*.0015+Xe*.008);ih.push(q)}for(let E=0;E<95;E++){let C=c(-3.65,3.65),D=c(-3.7,4);Math.abs(C)<.8&&D>-.8&&D<1.3&&(C-=1.7);let q=z([c(.025,.17),c(.015,.065),c(.035,.2)],[C,c(.025,.055),D],i1[E%4]);q.rotation.set(c(-.13,.13),l()*Math.PI*2,c(-.13,.13)),q.name="Fallen casing fragment",o(q)}for(let E=0;E<9;E++){let C=new xe;C.position.set(c(-3,3),.028,c(-2,3)),C.rotation.y=l()*6,n.add(C),C.name="Loose circuit board",o(C),z([.18,.012,.24],[0,0,0],n1,C);for(let D=0;D<4;D++)z([.035,.017,.05],[-.055+D%2*.1,.013,-.07+Math.floor(D/2)*.12],N,C)}for(let E=0;E<12;E++){let C=z([.09,.018,.09],[c(-3.5,3.5),.03,c(-3.4,3.7)],N);C.rotation.y=l()*6,z([.06,.003,.03],[0,.011,0],O,C),C.name="Broken key cap",o(C)}for(let E=0;E<14;E++){let C=z([c(.3,.7),.012,c(.3,.8)],[c(-3.4,3.4),.007,c(-3.5,3.7)],b(E%2?8948860:10197637,.98,x));C.rotation.y=c(-.15,.15),rh.push(C)}let Yn=Q0(rh);function If(E,C,D){E.save(),E.lineCap="round";for(let[Y,Z,me,Xe]of D){for(let nt=0;nt<13;nt++){let Ht=Z+nt*Xe/12;E.strokeStyle=C,E.globalAlpha=c(.65,.94),E.lineWidth=c(12,27),E.beginPath(),E.moveTo(Y+c(-18,35),Ht),E.quadraticCurveTo(Y+me*.45,Ht+c(-12,12),Y+me+c(-35,18),Ht+c(-8,8)),E.stroke()}E.globalAlpha=1;for(let nt=0;nt<8;nt++)u(E,Y+l()*me,Z+l()*Xe,c(13,43),"54,66,61",c(.035,.09))}E.globalAlpha=1;for(let Y=0;Y<95;Y++){let Z=l()*1024,me=l()<.55?c(800,1045):l()*1024;u(E,Z,me,c(14,95),Y%3?"44,49,38":"103,77,42",c(.045,.16))}let q=E.createLinearGradient(0,0,0,1024);q.addColorStop(0,"rgba(43,44,32,.30)"),q.addColorStop(.13,"rgba(43,44,32,0)"),q.addColorStop(.77,"rgba(43,44,32,0)"),q.addColorStop(1,"rgba(44,40,27,.38)"),E.fillStyle=q,E.fillRect(0,0,1024,1024);for(let Y=0;Y<23;Y++){let Z=l()*1024,me=c(8,105);E.strokeStyle=`rgba(86,67,38,${c(.06,.17)})`,E.lineWidth=c(1.5,6),E.beginPath(),E.moveTo(Z,me),E.bezierCurveTo(Z+4,me+60,Z-3,me+125,Z+c(-5,5),me+c(130,460)),E.stroke()}m(E,1024,12e3,"36,42,30",.21),E.restore()}function sh(E){let[C,D]=h(1024);D.fillStyle="#bfc4b6",D.fillRect(0,0,1024,1024),D.strokeStyle="#304a4d",D.fillStyle="#304a4d",D.lineWidth=4,D.font="28px sans-serif",D.fillText(E?"ONBOARDING / FIRST RUN":"WORKSPACE / DASHBOARD",45,67);function q(Y,Z){D.beginPath(),D.moveTo(Y,Z),D.lineTo(Y+50,Z),D.lineTo(Y+37,Z-11),D.moveTo(Y+50,Z),D.lineTo(Y+37,Z+11),D.stroke()}if(E)for(let Y=0;Y<3;Y++){let Z=48+Y*330;D.strokeRect(Z,154,253,593),D.strokeRect(Z+14,174,225,544),D.fillRect(Z+80,187,91,5),D.strokeRect(Z+32,225,189,130),D.beginPath(),D.moveTo(Z+32,225),D.lineTo(Z+221,355),D.moveTo(Z+221,225),D.lineTo(Z+32,355),D.stroke();for(let me=0;me<4;me++)D.fillRect(Z+31,397+me*25,170-me%2*41,4);D.strokeRect(Z+32,524,188,54),D.strokeRect(Z+32,602,188,54),Y<2&&q(Z+266,451),D.font="23px sans-serif",D.fillText(["01 / welcome","02 / connect","03 / explore"][Y],Z+23,803)}else for(let Y=0;Y<2;Y++){let Z=45+Y*498;D.strokeRect(Z,165,436,525),D.strokeRect(Z,165,436,44),D.strokeRect(Z+14,223,87,448);for(let me=0;me<5;me++)D.fillRect(Z+25,246+me*40,59-me%2*17,4);D.strokeRect(Z+118,230,297,133),D.beginPath(),D.moveTo(Z+135,343),D.lineTo(Z+171,300),D.lineTo(Z+212,325),D.lineTo(Z+270,265),D.lineTo(Z+328,293),D.lineTo(Z+397,248),D.stroke();for(let me=0;me<2;me++)for(let Xe=0;Xe<2;Xe++){D.strokeRect(Z+118+Xe*154,385+me*145,139,124),D.fillRect(Z+131+Xe*154,404+me*145,92,5);for(let nt=0;nt<3;nt++)D.fillRect(Z+131+Xe*154,431+me*145+nt*18,103-nt*13,3)}}return D.strokeStyle="#7d453b",D.lineWidth=3,D.beginPath(),D.ellipse(510,905,357,48,-.02,0,Math.PI*2),D.stroke(),D.font="25px sans-serif",D.fillStyle="#7d453b",D.fillText(E?"simplify the first step / test again":"less noise \u2014 keep the primary action visible",180,915),If(D,"#bfc4b6",E?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]),f(C)}for(let E=0;E<2;E++){let C=new xe;C.name="Whiteboard with interface wireframes",C.position.set(E?2.25:.12,2.2,-3.94),C.rotation.z=E?-.025:.012,n.add(C),z([1.78,1.12,.04],[0,0,0],ee,C);let D=sh(!E),q=X(new Mt(1.7,1.04),new Fe({map:D,roughness:.75,emissive:16777215,emissiveMap:D,emissiveIntensity:.025}),C);q.position.z=.024,z([1.7,.023,.09],[0,-.57,.025],ee,C);for(let Y=0;Y<3;Y++)te([-.58+Y*.18,-.546,.057],[-.46+Y*.18,-.546,.057],.013,Y?N:b(3755626,.7),C)}let li=new xe;li.name="Planning whiteboard covered in sticky notes",li.position.set(1.9,0,-3),li.rotation.y=0,n.add(li);for(let E of[-1.12,1.12]){z([.045,.98,.055],[E,.49,0],v,li),z([.11,.06,.65],[E,.06,0],v,li);for(let C of[-.25,.25])he([.047,.045,.032],[E,.035,C],N,li)}z([2.68,1.94,.05],[0,1.85,0],ee,li);let Lf=new Set([1,4,7,9,13,17,20,22,24]),[r1,qt]=h(1024);qt.fillStyle="#c2c7ba",qt.fillRect(0,0,1024,1024);for(let E=0;E<65;E++)u(qt,l()*1024,l()*1024,c(15,110),"60,69,55",.065);qt.strokeStyle="rgba(38,62,63,.65)",qt.fillStyle="rgba(38,62,63,.65)",qt.lineWidth=3;for(let E=0;E<3;E++){let C=170+E*245;qt.strokeRect(C,560,190,335),qt.strokeRect(C+12,579,166,28),qt.strokeRect(C+12,625,166,102),qt.beginPath(),qt.moveTo(C+12,625),qt.lineTo(C+178,727),qt.moveTo(C+178,625),qt.lineTo(C+12,727),qt.stroke();for(let D=0;D<4;D++)qt.fillRect(C+15,753+D*19,137-D%2*39,3);qt.strokeRect(C+15,843,160,28),E<2&&(qt.beginPath(),qt.moveTo(C+198,727),qt.lineTo(C+235,727),qt.lineTo(C+222,717),qt.moveTo(C+235,727),qt.lineTo(C+222,737),qt.stroke())}If(qt,"#c2c7ba",[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);for(let E of Lf){let C=(-1.1+E%9*.273)/2.6*1024+512,D=(.5-(2.63-Math.floor(E/9)*.28-1.85)/1.86)*1024;qt.fillStyle="rgba(203,203,175,.20)",qt.fillRect(C-40,D-59,80,118),qt.fillStyle="rgba(111,96,51,.17)",qt.fillRect(C-34,D-56,68,8);for(let q=0;q<9;q++)qt.fillStyle="rgba(77,67,39,.15)",qt.fillRect(C+c(-33,33),D-53+c(-2,6),c(1,3),c(2,5))}let Df=f(r1);X(new Mt(2.6,1.86),new Fe({map:Df,roughness:.75,emissive:16777215,emissiveMap:Df,emissiveIntensity:.025}),li).position.set(0,1.85,.027),z([2.58,.025,.13],[0,.87,.045],ee,li);for(let E=0;E<3;E++)te([-.63+E*.23,.899,.09],[-.48+E*.23,.899,.09],.017,E===0?b(3428197,.75):N,li);z([.18,.045,.07],[.62,.906,.075],N,li);let s1=["#c3b25e","#b38488","#7faaa9","#a4b081"];function qa(E,C,D,q,Y){let[Z,me]=h(128);me.fillStyle=s1[Y%4],me.fillRect(0,0,128,128),me.fillStyle="rgba(42,49,37,.16)",me.fillRect(0,0,128,14),me.strokeStyle="rgba(39,52,47,.68)",me.lineWidth=2.6;for(let Kt=0;Kt<3+Y%3;Kt++){me.beginPath();let _i=30+Kt*16;me.moveTo(16,_i);for(let Zi=1;Zi<8;Zi++)me.lineTo(16+Zi*c(8,12),_i+c(-2.4,2.4));me.stroke()}Y%4===0&&(me.strokeRect(19,75,35,27),me.strokeRect(72,75,35,27));let Xe=new Mt(.205,.215,3,5),nt=Xe.attributes.position;for(let Kt=0;Kt<nt.count;Kt++){let _i=nt.getY(Kt);nt.setZ(Kt,Math.max(0,-_i-.015)**2*3.3)}Xe.computeVertexNormals();let Ht=f(Z),cn=X(Xe,new Fe({map:Ht,roughness:.96,side:Ct,emissive:16777215,emissiveMap:Ht,emissiveIntensity:.025}),E);return cn.position.set(C,D,q),cn.rotation.z=c(-.13,.13),cn}for(let E=0;E<3;E++)for(let C=0;C<9;C++)Lf.has(E*9+C)||qa(li,-1.1+C*.273+c(-.018,.018),2.63-E*.28+c(-.014,.014),.04,E*9+C);for(let E=0;E<5;E++)E===1||E===4||qa(li,E<3?-1.1:1.09,1.75-E%3*.29,.04,28+E);for(let E=0;E<4;E++){let C=qa(n,-1.7-E*.3,.005,-.38+E*.26,33+E);C.rotation.set(-Math.PI/2,0,.6+E*.73);let D=C.geometry.attributes.position;for(let q=0;q<D.count;q++)D.setZ(q,D.getZ(q)*.1);ih.push(C)}let Ya=em();n.add(Ya.group);let oh=Al({flies:14,moths:7,spread:[.88,.23,.5],sizeScale:.55,dive:.65});oh.group.position.y=-.4,Ya.group.add(oh.group);for(let E of[-.66,.66])te([E,3.3,-.55],[E,2.98,-.55],.006,N);J([[.85,3.3,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.3,3.3,-.7]],.007,N);let ls=new xe;ls.position.set(-2.1,.88,-3.2),Je.parent.add(ls),F(.11,.035,[0,0,0],N,ls),te([0,0,0],[.05,.31,0],.016,v,ls),te([.05,.31,0],[.22,.4,.02],.013,v,ls),X(new Qr(.12,.13,20,1,!0),v,ls).position.set(.23,.37,.02),he([.04,.025,.04],[.23,.32,.02],new mt({color:15122820}),ls);let Uf=new An(15121790,1.2,2.5,2);Uf.position.set(-1.87,1.19,-3.18),n.add(Uf);let ah=Al({flies:5,moths:3,spread:[.28,.1,.22],seed:113,sizeScale:.55,dive:.1});ah.group.position.set(-1.87,1.14,-3.02),n.add(ah.group),await t("Placing the objects\u2026");let Hf=new $t({color:14102035,roughness:.31,clearcoat:1,clearcoatRoughness:.18}),Nf=new $t({color:15790556,roughness:.13,transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),ch=b(14081488,.49),$a=b(9016713,.69),o1=new Mo;function lh(E){let C=o1.load(new URL(`./labels/${E}.svg`,import.meta.url).href,D=>{Ce.mobile&&Ml(D,256)});return C.colorSpace=yt,C.anisotropy=Math.min(Ce.mobile?2:8,i.capabilities.getMaxAnisotropy()),new Fe({map:C,transparent:!0,alphaTest:.15,roughness:.72,side:Ct})}let a1=lh("ketchup-glass"),c1=lh("ketchup-squeeze"),l1=lh("ketchup-neck");for(let E=0;E<8140;E++)l();function h1(E,C){for(let D=1;D<E.length;D++)if(E[D][1]>=C){let[q,Y]=E[D-1],[Z,me]=E[D];return ke.lerp(q,Z,(C-Y)/(me-Y||1))}return E.at(-1)[0]}function hh(E,C,D,q,Y,Z=1,me=1.02){let Xe=new Mt(1,1,24,16),nt=Xe.attributes.position,Ht=Xe.attributes.uv;for(let Kt=0;Kt<nt.count;Kt++){let _i=(Ht.getX(Kt)*2-1)*me,Zi=ke.lerp(D,q,Ht.getY(Kt)),Ko=h1(C,Zi)+.0018;nt.setXYZ(Kt,Math.sin(_i)*Ko,Zi,Math.cos(_i)*Ko*Z+8e-4)}Xe.computeVertexNormals();let cn=X(Xe,Y,E);return cn.castShadow=!1,cn}function uh(E,C,D,q=1){let Y=X(new Jr(E.map(Z=>new Be(...Z)),48),C,D);return Y.scale.z=q,Y}function Ff(E,C,D,q,Y,Z){let me=new xe;return me.name=E.name,me.add(E),E.position.y=-Y,n.add(me),me.position.set(C,0,D),me.rotation.set(...q),me.scale.setScalar(Z),me.updateMatrixWorld(!0),As(me,Yn)}let vr=new xe;vr.name="Discarded glass ketchup bottle";let Za=[[0,0],[.063,0],[.076,.014],[.08,.047],[.079,.19],[.069,.267],[.049,.342],[.03,.41],[.029,.447],[.033,.454],[.032,.471],[0,.471]],zf=Za.filter(E=>E[1]<.44).map(([E,C])=>[Math.max(0,E-.0035),C+.004]);zf.push([.026,.469],[0,.469]);let u1=uh(zf,Hf,vr),d1=uh(Za,Nf,vr);d1.castShadow=!1,hh(vr,Za,.047,.24,a1),hh(vr,Za,.365,.432,l1,1,.95);let Wo=new xe;Wo.position.y=.48,vr.add(Wo),F(.037,.036,[0,0,0],ch,Wo,32),F(.0365,.006,[0,.461,0],$a,vr,32);for(let E=0;E<30;E++){let C=E/30*Math.PI*2;te([Math.cos(C)*.037,-.013,Math.sin(C)*.037],[Math.cos(C)*.037,.014,Math.sin(C)*.037],.0011,$a,Wo)}let Of=X(new Qt(.07,.003,6,32),Nf,vr);Of.rotation.x=Math.PI/2,Of.position.y=.016;let f1=Ff(vr,.98,2.82,[-.25,.45,Math.PI/2],.25,.82),Hr=new xe;Hr.name="Discarded squeeze ketchup bottle";let Bf=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];uh(Bf,Hf,Hr,.62),hh(Hr,Bf,.122,.403,c1,.62,1.04);let p1=F(.069,.06,[0,.034,0],ch,Hr,40);p1.scale.z=.73;let m1=F(.0694,.003,[0,.014,0],$a,Hr,40);m1.scale.z=.73,V([.042,.012,.01],[0,.014,.051],ch,Hr),z([.031,.018,.008],[0,.04,-.05],$a,Hr),Ff(Hr,1.95,2.45,[-Math.PI/2,0,-.45],.225,.8);let[g1,Ut]=h(1024,512);Ut.fillStyle="#86b0b2",Ut.fillRect(0,0,1024,512);for(let E=0;E<180;E++)u(Ut,l()*1024,l()*512,c(5,55),E%2?"225,229,207":"83,125,129",c(.035,.14));Ut.lineCap="round";for(let E=0;E<260;E++){let C=l()*1024,D=l()*512;Ut.strokeStyle=`rgba(44,57,53,${c(.3,.65)})`,Ut.lineWidth=c(2,4),Ut.beginPath(),Ut.moveTo(C,D),Ut.quadraticCurveTo(C-3,D+7,C+c(-2,3),D+c(7,15)),Ut.stroke()}Ut.fillStyle="#eee2c3",Ut.beginPath(),Ut.moveTo(512,176),Ut.bezierCurveTo(459,117,386,112,350,169),Ut.bezierCurveTo(313,243,337,421,410,466),Ut.bezierCurveTo(460,493,565,493,615,466),Ut.bezierCurveTo(687,421,711,243,675,169),Ut.bezierCurveTo(639,112,565,117,512,176),Ut.fill();for(let E of[433,591])u(Ut,E,271,29,"197,123,110",.2),Ut.fillStyle="#3d3630",Ut.beginPath(),Ut.ellipse(E,215,7,4,-.2,0,Math.PI*2),Ut.fill();Ut.strokeStyle="#52443a",Ut.lineWidth=3,Ut.beginPath(),Ut.moveTo(512,274),Ut.lineTo(512,316),Ut.bezierCurveTo(501,335,482,337,472,326),Ut.moveTo(512,316),Ut.bezierCurveTo(523,335,542,337,552,326),Ut.stroke();for(let E of[-1,1])for(let C=0;C<3;C++)Ut.fillStyle="#6e5b46",Ut.beginPath(),Ut.arc(512+E*(25+C*9),300+C%2*12,1.8,0,Math.PI*2),Ut.fill();m(Ut,512,2300,"112,124,109",.07);let x1=new $t({map:f(g1),roughness:.29,clearcoat:1,clearcoatRoughness:.16}),kf=new $t({color:9091001,roughness:.25,clearcoat:1,clearcoatRoughness:.14}),[y1,Ei]=h(1024,512);Ei.fillStyle="#e8dcba",Ei.fillRect(0,0,1024,512);for(let E=0;E<18;E++){let C=E*1024/18;Ei.fillStyle=E%2?"#93b8ae":"#7ca6a5",Ei.beginPath(),Ei.moveTo(C-12,0),Ei.bezierCurveTo(C-20,170,C+4,310,C-12,512),Ei.lineTo(C+12,512),Ei.bezierCurveTo(C+26,310,C+8,170,C+17,0),Ei.closePath(),Ei.fill()}let Ka=Ei.createLinearGradient(0,220,0,512);Ka.addColorStop(0,"rgba(103,62,27,0)"),Ka.addColorStop(.7,"rgba(103,62,27,.09)"),Ka.addColorStop(1,"rgba(74,39,14,.48)"),Ei.fillStyle=Ka,Ei.fillRect(0,0,1024,512);let Vf=new $t({map:f(y1),roughness:.34,clearcoat:.8,side:Ct}),Xi=new xe;Xi.name="Blue pointy-eared mug tipped on its side";function Gf(E,C){let D=new Jr(E.map(Z=>new Be(...Z)),64),q=D.attributes.uv,Y=D.attributes.position;for(let Z=0;Z<Y.count;Z++)q.setY(Z,Y.getY(Z)/.258);return D.rotateY(Math.PI),X(D,C,Xi)}Gf([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.14,.257]],x1),Gf([[.127,.257],[.128,.237],[.121,.09],[.106,.034],[0,.034]],Vf);let Wf=X(new Qt(.134,.008,10,64),kf,Xi);Wf.rotation.x=Math.PI/2,Wf.position.y=.254;let Xf=X(new Qt(.102,.004,8,48),Vf,Xi);Xf.rotation.x=Math.PI/2,Xf.position.y=.012;for(let E of[-1,1]){let C=new xe;C.position.set(E*.095,.235,.103),C.rotation.set(-.06,E*Math.atan2(.095,.103),-E*.1),Xi.add(C);let D=new gt;D.name=E<0?"Mug left ear tip":"Mug right ear tip",D.position.y=.142,C.add(D);let q=new Tt;q.moveTo(-.047,0),q.bezierCurveTo(-.044,.046,-.015,.112,0,.142),q.bezierCurveTo(.018,.125,.046,.045,.047,0),q.closePath();let Y=new rn(q,{depth:.013,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});Y.translate(0,0,-.0065),X(Y,kf,C),J([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,b(5005659,.62),C)}let[v1,Ja]=h(256);Ja.fillStyle="#e8dfc6",Ja.fillRect(0,0,256,256),Ja.fillStyle="#84adb0";for(let E of[0,95,200])Ja.fillRect(E,0,47,256);let M1=new $t({map:f(v1),roughness:.28,clearcoat:1});J([[-.129,.211,0],[-.195,.222,0],[-.249,.188,0],[-.257,.13,0],[-.229,.075,0],[-.178,.057,0],[-.125,.076,0]],.014,M1,Xi);let dh=new gt;dh.name="Mug handle grip",dh.position.set(-.249,.141,0),Xi.add(dh);let Xo=new Tt;Xo.moveTo(-.021,.01),Xo.quadraticCurveTo(0,.021,.021,.01),Xo.quadraticCurveTo(.021,-.003,0,-.019),Xo.quadraticCurveTo(-.022,-.004,-.021,.01),X(new rn(Xo,{depth:.012,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new $t({color:2697251,roughness:.3,clearcoat:1}),Xi).position.set(0,.129,.142);let cr=new xe;cr.name="Spilled animal mug in the left foreground",cr.add(Xi),Xi.position.y=-.135,n.add(cr);let Os=new w(-.55,-.05,.83).normalize(),Bs=new w(.54,.66,.39);Bs.addScaledVector(Os,-Bs.dot(Os)).normalize();let fh=new w().crossVectors(Os,Bs).normalize();cr.quaternion.setFromRotationMatrix(new Lt().makeBasis(fh,Os,Bs)),cr.scale.setScalar(.72),cr.position.set(.24,0,3.02),cr.updateMatrixWorld(!0),As(cr,Yn),cr.updateMatrixWorld(!0);let qf=Math.hypot(fh.y,Bs.y),Qa=Xi.localToWorld(new w(-.134*fh.y/qf,.254,-.134*Bs.y/qf)),qo=new w(Os.x,0,Os.z).normalize(),ks=Qa.clone().addScaledVector(qo,.23);ks.y=Yn(ks.x,ks.z)+.001;let Yf=new $t({color:5324843,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:!0,opacity:.94,side:Ct}),E1=new Fe({color:9072713,roughness:.4,transparent:!0,opacity:.68,depthWrite:!1,side:Ct});function $f(E,C,D,q,Y=0){let Z=new Tt;for(let Ht=0;Ht<=80;Ht++){let cn=Ht/80*Math.PI*2,Kt=1+.11*Math.sin(cn*3+Y)+.065*Math.sin(cn*7-.3)+.025*Math.cos(cn*13),_i=Math.cos(cn)*D*Kt,Zi=Math.sin(cn)*q*Kt;Ht?Z.lineTo(_i,Zi):Z.moveTo(_i,Zi)}Z.closePath();let me=new nr(Z,32),Xe=X(me,E1);Xe.rotation.x=-Math.PI/2,Xe.scale.setScalar(1.045),Xe.position.set(E,Yn(E,C)+5e-4,C),Xe.castShadow=!1;let nt=X(me,Yf);return nt.rotation.x=-Math.PI/2,nt.position.set(E,Yn(E,C)+.001,C),nt.castShadow=!1,nt}$f(ks.x,ks.z,.23,.145,.4);let Yo=Qa.clone();Yo.y=Yn(Yo.x,Yo.z)+.008,J([Qa.toArray(),Yo.toArray(),Yo.clone().addScaledVector(qo,.09).toArray(),ks.toArray()],.008,Yf);for(let[E,C,D]of[[.45,.1,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){let q=Qa.clone().addScaledVector(qo,E).add(new w(-qo.z*C,0,qo.x*C));$f(q.x,q.z,D,D*.65,E*3)}n.updateMatrixWorld(!0);for(let E of ih){let C=E.geometry.attributes.position;for(let D=0;D<C.count;D++){let q=E.localToWorld(new w(C.getX(D),C.getY(D),0)),Y=.003;for(let Z of rh){let me=Z.worldToLocal(q.clone()),Xe=Z.geometry.parameters;Math.abs(me.x)<Xe.width/2&&Math.abs(me.z)<Xe.depth/2&&(Y=Math.max(Y,.013))}C.setZ(D,C.getZ(D)+Y+.002-E.position.y)}C.needsUpdate=!0,E.geometry.computeVertexNormals(),E.geometry.computeBoundingSphere()}for(let[E,C,D,q,Y]of[[-2.53,2.13,1.52,1.08,!0],[-.62,2.13,1.78,1.1,!1]]){let Z=new xe;Z.name="Left-wall design whiteboard",Z.position.set(-3.86,C,E),Z.rotation.y=Math.PI/2,n.add(Z),z([D,q,.045],[0,0,0],ee,Z);let me=sh(Y),Xe=X(new Mt(D-.07,q-.07),new Fe({map:me,roughness:.85,emissive:16777215,emissiveMap:me,emissiveIntensity:.025}),Z);Xe.position.z=.026,z([D-.07,.025,.1],[0,-q/2,.035],ee,Z),te([-.4,-q/2+.025,.06],[-.23,-q/2+.025,.06],.011,N,Z),z([.13,.035,.065],[D*.29,-q/2+.029,.045],S,Z),qa(Z,D*.35,q*.21,.034,Y?6:9)}let Pi=new xe;Pi.name="Worn bookshelf of design books",Pi.position.set(-3.65,0,1.65),Pi.rotation.y=Math.PI/2,n.add(Pi);let ja=b(11643027,.92,d),_1=b(10920589,.98);z([1.56,2.38,.035],[0,1.19,-.185],ja,Pi);for(let E of[-.765,.765])z([.045,2.42,.42],[E,1.21,.015],ja,Pi);for(let E of[.12,.66,1.2,1.74,2.28])z([1.5,.035,.42],[0,E,.015],ja,Pi);z([1.51,.1,.045],[0,.05,.19],ja,Pi);let ec=[["The Design of Everyday Things","#b5ad86"],["Don't Make Me Think","#bd8b36"],["Thinking with Type","#9f392f"],["Grid Systems","#adaf9a"],["Designing Interfaces","#54796f"],["About Face","#393e3e"],["The Elements of User Experience","#758b9d"],["Sprint","#b3a847"],["Universal Principles of Design","#b8b5a4"],["Designing for Interaction","#80665b"],["Sketching User Experiences","#456976"],["The Shape of Design","#bcb296"]],b1=ec.map(([E,C],D)=>{let[q,Y]=h(128,1024);Y.fillStyle=C,Y.fillRect(0,0,128,1024);let Z=Y.createLinearGradient(0,0,128,0);return Z.addColorStop(0,"rgba(0,0,0,.35)"),Z.addColorStop(.25,"rgba(0,0,0,0)"),Z.addColorStop(.86,"rgba(230,219,175,.12)"),Z.addColorStop(1,"rgba(0,0,0,.2)"),Y.fillStyle=Z,Y.fillRect(0,0,128,1024),Y.save(),Y.translate(76,70),Y.rotate(Math.PI/2),Y.fillStyle=[2,4,5,6,9,10].includes(D)?"#ded9c5":"#262b26",Y.font="600 47px Georgia,serif",Y.fillText(E,0,0,820),Y.restore(),Y.fillStyle="rgba(217,210,181,.55)",Y.fillRect(14,947,100,3),Y.fillRect(14,963,100,3),m(Y,128,400,"22,24,17",.22),new Fe({map:f(q),roughness:.96})});for(let E=0;E<4;E++){let C=-.69;for(let D=0;D<16;D++){let q=(D+E*5)%ec.length,Y=c(.045,.085),Z=c(.3,.44),me=c(.22,.3);if(C+Y>.68)break;if(D===7||E===2&&D===11){C+=.1;continue}let Xe=new xe;Xe.name=ec[q][0],Pi.add(Xe);let nt=D%6===5?-.12:c(-.025,.025);Xe.rotation.z=nt,Xe.position.set(C+Y/2,.12+E*.54+.018+Math.abs(Math.sin(nt))*Y/2,.18-me/2),z([Y-.008,Z-.009,me-.007],[0,Z/2,0],_1,Xe);let Ht=b(ec[q][1],.93);for(let Kt of[-1,1])z([.004,Z,me],[Kt*(Y/2-.002),Z/2,0],Ht,Xe);z([Y,Z,.007],[0,Z/2,me/2],Ht,Xe);let cn=X(new Mt(Y-.002,Z-.004),b1[q],Xe);cn.position.set(0,Z/2,me/2+.004),cn.castShadow=!1,C+=Y+.008}}for(let E of[.14,.68,1.22,1.76,2.3])z([1.44,.002,.035],[0,E,.196],b(7171673,.99),Pi);let w1=z([.32,.055,.24],[.41,2.327,.03],b(6964536,.95),Pi);w1.rotation.y=.17,await t("Finishing the office\u2026");let[S1,Ot]=h(2048);Ot.fillStyle="#66695d",Ot.fillRect(0,0,2048,2048);for(let E=0;E<1250;E++)u(Ot,l()*2048,l()*2048,c(4,125),E%4?"34,31,21":"135,131,110",c(.035,.22));for(let E=0;E<160;E++){let C=E%4,D=C<2?(C?2048:0)+c(-45,90):l()*2048,q=C<2?l()*2048:(C===2?0:2048)+c(-45,90);u(Ot,D,q,c(60,190),"20,26,19",c(.15,.4))}for(let E=0;E<75;E++){let C=c(80,1968),D=c(80,1968),q=c(14,70);u(Ot,C,D,q*1.7,"57,35,15",c(.13,.35)),Ot.strokeStyle=`rgba(48,35,18,${c(.12,.36)})`,Ot.lineWidth=c(1,4),Ot.beginPath(),Ot.ellipse(C,D,q,q*c(.6,1.2),l()*Math.PI,0,Math.PI*c(1.1,2)),Ot.stroke()}Ot.lineCap="round";for(let E=0;E<340;E++){let C=c(100,1950),D=c(100,1950);Ot.save(),Ot.translate(C,D),Ot.rotate(l()*Math.PI*2),Ot.strokeStyle=`rgba(16,23,19,${c(.1,.3)})`,Ot.lineWidth=c(1,4),Ot.beginPath(),Ot.moveTo(0,0),Ot.quadraticCurveTo(c(15,50),c(-12,12),c(55,160),c(-20,20)),Ot.stroke(),Ot.restore()}for(let E=0;E<17;E++){let C=l()*2048,D=l()*2048;Ot.beginPath(),Ot.moveTo(C,D);for(let q=0;q<9;q++)C+=c(-20,25),D+=c(6,27),Ot.lineTo(C,D);Ot.strokeStyle="rgba(18,23,18,.42)",Ot.lineWidth=2.2,Ot.stroke()}for(let E=0;E<1900;E++){let C=l()*2048,D=l()*2048;Ot.strokeStyle=`rgba(167,163,137,${c(.03,.22)})`,Ot.lineWidth=c(.4,1.3),Ot.beginPath(),Ot.moveTo(C,D),Ot.lineTo(C+c(3,28),D+c(-5,5)),Ot.stroke()}m(Ot,2048,9e4,"16,22,15",.26),m(Ot,2048,3e4,"166,161,135",.2);let Zf=f(S1);$.map=Zf,$.bumpMap=Zf,$.bumpScale=.006,$.needsUpdate=!0;let on=new xe;on.name="Weathered entrance wall behind the viewer",on.position.z=4.48,on.rotation.y=Math.PI,n.add(on),z([7.8,3.35,.16],[0,1.675,-.08],b(10068367,.99,y),on),ie(7.8,3.35,on).position.set(0,1.675,.004),z([7.8,.14,.045],[0,.07,.024],N,on),z([7.8,.026,.023],[0,2.87,.03],v,on);let[T1,Bn]=h(1024);for(let E=0;E<62;E++){let C=l()*1024,D=c(0,180);Bn.strokeStyle=`rgba(43,36,22,${c(.1,.32)})`,Bn.lineWidth=c(.5,5),Bn.beginPath(),Bn.moveTo(C,D),Bn.bezierCurveTo(C+6,D+80,C-4,D+170,C+c(-6,9),D+c(210,650)),Bn.stroke()}for(let E=0;E<21;E++){let C=l()*1024,D=l()*1024;Bn.beginPath();for(let q=0;q<12;q++){let Y=q/12*Math.PI*2,Z=c(9,27),me=C+Math.cos(Y)*Z,Xe=D+Math.sin(Y)*Z*1.7;q?Bn.lineTo(me,Xe):Bn.moveTo(me,Xe)}Bn.closePath(),Bn.fillStyle=E%3?"rgba(61,65,52,.75)":"rgba(149,144,118,.6)",Bn.fill()}for(let E=0;E<10;E++){let C=l()*1024,D=c(60,850);Bn.strokeStyle="rgba(28,34,26,.75)",Bn.lineWidth=.8,Bn.beginPath(),Bn.moveTo(C,D);for(let q=0;q<8;q++)C+=c(-9,12),D+=c(5,16),Bn.lineTo(C,D);Bn.stroke()}let Kf=X(new Mt(7.8,3.35),new Fe({map:f(T1),transparent:!0,depthWrite:!1,roughness:1}),on);Kf.position.set(0,1.675,.007),Kf.castShadow=!1;let Dn=new xe;Dn.name="Scuffed service door and failing exit sign",Dn.position.set(1.2,0,.05),on.add(Dn);let tc=b(6910824,.88,M,.22);z([1.12,2.34,.042],[0,1.17,0],N,Dn),z([1.035,2.27,.048],[0,1.153,.022],tc,Dn);for(let E of[-.565,.565])z([.065,2.4,.1],[E,1.2,.035],v,Dn);z([1.19,.065,.1],[0,2.4,.035],v,Dn),z([1.1,.025,.13],[0,.016,.045],ee,Dn),z([.85,.28,.009],[0,.25,.052],b(7239276,.7,M,.55),Dn);for(let E of[-1,1])for(let C of[.14,.35])he([.008,.008,.003],[E*.39,C,.059],ee,Dn);z([.68,.73,.032],[0,1.69,.055],v,Dn);let[R1,qi]=h(512);qi.fillStyle="#293c39",qi.fillRect(0,0,512,512);for(let E=0;E<170;E++)u(qi,l()*512,l()*512,c(4,45),"7,14,11",c(.08,.3));qi.strokeStyle="rgba(100,118,105,.32)",qi.lineWidth=1.4;for(let E=-512;E<1024;E+=36)qi.beginPath(),qi.moveTo(E,0),qi.lineTo(E+512,512),qi.moveTo(E,0),qi.lineTo(E-512,512),qi.stroke();X(new Mt(.6,.65),new $t({map:f(R1),roughness:.32,clearcoat:.8,metalness:.12}),Dn).position.set(0,1.69,.074),te([.36,.9,.095],[.36,1.05,.095],.017,ee,Dn),te([.36,1.03,.095],[.2,1.03,.12],.015,ee,Dn);for(let E of[.35,1.2,2.07])z([.07,.1,.034],[-.515,E,.064],v,Dn),F(.012,.12,[-.53,E,.08],ee,Dn);function Vs(E,C,D,q,Y,Z="#74796b",me="#d0cdb8"){let[Xe,nt]=h(512,128);nt.fillStyle=Z,nt.fillRect(0,0,512,128),nt.fillStyle=me,nt.font="600 50px Arial,sans-serif",nt.textAlign="center",nt.fillText(E,256,82,470),m(nt,512,1500,"14,20,15",.2);let Ht=X(new Mt(C,D),new Fe({map:f(Xe),roughness:.9}),q);return Ht.position.set(...Y),Ht.castShadow=!1,Ht}Vs("STAFF ONLY",.4,.1,Dn,[0,1.12,.055]),z([.54,.21,.1],[0,2.66,.08],v,Dn);let nc=Vs("EXIT  \u2192",.48,.15,Dn,[0,2.66,.133],"#263b30","#a8b593");nc.material.emissive.set(5994071),nc.material.emissiveMap=nc.material.map,nc.material.emissiveIntensity=.25;let Yi=new xe;Yi.name="Abandoned critique pinboard",Yi.position.set(-.95,1.94,.055),Yi.rotation.z=-.018,on.add(Yi);let A1=b(8417362,.99,d);z([1.86,1.25,.045],[0,0,0],A1,Yi);for(let E of[-.94,.94])z([.035,1.3,.055],[E,0,.01],v,Yi);for(let E of[-.64,.64])z([1.91,.035,.055],[0,E,.01],v,Yi);for(let E=0;E<7;E++){let C=-.68+E%4*.44,D=E<4?.28:-.26,q=sh(E%2===0),Y=X(new Mt(.35,.43),new Fe({map:q,color:E%2?12170400:13026996,roughness:1,side:Ct}),Yi);Y.position.set(C,D,.028+E%3*.001),Y.rotation.z=c(-.1,.1),Y.castShadow=!1,he([.008,.008,.005],[C,D+.195,.039],E%2?N:b(7814963,.8),Yi);let Z=z([.11,.033,.001],[C-.06,D+.2,.031],b(10001011,.98),Yi);Z.rotation.z=c(-.2,.2)}Vs("DESIGN / CRITIQUE",1.1,.1,Yi,[-.11,.56,.028],"#77765a","#252d27"),z([.94,.065,.13],[-.95,2.78,.11],v,on);let Jf=F(.013,.82,[-.95,2.741,.14],new mt({color:7572357}),on,12);Jf.rotation.z=Math.PI/2,Jf.castShadow=!1;let $o=new _o(9611936,3.4,3.6,1,.85,2);$o.position.set(-.95,2.72,.36),$o.target.position.set(-1.12,1.35,.04),on.add($o,$o.target),Ce.mobile&&($o.visible=!1);let ph=Al({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.5,dive:.22});ph.group.position.set(-.95,2.52,.43),on.add(ph.group);let mi=new xe;mi.name="Damaged filing cabinets",mi.position.set(-1.12,0,.26),on.add(mi),z([1.52,.77,.028],[0,.385,-.2],tc,mi),z([1.56,.035,.46],[0,.795,0],v,mi);for(let E of[-.745,0,.745])z([.025,.77,.43],[E,.385,0],tc,mi);for(let E of[.018,.385])z([1.52,.025,.43],[0,E,0],v,mi);for(let E of[-.38,.38])for(let C of[.2,.56]){if(E<0&&C>.4)continue;let D=0;z([.71,.32,.025],[E,C,.231+D],v,mi),te([E-.1,C+.04,.26+D],[E+.1,C+.04,.26+D],.011,ee,mi),z([.16,.055,.004],[E,C-.06,.248+D],O,mi),D&&(z([.68,.014,.35],[E,C-.16,.2],v,mi),z([.012,.28,.34],[E-.34,C,.2],v,mi))}let C1=z([.47,.29,.36],[-1.3,.96,.29],b(11573869,.99,d),on);C1.rotation.y=.14,Vs("ARCHIVE",.25,.075,on,[-1.3,.97,.483],"#a49471","#3b3d30");let P1=z([.5,.014,.19],[-1.3,1.116,.39],P,on);P1.rotation.x=.2;let Nr=new xe;Nr.name="Neglected network and electrical cabinet",Nr.position.set(-2.96,1.6,.08),on.add(Nr),z([.64,.97,.12],[0,0,0],v,Nr),z([.56,.88,.014],[0,0,.066],N,Nr);for(let E=0;E<4;E++)for(let C=0;C<5;C++)z([.072,.09,.035],[-.2+C*.1,.28-E*.16,.09],tc,Nr),z([.017,.035,.01],[-.2+C*.1,.28-E*.16,.113],E===1?O:N,Nr);let Zo=new xe;Zo.position.set(-.32,0,.06),Zo.rotation.y=-.65,Nr.add(Zo),z([.62,.96,.025],[.31,0,0],v,Zo),Vs("CAUTION",.3,.1,Zo,[.32,.26,.014],"#a08d52","#252b24");for(let E=0;E<4;E++)J([[-3.12+E*.08,2.1,.12],[-3.15+E*.08,2.5,.12],[-3.15+E*.08,2.88,.12],[-2.1+E*.08,2.88,.12]],.012,v,on);for(let E=0;E<6;E++)J([[-3.18+E*.08,1.15,.16],[-3.2+E*.06,.71,.21],[-3.13+E*.1,.32,.17],[-2.85+E*.06,.15,.3]],.005,E%2?N:b(5858907,.9),on);z([.2,.13,.022],[2.2,.35,.047],O,on),z([.11,.085,.025],[2.2,.35,.065],N,on),J([[2.2,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.9,.023,.42],[3.1,.023,.3]],.007,N,on);let $i=new xe;$i.name="Dusty fire extinguisher",$i.position.set(2.16,.25,.17),on.add($i);let mh=b(8271401,.78,M,.23);F(.095,.42,[0,.25,0],mh,$i,24),he([.095,.065,.095],[0,.47,0],mh,$i),he([.093,.045,.093],[0,.04,0],mh,$i),z([.11,.025,.055],[.015,.56,0],N,$i),te([0,.51,0],[0,.57,0],.018,ee,$i),J([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,N,$i),Vs("FIRE",.12,.14,$i,[0,.27,.097],"#b4ac8c","#33382d"),r.push(Je,Me,an,Oe,L,j,Ge,ht.group,li,Pi,mi,$i);for(let E of r)As(E,Yn);for(let E of[He,Ke]){let C=E.getObjectByName("Monitor power cable");E.remove(C),C.geometry.dispose();let D=E.localToWorld(new w(.1,.23,-.05)),q=D.x,Y=D.z,Z=J([D.toArray(),[q+.09,Math.max(Yn(q+.09,Y+.1)+.008,D.y*.45),Y+.1],[q+.2,Yn(q+.2,Y+.2)+.007,Y+.2],[q+.38,Yn(q+.38,Y+.11)+.007,Y+.11]],.006,N);Z.userData.ignoreFloorContact=!0,Z.userData.anchorStart=!0}for(let E of s)Tl(E,Yn);n.add(j0(e,Yn)),await t("Preparing the tanks\u2026");let hs=J0();hs.group.userData.ignoreAcid=!0,n.add(hs.group);let ic=ym({valves:hs.valves,floorSupport:Yn});n.add(ic.group);let gh=um({filing:mi,laptop:Pf,floorSupport:Yn,drawerMaterial:v});n.add(gh.group);let xh=_m({chargingKit:gh,acidLeaks:ic,floorSupport:Yn,pipeMaterial:v});n.add(xh.group);let yh=pm({bottle:f1,contents:u1,cap:Wo,floorSupport:Yn});n.add(yh.group);let Qf=rm({room:n,floorSupport:Yn,viewerPosition:e});n.add(Qf.group);function I1(E){xh.setEnvironment(E),ic.setEnvironment(E),ft.setEnvironment(E),Le.setEnvironment(E),hs.setEnvironment(E),Ya.setEnvironment(E)}let jf=-1/0;function L1(E,C,D=e){yh.update(E,C);let q=Ya.update(E,C);return E-jf>=1/Ce.effectsHz&&(jf=E,Qf.update(E,C,D),hs.update(E,C),oh.update(E,C,q),ph.update(E,C,.65),ah.update(E,C,.78)),q}return{group:n,laptop:Pf,catMug:cr,handsaw:ft.group,acidLeaks:ic,chargingKit:gh,fireHazard:xh,ketchupKey:yh,countdown:ht,setDisplayEnvironment:I1,update:L1,figpalHoists:hs,toggleHoist:hs.toggleHoist}}var La=["Nooo!!!!","Tell my wife that I love her!","Delete my browser history!"],Kd=["help","I have a family","I swear I didn't detach the component!"];function wm(i,e,t=Math.random){let n=18,r=-1,s=Math.floor(t()*Kd.length);return{update(o,a=!1){if(o<n)return!1;if(a||e.isActive(o))return n=o+2,!1;let l=[0,1,2].filter(h=>i.isHanging(h));if(!l.length)return n=o+2,!1;l.length>1&&(l=l.filter(h=>h!==r));let c=l[Math.floor(t()*l.length)];return e.show(c,o,Kd[s],6),r=c,s=(s+1)%Kd.length,n=o+20+t()*15,!0},reset(o=0){n=o+18,r=-1}}}function Sm(i,e,t=()=>!0){let n=document.querySelector("#figpal-dialogues"),r=La.map((m,g)=>{let y=document.createElement("div");y.className="figpal-speech",y.hidden=!0,y.dataset.figpal=String(g+1);let p=document.createElement("span");p.className="figpal-speech-text",p.textContent=m;let d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.classList.add("figpal-speech-tail"),d.setAttribute("aria-hidden","true");let M=document.createElementNS("http://www.w3.org/2000/svg","path");return d.append(M),y.append(p,d),n.append(y),y}),s=new w,o=r.map(()=>null),a=r.map(()=>15);function l(m,g,y=La[m],p=15){if(r[m]){if(!t(m)){f(m);return}o[m]=g,a[m]=p,r[m].children[0].textContent=y}}function c(m){return o.some((g,y)=>t(y)&&g!==null&&m>=g&&m<g+a[y])}function h(m){for(let g=0;g<r.length;g++)l(g,m)}function f(m){if(Number.isInteger(m)){r[m]&&(o[m]=null,r[m].hidden=!0);return}n.hidden=!0;for(let g=0;g<r.length;g++)o[g]=null,r[g].hidden=!0}function u(m,g){n.hidden=!1;let y=e.getBoundingClientRect(),p=0;for(let d=0;d<i.length;d++){if(!t(d)){f(d);continue}let M=r[d],x=o[d]===null?-1:g-o[d],_=a[d];if(x<0||x>=_){M.hidden=!0,x>=_&&(o[d]=null);continue}if(M.style.opacity=String(1-ke.smoothstep(x,_-1,_)),i[d].getWorldPosition(s),s.y=Math.max(s.y,1.32),s.project(m),s.z<-1||s.z>1||Math.abs(s.x)>1.04||Math.abs(s.y)>1.1){M.hidden=!0;continue}M.hidden=!1;let R=y.left+(s.x*.5+.5)*y.width,b=y.top+(-s.y*.5+.5)*y.height;M.style.transform=`translate3d(${R}px,${b-14}px,0) translate(-50%,-100%)`;let T=M.offsetWidth/2;M.querySelector("path").setAttribute("d",`M ${T-5} 0 L ${T+6} 0 L ${T} 15 Z`),p++}n.hidden=p===0}return f(),{update:u,hide:f,show:l,showAll:h,isActive:c}}var Lr=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Tm({canDetach:i=()=>!0}={}){let e=!0,t=-1/0,n=-1/0,r=!1,s=-1/0;return{get locked(){return e},requestReach(o){return o-t<1.65||!e&&o-n<.85?!1:(t=o,s=o+5.2,r=!e,!0)},detach(o){return!e||!i()?!1:(e=!1,n=o,s=o+2.4,r=!1,!0)},endReach(){s=-1/0,r=!1},sample(o,a=!1){a&&Number.isFinite(t)&&(s=Math.max(s,o+.8));let l=o-t,c=l<.52?Lr(l/.52):l<.86?1:1-Lr((l-.86)/.79),h=!1;!e&&r&&l>=.55&&(h=!0,r=!1);let f=o-n,u=e?0:Lr(f/.14),m=e?0:Lr((f-.12)/.42),g=e?0:Lr((f-.56)/.28),y=e?0:Lr((f-.9)/.65),p=o<s&&(e||f<1.65),d=p?Math.min(Lr(l/.24),Lr((s-o)/.45)):0;return{locked:e,reach:c,visible:p,reveal:d,releaseElapsed:f,unlatch:u,hingeOpen:m,handFree:g,cuffDrop:y,release:e?0:Lr((o-n)/.85),strain:e&&l>.45&&l<.86?Math.sin(l*64)*.003:0,openLaptop:h}},reset(){e=!0,t=-1/0,n=-1/0,r=!1,s=-1/0}}}function Rm(i,e,t,n=.43,r=.49){let s=new w().subVectors(e,i),o=s.length();s.normalize(),o>n+r-.015&&i.addScaledVector(s,o-(n+r-.015));let a=Math.max(.001,i.distanceTo(e)),l=ke.clamp((n*n-r*r+a*a)/(2*a),-n,n),c=new w(.55,-1,.08).addScaledVector(s,-new w(.55,-1,.08).dot(s)).normalize();return t.copy(i).addScaledVector(s,l).addScaledVector(c,Math.sqrt(Math.max(0,n*n-l*l))),t}function Am(i,e){let r=new Rt,s=new Float32Array(609*3),o=[];for(let _=1;_<=20;_++)for(let R=1;R<=28;R++){let b=_*29+R;o.push(b,b-28-2,b-1,b,b-28-1,b-28-2)}r.setAttribute("position",new nn(s,3).setUsage(yn)),r.setIndex(o);let a=new at(r,i);a.name="Full curved forearm",a.castShadow=a.receiveShadow=!0,a.frustumCulled=!1;let l=r.clone(),c=new at(l,e);c.name="Forearm ink silhouette",c.raycast=()=>{},c.frustumCulled=!1,a.add(c);let h=new ba,f=new w,u=new w,m=new w,g=new w,y=new w,p=new w,d=new w,M=[[0,.076,.061],[.18,.081,.063],[.4,.073,.055],[.65,.059,.043],[.8,.047,.033],[1,.038,.026]];function x(_,R,b){f.set(0,0,1).applyQuaternion(b),h.v0.copy(_),h.v1.lerpVectors(_,R,.31),h.v1.x+=.018,h.v3.copy(R).addScaledVector(f,.075),h.v2.copy(h.v3).addScaledVector(f,.065),p.set(1,0,0).applyQuaternion(b);for(let O=0;O<=20;O++){let v=O/20;v<.8?(h.getPoint(v/.8,u),h.getTangent(v/.8,m)):(u.copy(R).addScaledVector(f,.075*(1-v)/.2),m.copy(f).negate()),g.copy(p).addScaledVector(m,-p.dot(m)).normalize(),y.crossVectors(g,m).normalize();let S=M.findIndex(z=>z[0]>=v),N=M[Math.max(0,S-1)],W=M[S],$=N===W?0:ke.smoothstep(v,N[0],W[0]),ee=ke.lerp(N[1],W[1],$),X=ke.lerp(N[2],W[2],$);for(let z=0;z<=28;z++){let ae=z/28*Math.PI*2;d.copy(u).addScaledVector(g,Math.cos(ae)*ee).addScaledVector(y,Math.sin(ae)*X),d.toArray(s,(O*29+z)*3)}}r.attributes.position.needsUpdate=!0,r.computeVertexNormals();let T=r.attributes.normal,P=l.attributes.position;for(let O=0;O<P.count;O++)P.setXYZ(O,s[O*3]+T.getX(O)*.0015,s[O*3+1]+T.getY(O)*.0015,s[O*3+2]+T.getZ(O)*.0015);P.needsUpdate=!0}return{mesh:a,update:x}}function Cm(i,e){let t=i.geometry,n=t.attributes.position,r=t.clone(),s=r.attributes.position,o=1.9/e;for(let l=0;l<s.count;l++){let c=n.getX(l),h=n.getY(l),f=n.getZ(l),u=Math.max(0,-f)*o;f>=0||s.setXYZ(l,c,h*Math.cos(u)-(1-Math.cos(u))/o,-Math.sin(u)/o-h*Math.sin(u))}r.computeVertexNormals(),t.morphAttributes.position=[s],t.morphAttributes.normal=[r.attributes.normal],i.updateMorphTargets();let a=i.children.find(l=>l.name==="Ink silhouette");if(a){let l=s.clone(),c=r.attributes.normal;for(let h=0;h<l.count;h++)l.setXYZ(h,s.getX(h)+c.getX(h)*.002,s.getY(h)+c.getY(h)*.002,s.getZ(h)+c.getZ(h)*.002);a.geometry.morphAttributes.position=[l],a.updateMorphTargets()}return l=>{i.morphTargetInfluences[0]=ke.clamp(l,0,1),a&&(a.morphTargetInfluences[0]=i.morphTargetInfluences[0])}}var Pm=new w(0,1,0);function Im(i,e={}){let t=new xe;t.name="Player forearm chained to the rear pipes";let n=new xe;n.name="Camera-relative reaching hand",t.add(n);let r=Tm(e),s=new en(1,Ce.mobile?12:24,Ce.mobile?8:16),o=new Fe({color:13871751,roughness:.86,metalness:0,emissive:6832947,emissiveIntensity:.025}),a=new mt({color:2104345,side:Tn}),l=xi(10857122),c=xi(12568e3),h=new Fe({color:1382166,roughness:.9}),f=xi(9872814);f.map=null,f.metalnessMap=null,f.metalness=.86,f.roughness=.66,f.bumpScale=35e-5;let u=new Fe({color:11517381,metalness:.92,roughness:.29}),m=new mt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function g(st,et,rt=n){let ct=new at(st,et);return ct.castShadow=!0,ct.receiveShadow=!0,rt.add(ct),ct}function y(st,et,rt,ct=o){let _t=g(s,ct,st);return _t.position.set(...et),_t.scale.set(...rt),_t}function p(st,et,rt,ct,_t){et=new w(...et),rt=new w(...rt);let Oe=rt.clone().sub(et),lt=g(new Nt(ct,ct,Oe.length(),20),_t,st);return lt.position.copy(et).add(rt).multiplyScalar(.5),lt.quaternion.setFromUnitVectors(Pm,Oe.normalize()),lt}function d(st,et,rt,ct){return g(new un(new Yt(et.map(_t=>new w(..._t))),24,rt,7,!1),ct,st)}let M=new xe;M.name="Cartoon forearm and right hand",n.add(M);function x(st,et=.002){let rt=st.geometry.clone(),ct=rt.attributes.position,_t=rt.attributes.normal;for(let lt=0;lt<ct.count;lt++)ct.setXYZ(lt,ct.getX(lt)+_t.getX(lt)*et,ct.getY(lt)+_t.getY(lt)*et,ct.getZ(lt)+_t.getZ(lt)*et);ct.needsUpdate=!0,rt.computeBoundingSphere();let Oe=new at(rt,a);Oe.name="Ink silhouette",Oe.raycast=()=>{},st.add(Oe)}function _(st,et,rt=28){let ct=et.map(([mn,L,j,le,ue])=>({z:mn,x:L,y:j,rx:le,ry:ue})),_t=[],Oe=[],lt=[];for(let mn=0;mn<ct.length;mn++){let L=ct[mn];for(let j=0;j<=rt;j++){let le=j/rt*Math.PI*2,ue=Math.cos(le),ne=Math.sin(le);if(_t.push(L.x+L.rx*ue,L.y+L.ry*ne,L.z),Oe.push(j/rt,mn/(ct.length-1)),mn&&j){let Ne=mn*(rt+1)+j;lt.push(Ne,Ne-rt-2,Ne-1,Ne,Ne-rt-1,Ne-rt-2)}}}let In=new Rt;In.setAttribute("position",new ut(_t,3)),In.setAttribute("uv",new ut(Oe,2)),In.setIndex(lt),In.computeVertexNormals();let Zt=g(In,o,st);return x(Zt),Zt}let R=_(M,[[0,0,0,.097,.078],[-.18,.004,0,.099,.077],[-.42,.008,.003,.092,.073],[-.7,.006,.002,.084,.066],[-1,0,0,.076,.061]],40);R.name="Upper arm";let b=y(M,[0,0,0],[.076,.061,.068]);b.name="Bent elbow";let T=Am(o,a);M.add(T.mesh);let P=new dt,O=new xe;O.name="Cartoon right hand",M.add(O);let v=new gt;v.name="Saw contact above wrist",v.position.set(0,.044,.095),O.add(v);let S=new gt;S.name="Mug handle contact",S.position.set(0,-.036,-.145),O.add(S),_(O,[[.025,0,0,.037,.025],[0,0,0,.04,.026],[-.03,-.005,0,.059,.036],[-.066,-.005,0,.071,.04],[-.108,-.002,-.002,.071,.037],[-.14,.002,-.003,.065,.031],[-.16,.004,-.004,.051,.022],[-.17,.004,-.004,.006,.004]],40);let N=[],W=[];for(let[st,et,rt,ct]of[[0,-.056,.12,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.06,.1,-.23]]){let _t=new xe;_t.position.set(et,-.002,-.137+(st===3?.013:0)),_t.rotation.y=ct,O.add(_t),N.push(_t);let Oe=st===3?.0175:.02,lt=_(_t,[[.014,0,0,Oe*.92,Oe*.9],[0,0,0,Oe,Oe],[-rt*.22,0,-.002,Oe,Oe*.98],[-rt*.48,0,-.005,Oe*.96,Oe*.94],[-rt*.7,0,-.009,Oe*.92,Oe*.9],[-rt*.84,0,-.012,Oe*.86,Oe*.84],[-rt*.94,0,-.014,Oe*.64,Oe*.64],[-rt*.985,0,-.014,Oe*.3,Oe*.3],[-rt,0,-.014,3e-4,3e-4]]);lt.name=`Finger ${st+1}`,W.push(Cm(lt,rt)),_t.userData.spread=ct}let $=new gt;$.name="Lid contact fingertip",$.position.set(0,-.014,-.136),N[1].add($);let ee=new xe;ee.position.set(-.049,-.008,-.041),ee.rotation.y=.88,ee.rotation.z=-.26,O.add(ee),_(ee,[[.018,0,0,.033,.03],[0,0,0,.032,.03],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.02],[-.101,-.006,0,.012,.012],[-.107,-.006,0,3e-4,3e-4]]);let X=new xe;X.name="Wrist cuff and chain \u2014 right-click to detach",X.userData.playerChain=!0,n.add(X);let z=new xe;z.name="Close-fitting oval wrist cuff",X.add(z);let ae=new w(0,0,.033),he=-.056;function F(st,et,rt){let ct=new Tt;ct.absellipse(0,0,.061,.049,st,et,!1),ct.lineTo(Math.cos(et)*.05,Math.sin(et)*.038),ct.absellipse(0,0,.05,.038,et,st,!0),ct.closePath();let _t=new rn(ct,{depth:.044,bevelEnabled:!0,bevelSize:6e-4,bevelThickness:6e-4,bevelSegments:2,curveSegments:28}),Oe=g(_t,f,rt);Oe.position.z=-.022;for(let lt of[0,.044]){let In=Array.from({length:25},(mn,L)=>{let j=st+(et-st)*L/24;return[.0608*Math.cos(j),.0488*Math.sin(j),lt]}),Zt=d(Oe,In,.0016,u);Zt.name="Polished shackle rim"}return Oe}let te=F(Math.PI,Math.PI*2,z);te.name="Fixed lower cuff";let J=new xe;J.name="Hinged upper cuff",J.position.x=he,z.add(J);let ce=F(0,Math.PI,J);ce.position.x=-he,p(z,[he,0,-.03],[he,0,.03],.008,u);for(let st of[-.029,.029])y(z,[he,0,st],[.009,.009,.003],u);g(new St(.021,.027,.043),f,z).position.set(.064,-.01,0);let ie=new xe;ie.name="Spring-loaded locking clip",ie.position.set(.064-he,.012,0),J.add(ie),g(new St(.013,.027,.036),u,ie).position.set(.003,-.008,0),y(z,[.064,-.006,-.0225],[.0038,.0038,.001],h),g(new St(.003,.008,.0015),h,z).position.set(.064,-.011,-.0225);for(let st of[-.015,.015])y(ie,[.01,-.007,st],[.002,.003,.003],u);let G=g(new Qt(.014,.0048,8,24),u,z);G.name="Welded chain attachment",G.position.set(.076,-.019,0),G.rotation.y=Math.PI/2;let de=g(new Nt(.078,.078,.08,16),m,z);de.rotation.x=Math.PI/2,de.castShadow=!1;let Ee=new xe;Ee.name="Rusted rear pipe anchoring the wrist chain",t.add(Ee),d(Ee,[[3.3,.13,4.16],[3.3,.42,4.16],[3.3,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,l);for(let st of[.3,1.25,2.08]){g(new St(.2,.16,.025),l,Ee).position.set(3.3,st,4.37);for(let ct of[3.23,3.37]){p(Ee,[ct,st,4.35],[ct,st,4.14],.008,c);let _t=g(new Nt(.017,.017,.018,6),c,Ee);_t.rotation.x=Math.PI/2,_t.position.set(ct,st,4.12)}let rt=g(new Qt(.058,.01,8,32),c,Ee);rt.rotation.x=Math.PI/2,rt.position.set(3.3,st,4.16)}let De=new w(3.3,2.08,4.1),K=new w,I=g(new Qt(.055,.009,8,24),c,Ee);I.name="Raised wrist-chain pipe anchor",I.position.copy(De),I.rotation.y=Math.PI/2;let pe=[];for(let st=0;st<48;st++){let et=st/48*Math.PI*2;pe.push(new w(Math.cos(et)*.017,Math.sin(et)*.028,0))}let ye=new un(new Yt(pe,!0),Ce.mobile?12:32,.0055,Ce.mobile?4:6,!0),ge=new hn(ye,u,180);ge.name="Heavy interlocking wrist chain",ge.castShadow=!0,ge.receiveShadow=!0,ge.frustumCulled=!1,X.add(ge);let ve=new hn(new en(1,8,6),m,180);ve.frustumCulled=!1,X.add(ve);let Le=new w,Se=new w,H=new w,A=new w,re=new w,_e=new w,Ae=new gt,Te=new w(.29,-.36,-.73),Je=new w(.45,-.65,-.5),Me=new w(.15,-.31,-.77),He=new w(-.08,-.32,-.83),Ke=new w,Pe=new w(.43,-.66,-.54),Ve=new w(.22,-.68,-.58),Qe=new w(.12,-.34,-.05),Q=new w(0,0,-1),se=new w,we=new w,Ie=new w,be=new dt,U=new dt,Re=!1,oe=new w,fe=new w,Ue=new w,ze=new w,it=new dt,Et=new dt,Wt=3,xt=new w(1,0,0),Pt=Array.from({length:49},()=>new w);function an(st,et,rt){return rt.copy(A).lerp(K,st),rt.addScaledVector(xt,Math.sin(Math.PI*st)*et),rt.y-=Math.sin(Math.PI*st)*et*.9,Ke.copy(rt),n.localToWorld(Ke),Ke.y=Math.max(.032,Ke.y),n.worldToLocal(Ke),rt.copy(Ke),rt}function dn(){let st=0,et=1.5;for(let Oe=0;Oe<9;Oe++){let lt=(st+et)/2,In=0;for(let Zt=0;Zt<Pt.length;Zt++)an(Zt/(Pt.length-1),lt,Pt[Zt]),Zt&&(In+=Pt[Zt].distanceTo(Pt[Zt-1]));In>Wt?et=lt:st=lt}let rt=new Yt(Pt),ct=rt.getLength(),_t=Math.min(180,Math.max(2,Math.ceil(ct/.043)));ge.count=ve.count=_t;for(let Oe=0;Oe<_t;Oe++){let lt=Oe/(_t-1);rt.getPointAt(lt,Ae.position),rt.getTangentAt(lt,_e),Ae.quaternion.setFromUnitVectors(Pm,_e),Oe%2&&Ae.rotateY(Math.PI/2),Ae.scale.set(1,1,1),Ae.updateMatrix(),ge.setMatrixAt(Oe,Ae.matrix),Ae.scale.set(.032,.026,.032),Ae.updateMatrix(),ve.setMatrixAt(Oe,Ae.matrix)}ge.instanceMatrix.needsUpdate=!0,ve.instanceMatrix.needsUpdate=!0}function sr(st,et=!1,rt=!1,ct=null,_t=0){let Oe=r.sample(st,rt),lt=Oe.reach;n.position.copy(i.position),n.quaternion.copy(i.quaternion);let In=Math.tan(ke.degToRad(i.fov/2))/Math.tan(ke.degToRad(62/2));if(n.scale.set(In,In,1),n.updateWorldMatrix(!0,!1),n.visible=Oe.visible,M.visible=Oe.locked,!Oe.visible)return Oe.openLaptop;K.copy(De),n.worldToLocal(K);let Zt=ct?ct.reveal:et?1:Oe.reveal,mn=(1-Zt)*.55;Le.copy(Te).lerp(Oe.locked?Me:He,lt),Le.y+=_t*.18,Le.x-=_t*.12,Oe.locked&&(Le.y+=et?0:Oe.strain),Se.copy(Je).lerp(Oe.locked?Pe:Ve,lt);let L=!Oe.locked&&Oe.releaseElapsed<1.8&&Re,j=et&&!Oe.locked?1:Oe.hingeOpen,le=et&&!Oe.locked?1:Oe.cuffDrop;if(L){Le.copy(se),Se.copy(Ie);let ue=et?1:Oe.handFree;Le.y+=ue*.055,Le.z+=ue*.025}if(Le.y-=mn,Se.y-=mn,re.copy(Se).sub(Le).setLength(.35),Se.copy(Le).add(re),H.copy(Se).add(Qe),R.position.copy(H),re.copy(Se).sub(H),R.quaternion.setFromUnitVectors(Q,re.clone().normalize()),R.scale.z=re.length(),re.copy(Le).sub(Se),P.setFromUnitVectors(Q,re.clone().normalize()),b.position.copy(Se),b.quaternion.copy(P),O.position.copy(Le),O.quaternion.copy(P),O.rotateX(-.12+lt*.08),O.rotateY(.13-lt*.06),O.rotateZ(-.04),L&&O.quaternion.slerp(be,1-Oe.handFree),N.forEach((ue,ne)=>{ue.rotation.x=-.06+(1-lt)*(.11+ne*.015)}),ee.rotation.x=0,ee.rotation.y=.88,ee.rotation.z=-.26,W.forEach(ue=>ue(0)),ct){let ue=ct.blend,ne=ct.grip,Ne=ct.gripKind==="handle";N.forEach((We,Ge)=>{We.rotation.x=ke.lerp(We.rotation.x,(Ne?-.16:-.46)+(Ge===0?.08:0),ne),We.rotation.y=ke.lerp(We.userData.spread,We.userData.spread*.3,ne)}),ee.rotation.x=(Ne?.42:.28)*ne,ee.rotation.y=.88-(Ne?.58:.28)*ne,Ne&&(W.forEach(We=>We(ne)),ee.rotation.z=-.26+.18*ne),N[1].updateMatrix(),Ne?fe.copy(S.position):fe.copy($.position).applyMatrix4(N[1].matrix),Et.copy(i.quaternion).invert(),it.copy(Et).multiply(ct.quaternion),oe.copy(ct.position),n.worldToLocal(oe),Ue.copy(oe).sub(fe.applyQuaternion(it)),O.position.lerp(Ue,ue),O.quaternion.slerp(it,ue),Le.copy(O.position),H.set(.34,-.66-mn,-.09),Rm(H,Le,ze),Se.lerp(ze,ue),R.position.copy(H),re.copy(Se).sub(H),R.quaternion.setFromUnitVectors(Q,re.clone().normalize()),R.scale.z=re.length(),re.copy(Le).sub(Se),P.setFromUnitVectors(Q,re.clone().normalize()),b.position.copy(Se),b.quaternion.copy(P)}else N.forEach(ue=>{ue.rotation.y=ue.userData.spread});return T.update(Se,O.position,O.quaternion),Oe.locked?(z.position.copy(ae).applyQuaternion(O.quaternion).add(Le),z.quaternion.copy(O.quaternion),J.rotation.z=0,ie.rotation.z=0):(z.position.copy(we),z.position.y-=mn+le*.32,z.position.x+=le*.08,z.quaternion.copy(U),z.rotateX(le*.8),z.rotateZ(le*.42),J.rotation.z=j*1.95,ie.rotation.z=-(et?1:Oe.unlatch)*.85),z.updateMatrix(),A.copy(G.position).applyMatrix4(z.matrix),Wt=A.distanceTo(K)+(Oe.locked?.24*(1-lt)+.018:.42),dn(),Oe.openLaptop}function ci(st){if(!r.locked)return!1;se.copy(Le),Ie.copy(Se),be.copy(O.quaternion),U.copy(z.quaternion),we.copy(z.position),Re=!0;let et=r.detach(st);return et&&(M.visible=!1),et}function or(){r.reset(),Re=!1,J.rotation.z=0,ie.rotation.z=0,sr(0,!0)}return sr(0,!0),{group:t,target:X,state:r,update:sr,reset:or,getSawContact:st=>v.getWorldPosition(st),endReach:()=>r.endReach(),setEnvironment(st){for(let et of[l,c,f,u])et.envMap=st,et.envMapIntensity=et===u?1.65:1.15,et.needsUpdate=!0},get locked(){return r.locked},requestReach:st=>r.requestReach(st),detach:ci}}function Lm(i,{canDetach:e=()=>!0,onBlocked:t=()=>{}}={}){let n=document.querySelector("#chain-menu"),r=n.querySelector("button"),s=document.querySelector("#scene");function o(c=!1){n.hidden=!0,c&&s.focus({preventScroll:!0})}function a(c,h){r.setAttribute("aria-disabled",String(!e())),r.title=e()?"Unlock the shackle with the key":"Find the shackle key first",n.hidden=!1,n.style.left=`${Math.max(8,Math.min(c,innerWidth-n.offsetWidth-8))}px`,n.style.top=`${Math.max(8,Math.min(h,innerHeight-n.offsetHeight-8))}px`,r.focus({preventScroll:!0})}function l(){if(!e()){t();return}o(!0),i()}return r.addEventListener("click",l),n.addEventListener("contextmenu",c=>c.preventDefault()),document.addEventListener("pointerdown",c=>{!n.hidden&&!n.contains(c.target)&&o()},!0),document.addEventListener("keydown",c=>{n.hidden||(c.code==="Escape"?(c.preventDefault(),c.stopPropagation(),o(!0)):c.code==="KeyB"&&c.altKey&&c.metaKey&&!c.ctrlKey&&!c.shiftKey&&(c.preventDefault(),c.stopPropagation(),c.repeat||l()))},!0),window.addEventListener("blur",()=>o()),{show:a,hide:o,get active(){return!n.hidden}}}function Dm(i,e){let t=i.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[],n=[],r=.1;for(let s of t){let o=s.replace(/[^\p{L}\p{N}'’]/gu,""),a=(o.toLowerCase().replace(/e$/,"").match(/[aeiouy]+/g)||[]).length,l=Math.max(1,Math.min(4,a)),c=.24+Math.min(o.length,10)*.025+(l-1)*.09;for(let h=0;h<l;h++){let f=c/l;n.push({start:r+h*f,end:r+(h+.87)*f,amount:.78+Math.min(o.length,6)*.025})}r+=c+(/[.!?…]/u.test(s)?.4:/[,;:]/.test(s)?.24:.11)}return{startTime:e,cues:n,duration:r}}function Um(i,e){if(!i)return 0;let t=e-i.startTime;for(let n of i.cues){if(t<n.start)return 0;if(t<=n.end){let r=(t-n.start)/(n.end-n.start),s=Math.min(1,r/.22),o=Math.min(1,(1-r)/.35),a=Math.min(s,o);return n.amount*a*a*(3-2*a)}}return 0}var Jd={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36},D_=i=>ke.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Hm(i){let e=new w(...Jd.position),t=new w(...Jd.lookAt).sub(e).normalize(),n={yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(t.y),zoom:Jd.fov/i},r=null;return{start(s,o,a){r={time:s,position:o.clone(),yaw:a.yaw,pitch:a.pitch,zoom:a.zoom}},cancel(){r=null},get active(){return r!==null},update(s,o,a,l=!1){if(!r)return;let c=l?1:ke.clamp((s-r.time)/1.4,0,1),h=c*c*(3-2*c);o.lerpVectors(r.position,e,h),a.yaw=r.yaw+D_(n.yaw-r.yaw)*h,a.pitch=ke.lerp(r.pitch,n.pitch,h),a.zoom=ke.lerp(r.zoom,n.zoom,h),c===1&&(o.copy(e),Object.assign(a,n),r=null)}}}var Dr=(i,e,t)=>ke.smootherstep(i,e,t),Nm=i=>ke.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Fm({laptop:i,restraint:e,cameraPosition:t,state:n}){let r=null,s=new w,o=new w,a=new w,l=new w,c=new dt,h=new dt,f=new fi,u=0,m=0,g=1,y=0,p=0,d={position:new w,quaternion:new dt,blend:0,grip:0,reveal:0};function M(R){return r!==null||e.locked||i.isOpen||!e.requestReach(R)?!1:(r=R,s.copy(t),u=n.yaw,m=n.pitch,g=n.zoom??1,i.object.updateWorldMatrix(!0,!1),i.object.localToWorld(o.set(.16,.78,1)),i.object.localToWorld(a.set(0,.32,-.02)),l.copy(a).sub(o).normalize(),y=Math.atan2(-l.x,-l.z),p=Math.asin(l.y),d.blend=d.grip=d.reveal=0,!0)}function x(R,b=!1){if(r===null)return!1;let T=R-r;if(b)return i.setOpenProgress(1),e.endReach(),r=null,!0;let P=Dr(T,0,.7)*(1-Dr(T,2.7,3.4));t.lerpVectors(s,o,P),n.zoom=ke.lerp(g,1,P),n.yaw=Nm(u+Nm(y-u)*P),n.pitch=ke.lerp(m,p,P);let O=Dr(T,.96,2.21);return i.setOpenProgress(O),i.getLidGrip(d.position),i.object.getWorldQuaternion(c),h.setFromEuler(f.set(-.1-.28*O,0,-.1)),d.quaternion.copy(c).multiply(h),d.blend=Dr(T,0,.8)*(1-Dr(T,2.38,3.02)),d.grip=Dr(T,.7,.92)*(1-Dr(T,2.21,2.38)),d.reveal=Dr(T,0,.18)*(1-Dr(T,2.64,3.12)),T<3.4?!1:(t.copy(s),n.yaw=u,n.pitch=m,n.zoom=g,e.endReach(),r=null,!0)}function _(){r!==null&&(t.copy(s),n.yaw=u,n.pitch=m,n.zoom=g,e.endReach(),r=null)}return{start:M,update:x,cancel:_,get active(){return r!==null},get handPose(){return r===null?null:d}}}var zm=i=>ke.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Om({position:i,state:e,getView:t}){let n=null,r=null,s=new w,o=new w,a=new w,l=()=>({position:i.clone(),yaw:e.yaw,pitch:e.pitch,zoom:e.zoom});function c(g,y,p){r={from:l(),to:g,time:y,returning:p}}function h(g){n||(n=l()),t(s,o),a.subVectors(o,s).normalize(),c({position:s.clone(),yaw:Math.atan2(-a.x,-a.z),pitch:Math.asin(a.y),zoom:.9},g,!1)}function f(g){n&&c(n,g,!0)}function u(){n=null,r=null}function m(g,y=!1){if(!r)return;let p=y?1:ke.smootherstep(g-r.time,0,.85),{from:d,to:M,returning:x}=r;i.lerpVectors(d.position,M.position,p),e.yaw=zm(d.yaw+zm(M.yaw-d.yaw)*p),e.pitch=ke.lerp(d.pitch,M.pitch,p),e.zoom=ke.lerp(d.zoom,M.zoom,p),p===1&&(r=null,x&&(n=null))}return{start:h,restore:f,cancel:u,update:m,get active(){return n!==null}}}function Bm(i,e){let t="waiting",n=null,r=0,s=null,o=()=>Array.from({length:i.count},(c,h)=>h).filter(c=>i.canSpeak(c));function a(c,h=!1){if(t==="finished")return null;if(t==="ending")return c-r<1.1?null:(t="finished",{type:"gameover"});if(t==="returning")return c-r<1.1?null:(e.reset(),e.start(),t="waiting",n=null,{type:"restart",remaining:o().length});if(t==="lowering")return i.isSubmerged(n)?(s===null&&(s=c),c-s<1.25?null:(r=c,o().length?(t="returning",{type:"return",index:n}):(t="ending",{type:"ending"}))):(s=null,null);if(h)return null;let f=o();if(!f.length)return i.movingIndex!==null?null:(t="ending",r=c,{type:"ending"});if(e.status!=="finished")return null;let u=i.movingIndex;return u!==null&&!i.isLowered(u)?null:(n=u??f[0],i.lower(n)?(t="lowering",r=c,s=null,{type:"lower",index:n}):(n=null,null))}function l(){t="waiting",n=null,r=0,s=null,i.reset()}return{update:a,reset:l,get active(){return t!=="waiting"},get index(){return n},blackout(c){return t==="finished"?1:t==="ending"?Math.min(1,Math.max(0,(c-r)/1.1)):0}}}var km=i=>ke.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Vm({position:i,state:e,getView:t,baseFov:n}){let r=null,s=null,o=null,a=0,l=!1,c=new w,h=new w,f=new w,u=()=>({position:i.clone(),yaw:e.yaw,pitch:e.pitch,zoom:e.zoom});function m(d,M){r=u(),s=r,o=d,a=M,l=!1}function g(d){r&&(s=u(),a=d,l=!0)}function y(){r=s=null,o=null,l=!1}function p(d,M=!1){if(!r)return;let x=M?1:ke.smootherstep(d-a,0,l?1:1.15),_=r;l||(t(o,c,h),f.subVectors(h,c).normalize(),_={position:c,yaw:Math.atan2(-f.x,-f.z),pitch:Math.asin(f.y),zoom:50/n}),i.lerpVectors(s.position,_.position,x),e.yaw=km(s.yaw+km(_.yaw-s.yaw)*x),e.pitch=ke.lerp(s.pitch,_.pitch,x),e.zoom=ke.lerp(s.zoom,_.zoom,x),l&&x===1&&y()}return{start:m,restore:g,cancel:y,update:p,get active(){return r!==null}}}function Gm({saw:i,camera:e,restraint:t,hasKey:n}){let r=i.position.clone(),s=i.quaternion.clone(),o=new w,a=new dt,l=new w,c=new w,h=new w,f=new dt,u=new dt,m=new dt,g=new dt().setFromEuler(new fi(Math.PI/2,Math.PI,.16,"ZYX")),y=new w,p=null,d=!1,M=0;function x(b){return n()||!t.locked||p!==null?!1:(i.getWorldPosition(o),i.getWorldQuaternion(a),t.requestReach(b),p=b,!0)}function _(b,T=!1){if(p===null||d)return!1;let P=b-p;if(T)M=ke.smootherstep(P,.55,1.1);else{let O=ke.smootherstep(P,0,1.25),v=P<1.4?0:Math.sin((P-1.4)*Math.PI*6)*.085*ke.smoothstep(P,1.4,1.7);t.getSawContact(l),u.copy(e.quaternion).multiply(g),h.set(-.06,0,.07).applyQuaternion(u),c.copy(l).sub(h),y.set(1,0,0).applyQuaternion(e.quaternion),c.addScaledVector(y,v),i.position.lerpVectors(o,c,O),i.parent.worldToLocal(i.position),f.slerpQuaternions(a,u,O),i.parent.getWorldQuaternion(m),i.quaternion.copy(m.invert()).multiply(f),M=ke.smootherstep(P,2.75,3.55)}return P<(T?1.2:3.65)?!1:(d=!0,M=1,t.endReach(),!0)}function R(){p=null,d=!1,M=0,i.position.copy(r),i.quaternion.copy(s),t.endReach()}return{start:x,update:_,reset:R,armLift:(b,T=!1)=>p===null||T?0:ke.smootherstep(b-p,.24,.95),get active(){return p!==null&&!d},get finished(){return d},get blackout(){return M}}}function Qd(i){let e=[];for(let r=0;r<64;r++){let s=r/64*Math.PI*2,o=r%17===0?.79:r%23===0?1.1:1,a=(73+7*Math.sin(s*5+i)+4*Math.sin(s*11+i*.7))*o;e.push([Math.cos(s)*a,Math.sin(s)*a])}let t=(r,s)=>`${((r[0]+s[0])/2).toFixed(2)},${((r[1]+s[1])/2).toFixed(2)}`,n="M"+t(e.at(-1),e[0]);return e.forEach((r,s)=>{let o=e[(s+1)%e.length];n+=`Q${r[0].toFixed(2)},${r[1].toFixed(2)} ${t(r,o)}`}),n+"Z"}function Wm(i){let e=`mug-blood-${i}`,t=Qd(i*3.7+1),r=[[-36,235,5],[-12,315,8],[19,195,4],[43,275,6]].map(([s,o,a],l)=>{s+=i?7-l*3:0;let c=(l%2?1:-1)*9;return`<path d="M ${s-a} -8 C ${s-a+4} 48,${s+c-a} ${o*.55},${s+c-a*.6} ${o-14} C ${s+c-a*1.6} ${o+7},${s+c+a*1.6} ${o+7},${s+c+a*.6} ${o-14} C ${s+c+a} ${o*.55},${s+a-3} 48,${s+a} -8 Z"/>`}).join("");return`<div class="eye-wound">
  <svg class="blood-streaks" viewBox="-100 0 200 330" preserveAspectRatio="none"><defs><linearGradient id="${e}-drip" x2=".3" y2="1"><stop stop-color="#9e0013"/><stop offset=".65" stop-color="#bc1021"/><stop offset="1" stop-color="#69000e"/></linearGradient></defs><g fill="url(#${e}-drip)">${r}</g></svg>
  <svg class="wound-mark" viewBox="-100 -100 200 200"><defs><radialGradient id="${e}"><stop stop-color="#76000c"/><stop offset=".48" stop-color="#d91525"/><stop offset=".82" stop-color="#b00618"/><stop offset="1" stop-color="#63000d"/></radialGradient></defs>
   <path d="${t}" fill="url(#${e})"/>
   <path d="${Qd(i+5)}" transform="scale(.69 .76) rotate(${i?21:-13})" fill="#dd1c2a" opacity=".3"/>
   <path d="${Qd(i+8)}" transform="scale(.22 .27) rotate(31)" fill="#65000e" opacity=".55"/>
   <g fill="#b6081b"><circle cx="-82" cy="-31" r="3"/><circle cx="49" cy="-80" r="2.6"/><circle cx="81" cy="20" r="4"/><circle cx="-33" cy="82" r="2.7"/></g>
  </svg>
 </div>`}function Xm(i){i.innerHTML=Wm(0)+Wm(1);function e(){i.hidden=!0,i.style.opacity="0";for(let n of["--eye-scale","--drip-length","--drip-width","--drip-opacity"])i.style.removeProperty(n)}function t(n,r){i.hidden=n.eyeImpact<=0||r>=1,!i.hidden&&(i.style.opacity=String(n.eyeImpact),i.style.setProperty("--eye-scale",String(.035+1.115*n.eyeGrowth)),i.style.setProperty("--drip-length",String(n.eyeDrip)),i.style.setProperty("--drip-width",String(.12+.88*n.eyeGrowth)),i.style.setProperty("--drip-opacity",String(Math.min(1,n.eyeDrip*5))))}return e(),{update:t,reset:e}}var Ri=(i,e,t)=>ke.smootherstep(i,e,t);function qm({mug:i,camera:e,restraint:t}){let n=i.position.clone(),r=i.quaternion.clone(),s=new w,o=new dt,a=new w,l=new dt,c=new w,h=new w,f=new w,u=new w,m=new dt,g=new dt,y=new dt,p=new dt,d=new dt().setFromAxisAngle(new w(0,1,0),Math.PI),M=new dt().setFromAxisAngle(new w(0,0,1),-Math.PI/2),x=i.getObjectByName("Mug handle grip"),_=["Mug left ear tip","Mug right ear tip"].map(F=>i.getObjectByName(F)),R=new w,b=new w,T=new w,P=new w,O=new w,v={position:new w,quaternion:new dt,blend:0,grip:0,reveal:0,gripKind:"handle"},S=null,N=!1,W=0,$=0,ee=0,X=0;function z(F){if(t.locked||S!==null||N||!t.requestReach(F))return!1;i.updateWorldMatrix(!0,!1),i.getWorldQuaternion(o),e.updateWorldMatrix(!0,!1),e.getWorldPosition(a),e.getWorldQuaternion(l),u.set(0,-.22,-.12).applyQuaternion(l),R.set(0,0,0),P.set(0,0,0),_.forEach((V,ie)=>{V.getWorldPosition(b),i.worldToLocal(b),R.add(b),P.addScaledVector(b,ie?1:-1)}),R.multiplyScalar(.5),i.getWorldScale(O),s.copy(R),i.localToWorld(s),p.setFromAxisAngle(new w(1,0,0),.82),g.copy(p).multiply(d),P.multiply(O).applyQuaternion(g);let te=e.projectionMatrix.elements,J=Math.max(e.near*1.35,Math.abs(P.x)*.5*te[0]/.6);function ce(V,ie){return ie.set(0,.08*V/te[5],-V).applyQuaternion(l).add(a)}return ce(J+.3,c),ce(J,h),S=F,W=$=ee=X=0,v.blend=v.grip=v.reveal=0,!0}function ae(F,te=!1){if(S===null||N)return!1;let J=F-S;if(te){if($=Ri(J,.15,.2),ee=.12*Ri(J,.2,.65),X=0,W=Ri(J,.65,1.15),J<1.25)return!1}else{let ce=Ri(J,.82,2.12),V=Ri(J,2.28,4.05);if(p.setFromAxisAngle(new w(1,0,0),.82*V),g.copy(l).multiply(p).multiply(d),m.slerpQuaternions(o,g,ce),f.lerpVectors(c,h,V).lerp(s,1-ce),f.y+=Math.sin(Math.PI*ce)*.08,T.copy(R).multiply(O).applyQuaternion(m),f.sub(T),f.addScaledVector(u,Ri(J,4.4,4.85)),i.position.copy(f),i.parent.worldToLocal(i.position),i.parent.getWorldQuaternion(y),i.quaternion.copy(y.invert()).multiply(m),i.updateWorldMatrix(!0,!1),x.getWorldPosition(v.position),v.quaternion.copy(m).multiply(d).multiply(M),v.blend=Ri(J,0,.72),v.grip=Ri(J,.48,.8),v.reveal=Ri(J,0,.22),$=Ri(J,4.05,4.11),ee=Ri(J,4.11,6.35),X=Ri(J,4.2,5.65),W=Ri(J,6.45,7.2),J<7.3)return!1}return N=!0,W=1,t.endReach(),!0}function he(){S=null,N=!1,W=$=ee=X=0,i.position.copy(n),i.quaternion.copy(r),i.updateWorldMatrix(!0,!1),v.blend=v.grip=v.reveal=0,t.endReach()}return{start:z,update:ae,reset:he,get active(){return S!==null&&!N},get finished(){return N},get blackout(){return W},get eyeImpact(){return $},get eyeGrowth(){return ee},get eyeDrip(){return X},get handPose(){return S!==null&&!N?v:null}}}function Ym({canvas:i,state:e,keys:t,cancel:n,canInteract:r}){let s=new Map,o=0,a=1,l=!1,c=()=>{let[g,y]=[...s.values()];return Math.hypot(g.x-y.x,g.y-y.y)};i.addEventListener("pointerdown",g=>{g.pointerType!=="touch"||!r()||(s.set(g.pointerId,{x:g.clientX,y:g.clientY}),s.size===2&&(o=c(),a=e.zoom,l=!0,n(),g.stopImmediatePropagation()))},!0),i.addEventListener("pointermove",g=>{s.has(g.pointerId)&&(s.set(g.pointerId,{x:g.clientX,y:g.clientY}),l&&(g.stopImmediatePropagation(),s.size===2&&r()&&(e.zoom=Math.max(.6,Math.min(1.15,a*o/Math.max(1,c()))))))},!0);function h(g){s.has(g.pointerId)&&(s.delete(g.pointerId),l&&(g.stopImmediatePropagation(),s.size||(l=!1)))}i.addEventListener("pointerup",h,!0),i.addEventListener("pointercancel",h,!0);let f=document.createElement("div");f.id="touch-navigation";let u=document.createElement("button");u.type="button",u.textContent="Move",u.setAttribute("aria-expanded","false"),u.setAttribute("aria-label","Show movement controls"),f.append(u);let m=document.createElement("div");m.className="touch-pad",m.hidden=!0;for(let[g,y,p]of[["KeyQ","Lower camera","\u2193"],["KeyW","Move forward","\u25B2"],["KeyE","Raise camera","\u2191"],["KeyA","Move left","\u25C0"],["KeyS","Move backward","\u25BC"],["KeyD","Move right","\u25B6"]]){let d=document.createElement("button");d.type="button",d.textContent=p,d.setAttribute("aria-label",y),d.style.touchAction="none",d.addEventListener("pointerdown",M=>{M.preventDefault(),r()&&(n(),t.add(g),d.setPointerCapture(M.pointerId))});for(let M of["pointerup","pointercancel","lostpointercapture"])d.addEventListener(M,()=>t.delete(g));m.append(d)}return u.addEventListener("click",()=>{m.hidden=!m.hidden,u.setAttribute("aria-expanded",String(!m.hidden)),m.hidden&&t.clear()}),f.append(m),document.body.append(f),{reset(){s.clear(),l=!1,t.clear(),m.hidden=!0,u.setAttribute("aria-expanded","false")}}}function $m(i,e,t){let n=document.createElement("canvas");n.width=n.height=64;let r=n.getContext("2d"),s=r.createRadialGradient(32,32,9,32,32,32);s.addColorStop(0,"rgba(0,0,0,.66)"),s.addColorStop(.65,"rgba(0,0,0,.30)"),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,64,64);let o=new zt(n),a=new mt({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),l=new Mt(1,1),c=new xe;c.name="Mobile floor contact shadows",c.userData.ignoreAcid=!0,i.add(c);let h=new Rn;function f(m){m.updateWorldMatrix(!0,!0),h.setFromObject(m);let g=h.getSize(new w),y=h.getCenter(new w),p=new at(l,a);return p.rotation.x=-Math.PI/2,p.position.set(y.x,.017,y.z),p.scale.set(Math.max(.12,g.x*1.15),Math.max(.12,g.z*1.15),1),p.raycast=()=>{},c.add(p),p}for(let m of e)f(m);let u=f(t);return{update(){t.getWorldPosition(u.position),u.position.y=.017}}}function Zm(i,e=Ce){let t=new Set,n=new Set;i.traverse(r=>{if(r.isMesh){e.mobile&&r.geometry&&(r.geometry.boundingSphere||r.geometry.computeBoundingSphere(),r.geometry.boundingSphere.radius*Math.max(Math.abs(r.scale.x),Math.abs(r.scale.y),Math.abs(r.scale.z))<.08&&(r.castShadow=!1));for(let s of Array.isArray(r.material)?r.material:[r.material])if(!(!s||t.has(s))){t.add(s),e.mobile&&(s.isMeshPhysicalMaterial&&(s.clearcoat=0,s.transmission=0,s.sheen=0,s.iridescence=0,s.anisotropy=0),s.bumpMap=null,s.normalMap=null,s.clearcoatNormalMap=null,s.clearcoatRoughnessMap=null,s.transparent&&(s.forceSinglePass=!0));for(let o of Object.values(s))o?.isTexture&&n.add(o)}}});for(let r of n)e.mobile&&(r.anisotropy=Math.min(r.anisotropy,2));return{materials:t.size,textures:n.size}}function Km(i,e=Ce){if(!e.mobile)return;let t=new Map;function n(r){if(!r.isMeshStandardMaterial)return r;if(t.has(r))return t.get(r);let s=new jr;er.prototype.copy.call(s,r);for(let o of["map","alphaMap","aoMap","aoMapIntensity","lightMap","lightMapIntensity","wireframe","wireframeLinewidth","fog"])s[o]=r[o];for(let o of["color","emissive","opacity","emissiveIntensity","visible"])Object.defineProperty(s,o,{configurable:!0,get:()=>r[o],set:a=>{r[o]=a}});return s.clippingPlanes=r.clippingPlanes,s.emissiveMap=r.emissiveMap,s.envMap=null,s.onBeforeCompile=r.onBeforeCompile,s.customProgramCacheKey=r.customProgramCacheKey,s.forceSinglePass=!0,t.set(r,s),s}i.traverse(r=>{r.material&&(r.material=Array.isArray(r.material)?r.material.map(n):n(r.material)),r.isLight&&!r.userData.mobileEssential&&(r.visible=!1)})}function Jm(i,{pause:e,resume:t,lowerQuality:n,status:r}){let s=!1,o;function a(h,f=!1){if(r.hidden=!1,r.textContent=h,f){let u=document.createElement("button");u.type="button",u.textContent="Retry with lighter graphics",u.addEventListener("click",()=>location.reload(),{once:!0}),r.append(document.createElement("br"),u)}}function l(h){h.preventDefault(),s=!0,e();try{sessionStorage.setItem("figsaw-safe-graphics","1")}catch{}a("Restoring graphics\u2026"),clearTimeout(o),o=setTimeout(()=>{s&&a("Graphics were interrupted. Your device may need a lighter scene.",!0)},8e3)}function c(){s&&(s=!1,clearTimeout(o),n(),r.hidden=!0,t())}return i.addEventListener("webglcontextlost",l),i.addEventListener("webglcontextrestored",c),{get lost(){return s},dispose(){clearTimeout(o),i.removeEventListener("webglcontextlost",l),i.removeEventListener("webglcontextrestored",c)}}}var Nl=document.querySelector("#loading-status"),Wl=async i=>{Nl&&(Nl.textContent=i),await new Promise(e=>setTimeout(e,0))},vt=document.querySelector("#scene"),U_=vt.getAttribute("aria-label"),Kn=matchMedia("(prefers-reduced-motion: reduce)").matches,as={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62},Ur=new w(...as.position),jd=new w(...as.lookAt).sub(Ur).normalize(),is={yaw:Math.atan2(-jd.x,-jd.z),pitch:Math.asin(jd.y)},qe={yaw:is.yaw,pitch:is.pitch,zoom:1,jaw:0,space:!1,time:0,talkUntil:0},zn=new jc({canvas:vt,antialias:!Ce.mobile,alpha:!1,powerPreference:Ce.mobile?"default":"high-performance"});zn.setPixelRatio(Ce.pixelRatio);zn.localClippingEnabled=!0;zn.shadowMap.enabled=Ce.shadows;zn.shadowMap.autoUpdate=!1;zn.shadowMap.type=_d;zn.outputColorSpace=yt;zn.toneMapping=wd;zn.toneMappingExposure=.76;var ai=new tl;ai.background=new pt(1449240);ai.fog=new el(2305314,11,26);var Va=O0(zn,ai),Xt=new $n(as.fov,1,.06,35),Mn=Ur.clone(),Cn=Hm(as.fov),Qm=new w,jm=new w,ef=new w,fg=new dl(9545120,2370600,.62);fg.userData.mobileEssential=!0;ai.add(fg);var pg=17.5,Vi=new _o(12898992,pg,12,1.25,.72,2);Vi.position.set(.22,2.83,-.55);Vi.target.position.set(0,0,-.1);Vi.castShadow=Ce.shadows;Vi.shadow.mapSize.set(Ce.shadowSize,Ce.shadowSize);Vi.shadow.camera.near=.1;Vi.shadow.camera.far=11;Vi.shadow.normalBias=.0025;Vi.shadow.bias=-5e-5;Vi.userData.mobileEssential=!0;ai.add(Vi,Vi.target);var Ai=new fl(10269877,.85);Ai.position.set(6.2,4.1,-1.6);Ai.target.position.set(-1,.35,-.3);Ai.castShadow=!Ce.mobile;Ai.shadow.mapSize.set(1024,1024);Ai.shadow.camera.left=-6;Ai.shadow.camera.right=6;Ai.shadow.camera.top=5;Ai.shadow.camera.bottom=-5;Ai.shadow.normalBias=.003;Ai.shadow.bias=-6e-5;Ai.userData.mobileEssential=!0;ai.add(Ai,Ai.target);var mg=new An(9348772,2.2,10,2);mg.position.set(-1,2.6,4);ai.add(mg);var zi=ke.lerp;function gr(i,e=.9){return Ce.mobile?new jr({color:i}):new Fe({color:i,roughness:e})}function Gn(i,e,t=ai){let n=new at(i,e);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),n}function rs(i,e,t,n,r=3){let s=Gn(new hl(1,Ce.mobile?Math.min(r,2):r),typeof e=="string"||typeof e=="number"?gr(e):e,i);return s.position.set(...t),s.scale.set(...n),s}function zo(i,e,t,n,r=!1){let s=new Yt(i.map(o=>o.isVector3?o:new w(...o)),r);return Gn(new un(s,Math.max(Ce.mobile?12:24,i.length*2),e,Ce.mobile?5:8,r),t,n)}function H_(){let i=document.createElement("canvas");i.width=i.height=Ce.mobile?512:1024;let e=i.getContext("2d"),t=2718,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=([c,h])=>[(c+2)/4*i.width,(1-h/3)*i.height];function s(c,h,f=["rgba(211,12,57,.66)","rgba(227,17,62,.50)"]){let u=c.map(r);e.lineCap="round",e.lineJoin="round";for(let m=0;m<3;m++){e.strokeStyle=f[m===0?0:1];for(let g=1;g<u.length;g++){let y=Math.sin(g*1.37+m)*.08+Math.sin(g*.42)*.1;e.lineWidth=h*i.width/4*(1+y)*(m===0?1.13:.77);let p=(n()-.5)*1.5,d=(n()-.5)*1.5;e.beginPath(),e.moveTo(u[g-1][0]+p,u[g-1][1]+d),e.lineTo(u[g][0]+p,u[g][1]+d),e.stroke()}}}let o=[];for(let c=0;c<=140;c++){let h=c/140,f=zi(-1.65,1.23,h),u=.16*Math.exp(-Math.pow((f+1.65)/.26,2))+.06*Math.pow(Math.max(0,(f-.42)/.81),2);o.push([f,1.45-u+.006*Math.sin(h*12)])}s(o,.075,["rgba(23,25,24,.98)","rgba(23,25,24,.94)"]);let a=[];for(let c=0;c<=80;c++){let h=c/80;a.push([zi(-.68,.42,h),1.452+.009*Math.sin(h*15)+.012*Math.sin(h*7)])}s(a,.18);for(let c of[-1,1]){let h=[],f=c===-1?-1.13:1.15,u=1.68;for(let m=0;m<=240;m++){let g=m/240,y=g*Math.PI*6.1,p=.017+g*.272+.003*Math.sin(g*39+c);h.push([f+Math.cos(y)*p,u+Math.sin(y)*p*.92+.003*Math.sin(g*43)])}s(h,.047)}e.globalCompositeOperation="destination-out";for(let c=0;c<14e3;c++){e.fillStyle=`rgba(0,0,0,${.08+n()*.48})`;let h=n()*i.width,f=n()*i.height;e.fillRect(h,f,.35+n()*1.2,.4+n()*1.8)}for(let c=0;c<1600;c++){e.strokeStyle=`rgba(0,0,0,${.05+n()*.17})`,e.lineWidth=.4+n()*.7;let h=n()*i.width,f=n()*i.height;e.beginPath(),e.moveTo(h,f),e.lineTo(h+2+n()*6,f+n()*2-1),e.stroke()}let l=new zt(i);return l.colorSpace=yt,l.anisotropy=Math.min(Ce.mobile?2:8,zn.capabilities.getMaxAnisotropy()),l}var N_=H_(),Xl=new Fe({color:13882826,roughness:.94});Xl.onBeforeCompile=i=>{i.uniforms.lipstickPaint={value:N_},i.vertexShader=`varying vec3 vStone;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vStone = position;`),i.fragmentShader=`varying vec3 vStone;
 uniform sampler2D lipstickPaint;
 float hash3(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float stoneNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash3(i),hash3(i+vec3(1,0,0)),f.x),mix(hash3(i+vec3(0,1,0)),hash3(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash3(i+vec3(0,0,1)),hash3(i+vec3(1,0,1)),f.x),mix(hash3(i+vec3(0,1,1)),hash3(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 float grain=stoneNoise(vStone*53.);float fleck=stoneNoise(vStone*142.);float mottled=stoneNoise(vStone*5.);
 float edge=.43 + vStone.x*.53 + .21*sin(vStone.z*5.+vStone.x*3.)+(stoneNoise(vStone*4.)-.5)*.34;
 float moss=1.-smoothstep(-.045,.045,vStone.y-edge);
 vec2 mossSpot=(vStone.xy-vec2(-.13,.88))/vec2(.31,.20);
 float mossPatch=(1.-smoothstep(.94,1.08,length(mossSpot)+(mottled-.5)*.16))*smoothstep(.70,.95,vStone.z);
 moss=max(moss,mossPatch*.97);
 vec3 stone=diffuseColor.rgb*(.79+mottled*.17+grain*.12);
 vec3 green=mix(vec3(.20,.32,.075),vec3(.40,.53,.17),grain*.6+mottled*.4);
 diffuseColor.rgb=mix(stone,green,moss);
 diffuseColor.rgb*=.91+fleck*.17;
 vec4 paint=texture2D(lipstickPaint,vec2((vStone.x+2.)/4.,vStone.y/3.));
 float pigmentMask=paint.a*smoothstep(.40,.65,vStone.z);
 diffuseColor.rgb=mix(diffuseColor.rgb,paint.rgb*(.84+grain*.19),pigmentMask);
 `)};var F_=gr(2104866,.98),z_=gr(7350072,.98),gg=new mt({color:525833,side:Ct}),Oi=new xe;Oi.name="Figsaw and tricycle";ai.add(Oi);var wn=new xe;wn.name="Figsaw\u2019s red tricycle";Oi.add(wn);var Oo=new Fe({color:13185848,roughness:.44,metalness:.28}),os=new Fe({color:11449779,roughness:.34,metalness:.72}),Fa=new Fe({color:5462617,roughness:.46,metalness:.65}),xg=gr(8856619,.86),mf=gr(1514523,.93),yg=gr(2369317,.85);function xr(i,e,t,n,r){let s=new w(...e),o=new w(...t),a=o.clone().sub(s),l=Gn(new Nt(n,n,a.length(),16),r,i);return l.position.copy(s).add(o).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new w(0,1,0),a.normalize()),l}var ql=[];function gf(i,e,t,n,r){let s=new xe;s.position.set(i,e,t),s.rotation.y=Math.PI/2,s.name=r===8?"Large front wheel":"Small rear wheel",wn.add(s),s.userData.radius=n,ql.push(s);let o=n>.7?.045:.033;Gn(new Qt(n-o,o,12,80),mf,s),Gn(new Qt(n-o*2,.018,10,80),Fa,s);for(let a of[-1,1]){let l=Gn(new Qt(n-o*1.65,.006,6,80),os,s);l.position.z=a*.024}for(let a=0;a<r;a++){let l=a/r*Math.PI*2+.16;xr(s,[0,0,0],[Math.cos(l)*(n-o*2),Math.sin(l)*(n-o*2),0],n>.7?.013:.011,Fa)}xr(s,[0,0,-.14],[0,0,.14],.082,Oo);for(let a of[-1,1])rs(s,os,[0,0,a*.15],[.061,.061,.027],2);return s}var xf=1.39,yf=1.52,Fl=.89,No=-1.23;gf(0,xf,yf,.86,8);gf(-1.05,Fl,No,.36,6);gf(1.05,Fl,No,.36,6);xr(wn,[-1.16,Fl,No],[1.16,Fl,No],.045,Fa);var eg=new Yt([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(i=>new w(...i))),vg=[],Yl=[],Ua=64;for(let i=0;i<=Ua;i++){let e=eg.getPoint(i/Ua),t=eg.getTangent(i/Ua),n=new w(0,-t.z,t.y).normalize();for(let[r,s]of[[-.055,-1],[.055,-1],[.055,1],[-.055,1]])vg.push(e.x+r,e.y+n.y*.074*s,e.z+n.z*.074*s);if(i<Ua)for(let r=0;r<4;r++){let s=i*4+r,o=i*4+(r+1)%4;Yl.push(s,o+4,o,s,s+4,o+4)}}Yl.push(0,1,2,0,2,3);var Ro=Ua*4;Yl.push(Ro,Ro+2,Ro+1,Ro,Ro+3,Ro+2);var $l=new Rt;$l.setAttribute("position",new ut(vg,3));$l.setIndex(Yl);$l.computeVertexNormals();Gn($l,Oo,wn);xr(wn,[0,1.72,-.45],[0,2.02,-.45],.064,Oo);var O_=Gn(new St(1.91,.07,.29),Oo,wn);O_.position.set(0,.99,No);for(let i=-5;i<=5;i++)Gn(new St(.012,.006,.24),xg,wn).position.set(i*.16,1.028,No);var Bo=new Tt;Bo.moveTo(-.2,-.58);Bo.bezierCurveTo(-.3,-.18,-.72,.02,-.7,.34);Bo.bezierCurveTo(-.66,.57,.66,.57,.7,.34);Bo.bezierCurveTo(.72,.02,.3,-.18,.2,-.58);Bo.quadraticCurveTo(0,-.7,-.2,-.58);var Mg=Gn(new rn(Bo,{depth:.08,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),yg,wn);Mg.rotation.x=-Math.PI/2;Mg.position.set(0,2,-.45);for(let i of[-1,1])zo([[i*.16,xf,yf],[i*.18,1.76,1.48],[i*.17,2.1,1.29],[i*.1,2.27,1.2]],.046,Oo,wn);xr(wn,[0,2.15,1.22],[0,2.43,1.17],.084,Oo);zo([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,os,wn);zo([[-1.11,2.99,.86],[-1.1,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.6,2.69,1.45],[0,2.69,1.43],[.6,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.1,2.98,1.12],[1.11,2.99,.86]],.048,os,wn);xr(wn,[-.1,2.69,1.43],[.1,2.69,1.43],.064,os);rs(wn,Fa,[0,2.69,1.491],[.027,.027,.015],2);for(let i of[-1,1])xr(wn,[i*1.1,2.98,1.12],[i*1.11,2.99,.86],.061,xg),rs(wn,Fa,[i*1.11,2.99,.85],[.061,.061,.022],2);var mr=new xe;mr.name="Rotating pedal crank";mr.position.set(0,xf,yf);wn.add(mr);var Zl=[];for(let i of[-1,1]){let e=i*.17,t=-i*.19;xr(mr,[i*.17,0,0],[i*.3,e,t],.025,os),xr(mr,[i*.3,e,t],[i*.53,e,t],.023,os);let n=new xe;n.position.set(i*.44,e,t),mr.add(n),Zl.push(n),Gn(new St(.27,.075,.19),mf,n);for(let r=-1;r<=1;r++)Gn(new St(.24,.008,.012),yg,n).position.set(0,.041,r*.05)}function B_(i){for(let e of ql)e.rotation.z=i/e.userData.radius;mr.rotation.x=i/.86;for(let e of Zl)e.rotation.x=-mr.rotation.x}rs(wn,os,[-.47,2.76,1.45],[.085,.055,.085]);xr(wn,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,mf);var Eg=.72,_g=2.08,Qn=new xe;Qn.scale.setScalar(Eg);Qn.position.set(0,_g,-.45);Oi.add(Qn);var Kl=2.8,vi=Ce.mobile?32:64,k_=Ce.mobile?80:160,ri=vi/2,Fn=Math.PI/10,cf=-.13,V_=.05+ri/vi*Kl,tg=.12;function G_(i){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.4)*(1.19-.45*i)}function za(i,e){let t=G_(i),n=1+.018*Math.sin(e*5+i*9)+.012*Math.cos(e*9-i*7),r=ke.clamp(i/(ri/vi),0,1),s=i<ri/vi?.2*Math.pow(Math.sin(Math.PI*r),.8)*Math.pow(Math.max(0,Math.cos(e)),3):0,o=new w(Math.sin(e)*t*n-.28*i,.05+i*Kl,Math.cos(e)*t*.68*n+s),a=ke.smoothstep(Math.cos(e),.25,.65);for(let l of[-1.13,1.15]){let c=((o.x-l)/.36)**2+((o.y-1.68)/.33)**2;c<1&&(o.z+=.09*(1-c)**2*a)}return o}function lf(i,e){let t=-Math.PI/2,n=Math.PI/2;for(let r=0;r<22;r++){let s=(t+n)/2;za(i,s).x<e?t=s:n=s}return(t+n)/2}var ng=[za(ri/vi,-Fn).x,za(ri/vi,Fn).x],tf=new Map;function W_(i){if(i===0||i>=ri/vi)return[-Fn,Fn];let e=i.toFixed(7);if(tf.has(e))return tf.get(e);let t=i/(ri/vi),n=Math.sin(Math.PI*t),r=[lf(i,ng[0]-.018*n),lf(i,ng[1]+.018*n)];return tf.set(e,r),r}function Jl(i,e){if(i<=ri/vi){let[t,n]=W_(i);e<-Fn?e=zi(-Math.PI,t,(e+Math.PI)/(Math.PI-Fn)):e<=Fn?e=zi(t,n,(e+Fn)/(Fn*2)):e=zi(n,Math.PI,(e-Fn)/(Math.PI-Fn))}return za(i,e)}function bg(i,e){let t=(e-.05)/Kl;return za(t,lf(t,i)).z}function vf(i=!1,e=!1){let t=[],n=[],r=i?-Fn:-Math.PI,s=i?Fn:Math.PI,o=i?20:k_,a=i?ri:vi;for(let c=0;c<=a;c++)for(let h=0;h<=o;h++){let f=Jl(c/vi,zi(r,s,h/o));e&&(f.z=Math.min(f.z-.24,.72)),t.push(f.x,f.y,f.z)}for(let c=0;c<a;c++)for(let h=0;h<o;h++){let f=zi(r,s,(h+.5)/o);if(!i&&c<ri&&Math.abs(f)<Fn-1e-4)continue;let u=c*(o+1)+h,m=u+1,g=u+o+2,y=u+o+1;n.push(u,m,y,m,g,y)}let l=new Rt;return l.setAttribute("position",new ut(t,3)),l.setIndex(n),l.computeVertexNormals(),l}var wg=new mt({color:1513752,side:Tn});wg.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.058;`)};function Sg(i,e){let t=new at(i,wg);return t.name="Black stone outline",e.add(t),t}var Tg=vf(),X_=Gn(Tg,Xl,Qn);X_.name="Figsaw";Sg(Tg,Qn);var q_=Gn(vf(!0,!0),gg,Qn);q_.castShadow=!1;function Rg(i,e=!1){let t=[],n=[];for(let o=0;o<=40;o++){let a=Jl(ri/vi,zi(-Fn,Fn,o/40)),l=a.y+(e?-.008:.008);if(t.push(a.x,l,a.z-.075,a.x,l,.7),o<40){let c=o*2;n.push(c,c+1,c+2,c+1,c+3,c+2)}}let r=new Rt;r.setAttribute("position",new ut(t,3)),r.setIndex(n),r.computeVertexNormals();let s=Gn(r,gg,i);s.castShadow=!1}Rg(Qn);var Ns=new xe;Qn.add(Ns);function Y_(){let i=vf(!0),e=Array.from(i.attributes.position.array),t=Array.from(i.index.array),n=i.attributes.position.count;for(let o=0;o<n;o++)e.push(e[o*3],e[o*3+1],e[o*3+2]-.14);let r=t.slice();for(let o=0;o<r.length;o+=3)t.push(r[o]+n,r[o+2]+n,r[o+1]+n);let s=[];for(let o=0;o<=20;o++)s.push(o);for(let o=1;o<=ri;o++)s.push(o*21+20);for(let o=19;o>=0;o--)s.push(ri*21+o);for(let o=ri-1;o>0;o--)s.push(o*21);for(let o=0;o<s.length;o++){let a=s[o],l=s[(o+1)%s.length];t.push(a,a+n,l,l,a+n,l+n)}return i.setAttribute("position",new ut(e,3)),i.setIndex(t),i.deleteAttribute("normal"),i.computeVertexNormals(),i}var Ag=Y_(),Cg=Xl.clone();Cg.onBeforeCompile=Xl.onBeforeCompile;Gn(Ag,Cg,Ns);Sg(Ag,Ns);Rg(Ns,!0);rs(Ns,z_,[cf,V_-.025,.83],[.25,.016,.055]);var Pg=[];for(let i=0;i<=30;i++){let e=Jl(ri/vi,zi(-Fn,Fn,i/30));e.z+=.002,Pg.push(e)}zo(Pg,.008,F_,Qn);for(let i of[-1,1]){let e=[];for(let t=4;t<=ri;t++){let n=Jl(t/vi,i*Fn);n.z+=.009,e.push(n)}zo(e,.033,new mt({color:1513752}),Qn)}var Ig=[],Mf=gr(16061736,.36);Mf.emissive.set(12127514);Mf.emissiveIntensity=.12;var zl={headYaw:0,gazeYaw:0,gazePitch:0},nf=new w,Ao=new w,ig=new w,$_=new w(0,1,0),rg=new dt;for(let i of[-1,1]){let e=i*.42-.09,t=1.84+(i===-1?.045:0),n=bg(e,t)+.044,r=new xe;r.position.set(e,t,n),Qn.add(r),Ig.push(r),rs(r,gr(1052693,.25),[0,0,0],[.156,.156,.075]),rs(r,Mf,[0,0,.055],[.084,.084,.029]),rs(r,gr(657676,.32),[0,0,.074],[.039,.039,.016])}var Is=new xe;Is.name="Red bow tie";Is.position.set(cf,.4,bg(cf,.4)+.065);Ns.add(Is);var Lg=new $t({color:13046566,roughness:.76,sheen:.55,sheenColor:15747667,sheenRoughness:.82}),cs=new Tt;cs.moveTo(.055,.065);cs.bezierCurveTo(.18,.085,.32,.185,.43,.19);cs.quadraticCurveTo(.49,.19,.485,.12);cs.bezierCurveTo(.47,.03,.5,-.075,.48,-.14);cs.quadraticCurveTo(.47,-.195,.4,-.175);cs.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);cs.closePath();var Z_=new rn(cs,{depth:.055,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});for(let i of[-1,1]){let e=Gn(Z_,Lg,Is);e.scale.x=i,e.rotation.y=-i*.1;let t=gr(9965598,.9);for(let n of[-1,1])zo([[i*.09,n*.026,.08],[i*.19,n*.055,.087],[i*.34,n*.11,.088]],.005,t,Is)}var Dg=Gn(new en(1,24,16),Lg,Is);Dg.position.set(0,0,.07);Dg.scale.set(.105,.12,.075);var Ef=.26,Co=-.53*Ef+.0036;Oi.scale.setScalar(Ef);var Ol=new Yt([[2.45,Co,-2.4],[2.05,Co,-1.7],[1.05,Co,-1.28],[.35,Co,-1.1],[.24,Co,-.66],[.12,Co,.1]].map(i=>new w(...i)),!1,"centripetal");Ol.arcLengthDivisions=240;var Ug=1,Hg=8.5,K_=Ol.getLength(),Il=new w,rf=new w,Fi=document.querySelector("#figsaw-dialogue"),Ng=document.querySelector("#dialogue-announcement"),Fg=document.querySelector("#game-countdown"),Po=document.querySelector("#countdown-announcement"),Ha=null,hf=300,Bl=["I want to play a game...","Those who don't appreciate design do not deserve it.","Complete the design challenges to escape... but every 5 minutes one of your Figpals will be dropped into the tank of acid.","Let the games begin..."],kl=-1,_f=1/0,Ll=new w,Ps=new w,Dl=new Ca,sf=new w,zg=0,Lo=!1,uf=0,sg=!1,df=0,bf=null;function Og(i){let e=Bl[i];kl=i,Fi.classList.toggle("long-dialogue",e.length>80),Fi.querySelector(".dialogue-bubble span").textContent=e,Ng.textContent=`Figsaw. ${e}`;let t=Dm(e,qe.time);bf=Kn?null:t,_f=i<Bl.length-1?t.startTime+t.duration+1:1/0,i===0&&(Ha=t.startTime+t.duration)}function wf(i){let e=i-zg-Ug,t=Kn?1:ke.smoothstep(e,0,Hg);Ol.getPointAt(t,Il),Ol.getTangentAt(t,rf),Oi.position.copy(Il),Oi.rotation.y=Math.atan2(rf.x,rf.z);let n=Math.atan2(Ur.x-Il.x,Ur.z-Il.z),r=ke.euclideanModulo(n-Oi.rotation.y+Math.PI,Math.PI*2)-Math.PI;B_(t*K_/Ef),t===1&&!Lo&&(Lo=!0,uf=i,Cn.start(qe.time,Mn,qe),Og(0)),V0(Lo?i-uf:-1,Kn,zl),Qn.rotation.y=ke.clamp(r*.58,-.7,.7)+zl.headYaw}wf(0);Va.mark("characterBuilt");await Wl("Building the office\u2026");var{group:Ga,laptop:Bi,catMug:ko,handsaw:Vo,acidLeaks:Pn,chargingKit:Jn,fireHazard:bn,ketchupKey:ki,countdown:Ls,setDisplayEnvironment:J_,update:Q_,figpalHoists:yr,toggleHoist:j_}=await bm(zn,Ur,Wl);ai.add(Ga);Va.mark("officeBuilt");await Wl("Preparing the room\u2026");var jt=Im(Xt,{canDetach:()=>ki.hasKey});ai.add(jt.group);var Wn=Fm({laptop:Bi,restraint:jt,cameraPosition:Mn,state:qe}),Vn=Om({position:Mn,state:qe,getView:Jn.getDrawerView}),pn=qm({mug:ko,camera:Xt,restraint:jt}),En=Gm({saw:Vo,camera:Xt,restraint:jt,hasKey:()=>ki.hasKey}),Ds=document.querySelector("#game-over"),Bg=Ds.querySelector(".game-over-content"),kg=document.querySelector("#restart-game"),eb=document.querySelector("#mug-eye-impact"),Vg=Xm(eb),Xn=!1;kg.addEventListener("click",()=>{ff({skipIntro:!0}),vt.focus({preventScroll:!0})});var Mi=document.querySelector("#restraint-status"),Na=document.querySelector("#charging-hint"),Fo=null,Us=null,ss="",Wa=0,Gi=Lm(()=>{if(!ki.hasKey){Do("The shackle is locked. Find its key first.");return}jt.detach(qe.time)&&(Mi.textContent="Instance detached. Your wrist is free. You can open the laptop, drink from the cat mug, or turn a tank drain valve.",vt.classList.remove("over-chain"),vt.setAttribute("aria-label",vt.getAttribute("aria-label").replace("Your wrist is chained to the rear pipes. Pour the glass ketchup bottle beside the cat mug, collect the key, then click or right-click the shackle and choose Detach instance to free your hand.","Your wrist is free. Click the laptop, cat mug, or a red tank drain valve to use it.")))},{canDetach:()=>ki.hasKey,onBlocked:()=>Do("The shackle is locked. Find its key first.")}),On=Bm(yr,Ls),Oa=Vm({position:Mn,state:qe,getView:yr.getFocusView,baseFov:as.fov}),pr=Sm(yr.speechAnchors,vt,yr.canSpeak),Gg=wm(yr,pr),Wg=z0(zn);J_(Wg.texture);jt.setEnvironment(Wg.texture);Zm(ai);Pn.bindTargets([Ga,Oi]);for(let i of[...ql,...Zl,Is])Zn(i,{minObjects:2,dispose:!1});Zn(mr,{exclude:Zl,minObjects:2,dispose:!1});Zn(wn,{exclude:[...ql,mr],minObjects:2,dispose:!1});Zn(Ga,{exclude:[Bi.object,ko,Vo,yr.group,Ls.group,Jn.group,ki.group,bn.group],minObjects:2,palette:Ce.mobile});var tb=Ce.mobile?$m(ai,[Bi.object,ko,Vo,Ls.group,...yr.group.children.filter(i=>i.name.startsWith("Green bubbling canister"))],Oi):null;Km(ai);Va.mark("scenePrepared");function nb(i){if(!Lo||On.active){Fi.hidden=!0;return}Qn.localToWorld(Ll.set(-.28,Kl+.24,0)),Ps.copy(Ll).project(Xt);let e=Math.min(.7,.4/(Xt.position.distanceTo(Ll)*Math.tan(ke.degToRad(Xt.fov/2))*Xt.aspect));if(Ps.z<-1||Ps.z>1||Math.abs(Ps.x)>1+e||Math.abs(Ps.y)>1){Fi.hidden=!0;return}if(i>=df){df=i+(Ce.mobile?.4:.12),sf.copy(Ll).sub(Xt.position);let s=sf.length();Dl.set(Xt.position,sf.normalize()),Dl.near=.06,Dl.far=Math.max(.06,s-.035),sg=Dl.intersectObject(Ga,!0).length>0}if(sg){Fi.hidden=!0;return}Fi.hidden=!1;let t=vt.getBoundingClientRect(),n=t.left+(Ps.x*.5+.5)*t.width,r=t.top+(-Ps.y*.5+.5)*t.height;Fi.style.transform=`translate3d(${n}px,${r-8}px,0) translate(-50%,-100%)`}var og=new Ca,ag=new Be;function Sf(i){let e=vt.getBoundingClientRect();ag.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),og.setFromCamera(ag,Xt);let t=og.intersectObjects([Ga,Oi,jt.group],!0).find(n=>{for(let r=n.object;r;r=r.parent)if(!r.visible)return!1;return!0});for(let n=t?.object;n;n=n.parent)if(n===jt.target||n===Bi.object||n===ko||n===Vo||n===Qn||n.userData.chargingAction||n.userData.keyAction||Number.isInteger(n.userData.valveIndex)||Number.isInteger(n.userData.hoistIndex))return n;return null}function Do(i){ss=i,Wa=qe.time+4.5,Mi.textContent=i}function ib(i){Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying||(Cn.cancel(),si=!1,i==="pour"?ki.pour(qe.time)?Do("You tip the bottle. Something metal is sliding through the ketchup\u2026"):Do(ki.hint("pour")):i==="collect"&&ki.collect()&&(Do("Shackle key collected. Click your shackle and choose Detach instance."),jt.requestReach(qe.time)))}function Tf(i){if(!i||Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)return;let e=Jn.drawerOpen,t=Jn.phase;Us=null,vt.classList.remove("over-charging"),jt.locked&&jt.requestReach(qe.time),i==="charger"&&Jn.phase==="drawer"&&!Jn.drawerReady&&!jt.locked?ss="Let the drawer finish opening.":ss=Jn.use(i,qe.time,jt.locked),Wa=qe.time+3.8,Mi.textContent=ss,Cn.cancel(),si=!1,jt.locked||(i==="drawer"&&!e&&Jn.drawerOpen?(oi(),Vn.start(qe.time)):(i==="drawer"&&e&&!Jn.drawerOpen||t==="drawer"&&Jn.phase==="carrying")&&(oi(),Vn.restore(qe.time)))}function rb(){let i=qe.time<Wa?ss:Fo?ki.hint(Fo):Us?Jn.hint(Us):ki.hasKey&&jt.locked?"Shackle key collected \xB7 Click the shackle to unlock":Jn.hint(null);Na.textContent!==i&&(Na.textContent=i),Na.hidden=!i||Xn||On.active||pn.active||En.active||Wn.active}function Xg(){if(!(Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)){if(jt.locked){jt.requestReach(qe.time),Mi.textContent="The chain pulls tight. You can't reach the laptop.";return}if(Jn.phase==="powered"){Tf("laptop");return}if(Bi.isOpen){qg();return}Vn.cancel(),Wn.start(qe.time)&&(oi(),Cn.cancel(),si=!1,Mi.textContent="You reach for the front edge of the laptop.")}}function qg(i=!1){!i&&!Bi.open()||(Mi.textContent="You lift the lid and let go. The laptop is open.",vt.classList.remove("over-laptop"),vt.setAttribute("aria-label",vt.getAttribute("aria-label").replace("a closed MacBook Pro","an open MacBook Pro").replace(" Click the laptop or press Enter to open it.","")))}function Yg(){if(!(Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)){if(jt.locked){jt.requestReach(qe.time),Mi.textContent="The chain pulls tight. Detach the shackle before picking up the mug.";return}pn.start(qe.time)&&(Vn.cancel(),oi(),Cn.cancel(),si=!1,Gi.hide(),vt.classList.remove("over-mug"),Mi.textContent="You pick up the cat mug by its handle and raise it for a drink.")}}function sb(){if(!(Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)){if(ki.hasKey){Do("You already have the key. There is no need to use the saw.");return}En.start(qe.time)&&(Vn.cancel(),Cn.cancel(),si=!1,oi(),Gi.hide(),ss="",Na.hidden=!0,vt.classList.remove("over-saw"),Mi.textContent="You pick up the saw and start sawing at your chained wrist.")}}function $g(i){if(!(Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)){if(jt.locked){jt.requestReach(qe.time),Mi.textContent="The chain pulls tight. Detach the shackle before turning a tank valve.";return}Pn.open(i,qe.time,jt.locked)&&(Vn.cancel(),Cn.cancel(),si=!1,Gi.hide(),Mi.textContent=`Tank ${i+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`)}}function ob(){let i=0,e=1/0,t=new w;return yr.valves.forEach((n,r)=>{n.object.getWorldPosition(t);let s=t.distanceToSquared(Mn);s<e&&(e=s,i=r)}),i}var Rf=!1;function ab(i){Ha!==null&&i>=Ha&&(Ls.start(),Ha=null,Po.textContent="The five-minute countdown has started.");let e=On.update(i,Wn.active||pn.active||En.active||Pn.dying||bn.dying);e?.type==="lower"?(oi(),Gi.hide(),Cn.cancel(),Vn.cancel(),si=!1,Oa.start(e.index,i),pr.hide(),pr.show(e.index,i),Po.textContent=`Time is up. Figpal ${e.index+1} is lowering into the green liquid. ${La[e.index]}`):e?.type==="return"?(pr.hide(),Oa.restore(i)):e?.type==="restart"?Po.textContent=`The timer resets to five minutes. ${e.remaining} Figpal${e.remaining===1?" remains":"s remain"}.`:e?.type==="ending"?(oi(),Gi.hide(),pr.hide(),Fi.hidden=!0,Po.textContent="All three Figpals have been lowered into the acid."):e?.type==="gameover"&&(Rf=!0);let t=Ls.update();t!==hf&&(Fg.textContent=Rl(t),hf=t)}function Da(i){Xn||(Xn=!0,Vn.cancel(),Oa.cancel(),Ds.hidden=!1,Ds.style.opacity="1",oi(),Gi.hide(),Fi.hidden=!0,pr.hide(),document.body.classList.add("game-over"),vt.inert=!0,Bg.hidden=!1,kg.focus({preventScroll:!0}),Mi.textContent=i)}function Zg(i){if(On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)return;let e=j_(i);if(!e){document.querySelector("#hoist-status").textContent="Wait for the moving hoist to stop before operating another.";return}let t=yr.isLowered(i);t?pr.show(i,qe.time):pr.hide(i),document.querySelector("#hoist-status").textContent=t&&yr.canSpeak(i)?`${e} ${La[i]}`:e}var si=!1,Wi=null,Hl=null,Vl=0,cb=new Set(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ"]),rr=new Set,Uo=i=>ke.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function ff({skipIntro:i=!1}={}){ka(),ki.reset(),Fo=null,Jn.reset(),Us=null,ss="",Wa=0,Na.hidden=!0,Xn=!1,Pn.reset(),bn.reset(),pn.reset(),En.reset(),Vg.reset(),Ds.hidden=!0,Ds.style.opacity="0",Bg.hidden=!0,document.body.classList.remove("game-over","mug-impact"),vt.inert=!1,Wn.cancel(),Cn.cancel(),Vn.cancel(),jt.reset(),Bi.close(),Gi.hide(),Mi.textContent="",vt.setAttribute("aria-label",U_),On.reset(),Oa.cancel(),Rf=!1,pr.hide(),Gg.reset(qe.time),oi(),si=!i,zg=qe.time-(i?Ug+Hg:0),Lo=i,uf=qe.time,Fi.hidden=!0,Fi.classList.remove("long-dialogue"),Ng.textContent="",bf=null,kl=i?Bl.length-1:-1,_f=1/0,qe.jaw=0,qe.talkUntil=0,df=0,Ha=null,Ls.reset(),hf=300,Fg.textContent="05:00",Po.textContent="",i&&(Fi.querySelector(".dialogue-bubble span").textContent=Bl[kl],Cn.start(qe.time,Mn,qe),Cn.update(qe.time,Mn,qe,!0),wf(qe.time),Ls.start(),Po.textContent="The five-minute countdown has started.")}function oi(){rr.clear(),qe.space=!1,Wi=null}document.addEventListener("keydown",i=>{if(Xn){i.code==="KeyR"&&!i.repeat&&(i.preventDefault(),ff(),vt.focus({preventScroll:!0}));return}if((On.active||Wn.active||pn.active||En.active||Pn.dying||bn.dying)&&i.code!=="KeyR"){i.preventDefault();return}if(!Gi.active&&!(i.target.closest('input,textarea,select,[contenteditable="true"]')||i.metaKey||i.ctrlKey||i.altKey)){if(cb.has(i.code)){i.preventDefault(),Cn.cancel(),Vn.cancel(),rr.add(i.code),si=!1;return}if(i.code==="Escape"&&Vn.active){i.preventDefault(),Vn.restore(qe.time);return}i.target.closest("button")&&(i.code==="Space"||i.code==="Enter")||(i.code==="Enter"&&i.target===vt&&(i.preventDefault(),Xg()),i.code==="KeyF"&&i.target===vt&&!i.repeat&&(i.preventDefault(),Tf(Jn.nextAction)),i.code==="KeyM"&&i.target===vt&&!i.repeat&&(i.preventDefault(),Yg()),i.code==="KeyV"&&i.target===vt&&!i.repeat&&(i.preventDefault(),$g(ob())),/^Digit[1-3]$/.test(i.code)&&i.target===vt&&!i.repeat&&(i.preventDefault(),Zg(Number(i.code.slice(-1))-1)),i.code==="Space"&&(i.preventDefault(),qe.space=!0),i.code==="KeyR"&&!i.repeat&&ff(),i.code.startsWith("Arrow")&&(i.preventDefault(),Cn.cancel(),Vn.cancel(),si=!1,i.code==="ArrowLeft"&&(qe.yaw=Uo(qe.yaw+.08)),i.code==="ArrowRight"&&(qe.yaw=Uo(qe.yaw-.08)),i.code==="ArrowUp"&&(qe.pitch=ke.clamp(qe.pitch+.05,-1.4,1.4)),i.code==="ArrowDown"&&(qe.pitch=ke.clamp(qe.pitch-.05,-1.4,1.4))))}});document.addEventListener("keyup",i=>{rr.delete(i.code),i.code==="Space"&&(qe.space=!1)});window.addEventListener("blur",oi);document.addEventListener("visibilitychange",()=>{document.hidden&&oi()});Ym({canvas:vt,state:qe,keys:rr,cancel(){oi(),Cn.cancel(),Vn.cancel(),si=!1},canInteract:()=>!On.active&&!Wn.active&&!pn.active&&!En.active&&!Xn&&!Pn.dying&&!bn.dying});vt.addEventListener("contextmenu",i=>{i.preventDefault(),oi(),!(On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)&&(jt.locked&&Sf(i)===jt.target?Gi.show(i.clientX,i.clientY):Gi.hide())});vt.addEventListener("pointerdown",i=>{Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying||i.button===0&&Wi===null&&(vt.focus({preventScroll:!0}),Wi=i.pointerId,si=!1,Vl=0,Hl={x:i.clientX,y:i.clientY},vt.setPointerCapture(i.pointerId))});vt.addEventListener("pointermove",i=>{if(Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)return;if(Wi===null){let n=Sf(i);Fo=n?.userData.keyAction||null,vt.classList.toggle("over-key",!!Fo),Us=n?.userData.chargingAction||(n===Bi.object&&Jn.phase==="powered"?"laptop":null),vt.classList.toggle("over-charging",!!Us),vt.classList.toggle("over-laptop",n===Bi.object&&!Bi.isOpen),vt.classList.toggle("over-hoist",Number.isInteger(n?.userData.hoistIndex)),vt.classList.toggle("over-mug",n===ko),vt.classList.toggle("over-saw",n===Vo),vt.classList.toggle("over-valve",Number.isInteger(n?.userData.valveIndex)),vt.classList.toggle("over-chain",n===jt.target&&jt.locked);return}if(i.pointerId!==Wi)return;let e=i.clientX-Hl.x,t=i.clientY-Hl.y;Vl+=Math.abs(e)+Math.abs(t),Vl>=6&&(Cn.cancel(),Vn.cancel()),qe.yaw=Uo(qe.yaw+e*.004),qe.pitch=ke.clamp(qe.pitch+t*.003,-1.4,1.4),Hl={x:i.clientX,y:i.clientY}});vt.addEventListener("pointerup",i=>{if(i.pointerId===Wi&&(Wi=null,Vl<6)){let e=Sf(i);e?.userData.keyAction?ib(e.userData.keyAction):e===jt.target&&jt.locked?Gi.show(i.clientX,i.clientY):e?.userData.chargingAction?Tf(e.userData.chargingAction):e===Bi.object?Xg():e===ko?Yg():e===Vo?sb():Number.isInteger(e?.userData.valveIndex)?$g(e.userData.valveIndex):e===Qn?qe.talkUntil=qe.time+1.8:Number.isInteger(e?.userData.hoistIndex)&&Zg(e.userData.hoistIndex)}});vt.addEventListener("pointerleave",()=>{Fo=null,Us=null,vt.classList.remove("over-key","over-laptop","over-hoist","over-chain","over-mug","over-saw","over-valve","over-charging")});vt.addEventListener("pointercancel",i=>{i.pointerId===Wi&&(Wi=null)});vt.addEventListener("lostpointercapture",i=>{i.pointerId===Wi&&(Wi=null)});vt.addEventListener("wheel",i=>{i.preventDefault(),!(Wn.active||On.active||pn.active||En.active||Xn||Pn.dying||bn.dying)&&(Cn.cancel(),Vn.cancel(),si=!1,qe.zoom=ke.clamp(qe.zoom+i.deltaY*5e-4,.78,1))},{passive:!1});var Ql=document.querySelector("#copy-view"),cg=Ql.querySelector("span"),lg=document.querySelector("#copy-status"),pf=document.querySelector("#copy-fallback"),of=document.querySelector("#view-text"),hg;function lb(){let i=n=>n.toArray().map(r=>Number(r.toFixed(6))),e=Xt.getWorldDirection(new w),t={position:i(Xt.position),lookAt:i(Xt.position.clone().add(e)),fov:Number(Xt.fov.toFixed(4))};return`Set this as the default camera view for Figsaw:
${JSON.stringify(t,null,2)}`}function hb(i){let e=document.createElement("textarea");e.value=i,e.readOnly=!0,e.style.cssText="position:fixed;left:-9999px;top:0;font-size:16px",document.body.append(e),e.focus(),e.select(),e.setSelectionRange(0,i.length);let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),Ql.focus({preventScroll:!0}),t}Ql.addEventListener("click",async()=>{let i=lb();of.value=i,clearTimeout(hg);let e=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(i),e=!0)}catch{}e||(e=hb(i)),e?(pf.hidden=!0,cg.textContent="Copied",lg.textContent="View copied. Paste it into the chat to set the default view."):(pf.hidden=!1,of.focus(),of.select(),lg.textContent="Select and copy the view below, then paste it into the chat."),hg=setTimeout(()=>{cg.textContent="Copy view"},2200)});document.querySelector("#close-copy").addEventListener("click",()=>{pf.hidden=!0,Ql.focus()});var Ho=Ce.pixelRatio;function jl(){let{width:i,height:e}=vt.getBoundingClientRect();!i||!e||(zn.setPixelRatio(N0(Ce,i,e,Ho)),zn.setSize(i,e,!1),Xt.aspect=i/e,Xt.fov=as.fov*qe.zoom,Xt.updateProjectionMatrix())}var ub=new ResizeObserver(jl);ub.observe(vt);jl();var Ba=new pl,Gl=!1,Kg=!1,Hs=0,Io=0,ug=-1/0,dg=0,af=0,Ul=0;function ka(){Kg&&!Gl&&!Hs&&!document.hidden&&(Hs=requestAnimationFrame(Jg))}document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Hs),Hs=0,oi()):(Io=0,Ba.getDelta(),ka())});function Jg(){if(Hs=0,document.hidden||Gl)return;if(Xn){Ba.getDelta();return}let i=performance.now(),e=Io?i-Io:0;if(Io&&e<1e3/Ce.maxFps-1){ka();return}Io=i;let t=Math.min(Ba.getDelta(),.1),n=qe.time+=t,r=1-Math.exp(-t*12);si&&(qe.yaw=Uo(qe.yaw+Uo(is.yaw-qe.yaw)*r*.5),qe.pitch=zi(qe.pitch,is.pitch,r*.5),qe.zoom=zi(qe.zoom,1,r*.5),Mn.lerp(Ur,r*.5),Math.abs(Uo(qe.yaw-is.yaw))+Math.abs(qe.pitch-is.pitch)+Math.abs(qe.zoom-1)+Mn.distanceTo(Ur)<.005&&(qe.yaw=is.yaw,qe.pitch=is.pitch,qe.zoom=1,Mn.copy(Ur),si=!1)),wf(n),tb?.update(),Lo&&n>=_f&&Og(kl+1),Cn.active&&(si=!1),(rr.size||Wi!==null)&&Cn.cancel(),(Wn.active||pn.active||En.active||Vn.active)&&Cn.cancel(),Cn.update(n,Mn,qe,Kn),Vn.update(n,Kn),Wn.update(n,Kn)&&qg(!0),ab(n),Oa.update(n,Kn);let s=qe.yaw,o=Number(rr.has("KeyW"))-Number(rr.has("KeyS")),a=Number(rr.has("KeyD"))-Number(rr.has("KeyA")),l=Number(rr.has("KeyE"))-Number(rr.has("KeyQ"));ef.set(-Math.sin(s)*o+Math.cos(s)*a,l,-Math.cos(s)*o-Math.sin(s)*a),ef.lengthSq()>0&&(Mn.addScaledVector(ef.normalize(),t*1.05),Mn.x=ke.clamp(Mn.x,-3.72,3.72),Mn.y=ke.clamp(Mn.y,.08,3),Mn.z=ke.clamp(Mn.z,-3.78,4.25)),Xt.position.copy(Mn),jm.set(-Math.sin(s)*Math.cos(qe.pitch),Math.sin(qe.pitch),-Math.cos(s)*Math.cos(qe.pitch)),Qm.copy(Mn).add(jm),Xt.lookAt(Qm);let c=as.fov*qe.zoom;Math.abs(Xt.fov-c)>.001&&(Xt.fov=c,Xt.updateProjectionMatrix());let h=Um(bf,n),f=n<qe.talkUntil?.16+.7*Math.sin(n*10)**2:0,u=qe.space?1:Math.max(h,f);qe.jaw=zi(qe.jaw,u,r),Ns.position.y=-qe.jaw*tg,Qn.position.y=_g+qe.jaw*tg*Eg;let m=Pn.update(n,t,Mn,Xt,Kn,{target:bn.flowTarget()}),g=bn.update(n,t,Mn,Xt,Kn),y=bn.takeMessage();y&&(ss=y,Wa=n+5,Mi.textContent=y),(Pn.dying||bn.dying)&&oi();let p=pn.update(n,Kn);jt.update(n,Kn,Gi.active||pn.active||En.active,pn.handPose||Wn.handPose,En.armLift(n,Kn));let d=En.update(n,Kn),M=Math.max(pn.blackout,En.blackout,Pn.blackout(n),bn.blackout(n),On.blackout(n));Vg.update(pn,M),pn.eyeImpact>0&&document.body.classList.add("mug-impact"),M>0&&(Ds.hidden=!1,Ds.style.opacity=String(M),document.body.classList.add("mug-impact")),Rf?Da("All three Figpals have been lowered into the acid. Game over."):d?Da("You used the saw before finding the key. Your hand is lost. Game over."):g?Da("The fire reaches you before the sprinklers can stop it. Game over."):m?Da("The corrosive green liquid reaches you. Game over."):p&&Da("The mug's pointed ears hit your eyes. Everything goes dark. Game over."),Bi.update(t,Kn),Jn.update(n,Kn),rb(),Vi.intensity=pg*Q_(n,Kn,Xt.position),Oi.updateMatrixWorld(!0),Qn.localToWorld(nf.set(-.09,1.86,1)),Ao.copy(Xt.position).sub(nf);let x=Math.max(1,Ao.length());Ao.normalize().applyAxisAngle($_,zl.gazeYaw),Ao.y+=zl.gazePitch,Ao.normalize(),ig.copy(nf).addScaledVector(Ao,x);for(let R of Ig)rg.copy(R.quaternion),R.lookAt(ig),Kn||R.quaternion.copy(rg.slerp(R.quaternion,1-Math.exp(-t*16)));zn.shadowMap.enabled&&n-ug>=1/Ce.shadowHz&&(zn.shadowMap.needsUpdate=!0,ug=n),zn.render(ai,Xt),nb(n),Gg.update(n,On.active),pr.update(Xt,n),Va.frame(i);let _=performance.now()-i;Ul++,(_>Ce.targetFrameMs||e>Ce.targetFrameMs*1.4)&&af++,n-dg>4&&(Ul>30&&af/Ul>.65&&Ho>Ce.minPixelRatio&&(Ho=Math.max(Ce.minPixelRatio,Ho-.2),jl()),dg=n,af=0,Ul=0),ka()}await Wl("Warming up the lights\u2026");Xt.position.copy(Ur);Xt.lookAt(new w(...as.lookAt));Xt.updateMatrixWorld(!0);(Ce.mobile?Promise.resolve():zn.compileAsync(ai,Xt)).then(()=>{Va.mark("shadersReady"),Kg=!0,Ba.getDelta(),Jg(),Nl.hidden=!0}).catch(i=>{console.error(i);let e=document.querySelector("#loading-status");e&&(e.textContent="The room could not load. Please reload to try again.")});Jm(vt,{status:Nl,pause(){Gl=!0,cancelAnimationFrame(Hs),Hs=0,oi()},lowerQuality(){zn.shadowMap.enabled=!1,Ho=Math.min(Ho,.6),jl()},resume(){Gl=!1,Io=0,Ba.getDelta(),ka()}});
