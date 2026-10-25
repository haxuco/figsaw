var I1=0,Qf=1,L1=2;var u0=1,_d=2,br=3,jn=0,Tn=1,Pt=2,Gr=0,Wr=1,Nc=2,jf=3,ep=4,D1=5,ms=100,U1=101,H1=102,N1=103,F1=104,O1=200,z1=201,B1=202,k1=203,tu=204,nu=205,V1=206,G1=207,W1=208,X1=209,q1=210,Y1=211,$1=212,Z1=213,K1=214,iu=0,ru=1,su=2,co=3,ou=4,au=5,cu=6,lu=7,Ed=0,J1=1,Q1=2,Xr=0,j1=1,ex=2,tx=3,bd=4,nx=5,ix=6,rx=7;var d0=300,lo=301,ho=302,da=303,hu=304,dl=306,vs=1e3,ys=1001,uu=1002,di=1003,sx=1004;var nc=1005;var pn=1006,Mh=1007;var Ji=1008;var Sr=1009,f0=1010,p0=1011,fa=1012,wd=1013,Ms=1014,ar=1015,Ra=1016,Sd=1017,Td=1018,uo=1020,m0=35902,g0=1021,x0=1022,Ei=1023,y0=1024,v0=1025,so=1026,fo=1027,Rd=1028,Ad=1029,M0=1030,Cd=1031;var Pd=1033,Pc=33776,Ic=33777,Lc=33778,Dc=33779,du=35840,fu=35841,pu=35842,mu=35843,gu=36196,xu=37492,yu=37496,vu=37808,Mu=37809,_u=37810,Eu=37811,bu=37812,wu=37813,Su=37814,Tu=37815,Ru=37816,Au=37817,Cu=37818,Pu=37819,Iu=37820,Lu=37821,Uc=36492,Du=36494,Uu=36495,_0=36283,Hu=36284,Nu=36285,Fu=36286;var Fc=2300,Ou=2301,_h=2302,tp=2400,np=2401,ip=2402;var ox=3200,Id=3201;var Ld=0,ax=1,Vr="",yt="srgb",Qr="srgb-linear",Dd="display-p3",fl="display-p3-linear",Oc="linear",ln="srgb",zc="rec709",Bc="p3";var ks=7680;var rp=519,cx=512,lx=513,hx=514,E0=515,ux=516,dx=517,fx=518,px=519,sp=35044,gn=35048;var op="300 es",wr=2e3,kc=2001,Yr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,aa=Math.PI/180,po=180/Math.PI;function ws(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jn[i&255]+Jn[i>>8&255]+Jn[i>>16&255]+Jn[i>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[t&63|128]+Jn[t>>8&255]+"-"+Jn[t>>16&255]+Jn[t>>24&255]+Jn[n&255]+Jn[n>>8&255]+Jn[n>>16&255]+Jn[n>>24&255]).toLowerCase()}function Ln(i,e,t){return Math.max(e,Math.min(t,i))}function Ud(i,e){return(i%e+e)%e}function mx(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function gx(i,e,t){return i!==e?(t-i)/(e-i):0}function ca(i,e,t){return(1-t)*i+t*e}function xx(i,e,t,n){return ca(i,e,1-Math.exp(-t*n))}function yx(i,e=1){return e-Math.abs(Ud(i,e*2)-e)}function vx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _x(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ex(i,e){return i+Math.random()*(e-i)}function bx(i){return i*(.5-Math.random())}function wx(i){i!==void 0&&(ap=i);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sx(i){return i*aa}function Tx(i){return i*po}function Rx(i){return(i&i-1)===0&&i!==0}function Ax(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Px(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),u=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function no(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qe={DEG2RAD:aa,RAD2DEG:po,generateUUID:ws,clamp:Ln,euclideanModulo:Ud,mapLinear:mx,inverseLerp:gx,lerp:ca,damp:xx,pingpong:yx,smoothstep:vx,smootherstep:Mx,randInt:_x,randFloat:Ex,randFloatSpread:bx,seededRandom:wx,degToRad:Sx,radToDeg:Tx,isPowerOfTwo:Rx,ceilPowerOfTwo:Ax,floorPowerOfTwo:Cx,setQuaternionFromProperEuler:Px,normalize:si,denormalize:no},ke=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],g=n[8],y=r[0],p=r[3],d=r[6],M=r[1],x=r[4],E=r[7],R=r[2],b=r[5],T=r[8];return s[0]=o*y+a*M+l*R,s[3]=o*p+a*x+l*b,s[6]=o*d+a*E+l*T,s[1]=c*y+h*M+f*R,s[4]=c*p+h*x+f*b,s[7]=c*d+h*E+f*T,s[2]=u*y+m*M+g*R,s[5]=u*p+m*x+g*b,s[8]=u*d+m*E+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*s,m=c*s-o*l,g=t*f+n*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(r*c-h*n)*y,e[2]=(a*n-r*o)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Eh=new bt;function b0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ix(){let i=pa("canvas");return i.style.display="block",i}var cp={};function Hc(i){i in cp||(cp[i]=!0,console.warn(i))}function Lx(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Dx(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ux(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var lp=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hp=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jo={[Qr]:{transfer:Oc,primaries:zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[yt]:{transfer:ln,primaries:zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[fl]:{transfer:Oc,primaries:Bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hp),fromReference:i=>i.applyMatrix3(lp)},[Dd]:{transfer:ln,primaries:Bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hp),fromReference:i=>i.applyMatrix3(lp).convertLinearToSRGB()}},Hx=new Set([Qr,fl]),Jt={enabled:!0,_workingColorSpace:Qr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hx.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Jo[e].toReference,r=Jo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Jo[i].primaries},getTransfer:function(i){return i===Vr?Oc:Jo[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Jo[e].luminanceCoefficients)}};function oo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,zu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=pa("canvas")),Vs.width=e.width,Vs.height=e.height;let n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oo(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oo(t[n]/255)*255):t[n]=oo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nx=0,Vc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wh(r[o].image)):s.push(wh(r[o]))}else s=wh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fx=0,ai=class i extends Yr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ys,r=ys,s=pn,o=Ji,a=Ei,l=Sr,c=i.DEFAULT_ANISOTROPY,h=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=ws(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case uu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case uu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=d0;ai.DEFAULT_ANISOTROPY=1;var nn=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],g=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,E=(m+1)/2,R=(d+1)/2,b=(h+u)/4,T=(f+y)/4,I=(g+p)/4;return x>E&&x>R?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=b/n,s=T/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=b/r,s=I/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=T/s,r=I/s),this.set(n,r,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bu=class extends Yr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new ai(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tr=class extends Bu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gc=class extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ku=class extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3],u=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(f!==y||l!==u||c!==m||h!==g){let p=1-a,d=l*u+c*m+h*g+f*y,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let R=Math.sqrt(x),b=Math.atan2(R,d*M);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}let E=a*M;if(l=l*p+u*E,c=c*p+m*E,h=h*p+g*E,f=f*p+y*E,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*m-c*u,e[t+1]=l*g+h*u+c*f-a*m,e[t+2]=c*g+h*m+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),f=a(s/2),u=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"YZX":this._x=u*h*f+c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f-u*m*g;break;case"XZY":this._x=u*h*f-c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(up.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(up.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sh=new w,up=new dt,Rn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$i):$i.fromBufferAttribute(s,o),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ic.copy(n.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),rc.subVectors(this.max,Qo),Gs.subVectors(e.a,Qo),Ws.subVectors(e.b,Qo),Xs.subVectors(e.c,Qo),Nr.subVectors(Ws,Gs),Fr.subVectors(Xs,Ws),cs.subVectors(Gs,Xs);let t=[0,-Nr.z,Nr.y,0,-Fr.z,Fr.y,0,-cs.z,cs.y,Nr.z,0,-Nr.x,Fr.z,0,-Fr.x,cs.z,0,-cs.x,-Nr.y,Nr.x,0,-Fr.y,Fr.x,0,-cs.y,cs.x,0];return!Th(t,Gs,Ws,Xs,rc)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,Gs,Ws,Xs,rc))?!1:(sc.crossVectors(Nr,Fr),t=[sc.x,sc.y,sc.z],Th(t,Gs,Ws,Xs,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yr=[new w,new w,new w,new w,new w,new w,new w,new w],$i=new w,ic=new Rn,Gs=new w,Ws=new w,Xs=new w,Nr=new w,Fr=new w,cs=new w,Qo=new w,rc=new w,sc=new w,ls=new w;function Th(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ls.fromArray(i,s);let a=r.x*Math.abs(ls.x)+r.y*Math.abs(ls.y)+r.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ox=new Rn,jo=new w,Rh=new w,$r=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ox.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);let t=jo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(jo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Rh)),this.expandByPoint(jo.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vr=new w,Ah=new w,oc=new w,Or=new w,Ch=new w,ac=new w,Ph=new w,ma=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ah.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Ah);let s=e.distanceTo(t)*.5,o=-this.direction.dot(oc),a=Or.dot(this.direction),l=-Or.dot(oc),c=Or.lengthSq(),h=Math.abs(1-o*o),f,u,m,g;if(h>0)if(f=o*l-a,u=o*a-l,g=s*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,m=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ah).addScaledVector(oc,u),m}intersectSphere(e,t){vr.subVectors(e.center,this.origin);let n=vr.dot(this.direction),r=vr.dot(vr)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,n,r,s){Ch.subVectors(t,e),ac.subVectors(n,e),Ph.crossVectors(Ch,ac);let o=this.direction.dot(Ph),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,e);let l=a*this.direction.dot(ac.crossVectors(Or,ac));if(l<0)return null;let c=a*this.direction.dot(Ch.cross(Or));if(c<0||l+c>o)return null;let h=-a*Or.dot(Ph);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class i{constructor(e,t,n,r,s,o,a,l,c,h,f,u,m,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,f,u,m,g,y,p)}set(e,t,n,r,s,o,a,l,c,h,f,u,m,g,y,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=g,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/qs.setFromMatrixColumn(e,0).length(),s=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=o*h,m=o*f,g=a*h,y=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,m=l*f,g=c*h,y=c*f;t[0]=u+y*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,m=l*f,g=c*h,y=c*f;t[0]=u-y*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,m=o*f,g=a*h,y=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-u*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=u-y*f}else if(e.order==="XZY"){let u=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,Bx)}lookAt(e,t,n){let r=this.elements;return Mi.subVectors(e,t),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),zr.crossVectors(n,Mi),zr.lengthSq()===0&&(Math.abs(n.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),zr.crossVectors(n,Mi)),zr.normalize(),cc.crossVectors(Mi,zr),r[0]=zr.x,r[4]=cc.x,r[8]=Mi.x,r[1]=zr.y,r[5]=cc.y,r[9]=Mi.y,r[2]=zr.z,r[6]=cc.z,r[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],g=n[2],y=n[6],p=n[10],d=n[14],M=n[3],x=n[7],E=n[11],R=n[15],b=r[0],T=r[4],I=r[8],O=r[12],v=r[1],S=r[5],H=r[9],G=r[13],Y=r[2],j=r[6],W=r[10],F=r[14],se=r[3],le=r[7],N=r[11],ee=r[15];return s[0]=o*b+a*v+l*Y+c*se,s[4]=o*T+a*S+l*j+c*le,s[8]=o*I+a*H+l*W+c*N,s[12]=o*O+a*G+l*F+c*ee,s[1]=h*b+f*v+u*Y+m*se,s[5]=h*T+f*S+u*j+m*le,s[9]=h*I+f*H+u*W+m*N,s[13]=h*O+f*G+u*F+m*ee,s[2]=g*b+y*v+p*Y+d*se,s[6]=g*T+y*S+p*j+d*le,s[10]=g*I+y*H+p*W+d*N,s[14]=g*O+y*G+p*F+d*ee,s[3]=M*b+x*v+E*Y+R*se,s[7]=M*T+x*S+E*j+R*le,s[11]=M*I+x*H+E*W+R*N,s[15]=M*O+x*G+E*F+R*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],m=e[14],g=e[3],y=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*u+n*c*u+r*a*m-n*l*m)+y*(+t*l*m-t*c*u+s*o*u-r*o*m+r*c*h-s*l*h)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*h-n*c*h)+d*(-r*a*h-t*l*f+t*a*u+r*o*f-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],m=e[11],g=e[12],y=e[13],p=e[14],d=e[15],M=f*p*c-y*u*c+y*l*m-a*p*m-f*l*d+a*u*d,x=g*u*c-h*p*c-g*l*m+o*p*m+h*l*d-o*u*d,E=h*y*c-g*f*c+g*a*m-o*y*m-h*a*d+o*f*d,R=g*f*l-h*y*l-g*a*u+o*y*u+h*a*p-o*f*p,b=t*M+n*x+r*E+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return e[0]=M*T,e[1]=(y*u*s-f*p*s-y*r*m+n*p*m+f*r*d-n*u*d)*T,e[2]=(a*p*s-y*l*s+y*r*c-n*p*c-a*r*d+n*l*d)*T,e[3]=(f*l*s-a*u*s-f*r*c+n*u*c+a*r*m-n*l*m)*T,e[4]=x*T,e[5]=(h*p*s-g*u*s+g*r*m-t*p*m-h*r*d+t*u*d)*T,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*T,e[7]=(o*u*s-h*l*s+h*r*c-t*u*c-o*r*m+t*l*m)*T,e[8]=E*T,e[9]=(g*f*s-h*y*s-g*n*m+t*y*m+h*n*d-t*f*d)*T,e[10]=(o*y*s-g*a*s+g*n*c-t*y*c-o*n*d+t*a*d)*T,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*m-t*a*m)*T,e[12]=R*T,e[13]=(h*y*r-g*f*r+g*n*u-t*y*u-h*n*p+t*f*p)*T,e[14]=(g*a*r-o*y*r-g*n*l+t*y*l+o*n*p-t*a*p)*T,e[15]=(o*f*r-h*a*r+h*n*l-t*f*l-o*n*u+t*a*u)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,u=s*c,m=s*h,g=s*f,y=o*h,p=o*f,d=a*f,M=l*c,x=l*h,E=l*f,R=n.x,b=n.y,T=n.z;return r[0]=(1-(y+d))*R,r[1]=(m+E)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(m-E)*b,r[5]=(1-(u+d))*b,r[6]=(p+M)*b,r[7]=0,r[8]=(g+x)*T,r[9]=(p-M)*T,r[10]=(1-(u+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=qs.set(r[0],r[1],r[2]).length(),o=qs.set(r[4],r[5],r[6]).length(),a=qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zi.copy(this);let c=1/s,h=1/o,f=1/a;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=f,Zi.elements[9]*=f,Zi.elements[10]*=f,t.setFromRotationMatrix(Zi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=wr){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),u=(n+r)/(n-r),m,g;if(a===wr)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===kc)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=wr){let l=this.elements,c=1/(t-e),h=1/(n-r),f=1/(o-s),u=(t+e)*c,m=(n+r)*h,g,y;if(a===wr)g=(o+s)*f,y=-2*f;else if(a===kc)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qs=new w,Zi=new It,zx=new w(0,0,0),Bx=new w(1,1,1),zr=new w,cc=new w,Mi=new w,dp=new It,fp=new dt,ci=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fp.setFromEuler(this),this.setFromQuaternion(fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kx=0,pp=new w,Ys=new dt,Mr=new It,lc=new w,ea=new w,Vx=new w,Gx=new dt,mp=new w(1,0,0),gp=new w(0,1,0),xp=new w(0,0,1),yp={type:"added"},Wx={type:"removed"},$s={type:"childadded",child:null},Ih={type:"childremoved",child:null},gt=class i extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new ci,n=new dt,r=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new bt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(mp,e)}rotateY(e){return this.rotateOnAxis(gp,e)}rotateZ(e){return this.rotateOnAxis(xp,e)}translateOnAxis(e,t){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mp,e)}translateY(e){return this.translateOnAxis(gp,e)}translateZ(e){return this.translateOnAxis(xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lc.copy(e):lc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(ea,lc,this.up):Mr.lookAt(lc,ea,this.up),this.quaternion.setFromRotationMatrix(Mr),r&&(Mr.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(Mr),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yp),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yp),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,Vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};gt.DEFAULT_UP=new w(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ki=new w,_r=new w,Lh=new w,Er=new w,Zs=new w,Ks=new w,vp=new w,Dh=new w,Uh=new w,Hh=new w,Nh=new nn,Fh=new nn,Oh=new nn,gs=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ki.subVectors(e,t),r.cross(Ki);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ki.subVectors(r,t),_r.subVectors(n,t),Lh.subVectors(e,t);let o=Ki.dot(Ki),a=Ki.dot(_r),l=Ki.dot(Lh),c=_r.dot(_r),h=_r.dot(Lh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Er.x),l.addScaledVector(o,Er.y),l.addScaledVector(a,Er.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Nh.setScalar(0),Fh.setScalar(0),Oh.setScalar(0),Nh.fromBufferAttribute(e,t),Fh.fromBufferAttribute(e,n),Oh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Nh,s.x),o.addScaledVector(Fh,s.y),o.addScaledVector(Oh,s.z),o}static isFrontFacing(e,t,n,r){return Ki.subVectors(n,t),_r.subVectors(e,t),Ki.cross(_r).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Ki.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Zs.subVectors(r,n),Ks.subVectors(s,n),Dh.subVectors(e,n);let l=Zs.dot(Dh),c=Ks.dot(Dh);if(l<=0&&c<=0)return t.copy(n);Uh.subVectors(e,r);let h=Zs.dot(Uh),f=Ks.dot(Uh);if(h>=0&&f<=h)return t.copy(r);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Zs,o);Hh.subVectors(e,s);let m=Zs.dot(Hh),g=Ks.dot(Hh);if(g>=0&&m<=g)return t.copy(s);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ks,a);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return vp.subVectors(s,r),a=(f-h)/(f-h+(m-g)),t.copy(r).addScaledVector(vp,a);let d=1/(p+y+u);return o=y*d,a=u*d,t.copy(n).addScaledVector(Zs,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},hc={h:0,s:0,l:0};function zh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Jt.workingColorSpace){if(e=Ud(e,1),t=Ln(t,0,1),n=Ln(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zh(o,s,e+1/3),this.g=zh(o,s,e),this.b=zh(o,s,e-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=w0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}copyLinearToSRGB(e){return this.r=bh(e.r),this.g=bh(e.g),this.b=bh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Jt.fromWorkingColorSpace(Qn.copy(this),e),Math.round(Ln(Qn.r*255,0,255))*65536+Math.round(Ln(Qn.g*255,0,255))*256+Math.round(Ln(Qn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Qn.copy(this),t);let n=Qn.r,r=Qn.g,s=Qn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=yt){Jt.fromWorkingColorSpace(Qn.copy(this),e);let t=Qn.r,n=Qn.g,r=Qn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(hc);let n=ca(Br.h,hc.h,t),r=ca(Br.s,hc.s,t),s=ca(Br.l,hc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new pt;pt.NAMES=w0;var Xx=0,Qi=class extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Wr,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tu&&(n.blendSrc=this.blendSrc),this.blendDst!==nu&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mt=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Sn=new w,uc=new ke,rn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sp,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=no(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=no(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=no(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=no(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=no(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),r=si(r,this.array),s=si(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sp&&(e.usage=this.usage),e}};var Wc=class extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xc=class extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}},qx=0,Ii=new It,Bh=new gt,Js=new w,_i=new Rn,ta=new Rn,Bn=new w,Rt=class i extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?Xc:Wc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new bt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Bn.addVectors(_i.min,ta.min),_i.expandByPoint(Bn),Bn.addVectors(_i.max,ta.max),_i.expandByPoint(Bn)):(_i.expandByPoint(ta.min),_i.expandByPoint(ta.max))}_i.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bn.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(e,c),Bn.add(Js)),r=Math.max(r,n.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new w,l[I]=new w;let c=new w,h=new w,f=new w,u=new ke,m=new ke,g=new ke,y=new w,p=new w;function d(I,O,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,O),f.fromBufferAttribute(n,v),u.fromBufferAttribute(s,I),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,v),h.sub(c),f.sub(c),m.sub(u),g.sub(u);let S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(S),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(S),a[I].add(y),a[O].add(y),a[v].add(y),l[I].add(p),l[O].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,O=M.length;I<O;++I){let v=M[I],S=v.start,H=v.count;for(let G=S,Y=S+H;G<Y;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let x=new w,E=new w,R=new w,b=new w;function T(I){R.fromBufferAttribute(r,I),b.copy(R);let O=a[I];x.copy(O),x.sub(R.multiplyScalar(R.dot(O))).normalize(),E.crossVectors(b,O);let S=E.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,S)}for(let I=0,O=M.length;I<O;++I){let v=M[I],S=v.start,H=v.count;for(let G=S,Y=S+H;G<Y;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let r=new w,s=new w,o=new w,a=new w,l=new w,c=new w,h=new w,f=new w;if(e)for(let u=0,m=e.count;u<m;u+=3){let g=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new rn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mp=new It,hs=new ma,dc=new $r,_p=new w,fc=new w,pc=new w,mc=new w,kh=new w,gc=new w,Ep=new w,xc=new w,ot=class extends gt{constructor(e=new Rt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){gc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(kh.fromBufferAttribute(f,e),o?gc.addScaledVector(kh,h):gc.addScaledVector(kh.sub(t),h))}t.add(gc)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(dc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(dc,_p)===null||hs.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(Mp.copy(s).invert(),hs.copy(e.ray).applyMatrix4(Mp),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,R=x;E<R;E+=3){let b=a.getX(E),T=a.getX(E+1),I=a.getX(E+2);r=yc(this,d,e,n,c,h,f,b,T,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){let M=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);r=yc(this,o,e,n,c,h,f,M,x,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,R=x;E<R;E+=3){let b=E,T=E+1,I=E+2;r=yc(this,d,e,n,c,h,f,b,T,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){let M=p,x=p+1,E=p+2;r=yc(this,o,e,n,c,h,f,M,x,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function Yx(i,e,t,n,r,s,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===jn,a),l===null)return null;xc.copy(a),xc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xc);return c<t.near||c>t.far?null:{distance:c,point:xc.clone(),object:i}}function yc(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,fc),i.getVertexPosition(l,pc),i.getVertexPosition(c,mc);let h=Yx(i,e,t,n,fc,pc,mc,Ep);if(h){let f=new w;gs.getBarycoord(Ep,fc,pc,mc,f),r&&(h.uv=gs.getInterpolatedAttribute(r,a,l,c,f,new ke)),s&&(h.uv1=gs.getInterpolatedAttribute(s,a,l,c,f,new ke)),o&&(h.normal=gs.getInterpolatedAttribute(o,a,l,c,f,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new w,materialIndex:0};gs.getNormal(fc,pc,mc,u.normal),h.face=u,h.barycoord=f}return h}var wt=class i extends Rt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(f,2));function g(y,p,d,M,x,E,R,b,T,I,O){let v=E/T,S=R/I,H=E/2,G=R/2,Y=b/2,j=T+1,W=I+1,F=0,se=0,le=new w;for(let N=0;N<W;N++){let ee=N*S-G;for(let Q=0;Q<j;Q++){let oe=Q*v-H;le[y]=oe*M,le[p]=ee*x,le[d]=Y,c.push(le.x,le.y,le.z),le[y]=0,le[p]=0,le[d]=b>0?1:-1,h.push(le.x,le.y,le.z),f.push(Q/T),f.push(1-N/I),F+=1}}for(let N=0;N<I;N++)for(let ee=0;ee<T;ee++){let Q=u+ee+j*N,oe=u+ee+j*(N+1),k=u+(ee+1)+j*(N+1),ne=u+(ee+1)+j*N;l.push(Q,oe,ne),l.push(oe,k,ne),se+=6}a.addGroup(m,se,O),m+=se,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mo(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function oi(i){let e={};for(let t=0;t<i.length;t++){let n=mo(i[t]);for(let r in n)e[r]=n[r]}return e}function $x(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function S0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}var Zx={clone:mo,merge:oi},Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Di=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=Jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=$x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qc=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=wr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kr=new w,bp=new ke,wp=new ke,Xn=class extends qc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,bp,wp),t.subVectors(wp,bp)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(aa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=-90,js=1,Vu=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xn(Qs,js,e,t);r.layers=this.layers,this.add(r);let s=new Xn(Qs,js,e,t);s.layers=this.layers,this.add(s);let o=new Xn(Qs,js,e,t);o.layers=this.layers,this.add(o);let a=new Xn(Qs,js,e,t);a.layers=this.layers,this.add(a);let l=new Xn(Qs,js,e,t);l.layers=this.layers,this.add(l);let c=new Xn(Qs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===wr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yc=class extends ai{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gu=class extends Tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wt(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Gr});s.uniforms.tEquirect.value=t;let o=new ot(r,s),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=pn),new Vu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Vh=new w,Qx=new w,jx=new bt,Li=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vh.subVectors(n,t).cross(Qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Vh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jx.getNormalMatrix(e),r=this.coplanarPoint(Vh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new $r,vc=new w,xa=class{constructor(e=new Li,t=new Li,n=new Li,r=new Li,s=new Li,o=new Li){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wr){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],u=r[7],m=r[8],g=r[9],y=r[10],p=r[11],d=r[12],M=r[13],x=r[14],E=r[15];if(n[0].setComponents(l-s,u-c,p-m,E-d).normalize(),n[1].setComponents(l+s,u+c,p+m,E+d).normalize(),n[2].setComponents(l+o,u+h,p+g,E+M).normalize(),n[3].setComponents(l-o,u-h,p-g,E-M).normalize(),n[4].setComponents(l-a,u-f,p-y,E-x).normalize(),t===wr)n[5].setComponents(l+a,u+f,p+y,E+x).normalize();else if(t===kc)n[5].setComponents(a,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(vc.x=r.normal.x>0?e.max.x:e.min.x,vc.y=r.normal.y>0?e.max.y:e.min.y,vc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function T0(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ey(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){let g=f[u],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){let y=f[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var _t=class i extends Rt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,f=e/a,u=t/l,m=[],g=[],y=[],p=[];for(let d=0;d<h;d++){let M=d*u-o;for(let x=0;x<c;x++){let E=x*f-s;g.push(E,-M,0),y.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let x=M+c*d,E=M+c*(d+1),R=M+1+c*(d+1),b=M+1+c*d;m.push(x,E,b),m.push(E,R,b)}this.setIndex(m),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ny=`#ifdef USE_ALPHAHASH
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
#endif`,iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ay=`#ifdef USE_AOMAP
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
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
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
#endif`,hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,py=`#ifdef USE_IRIDESCENCE
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
#endif`,my=`#ifdef USE_BUMPMAP
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wy=`#define PI 3.141592653589793
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
} // validated`,Sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ty=`vec3 transformedNormal = objectNormal;
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
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`
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
}`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
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
}`,Gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qy=`uniform bool receiveShadow;
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
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
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
#endif`,jy=`struct PhysicalMaterial {
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
}`,ev=`
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hv=`#if defined( USE_POINTS_UV )
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
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
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
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zv=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$v=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t2=`uniform sampler2D t2D;
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
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`#include <common>
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
}`,a2=`#if DEPTH_PACKING == 3200
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
}`,c2=`#define DISTANCE
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
}`,l2=`#define DISTANCE
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`uniform float scale;
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
}`,f2=`uniform vec3 diffuse;
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
}`,p2=`#include <common>
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
}`,m2=`uniform vec3 diffuse;
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
}`,g2=`#define LAMBERT
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
}`,x2=`#define LAMBERT
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
}`,y2=`#define MATCAP
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
}`,v2=`#define MATCAP
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
}`,M2=`#define NORMAL
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
}`,_2=`#define NORMAL
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
}`,E2=`#define PHONG
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
}`,b2=`#define PHONG
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
}`,w2=`#define STANDARD
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
}`,S2=`#define STANDARD
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
}`,T2=`#define TOON
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
}`,R2=`#define TOON
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
}`,A2=`uniform float size;
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
}`,C2=`uniform vec3 diffuse;
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
}`,P2=`#include <common>
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
}`,I2=`uniform vec3 color;
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
}`,L2=`uniform float rotation;
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
}`,D2=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:ty,alphahash_pars_fragment:ny,alphamap_fragment:iy,alphamap_pars_fragment:ry,alphatest_fragment:sy,alphatest_pars_fragment:oy,aomap_fragment:ay,aomap_pars_fragment:cy,batching_pars_vertex:ly,batching_vertex:hy,begin_vertex:uy,beginnormal_vertex:dy,bsdfs:fy,iridescence_fragment:py,bumpmap_pars_fragment:my,clipping_planes_fragment:gy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:yy,clipping_planes_vertex:vy,color_fragment:My,color_pars_fragment:_y,color_pars_vertex:Ey,color_vertex:by,common:wy,cube_uv_reflection_fragment:Sy,defaultnormal_vertex:Ty,displacementmap_pars_vertex:Ry,displacementmap_vertex:Ay,emissivemap_fragment:Cy,emissivemap_pars_fragment:Py,colorspace_fragment:Iy,colorspace_pars_fragment:Ly,envmap_fragment:Dy,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Hy,envmap_pars_vertex:Ny,envmap_physical_pars_fragment:Yy,envmap_vertex:Fy,fog_vertex:Oy,fog_pars_vertex:zy,fog_fragment:By,fog_pars_fragment:ky,gradientmap_pars_fragment:Vy,lightmap_pars_fragment:Gy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:Xy,lights_pars_begin:qy,lights_toon_fragment:$y,lights_toon_pars_fragment:Zy,lights_phong_fragment:Ky,lights_phong_pars_fragment:Jy,lights_physical_fragment:Qy,lights_physical_pars_fragment:jy,lights_fragment_begin:ev,lights_fragment_maps:tv,lights_fragment_end:nv,logdepthbuf_fragment:iv,logdepthbuf_pars_fragment:rv,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:ov,map_fragment:av,map_pars_fragment:cv,map_particle_fragment:lv,map_particle_pars_fragment:hv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:dv,morphinstance_vertex:fv,morphcolor_vertex:pv,morphnormal_vertex:mv,morphtarget_pars_vertex:gv,morphtarget_vertex:xv,normal_fragment_begin:yv,normal_fragment_maps:vv,normal_pars_fragment:Mv,normal_pars_vertex:_v,normal_vertex:Ev,normalmap_pars_fragment:bv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Rv,opaque_fragment:Av,packing:Cv,premultiplied_alpha_fragment:Pv,project_vertex:Iv,dithering_fragment:Lv,dithering_pars_fragment:Dv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:Nv,shadowmap_pars_vertex:Fv,shadowmap_vertex:Ov,shadowmask_pars_fragment:zv,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:Vv,skinnormal_vertex:Gv,specularmap_fragment:Wv,specularmap_pars_fragment:Xv,tonemapping_fragment:qv,tonemapping_pars_fragment:Yv,transmission_fragment:$v,transmission_pars_fragment:Zv,uv_pars_fragment:Kv,uv_pars_vertex:Jv,uv_vertex:Qv,worldpos_vertex:jv,background_vert:e2,background_frag:t2,backgroundCube_vert:n2,backgroundCube_frag:i2,cube_vert:r2,cube_frag:s2,depth_vert:o2,depth_frag:a2,distanceRGBA_vert:c2,distanceRGBA_frag:l2,equirect_vert:h2,equirect_frag:u2,linedashed_vert:d2,linedashed_frag:f2,meshbasic_vert:p2,meshbasic_frag:m2,meshlambert_vert:g2,meshlambert_frag:x2,meshmatcap_vert:y2,meshmatcap_frag:v2,meshnormal_vert:M2,meshnormal_frag:_2,meshphong_vert:E2,meshphong_frag:b2,meshphysical_vert:w2,meshphysical_frag:S2,meshtoon_vert:T2,meshtoon_frag:R2,points_vert:A2,points_frag:C2,shadow_vert:P2,shadow_frag:I2,sprite_vert:L2,sprite_frag:D2},Ke={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},or={basic:{uniforms:oi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:oi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:oi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:oi([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:oi([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:oi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:oi([Ke.points,Ke.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:oi([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:oi([Ke.common,Ke.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:oi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:oi([Ke.sprite,Ke.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:oi([Ke.common,Ke.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:oi([Ke.lights,Ke.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};or.physical={uniforms:oi([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Mc={r:0,b:0,g:0},ds=new ci,U2=new It;function H2(i,e,t,n,r,s,o){let a=new pt(0),l=s===!0?0:1,c,h,f=null,u=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function y(M){let x=!1,E=g(M);E===null?d(a,l):E&&E.isColor&&(d(E,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){let E=g(x);E&&(E.isCubeTexture||E.mapping===dl)?(h===void 0&&(h=new ot(new wt(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:mo(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ds.copy(x.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(U2.makeRotationFromEuler(ds)),h.material.toneMapped=Jt.getTransfer(E.colorSpace)!==ln,(f!==E||u!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,u=E.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ot(new _t(2,2),new Di({name:"BackgroundMaterial",uniforms:mo(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(E.colorSpace)!==ln,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||u!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,u=E.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,x){M.getRGB(Mc,S0(i)),n.buffers.color.setClear(Mc.r,Mc.g,Mc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:y,addToRenderList:p}}function N2(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(v,S,H,G,Y){let j=!1,W=f(G,H,S);s!==W&&(s=W,c(s.object)),j=m(v,G,H,Y),j&&g(v,G,H,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,E(v,S,H,G),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function f(v,S,H){let G=H.wireframe===!0,Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let j=Y[S.id];j===void 0&&(j={},Y[S.id]=j);let W=j[G];return W===void 0&&(W=u(l()),j[G]=W),W}function u(v){let S=[],H=[],G=[];for(let Y=0;Y<t;Y++)S[Y]=0,H[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:H,attributeDivisors:G,object:v,attributes:{},index:null}}function m(v,S,H,G){let Y=s.attributes,j=S.attributes,W=0,F=H.getAttributes();for(let se in F)if(F[se].location>=0){let N=Y[se],ee=j[se];if(ee===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;W++}return s.attributesNum!==W||s.index!==G}function g(v,S,H,G){let Y={},j=S.attributes,W=0,F=H.getAttributes();for(let se in F)if(F[se].location>=0){let N=j[se];N===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));let ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),Y[se]=ee,W++}s.attributes=Y,s.attributesNum=W,s.index=G}function y(){let v=s.newAttributes;for(let S=0,H=v.length;S<H;S++)v[S]=0}function p(v){d(v,0)}function d(v,S){let H=s.newAttributes,G=s.enabledAttributes,Y=s.attributeDivisors;H[v]=1,G[v]===0&&(i.enableVertexAttribArray(v),G[v]=1),Y[v]!==S&&(i.vertexAttribDivisor(v,S),Y[v]=S)}function M(){let v=s.newAttributes,S=s.enabledAttributes;for(let H=0,G=S.length;H<G;H++)S[H]!==v[H]&&(i.disableVertexAttribArray(H),S[H]=0)}function x(v,S,H,G,Y,j,W){W===!0?i.vertexAttribIPointer(v,S,H,Y,j):i.vertexAttribPointer(v,S,H,G,Y,j)}function E(v,S,H,G){y();let Y=G.attributes,j=H.getAttributes(),W=S.defaultAttributeValues;for(let F in j){let se=j[F];if(se.location>=0){let le=Y[F];if(le===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){let N=le.normalized,ee=le.itemSize,Q=e.get(le);if(Q===void 0)continue;let oe=Q.buffer,k=Q.type,ne=Q.bytesPerElement,B=k===i.INT||k===i.UNSIGNED_INT||le.gpuType===wd;if(le.isInterleavedBufferAttribute){let z=le.data,V=z.stride,ue=le.offset;if(z.isInstancedInterleavedBuffer){for(let we=0;we<se.locationSize;we++)d(se.location+we,z.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let we=0;we<se.locationSize;we++)p(se.location+we);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let we=0;we<se.locationSize;we++)x(se.location+we,ee/se.locationSize,k,N,V*ne,(ue+ee/se.locationSize*we)*ne,B)}else{if(le.isInstancedBufferAttribute){for(let z=0;z<se.locationSize;z++)d(se.location+z,le.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let z=0;z<se.locationSize;z++)p(se.location+z);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let z=0;z<se.locationSize;z++)x(se.location+z,ee/se.locationSize,k,N,ee*ne,ee/se.locationSize*z*ne,B)}}else if(W!==void 0){let N=W[F];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(se.location,N);break;case 3:i.vertexAttrib3fv(se.location,N);break;case 4:i.vertexAttrib4fv(se.location,N);break;default:i.vertexAttrib1fv(se.location,N)}}}}M()}function R(){I();for(let v in n){let S=n[v];for(let H in S){let G=S[H];for(let Y in G)h(G[Y].object),delete G[Y];delete S[H]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;let S=n[v.id];for(let H in S){let G=S[H];for(let Y in G)h(G[Y].object),delete G[Y];delete S[H]}delete n[v.id]}function T(v){for(let S in n){let H=n[S];if(H[v.id]===void 0)continue;let G=H[v.id];for(let Y in G)h(G[Y].object),delete G[Y];delete H[v.id]}}function I(){O(),o=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function F2(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];t.update(m,n,1)}function l(c,h,f,u){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y];for(let y=0;y<u.length;y++)t.update(g,n,u[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function O2(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Ei&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Sr&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ar&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:R,maxSamples:b}}function z2(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Li,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){let g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{let M=s?0:n,x=M*4,E=d.clippingState||null;l.value=E,E=h(g,u,x,m);for(let R=0;R!==x;++R)E[R]=t[R];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,m,g){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let d=m+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,E=m;x!==y;++x,E+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function B2(i){let e=new WeakMap;function t(o,a){return a===da?o.mapping=lo:a===hu&&(o.mapping=ho),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===da||a===hu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Gu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var $c=class extends qc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},io=4,Sp=[.125,.215,.35,.446,.526,.582],xs=20,Gh=new $c,Tp=new pt,Wh=null,Xh=0,qh=0,Yh=!1,ps=(1+Math.sqrt(5))/2,eo=1/ps,Rp=[new w(-ps,eo,0),new w(ps,eo,0),new w(-eo,0,ps),new w(eo,0,ps),new w(0,ps,-eo),new w(0,ps,eo),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,Xh,qh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ra,format:Ei,colorSpace:Qr,depthBuffer:!1},r=Ap(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k2(s)),this._blurMaterial=V2(s,e,t)}return r}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Gh)}_sceneToCubeUV(e,t,n,r){let a=new Xn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Tp),h.toneMapping=Xr,h.autoClear=!1;let m=new mt({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new ot(new wt,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Tp),y=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;_c(r,M*x,d>2?x:0,x,x),h.setRenderTarget(r),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===lo||e.mapping===ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;_c(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rp[(r-s-1)%Rp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ot(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xs-1),y=s/g,p=isFinite(s)?1+Math.floor(h*y):xs;p>xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xs}`);let d=[],M=0;for(let T=0;T<xs;++T){let I=T/y,O=Math.exp(-I*I/2);d.push(O),T===0?M+=O:T<p&&(M+=2*O)}for(let T=0;T<d.length;T++)d[T]=d[T]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let E=this._sizeLods[r],R=3*E*(r>x-io?r-x+io:0),b=4*(this._cubeSize-E);_c(t,R,b,3*E,2*E),l.setRenderTarget(t),l.render(f,Gh)}};function k2(i){let e=[],t=[],n=[],r=i,s=i-io+1+Sp.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-io?l=Sp[o-i+io-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,y=3,p=2,d=1,M=new Float32Array(y*g*m),x=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let b=0;b<m;b++){let T=b%3*2/3-1,I=b>2?0:-1,O=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];M.set(O,y*g*b),x.set(u,p*g*b);let v=[b,b,b,b,b,b];E.set(v,d*g*b)}let R=new Rt;R.setAttribute("position",new rn(M,y)),R.setAttribute("uv",new rn(x,p)),R.setAttribute("faceIndex",new rn(E,d)),e.push(R),r>io&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ap(i,e,t){let n=new Tr(i,e,t);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _c(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function V2(i,e,t){let n=new Float32Array(xs),r=new w(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Cp(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Pp(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Hd(){return`

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
	`}function G2(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===da||l===hu,h=l===lo||l===ho;if(c||h){let f=e.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new go(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new go(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function W2(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Hc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function X2(i,e,t,n){let r={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let p=0,d=y.length;p<d;p++)e.remove(y[p])}u.removeEventListener("dispose",o),delete r[u.id];let m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let y=m[g];for(let p=0,d=y.length;p<d;p++)e.update(y[p],i.ARRAY_BUFFER)}}function c(f){let u=[],m=f.index,g=f.attributes.position,y=0;if(m!==null){let M=m.array;y=m.version;for(let x=0,E=M.length;x<E;x+=3){let R=M[x+0],b=M[x+1],T=M[x+2];u.push(R,b,b,T,T,R)}}else if(g!==void 0){let M=g.array;y=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){let R=x+0,b=x+1,T=x+2;u.push(R,b,b,T,T,R)}}else return;let p=new(b0(u)?Xc:Wc)(u,1);p.version=y;let d=s.get(f);d&&e.remove(d),s.set(f,p)}function h(f){let u=s.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function q2(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,m){i.drawElements(n,m,s,u*o),t.update(m,n,1)}function c(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,u*o,g),t.update(m,n,g))}function h(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,u,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function f(u,m,g,y){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<u.length;d++)c(u[d]/o,m[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,u,0,y,0,g);let d=0;for(let M=0;M<g;M++)d+=m[M];for(let M=0;M<y.length;M++)t.update(d,n,y[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Y2(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $2(i,e,t){let n=new WeakMap,r=new nn;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let O=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),y===!0&&(x=3);let E=a.attributes.position.count*x,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let b=new Float32Array(E*R*4*f),T=new Gc(b,E,R,f);T.type=ar,T.needsUpdate=!0;let I=x*4;for(let v=0;v<f;v++){let S=p[v],H=d[v],G=M[v],Y=E*R*4*v;for(let j=0;j<S.count;j++){let W=j*I;m===!0&&(r.fromBufferAttribute(S,j),b[Y+W+0]=r.x,b[Y+W+1]=r.y,b[Y+W+2]=r.z,b[Y+W+3]=0),g===!0&&(r.fromBufferAttribute(H,j),b[Y+W+4]=r.x,b[Y+W+5]=r.y,b[Y+W+6]=r.z,b[Y+W+7]=0),y===!0&&(r.fromBufferAttribute(G,j),b[Y+W+8]=r.x,b[Y+W+9]=r.y,b[Y+W+10]=r.z,b[Y+W+11]=G.itemSize===4?r.w:1)}}u={count:f,texture:T,size:new ke(E,R)},n.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Z2(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Zc=class extends ai{constructor(e,t,n,r,s,o,a,l,c,h=so){if(h!==so&&h!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===so&&(n=Ms),n===void 0&&h===fo&&(n=uo),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},R0=new ai,Ip=new Zc(1,1),A0=new Gc,C0=new ku,P0=new Yc,Lp=[],Dp=[],Up=new Float32Array(16),Hp=new Float32Array(9),Np=new Float32Array(4);function _o(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Lp[r];if(s===void 0&&(s=new Float32Array(r),Lp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pl(i,e){let t=Dp[e];t===void 0&&(t=new Int32Array(e),Dp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2fv(this.addr,e),Un(t,e)}}function Q2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dn(t,e))return;i.uniform3fv(this.addr,e),Un(t,e)}}function j2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4fv(this.addr,e),Un(t,e)}}function eM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(Dn(t,n))return;Np.set(n),i.uniformMatrix2fv(this.addr,!1,Np),Un(t,n)}}function tM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(Dn(t,n))return;Hp.set(n),i.uniformMatrix3fv(this.addr,!1,Hp),Un(t,n)}}function nM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(Dn(t,n))return;Up.set(n),i.uniformMatrix4fv(this.addr,!1,Up),Un(t,n)}}function iM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2iv(this.addr,e),Un(t,e)}}function sM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;i.uniform3iv(this.addr,e),Un(t,e)}}function oM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4iv(this.addr,e),Un(t,e)}}function aM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2uiv(this.addr,e),Un(t,e)}}function lM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;i.uniform3uiv(this.addr,e),Un(t,e)}}function hM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4uiv(this.addr,e),Un(t,e)}}function uM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ip.compareFunction=E0,s=Ip):s=R0,t.setTexture2D(e||s,r)}function dM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||C0,r)}function fM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||P0,r)}function pM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||A0,r)}function mM(i){switch(i){case 5126:return K2;case 35664:return J2;case 35665:return Q2;case 35666:return j2;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return cM;case 36295:return lM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(i,e){i.uniform1fv(this.addr,e)}function xM(i,e){let t=_o(e,this.size,2);i.uniform2fv(this.addr,t)}function yM(i,e){let t=_o(e,this.size,3);i.uniform3fv(this.addr,t)}function vM(i,e){let t=_o(e,this.size,4);i.uniform4fv(this.addr,t)}function MM(i,e){let t=_o(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _M(i,e){let t=_o(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function EM(i,e){let t=_o(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bM(i,e){i.uniform1iv(this.addr,e)}function wM(i,e){i.uniform2iv(this.addr,e)}function SM(i,e){i.uniform3iv(this.addr,e)}function TM(i,e){i.uniform4iv(this.addr,e)}function RM(i,e){i.uniform1uiv(this.addr,e)}function AM(i,e){i.uniform2uiv(this.addr,e)}function CM(i,e){i.uniform3uiv(this.addr,e)}function PM(i,e){i.uniform4uiv(this.addr,e)}function IM(i,e,t){let n=this.cache,r=e.length,s=pl(t,r);Dn(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||R0,s[o])}function LM(i,e,t){let n=this.cache,r=e.length,s=pl(t,r);Dn(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||C0,s[o])}function DM(i,e,t){let n=this.cache,r=e.length,s=pl(t,r);Dn(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||P0,s[o])}function UM(i,e,t){let n=this.cache,r=e.length,s=pl(t,r);Dn(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||A0,s[o])}function HM(i){switch(i){case 5126:return gM;case 35664:return xM;case 35665:return yM;case 35666:return vM;case 35674:return MM;case 35675:return _M;case 35676:return EM;case 5124:case 35670:return bM;case 35667:case 35671:return wM;case 35668:case 35672:return SM;case 35669:case 35673:return TM;case 5125:return RM;case 36294:return AM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return UM}}var Wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}},Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HM(t.type)}},qu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},$h=/(\w+)(\])?(\[|\.)?/g;function Fp(i,e){i.seq.push(e),i.map[e.id]=e}function NM(i,e,t){let n=i.name,r=n.length;for($h.lastIndex=0;;){let s=$h.exec(n),o=$h.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fp(t,c===void 0?new Wu(a,i,e):new Xu(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new qu(a),Fp(t,f)),t=f}}}var ao=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);NM(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Op(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var FM=37297,OM=0;function zM(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function BM(i){let e=Jt.getPrimaries(Jt.workingColorSpace),t=Jt.getPrimaries(i),n;switch(e===t?n="":e===Bc&&t===zc?n="LinearDisplayP3ToLinearSRGB":e===zc&&t===Bc&&(n="LinearSRGBToLinearDisplayP3"),i){case Qr:case fl:return[n,"LinearTransferOETF"];case yt:case Dd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zM(i.getShaderSource(e),o)}else return r}function kM(i,e){let t=BM(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function VM(i,e){let t;switch(e){case j1:t="Linear";break;case ex:t="Reinhard";break;case tx:t="Cineon";break;case bd:t="ACESFilmic";break;case ix:t="AgX";break;case rx:t="Neutral";break;case nx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ec=new w;function GM(){Jt.getLuminanceCoefficients(Ec);let i=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function XM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function oa(i){return i!==""}function Bp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(i){return i.replace(YM,ZM)}var $M=new Map;function ZM(i,e){let t=Ct[e];if(t===void 0){let n=$M.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yu(t)}var KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(i){return i.replace(KM,JM)}function JM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function QM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function jM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lo:case ho:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function t_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ed:e="ENVMAP_BLENDING_MULTIPLY";break;case J1:e="ENVMAP_BLENDING_MIX";break;case Q1:e="ENVMAP_BLENDING_ADD";break}return e}function n_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function i_(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=QM(t),c=jM(t),h=e_(t),f=t_(t),u=n_(t),m=WM(t),g=XM(s),y=r.createProgram(),p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oa).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oa).join(`
`),d.length>0&&(d+=`
`)):(p=[Gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),d=[Gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xr?"#define TONE_MAPPING":"",t.toneMapping!==Xr?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Xr?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),o=Yu(o),o=Bp(o,t),o=kp(o,t),a=Yu(a),a=Bp(a,t),a=kp(a,t),o=Vp(o),a=Vp(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===op?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=M+p+o,E=M+d+a,R=Op(r,r.VERTEX_SHADER,x),b=Op(r,r.FRAGMENT_SHADER,E);r.attachShader(y,R),r.attachShader(y,b),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(S){if(i.debug.checkShaderErrors){let H=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(b).trim(),j=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,R,b);else{let F=zp(r,R,"vertex"),se=zp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+H+`
`+F+`
`+se)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||Y==="")&&(W=!1);W&&(S.diagnostics={runnable:j,programLog:H,vertexShader:{log:G,prefix:p},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(R),r.deleteShader(b),I=new ao(r,y),O=qM(r,y)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let O;this.getAttributes=function(){return O===void 0&&T(this),O};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(y,FM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=b,this}var r_=0,$u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zu(e),t.set(e,n)),n}},Zu=class{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}};function s_(i,e,t,n,r,s,o){let a=new ga,l=new $u,c=new Set,h=[],f=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function d(v,S,H,G,Y){let j=G.fog,W=Y.geometry,F=v.isMeshStandardMaterial?G.environment:null,se=(v.isMeshStandardMaterial?t:e).get(v.envMap||F),le=se&&se.mapping===dl?se.image.height:null,N=y[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=ee!==void 0?ee.length:0,oe=0;W.morphAttributes.position!==void 0&&(oe=1),W.morphAttributes.normal!==void 0&&(oe=2),W.morphAttributes.color!==void 0&&(oe=3);let k,ne,B,z;if(N){let Gt=or[N];k=Gt.vertexShader,ne=Gt.fragmentShader}else k=v.vertexShader,ne=v.fragmentShader,l.update(v),B=l.getVertexShaderID(v),z=l.getFragmentShaderID(v);let V=i.getRenderTarget(),ue=Y.isInstancedMesh===!0,we=Y.isBatchedMesh===!0,Ue=!!v.map,K=!!v.matcap,L=!!se,fe=!!v.aoMap,_e=!!v.lightMap,ye=!!v.bumpMap,Ee=!!v.normalMap,De=!!v.displacementMap,Ae=!!v.emissiveMap,U=!!v.metalnessMap,A=!!v.roughnessMap,re=v.anisotropy>0,Se=v.clearcoat>0,Pe=v.dispersion>0,Ce=v.iridescence>0,Ze=v.sheen>0,be=v.transmission>0,Ne=re&&!!v.anisotropyMap,Je=Se&&!!v.clearcoatMap,Le=Se&&!!v.clearcoatNormalMap,J=Se&&!!v.clearcoatRoughnessMap,me=Ce&&!!v.iridescenceMap,Me=Ce&&!!v.iridescenceThicknessMap,ge=Ze&&!!v.sheenColorMap,xe=Ze&&!!v.sheenRoughnessMap,ae=!!v.specularMap,Be=!!v.specularColorMap,$=!!v.specularIntensityMap,Re=be&&!!v.transmissionMap,ce=be&&!!v.thicknessMap,Te=!!v.gradientMap,ze=!!v.alphaMap,Ge=v.alphaTest>0,ht=!!v.alphaHash,At=!!v.extensions,zt=Xr;v.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Tt={shaderID:N,shaderType:v.type,shaderName:v.name,vertexShader:k,fragmentShader:ne,defines:v.defines,customVertexShaderID:B,customFragmentShaderID:z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:we,batchingColor:we&&Y._colorsTexture!==null,instancing:ue,instancingColor:ue&&Y.instanceColor!==null,instancingMorph:ue&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Qr,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:K,envMap:L,envMapMode:L&&se.mapping,envMapCubeUVHeight:le,aoMap:fe,lightMap:_e,bumpMap:ye,normalMap:Ee,displacementMap:m&&De,emissiveMap:Ae,normalMapObjectSpace:Ee&&v.normalMapType===ax,normalMapTangentSpace:Ee&&v.normalMapType===Ld,metalnessMap:U,roughnessMap:A,anisotropy:re,anisotropyMap:Ne,clearcoat:Se,clearcoatMap:Je,clearcoatNormalMap:Le,clearcoatRoughnessMap:J,dispersion:Pe,iridescence:Ce,iridescenceMap:me,iridescenceThicknessMap:Me,sheen:Ze,sheenColorMap:ge,sheenRoughnessMap:xe,specularMap:ae,specularColorMap:Be,specularIntensityMap:$,transmission:be,transmissionMap:Re,thicknessMap:ce,gradientMap:Te,opaque:v.transparent===!1&&v.blending===Wr&&v.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ge,alphaHash:ht,combine:v.combine,mapUv:Ue&&p(v.map.channel),aoMapUv:fe&&p(v.aoMap.channel),lightMapUv:_e&&p(v.lightMap.channel),bumpMapUv:ye&&p(v.bumpMap.channel),normalMapUv:Ee&&p(v.normalMap.channel),displacementMapUv:De&&p(v.displacementMap.channel),emissiveMapUv:Ae&&p(v.emissiveMap.channel),metalnessMapUv:U&&p(v.metalnessMap.channel),roughnessMapUv:A&&p(v.roughnessMap.channel),anisotropyMapUv:Ne&&p(v.anisotropyMap.channel),clearcoatMapUv:Je&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Le&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(v.sheenRoughnessMap.channel),specularMapUv:ae&&p(v.specularMap.channel),specularColorMapUv:Be&&p(v.specularColorMap.channel),specularIntensityMapUv:$&&p(v.specularIntensityMap.channel),transmissionMapUv:Re&&p(v.transmissionMap.channel),thicknessMapUv:ce&&p(v.thicknessMap.channel),alphaMapUv:ze&&p(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ee||re),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(Ue||ze),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ln,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pt,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:At&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&v.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function M(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let H in v.defines)S.push(H),S.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(x(S,v),E(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){let S=y[v.type],H;if(S){let G=or[S];H=Zx.clone(G.uniforms)}else H=v.uniforms;return H}function b(v,S){let H;for(let G=0,Y=h.length;G<Y;G++){let j=h[G];if(j.cacheKey===S){H=j,++H.usedTimes;break}}return H===void 0&&(H=new i_(i,S,v,s),h.push(H)),H}function T(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function I(v){l.remove(v)}function O(){l.dispose()}return{getParameters:d,getProgramCacheKey:M,getUniforms:R,acquireProgram:b,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:O}}function o_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function a_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,u,m,g,y,p){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:y,group:p},i[e]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=p),e++,d}function a(f,u,m,g,y,p){let d=o(f,u,m,g,y,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,u,m,g,y,p){let d=o(f,u,m,g,y,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,u){t.length>1&&t.sort(f||a_),n.length>1&&n.sort(u||Wp),r.length>1&&r.sort(u||Wp)}function h(){for(let f=e,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function c_(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Xp,i.set(n,[o])):r>=s.length?(o=new Xp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function l_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new pt};break;case"SpotLight":t={position:new w,direction:new w,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function h_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var u_=0;function d_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function f_(i){let e=new l_,t=h_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let r=new w,s=new It,o=new It;function a(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,y=0,p=0,d=0,M=0,x=0,E=0,R=0,b=0,T=0;c.sort(d_);for(let O=0,v=c.length;O<v;O++){let S=c[O],H=S.color,G=S.intensity,Y=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=H.r*G,f+=H.g*G,u+=H.b*G;else if(S.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(S.sh.coefficients[W],G);T++}else if(S.isDirectionalLight){let W=e.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let F=S.shadow,se=t.get(S);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=S.shadow.matrix,M++}n.directional[m]=W,m++}else if(S.isSpotLight){let W=e.get(S);W.position.setFromMatrixPosition(S.matrixWorld),W.color.copy(H).multiplyScalar(G),W.distance=Y,W.coneCos=Math.cos(S.angle),W.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),W.decay=S.decay,n.spot[y]=W;let F=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,F.updateMatrices(S),S.castShadow&&b++),n.spotLightMatrix[y]=F.matrix,S.castShadow){let se=t.get(S);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,n.spotShadow[y]=se,n.spotShadowMap[y]=j,E++}y++}else if(S.isRectAreaLight){let W=e.get(S);W.color.copy(H).multiplyScalar(G),W.halfWidth.set(S.width*.5,0,0),W.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=W,p++}else if(S.isPointLight){let W=e.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),W.distance=S.distance,W.decay=S.decay,S.castShadow){let F=S.shadow,se=t.get(S);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,se.shadowCameraNear=F.camera.near,se.shadowCameraFar=F.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=S.shadow.matrix,x++}n.point[g]=W,g++}else if(S.isHemisphereLight){let W=e.get(S);W.skyColor.copy(S.color).multiplyScalar(G),W.groundColor.copy(S.groundColor).multiplyScalar(G),n.hemi[d]=W,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ke.LTC_FLOAT_1,n.rectAreaLTC2=Ke.LTC_FLOAT_2):(n.rectAreaLTC1=Ke.LTC_HALF_1,n.rectAreaLTC2=Ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==p||I.hemiLength!==d||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==E||I.numSpotMaps!==R||I.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,I.directionalLength=m,I.pointLength=g,I.spotLength=y,I.rectAreaLength=p,I.hemiLength=d,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=E,I.numSpotMaps=R,I.numLightProbes=T,n.version=u_++)}function l(c,h){let f=0,u=0,m=0,g=0,y=0,p=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let x=c[d];if(x.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(x.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){let E=n.hemi[y];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function qp(i){let e=new f_(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function p_(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new qp(i),e.set(r,[a])):s>=o.length?(a=new qp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ya=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ku=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`;function x_(i,e,t){let n=new xa,r=new ke,s=new ke,o=new nn,a=new ya({depthPacking:Id}),l=new Ku,c={},h=t.maxTextureSize,f={[jn]:Tn,[Tn]:jn,[Pt]:Pt},u=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ot(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u0;let d=this.type;this.render=function(b,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;let O=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Gr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let G=d!==br&&this.type===br,Y=d===br&&this.type!==br;for(let j=0,W=b.length;j<W;j++){let F=b[j],se=F.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);let le=se.getFrameExtents();if(r.multiply(le),s.copy(se.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/le.x),r.x=s.x*le.x,se.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/le.y),r.y=s.y*le.y,se.mapSize.y=s.y)),se.map===null||G===!0||Y===!0){let ee=this.type!==br?{minFilter:di,magFilter:di}:{};se.map!==null&&se.map.dispose(),se.map=new Tr(r.x,r.y,ee),se.map.texture.name=F.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let N=se.getViewportCount();for(let ee=0;ee<N;ee++){let Q=se.getViewport(ee);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),H.viewport(o),se.updateMatrices(F,ee),n=se.getFrustum(),E(T,I,se.camera,F,this.type)}se.isPointLightShadow!==!0&&this.type===br&&M(se,I),se.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(O,v,S)};function M(b,T){let I=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Tr(r.x,r.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,I,u,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,I,m,y,null)}function x(b,T,I,O){let v=null,S=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)v=S;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=v.uuid,G=T.uuid,Y=c[H];Y===void 0&&(Y={},c[H]=Y);let j=Y[G];j===void 0&&(j=v.clone(),Y[G]=j,T.addEventListener("dispose",R)),v=j}if(v.visible=T.visible,v.wireframe=T.wireframe,O===br?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=i.properties.get(v);H.light=I}return v}function E(b,T,I,O,v){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===br)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let G=e.update(b),Y=b.material;if(Array.isArray(Y)){let j=G.groups;for(let W=0,F=j.length;W<F;W++){let se=j[W],le=Y[se.materialIndex];if(le&&le.visible){let N=x(b,le,O,v);b.onBeforeShadow(i,b,T,I,G,N,se),i.renderBufferDirect(I,null,G,N,b,se),b.onAfterShadow(i,b,T,I,G,N,se)}}}else if(Y.visible){let j=x(b,Y,O,v);b.onBeforeShadow(i,b,T,I,G,j,null),i.renderBufferDirect(I,null,G,j,b,null),b.onAfterShadow(i,b,T,I,G,j,null)}}let H=b.children;for(let G=0,Y=H.length;G<Y;G++)E(H[G],T,I,O,v)}function R(b){b.target.removeEventListener("dispose",R);for(let I in c){let O=c[I],v=b.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}var y_={[iu]:ru,[su]:cu,[ou]:lu,[co]:au,[ru]:iu,[cu]:su,[lu]:ou,[au]:co};function v_(i){function e(){let $=!1,Re=new nn,ce=null,Te=new nn(0,0,0,0);return{setMask:function(ze){ce!==ze&&!$&&(i.colorMask(ze,ze,ze,ze),ce=ze)},setLocked:function(ze){$=ze},setClear:function(ze,Ge,ht,At,zt){zt===!0&&(ze*=At,Ge*=At,ht*=At),Re.set(ze,Ge,ht,At),Te.equals(Re)===!1&&(i.clearColor(ze,Ge,ht,At),Te.copy(Re))},reset:function(){$=!1,ce=null,Te.set(-1,0,0,0)}}}function t(){let $=!1,Re=!1,ce=null,Te=null,ze=null;return{setReversed:function(Ge){Re=Ge},setTest:function(Ge){Ge?B(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(Ge){ce!==Ge&&!$&&(i.depthMask(Ge),ce=Ge)},setFunc:function(Ge){if(Re&&(Ge=y_[Ge]),Te!==Ge){switch(Ge){case iu:i.depthFunc(i.NEVER);break;case ru:i.depthFunc(i.ALWAYS);break;case su:i.depthFunc(i.LESS);break;case co:i.depthFunc(i.LEQUAL);break;case ou:i.depthFunc(i.EQUAL);break;case au:i.depthFunc(i.GEQUAL);break;case cu:i.depthFunc(i.GREATER);break;case lu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=Ge}},setLocked:function(Ge){$=Ge},setClear:function(Ge){ze!==Ge&&(i.clearDepth(Ge),ze=Ge)},reset:function(){$=!1,ce=null,Te=null,ze=null}}}function n(){let $=!1,Re=null,ce=null,Te=null,ze=null,Ge=null,ht=null,At=null,zt=null;return{setTest:function(Tt){$||(Tt?B(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function(Tt){Re!==Tt&&!$&&(i.stencilMask(Tt),Re=Tt)},setFunc:function(Tt,Gt,fn){(ce!==Tt||Te!==Gt||ze!==fn)&&(i.stencilFunc(Tt,Gt,fn),ce=Tt,Te=Gt,ze=fn)},setOp:function(Tt,Gt,fn){(Ge!==Tt||ht!==Gt||At!==fn)&&(i.stencilOp(Tt,Gt,fn),Ge=Tt,ht=Gt,At=fn)},setLocked:function(Tt){$=Tt},setClear:function(Tt){zt!==Tt&&(i.clearStencil(Tt),zt=Tt)},reset:function(){$=!1,Re=null,ce=null,Te=null,ze=null,Ge=null,ht=null,At=null,zt=null}}}let r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,u=[],m=null,g=!1,y=null,p=null,d=null,M=null,x=null,E=null,R=null,b=new pt(0,0,0),T=0,I=!1,O=null,v=null,S=null,H=null,G=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,W=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),j=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),j=W>=2);let se=null,le={},N=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Q=new nn().fromArray(N),oe=new nn().fromArray(ee);function k($,Re,ce,Te){let ze=new Uint8Array(4),Ge=i.createTexture();i.bindTexture($,Ge),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ht=0;ht<ce;ht++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Re+ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Ge}let ne={};ne[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),B(i.DEPTH_TEST),s.setFunc(co),_e(!1),ye(Qf),B(i.CULL_FACE),L(Gr);function B($){c[$]!==!0&&(i.enable($),c[$]=!0)}function z($){c[$]!==!1&&(i.disable($),c[$]=!1)}function V($,Re){return h[$]!==Re?(i.bindFramebuffer($,Re),h[$]=Re,$===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),$===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function ue($,Re){let ce=u,Te=!1;if($){ce=f.get(Re),ce===void 0&&(ce=[],f.set(Re,ce));let ze=$.textures;if(ce.length!==ze.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,ht=ze.length;Ge<ht;Ge++)ce[Ge]=i.COLOR_ATTACHMENT0+Ge;ce.length=ze.length,Te=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ce)}function we($){return m!==$?(i.useProgram($),m=$,!0):!1}let Ue={[ms]:i.FUNC_ADD,[U1]:i.FUNC_SUBTRACT,[H1]:i.FUNC_REVERSE_SUBTRACT};Ue[N1]=i.MIN,Ue[F1]=i.MAX;let K={[O1]:i.ZERO,[z1]:i.ONE,[B1]:i.SRC_COLOR,[tu]:i.SRC_ALPHA,[q1]:i.SRC_ALPHA_SATURATE,[W1]:i.DST_COLOR,[V1]:i.DST_ALPHA,[k1]:i.ONE_MINUS_SRC_COLOR,[nu]:i.ONE_MINUS_SRC_ALPHA,[X1]:i.ONE_MINUS_DST_COLOR,[G1]:i.ONE_MINUS_DST_ALPHA,[Y1]:i.CONSTANT_COLOR,[$1]:i.ONE_MINUS_CONSTANT_COLOR,[Z1]:i.CONSTANT_ALPHA,[K1]:i.ONE_MINUS_CONSTANT_ALPHA};function L($,Re,ce,Te,ze,Ge,ht,At,zt,Tt){if($===Gr){g===!0&&(z(i.BLEND),g=!1);return}if(g===!1&&(B(i.BLEND),g=!0),$!==D1){if($!==y||Tt!==I){if((p!==ms||x!==ms)&&(i.blendEquation(i.FUNC_ADD),p=ms,x=ms),Tt)switch($){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case jf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ep:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ep:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}d=null,M=null,E=null,R=null,b.set(0,0,0),T=0,y=$,I=Tt}return}ze=ze||Re,Ge=Ge||ce,ht=ht||Te,(Re!==p||ze!==x)&&(i.blendEquationSeparate(Ue[Re],Ue[ze]),p=Re,x=ze),(ce!==d||Te!==M||Ge!==E||ht!==R)&&(i.blendFuncSeparate(K[ce],K[Te],K[Ge],K[ht]),d=ce,M=Te,E=Ge,R=ht),(At.equals(b)===!1||zt!==T)&&(i.blendColor(At.r,At.g,At.b,zt),b.copy(At),T=zt),y=$,I=!1}function fe($,Re){$.side===Pt?z(i.CULL_FACE):B(i.CULL_FACE);let ce=$.side===Tn;Re&&(ce=!ce),_e(ce),$.blending===Wr&&$.transparent===!1?L(Gr):L($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),s.setFunc($.depthFunc),s.setTest($.depthTest),s.setMask($.depthWrite),r.setMask($.colorWrite);let Te=$.stencilWrite;o.setTest(Te),Te&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),De($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e($){O!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),O=$)}function ye($){$!==I1?(B(i.CULL_FACE),$!==v&&($===Qf?i.cullFace(i.BACK):$===L1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),v=$}function Ee($){$!==S&&(j&&i.lineWidth($),S=$)}function De($,Re,ce){$?(B(i.POLYGON_OFFSET_FILL),(H!==Re||G!==ce)&&(i.polygonOffset(Re,ce),H=Re,G=ce)):z(i.POLYGON_OFFSET_FILL)}function Ae($){$?B(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function U($){$===void 0&&($=i.TEXTURE0+Y-1),se!==$&&(i.activeTexture($),se=$)}function A($,Re,ce){ce===void 0&&(se===null?ce=i.TEXTURE0+Y-1:ce=se);let Te=le[ce];Te===void 0&&(Te={type:void 0,texture:void 0},le[ce]=Te),(Te.type!==$||Te.texture!==Re)&&(se!==ce&&(i.activeTexture(ce),se=ce),i.bindTexture($,Re||ne[$]),Te.type=$,Te.texture=Re)}function re(){let $=le[se];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Se(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ce(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ze(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function J(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function me(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me($){Q.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Q.copy($))}function ge($){oe.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),oe.copy($))}function xe($,Re){let ce=l.get(Re);ce===void 0&&(ce=new WeakMap,l.set(Re,ce));let Te=ce.get($);Te===void 0&&(Te=i.getUniformBlockIndex(Re,$.name),ce.set($,Te))}function ae($,Re){let Te=l.get(Re).get($);a.get(Re)!==Te&&(i.uniformBlockBinding(Re,Te,$.__bindingPointIndex),a.set(Re,Te))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},se=null,le={},h={},f=new WeakMap,u=[],m=null,g=!1,y=null,p=null,d=null,M=null,x=null,E=null,R=null,b=new pt(0,0,0),T=0,I=!1,O=null,v=null,S=null,H=null,G=null,Q.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:B,disable:z,bindFramebuffer:V,drawBuffers:ue,useProgram:we,setBlending:L,setMaterial:fe,setFlipSided:_e,setCullFace:ye,setLineWidth:Ee,setPolygonOffset:De,setScissorTest:Ae,activeTexture:U,bindTexture:A,unbindTexture:re,compressedTexImage2D:Se,compressedTexImage3D:Pe,texImage2D:J,texImage3D:me,updateUBOMapping:xe,uniformBlockBinding:ae,texStorage2D:Je,texStorage3D:Le,texSubImage2D:Ce,texSubImage3D:Ze,compressedTexSubImage2D:be,compressedTexSubImage3D:Ne,scissor:Me,viewport:ge,reset:Be}}function Yp(i,e,t,n){let r=M_(n);switch(t){case g0:return i*e;case y0:return i*e;case v0:return i*e*2;case Rd:return i*e/r.components*r.byteLength;case Ad:return i*e/r.components*r.byteLength;case M0:return i*e*2/r.components*r.byteLength;case Cd:return i*e*2/r.components*r.byteLength;case x0:return i*e*3/r.components*r.byteLength;case Ei:return i*e*4/r.components*r.byteLength;case Pd:return i*e*4/r.components*r.byteLength;case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fu:case mu:return Math.max(i,16)*Math.max(e,8)/4;case du:case pu:return Math.max(i,8)*Math.max(e,8)/2;case gu:case xu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _u:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Iu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Du:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _0:case Hu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nu:case Fu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M_(i){switch(i){case Sr:case f0:return{byteLength:1,components:1};case fa:case p0:case Ra:return{byteLength:2,components:1};case Sd:case Td:return{byteLength:2,components:4};case Ms:case wd:case ar:return{byteLength:4,components:1};case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function __(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,f,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,A){return m?new OffscreenCanvas(U,A):pa("canvas")}function y(U,A,re){let Se=1,Pe=Ae(U);if((Pe.width>re||Pe.height>re)&&(Se=re/Math.max(Pe.width,Pe.height)),Se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Ce=Math.floor(Se*Pe.width),Ze=Math.floor(Se*Pe.height);f===void 0&&(f=g(Ce,Ze));let be=A?g(Ce,Ze):f;return be.width=Ce,be.height=Ze,be.getContext("2d").drawImage(U,0,0,Ce,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Pe.width+"x"+Pe.height+") to ("+Ce+"x"+Ze+")."),be}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Pe.width+"x"+Pe.height+")."),U;return U}function p(U){return U.generateMipmaps&&U.minFilter!==di&&U.minFilter!==pn}function d(U){i.generateMipmap(U)}function M(U,A,re,Se,Pe=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ce=A;if(A===i.RED&&(re===i.FLOAT&&(Ce=i.R32F),re===i.HALF_FLOAT&&(Ce=i.R16F),re===i.UNSIGNED_BYTE&&(Ce=i.R8)),A===i.RED_INTEGER&&(re===i.UNSIGNED_BYTE&&(Ce=i.R8UI),re===i.UNSIGNED_SHORT&&(Ce=i.R16UI),re===i.UNSIGNED_INT&&(Ce=i.R32UI),re===i.BYTE&&(Ce=i.R8I),re===i.SHORT&&(Ce=i.R16I),re===i.INT&&(Ce=i.R32I)),A===i.RG&&(re===i.FLOAT&&(Ce=i.RG32F),re===i.HALF_FLOAT&&(Ce=i.RG16F),re===i.UNSIGNED_BYTE&&(Ce=i.RG8)),A===i.RG_INTEGER&&(re===i.UNSIGNED_BYTE&&(Ce=i.RG8UI),re===i.UNSIGNED_SHORT&&(Ce=i.RG16UI),re===i.UNSIGNED_INT&&(Ce=i.RG32UI),re===i.BYTE&&(Ce=i.RG8I),re===i.SHORT&&(Ce=i.RG16I),re===i.INT&&(Ce=i.RG32I)),A===i.RGB_INTEGER&&(re===i.UNSIGNED_BYTE&&(Ce=i.RGB8UI),re===i.UNSIGNED_SHORT&&(Ce=i.RGB16UI),re===i.UNSIGNED_INT&&(Ce=i.RGB32UI),re===i.BYTE&&(Ce=i.RGB8I),re===i.SHORT&&(Ce=i.RGB16I),re===i.INT&&(Ce=i.RGB32I)),A===i.RGBA_INTEGER&&(re===i.UNSIGNED_BYTE&&(Ce=i.RGBA8UI),re===i.UNSIGNED_SHORT&&(Ce=i.RGBA16UI),re===i.UNSIGNED_INT&&(Ce=i.RGBA32UI),re===i.BYTE&&(Ce=i.RGBA8I),re===i.SHORT&&(Ce=i.RGBA16I),re===i.INT&&(Ce=i.RGBA32I)),A===i.RGB&&re===i.UNSIGNED_INT_5_9_9_9_REV&&(Ce=i.RGB9_E5),A===i.RGBA){let Ze=Pe?Oc:Jt.getTransfer(Se);re===i.FLOAT&&(Ce=i.RGBA32F),re===i.HALF_FLOAT&&(Ce=i.RGBA16F),re===i.UNSIGNED_BYTE&&(Ce=Ze===ln?i.SRGB8_ALPHA8:i.RGBA8),re===i.UNSIGNED_SHORT_4_4_4_4&&(Ce=i.RGBA4),re===i.UNSIGNED_SHORT_5_5_5_1&&(Ce=i.RGB5_A1)}return(Ce===i.R16F||Ce===i.R32F||Ce===i.RG16F||Ce===i.RG32F||Ce===i.RGBA16F||Ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function x(U,A){let re;return U?A===null||A===Ms||A===uo?re=i.DEPTH24_STENCIL8:A===ar?re=i.DEPTH32F_STENCIL8:A===fa&&(re=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ms||A===uo?re=i.DEPTH_COMPONENT24:A===ar?re=i.DEPTH_COMPONENT32F:A===fa&&(re=i.DEPTH_COMPONENT16),re}function E(U,A){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==di&&U.minFilter!==pn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function R(U){let A=U.target;A.removeEventListener("dispose",R),T(A),A.isVideoTexture&&h.delete(A)}function b(U){let A=U.target;A.removeEventListener("dispose",b),O(A)}function T(U){let A=n.get(U);if(A.__webglInit===void 0)return;let re=U.source,Se=u.get(re);if(Se){let Pe=Se[A.__cacheKey];Pe.usedTimes--,Pe.usedTimes===0&&I(U),Object.keys(Se).length===0&&u.delete(re)}n.remove(U)}function I(U){let A=n.get(U);i.deleteTexture(A.__webglTexture);let re=U.source,Se=u.get(re);delete Se[A.__cacheKey],o.memory.textures--}function O(U){let A=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let Pe=0;Pe<A.__webglFramebuffer[Se].length;Pe++)i.deleteFramebuffer(A.__webglFramebuffer[Se][Pe]);else i.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)i.deleteFramebuffer(A.__webglFramebuffer[Se]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let re=U.textures;for(let Se=0,Pe=re.length;Se<Pe;Se++){let Ce=n.get(re[Se]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),o.memory.textures--),n.remove(re[Se])}n.remove(U)}let v=0;function S(){v=0}function H(){let U=v;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),v+=1,U}function G(U){let A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function Y(U,A){let re=n.get(U);if(U.isVideoTexture&&Ee(U),U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){let Se=U.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(re,U,A);return}}t.bindTexture(i.TEXTURE_2D,re.__webglTexture,i.TEXTURE0+A)}function j(U,A){let re=n.get(U);if(U.version>0&&re.__version!==U.version){oe(re,U,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,re.__webglTexture,i.TEXTURE0+A)}function W(U,A){let re=n.get(U);if(U.version>0&&re.__version!==U.version){oe(re,U,A);return}t.bindTexture(i.TEXTURE_3D,re.__webglTexture,i.TEXTURE0+A)}function F(U,A){let re=n.get(U);if(U.version>0&&re.__version!==U.version){k(re,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture,i.TEXTURE0+A)}let se={[vs]:i.REPEAT,[ys]:i.CLAMP_TO_EDGE,[uu]:i.MIRRORED_REPEAT},le={[di]:i.NEAREST,[sx]:i.NEAREST_MIPMAP_NEAREST,[nc]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Mh]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},N={[cx]:i.NEVER,[px]:i.ALWAYS,[lx]:i.LESS,[E0]:i.LEQUAL,[hx]:i.EQUAL,[fx]:i.GEQUAL,[ux]:i.GREATER,[dx]:i.NOTEQUAL};function ee(U,A){if(A.type===ar&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===pn||A.magFilter===Mh||A.magFilter===nc||A.magFilter===Ji||A.minFilter===pn||A.minFilter===Mh||A.minFilter===nc||A.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,se[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,se[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,se[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,le[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,le[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===di||A.minFilter!==nc&&A.minFilter!==Ji||A.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Q(U,A){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",R));let Se=A.source,Pe=u.get(Se);Pe===void 0&&(Pe={},u.set(Se,Pe));let Ce=G(A);if(Ce!==U.__cacheKey){Pe[Ce]===void 0&&(Pe[Ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,re=!0),Pe[Ce].usedTimes++;let Ze=Pe[U.__cacheKey];Ze!==void 0&&(Pe[U.__cacheKey].usedTimes--,Ze.usedTimes===0&&I(A)),U.__cacheKey=Ce,U.__webglTexture=Pe[Ce].texture}return re}function oe(U,A,re){let Se=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=i.TEXTURE_3D);let Pe=Q(U,A),Ce=A.source;t.bindTexture(Se,U.__webglTexture,i.TEXTURE0+re);let Ze=n.get(Ce);if(Ce.version!==Ze.__version||Pe===!0){t.activeTexture(i.TEXTURE0+re);let be=Jt.getPrimaries(Jt.workingColorSpace),Ne=A.colorSpace===Vr?null:Jt.getPrimaries(A.colorSpace),Je=A.colorSpace===Vr||be===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Le=y(A.image,!1,r.maxTextureSize);Le=De(A,Le);let J=s.convert(A.format,A.colorSpace),me=s.convert(A.type),Me=M(A.internalFormat,J,me,A.colorSpace,A.isVideoTexture);ee(Se,A);let ge,xe=A.mipmaps,ae=A.isVideoTexture!==!0,Be=Ze.__version===void 0||Pe===!0,$=Ce.dataReady,Re=E(A,Le);if(A.isDepthTexture)Me=x(A.format===fo,A.type),Be&&(ae?t.texStorage2D(i.TEXTURE_2D,1,Me,Le.width,Le.height):t.texImage2D(i.TEXTURE_2D,0,Me,Le.width,Le.height,0,J,me,null));else if(A.isDataTexture)if(xe.length>0){ae&&Be&&t.texStorage2D(i.TEXTURE_2D,Re,Me,xe[0].width,xe[0].height);for(let ce=0,Te=xe.length;ce<Te;ce++)ge=xe[ce],ae?$&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ge.width,ge.height,J,me,ge.data):t.texImage2D(i.TEXTURE_2D,ce,Me,ge.width,ge.height,0,J,me,ge.data);A.generateMipmaps=!1}else ae?(Be&&t.texStorage2D(i.TEXTURE_2D,Re,Me,Le.width,Le.height),$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le.width,Le.height,J,me,Le.data)):t.texImage2D(i.TEXTURE_2D,0,Me,Le.width,Le.height,0,J,me,Le.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Me,xe[0].width,xe[0].height,Le.depth);for(let ce=0,Te=xe.length;ce<Te;ce++)if(ge=xe[ce],A.format!==Ei)if(J!==null)if(ae){if($)if(A.layerUpdates.size>0){let ze=Yp(ge.width,ge.height,A.format,A.type);for(let Ge of A.layerUpdates){let ht=ge.data.subarray(Ge*ze/ge.data.BYTES_PER_ELEMENT,(Ge+1)*ze/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Ge,ge.width,ge.height,1,J,ht,0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,Le.depth,J,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Me,ge.width,ge.height,Le.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,Le.depth,J,me,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Me,ge.width,ge.height,Le.depth,0,J,me,ge.data)}else{ae&&Be&&t.texStorage2D(i.TEXTURE_2D,Re,Me,xe[0].width,xe[0].height);for(let ce=0,Te=xe.length;ce<Te;ce++)ge=xe[ce],A.format!==Ei?J!==null?ae?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ge.width,ge.height,J,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?$&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ge.width,ge.height,J,me,ge.data):t.texImage2D(i.TEXTURE_2D,ce,Me,ge.width,ge.height,0,J,me,ge.data)}else if(A.isDataArrayTexture)if(ae){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Me,Le.width,Le.height,Le.depth),$)if(A.layerUpdates.size>0){let ce=Yp(Le.width,Le.height,A.format,A.type);for(let Te of A.layerUpdates){let ze=Le.data.subarray(Te*ce/Le.data.BYTES_PER_ELEMENT,(Te+1)*ce/Le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,Le.width,Le.height,1,J,me,ze)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Le.width,Le.height,Le.depth,J,me,Le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,Le.width,Le.height,Le.depth,0,J,me,Le.data);else if(A.isData3DTexture)ae?(Be&&t.texStorage3D(i.TEXTURE_3D,Re,Me,Le.width,Le.height,Le.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Le.width,Le.height,Le.depth,J,me,Le.data)):t.texImage3D(i.TEXTURE_3D,0,Me,Le.width,Le.height,Le.depth,0,J,me,Le.data);else if(A.isFramebufferTexture){if(Be)if(ae)t.texStorage2D(i.TEXTURE_2D,Re,Me,Le.width,Le.height);else{let ce=Le.width,Te=Le.height;for(let ze=0;ze<Re;ze++)t.texImage2D(i.TEXTURE_2D,ze,Me,ce,Te,0,J,me,null),ce>>=1,Te>>=1}}else if(xe.length>0){if(ae&&Be){let ce=Ae(xe[0]);t.texStorage2D(i.TEXTURE_2D,Re,Me,ce.width,ce.height)}for(let ce=0,Te=xe.length;ce<Te;ce++)ge=xe[ce],ae?$&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,J,me,ge):t.texImage2D(i.TEXTURE_2D,ce,Me,J,me,ge);A.generateMipmaps=!1}else if(ae){if(Be){let ce=Ae(Le);t.texStorage2D(i.TEXTURE_2D,Re,Me,ce.width,ce.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,me,Le)}else t.texImage2D(i.TEXTURE_2D,0,Me,J,me,Le);p(A)&&d(Se),Ze.__version=Ce.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function k(U,A,re){if(A.image.length!==6)return;let Se=Q(U,A),Pe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+re);let Ce=n.get(Pe);if(Pe.version!==Ce.__version||Se===!0){t.activeTexture(i.TEXTURE0+re);let Ze=Jt.getPrimaries(Jt.workingColorSpace),be=A.colorSpace===Vr?null:Jt.getPrimaries(A.colorSpace),Ne=A.colorSpace===Vr||Ze===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Je=A.isCompressedTexture||A.image[0].isCompressedTexture,Le=A.image[0]&&A.image[0].isDataTexture,J=[];for(let Te=0;Te<6;Te++)!Je&&!Le?J[Te]=y(A.image[Te],!0,r.maxCubemapSize):J[Te]=Le?A.image[Te].image:A.image[Te],J[Te]=De(A,J[Te]);let me=J[0],Me=s.convert(A.format,A.colorSpace),ge=s.convert(A.type),xe=M(A.internalFormat,Me,ge,A.colorSpace),ae=A.isVideoTexture!==!0,Be=Ce.__version===void 0||Se===!0,$=Pe.dataReady,Re=E(A,me);ee(i.TEXTURE_CUBE_MAP,A);let ce;if(Je){ae&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,xe,me.width,me.height);for(let Te=0;Te<6;Te++){ce=J[Te].mipmaps;for(let ze=0;ze<ce.length;ze++){let Ge=ce[ze];A.format!==Ei?Me!==null?ae?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze,0,0,Ge.width,Ge.height,Me,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze,xe,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze,0,0,Ge.width,Ge.height,Me,ge,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze,xe,Ge.width,Ge.height,0,Me,ge,Ge.data)}}}else{if(ce=A.mipmaps,ae&&Be){ce.length>0&&Re++;let Te=Ae(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,xe,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Le){ae?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,J[Te].width,J[Te].height,Me,ge,J[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,xe,J[Te].width,J[Te].height,0,Me,ge,J[Te].data);for(let ze=0;ze<ce.length;ze++){let ht=ce[ze].image[Te].image;ae?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze+1,0,0,ht.width,ht.height,Me,ge,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze+1,xe,ht.width,ht.height,0,Me,ge,ht.data)}}else{ae?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Me,ge,J[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,xe,Me,ge,J[Te]);for(let ze=0;ze<ce.length;ze++){let Ge=ce[ze];ae?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze+1,0,0,Me,ge,Ge.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze+1,xe,Me,ge,Ge.image[Te])}}}p(A)&&d(i.TEXTURE_CUBE_MAP),Ce.__version=Pe.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ne(U,A,re,Se,Pe,Ce){let Ze=s.convert(re.format,re.colorSpace),be=s.convert(re.type),Ne=M(re.internalFormat,Ze,be,re.colorSpace);if(!n.get(A).__hasExternalTextures){let Le=Math.max(1,A.width>>Ce),J=Math.max(1,A.height>>Ce);Pe===i.TEXTURE_3D||Pe===i.TEXTURE_2D_ARRAY?t.texImage3D(Pe,Ce,Ne,Le,J,A.depth,0,Ze,be,null):t.texImage2D(Pe,Ce,Ne,Le,J,0,Ze,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ye(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,Pe,n.get(re).__webglTexture,0,_e(A)):(Pe===i.TEXTURE_2D||Pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,Pe,n.get(re).__webglTexture,Ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function B(U,A,re){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){let Se=A.depthTexture,Pe=Se&&Se.isDepthTexture?Se.type:null,Ce=x(A.stencilBuffer,Pe),Ze=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=_e(A);ye(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Ce,A.width,A.height):re?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Ce,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ze,i.RENDERBUFFER,U)}else{let Se=A.textures;for(let Pe=0;Pe<Se.length;Pe++){let Ce=Se[Pe],Ze=s.convert(Ce.format,Ce.colorSpace),be=s.convert(Ce.type),Ne=M(Ce.internalFormat,Ze,be,Ce.colorSpace),Je=_e(A);re&&ye(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ne,A.width,A.height):ye(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,Ne,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function z(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y(A.depthTexture,0);let Se=n.get(A.depthTexture).__webglTexture,Pe=_e(A);if(A.depthTexture.format===so)ye(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(A.depthTexture.format===fo)ye(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function V(U){let A=n.get(U),re=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){let Se=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){let Pe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",Pe)};Se.addEventListener("dispose",Pe),A.__depthDisposeCallback=Pe}A.__boundDepthTexture=Se}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");z(A.__webglFramebuffer,U)}else if(re){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=i.createRenderbuffer(),B(A.__webglDepthbuffer[Se],U,!1);else{let Pe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=A.__webglDepthbuffer[Se];i.bindRenderbuffer(i.RENDERBUFFER,Ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,Ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),B(A.__webglDepthbuffer,U,!1);else{let Se=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,Pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(U,A,re){let Se=n.get(U);A!==void 0&&ne(Se.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),re!==void 0&&V(U)}function we(U){let A=U.texture,re=n.get(U),Se=n.get(A);U.addEventListener("dispose",b);let Pe=U.textures,Ce=U.isWebGLCubeRenderTarget===!0,Ze=Pe.length>1;if(Ze||(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=A.version,o.memory.textures++),Ce){re.__webglFramebuffer=[];for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[be]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)re.__webglFramebuffer[be][Ne]=i.createFramebuffer()}else re.__webglFramebuffer[be]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let be=0;be<A.mipmaps.length;be++)re.__webglFramebuffer[be]=i.createFramebuffer()}else re.__webglFramebuffer=i.createFramebuffer();if(Ze)for(let be=0,Ne=Pe.length;be<Ne;be++){let Je=n.get(Pe[be]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&ye(U)===!1){re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let be=0;be<Pe.length;be++){let Ne=Pe[be];re.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,re.__webglColorRenderbuffer[be]);let Je=s.convert(Ne.format,Ne.colorSpace),Le=s.convert(Ne.type),J=M(Ne.internalFormat,Je,Le,Ne.colorSpace,U.isXRRenderTarget===!0),me=_e(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,J,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,re.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),B(re.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),ee(i.TEXTURE_CUBE_MAP,A);for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ne(re.__webglFramebuffer[be][Ne],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne);else ne(re.__webglFramebuffer[be],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);p(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let be=0,Ne=Pe.length;be<Ne;be++){let Je=Pe[be],Le=n.get(Je);t.bindTexture(i.TEXTURE_2D,Le.__webglTexture),ee(i.TEXTURE_2D,Je),ne(re.__webglFramebuffer,U,Je,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),p(Je)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Se.__webglTexture),ee(be,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ne(re.__webglFramebuffer[Ne],U,A,i.COLOR_ATTACHMENT0,be,Ne);else ne(re.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,be,0);p(A)&&d(be),t.unbindTexture()}U.depthBuffer&&V(U)}function Ue(U){let A=U.textures;for(let re=0,Se=A.length;re<Se;re++){let Pe=A[re];if(p(Pe)){let Ce=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ze=n.get(Pe).__webglTexture;t.bindTexture(Ce,Ze),d(Ce),t.unbindTexture()}}}let K=[],L=[];function fe(U){if(U.samples>0){if(ye(U)===!1){let A=U.textures,re=U.width,Se=U.height,Pe=i.COLOR_BUFFER_BIT,Ce=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ze=n.get(U),be=A.length>1;if(be)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Pe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Pe|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ne]);let Je=n.get(A[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,re,Se,0,0,re,Se,Pe,i.NEAREST),l===!0&&(K.length=0,L.length=0,K.push(i.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(K.push(Ce),L.push(Ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ne]);let Je=n.get(A[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function _e(U){return Math.min(r.maxSamples,U.samples)}function ye(U){let A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ee(U){let A=o.render.frame;h.get(U)!==A&&(h.set(U,A),U.update())}function De(U,A){let re=U.colorSpace,Se=U.format,Pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||re!==Qr&&re!==Vr&&(Jt.getTransfer(re)===ln?(Se!==Ei||Pe!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}function Ae(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=S,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=ue,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ye}function E_(i,e){function t(n,r=Vr){let s,o=Jt.getTransfer(r);if(n===Sr)return i.UNSIGNED_BYTE;if(n===Sd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Td)return i.UNSIGNED_SHORT_5_5_5_1;if(n===m0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===f0)return i.BYTE;if(n===p0)return i.SHORT;if(n===fa)return i.UNSIGNED_SHORT;if(n===wd)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===ar)return i.FLOAT;if(n===Ra)return i.HALF_FLOAT;if(n===g0)return i.ALPHA;if(n===x0)return i.RGB;if(n===Ei)return i.RGBA;if(n===y0)return i.LUMINANCE;if(n===v0)return i.LUMINANCE_ALPHA;if(n===so)return i.DEPTH_COMPONENT;if(n===fo)return i.DEPTH_STENCIL;if(n===Rd)return i.RED;if(n===Ad)return i.RED_INTEGER;if(n===M0)return i.RG;if(n===Cd)return i.RG_INTEGER;if(n===Pd)return i.RGBA_INTEGER;if(n===Pc||n===Ic||n===Lc||n===Dc)if(o===ln)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===du||n===fu||n===pu||n===mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===du)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===xu||n===yu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gu||n===xu)return o===ln?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vu||n===Mu||n===_u||n===Eu||n===bu||n===wu||n===Su||n===Tu||n===Ru||n===Au||n===Cu||n===Pu||n===Iu||n===Lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Su)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ru)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Au)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Iu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lu)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===Du||n===Uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Uc)return o===ln?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_0||n===Hu||n===Nu||n===Fu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===uo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ju=class extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ve=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},b_={type:"move"},la=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`,Qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new ai,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Di({vertexShader:w_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new _t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ju=class extends Yr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,g=null,y=new Qu,p=t.getContextAttributes(),d=null,M=null,x=[],E=[],R=new ke,b=null,T=new Xn;T.layers.enable(1),T.viewport=new nn;let I=new Xn;I.layers.enable(2),I.viewport=new nn;let O=[T,I],v=new Ju;v.layers.enable(1),v.layers.enable(2);let S=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ne=x[k];return ne===void 0&&(ne=new la,x[k]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(k){let ne=x[k];return ne===void 0&&(ne=new la,x[k]=ne),ne.getGripSpace()},this.getHand=function(k){let ne=x[k];return ne===void 0&&(ne=new la,x[k]=ne),ne.getHandSpace()};function G(k){let ne=E.indexOf(k.inputSource);if(ne===-1)return;let B=x[ne];B!==void 0&&(B.update(k.inputSource,k.frame,c||o),B.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let k=0;k<x.length;k++){let ne=E[k];ne!==null&&(E[k]=null,x[k].disconnect(ne))}S=null,H=null,y.reset(),e.setRenderTarget(d),m=null,u=null,f=null,r=null,M=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Tr(m.framebufferWidth,m.framebufferHeight,{format:Ei,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,B=null,z=null;p.depth&&(z=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?fo:so,B=p.stencil?uo:Ms);let V={colorFormat:t.RGBA8,depthFormat:z,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(V),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Tr(u.textureWidth,u.textureHeight,{format:Ei,type:Sr,depthTexture:new Zc(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(k){for(let ne=0;ne<k.removed.length;ne++){let B=k.removed[ne],z=E.indexOf(B);z>=0&&(E[z]=null,x[z].disconnect(B))}for(let ne=0;ne<k.added.length;ne++){let B=k.added[ne],z=E.indexOf(B);if(z===-1){for(let ue=0;ue<x.length;ue++)if(ue>=E.length){E.push(B),z=ue;break}else if(E[ue]===null){E[ue]=B,z=ue;break}if(z===-1)break}let V=x[z];V&&V.connect(B)}}let W=new w,F=new w;function se(k,ne,B){W.setFromMatrixPosition(ne.matrixWorld),F.setFromMatrixPosition(B.matrixWorld);let z=W.distanceTo(F),V=ne.projectionMatrix.elements,ue=B.projectionMatrix.elements,we=V[14]/(V[10]-1),Ue=V[14]/(V[10]+1),K=(V[9]+1)/V[5],L=(V[9]-1)/V[5],fe=(V[8]-1)/V[0],_e=(ue[8]+1)/ue[0],ye=we*fe,Ee=we*_e,De=z/(-fe+_e),Ae=De*-fe;if(ne.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ae),k.translateZ(De),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),V[10]===-1)k.projectionMatrix.copy(ne.projectionMatrix),k.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let U=we+De,A=Ue+De,re=ye-Ae,Se=Ee+(z-Ae),Pe=K*Ue/A*U,Ce=L*Ue/A*U;k.projectionMatrix.makePerspective(re,Se,Pe,Ce,U,A),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function le(k,ne){ne===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ne.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let ne=k.near,B=k.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(B=y.depthFar)),v.near=I.near=T.near=ne,v.far=I.far=T.far=B,(S!==v.near||H!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,H=v.far);let z=k.parent,V=v.cameras;le(v,z);for(let ue=0;ue<V.length;ue++)le(V[ue],z);V.length===2?se(v,T,I):v.projectionMatrix.copy(T.projectionMatrix),N(k,v,z)};function N(k,ne,B){B===null?k.matrix.copy(ne.matrixWorld):(k.matrix.copy(B.matrixWorld),k.matrix.invert(),k.matrix.multiply(ne.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ne.projectionMatrix),k.projectionMatrixInverse.copy(ne.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=po*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let ee=null;function Q(k,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){let B=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let z=!1;B.length!==v.cameras.length&&(v.cameras.length=0,z=!0);for(let ue=0;ue<B.length;ue++){let we=B[ue],Ue=null;if(m!==null)Ue=m.getViewport(we);else{let L=f.getViewSubImage(u,we);Ue=L.viewport,ue===0&&(e.setRenderTargetTextures(M,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(M))}let K=O[ue];K===void 0&&(K=new Xn,K.layers.enable(ue),K.viewport=new nn,O[ue]=K),K.matrix.fromArray(we.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(we.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ue===0&&(v.matrix.copy(K.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),z===!0&&v.cameras.push(K)}let V=r.enabledFeatures;if(V&&V.includes("depth-sensing")){let ue=f.getDepthInformation(B[0]);ue&&ue.isValid&&ue.texture&&y.init(e,ue,r.renderState)}}for(let B=0;B<x.length;B++){let z=E[B],V=x[B];z!==null&&V!==void 0&&V.update(z,ne,c||o)}ee&&ee(k,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let oe=new T0;oe.setAnimationLoop(Q),this.setAnimationLoop=function(k){ee=k},this.dispose=function(){}}},fs=new ci,T_=new It;function R_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,S0(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,M,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Tn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Tn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d),x=M.envMap,E=M.envMapRotation;x&&(p.envMap.value=x,fs.copy(E),fs.x*=-1,fs.y*=-1,fs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),p.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(fs)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function A_(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let E=x.program;n.uniformBlockBinding(M,E)}function c(M,x){let E=r[M.id];E===void 0&&(g(M),E=h(M),r[M.id]=E,M.addEventListener("dispose",p));let R=x.program;n.updateUBOMapping(M,R);let b=e.render.frame;s[M.id]!==b&&(u(M),s[M.id]=b)}function h(M){let x=f();M.__bindingPointIndex=x;let E=i.createBuffer(),R=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let x=r[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,T=E.length;b<T;b++){let I=Array.isArray(E[b])?E[b]:[E[b]];for(let O=0,v=I.length;O<v;O++){let S=I[O];if(m(S,b,O,R)===!0){let H=S.__offset,G=Array.isArray(S.value)?S.value:[S.value],Y=0;for(let j=0;j<G.length;j++){let W=G[j],F=y(W);typeof W=="number"||typeof W=="boolean"?(S.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+Y,S.__data)):W.isMatrix3?(S.__data[0]=W.elements[0],S.__data[1]=W.elements[1],S.__data[2]=W.elements[2],S.__data[3]=0,S.__data[4]=W.elements[3],S.__data[5]=W.elements[4],S.__data[6]=W.elements[5],S.__data[7]=0,S.__data[8]=W.elements[6],S.__data[9]=W.elements[7],S.__data[10]=W.elements[8],S.__data[11]=0):(W.toArray(S.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,E,R){let b=M.value,T=x+"_"+E;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{let I=R[T];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return R[T]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(M){let x=M.uniforms,E=0,R=16;for(let T=0,I=x.length;T<I;T++){let O=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,S=O.length;v<S;v++){let H=O[v],G=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,j=G.length;Y<j;Y++){let W=G[Y],F=y(W),se=E%R,le=se%F.boundary,N=se+le;E+=le,N!==0&&R-N<F.storage&&(E+=R-N),H.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=F.storage}}}let b=E%R;return b>0&&(E+=R-b),M.__size=E,M.__cache={},this}function y(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(let M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var Kc=class{constructor(e={}){let{canvas:t=Ix(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=Xr,this.toneMappingExposure=1;let x=this,E=!1,R=0,b=0,T=null,I=-1,O=null,v=new nn,S=new nn,H=null,G=new pt(0),Y=0,j=t.width,W=t.height,F=1,se=null,le=null,N=new nn(0,0,j,W),ee=new nn(0,0,j,W),Q=!1,oe=new xa,k=!1,ne=!1,B=new It,z=new It,V=new w,ue=new nn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function K(){return T===null?F:1}let L=n;function fe(P,te){return t.getContext(P,te)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),L===null){let te="webgl2";if(L=fe(te,P),L===null)throw fe(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let _e,ye,Ee,De,Ae,U,A,re,Se,Pe,Ce,Ze,be,Ne,Je,Le,J,me,Me,ge,xe,ae,Be,$;function Re(){_e=new W2(L),_e.init(),ae=new E_(L,_e),ye=new O2(L,_e,e,ae),Ee=new v_(L),ye.reverseDepthBuffer&&Ee.buffers.depth.setReversed(!0),De=new Y2(L),Ae=new o_,U=new __(L,_e,Ee,Ae,ye,ae,De),A=new B2(x),re=new G2(x),Se=new ey(L),Be=new N2(L,Se),Pe=new X2(L,Se,De,Be),Ce=new Z2(L,Pe,Se,De),Me=new $2(L,ye,U),Le=new z2(Ae),Ze=new s_(x,A,re,_e,ye,Be,Le),be=new R_(x,Ae),Ne=new c_,Je=new p_(_e),me=new H2(x,A,re,Ee,Ce,u,l),J=new x_(x,Ce,ye),$=new A_(L,De,ye,Ee),ge=new F2(L,_e,De),xe=new q2(L,_e,De),De.programs=Ze.programs,x.capabilities=ye,x.extensions=_e,x.properties=Ae,x.renderLists=Ne,x.shadowMap=J,x.state=Ee,x.info=De}Re();let ce=new ju(x,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let P=_e.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=_e.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(j,W,!1))},this.getSize=function(P){return P.set(j,W)},this.setSize=function(P,te,he=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=P,W=te,t.width=Math.floor(P*F),t.height=Math.floor(te*F),he===!0&&(t.style.width=P+"px",t.style.height=te+"px"),this.setViewport(0,0,P,te)},this.getDrawingBufferSize=function(P){return P.set(j*F,W*F).floor()},this.setDrawingBufferSize=function(P,te,he){j=P,W=te,F=he,t.width=Math.floor(P*he),t.height=Math.floor(te*he),this.setViewport(0,0,P,te)},this.getCurrentViewport=function(P){return P.copy(v)},this.getViewport=function(P){return P.copy(N)},this.setViewport=function(P,te,he,de){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,te,he,de),Ee.viewport(v.copy(N).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(ee)},this.setScissor=function(P,te,he,de){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,te,he,de),Ee.scissor(S.copy(ee).multiplyScalar(F).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(P){Ee.setScissorTest(Q=P)},this.setOpaqueSort=function(P){se=P},this.setTransparentSort=function(P){le=P},this.getClearColor=function(P){return P.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(P=!0,te=!0,he=!0){let de=0;if(P){let ie=!1;if(T!==null){let He=T.texture.format;ie=He===Pd||He===Cd||He===Ad}if(ie){let He=T.texture.type,We=He===Sr||He===Ms||He===fa||He===uo||He===Sd||He===Td,Xe=me.getClearColor(),et=me.getClearAlpha(),rt=Xe.r,ct=Xe.g,Qe=Xe.b;We?(m[0]=rt,m[1]=ct,m[2]=Qe,m[3]=et,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=rt,g[1]=ct,g[2]=Qe,g[3]=et,L.clearBufferiv(L.COLOR,0,g))}else de|=L.COLOR_BUFFER_BIT}te&&(de|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),he&&(de|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),Ne.dispose(),Je.dispose(),Ae.dispose(),A.dispose(),re.dispose(),Ce.dispose(),Be.dispose(),$.dispose(),Ze.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",vn),ce.removeEventListener("sessionend",gr),Ti.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let P=De.autoReset,te=J.enabled,he=J.autoUpdate,de=J.needsUpdate,ie=J.type;Re(),De.autoReset=P,J.enabled=te,J.autoUpdate=he,J.needsUpdate=de,J.type=ie}function Ge(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ht(P){let te=P.target;te.removeEventListener("dispose",ht),At(te)}function At(P){zt(P),Ae.remove(P)}function zt(P){let te=Ae.get(P).programs;te!==void 0&&(te.forEach(function(he){Ze.releaseProgram(he)}),P.isShaderMaterial&&Ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,te,he,de,ie,He){te===null&&(te=we);let We=ie.isMesh&&ie.matrixWorld.determinant()<0,Xe=yn(P,te,he,de,ie);Ee.setMaterial(de,We);let et=he.index,rt=1;if(de.wireframe===!0){if(et=Pe.getWireframeAttribute(he),et===void 0)return;rt=2}let ct=he.drawRange,Qe=he.attributes.position,Et=ct.start*rt,Ot=(ct.start+ct.count)*rt;He!==null&&(Et=Math.max(Et,He.start*rt),Ot=Math.min(Ot,(He.start+He.count)*rt)),et!==null?(Et=Math.max(Et,0),Ot=Math.min(Ot,et.count)):Qe!=null&&(Et=Math.max(Et,0),Ot=Math.min(Ot,Qe.count));let tn=Ot-Et;if(tn<0||tn===1/0)return;Be.setup(ie,de,Xe,he,et);let Xt,Ht=ge;if(et!==null&&(Xt=Se.get(et),Ht=xe,Ht.setIndex(Xt)),ie.isMesh)de.wireframe===!0?(Ee.setLineWidth(de.wireframeLinewidth*K()),Ht.setMode(L.LINES)):Ht.setMode(L.TRIANGLES);else if(ie.isLine){let st=de.linewidth;st===void 0&&(st=1),Ee.setLineWidth(st*K()),ie.isLineSegments?Ht.setMode(L.LINES):ie.isLineLoop?Ht.setMode(L.LINE_LOOP):Ht.setMode(L.LINE_STRIP)}else ie.isPoints?Ht.setMode(L.POINTS):ie.isSprite&&Ht.setMode(L.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)Ht.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let st=ie._multiDrawStarts,Zt=ie._multiDrawCounts,Fe=ie._multiDrawCount,xt=et?Se.get(et).bytesPerElement:1,Pn=Ae.get(de).currentProgram.getUniforms();for(let lt=0;lt<Fe;lt++)Pn.setValue(L,"_gl_DrawID",lt),Ht.render(st[lt]/xt,Zt[lt])}else if(ie.isInstancedMesh)Ht.renderInstances(Et,tn,ie.count);else if(he.isInstancedBufferGeometry){let st=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Zt=Math.min(he.instanceCount,st);Ht.renderInstances(Et,tn,Zt)}else Ht.render(Et,tn)};function Tt(P,te,he){P.transparent===!0&&P.side===Pt&&P.forceSinglePass===!1?(P.side=Tn,P.needsUpdate=!0,ft(P,te,he),P.side=jn,P.needsUpdate=!0,ft(P,te,he),P.side=Pt):ft(P,te,he)}this.compile=function(P,te,he=null){he===null&&(he=P),p=Je.get(he),p.init(te),M.push(p),he.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),P!==he&&P.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),p.setupLights();let de=new Set;return P.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let He=ie.material;if(He)if(Array.isArray(He))for(let We=0;We<He.length;We++){let Xe=He[We];Tt(Xe,he,ie),de.add(Xe)}else Tt(He,he,ie),de.add(He)}),M.pop(),p=null,de},this.compileAsync=function(P,te,he=null){let de=this.compile(P,te,he);return new Promise(ie=>{function He(){if(de.forEach(function(We){Ae.get(We).currentProgram.isReady()&&de.delete(We)}),de.size===0){ie(P);return}setTimeout(He,10)}_e.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Gt=null;function fn(P){Gt&&Gt(P)}function vn(){Ti.stop()}function gr(){Ti.start()}let Ti=new T0;Ti.setAnimationLoop(fn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(P){Gt=P,ce.setAnimationLoop(P),P===null?Ti.stop():Ti.start()},ce.addEventListener("sessionstart",vn),ce.addEventListener("sessionend",gr),this.render=function(P,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(te),te=ce.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,te,T),p=Je.get(P,M.length),p.init(te),M.push(p),z.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),oe.setFromProjectionMatrix(z),ne=this.localClippingEnabled,k=Le.init(this.clippingPlanes,ne),y=Ne.get(P,d.length),y.init(),d.push(y),ce.enabled===!0&&ce.isPresenting===!0){let He=x.xr.getDepthSensingMesh();He!==null&&Mn(He,te,-1/0,x.sortObjects)}Mn(P,te,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(se,le),Ue=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ue&&me.addToRenderList(y,P),this.info.render.frame++,k===!0&&Le.beginShadows();let he=p.state.shadowsArray;J.render(he,P,te),k===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();let de=y.opaque,ie=y.transmissive;if(p.setupLights(),te.isArrayCamera){let He=te.cameras;if(ie.length>0)for(let We=0,Xe=He.length;We<Xe;We++){let et=He[We];it(de,ie,P,et)}Ue&&me.render(P);for(let We=0,Xe=He.length;We<Xe;We++){let et=He[We];nt(y,P,et,et.viewport)}}else ie.length>0&&it(de,ie,P,te),Ue&&me.render(P),nt(y,P,te);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(x,P,te),Be.resetDefaultState(),I=-1,O=null,M.pop(),M.length>0?(p=M[M.length-1],k===!0&&Le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Mn(P,te,he,de){if(P.visible===!1)return;if(P.layers.test(te.layers)){if(P.isGroup)he=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(te);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||oe.intersectsSprite(P)){de&&ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(z);let We=Ce.update(P),Xe=P.material;Xe.visible&&y.push(P,We,Xe,he,ue.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||oe.intersectsObject(P))){let We=Ce.update(P),Xe=P.material;if(de&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ue.copy(P.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),ue.copy(We.boundingSphere.center)),ue.applyMatrix4(P.matrixWorld).applyMatrix4(z)),Array.isArray(Xe)){let et=We.groups;for(let rt=0,ct=et.length;rt<ct;rt++){let Qe=et[rt],Et=Xe[Qe.materialIndex];Et&&Et.visible&&y.push(P,We,Et,he,ue.z,Qe)}}else Xe.visible&&y.push(P,We,Xe,he,ue.z,null)}}let He=P.children;for(let We=0,Xe=He.length;We<Xe;We++)Mn(He[We],te,he,de)}function nt(P,te,he,de){let ie=P.opaque,He=P.transmissive,We=P.transparent;p.setupLightsView(he),k===!0&&Le.setGlobalState(x.clippingPlanes,he),de&&Ee.viewport(v.copy(de)),ie.length>0&&tt(ie,te,he),He.length>0&&tt(He,te,he),We.length>0&&tt(We,te,he),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function it(P,te,he,de){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[de.id]===void 0&&(p.state.transmissionRenderTarget[de.id]=new Tr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Ra:Sr,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let He=p.state.transmissionRenderTarget[de.id],We=de.viewport||v;He.setSize(We.z,We.w);let Xe=x.getRenderTarget();x.setRenderTarget(He),x.getClearColor(G),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Ue&&me.render(he);let et=x.toneMapping;x.toneMapping=Xr;let rt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),p.setupLightsView(de),k===!0&&Le.setGlobalState(x.clippingPlanes,de),tt(P,he,de),U.updateMultisampleRenderTarget(He),U.updateRenderTargetMipmap(He),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Qe=0,Et=te.length;Qe<Et;Qe++){let Ot=te[Qe],tn=Ot.object,Xt=Ot.geometry,Ht=Ot.material,st=Ot.group;if(Ht.side===Pt&&tn.layers.test(de.layers)){let Zt=Ht.side;Ht.side=Tn,Ht.needsUpdate=!0,at(tn,he,de,Xt,Ht,st),Ht.side=Zt,Ht.needsUpdate=!0,ct=!0}}ct===!0&&(U.updateMultisampleRenderTarget(He),U.updateRenderTargetMipmap(He))}x.setRenderTarget(Xe),x.setClearColor(G,Y),rt!==void 0&&(de.viewport=rt),x.toneMapping=et}function tt(P,te,he){let de=te.isScene===!0?te.overrideMaterial:null;for(let ie=0,He=P.length;ie<He;ie++){let We=P[ie],Xe=We.object,et=We.geometry,rt=de===null?We.material:de,ct=We.group;Xe.layers.test(he.layers)&&at(Xe,te,he,et,rt,ct)}}function at(P,te,he,de,ie,He){P.onBeforeRender(x,te,he,de,ie,He),P.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ie.onBeforeRender(x,te,he,de,P,He),ie.transparent===!0&&ie.side===Pt&&ie.forceSinglePass===!1?(ie.side=Tn,ie.needsUpdate=!0,x.renderBufferDirect(he,te,de,ie,P,He),ie.side=jn,ie.needsUpdate=!0,x.renderBufferDirect(he,te,de,ie,P,He),ie.side=Pt):x.renderBufferDirect(he,te,de,ie,P,He),P.onAfterRender(x,te,he,de,ie,He)}function ft(P,te,he){te.isScene!==!0&&(te=we);let de=Ae.get(P),ie=p.state.lights,He=p.state.shadowsArray,We=ie.state.version,Xe=Ze.getParameters(P,ie.state,He,te,he),et=Ze.getProgramCacheKey(Xe),rt=de.programs;de.environment=P.isMeshStandardMaterial?te.environment:null,de.fog=te.fog,de.envMap=(P.isMeshStandardMaterial?re:A).get(P.envMap||de.environment),de.envMapRotation=de.environment!==null&&P.envMap===null?te.environmentRotation:P.envMapRotation,rt===void 0&&(P.addEventListener("dispose",ht),rt=new Map,de.programs=rt);let ct=rt.get(et);if(ct!==void 0){if(de.currentProgram===ct&&de.lightsStateVersion===We)return Mt(P,Xe),ct}else Xe.uniforms=Ze.getUniforms(P),P.onBeforeCompile(Xe,x),ct=Ze.acquireProgram(Xe,et),rt.set(et,ct),de.uniforms=Xe.uniforms;let Qe=de.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=Le.uniform),Mt(P,Xe),de.needsLights=kt(P),de.lightsStateVersion=We,de.needsLights&&(Qe.ambientLightColor.value=ie.state.ambient,Qe.lightProbe.value=ie.state.probe,Qe.directionalLights.value=ie.state.directional,Qe.directionalLightShadows.value=ie.state.directionalShadow,Qe.spotLights.value=ie.state.spot,Qe.spotLightShadows.value=ie.state.spotShadow,Qe.rectAreaLights.value=ie.state.rectArea,Qe.ltc_1.value=ie.state.rectAreaLTC1,Qe.ltc_2.value=ie.state.rectAreaLTC2,Qe.pointLights.value=ie.state.point,Qe.pointLightShadows.value=ie.state.pointShadow,Qe.hemisphereLights.value=ie.state.hemi,Qe.directionalShadowMap.value=ie.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Qe.spotShadowMap.value=ie.state.spotShadowMap,Qe.spotLightMatrix.value=ie.state.spotLightMatrix,Qe.spotLightMap.value=ie.state.spotLightMap,Qe.pointShadowMap.value=ie.state.pointShadowMap,Qe.pointShadowMatrix.value=ie.state.pointShadowMatrix),de.currentProgram=ct,de.uniformsList=null,ct}function Ve(P){if(P.uniformsList===null){let te=P.currentProgram.getUniforms();P.uniformsList=ao.seqWithValue(te.seq,P.uniforms)}return P.uniformsList}function Mt(P,te){let he=Ae.get(P);he.outputColorSpace=te.outputColorSpace,he.batching=te.batching,he.batchingColor=te.batchingColor,he.instancing=te.instancing,he.instancingColor=te.instancingColor,he.instancingMorph=te.instancingMorph,he.skinning=te.skinning,he.morphTargets=te.morphTargets,he.morphNormals=te.morphNormals,he.morphColors=te.morphColors,he.morphTargetsCount=te.morphTargetsCount,he.numClippingPlanes=te.numClippingPlanes,he.numIntersection=te.numClipIntersection,he.vertexAlphas=te.vertexAlphas,he.vertexTangents=te.vertexTangents,he.toneMapping=te.toneMapping}function yn(P,te,he,de,ie){te.isScene!==!0&&(te=we),U.resetTextureUnits();let He=te.fog,We=de.isMeshStandardMaterial?te.environment:null,Xe=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qr,et=(de.isMeshStandardMaterial?re:A).get(de.envMap||We),rt=de.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ct=!!he.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Qe=!!he.morphAttributes.position,Et=!!he.morphAttributes.normal,Ot=!!he.morphAttributes.color,tn=Xr;de.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(tn=x.toneMapping);let Xt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Ht=Xt!==void 0?Xt.length:0,st=Ae.get(de),Zt=p.state.lights;if(k===!0&&(ne===!0||P!==O)){let Gn=P===O&&de.id===I;Le.setState(de,P,Gn)}let Fe=!1;de.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Zt.state.version||st.outputColorSpace!==Xe||ie.isBatchedMesh&&st.batching===!1||!ie.isBatchedMesh&&st.batching===!0||ie.isBatchedMesh&&st.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&st.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&st.instancing===!1||!ie.isInstancedMesh&&st.instancing===!0||ie.isSkinnedMesh&&st.skinning===!1||!ie.isSkinnedMesh&&st.skinning===!0||ie.isInstancedMesh&&st.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&st.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&st.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&st.instancingMorph===!1&&ie.morphTexture!==null||st.envMap!==et||de.fog===!0&&st.fog!==He||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Le.numPlanes||st.numIntersection!==Le.numIntersection)||st.vertexAlphas!==rt||st.vertexTangents!==ct||st.morphTargets!==Qe||st.morphNormals!==Et||st.morphColors!==Ot||st.toneMapping!==tn||st.morphTargetsCount!==Ht)&&(Fe=!0):(Fe=!0,st.__version=de.version);let xt=st.currentProgram;Fe===!0&&(xt=ft(de,te,ie));let Pn=!1,lt=!1,Ri=!1,on=xt.getUniforms(),Ai=st.uniforms;if(Ee.useProgram(xt.program)&&(Pn=!0,lt=!0,Ri=!0),de.id!==I&&(I=de.id,lt=!0),Pn||O!==P){ye.reverseDepthBuffer?(B.copy(P.projectionMatrix),Dx(B),Ux(B),on.setValue(L,"projectionMatrix",B)):on.setValue(L,"projectionMatrix",P.projectionMatrix),on.setValue(L,"viewMatrix",P.matrixWorldInverse);let Gn=on.map.cameraPosition;Gn!==void 0&&Gn.setValue(L,V.setFromMatrixPosition(P.matrixWorld)),ye.logarithmicDepthBuffer&&on.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&on.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),O!==P&&(O=P,lt=!0,Ri=!0)}if(ie.isSkinnedMesh){on.setOptional(L,ie,"bindMatrix"),on.setOptional(L,ie,"bindMatrixInverse");let Gn=ie.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),on.setValue(L,"boneTexture",Gn.boneTexture,U))}ie.isBatchedMesh&&(on.setOptional(L,ie,"batchingTexture"),on.setValue(L,"batchingTexture",ie._matricesTexture,U),on.setOptional(L,ie,"batchingIdTexture"),on.setValue(L,"batchingIdTexture",ie._indirectTexture,U),on.setOptional(L,ie,"batchingColorTexture"),ie._colorsTexture!==null&&on.setValue(L,"batchingColorTexture",ie._colorsTexture,U));let Bo=he.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0)&&Me.update(ie,he,xt),(lt||st.receiveShadow!==ie.receiveShadow)&&(st.receiveShadow=ie.receiveShadow,on.setValue(L,"receiveShadow",ie.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Ai.envMap.value=et,Ai.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&te.environment!==null&&(Ai.envMapIntensity.value=te.environmentIntensity),lt&&(on.setValue(L,"toneMappingExposure",x.toneMappingExposure),st.needsLights&&Wt(Ai,Ri),He&&de.fog===!0&&be.refreshFogUniforms(Ai,He),be.refreshMaterialUniforms(Ai,de,F,W,p.state.transmissionRenderTarget[P.id]),ao.upload(L,Ve(st),Ai,U)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(ao.upload(L,Ve(st),Ai,U),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&on.setValue(L,"center",ie.center),on.setValue(L,"modelViewMatrix",ie.modelViewMatrix),on.setValue(L,"normalMatrix",ie.normalMatrix),on.setValue(L,"modelMatrix",ie.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let Gn=de.uniformsGroups;for(let Hs=0,jl=Gn.length;Hs<jl;Hs++){let Ci=Gn[Hs];$.update(Ci,xt),$.bind(Ci,xt)}}return xt}function Wt(P,te){P.ambientLightColor.needsUpdate=te,P.lightProbe.needsUpdate=te,P.directionalLights.needsUpdate=te,P.directionalLightShadows.needsUpdate=te,P.pointLights.needsUpdate=te,P.pointLightShadows.needsUpdate=te,P.spotLights.needsUpdate=te,P.spotLightShadows.needsUpdate=te,P.rectAreaLights.needsUpdate=te,P.hemisphereLights.needsUpdate=te}function kt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,te,he){Ae.get(P.texture).__webglTexture=te,Ae.get(P.depthTexture).__webglTexture=he;let de=Ae.get(P);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=he===void 0,de.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,te){let he=Ae.get(P);he.__webglFramebuffer=te,he.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(P,te=0,he=0){T=P,R=te,b=he;let de=!0,ie=null,He=!1,We=!1;if(P){let et=Ae.get(P);if(et.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(L.FRAMEBUFFER,null),de=!1;else if(et.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(et.__hasExternalTextures)U.rebindTextures(P,Ae.get(P.texture).__webglTexture,Ae.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Qe=P.depthTexture;if(et.__boundDepthTexture!==Qe){if(Qe!==null&&Ae.has(Qe)&&(P.width!==Qe.image.width||P.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}let rt=P.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(We=!0);let ct=Ae.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ct[te])?ie=ct[te][he]:ie=ct[te],He=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?ie=Ae.get(P).__webglMultisampledFramebuffer:Array.isArray(ct)?ie=ct[he]:ie=ct,v.copy(P.viewport),S.copy(P.scissor),H=P.scissorTest}else v.copy(N).multiplyScalar(F).floor(),S.copy(ee).multiplyScalar(F).floor(),H=Q;if(Ee.bindFramebuffer(L.FRAMEBUFFER,ie)&&de&&Ee.drawBuffers(P,ie),Ee.viewport(v),Ee.scissor(S),Ee.setScissorTest(H),He){let et=Ae.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+te,et.__webglTexture,he)}else if(We){let et=Ae.get(P.texture),rt=te||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,et.__webglTexture,he||0,rt)}I=-1},this.readRenderTargetPixels=function(P,te,he,de,ie,He,We){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&We!==void 0&&(Xe=Xe[We]),Xe){Ee.bindFramebuffer(L.FRAMEBUFFER,Xe);try{let et=P.texture,rt=et.format,ct=et.type;if(!ye.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=P.width-de&&he>=0&&he<=P.height-ie&&L.readPixels(te,he,de,ie,ae.convert(rt),ae.convert(ct),He)}finally{let et=T!==null?Ae.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(P,te,he,de,ie,He,We){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&We!==void 0&&(Xe=Xe[We]),Xe){let et=P.texture,rt=et.format,ct=et.type;if(!ye.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(te>=0&&te<=P.width-de&&he>=0&&he<=P.height-ie){Ee.bindFramebuffer(L.FRAMEBUFFER,Xe);let Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,He.byteLength,L.STREAM_READ),L.readPixels(te,he,de,ie,ae.convert(rt),ae.convert(ct),0);let Et=T!==null?Ae.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Et);let Ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lx(L,Ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,He),L.deleteBuffer(Qe),L.deleteSync(Ot),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,te=null,he=0){P.isTexture!==!0&&(Hc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),te=arguments[0]||null,P=arguments[1]);let de=Math.pow(2,-he),ie=Math.floor(P.image.width*de),He=Math.floor(P.image.height*de),We=te!==null?te.x:0,Xe=te!==null?te.y:0;U.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,he,0,0,We,Xe,ie,He),Ee.unbindTexture()},this.copyTextureToTexture=function(P,te,he=null,de=null,ie=0){P.isTexture!==!0&&(Hc("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,P=arguments[1],te=arguments[2],ie=arguments[3]||0,he=null);let He,We,Xe,et,rt,ct;he!==null?(He=he.max.x-he.min.x,We=he.max.y-he.min.y,Xe=he.min.x,et=he.min.y):(He=P.image.width,We=P.image.height,Xe=0,et=0),de!==null?(rt=de.x,ct=de.y):(rt=0,ct=0);let Qe=ae.convert(te.format),Et=ae.convert(te.type);U.setTexture2D(te,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,te.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,te.unpackAlignment);let Ot=L.getParameter(L.UNPACK_ROW_LENGTH),tn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xt=L.getParameter(L.UNPACK_SKIP_PIXELS),Ht=L.getParameter(L.UNPACK_SKIP_ROWS),st=L.getParameter(L.UNPACK_SKIP_IMAGES),Zt=P.isCompressedTexture?P.mipmaps[ie]:P.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Zt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,rt,ct,He,We,Qe,Et,Zt.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,rt,ct,Zt.width,Zt.height,Qe,Zt.data):L.texSubImage2D(L.TEXTURE_2D,ie,rt,ct,He,We,Qe,Et,Zt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ot),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,st),ie===0&&te.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(P,te,he=null,de=null,ie=0){P.isTexture!==!0&&(Hc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),he=arguments[0]||null,de=arguments[1]||null,P=arguments[2],te=arguments[3],ie=arguments[4]||0);let He,We,Xe,et,rt,ct,Qe,Et,Ot,tn=P.isCompressedTexture?P.mipmaps[ie]:P.image;he!==null?(He=he.max.x-he.min.x,We=he.max.y-he.min.y,Xe=he.max.z-he.min.z,et=he.min.x,rt=he.min.y,ct=he.min.z):(He=tn.width,We=tn.height,Xe=tn.depth,et=0,rt=0,ct=0),de!==null?(Qe=de.x,Et=de.y,Ot=de.z):(Qe=0,Et=0,Ot=0);let Xt=ae.convert(te.format),Ht=ae.convert(te.type),st;if(te.isData3DTexture)U.setTexture3D(te,0),st=L.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)U.setTexture2DArray(te,0),st=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,te.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,te.unpackAlignment);let Zt=L.getParameter(L.UNPACK_ROW_LENGTH),Fe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xt=L.getParameter(L.UNPACK_SKIP_PIXELS),Pn=L.getParameter(L.UNPACK_SKIP_ROWS),lt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,tn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,et),L.pixelStorei(L.UNPACK_SKIP_ROWS,rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ct),P.isDataTexture||P.isData3DTexture?L.texSubImage3D(st,ie,Qe,Et,Ot,He,We,Xe,Xt,Ht,tn.data):te.isCompressedArrayTexture?L.compressedTexSubImage3D(st,ie,Qe,Et,Ot,He,We,Xe,Xt,tn.data):L.texSubImage3D(st,ie,Qe,Et,Ot,He,We,Xe,Xt,Ht,tn),L.pixelStorei(L.UNPACK_ROW_LENGTH,Zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Fe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,lt),ie===0&&te.generateMipmaps&&L.generateMipmap(st),Ee.unbindTexture()},this.initRenderTarget=function(P){Ae.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Ee.unbindTexture()},this.resetState=function(){R=0,b=0,T=null,Ee.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Dd?"display-p3":"srgb",t.unpackColorSpace=Jt.workingColorSpace===fl?"display-p3":"srgb"}};var Jc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qc=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var cr=class extends ai{constructor(e=null,t=1,n=1,r,s,o,a,l,c=di,h=di,f,u){super(null,o,a,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends rn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},to=new It,$p=new It,bc=[],Zp=new Rn,C_=new It,na=new ot,ia=new $r,hn=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,C_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,to),Zp.copy(e.boundingBox).applyMatrix4(to),this.boundingBox.union(Zp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $r),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,to),ia.copy(e.boundingSphere).applyMatrix4(to),this.boundingSphere.union(ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(n),e.ray.intersectsSphere(ia)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,to),$p.multiplyMatrices(n,to),na.matrixWorld=$p,na.raycast(e,bc);for(let o=0,a=bc.length;o<a;o++){let l=bc[o];l.instanceId=s,l.object=this,t.push(l)}bc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(r*this.count),r,this.count,Rd,ar));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ji=class extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},jc=new w,el=new w,Kp=new It,ra=new ma,wc=new $r,Zh=new w,Jp=new w,ed=class extends gt{constructor(e=new Rt,t=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)jc.fromBufferAttribute(t,r-1),el.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=jc.distanceTo(el);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(r),wc.radius+=s,e.ray.intersectsSphere(wc)===!1)return;Kp.copy(r).invert(),ra.copy(e.ray).applyMatrix4(Kp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=m,p=g-1;y<p;y+=c){let d=h.getX(y),M=h.getX(y+1),x=Sc(this,e,ra,l,d,M);x&&t.push(x)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(m),d=Sc(this,e,ra,l,y,p);d&&t.push(d)}}else{let m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=m,p=g-1;y<p;y+=c){let d=Sc(this,e,ra,l,y,y+1);d&&t.push(d)}if(this.isLineLoop){let y=Sc(this,e,ra,l,g-1,m);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Sc(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(jc.fromBufferAttribute(o,r),el.fromBufferAttribute(o,s),t.distanceSqToSegment(jc,el,Zh,Jp)>n)return;Zh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Zh);if(!(l<e.near||l>e.far))return{distance:l,point:Jp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Qp=new w,jp=new w,lr=class extends ed{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Qp.fromBufferAttribute(t,r),jp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qp.distanceTo(jp);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Nt=class extends ai{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],u=n[r+1]-h,m=(o-h)/u;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ke:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,r=[],s=[],o=[],a=new w,l=new It;for(let m=0;m<=e;m++){let g=m/e;r[m]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ln(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Ln(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},va=class extends ei{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ke){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*f+this.aX,c=u*f+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},td=class extends va{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nd(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,m*=h,r(o,a,u,m)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Tc=new w,Kh=new Nd,Jh=new Nd,Qh=new Nd,Yt=class extends ei{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new w){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Tc.subVectors(r[0],r[1]).add(r[0]),c=Tc);let f=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Tc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Tc),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Kh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,y,p),Jh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,y,p),Qh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Kh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Jh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Qh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Kh.calc(l),Jh.calc(l),Qh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function e0(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function P_(i,e){let t=1-i;return t*t*e}function I_(i,e){return 2*(1-i)*i*e}function L_(i,e){return i*i*e}function ha(i,e,t,n){return P_(i,e)+I_(i,t)+L_(i,n)}function D_(i,e){let t=1-i;return t*t*t*e}function U_(i,e){let t=1-i;return 3*t*t*i*e}function H_(i,e){return 3*(1-i)*i*i*e}function N_(i,e){return i*i*i*e}function ua(i,e,t,n,r){return D_(i,e)+U_(i,t)+H_(i,n)+N_(i,r)}var tl=class extends ei{constructor(e=new ke,t=new ke,n=new ke,r=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ke){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ua(e,r.x,s.x,o.x,a.x),ua(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends ei{constructor(e=new w,t=new w,n=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ua(e,r.x,s.x,o.x,a.x),ua(e,r.y,s.y,o.y,a.y),ua(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends ei{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nd=class extends ei{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends ei{constructor(e=new ke,t=new ke,n=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ke){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ha(e,r.x,s.x,o.x),ha(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends ei{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ha(e,r.x,s.x,o.x),ha(e,r.y,s.y,o.y),ha(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(e0(a,l.x,c.x,h.x,f.x),e0(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ke().fromArray(r))}return this}},ol=Object.freeze({__proto__:null,ArcCurve:td,CatmullRomCurve3:Yt,CubicBezierCurve:tl,CubicBezierCurve3:Ma,EllipseCurve:va,LineCurve:nl,LineCurve3:nd,QuadraticBezierCurve:il,QuadraticBezierCurve3:rl,SplineCurve:sl}),id=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new ol[r.type]().fromJSON(r))}return this}},li=class extends id{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new nl(this.currentPoint.clone(),new ke(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new il(this.currentPoint.clone(),new ke(e,t),new ke(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new tl(this.currentPoint.clone(),new ke(e,t),new ke(n,r),new ke(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new va(e,t,n,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zr=class i extends Rt{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ln(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/t,f=new w,u=new ke,m=new w,g=new w,y=new w,p=0,d=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,m.x=d*1,m.y=-p,m.z=d*0,y.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:p=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,m.x=d*1,m.y=-p,m.z=d*0,g.copy(m),m.x+=y.x,m.y+=y.y,m.z+=y.z,m.normalize(),l.push(m.x,m.y,m.z),y.copy(g)}for(let M=0;M<=t;M++){let x=n+M*h*r,E=Math.sin(x),R=Math.cos(x);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*E,f.y=e[b].y,f.z=e[b].x*R,o.push(f.x,f.y,f.z),u.x=M/t,u.y=b/(e.length-1),a.push(u.x,u.y);let T=l[3*b+0]*E,I=l[3*b+1],O=l[3*b+0]*R;c.push(T,I,O)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){let E=x+M*e.length,R=E,b=E+e.length,T=E+e.length+1,I=E+1;s.push(R,b,I),s.push(T,I,b)}this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ui=class i extends Rt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new w,h=new ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let m=n+f/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ut=class i extends Rt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],u=[],m=[],g=0,y=[],p=n/2,d=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(m,2));function M(){let E=new w,R=new w,b=0,T=(t-e)/n;for(let I=0;I<=s;I++){let O=[],v=I/s,S=v*(t-e)+e;for(let H=0;H<=r;H++){let G=H/r,Y=G*l+a,j=Math.sin(Y),W=Math.cos(Y);R.x=S*j,R.y=-v*n+p,R.z=S*W,f.push(R.x,R.y,R.z),E.set(j,T,W).normalize(),u.push(E.x,E.y,E.z),m.push(G,1-v),O.push(g++)}y.push(O)}for(let I=0;I<r;I++)for(let O=0;O<s;O++){let v=y[O][I],S=y[O+1][I],H=y[O+1][I+1],G=y[O][I+1];e>0&&(h.push(v,S,G),b+=3),t>0&&(h.push(S,H,G),b+=3)}c.addGroup(d,b,0),d+=b}function x(E){let R=g,b=new ke,T=new w,I=0,O=E===!0?e:t,v=E===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,p*v,0),u.push(0,v,0),m.push(.5,.5),g++;let S=g;for(let H=0;H<=r;H++){let Y=H/r*l+a,j=Math.cos(Y),W=Math.sin(Y);T.x=O*W,T.y=p*v,T.z=O*j,f.push(T.x,T.y,T.z),u.push(0,v,0),b.x=j*.5+.5,b.y=W*.5*v+.5,m.push(b.x,b.y),g++}for(let H=0;H<r;H++){let G=R+H,Y=S+H;E===!0?h.push(Y,Y+1,G):h.push(Y+1,Y,G),I+=3}c.addGroup(d,I,E===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class i extends Ut{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rd=class i extends Rt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new w,E=new w,R=new w;for(let b=0;b<t.length;b+=3)m(t[b+0],x),m(t[b+1],E),m(t[b+2],R),l(x,E,R,M)}function l(M,x,E,R){let b=R+1,T=[];for(let I=0;I<=b;I++){T[I]=[];let O=M.clone().lerp(E,I/b),v=x.clone().lerp(E,I/b),S=b-I;for(let H=0;H<=S;H++)H===0&&I===b?T[I][H]=O:T[I][H]=O.clone().lerp(v,H/S)}for(let I=0;I<b;I++)for(let O=0;O<2*(b-I)-1;O++){let v=Math.floor(O/2);O%2===0?(u(T[I][v+1]),u(T[I+1][v]),u(T[I][v])):(u(T[I][v+1]),u(T[I+1][v+1]),u(T[I+1][v]))}}function c(M){let x=new w;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(M),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function h(){let M=new w;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];let E=p(M)/2/Math.PI+.5,R=d(M)/Math.PI+.5;o.push(E,1-R)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){let x=o[M+0],E=o[M+2],R=o[M+4],b=Math.max(x,E,R),T=Math.min(x,E,R);b>.9&&T<.1&&(x<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function m(M,x){let E=M*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){let M=new w,x=new w,E=new w,R=new w,b=new ke,T=new ke,I=new ke;for(let O=0,v=0;O<s.length;O+=9,v+=6){M.set(s[O+0],s[O+1],s[O+2]),x.set(s[O+3],s[O+4],s[O+5]),E.set(s[O+6],s[O+7],s[O+8]),b.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),R.copy(M).add(x).add(E).divideScalar(3);let S=p(R);y(b,v+0,M,S),y(T,v+2,x,S),y(I,v+4,E,S)}}function y(M,x,E,R){R<0&&M.x===1&&(o[x]=M.x-1),E.x===0&&E.z===0&&(o[x]=R/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var St=class extends li{constructor(e){super(e),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new li().fromJSON(r))}return this}},F_={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=I0(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,u,m;if(n&&(s=V_(i,e,s,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<r;g+=t)f=i[g],u=i[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return _a(s,o,t,a,l,m,0),o}};function I0(i,e,t,n,r){let s,o;if(r===j_(i,e,t,n)>0)for(s=e;s<t;s+=n)o=t0(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=t0(s,i[s],i[s+1],o);return o&&ml(o,o.next)&&(ba(o),o=o.next),o}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ml(t,t.next)||mn(t.prev,t,t.next)===0)){if(ba(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _a(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Y_(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?z_(i,n,r,s):O_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ba(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=B_(_s(i),e,t),_a(i,e,t,n,r,s,2)):o===2&&k_(i,e,t,n,r,s):_a(_s(i),e,t,n,r,s,1);break}}}function O_(i){let e=i.prev,t=i,n=i.next;if(mn(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,u=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=m&&ro(r,a,s,l,o,c,g.x,g.y)&&mn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z_(i,e,t,n){let r=i.prev,s=i,o=i.next;if(mn(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,u=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,y=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,d=sd(m,g,e,t,n),M=sd(y,p,e,t,n),x=i.prevZ,E=i.nextZ;for(;x&&x.z>=d&&E&&E.z<=M;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&ro(a,h,l,f,c,u,x.x,x.y)&&mn(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=m&&E.x<=y&&E.y>=g&&E.y<=p&&E!==r&&E!==o&&ro(a,h,l,f,c,u,E.x,E.y)&&mn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&ro(a,h,l,f,c,u,x.x,x.y)&&mn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=M;){if(E.x>=m&&E.x<=y&&E.y>=g&&E.y<=p&&E!==r&&E!==o&&ro(a,h,l,f,c,u,E.x,E.y)&&mn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function B_(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!ml(r,s)&&L0(r,n,n.next,s)&&Ea(r,s)&&Ea(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ba(n),ba(n.next),n=i=s),n=n.next}while(n!==i);return _s(n)}function k_(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K_(o,a)){let l=D0(o,a);o=_s(o,o.next),l=_s(l,l.next),_a(o,e,t,n,r,s,0),_a(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function V_(i,e,t,n){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=I0(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Z_(c));for(r.sort(G_),s=0;s<r.length;s++)t=W_(r[s],t);return t}function G_(i,e){return i.x-e.x}function W_(i,e){let t=X_(i,e);if(!t)return e;let n=D0(t,i);return _s(n,n.next),_s(t,t.next)}function X_(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>n&&(n=u,r=t.x<t.next.x?t:t.next,u===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,l=r.x,c=r.y,h=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&ro(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Ea(t,i)&&(f<h||f===h&&(t.x>r.x||t.x===r.x&&q_(r,t)))&&(r=t,h=f)),t=t.next;while(t!==a);return r}function q_(i,e){return mn(i.prev,i,e.prev)<0&&mn(e.next,i,i.next)<0}function Y_(i,e,t,n){let r=i;do r.z===0&&(r.z=sd(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$_(r)}function $_(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function sd(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Z_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ro(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function K_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!J_(i,e)&&(Ea(i,e)&&Ea(e,i)&&Q_(i,e)&&(mn(i.prev,i,e.prev)||mn(i,e.prev,e))||ml(i,e)&&mn(i.prev,i,i.next)>0&&mn(e.prev,e,e.next)>0)}function mn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ml(i,e){return i.x===e.x&&i.y===e.y}function L0(i,e,t,n){let r=Ac(mn(i,e,t)),s=Ac(mn(i,e,n)),o=Ac(mn(t,n,i)),a=Ac(mn(t,n,e));return!!(r!==s&&o!==a||r===0&&Rc(i,t,e)||s===0&&Rc(i,n,e)||o===0&&Rc(t,i,n)||a===0&&Rc(t,e,n))}function Rc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ac(i){return i>0?1:i<0?-1:0}function J_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&L0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ea(i,e){return mn(i.prev,i,i.next)<0?mn(i,e,i.next)>=0&&mn(i,i.prev,e)>=0:mn(i,e,i.prev)<0||mn(i,i.next,e)<0}function Q_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function D0(i,e){let t=new od(i.i,i.x,i.y),n=new od(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function t0(i,e,t,n){let r=new od(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ba(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function od(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function j_(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var qr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];n0(e),i0(n,e);let o=e.length;t.forEach(n0);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,i0(n,t[l]);let a=F_.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function n0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function i0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var sn=class i extends Rt{constructor(e=new St([new ke(.5,.5),new ke(-.5,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ut(r,3)),this.setAttribute("uv",new ut(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:eE,x,E=!1,R,b,T,I;d&&(x=d.getSpacedPoints(h),E=!0,u=!1,R=d.computeFrenetFrames(h,!1),b=new w,T=new w,I=new w),u||(p=0,m=0,g=0,y=0);let O=a.extractPoints(c),v=O.shape,S=O.holes;if(!qr.isClockWise(v)){v=v.reverse();for(let K=0,L=S.length;K<L;K++){let fe=S[K];qr.isClockWise(fe)&&(S[K]=fe.reverse())}}let G=qr.triangulateShape(v,S),Y=v;for(let K=0,L=S.length;K<L;K++){let fe=S[K];v=v.concat(fe)}function j(K,L,fe){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(L,fe)}let W=v.length,F=G.length;function se(K,L,fe){let _e,ye,Ee,De=K.x-L.x,Ae=K.y-L.y,U=fe.x-K.x,A=fe.y-K.y,re=De*De+Ae*Ae,Se=De*A-Ae*U;if(Math.abs(Se)>Number.EPSILON){let Pe=Math.sqrt(re),Ce=Math.sqrt(U*U+A*A),Ze=L.x-Ae/Pe,be=L.y+De/Pe,Ne=fe.x-A/Ce,Je=fe.y+U/Ce,Le=((Ne-Ze)*A-(Je-be)*U)/(De*A-Ae*U);_e=Ze+De*Le-K.x,ye=be+Ae*Le-K.y;let J=_e*_e+ye*ye;if(J<=2)return new ke(_e,ye);Ee=Math.sqrt(J/2)}else{let Pe=!1;De>Number.EPSILON?U>Number.EPSILON&&(Pe=!0):De<-Number.EPSILON?U<-Number.EPSILON&&(Pe=!0):Math.sign(Ae)===Math.sign(A)&&(Pe=!0),Pe?(_e=-Ae,ye=De,Ee=Math.sqrt(re)):(_e=De,ye=Ae,Ee=Math.sqrt(re/2))}return new ke(_e/Ee,ye/Ee)}let le=[];for(let K=0,L=Y.length,fe=L-1,_e=K+1;K<L;K++,fe++,_e++)fe===L&&(fe=0),_e===L&&(_e=0),le[K]=se(Y[K],Y[fe],Y[_e]);let N=[],ee,Q=le.concat();for(let K=0,L=S.length;K<L;K++){let fe=S[K];ee=[];for(let _e=0,ye=fe.length,Ee=ye-1,De=_e+1;_e<ye;_e++,Ee++,De++)Ee===ye&&(Ee=0),De===ye&&(De=0),ee[_e]=se(fe[_e],fe[Ee],fe[De]);N.push(ee),Q=Q.concat(ee)}for(let K=0;K<p;K++){let L=K/p,fe=m*Math.cos(L*Math.PI/2),_e=g*Math.sin(L*Math.PI/2)+y;for(let ye=0,Ee=Y.length;ye<Ee;ye++){let De=j(Y[ye],le[ye],_e);z(De.x,De.y,-fe)}for(let ye=0,Ee=S.length;ye<Ee;ye++){let De=S[ye];ee=N[ye];for(let Ae=0,U=De.length;Ae<U;Ae++){let A=j(De[Ae],ee[Ae],_e);z(A.x,A.y,-fe)}}}let oe=g+y;for(let K=0;K<W;K++){let L=u?j(v[K],Q[K],oe):v[K];E?(T.copy(R.normals[0]).multiplyScalar(L.x),b.copy(R.binormals[0]).multiplyScalar(L.y),I.copy(x[0]).add(T).add(b),z(I.x,I.y,I.z)):z(L.x,L.y,0)}for(let K=1;K<=h;K++)for(let L=0;L<W;L++){let fe=u?j(v[L],Q[L],oe):v[L];E?(T.copy(R.normals[K]).multiplyScalar(fe.x),b.copy(R.binormals[K]).multiplyScalar(fe.y),I.copy(x[K]).add(T).add(b),z(I.x,I.y,I.z)):z(fe.x,fe.y,f/h*K)}for(let K=p-1;K>=0;K--){let L=K/p,fe=m*Math.cos(L*Math.PI/2),_e=g*Math.sin(L*Math.PI/2)+y;for(let ye=0,Ee=Y.length;ye<Ee;ye++){let De=j(Y[ye],le[ye],_e);z(De.x,De.y,f+fe)}for(let ye=0,Ee=S.length;ye<Ee;ye++){let De=S[ye];ee=N[ye];for(let Ae=0,U=De.length;Ae<U;Ae++){let A=j(De[Ae],ee[Ae],_e);E?z(A.x,A.y+x[h-1].y,x[h-1].x+fe):z(A.x,A.y,f+fe)}}}k(),ne();function k(){let K=r.length/3;if(u){let L=0,fe=W*L;for(let _e=0;_e<F;_e++){let ye=G[_e];V(ye[2]+fe,ye[1]+fe,ye[0]+fe)}L=h+p*2,fe=W*L;for(let _e=0;_e<F;_e++){let ye=G[_e];V(ye[0]+fe,ye[1]+fe,ye[2]+fe)}}else{for(let L=0;L<F;L++){let fe=G[L];V(fe[2],fe[1],fe[0])}for(let L=0;L<F;L++){let fe=G[L];V(fe[0]+W*h,fe[1]+W*h,fe[2]+W*h)}}n.addGroup(K,r.length/3-K,0)}function ne(){let K=r.length/3,L=0;B(Y,L),L+=Y.length;for(let fe=0,_e=S.length;fe<_e;fe++){let ye=S[fe];B(ye,L),L+=ye.length}n.addGroup(K,r.length/3-K,1)}function B(K,L){let fe=K.length;for(;--fe>=0;){let _e=fe,ye=fe-1;ye<0&&(ye=K.length-1);for(let Ee=0,De=h+p*2;Ee<De;Ee++){let Ae=W*Ee,U=W*(Ee+1),A=L+_e+Ae,re=L+ye+Ae,Se=L+ye+U,Pe=L+_e+U;ue(A,re,Se,Pe)}}}function z(K,L,fe){l.push(K),l.push(L),l.push(fe)}function V(K,L,fe){we(K),we(L),we(fe);let _e=r.length/3,ye=M.generateTopUV(n,r,_e-3,_e-2,_e-1);Ue(ye[0]),Ue(ye[1]),Ue(ye[2])}function ue(K,L,fe,_e){we(K),we(L),we(_e),we(L),we(fe),we(_e);let ye=r.length/3,Ee=M.generateSideWallUV(n,r,ye-6,ye-3,ye-2,ye-1);Ue(Ee[0]),Ue(Ee[1]),Ue(Ee[3]),Ue(Ee[1]),Ue(Ee[2]),Ue(Ee[3])}function we(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function Ue(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return tE(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ol[r.type]().fromJSON(r)),new i(n,e.options)}},eE={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new ke(s,o),new ke(a,l),new ke(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[r*3],m=e[r*3+1],g=e[r*3+2],y=e[s*3],p=e[s*3+1],d=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ke(o,1-l),new ke(c,1-f),new ke(u,1-g),new ke(y,1-d)]:[new ke(a,1-l),new ke(h,1-f),new ke(m,1-g),new ke(p,1-d)]}};function tE(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var al=class i extends rd{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var hr=class i extends Rt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],f=e,u=(t-e)/r,m=new w,g=new ke;for(let y=0;y<=r;y++){for(let p=0;p<=n;p++){let d=s+p/n*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let y=0;y<r;y++){let p=y*(n+1);for(let d=0;d<n;d++){let M=d+p,x=M,E=M+n+1,R=M+n+2,b=M+1;a.push(x,E,b),a.push(E,R,b)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},er=class i extends Rt{constructor(e=new St([new ke(0,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(o,2));function c(h){let f=r.length/3,u=h.extractPoints(t),m=u.shape,g=u.holes;qr.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){let M=g[p];qr.isClockWise(M)===!0&&(g[p]=M.reverse())}let y=qr.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){let M=g[p];m=m.concat(M)}for(let p=0,d=m.length;p<d;p++){let M=m[p];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let p=0,d=y.length;p<d;p++){let M=y[p],x=M[0]+f,E=M[1]+f,R=M[2]+f;n.push(x,E,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return nE(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function nE(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var en=class i extends Rt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new w,u=new w,m=[],g=[],y=[],p=[];for(let d=0;d<=n;d++){let M=[],x=d/n,E=0;d===0&&o===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){let b=R/t;f.x=-e*Math.cos(r+b*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),p.push(b+E,1-x),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let x=h[d][M+1],E=h[d][M],R=h[d+1][M],b=h[d+1][M+1];(d!==0||o>0)&&m.push(x,E,b),(d!==n-1||l<Math.PI)&&m.push(E,R,b)}this.setIndex(m),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qt=class i extends Rt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],h=new w,f=new w,u=new w;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let y=g/r*s,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let y=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,d=(r+1)*(m-1)+g,M=(r+1)*m+g;o.push(y,p,M),o.push(p,d,M)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var un=class i extends Rt{constructor(e=new rl(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,l=new w,c=new ke,h=new w,f=[],u=[],m=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(m,2));function y(){for(let x=0;x<t;x++)p(x);p(s===!1?t:0),M(),d()}function p(x){h=e.getPointAt(x/t,h);let E=o.normals[x],R=o.binormals[x];for(let b=0;b<=r;b++){let T=b/r*Math.PI*2,I=Math.sin(T),O=-Math.cos(T);l.x=O*E.x+I*R.x,l.y=O*E.y+I*R.y,l.z=O*E.z+I*R.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=t;x++)for(let E=1;E<=r;E++){let R=(r+1)*(x-1)+(E-1),b=(r+1)*x+(E-1),T=(r+1)*x+E,I=(r+1)*(x-1)+E;g.push(R,b,I),g.push(b,T,I)}}function M(){for(let x=0;x<=t;x++)for(let E=0;E<=r;E++)c.x=x/t,c.y=E/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ol[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Oe=class extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$t=class extends Oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Jr=class extends Qi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Cc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function iE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ad=class extends xo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tp,endingEnd:tp}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case np:s=e,a=2*t-n;break;case ip:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case np:o=e,l=2*n-t;break;case ip:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),y=g*g,p=y*g,d=-u*p+2*u*y-u*g,M=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,x=(-1-m)*p+(1.5+m)*y+.5*g,E=m*p-m*y;for(let R=0;R!==a;++R)s[R]=d*o[h+R]+M*o[c+R]+x*o[l+R]+E*o[f+R];return s}},cd=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},ld=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},tr=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cc(t,this.TimeBufferType),this.values=Cc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cc(e.times,Array),values:Cc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ld(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ad(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fc:t=this.InterpolantFactoryMethodDiscrete;break;case Ou:t=this.InterpolantFactoryMethodLinear;break;case _h:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fc;case this.InterpolantFactoryMethodLinear:return Ou;case this.InterpolantFactoryMethodSmooth:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&iE(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_h,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*n,u=f-n,m=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[u+g]||y!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let m=0;m!==n;++m)t[u+m]=t[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};tr.prototype.TimeBufferType=Float32Array;tr.prototype.ValueBufferType=Float32Array;tr.prototype.DefaultInterpolation=Ou;var Es=class extends tr{constructor(e,t,n){super(e,t,n)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Fc;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends tr{};hd.prototype.ValueTypeName="color";var ud=class extends tr{};ud.prototype.ValueTypeName="number";var dd=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)dt.slerpFlat(s,0,o,c-a,o,c,l);return s}},cl=class extends tr{InterpolantFactoryMethodLinear(e){return new dd(this.times,this.values,this.getValueSize(),e)}};cl.prototype.ValueTypeName="quaternion";cl.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends tr{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Fc;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var fd=class extends tr{};fd.prototype.ValueTypeName="vector";var r0={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},pd=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},rE=new pd,wa=class{constructor(e){this.manager=e!==void 0?e:rE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var md=class extends wa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=r0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=pa("img");function l(){h(),r0.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){h(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var yo=class extends wa{constructor(e){super(e)}load(e,t,n,r){let s=new ai,o=new md(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},vo=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ll=class extends vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jh=new It,s0=new w,o0=new w,Sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;s0.setFromMatrixPosition(e.matrixWorld),t.position.copy(s0),o0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(o0),t.updateMatrixWorld(),jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gd=class extends Sa{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=po*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Mo=class extends vo{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},a0=new It,sa=new w,eu=new w,xd=class extends Sa{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new nn(2,1,1,1),new nn(0,1,1,1),new nn(3,1,1,1),new nn(1,1,1,1),new nn(3,0,1,1),new nn(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),sa.setFromMatrixPosition(e.matrixWorld),n.position.copy(sa),eu.copy(n.position),eu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eu),n.updateMatrixWorld(),r.makeTranslation(-sa.x,-sa.y,-sa.z),a0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(a0)}},An=class extends vo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yd=class extends Sa{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hl=class extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new yd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ul=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=c0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=c0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function c0(){return performance.now()}var Fd="\\[\\]\\.:\\/",sE=new RegExp("["+Fd+"]","g"),Od="[^"+Fd+"]",oE="[^"+Fd.replace("\\.","")+"]",aE=/((?:WC+[\/:])*)/.source.replace("WC",Od),cE=/(WCOD+)?/.source.replace("WCOD",oE),lE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Od),hE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Od),uE=new RegExp("^"+aE+cE+lE+hE+"$"),dE=["material","materials","bones","map"],vd=class{constructor(e,t,n){let r=n||dn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sE,"")}static parseTrackName(e){let t=uE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);dE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dn.Composite=vd;dn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dn.prototype.GetterByBindingType=[dn.prototype._getValue_direct,dn.prototype._getValue_array,dn.prototype._getValue_arrayElement,dn.prototype._getValue_toArray];dn.prototype.SetterByBindingTypeAndVersioning=[[dn.prototype._setValue_direct,dn.prototype._setValue_direct_setNeedsUpdate,dn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_array,dn.prototype._setValue_array_setNeedsUpdate,dn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_arrayElement,dn.prototype._setValue_arrayElement_setNeedsUpdate,dn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_fromArray,dn.prototype._setValue_fromArray_setNeedsUpdate,dn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fb=new Float32Array(1);var l0=new It,Ta=class{constructor(e,t,n=0,r=1/0){this.ray=new ma(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return l0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l0),this}intersectObject(e,t=!0,n=[]){return Md(e,this,n,t),n.sort(h0),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Md(e[r],this,n,t);return n.sort(h0),n}};function h0(i,e){return i.distance-e.distance}function Md(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Md(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function fE({coarse:i=!1,width:e=1280,cores:t=8,memory:n=8,dpr:r=1,mobileHint:s=!1,safe:o=!1}={}){let a=o||s||i||e<700||t<=4||n<=4;return Object.freeze({mobile:a,safe:o,pixelRatio:Math.min(r,a?o?.75:1:1.5),minPixelRatio:Math.min(r,a?.6:1),maxPixels:o?26e4:a?52e4:22e5,maxFps:a?30:60,shadowSize:a?512:1536,shadowHz:a?5:24,shadows:!a&&!o,textureSize:a?128:512,maxTextureSize:o?128:a?256:1024,chainSegments:a?12:24,chainRadialSegments:a?3:5,effectsHz:a?15:40,targetFrameMs:a?33.3:22})}function U0(i,e,t,n=i.pixelRatio){return Math.min(n,Math.sqrt(i.maxPixels/Math.max(1,e*t)))}var H0=!1;try{H0=sessionStorage.getItem("figsaw-safe-graphics")==="1"}catch{}var pE=typeof window>"u"?{}:{coarse:matchMedia("(pointer:coarse)").matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1,mobileHint:new URLSearchParams(location.search).get("quality")==="mobile"||/Android|iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,safe:H0},Ie=fE(pE);function qn(i,{exclude:e=[],minObjects:t=3,allowInteractiveRoot:n=!1,dispose:r=!0,palette:s=!1}={}){let o=new Map,a=new Set(e),l=new Map,c=new Set,h=new w,f=new w,u=new bt;i.updateWorldMatrix(!0,!0);let m=i.matrixWorld.clone().invert();function g(x){if(!s||x.isMeshPhysicalMaterial||x.vertexColors||x.clippingPlanes?.length||!x.color)return null;if(!o.has(x)){let R=["type","roughness","metalness","opacity","alphaTest","side","blending","depthWrite","depthTest","colorWrite","flatShading","toneMapped","polygonOffset","polygonOffsetFactor","polygonOffsetUnits","emissiveIntensity","envMapIntensity","fog","dithering","premultipliedAlpha","reflectivity","shininess","wireframe"].map(b=>x[b]).concat(x.emissive?.getHex(),x.specular?.getHex(),x.customProgramCacheKey());for(let b of["map","alphaMap","aoMap","bumpMap","normalMap","roughnessMap","metalnessMap","emissiveMap","envMap","lightMap"])R.push(x[b]?.uuid);o.set(x,JSON.stringify(R))}return o.get(x)}function y(x){if(!(!x.visible||a.has(x)||!(x===i&&n)&&(x.userData.chargingAction||x.userData.keyAction||Number.isInteger(x.userData.hoistIndex)||Number.isInteger(x.userData.valveIndex)))){if(x.isMesh&&!x.isInstancedMesh&&!x.isSkinnedMesh&&!x.children.length){let E=x.geometry,R=x.material,b=E.attributes;if(R&&!Array.isArray(R)&&!R.transparent&&!E.morphAttributes.position&&E.drawRange.start===0&&E.drawRange.count===1/0&&b.position&&Object.keys(b).every(T=>["position","normal","uv"].includes(T))){x.getWorldPosition(h);let T=`${Math.floor(h.x/3)},${Math.floor(h.z/3)}`,I=[g(R)||R.uuid,x.castShadow,x.receiveShadow,x.renderOrder,Object.keys(b).sort().join(","),T].join("|");l.has(I)||l.set(I,[]),l.get(I).push(x)}}for(let E of x.children)y(E)}}y(i);let p=0,d=0;for(let x of l.values()){if(x.length<t)continue;let E=Object.keys(x[0].geometry.attributes),R=x.reduce((W,F)=>W+F.geometry.attributes.position.count,0),b=x.reduce((W,F)=>W+(F.geometry.index?.count||F.geometry.attributes.position.count),0),T=new Rt,I={};for(let W of E){let F=x[0].geometry.attributes[W].itemSize;I[W]=new Float32Array(R*F),T.setAttribute(W,new rn(I[W],F))}let O=!!g(x[0].material);O&&(I.color=new Float32Array(R*3),T.setAttribute("color",new rn(I.color,3)));let v=R<=65535?new Uint16Array(b):new Uint32Array(b),S=0,H=0;for(let W of x){let F=W.geometry,se=new It().multiplyMatrices(m,W.matrixWorld);u.getNormalMatrix(se);for(let N=0;N<F.attributes.position.count;N++)h.fromBufferAttribute(F.attributes.position,N).applyMatrix4(se),h.toArray(I.position,(S+N)*3),O&&W.material.color.toArray(I.color,(S+N)*3),I.normal&&(f.fromBufferAttribute(F.attributes.normal,N).applyMatrix3(u).normalize(),f.toArray(I.normal,(S+N)*3)),I.uv&&(I.uv[(S+N)*2]=F.attributes.uv.getX(N),I.uv[(S+N)*2+1]=F.attributes.uv.getY(N));let le=F.index?.count||F.attributes.position.count;for(let N=0;N<le;N++)v[H++]=S+(F.index?F.index.getX(N):N);if(se.determinant()<0)for(let N=H-le;N<H;N+=3){let ee=v[N+1];v[N+1]=v[N+2],v[N+2]=ee}S+=F.attributes.position.count,c.add(F),W.removeFromParent(),p++}T.setIndex(new rn(v,1)),T.computeBoundingBox(),T.computeBoundingSphere();let G=x[0],Y=G.material;O&&(Y=G.material.clone(),Y.onBeforeCompile=G.material.onBeforeCompile,Y.customProgramCacheKey=G.material.customProgramCacheKey,Y.color.setHex(16777215),Y.vertexColors=!0);let j=new ot(T,Y);j.name="Batched static office scenery",j.castShadow=G.castShadow,j.receiveShadow=G.receiveShadow,j.renderOrder=G.renderOrder,j.matrixAutoUpdate=!1,i.add(j),d++}let M=new Set;i.traverse(x=>{x.geometry&&M.add(x.geometry)});for(let x of c)r&&!M.has(x)&&x.dispose();return{removed:p,batches:d}}function N0(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,"#111812"),n.addColorStop(.48,"#3a4636"),n.addColorStop(1,"#171d12"),t.fillStyle=n,t.fillRect(0,0,256,128),t.fillStyle="#a9b7a3",t.fillRect(78,19,72,3),t.fillStyle="#596e68",t.fillRect(190,38,29,25),t.fillStyle="#435827",t.fillRect(25,64,34,15);let r=new Nt(e);r.colorSpace=yt,r.mapping=da;let s=new go(i),o=s.fromEquirectangular(r);return s.dispose(),r.dispose(),o}function F0(i,e){if(!new URLSearchParams(location.search).has("profile"))return{mark(){},frame(){}};let t=document.createElement("output");t.id="performance-report",t.hidden=!0,document.body.append(t);let n=performance.now(),r={},s=[],o=null,a=0,l=0,c=0;function h(u){r[u]=Math.round(performance.now()-n)}function f(){let u=new Set,m=new Set,g=[],y=0,p=0,d=0;e.traverse(M=>{M.isLight&&M.visible&&d++,M.geometry&&u.add(M.geometry);for(let x of Array.isArray(M.material)?M.material:[M.material])if(x)for(let E of Object.values(x))E?.isTexture&&m.add(E);if(M.isGroup&&M.name){let x=0,E=0;M.traverse(R=>{R.isMesh&&(x++,E+=(R.geometry?.index?.count||R.geometry?.attributes.position?.count||0)/3*(R.isInstancedMesh?R.count:1))}),x>15&&g.push({name:M.name,meshes:x,triangles:Math.round(E)})}});for(let M of u){for(let x of Object.values(M.attributes))y+=x.array.byteLength;y+=M.index?.array.byteLength||0}for(let M of m){let x=M.image;p+=(x?.width||0)*(x?.height||0)*4*(M.generateMipmaps?4/3:1)}return{geometryMB:+(y/1048576).toFixed(1),textureMB:+(p/1048576).toFixed(1),lights:d,largestTextures:[...m].map(M=>({w:M.image?.width,h:M.image?.height})).sort((M,x)=>x.w*x.h-M.w*M.h).slice(0,10),groups:g.sort((M,x)=>x.meshes-M.meshes).slice(0,18)}}return{mark:h,frame(u){let m=performance.now();if(a||(a=m-n),l&&(s.push(m-l),s.length>90&&s.shift()),l=m,c++,c===1||c%30===0){let g=0;e.traverse(y=>{y.isMesh&&g++}),o??=f(),t.textContent=JSON.stringify({inventory:o,programs:i.info.programs.length,firstFrameMs:Math.round(a),stages:r,frameMs:s.length?Math.round(s.reduce((y,p)=>y+p,0)/s.length*10)/10:0,renderCpuMs:Math.round((m-u)*10)/10,frames:c,calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,textures:i.info.memory.textures,meshes:g,pixelRatio:i.getPixelRatio()})}}}}function gl(i=512,e=i,t=Ie.maxTextureSize){let n=Math.min(1,t/Math.max(i,e)),r=document.createElement("canvas");r.width=Math.max(1,Math.round(i*n)),r.height=Math.max(1,Math.round(e*n));let s=r.getContext("2d");return s.scale(r.width/i,r.height/e),[r,s]}function xl(i,e=Ie.maxTextureSize){let t=i.image;if(!t||Math.max(t.width,t.height)<=e)return i;let n=e/Math.max(t.width,t.height),r=document.createElement("canvas");return r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n)),r.getContext("2d").drawImage(t,0,0,r.width,r.height),i.image=r,i.needsUpdate=!0,i}function O0(i){let n=[],r=new Map,s=0,o=new _t(.735,.41);function a(){return gl(1024,576)}function l(f,u=!0){let m=new Nt(f);return u&&(m.colorSpace=yt),m.anisotropy=Math.min(Ie.mobile?2:8,i.capabilities.getMaxAnisotropy()),m}function c(f,u){let m=13817+u*7319+(f==="hole"?20001:f==="live"?481:0),g=()=>(m=m*1664525+1013904223>>>0,m/4294967296),y=(N,ee)=>N+(ee-N)*g(),[p,d]=a(),[M,x]=a(),[E,R]=a(),[b,T]=a();d.fillStyle="#080d10",d.fillRect(0,0,1024,576),R.fillStyle="#545454",R.fillRect(0,0,1024,576),T.fillStyle="#777",T.fillRect(0,0,1024,576);let I=f==="live"||f==="cracked"&&u%2===0,O=d.createLinearGradient(0,0,1024,576);if(O.addColorStop(0,"#1b262a"),O.addColorStop(.45,"#0b1217"),O.addColorStop(1,"#040709"),d.fillStyle=O,d.fillRect(0,0,1024,576),I){d.fillStyle="#253438",d.fillRect(0,0,1024,27),d.fillRect(0,27,150,576);for(let N=0;N<28;N++){let ee=174;for(let Q=0;Q<y(3,10);Q++){d.fillStyle=["#365b51","#47615d","#354847"][Math.floor(g()*3)];let oe=y(9,93);d.fillRect(ee,53+N*17,oe,2),ee+=oe+y(5,15)}}for(let N=0;N<576;N+=3)d.fillStyle="rgba(0,0,0,.18)",d.fillRect(0,N,1024,1)}let v={x:y(1024*.2,1024*.78),y:y(576*.22,576*.78)};function S(N,ee,Q,oe,k=0,ne=0){ee.strokeStyle=Q,ee.lineWidth=oe,ee.beginPath(),N.forEach(([B,z],V)=>V?ee.lineTo(B+k,z+ne):ee.moveTo(B+k,z+ne)),ee.stroke()}function H(N,ee=1){S(N,x,"rgba(0,3,6,.86)",ee*1.9),S(N,x,`rgba(185,212,216,${y(.45,.9)})`,ee*.7,-.7,.35),g()<.3&&S(N,x,"rgba(113,153,163,.35)",.5,.75,-.35),S(N,T,"#242424",ee*1.6),S(N,T,"#bfbfbf",ee*.7,-.7,.35),S(N,R,"#b9b9b9",ee*1.5)}let G=[];if(f!=="live"){let oe=function(B,z,V=1){d.fillStyle=z,d.beginPath(),B.forEach(([ue,we],Ue)=>{ue=v.x+(ue-v.x)*V,we=v.y+(we-v.y)*V,Ue?d.lineTo(ue,we):d.moveTo(ue,we)}),d.closePath(),d.fill()},N=[],ee=f==="hole"?y(68,107):y(42,78),Q=ee*y(.42,.75);for(let B=0;B<72;B++){let z=B/72*Math.PI*2,V=1+.13*Math.sin(z*5+u)+.07*Math.sin(z*13);N.push([v.x+Math.cos(z)*ee*V,v.y+Math.sin(z)*Q*V])}for(let[B,z]of[[1.18,"rgba(56,39,73,.46)"],[1.1,"rgba(36,72,74,.55)"],[1.05,"#151c2a"],[1,"#010204"]])oe(N,z,B);if(I||f==="hole"&&u===1){for(let V=0;V<61;V++){let ue=v.x+y(-ee*1.7,ee*1.7),we=V%3?0:v.y,Ue=V%3?v.y:576;d.fillStyle=["rgba(85,129,115,.65)","rgba(130,62,94,.6)","rgba(70,103,146,.60)","rgba(172,177,161,.48)"][V%4],d.fillRect(ue,we,y(.4,2),Ue-we)}let B=v.x+ee*.4,z=y(35,108);d.fillStyle="rgba(130,151,153,.23)",d.fillRect(B,0,z,v.y);for(let V=0;V<v.y;V+=3)d.fillStyle=`rgba(15,28,32,${y(.15,.65)})`,d.fillRect(B,V,z,1);for(let V=0;V<9;V++)d.fillStyle=V%3?"rgba(2,5,8,.85)":"rgba(129,156,153,.45)",d.fillRect(0,v.y+y(-15,18),1024,y(.5,2.4));oe(N,"#010204",.98)}let k=12+u%4,ne=Array.from({length:k},(B,z)=>z/k*Math.PI*2+y(-.11,.11));for(let B of ne){let z=[[v.x+Math.cos(B)*3,v.y+Math.sin(B)*3]],V=y(7,13);for(;V<1300;){let ue=y(-.021,.021),we=v.x+Math.cos(B+ue)*V,Ue=v.y+Math.sin(B+ue)*V;if(z.push([we,Ue]),V+=y(16,47),we<0||we>1024||Ue<0||Ue>576)break}H(z,y(.55,1.2));for(let ue=2;ue<z.length-1;ue++)if(g()<.33){let[we,Ue]=z[ue],K=g()<.5?-1:1,L=B+K*y(.18,.65),fe=y(28,145),_e=[[we,Ue]];for(let ye=1;ye<=5;ye++)_e.push([we+Math.cos(L)*fe*ye/5+y(-3,3),Ue+Math.sin(L)*fe*ye/5+y(-3,3)]);H(_e,y(.3,.64))}}for(let B of[18,35,61,101,155])for(let z=0;z<k;z++){if(g()<.28||B>70&&g()<.45)continue;let V=ne[z],ue=z===k-1?ne[0]+Math.PI*2:ne[z+1],we=B*y(.8,1.12),Ue=[];for(let K=0;K<=4;K++){let L=V+(ue-V)*K/4;Ue.push([v.x+Math.cos(L)*we+y(-3,3),v.y+Math.sin(L)*we*.84+y(-2,2)])}H(Ue,y(.35,.75))}for(let B=0;B<90;B++){let z=g()*Math.PI*2,V=y(2,25),ue=v.x+Math.cos(z)*V,we=v.y+Math.sin(z)*V*.7;H([[ue,we],[ue+y(-6,6),we+y(-5,5)]],y(.3,.8))}if(f==="hole")for(let B=0;B<7;B++){let z=B/7*Math.PI*2,V=y(8,26),ue=v.x+Math.cos(z)*V,we=v.y+Math.sin(z)*V*.7,Ue=[[ue,we],[ue+y(4,11),we+y(-6,2)],[ue+y(-3,5),we+y(4,13)]];G.push(Ue),d.fillStyle="#000102",d.beginPath(),Ue.forEach(([K,L],fe)=>fe?d.lineTo(K,L):d.moveTo(K,L)),d.closePath(),d.fill(),H([...Ue,Ue[0]],1)}}for(let N=0;N<35;N++){let ee=g()*1024,Q=g()*576,oe=y(20,115),k=R.createRadialGradient(ee,Q,0,ee,Q,oe);k.addColorStop(0,"rgba(205,205,205,.20)"),k.addColorStop(1,"rgba(160,160,160,0)"),R.fillStyle=k,R.fillRect(ee-oe,Q-oe,oe*2,oe*2)}for(let N=0;N<3800;N++){let ee=g()*1024,Q=g()*576;R.fillStyle=`rgba(230,230,230,${y(.06,.4)})`,R.fillRect(ee,Q,y(.4,1.3),y(.4,1.1)),N%9===0&&(x.fillStyle="rgba(135,149,146,.13)",x.fillRect(ee,Q,.65,.65))}for(let N=0;N<70;N++){let ee=g()*1024,Q=g()*576;S([[ee,Q],[ee+y(3,31),Q+y(-8,8)]],R,"rgba(189,189,189,.35)",.7)}x.strokeStyle="rgba(89,93,83,.50)",x.lineWidth=2.4,x.strokeRect(1,1,1022,574),Ie.mobile&&d.drawImage(M,0,0,1024,576);let Y=l(p),j=Ie.mobile?null:l(E,!1),W=Ie.mobile?null:l(b,!1),F=new Oe({map:Y,roughness:.62,metalness:0,emissiveMap:Y,emissive:16777215,emissiveIntensity:f==="live"?.52:I?.28:.025}),se=new $t({color:10137267,metalness:.08,roughness:.36,roughnessMap:j,bumpMap:W,bumpScale:38e-5,transparent:!0,opacity:.27,depthWrite:!1,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:j,ior:1.52,envMapIntensity:.85,side:jn});n.push(se);let le=new Oe({map:l(M),transparent:!0,depthWrite:!1,roughness:.38,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return{lcdMaterial:F,glass:se,cracksMaterial:le,holes:G}}function h(f,u){let m=s++%(Ie.mobile?1:3),g=`${u}-${m}`;r.has(g)||r.set(g,c(u,m));let y=r.get(g);for(let[p,d,M]of[[y.lcdMaterial,.019,"Damaged liquid-crystal panel"],[y.glass,.0205,"Reflective laminated screen glass"],[y.cracksMaterial,.0213,"Fine branching glass fractures"]]){if(Ie.mobile&&p===y.cracksMaterial)continue;let x=new ot(o,p);x.position.set(0,.381,d),x.name=M,x.castShadow=!1,x.receiveShadow=!0,f.add(x)}for(let p of Ie.mobile?[]:y.holes){let d=p.flatMap(([E,R],b)=>[(E/1024-.5)*.735,(.5-R/576)*.41+.381,.0215+(b===1?.0018:0)]),M=new Rt;M.setAttribute("position",new ut(d,3)),M.computeVertexNormals();let x=new ot(M,y.glass);x.castShadow=!1,f.add(x)}}return{add:h,setEnvironment(f){for(let u of n)u.envMap=f,u.needsUpdate=!0}}}var Ml=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Ar=i=>(i=Ml(i),i*i*(3-2*i));function yl(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function bi(i,e){let t=Math.floor(i),n=Math.floor(e),r=Ar(i-t),s=Ar(e-n);return qe.lerp(qe.lerp(yl(t,n),yl(t+1,n),r),qe.lerp(yl(t,n+1),yl(t+1,n+1),r),s)}function vl(i,e){return bi(i*5,e*5)*.48+bi(i*17+3,e*17)*.29+bi(i*61,e*61+9)*.15+bi(i*187,e*187)*.08}function Eo(i,e=Ie.textureSize,t=!1){let n=new Uint8Array(e*e*4);for(let s=0;s<e;s++)for(let o=0;o<e;o++){let a=i(o/e,s/e,o,s),l=(s*e+o)*4;for(let c=0;c<4;c++)n[l+c]=Math.round(Ml(a[c]??1)*255)}let r=new cr(n,e,e,Ei);return r.wrapS=r.wrapT=vs,r.magFilter=pn,r.minFilter=Ji,r.generateMipmaps=!0,r.anisotropy=4,t&&(r.colorSpace=yt),r.needsUpdate=!0,r}var zd;function fi(i=16777215){if(!zd){let e=(l,c)=>{let h=vl(l,c),f=bi(l*48,c*3),u=Ar((h+f*.13-.51)*9),m=Ar((bi(l*150,c*150)-.64)*8);return{n:h,rust:u,pit:m}},t=new Float32Array(Ie.textureSize*Ie.textureSize*3),n=Eo((l,c,h,f)=>{let{n:u,rust:m,pit:g}=e(l,c),y=Math.pow(bi(l*4,c*260),18)*.24,p=(f*Ie.textureSize+h)*3;return t[p]=.45+m*.21+u*.18-g*.25,t[p+1]=.35+m*.57+g*.07,t[p+2]=.88-m*.86,[.39+u*.34,.42+u*.34,.39+u*.32].map((d,M)=>qe.lerp(d,[.35+u*.3,.12+u*.19,.045+u*.1][M],m)-g*.1+y)},Ie.textureSize,!0),r=Eo((l,c,h,f)=>{let u=(f*Ie.textureSize+h)*3;return[t[u],t[u+1],t[u+2]]});zd={map:n,roughnessMap:r,metalnessMap:r,bumpMap:r}}return new Oe({color:i,...zd,roughness:1,metalness:1,bumpScale:Ie.mobile?0:.0035,envMapIntensity:.7})}function z0(){let i=(y,p)=>{let d=vl(y+3,p+2),M=bi(y*70,p*2.3)*bi(y*19,p*6),x=bi(y*170,p*190),E=(1-Ar(p/.23))*.78,R=Ar((p-.86)/.14)*.34,b=Math.exp(-(((p-.844)*75)**2))*(.2+bi(y*38,1)*.8),T=Ml(E+R+b*.52+Ar((d-.49)*7)*.45+M*.2),I=Ar((d-.37)*4)*.7;return{dirt:T,fog:I,runs:M,scale:x,tide:b}},e=new Float32Array(Ie.textureSize*Ie.textureSize*2),t=Eo((y,p,d,M)=>{let{dirt:x,fog:E,runs:R,scale:b,tide:T}=i(y,p),I=Math.pow(bi(y*105,p*69),12)*.65,O=(M*Ie.textureSize+d)*2;return e[O]=.4+x*.1+R*.09+b*.025+I,e[O+1]=.08+E*.36+x*.43+R*.1,[.59-x*.3,.63-x*.3,.48-x*.3,Ml(.03+E*.23+x*.55+T*.12+b*.025)]},Ie.textureSize,!0),n=Eo((y,p,d,M)=>{let x=(M*Ie.textureSize+d)*2;return[e[x],e[x+1],0]}),r=n,s=new $t({color:14542029,roughness:.7,roughnessMap:r,metalness:0,transparent:!0,opacity:.17,depthWrite:!1,clearcoat:Ie.mobile?0:1,clearcoatRoughness:.14,bumpMap:Ie.mobile?null:n,bumpScale:.003,side:Ie.mobile?jn:Pt,envMapIntensity:.85}),o=new Oe({map:t,roughness:.9,bumpMap:Ie.mobile?null:n,bumpScale:.002,transparent:!0,depthWrite:!1,side:Ie.mobile?jn:Pt}),a=Eo((y,p)=>{let d=vl(y+11,p+7),M=bi(y*12,p*9);return[.11+d*.19,.24+d*.35,.026+M*.08]},Ie.textureSize/2,!0),l=Eo((y,p)=>{let d=vl(y+5,p+3),M=Ar(p);return[.1+d*.12+M*.06,.17+d*.22+M*.12,.025+d*.055,.93-M*.43]},Ie.textureSize/2,!0),c=new $t({map:l,color:13228945,roughness:.26,transparent:!0,opacity:.76,depthWrite:!1,side:Ie.mobile?jn:Pt,emissive:1981189,emissiveIntensity:.48,envMapIntensity:.35}),h=new $t({map:a,color:16777215,roughness:.17,metalness:0,ior:1.333,clearcoat:Ie.mobile?0:1,clearcoatRoughness:.12,side:Ie.mobile?jn:Pt,emissive:2374407,emissiveIntensity:.3,envMapIntensity:1.15}),f={value:0};h.onBeforeCompile=y=>{y.uniforms.waterTime=f,y.fragmentShader=`uniform float waterTime;
`+y.fragmentShader,y.fragmentShader=y.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`)},h.customProgramCacheKey=()=>"slow-water-currents-v1";let u=new Oe({color:9546090,roughness:.79,transparent:!0,opacity:.75,depthWrite:!1,emissive:2503177,emissiveIntensity:.12}),m=new $t({color:13097881,roughness:.07,metalness:0,transparent:!0,opacity:.23,depthWrite:!1,clearcoat:Ie.mobile?0:1,clearcoatRoughness:.04,envMapIntensity:1.25}),g=new mt({color:12505482,transparent:!0,opacity:.18,depthWrite:!1,side:Ie.mobile?jn:Pt});return{glass:s,haze:o,fluid:c,liquidTop:h,foam:u,bubble:m,ripple:g,waterTime:f}}var mE=i=>Math.max(0,Math.min(1,i)),kd=i=>{let e=mE(i);return e*e*(3-2*e)};function Bd(i,e,t,n,r){if(i<e)return 0;let s=i-e;return s<t?kd(s/t):s<t+n?1:1-kd((s-t-n)/r)}var gE=[{at:5,head:-.32,eye:-.52,pitch:.035,hold:1.7},{at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},{at:31.1,head:-.23,eye:-.4,pitch:-.1,hold:1.3}];function B0(i,e=!1,t={}){if(t.headYaw=0,t.gazeYaw=0,t.gazePitch=0,e||i<0)return t;let n=i%43.7;for(let r of gE){let s=Bd(n,r.at,.24,r.hold+1,.65),o=Bd(n,r.at+.38,.95,r.hold,1.25);t.headYaw+=r.head*o,t.gazeYaw+=r.eye*s,t.gazePitch+=r.pitch*s}return t.gazePitch-=.12*Bd(n,25.2,.22,.8,.5),t}function k0(i,e,t,n,r=!1,s={}){let o=kd((e-1.08)/.42),a=1.1+n*.055,l=r?0:o*.105*(Math.sin(i*a+n)+.12*Math.sin(i*.47+n*.6))/1.12,c=t-.1-e;return s.angle=l,s.x=Math.sin(l)*c,s.y=t-.1-Math.cos(l)*c,s.hookX=s.x-Math.sin(l)*.52,s.hookY=s.y+Math.cos(l)*.52,s}var _l;function xE(){if(_l)return _l;let i=128,e=new Uint8Array(i*i*4),t=new Uint8Array(i*i*4),n=8817,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=(a*i+l)*4,h=r(),f=Math.max(0,Math.sin(l*.056+Math.sin(a*.05)*2)*Math.cos(a*.041)-.15),u=h>.965?.22:0;e[c]=223-f*67-h*16-u*140,e[c+1]=219-f*49-h*15-u*130,e[c+2]=186-f*72-h*17-u*130,e[c+3]=255,t[c]=t[c+1]=t[c+2]=145+h*24-u*255,t[c+3]=255}let s=new cr(e,i,i),o=new cr(t,i,i);for(let a of[s,o])a.wrapS=a.wrapT=vs,a.magFilter=pn,a.minFilter=Ji,a.generateMipmaps=!0,a.needsUpdate=!0;return s.colorSpace=yt,_l=new Oe({map:s,bumpMap:o,bumpScale:.0011,color:16052183,roughness:.72,emissive:12563852,emissiveIntensity:.28}),_l}var yE=new en(1,20,14),Aa=new Oe({color:1580302,roughness:1});function pi(i,e,t=xE()){let n=new ot(i,t);return n.castShadow=!0,n.receiveShadow=!0,e.add(n),n}function Ni(i,e,t,n){let r=pi(yE,i,n);return r.position.set(...e),r.scale.set(...t),r}function Hi(i,e,t=.012){return pi(new un(new Yt(e.map(n=>new w(...n))),32,t,8,!1),i)}function El(i,e,t,n=.012){let r=new w(...e),s=new w(...t),o=s.clone().sub(r),a=pi(new Ut(n*.82,n,o.length(),10),i);return a.position.copy(r).add(s).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new w(0,1,0),o.normalize()),a}function Vd(i=!1){let e=new ve;e.name=i?"Slender forearm bone":"Worn femur";let t=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.1],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]],n=new Zr(t.map(s=>new ke(s[0]*(i?.62:1),s[1])),20),r=n.attributes.position;for(let s=0;s<r.count;s++)r.setX(s,r.getX(s)+.009*Math.sin((r.getY(s)+.16)*Math.PI/.315));return n.computeVertexNormals(),pi(n,e),Ni(e,[.022,.14,0],[.043,.038,.039]),Ni(e,[-.015,-.147,.002],[.028,.03,.034]),Ni(e,[.02,-.15,-.002],[.029,.032,.032]),i&&e.scale.set(.75,1,.8),e}function V0(){let i=new ve;i.name="Curved rib fragment";let e=[];for(let t=0;t<=20;t++){let n=-.85+t/20*2.9;e.push([Math.cos(n)*.123-.018,Math.sin(n)*.123,.018*Math.sin(n*1.3)])}return Hi(i,e),Ni(i,e[0],[.017,.015,.018]),i}function G0(){let i=new ve;i.name="Detached jaw with uneven teeth",Hi(i,[[-.088,.045,-.035],[-.08,-.025,.035],[-.043,-.05,.071],[0,-.054,.082],[.043,-.05,.071],[.08,-.025,.035],[.088,.045,-.035]],.013);for(let e=0;e<8;e++){let t=(e-3.5)*.017,n=.078-Math.abs(t)*.3,r=pi(new wt(.013,.02+e%3*.002,.013),i);r.position.set(t,-.041,n),r.rotation.y=-t*3}return i}function vE(){let i=new ve;i.name="Goofy buck-toothed skull with wonky eye sockets";let e=new St;e.moveTo(-.076,-.061),e.quadraticCurveTo(-.133,-.035,-.121,.067),e.bezierCurveTo(-.119,.171,.123,.165,.12,.06),e.quadraticCurveTo(.136,-.029,.077,-.061),e.lineTo(.047,-.071),e.lineTo(-.047,-.073),e.closePath();for(let[s,o,a,l,c]of[[-.052,.019,.039,.043,-.2],[.052,.011,.033,.035,.18]]){let h=new li;h.absellipse(s,o,a,l,0,Math.PI*2,!0,c),e.holes.push(h)}let t=new li;t.moveTo(.001,-.026),t.lineTo(-.012,-.05),t.quadraticCurveTo(.001,-.045,.013,-.05),t.closePath(),e.holes.push(t);let n=pi(new sn(e,{depth:.022,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),i);n.position.z=.043,Ni(i,[0,.04,-.055],[.12,.121,.077]),Ni(i,[0,.012,.027],[.109,.093,.01],Aa);for(let s of[-1,1])Ni(i,[s*.093,-.042,.047],[.028,.022,.025]);for(let[s,o,a,l,c]of[[-.019,-.084,.028,.042,-.11],[.017,-.08,.027,.036,.17],[-.06,-.073,.014,.018,-.28],[.06,-.071,.012,.015,.23]]){let h=pi(new wt(a,l,.018),i);h.position.set(s,o,.064),h.rotation.z=c}let r=new ve;r.name="Lopsided cartoon jaw",r.position.set(.004,-.071,-.003),r.rotation.z=-.12,i.add(r),Hi(r,[[-.087,.04,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.04,-.025]],.014);for(let[s,o]of[[-.052,-.04],[.038,-.041],[.057,-.036]]){let a=pi(new wt(.015,.016,.015),r);a.position.set(s,o,.071),a.rotation.z=s*3}return Hi(i,[[-.009,.154,-.016],[.003,.15,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=Aa,i}function Gd(){let i=new ve;i.name="Short articulated spine";for(let e=0;e<6;e++){let t=(e-2.5)*.038,n=.01*Math.sin(e*.7);Ni(i,[0,t,n],[.025,.016,.02]);for(let r of[-1,1])El(i,[r*.012,t,n],[r*.045,t-.009,n-.008],.007);El(i,[0,t,n],[0,t+.008,n-.043],.006)}return i}function W0(){let i=new ve;i.name="Broken rib cage",i.add(Gd());for(let e=0;e<5;e++)for(let t of[-1,1]){if(e===4&&t===1)continue;let n=.08-e*.043,r=.08+Math.sin(e/5*Math.PI)*.038;Hi(i,[[0,n,-.02],[t*r*.65,n+.018,-.045],[t*r,n-.004,.008],[t*r*.82,n-.031,.065],[t*.018,n-.044,.08]],.0085)}return El(i,[0,.06,.081],[0,-.12,.079],.01),i}function ME(i){let e=i===0,t=new ve;t.name=e?"Pudding-shaped skull with bony party hat":"Sushi-shaped skull with bony beanie";let n=new St;if(e)n.moveTo(-.3,-.27),n.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),n.quadraticCurveTo(0,.34,.29,.24),n.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),n.quadraticCurveTo(0,-.34,-.3,-.27);else{n.moveTo(-.31,-.225),n.quadraticCurveTo(-.39,-.16,-.34,-.025),n.lineTo(-.41,.17),n.quadraticCurveTo(-.4,.22,-.21,.29),n.quadraticCurveTo(0,.33,.21,.29),n.quadraticCurveTo(.4,.22,.41,.17),n.lineTo(.34,-.025),n.quadraticCurveTo(.39,-.16,.31,-.225);for(let c=7;c>=0;c--){let h=-.31+c*.0775;n.quadraticCurveTo(h+.038,-.285,h,-.225)}}n.closePath();let r=e?.015:-.055,s=e?.13:.14;for(let c of[-1,1]){let h=new li;h.absellipse(c*s,r,.07,c<0?.065:.057,0,Math.PI*2,!0,c*.18),n.holes.push(h)}let o=new li;o.moveTo(0,r-.037),o.lineTo(-.023,r-.083),o.quadraticCurveTo(0,r-.075,.023,r-.083),o.closePath(),n.holes.push(o);let a=new li;a.absellipse(0,e?-.19:-.192,e?.208:.227,e?.064:.042,0,Math.PI*2,!0),n.holes.push(a);let l=pi(new sn(n,{depth:.055,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24}),t);l.position.z=.135,Ni(t,[0,.012,-.035],[e?.355:.37,.235,.16]),Ni(t,[0,-.025,.126],[.325,.265,.008],Aa);for(let c=0;c<7;c++){if(c===1||c===5)continue;let h=pi(new wt(.039,c%2?.037:.05,.035),t);h.position.set((c-3)*.053,e?-.147:-.169,.175),h.rotation.z=(c%3-1)*.12}if(e){Hi(t,[[-.3,.19,.19],[-.24,.13,.2],[-.18,.195,.21],[-.11,.095,.21],[-.045,.17,.21],[.025,.085,.21],[.09,.17,.21],[.16,.105,.21],[.23,.19,.2],[.3,.15,.19]],.015);let c=new ve;c.name="Ivory party-hat crest",c.position.set(.02,.285,0),c.rotation.z=-.12,t.add(c);let h=pi(new Kr(.123,.3,32),c);h.position.y=.15;let f=pi(new Qt(.12,.012,8,32),c);f.rotation.x=Math.PI/2;for(let u=0;u<5;u++){let m=u/5*Math.PI*2;Hi(c,[[Math.cos(m)*.12,.005,Math.sin(m)*.12],[Math.cos(m)*.065,.15,Math.sin(m)*.065],[0,.3,0]],.004)}Ni(c,[0,.314,0],[.028,.03,.028]),Hi(t,[[-.2,.27,.15],[-.18,.23,.195],[-.205,.2,.2],[-.18,.17,.2]],.0025).material=Aa}else{for(let u of[-1,1])Hi(t,[[u*.115,.027,.197],[u*.12,.16,.198],[u*.13,.292,.16]],.0035).material=Aa;Hi(t,[[-.37,.01,.17],[-.2,.036,.199],[0,.048,.2],[.2,.036,.199],[.37,.01,.17]],.012);let c=new ve;c.name="Ribbed ivory beanie crest",c.position.y=.3,t.add(c),pi(new en(1,32,16,0,Math.PI*2,0,Math.PI/2),c).scale.set(.235,.235,.2);let f=pi(new Qt(.238,.02,10,40),c);f.rotation.x=Math.PI/2,f.scale.y=.86;for(let u=0;u<10;u++){let m=u/10*Math.PI*2,g=[];for(let y=0;y<=8;y++){let p=y/8*Math.PI/2;g.push([Math.cos(m)*.238*Math.cos(p),.237*Math.sin(p),Math.sin(m)*.203*Math.cos(p)])}Hi(c,g,.006)}}return t}function X0(i){let e=new ve;if(e.name=["Pudding Figpal skeleton","Sushi Figpal skeleton","Pufferfish skeleton"][i],i===2){let t=vE();t.scale.set(1.25,1.35,1.05),t.position.set(-.16,.035,.055),e.add(t);for(let n=0;n<7;n++){let r=-.05+n*.055;if(Ni(e,[r,0,0],[.028,.021,.02]),n<5)for(let s of[-1,1])Hi(e,[[r,0,0],[r+.026,s*.09,-.01],[r+.014,s*(.22-n*.023),.015]],.01)}for(let n of[-.16,-.08,0,.08,.16])El(e,[.29,0,0],[.47,n,0],.009)}else e.add(ME(i));return e}var _E=[[{kind:"femur",x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.9}],[{kind:"ribs",x:.02,y:.4,z:.1,tilt:.3,yaw:-.2,scale:.78},{kind:"spine",x:-.16,y:.4,z:-.08,tilt:-.5,yaw:.4,scale:.75},{kind:"rib",x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}],[{kind:"forearm",x:-.13,y:.42,z:.16,tilt:-.68,yaw:.2,scale:.88},{kind:"jaw",x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}]],EE={femur:Vd,forearm:()=>Vd(!0),rib:V0,ribs:W0,spine:Gd,jaw:G0};function q0(i){let e=new ve;e.name=`Bones floating in canister ${i+1}`;let t=_E[i].map((r,s)=>{let o=EE[r.kind]();return o.scale.multiplyScalar(r.scale),e.add(o),{...r,object:o,phase:i*1.91+s*2.3}});function n(r,s=!1){let o=s?0:r;for(let a of t){let l=a.phase,c=.022,h=.46;a.object.position.set(a.x+c*Math.sin(o*.27+l),a.y+.014*Math.sin(o*.57+l),a.z+.018*Math.cos(o*.23+l)),a.object.rotation.set(.1*Math.sin(o*.19+l),a.yaw+h*Math.sin(o*.17+l),a.tilt+.11*Math.sin(o*.31+l),"YXZ")}}return n(0),{group:e,update:n}}function Y0(i,e){let t=X0(e);t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.parent.add(t),i.updateWorldMatrix(!0,!0);let n=i.matrixWorld.clone().invert(),r=new Rn,s=new Rn;i.traverse(g=>{g.isMesh&&(g.geometry.computeBoundingBox(),s.copy(g.geometry.boundingBox).applyMatrix4(new It().multiplyMatrices(n,g.matrixWorld)),r.union(s))});let o=new Li,a=new Li;function l(g,y){let p=new Map;g.traverse(d=>{if(!d.isMesh)return;let M=x=>{if(!p.has(x)){let E=x.clone();E.onBeforeCompile=x.onBeforeCompile,E.customProgramCacheKey=x.customProgramCacheKey,E.clippingPlanes=[y],E.clipShadows=!0,p.set(x,E)}return p.get(x)};d.material=Array.isArray(d.material)?d.material.map(M):M(d.material)})}l(i,o),l(t,a);let c=r.min.y-.04,h=!1,f=new w;function u(g){i.updateWorldMatrix(!0,!1),f.setFromMatrixPosition(i.matrixWorld),f.y=g,i.worldToLocal(f),c=Math.max(c,Math.min(r.max.y+.04,f.y)),o.set(new w(0,1,0),-c).applyMatrix4(i.matrixWorld),a.copy(o).negate(),h=c>=r.max.y+.015,i.visible=!h,t.visible=c>r.min.y}u(-100);function m(){c=r.min.y-.04,h=!1,u(-100)}return{skeleton:t,update:u,reset:m,get transformed(){return h},get cutHeight(){return c}}}function $0(){let i=new yo().load(new URL("./assets/open-to-work.png",import.meta.url).href,r=>{Ie.mobile&&xl(r,256)});i.colorSpace=yt,i.anisotropy=4;let e=new Oe({map:i,transparent:!0,alphaTest:.025,depthWrite:!1,roughness:.86,metalness:0,emissiveMap:i,emissive:16777215,emissiveIntensity:.18}),t=new _t(.78,.78,48,2),n=t.attributes.position;for(let r=0;r<n.count;r++)n.setZ(r,Math.sqrt(.49**2-n.getX(r)**2));return t.computeVertexNormals(),t.computeBoundingSphere(),()=>{let r=new ot(t,e);return r.name="#OPENTOWORK decal on curved tank glass",r.position.y=.7,r.renderOrder=8,r}}function Z0(){let i=new ve;i.name="Three suspended Figpals over bubbling green canisters";let e=Math.PI*2,t=193108,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=(J,me=.78,Me=.005)=>new Oe({color:J,roughness:me,emissive:J,emissiveIntensity:Me}),s=r(1184789,.85,0),o=r(16772534),a=r(16184551),l=r(36072),c=r(15226636),h=r(11022601),f=r(16755746),u=r(16754855),m=r(10214644),g=r(294108),y=r(16765992),p=new mt({color:1053459,side:Tn});p.onBeforeCompile=J=>{J.vertexShader=J.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.009;`)},p.customProgramCacheKey=()=>"figpal-outline-v1";function d(J,me,Me=i,ge=!1){let xe=new ot(J,me);if(xe.castShadow=!0,xe.receiveShadow=!0,Me.add(xe),ge){let ae=new ot(J,p);ae.name="Ink outline",xe.add(ae)}return xe}function M(J,me,Me,ge,xe=!1){let ae=d(new en(1,Ie.mobile?12:24,Ie.mobile?8:16),Me,ge,xe);return ae.position.set(...J),ae.scale.set(...me),ae}function x(J,me,Me,ge=i){let xe=d(new wt(...J),Me,ge);return xe.position.set(...me),xe}function E(J,me,Me,ge,xe=i,ae=!1){let Be=d(new Ut(J,J,me,Ie.mobile?16:48,1,ae),ge,xe);return Be.position.set(...Me),Be}function R(J,me,Me,ge=i){let xe=new Yt(J.map(ae=>new w(...ae)));return d(new un(xe,Math.max(12,J.length*(Ie.mobile?2:5)),me,Ie.mobile?4:6,!1),Me,ge)}function b(J,me,Me,ge,xe=i){let ae=new w(...J),Be=new w(...me),$=Be.clone().sub(ae),Re=E(Me,$.length(),ae.clone().add(Be).multiplyScalar(.5).toArray(),ge,xe);return Re.quaternion.setFromUnitVectors(new w(0,1,0),$.normalize()),Re}function T(J,me,Me,ge,xe=i){let ae=d(new Qt(J,me,Ie.mobile?5:8,Ie.mobile?32:64),ge,xe);return ae.rotation.x=Math.PI/2,ae.position.y=Me,ae}function I(J,me,Me,ge,xe=.035){let ae=new sn(J,{depth:me-xe*2,bevelEnabled:!0,bevelSize:xe,bevelThickness:xe,bevelSegments:Ie.mobile?1:3,steps:1,curveSegments:Ie.mobile?8:16});return ae.translate(0,0,-me/2+xe),d(ae,Me,ge,!0)}function O(J,me,Me,ge=.105,xe="worried"){let ae=new ve;ae.name=`${xe} expression`,J.add(ae);for(let Be of[-1,1])M([Be*ge,me,Me],[.022,.031,.013],s,ae),R([[Be*(ge+.035),me+.041,Me+.004],[Be*ge,me+.055,Me+.007],[Be*(ge-.035),me+.074,Me+.007]],.01,s,ae);xe==="afraid"?M([0,me-.075,Me+.003],[.026,.038,.012],s,ae):R([[-.052,me-.091,Me],[0,me-.06,Me+.005],[.052,me-.091,Me]],.012,s,ae)}function v(){let J=new ve;J.name="Party-hat pudding Figpal";let me=new St;me.moveTo(-.3,-.27),me.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),me.quadraticCurveTo(0,.34,.29,.24),me.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),me.quadraticCurveTo(0,-.34,-.3,-.27),I(me,.37,f,J,.035);let Me=new St;Me.moveTo(-.29,.25),Me.quadraticCurveTo(0,.34,.29,.25),Me.lineTo(.3,.13),Me.quadraticCurveTo(.28,.1,.22,.16),Me.lineTo(.15,.055),Me.quadraticCurveTo(.13,.035,.08,.115),Me.lineTo(.01,.045),Me.quadraticCurveTo(-.02,.028,-.09,.12),Me.lineTo(-.17,.065),Me.quadraticCurveTo(-.2,.05,-.22,.16),Me.lineTo(-.3,.13),Me.closePath();let ge=I(Me,.025,o,J,.006);ge.position.z=.191,O(J,-.045,.222);for(let Te of[-1,1])M([Te*.24,-.085,.206],[.045,.028,.012],u,J);let xe=new ve;xe.position.set(.02,.285,0),xe.rotation.z=-.12,xe.scale.setScalar(.6),J.add(xe);let ae=document.createElement("canvas");ae.width=512,ae.height=256;let Be=ae.getContext("2d");Be.fillStyle="#ffd62d",Be.fillRect(0,0,512,256),Be.fillStyle="#0088ea";for(let Te=0;Te<4;Te++)for(let ze=0;ze<7;ze++)Be.beginPath(),Be.ellipse(ze*85+Te%2*42,30+Te*67,18,14,0,0,e),Be.fill();let $=new Nt(ae);$.colorSpace=yt;let Re=new Oe({map:$,roughness:.82}),ce=d(new Kr(.205,.5,48),Re,xe,!0);ce.position.y=.25,T(.205,.009,0,s,xe),M([0,.515,0],[.042,.045,.041],l,xe);for(let Te=0;Te<8;Te++){let ze=Te/8*e;b([0,.515,.005],[Math.cos(ze)*.07,.515+Math.sin(ze)*.07,.006],.012,l,xe)}return{object:J}}function S(){let J=new ve;J.name="Orange-beanie sushi Figpal";let me=new St;me.moveTo(-.32,-.035),me.quadraticCurveTo(-.38,-.11,-.31,-.2);for(let Re=0;Re<8;Re++){let ce=-.31+Re*.0775;me.quadraticCurveTo(ce+.038,-.285,ce+.0775,-.225)}me.quadraticCurveTo(.39,-.13,.32,-.035),me.quadraticCurveTo(0,.035,-.32,-.035),I(me,.43,a,J,.025);let Me=new St;Me.moveTo(-.37,-.015),Me.lineTo(-.41,.17),Me.quadraticCurveTo(-.4,.22,-.21,.29),Me.quadraticCurveTo(0,.33,.21,.29),Me.quadraticCurveTo(.4,.22,.41,.17),Me.lineTo(.37,-.015),Me.quadraticCurveTo(0,.055,-.37,-.015),I(Me,.43,y,J,.022);let ge=new St;ge.moveTo(-.12,.022),ge.lineTo(-.13,.31),ge.quadraticCurveTo(0,.33,.13,.31),ge.lineTo(.12,.022),ge.closePath();let xe=I(ge,.44,s,J,.006);xe.position.z=.008,O(J,-.1,.253,.1,"afraid");for(let Re=0;Re<16;Re++){let ce=Re/16*e;M([Math.cos(ce)*.29,-.18+Math.sin(ce)*.025,Math.sin(ce)*.17],[.031,.022,.015],a,J)}let ae=new ve;ae.position.y=.3,J.add(ae),d(new en(1,32,16,0,e,0,Math.PI/2),c,ae,!0).scale.set(.235,.235,.2);for(let Re=0;Re<10;Re++){let ce=Re/10*e,Te=[];for(let ze=0;ze<=14;ze++){let Ge=.08+ze/14*(Math.PI/2-.08);Te.push([Math.sin(Ge)*Math.cos(ce)*.238,Math.cos(Ge)*.237,Math.sin(Ge)*Math.sin(ce)*.204])}R(Te,.006,h,ae)}let $=E(.258,.065,[0,.002,0],c,ae);$.scale.z=.86,T(.26,.009,-.03,s,ae).scale.y=.86,T(.26,.008,.034,s,ae).scale.y=.86;for(let Re=0;Re<30;Re++){let ce=Re/30*e;b([Math.cos(ce)*.259,-.025,Math.sin(ce)*.224],[Math.cos(ce)*.259,.027,Math.sin(ce)*.224],.0045,h,ae)}return{object:J}}function H(){let J=new ve;J.name="Propeller-hat pufferfish Figpal",M([0,0,0],[.335,.33,.25],m,J,!0);let me=new St;me.moveTo(.26,.03),me.quadraticCurveTo(.34,.06,.4,.16),me.quadraticCurveTo(.49,.23,.5,.06),me.quadraticCurveTo(.51,-.11,.43,-.13),me.lineTo(.33,-.05),me.closePath(),I(me,.11,m,J,.02);for(let ae=0;ae<3;ae++)R([[.38,-.025+ae*.04,.078],[.465,-.075+ae*.085,.078]],.012,g,J);for(let ae of[-1,1]){let Be=M([ae*.303,-.02,.13],[.065,.1,.035],m,J,!0);Be.rotation.z=ae*.25;for(let $=0;$<3;$++)R([[ae*.3,-.06+$*.04,.168],[ae*.338,-.075+$*.05,.16]],.01,g,J)}O(J,.015,.252,.09,"worried");for(let ae=0;ae<11;ae++){let Be=Math.PI*1.03+ae/10*Math.PI*.9,$=Math.cos(Be)*.26,Re=Math.sin(Be)*.25,ce=.25*Math.sqrt(Math.max(.04,1-($/.335)**2-(Re/.33)**2))+.008;R([[$,Re,ce],[$+.008,Re-.027,ce]],.011,g,J)}for(let ae=0;ae<7;ae++){let Be=.15+ae/6*Math.PI*.88;b([Math.cos(Be)*.31,Math.sin(Be)*.31,0],[Math.cos(Be)*.37,Math.sin(Be)*.37,0],.012,g,J)}let Me=new ve;Me.position.set(0,.275,0),J.add(Me);let ge=[r(15746581),y,r(4802281),y];for(let ae=0;ae<4;ae++)d(new en(1,12,12,ae*e/4,e/4,0,Math.PI/2),ge[ae],Me).scale.set(.215,.2,.215);T(.218,.011,0,s,Me),b([0,.2,0],[0,.27,0],.012,a,Me);let xe=new ve;xe.position.y=.275,Me.add(xe),M([0,0,0],[.025,.018,.025],a,xe);for(let ae of[-1,1])M([ae*.066,0,0],[.083,.012,.029],a,xe);return{object:J,propeller:xe}}let G=fi(14802384),Y=fi(9606540),j=fi(15065300),W=fi(14012614);W.bumpScale=7e-4,W.envMapIntensity=.85;let F=new Oe({color:1382417,roughness:.29,metalness:.08}),se=[];for(let J=0;J<=12;J++){let me=J/12*Math.PI;se.push(new w(Math.cos(me)*.015,.01+Math.sin(me)*.015,0))}for(let J=0;J<=12;J++){let me=Math.PI+J/12*Math.PI;se.push(new w(Math.cos(me)*.015,-.01+Math.sin(me)*.015,0))}let le=new un(new Yt(se,!0),Ie.chainSegments,.0048,Ie.chainRadialSegments,!0),N=new gt,ee=new w(0,1,0),Q=new dt;function oe(J,me,Me=null){let ge=new Yt(J.map(Re=>new w(...Re))),xe=ge.getLength(),ae=Me??Math.max(2,Math.ceil(xe/.033)),Be=new hn(le,W,ae);Be.name="Interlocking steel chain links",Be.castShadow=!0,Be.receiveShadow=!0,Be.frustumCulled=!1,me.add(Be);for(let Re=0;Re<ae;Re++)Be.setColorAt(Re,new pt().setRGB(.67+n()*.3,.58+n()*.3,.45+n()*.34));function $(Re,ce){let Te=new w(...Re),ze=new w(...ce),Ge=ze.clone().sub(Te),ht=Ge.length(),At=Math.min(ae,Math.max(2,Math.ceil(ht/.033)));Be.count=At,Ge.normalize();for(let zt=0;zt<At;zt++)N.position.copy(Te).lerp(ze,zt/(At-1)),N.quaternion.setFromUnitVectors(ee,Ge),Q.setFromAxisAngle(ee,(zt%2?Math.PI/2:0)+Math.sin(zt*7.17)*.07),N.quaternion.multiply(Q),N.scale.setScalar(1),N.updateMatrix(),Be.setMatrixAt(zt,N.matrix);Be.instanceMatrix.needsUpdate=!0}if(Me)Be.instanceMatrix.setUsage(gn),$(J[0],J.at(-1));else for(let Re=0;Re<ae;Re++){let ce=Re/(ae-1);N.position.copy(ge.getPointAt(ce)),N.quaternion.setFromUnitVectors(ee,ge.getTangentAt(ce)),Q.setFromAxisAngle(ee,(Re%2?Math.PI/2:0)+Math.sin(Re*7.17)*.07),N.quaternion.multiply(Q),N.scale.setScalar(1),N.updateMatrix(),Be.setMatrixAt(Re,N.matrix)}return{object:Be,setPoints:$}}let k=z0(),ne=$0(),{glass:B,haze:z,fluid:V,liquidTop:ue,foam:we,bubble:Ue,ripple:K,waterTime:L}=k,fe=[],_e=[],ye=[],Ee=[],De=new gt,Ae=[{x:-3.05,z:-1.05,height:2.02,winchY:2.8},{x:-2.85,z:.3,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.6,winchY:2.38}];for(let J=0;J<Ae.length-1;J++){let me=Ae[J],Me=Ae[J+1];b([me.x,3.065,me.z],[Me.x,3.065,Me.z],.052,G)}let U=[v,S,H];for(let J=0;J<3;J++){let{x:me,z:Me,height:ge,winchY:xe}=Ae[J],ae=new ve;ae.position.set(me,.012,Me),ae.name=`Green bubbling canister ${J+1}`,i.add(ae),E(.515,.16,[0,.1,0],G,ae),E(.46,.035,[0,.025,0],Y,ae);for(let Fe=0;Fe<8;Fe++){let xt=Fe/8*e;M([Math.cos(xt)*.49,.15,Math.sin(xt)*.49],[.022,.022,.022],j,ae)}let Be=E(.485,1.02,[0,.72,0],B,ae,!0);Be.castShadow=!1,Be.renderOrder=6;let $=E(.487,1.02,[0,.72,0],z,ae,!0);$.name="Condensation, mineral streaks and algae tide marks",$.castShadow=!1,$.renderOrder=7,ae.add(ne());let Re=E(.444,.865,[0,.64,0],V,ae,!0);Re.castShadow=!1,Re.renderOrder=2;let ce=q0(J);ae.add(ce.group);for(let Fe of ce.group.children)qn(Fe,{minObjects:2,dispose:!1});E(.444,.018,[0,.215,0],ue,ae);for(let Fe of[.225,1.235])T(.484,.036,Fe,G,ae),T(.454,.01,Fe-.018,Y,ae);for(let Fe of[.15,2.24,4.34]){let xt=Math.cos(Fe)*.485,Pn=Math.sin(Fe)*.485;b([xt,.22,Pn],[xt,1.23,Pn],.021,G,ae)}for(let Fe of[-1,1])R([[Fe*.47,.96,0],[Fe*.58,.96,0],[Fe*.58,.74,0],[Fe*.48,.74,0]],.022,G,ae);let Te=new hr(0,.444,Ie.mobile?32:48,Ie.mobile?6:10);Te.rotateX(-Math.PI/2);let ze=d(Te,ue,ae);ze.position.y=1.074,ze.castShadow=!1,ze.renderOrder=4,T(.441,.006,1.075,ue,ae).renderOrder=4;let Ge=Array.from({length:Ie.mobile?18:48},()=>({x:(n()-.5)*.61,z:(n()-.5)*.61,r:.007+n()**2*.023,phase:n(),speed:.15+n()*.17})),ht=new hn(new en(1,12,8),Ue,Ge.length);ht.name="Rising liquid bubbles",ht.instanceMatrix.setUsage(gn),ht.frustumCulled=!1,ht.renderOrder=3,ae.add(ht);let At=[];for(let Fe=0;Fe<(Ie.mobile?6:24);Fe++){let xt=n()*e,Pn=Fe<18?.4+n()*.025:n()*.34,lt=.006+n()*.016,Ri=M([Math.cos(xt)*Pn,1.074,Math.sin(xt)*Pn],[lt,lt*.65,lt],we,ae);Ri.castShadow=!1,Ri.renderOrder=5,At.push({mesh:Ri,baseRadius:lt,phase:n()*e})}let zt=[];for(let Fe=0;Fe<(Ie.mobile?2:5);Fe++){let xt=d(new hr(.96,1,Ie.mobile?20:40),K.clone(),ae);xt.rotation.x=-Math.PI/2,xt.position.set((n()-.5)*.45,1.078,(n()-.5)*.45),xt.castShadow=!1,xt.renderOrder=5,zt.push({mesh:xt,phase:n()})}let Tt=document.createElement("canvas");Tt.width=256,Tt.height=128;let Gt=Tt.getContext("2d");Gt.fillStyle="#bec39f",Gt.fillRect(0,0,256,128),Gt.fillStyle="#242c22",Gt.font="bold 67px monospace",Gt.textAlign="center",Gt.fillText(`0${J+1}`,128,87);let fn=new Nt(Tt);fn.colorSpace=yt;let vn=d(new _t(.17,.085),new Oe({map:fn,roughness:.9}),ae);vn.position.set(0,.115,.517),vn.castShadow=!1;for(let Fe=0;Fe<5;Fe++){let xt=x([.065,.065,.007],[-.23+Fe*.115,.12,.5],Fe%2?s:r(10064462,.85,0),ae);xt.rotation.z=-.45}vn.position.z=.52;let gr=E(.064,.03,[.32,1.19,.37],G,ae);gr.rotation.x=Math.PI/2,d(new Ui(.052,24),o,ae).position.set(.32,1.19,.391),R([[.32,1.19,.395],[.3,1.219,.395]],.003,s,ae);let Mn=new ve;Mn.name=`Tank ${J+1} drain valve`,Mn.position.set(.3,.29,.43),Mn.userData.valveIndex=J,ae.add(Mn);let nt=E(.042,.19,[0,0,0],G,Mn);nt.rotation.x=Math.PI/2,R([[0,0,.045],[0,-.035,.16],[0,-.1,.23]],.033,G,Mn);let it=new gt;it.position.set(0,-.1,.23),Mn.add(it);let tt=d(new hr(.024,.034,20),G,Mn);tt.position.copy(it.position),tt.rotation.x=.6;let at=d(new Ui(.024,20),Y,Mn);at.position.copy(it.position),at.position.z-=.001,at.rotation.x=.6,b([0,0,.01],[0,.075,.11],.012,G,Mn);let ft=new ve;ft.name="Spinning red drain handwheel",ft.position.set(0,.075,.12),Mn.add(ft),d(new Qt(.088,.01,8,32),h,ft);for(let Fe=0;Fe<3;Fe++){let xt=Fe/3*e;b([0,0,0],[Math.cos(xt)*.084,Math.sin(xt)*.084,0],.007,h,ft)}let Ve=E(.018,.028,[0,0,0],j,ft);Ve.rotation.x=Math.PI/2;let Mt=d(new en(.102,12,8),new mt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),ft);Mt.castShadow=!1,ye.push({object:Mn,outlet:it,setOpen(Fe){ft.rotation.z=-Fe*Math.PI*4,ft.position.z=.12+Fe*.018}});let yn=new An(7052325,.58,1.7,2);yn.position.set(0,.85,0),yn.userData.mobileEssential=J===1,ae.add(yn),Ie.mobile&&(yn.visible=J===1),_e.push({surface:ze,bubbles:ht,bubbleData:Ge,foam:At,ripples:zt,floatingBones:ce,phase:J*1.7});let Wt=Math.atan2(1.85221-me,3.1149-Me);ae.rotation.y=Wt;let kt=new ve;kt.name=`Chain hoist ${J+1}`,kt.position.set(me,0,Me),kt.rotation.y=Wt,i.add(kt),x([.4,.05,.34],[0,3.13,0],G,kt);for(let Fe of[-1,1])b([Fe*.16,3.12,0],[Fe*.16,xe+.1,0],.023,G,kt),M([Fe*.16,3.12,.08],[.026,.026,.026],j,kt);let P=new ve;P.name=`Winch ${J+1}: lower or raise Figpal`,P.position.y=xe,P.userData.hoistIndex=J,kt.add(P),x([.46,.12,.3],[0,.1,-.03],G,P);for(let Fe of[-1,1]){x([.035,.22,.27],[Fe*.191,.012,-.01],G,P);let xt=E(.057,.055,[Fe*.205,0,0],F,P);xt.rotation.z=Math.PI/2;for(let Pn of[-.073,.093])for(let lt of[-.106,.096]){let Ri=d(new Ut(.013,.013,.018,6),j,P);Ri.position.set(Fe*.215,Pn,lt),Ri.rotation.z=Math.PI/2}}x([.105,.09,.11],[.3,.15,-.035],Y,P),R([[.3,.18,.01],[.38,.21,.06],[.43,.12,.1],[.4,-.04,.07]],.008,F,P);let te=document.createElement("canvas");te.width=256,te.height=128;let he=te.getContext("2d");he.fillStyle="#817653",he.fillRect(0,0,256,128),he.fillStyle="#2a2b24",he.font="bold 22px monospace",he.fillText("CHAIN HOIST",15,30),he.font="18px monospace",he.fillText("250 KG / 1978",15,62),he.fillText("SERVICE OVERDUE",15,103);for(let Fe=0;Fe<90;Fe++)he.fillStyle=Fe%2?"rgba(42,25,12,.48)":"rgba(170,156,116,.7)",he.fillRect(n()*256,n()*128,n()*17,n()*3);let de=new Nt(te);de.colorSpace=yt;let ie=d(new _t(.25,.1),new Oe({map:de,roughness:.87}),P);ie.position.set(-.005,.1,.124),ie.rotation.z=.028;let He=new ve;He.rotation.z=Math.PI/2,P.add(He);let We=new ve;We.name="Rotating chain sprocket",He.add(We),E(.1,.28,[0,0,0],Y,We);for(let Fe of[-1,1]){E(.136,.026,[0,Fe*.16,0],G,We);for(let xt=0;xt<12;xt++){let Pn=xt/12*e;x([.026,.03,.032],[Math.cos(Pn)*.13,Fe*.16,Math.sin(Pn)*.13],j,We)}}let Xe=[];for(let Fe=0;Fe<=120;Fe++){let xt=Fe/120*e*4;Xe.push([Math.cos(xt)*.106,-.1+Fe/120*.2,Math.sin(xt)*.106])}oe(Xe,We).object.name="Greasy chain wound around the drum";let et=E(.105,.24,[.3,.015,-.04],Y,P);et.rotation.z=Math.PI/2;for(let Fe=0;Fe<6;Fe++){let xt=E(.115,.009,[.215+Fe*.033,.015,-.04],G,P);xt.rotation.z=Math.PI/2}let rt=new ve;rt.position.set(-.22,0,0),P.add(rt),b([0,0,0],[0,-.13,0],.014,G,rt),b([0,-.13,0],[-.09,-.13,0],.021,Y,rt);let ct=new An(12371885,.4,.85,2);ct.position.set(-.24,.12,.36),P.add(ct),Ie.mobile&&(ct.visible=!1),M([0,.17,.28],[.018,.011,.012],new mt({color:7767659}),P);let Qe=new ve;Qe.name=`Suspended Figpal ${J+1}`,Qe.position.y=ge,kt.add(Qe);let Et=U[J]();Et.object.scale.setScalar(.62),Et.object.rotation.z=(J-1)*.035,Qe.add(Et.object);let Ot=Y0(Et.object,J);qn(Et.object,{exclude:[Et.propeller],minObjects:2,dispose:!1}),Ot.skeleton.visible=!0,qn(Ot.skeleton,{minObjects:2,dispose:!1}),Ot.skeleton.visible=!1;let tn=new gt;tn.position.set(0,.5,0),Qe.add(tn),Ee.push(tn),b([-.22,.45,0],[.22,.45,0],.019,G,Qe);let Xt=d(new Qt(.045,.01,6,18,Math.PI*1.65),j,Qe);Xt.position.set(0,.49,0),Xt.rotation.z=-.5,b([-.028,.476,.008],[.016,.511,.008],.004,Y,Qe);for(let Fe of[-1,1])oe([[Fe*.21,.45,0],[Fe*.245,.11,0],[Fe*.23,-.12,.015],[Fe*.16,-.205,.04],[0,-.222,.045]],Qe);let Ht=oe([[0,xe-.1,.025],[0,ge+.52,0]],kt,72),st=oe([[-.1,xe-.01,-.11],[-.11,xe-.36,-.12],[-.16,xe-.4,-.1],[-.2,xe-.05,-.08]],kt);st.object.name="Winch return chain loop";let Zt=new ve;Zt.name=`Canister ${J+1} winch control`,Zt.position.set(.39,.85,.4),Zt.rotation.y=.35,Zt.userData.hoistIndex=J,ae.add(Zt),x([.12,.21,.07],[0,0,0],Y,Zt),M([0,.047,.047],[.024,.024,.015],r(8072739,.6,0),Zt),M([0,-.047,.047],[.024,.024,.015],r(6913097,.6,0),Zt),R([[.39,.95,.4],[.44,1.02,.35],[.46,1.27,.12],[.44,xe-.13,.06],[.24,xe,0]],.007,Y,kt);for(let Fe of[We,rt,Zt,ft])qn(Fe,{minObjects:2,allowInteractiveRoot:!0,dispose:!1});qn(P,{exclude:[He,rt],minObjects:2,allowInteractiveRoot:!0,dispose:!1}),qn(kt,{exclude:[Qe,P],minObjects:2,dispose:!1}),qn(ae,{exclude:[ze,ce.group,...At.map(Fe=>Fe.mesh),...zt.map(Fe=>Fe.mesh)],minObjects:2,dispose:!1}),fe.push({rig:kt,hanger:Qe,transformation:Ot,captive:Et.object,propeller:Et.propeller,drum:We,crank:rt,loadChain:Ht,height:ge,homeHeight:ge,targetHeight:ge,winchY:xe,phase:J*2.1,lowered:!1})}let A=new An(11712685,.75,3.8,2);A.position.set(-1.75,2.75,-.2),i.add(A);function re(J){let me=fe[J];return me?(me.lowered=!me.lowered,me.targetHeight=me.lowered?.65:me.homeHeight,`Figpal ${J+1}${me.transformation.transformed?"'s bones":""} ${me.lowered?"lowering into the canister":"rising above the canister"}.`):null}function Se(){for(let J of fe)J.lowered=!0,J.targetHeight=.65}function Pe(){for(let J of fe)J.lowered=!1,J.height=J.targetHeight=J.homeHeight,J.hanger.position.set(0,J.homeHeight,0),J.hanger.rotation.z=0,J.loadChain.setPoints([0,J.winchY-.1,.025],[0,J.homeHeight+.52,0]),J.drum.rotation.y=J.crank.rotation.x=0,J.transformation.reset()}let Ce=0,Ze={};function be(J,me=!1){let Me=Math.max(0,Math.min(.12,J-Ce));Ce=J;let ge=me?0:J;L.value=ge;for(let xe of fe){let ae=xe.targetHeight-xe.height;xe.height=me?xe.targetHeight:xe.height+Math.sign(ae)*Math.min(Math.abs(ae),Me*.15),k0(J,xe.height,xe.winchY,xe.phase,me,Ze),xe.hanger.position.set(Ze.x,Ze.y,0),xe.hanger.rotation.z=Ze.angle,xe.loadChain.setPoints([0,xe.winchY-.1,.025],[Ze.hookX,Ze.hookY,0]),xe.drum.rotation.y=(xe.homeHeight-xe.height)/.1,xe.crank.rotation.x=(xe.homeHeight-xe.height)/.1,xe.transformation.update(1.086),xe.propeller&&(xe.propeller.rotation.y=ge*.18)}for(let xe of _e){xe.floatingBones.update(J,me);let ae=xe.surface.geometry.attributes.position,Be=xe.surface.geometry.attributes.normal;for(let $=0;$<ae.count;$++){let Re=ae.getX($),ce=ae.getZ($),Te=Re*17+ge*1.4+xe.phase,ze=ce*14-ge*1.1,Ge=(Re+ce)*28-ge*2.1;ae.setY($,Math.sin(Te)*Math.cos(ze)*.0035+Math.sin(Ge)*.0012);let ht=Math.cos(Te)*Math.cos(ze)*.0595+Math.cos(Ge)*.0336,At=-Math.sin(Te)*Math.sin(ze)*.049+Math.cos(Ge)*.0336,zt=Math.hypot(ht,1,At);Be.setXYZ($,-ht/zt,1/zt,-At/zt)}ae.needsUpdate=!0,Be.needsUpdate=!0,xe.bubbleData.forEach(($,Re)=>{let ce=(ge*$.speed+$.phase)%1;De.position.set($.x+Math.sin(ge*1.3+Re)*.012,.25+ce*.84,$.z+Math.cos(ge+Re)*.009),De.scale.setScalar($.r*(.65+ce*.5)),De.updateMatrix(),xe.bubbles.setMatrixAt(Re,De.matrix)}),xe.bubbles.instanceMatrix.needsUpdate=!0;for(let $ of xe.foam){let Re=(Math.sin(ge*2.4+$.phase)+1)*.5;$.mesh.scale.set($.baseRadius,$.baseRadius*(.12+Re*.28),$.baseRadius)}for(let $ of xe.ripples){let Re=(ge*.48+$.phase)%1,ce=.012+Re*.075;$.mesh.scale.setScalar(ce),$.mesh.visible=Re<.88,$.mesh.material.opacity=(1-Re)*.16}}}be(0);function Ne(J){for(let me of[G,Y,j,W,B,V,ue,Ue])me.envMap=J,me.needsUpdate=!0}function Je(J){let me=fe[J];return!!me&&!me.transformation.transformed}function Le(J){let me=fe[J];return Je(J)&&!me.lowered&&Math.abs(me.height-me.homeHeight)<.025}return{group:i,update:be,valves:ye,toggleHoist:re,isLowered:J=>fe[J]?.lowered??!1,canSpeak:Je,isHanging:Le,lowerAll:Se,reset:Pe,speechAnchors:Ee,setEnvironment:Ne}}function K0(i=[]){let e=i.map(n=>(n.updateWorldMatrix(!0,!1),{inverse:n.matrixWorld.clone().invert(),width:n.geometry.parameters.width/2,depth:n.geometry.parameters.depth/2,top:n.getWorldPosition(new w).y+n.geometry.parameters.height/2})),t=new w;return(n,r)=>{let s=.003;for(let o of e)t.set(n,0,r).applyMatrix4(o.inverse),Math.abs(t.x)<=o.width&&Math.abs(t.z)<=o.depth&&(s=Math.max(s,o.top));return s}}function Wd(i,e){i.updateWorldMatrix(!0,!0);let t=1/0,n=new w,r=new It,s=new It;function o(a){if(a.userData.ignoreFloorContact)return;let l=a.isMesh&&a.geometry.attributes.position;if(l)for(let c=0;c<(a.isInstancedMesh?a.count:1);c++){a.isInstancedMesh?(a.getMatrixAt(c,r),s.multiplyMatrices(a.matrixWorld,r)):s.copy(a.matrixWorld);for(let h=0;h<l.count;h++)n.fromBufferAttribute(l,h).applyMatrix4(s),t=Math.min(t,n.y-e(n.x,n.z))}for(let c of a.children)o(c)}return o(i),t}function Ss(i,e=()=>.003){let t=Wd(i,e);if(!Number.isFinite(t))return i;let n=i.getWorldPosition(new w);return n.y+=6e-4-t,i.parent&&i.parent.worldToLocal(n),i.position.copy(n),i.updateWorldMatrix(!1,!0),i.userData.floorProp=!0,i}function bl(i,e){i.updateWorldMatrix(!0,!1);let t=i.geometry,n=t.attributes.position,r=t.parameters.radialSegments+1,s=i.matrixWorld.clone().invert(),o=new w,a=new w,l=t.parameters.radius;for(let c=0;c<n.count;c+=r){o.set(0,0,0);for(let y=0;y<r-1;y++)o.add(a.fromBufferAttribute(n,c+y).applyMatrix4(i.matrixWorld));o.divideScalar(r-1);let h=e(o.x,o.z),f=1-qe.smoothstep(o.y-h,.055,.15),u=i.userData.anchorStart?qe.smoothstep(c/r,0,3):1,m=i.userData.anchorEnd?qe.smoothstep((n.count-r-c)/r,0,3):1,g=(h+l+6e-4-o.y)*f*u*m;for(let y=0;y<r;y++)a.fromBufferAttribute(n,c+y).applyMatrix4(i.matrixWorld),a.y+=g,a.applyMatrix4(s),n.setXYZ(c+y,a.x,a.y,a.z)}n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere()}function J0(i,e=()=>.003){let t=new ve;t.name="Fallen nursery mobile with four soft animals",t.position.set(-1.05,0,.55);let n=48319,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=document.createElement("canvas");s.width=s.height=512;let o=s.getContext("2d");o.fillStyle="#c6c1ac",o.fillRect(0,0,512,512);for(let B=0;B<7e3;B++){let z=r()*512,V=r()*512;o.strokeStyle=B%2?"rgba(58,52,36,.12)":"rgba(246,236,212,.28)",o.lineWidth=.6,o.beginPath(),o.moveTo(z,V),o.lineTo(z+2,V+3),o.stroke()}for(let B=0;B<45;B++){let z=r()*512,V=r()*512,ue=8+r()*70,we=o.createRadialGradient(z,V,0,z,V,ue);we.addColorStop(0,"rgba(63,52,31,.15)"),we.addColorStop(1,"rgba(63,52,31,0)"),o.fillStyle=we,o.fillRect(z-ue,V-ue,ue*2,ue*2)}function a(B){let z=new Nt(B);return z.colorSpace=yt,z.anisotropy=4,z}let l=a(s);function c(B,z=l){return new $t({color:B,map:z,bumpMap:l,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:12433832,sheenRoughness:.95})}let h=c(13801630),f=c(14792108),u=c(7839145),m=c(5270656),g=c(14132309),y=c(15128233),p=c(3420203),d=new Oe({color:6313803,roughness:1}),M=new Oe({color:10525568,roughness:1}),x=new Oe({color:1645337,roughness:.48}),E=new Oe({color:12762273,map:l,roughness:.68,bumpMap:l,bumpScale:.001}),R=new Oe({color:8159861,metalness:.65,roughness:.56}),b=document.createElement("canvas");b.width=b.height=512;let T=b.getContext("2d");T.drawImage(s,0,0),T.fillStyle="#343027";for(let B=0;B<12;B++){let z=B*45-15,V=B%2*30;T.beginPath(),T.moveTo(z,V),T.bezierCurveTo(z+55,105,z+8,180,z+51,268),T.lineTo(z+23,238),T.bezierCurveTo(z-12,148,z+26,93,z-9,V),T.fill(),T.beginPath(),T.moveTo(z+25,512),T.bezierCurveTo(z+69,417,z+6,367,z+45,285),T.lineTo(z+24,314),T.bezierCurveTo(z-11,395,z+41,438,z-3,512),T.fill()}let I=c(14262365,a(b)),O=new en(1,24,16);function v(B,z,V=t){let ue=new ot(B,z);return ue.castShadow=!0,ue.receiveShadow=!0,V.add(ue),ue}function S(B,z,V,ue){let we=v(O,V,ue);return we.position.set(...B),we.scale.set(...z),we}function H(B,z,V,ue=t){return v(new un(new Yt(B.map(we=>new w(...we))),Math.max(20,B.length*6),z,6,!1),V,ue)}function G(B,z,V,ue,we=t){let Ue=new w(...B),K=new w(...z),L=K.clone().sub(Ue),fe=v(new Ut(V,V,L.length(),12),ue,we);return fe.position.copy(Ue).add(K).multiplyScalar(.5),fe.quaternion.setFromUnitVectors(new w(0,1,0),L.normalize()),fe}function Y(B,z,V,ue=t){let we=v(new wt(...B),V,ue);return we.position.set(...z),we}function j(B,z,V,ue){let we=new St;we.moveTo(-.5,0),we.quadraticCurveTo(-.48,.44,0,1),we.quadraticCurveTo(.49,.49,.5,0),we.quadraticCurveTo(0,-.1,-.5,0);let Ue=new sn(we,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});Ue.translate(0,0,-.09);let K=v(Ue,V,ue);return K.scale.set(...z),K.position.set(...B),K}function W(B,z,V=.092,ue=.047){for(let we of[-1,1])S([we*ue,V,z],[.009,.012,.007],x,B)}function F(B){let z=new ve;z.name=`${B} mobile animal`;let V=B==="Pig"?h:B==="Elephant"?u:B==="Tiger"?I:g,ue=S([0,.065,-.025],[.112,.091,.154],V,z);ue.name="Soft body resting on the floor";for(let K of[-1,1])S([K*.047,.073,.08],[.077,.09,.09],V,z);H([[0,.13,.116],[0,.092,.166],[0,.036,.16],[0,.008,.136]],.0018,d,z);for(let K of[-1,1])for(let L of[-.106,.1]){let fe=S([K*.11,.002,L],[.043,.043,.062],V,z);if(fe.rotation.z=K*.28,S([K*.134,-.007,L+.015],[.021,.03,.041],B==="Pig"?p:B==="Elephant"?m:f,z),B==="Tiger"||B==="Fox")for(let _e=0;_e<3;_e++)S([K*.151,-.012+(_e-1)*.014,L+.034],[.004,.004,.006],p,z)}let we=S([0,.102,-.17],B==="Elephant"?[.097,.094,.094]:[.09,.083,.083],V,z);if(B==="Pig"){S([0,.08,-.244],[.049,.032,.024],f,z);for(let L of[-1,1])S([L*.019,.082,-.267],[.006,.009,.003],p,z);for(let L of[-1,1]){let fe=j([L*.061,.153,-.177],[.072,.083,.09],h,z);fe.rotation.z=-L*.35}let K=[];for(let L=0;L<=45;L++){let fe=L/45*Math.PI*3.9,_e=.025*(1-L/70);K.push([Math.sin(fe)*_e,.115+Math.cos(fe)*_e,.167+L/45*.028])}H(K,.0065,f,z),W(z,-.242,.122)}else if(B==="Elephant"){for(let K of[-1,1])S([K*.098,.098,-.16],[.071,.08,.027],u,z),S([K*.113,.101,-.184],[.047,.055,.009],m,z);H([[0,.099,-.24],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,u,z),W(z,-.248,.127,.043),H([[0,.122,.15],[.025,.115,.185],[.042,.08,.199]],.006,m,z),S([.044,.077,.2],[.013,.018,.012],m,z)}else{for(let K of[-1,1]){let L=j([K*.057,.155,-.172],[.067,.071,.1],V,z);L.rotation.z=-K*.26,j([K*.057,.162,-.184],[.038,.045,.055],f,z)}for(let K of[-1,1])S([K*.025,.076,-.235],[.035,.027,.023],y,z);if(S([0,.091,-.26],[.015,.011,.011],p,z),W(z,-.241,.124,.044),B==="Tiger")H([[0,.134,.15],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,I,z),S([.075,.129,.182],[.014,.015,.016],p,z);else{let K=S([.042,.13,.191],[.058,.061,.131],g,z);K.rotation.x=-.45,K.rotation.z=-.25;let L=S([.039,.182,.271],[.045,.046,.061],y,z);L.rotation.x=-.45}}for(let K of[-1,1])H([[K*.1,.1,.07],[K*.113,.065,-.02],[K*.094,.092,-.1]],.0015,d,z);let Ue=v(new Qt(.014,.004,6,16,Math.PI*1.75),M,z);return Ue.position.set(0,.158,-.065),Ue.rotation.x=Math.PI/2,{object:z,tab:Ue,body:ue}}function se(B,z){B.updateWorldMatrix(!0,!0);let V=B.getWorldPosition(new w);V.y-=Wd(z,e)+.006,B.parent.worldToLocal(V),B.position.copy(V),B.updateWorldMatrix(!0,!0);let ue=new w,we=new It;B.traverse(Ue=>{if(!Ue.isMesh)return;let K=Ue.geometry.clone(),L=K.attributes.position;we.copy(Ue.matrixWorld).invert();let fe=!1;for(let _e=0;_e<L.count;_e++){ue.fromBufferAttribute(L,_e).applyMatrix4(Ue.matrixWorld);let ye=e(ue.x,ue.z)+6e-4;ue.y>=ye||(ue.y=ye,ue.applyMatrix4(we),L.setXYZ(_e,ue.x,ue.y,ue.z),fe=!0)}fe?(L.needsUpdate=!0,K.computeVertexNormals(),K.computeBoundingBox(),K.computeBoundingSphere(),Ue.geometry=K):K.dispose()}),B.userData.floorProp=!0}let le=new ve;le.name="Toppled mobile support",t.add(le),Y([.16,.055,.12],[-.6,.0305,.48],E,le),Y([.12,.028,.1],[-.6,.0765,.48],E,le),G([-.6,.0565,.48],[-.6,.1425,.48],.012,R,le),S([-.6,.1455,.48],[.043,.012,.02],E,le),H([[-.59,.039,.44],[-.63,.017,.1],[-.48,.017,-.3],[-.2,.02,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,E,le),Ss(le,e);let N=new ve;N.name="Scuffed mobile music box",N.position.set(0,.116,0),N.rotation.set(.21,0,-.18),t.add(N);let ee=v(new Ut(.103,.103,.068,40),E,N),Q=v(new Qt(.103,.002,6,40),d,N);Q.rotation.x=Math.PI/2;let oe=S([0,.039,0],[.034,.009,.034],g,N);for(let B=0;B<5;B++)Y([.03,.002,.002],[-.049+B*.019,.035,.041],d,N);G([0,-.02,-.093],[0,-.02,-.145],.005,R,N),S([0,-.02,-.15],[.026,.012,.005],R,N),t.updateMatrixWorld(!0),Ss(N,e);let k=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];for(let B of k)B[1]=e(t.position.x+B[0],t.position.z+B[2])+.0076,G([0,N.position.y,0],B,.007,R);for(let B of k){let z=v(new Qt(.014,.003,6,16),R);z.rotation.x=Math.PI/2,z.position.set(B[0],B[1]-.004,B[2])}let ne=[{kind:"Pig",x:.29,z:.35,rear:!0,yaw:-.12,roll:.08,arm:3},{kind:"Tiger",x:-.38,z:.17,rear:!0,yaw:.36,roll:-.12,arm:0},{kind:"Elephant",x:.34,z:-.29,rear:!1,yaw:-.28,roll:-.24,arm:1},{kind:"Fox",x:-.27,z:-.43,rear:!0,yaw:1.12,roll:.2,arm:2}];for(let B of ne){let{object:z,tab:V,body:ue}=F(B.kind);z.position.set(B.x,0,B.z),z.scale.setScalar(.88);let we=Math.atan2(i.x-(t.position.x+B.x),i.z-(t.position.z+B.z));z.rotation.set(B.kind==="Pig"?-.06:.03,we+(B.rear?0:Math.PI)+B.yaw,B.roll,"YXZ"),t.add(z),t.updateMatrixWorld(!0),se(z,ue),t.updateMatrixWorld(!0);let Ue=t.worldToLocal(V.getWorldPosition(new w)),K=k[B.arm],L=H([K,[K[0]+.06,.024,K[2]+.08],[(K[0]+Ue.x)/2-.05,.023,(K[2]+Ue.z)/2+.08],[Ue.x-.04,.025,Ue.z+.035],Ue.toArray()],.0021,M);L.userData.anchorStart=L.userData.anchorEnd=!0,bl(L,e);let fe=document.createElement("canvas");fe.width=fe.height=64;let _e=fe.getContext("2d"),ye=_e.createRadialGradient(32,32,5,32,32,32);ye.addColorStop(0,"rgba(0,0,0,.65)"),ye.addColorStop(.48,"rgba(0,0,0,.32)"),ye.addColorStop(1,"rgba(0,0,0,0)"),_e.fillStyle=ye,_e.fillRect(0,0,64,64);let Ee=new Rn().setFromObject(z),De=Ee.getSize(new w),Ae=t.worldToLocal(Ee.getCenter(new w)),U=new _t(De.x+.05,De.z+.05,12,12);U.rotateX(-Math.PI/2),U.translate(Ae.x,0,Ae.z);let A=U.attributes.position;for(let Se=0;Se<A.count;Se++)A.setY(Se,e(t.position.x+A.getX(Se),t.position.z+A.getZ(Se))+2e-4);U.computeVertexNormals();let re=v(U,new mt({map:new Nt(fe),transparent:!0,depthWrite:!1}));re.name=`${B.kind} floor contact shadow`,re.castShadow=!1,re.userData.ignoreFloorContact=!0}return t}var bo=new Map,Xd=31.7;function bE(i){if(bo.has(i))return bo.get(i);let e=9678115+Math.imul(i,2654435761)>>>0,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=[],r=.65+t()*1.4;for(;r<Xd-2;){let s=2+Math.floor(t()*5);for(let o=0;o<s;o++){let a=.028+t()*.072;n.push([r,a,t()*.045,t()>.23]),r+=a+.045+t()*.16}t()<.42&&(n.push([r,.22+t()*.4,.005,!0]),r+=.75),r+=1.3+t()*4.2}return bo.size>4&&bo.delete(bo.keys().next().value),bo.set(i,n),n}function wE(i,e=!1){if(e)return[.88,.79];let t=Math.floor(i/Xd),n=i-t*Xd,r=bE(t);return[0,1].map(s=>{let o=s?.79:.88;for(let a=0;a<r.length;a++){let[l,c,h,f]=r[a];if(s===1&&!f)continue;let u=l+(s?(a%3-1)*.013:0),m=u+c;if(n>=u&&n<m){let g=Math.min((n-u)/.003,(m-n)/.005,1);o=qe.lerp(o,h,Math.max(0,g))}else n>=m&&n<m+.025&&(o*=1+.16*(1-(n-m)/.025))}return o*(.985+.015*Math.sin(i*8.7+s))})}function Q0(){let i=new ve;i.name="Crooked failing fluorescent fixture",i.position.set(.22,2.98,-.55),i.rotation.set(.02,.12,-.075);let e=fi(9673098),t=fi(15065545),n=new Oe({color:2369569,roughness:.9}),r=new Oe({color:11183498,roughness:.72});function s(g,y,p=[0,0,0]){let d=new ot(g,y);return d.position.set(...p),d.castShadow=!0,d.receiveShadow=!0,i.add(d),d}let o=(g,y,p=e)=>s(new wt(...g),p,y);function a(g,y,p,d=e){return s(new Ut(g,g,y,16),d,p)}function l(g,y=n,p=.004){return s(new un(new Yt(g.map(d=>new w(...d))),24,p,5,!1),y)}o([1.53,.055,.32],[0,.012,0],t);for(let g of[-1,1]){let y=o([1.53,.08,.016],[0,-.033,g*.157],t);y.rotation.x=g*.25,o([1.46,.006,.012],[0,-.017,g*.121],n)}o([.38,.045,.085],[.12,.055,0],n);for(let g of[-.69,.69]){o([.065,.05,.275],[g,-.02,0],e);for(let y of[-.132,.132]){let p=a(.012,.012,[g,-.051,y]);o([.016,.002,.003],[g,-.058,y],n),p.rotation.z=.05}}let c=[];for(let[g,y]of[-.078,.078].entries()){let p=document.createElement("canvas");p.width=512,p.height=64;let d=p.getContext("2d"),M=d.createLinearGradient(0,0,512,0);M.addColorStop(0,"#29271f"),M.addColorStop(.035,"#5a5948"),M.addColorStop(.09,"#b4b9a0"),M.addColorStop(.19,"#d9dfc4"),M.addColorStop(.77,"#d0d8bd"),M.addColorStop(.93,"#92977e"),M.addColorStop(.98,"#383c32"),M.addColorStop(1,"#272b22"),d.fillStyle=M,d.fillRect(0,0,512,64);for(let b=0;b<170;b++){let T=b*73.29%512,I=b*23.87%64;d.fillStyle="rgba(35,36,24,.12)",d.fillRect(T,I,1+b%5,1)}let x=new Nt(p);x.colorSpace=yt,x.center.set(.5,.5),x.rotation=Math.PI/2;let E=new Oe({map:x,emissiveMap:x,emissive:15003084,emissiveIntensity:2,roughness:.27});c.push(E);let R=a(.019,1.34,[0,-.073,y],E);R.rotation.z=Math.PI/2,R.castShadow=!1;for(let b of[-1,1]){let T=a(.021,.035,[b*.657,-.073,y],e);T.rotation.z=Math.PI/2,o([.037,.075,.056],[b*.704,-.045,y],r);for(let I of[-.007,.007]){let O=a(.0025,.024,[b*.684,-.073,y+I],e);O.rotation.z=Math.PI/2}}l([[-.73,.03,y],[-.77,-.01,y],[-.72,-.04,y+.025]],g?n:new Oe({color:7031093,roughness:.8}))}let h=a(.015,.034,[.54,-.035,0],r);h.rotation.x=.08,l([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],e,.004),l([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],n,.006);let f=new An(11647895,.25,1.2,2);f.position.set(0,.1,0),i.add(f);function u(g,y){let p=wE(g,y);return c.forEach((d,M)=>d.emissiveIntensity=p[M]*2.9),f.intensity=(p[0]+p[1])*.2,(p[0]+p[1])/1.67}function m(g){for(let y of[e,t])y.envMap=g,y.needsUpdate=!0}return u(0,!1),{group:i,update:u,setEnvironment:m}}function wl(i){let e=Math.max(0,Math.ceil(i));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function j0(i=300,e=()=>performance.now()/1e3){let t=null;return{start(){return t!==null?!1:(t=e()+i,!0)},reset(){t=null},get remainingSeconds(){return t===null?i:Math.max(0,Math.ceil(t-e()))},get status(){return t===null?"waiting":e()>=t?"finished":"running"}}}function em(i,e){let t=new ve;t.name="Five-minute red LED countdown timer",t.position.copy(e),t.position.y=.006,t.rotation.y=Math.atan2(i.x-e.x,i.z-e.z)-qe.degToRad(16),t.scale.setScalar(.72);let n=j0(),r=new ve;r.position.y=.13,r.rotation.x=-.24,t.add(r);let s=document.createElement("canvas");s.width=512,s.height=256;let o=s.getContext("2d");o.fillStyle="#555951",o.fillRect(0,0,512,256);let a=7418,l=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let B=0;B<1800;B++)o.fillStyle=B%4?"rgba(13,16,12,.18)":"rgba(180,171,142,.26)",o.fillRect(l()*512,l()*256,1+l()*4,1+l()*2);for(let B=0;B<35;B++){o.strokeStyle="rgba(194,190,163,.24)",o.lineWidth=.6;let z=l()*512,V=l()*256;o.beginPath(),o.moveTo(z,V),o.lineTo(z+8+l()*39,V+l()*5),o.stroke()}let c=new Nt(s);c.colorSpace=yt;let h=new Oe({color:3619894,map:c,bumpMap:c,bumpScale:7e-4,roughness:.82}),f=new Oe({color:527113,roughness:.66}),u=new Oe({color:7828326,metalness:.65,roughness:.68});function m(B,z,V=r){let ue=new ot(B,z);return ue.castShadow=!0,ue.receiveShadow=!0,V.add(ue),ue}function g(B,z,V,ue=r){let we=m(new wt(...B),V,ue);return we.position.set(...z),we}let y=new St,p=.59,d=.19,M=.022;y.moveTo(-p/2+M,-d/2),y.lineTo(p/2-M,-d/2),y.quadraticCurveTo(p/2,-d/2,p/2,-d/2+M),y.lineTo(p/2,d/2-M),y.quadraticCurveTo(p/2,d/2,p/2-M,d/2),y.lineTo(-p/2+M,d/2),y.quadraticCurveTo(-p/2,d/2,-p/2,d/2-M),y.lineTo(-p/2,-d/2+M),y.quadraticCurveTo(-p/2,-d/2,-p/2+M,-d/2);let x=new sn(y,{depth:.174,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});x.translate(0,0,-.087),m(x,h),g([.538,.16,.01],[0,0,.096],f);let E=g([.518,.143,.002],[0,0,.11],new $t({color:5511450,transparent:!0,opacity:.09,depthWrite:!1,roughness:.22,clearcoat:1,clearcoatRoughness:.1}));E.castShadow=!1;for(let B of[-.279,.279])for(let z of[-.071,.071]){let V=m(new Ut(.008,.008,.006,12),u);V.rotation.x=Math.PI/2,V.position.set(B,z,.098),g([.01,.0015,.001],[B,z,.102],f)}for(let B of[-.23,.23])for(let z of[-.06,.06])g([.052,.016,.052],[B,.008,z],f,t);for(let B of[-1,1])for(let z=0;z<6;z++)g([.002,.04,.006],[B*.301,-.018,-.061+z*.019],f);let R=document.createElement("canvas");R.width=512,R.height=64;let b=R.getContext("2d");b.font="500 20px monospace",b.fillStyle="#8e8b7a",b.textAlign="center",b.fillText("MIN",128,42),b.fillText("SEC",384,42);let T=new Nt(R);T.colorSpace=yt;let I=m(new _t(.43,.018),new mt({map:T,transparent:!0,depthWrite:!1}));I.position.set(0,.069,.104),I.castShadow=!1;let O=new mt({color:16721943,toneMapped:!1}),v=new mt({color:2295557,toneMapped:!1}),S=new mt({color:16718087,transparent:!0,opacity:.12,depthWrite:!1,blending:Nc,toneMapped:!1}),H=new St,G=.066,Y=.01,j=.005;H.moveTo(-G/2,0),H.lineTo(-G/2+j,Y/2),H.lineTo(G/2-j,Y/2),H.lineTo(G/2,0),H.lineTo(G/2-j,-Y/2),H.lineTo(-G/2+j,-Y/2),H.closePath();let W=new er(H),F=["abcdef","bc","abdeg","abcdg","bcfg","acdfg","acdefg","abc","abcdefg","abcdfg"],se={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]},le=[];for(let B of Ie.mobile?[]:[-.187,-.081,.081,.187]){let z=new ve;z.position.set(B,-.005,.106),r.add(z);let V=[];for(let[ue,[we,Ue,K]]of Object.entries(se)){let L=m(W,v,z);L.position.set(we,Ue,0),L.rotation.z=K?Math.PI/2:0,L.scale.x=K?.76:1,L.castShadow=!1;let fe=m(W,S,z);fe.position.set(we,Ue,-2e-4),fe.rotation.z=L.rotation.z,fe.scale.set(L.scale.x*1.12,1.9,1),fe.castShadow=!1,V.push({key:ue,segment:L,glow:fe})}le.push(V)}for(let B of[-.025,.015]){let z=m(new Ui(.005,16),O);z.position.set(0,B,.106),z.castShadow=!1}let N=new An(16718344,.12,.7,2);N.position.set(0,.06,.16),r.add(N);let ee=null,Q=null,oe=null;if(Ie.mobile){let B=document.createElement("canvas");B.width=512,B.height=160,Q=B.getContext("2d"),oe=new Nt(B),oe.colorSpace=yt,oe.generateMipmaps=!1,oe.minFilter=pn,ee=m(new _t(.46,.136),new mt({map:oe,toneMapped:!1})),ee.position.set(0,-.005,.108),ee.castShadow=!1,N.visible=!1}qn(t,{minObjects:2,exclude:[...r.children.filter(B=>B.isGroup),ee],dispose:!1});let k=-1;function ne(){let B=n.remainingSeconds;if(B!==k){let z=wl(B).replace(":","");if(Q){let V=Q;V.fillStyle="#100302",V.fillRect(0,0,512,160),V.shadowColor="#ff1907",[-.187,-.081,.081,.187].forEach((ue,we)=>{let Ue=F[Number(z[we])];for(let[K,[L,fe,_e]]of Object.entries(se)){let ye=Ue.includes(K);V.save(),V.translate(256+(ue+L)*1050,85-fe*1050),V.scale(1050,-1050),_e&&V.rotate(Math.PI/2),V.scale(_e?.76:1,1),V.beginPath(),V.moveTo(-G/2,0),V.lineTo(-G/2+j,Y/2),V.lineTo(G/2-j,Y/2),V.lineTo(G/2,0),V.lineTo(G/2-j,-Y/2),V.lineTo(-G/2+j,-Y/2),V.closePath(),V.fillStyle=ye?"#ff3928":"#230705",V.shadowBlur=ye?7:0,V.fill(),V.restore()}}),V.fillStyle="#ff3928";for(let ue of[65,105])V.beginPath(),V.arc(256,ue,4,0,Math.PI*2),V.fill();V.shadowBlur=0,oe.needsUpdate=!0}le.forEach((V,ue)=>{let we=F[Number(z[ue])];for(let Ue of V){let K=we.includes(Ue.key);Ue.segment.material=K?O:v,Ue.glow.visible=K}}),k=B}return B}return ne(),{group:t,start:()=>n.start(),reset(){n.reset(),ne()},update:ne,get status(){return n.status}}}function qd(i,e,t,n){let r=n/2,s=r/2;i.save(),i.translate(e,t);function o(a,l){i.fillStyle=l,i.beginPath(),i.moveTo(r,a),i.lineTo(s,a),i.arc(s,a+s,s,-Math.PI/2,Math.PI/2,!0),i.lineTo(r,a+r),i.closePath(),i.fill()}o(0,"#f24e1e"),o(r,"#a259ff"),i.fillStyle="#ff7262",i.beginPath(),i.moveTo(r,0),i.lineTo(r+s,0),i.arc(r+s,s,s,-Math.PI/2,Math.PI/2),i.lineTo(r,r),i.closePath(),i.fill(),i.fillStyle="#1abcfe",i.beginPath(),i.arc(r+s,r+s,s,0,Math.PI*2),i.fill(),i.fillStyle="#0acf83",i.beginPath(),i.moveTo(r,2*r),i.lineTo(r,2*r+s),i.arc(s,2*r+s,s,0,Math.PI*1.5),i.closePath(),i.fill(),i.restore()}function tm(i){let e=new ve;e.name="Worn handsaw beside the countdown timer",e.position.copy(i).add(new w(-.34,0,.25)),e.position.y=0,e.rotation.y=-.12,e.rotation.z=.026;let t=new ve;t.rotation.x=-Math.PI/2,e.add(t);let n=fi(12963014);n.bumpScale=45e-5;let r=new Oe({color:11121068,metalness:.72,roughness:.38}),s=new Oe({color:10258264,metalness:.68,roughness:.62}),o=new Oe({color:3156253,roughness:1}),a=new Uint8Array(256*256*4),l=1903;for(let x=0;x<256;x++)for(let E=0;E<256;E++){l=1664525*l+1013904223>>>0;let R=Math.sin(x*.54+Math.sin(E*.026)*2)*5+Math.sin(x*1.4+E*.012)*3,b=(l>>>24)/255,T=b>.99?28:0,I=(x*256+E)*4;a[I]=98+R+b*12+T,a[I+1]=57+R*.7+b*9+T,a[I+2]=30+R*.3+b*6+T,a[I+3]=255}let c=new cr(a,256,256);c.colorSpace=yt,c.needsUpdate=!0,c.magFilter=pn;let h=new Oe({map:c,roughness:.83,bumpMap:c,bumpScale:5e-4});function f(x,E,R=t){let b=new ot(x,E);return b.castShadow=!0,b.receiveShadow=!0,R.add(b),b}function u(x,E,R,b){let T=new sn(x,{depth:E,bevelEnabled:R>0,bevelSize:R,bevelThickness:R,bevelSegments:2,curveSegments:24});T.translate(0,0,-E/2);let I=T.attributes.uv;for(let O=0;O<I.count;O++)I.setXY(O,(I.getX(O)+.37)/.72,(I.getY(O)+.115)/.23);return f(T,b)}let m=new St;m.moveTo(-.36,.035),m.lineTo(.19,.081),m.lineTo(.205,-.083);let g=38;for(let x=g;x>=0;x--){let E=-.36+x/g*.55,R=-.035-(E+.36)/.55*.048;m.lineTo(E,R),x>0&&m.lineTo(E-.55/g*.4,R-.009)}m.lineTo(-.365,.025),m.closePath();let y=u(m,.0028,35e-5,[n,r]);y.name="Tapered pitted steel blade with saw teeth";let p=new St;p.moveTo(.145,.092),p.bezierCurveTo(.19,.119,.31,.116,.338,.079),p.lineTo(.326,-.079),p.quadraticCurveTo(.314,-.111,.278,-.102),p.lineTo(.172,-.085),p.quadraticCurveTo(.153,-.07,.157,-.047),p.lineTo(.17,.046),p.closePath();let d=new li;d.moveTo(.214,.055),d.quadraticCurveTo(.24,.072,.283,.055),d.lineTo(.283,-.057),d.quadraticCurveTo(.253,-.065,.226,-.052),d.lineTo(.209,.032),d.closePath(),p.holes.push(d);let M=u(p,.026,.006,h);M.name="Worn wooden open grip";for(let[x,E]of[[.176,.055],[.183,-.053],[.199,.003]])for(let R of[-1,1]){let b=f(new Ut(.006,.006,.0035,18),s);b.rotation.x=Math.PI/2,b.position.set(x,E,R*.02);let T=f(new wt(.007,.0012,6e-4),o);T.position.set(x,E,R*.022),T.rotation.z=.35}return{group:e,setEnvironment(x){n.envMap=r.envMap=s.envMap=x;for(let E of[n,r,s])E.envMapIntensity=.9,E.needsUpdate=!0}}}function Sl({flies:i=10,moths:e=5,spread:t=[.82,.17,.47],seed:n=29,sizeScale:r=1,dive:s=0}={}){let o=new ve;o.name="Flies and moths circling the light";let a=new en(1,8,6),l=new Oe({color:1382678,roughness:.65}),c=new Oe({color:5589814,roughness:1}),h=new Oe({color:12899016,roughness:.35,transparent:!0,opacity:.58,depthWrite:!1,side:Pt}),f=document.createElement("canvas");f.width=f.height=128;let u=f.getContext("2d");u.fillStyle="#b8aa83",u.fillRect(0,0,128,128);for(let le=0;le<190;le++)u.fillStyle=le%2?"#89795255":"#e2d3ab66",u.fillRect(le*47%128,le*73%128,2,1);u.strokeStyle="#695c3d",u.lineWidth=4,u.beginPath(),u.moveTo(76,0),u.quadraticCurveTo(99,60,76,128),u.stroke(),u.fillStyle="#5b5039",u.beginPath(),u.ellipse(57,68,13,18,.25,0,Math.PI*2),u.fill(),u.fillStyle="#d5c59a",u.beginPath(),u.ellipse(57,68,6,9,.25,0,Math.PI*2),u.fill(),u.strokeStyle="#75684788",u.lineWidth=1;for(let le=0;le<5;le++)u.beginPath(),u.moveTo(0,64),u.lineTo(128,12+le*26),u.stroke();let m=new Nt(f);m.colorSpace=yt;let g=new Oe({map:m,roughness:.9,side:Pt,emissive:10127718,emissiveMap:m,emissiveIntensity:.15});function y(le){let N=new St;N.moveTo(0,-.008),le?(N.bezierCurveTo(.02,-.031,.052,-.036,.058,-.018),N.bezierCurveTo(.06,-.007,.044,.004,.039,.009),N.bezierCurveTo(.047,.026,.023,.034,.013,.019)):(N.bezierCurveTo(.008,-.021,.03,-.024,.033,-.013),N.bezierCurveTo(.035,-.003,.015,.016,.005,.012)),N.lineTo(0,.008),N.closePath();let ee=new er(N,10),Q=ee.attributes.position,oe=ee.attributes.uv;for(let k=0;k<Q.count;k++)oe.setXY(k,Q.getX(k)/.06,(Q.getY(k)+.036)/.07);return ee.rotateX(-Math.PI/2),ee}function p(le,N,ee,Q){let oe=new hn(le,N,ee);return oe.name=Q,oe.instanceMatrix.setUsage(gn),oe.frustumCulled=!1,oe.raycast=()=>{},o.add(oe),oe}let d=p(a,l,i*2,"Small dark flies"),M=p(a,c,e*2,"Moth bodies"),x=p(y(!1),h,i*2,"Translucent fly wings"),E=p(y(!0),g,e*2,"Dusty patterned moth wings"),R=new gt,b=new w,T=new w,I=new w,O=new w(0,0,-1),v=new w(0,0,1),S=new w(0,1,0),H=new w,G=new dt,Y=new dt,j=new dt().setFromAxisAngle(S,Math.PI),W=Array.from({length:i+e},(le,N)=>({moth:N>=i,index:N>=i?N-i:N,phase:N*2.399+n*.17,size:r*(.72+(N*17+n)%13/28),speed:N>=i?.95+N%3*.23:1.8+N%4*.46}));function F(le,N,ee){let Q=le*N.speed+N.phase,oe=N.phase,k=N.moth?.72:.46;return ee.set(t[0]*(k*Math.cos(Q)+.17*Math.sin(Q*2.37+oe)),t[1]*(.7*Math.sin(Q*1.73+oe)+.23*Math.cos(Q*4.13)),t[2]*(k*Math.sin(Q*.91)+.18*Math.cos(Q*2.71-oe))),ee.y-=s*(N.moth?1:.38)*Math.pow(.5+.5*Math.sin(Q*.43+oe),6),N.moth||(ee.x+=.035*Math.sin(Q*7.3),ee.y+=.014*Math.cos(Q*9.7)),ee}function se(le,N=!1,ee=1){let Q=N?0:le;for(let oe of W){let{moth:k,index:ne,phase:B,size:z}=oe,V=k?M:d,ue=k?E:x;F(Q,oe,b),F(Q+.012,oe,T),I.copy(T).sub(b).normalize(),G.setFromUnitVectors(O,I),Y.setFromAxisAngle(v,.25*Math.sin(Q*2.1+B)),G.multiply(Y),R.position.copy(b),R.quaternion.copy(G),R.scale.set(k?.006:.0065,k?.007:.0055,k?.021:.011).multiplyScalar(z),R.updateMatrix(),V.setMatrixAt(ne*2,R.matrix),H.set(0,0,k?-.022:-.013).applyQuaternion(G),R.position.copy(b).addScaledVector(H,z),R.scale.setScalar((k?.006:.0068)*z),R.updateMatrix(),V.setMatrixAt(ne*2+1,R.matrix);let we=N?.42:.18+Math.sin(Q*(k?39:92)+B)*(k?.9:.74);for(let[Ue,K]of[-1,1].entries())H.set(K*.004,0,0).applyQuaternion(G),R.position.copy(b).addScaledVector(H,z),Y.setFromAxisAngle(v,K*we),R.quaternion.copy(G).multiply(Y),K<0&&R.quaternion.multiply(j),R.scale.setScalar(z),R.updateMatrix(),ue.setMatrixAt(ne*2+Ue,R.matrix)}g.emissiveIntensity=.055+.14*Math.max(0,ee);for(let oe of[d,M,x,E])oe.instanceMatrix.needsUpdate=!0}return se(0),{group:o,update:se}}var wo=3,SE=2.8;function TE(i,e){return e<-1.55||Math.abs(i)>2.55&&e<.45}var Ts=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function RE(i){let o=[],a=new Rn,l=new w;i.updateWorldMatrix(!0,!0);function c(g){if(g.visible){g.isMesh&&!g.isInstancedMesh&&g.geometry&&(g.geometry.computeBoundingBox(),a.copy(g.geometry.boundingBox).applyMatrix4(g.matrixWorld),a.getSize(l),a.min.y<.13&&a.max.y>.1&&l.y>.065&&Math.min(l.x,l.z)>.018&&o.push({x0:a.min.x-.15,x1:a.max.x+.15,z0:a.min.z-.15,z1:a.max.z+.15}));for(let y of g.children)c(y)}}for(let g of i.children)c(g);let h=Array.from({length:1763},(g,y)=>{let p=y%41,d=Math.floor(y/41),M=-3.6+p*.18,x=-3.65+d*.18;return{id:y,col:p,row:d,x:M,z:x,free:TE(M,x)&&!o.some(E=>M>=E.x0&&M<=E.x1&&x>=E.z0&&x<=E.z1),neighbors:[]}});for(let g of h)if(g.free)for(let y=-1;y<=1;y++)for(let p=-1;p<=1;p++){if(!p&&!y)continue;let d=g.col+p,M=g.row+y;if(d<0||d>=41||M<0||M>=43)continue;let x=h[M*41+d];x.free&&(!p||!y||h[g.row*41+d].free&&h[M*41+g.col].free)&&g.neighbors.push(x.id)}let f=h.filter(g=>g.free&&g.neighbors.length);function u(g,y,p){return(p?f.filter(M=>Ts(M,p)>=wo):f).reduce((M,x)=>!M||(x.x-g)**2+(x.z-y)**2<(M.x-g)**2+(M.z-y)**2?x:M,null)}function m(g,y,p){let d=new Int32Array(h.length).fill(-1),M=[g];d[g]=g;for(let T=0;T<M.length;T++){let I=h[M[T]],O=Ts(I,p);for(let v of I.neighbors){let S=Ts(h[v],p);d[v]<0&&(S>=wo||S>O+.001)&&(d[v]=I.id,M.push(v))}}let x=h[g],E=M.filter(T=>{let I=h[T],O=Math.hypot(I.x-x.x,I.z-x.z);return O>.8&&O<2.8&&Ts(I,p)>=wo});if(!E.length)return[];let R=E[Math.floor(y()*E.length)],b=[];for(;R!==g;)b.push(h[R]),R=d[R];return b.reverse()}return{closest:u,path:m}}function nm({room:i,floorSupport:e,viewerPosition:t,seed:n=Math.floor(Math.random()*4294967295)}){let r=new ve;r.name="Tiny mice and rats darting through distant shadows",r.userData.ignoreAcid=!0;let s=n>>>0,o=()=>(s=s*1664525+1013904223>>>0,s/4294967296),a=RE(i),l=new gt,c=new w,h=new w,f=new w,u=new w(0,1,0),m=document.createElement("canvas");m.width=m.height=128;let g=m.getContext("2d");g.fillStyle="#e8e3d9",g.fillRect(0,0,128,128);for(let Q=0;Q<1400;Q++){g.strokeStyle=Q%3?"#7d766f30":"#ffffff66";let oe=o()*128,k=o()*128;g.beginPath(),g.moveTo(oe,k),g.lineTo(oe+(o()-.5)*2,k+3+o()*5),g.stroke()}let y=new Nt(m);y.colorSpace=yt;let p=new Oe({map:y,roughness:.96}),d=new Oe({roughness:.72}),M=new Oe({roughness:.88});function x(Q,oe,k,ne){let B=new hn(Q,oe,k);return B.name=ne,B.instanceMatrix.setUsage(gn),B.frustumCulled=!1,B.castShadow=!0,B.receiveShadow=!0,B.raycast=()=>{},r.add(B),B}let E=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],R=E.length,b=new en(1,14,9),T=x(b,p,R*6,"Furry rat and mouse bodies"),I=x(b,d,R*9,"Ears, eyes, noses and running paws"),O=x(new Ut(1,1,1,7),M,R*9,"Long tapered swishing tails"),v=new Float32Array(R*4*2*3),S=new Rt;S.setAttribute("position",new rn(v,3).setUsage(gn));let H=new lr(S,new ji({color:12300704,transparent:!0,opacity:.45}));H.frustumCulled=!1,H.raycast=()=>{},r.add(H);let G=[5327684,5854283,4539454],Y=E.map(([Q,oe],k)=>{let ne=a.closest(Q,oe,t)||a.closest(Q,oe),B=k!==0;return{mouse:B,cell:ne.id,x:ne.x,z:ne.z,yaw:o()*Math.PI*2,size:.28*(B?.58+o()*.08:.92+o()*.12),color:new pt(G[k]),phase:o()*6.28,speed:3.6*(B?1.05+o()*.3:.88+o()*.25),route:[],pause:1.2+k*1.6+o()*2,gait:0,moving:!1,visibility:1}}),j=new pt(7889757),W=new pt(6771019),F=new pt(1118478),se=null;function le(Q,oe,k,ne,B=c){let z=Math.cos(Q.yaw),V=Math.sin(Q.yaw),ue=Q.size*Q.visibility;return B.set(Q.x+(oe*z+ne*V)*ue,e(Q.x,Q.z)+k*ue,Q.z+(-oe*V+ne*z)*ue)}function N(Q,oe,k,ne,B,z,V=0){le(k,...ne),l.position.copy(c),l.rotation.set(0,k.yaw,V),l.scale.set(...B).multiplyScalar(k.size*k.visibility),l.updateMatrix(),Q.setMatrixAt(oe,l.matrix),Q.setColorAt(oe,z)}function ee(Q,oe=!1,k=t){let ne=se===null?0:Math.min(.1,Math.max(0,Q-se));se=Q;let B=0;for(let[z,V]of Y.entries()){let ye=function(Ee,De){let Ae=Ee/9;return le(V,Math.sin(Ae*3.5+we*(V.moving?8:1.6)+V.phase)*.045*Ae,.026*(1-Ae)+.009,.126+_e*Ae,De)};V.moving=!1;let ue=Ts(V,k);if(V.visibility=qe.smoothstep(ue,SE,wo+.25),!oe){let Ee=V.route[0];if(Ee&&Ts(Ee,k)<wo&&Ts(Ee,k)<=ue&&(V.route=[]),ue<wo+.35&&(V.pause=0),V.pause>0)V.pause-=ne;else{V.route.length||(V.route=a.path(V.cell,o,k));let De=V.speed*ne;for(;V.route.length&&De>0;){let Ae=V.route[0],U=Ae.x-V.x,A=Ae.z-V.z,re=Math.hypot(U,A),Se=Math.min(re,De);if(V.moving=!0,V.gait+=Se*45,De-=Se,re>1e-4){V.x+=U/re*Se,V.z+=A/re*Se;let Pe=Math.atan2(-U,-A),Ce=qe.euclideanModulo(Pe-V.yaw+Math.PI,Math.PI*2)-Math.PI;V.yaw+=Ce*(1-Math.exp(-ne*28))}Se>=re-1e-4&&(V.x=Ae.x,V.z=Ae.z,V.cell=Ae.id,V.route.shift(),V.route.length||(V.pause=3+o()*5))}!V.route.length&&!V.moving&&(V.pause=1)}}let we=oe?0:Q,Ue=V.moving?Math.abs(Math.sin(V.gait))*.005:Math.sin(we*3+V.phase)*.0015,K=V.moving?0:Math.sin(we*12+V.phase)*.002,L=z*6,fe=z*9;N(T,L,V,[0,.077+Ue,0],[.068,.063,.125],V.color),N(T,L+1,V,[0,.081+Ue,.068],[.07,.069,.071],V.color),N(T,L+2,V,[0,.078+Ue,-.115],[.046,.044,.066],V.color),N(T,L+3,V,[0,.057+Ue+K,-.177],[.03,.024,.05],V.color);for(let[Ee,De]of[-1,1].entries()){let Ae=V.mouse?1.23:.88;N(T,L+4+Ee,V,[De*.044,.126+Ue,-.102],[.03*Ae,.038*Ae,.012],V.color,De*.2),N(I,fe+Ee,V,[De*.044,.128+Ue,-.113],[.022*Ae,.028*Ae,.004],j,De*.2),N(I,fe+2+Ee,V,[De*.032,.094+Ue,-.149],[.007,.008,.007],F)}N(I,fe+4,V,[0,.057+Ue+K,-.221],[.011,.009,.009],W);for(let Ee=0;Ee<4;Ee++){let De=Ee%2?-1:1,Ae=Ee>1,U=V.gait+(Ee===0||Ee===3?0:Math.PI),A=V.moving?Math.max(0,Math.sin(U))*.023:0,re=V.moving?Math.cos(U)*.027:0;N(I,fe+5+Ee,V,[De*(Ae?.055:.043),.01+A,(Ae?.08:-.087)+re],[.018,.01,.031],j)}let _e=V.mouse?.23:.29;for(let Ee=0;Ee<9;Ee++){ye(Ee,c),ye(Ee+1,h),f.copy(h).sub(c);let De=f.length();l.position.copy(c).add(h).multiplyScalar(.5),l.quaternion.setFromUnitVectors(u,f.normalize());let Ae=(.009*(1-Ee/9)+.001)*V.size*V.visibility;l.scale.set(Ae,De,Ae),l.updateMatrix(),O.setMatrixAt(z*9+Ee,l.matrix),O.setColorAt(z*9+Ee,j)}for(let Ee of[-1,1])for(let De=0;De<2;De++)le(V,Ee*.018,.061+Ue,-.195),c.toArray(v,B),B+=3,le(V,Ee*.08,.062+Ue+K,-.2+De*.027),c.toArray(v,B),B+=3}for(let z of[T,I,O])z.instanceMatrix.needsUpdate=!0,z.instanceColor.needsUpdate=!0;S.attributes.position.needsUpdate=!0}return ee(0),{group:r,update:ee}}function im(){let i="drawer",e=!1,t=8;function n(r,s=!1){return s?"Detach your shackle before using the charger.":r==="drawer"?(e=!e,e?"Drawer opened. Take the MacBook charger and cable.":"Drawer closed."):i==="damaged"?"The charger cable has burned through. It cannot charge the MacBook.":r==="charger"?i!=="drawer"?"You already collected the charger.":e?(i="carrying","Charger collected. Plug it into the power strip behind you."):"Open the rear drawer first.":r==="strip"?i==="drawer"?"The power strip is on. Find the charger in the rear drawer.":i==="carrying"?(i="powered","Charger plugged in. Connect its cable to the MacBook."):i==="charging"?"The MacBook is charging.":"The charger has power. Connect the MacBook.":r==="laptop"?i==="powered"?(i="charging","Cable connected. The MacBook is charging."):i==="charging"?`MacBook battery: ${Math.floor(t)}%.`:i==="carrying"?"Plug the charger into the power strip first.":"Find the charger in the rear drawer.":""}return{use:n,damageCable(){(i==="powered"||i==="charging")&&(i="damaged")},update(r){i==="charging"&&(t=Math.min(100,t+Math.max(0,r)*.65))},reset(){i="drawer",e=!1,t=8},get phase(){return i},get drawerOpen(){return e},get battery(){return t},get nextAction(){return i==="drawer"?e?"charger":"drawer":i==="carrying"?"strip":i==="powered"?"laptop":null}}}function rm({adapterExit:i,connectorExit:e,laptop:t,floorSupport:n,strip:r}){let s=i.getWorldPosition(new w),o=e.getWorldPosition(new w),a=new w(1,0,0).transformDirection(i.matrixWorld),l=new w(-1,0,0).transformDirection(e.matrixWorld),c=y=>(y.y=n(y.x,y.z)+.0055,y),h=(y,p)=>c(t.localToWorld(new w(y,0,p))),f=[s,s.clone().addScaledVector(a,.065),c(s.clone().addScaledVector(a,.22))];if(r){let y=r.worldToLocal(s.clone()),p=Math.max(.24,y.y+.045),d=(M,x)=>r.localToWorld(new w(y.x,M,x));f=[s,s.clone().addScaledVector(a,.045),d(p,-.1),d(.1,-.19),c(d(0,-.29))]}let u=[...f,h(-.32,1.45),h(-.61,1.12),h(-.85,.85),h(-.91,.48),h(-.9,.06),c(o.clone().addScaledVector(l,.23)),o.clone().addScaledVector(l,.09),o],m=new Yt(u,!1,"centripetal"),g=new ei;return g.getPoint=(y,p=new w)=>(m.getPoint(y,p),p.y=Math.max(p.y,n(p.x,p.z)+.0055),p),new un(g,112,.0045,8,!1)}function Yd(i,e,t){let n=new St,r=i/2,s=e/2;return n.moveTo(-r+t,-s),n.lineTo(r-t,-s),n.quadraticCurveTo(r,-s,r,-s+t),n.lineTo(r,s-t),n.quadraticCurveTo(r,s,r-t,s),n.lineTo(-r+t,s),n.quadraticCurveTo(-r,s,-r,s-t),n.lineTo(-r,-s+t),n.quadraticCurveTo(-r,-s,-r+t,-s),n}function $d(i,e,t=.001){let n=new sn(i,{depth:e-2*t,bevelEnabled:t>0,bevelSize:t,bevelThickness:t,bevelSegments:2,curveSegments:6});return n.translate(0,0,-e/2+t),n}function Cr(i,e,t,n,r){let s=new ot(e,t);return s.position.set(...n),s.name=r,s.castShadow=s.receiveShadow=!0,i.add(s),s}function sm(i,e,t,n,r){return Cr(i,new wt(...e),n,t,r)}function Tl(i,e,t,n,r,s=.012){return Cr(i,$d(Yd(e[0],e[1],s),e[2],Math.min(.002,e[2]/4)),n,t,r)}function jr(i,e,t,n,r,s,o,a=.012){let l=Cr(i,$d(Yd(e,t,a),n,Math.min(.002,n/4)),s,r,o);return l.rotation.x=-Math.PI/2,l}function om(){let i=new ve;i.name="MacBook USB-C power adapter",i.userData.chargingAction="charger";let e=new Oe({color:15065816,roughness:.36}),t=new Oe({color:10855836,roughness:.7}),n=new Oe({color:12239556,metalness:.8,roughness:.3}),r=new Oe({color:1909537,roughness:.8});Tl(i,[.142,.147,.065],[0,.083,0],e,"Upright rounded adapter shell"),Tl(i,[.143,.148,.0015],[0,.083,0],t,"Adapter casing seam"),Tl(i,[.06,.029,.062],[0,.014,-.012],e,"Removable AC duckhead",.006);for(let c of[-.014,.014])sm(i,[.005,.023,.014],[c,-.01,-.012],n,"Downward AC prong");let s=jr(i,.025,.01,.002,[0,.158,0],r,"USB-C port on top",.003),o=new ve;o.name="USB-C adapter plug and strain relief",o.visible=!1,i.add(o),Tl(o,[.027,.034,.014],[0,.177,0],e,"Upright USB-C plug",.005);let a=Cr(o,new Ut(.0045,.007,.024,12),e,[0,.204,0],"Adapter cable strain relief"),l=new gt;return l.name="Adapter cable exit",l.position.set(0,.216,0),l.rotation.z=Math.PI/2,i.add(l),{group:i,plug:o,exit:l}}function am(){let i=new ve;i.name="Powered floor power strip",i.userData.chargingAction="strip";let e=new Oe({color:13223864,roughness:.65}),t=new Oe({color:14736848,roughness:.52}),n=new Oe({color:2369312,roughness:.9}),r=new Oe({color:9279897,metalness:.75,roughness:.45});jr(i,.646,.132,.05,[0,0,0],e,"Rounded power strip housing",.025),jr(i,.646,.133,.006,[0,-.012,0],n,"Dark housing joint",.025);for(let u of[-.255,.255])for(let m of[-.041,.041])jr(i,.035,.021,.006,[u,-.028,m],n,"Rubber foot",.005);let s=[-.205,-.095,.015,.125];for(let[u,m]of s.entries()){jr(i,.094,.103,.003,[m,.0255,0],n,"Recessed socket surround",.013);let g=Yd(.088,.097,.011);for(let d of[-1,1]){let M=d<0?.0055:.0045,x=.016,E=new li,R=d*.014,b=.012;E.moveTo(R-M/2,b-x/2),E.lineTo(R-M/2,b+x/2),E.lineTo(R+M/2,b+x/2),E.lineTo(R+M/2,b-x/2),E.closePath(),g.holes.push(E)}let y=new li;y.absarc(0,-.024,.006,0,Math.PI*2,!0),g.holes.push(y);let p=Cr(i,$d(g,.005,4e-4),t,[m,.03,0],`Recessed grounded outlet ${u+1}`);p.rotation.x=-Math.PI/2}jr(i,.054,.075,.006,[.253,.029,0],n,"Recessed switch bezel",.01);let o=new Oe({color:12074535,roughness:.29,emissive:10232082,emissiveIntensity:.18}),a=jr(i,.037,.055,.01,[.253,.034,0],o,"Illuminated on-off rocker",.007);a.rotation.z=.1,jr(i,.003,.014,.001,[.245,.04,0],t,"Switch on symbol",7e-4);let l=new mt({color:8767595});Cr(i,new Ut(.003,.003,.001,10),l,[.211,.028,.039],"Surge protection indicator");for(let u of[-.303,.303])Cr(i,new Ut(.006,.006,.002,12),r,[u,.026,0],"Recessed casing screw"),sm(i,[.008,8e-4,.001],[u,.0273,0],n,"Screw slot");let c=Cr(i,new Ut(.009,.012,.052,12),n,[.344,-.004,0],"Moulded mains strain relief");c.rotation.z=-Math.PI/2;for(let u=0;u<5;u++){let m=Cr(i,new Qt(.01-u*45e-5,.0014,5,12),n,[.326+u*.009,-.004,0],"Strain relief rib");m.rotation.y=Math.PI/2}let h=new gt;h.name="Power strip mains cable exit",h.position.set(.37,-.004,0),i.add(h);let f=new gt;return f.name="Charger plug seat",f.position.set(s[0],.033,0),i.add(f),{group:i,leadExit:h,adapterSeat:f}}function cm({exit:i,wallPlug:e,floorSupport:t}){let n=i.getWorldPosition(new w),r=new w(1,0,0).transformDirection(i.matrixWorld),s=e.clone(),o=h=>(h.y=t(h.x,h.z)+.0085,h),a=[n,n.clone().addScaledVector(r,.07),o(n.clone().addScaledVector(r,.22)),o(new w(2.73,0,4)),o(new w(2.5,0,4.27)),new w(s.x+.08,.07,s.z-.07),s.clone().add(new w(0,-.06,-.02)),s],l=new Yt(a,!1,"centripetal"),c=new ei;return c.getPoint=(h,f=new w)=>(l.getPoint(h,f),f.y=Math.max(f.y,t(f.x,f.z)+.0085),f),new un(c,88,.0075,7,!1)}function lm({filing:i,laptop:e,floorSupport:t,drawerMaterial:n}){let r=new ve;r.name="Interactive MacBook charging kit",r.userData.ignoreAcid=!0;let s=new An(10794149,1.5,2.8,2);s.position.set(1.55,1.25,3.25),s.userData.mobileEssential=!0,r.add(s);let o=im(),a=new Oe({color:14275780,roughness:.51}),l=new Oe({color:15131609,roughness:.42}),c=new Oe({color:2435105,roughness:.88}),h=new Oe({color:9082261,roughness:.4,metalness:.7}),f=l.clone(),u={value:new w},m={value:0};f.onBeforeCompile=be=>{be.uniforms.cableBurnPoint=u,be.uniforms.cableBurnAmount=m,be.vertexShader=`uniform vec3 cableBurnPoint;uniform float cableBurnAmount;varying float vCableBurn;
`+be.vertexShader,be.vertexShader=be.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
   vCableBurn=(1.0-smoothstep(.025,.18,distance((modelMatrix*vec4(position,1.0)).xyz,cableBurnPoint)))*cableBurnAmount;
   transformed-=normal*vCableBurn*.0025;`),be.fragmentShader=`varying float vCableBurn;
`+be.fragmentShader,be.fragmentShader=be.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.055,.026,.012),vCableBurn);`)},f.customProgramCacheKey=()=>"melting-charger-insulation-v1";let g=new mt({color:16757557}),y=new mt({color:9422728});function p(be,Ne,Je=r){let Le=new ot(be,Ne);return Le.castShadow=!0,Le.receiveShadow=!0,Je.add(Le),Le}function d(be,Ne,Je,Le){let J=p(new wt(...be),Je,Le);return J.position.set(...Ne),J}function M(be,Ne,Je,Le){let[J,me,Me]=be,ge=Math.min(.012,me*.24),xe=new St,ae=J/2,Be=me/2;xe.moveTo(-ae+ge,-Be),xe.lineTo(ae-ge,-Be),xe.quadraticCurveTo(ae,-Be,ae,-Be+ge),xe.lineTo(ae,Be-ge),xe.quadraticCurveTo(ae,Be,ae-ge,Be),xe.lineTo(-ae+ge,Be),xe.quadraticCurveTo(-ae,Be,-ae,Be-ge),xe.lineTo(-ae,-Be+ge),xe.quadraticCurveTo(-ae,-Be,-ae+ge,-Be);let $=Math.min(.004,Me/6),Re=new sn(xe,{depth:Me-2*$,bevelEnabled:!0,bevelSize:$,bevelThickness:$,bevelSegments:2,curveSegments:5});Re.translate(0,0,-Me/2+$);let ce=p(Re,Je,Le);return ce.position.set(...Ne),ce}function x(be,Ne,Je,Le=r){return p(new un(new Yt(be.map(J=>J.isVector3?J:new w(...J))),48,Ne,7,!1),Je,Le)}function E(be,Ne,Je,Le,J){let me=document.createElement("canvas");me.width=512,me.height=128;let Me=me.getContext("2d");Me.fillStyle="#c4c4b6",Me.fillRect(0,0,512,128),Me.fillStyle="#353b35",Me.font="600 58px Arial",Me.textAlign="center",Me.fillText(be,256,85,480);let ge=new Nt(me);ge.colorSpace=yt;let xe=p(new _t(Ne,Je),new Oe({map:ge,roughness:.9}),J);return xe.position.set(...Le),xe}let R=new ve;R.name="Rear drawer containing the MacBook charger",R.userData.chargingAction="drawer",R.position.set(-.38,.56,0),i.add(R),d([.71,.32,.025],[0,0,.231],n,R),M([.22,.022,.028],[0,.04,.264],h,R),E("CHARGERS",.2,.047,[0,-.065,.246],R),d([.66,.018,.36],[0,-.145,.025],n,R);for(let be of[-.33,.33])d([.015,.27,.36],[be,-.01,.025],n,R);d([.66,.27,.015],[0,-.01,-.155],n,R);for(let be of[-.348,.348])d([.013,.027,.43],[be,-.08,.015],h,R);let{group:b,plug:T,exit:I}=om();R.add(b);let O=new w(.105,-.105,-.055);b.position.copy(O),b.rotation.x=Math.PI/2;let v=E("96W USB-C",.077,.018,[0,.082,-.034],b);v.rotation.y=Math.PI,v.material.color.setHex(10066834);let S=new ve;S.name="Coiled charger cable",S.userData.chargingAction="charger",R.add(S),S.position.set(-.145,-.127,.06);let H=[];for(let be=0;be<=120;be++){let Ne=be/120*Math.PI*6;H.push([Math.cos(Ne)*(.086+be*12e-5),be*45e-6,Math.sin(Ne)*.06])}let G=x(H,.0045,f,S);M([.041,.014,.019],[.12,.01,0],l,S),d([.014,.009,.014],[.145,.01,0],h,S);let{group:Y,leadExit:j,adapterSeat:W}=am();Y.position.set(1.94,t(1.94,3.72)+.032,3.72),Y.rotation.y=-.16,r.add(Y),E("SURGE",.04,.012,[.253,.043,-.042],Y).rotation.x=-Math.PI/2;let F=M([.12,.16,.018],[2.15,.27,4.424],a,r);for(let be of[.235,.3]){d([.065,.042,.006],[2.15,be,4.411],l,r);for(let Ne of[2.136,2.164])d([.005,.016,.003],[Ne,be+.004,4.406],c,r)}M([.054,.043,.055],[2.15,.3,4.383],c,r);let se=p(cm({exit:j,wallPlug:new w(2.15,.3,4.35),floorSupport:t}),c);se.name="Power strip mains lead to wall socket",se.raycast=()=>{};let le=new ve;le.name="MacBook charging port",le.userData.chargingAction="laptop",le.position.set(-.446,.002,-.18),e.object.add(le),d([.005,.01,.035],[0,0,0],c,le);let N=p(new wt(.045,.048,.085),new mt({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}),le);N.castShadow=!1;let ee=new ve;ee.name="Connected MacBook charging cable",ee.visible=!1,r.add(ee),M([.048,.018,.026],[0,0,0],l,ee),d([.014,.008,.022],[.03,0,0],h,ee);let Q=p(new Ut(.0048,.008,.032,12),a,ee);Q.rotation.z=Math.PI/2,Q.position.x=-.041;let oe=new gt;oe.name="Laptop cable exit",oe.position.x=-.057,ee.add(oe);let k=d([.01,.003,.007],[.005,.011,0],g,ee);k.castShadow=!1;let ne=document.createElement("canvas");ne.width=512,ne.height=96;let B=ne.getContext("2d"),z=new Nt(ne);z.colorSpace=yt;let V=p(new _t(.245,.046),new mt({map:z}),e.screen);V.name="MacBook battery charge readout",V.position.set(.282,.235,.001),V.visible=!1,V.castShadow=!1;let ue=0,we=-1/0,Ue=-1/0,K=null,L=-1,fe="",_e=null,ye=new w,Ee=new w,De=[];function Ae(be,Ne){Ne.updateWorldMatrix(!0,!1),De.length=0;for(let Je=0;Je<=96;Je++){let Le=be.parameters.path.getPoint(Je/96).applyMatrix4(Ne.matrixWorld);Le.y<t(Le.x,Le.z)+.035&&De.push(Le)}}function U(be){let Ne=K?.geometry,Je=rm({adapterExit:I,connectorExit:oe,laptop:e.object,floorSupport:t,strip:Y});K?(K.geometry=Je,Ne.dispose()):(K=p(Je,f),K.name="Charging cable resting across the floor",K.raycast=()=>{}),Ae(Je,K),L=be}function A(be,Ne,Je=!1){let Le=o.phase,J=o.use(be,Je);return Je||(Le==="drawer"&&o.phase==="carrying"&&(b.visible=!1,S.visible=!1),Le==="carrying"&&o.phase==="powered"&&(Y.add(b),b.visible=!0,b.rotation.set(0,0,0),b.position.copy(W.position),we=Ne,r.add(S),S.visible=!0,S.rotation.set(0,.4,0),S.position.set(1.7,t(1.7,3.42)+.008,3.42),Ae(G.geometry,G)),Le==="powered"&&o.phase==="charging"&&(Ue=Ne,ee.visible=!0,T.visible=!0,S.visible=!1)),J}function re(be,Ne=!1){let Je=_e===null?0:Math.max(0,Math.min(.05,be-_e));_e=be,o.update(Je);let Le=o.drawerOpen?1:0;if(ue=Ne?Le:qe.damp(ue,Le,8,Je),R.position.z=ue*.43,(o.phase==="powered"||o.phase==="charging")&&(b.position.y=W.position.y+(Ne?0:.19*(1-qe.smootherstep(be-we,0,.65)))),o.phase==="charging"){let ge=Ne?1:qe.smootherstep(be-Ue,0,.65);le.getWorldPosition(Ee),ee.quaternion.copy(e.object.getWorldQuaternion(new dt)),ye.set(-.032-(1-ge)*.12,(1-ge)*.028,0).applyQuaternion(ee.quaternion),ee.position.copy(Ee).add(ye),(Math.abs(ge-L)>.02||ge===1&&L!==1)&&U(ge),k.material=o.battery>=100?y:g}V.visible=e.openProgress>.35;let J=Math.floor(o.battery),me=o.phase==="charging",Me=`${me?"\u26A1 ":""}${J}%`;Me!==fe&&(fe=Me,B.fillStyle="#222e36",B.fillRect(0,0,512,96),B.fillStyle=me?"#93dba3":"#e3b36d",B.font="500 44px Arial",B.textAlign="right",B.fillText(Me,385,63),B.strokeStyle=me?"#93dba3":"#e3b36d",B.lineWidth=5,B.strokeRect(405,25,72,44),B.fillRect(480,37,7,19),B.fillRect(413,33,56*J/100,28),z.needsUpdate=!0)}function Se(){o.reset(),De.length=0,m.value=0,k.visible=!0,ue=0,R.position.z=0,R.add(b,S),b.visible=S.visible=!0,b.position.copy(O),b.rotation.set(Math.PI/2,0,0),S.position.set(-.145,-.127,.06),S.rotation.set(0,0,0),ee.visible=!1,T.visible=!1,K&&(r.remove(K),K.geometry.dispose(),K=null),L=-1,fe="",_e=null}function Pe(be){return o.phase==="damaged"?"Charger cable burned through":be==="drawer"?o.drawerOpen?"Close charger drawer":"Open charger drawer":be==="charger"?"Take MacBook charger + cable":be==="strip"?o.phase==="carrying"?"Plug charger into power strip":"Powered power strip":be==="laptop"?o.phase==="powered"?"Connect charger to MacBook":`MacBook battery \xB7 ${Math.floor(o.battery)}%`:o.phase==="carrying"?"Charger collected \xB7 Plug into the power strip [F]":o.phase==="powered"?"Charger powered \xB7 Connect the MacBook [F]":o.phase==="charging"?`${o.battery>=100?"Fully charged":"Charging"} \xB7 ${Math.floor(o.battery)}%`:""}function Ce(be,Ne){i.updateWorldMatrix(!0,!1),i.localToWorld(be.set(R.position.x,R.position.y+.94,1.08)),i.localToWorld(Ne.set(R.position.x,R.position.y-.085,.48))}function Ze(be,Ne){u.value.copy(be),m.value=Ne,Ne>=1&&(o.damageCable(),k.visible=!1)}return re(0),{group:r,use:A,update:re,reset:Se,hint:Pe,getDrawerView:Ce,meltCable:Ze,get cablePoints(){return De},get energized(){return o.phase==="powered"||o.phase==="charging"},get drawerOpen(){return o.drawerOpen},get phase(){return o.phase},get nextAction(){return o.nextAction},get drawerReady(){return ue>.85},get battery(){return o.battery}}}function hm(){let i="sealed",e=-1/0;return{get phase(){return i},get hasKey(){return i==="collected"},get startedAt(){return e},pour(t){return i!=="sealed"?!1:(i="pouring",e=t,!0)},update(t){i==="pouring"&&t-e>=3.4&&(i="revealed")},collect(){return i!=="revealed"?!1:(i="collected",!0)},reset(){i="sealed",e=-1/0}}}function um(i){let e=i.geometry,t=e.attributes.position,n=t.array.slice(),r=e.parameters.points,s=e.parameters.segments,o=r.length,a=r.filter(p=>p.x>0),l=a[0].y,c=a.at(-1).y,h=new Float32Array(s+1),f=new Float32Array(s+1),u=!1;function m(p){for(let d=1;d<a.length;d++)if(p<=a[d].y){let M=a[d-1],x=a[d],E=(p-M.y)/(x.y-M.y||1);return M.x+(x.x-M.x)*E}return a.at(-1).x}function g(){t.array.set(n),t.needsUpdate=!0,e.computeVertexNormals(),i.visible=!0,u=!1}function y(p){if(p>=.999){i.visible=!1,u=!0;return}if(u)return;i.updateWorldMatrix(!0,!1);let d=i.matrixWorld.elements;if(d[5]>=-.3||p<=0)return;let M=l+(c-l)*p,x=d[5]*M;for(let E=0;E<=s;E++){let R=E/s*Math.PI*2,b=Math.sin(R),T=Math.cos(R),I=l,O=c;for(let v=0;v<18;v++){let S=(I+O)/2,H=m(S);(d[1]*b+d[9]*T)*H+d[5]*S>x?I=S:O=S}h[E]=(I+O)/2,f[E]=m(h[E]);for(let v=0;v<o;v++){let S=E*o+v,H=S*3,G=n[H+1];if(G<h[E]){let Y=r[v].x===0;t.setXYZ(S,Y?0:b*f[E],Y?M:h[E],Y?0:T*f[E])}else t.setXYZ(S,n[H],G,n[H+2])}}t.needsUpdate=!0,e.computeVertexNormals()}return{update:y,reset:g}}function dm({bottle:i,contents:e,cap:t,floorSupport:n}){let r=new ve;r.name="Ketchup spill and hidden shackle key";let s=hm(),o=i.position.clone(),a=i.quaternion.clone();i.userData.keyAction="pour";let l=new w(0,1,0).applyQuaternion(a),c=new dt().setFromUnitVectors(l,new w(-.12,-.99,.06).normalize()).multiply(a),h=o.clone().add(new w(-.32,.42,-.04)),f=um(e),u=new w(0,.469,0).applyMatrix4(i.children[0].matrix).multiply(i.scale).applyQuaternion(c).add(h);u.y=n(u.x,u.z)+.009;let m=t.position.clone(),g=t.quaternion.clone();t.updateWorldMatrix(!0,!1);let y=t.getWorldPosition(new w),p=t.getWorldQuaternion(new dt),d=y.clone().add(new w(-.13,0,.1));d.y=n(d.x,d.z)+.016;let M=new Oe({color:13674833,metalness:.72,roughness:.27,emissive:7161877,emissiveIntensity:.18}),x=new ve;x.name="Brass shackle key",x.userData.keyAction="collect",r.add(x),x.visible=!1;function E(Q,oe,k){let ne=new ot(Q,oe);return ne.castShadow=!0,ne.receiveShadow=!0,k.add(ne),ne}let R=E(new Qt(.025,.0055,8,24),M,x);R.rotation.x=Math.PI/2,R.position.x=-.042;let b=E(new wt(.078,.009,.01),M,x);b.position.x=.013;for(let Q of[.027,.047])E(new wt(.01,.009,.022),M,x).position.set(Q,0,.01);let T=E(new wt(.15,.04,.1),new mt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),x);T.castShadow=!1,T.receiveShadow=!1;let I=new $t({color:12001548,roughness:.28,clearcoat:1,clearcoatRoughness:.18}),O=new ve;O.position.copy(u),O.position.y-=.006,r.add(O),O.visible=!1;let v=new St;for(let Q=0;Q<=64;Q++){let oe=Q/64*Math.PI*2,k=1+.1*Math.sin(oe*5)+.07*Math.cos(oe*9),ne=Math.cos(oe)*.2*k,B=Math.sin(oe)*.13*k;Q===0?v.moveTo(ne,B):v.lineTo(ne,B)}let S=E(new er(v,32),I,O);S.rotation.x=-Math.PI/2,S.castShadow=!1;let H=[];for(let Q=0;Q<7;Q++){let oe=Q*2.4,k=.05+Q*.016,ne=E(new en(1,12,8),I,O);ne.position.set(Math.cos(oe)*k,.003,Math.sin(oe)*k*.6),ne.scale.set(.015+Q%3*.005,.004,.012),H.push(ne)}let G=E(new Ut(.7,1,1,10),I,r);G.name="Downward ketchup stream",G.visible=!1,G.castShadow=!1;let Y=new w,j=new w,W=new w,F=new w(0,1,0),se=Q=>{let oe=qe.clamp(Q,0,1);return oe*oe*(3-2*oe)},le=!1;function N(){s.reset(),i.position.copy(o),i.quaternion.copy(a),f.reset(),i.children[0].add(t),t.position.copy(m),t.quaternion.copy(g),t.scale.setScalar(1),le=!1,x.visible=!1,O.visible=!1,G.visible=!1}function ee(Q,oe){if(s.update(Q),s.phase==="sealed")return;let k=Q-s.startedAt,ne=se(k/.8)*(1-se((k-3.35)/.8));i.position.copy(o).lerp(h,ne),i.quaternion.copy(a).slerp(c,ne),le||(r.attach(t),le=!0),t.position.copy(y).lerp(d,se(k/.55)),t.position.y+=Math.sin(Math.min(1,k/.55)*Math.PI)*.08,t.quaternion.copy(p).multiply(new dt().setFromAxisAngle(new w(0,0,1),se(k/.55)*2));let B=se((k-.8)/2.5);if(f.update(B),O.visible=k>.75,O.scale.setScalar(Math.max(.01,B)),i.updateWorldMatrix(!0,!0),i.children[0].localToWorld(Y.set(0,.469,0)),G.visible=k>.8&&k<3.3,G.visible){j.copy(Y).add(u).multiplyScalar(.5),W.subVectors(Y,u),G.position.copy(j),G.quaternion.setFromUnitVectors(F,W.clone().normalize());let z=oe?1:1+Math.sin(k*21)*.12;G.scale.set(.012*z,W.length(),.012*z)}if(x.visible=k>=2.5&&!s.hasKey,x.visible){let z=se((k-2.5)/.9);x.position.copy(Y).lerp(u,z),x.position.y+=Math.sin(z*Math.PI)*.065,x.rotation.set((1-z)*2,z*.5,(1-z)*3),M.emissiveIntensity=oe?.22:.22+.1*Math.sin(Q*3)}}return{group:r,bottle:i,key:x,update:ee,reset:N,get hasKey(){return s.hasKey},get phase(){return s.phase},pour:Q=>s.pour(Q),collect:()=>s.collect(),hint(Q){return Q==="collect"&&!s.hasKey?s.phase==="revealed"?"Pick up the shackle key":"A key is sliding out\u2026":Q==="pour"?s.phase==="sealed"?"Pour out the ketchup":s.phase==="pouring"?"Pouring ketchup\u2026":s.hasKey?"The bottle is empty":"Pick up the key in the ketchup":""}}}var Rl=(i,e,t)=>Math.max(e,Math.min(t,i));function fm({speed:i=.38,maxPoints:e=180}={}){let t=[],n=null,r=!1;function s(a,l,c,h=!1){return h||n!==null||t.some(f=>f.index===a)?!1:(t.push({index:a,openedAt:c,progress:0,origin:{...l},head:{x:l.x,z:l.z},points:[]}),!0)}function o(a,l,c,{target:h=c}={}){if(r)return!1;for(let f of t){if(f.progress=Rl((a-f.openedAt)/1.35,0,1),a-f.openedAt<.48)continue;f.points.length||f.points.push({...f.head,born:a,radius:.13});let u=h.x-f.head.x,m=h.z-f.head.z,g=Math.hypot(u,m),y=Math.min(g,i*Rl(l,0,.08));if(g>.001){let d=.18*Math.sin((a-f.openedAt)*.85+f.index*1.9),M=Math.sqrt(1+d*d);f.head.x+=(u/g-m/g*d)*y/M,f.head.z+=(m/g+u/g*d)*y/M}let p=f.points.at(-1);Math.hypot(p.x-f.head.x,p.z-f.head.z)>.075&&(f.points.push({...f.head,born:a,radius:.13}),f.points.length>e&&f.points.splice(1,1));for(let[d,M]of f.points.entries()){let x=Rl((a-M.born)/3,0,1);M.radius=d===0?.16+.23*x:.12+(.13+.025*Math.sin(M.born*1.8+f.index))*x,n===null&&Math.hypot(c.x-M.x,c.z-M.z)<M.radius+.15&&(n=a)}}return n!==null&&a-n>=.85?(r=!0,!0):!1}return{open:s,update:o,leaks:t,reset(){t.length=0,n=null,r=!1},get dying(){return n!==null},get finished(){return r},blackout(a){return n===null?0:Rl((a-n)/.7,0,1)}}}function pm(i,e,t){let n=Ie.textureSize,r=document.createElement("canvas");r.width=r.height=n;let s=r.getContext("2d"),o=new Nt(r);o.flipY=!1,o.generateMipmaps=!1,o.minFilter=pn;let a={value:o};function l(x){let E=new $t({color:6519843,roughness:.12,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.08,emissive:2571784,emissiveIntensity:.15,transparent:x,opacity:x?.92:1,depthWrite:!x,side:Pt,envMapIntensity:1.4});return E.onBeforeCompile=R=>{R.uniforms.acidTime=t,R.uniforms.acidWet=a,R.vertexShader=`varying vec3 vWetWorld;
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
    normal=normalize(normal+mat3(viewMatrix)*vec3(dx,0.0,dz));`)},E.customProgramCacheKey=()=>`acid-water-${x?"surface":"jet"}-v2`,E}let c=l(!0),h=l(!1),f=Ie.mobile?48:72,u=new _t(8.2,8.8,f,f);u.rotateX(-Math.PI/2),u.translate(0,0,.2);let m=u.attributes.position,g=u.attributes.uv;for(let x=0;x<m.count;x++){let E=m.getX(x),R=m.getZ(x);m.setY(x,i(E,R)+.006),g.setXY(x,(E+4.1)/8.2,(R+4.2)/8.8)}m.needsUpdate=!0,g.needsUpdate=!0,u.computeVertexNormals();let y=new ot(u,c);y.name="Continuous reflective acid film",y.renderOrder=4,y.receiveShadow=!0;let p=new ot(u,new mt({color:1053961,alphaMap:e,transparent:!0,opacity:.44,depthWrite:!1,alphaTest:.01}));p.name="Damp corroded edge beneath acid",p.position.y=-.002,p.renderOrder=3;let d=-1/0;function M(x,E){if(!(x-d<.1)){d=x,s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,n,n),s.globalCompositeOperation="lighten";for(let R of E)for(let b of R.points){let T=(b.x+4.1)/8.2*n,I=(b.z+4.2)/8.8*n,O=b.radius*n/8.2,v=s.createRadialGradient(T,I,0,T,I,O);v.addColorStop(0,"#fff"),v.addColorStop(.62,"#fff"),v.addColorStop(.85,"#999"),v.addColorStop(1,"#000"),s.fillStyle=v,s.fillRect(T-O,I-O,O*2,O*2)}o.needsUpdate=!0}}return{pool:y,scorch:p,jetMaterial:h,update:M,reset(){d=-1/0,s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,n,n),o.needsUpdate=!0},setEnvironment(x){for(let E of[c,h])E.envMap=x,E.needsUpdate=!0}}}function mm(i,e,t){let n=new w,r=new dt;i.getWorldPosition(n),i.getWorldQuaternion(r);let s=new w(0,-.25,.6).applyQuaternion(r),o=9.81,a=e(n.x,n.z)+.009,l=Math.max(.01,n.y-a),c=(s.y+Math.sqrt(s.y*s.y+2*o*l))/o,h=n.clone().addScaledVector(s,c);h.y=e(h.x,h.z)+.009;let f=20,u=10,m=new Rt,g=new Float32Array((f+1)*(u+1)*3),y=new Float32Array(g.length),p=[];for(let I=1;I<=f;I++)for(let O=1;O<=u;O++){let v=I*(u+1)+O;p.push(v,v-u-2,v-1,v,v-u-1,v-u-2)}m.setAttribute("position",new rn(g,3).setUsage(gn)),m.setAttribute("normal",new rn(y,3).setUsage(gn)),m.setIndex(p);let d=new ot(m,t);d.name="Gravity-fed wavering drain stream",d.frustumCulled=!1,d.raycast=()=>{};let M=new w,x=new w,E=new w,R=new w,b=new w;function T(I,O){let v=qe.smoothstep(O,0,.65);for(let S=0;S<=f;S++){let H=S/f,G=H*c;M.copy(n).addScaledVector(s,G),M.y-=.5*o*G*G,M.x+=Math.sin(I*19-H*13)*.002*H,M.z+=Math.sin(I*16-H*11)*.0015*H,x.copy(s),x.y-=o*G,x.normalize(),E.set(1,0,0).addScaledVector(x,-x.x).normalize(),R.crossVectors(E,x);let Y=(.021-.01*H)*(1+.12*Math.sin(H*25-I*23))*v;for(let j=0;j<=u;j++){let W=j/u*Math.PI*2,F=(S*(u+1)+j)*3;b.copy(E).multiplyScalar(Math.cos(W)).addScaledVector(R,Math.sin(W)),b.toArray(y,F),g[F]=M.x+b.x*Y,g[F+1]=M.y+b.y*Y,g[F+2]=M.z+b.z*Y}}m.attributes.position.needsUpdate=m.attributes.normal.needsUpdate=!0}return T(0,1),{mesh:d,origin:h,update:T}}function gm({valves:i,floorSupport:e}){let t=new ve;t.name="Corrosive green liquid, bubbles and contact smoke",t.userData.ignoreAcid=!0,t.visible=!1;let n=fm(),r=new gt,s=new dt,o={value:0},a=new Map,l=new Map,c=[],h=-1/0,f=document.createElement("canvas");f.width=f.height=512;let u=f.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,512,512);let m=new Nt(f);m.generateMipmaps=!1,m.minFilter=pn,m.flipY=!1;let g={value:m};function y(N){if(l.has(N))return l.get(N);let ee=N.clone(),Q=N.onBeforeCompile,oe=N.customProgramCacheKey();return N.color&&(ee.color=N.color),N.emissive&&(ee.emissive=N.emissive),ee.onBeforeCompile=k=>{Q.call(N,k),k.uniforms.acidBurn=g,k.vertexShader=`varying vec3 vAcidWorld;
`+k.vertexShader,k.vertexShader=k.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 acidVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     acidVertex=instanceMatrix*acidVertex;
    #endif
    vAcidWorld=(modelMatrix*acidVertex).xyz;`),k.fragmentShader=`uniform sampler2D acidBurn;varying vec3 vAcidWorld;
`+k.fragmentShader,k.fragmentShader=k.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 acidUV=(vAcidWorld.xz+vec2(4.1,4.2))/vec2(8.2,8.8);
    float burned=texture2D(acidBurn,clamp(acidUV,0.0,1.0)).r*(1.0-smoothstep(.035,.32,vAcidWorld.y));
    float pitting=fract(sin(dot(floor(vAcidWorld*145.0),vec3(17.17,83.23,39.71)))*43758.5453);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.063,.025)+pitting*.035,burned*.94);
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`)},ee.customProgramCacheKey=()=>oe+"-acid-corrosion-v1",l.set(N,ee),ee}function p(N){let ee=new Rn;function Q(oe){if(!oe.userData.ignoreAcid){if(oe.isMesh&&oe.material&&(ee.setFromObject(oe),ee.min.y<.4&&ee.max.y>-.01)){ee.max.y>.02&&ee.max.y<.65&&c.push(ee.clone());let k=ne=>ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial||ne.isMeshBasicMaterial||ne.isMeshToonMaterial?y(ne):ne;oe.material=Array.isArray(oe.material)?oe.material.map(k):k(oe.material)}for(let k of oe.children)Q(k)}}for(let oe of N)oe.updateWorldMatrix(!0,!0),Q(oe)}let d=pm(e,m,o);t.add(d.scorch,d.pool);let M=new hn(new en(1,10,7),new $t({color:10530404,roughness:.13,clearcoat:1,transparent:!0,opacity:.72,depthWrite:!1}),54);M.instanceMatrix.setUsage(gn),M.frustumCulled=!1,M.count=0,t.add(M);let x=new hn(new en(1,8,6),d.jetMaterial,42);x.instanceMatrix.setUsage(gn),x.frustumCulled=!1,x.count=0,x.name="Small falling splash droplets",t.add(x);let E=new hr(.9,1,32);E.rotateX(-Math.PI/2);let R=new Rr(new Float32Array(12),1);E.setAttribute("rippleAlpha",R);let b=new mt({color:11978123,transparent:!0,opacity:.32,depthWrite:!1,side:Pt});b.onBeforeCompile=N=>{N.vertexShader=`attribute float rippleAlpha;varying float vRippleAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRippleAlpha=rippleAlpha;`),N.fragmentShader=`varying float vRippleAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vRippleAlpha;`)};let T=new hn(E,b,12);T.instanceMatrix.setUsage(gn),T.frustumCulled=!1,T.count=0,T.renderOrder=6,T.name="Expanding impact rings",t.add(T);let I=document.createElement("canvas");I.width=I.height=128;let O=I.getContext("2d");for(let N=0;N<7;N++){let ee=64+Math.sin(N*2.4)*23,Q=64+Math.cos(N*3.1)*21,oe=O.createRadialGradient(ee,Q,0,ee,Q,36);oe.addColorStop(0,"rgba(220,231,199,.3)"),oe.addColorStop(1,"rgba(220,231,199,0)"),O.fillStyle=oe,O.fillRect(0,0,128,128)}let v=new Nt(I),S=new _t(1,1),H=new Rr(new Float32Array(84),1);S.setAttribute("smokeAlpha",H);let G=new mt({map:v,transparent:!0,opacity:.27,depthWrite:!1,color:12699827,side:Pt});G.onBeforeCompile=N=>{N.vertexShader=`attribute float smokeAlpha;varying float vSmokeAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeAlpha=smokeAlpha;`),N.fragmentShader=`varying float vSmokeAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vSmokeAlpha;`)};let Y=new hn(S,G,84);Y.name="Smoke rising from corroding surfaces",Y.instanceMatrix.setUsage(gn),Y.frustumCulled=!1,Y.count=0,Y.renderOrder=12,t.add(Y),t.traverse(N=>{N.isMesh&&(N.raycast=()=>{})});function j(N,ee){let Q=e(N,ee);for(let oe of c)N>=oe.min.x&&N<=oe.max.x&&ee>=oe.min.z&&ee<=oe.max.z&&(Q=Math.max(Q,Math.min(.27,oe.max.y)));return Q}function W(N,ee,Q=!1){let oe=i[N];if(!oe||Q||n.dying||n.leaks.some(ne=>ne.index===N))return!1;let k=mm(oe.outlet,e,d.jetMaterial);return n.open(N,k.origin,ee,Q)?(k.mesh.visible=!1,t.add(k.mesh),a.set(N,k),t.visible=!0,!0):(k.mesh.geometry.dispose(),!1)}function F(N){if(!(N-h<.1)){h=N;for(let ee of n.leaks)for(let Q of ee.points){let oe=(Q.x+4.1)/8.2*512,k=(Q.z+4.2)/8.8*512,ne=Q.radius*512/8.2*1.18,B=u.createRadialGradient(oe,k,ne*.45,oe,k,ne);B.addColorStop(0,"rgba(255,255,255,.13)"),B.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=B,u.fillRect(oe-ne,k-ne,ne*2,ne*2)}m.needsUpdate=!0}}function se(N,ee,Q,oe,k=!1,ne={}){if(!n.leaks.length)return!1;let B=n.update(N,ee,Q,ne),z=k?0:N;o.value=z,oe.getWorldQuaternion(s);let V=0,ue=0,we=0,Ue=0;for(let K of n.leaks){i[K.index].setOpen(k?1:qe.smootherstep(K.progress,0,1));let L=a.get(K.index);if(L.mesh.visible=K.points.length>0,L.update(z,K.progress),!!K.points.length){for(let fe=0;fe<18;fe++){let _e=K.points[(fe*17+K.index*5)%K.points.length],ye=(z*.9+fe*.618)%1,Ee=fe*2.399,De=_e.radius*.57;r.position.set(_e.x+Math.cos(Ee)*De,e(_e.x,_e.z)+.008+Math.sin(ye*Math.PI)*.005,_e.z+Math.sin(Ee)*De);let Ae=(.005+fe%4*.0025)*Math.sin(ye*Math.PI);r.scale.set(Ae,Ae*.45,Ae),r.quaternion.identity(),r.updateMatrix(),M.setMatrixAt(V++,r.matrix)}for(let fe=0;fe<14;fe++){let _e=(z*2.7+fe*.618)%1,ye=fe*2.399+K.index,Ee=.015+_e*(.07+fe%3*.02),De=.045+fe%4*.012;r.position.set(K.origin.x+Math.cos(ye)*Ee,K.origin.y+4*De*_e*(1-_e),K.origin.z+Math.sin(ye)*Ee);let Ae=(.003+fe%3*.0015)*(1-_e*.45);r.scale.set(Ae,Ae*(1.3+_e),Ae),r.quaternion.identity(),r.updateMatrix(),x.setMatrixAt(we++,r.matrix)}for(let fe=0;fe<4;fe++){let _e=(z*1.6+fe*.25)%1,ye=.018+_e*.16;r.position.set(K.origin.x,e(K.origin.x,K.origin.z)+.01,K.origin.z),r.quaternion.identity(),r.scale.set(ye,1,ye*.92),r.updateMatrix(),T.setMatrixAt(Ue,r.matrix),R.setX(Ue++,Math.sin(_e*Math.PI)*(1-_e))}for(let fe=0;fe<16;fe++){let _e=fe*7%Math.min(35,K.points.length),ye=K.points[Math.max(0,K.points.length-1-_e)],Ee=(z*.46+fe*.381)%1,De=fe*2.4+K.index,Ae=ye.radius*(.45+Ee*.5),U=.075+Ee*.22;r.position.set(ye.x+Math.cos(De)*Ae+Math.sin(z+fe)*Ee*.06,j(ye.x,ye.z)+.015+Ee*.34,ye.z+Math.sin(De)*Ae),r.quaternion.copy(s),r.rotateZ(fe*.9+Ee*.4),r.scale.set(U,U*1.5,1),r.updateMatrix(),Y.setMatrixAt(ue,r.matrix),H.setX(ue++,Math.sin(Ee*Math.PI)*.58)}}}M.count=V,Y.count=ue,x.count=we,T.count=Ue;for(let K of[M,Y,x,T])K.instanceMatrix.needsUpdate=!0;return H.needsUpdate=!0,R.needsUpdate=!0,d.update(N,n.leaks),F(N),B}function le(){n.reset(),d.reset(),t.visible=!1,M.count=Y.count=x.count=T.count=0;for(let N of a.values())t.remove(N.mesh),N.mesh.geometry.dispose();a.clear();for(let N of i)N.setOpen(0);u.clearRect(0,0,512,512),u.fillStyle="#000",u.fillRect(0,0,512,512),m.needsUpdate=!0,h=-1/0}return{group:t,open:W,update:se,reset:le,bindTargets:p,get leaks(){return n.leaks},setEnvironment:d.setEnvironment,blackout:N=>n.blackout(N),get dying(){return n.dying},get active(){return n.leaks.length>0}}}var es=(i,e=0,t=1)=>Math.max(e,Math.min(t,i));function xm(){let i="idle",e=!1,t=null,n=null,r=null,s=null,o=null,a=null,l=0,c=0,h=[];function f(u,m,{contact:g=null,live:y=!1,viewer:p}){if(i==="dead")return!1;if(i==="idle"&&y&&g&&(o={...g},a={x:g.x,z:g.z},t=u,i="melting"),i==="melting"&&(c=es((u-t)/1.4),c===1&&(i="burning",n=u,h.push({...a,born:u,radius:.1}))),i==="burning"||i==="extinguishing"){let d=u-n;e&&r===null&&d>=1.1&&(r=u,i="extinguishing");let M=r===null?0:es((u-r)/2.8);if(l=es(d/1.2)*(1-M),i==="burning"&&d>.8){let x=p.x-a.x,E=p.z-a.z,R=Math.hypot(x,E),b=Math.min(R,.32*es(m,0,.08));R>.001&&(a.x+=x/R*b,a.z+=E/R*b),Math.hypot(a.x-h.at(-1).x,a.z-h.at(-1).z)>.14&&h.length<60&&h.push({...a,born:u,radius:.1})}for(let x of h)x.radius=.1+.35*es((u-x.born)/3),r===null&&s===null&&d>2.4&&Math.hypot(p.x-x.x,p.z-x.z)<x.radius+.17&&(s=u);M===1&&(i="extinguished",l=0)}return s!==null&&u-s>=1.1?(i="dead",!0):!1}return{update:f,patches:h,activateSprinklers(){e=!0},reset(){i="idle",e=!1,t=n=r=s=o=a=null,l=c=0,h.length=0},blackout(u){return s===null?0:es((u-s)/1)},get phase(){return i},get armed(){return e},get origin(){return o},get melt(){return c},get intensity(){return l},get dying(){return s!==null},water(u){return r===null?0:es((u-r)/.45)*(1-es((u-r-7)/2))}}}function ym({floorSupport:i,pipeMaterial:e}){let t=new ve;t.name="Ceiling sprinkler pipework and automatic spray",t.userData.ignoreAcid=!0;let n=new ve;t.add(n);let r=e.clone();r.color.setHex(9008999),r.roughness=.87,r.emissive.setHex(1512207),r.emissiveIntensity=.18;let s=new Oe({color:9598547,metalness:.72,roughness:.58,emissive:3351834,emissiveIntensity:.16}),o=new Oe({color:7346965,roughness:.3,metalness:.25}),a=[[-1.9,2.96,-1.4],[1.6,2.96,-1.4],[-1.9,2.96,2.2],[1.6,2.96,2.2]],l=new w(0,1,0),c=new w,h=new w;function f(b,T,I,O=r,v=12){let S=new ot(new Ut(b,b,T,v),O);return S.position.set(...I),S.castShadow=!0,n.add(S),S}function u(b,T,I=.024,O=r){c.set(...b),h.set(...T);let v=h.clone().sub(c),S=f(I,v.length(),c.clone().add(h).multiplyScalar(.5).toArray(),O);return S.quaternion.setFromUnitVectors(l,v.normalize()),S}u([1.6,3.075,-3.97],[1.6,3.075,3.8]),u([1.6,3.075,-3.97],[1.6,2.48,-3.97]);for(let b of[-1.4,2.2]){u([-2.2,3.075,b],[1.6,3.075,b]);for(let T of[-1.9,1.6]){f(.039,.045,[T,3.075,b]),f(.018,.09,[T,3,b],s);let I=f(.083,.014,[T,3.102,b],r,24);I.receiveShadow=!0,f(.03,.024,[T,2.948,b],s,6);for(let O of[-1,1])u([T+O*.024,2.94,b],[T+O*.032,2.89,b],.005,s),u([T+O*.032,2.89,b],[T,2.87,b],.005,s);f(.007,.048,[T,2.913,b],o,8),f(.038,.006,[T,2.865,b],s,16);for(let O=0;O<10;O++){let v=O/10*Math.PI*2;u([T+Math.cos(v)*.025,2.864,b+Math.sin(v)*.025],[T+Math.cos(v)*.049,2.859,b+Math.sin(v)*.049],.003,s)}}}for(let b of[-2.9,.4,3.4])f(.033,.02,[1.6,3.08,b]),u([1.6,3.08,b],[1.6,3.15,b],.009);qn(n);let m=Ie.mobile?160:320,g=new Float32Array(m*6),y=new Rt;y.setAttribute("position",new rn(g,3).setUsage(gn));let p=new ji({color:12637404,transparent:!0,opacity:.38,depthWrite:!1}),d=new lr(y,p);d.name="Sprinkler droplets falling from ceiling deflectors",d.frustumCulled=!1,d.visible=!1,d.raycast=()=>{},t.add(d);let M=new hr(.8,1,20);M.rotateX(-Math.PI/2);let x=new hn(M,new mt({color:10336187,transparent:!0,opacity:.24,side:Pt,depthWrite:!1}),40);x.name="Sprinkler splashes on the floor",x.visible=!1,x.frustumCulled=!1,x.raycast=()=>{},t.add(x);let E=new gt;function R(b,T,I=!1){if(d.visible=x.visible=T>0,!!T){p.opacity=T*(I?.15:.42);for(let O=0;O<m;O++){let v=a[O%a.length],S=(b*(.75+O%7*.035)+O*.618)%1,H=O*2.3999,G=.4+O%19/19*1.65,Y=G*S,j=2.86*(1-S*S),W=v[0]+Math.cos(H)*Y,F=v[2]+Math.sin(H)*Y,se=i(W,F)+.012,le=O*6;g[le]=W,g[le+1]=Math.max(se,j),g[le+2]=F,g[le+3]=W-Math.cos(H)*.022,g[le+4]=Math.max(se,j+.045+S*.08),g[le+5]=F-Math.sin(H)*.022}y.attributes.position.needsUpdate=!0,x.material.opacity=.22*T;for(let O=0;O<40;O++){let v=a[O%a.length],S=(b*1.7+O*.618)%1,H=O*2.399,G=.4+O%11/11*1.6,Y=v[0]+Math.cos(H)*G,j=v[2]+Math.sin(H)*G;E.position.set(Y,i(Y,j)+.012,j),E.scale.setScalar(.006+S*.042),E.updateMatrix(),x.setMatrixAt(O,E.matrix)}x.instanceMatrix.needsUpdate=!0}}return{group:t,update:R,setEnvironment(b){for(let T of[r,s])T.envMap=b,T.envMapIntensity=.7,T.needsUpdate=!0},reset(){d.visible=x.visible=!1}}}var AE=`attribute float seed;varying vec2 vUv;varying float vSeed;
 void main(){vUv=uv;vSeed=seed;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,vm=`
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 float fbm(vec2 p){return .57*noise(p)+.28*noise(p*2.03)+.15*noise(p*4.1);}`;function Mm({chargingKit:i,acidLeaks:e,floorSupport:t,pipeMaterial:n}){let r=new ve;r.name="Acid-damaged charger fire and ceiling sprinklers",r.userData.ignoreAcid=!0;let s=ym({floorSupport:t,pipeMaterial:n});r.add(s.group);let o=xm(),a={value:0},l={value:0},c=new gt,h=new dt,f=new w,u=null,m="",g="idle";function y(H,G,Y=Wr){let j=new _t(1,1),W=new Float32Array(H);for(let le=0;le<H;le++)W[le]=le*.731;j.setAttribute("seed",new Rr(W,1));let F=new Di({uniforms:{time:a,power:l},vertexShader:AE,fragmentShader:G,transparent:!0,depthWrite:!1,side:Pt,blending:Y,toneMapped:!1}),se=new hn(j,F,H);return se.instanceMatrix.setUsage(gn),se.frustumCulled=!1,se.raycast=()=>{},se.count=0,r.add(se),se}let p=y(Ie.mobile?90:180,`uniform float time;uniform float power;varying vec2 vUv;varying float vSeed;${vm}
 void main(){vec2 p=vUv;float n=fbm(vec2(p.x*5.+vSeed,p.y*5.-time*3.8));
 float bend=sin(p.y*6.-time*3.+vSeed)*.13*p.y;
 float width=(1.-p.y)*.43;float edge=width-abs(p.x-.5+bend)+(n-.5)*.27;
 float alpha=smoothstep(-.035,.09,edge)*smoothstep(0.,.08,p.y)*(1.-smoothstep(.72,1.,p.y))*power;
 vec3 color=mix(vec3(1.,.10,.008),vec3(1.,.72,.12),clamp((edge+.08)*3.,0.,1.));color=mix(color,vec3(1.,.95,.65),(1.-p.y)*smoothstep(.14,.3,edge));
 gl_FragColor=vec4(color,alpha*.94);}`);p.name="Spreading tongues of electrical fire",p.renderOrder=10;let d=y(Ie.mobile?36:66,`uniform float time;uniform float power;varying vec2 vUv;varying float vSeed;${vm}
 void main(){float d=length((vUv-.5)*2.);float n=fbm(vUv*4.+vec2(vSeed,-time*.22));float a=smoothstep(1.,.15,d)*(.35+n*.6)*power;gl_FragColor=vec4(vec3(.075,.068,.058)+n*.045,a*.56);}`);d.name="Dark smoke from burned cable insulation",d.renderOrder=11;let M=new Ui(1,24);M.rotateX(-Math.PI/2);let x=new hn(M,new Oe({color:1051399,roughness:.95,transparent:!0,opacity:.62,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),60);x.count=0,x.frustumCulled=!1,x.raycast=()=>{},x.receiveShadow=!0,r.add(x);let E=new An(16739858,0,5,2),R=new An(16747557,0,3,2);r.add(E,R);let b=new Float32Array(84),T=new Rt;T.setAttribute("position",new rn(b,3).setUsage(gn));let I=new lr(T,new ji({color:16757581,transparent:!0,opacity:.9,depthWrite:!1}));I.name="Sparks at the melted charger cable",I.frustumCulled=!1,I.visible=!1,I.raycast=()=>{},r.add(I);function O(){if(o.origin)return o.origin;if(!i.energized||!e.leaks.length){u=null;return}let H=1/0;u=null;for(let G of e.leaks)for(let Y of i.cablePoints){let j=Math.hypot(Y.x-G.origin.x,Y.z-G.origin.z);j<H&&(H=j,u=Y)}return u||void 0}function v(){if(!i.energized)return null;for(let H of i.cablePoints)for(let G of e.leaks)for(let Y of G.points)if(Math.hypot(H.x-Y.x,H.z-Y.z)<Y.radius+.006)return H;return null}function S(H,G,Y,j,W=!1){if(o.phase==="idle"&&(!i.energized||e.leaks.length===0))return!1;let F=o.update(H,G,{live:i.energized,contact:o.phase==="idle"?v():null,viewer:Y});o.origin&&(f.set(o.origin.x,o.origin.y,o.origin.z),i.meltCable(f,o.melt)),g!==o.phase&&(m={melting:"The acid is melting the plugged-in charger cable\u2026",burning:"The damaged cable sparks. Fire is spreading across the floor!",extinguishing:"The armed sprinklers trigger automatically. Water smothers the flames.",extinguished:"The fire is out. The charger is ruined, and the spilled acid is still dangerous."}[o.phase]||"",g=o.phase);let se=o.water(H);s.update(H,se,W),a.value=W?0:H,l.value=o.intensity;let le=0,N=0,ee=0;j.getWorldQuaternion(h);let Q=Ie.mobile?2:3;for(let[oe,k]of o.patches.entries()){let ne=Math.min(1,(H-k.born)/1.2),B=t(k.x,k.z)+.014;if(c.position.set(k.x,B,k.z),c.quaternion.identity(),c.scale.set(k.radius*1.1,1,k.radius*.88),c.updateMatrix(),x.setMatrixAt(ee++,c.matrix),!(o.intensity<=0))for(let z=0;z<Q&&le<p.instanceMatrix.count;z++){let V=oe*2.4+z*2.1,ue=k.radius*.4,we=(.34+(oe+z)%4*.12)*ne;c.position.set(k.x+Math.cos(V)*ue,B+we*.5,k.z+Math.sin(V)*ue),c.rotation.set(0,Math.atan2(j.position.x-c.position.x,j.position.z-c.position.z),0),c.scale.set(.25+k.radius*.85,we,1),c.updateMatrix(),p.setMatrixAt(le++,c.matrix)}}if(o.origin&&(o.intensity>0||o.phase==="melting")){let oe=Ie.mobile?24:42,k=o.origin;for(let ne=0;ne<oe;ne++){let B=(H*.27+ne*.618)%1,z=o.patches[ne%Math.max(1,o.patches.length)]||k,V=.15+B*1.65,ue=.15+B*.85;c.position.set(z.x+Math.sin(ne*2.1+H*.3)*B*.25,t(z.x,z.z)+V,z.z+Math.cos(ne*1.7)*B*.19),c.quaternion.copy(h),c.rotateZ(ne+B*.6),c.scale.set(ue,ue*1.3,1),c.updateMatrix(),d.setMatrixAt(N++,c.matrix)}}if(p.count=le,d.count=N,x.count=ee,p.instanceMatrix.needsUpdate=d.instanceMatrix.needsUpdate=x.instanceMatrix.needsUpdate=!0,o.origin){E.position.set(o.origin.x,.36,o.origin.z);let oe=o.patches.at(-1)||o.origin;R.position.set(oe.x,.26,oe.z);let k=W?1:.88+.07*Math.sin(H*17)+.05*Math.sin(H*29);E.intensity=4.5*o.intensity*k,R.intensity=2*o.intensity*k}if(I.visible=!W&&(o.phase==="melting"&&o.melt>.55||o.phase==="burning"&&o.patches.length<8),I.visible){for(let oe=0;oe<14;oe++){let k=(H*3+oe*.618)%1,ne=oe*2.4,B=k*.19,z=Math.max(0,.28*k-.26*k*k),V=o.origin,ue=oe*6;b[ue]=V.x+Math.cos(ne)*B,b[ue+1]=V.y+.015+z,b[ue+2]=V.z+Math.sin(ne)*B,b[ue+3]=b[ue]-.013*Math.cos(ne),b[ue+4]=b[ue+1]-.02,b[ue+5]=b[ue+2]-.013*Math.sin(ne)}T.attributes.position.needsUpdate=!0}return F}return{group:r,update:S,flowTarget:O,setEnvironment:s.setEnvironment,activateSprinklers:o.activateSprinklers,get phase(){return o.phase},get dying(){return o.dying},get sprinklersArmed(){return o.armed},blackout:o.blackout,takeMessage(){let H=m;return m="",H},reset(){o.reset(),s.reset(),u=null,m="",g="idle",p.count=d.count=x.count=0,I.visible=!1,E.intensity=R.intensity=0,l.value=0}}}async function _m(i,e,t=async()=>{}){let n=new ve;n.name="Abandoned technology office";let r=[],s=[],o=_=>(r.push(_),_),a=87021,l=()=>(a=a*1664525+1013904223>>>0,a/4294967296),c=(_,C)=>_+(C-_)*l(),h=gl;function f(_){let C=new Nt(_);return C.colorSpace=yt,C.anisotropy=Math.min(Ie.mobile?2:8,i.capabilities.getMaxAnisotropy()),C}function u(_,C,D,X,q,Z){let pe=_.createRadialGradient(C,D,0,C,D,X);pe.addColorStop(0,`rgba(${q},${Z})`),pe.addColorStop(1,`rgba(${q},0)`),_.fillStyle=pe,_.fillRect(C-X,D-X,X*2,X*2)}function m(_,C,D,X,q){for(let Z=0;Z<D;Z++){_.fillStyle=`rgba(${X},${l()*q})`;let pe=l()*C,Ye=l()*C,je=c(.4,2.2),Dt=c(.4,2);(!Ie.mobile||Z%4===0)&&_.fillRect(pe,Ye,je,Dt)}}function g(_,C="paint"){let[D,X]=h();X.fillStyle=_,X.fillRect(0,0,512,512);for(let q=0;q<210;q++)u(X,l()*512,l()*512,c(4,70),q%3?"27,33,23":"110,83,48",c(.025,.15));if(m(X,512,12e3,"18,25,18",.24),m(X,512,4e3,"200,192,159",.18),C==="wood")for(let q=0;q<550;q++){X.strokeStyle=`rgba(36,29,17,${c(.02,.16)})`,X.lineWidth=c(.4,2);let Z=l()*512;X.beginPath(),X.moveTo(0,Z),X.bezierCurveTo(170,Z+c(-12,12),340,Z+c(-12,12),512,Z),X.stroke()}if(C==="metal")for(let q=0;q<250;q++)u(X,l()*512,l()*512,c(2,18),"112,56,24",c(.1,.5));for(let q=0;q<80;q++){X.strokeStyle=`rgba(197,190,160,${c(.08,.3)})`,X.lineWidth=c(.3,1.3);let Z=l()*512,pe=l()*512;X.beginPath(),X.moveTo(Z,pe),X.lineTo(Z+c(3,50),pe+c(-2,4)),X.stroke()}return f(D)}let y=g("#8b8c77"),p=g("#b2b09a"),d=g("#817157","wood"),M=g("#4e5550","metal"),x=g("#44534b"),E=g("#66695a"),R=new Map,b=(_,C=.88,D=null,X=0)=>{let q=[_,C,D?.uuid,X].join("|");return R.has(q)||R.set(q,Ie.mobile&&X===0?new Jr({color:_,map:D}):new Oe({color:_,roughness:C,map:D,bumpMap:Ie.mobile?null:D,bumpScale:D?.008:0,metalness:X})),R.get(q)},T=b(16777215,.98,y),I=b(16777215,.86,d),O=b(16777215,.8,p),v=b(16777215,.73,M,.42),S=b(16777215,.95,x),H=b(1514521,.86),G=b(1053970,.95),Y=b(16777215,.98,E),j=b(8555654,.4,null,.8);function W(_,C,D=n){let X=new ot(_,C);return X.castShadow=!0,X.receiveShadow=!0,D.add(X),X}function F(_,C,D=v,X=n){let q=W(new wt(..._),D,X);return q.position.set(...C),q}let se=new en(1,Ie.mobile?12:20,Ie.mobile?8:12);function le(_,C,D,X=n){let q=W(se,D,X);return q.scale.set(..._),q.position.set(...C),q}function N(_,C,D,X=v,q=n,Z=12){let pe=W(new Ut(_,_,C,Ie.mobile?Math.min(Z,12):Z),X,q);return pe.position.set(...D),pe}function ee(_,C,D=.015,X=v,q=n){let Z=new w(..._),pe=new w(...C),Ye=pe.clone().sub(Z),je=N(D,Ye.length(),Z.clone().add(pe).multiplyScalar(.5).toArray(),X,q);return je.quaternion.setFromUnitVectors(new w(0,1,0),Ye.normalize()),je}function Q(_,C=.008,D=H,X=n){let q=new Yt(_.map(pe=>new w(...pe))),Z=W(new un(q,Math.max(12,_.length*(Ie.mobile?3:8)),C,Ie.mobile?4:6,!1),D,X);return X===n&&_.some(pe=>pe[1]<.06)&&s.push(Z),Z}function oe(_,C,D,X=.025){X=Math.min(X,_*.45,C*.45);let q=new St,Z=_/2,pe=C/2;q.moveTo(-Z+X,-pe),q.lineTo(Z-X,-pe),q.quadraticCurveTo(Z,-pe,Z,-pe+X),q.lineTo(Z,pe-X),q.quadraticCurveTo(Z,pe,Z-X,pe),q.lineTo(-Z+X,pe),q.quadraticCurveTo(-Z,pe,-Z,pe-X),q.lineTo(-Z,-pe+X),q.quadraticCurveTo(-Z,-pe,-Z+X,-pe);let Ye=Math.min(.012,_/6,C/6,D/6),je=new sn(q,{depth:D-Ye*2,bevelEnabled:!0,bevelSize:Ye,bevelThickness:Ye,bevelSegments:2,steps:1,curveSegments:4});return je.translate(0,0,-D/2+Ye),je}function k(_,C,D,X=n){let q=W(oe(..._),D,X);return q.position.set(...C),q}function ne(_,C,D,X=!1){let[q,Z]=h(1024);for(let Ye=0;Ye<290;Ye++)u(Z,l()*1024,X?l()*1024:l()<.6?c(600,1060):l()*1024,c(12,140),"24,30,19",c(.03,.26));if(!X){let Ye=Z.createLinearGradient(0,0,0,1024);Ye.addColorStop(0,"rgba(29,35,24,.4)"),Ye.addColorStop(.3,"rgba(29,35,24,0)"),Ye.addColorStop(.75,"rgba(29,35,24,.07)"),Ye.addColorStop(1,"rgba(23,30,21,.72)"),Z.fillStyle=Ye,Z.fillRect(0,0,1024,1024);for(let je=0;je<80;je++){let Dt=l()*1024,cn=l()*220;Z.strokeStyle=`rgba(62,51,30,${c(.03,.26)})`,Z.lineWidth=c(1,6),Z.beginPath(),Z.moveTo(Dt,cn),Z.lineTo(Dt+c(-8,8),cn+c(80,750)),Z.stroke()}}m(Z,1024,17e3,"16,25,17",.28);let pe=W(new _t(_,C),new Oe({map:f(q),transparent:!0,depthWrite:!1,roughness:1}),D);return pe.castShadow=!1,pe}F([7.8,.15,8.6],[0,-.075,.2],Y);let B=ne(7.8,8.6,n,!0);B.rotation.x=-Math.PI/2,B.position.set(0,.003,.2);let z=F([7.8,3.35,.16],[0,1.675,-4.08],T),V=F([.16,3.35,8.6],[-3.98,1.675,.2],b(8556677,.98,y));F([.16,1.1,8.6],[3.98,.55,.2],T),F([.16,.65,8.6],[3.98,3.025,.2],T),F([.16,1.6,1.2],[3.98,1.9,-3.4],T),F([.16,1.6,4.8],[3.98,1.9,2.1],T),ne(7.8,3.35,n).position.set(0,1.675,-3.99);let we=ne(8.6,3.35,n);we.rotation.y=Math.PI/2,we.position.set(-3.89,1.675,.2);for(let _=0;_<9;_++)F([.012,2.2,.014],[-3.85+_*.96,1.66,-3.977],v);F([7.8,.045,.035],[0,.58,-3.96],v),F([7.8,.045,.035],[0,2.76,-3.96],v);for(let _ of[-3.86,3.86])F([.045,.13,8.6],[_,.065,.2],H);F([7.8,.13,.04],[0,.065,-3.95],H);for(let _=0;_<26;_++){let C=new St,D=c(-3.65,3.65),X=c(.24,3.1),q=c(.05,.22),Z=c(.05,.26);for(let Ye=0;Ye<9;Ye++){let je=Ye/9*Math.PI*2,Dt=c(.6,1),cn=D+Math.cos(je)*q*Dt,Kt=X+Math.sin(je)*Z*Dt;Ye?C.lineTo(cn,Kt):C.moveTo(cn,Kt)}C.closePath();let pe=W(new er(C),b(_%3?5199175:11644305,.99));pe.position.z=-3.972,pe.castShadow=!1}let Ue=F([7.8,.1,8.6],[0,3.36,.2],H);for(let _=-3.6;_<3.9;_+=1.2)F([.028,.032,8.6],[_,3.12,.2],v);for(let _=-3.9;_<4.5;_+=1.2)F([7.8,.032,.028],[0,3.12,_],v);let K=b(10132616,.98,y);for(let _=-3;_<3.9;_+=1.2)for(let C=-3.3;C<4.5;C+=1.2){if(l()<.25)continue;let D=F([1.15,.035,1.15],[_,3.145,C],K);l()<.12&&(D.rotation.z=c(-.13,.13),D.position.y-=.06)}for(let _=0;_<5;_++)Q([[-2+_*.45,3.3,-1.6],[-1.9+_*.45,2.8,-1.5],[-1.7+_*.4,2.53,-1.6],[-1.3+_*.35,3.29,-1.8]],.009,H);let L=new ve;L.position.set(3.88,1.9,-1.5),L.rotation.y=-Math.PI/2,n.add(L);let[fe,_e]=h();_e.fillStyle="#778c88",_e.fillRect(0,0,512,512);for(let _=0;_<15;_++){let C=_*43,D=c(25,60),X=c(70,290);_e.fillStyle=_%2?"#4b5d58":"#526560",_e.fillRect(C,512-X,D,X);for(let q=0;q<5;q++)_e.fillStyle="#879186",_e.fillRect(C+8,512-X+18+q*34,4,10)}let ye=W(new _t(2.8,1.6),new mt({map:f(fe),color:3622209}),L);ye.position.z=-.13,ye.castShadow=!1;for(let _ of[-1.43,0,1.43])F([.055,1.7,.09],[_,0,.025],v,L);for(let _ of[-.83,.83])F([2.92,.055,.09],[0,_,.025],v,L);let Ee=b(10336426,.25,null,.25);Ee.transparent=!0,Ee.opacity=.18,Ee.side=Pt;for(let _ of[-.72,.72]){let C=F([1.37,1.55,.008],[_,0,.04],Ee,L);C.castShadow=!1}for(let _=0;_<17;_++){if([5,9,14].includes(_))continue;let C=F([2.77,.047,.015],[0,.73-_*.086,.11],b(8160114,.82,p),L);C.rotation.x=.35,(_===7||_===12)&&(C.rotation.z=_===7?.035:-.05,C.rotation.x=.9)}for(let _ of[-.86,.86])Q([[_,.8,.15],[_,.12,.16],[_,-.77,.15]],.005,H,L);Q([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.1,.18]],.006,H,L),await t("Setting up the workstations\u2026");let De=O0(i);a=577513849;let Ae=oe(.77,.45,.035,.012),U=b(7042164,.38,null,.7);function A(_,C,D=0,X="cracked",q=1){let Z=new ve;Z.position.set(...C),Z.rotation.y=D,Z.scale.setScalar(q),_.add(Z),Z.name="Damaged widescreen monitor",W(Ae,H,Z).position.set(0,.375,0),k([.31,.018,.2],[0,.013,-.025],U,Z),F([.055,.24,.025],[0,.14,-.035],U,Z),De.add(Z,X),F([.18,.16,.032],[0,.36,-.03],U,Z),le([.004,.004,.003],[.35,.163,.022],X==="live"?new mt({color:9223008}):H,Z);for(let je=0;je<11;je++)F([.015,.002,.003],[-.25+je*.05,.585,-.02],v,Z);let Ye=Q([[.1,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,H,Z);return Ye.name="Monitor power cable",Ye.userData.ignoreFloorContact=!0,Z}let re=new wt(.023,.008,.023);function Se(_,C,D=0){let X=new ve;X.position.set(...C),X.rotation.y=D,_.add(X),k([.47,.035,.18],[0,0,0],O,X);let q=new hn(re,b(6844e3,.8),56);for(let Z=0;Z<56;Z++){let pe=new gt;pe.position.set(-.206+Z%14*.031,.024,-.065+Math.floor(Z/14)*.036),pe.updateMatrix(),q.setMatrixAt(Z,pe.matrix)}return X.add(q),F([.14,.008,.022],[0,.024,.07],H,X),X}function Pe(_,C,D=0,X=!1){let q=new ve;q.position.set(...C),q.rotation.y=D,_.add(q),k([.25,.53,.46],[0,.265,0],O,q);for(let Z=.32;Z<.49;Z+=.065)F([.195,.042,.012],[0,Z,.239],H,q);for(let Z=0;Z<7;Z++)F([.16,.008,.012],[0,.055+Z*.025,.239],v,q);if(X){F([.012,.42,.35],[.139,.27,0],H,q);for(let Z=0;Z<3;Z++)F([.015,.09,.25],[.15,.16+Z*.105,-.02],b(2706228,.83),q)}return q}function Ce(_,C,D,X=0){let q=new ve;q.position.set(_,0,C),q.rotation.y=X,n.add(q),F([D,.075,.86],[0,.82,0],I,q),F([D,.035,.025],[0,.794,.443],v,q);for(let Z of[-D/2+.08,D/2-.08])F([.048,.79,.68],[Z,.39,0],v,q),F([.24,.035,.74],[Z,.018,0],H,q);return F([D-.16,.19,.035],[0,.45,-.35],v,q),q}let Ze=Ce(-1,-3.37,5.4);for(let _=0;_<6;_++){let C=-2.24+_*.84;A(Ze,[C,.86,-.05],c(-.13,.13),_===3?"live":_%2?"hole":"cracked",c(.88,1.04)),Se(Ze,[C+.03,.87,.3],c(-.16,.16)),_%2===0&&Pe(Ze,[C+.18,0,-.1],c(-.1,.1),!0)}let be=Ce(-1.1,-2.25,2.6,0);for(let _=0;_<3;_++)A(be,[-.84+_*.83,.86,-.1],c(-.2,.2),_===0?"live":"hole",.9),Se(be,[-.84+_*.83,.87,.3],c(-.2,.2));let Ne=A(n,[-.8,.31,-1.45],.42,"hole",.95);Ne.rotation.set(-1.38,.42,.21),o(Ne);let Je=A(n,[-2.72,.24,2.58],-.45,"cracked",.73);Je.rotation.x=-.56,Je.rotation.z=.24,o(Je);let Le=Pe(n,[-2.22,.13,-.72],.35,!0);Le.rotation.z=Math.PI/2,o(Le);for(let _=0;_<3;_++)o(Pe(n,[-3.32,0,-2.45+_*.31],-.18,!0)).scale.setScalar(.9);let J=a,me=b(16777215,.78,g("#afb4a9","metal"),.22),Me=b(6449762,.7,null,.25),ge=b(3225908,.86,x),xe=b(11383205,.82),ae=b(6845548,.46,null,.73);function Be(_=0){let[C,D]=h(512);D.lineWidth=1.8;for(let X=0;X<512;X+=7)D.strokeStyle=X%21?"#a0a59a":"#686f65",D.beginPath(),D.moveTo(X,0),D.lineTo(X,512),D.stroke();for(let X=0;X<512;X+=6)D.strokeStyle=X%18?"#7f897e":"#b0b4a5",D.lineWidth=X%18?1.6:2.1,D.beginPath(),D.moveTo(0,X),D.lineTo(512,X),D.stroke();if(_){D.globalCompositeOperation="destination-out",D.fillStyle="#000",D.beginPath();let X=_===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];X.forEach(([q,Z],pe)=>pe?D.lineTo(q,Z):D.moveTo(q,Z)),D.closePath(),D.fill(),D.lineWidth=3;for(let q=0;q<16;q++){let[Z,pe]=X[q%X.length];D.beginPath(),D.moveTo(Z,pe),D.lineTo(Z+c(-24,24),pe+c(-18,18)),D.stroke()}}return new Oe({map:f(C),color:14803929,roughness:.93,side:Pt,alphaTest:.3,alphaToCoverage:!0})}let $=[Be(),Be(1),Be(2)];function Re(_,C,D,X,q=0){let pe=new Yt(_.map(_n=>new w(_n[0],_n[1],0)),!0,"centripetal").getSpacedPoints(96).slice(0,-1),Ye=[],je=[],Dt=[],cn=12,Kt=pe.length,vi=Math.min(...pe.map(_n=>_n.x)),Yi=Math.max(...pe.map(_n=>_n.x)),Yo=Math.min(...pe.map(_n=>_n.y)),C1=Math.max(...pe.map(_n=>_n.y));for(let _n=0;_n<=cn;_n++)for(let Hr=0;Hr<Kt;Hr++){let Zo=_n/cn,tc=C[0]+(pe[Hr].x-C[0])*Zo,Ko=C[1]+(pe[Hr].y-C[1])*Zo;if(Ye.push(...D(tc,Ko,Zo)),je.push((tc-vi)/(Yi-vi),(Ko-Yo)/(C1-Yo)),_n<cn){let yh=_n*Kt+Hr,vh=_n*Kt+(Hr+1)%Kt;Dt.push(yh,vh,yh+Kt,vh,vh+Kt,yh+Kt)}}let $o=new Rt;$o.setAttribute("position",new ut(Ye,3)),$o.setAttribute("uv",new ut(je,2)),$o.setIndex(Dt),$o.computeVertexNormals();let P1=W($o,$[q],X);P1.customDepthMaterial=new ya({depthPacking:Id,map:$[q].map,alphaTest:.3,side:Pt});for(let[_n,Hr,Zo]of[[1,.025,me],[.925,.007,Me]]){let tc=pe.map(Ko=>new w(...D(C[0]+(Ko.x-C[0])*_n,C[1]+(Ko.y-C[1])*_n,_n)));W(new un(new Yt(tc,!0),96,Hr,8,!0),Zo,X)}}function ce(_,C=1){let D=new ve;D.name="Torn mesh back and lumbar support",_.add(D),Re([[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.6],[0,.615],[.17,.6],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]],[0,.3],(q,Z,pe)=>[q,Z,-.11*Z/.615+.035*(1-pe*pe)],D,C),Q([[0,-.09,-.07],[0,.13,-.08],[-.17,.3,-.09],[-.23,.37,-.09]],.018,me,D),Q([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,me,D);for(let q of[.12,.235])le([.048,.073,.024],[0,q,-.055],ge,D);if(Q([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,Me,D),C)for(let q=0;q<5;q++)Q([[-.13+q*.012,.2,-.015],[-.12+q*.012,.15,.001],[-.14+q*.012,.1,-.02]],.0016,$[0],D);return D}function Te(_,C,D=!1){let X=new ve;_.add(X);let q=C*.295;if(Q([[C*.22,.46,-.17],[q,.53,-.2],[q,.67,-.17],[q,.72,-.07]],.023,me,X),D)return le([.025,.011,.026],[q,.72,-.07],xe,X),X;let Z=le([.058,.034,.15],[q,.745,.01],ge,X);return Z.rotation.z=C*.06,ee([q,.68,-.085],[q,.734,.045],.019,Me,X),X}function ze(_,C,D,X,q=0){let Z=new ve;Z.position.set(C,D,X),Z.rotation.y=q,_.add(Z),ee([0,.028,0],[0,.078,.015],.012,ae,Z);for(let pe of[-1,1]){let Ye=N(.039,.022,[pe*.021,0,0],G,Z,16);Ye.rotation.z=Math.PI/2,le([.002,.018,.018],[pe*.033,0,0],Me,Z)}return Z}function Ge(_,C=-1){let D=new ve;D.name="Five-spoke caster base",_.add(D),N(.057,.09,[0,.16,0],me,D,16),N(.031,.2,[0,.28,0],ae,D,16);for(let X=0;X<5;X++){let q=X/5*Math.PI*2+.25,Z=Math.cos(q),pe=Math.sin(q);if(X===C){ee([0,.16,0],[Z*.13,.135,pe*.13],.025,me,D),le([.024,.014,.018],[Z*.13,.135,pe*.13],xe,D);continue}Q([[0,.18,0],[Z*.14,.145,pe*.14],[Z*.31,.092,pe*.31]],.022,me,D),ze(D,Z*.31,.04,pe*.31,q)}return D}function ht(_,C,D,X){return _.position.set(C,0,D),_.rotation.set(...X),_.updateMatrixWorld(!0),o(_)}function At(_,C,D,X={}){let q=new ve;q.name="Broken Aeron-style mesh chair",n.add(q),X.noBase||Ge(q,X.missingSpoke??-1),k([.24,.095,.27],[0,.405,-.035],Me,q),N(.045,.13,[0,.405,0],me,q,16),ee([-.14,.41,.015],[-.245,.405,.05],.012,ae,q),le([.035,.016,.055],[-.25,.405,.055],ge,q),le([.055,.025,.04],[.18,.407,-.04],ge,q),Re([[-.2,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.2,-.23],[0,-.25]],[0,0],(pe,Ye,je)=>[pe,.51-.035*(1-je*je)-.025*Math.max(0,Ye/.25),Ye],q,X.seatTear??1);for(let pe of[-1,1])Q([[pe*.12,.41,-.14],[pe*.22,.46,-.2],[pe*.24,.49,-.15]],.023,me,q),Te(q,pe,pe===X.brokenArm);if(!X.noBack){let pe=ce(q,X.backTear??1);pe.position.set(0,.55,-.22),pe.rotation.set(X.backLean??0,0,X.backTwist??0)}return ht(q,_,C,D)}At(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2}),At(-.3,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16}),At(2.75,3.3,[-.55,-.8,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.2}),At(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:!0}),At(1.35,1.42,[-.3,-.5,-1.28],{noBase:!0,brokenArm:-1,backTwist:-.14,backTear:2});let zt=Ge(n,1);zt.name="Detached chair base",ht(zt,2.35,2.53,[2.7,.36,.22]);let Tt=ce(n,2);Tt.name="Snapped mesh backrest",ht(Tt,-.75,2.3,[-1.6,.22,-.4]);let Gt=Te(n,1);Gt.name="Broken chair arm",ht(Gt,1.4,2.62,[1.48,.71,.15]),o(ze(n,2.37,.045,2.84,.7)),o(ze(n,-2.15,.045,.95,-.4)),a=J;for(let _=0;_<22;_++)l();let fn=Ce(2.55,-3.38,1.92);F([1.7,.72,.72],[0,.4,-.025],b(6713960,.94,d),fn);for(let _ of[-.42,.42]){let C=F([.77,.24,.045],[_,.66,.37],I,fn);_>0&&(C.position.z=.51,C.rotation.z=-.04),ee([_-.13,.66,.41],[_+.13,.66,.41],.014,v,fn)}let vn=new ve;vn.position.set(-.27,.87,-.04),fn.add(vn),k([.49,.6,.37],[0,.3,0],v,vn),F([.4,.35,.025],[0,.26,.2],H,vn),k([.34,.15,.06],[0,.5,.2],O,vn),F([.12,.05,.008],[-.07,.515,.236],b(2243883,.4),vn);for(let _ of[-.08,.08])ee([_,.38,.21],[_,.31,.26],.018,j,vn);F([.37,.04,.23],[0,.045,.22],H,vn);for(let _=0;_<7;_++)F([.017,.012,.19],[-.14+_*.047,.07,.22],j,vn);let gr=N(.12,.17,[0,.68,-.015],new Oe({color:5069384,transparent:!0,opacity:.55,roughness:.45}),vn,24),Ti=F([.27,.022,.25],[.025,.78,-.015],H,vn);Ti.rotation.z=.13;let Mn=b(12039066,.7,p);function nt(_,C,D=0){let X=new ve;X.position.set(...C),X.rotation.z=D,_.add(X);let q=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(pe=>new ke(...pe));W(new Zr(q,24,0,Math.PI*1.9),Mn,X);let Z=W(new Qt(.036,.008,8,20,Math.PI*1.6),Mn,X);return Z.rotation.x=Math.PI/2,Z.position.set(.066,.07,0),X}nt(vn,[0,.07,.23]),nt(fn,[.46,.87,.25],1.25),nt(fn,[.64,.87,-.02]);let it=b(3877398,.33),tt=W(new Ui(.18,32),it,fn);tt.rotation.x=-Math.PI/2,tt.position.set(.48,.862,.19),tt.scale.y=.65,tt.castShadow=!1,k([.52,.83,.54],[3.28,.42,-2.4],O);let at=F([.49,.78,.045],[3.21,.43,-2.1],O);at.rotation.y=.24,F([.035,.23,.04],[3.04,.56,-2.065],v),F([.36,.8,.36],[3.39,.4,-1.72],O);let ft=N(.16,.4,[3.39,1.04,-1.72],new Oe({color:7378315,transparent:!0,opacity:.38,roughness:.34}),n,24);ft.rotation.z=.08;let Ve=new ve;Ve.name="Broken lopsided foosball table",Ve.position.set(2.24,-.104,.03),Ve.rotation.set(0,-.18,-.22),n.add(Ve);let Mt=b(13812642,.87,d),yn=b(8099956,.92,x);F([1.18,.25,1.91],[0,.91,0],Mt,Ve),F([1.04,.025,1.74],[0,1.048,0],yn,Ve);for(let _ of[-.61,.61])F([.1,.18,2.02],[_,1.12,0],Mt,Ve);F([1.14,.18,.08],[0,1.12,-.99],Mt,Ve);let Wt=new St;Wt.moveTo(-.57,1.03),Wt.lineTo(.57,1.03),Wt.lineTo(.57,1.21),Wt.lineTo(.23,1.21),Wt.lineTo(.12,1.07),Wt.lineTo(.02,1.15),Wt.lineTo(-.09,1.07),Wt.lineTo(-.16,1.21),Wt.lineTo(-.57,1.21),Wt.closePath();let kt=W(new sn(Wt,{depth:.08,bevelEnabled:!1}),Mt,Ve);kt.position.z=.95;for(let _ of[-.99,.99])F([.3,.1,.012],[0,1.085,_+(_>0?-.045:.045)],H,Ve);for(let _ of[-.47,.47])for(let C of[-.8,.8]){let D=_>0&&C>0,X=_>0;if(F([.11,D?.24:X?.57:.8,.12],[_,D?.68:X?.515:.4,C],v,Ve),D)for(let q=0;q<4;q++)F([.012,.09,.018],[_-.04+q*.023,.555,C+c(-.04,.04)],I,Ve).rotation.z=c(-.2,.2)}let P=F([.11,.57,.12],[2.89,.09,.98],v);P.rotation.set(.05,.37,1.42);let te=F([.45,.045,.08],[2.55,.045,1.32],Mt);te.rotation.y=.4;let he=[];function de(_,C){he.push(..._,...C)}for(let _ of[-.8,.8])de([-.48,1.065,_],[.48,1.065,_]);for(let _ of[-.48,.48])de([_,1.065,-.8],[_,1.065,.8]);de([-.48,1.065,0],[.48,1.065,0]);for(let _=0;_<48;_++){let C=_/48*Math.PI*2,D=(_+1)/48*Math.PI*2;de([Math.cos(C)*.19,1.065,Math.sin(C)*.19],[Math.cos(D)*.19,1.065,Math.sin(D)*.19])}let ie=new Rt;ie.setAttribute("position",new ut(he,3)),Ve.add(new lr(ie,new ji({color:9674366})));let He=[b(9124144,.8),b(10658186,.8)];for(let _=0;_<8;_++){let C=-.78+_*.223,D=_%2?1:-1;_===5?Q([[-.91,1.21,C],[-.24,1.21,C],[.18,1.36,C+.13],[.91,1.17,C+.08]],.012,j,Ve):ee([-.91,1.21,C],[.91,1.21,C],.012,j,Ve),_!==4&&ee([D*.8,1.21,C],[D*1.02,1.21,C],.034,H,Ve);let X=_===0||_===7?1:_===1||_===6?2:3;for(let q=0;q<X;q++){if(_===3&&q===0||_===6&&q===1)continue;let Z=(q-(X-1)/2)*.29;F([.055,.1,.037],[Z,1.195,C],He[_%2],Ve),le([.031,.035,.031],[Z,1.28,C],He[_%2],Ve),F([.06,.045,.045],[Z,1.11,C],He[_%2],Ve)}}le([.024,.024,.024],[.46,1.09,.69],O,Ve),Q([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.3],[.12,1.068,.23],[.48,1.068,.37]],.007,H,Ve);let We=F([.055,.13,.04],[.38,1.09,.51],He[0],Ve);We.rotation.z=Math.PI/2;for(let _ of[-1.07,1.07]){ee([-.32,1.27,_],[.32,1.27,_],.008,j,Ve);for(let C=0;C<5;C++)le([.025,.03,.025],[-.25+C*.07,1.27,_],He[_>0?1:0],Ve)}let Xe=new ve;Xe.name="MacBook Pro on the floor",Xe.position.set(.45,.027,2.18),Xe.rotation.y=Math.atan2(e.x-Xe.position.x,e.z-Xe.position.z),n.add(Xe);let et=Xe.position.clone().add(new w(1.18,0,0).applyAxisAngle(new w(0,1,0),Xe.rotation.y)),rt=em(e,et);n.add(rt.group);let ct=tm(et);n.add(ct.group),o(ct.group);let Qe=b(8884628,.35,null,.72),Et=b(1053975,.7);function Ot(_,C,D,X,q,Z,pe=!1){let Ye=Math.min(.012,_/6,C/6,D/6),je=W(oe(_-2*Ye,C-2*Ye,D,.026-Ye),q,Z);return je.position.set(...X),pe&&(je.rotation.x=-Math.PI/2),je}Ot(.88,.59,.026,[0,0,0],Qe,Xe,!0),Ot(.66,.275,.003,[0,.0145,-.065],Et,Xe,!0);let tn=N(.013,.77,[0,.02,-.281],H,Xe,20);tn.rotation.z=Math.PI/2;let Xt=new ve;Xt.position.set(0,.034,-.295),Xt.rotation.x=Math.PI/2,Xe.add(Xt),Ot(.88,.59,.018,[0,.295,0],Qe,Xt),Ot(.856,.566,.005,[0,.295,.01],Et,Xt);for(let _ of[-.34,.34])for(let C of[-.21,.21])le([.025,.006,.025],[_,-.014,C],G,Xe);let Ht=document.createElement("canvas");Ht.width=256,Ht.height=384;let st=Ht.getContext("2d");qd(st,28,42,200);let Zt=f(Ht),Fe=new Oe({map:Zt,transparent:!0,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:Zt,emissive:16777215,emissiveIntensity:.14}),xt=W(new _t(.115,.1725),Fe,Xt);xt.name="Off-center Figma vinyl sticker",xt.position.set(.265,.365,-.0108),xt.rotation.set(0,Math.PI,-.14),xt.castShadow=!1;let[Pn,lt]=h(1024,640);lt.fillStyle="#111b22",lt.fillRect(0,0,1024,640),lt.fillStyle="#222e36",lt.fillRect(0,0,1024,38),lt.fillRect(0,38,140,602),lt.fillRect(894,38,130,602),qd(lt,15,6,17),lt.font="13px sans-serif",lt.fillStyle="#bac6ca",lt.fillText("Figma / Wireframes",44,25);for(let _=0;_<7;_++)lt.fillStyle=_===2?"#48616b":"#657a80",lt.fillRect(18,85+_*34,85-_%3*18,3);for(let _=0;_<3;_++){let C=181+_*231;lt.fillStyle="#b2bfbb",lt.fillRect(C,118,197,390),lt.fillStyle="#465b62",lt.fillRect(C+12,137,173,19),lt.fillRect(C+12,175,173,86),lt.strokeStyle="#53696d",lt.lineWidth=2,lt.beginPath(),lt.moveTo(C+12,175),lt.lineTo(C+185,261),lt.moveTo(C+185,175),lt.lineTo(C+12,261),lt.stroke();for(let D=0;D<5;D++)lt.fillStyle="#82918f",lt.fillRect(C+13,278+D*20,c(75,170),4);lt.fillStyle="#526c72",lt.fillRect(C+14,401,169,28),lt.strokeStyle="#788c8d",lt.strokeRect(C+14,447,78,39),lt.strokeRect(C+105,447,78,39)}for(let _=0;_<12;_++)lt.fillStyle="#50666e",lt.fillRect(912,84+_*31,c(35,90),3);let Ri=f(Pn),on=new mt({map:Ri,color:8360598}),Ai=W(new _t(.823,.525),on,Xt);Ai.position.set(0,.3,.013),Ai.castShadow=!1,F([.076,.014,.002],[0,.556,.014],Et,Xt),le([.003,.003,.001],[0,.553,.0155],b(1978424,.2),Xt);let[Bo,Gn]=h(512,64);Gn.font="22px sans-serif",Gn.textAlign="center",Gn.fillStyle="#9ca5a6",Gn.fillText("MacBook Pro",256,40);let Hs=W(new _t(.14,.018),new mt({map:f(Bo),transparent:!0}),Xt);Hs.position.set(0,.025,.013),Hs.castShadow=!1;let[jl,Ci]=h(1024);Ci.fillStyle="#151b1e",Ci.fillRect(0,0,1024,1024),Ci.strokeStyle="#3e494d",Ci.fillStyle="#9ca5a6",Ci.font="25px sans-serif",Ci.textAlign="center";let $g=["1234567890-=","QWERTYUIOP[]","ASDFGHJKL;\u2019","ZXCVBNM,./"];for(let _=0;_<4;_++)for(let C=0;C<12;C++){let D=18+C*83,X=74+_*181;Ci.strokeRect(D,X,72,145),Ci.fillText($g[_][C]||"",D+36,X+86)}Ci.strokeRect(250,825,524,125);let Tf=W(new _t(.635,.257),new Oe({map:f(jl),roughness:.7}),Xe);Tf.rotation.x=-Math.PI/2,Tf.position.set(0,.0165,-.065);let ab=Ot(.34,.17,.001,[0,.0135,.174],b(6714488,.44,null,.62),Xe,!0),Rf=new hn(new Ui(.0012,5),H,480);for(let _=0;_<480;_++){let C=new gt,D=_<240?-1:1,X=_%240;C.position.set(D*(.355+X%8*.006),.017,-.196+Math.floor(X/8)*.0085),C.rotation.x=-Math.PI/2,C.updateMatrix(),Rf.setMatrixAt(_,C.matrix)}Xe.add(Rf);for(let _ of[-1,1])for(let C=0;C<3;C++)F([.003,.006,.035],[_*.444,.001,-.18+C*.065],Et,Xe);let eh=new An(9285310,0,1.4,2);eh.position.set(0,.29,.14),Xt.add(eh);let Zg=on.color.clone();on.color.setScalar(0);let Ns=!1,rr=0,Va=!1;function th(_){Xt.rotation.x=qe.lerp(Math.PI/2,-.2,_);let C=qe.smoothstep(_,.22,.72);on.color.copy(Zg).multiplyScalar(C),eh.intensity=.6*C}let Af={object:Xe,screen:Ai,get isReady(){return rr===1},get isOpen(){return Ns},get openProgress(){return rr},getLidGrip(_){return Xt.updateWorldMatrix(!0,!1),Xt.localToWorld(_.set(.12,.6,-.004))},setOpenProgress(_){Va=!0,rr=qe.clamp(_,0,1),Ns=rr>0,th(rr)},open(){return Ns?!1:(Va=!1,Ns=!0,!0)},close(){Va=!1,Ns=!1,rr=0,th(0)},update(_,C=!1){Va||!Ns||rr===1||(rr=C?1:Math.min(1,rr+_/.95),th(qe.smootherstep(rr,0,1)))}};function Kg(){let[_,C]=h();C.fillStyle="#b2af94",C.fillRect(0,0,512,512),C.fillStyle="#4f584c";for(let D=0;D<35;D++){let X=35+D*12;C.fillRect(30,X,c(100,430),c(1,3))}return C.strokeStyle="rgba(64,54,28,.4)",C.lineWidth=4,C.beginPath(),C.arc(345,130,61,0,Math.PI*2),C.stroke(),m(C,512,8e3,"49,45,27",.16),f(_)}let Jg=b(16777215,.99,Kg()),Qg=b(2836532,.88),jg=[O,v,I,b(8619381,.97)],nh=[],ih=[];for(let _=0;_<82;_++){let C=c(-3.62,3.58),D=c(-3.75,4);Math.abs(C)<.65&&D<.8&&D>-.9&&(C-=1.2);let X=W(new _t(c(.13,.29),c(.17,.37),4,4),Jg),q=c(-.1,.1),Z=c(-.07,.07),pe=l()*Math.PI*2,Ye=c(.012,.038);X.rotation.set(-Math.PI/2,0,pe),X.position.set(C,.005,D),X.material.side=Pt,X.name="Paper resting on the floor";let je=X.geometry.attributes.position;for(let Dt=0;Dt<je.count;Dt++)je.setZ(Dt,Math.abs(Math.sin(je.getX(Dt)*33+q)*Math.sin(je.getY(Dt)*24+Z))*.0015+Ye*.008);nh.push(X)}for(let _=0;_<95;_++){let C=c(-3.65,3.65),D=c(-3.7,4);Math.abs(C)<.8&&D>-.8&&D<1.3&&(C-=1.7);let X=F([c(.025,.17),c(.015,.065),c(.035,.2)],[C,c(.025,.055),D],jg[_%4]);X.rotation.set(c(-.13,.13),l()*Math.PI*2,c(-.13,.13)),X.name="Fallen casing fragment",o(X)}for(let _=0;_<9;_++){let C=new ve;C.position.set(c(-3,3),.028,c(-2,3)),C.rotation.y=l()*6,n.add(C),C.name="Loose circuit board",o(C),F([.18,.012,.24],[0,0,0],Qg,C);for(let D=0;D<4;D++)F([.035,.017,.05],[-.055+D%2*.1,.013,-.07+Math.floor(D/2)*.12],H,C)}for(let _=0;_<12;_++){let C=F([.09,.018,.09],[c(-3.5,3.5),.03,c(-3.4,3.7)],H);C.rotation.y=l()*6,F([.06,.003,.03],[0,.011,0],O,C),C.name="Broken key cap",o(C)}for(let _=0;_<14;_++){let C=F([c(.3,.7),.012,c(.3,.8)],[c(-3.4,3.4),.007,c(-3.5,3.7)],b(_%2?8948860:10197637,.98,x));C.rotation.y=c(-.15,.15),ih.push(C)}let Wn=K0(ih);function Cf(_,C,D){_.save(),_.lineCap="round";for(let[q,Z,pe,Ye]of D){for(let je=0;je<13;je++){let Dt=Z+je*Ye/12;_.strokeStyle=C,_.globalAlpha=c(.65,.94),_.lineWidth=c(12,27),_.beginPath(),_.moveTo(q+c(-18,35),Dt),_.quadraticCurveTo(q+pe*.45,Dt+c(-12,12),q+pe+c(-35,18),Dt+c(-8,8)),_.stroke()}_.globalAlpha=1;for(let je=0;je<8;je++)u(_,q+l()*pe,Z+l()*Ye,c(13,43),"54,66,61",c(.035,.09))}_.globalAlpha=1;for(let q=0;q<95;q++){let Z=l()*1024,pe=l()<.55?c(800,1045):l()*1024;u(_,Z,pe,c(14,95),q%3?"44,49,38":"103,77,42",c(.045,.16))}let X=_.createLinearGradient(0,0,0,1024);X.addColorStop(0,"rgba(43,44,32,.30)"),X.addColorStop(.13,"rgba(43,44,32,0)"),X.addColorStop(.77,"rgba(43,44,32,0)"),X.addColorStop(1,"rgba(44,40,27,.38)"),_.fillStyle=X,_.fillRect(0,0,1024,1024);for(let q=0;q<23;q++){let Z=l()*1024,pe=c(8,105);_.strokeStyle=`rgba(86,67,38,${c(.06,.17)})`,_.lineWidth=c(1.5,6),_.beginPath(),_.moveTo(Z,pe),_.bezierCurveTo(Z+4,pe+60,Z-3,pe+125,Z+c(-5,5),pe+c(130,460)),_.stroke()}m(_,1024,12e3,"36,42,30",.21),_.restore()}function rh(_){let[C,D]=h(1024);D.fillStyle="#bfc4b6",D.fillRect(0,0,1024,1024),D.strokeStyle="#304a4d",D.fillStyle="#304a4d",D.lineWidth=4,D.font="28px sans-serif",D.fillText(_?"ONBOARDING / FIRST RUN":"WORKSPACE / DASHBOARD",45,67);function X(q,Z){D.beginPath(),D.moveTo(q,Z),D.lineTo(q+50,Z),D.lineTo(q+37,Z-11),D.moveTo(q+50,Z),D.lineTo(q+37,Z+11),D.stroke()}if(_)for(let q=0;q<3;q++){let Z=48+q*330;D.strokeRect(Z,154,253,593),D.strokeRect(Z+14,174,225,544),D.fillRect(Z+80,187,91,5),D.strokeRect(Z+32,225,189,130),D.beginPath(),D.moveTo(Z+32,225),D.lineTo(Z+221,355),D.moveTo(Z+221,225),D.lineTo(Z+32,355),D.stroke();for(let pe=0;pe<4;pe++)D.fillRect(Z+31,397+pe*25,170-pe%2*41,4);D.strokeRect(Z+32,524,188,54),D.strokeRect(Z+32,602,188,54),q<2&&X(Z+266,451),D.font="23px sans-serif",D.fillText(["01 / welcome","02 / connect","03 / explore"][q],Z+23,803)}else for(let q=0;q<2;q++){let Z=45+q*498;D.strokeRect(Z,165,436,525),D.strokeRect(Z,165,436,44),D.strokeRect(Z+14,223,87,448);for(let pe=0;pe<5;pe++)D.fillRect(Z+25,246+pe*40,59-pe%2*17,4);D.strokeRect(Z+118,230,297,133),D.beginPath(),D.moveTo(Z+135,343),D.lineTo(Z+171,300),D.lineTo(Z+212,325),D.lineTo(Z+270,265),D.lineTo(Z+328,293),D.lineTo(Z+397,248),D.stroke();for(let pe=0;pe<2;pe++)for(let Ye=0;Ye<2;Ye++){D.strokeRect(Z+118+Ye*154,385+pe*145,139,124),D.fillRect(Z+131+Ye*154,404+pe*145,92,5);for(let je=0;je<3;je++)D.fillRect(Z+131+Ye*154,431+pe*145+je*18,103-je*13,3)}}return D.strokeStyle="#7d453b",D.lineWidth=3,D.beginPath(),D.ellipse(510,905,357,48,-.02,0,Math.PI*2),D.stroke(),D.font="25px sans-serif",D.fillStyle="#7d453b",D.fillText(_?"simplify the first step / test again":"less noise \u2014 keep the primary action visible",180,915),Cf(D,"#bfc4b6",_?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]),f(C)}for(let _=0;_<2;_++){let C=new ve;C.name="Whiteboard with interface wireframes",C.position.set(_?2.25:.12,2.2,-3.94),C.rotation.z=_?-.025:.012,n.add(C),F([1.78,1.12,.04],[0,0,0],j,C);let D=rh(!_),X=W(new _t(1.7,1.04),new Oe({map:D,roughness:.75,emissive:16777215,emissiveMap:D,emissiveIntensity:.025}),C);X.position.z=.024,F([1.7,.023,.09],[0,-.57,.025],j,C);for(let q=0;q<3;q++)ee([-.58+q*.18,-.546,.057],[-.46+q*.18,-.546,.057],.013,q?H:b(3755626,.7),C)}let ri=new ve;ri.name="Planning whiteboard covered in sticky notes",ri.position.set(1.9,0,-3),ri.rotation.y=0,n.add(ri);for(let _ of[-1.12,1.12]){F([.045,.98,.055],[_,.49,0],v,ri),F([.11,.06,.65],[_,.06,0],v,ri);for(let C of[-.25,.25])le([.047,.045,.032],[_,.035,C],H,ri)}F([2.68,1.94,.05],[0,1.85,0],j,ri);let Pf=new Set([1,4,7,9,13,17,20,22,24]),[e1,qt]=h(1024);qt.fillStyle="#c2c7ba",qt.fillRect(0,0,1024,1024);for(let _=0;_<65;_++)u(qt,l()*1024,l()*1024,c(15,110),"60,69,55",.065);qt.strokeStyle="rgba(38,62,63,.65)",qt.fillStyle="rgba(38,62,63,.65)",qt.lineWidth=3;for(let _=0;_<3;_++){let C=170+_*245;qt.strokeRect(C,560,190,335),qt.strokeRect(C+12,579,166,28),qt.strokeRect(C+12,625,166,102),qt.beginPath(),qt.moveTo(C+12,625),qt.lineTo(C+178,727),qt.moveTo(C+178,625),qt.lineTo(C+12,727),qt.stroke();for(let D=0;D<4;D++)qt.fillRect(C+15,753+D*19,137-D%2*39,3);qt.strokeRect(C+15,843,160,28),_<2&&(qt.beginPath(),qt.moveTo(C+198,727),qt.lineTo(C+235,727),qt.lineTo(C+222,717),qt.moveTo(C+235,727),qt.lineTo(C+222,737),qt.stroke())}Cf(qt,"#c2c7ba",[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);for(let _ of Pf){let C=(-1.1+_%9*.273)/2.6*1024+512,D=(.5-(2.63-Math.floor(_/9)*.28-1.85)/1.86)*1024;qt.fillStyle="rgba(203,203,175,.20)",qt.fillRect(C-40,D-59,80,118),qt.fillStyle="rgba(111,96,51,.17)",qt.fillRect(C-34,D-56,68,8);for(let X=0;X<9;X++)qt.fillStyle="rgba(77,67,39,.15)",qt.fillRect(C+c(-33,33),D-53+c(-2,6),c(1,3),c(2,5))}let If=f(e1);W(new _t(2.6,1.86),new Oe({map:If,roughness:.75,emissive:16777215,emissiveMap:If,emissiveIntensity:.025}),ri).position.set(0,1.85,.027),F([2.58,.025,.13],[0,.87,.045],j,ri);for(let _=0;_<3;_++)ee([-.63+_*.23,.899,.09],[-.48+_*.23,.899,.09],.017,_===0?b(3428197,.75):H,ri);F([.18,.045,.07],[.62,.906,.075],H,ri);let t1=["#c3b25e","#b38488","#7faaa9","#a4b081"];function Ga(_,C,D,X,q){let[Z,pe]=h(128);pe.fillStyle=t1[q%4],pe.fillRect(0,0,128,128),pe.fillStyle="rgba(42,49,37,.16)",pe.fillRect(0,0,128,14),pe.strokeStyle="rgba(39,52,47,.68)",pe.lineWidth=2.6;for(let Kt=0;Kt<3+q%3;Kt++){pe.beginPath();let vi=30+Kt*16;pe.moveTo(16,vi);for(let Yi=1;Yi<8;Yi++)pe.lineTo(16+Yi*c(8,12),vi+c(-2.4,2.4));pe.stroke()}q%4===0&&(pe.strokeRect(19,75,35,27),pe.strokeRect(72,75,35,27));let Ye=new _t(.205,.215,3,5),je=Ye.attributes.position;for(let Kt=0;Kt<je.count;Kt++){let vi=je.getY(Kt);je.setZ(Kt,Math.max(0,-vi-.015)**2*3.3)}Ye.computeVertexNormals();let Dt=f(Z),cn=W(Ye,new Oe({map:Dt,roughness:.96,side:Pt,emissive:16777215,emissiveMap:Dt,emissiveIntensity:.025}),_);return cn.position.set(C,D,X),cn.rotation.z=c(-.13,.13),cn}for(let _=0;_<3;_++)for(let C=0;C<9;C++)Pf.has(_*9+C)||Ga(ri,-1.1+C*.273+c(-.018,.018),2.63-_*.28+c(-.014,.014),.04,_*9+C);for(let _=0;_<5;_++)_===1||_===4||Ga(ri,_<3?-1.1:1.09,1.75-_%3*.29,.04,28+_);for(let _=0;_<4;_++){let C=Ga(n,-1.7-_*.3,.005,-.38+_*.26,33+_);C.rotation.set(-Math.PI/2,0,.6+_*.73);let D=C.geometry.attributes.position;for(let X=0;X<D.count;X++)D.setZ(X,D.getZ(X)*.1);nh.push(C)}let Wa=Q0();n.add(Wa.group);let sh=Sl({flies:14,moths:7,spread:[.88,.23,.5],sizeScale:.55,dive:.65});sh.group.position.y=-.4,Wa.group.add(sh.group);for(let _ of[-.66,.66])ee([_,3.3,-.55],[_,2.98,-.55],.006,H);Q([[.85,3.3,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.3,3.3,-.7]],.007,H);let os=new ve;os.position.set(-2.1,.88,-3.2),Ze.parent.add(os),N(.11,.035,[0,0,0],H,os),ee([0,0,0],[.05,.31,0],.016,v,os),ee([.05,.31,0],[.22,.4,.02],.013,v,os),W(new Kr(.12,.13,20,1,!0),v,os).position.set(.23,.37,.02),le([.04,.025,.04],[.23,.32,.02],new mt({color:15122820}),os);let Lf=new An(15121790,1.2,2.5,2);Lf.position.set(-1.87,1.19,-3.18),n.add(Lf);let oh=Sl({flies:5,moths:3,spread:[.28,.1,.22],seed:113,sizeScale:.55,dive:.1});oh.group.position.set(-1.87,1.14,-3.02),n.add(oh.group),await t("Placing the objects\u2026");let Df=new $t({color:14102035,roughness:.31,clearcoat:1,clearcoatRoughness:.18}),Uf=new $t({color:15790556,roughness:.13,transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),ah=b(14081488,.49),Xa=b(9016713,.69),n1=new yo;function ch(_){let C=n1.load(new URL(`./labels/${_}.svg`,import.meta.url).href,D=>{Ie.mobile&&xl(D,256)});return C.colorSpace=yt,C.anisotropy=Math.min(Ie.mobile?2:8,i.capabilities.getMaxAnisotropy()),new Oe({map:C,transparent:!0,alphaTest:.15,roughness:.72,side:Pt})}let i1=ch("ketchup-glass"),r1=ch("ketchup-squeeze"),s1=ch("ketchup-neck");for(let _=0;_<8140;_++)l();function o1(_,C){for(let D=1;D<_.length;D++)if(_[D][1]>=C){let[X,q]=_[D-1],[Z,pe]=_[D];return qe.lerp(X,Z,(C-q)/(pe-q||1))}return _.at(-1)[0]}function lh(_,C,D,X,q,Z=1,pe=1.02){let Ye=new _t(1,1,24,16),je=Ye.attributes.position,Dt=Ye.attributes.uv;for(let Kt=0;Kt<je.count;Kt++){let vi=(Dt.getX(Kt)*2-1)*pe,Yi=qe.lerp(D,X,Dt.getY(Kt)),Yo=o1(C,Yi)+.0018;je.setXYZ(Kt,Math.sin(vi)*Yo,Yi,Math.cos(vi)*Yo*Z+8e-4)}Ye.computeVertexNormals();let cn=W(Ye,q,_);return cn.castShadow=!1,cn}function hh(_,C,D,X=1){let q=W(new Zr(_.map(Z=>new ke(...Z)),48),C,D);return q.scale.z=X,q}function Hf(_,C,D,X,q,Z){let pe=new ve;return pe.name=_.name,pe.add(_),_.position.y=-q,n.add(pe),pe.position.set(C,0,D),pe.rotation.set(...X),pe.scale.setScalar(Z),pe.updateMatrixWorld(!0),Ss(pe,Wn)}let xr=new ve;xr.name="Discarded glass ketchup bottle";let qa=[[0,0],[.063,0],[.076,.014],[.08,.047],[.079,.19],[.069,.267],[.049,.342],[.03,.41],[.029,.447],[.033,.454],[.032,.471],[0,.471]],Nf=qa.filter(_=>_[1]<.44).map(([_,C])=>[Math.max(0,_-.0035),C+.004]);Nf.push([.026,.469],[0,.469]);let a1=hh(Nf,Df,xr),c1=hh(qa,Uf,xr);c1.castShadow=!1,lh(xr,qa,.047,.24,i1),lh(xr,qa,.365,.432,s1,1,.95);let ko=new ve;ko.position.y=.48,xr.add(ko),N(.037,.036,[0,0,0],ah,ko,32),N(.0365,.006,[0,.461,0],Xa,xr,32);for(let _=0;_<30;_++){let C=_/30*Math.PI*2;ee([Math.cos(C)*.037,-.013,Math.sin(C)*.037],[Math.cos(C)*.037,.014,Math.sin(C)*.037],.0011,Xa,ko)}let Ff=W(new Qt(.07,.003,6,32),Uf,xr);Ff.rotation.x=Math.PI/2,Ff.position.y=.016;let l1=Hf(xr,.98,2.82,[-.25,.45,Math.PI/2],.25,.82),Dr=new ve;Dr.name="Discarded squeeze ketchup bottle";let Of=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];hh(Of,Df,Dr,.62),lh(Dr,Of,.122,.403,r1,.62,1.04);let h1=N(.069,.06,[0,.034,0],ah,Dr,40);h1.scale.z=.73;let u1=N(.0694,.003,[0,.014,0],Xa,Dr,40);u1.scale.z=.73,k([.042,.012,.01],[0,.014,.051],ah,Dr),F([.031,.018,.008],[0,.04,-.05],Xa,Dr),Hf(Dr,1.95,2.45,[-Math.PI/2,0,-.45],.225,.8);let[d1,Lt]=h(1024,512);Lt.fillStyle="#86b0b2",Lt.fillRect(0,0,1024,512);for(let _=0;_<180;_++)u(Lt,l()*1024,l()*512,c(5,55),_%2?"225,229,207":"83,125,129",c(.035,.14));Lt.lineCap="round";for(let _=0;_<260;_++){let C=l()*1024,D=l()*512;Lt.strokeStyle=`rgba(44,57,53,${c(.3,.65)})`,Lt.lineWidth=c(2,4),Lt.beginPath(),Lt.moveTo(C,D),Lt.quadraticCurveTo(C-3,D+7,C+c(-2,3),D+c(7,15)),Lt.stroke()}Lt.fillStyle="#eee2c3",Lt.beginPath(),Lt.moveTo(512,176),Lt.bezierCurveTo(459,117,386,112,350,169),Lt.bezierCurveTo(313,243,337,421,410,466),Lt.bezierCurveTo(460,493,565,493,615,466),Lt.bezierCurveTo(687,421,711,243,675,169),Lt.bezierCurveTo(639,112,565,117,512,176),Lt.fill();for(let _ of[433,591])u(Lt,_,271,29,"197,123,110",.2),Lt.fillStyle="#3d3630",Lt.beginPath(),Lt.ellipse(_,215,7,4,-.2,0,Math.PI*2),Lt.fill();Lt.strokeStyle="#52443a",Lt.lineWidth=3,Lt.beginPath(),Lt.moveTo(512,274),Lt.lineTo(512,316),Lt.bezierCurveTo(501,335,482,337,472,326),Lt.moveTo(512,316),Lt.bezierCurveTo(523,335,542,337,552,326),Lt.stroke();for(let _ of[-1,1])for(let C=0;C<3;C++)Lt.fillStyle="#6e5b46",Lt.beginPath(),Lt.arc(512+_*(25+C*9),300+C%2*12,1.8,0,Math.PI*2),Lt.fill();m(Lt,512,2300,"112,124,109",.07);let f1=new $t({map:f(d1),roughness:.29,clearcoat:1,clearcoatRoughness:.16}),zf=new $t({color:9091001,roughness:.25,clearcoat:1,clearcoatRoughness:.14}),[p1,yi]=h(1024,512);yi.fillStyle="#e8dcba",yi.fillRect(0,0,1024,512);for(let _=0;_<18;_++){let C=_*1024/18;yi.fillStyle=_%2?"#93b8ae":"#7ca6a5",yi.beginPath(),yi.moveTo(C-12,0),yi.bezierCurveTo(C-20,170,C+4,310,C-12,512),yi.lineTo(C+12,512),yi.bezierCurveTo(C+26,310,C+8,170,C+17,0),yi.closePath(),yi.fill()}let Ya=yi.createLinearGradient(0,220,0,512);Ya.addColorStop(0,"rgba(103,62,27,0)"),Ya.addColorStop(.7,"rgba(103,62,27,.09)"),Ya.addColorStop(1,"rgba(74,39,14,.48)"),yi.fillStyle=Ya,yi.fillRect(0,0,1024,512);let Bf=new $t({map:f(p1),roughness:.34,clearcoat:.8,side:Pt}),Gi=new ve;Gi.name="Blue pointy-eared mug tipped on its side";function kf(_,C){let D=new Zr(_.map(Z=>new ke(...Z)),64),X=D.attributes.uv,q=D.attributes.position;for(let Z=0;Z<q.count;Z++)X.setY(Z,q.getY(Z)/.258);return D.rotateY(Math.PI),W(D,C,Gi)}kf([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.14,.257]],f1),kf([[.127,.257],[.128,.237],[.121,.09],[.106,.034],[0,.034]],Bf);let Vf=W(new Qt(.134,.008,10,64),zf,Gi);Vf.rotation.x=Math.PI/2,Vf.position.y=.254;let Gf=W(new Qt(.102,.004,8,48),Bf,Gi);Gf.rotation.x=Math.PI/2,Gf.position.y=.012;for(let _ of[-1,1]){let C=new ve;C.position.set(_*.095,.235,.103),C.rotation.set(-.06,_*Math.atan2(.095,.103),-_*.1),Gi.add(C);let D=new gt;D.name=_<0?"Mug left ear tip":"Mug right ear tip",D.position.y=.142,C.add(D);let X=new St;X.moveTo(-.047,0),X.bezierCurveTo(-.044,.046,-.015,.112,0,.142),X.bezierCurveTo(.018,.125,.046,.045,.047,0),X.closePath();let q=new sn(X,{depth:.013,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});q.translate(0,0,-.0065),W(q,zf,C),Q([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,b(5005659,.62),C)}let[m1,$a]=h(256);$a.fillStyle="#e8dfc6",$a.fillRect(0,0,256,256),$a.fillStyle="#84adb0";for(let _ of[0,95,200])$a.fillRect(_,0,47,256);let g1=new $t({map:f(m1),roughness:.28,clearcoat:1});Q([[-.129,.211,0],[-.195,.222,0],[-.249,.188,0],[-.257,.13,0],[-.229,.075,0],[-.178,.057,0],[-.125,.076,0]],.014,g1,Gi);let uh=new gt;uh.name="Mug handle grip",uh.position.set(-.249,.141,0),Gi.add(uh);let Vo=new St;Vo.moveTo(-.021,.01),Vo.quadraticCurveTo(0,.021,.021,.01),Vo.quadraticCurveTo(.021,-.003,0,-.019),Vo.quadraticCurveTo(-.022,-.004,-.021,.01),W(new sn(Vo,{depth:.012,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new $t({color:2697251,roughness:.3,clearcoat:1}),Gi).position.set(0,.129,.142);let sr=new ve;sr.name="Spilled animal mug in the left foreground",sr.add(Gi),Gi.position.y=-.135,n.add(sr);let Fs=new w(-.55,-.05,.83).normalize(),Os=new w(.54,.66,.39);Os.addScaledVector(Fs,-Os.dot(Fs)).normalize();let dh=new w().crossVectors(Fs,Os).normalize();sr.quaternion.setFromRotationMatrix(new It().makeBasis(dh,Fs,Os)),sr.scale.setScalar(.72),sr.position.set(.24,0,3.02),sr.updateMatrixWorld(!0),Ss(sr,Wn),sr.updateMatrixWorld(!0);let Wf=Math.hypot(dh.y,Os.y),Za=Gi.localToWorld(new w(-.134*dh.y/Wf,.254,-.134*Os.y/Wf)),Go=new w(Fs.x,0,Fs.z).normalize(),zs=Za.clone().addScaledVector(Go,.23);zs.y=Wn(zs.x,zs.z)+.001;let Xf=new $t({color:5324843,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:!0,opacity:.94,side:Pt}),x1=new Oe({color:9072713,roughness:.4,transparent:!0,opacity:.68,depthWrite:!1,side:Pt});function qf(_,C,D,X,q=0){let Z=new St;for(let Dt=0;Dt<=80;Dt++){let cn=Dt/80*Math.PI*2,Kt=1+.11*Math.sin(cn*3+q)+.065*Math.sin(cn*7-.3)+.025*Math.cos(cn*13),vi=Math.cos(cn)*D*Kt,Yi=Math.sin(cn)*X*Kt;Dt?Z.lineTo(vi,Yi):Z.moveTo(vi,Yi)}Z.closePath();let pe=new er(Z,32),Ye=W(pe,x1);Ye.rotation.x=-Math.PI/2,Ye.scale.setScalar(1.045),Ye.position.set(_,Wn(_,C)+5e-4,C),Ye.castShadow=!1;let je=W(pe,Xf);return je.rotation.x=-Math.PI/2,je.position.set(_,Wn(_,C)+.001,C),je.castShadow=!1,je}qf(zs.x,zs.z,.23,.145,.4);let Wo=Za.clone();Wo.y=Wn(Wo.x,Wo.z)+.008,Q([Za.toArray(),Wo.toArray(),Wo.clone().addScaledVector(Go,.09).toArray(),zs.toArray()],.008,Xf);for(let[_,C,D]of[[.45,.1,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){let X=Za.clone().addScaledVector(Go,_).add(new w(-Go.z*C,0,Go.x*C));qf(X.x,X.z,D,D*.65,_*3)}n.updateMatrixWorld(!0);for(let _ of nh){let C=_.geometry.attributes.position;for(let D=0;D<C.count;D++){let X=_.localToWorld(new w(C.getX(D),C.getY(D),0)),q=.003;for(let Z of ih){let pe=Z.worldToLocal(X.clone()),Ye=Z.geometry.parameters;Math.abs(pe.x)<Ye.width/2&&Math.abs(pe.z)<Ye.depth/2&&(q=Math.max(q,.013))}C.setZ(D,C.getZ(D)+q+.002-_.position.y)}C.needsUpdate=!0,_.geometry.computeVertexNormals(),_.geometry.computeBoundingSphere()}for(let[_,C,D,X,q]of[[-2.53,2.13,1.52,1.08,!0],[-.62,2.13,1.78,1.1,!1]]){let Z=new ve;Z.name="Left-wall design whiteboard",Z.position.set(-3.86,C,_),Z.rotation.y=Math.PI/2,n.add(Z),F([D,X,.045],[0,0,0],j,Z);let pe=rh(q),Ye=W(new _t(D-.07,X-.07),new Oe({map:pe,roughness:.85,emissive:16777215,emissiveMap:pe,emissiveIntensity:.025}),Z);Ye.position.z=.026,F([D-.07,.025,.1],[0,-X/2,.035],j,Z),ee([-.4,-X/2+.025,.06],[-.23,-X/2+.025,.06],.011,H,Z),F([.13,.035,.065],[D*.29,-X/2+.029,.045],S,Z),Ga(Z,D*.35,X*.21,.034,q?6:9)}let Pi=new ve;Pi.name="Worn bookshelf of design books",Pi.position.set(-3.65,0,1.65),Pi.rotation.y=Math.PI/2,n.add(Pi);let Ka=b(11643027,.92,d),y1=b(10920589,.98);F([1.56,2.38,.035],[0,1.19,-.185],Ka,Pi);for(let _ of[-.765,.765])F([.045,2.42,.42],[_,1.21,.015],Ka,Pi);for(let _ of[.12,.66,1.2,1.74,2.28])F([1.5,.035,.42],[0,_,.015],Ka,Pi);F([1.51,.1,.045],[0,.05,.19],Ka,Pi);let Ja=[["The Design of Everyday Things","#b5ad86"],["Don't Make Me Think","#bd8b36"],["Thinking with Type","#9f392f"],["Grid Systems","#adaf9a"],["Designing Interfaces","#54796f"],["About Face","#393e3e"],["The Elements of User Experience","#758b9d"],["Sprint","#b3a847"],["Universal Principles of Design","#b8b5a4"],["Designing for Interaction","#80665b"],["Sketching User Experiences","#456976"],["The Shape of Design","#bcb296"]],v1=Ja.map(([_,C],D)=>{let[X,q]=h(128,1024);q.fillStyle=C,q.fillRect(0,0,128,1024);let Z=q.createLinearGradient(0,0,128,0);return Z.addColorStop(0,"rgba(0,0,0,.35)"),Z.addColorStop(.25,"rgba(0,0,0,0)"),Z.addColorStop(.86,"rgba(230,219,175,.12)"),Z.addColorStop(1,"rgba(0,0,0,.2)"),q.fillStyle=Z,q.fillRect(0,0,128,1024),q.save(),q.translate(76,70),q.rotate(Math.PI/2),q.fillStyle=[2,4,5,6,9,10].includes(D)?"#ded9c5":"#262b26",q.font="600 47px Georgia,serif",q.fillText(_,0,0,820),q.restore(),q.fillStyle="rgba(217,210,181,.55)",q.fillRect(14,947,100,3),q.fillRect(14,963,100,3),m(q,128,400,"22,24,17",.22),new Oe({map:f(X),roughness:.96})});for(let _=0;_<4;_++){let C=-.69;for(let D=0;D<16;D++){let X=(D+_*5)%Ja.length,q=c(.045,.085),Z=c(.3,.44),pe=c(.22,.3);if(C+q>.68)break;if(D===7||_===2&&D===11){C+=.1;continue}let Ye=new ve;Ye.name=Ja[X][0],Pi.add(Ye);let je=D%6===5?-.12:c(-.025,.025);Ye.rotation.z=je,Ye.position.set(C+q/2,.12+_*.54+.018+Math.abs(Math.sin(je))*q/2,.18-pe/2),F([q-.008,Z-.009,pe-.007],[0,Z/2,0],y1,Ye);let Dt=b(Ja[X][1],.93);for(let Kt of[-1,1])F([.004,Z,pe],[Kt*(q/2-.002),Z/2,0],Dt,Ye);F([q,Z,.007],[0,Z/2,pe/2],Dt,Ye);let cn=W(new _t(q-.002,Z-.004),v1[X],Ye);cn.position.set(0,Z/2,pe/2+.004),cn.castShadow=!1,C+=q+.008}}for(let _ of[.14,.68,1.22,1.76,2.3])F([1.44,.002,.035],[0,_,.196],b(7171673,.99),Pi);let M1=F([.32,.055,.24],[.41,2.327,.03],b(6964536,.95),Pi);M1.rotation.y=.17,await t("Finishing the office\u2026");let[_1,Bt]=h(2048);Bt.fillStyle="#66695d",Bt.fillRect(0,0,2048,2048);for(let _=0;_<1250;_++)u(Bt,l()*2048,l()*2048,c(4,125),_%4?"34,31,21":"135,131,110",c(.035,.22));for(let _=0;_<160;_++){let C=_%4,D=C<2?(C?2048:0)+c(-45,90):l()*2048,X=C<2?l()*2048:(C===2?0:2048)+c(-45,90);u(Bt,D,X,c(60,190),"20,26,19",c(.15,.4))}for(let _=0;_<75;_++){let C=c(80,1968),D=c(80,1968),X=c(14,70);u(Bt,C,D,X*1.7,"57,35,15",c(.13,.35)),Bt.strokeStyle=`rgba(48,35,18,${c(.12,.36)})`,Bt.lineWidth=c(1,4),Bt.beginPath(),Bt.ellipse(C,D,X,X*c(.6,1.2),l()*Math.PI,0,Math.PI*c(1.1,2)),Bt.stroke()}Bt.lineCap="round";for(let _=0;_<340;_++){let C=c(100,1950),D=c(100,1950);Bt.save(),Bt.translate(C,D),Bt.rotate(l()*Math.PI*2),Bt.strokeStyle=`rgba(16,23,19,${c(.1,.3)})`,Bt.lineWidth=c(1,4),Bt.beginPath(),Bt.moveTo(0,0),Bt.quadraticCurveTo(c(15,50),c(-12,12),c(55,160),c(-20,20)),Bt.stroke(),Bt.restore()}for(let _=0;_<17;_++){let C=l()*2048,D=l()*2048;Bt.beginPath(),Bt.moveTo(C,D);for(let X=0;X<9;X++)C+=c(-20,25),D+=c(6,27),Bt.lineTo(C,D);Bt.strokeStyle="rgba(18,23,18,.42)",Bt.lineWidth=2.2,Bt.stroke()}for(let _=0;_<1900;_++){let C=l()*2048,D=l()*2048;Bt.strokeStyle=`rgba(167,163,137,${c(.03,.22)})`,Bt.lineWidth=c(.4,1.3),Bt.beginPath(),Bt.moveTo(C,D),Bt.lineTo(C+c(3,28),D+c(-5,5)),Bt.stroke()}m(Bt,2048,9e4,"16,22,15",.26),m(Bt,2048,3e4,"166,161,135",.2);let Yf=f(_1);Y.map=Yf,Y.bumpMap=Yf,Y.bumpScale=.006,Y.needsUpdate=!0;let an=new ve;an.name="Weathered entrance wall behind the viewer",an.position.z=4.48,an.rotation.y=Math.PI,n.add(an),F([7.8,3.35,.16],[0,1.675,-.08],b(10068367,.99,y),an),ne(7.8,3.35,an).position.set(0,1.675,.004),F([7.8,.14,.045],[0,.07,.024],H,an),F([7.8,.026,.023],[0,2.87,.03],v,an);let[E1,zn]=h(1024);for(let _=0;_<62;_++){let C=l()*1024,D=c(0,180);zn.strokeStyle=`rgba(43,36,22,${c(.1,.32)})`,zn.lineWidth=c(.5,5),zn.beginPath(),zn.moveTo(C,D),zn.bezierCurveTo(C+6,D+80,C-4,D+170,C+c(-6,9),D+c(210,650)),zn.stroke()}for(let _=0;_<21;_++){let C=l()*1024,D=l()*1024;zn.beginPath();for(let X=0;X<12;X++){let q=X/12*Math.PI*2,Z=c(9,27),pe=C+Math.cos(q)*Z,Ye=D+Math.sin(q)*Z*1.7;X?zn.lineTo(pe,Ye):zn.moveTo(pe,Ye)}zn.closePath(),zn.fillStyle=_%3?"rgba(61,65,52,.75)":"rgba(149,144,118,.6)",zn.fill()}for(let _=0;_<10;_++){let C=l()*1024,D=c(60,850);zn.strokeStyle="rgba(28,34,26,.75)",zn.lineWidth=.8,zn.beginPath(),zn.moveTo(C,D);for(let X=0;X<8;X++)C+=c(-9,12),D+=c(5,16),zn.lineTo(C,D);zn.stroke()}let $f=W(new _t(7.8,3.35),new Oe({map:f(E1),transparent:!0,depthWrite:!1,roughness:1}),an);$f.position.set(0,1.675,.007),$f.castShadow=!1;let In=new ve;In.name="Scuffed service door and failing exit sign",In.position.set(1.2,0,.05),an.add(In);let Qa=b(6910824,.88,M,.22);F([1.12,2.34,.042],[0,1.17,0],H,In),F([1.035,2.27,.048],[0,1.153,.022],Qa,In);for(let _ of[-.565,.565])F([.065,2.4,.1],[_,1.2,.035],v,In);F([1.19,.065,.1],[0,2.4,.035],v,In),F([1.1,.025,.13],[0,.016,.045],j,In),F([.85,.28,.009],[0,.25,.052],b(7239276,.7,M,.55),In);for(let _ of[-1,1])for(let C of[.14,.35])le([.008,.008,.003],[_*.39,C,.059],j,In);F([.68,.73,.032],[0,1.69,.055],v,In);let[b1,Wi]=h(512);Wi.fillStyle="#293c39",Wi.fillRect(0,0,512,512);for(let _=0;_<170;_++)u(Wi,l()*512,l()*512,c(4,45),"7,14,11",c(.08,.3));Wi.strokeStyle="rgba(100,118,105,.32)",Wi.lineWidth=1.4;for(let _=-512;_<1024;_+=36)Wi.beginPath(),Wi.moveTo(_,0),Wi.lineTo(_+512,512),Wi.moveTo(_,0),Wi.lineTo(_-512,512),Wi.stroke();W(new _t(.6,.65),new $t({map:f(b1),roughness:.32,clearcoat:.8,metalness:.12}),In).position.set(0,1.69,.074),ee([.36,.9,.095],[.36,1.05,.095],.017,j,In),ee([.36,1.03,.095],[.2,1.03,.12],.015,j,In);for(let _ of[.35,1.2,2.07])F([.07,.1,.034],[-.515,_,.064],v,In),N(.012,.12,[-.53,_,.08],j,In);function Bs(_,C,D,X,q,Z="#74796b",pe="#d0cdb8"){let[Ye,je]=h(512,128);je.fillStyle=Z,je.fillRect(0,0,512,128),je.fillStyle=pe,je.font="600 50px Arial,sans-serif",je.textAlign="center",je.fillText(_,256,82,470),m(je,512,1500,"14,20,15",.2);let Dt=W(new _t(C,D),new Oe({map:f(Ye),roughness:.9}),X);return Dt.position.set(...q),Dt.castShadow=!1,Dt}Bs("STAFF ONLY",.4,.1,In,[0,1.12,.055]),F([.54,.21,.1],[0,2.66,.08],v,In);let ja=Bs("EXIT  \u2192",.48,.15,In,[0,2.66,.133],"#263b30","#a8b593");ja.material.emissive.set(5994071),ja.material.emissiveMap=ja.material.map,ja.material.emissiveIntensity=.25;let Xi=new ve;Xi.name="Abandoned critique pinboard",Xi.position.set(-.95,1.94,.055),Xi.rotation.z=-.018,an.add(Xi);let w1=b(8417362,.99,d);F([1.86,1.25,.045],[0,0,0],w1,Xi);for(let _ of[-.94,.94])F([.035,1.3,.055],[_,0,.01],v,Xi);for(let _ of[-.64,.64])F([1.91,.035,.055],[0,_,.01],v,Xi);for(let _=0;_<7;_++){let C=-.68+_%4*.44,D=_<4?.28:-.26,X=rh(_%2===0),q=W(new _t(.35,.43),new Oe({map:X,color:_%2?12170400:13026996,roughness:1,side:Pt}),Xi);q.position.set(C,D,.028+_%3*.001),q.rotation.z=c(-.1,.1),q.castShadow=!1,le([.008,.008,.005],[C,D+.195,.039],_%2?H:b(7814963,.8),Xi);let Z=F([.11,.033,.001],[C-.06,D+.2,.031],b(10001011,.98),Xi);Z.rotation.z=c(-.2,.2)}Bs("DESIGN / CRITIQUE",1.1,.1,Xi,[-.11,.56,.028],"#77765a","#252d27"),F([.94,.065,.13],[-.95,2.78,.11],v,an);let Zf=N(.013,.82,[-.95,2.741,.14],new mt({color:7572357}),an,12);Zf.rotation.z=Math.PI/2,Zf.castShadow=!1;let Xo=new Mo(9611936,3.4,3.6,1,.85,2);Xo.position.set(-.95,2.72,.36),Xo.target.position.set(-1.12,1.35,.04),an.add(Xo,Xo.target),Ie.mobile&&(Xo.visible=!1);let fh=Sl({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.5,dive:.22});fh.group.position.set(-.95,2.52,.43),an.add(fh.group);let ui=new ve;ui.name="Damaged filing cabinets",ui.position.set(-1.12,0,.26),an.add(ui),F([1.52,.77,.028],[0,.385,-.2],Qa,ui),F([1.56,.035,.46],[0,.795,0],v,ui);for(let _ of[-.745,0,.745])F([.025,.77,.43],[_,.385,0],Qa,ui);for(let _ of[.018,.385])F([1.52,.025,.43],[0,_,0],v,ui);for(let _ of[-.38,.38])for(let C of[.2,.56]){if(_<0&&C>.4)continue;let D=0;F([.71,.32,.025],[_,C,.231+D],v,ui),ee([_-.1,C+.04,.26+D],[_+.1,C+.04,.26+D],.011,j,ui),F([.16,.055,.004],[_,C-.06,.248+D],O,ui),D&&(F([.68,.014,.35],[_,C-.16,.2],v,ui),F([.012,.28,.34],[_-.34,C,.2],v,ui))}let S1=F([.47,.29,.36],[-1.3,.96,.29],b(11573869,.99,d),an);S1.rotation.y=.14,Bs("ARCHIVE",.25,.075,an,[-1.3,.97,.483],"#a49471","#3b3d30");let T1=F([.5,.014,.19],[-1.3,1.116,.39],I,an);T1.rotation.x=.2;let Ur=new ve;Ur.name="Neglected network and electrical cabinet",Ur.position.set(-2.96,1.6,.08),an.add(Ur),F([.64,.97,.12],[0,0,0],v,Ur),F([.56,.88,.014],[0,0,.066],H,Ur);for(let _=0;_<4;_++)for(let C=0;C<5;C++)F([.072,.09,.035],[-.2+C*.1,.28-_*.16,.09],Qa,Ur),F([.017,.035,.01],[-.2+C*.1,.28-_*.16,.113],_===1?O:H,Ur);let qo=new ve;qo.position.set(-.32,0,.06),qo.rotation.y=-.65,Ur.add(qo),F([.62,.96,.025],[.31,0,0],v,qo),Bs("CAUTION",.3,.1,qo,[.32,.26,.014],"#a08d52","#252b24");for(let _=0;_<4;_++)Q([[-3.12+_*.08,2.1,.12],[-3.15+_*.08,2.5,.12],[-3.15+_*.08,2.88,.12],[-2.1+_*.08,2.88,.12]],.012,v,an);for(let _=0;_<6;_++)Q([[-3.18+_*.08,1.15,.16],[-3.2+_*.06,.71,.21],[-3.13+_*.1,.32,.17],[-2.85+_*.06,.15,.3]],.005,_%2?H:b(5858907,.9),an);F([.2,.13,.022],[2.2,.35,.047],O,an),F([.11,.085,.025],[2.2,.35,.065],H,an),Q([[2.2,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.9,.023,.42],[3.1,.023,.3]],.007,H,an);let qi=new ve;qi.name="Dusty fire extinguisher",qi.position.set(2.16,.25,.17),an.add(qi);let ph=b(8271401,.78,M,.23);N(.095,.42,[0,.25,0],ph,qi,24),le([.095,.065,.095],[0,.47,0],ph,qi),le([.093,.045,.093],[0,.04,0],ph,qi),F([.11,.025,.055],[.015,.56,0],H,qi),ee([0,.51,0],[0,.57,0],.018,j,qi),Q([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,H,qi),Bs("FIRE",.12,.14,qi,[0,.27,.097],"#b4ac8c","#33382d"),r.push(Ze,be,fn,Ve,P,te,Xe,rt.group,ri,Pi,ui,qi);for(let _ of r)Ss(_,Wn);for(let _ of[Ne,Je]){let C=_.getObjectByName("Monitor power cable");_.remove(C),C.geometry.dispose();let D=_.localToWorld(new w(.1,.23,-.05)),X=D.x,q=D.z,Z=Q([D.toArray(),[X+.09,Math.max(Wn(X+.09,q+.1)+.008,D.y*.45),q+.1],[X+.2,Wn(X+.2,q+.2)+.007,q+.2],[X+.38,Wn(X+.38,q+.11)+.007,q+.11]],.006,H);Z.userData.ignoreFloorContact=!0,Z.userData.anchorStart=!0}for(let _ of s)bl(_,Wn);n.add(J0(e,Wn)),await t("Preparing the tanks\u2026");let as=Z0();as.group.userData.ignoreAcid=!0,n.add(as.group);let ec=gm({valves:as.valves,floorSupport:Wn});n.add(ec.group);let mh=lm({filing:ui,laptop:Af,floorSupport:Wn,drawerMaterial:v});n.add(mh.group);let gh=Mm({chargingKit:mh,acidLeaks:ec,floorSupport:Wn,pipeMaterial:v});n.add(gh.group);let xh=dm({bottle:l1,contents:a1,cap:ko,floorSupport:Wn});n.add(xh.group);let Kf=nm({room:n,floorSupport:Wn,viewerPosition:e});n.add(Kf.group);function R1(_){gh.setEnvironment(_),ec.setEnvironment(_),ct.setEnvironment(_),De.setEnvironment(_),as.setEnvironment(_),Wa.setEnvironment(_)}let Jf=-1/0;function A1(_,C,D=e){xh.update(_,C);let X=Wa.update(_,C);return _-Jf>=1/Ie.effectsHz&&(Jf=_,Kf.update(_,C,D),as.update(_,C),sh.update(_,C,X),fh.update(_,C,.65),oh.update(_,C,.78)),X}return{group:n,laptop:Af,catMug:sr,handsaw:ct.group,acidLeaks:ec,chargingKit:mh,fireHazard:gh,ketchupKey:xh,countdown:rt,setDisplayEnvironment:R1,update:A1,figpalHoists:as,toggleHoist:as.toggleHoist}}var Ca=["Nooo!!!!","Tell my wife that I love her!","Delete my browser history!"],Zd=["help","I have a family","I swear I didn't detach the component!"];function Em(i,e,t=Math.random){let n=18,r=-1,s=Math.floor(t()*Zd.length);return{update(o,a=!1){if(o<n)return!1;if(a||e.isActive(o))return n=o+2,!1;let l=[0,1,2].filter(h=>i.isHanging(h));if(!l.length)return n=o+2,!1;l.length>1&&(l=l.filter(h=>h!==r));let c=l[Math.floor(t()*l.length)];return e.show(c,o,Zd[s],6),r=c,s=(s+1)%Zd.length,n=o+20+t()*15,!0},reset(o=0){n=o+18,r=-1}}}function bm(i){let e=null;return{update(t,n){return t!=="finished"||e!==null?!1:(e=n,i.lowerAll(),!0)},reset(){e!==null&&i.reset(),e=null},get active(){return e!==null},elapsed(t){return e===null?-1:Math.max(0,t-e)}}}function wm(i,e,t=()=>!0){let n=document.querySelector("#figpal-dialogues"),r=Ca.map((m,g)=>{let y=document.createElement("div");y.className="figpal-speech",y.hidden=!0,y.dataset.figpal=String(g+1);let p=document.createElement("span");p.className="figpal-speech-text",p.textContent=m;let d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.classList.add("figpal-speech-tail"),d.setAttribute("aria-hidden","true");let M=document.createElementNS("http://www.w3.org/2000/svg","path");return d.append(M),y.append(p,d),n.append(y),y}),s=new w,o=r.map(()=>null),a=r.map(()=>15);function l(m,g,y=Ca[m],p=15){if(r[m]){if(!t(m)){f(m);return}o[m]=g,a[m]=p,r[m].children[0].textContent=y}}function c(m){return o.some((g,y)=>t(y)&&g!==null&&m>=g&&m<g+a[y])}function h(m){for(let g=0;g<r.length;g++)l(g,m)}function f(m){if(Number.isInteger(m)){r[m]&&(o[m]=null,r[m].hidden=!0);return}n.hidden=!0;for(let g=0;g<r.length;g++)o[g]=null,r[g].hidden=!0}function u(m,g){n.hidden=!1;let y=e.getBoundingClientRect(),p=0;for(let d=0;d<i.length;d++){if(!t(d)){f(d);continue}let M=r[d],x=o[d]===null?-1:g-o[d],E=a[d];if(x<0||x>=E){M.hidden=!0,x>=E&&(o[d]=null);continue}if(M.style.opacity=String(1-qe.smoothstep(x,E-1,E)),i[d].getWorldPosition(s),s.y=Math.max(s.y,1.32),s.project(m),s.z<-1||s.z>1||Math.abs(s.x)>1.04||Math.abs(s.y)>1.1){M.hidden=!0;continue}M.hidden=!1;let R=y.left+(s.x*.5+.5)*y.width,b=y.top+(-s.y*.5+.5)*y.height;M.style.transform=`translate3d(${R}px,${b-14}px,0) translate(-50%,-100%)`;let T=M.offsetWidth/2;M.querySelector("path").setAttribute("d",`M ${T-5} 0 L ${T+6} 0 L ${T} 15 Z`),p++}n.hidden=p===0}return f(),{update:u,hide:f,show:l,showAll:h,isActive:c}}var Pr=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Sm({canDetach:i=()=>!0}={}){let e=!0,t=-1/0,n=-1/0,r=!1,s=-1/0;return{get locked(){return e},requestReach(o){return o-t<1.65||!e&&o-n<.85?!1:(t=o,s=o+5.2,r=!e,!0)},detach(o){return!e||!i()?!1:(e=!1,n=o,s=o+2.4,r=!1,!0)},endReach(){s=-1/0,r=!1},sample(o,a=!1){a&&Number.isFinite(t)&&(s=Math.max(s,o+.8));let l=o-t,c=l<.52?Pr(l/.52):l<.86?1:1-Pr((l-.86)/.79),h=!1;!e&&r&&l>=.55&&(h=!0,r=!1);let f=o-n,u=e?0:Pr(f/.14),m=e?0:Pr((f-.12)/.42),g=e?0:Pr((f-.56)/.28),y=e?0:Pr((f-.9)/.65),p=o<s&&(e||f<1.65),d=p?Math.min(Pr(l/.24),Pr((s-o)/.45)):0;return{locked:e,reach:c,visible:p,reveal:d,releaseElapsed:f,unlatch:u,hingeOpen:m,handFree:g,cuffDrop:y,release:e?0:Pr((o-n)/.85),strain:e&&l>.45&&l<.86?Math.sin(l*64)*.003:0,openLaptop:h}},reset(){e=!0,t=-1/0,n=-1/0,r=!1,s=-1/0}}}function Tm(i,e,t,n=.43,r=.49){let s=new w().subVectors(e,i),o=s.length();s.normalize(),o>n+r-.015&&i.addScaledVector(s,o-(n+r-.015));let a=Math.max(.001,i.distanceTo(e)),l=qe.clamp((n*n-r*r+a*a)/(2*a),-n,n),c=new w(.55,-1,.08).addScaledVector(s,-new w(.55,-1,.08).dot(s)).normalize();return t.copy(i).addScaledVector(s,l).addScaledVector(c,Math.sqrt(Math.max(0,n*n-l*l))),t}function Rm(i,e){let r=new Rt,s=new Float32Array(609*3),o=[];for(let E=1;E<=20;E++)for(let R=1;R<=28;R++){let b=E*29+R;o.push(b,b-28-2,b-1,b,b-28-1,b-28-2)}r.setAttribute("position",new rn(s,3).setUsage(gn)),r.setIndex(o);let a=new ot(r,i);a.name="Full curved forearm",a.castShadow=a.receiveShadow=!0,a.frustumCulled=!1;let l=r.clone(),c=new ot(l,e);c.name="Forearm ink silhouette",c.raycast=()=>{},c.frustumCulled=!1,a.add(c);let h=new Ma,f=new w,u=new w,m=new w,g=new w,y=new w,p=new w,d=new w,M=[[0,.076,.061],[.18,.081,.063],[.4,.073,.055],[.65,.059,.043],[.8,.047,.033],[1,.038,.026]];function x(E,R,b){f.set(0,0,1).applyQuaternion(b),h.v0.copy(E),h.v1.lerpVectors(E,R,.31),h.v1.x+=.018,h.v3.copy(R).addScaledVector(f,.075),h.v2.copy(h.v3).addScaledVector(f,.065),p.set(1,0,0).applyQuaternion(b);for(let O=0;O<=20;O++){let v=O/20;v<.8?(h.getPoint(v/.8,u),h.getTangent(v/.8,m)):(u.copy(R).addScaledVector(f,.075*(1-v)/.2),m.copy(f).negate()),g.copy(p).addScaledVector(m,-p.dot(m)).normalize(),y.crossVectors(g,m).normalize();let S=M.findIndex(F=>F[0]>=v),H=M[Math.max(0,S-1)],G=M[S],Y=H===G?0:qe.smoothstep(v,H[0],G[0]),j=qe.lerp(H[1],G[1],Y),W=qe.lerp(H[2],G[2],Y);for(let F=0;F<=28;F++){let se=F/28*Math.PI*2;d.copy(u).addScaledVector(g,Math.cos(se)*j).addScaledVector(y,Math.sin(se)*W),d.toArray(s,(O*29+F)*3)}}r.attributes.position.needsUpdate=!0,r.computeVertexNormals();let T=r.attributes.normal,I=l.attributes.position;for(let O=0;O<I.count;O++)I.setXYZ(O,s[O*3]+T.getX(O)*.0015,s[O*3+1]+T.getY(O)*.0015,s[O*3+2]+T.getZ(O)*.0015);I.needsUpdate=!0}return{mesh:a,update:x}}function Am(i,e){let t=i.geometry,n=t.attributes.position,r=t.clone(),s=r.attributes.position,o=1.9/e;for(let l=0;l<s.count;l++){let c=n.getX(l),h=n.getY(l),f=n.getZ(l),u=Math.max(0,-f)*o;f>=0||s.setXYZ(l,c,h*Math.cos(u)-(1-Math.cos(u))/o,-Math.sin(u)/o-h*Math.sin(u))}r.computeVertexNormals(),t.morphAttributes.position=[s],t.morphAttributes.normal=[r.attributes.normal],i.updateMorphTargets();let a=i.children.find(l=>l.name==="Ink silhouette");if(a){let l=s.clone(),c=r.attributes.normal;for(let h=0;h<l.count;h++)l.setXYZ(h,s.getX(h)+c.getX(h)*.002,s.getY(h)+c.getY(h)*.002,s.getZ(h)+c.getZ(h)*.002);a.geometry.morphAttributes.position=[l],a.updateMorphTargets()}return l=>{i.morphTargetInfluences[0]=qe.clamp(l,0,1),a&&(a.morphTargetInfluences[0]=i.morphTargetInfluences[0])}}var Cm=new w(0,1,0);function Pm(i,e={}){let t=new ve;t.name="Player forearm chained to the rear pipes";let n=new ve;n.name="Camera-relative reaching hand",t.add(n);let r=Sm(e),s=new en(1,Ie.mobile?12:24,Ie.mobile?8:16),o=new Oe({color:13871751,roughness:.86,metalness:0,emissive:6832947,emissiveIntensity:.025}),a=new mt({color:2104345,side:Tn}),l=fi(10857122),c=fi(12568e3),h=new Oe({color:1382166,roughness:.9}),f=fi(9872814);f.map=null,f.metalnessMap=null,f.metalness=.86,f.roughness=.66,f.bumpScale=35e-5;let u=new Oe({color:11517381,metalness:.92,roughness:.29}),m=new mt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function g(nt,it,tt=n){let at=new ot(nt,it);return at.castShadow=!0,at.receiveShadow=!0,tt.add(at),at}function y(nt,it,tt,at=o){let ft=g(s,at,nt);return ft.position.set(...it),ft.scale.set(...tt),ft}function p(nt,it,tt,at,ft){it=new w(...it),tt=new w(...tt);let Ve=tt.clone().sub(it),Mt=g(new Ut(at,at,Ve.length(),20),ft,nt);return Mt.position.copy(it).add(tt).multiplyScalar(.5),Mt.quaternion.setFromUnitVectors(Cm,Ve.normalize()),Mt}function d(nt,it,tt,at){return g(new un(new Yt(it.map(ft=>new w(...ft))),24,tt,7,!1),at,nt)}let M=new ve;M.name="Cartoon forearm and right hand",n.add(M);function x(nt,it=.002){let tt=nt.geometry.clone(),at=tt.attributes.position,ft=tt.attributes.normal;for(let Mt=0;Mt<at.count;Mt++)at.setXYZ(Mt,at.getX(Mt)+ft.getX(Mt)*it,at.getY(Mt)+ft.getY(Mt)*it,at.getZ(Mt)+ft.getZ(Mt)*it);at.needsUpdate=!0,tt.computeBoundingSphere();let Ve=new ot(tt,a);Ve.name="Ink silhouette",Ve.raycast=()=>{},nt.add(Ve)}function E(nt,it,tt=28){let at=it.map(([kt,P,te,he,de])=>({z:kt,x:P,y:te,rx:he,ry:de})),ft=[],Ve=[],Mt=[];for(let kt=0;kt<at.length;kt++){let P=at[kt];for(let te=0;te<=tt;te++){let he=te/tt*Math.PI*2,de=Math.cos(he),ie=Math.sin(he);if(ft.push(P.x+P.rx*de,P.y+P.ry*ie,P.z),Ve.push(te/tt,kt/(at.length-1)),kt&&te){let He=kt*(tt+1)+te;Mt.push(He,He-tt-2,He-1,He,He-tt-1,He-tt-2)}}}let yn=new Rt;yn.setAttribute("position",new ut(ft,3)),yn.setAttribute("uv",new ut(Ve,2)),yn.setIndex(Mt),yn.computeVertexNormals();let Wt=g(yn,o,nt);return x(Wt),Wt}let R=E(M,[[0,0,0,.097,.078],[-.18,.004,0,.099,.077],[-.42,.008,.003,.092,.073],[-.7,.006,.002,.084,.066],[-1,0,0,.076,.061]],40);R.name="Upper arm";let b=y(M,[0,0,0],[.076,.061,.068]);b.name="Bent elbow";let T=Rm(o,a);M.add(T.mesh);let I=new dt,O=new ve;O.name="Cartoon right hand",M.add(O);let v=new gt;v.name="Saw contact above wrist",v.position.set(0,.044,.095),O.add(v);let S=new gt;S.name="Mug handle contact",S.position.set(0,-.036,-.145),O.add(S),E(O,[[.025,0,0,.037,.025],[0,0,0,.04,.026],[-.03,-.005,0,.059,.036],[-.066,-.005,0,.071,.04],[-.108,-.002,-.002,.071,.037],[-.14,.002,-.003,.065,.031],[-.16,.004,-.004,.051,.022],[-.17,.004,-.004,.006,.004]],40);let H=[],G=[];for(let[nt,it,tt,at]of[[0,-.056,.12,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.06,.1,-.23]]){let ft=new ve;ft.position.set(it,-.002,-.137+(nt===3?.013:0)),ft.rotation.y=at,O.add(ft),H.push(ft);let Ve=nt===3?.0175:.02,Mt=E(ft,[[.014,0,0,Ve*.92,Ve*.9],[0,0,0,Ve,Ve],[-tt*.22,0,-.002,Ve,Ve*.98],[-tt*.48,0,-.005,Ve*.96,Ve*.94],[-tt*.7,0,-.009,Ve*.92,Ve*.9],[-tt*.84,0,-.012,Ve*.86,Ve*.84],[-tt*.94,0,-.014,Ve*.64,Ve*.64],[-tt*.985,0,-.014,Ve*.3,Ve*.3],[-tt,0,-.014,3e-4,3e-4]]);Mt.name=`Finger ${nt+1}`,G.push(Am(Mt,tt)),ft.userData.spread=at}let Y=new gt;Y.name="Lid contact fingertip",Y.position.set(0,-.014,-.136),H[1].add(Y);let j=new ve;j.position.set(-.049,-.008,-.041),j.rotation.y=.88,j.rotation.z=-.26,O.add(j),E(j,[[.018,0,0,.033,.03],[0,0,0,.032,.03],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.02],[-.101,-.006,0,.012,.012],[-.107,-.006,0,3e-4,3e-4]]);let W=new ve;W.name="Wrist cuff and chain \u2014 right-click to detach",W.userData.playerChain=!0,n.add(W);let F=new ve;F.name="Close-fitting oval wrist cuff",W.add(F);let se=new w(0,0,.033),le=-.056;function N(nt,it,tt){let at=new St;at.absellipse(0,0,.061,.049,nt,it,!1),at.lineTo(Math.cos(it)*.05,Math.sin(it)*.038),at.absellipse(0,0,.05,.038,it,nt,!0),at.closePath();let ft=new sn(at,{depth:.044,bevelEnabled:!0,bevelSize:6e-4,bevelThickness:6e-4,bevelSegments:2,curveSegments:28}),Ve=g(ft,f,tt);Ve.position.z=-.022;for(let Mt of[0,.044]){let yn=Array.from({length:25},(kt,P)=>{let te=nt+(it-nt)*P/24;return[.0608*Math.cos(te),.0488*Math.sin(te),Mt]}),Wt=d(Ve,yn,.0016,u);Wt.name="Polished shackle rim"}return Ve}let ee=N(Math.PI,Math.PI*2,F);ee.name="Fixed lower cuff";let Q=new ve;Q.name="Hinged upper cuff",Q.position.x=le,F.add(Q);let oe=N(0,Math.PI,Q);oe.position.x=-le,p(F,[le,0,-.03],[le,0,.03],.008,u);for(let nt of[-.029,.029])y(F,[le,0,nt],[.009,.009,.003],u);g(new wt(.021,.027,.043),f,F).position.set(.064,-.01,0);let ne=new ve;ne.name="Spring-loaded locking clip",ne.position.set(.064-le,.012,0),Q.add(ne),g(new wt(.013,.027,.036),u,ne).position.set(.003,-.008,0),y(F,[.064,-.006,-.0225],[.0038,.0038,.001],h),g(new wt(.003,.008,.0015),h,F).position.set(.064,-.011,-.0225);for(let nt of[-.015,.015])y(ne,[.01,-.007,nt],[.002,.003,.003],u);let V=g(new Qt(.014,.0048,8,24),u,F);V.name="Welded chain attachment",V.position.set(.076,-.019,0),V.rotation.y=Math.PI/2;let ue=g(new Ut(.078,.078,.08,16),m,F);ue.rotation.x=Math.PI/2,ue.castShadow=!1;let we=new ve;we.name="Rusted rear pipe anchoring the wrist chain",t.add(we),d(we,[[3.3,.13,4.16],[3.3,.42,4.16],[3.3,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,l);for(let nt of[.3,1.25,2.08]){g(new wt(.2,.16,.025),l,we).position.set(3.3,nt,4.37);for(let at of[3.23,3.37]){p(we,[at,nt,4.35],[at,nt,4.14],.008,c);let ft=g(new Ut(.017,.017,.018,6),c,we);ft.rotation.x=Math.PI/2,ft.position.set(at,nt,4.12)}let tt=g(new Qt(.058,.01,8,32),c,we);tt.rotation.x=Math.PI/2,tt.position.set(3.3,nt,4.16)}let Ue=new w(3.3,2.08,4.1),K=new w,L=g(new Qt(.055,.009,8,24),c,we);L.name="Raised wrist-chain pipe anchor",L.position.copy(Ue),L.rotation.y=Math.PI/2;let fe=[];for(let nt=0;nt<48;nt++){let it=nt/48*Math.PI*2;fe.push(new w(Math.cos(it)*.017,Math.sin(it)*.028,0))}let _e=new un(new Yt(fe,!0),Ie.mobile?12:32,.0055,Ie.mobile?4:6,!0),ye=new hn(_e,u,180);ye.name="Heavy interlocking wrist chain",ye.castShadow=!0,ye.receiveShadow=!0,ye.frustumCulled=!1,W.add(ye);let Ee=new hn(new en(1,8,6),m,180);Ee.frustumCulled=!1,W.add(Ee);let De=new w,Ae=new w,U=new w,A=new w,re=new w,Se=new w,Pe=new gt,Ce=new w(.29,-.36,-.73),Ze=new w(.45,-.65,-.5),be=new w(.15,-.31,-.77),Ne=new w(-.08,-.32,-.83),Je=new w,Le=new w(.43,-.66,-.54),J=new w(.22,-.68,-.58),me=new w(.12,-.34,-.05),Me=new w(0,0,-1),ge=new w,xe=new w,ae=new w,Be=new dt,$=new dt,Re=!1,ce=new w,Te=new w,ze=new w,Ge=new w,ht=new dt,At=new dt,zt=3,Tt=new w(1,0,0),Gt=Array.from({length:49},()=>new w);function fn(nt,it,tt){return tt.copy(A).lerp(K,nt),tt.addScaledVector(Tt,Math.sin(Math.PI*nt)*it),tt.y-=Math.sin(Math.PI*nt)*it*.9,Je.copy(tt),n.localToWorld(Je),Je.y=Math.max(.032,Je.y),n.worldToLocal(Je),tt.copy(Je),tt}function vn(){let nt=0,it=1.5;for(let Ve=0;Ve<9;Ve++){let Mt=(nt+it)/2,yn=0;for(let Wt=0;Wt<Gt.length;Wt++)fn(Wt/(Gt.length-1),Mt,Gt[Wt]),Wt&&(yn+=Gt[Wt].distanceTo(Gt[Wt-1]));yn>zt?it=Mt:nt=Mt}let tt=new Yt(Gt),at=tt.getLength(),ft=Math.min(180,Math.max(2,Math.ceil(at/.043)));ye.count=Ee.count=ft;for(let Ve=0;Ve<ft;Ve++){let Mt=Ve/(ft-1);tt.getPointAt(Mt,Pe.position),tt.getTangentAt(Mt,Se),Pe.quaternion.setFromUnitVectors(Cm,Se),Ve%2&&Pe.rotateY(Math.PI/2),Pe.scale.set(1,1,1),Pe.updateMatrix(),ye.setMatrixAt(Ve,Pe.matrix),Pe.scale.set(.032,.026,.032),Pe.updateMatrix(),Ee.setMatrixAt(Ve,Pe.matrix)}ye.instanceMatrix.needsUpdate=!0,Ee.instanceMatrix.needsUpdate=!0}function gr(nt,it=!1,tt=!1,at=null,ft=0){let Ve=r.sample(nt,tt),Mt=Ve.reach;n.position.copy(i.position),n.quaternion.copy(i.quaternion);let yn=Math.tan(qe.degToRad(i.fov/2))/Math.tan(qe.degToRad(62/2));if(n.scale.set(yn,yn,1),n.updateWorldMatrix(!0,!1),n.visible=Ve.visible,M.visible=Ve.locked,!Ve.visible)return Ve.openLaptop;K.copy(Ue),n.worldToLocal(K);let Wt=at?at.reveal:it?1:Ve.reveal,kt=(1-Wt)*.55;De.copy(Ce).lerp(Ve.locked?be:Ne,Mt),De.y+=ft*.18,De.x-=ft*.12,Ve.locked&&(De.y+=it?0:Ve.strain),Ae.copy(Ze).lerp(Ve.locked?Le:J,Mt);let P=!Ve.locked&&Ve.releaseElapsed<1.8&&Re,te=it&&!Ve.locked?1:Ve.hingeOpen,he=it&&!Ve.locked?1:Ve.cuffDrop;if(P){De.copy(ge),Ae.copy(ae);let de=it?1:Ve.handFree;De.y+=de*.055,De.z+=de*.025}if(De.y-=kt,Ae.y-=kt,re.copy(Ae).sub(De).setLength(.35),Ae.copy(De).add(re),U.copy(Ae).add(me),R.position.copy(U),re.copy(Ae).sub(U),R.quaternion.setFromUnitVectors(Me,re.clone().normalize()),R.scale.z=re.length(),re.copy(De).sub(Ae),I.setFromUnitVectors(Me,re.clone().normalize()),b.position.copy(Ae),b.quaternion.copy(I),O.position.copy(De),O.quaternion.copy(I),O.rotateX(-.12+Mt*.08),O.rotateY(.13-Mt*.06),O.rotateZ(-.04),P&&O.quaternion.slerp(Be,1-Ve.handFree),H.forEach((de,ie)=>{de.rotation.x=-.06+(1-Mt)*(.11+ie*.015)}),j.rotation.x=0,j.rotation.y=.88,j.rotation.z=-.26,G.forEach(de=>de(0)),at){let de=at.blend,ie=at.grip,He=at.gripKind==="handle";H.forEach((We,Xe)=>{We.rotation.x=qe.lerp(We.rotation.x,(He?-.16:-.46)+(Xe===0?.08:0),ie),We.rotation.y=qe.lerp(We.userData.spread,We.userData.spread*.3,ie)}),j.rotation.x=(He?.42:.28)*ie,j.rotation.y=.88-(He?.58:.28)*ie,He&&(G.forEach(We=>We(ie)),j.rotation.z=-.26+.18*ie),H[1].updateMatrix(),He?Te.copy(S.position):Te.copy(Y.position).applyMatrix4(H[1].matrix),At.copy(i.quaternion).invert(),ht.copy(At).multiply(at.quaternion),ce.copy(at.position),n.worldToLocal(ce),ze.copy(ce).sub(Te.applyQuaternion(ht)),O.position.lerp(ze,de),O.quaternion.slerp(ht,de),De.copy(O.position),U.set(.34,-.66-kt,-.09),Tm(U,De,Ge),Ae.lerp(Ge,de),R.position.copy(U),re.copy(Ae).sub(U),R.quaternion.setFromUnitVectors(Me,re.clone().normalize()),R.scale.z=re.length(),re.copy(De).sub(Ae),I.setFromUnitVectors(Me,re.clone().normalize()),b.position.copy(Ae),b.quaternion.copy(I)}else H.forEach(de=>{de.rotation.y=de.userData.spread});return T.update(Ae,O.position,O.quaternion),Ve.locked?(F.position.copy(se).applyQuaternion(O.quaternion).add(De),F.quaternion.copy(O.quaternion),Q.rotation.z=0,ne.rotation.z=0):(F.position.copy(xe),F.position.y-=kt+he*.32,F.position.x+=he*.08,F.quaternion.copy($),F.rotateX(he*.8),F.rotateZ(he*.42),Q.rotation.z=te*1.95,ne.rotation.z=-(it?1:Ve.unlatch)*.85),F.updateMatrix(),A.copy(V.position).applyMatrix4(F.matrix),zt=A.distanceTo(K)+(Ve.locked?.24*(1-Mt)+.018:.42),vn(),Ve.openLaptop}function Ti(nt){if(!r.locked)return!1;ge.copy(De),ae.copy(Ae),Be.copy(O.quaternion),$.copy(F.quaternion),xe.copy(F.position),Re=!0;let it=r.detach(nt);return it&&(M.visible=!1),it}function Mn(){r.reset(),Re=!1,Q.rotation.z=0,ne.rotation.z=0,gr(0,!0)}return gr(0,!0),{group:t,target:W,state:r,update:gr,reset:Mn,getSawContact:nt=>v.getWorldPosition(nt),endReach:()=>r.endReach(),setEnvironment(nt){for(let it of[l,c,f,u])it.envMap=nt,it.envMapIntensity=it===u?1.65:1.15,it.needsUpdate=!0},get locked(){return r.locked},requestReach:nt=>r.requestReach(nt),detach:Ti}}function Im(i,{canDetach:e=()=>!0,onBlocked:t=()=>{}}={}){let n=document.querySelector("#chain-menu"),r=n.querySelector("button"),s=document.querySelector("#scene");function o(c=!1){n.hidden=!0,c&&s.focus({preventScroll:!0})}function a(c,h){r.setAttribute("aria-disabled",String(!e())),r.title=e()?"Unlock the shackle with the key":"Find the shackle key first",n.hidden=!1,n.style.left=`${Math.max(8,Math.min(c,innerWidth-n.offsetWidth-8))}px`,n.style.top=`${Math.max(8,Math.min(h,innerHeight-n.offsetHeight-8))}px`,r.focus({preventScroll:!0})}function l(){if(!e()){t();return}o(!0),i()}return r.addEventListener("click",l),n.addEventListener("contextmenu",c=>c.preventDefault()),document.addEventListener("pointerdown",c=>{!n.hidden&&!n.contains(c.target)&&o()},!0),document.addEventListener("keydown",c=>{n.hidden||(c.code==="Escape"?(c.preventDefault(),c.stopPropagation(),o(!0)):c.code==="KeyB"&&c.altKey&&c.metaKey&&!c.ctrlKey&&!c.shiftKey&&(c.preventDefault(),c.stopPropagation(),c.repeat||l()))},!0),window.addEventListener("blur",()=>o()),{show:a,hide:o,get active(){return!n.hidden}}}function Lm(i,e){let t=i.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[],n=[],r=.1;for(let s of t){let o=s.replace(/[^\p{L}\p{N}'’]/gu,""),a=(o.toLowerCase().replace(/e$/,"").match(/[aeiouy]+/g)||[]).length,l=Math.max(1,Math.min(4,a)),c=.24+Math.min(o.length,10)*.025+(l-1)*.09;for(let h=0;h<l;h++){let f=c/l;n.push({start:r+h*f,end:r+(h+.87)*f,amount:.78+Math.min(o.length,6)*.025})}r+=c+(/[.!?…]/u.test(s)?.4:/[,;:]/.test(s)?.24:.11)}return{startTime:e,cues:n,duration:r}}function Dm(i,e){if(!i)return 0;let t=e-i.startTime;for(let n of i.cues){if(t<n.start)return 0;if(t<=n.end){let r=(t-n.start)/(n.end-n.start),s=Math.min(1,r/.22),o=Math.min(1,(1-r)/.35),a=Math.min(s,o);return n.amount*a*a*(3-2*a)}}return 0}var Kd={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36},CE=i=>qe.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Um(i){let e=new w(...Kd.position),t=new w(...Kd.lookAt).sub(e).normalize(),n={yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(t.y),zoom:Kd.fov/i},r=null;return{start(s,o,a){r={time:s,position:o.clone(),yaw:a.yaw,pitch:a.pitch,zoom:a.zoom}},cancel(){r=null},get active(){return r!==null},update(s,o,a,l=!1){if(!r)return;let c=l?1:qe.clamp((s-r.time)/1.4,0,1),h=c*c*(3-2*c);o.lerpVectors(r.position,e,h),a.yaw=r.yaw+CE(n.yaw-r.yaw)*h,a.pitch=qe.lerp(r.pitch,n.pitch,h),a.zoom=qe.lerp(r.zoom,n.zoom,h),c===1&&(o.copy(e),Object.assign(a,n),r=null)}}}var Ir=(i,e,t)=>qe.smootherstep(i,e,t),Hm=i=>qe.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Nm({laptop:i,restraint:e,cameraPosition:t,state:n}){let r=null,s=new w,o=new w,a=new w,l=new w,c=new dt,h=new dt,f=new ci,u=0,m=0,g=1,y=0,p=0,d={position:new w,quaternion:new dt,blend:0,grip:0,reveal:0};function M(R){return r!==null||e.locked||i.isOpen||!e.requestReach(R)?!1:(r=R,s.copy(t),u=n.yaw,m=n.pitch,g=n.zoom??1,i.object.updateWorldMatrix(!0,!1),i.object.localToWorld(o.set(.16,.78,1)),i.object.localToWorld(a.set(0,.32,-.02)),l.copy(a).sub(o).normalize(),y=Math.atan2(-l.x,-l.z),p=Math.asin(l.y),d.blend=d.grip=d.reveal=0,!0)}function x(R,b=!1){if(r===null)return!1;let T=R-r;if(b)return i.setOpenProgress(1),e.endReach(),r=null,!0;let I=Ir(T,0,.7)*(1-Ir(T,2.7,3.4));t.lerpVectors(s,o,I),n.zoom=qe.lerp(g,1,I),n.yaw=Hm(u+Hm(y-u)*I),n.pitch=qe.lerp(m,p,I);let O=Ir(T,.96,2.21);return i.setOpenProgress(O),i.getLidGrip(d.position),i.object.getWorldQuaternion(c),h.setFromEuler(f.set(-.1-.28*O,0,-.1)),d.quaternion.copy(c).multiply(h),d.blend=Ir(T,0,.8)*(1-Ir(T,2.38,3.02)),d.grip=Ir(T,.7,.92)*(1-Ir(T,2.21,2.38)),d.reveal=Ir(T,0,.18)*(1-Ir(T,2.64,3.12)),T<3.4?!1:(t.copy(s),n.yaw=u,n.pitch=m,n.zoom=g,e.endReach(),r=null,!0)}function E(){r!==null&&(t.copy(s),n.yaw=u,n.pitch=m,n.zoom=g,e.endReach(),r=null)}return{start:M,update:x,cancel:E,get active(){return r!==null},get handPose(){return r===null?null:d}}}var Fm=i=>qe.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Om({position:i,state:e,getView:t}){let n=null,r=null,s=new w,o=new w,a=new w,l=()=>({position:i.clone(),yaw:e.yaw,pitch:e.pitch,zoom:e.zoom});function c(g,y,p){r={from:l(),to:g,time:y,returning:p}}function h(g){n||(n=l()),t(s,o),a.subVectors(o,s).normalize(),c({position:s.clone(),yaw:Math.atan2(-a.x,-a.z),pitch:Math.asin(a.y),zoom:.9},g,!1)}function f(g){n&&c(n,g,!0)}function u(){n=null,r=null}function m(g,y=!1){if(!r)return;let p=y?1:qe.smootherstep(g-r.time,0,.85),{from:d,to:M,returning:x}=r;i.lerpVectors(d.position,M.position,p),e.yaw=Fm(d.yaw+Fm(M.yaw-d.yaw)*p),e.pitch=qe.lerp(d.pitch,M.pitch,p),e.zoom=qe.lerp(d.zoom,M.zoom,p),p===1&&(r=null,x&&(n=null))}return{start:h,restore:f,cancel:u,update:m,get active(){return n!==null}}}function zm({saw:i,camera:e,restraint:t,hasKey:n}){let r=i.position.clone(),s=i.quaternion.clone(),o=new w,a=new dt,l=new w,c=new w,h=new w,f=new dt,u=new dt,m=new dt,g=new dt().setFromEuler(new ci(Math.PI/2,Math.PI,.16,"ZYX")),y=new w,p=null,d=!1,M=0;function x(b){return n()||!t.locked||p!==null?!1:(i.getWorldPosition(o),i.getWorldQuaternion(a),t.requestReach(b),p=b,!0)}function E(b,T=!1){if(p===null||d)return!1;let I=b-p;if(T)M=qe.smootherstep(I,.55,1.1);else{let O=qe.smootherstep(I,0,1.25),v=I<1.4?0:Math.sin((I-1.4)*Math.PI*6)*.085*qe.smoothstep(I,1.4,1.7);t.getSawContact(l),u.copy(e.quaternion).multiply(g),h.set(-.06,0,.07).applyQuaternion(u),c.copy(l).sub(h),y.set(1,0,0).applyQuaternion(e.quaternion),c.addScaledVector(y,v),i.position.lerpVectors(o,c,O),i.parent.worldToLocal(i.position),f.slerpQuaternions(a,u,O),i.parent.getWorldQuaternion(m),i.quaternion.copy(m.invert()).multiply(f),M=qe.smootherstep(I,2.75,3.55)}return I<(T?1.2:3.65)?!1:(d=!0,M=1,t.endReach(),!0)}function R(){p=null,d=!1,M=0,i.position.copy(r),i.quaternion.copy(s),t.endReach()}return{start:x,update:E,reset:R,armLift:(b,T=!1)=>p===null||T?0:qe.smootherstep(b-p,.24,.95),get active(){return p!==null&&!d},get finished(){return d},get blackout(){return M}}}function Jd(i){let e=[];for(let r=0;r<64;r++){let s=r/64*Math.PI*2,o=r%17===0?.79:r%23===0?1.1:1,a=(73+7*Math.sin(s*5+i)+4*Math.sin(s*11+i*.7))*o;e.push([Math.cos(s)*a,Math.sin(s)*a])}let t=(r,s)=>`${((r[0]+s[0])/2).toFixed(2)},${((r[1]+s[1])/2).toFixed(2)}`,n="M"+t(e.at(-1),e[0]);return e.forEach((r,s)=>{let o=e[(s+1)%e.length];n+=`Q${r[0].toFixed(2)},${r[1].toFixed(2)} ${t(r,o)}`}),n+"Z"}function Bm(i){let e=`mug-blood-${i}`,t=Jd(i*3.7+1),r=[[-36,235,5],[-12,315,8],[19,195,4],[43,275,6]].map(([s,o,a],l)=>{s+=i?7-l*3:0;let c=(l%2?1:-1)*9;return`<path d="M ${s-a} -8 C ${s-a+4} 48,${s+c-a} ${o*.55},${s+c-a*.6} ${o-14} C ${s+c-a*1.6} ${o+7},${s+c+a*1.6} ${o+7},${s+c+a*.6} ${o-14} C ${s+c+a} ${o*.55},${s+a-3} 48,${s+a} -8 Z"/>`}).join("");return`<div class="eye-wound">
  <svg class="blood-streaks" viewBox="-100 0 200 330" preserveAspectRatio="none"><defs><linearGradient id="${e}-drip" x2=".3" y2="1"><stop stop-color="#9e0013"/><stop offset=".65" stop-color="#bc1021"/><stop offset="1" stop-color="#69000e"/></linearGradient></defs><g fill="url(#${e}-drip)">${r}</g></svg>
  <svg class="wound-mark" viewBox="-100 -100 200 200"><defs><radialGradient id="${e}"><stop stop-color="#76000c"/><stop offset=".48" stop-color="#d91525"/><stop offset=".82" stop-color="#b00618"/><stop offset="1" stop-color="#63000d"/></radialGradient></defs>
   <path d="${t}" fill="url(#${e})"/>
   <path d="${Jd(i+5)}" transform="scale(.69 .76) rotate(${i?21:-13})" fill="#dd1c2a" opacity=".3"/>
   <path d="${Jd(i+8)}" transform="scale(.22 .27) rotate(31)" fill="#65000e" opacity=".55"/>
   <g fill="#b6081b"><circle cx="-82" cy="-31" r="3"/><circle cx="49" cy="-80" r="2.6"/><circle cx="81" cy="20" r="4"/><circle cx="-33" cy="82" r="2.7"/></g>
  </svg>
 </div>`}function km(i){i.innerHTML=Bm(0)+Bm(1);function e(){i.hidden=!0,i.style.opacity="0";for(let n of["--eye-scale","--drip-length","--drip-width","--drip-opacity"])i.style.removeProperty(n)}function t(n,r){i.hidden=n.eyeImpact<=0||r>=1,!i.hidden&&(i.style.opacity=String(n.eyeImpact),i.style.setProperty("--eye-scale",String(.035+1.115*n.eyeGrowth)),i.style.setProperty("--drip-length",String(n.eyeDrip)),i.style.setProperty("--drip-width",String(.12+.88*n.eyeGrowth)),i.style.setProperty("--drip-opacity",String(Math.min(1,n.eyeDrip*5))))}return e(),{update:t,reset:e}}var wi=(i,e,t)=>qe.smootherstep(i,e,t);function Vm({mug:i,camera:e,restraint:t}){let n=i.position.clone(),r=i.quaternion.clone(),s=new w,o=new dt,a=new w,l=new dt,c=new w,h=new w,f=new w,u=new w,m=new dt,g=new dt,y=new dt,p=new dt,d=new dt().setFromAxisAngle(new w(0,1,0),Math.PI),M=new dt().setFromAxisAngle(new w(0,0,1),-Math.PI/2),x=i.getObjectByName("Mug handle grip"),E=["Mug left ear tip","Mug right ear tip"].map(N=>i.getObjectByName(N)),R=new w,b=new w,T=new w,I=new w,O=new w,v={position:new w,quaternion:new dt,blend:0,grip:0,reveal:0,gripKind:"handle"},S=null,H=!1,G=0,Y=0,j=0,W=0;function F(N){if(t.locked||S!==null||H||!t.requestReach(N))return!1;i.updateWorldMatrix(!0,!1),i.getWorldQuaternion(o),e.updateWorldMatrix(!0,!1),e.getWorldPosition(a),e.getWorldQuaternion(l),u.set(0,-.22,-.12).applyQuaternion(l),R.set(0,0,0),I.set(0,0,0),E.forEach((k,ne)=>{k.getWorldPosition(b),i.worldToLocal(b),R.add(b),I.addScaledVector(b,ne?1:-1)}),R.multiplyScalar(.5),i.getWorldScale(O),s.copy(R),i.localToWorld(s),p.setFromAxisAngle(new w(1,0,0),.82),g.copy(p).multiply(d),I.multiply(O).applyQuaternion(g);let ee=e.projectionMatrix.elements,Q=Math.max(e.near*1.35,Math.abs(I.x)*.5*ee[0]/.6);function oe(k,ne){return ne.set(0,.08*k/ee[5],-k).applyQuaternion(l).add(a)}return oe(Q+.3,c),oe(Q,h),S=N,G=Y=j=W=0,v.blend=v.grip=v.reveal=0,!0}function se(N,ee=!1){if(S===null||H)return!1;let Q=N-S;if(ee){if(Y=wi(Q,.15,.2),j=.12*wi(Q,.2,.65),W=0,G=wi(Q,.65,1.15),Q<1.25)return!1}else{let oe=wi(Q,.82,2.12),k=wi(Q,2.28,4.05);if(p.setFromAxisAngle(new w(1,0,0),.82*k),g.copy(l).multiply(p).multiply(d),m.slerpQuaternions(o,g,oe),f.lerpVectors(c,h,k).lerp(s,1-oe),f.y+=Math.sin(Math.PI*oe)*.08,T.copy(R).multiply(O).applyQuaternion(m),f.sub(T),f.addScaledVector(u,wi(Q,4.4,4.85)),i.position.copy(f),i.parent.worldToLocal(i.position),i.parent.getWorldQuaternion(y),i.quaternion.copy(y.invert()).multiply(m),i.updateWorldMatrix(!0,!1),x.getWorldPosition(v.position),v.quaternion.copy(m).multiply(d).multiply(M),v.blend=wi(Q,0,.72),v.grip=wi(Q,.48,.8),v.reveal=wi(Q,0,.22),Y=wi(Q,4.05,4.11),j=wi(Q,4.11,6.35),W=wi(Q,4.2,5.65),G=wi(Q,6.45,7.2),Q<7.3)return!1}return H=!0,G=1,t.endReach(),!0}function le(){S=null,H=!1,G=Y=j=W=0,i.position.copy(n),i.quaternion.copy(r),i.updateWorldMatrix(!0,!1),v.blend=v.grip=v.reveal=0,t.endReach()}return{start:F,update:se,reset:le,get active(){return S!==null&&!H},get finished(){return H},get blackout(){return G},get eyeImpact(){return Y},get eyeGrowth(){return j},get eyeDrip(){return W},get handPose(){return S!==null&&!H?v:null}}}function Gm({canvas:i,state:e,keys:t,cancel:n,canInteract:r}){let s=new Map,o=0,a=1,l=!1,c=()=>{let[g,y]=[...s.values()];return Math.hypot(g.x-y.x,g.y-y.y)};i.addEventListener("pointerdown",g=>{g.pointerType!=="touch"||!r()||(s.set(g.pointerId,{x:g.clientX,y:g.clientY}),s.size===2&&(o=c(),a=e.zoom,l=!0,n(),g.stopImmediatePropagation()))},!0),i.addEventListener("pointermove",g=>{s.has(g.pointerId)&&(s.set(g.pointerId,{x:g.clientX,y:g.clientY}),l&&(g.stopImmediatePropagation(),s.size===2&&r()&&(e.zoom=Math.max(.6,Math.min(1.15,a*o/Math.max(1,c()))))))},!0);function h(g){s.has(g.pointerId)&&(s.delete(g.pointerId),l&&(g.stopImmediatePropagation(),s.size||(l=!1)))}i.addEventListener("pointerup",h,!0),i.addEventListener("pointercancel",h,!0);let f=document.createElement("div");f.id="touch-navigation";let u=document.createElement("button");u.type="button",u.textContent="Move",u.setAttribute("aria-expanded","false"),u.setAttribute("aria-label","Show movement controls"),f.append(u);let m=document.createElement("div");m.className="touch-pad",m.hidden=!0;for(let[g,y,p]of[["KeyQ","Lower camera","\u2193"],["KeyW","Move forward","\u25B2"],["KeyE","Raise camera","\u2191"],["KeyA","Move left","\u25C0"],["KeyS","Move backward","\u25BC"],["KeyD","Move right","\u25B6"]]){let d=document.createElement("button");d.type="button",d.textContent=p,d.setAttribute("aria-label",y),d.style.touchAction="none",d.addEventListener("pointerdown",M=>{M.preventDefault(),r()&&(n(),t.add(g),d.setPointerCapture(M.pointerId))});for(let M of["pointerup","pointercancel","lostpointercapture"])d.addEventListener(M,()=>t.delete(g));m.append(d)}return u.addEventListener("click",()=>{m.hidden=!m.hidden,u.setAttribute("aria-expanded",String(!m.hidden)),m.hidden&&t.clear()}),f.append(m),document.body.append(f),{reset(){s.clear(),l=!1,t.clear(),m.hidden=!0,u.setAttribute("aria-expanded","false")}}}function Wm(i,e,t){let n=document.createElement("canvas");n.width=n.height=64;let r=n.getContext("2d"),s=r.createRadialGradient(32,32,9,32,32,32);s.addColorStop(0,"rgba(0,0,0,.66)"),s.addColorStop(.65,"rgba(0,0,0,.30)"),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,64,64);let o=new Nt(n),a=new mt({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),l=new _t(1,1),c=new ve;c.name="Mobile floor contact shadows",c.userData.ignoreAcid=!0,i.add(c);let h=new Rn;function f(m){m.updateWorldMatrix(!0,!0),h.setFromObject(m);let g=h.getSize(new w),y=h.getCenter(new w),p=new ot(l,a);return p.rotation.x=-Math.PI/2,p.position.set(y.x,.017,y.z),p.scale.set(Math.max(.12,g.x*1.15),Math.max(.12,g.z*1.15),1),p.raycast=()=>{},c.add(p),p}for(let m of e)f(m);let u=f(t);return{update(){t.getWorldPosition(u.position),u.position.y=.017}}}function Xm(i,e=Ie){let t=new Set,n=new Set;i.traverse(r=>{if(r.isMesh){e.mobile&&r.geometry&&(r.geometry.boundingSphere||r.geometry.computeBoundingSphere(),r.geometry.boundingSphere.radius*Math.max(Math.abs(r.scale.x),Math.abs(r.scale.y),Math.abs(r.scale.z))<.08&&(r.castShadow=!1));for(let s of Array.isArray(r.material)?r.material:[r.material])if(!(!s||t.has(s))){t.add(s),e.mobile&&(s.isMeshPhysicalMaterial&&(s.clearcoat=0,s.transmission=0,s.sheen=0,s.iridescence=0,s.anisotropy=0),s.bumpMap=null,s.normalMap=null,s.clearcoatNormalMap=null,s.clearcoatRoughnessMap=null,s.transparent&&(s.forceSinglePass=!0));for(let o of Object.values(s))o?.isTexture&&n.add(o)}}});for(let r of n)e.mobile&&(r.anisotropy=Math.min(r.anisotropy,2));return{materials:t.size,textures:n.size}}function qm(i,e=Ie){if(!e.mobile)return;let t=new Map;function n(r){if(!r.isMeshStandardMaterial)return r;if(t.has(r))return t.get(r);let s=new Jr;Qi.prototype.copy.call(s,r);for(let o of["map","alphaMap","aoMap","aoMapIntensity","lightMap","lightMapIntensity","wireframe","wireframeLinewidth","fog"])s[o]=r[o];for(let o of["color","emissive","opacity","emissiveIntensity","visible"])Object.defineProperty(s,o,{configurable:!0,get:()=>r[o],set:a=>{r[o]=a}});return s.clippingPlanes=r.clippingPlanes,s.emissiveMap=r.emissiveMap,s.envMap=null,s.onBeforeCompile=r.onBeforeCompile,s.customProgramCacheKey=r.customProgramCacheKey,s.forceSinglePass=!0,t.set(r,s),s}i.traverse(r=>{r.material&&(r.material=Array.isArray(r.material)?r.material.map(n):n(r.material)),r.isLight&&!r.userData.mobileEssential&&(r.visible=!1)})}function Ym(i,{pause:e,resume:t,lowerQuality:n,status:r}){let s=!1,o;function a(h,f=!1){if(r.hidden=!1,r.textContent=h,f){let u=document.createElement("button");u.type="button",u.textContent="Retry with lighter graphics",u.addEventListener("click",()=>location.reload(),{once:!0}),r.append(document.createElement("br"),u)}}function l(h){h.preventDefault(),s=!0,e();try{sessionStorage.setItem("figsaw-safe-graphics","1")}catch{}a("Restoring graphics\u2026"),clearTimeout(o),o=setTimeout(()=>{s&&a("Graphics were interrupted. Your device may need a lighter scene.",!0)},8e3)}function c(){s&&(s=!1,clearTimeout(o),n(),r.hidden=!0,t())}return i.addEventListener("webglcontextlost",l),i.addEventListener("webglcontextrestored",c),{get lost(){return s},dispose(){clearTimeout(o),i.removeEventListener("webglcontextlost",l),i.removeEventListener("webglcontextrestored",c)}}}var Ul=document.querySelector("#loading-status"),Gl=async i=>{Ul&&(Ul.textContent=i),await new Promise(e=>setTimeout(e,0))},vt=document.querySelector("#scene"),PE=vt.getAttribute("aria-label"),ti=matchMedia("(prefers-reduced-motion: reduce)").matches,Ds={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62},Lr=new w(...Ds.position),Qd=new w(...Ds.lookAt).sub(Lr).normalize(),ts={yaw:Math.atan2(-Qd.x,-Qd.z),pitch:Math.asin(Qd.y)},$e={yaw:ts.yaw,pitch:ts.pitch,zoom:1,jaw:0,space:!1,time:0,talkUntil:0},Fn=new Kc({canvas:vt,antialias:!Ie.mobile,alpha:!1,powerPreference:Ie.mobile?"default":"high-performance"});Fn.setPixelRatio(Ie.pixelRatio);Fn.localClippingEnabled=!0;Fn.shadowMap.enabled=Ie.shadows;Fn.shadowMap.autoUpdate=!1;Fn.shadowMap.type=_d;Fn.outputColorSpace=yt;Fn.toneMapping=bd;Fn.toneMappingExposure=.76;var ii=new Qc;ii.background=new pt(1449240);ii.fog=new Jc(2305314,11,26);var za=F0(Fn,ii),Vt=new Xn(Ds.fov,1,.06,35),En=Lr.clone(),Nn=Um(Ds.fov),$m=new w,Zm=new w,jd=new w,lg=new ll(9545120,2370600,.62);lg.userData.mobileEssential=!0;ii.add(lg);var hg=17.5,ki=new Mo(12898992,hg,12,1.25,.72,2);ki.position.set(.22,2.83,-.55);ki.target.position.set(0,0,-.1);ki.castShadow=Ie.shadows;ki.shadow.mapSize.set(Ie.shadowSize,Ie.shadowSize);ki.shadow.camera.near=.1;ki.shadow.camera.far=11;ki.shadow.normalBias=.0025;ki.shadow.bias=-5e-5;ki.userData.mobileEssential=!0;ii.add(ki,ki.target);var Si=new hl(10269877,.85);Si.position.set(6.2,4.1,-1.6);Si.target.position.set(-1,.35,-.3);Si.castShadow=!Ie.mobile;Si.shadow.mapSize.set(1024,1024);Si.shadow.camera.left=-6;Si.shadow.camera.right=6;Si.shadow.camera.top=5;Si.shadow.camera.bottom=-5;Si.shadow.normalBias=.003;Si.shadow.bias=-6e-5;Si.userData.mobileEssential=!0;ii.add(Si,Si.target);var ug=new An(9348772,2.2,10,2);ug.position.set(-1,2.6,4);ii.add(ug);var Fi=qe.lerp;function dr(i,e=.9){return Ie.mobile?new Jr({color:i}):new Oe({color:i,roughness:e})}function kn(i,e,t=ii){let n=new ot(i,e);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),n}function ns(i,e,t,n,r=3){let s=kn(new al(1,Ie.mobile?Math.min(r,2):r),typeof e=="string"||typeof e=="number"?dr(e):e,i);return s.position.set(...t),s.scale.set(...n),s}function Ho(i,e,t,n,r=!1){let s=new Yt(i.map(o=>o.isVector3?o:new w(...o)),r);return kn(new un(s,Math.max(Ie.mobile?12:24,i.length*2),e,Ie.mobile?5:8,r),t,n)}function IE(){let i=document.createElement("canvas");i.width=i.height=Ie.mobile?512:1024;let e=i.getContext("2d"),t=2718,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=([c,h])=>[(c+2)/4*i.width,(1-h/3)*i.height];function s(c,h,f=["rgba(211,12,57,.66)","rgba(227,17,62,.50)"]){let u=c.map(r);e.lineCap="round",e.lineJoin="round";for(let m=0;m<3;m++){e.strokeStyle=f[m===0?0:1];for(let g=1;g<u.length;g++){let y=Math.sin(g*1.37+m)*.08+Math.sin(g*.42)*.1;e.lineWidth=h*i.width/4*(1+y)*(m===0?1.13:.77);let p=(n()-.5)*1.5,d=(n()-.5)*1.5;e.beginPath(),e.moveTo(u[g-1][0]+p,u[g-1][1]+d),e.lineTo(u[g][0]+p,u[g][1]+d),e.stroke()}}}let o=[];for(let c=0;c<=140;c++){let h=c/140,f=Fi(-1.65,1.23,h),u=.16*Math.exp(-Math.pow((f+1.65)/.26,2))+.06*Math.pow(Math.max(0,(f-.42)/.81),2);o.push([f,1.45-u+.006*Math.sin(h*12)])}s(o,.075,["rgba(23,25,24,.98)","rgba(23,25,24,.94)"]);let a=[];for(let c=0;c<=80;c++){let h=c/80;a.push([Fi(-.68,.42,h),1.452+.009*Math.sin(h*15)+.012*Math.sin(h*7)])}s(a,.18);for(let c of[-1,1]){let h=[],f=c===-1?-1.13:1.15,u=1.68;for(let m=0;m<=240;m++){let g=m/240,y=g*Math.PI*6.1,p=.017+g*.272+.003*Math.sin(g*39+c);h.push([f+Math.cos(y)*p,u+Math.sin(y)*p*.92+.003*Math.sin(g*43)])}s(h,.047)}e.globalCompositeOperation="destination-out";for(let c=0;c<14e3;c++){e.fillStyle=`rgba(0,0,0,${.08+n()*.48})`;let h=n()*i.width,f=n()*i.height;e.fillRect(h,f,.35+n()*1.2,.4+n()*1.8)}for(let c=0;c<1600;c++){e.strokeStyle=`rgba(0,0,0,${.05+n()*.17})`,e.lineWidth=.4+n()*.7;let h=n()*i.width,f=n()*i.height;e.beginPath(),e.moveTo(h,f),e.lineTo(h+2+n()*6,f+n()*2-1),e.stroke()}let l=new Nt(i);return l.colorSpace=yt,l.anisotropy=Math.min(Ie.mobile?2:8,Fn.capabilities.getMaxAnisotropy()),l}var LE=IE(),Wl=new Oe({color:13882826,roughness:.94});Wl.onBeforeCompile=i=>{i.uniforms.lipstickPaint={value:LE},i.vertexShader=`varying vec3 vStone;
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
 `)};var DE=dr(2104866,.98),UE=dr(7350072,.98),dg=new mt({color:525833,side:Pt}),Oi=new ve;Oi.name="Figsaw and tricycle";ii.add(Oi);var wn=new ve;wn.name="Figsaw\u2019s red tricycle";Oi.add(wn);var No=new Oe({color:13185848,roughness:.44,metalness:.28}),rs=new Oe({color:11449779,roughness:.34,metalness:.72}),Ua=new Oe({color:5462617,roughness:.46,metalness:.65}),fg=dr(8856619,.86),pf=dr(1514523,.93),pg=dr(2369317,.85);function fr(i,e,t,n,r){let s=new w(...e),o=new w(...t),a=o.clone().sub(s),l=kn(new Ut(n,n,a.length(),16),r,i);return l.position.copy(s).add(o).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new w(0,1,0),a.normalize()),l}var Xl=[];function mf(i,e,t,n,r){let s=new ve;s.position.set(i,e,t),s.rotation.y=Math.PI/2,s.name=r===8?"Large front wheel":"Small rear wheel",wn.add(s),s.userData.radius=n,Xl.push(s);let o=n>.7?.045:.033;kn(new Qt(n-o,o,12,80),pf,s),kn(new Qt(n-o*2,.018,10,80),Ua,s);for(let a of[-1,1]){let l=kn(new Qt(n-o*1.65,.006,6,80),rs,s);l.position.z=a*.024}for(let a=0;a<r;a++){let l=a/r*Math.PI*2+.16;fr(s,[0,0,0],[Math.cos(l)*(n-o*2),Math.sin(l)*(n-o*2),0],n>.7?.013:.011,Ua)}fr(s,[0,0,-.14],[0,0,.14],.082,No);for(let a of[-1,1])ns(s,rs,[0,0,a*.15],[.061,.061,.027],2);return s}var gf=1.39,xf=1.52,Hl=.89,Do=-1.23;mf(0,gf,xf,.86,8);mf(-1.05,Hl,Do,.36,6);mf(1.05,Hl,Do,.36,6);fr(wn,[-1.16,Hl,Do],[1.16,Hl,Do],.045,Ua);var Km=new Yt([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(i=>new w(...i))),mg=[],ql=[],Pa=64;for(let i=0;i<=Pa;i++){let e=Km.getPoint(i/Pa),t=Km.getTangent(i/Pa),n=new w(0,-t.z,t.y).normalize();for(let[r,s]of[[-.055,-1],[.055,-1],[.055,1],[-.055,1]])mg.push(e.x+r,e.y+n.y*.074*s,e.z+n.z*.074*s);if(i<Pa)for(let r=0;r<4;r++){let s=i*4+r,o=i*4+(r+1)%4;ql.push(s,o+4,o,s,s+4,o+4)}}ql.push(0,1,2,0,2,3);var So=Pa*4;ql.push(So,So+2,So+1,So,So+3,So+2);var Yl=new Rt;Yl.setAttribute("position",new ut(mg,3));Yl.setIndex(ql);Yl.computeVertexNormals();kn(Yl,No,wn);fr(wn,[0,1.72,-.45],[0,2.02,-.45],.064,No);var HE=kn(new wt(1.91,.07,.29),No,wn);HE.position.set(0,.99,Do);for(let i=-5;i<=5;i++)kn(new wt(.012,.006,.24),fg,wn).position.set(i*.16,1.028,Do);var Fo=new St;Fo.moveTo(-.2,-.58);Fo.bezierCurveTo(-.3,-.18,-.72,.02,-.7,.34);Fo.bezierCurveTo(-.66,.57,.66,.57,.7,.34);Fo.bezierCurveTo(.72,.02,.3,-.18,.2,-.58);Fo.quadraticCurveTo(0,-.7,-.2,-.58);var gg=kn(new sn(Fo,{depth:.08,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),pg,wn);gg.rotation.x=-Math.PI/2;gg.position.set(0,2,-.45);for(let i of[-1,1])Ho([[i*.16,gf,xf],[i*.18,1.76,1.48],[i*.17,2.1,1.29],[i*.1,2.27,1.2]],.046,No,wn);fr(wn,[0,2.15,1.22],[0,2.43,1.17],.084,No);Ho([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,rs,wn);Ho([[-1.11,2.99,.86],[-1.1,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.6,2.69,1.45],[0,2.69,1.43],[.6,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.1,2.98,1.12],[1.11,2.99,.86]],.048,rs,wn);fr(wn,[-.1,2.69,1.43],[.1,2.69,1.43],.064,rs);ns(wn,Ua,[0,2.69,1.491],[.027,.027,.015],2);for(let i of[-1,1])fr(wn,[i*1.1,2.98,1.12],[i*1.11,2.99,.86],.061,fg),ns(wn,Ua,[i*1.11,2.99,.85],[.061,.061,.022],2);var ur=new ve;ur.name="Rotating pedal crank";ur.position.set(0,gf,xf);wn.add(ur);var $l=[];for(let i of[-1,1]){let e=i*.17,t=-i*.19;fr(ur,[i*.17,0,0],[i*.3,e,t],.025,rs),fr(ur,[i*.3,e,t],[i*.53,e,t],.023,rs);let n=new ve;n.position.set(i*.44,e,t),ur.add(n),$l.push(n),kn(new wt(.27,.075,.19),pf,n);for(let r=-1;r<=1;r++)kn(new wt(.24,.008,.012),pg,n).position.set(0,.041,r*.05)}function NE(i){for(let e of Xl)e.rotation.z=i/e.userData.radius;ur.rotation.x=i/.86;for(let e of $l)e.rotation.x=-ur.rotation.x}ns(wn,rs,[-.47,2.76,1.45],[.085,.055,.085]);fr(wn,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,pf);var xg=.72,yg=2.08,Kn=new ve;Kn.scale.setScalar(xg);Kn.position.set(0,yg,-.45);Oi.add(Kn);var Zl=2.8,mi=Ie.mobile?32:64,FE=Ie.mobile?80:160,ni=mi/2,Hn=Math.PI/10,af=-.13,OE=.05+ni/mi*Zl,Jm=.12;function zE(i){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.4)*(1.19-.45*i)}function Ha(i,e){let t=zE(i),n=1+.018*Math.sin(e*5+i*9)+.012*Math.cos(e*9-i*7),r=qe.clamp(i/(ni/mi),0,1),s=i<ni/mi?.2*Math.pow(Math.sin(Math.PI*r),.8)*Math.pow(Math.max(0,Math.cos(e)),3):0,o=new w(Math.sin(e)*t*n-.28*i,.05+i*Zl,Math.cos(e)*t*.68*n+s),a=qe.smoothstep(Math.cos(e),.25,.65);for(let l of[-1.13,1.15]){let c=((o.x-l)/.36)**2+((o.y-1.68)/.33)**2;c<1&&(o.z+=.09*(1-c)**2*a)}return o}function cf(i,e){let t=-Math.PI/2,n=Math.PI/2;for(let r=0;r<22;r++){let s=(t+n)/2;Ha(i,s).x<e?t=s:n=s}return(t+n)/2}var Qm=[Ha(ni/mi,-Hn).x,Ha(ni/mi,Hn).x],ef=new Map;function BE(i){if(i===0||i>=ni/mi)return[-Hn,Hn];let e=i.toFixed(7);if(ef.has(e))return ef.get(e);let t=i/(ni/mi),n=Math.sin(Math.PI*t),r=[cf(i,Qm[0]-.018*n),cf(i,Qm[1]+.018*n)];return ef.set(e,r),r}function Kl(i,e){if(i<=ni/mi){let[t,n]=BE(i);e<-Hn?e=Fi(-Math.PI,t,(e+Math.PI)/(Math.PI-Hn)):e<=Hn?e=Fi(t,n,(e+Hn)/(Hn*2)):e=Fi(n,Math.PI,(e-Hn)/(Math.PI-Hn))}return Ha(i,e)}function vg(i,e){let t=(e-.05)/Zl;return Ha(t,cf(t,i)).z}function yf(i=!1,e=!1){let t=[],n=[],r=i?-Hn:-Math.PI,s=i?Hn:Math.PI,o=i?20:FE,a=i?ni:mi;for(let c=0;c<=a;c++)for(let h=0;h<=o;h++){let f=Kl(c/mi,Fi(r,s,h/o));e&&(f.z=Math.min(f.z-.24,.72)),t.push(f.x,f.y,f.z)}for(let c=0;c<a;c++)for(let h=0;h<o;h++){let f=Fi(r,s,(h+.5)/o);if(!i&&c<ni&&Math.abs(f)<Hn-1e-4)continue;let u=c*(o+1)+h,m=u+1,g=u+o+2,y=u+o+1;n.push(u,m,y,m,g,y)}let l=new Rt;return l.setAttribute("position",new ut(t,3)),l.setIndex(n),l.computeVertexNormals(),l}var Mg=new mt({color:1513752,side:Tn});Mg.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.058;`)};function _g(i,e){let t=new ot(i,Mg);return t.name="Black stone outline",e.add(t),t}var Eg=yf(),kE=kn(Eg,Wl,Kn);kE.name="Figsaw";_g(Eg,Kn);var VE=kn(yf(!0,!0),dg,Kn);VE.castShadow=!1;function bg(i,e=!1){let t=[],n=[];for(let o=0;o<=40;o++){let a=Kl(ni/mi,Fi(-Hn,Hn,o/40)),l=a.y+(e?-.008:.008);if(t.push(a.x,l,a.z-.075,a.x,l,.7),o<40){let c=o*2;n.push(c,c+1,c+2,c+1,c+3,c+2)}}let r=new Rt;r.setAttribute("position",new ut(t,3)),r.setIndex(n),r.computeVertexNormals();let s=kn(r,dg,i);s.castShadow=!1}bg(Kn);var Us=new ve;Kn.add(Us);function GE(){let i=yf(!0),e=Array.from(i.attributes.position.array),t=Array.from(i.index.array),n=i.attributes.position.count;for(let o=0;o<n;o++)e.push(e[o*3],e[o*3+1],e[o*3+2]-.14);let r=t.slice();for(let o=0;o<r.length;o+=3)t.push(r[o]+n,r[o+2]+n,r[o+1]+n);let s=[];for(let o=0;o<=20;o++)s.push(o);for(let o=1;o<=ni;o++)s.push(o*21+20);for(let o=19;o>=0;o--)s.push(ni*21+o);for(let o=ni-1;o>0;o--)s.push(o*21);for(let o=0;o<s.length;o++){let a=s[o],l=s[(o+1)%s.length];t.push(a,a+n,l,l,a+n,l+n)}return i.setAttribute("position",new ut(e,3)),i.setIndex(t),i.deleteAttribute("normal"),i.computeVertexNormals(),i}var wg=GE(),Sg=Wl.clone();Sg.onBeforeCompile=Wl.onBeforeCompile;kn(wg,Sg,Us);_g(wg,Us);bg(Us,!0);ns(Us,UE,[af,OE-.025,.83],[.25,.016,.055]);var Tg=[];for(let i=0;i<=30;i++){let e=Kl(ni/mi,Fi(-Hn,Hn,i/30));e.z+=.002,Tg.push(e)}Ho(Tg,.008,DE,Kn);for(let i of[-1,1]){let e=[];for(let t=4;t<=ni;t++){let n=Kl(t/mi,i*Hn);n.z+=.009,e.push(n)}Ho(e,.033,new mt({color:1513752}),Kn)}var Rg=[],vf=dr(16061736,.36);vf.emissive.set(12127514);vf.emissiveIntensity=.12;var Nl={headYaw:0,gazeYaw:0,gazePitch:0},tf=new w,To=new w,jm=new w,WE=new w(0,1,0),eg=new dt;for(let i of[-1,1]){let e=i*.42-.09,t=1.84+(i===-1?.045:0),n=vg(e,t)+.044,r=new ve;r.position.set(e,t,n),Kn.add(r),Rg.push(r),ns(r,dr(1052693,.25),[0,0,0],[.156,.156,.075]),ns(r,vf,[0,0,.055],[.084,.084,.029]),ns(r,dr(657676,.32),[0,0,.074],[.039,.039,.016])}var Cs=new ve;Cs.name="Red bow tie";Cs.position.set(af,.4,vg(af,.4)+.065);Us.add(Cs);var Ag=new $t({color:13046566,roughness:.76,sheen:.55,sheenColor:15747667,sheenRoughness:.82}),ss=new St;ss.moveTo(.055,.065);ss.bezierCurveTo(.18,.085,.32,.185,.43,.19);ss.quadraticCurveTo(.49,.19,.485,.12);ss.bezierCurveTo(.47,.03,.5,-.075,.48,-.14);ss.quadraticCurveTo(.47,-.195,.4,-.175);ss.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);ss.closePath();var XE=new sn(ss,{depth:.055,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});for(let i of[-1,1]){let e=kn(XE,Ag,Cs);e.scale.x=i,e.rotation.y=-i*.1;let t=dr(9965598,.9);for(let n of[-1,1])Ho([[i*.09,n*.026,.08],[i*.19,n*.055,.087],[i*.34,n*.11,.088]],.005,t,Cs)}var Cg=kn(new en(1,24,16),Ag,Cs);Cg.position.set(0,0,.07);Cg.scale.set(.105,.12,.075);var Mf=.26,Ro=-.53*Mf+.0036;Oi.scale.setScalar(Mf);var Fl=new Yt([[2.45,Ro,-2.4],[2.05,Ro,-1.7],[1.05,Ro,-1.28],[.35,Ro,-1.1],[.24,Ro,-.66],[.12,Ro,.1]].map(i=>new w(...i)),!1,"centripetal");Fl.arcLengthDivisions=240;var Pg=1,Ig=8.5,qE=Fl.getLength(),Al=new w,nf=new w,ir=document.querySelector("#figsaw-dialogue"),Lg=document.querySelector("#dialogue-announcement"),Dg=document.querySelector("#game-countdown"),Ia=document.querySelector("#countdown-announcement"),La=null,lf=300,Ol=["I want to play a game...","Those who don't appreciate design do not deserve it.","Complete the design challenges to escape... but every 5 minutes one of your Figpals will be dropped into the tank of acid.","Let the games begin..."],zl=-1,_f=1/0,Cl=new w,Rs=new w,Pl=new Ta,rf=new w,Ug=0,Co=!1,hf=0,tg=!1,uf=0,Ef=null;function Hg(i){let e=Ol[i];zl=i,ir.classList.toggle("long-dialogue",e.length>80),ir.querySelector(".dialogue-bubble span").textContent=e,Lg.textContent=`Figsaw. ${e}`;let t=Lm(e,$e.time);Ef=ti?null:t,_f=i<Ol.length-1?t.startTime+t.duration+1:1/0,i===0&&(La=t.startTime+t.duration)}function bf(i){let e=i-Ug-Pg,t=ti?1:qe.smoothstep(e,0,Ig);Fl.getPointAt(t,Al),Fl.getTangentAt(t,nf),Oi.position.copy(Al),Oi.rotation.y=Math.atan2(nf.x,nf.z);let n=Math.atan2(Lr.x-Al.x,Lr.z-Al.z),r=qe.euclideanModulo(n-Oi.rotation.y+Math.PI,Math.PI*2)-Math.PI;NE(t*qE/Mf),t===1&&!Co&&(Co=!0,hf=i,Nn.start($e.time,En,$e),Hg(0)),B0(Co?i-hf:-1,ti,Nl),Kn.rotation.y=qe.clamp(r*.58,-.7,.7)+Nl.headYaw}bf(0);za.mark("characterBuilt");await Gl("Building the office\u2026");var{group:Ba,laptop:zi,catMug:Oo,handsaw:zo,acidLeaks:On,chargingKit:Yn,fireHazard:Cn,ketchupKey:Bi,countdown:As,setDisplayEnvironment:YE,update:$E,figpalHoists:pr,toggleHoist:ZE}=await _m(Fn,Lr,Gl);ii.add(Ba);za.mark("officeBuilt");await Gl("Preparing the room\u2026");var jt=Pm(Vt,{canDetach:()=>Bi.hasKey});ii.add(jt.group);var Zn=Nm({laptop:zi,restraint:jt,cameraPosition:En,state:$e}),$n=Om({position:En,state:$e,getView:Yn.getDrawerView}),xn=Vm({mug:Oo,camera:Vt,restraint:jt}),bn=zm({saw:zo,camera:Vt,restraint:jt,hasKey:()=>Bi.hasKey}),Na=document.querySelector("#game-over"),Ng=Na.querySelector(".game-over-content"),Fg=document.querySelector("#restart-game"),KE=document.querySelector("#mug-eye-impact"),Og=km(KE),Vn=!1;Fg.addEventListener("click",()=>{df({skipIntro:!0}),vt.focus({preventScroll:!0})});var gi=document.querySelector("#restraint-status"),Da=document.querySelector("#charging-hint"),Uo=null,Ps=null,is="",ka=0,mr=Im(()=>{if(!Bi.hasKey){Po("The shackle is locked. Find its key first.");return}jt.detach($e.time)&&(gi.textContent="Instance detached. Your wrist is free. You can open the laptop, drink from the cat mug, or turn a tank drain valve.",vt.classList.remove("over-chain"),vt.setAttribute("aria-label",vt.getAttribute("aria-label").replace("Your wrist is chained to the rear pipes. Pour the glass ketchup bottle beside the cat mug, collect the key, then click or right-click the shackle and choose Detach instance to free your hand.","Your wrist is free. Click the laptop, cat mug, or a red tank drain valve to use it.")))},{canDetach:()=>Bi.hasKey,onBlocked:()=>Po("The shackle is locked. Find its key first.")}),Bl=bm(pr),Is=wm(pr.speechAnchors,vt,pr.canSpeak),zg=Em(pr,Is),Bg=N0(Fn);YE(Bg.texture);jt.setEnvironment(Bg.texture);Xm(ii);On.bindTargets([Ba,Oi]);for(let i of[...Xl,...$l,Cs])qn(i,{minObjects:2,dispose:!1});qn(ur,{exclude:$l,minObjects:2,dispose:!1});qn(wn,{exclude:[...Xl,ur],minObjects:2,dispose:!1});qn(Ba,{exclude:[zi.object,Oo,zo,pr.group,As.group,Yn.group,Bi.group,Cn.group],minObjects:2,palette:Ie.mobile});var JE=Ie.mobile?Wm(ii,[zi.object,Oo,zo,As.group,...pr.group.children.filter(i=>i.name.startsWith("Green bubbling canister"))],Oi):null;qm(ii);za.mark("scenePrepared");function QE(i){if(!Co||Bl.active){ir.hidden=!0;return}Kn.localToWorld(Cl.set(-.28,Zl+.24,0)),Rs.copy(Cl).project(Vt);let e=Math.min(.7,.4/(Vt.position.distanceTo(Cl)*Math.tan(qe.degToRad(Vt.fov/2))*Vt.aspect));if(Rs.z<-1||Rs.z>1||Math.abs(Rs.x)>1+e||Math.abs(Rs.y)>1){ir.hidden=!0;return}if(i>=uf){uf=i+(Ie.mobile?.4:.12),rf.copy(Cl).sub(Vt.position);let s=rf.length();Pl.set(Vt.position,rf.normalize()),Pl.near=.06,Pl.far=Math.max(.06,s-.035),tg=Pl.intersectObject(Ba,!0).length>0}if(tg){ir.hidden=!0;return}ir.hidden=!1;let t=vt.getBoundingClientRect(),n=t.left+(Rs.x*.5+.5)*t.width,r=t.top+(-Rs.y*.5+.5)*t.height;ir.style.transform=`translate3d(${n}px,${r-8}px,0) translate(-50%,-100%)`}var ng=new Ta,ig=new ke;function wf(i){let e=vt.getBoundingClientRect();ig.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),ng.setFromCamera(ig,Vt);let t=ng.intersectObjects([Ba,Oi,jt.group],!0).find(n=>{for(let r=n.object;r;r=r.parent)if(!r.visible)return!1;return!0});for(let n=t?.object;n;n=n.parent)if(n===jt.target||n===zi.object||n===Oo||n===zo||n===Kn||n.userData.chargingAction||n.userData.keyAction||Number.isInteger(n.userData.valveIndex)||Number.isInteger(n.userData.hoistIndex))return n;return null}function Po(i){is=i,ka=$e.time+4.5,gi.textContent=i}function jE(i){Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying||(Nn.cancel(),hi=!1,i==="pour"?Bi.pour($e.time)?Po("You tip the bottle. Something metal is sliding through the ketchup\u2026"):Po(Bi.hint("pour")):i==="collect"&&Bi.collect()&&(Po("Shackle key collected. Click your shackle and choose Detach instance."),jt.requestReach($e.time)))}function Sf(i){if(!i||Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying)return;let e=Yn.drawerOpen,t=Yn.phase;Ps=null,vt.classList.remove("over-charging"),jt.locked&&jt.requestReach($e.time),i==="charger"&&Yn.phase==="drawer"&&!Yn.drawerReady&&!jt.locked?is="Let the drawer finish opening.":is=Yn.use(i,$e.time,jt.locked),ka=$e.time+3.8,gi.textContent=is,Nn.cancel(),hi=!1,jt.locked||(i==="drawer"&&!e&&Yn.drawerOpen?(xi(),$n.start($e.time)):(i==="drawer"&&e&&!Yn.drawerOpen||t==="drawer"&&Yn.phase==="carrying")&&(xi(),$n.restore($e.time)))}function eb(){let i=$e.time<ka?is:Uo?Bi.hint(Uo):Ps?Yn.hint(Ps):Bi.hasKey&&jt.locked?"Shackle key collected \xB7 Click the shackle to unlock":Yn.hint(null);Da.textContent!==i&&(Da.textContent=i),Da.hidden=!i||Vn||xn.active||bn.active||Zn.active}function kg(){if(!(Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying)){if(jt.locked){jt.requestReach($e.time),gi.textContent="The chain pulls tight. You can't reach the laptop.";return}if(Yn.phase==="powered"){Sf("laptop");return}if(zi.isOpen){Vg();return}$n.cancel(),Zn.start($e.time)&&(xi(),Nn.cancel(),hi=!1,gi.textContent="You reach for the front edge of the laptop.")}}function Vg(i=!1){!i&&!zi.open()||(gi.textContent="You lift the lid and let go. The laptop is open.",vt.classList.remove("over-laptop"),vt.setAttribute("aria-label",vt.getAttribute("aria-label").replace("a closed MacBook Pro","an open MacBook Pro").replace(" Click the laptop or press Enter to open it.","")))}function Gg(){if(!(Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying)){if(jt.locked){jt.requestReach($e.time),gi.textContent="The chain pulls tight. Detach the shackle before picking up the mug.";return}xn.start($e.time)&&($n.cancel(),xi(),Nn.cancel(),hi=!1,mr.hide(),vt.classList.remove("over-mug"),gi.textContent="You pick up the cat mug by its handle and raise it for a drink.")}}function tb(){if(!(Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying)){if(Bi.hasKey){Po("You already have the key. There is no need to use the saw.");return}bn.start($e.time)&&($n.cancel(),Nn.cancel(),hi=!1,xi(),mr.hide(),is="",Da.hidden=!0,vt.classList.remove("over-saw"),gi.textContent="You pick up the saw and start sawing at your chained wrist.")}}function Wg(i){if(!(Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying)){if(jt.locked){jt.requestReach($e.time),gi.textContent="The chain pulls tight. Detach the shackle before turning a tank valve.";return}On.open(i,$e.time,jt.locked)&&($n.cancel(),Nn.cancel(),hi=!1,mr.hide(),gi.textContent=`Tank ${i+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`)}}function nb(){let i=0,e=1/0,t=new w;return pr.valves.forEach((n,r)=>{n.object.getWorldPosition(t);let s=t.distanceToSquared(En);s<e&&(e=s,i=r)}),i}function Il(i){Vn||(Vn=!0,$n.cancel(),xi(),mr.hide(),ir.hidden=!0,Is.hide(),document.body.classList.add("game-over"),vt.inert=!0,Ng.hidden=!1,Fg.focus({preventScroll:!0}),gi.textContent=i)}function Xg(i){if(xn.active||bn.active||Vn||On.dying||Cn.dying)return;let e=ZE(i);if(!e)return;let t=pr.isLowered(i);t?Is.show(i,$e.time):Is.hide(i),document.querySelector("#hoist-status").textContent=t&&pr.canSpeak(i)?`${e} ${Ca[i]}`:e}var hi=!1,Vi=null,Dl=null,kl=0,ib=new Set(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ"]),nr=new Set,Io=i=>qe.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function df({skipIntro:i=!1}={}){Oa(),Bi.reset(),Uo=null,Yn.reset(),Ps=null,is="",ka=0,Da.hidden=!0,Vn=!1,On.reset(),Cn.reset(),xn.reset(),bn.reset(),Og.reset(),Na.hidden=!0,Na.style.opacity="0",Ng.hidden=!0,document.body.classList.remove("game-over","mug-impact"),vt.inert=!1,Zn.cancel(),Nn.cancel(),$n.cancel(),jt.reset(),zi.close(),mr.hide(),gi.textContent="",vt.setAttribute("aria-label",PE),Bl.reset(),Is.hide(),zg.reset($e.time),xi(),hi=!i,Ug=$e.time-(i?Pg+Ig:0),Co=i,hf=$e.time,ir.hidden=!0,ir.classList.remove("long-dialogue"),Lg.textContent="",Ef=null,zl=i?Ol.length-1:-1,_f=1/0,$e.jaw=0,$e.talkUntil=0,uf=0,La=null,As.reset(),lf=300,Dg.textContent="05:00",Ia.textContent="",i&&(ir.querySelector(".dialogue-bubble span").textContent=Ol[zl],Nn.start($e.time,En,$e),Nn.update($e.time,En,$e,!0),bf($e.time),As.start(),Ia.textContent="The five-minute countdown has started.")}function xi(){nr.clear(),$e.space=!1,Vi=null}document.addEventListener("keydown",i=>{if(Vn){i.code==="KeyR"&&!i.repeat&&(i.preventDefault(),df(),vt.focus({preventScroll:!0}));return}if((Zn.active||xn.active||bn.active||On.dying||Cn.dying)&&i.code!=="KeyR"){i.preventDefault();return}if(!mr.active&&!(i.target.closest('input,textarea,select,[contenteditable="true"]')||i.metaKey||i.ctrlKey||i.altKey)){if(ib.has(i.code)){i.preventDefault(),Nn.cancel(),$n.cancel(),nr.add(i.code),hi=!1;return}if(i.code==="Escape"&&$n.active){i.preventDefault(),$n.restore($e.time);return}i.target.closest("button")&&(i.code==="Space"||i.code==="Enter")||(i.code==="Enter"&&i.target===vt&&(i.preventDefault(),kg()),i.code==="KeyF"&&i.target===vt&&!i.repeat&&(i.preventDefault(),Sf(Yn.nextAction)),i.code==="KeyM"&&i.target===vt&&!i.repeat&&(i.preventDefault(),Gg()),i.code==="KeyV"&&i.target===vt&&!i.repeat&&(i.preventDefault(),Wg(nb())),/^Digit[1-3]$/.test(i.code)&&i.target===vt&&!i.repeat&&(i.preventDefault(),Xg(Number(i.code.slice(-1))-1)),i.code==="Space"&&(i.preventDefault(),$e.space=!0),i.code==="KeyR"&&!i.repeat&&df(),i.code.startsWith("Arrow")&&(i.preventDefault(),Nn.cancel(),$n.cancel(),hi=!1,i.code==="ArrowLeft"&&($e.yaw=Io($e.yaw+.08)),i.code==="ArrowRight"&&($e.yaw=Io($e.yaw-.08)),i.code==="ArrowUp"&&($e.pitch=qe.clamp($e.pitch+.05,-1.4,1.4)),i.code==="ArrowDown"&&($e.pitch=qe.clamp($e.pitch-.05,-1.4,1.4))))}});document.addEventListener("keyup",i=>{nr.delete(i.code),i.code==="Space"&&($e.space=!1)});window.addEventListener("blur",xi);document.addEventListener("visibilitychange",()=>{document.hidden&&xi()});Gm({canvas:vt,state:$e,keys:nr,cancel(){xi(),Nn.cancel(),$n.cancel(),hi=!1},canInteract:()=>!Zn.active&&!xn.active&&!bn.active&&!Vn&&!On.dying&&!Cn.dying});vt.addEventListener("contextmenu",i=>{i.preventDefault(),xi(),!(xn.active||bn.active||Vn||On.dying||Cn.dying)&&(jt.locked&&wf(i)===jt.target?mr.show(i.clientX,i.clientY):mr.hide())});vt.addEventListener("pointerdown",i=>{Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying||i.button===0&&Vi===null&&(vt.focus({preventScroll:!0}),Vi=i.pointerId,hi=!1,kl=0,Dl={x:i.clientX,y:i.clientY},vt.setPointerCapture(i.pointerId))});vt.addEventListener("pointermove",i=>{if(Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying)return;if(Vi===null){let n=wf(i);Uo=n?.userData.keyAction||null,vt.classList.toggle("over-key",!!Uo),Ps=n?.userData.chargingAction||(n===zi.object&&Yn.phase==="powered"?"laptop":null),vt.classList.toggle("over-charging",!!Ps),vt.classList.toggle("over-laptop",n===zi.object&&!zi.isOpen),vt.classList.toggle("over-hoist",Number.isInteger(n?.userData.hoistIndex)),vt.classList.toggle("over-mug",n===Oo),vt.classList.toggle("over-saw",n===zo),vt.classList.toggle("over-valve",Number.isInteger(n?.userData.valveIndex)),vt.classList.toggle("over-chain",n===jt.target&&jt.locked);return}if(i.pointerId!==Vi)return;let e=i.clientX-Dl.x,t=i.clientY-Dl.y;kl+=Math.abs(e)+Math.abs(t),kl>=6&&(Nn.cancel(),$n.cancel()),$e.yaw=Io($e.yaw+e*.004),$e.pitch=qe.clamp($e.pitch+t*.003,-1.4,1.4),Dl={x:i.clientX,y:i.clientY}});vt.addEventListener("pointerup",i=>{if(i.pointerId===Vi&&(Vi=null,kl<6)){let e=wf(i);e?.userData.keyAction?jE(e.userData.keyAction):e===jt.target&&jt.locked?mr.show(i.clientX,i.clientY):e?.userData.chargingAction?Sf(e.userData.chargingAction):e===zi.object?kg():e===Oo?Gg():e===zo?tb():Number.isInteger(e?.userData.valveIndex)?Wg(e.userData.valveIndex):e===Kn?$e.talkUntil=$e.time+1.8:Number.isInteger(e?.userData.hoistIndex)&&Xg(e.userData.hoistIndex)}});vt.addEventListener("pointerleave",()=>{Uo=null,Ps=null,vt.classList.remove("over-key","over-laptop","over-hoist","over-chain","over-mug","over-saw","over-valve","over-charging")});vt.addEventListener("pointercancel",i=>{i.pointerId===Vi&&(Vi=null)});vt.addEventListener("lostpointercapture",i=>{i.pointerId===Vi&&(Vi=null)});vt.addEventListener("wheel",i=>{i.preventDefault(),!(Zn.active||xn.active||bn.active||Vn||On.dying||Cn.dying)&&(Nn.cancel(),$n.cancel(),hi=!1,$e.zoom=qe.clamp($e.zoom+i.deltaY*5e-4,.78,1))},{passive:!1});var Jl=document.querySelector("#copy-view"),rg=Jl.querySelector("span"),sg=document.querySelector("#copy-status"),ff=document.querySelector("#copy-fallback"),sf=document.querySelector("#view-text"),og;function rb(){let i=n=>n.toArray().map(r=>Number(r.toFixed(6))),e=Vt.getWorldDirection(new w),t={position:i(Vt.position),lookAt:i(Vt.position.clone().add(e)),fov:Number(Vt.fov.toFixed(4))};return`Set this as the default camera view for Figsaw:
${JSON.stringify(t,null,2)}`}function sb(i){let e=document.createElement("textarea");e.value=i,e.readOnly=!0,e.style.cssText="position:fixed;left:-9999px;top:0;font-size:16px",document.body.append(e),e.focus(),e.select(),e.setSelectionRange(0,i.length);let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),Jl.focus({preventScroll:!0}),t}Jl.addEventListener("click",async()=>{let i=rb();sf.value=i,clearTimeout(og);let e=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(i),e=!0)}catch{}e||(e=sb(i)),e?(ff.hidden=!0,rg.textContent="Copied",sg.textContent="View copied. Paste it into the chat to set the default view."):(ff.hidden=!1,sf.focus(),sf.select(),sg.textContent="Select and copy the view below, then paste it into the chat."),og=setTimeout(()=>{rg.textContent="Copy view"},2200)});document.querySelector("#close-copy").addEventListener("click",()=>{ff.hidden=!0,Jl.focus()});var Lo=Ie.pixelRatio;function Ql(){let{width:i,height:e}=vt.getBoundingClientRect();!i||!e||(Fn.setPixelRatio(U0(Ie,i,e,Lo)),Fn.setSize(i,e,!1),Vt.aspect=i/e,Vt.fov=Ds.fov*$e.zoom,Vt.updateProjectionMatrix())}var ob=new ResizeObserver(Ql);ob.observe(vt);Ql();var Fa=new ul,Vl=!1,qg=!1,Ls=0,Ao=0,ag=-1/0,cg=0,of=0,Ll=0;function Oa(){qg&&!Vl&&!Ls&&!document.hidden&&(Ls=requestAnimationFrame(Yg))}document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ls),Ls=0,xi()):(Ao=0,Fa.getDelta(),Oa())});function Yg(){if(Ls=0,document.hidden||Vl)return;if(Vn){Fa.getDelta();return}let i=performance.now(),e=Ao?i-Ao:0;if(Ao&&e<1e3/Ie.maxFps-1){Oa();return}Ao=i;let t=Math.min(Fa.getDelta(),.1),n=$e.time+=t,r=1-Math.exp(-t*12);hi&&($e.yaw=Io($e.yaw+Io(ts.yaw-$e.yaw)*r*.5),$e.pitch=Fi($e.pitch,ts.pitch,r*.5),$e.zoom=Fi($e.zoom,1,r*.5),En.lerp(Lr,r*.5),Math.abs(Io($e.yaw-ts.yaw))+Math.abs($e.pitch-ts.pitch)+Math.abs($e.zoom-1)+En.distanceTo(Lr)<.005&&($e.yaw=ts.yaw,$e.pitch=ts.pitch,$e.zoom=1,En.copy(Lr),hi=!1)),bf(n),JE?.update(),Co&&n>=_f&&Hg(zl+1),Nn.active&&(hi=!1),(nr.size||Vi!==null)&&Nn.cancel(),(Zn.active||xn.active||bn.active||$n.active)&&Nn.cancel(),Nn.update(n,En,$e,ti),$n.update(n,ti),Zn.update(n,ti)&&Vg(!0);let s=$e.yaw,o=Number(nr.has("KeyW"))-Number(nr.has("KeyS")),a=Number(nr.has("KeyD"))-Number(nr.has("KeyA")),l=Number(nr.has("KeyE"))-Number(nr.has("KeyQ"));jd.set(-Math.sin(s)*o+Math.cos(s)*a,l,-Math.cos(s)*o-Math.sin(s)*a),jd.lengthSq()>0&&(En.addScaledVector(jd.normalize(),t*1.05),En.x=qe.clamp(En.x,-3.72,3.72),En.y=qe.clamp(En.y,.08,3),En.z=qe.clamp(En.z,-3.78,4.25)),Vt.position.copy(En),Zm.set(-Math.sin(s)*Math.cos($e.pitch),Math.sin($e.pitch),-Math.cos(s)*Math.cos($e.pitch)),$m.copy(En).add(Zm),Vt.lookAt($m);let c=Ds.fov*$e.zoom;Math.abs(Vt.fov-c)>.001&&(Vt.fov=c,Vt.updateProjectionMatrix()),La!==null&&n>=La&&(As.start(),La=null,Ia.textContent="The five-minute countdown has started.");let h=As.update();h!==lf&&(Dg.textContent=wl(h),lf=h,h===0&&(Ia.textContent="The countdown has reached zero.")),Bl.update(As.status,n)&&(Is.showAll(n),Ia.textContent=`Time is up. All three Figpals are lowering into the green liquid. ${Ca.filter((b,T)=>pr.canSpeak(T)).join(" ")}`);let f=Dm(Ef,n),u=n<$e.talkUntil?.16+.7*Math.sin(n*10)**2:0,m=$e.space?1:Math.max(f,u);$e.jaw=Fi($e.jaw,m,r),Us.position.y=-$e.jaw*Jm,Kn.position.y=yg+$e.jaw*Jm*xg;let g=On.update(n,t,En,Vt,ti,{target:Cn.flowTarget()}),y=Cn.update(n,t,En,Vt,ti),p=Cn.takeMessage();p&&(is=p,ka=n+5,gi.textContent=p),(On.dying||Cn.dying)&&xi();let d=xn.update(n,ti);jt.update(n,ti,mr.active||xn.active||bn.active,xn.handPose||Zn.handPose,bn.armLift(n,ti));let M=bn.update(n,ti),x=Math.max(xn.blackout,bn.blackout,On.blackout(n),Cn.blackout(n));Og.update(xn,x),xn.eyeImpact>0&&document.body.classList.add("mug-impact"),x>0&&(Na.hidden=!1,Na.style.opacity=String(x),document.body.classList.add("mug-impact")),M?Il("You used the saw before finding the key. Your hand is lost. Game over."):y?Il("The fire reaches you before the sprinklers can stop it. Game over."):g?Il("The corrosive green liquid reaches you. Game over."):d&&Il("The mug's pointed ears hit your eyes. Everything goes dark. Game over."),zi.update(t,ti),Yn.update(n,ti),eb(),ki.intensity=hg*$E(n,ti,Vt.position),Oi.updateMatrixWorld(!0),Kn.localToWorld(tf.set(-.09,1.86,1)),To.copy(Vt.position).sub(tf);let E=Math.max(1,To.length());To.normalize().applyAxisAngle(WE,Nl.gazeYaw),To.y+=Nl.gazePitch,To.normalize(),jm.copy(tf).addScaledVector(To,E);for(let b of Rg)eg.copy(b.quaternion),b.lookAt(jm),ti||b.quaternion.copy(eg.slerp(b.quaternion,1-Math.exp(-t*16)));Fn.shadowMap.enabled&&n-ag>=1/Ie.shadowHz&&(Fn.shadowMap.needsUpdate=!0,ag=n),Fn.render(ii,Vt),QE(n),zg.update(n,Bl.active),Is.update(Vt,n),za.frame(i);let R=performance.now()-i;Ll++,(R>Ie.targetFrameMs||e>Ie.targetFrameMs*1.4)&&of++,n-cg>4&&(Ll>30&&of/Ll>.65&&Lo>Ie.minPixelRatio&&(Lo=Math.max(Ie.minPixelRatio,Lo-.2),Ql()),cg=n,of=0,Ll=0),Oa()}await Gl("Warming up the lights\u2026");Vt.position.copy(Lr);Vt.lookAt(new w(...Ds.lookAt));Vt.updateMatrixWorld(!0);(Ie.mobile?Promise.resolve():Fn.compileAsync(ii,Vt)).then(()=>{za.mark("shadersReady"),qg=!0,Fa.getDelta(),Yg(),Ul.hidden=!0}).catch(i=>{console.error(i);let e=document.querySelector("#loading-status");e&&(e.textContent="The room could not load. Please reload to try again.")});Ym(vt,{status:Ul,pause(){Vl=!0,cancelAnimationFrame(Ls),Ls=0,xi()},lowerQuality(){Fn.shadowMap.enabled=!1,Lo=Math.min(Lo,.6),Ql()},resume(){Vl=!1,Ao=0,Fa.getDelta(),Oa()}});
