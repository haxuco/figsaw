var s1=0,Of=1,o1=2;var Jp=1,od=2,mr=3,tr=0,yn=1,Dt=2,Ur=0,$s=1,Ac=2,zf=3,Bf=4,a1=5,os=100,c1=101,l1=102,h1=103,u1=104,d1=200,f1=201,p1=202,m1=203,Bh=204,kh=205,g1=206,x1=207,y1=208,v1=209,_1=210,M1=211,E1=212,w1=213,S1=214,Vh=0,Gh=1,Wh=2,js=3,Xh=4,qh=5,Yh=6,Zh=7,Qp=0,T1=1,b1=2,Hr=0,R1=1,A1=2,C1=3,ad=4,P1=5,I1=6,L1=7;var jp=300,eo=301,to=302,ia=303,$h=304,rl=306,hs=1e3,ls=1001,Kh=1002,ai=1003,D1=1004;var Za=1005;var pn=1006,sh=1007;var Gi=1008;var xr=1009,e0=1010,t0=1011,ra=1012,cd=1013,us=1014,er=1015,ya=1016,ld=1017,hd=1018,no=1020,n0=35902,i0=1021,r0=1022,yi=1023,s0=1024,o0=1025,Ks=1026,io=1027,ud=1028,dd=1029,a0=1030,fd=1031;var pd=1033,Ec=33776,wc=33777,Sc=33778,Tc=33779,Jh=35840,Qh=35841,jh=35842,eu=35843,tu=36196,nu=37492,iu=37496,ru=37808,su=37809,ou=37810,au=37811,cu=37812,lu=37813,hu=37814,uu=37815,du=37816,fu=37817,pu=37818,mu=37819,gu=37820,xu=37821,bc=36492,yu=36494,vu=36495,c0=36283,_u=36284,Mu=36285,Eu=36286;var Cc=2300,wu=2301,oh=2302,kf=2400,Vf=2401,Gf=2402;var U1=3200,md=3201;var l0=0,H1=1,Dr="",xt="srgb",Gr="srgb-linear",gd="display-p3",sl="display-p3-linear",Pc="linear",sn="srgb",Ic="rec709",Lc="p3";var Is=7680;var Wf=519,N1=512,F1=513,O1=514,h0=515,z1=516,B1=517,k1=518,V1=519,Xf=35044,Un=35048;var qf="300 es",gr=2e3,Dc=2001,Fr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=1234567,Qo=Math.PI/180,ro=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function Tn(i,e,t){return Math.max(e,Math.min(t,i))}function xd(i,e){return(i%e+e)%e}function G1(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function W1(i,e,t){return i!==e?(t-i)/(e-i):0}function jo(i,e,t){return(1-t)*i+t*e}function X1(i,e,t,n){return jo(i,e,1-Math.exp(-t*n))}function q1(i,e=1){return e-Math.abs(xd(i,e*2)-e)}function Y1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Z1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function K1(i,e){return i+Math.random()*(e-i)}function J1(i){return i*(.5-Math.random())}function Q1(i){i!==void 0&&(Yf=i);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j1(i){return i*Qo}function ex(i){return i*ro}function tx(i){return(i&i-1)===0&&i!==0}function nx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ix(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rx(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),p=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*p,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ge={DEG2RAD:Qo,RAD2DEG:ro,generateUUID:xs,clamp:Tn,euclideanModulo:xd,mapLinear:G1,inverseLerp:W1,lerp:jo,damp:X1,pingpong:q1,smoothstep:Y1,smootherstep:Z1,randInt:$1,randFloat:K1,randFloatSpread:J1,seededRandom:Q1,degToRad:j1,radToDeg:ex,isPowerOfTwo:tx,ceilPowerOfTwo:nx,floorPowerOfTwo:ix,setQuaternionFromProperEuler:rx,normalize:Qn,denormalize:qs},Oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],d=n[2],f=n[5],g=n[8],x=r[0],m=r[3],u=r[6],E=r[1],y=r[4],_=r[7],P=r[2],b=r[5],R=r[8];return s[0]=o*x+a*E+c*P,s[3]=o*m+a*y+c*b,s[6]=o*u+a*_+c*R,s[1]=l*x+h*E+p*P,s[4]=l*m+h*y+p*b,s[7]=l*u+h*_+p*R,s[2]=d*x+f*E+g*P,s[5]=d*m+f*y+g*b,s[8]=d*u+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*p+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=p*x,e[1]=(r*l-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=d*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ah.makeScale(e,t)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ah=new Mt;function u0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sx(){let i=sa("canvas");return i.style.display="block",i}var Zf={};function Rc(i){i in Zf||(Zf[i]=!0,console.warn(i))}function ox(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ax(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cx(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $f=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kf=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vo={[Gr]:{transfer:Pc,primaries:Ic,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[xt]:{transfer:sn,primaries:Ic,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sl]:{transfer:Pc,primaries:Lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Kf),fromReference:i=>i.applyMatrix3($f)},[gd]:{transfer:sn,primaries:Lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kf),fromReference:i=>i.applyMatrix3($f).convertLinearToSRGB()}},lx=new Set([Gr,sl]),Zt={enabled:!0,_workingColorSpace:Gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lx.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Vo[e].toReference,r=Vo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Vo[i].primaries},getTransfer:function(i){return i===Dr?Pc:Vo[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Vo[e].luminanceCoefficients)}};function Js(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ch(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ls,Su=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=sa("canvas")),Ls.width=e.width,Ls.height=e.height;let n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Js(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Js(t[n]/255)*255):t[n]=Js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hx=0,Uc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lh(r[o].image)):s.push(lh(r[o]))}else s=lh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function lh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ux=0,ei=class i extends Fr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ls,r=ls,s=pn,o=Gi,a=yi,c=xr,l=i.DEFAULT_ANISOTROPY,h=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=xs(),this.name="",this.source=new Uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=jp;ei.DEFAULT_ANISOTROPY=1;var Qt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(f+1)/2,P=(u+1)/2,b=(h+d)/4,R=(p+x)/4,A=(g+m)/4;return y>_&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=R/n):_>P?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=b/r,s=A/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=A/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(p-x)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tu=class extends Fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new ei(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Uc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yr=class extends Tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hc=class extends ei{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bu=class extends ei{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],p=n[r+3],d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(p!==x||c!==d||l!==f||h!==g){let m=1-a,u=c*d+l*f+h*g+p*x,E=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let P=Math.sqrt(y),b=Math.atan2(P,u*E);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}let _=a*E;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,p=p*m+x*_,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=P,l*=P,h*=P,p*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],p=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*p+c*f-l*d,e[t+1]=c*g+h*d+l*p-a*f,e[t+2]=l*g+h*f+a*d-c*p,e[t+3]=h*g-a*p-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),p=a(s/2),d=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*p+l*f*g,this._y=l*f*p-d*h*g,this._z=l*h*g+d*f*p,this._w=l*h*p-d*f*g;break;case"YXZ":this._x=d*h*p+l*f*g,this._y=l*f*p-d*h*g,this._z=l*h*g-d*f*p,this._w=l*h*p+d*f*g;break;case"ZXY":this._x=d*h*p-l*f*g,this._y=l*f*p+d*h*g,this._z=l*h*g+d*f*p,this._w=l*h*p-d*f*g;break;case"ZYX":this._x=d*h*p-l*f*g,this._y=l*f*p+d*h*g,this._z=l*h*g-d*f*p,this._w=l*h*p+d*f*g;break;case"YZX":this._x=d*h*p+l*f*g,this._y=l*f*p+d*h*g,this._z=l*h*g-d*f*p,this._w=l*h*p-d*f*g;break;case"XZY":this._x=d*h*p-l*f*g,this._y=l*f*p-d*h*g,this._z=l*h*g+d*f*p,this._w=l*h*p+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=n+a+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>p){let f=2*Math.sqrt(1+n-a-p);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>p){let f=2*Math.sqrt(1+a-n-p);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+p-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),p=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*p+this._w*d,this._x=n*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+c*l+o*p-a*h,this.y=n+c*h+a*l-s*p,this.z=r+c*p+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hh=new w,Jf=new ft,Dn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bi):Bi.fromBufferAttribute(s,o),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$a.copy(n.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),Ka.subVectors(this.max,Go),Ds.subVectors(e.a,Go),Us.subVectors(e.b,Go),Hs.subVectors(e.c,Go),Rr.subVectors(Us,Ds),Ar.subVectors(Hs,Us),jr.subVectors(Ds,Hs);let t=[0,-Rr.z,Rr.y,0,-Ar.z,Ar.y,0,-jr.z,jr.y,Rr.z,0,-Rr.x,Ar.z,0,-Ar.x,jr.z,0,-jr.x,-Rr.y,Rr.x,0,-Ar.y,Ar.x,0,-jr.y,jr.x,0];return!uh(t,Ds,Us,Hs,Ka)||(t=[1,0,0,0,1,0,0,0,1],!uh(t,Ds,Us,Hs,Ka))?!1:(Ja.crossVectors(Rr,Ar),t=[Ja.x,Ja.y,Ja.z],uh(t,Ds,Us,Hs,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hr=[new w,new w,new w,new w,new w,new w,new w,new w],Bi=new w,$a=new Dn,Ds=new w,Us=new w,Hs=new w,Rr=new w,Ar=new w,jr=new w,Go=new w,Ka=new w,Ja=new w,es=new w;function uh(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){es.fromArray(i,s);let a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),h=n.dot(es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var dx=new Dn,Wo=new w,dh=new w,Or=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);let t=Wo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Wo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(dh)),this.expandByPoint(Wo.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ur=new w,fh=new w,Qa=new w,Cr=new w,ph=new w,ja=new w,mh=new w,oa=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fh.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(fh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Qa),a=Cr.dot(this.direction),c=-Cr.dot(Qa),l=Cr.lengthSq(),h=Math.abs(1-o*o),p,d,f,g;if(h>0)if(p=o*c-a,d=o*a-c,g=s*h,p>=0)if(d>=-g)if(d<=g){let x=1/h;p*=x,d*=x,f=p*(p+o*d+2*a)+d*(o*p+d+2*c)+l}else d=s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*c)+l;else d=-s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*c)+l;else d<=-g?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-c),s),f=-p*p+d*(d+2*c)+l):d<=g?(p=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-c),s),f=-p*p+d*(d+2*c)+l);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(fh).addScaledVector(Qa,d),f}intersectSphere(e,t){ur.subVectors(e.center,this.origin);let n=ur.dot(this.direction),r=ur.dot(ur)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,n,r,s){ph.subVectors(t,e),ja.subVectors(n,e),mh.crossVectors(ph,ja);let o=this.direction.dot(mh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cr.subVectors(this.origin,e);let c=a*this.direction.dot(ja.crossVectors(Cr,ja));if(c<0)return null;let l=a*this.direction.dot(ph.cross(Cr));if(l<0||c+l>o)return null;let h=-a*Cr.dot(mh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class i{constructor(e,t,n,r,s,o,a,c,l,h,p,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,p,d,f,g,x,m)}set(e,t,n,r,s,o,a,c,l,h,p,d,f,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=d,u[3]=f,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*p,g=a*h,x=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*p,g=l*h,x=l*p;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*p,g=l*h,x=l*p;t[0]=d-x*a,t[4]=-o*p,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*p,g=a*h,x=a*p;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*p,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*p,t[8]=g*p+f,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*p+g,t[10]=d-x*p}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+x,t[5]=o*h,t[9]=f*p-g,t[2]=g*p-f,t[6]=a*h,t[10]=x*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,px)}lookAt(e,t,n){let r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Pr.crossVectors(n,gi),Pr.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Pr.crossVectors(n,gi)),Pr.normalize(),ec.crossVectors(gi,Pr),r[0]=Pr.x,r[4]=ec.x,r[8]=gi.x,r[1]=Pr.y,r[5]=ec.y,r[9]=gi.y,r[2]=Pr.z,r[6]=ec.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],u=n[14],E=n[3],y=n[7],_=n[11],P=n[15],b=r[0],R=r[4],A=r[8],O=r[12],v=r[1],T=r[5],k=r[9],V=r[13],z=r[2],H=r[6],ee=r[10],oe=r[14],se=r[3],de=r[7],N=r[11],ne=r[15];return s[0]=o*b+a*v+c*z+l*se,s[4]=o*R+a*T+c*H+l*de,s[8]=o*A+a*k+c*ee+l*N,s[12]=o*O+a*V+c*oe+l*ne,s[1]=h*b+p*v+d*z+f*se,s[5]=h*R+p*T+d*H+f*de,s[9]=h*A+p*k+d*ee+f*N,s[13]=h*O+p*V+d*oe+f*ne,s[2]=g*b+x*v+m*z+u*se,s[6]=g*R+x*T+m*H+u*de,s[10]=g*A+x*k+m*ee+u*N,s[14]=g*O+x*V+m*oe+u*ne,s[3]=E*b+y*v+_*z+P*se,s[7]=E*R+y*T+_*H+P*de,s[11]=E*A+y*k+_*ee+P*N,s[15]=E*O+y*V+_*oe+P*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*p-r*l*p-s*a*d+n*l*d+r*a*f-n*c*f)+x*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*h-s*c*h)+m*(+t*l*p-t*a*f-s*o*p+n*o*f+s*a*h-n*l*h)+u*(-r*a*h-t*c*p+t*a*d+r*o*p-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],u=e[15],E=p*m*l-x*d*l+x*c*f-a*m*f-p*c*u+a*d*u,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*u-o*d*u,_=h*x*l-g*p*l+g*a*f-o*x*f-h*a*u+o*p*u,P=g*p*c-h*x*c-g*a*d+o*x*d+h*a*m-o*p*m,b=t*E+n*y+r*_+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/b;return e[0]=E*R,e[1]=(x*d*s-p*m*s-x*r*f+n*m*f+p*r*u-n*d*u)*R,e[2]=(a*m*s-x*c*s+x*r*l-n*m*l-a*r*u+n*c*u)*R,e[3]=(p*c*s-a*d*s-p*r*l+n*d*l+a*r*f-n*c*f)*R,e[4]=y*R,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*u+t*d*u)*R,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*u-t*c*u)*R,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*f+t*c*f)*R,e[8]=_*R,e[9]=(g*p*s-h*x*s-g*n*f+t*x*f+h*n*u-t*p*u)*R,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*u+t*a*u)*R,e[11]=(h*a*s-o*p*s-h*n*l+t*p*l+o*n*f-t*a*f)*R,e[12]=P*R,e[13]=(h*x*r-g*p*r+g*n*d-t*x*d-h*n*m+t*p*m)*R,e[14]=(g*a*r-o*x*r-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*p*r-h*a*r+h*n*c-t*p*c-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,p=a+a,d=s*l,f=s*h,g=s*p,x=o*h,m=o*p,u=a*p,E=c*l,y=c*h,_=c*p,P=n.x,b=n.y,R=n.z;return r[0]=(1-(x+u))*P,r[1]=(f+_)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(f-_)*b,r[5]=(1-(d+u))*b,r[6]=(m+E)*b,r[7]=0,r[8]=(g+y)*R,r[9]=(m-E)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Ns.set(r[0],r[1],r[2]).length(),o=Ns.set(r[4],r[5],r[6]).length(),a=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ki.copy(this);let l=1/s,h=1/o,p=1/a;return ki.elements[0]*=l,ki.elements[1]*=l,ki.elements[2]*=l,ki.elements[4]*=h,ki.elements[5]*=h,ki.elements[6]*=h,ki.elements[8]*=p,ki.elements[9]*=p,ki.elements[10]*=p,t.setFromRotationMatrix(ki),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=gr){let c=this.elements,l=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),d=(n+r)/(n-r),f,g;if(a===gr)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Dc)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=gr){let c=this.elements,l=1/(t-e),h=1/(n-r),p=1/(o-s),d=(t+e)*l,f=(n+r)*h,g,x;if(a===gr)g=(o+s)*p,x=-2*p;else if(a===Dc)g=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ns=new w,ki=new Rt,fx=new w(0,0,0),px=new w(1,1,1),Pr=new w,ec=new w,gi=new w,Qf=new Rt,jf=new ft,ci=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],p=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mx=0,ep=new w,Fs=new ft,dr=new Rt,tc=new w,Xo=new w,gx=new w,xx=new ft,tp=new w(1,0,0),np=new w(0,1,0),ip=new w(0,0,1),rp={type:"added"},yx={type:"removed"},Os={type:"childadded",child:null},gh={type:"childremoved",child:null},yt=class i extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new ci,n=new ft,r=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Mt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(tp,e)}rotateY(e){return this.rotateOnAxis(np,e)}rotateZ(e){return this.rotateOnAxis(ip,e)}translateOnAxis(e,t){return ep.copy(e).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tp,e)}translateY(e){return this.translateOnAxis(np,e)}translateZ(e){return this.translateOnAxis(ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Xo,tc,this.up):dr.lookAt(tc,Xo,this.up),this.quaternion.setFromRotationMatrix(dr),r&&(dr.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(dr),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rp),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yx),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rp),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};yt.DEFAULT_UP=new w(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vi=new w,fr=new w,xh=new w,pr=new w,zs=new w,Bs=new w,sp=new w,yh=new w,vh=new w,_h=new w,Mh=new Qt,Eh=new Qt,wh=new Qt,as=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vi.subVectors(e,t),r.cross(Vi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vi.subVectors(r,t),fr.subVectors(n,t),xh.subVectors(e,t);let o=Vi.dot(Vi),a=Vi.dot(fr),c=Vi.dot(xh),l=fr.dot(fr),h=fr.dot(xh),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;let d=1/p,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,pr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pr.x),c.addScaledVector(o,pr.y),c.addScaledVector(a,pr.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Mh.setScalar(0),Eh.setScalar(0),wh.setScalar(0),Mh.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,n),wh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Mh,s.x),o.addScaledVector(Eh,s.y),o.addScaledVector(wh,s.z),o}static isFrontFacing(e,t,n,r){return Vi.subVectors(n,t),fr.subVectors(e,t),Vi.cross(fr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Vi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;zs.subVectors(r,n),Bs.subVectors(s,n),yh.subVectors(e,n);let c=zs.dot(yh),l=Bs.dot(yh);if(c<=0&&l<=0)return t.copy(n);vh.subVectors(e,r);let h=zs.dot(vh),p=Bs.dot(vh);if(h>=0&&p<=h)return t.copy(r);let d=c*p-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(zs,o);_h.subVectors(e,s);let f=zs.dot(_h),g=Bs.dot(_h);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Bs,a);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return sp.subVectors(s,r),a=(p-h)/(p-h+(f-g)),t.copy(r).addScaledVector(sp,a);let u=1/(m+x+d);return o=x*u,a=d*u,t.copy(n).addScaledVector(zs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Sh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Zt.workingColorSpace){if(e=xd(e,1),t=Tn(t,0,1),n=Tn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sh(o,s,e+1/3),this.g=Sh(o,s,e),this.b=Sh(o,s,e-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=d0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=ch(e.r),this.g=ch(e.g),this.b=ch(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Zt.fromWorkingColorSpace(Xn.copy(this),e),Math.round(Tn(Xn.r*255,0,255))*65536+Math.round(Tn(Xn.g*255,0,255))*256+Math.round(Tn(Xn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Xn.copy(this),t);let n=Xn.r,r=Xn.g,s=Xn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=xt){Zt.fromWorkingColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,r=Xn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(nc);let n=jo(Ir.h,nc.h,t),r=jo(Ir.s,nc.s,t),s=jo(Ir.l,nc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new pt;pt.NAMES=d0;var vx=0,zr=class extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=$s,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=kh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bh&&(n.blendSrc=this.blendSrc),this.blendDst!==kh&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},vt=class extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xn=new w,ic=new Oe,un=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xf,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),r=Qn(r,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xf&&(e.usage=this.usage),e}};var Nc=class extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fc=class extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}},_x=0,Si=new Rt,Th=new yt,ks=new w,xi=new Dn,qo=new Dn,Ln=new w,Pt=class i extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u0(e)?Fc:Nc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,n){return Si.makeTranslation(e,t,n),this.applyMatrix4(Si),this}scale(e,t,n){return Si.makeScale(e,t,n),this.applyMatrix4(Si),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(xi.min,qo.min),xi.expandByPoint(Ln),Ln.addVectors(xi.max,qo.max),xi.expandByPoint(Ln)):(xi.expandByPoint(qo.min),xi.expandByPoint(qo.max))}xi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ln.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ln));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ln.fromBufferAttribute(a,l),c&&(ks.fromBufferAttribute(e,l),Ln.add(ks)),r=Math.max(r,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new w,c[A]=new w;let l=new w,h=new w,p=new w,d=new Oe,f=new Oe,g=new Oe,x=new w,m=new w;function u(A,O,v){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,O),p.fromBufferAttribute(n,v),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,O),g.fromBufferAttribute(s,v),h.sub(l),p.sub(l),f.sub(d),g.sub(d);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(T),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[A].add(x),a[O].add(x),a[v].add(x),c[A].add(m),c[O].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let A=0,O=E.length;A<O;++A){let v=E[A],T=v.start,k=v.count;for(let V=T,z=T+k;V<z;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let y=new w,_=new w,P=new w,b=new w;function R(A){P.fromBufferAttribute(r,A),b.copy(P);let O=a[A];y.copy(O),y.sub(P.multiplyScalar(P.dot(O))).normalize(),_.crossVectors(b,O);let T=_.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,T)}for(let A=0,O=E.length;A<O;++A){let v=E[A],T=v.start,k=v.count;for(let V=T,z=T+k;V<z;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new w,s=new w,o=new w,a=new w,c=new w,l=new w,h=new w,p=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,p=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let u=0;u<h;u++)d[g++]=l[f++]}return new un(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,p=l.length;h<p;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){let f=l[p];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],p=s[l];for(let d=0,f=p.length;d<f;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},op=new Rt,ts=new oa,rc=new Or,ap=new w,sc=new w,oc=new w,ac=new w,bh=new w,cc=new w,cp=new w,lc=new w,lt=class extends yt{constructor(e=new Pt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){cc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],p=s[c];h!==0&&(bh.fromBufferAttribute(p,e),o?cc.addScaledVector(bh,h):cc.addScaledVector(bh.sub(t),h))}t.add(cc)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(rc.containsPoint(ts.origin)===!1&&(ts.intersectSphere(rc,ap)===null||ts.origin.distanceToSquared(ap)>(e.far-e.near)**2))&&(op.copy(s).invert(),ts.copy(e.ray).applyMatrix4(op),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,P=y;_<P;_+=3){let b=a.getX(_),R=a.getX(_+1),A=a.getX(_+2);r=hc(this,u,e,n,l,h,p,b,R,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let E=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);r=hc(this,o,e,n,l,h,p,E,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,P=y;_<P;_+=3){let b=_,R=_+1,A=_+2;r=hc(this,u,e,n,l,h,p,b,R,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let E=m,y=m+1,_=m+2;r=hc(this,o,e,n,l,h,p,E,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Mx(i,e,t,n,r,s,o,a){let c;if(e.side===yn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===tr,a),c===null)return null;lc.copy(a),lc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(lc);return l<t.near||l>t.far?null:{distance:l,point:lc.clone(),object:i}}function hc(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,sc),i.getVertexPosition(c,oc),i.getVertexPosition(l,ac);let h=Mx(i,e,t,n,sc,oc,ac,cp);if(h){let p=new w;as.getBarycoord(cp,sc,oc,ac,p),r&&(h.uv=as.getInterpolatedAttribute(r,a,c,l,p,new Oe)),s&&(h.uv1=as.getInterpolatedAttribute(s,a,c,l,p,new Oe)),o&&(h.normal=as.getInterpolatedAttribute(o,a,c,l,p,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new w,materialIndex:0};as.getNormal(sc,oc,ac,d.normal),h.face=d,h.barycoord=p}return h}var Et=class i extends Pt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],p=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(p,2));function g(x,m,u,E,y,_,P,b,R,A,O){let v=_/R,T=P/A,k=_/2,V=P/2,z=b/2,H=R+1,ee=A+1,oe=0,se=0,de=new w;for(let N=0;N<ee;N++){let ne=N*T-V;for(let Q=0;Q<H;Q++){let te=Q*v-k;de[x]=te*E,de[m]=ne*y,de[u]=z,l.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[u]=b>0?1:-1,h.push(de.x,de.y,de.z),p.push(Q/R),p.push(1-N/A),oe+=1}}for(let N=0;N<A;N++)for(let ne=0;ne<R;ne++){let Q=d+ne+H*N,te=d+ne+H*(N+1),F=d+(ne+1)+H*(N+1),ie=d+(ne+1)+H*N;c.push(Q,te,ie),c.push(te,F,ie),se+=6}a.addGroup(f,se,O),f+=se,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function so(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=so(i[t]);for(let r in n)e[r]=n[r]}return e}function Ex(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function f0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Zt.workingColorSpace}var wx={clone:so,merge:jn},Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nr=class extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Oc=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Lr=new w,lp=new Oe,hp=new Oe,On=class extends Oc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,lp,hp),t.subVectors(hp,lp)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Gs=1,Ru=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new On(Vs,Gs,e,t);r.layers=this.layers,this.add(r);let s=new On(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let o=new On(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let a=new On(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let c=new On(Vs,Gs,e,t);c.layers=this.layers,this.add(c);let l=new On(Vs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},zc=class extends ei{constructor(e,t,n,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Au=class extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Et(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Ur});s.uniforms.tEquirect.value=t;let o=new lt(r,s),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=pn),new Ru(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Rh=new w,bx=new w,Rx=new Mt,Ti=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rh.subVectors(n,t).cross(bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rx.getNormalMatrix(e),r=this.coplanarPoint(Rh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new Or,uc=new w,ca=class{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],p=r[6],d=r[7],f=r[8],g=r[9],x=r[10],m=r[11],u=r[12],E=r[13],y=r[14],_=r[15];if(n[0].setComponents(c-s,d-l,m-f,_-u).normalize(),n[1].setComponents(c+s,d+l,m+f,_+u).normalize(),n[2].setComponents(c+o,d+h,m+g,_+E).normalize(),n[3].setComponents(c-o,d-h,m-g,_-E).normalize(),n[4].setComponents(c-a,d-p,m-x,_-y).normalize(),t===gr)n[5].setComponents(c+a,d+p,m+x,_+y).normalize();else if(t===Dc)n[5].setComponents(a,p,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(uc.x=r.normal.x>0?e.max.x:e.min.x,uc.y=r.normal.y>0?e.max.y:e.min.y,uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function p0(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ax(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){let g=p[d],x=p[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,p[d]=x)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){let x=p[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var bt=class i extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,p=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let E=u*d-o;for(let y=0;y<l;y++){let _=y*p-s;g.push(_,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){let y=E+l*u,_=E+l*(u+1),P=E+1+l*(u+1),b=E+1+l*u;f.push(y,_,b),f.push(_,P,b)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
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
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
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
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fx=`#ifdef USE_BATCHING
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
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qx=`#define PI 3.141592653589793
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
} // validated`,jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ey=`vec3 transformedNormal = objectNormal;
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
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`
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
}`,ay=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gy=`#ifdef USE_GRADIENTMAP
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
}`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_y=`uniform bool receiveShadow;
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
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,by=`PhysicalMaterial material;
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
#endif`,Ry=`struct PhysicalMaterial {
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
}`,Ay=`
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
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Oy=`#if defined( USE_POINTS_UV )
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
#endif`,zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,Qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fv=`float getShadowMask() {
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
}`,pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mv=`#ifdef USE_SKINNING
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
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Hv=`#if DEPTH_PACKING == 3200
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
}`,Nv=`#define DISTANCE
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
}`,Fv=`#define DISTANCE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`uniform float scale;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Vv=`#include <common>
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Wv=`#define LAMBERT
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define MATCAP
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
}`,Yv=`#define MATCAP
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
}`,Zv=`#define NORMAL
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
}`,$v=`#define NORMAL
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
}`,Kv=`#define PHONG
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
}`,Jv=`#define PHONG
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
}`,Qv=`#define STANDARD
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
}`,jv=`#define STANDARD
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
}`,e_=`#define TOON
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
}`,t_=`#define TOON
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
}`,n_=`uniform float size;
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
}`,i_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,o_=`uniform float rotation;
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
}`,a_=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:Cx,alphahash_pars_fragment:Px,alphamap_fragment:Ix,alphamap_pars_fragment:Lx,alphatest_fragment:Dx,alphatest_pars_fragment:Ux,aomap_fragment:Hx,aomap_pars_fragment:Nx,batching_pars_vertex:Fx,batching_vertex:Ox,begin_vertex:zx,beginnormal_vertex:Bx,bsdfs:kx,iridescence_fragment:Vx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:Yx,color_fragment:Zx,color_pars_fragment:$x,color_pars_vertex:Kx,color_vertex:Jx,common:Qx,cube_uv_reflection_fragment:jx,defaultnormal_vertex:ey,displacementmap_pars_vertex:ty,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:ry,colorspace_fragment:sy,colorspace_pars_fragment:oy,envmap_fragment:ay,envmap_common_pars_fragment:cy,envmap_pars_fragment:ly,envmap_pars_vertex:hy,envmap_physical_pars_fragment:My,envmap_vertex:uy,fog_vertex:dy,fog_pars_vertex:fy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:gy,lightmap_pars_fragment:xy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:vy,lights_pars_begin:_y,lights_toon_fragment:Ey,lights_toon_pars_fragment:wy,lights_phong_fragment:Sy,lights_phong_pars_fragment:Ty,lights_physical_fragment:by,lights_physical_pars_fragment:Ry,lights_fragment_begin:Ay,lights_fragment_maps:Cy,lights_fragment_end:Py,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Uy,map_fragment:Hy,map_pars_fragment:Ny,map_particle_fragment:Fy,map_particle_pars_fragment:Oy,metalnessmap_fragment:zy,metalnessmap_pars_fragment:By,morphinstance_vertex:ky,morphcolor_vertex:Vy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Wy,morphtarget_vertex:Xy,normal_fragment_begin:qy,normal_fragment_maps:Yy,normal_pars_fragment:Zy,normal_pars_vertex:$y,normal_vertex:Ky,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:Qy,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:ev,iridescence_pars_fragment:tv,opaque_fragment:nv,packing:iv,premultiplied_alpha_fragment:rv,project_vertex:sv,dithering_fragment:ov,dithering_pars_fragment:av,roughnessmap_fragment:cv,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:uv,shadowmap_vertex:dv,shadowmask_pars_fragment:fv,skinbase_vertex:pv,skinning_pars_vertex:mv,skinning_vertex:gv,skinnormal_vertex:xv,specularmap_fragment:yv,specularmap_pars_fragment:vv,tonemapping_fragment:_v,tonemapping_pars_fragment:Mv,transmission_fragment:Ev,transmission_pars_fragment:wv,uv_pars_fragment:Sv,uv_pars_vertex:Tv,uv_vertex:bv,worldpos_vertex:Rv,background_vert:Av,background_frag:Cv,backgroundCube_vert:Pv,backgroundCube_frag:Iv,cube_vert:Lv,cube_frag:Dv,depth_vert:Uv,depth_frag:Hv,distanceRGBA_vert:Nv,distanceRGBA_frag:Fv,equirect_vert:Ov,equirect_frag:zv,linedashed_vert:Bv,linedashed_frag:kv,meshbasic_vert:Vv,meshbasic_frag:Gv,meshlambert_vert:Wv,meshlambert_frag:Xv,meshmatcap_vert:qv,meshmatcap_frag:Yv,meshnormal_vert:Zv,meshnormal_frag:$v,meshphong_vert:Kv,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:jv,meshtoon_vert:e_,meshtoon_frag:t_,points_vert:n_,points_frag:i_,shadow_vert:r_,shadow_frag:s_,sprite_vert:o_,sprite_frag:a_},$e={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ji={basic:{uniforms:jn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:jn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new pt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:jn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:jn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:jn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new pt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:jn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:jn([$e.points,$e.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:jn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:jn([$e.common,$e.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:jn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:jn([$e.sprite,$e.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:jn([$e.common,$e.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:jn([$e.lights,$e.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ji.physical={uniforms:jn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var dc={r:0,b:0,g:0},is=new ci,c_=new Rt;function l_(i,e,t,n,r,s,o){let a=new pt(0),c=s===!0?0:1,l,h,p=null,d=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1,_=g(E);_===null?u(a,c):_&&_.isColor&&(u(_,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===rl)?(h===void 0&&(h=new lt(new Et(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:so(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),is.copy(y.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(is)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==sn,(p!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,p=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new lt(new bt(2,2),new nr({name:"BackgroundMaterial",uniforms:so(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==sn,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,p=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,y){E.getRGB(dc,f0(i)),n.buffers.color.setClear(dc.r,dc.g,dc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:x,addToRenderList:m}}function h_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(v,T,k,V,z){let H=!1,ee=p(V,k,T);s!==ee&&(s=ee,l(s.object)),H=f(v,V,k,z),H&&g(v,V,k,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(v,T,k,V),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function p(v,T,k){let V=k.wireframe===!0,z=n[v.id];z===void 0&&(z={},n[v.id]=z);let H=z[T.id];H===void 0&&(H={},z[T.id]=H);let ee=H[V];return ee===void 0&&(ee=d(c()),H[V]=ee),ee}function d(v){let T=[],k=[],V=[];for(let z=0;z<t;z++)T[z]=0,k[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:V,object:v,attributes:{},index:null}}function f(v,T,k,V){let z=s.attributes,H=T.attributes,ee=0,oe=k.getAttributes();for(let se in oe)if(oe[se].location>=0){let N=z[se],ne=H[se];if(ne===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),N===void 0||N.attribute!==ne||ne&&N.data!==ne.data)return!0;ee++}return s.attributesNum!==ee||s.index!==V}function g(v,T,k,V){let z={},H=T.attributes,ee=0,oe=k.getAttributes();for(let se in oe)if(oe[se].location>=0){let N=H[se];N===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));let ne={};ne.attribute=N,N&&N.data&&(ne.data=N.data),z[se]=ne,ee++}s.attributes=z,s.attributesNum=ee,s.index=V}function x(){let v=s.newAttributes;for(let T=0,k=v.length;T<k;T++)v[T]=0}function m(v){u(v,0)}function u(v,T){let k=s.newAttributes,V=s.enabledAttributes,z=s.attributeDivisors;k[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),z[v]!==T&&(i.vertexAttribDivisor(v,T),z[v]=T)}function E(){let v=s.newAttributes,T=s.enabledAttributes;for(let k=0,V=T.length;k<V;k++)T[k]!==v[k]&&(i.disableVertexAttribArray(k),T[k]=0)}function y(v,T,k,V,z,H,ee){ee===!0?i.vertexAttribIPointer(v,T,k,z,H):i.vertexAttribPointer(v,T,k,V,z,H)}function _(v,T,k,V){x();let z=V.attributes,H=k.getAttributes(),ee=T.defaultAttributeValues;for(let oe in H){let se=H[oe];if(se.location>=0){let de=z[oe];if(de===void 0&&(oe==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),oe==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),de!==void 0){let N=de.normalized,ne=de.itemSize,Q=e.get(de);if(Q===void 0)continue;let te=Q.buffer,F=Q.type,ie=Q.bytesPerElement,q=F===i.INT||F===i.UNSIGNED_INT||de.gpuType===cd;if(de.isInterleavedBufferAttribute){let W=de.data,Z=W.stride,ge=de.offset;if(W.isInstancedInterleavedBuffer){for(let we=0;we<se.locationSize;we++)u(se.location+we,W.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let we=0;we<se.locationSize;we++)m(se.location+we);i.bindBuffer(i.ARRAY_BUFFER,te);for(let we=0;we<se.locationSize;we++)y(se.location+we,ne/se.locationSize,F,N,Z*ie,(ge+ne/se.locationSize*we)*ie,q)}else{if(de.isInstancedBufferAttribute){for(let W=0;W<se.locationSize;W++)u(se.location+W,de.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let W=0;W<se.locationSize;W++)m(se.location+W);i.bindBuffer(i.ARRAY_BUFFER,te);for(let W=0;W<se.locationSize;W++)y(se.location+W,ne/se.locationSize,F,N,ne*ie,ne/se.locationSize*W*ie,q)}}else if(ee!==void 0){let N=ee[oe];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(se.location,N);break;case 3:i.vertexAttrib3fv(se.location,N);break;case 4:i.vertexAttrib4fv(se.location,N);break;default:i.vertexAttrib1fv(se.location,N)}}}}E()}function P(){A();for(let v in n){let T=n[v];for(let k in T){let V=T[k];for(let z in V)h(V[z].object),delete V[z];delete T[k]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;let T=n[v.id];for(let k in T){let V=T[k];for(let z in V)h(V[z].object),delete V[z];delete T[k]}delete n[v.id]}function R(v){for(let T in n){let k=n[T];if(k[v.id]===void 0)continue;let V=k[v.id];for(let z in V)h(V[z].object),delete V[z];delete k[v.id]}}function A(){O(),o=!0,s!==r&&(s=r,l(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function u_(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),t.update(h,n,p))}function a(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let f=0;for(let g=0;g<p;g++)f+=h[g];t.update(f,n,1)}function c(l,h,p,d){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function d_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==yi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let A=R===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xr&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==er&&!A)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:b}}function f_(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Ti,a=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||r;return r=d,n=p.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,f){let g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let E=s?0:n,y=E*4,_=u.clippingState||null;c.value=_,_=h(g,d,y,f);for(let P=0;P!==y;++P)_[P]=t[P];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,f,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=f+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(p[y]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function p_(i){let e=new WeakMap;function t(o,a){return a===ia?o.mapping=eo:a===$h&&(o.mapping=to),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ia||a===$h)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Au(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Bc=class extends Oc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ys=4,up=[.125,.215,.35,.446,.526,.582],cs=20,Ah=new Bc,dp=new pt,Ch=null,Ph=0,Ih=0,Lh=!1,ss=(1+Math.sqrt(5))/2,Ws=1/ss,fp=[new w(-ss,Ws,0),new w(ss,Ws,0),new w(-Ws,0,ss),new w(Ws,0,ss),new w(0,ss,-Ws),new w(0,ss,Ws),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ch=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Ph,Ih),this._renderer.xr.enabled=Lh,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ya,format:yi,colorSpace:Gr,depthBuffer:!1},r=pp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(s)),this._blurMaterial=g_(s,e,t)}return r}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Ah)}_sceneToCubeUV(e,t,n,r){let a=new On(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(dp),h.toneMapping=Hr,h.autoClear=!1;let f=new vt({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new lt(new Et,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(dp),x=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let y=this._cubeSize;fc(r,E*y,u>2?y:0,y,y),h.setRenderTarget(r),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===eo||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;fc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ah)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fp[(r-s-1)%fp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new lt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*cs-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):cs;m>cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);let u=[],E=0;for(let R=0;R<cs;++R){let A=R/x,O=Math.exp(-A*A/2);u.push(O),R===0?E+=O:R<m&&(E+=2*O)}for(let R=0;R<u.length;R++)u[R]=u[R]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[r],P=3*_*(r>y-Ys?r-y+Ys:0),b=4*(this._cubeSize-_);fc(t,P,b,3*_,2*_),c.setRenderTarget(t),c.render(p,Ah)}};function m_(i){let e=[],t=[],n=[],r=i,s=i-Ys+1+up.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Ys?c=up[o-i+Ys-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,p=1+l,d=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,g=6,x=3,m=2,u=1,E=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(u*g*f);for(let b=0;b<f;b++){let R=b%3*2/3-1,A=b>2?0:-1,O=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];E.set(O,x*g*b),y.set(d,m*g*b);let v=[b,b,b,b,b,b];_.set(v,u*g*b)}let P=new Pt;P.setAttribute("position",new un(E,x)),P.setAttribute("uv",new un(y,m)),P.setAttribute("faceIndex",new un(_,u)),e.push(P),r>Ys&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pp(i,e,t){let n=new yr(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function g_(i,e,t){let n=new Float32Array(cs),r=new w(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yd(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function mp(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function gp(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function yd(){return`

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
	`}function x_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ia||c===$h,h=c===eo||c===to;if(l||h){let p=e.get(a),d=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new oo(i)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new oo(i)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function y_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Rc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function v_(i,e,t,n){let r={},s=new WeakMap;function o(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(p){let d=p.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=p.morphAttributes;for(let g in f){let x=f[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(p){let d=[],f=p.index,g=p.attributes.position,x=0;if(f!==null){let E=f.array;x=f.version;for(let y=0,_=E.length;y<_;y+=3){let P=E[y+0],b=E[y+1],R=E[y+2];d.push(P,b,b,R,R,P)}}else if(g!==void 0){let E=g.array;x=g.version;for(let y=0,_=E.length/3-1;y<_;y+=3){let P=y+0,b=y+1,R=y+2;d.push(P,b,b,R,R,P)}}else return;let m=new(u0(d)?Fc:Nc)(d,1);m.version=x;let u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){let d=s.get(p);if(d){let f=p.index;f!==null&&d.version<f.version&&l(p)}else l(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function __(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,n,1)}function p(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)l(d[u]/o,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,g);let u=0;for(let E=0;E<g;E++)u+=f[E];for(let E=0;E<x.length;E++)t.update(u,n,x[E])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function M_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function E_(i,e,t){let n=new WeakMap,r=new Qt;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==p){let O=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*P*4*p),R=new Hc(b,_,P,p);R.type=er,R.needsUpdate=!0;let A=y*4;for(let v=0;v<p;v++){let T=m[v],k=u[v],V=E[v],z=_*P*4*v;for(let H=0;H<T.count;H++){let ee=H*A;f===!0&&(r.fromBufferAttribute(T,H),b[z+ee+0]=r.x,b[z+ee+1]=r.y,b[z+ee+2]=r.z,b[z+ee+3]=0),g===!0&&(r.fromBufferAttribute(k,H),b[z+ee+4]=r.x,b[z+ee+5]=r.y,b[z+ee+6]=r.z,b[z+ee+7]=0),x===!0&&(r.fromBufferAttribute(V,H),b[z+ee+8]=r.x,b[z+ee+9]=r.y,b[z+ee+10]=r.z,b[z+ee+11]=V.itemSize===4?r.w:1)}}d={count:p,texture:R,size:new Oe(_,P)},n.set(a,d),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function w_(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return p}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var kc=class extends ei{constructor(e,t,n,r,s,o,a,c,l,h=Ks){if(h!==Ks&&h!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ks&&(n=us),n===void 0&&h===io&&(n=no),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ai,this.minFilter=c!==void 0?c:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},m0=new ei,xp=new kc(1,1),g0=new Hc,x0=new bu,y0=new zc,yp=[],vp=[],_p=new Float32Array(16),Mp=new Float32Array(9),Ep=new Float32Array(4);function fo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=yp[r];if(s===void 0&&(s=new Float32Array(r),yp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function bn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ol(i,e){let t=vp[e];t===void 0&&(t=new Int32Array(e),vp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function S_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2fv(this.addr,e),Rn(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;i.uniform3fv(this.addr,e),Rn(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4fv(this.addr,e),Rn(t,e)}}function A_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(bn(t,n))return;Ep.set(n),i.uniformMatrix2fv(this.addr,!1,Ep),Rn(t,n)}}function C_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(bn(t,n))return;Mp.set(n),i.uniformMatrix3fv(this.addr,!1,Mp),Rn(t,n)}}function P_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(bn(t,n))return;_p.set(n),i.uniformMatrix4fv(this.addr,!1,_p),Rn(t,n)}}function I_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2iv(this.addr,e),Rn(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3iv(this.addr,e),Rn(t,e)}}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4iv(this.addr,e),Rn(t,e)}}function H_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2uiv(this.addr,e),Rn(t,e)}}function F_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3uiv(this.addr,e),Rn(t,e)}}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4uiv(this.addr,e),Rn(t,e)}}function z_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xp.compareFunction=h0,s=xp):s=m0,t.setTexture2D(e||s,r)}function B_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||x0,r)}function k_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||y0,r)}function V_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||g0,r)}function G_(i){switch(i){case 5126:return S_;case 35664:return T_;case 35665:return b_;case 35666:return R_;case 35674:return A_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return U_;case 5125:return H_;case 36294:return N_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return V_}}function W_(i,e){i.uniform1fv(this.addr,e)}function X_(i,e){let t=fo(e,this.size,2);i.uniform2fv(this.addr,t)}function q_(i,e){let t=fo(e,this.size,3);i.uniform3fv(this.addr,t)}function Y_(i,e){let t=fo(e,this.size,4);i.uniform4fv(this.addr,t)}function Z_(i,e){let t=fo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $_(i,e){let t=fo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function K_(i,e){let t=fo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function J_(i,e){i.uniform1iv(this.addr,e)}function Q_(i,e){i.uniform2iv(this.addr,e)}function j_(i,e){i.uniform3iv(this.addr,e)}function e2(i,e){i.uniform4iv(this.addr,e)}function t2(i,e){i.uniform1uiv(this.addr,e)}function n2(i,e){i.uniform2uiv(this.addr,e)}function i2(i,e){i.uniform3uiv(this.addr,e)}function r2(i,e){i.uniform4uiv(this.addr,e)}function s2(i,e,t){let n=this.cache,r=e.length,s=ol(t,r);bn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||m0,s[o])}function o2(i,e,t){let n=this.cache,r=e.length,s=ol(t,r);bn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||x0,s[o])}function a2(i,e,t){let n=this.cache,r=e.length,s=ol(t,r);bn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||y0,s[o])}function c2(i,e,t){let n=this.cache,r=e.length,s=ol(t,r);bn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||g0,s[o])}function l2(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return q_;case 35666:return Y_;case 35674:return Z_;case 35675:return $_;case 35676:return K_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return j_;case 35669:case 35673:return e2;case 5125:return t2;case 36294:return n2;case 36295:return i2;case 36296:return r2;case 35678:case 36198:case 36298:case 36306:case 35682:return s2;case 35679:case 36299:case 36307:return o2;case 35680:case 36300:case 36308:case 36293:return a2;case 36289:case 36303:case 36311:case 36292:return c2}}var Cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=G_(t.type)}},Pu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l2(t.type)}},Iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Dh=/(\w+)(\])?(\[|\.)?/g;function wp(i,e){i.seq.push(e),i.map[e.id]=e}function h2(i,e,t){let n=i.name,r=n.length;for(Dh.lastIndex=0;;){let s=Dh.exec(n),o=Dh.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){wp(t,l===void 0?new Cu(a,i,e):new Pu(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Iu(a),wp(t,p)),t=p}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);h2(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Sp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u2=37297,d2=0;function f2(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function p2(i){let e=Zt.getPrimaries(Zt.workingColorSpace),t=Zt.getPrimaries(i),n;switch(e===t?n="":e===Lc&&t===Ic?n="LinearDisplayP3ToLinearSRGB":e===Ic&&t===Lc&&(n="LinearSRGBToLinearDisplayP3"),i){case Gr:case sl:return[n,"LinearTransferOETF"];case xt:case gd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+f2(i.getShaderSource(e),o)}else return r}function m2(i,e){let t=p2(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function g2(i,e){let t;switch(e){case R1:t="Linear";break;case A1:t="Reinhard";break;case C1:t="Cineon";break;case ad:t="ACESFilmic";break;case I1:t="AgX";break;case L1:t="Neutral";break;case P1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pc=new w;function x2(){Zt.getLuminanceCoefficients(pc);let i=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function v2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jo(i){return i!==""}function bp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(i){return i.replace(M2,w2)}var E2=new Map;function w2(i,e){let t=Tt[e];if(t===void 0){let n=E2.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lu(t)}var S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(i){return i.replace(S2,T2)}function T2(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function b2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===od?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function R2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function C2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qp:e="ENVMAP_BLENDING_MULTIPLY";break;case T1:e="ENVMAP_BLENDING_MIX";break;case b1:e="ENVMAP_BLENDING_ADD";break}return e}function P2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I2(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=b2(t),l=R2(t),h=A2(t),p=C2(t),d=P2(t),f=y2(t),g=v2(s),x=r.createProgram(),m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jo).join(`
`),u.length>0&&(u+=`
`)):(m=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),u=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Hr?g2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,m2("linearToOutputTexel",t.outputColorSpace),x2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),o=Lu(o),o=bp(o,t),o=Rp(o,t),a=Lu(a),a=bp(a,t),a=Rp(a,t),o=Ap(o),a=Ap(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=E+m+o,_=E+u+a,P=Sp(r,r.VERTEX_SHADER,y),b=Sp(r,r.FRAGMENT_SHADER,_);r.attachShader(x,P),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(T){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(P).trim(),z=r.getShaderInfoLog(b).trim(),H=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,P,b);else{let oe=Tp(r,P,"vertex"),se=Tp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+oe+`
`+se)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||z==="")&&(ee=!1);ee&&(T.diagnostics={runnable:H,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:z,prefix:u}})}r.deleteShader(P),r.deleteShader(b),A=new Qs(r,x),O=_2(r,x)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let O;this.getAttributes=function(){return O===void 0&&R(this),O};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,u2)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=b,this}var L2=0,Du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uu(e),t.set(e,n)),n}},Uu=class{constructor(e){this.id=L2++,this.code=e,this.usedTimes=0}};function D2(i,e,t,n,r,s,o){let a=new aa,c=new Du,l=new Set,h=[],p=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures,g=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function u(v,T,k,V,z){let H=V.fog,ee=z.geometry,oe=v.isMeshStandardMaterial?V.environment:null,se=(v.isMeshStandardMaterial?t:e).get(v.envMap||oe),de=se&&se.mapping===rl?se.image.height:null,N=x[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ne=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Q=ne!==void 0?ne.length:0,te=0;ee.morphAttributes.position!==void 0&&(te=1),ee.morphAttributes.normal!==void 0&&(te=2),ee.morphAttributes.color!==void 0&&(te=3);let F,ie,q,W;if(N){let St=ji[N];F=St.vertexShader,ie=St.fragmentShader}else F=v.vertexShader,ie=v.fragmentShader,c.update(v),q=c.getVertexShaderID(v),W=c.getFragmentShaderID(v);let Z=i.getRenderTarget(),ge=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,pe=!!v.map,re=!!v.matcap,L=!!se,xe=!!v.aoMap,Re=!!v.lightMap,ve=!!v.bumpMap,be=!!v.normalMap,Le=!!v.displacementMap,Ce=!!v.emissiveMap,D=!!v.metalnessMap,S=!!v.roughnessMap,K=v.anisotropy>0,fe=v.clearcoat>0,ye=v.dispersion>0,_e=v.iridescence>0,ke=v.sheen>0,Ue=v.transmission>0,Ve=K&&!!v.anisotropyMap,nt=fe&&!!v.clearcoatMap,De=fe&&!!v.clearcoatNormalMap,$=fe&&!!v.clearcoatRoughnessMap,me=_e&&!!v.iridescenceMap,Ae=_e&&!!v.iridescenceThicknessMap,Pe=ke&&!!v.sheenColorMap,Se=ke&&!!v.sheenRoughnessMap,he=!!v.specularMap,We=!!v.specularColorMap,X=!!v.specularIntensityMap,Te=Ue&&!!v.transmissionMap,ae=Ue&&!!v.thicknessMap,Me=!!v.gradientMap,He=!!v.alphaMap,ze=v.alphaTest>0,ut=!!v.alphaHash,It=!!v.extensions,Ot=Hr;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let mt={shaderID:N,shaderType:v.type,shaderName:v.name,vertexShader:F,fragmentShader:ie,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:ge,instancingColor:ge&&z.instanceColor!==null,instancingMorph:ge&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Gr,alphaToCoverage:!!v.alphaToCoverage,map:pe,matcap:re,envMap:L,envMapMode:L&&se.mapping,envMapCubeUVHeight:de,aoMap:xe,lightMap:Re,bumpMap:ve,normalMap:be,displacementMap:f&&Le,emissiveMap:Ce,normalMapObjectSpace:be&&v.normalMapType===H1,normalMapTangentSpace:be&&v.normalMapType===l0,metalnessMap:D,roughnessMap:S,anisotropy:K,anisotropyMap:Ve,clearcoat:fe,clearcoatMap:nt,clearcoatNormalMap:De,clearcoatRoughnessMap:$,dispersion:ye,iridescence:_e,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:ke,sheenColorMap:Pe,sheenRoughnessMap:Se,specularMap:he,specularColorMap:We,specularIntensityMap:X,transmission:Ue,transmissionMap:Te,thicknessMap:ae,gradientMap:Me,opaque:v.transparent===!1&&v.blending===$s&&v.alphaToCoverage===!1,alphaMap:He,alphaTest:ze,alphaHash:ut,combine:v.combine,mapUv:pe&&m(v.map.channel),aoMapUv:xe&&m(v.aoMap.channel),lightMapUv:Re&&m(v.lightMap.channel),bumpMapUv:ve&&m(v.bumpMap.channel),normalMapUv:be&&m(v.normalMap.channel),displacementMapUv:Le&&m(v.displacementMap.channel),emissiveMapUv:Ce&&m(v.emissiveMap.channel),metalnessMapUv:D&&m(v.metalnessMap.channel),roughnessMapUv:S&&m(v.roughnessMap.channel),anisotropyMapUv:Ve&&m(v.anisotropyMap.channel),clearcoatMapUv:nt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(v.sheenRoughnessMap.channel),specularMapUv:he&&m(v.specularMap.channel),specularColorMapUv:We&&m(v.specularColorMap.channel),specularIntensityMapUv:X&&m(v.specularIntensityMap.channel),transmissionMapUv:Te&&m(v.transmissionMap.channel),thicknessMapUv:ae&&m(v.thicknessMap.channel),alphaMapUv:He&&m(v.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(be||K),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(pe||He),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:pe&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===sn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dt,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function E(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)T.push(k),T.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(y(T,v),_(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function y(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function _(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function P(v){let T=x[v.type],k;if(T){let V=ji[T];k=wx.clone(V.uniforms)}else k=v.uniforms;return k}function b(v,T){let k;for(let V=0,z=h.length;V<z;V++){let H=h[V];if(H.cacheKey===T){k=H,++k.usedTimes;break}}return k===void 0&&(k=new I2(i,T,v,s),h.push(k)),k}function R(v){if(--v.usedTimes===0){let T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),v.destroy()}}function A(v){c.remove(v)}function O(){c.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:P,acquireProgram:b,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:O}}function U2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function H2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ip(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,d,f,g,x,m){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:d,material:f,groupOrder:g,renderOrder:p.renderOrder,z:x,group:m},i[e]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=f,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=x,u.group=m),e++,u}function a(p,d,f,g,x,m){let u=o(p,d,f,g,x,m);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):t.push(u)}function c(p,d,f,g,x,m){let u=o(p,d,f,g,x,m);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function l(p,d){t.length>1&&t.sort(p||H2),n.length>1&&n.sort(d||Pp),r.length>1&&r.sort(d||Pp)}function h(){for(let p=e,d=i.length;p<d;p++){let f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function N2(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Ip,i.set(n,[o])):r>=s.length?(o=new Ip,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new pt};break;case"SpotLight":t={position:new w,direction:new w,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function O2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var z2=0;function B2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function k2(i){let e=new F2,t=O2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let r=new w,s=new Rt,o=new Rt;function a(l){let h=0,p=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,x=0,m=0,u=0,E=0,y=0,_=0,P=0,b=0,R=0;l.sort(B2);for(let O=0,v=l.length;O<v;O++){let T=l[O],k=T.color,V=T.intensity,z=T.distance,H=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=k.r*V,p+=k.g*V,d+=k.b*V;else if(T.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(T.sh.coefficients[ee],V);R++}else if(T.isDirectionalLight){let ee=e.get(T);if(ee.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let oe=T.shadow,se=t.get(T);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,n.directionalShadow[f]=se,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=T.shadow.matrix,E++}n.directional[f]=ee,f++}else if(T.isSpotLight){let ee=e.get(T);ee.position.setFromMatrixPosition(T.matrixWorld),ee.color.copy(k).multiplyScalar(V),ee.distance=z,ee.coneCos=Math.cos(T.angle),ee.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),ee.decay=T.decay,n.spot[x]=ee;let oe=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,oe.updateMatrices(T),T.castShadow&&b++),n.spotLightMatrix[x]=oe.matrix,T.castShadow){let se=t.get(T);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,n.spotShadow[x]=se,n.spotShadowMap[x]=H,_++}x++}else if(T.isRectAreaLight){let ee=e.get(T);ee.color.copy(k).multiplyScalar(V),ee.halfWidth.set(T.width*.5,0,0),ee.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=ee,m++}else if(T.isPointLight){let ee=e.get(T);if(ee.color.copy(T.color).multiplyScalar(T.intensity),ee.distance=T.distance,ee.decay=T.decay,T.castShadow){let oe=T.shadow,se=t.get(T);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,se.shadowCameraNear=oe.camera.near,se.shadowCameraFar=oe.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=ee,g++}else if(T.isHemisphereLight){let ee=e.get(T);ee.skyColor.copy(T.color).multiplyScalar(V),ee.groundColor.copy(T.groundColor).multiplyScalar(V),n.hemi[u]=ee,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$e.LTC_FLOAT_1,n.rectAreaLTC2=$e.LTC_FLOAT_2):(n.rectAreaLTC1=$e.LTC_HALF_1,n.rectAreaLTC2=$e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==u||A.numDirectionalShadows!==E||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==P||A.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,A.directionalLength=f,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=u,A.numDirectionalShadows=E,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=P,A.numLightProbes=R,n.version=z2++)}function c(l,h){let p=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){let y=l[u];if(y.isDirectionalLight){let _=n.directional[p];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Lp(i){let e=new k2(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function V2(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Lp(i),e.set(r,[a])):s>=o.length?(a=new Lp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var la=class extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hu=class extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},G2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W2=`uniform sampler2D shadow_pass;
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
}`;function X2(i,e,t){let n=new ca,r=new Oe,s=new Oe,o=new Qt,a=new la({depthPacking:md}),c=new Hu,l={},h=t.maxTextureSize,p={[tr]:yn,[yn]:tr,[Dt]:Dt},d=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:G2,fragmentShader:W2}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jp;let u=this.type;this.render=function(b,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let O=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ur),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=u!==mr&&this.type===mr,z=u===mr&&this.type!==mr;for(let H=0,ee=b.length;H<ee;H++){let oe=b[H],se=oe.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);let de=se.getFrameExtents();if(r.multiply(de),s.copy(se.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,se.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,se.mapSize.y=s.y)),se.map===null||V===!0||z===!0){let ne=this.type!==mr?{minFilter:ai,magFilter:ai}:{};se.map!==null&&se.map.dispose(),se.map=new yr(r.x,r.y,ne),se.map.texture.name=oe.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let N=se.getViewportCount();for(let ne=0;ne<N;ne++){let Q=se.getViewport(ne);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),k.viewport(o),se.updateMatrices(oe,ne),n=se.getFrustum(),_(R,A,se.camera,oe,this.type)}se.isPointLightShadow!==!0&&this.type===mr&&E(se,A),se.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(O,v,T)};function E(b,R){let A=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,A,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,A,f,x,null)}function y(b,R,A,O){let v=null,T=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)v=T;else if(v=A.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=v.uuid,V=R.uuid,z=l[k];z===void 0&&(z={},l[k]=z);let H=z[V];H===void 0&&(H=v.clone(),z[V]=H,R.addEventListener("dispose",P)),v=H}if(v.visible=R.visible,v.wireframe=R.wireframe,O===mr?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:p[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let k=i.properties.get(v);k.light=A}return v}function _(b,R,A,O,v){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===mr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let V=e.update(b),z=b.material;if(Array.isArray(z)){let H=V.groups;for(let ee=0,oe=H.length;ee<oe;ee++){let se=H[ee],de=z[se.materialIndex];if(de&&de.visible){let N=y(b,de,O,v);b.onBeforeShadow(i,b,R,A,V,N,se),i.renderBufferDirect(A,null,V,N,b,se),b.onAfterShadow(i,b,R,A,V,N,se)}}}else if(z.visible){let H=y(b,z,O,v);b.onBeforeShadow(i,b,R,A,V,H,null),i.renderBufferDirect(A,null,V,H,b,null),b.onAfterShadow(i,b,R,A,V,H,null)}}let k=b.children;for(let V=0,z=k.length;V<z;V++)_(k[V],R,A,O,v)}function P(b){b.target.removeEventListener("dispose",P);for(let A in l){let O=l[A],v=b.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}var q2={[Vh]:Gh,[Wh]:Yh,[Xh]:Zh,[js]:qh,[Gh]:Vh,[Yh]:Wh,[Zh]:Xh,[qh]:js};function Y2(i){function e(){let X=!1,Te=new Qt,ae=null,Me=new Qt(0,0,0,0);return{setMask:function(He){ae!==He&&!X&&(i.colorMask(He,He,He,He),ae=He)},setLocked:function(He){X=He},setClear:function(He,ze,ut,It,Ot){Ot===!0&&(He*=It,ze*=It,ut*=It),Te.set(He,ze,ut,It),Me.equals(Te)===!1&&(i.clearColor(He,ze,ut,It),Me.copy(Te))},reset:function(){X=!1,ae=null,Me.set(-1,0,0,0)}}}function t(){let X=!1,Te=!1,ae=null,Me=null,He=null;return{setReversed:function(ze){Te=ze},setTest:function(ze){ze?q(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(ze){ae!==ze&&!X&&(i.depthMask(ze),ae=ze)},setFunc:function(ze){if(Te&&(ze=q2[ze]),Me!==ze){switch(ze){case Vh:i.depthFunc(i.NEVER);break;case Gh:i.depthFunc(i.ALWAYS);break;case Wh:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Xh:i.depthFunc(i.EQUAL);break;case qh:i.depthFunc(i.GEQUAL);break;case Yh:i.depthFunc(i.GREATER);break;case Zh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=ze}},setLocked:function(ze){X=ze},setClear:function(ze){He!==ze&&(i.clearDepth(ze),He=ze)},reset:function(){X=!1,ae=null,Me=null,He=null}}}function n(){let X=!1,Te=null,ae=null,Me=null,He=null,ze=null,ut=null,It=null,Ot=null;return{setTest:function(mt){X||(mt?q(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!X&&(i.stencilMask(mt),Te=mt)},setFunc:function(mt,St,Kn){(ae!==mt||Me!==St||He!==Kn)&&(i.stencilFunc(mt,St,Kn),ae=mt,Me=St,He=Kn)},setOp:function(mt,St,Kn){(ze!==mt||ut!==St||It!==Kn)&&(i.stencilOp(mt,St,Kn),ze=mt,ut=St,It=Kn)},setLocked:function(mt){X=mt},setClear:function(mt){Ot!==mt&&(i.clearStencil(mt),Ot=mt)},reset:function(){X=!1,Te=null,ae=null,Me=null,He=null,ze=null,ut=null,It=null,Ot=null}}}let r=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},p=new WeakMap,d=[],f=null,g=!1,x=null,m=null,u=null,E=null,y=null,_=null,P=null,b=new pt(0,0,0),R=0,A=!1,O=null,v=null,T=null,k=null,V=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(oe)[1]),H=ee>=1):oe.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),H=ee>=2);let se=null,de={},N=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),Q=new Qt().fromArray(N),te=new Qt().fromArray(ne);function F(X,Te,ae,Me){let He=new Uint8Array(4),ze=i.createTexture();i.bindTexture(X,ze),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<ae;ut++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,He):i.texImage2D(Te+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,He);return ze}let ie={};ie[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),q(i.DEPTH_TEST),s.setFunc(js),Re(!1),ve(Of),q(i.CULL_FACE),L(Ur);function q(X){l[X]!==!0&&(i.enable(X),l[X]=!0)}function W(X){l[X]!==!1&&(i.disable(X),l[X]=!1)}function Z(X,Te){return h[X]!==Te?(i.bindFramebuffer(X,Te),h[X]=Te,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function ge(X,Te){let ae=d,Me=!1;if(X){ae=p.get(Te),ae===void 0&&(ae=[],p.set(Te,ae));let He=X.textures;if(ae.length!==He.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,ut=He.length;ze<ut;ze++)ae[ze]=i.COLOR_ATTACHMENT0+ze;ae.length=He.length,Me=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ae)}function we(X){return f!==X?(i.useProgram(X),f=X,!0):!1}let pe={[os]:i.FUNC_ADD,[c1]:i.FUNC_SUBTRACT,[l1]:i.FUNC_REVERSE_SUBTRACT};pe[h1]=i.MIN,pe[u1]=i.MAX;let re={[d1]:i.ZERO,[f1]:i.ONE,[p1]:i.SRC_COLOR,[Bh]:i.SRC_ALPHA,[_1]:i.SRC_ALPHA_SATURATE,[y1]:i.DST_COLOR,[g1]:i.DST_ALPHA,[m1]:i.ONE_MINUS_SRC_COLOR,[kh]:i.ONE_MINUS_SRC_ALPHA,[v1]:i.ONE_MINUS_DST_COLOR,[x1]:i.ONE_MINUS_DST_ALPHA,[M1]:i.CONSTANT_COLOR,[E1]:i.ONE_MINUS_CONSTANT_COLOR,[w1]:i.CONSTANT_ALPHA,[S1]:i.ONE_MINUS_CONSTANT_ALPHA};function L(X,Te,ae,Me,He,ze,ut,It,Ot,mt){if(X===Ur){g===!0&&(W(i.BLEND),g=!1);return}if(g===!1&&(q(i.BLEND),g=!0),X!==a1){if(X!==x||mt!==A){if((m!==os||y!==os)&&(i.blendEquation(i.FUNC_ADD),m=os,y=os),mt)switch(X){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.ONE,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}u=null,E=null,_=null,P=null,b.set(0,0,0),R=0,x=X,A=mt}return}He=He||Te,ze=ze||ae,ut=ut||Me,(Te!==m||He!==y)&&(i.blendEquationSeparate(pe[Te],pe[He]),m=Te,y=He),(ae!==u||Me!==E||ze!==_||ut!==P)&&(i.blendFuncSeparate(re[ae],re[Me],re[ze],re[ut]),u=ae,E=Me,_=ze,P=ut),(It.equals(b)===!1||Ot!==R)&&(i.blendColor(It.r,It.g,It.b,Ot),b.copy(It),R=Ot),x=X,A=!1}function xe(X,Te){X.side===Dt?W(i.CULL_FACE):q(i.CULL_FACE);let ae=X.side===yn;Te&&(ae=!ae),Re(ae),X.blending===$s&&X.transparent===!1?L(Ur):L(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),r.setMask(X.colorWrite);let Me=X.stencilWrite;o.setTest(Me),Me&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Le(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(X){O!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),O=X)}function ve(X){X!==s1?(q(i.CULL_FACE),X!==v&&(X===Of?i.cullFace(i.BACK):X===o1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),v=X}function be(X){X!==T&&(H&&i.lineWidth(X),T=X)}function Le(X,Te,ae){X?(q(i.POLYGON_OFFSET_FILL),(k!==Te||V!==ae)&&(i.polygonOffset(Te,ae),k=Te,V=ae)):W(i.POLYGON_OFFSET_FILL)}function Ce(X){X?q(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function D(X){X===void 0&&(X=i.TEXTURE0+z-1),se!==X&&(i.activeTexture(X),se=X)}function S(X,Te,ae){ae===void 0&&(se===null?ae=i.TEXTURE0+z-1:ae=se);let Me=de[ae];Me===void 0&&(Me={type:void 0,texture:void 0},de[ae]=Me),(Me.type!==X||Me.texture!==Te)&&(se!==ae&&(i.activeTexture(ae),se=ae),i.bindTexture(X,Te||ie[X]),Me.type=X,Me.texture=Te)}function K(){let X=de[se];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(X){Q.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Q.copy(X))}function Pe(X){te.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),te.copy(X))}function Se(X,Te){let ae=c.get(Te);ae===void 0&&(ae=new WeakMap,c.set(Te,ae));let Me=ae.get(X);Me===void 0&&(Me=i.getUniformBlockIndex(Te,X.name),ae.set(X,Me))}function he(X,Te){let Me=c.get(Te).get(X);a.get(Te)!==Me&&(i.uniformBlockBinding(Te,Me,X.__bindingPointIndex),a.set(Te,Me))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},se=null,de={},h={},p=new WeakMap,d=[],f=null,g=!1,x=null,m=null,u=null,E=null,y=null,_=null,P=null,b=new pt(0,0,0),R=0,A=!1,O=null,v=null,T=null,k=null,V=null,Q.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:q,disable:W,bindFramebuffer:Z,drawBuffers:ge,useProgram:we,setBlending:L,setMaterial:xe,setFlipSided:Re,setCullFace:ve,setLineWidth:be,setPolygonOffset:Le,setScissorTest:Ce,activeTexture:D,bindTexture:S,unbindTexture:K,compressedTexImage2D:fe,compressedTexImage3D:ye,texImage2D:$,texImage3D:me,updateUBOMapping:Se,uniformBlockBinding:he,texStorage2D:nt,texStorage3D:De,texSubImage2D:_e,texSubImage3D:ke,compressedTexSubImage2D:Ue,compressedTexSubImage3D:Ve,scissor:Ae,viewport:Pe,reset:We}}function Dp(i,e,t,n){let r=Z2(n);switch(t){case i0:return i*e;case s0:return i*e;case o0:return i*e*2;case ud:return i*e/r.components*r.byteLength;case dd:return i*e/r.components*r.byteLength;case a0:return i*e*2/r.components*r.byteLength;case fd:return i*e*2/r.components*r.byteLength;case r0:return i*e*3/r.components*r.byteLength;case yi:return i*e*4/r.components*r.byteLength;case pd:return i*e*4/r.components*r.byteLength;case Ec:case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qh:case eu:return Math.max(i,16)*Math.max(e,8)/4;case Jh:case jh:return Math.max(i,8)*Math.max(e,8)/2;case tu:case nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ou:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case au:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bc:case yu:case vu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case c0:case _u:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mu:case Eu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z2(i){switch(i){case xr:case e0:return{byteLength:1,components:1};case ra:case t0:case ya:return{byteLength:2,components:1};case ld:case hd:return{byteLength:2,components:4};case us:case cd:case er:return{byteLength:4,components:1};case n0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $2(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,h=new WeakMap,p,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,S){return f?new OffscreenCanvas(D,S):sa("canvas")}function x(D,S,K){let fe=1,ye=Ce(D);if((ye.width>K||ye.height>K)&&(fe=K/Math.max(ye.width,ye.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let _e=Math.floor(fe*ye.width),ke=Math.floor(fe*ye.height);p===void 0&&(p=g(_e,ke));let Ue=S?g(_e,ke):p;return Ue.width=_e,Ue.height=ke,Ue.getContext("2d").drawImage(D,0,0,_e,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+_e+"x"+ke+")."),Ue}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==ai&&D.minFilter!==pn}function u(D){i.generateMipmap(D)}function E(D,S,K,fe,ye=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e=S;if(S===i.RED&&(K===i.FLOAT&&(_e=i.R32F),K===i.HALF_FLOAT&&(_e=i.R16F),K===i.UNSIGNED_BYTE&&(_e=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(_e=i.R8UI),K===i.UNSIGNED_SHORT&&(_e=i.R16UI),K===i.UNSIGNED_INT&&(_e=i.R32UI),K===i.BYTE&&(_e=i.R8I),K===i.SHORT&&(_e=i.R16I),K===i.INT&&(_e=i.R32I)),S===i.RG&&(K===i.FLOAT&&(_e=i.RG32F),K===i.HALF_FLOAT&&(_e=i.RG16F),K===i.UNSIGNED_BYTE&&(_e=i.RG8)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(_e=i.RG8UI),K===i.UNSIGNED_SHORT&&(_e=i.RG16UI),K===i.UNSIGNED_INT&&(_e=i.RG32UI),K===i.BYTE&&(_e=i.RG8I),K===i.SHORT&&(_e=i.RG16I),K===i.INT&&(_e=i.RG32I)),S===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(_e=i.RGB8UI),K===i.UNSIGNED_SHORT&&(_e=i.RGB16UI),K===i.UNSIGNED_INT&&(_e=i.RGB32UI),K===i.BYTE&&(_e=i.RGB8I),K===i.SHORT&&(_e=i.RGB16I),K===i.INT&&(_e=i.RGB32I)),S===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(_e=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(_e=i.RGBA16UI),K===i.UNSIGNED_INT&&(_e=i.RGBA32UI),K===i.BYTE&&(_e=i.RGBA8I),K===i.SHORT&&(_e=i.RGBA16I),K===i.INT&&(_e=i.RGBA32I)),S===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(_e=i.RGB9_E5),S===i.RGBA){let ke=ye?Pc:Zt.getTransfer(fe);K===i.FLOAT&&(_e=i.RGBA32F),K===i.HALF_FLOAT&&(_e=i.RGBA16F),K===i.UNSIGNED_BYTE&&(_e=ke===sn?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function y(D,S){let K;return D?S===null||S===us||S===no?K=i.DEPTH24_STENCIL8:S===er?K=i.DEPTH32F_STENCIL8:S===ra&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===us||S===no?K=i.DEPTH_COMPONENT24:S===er?K=i.DEPTH_COMPONENT32F:S===ra&&(K=i.DEPTH_COMPONENT16),K}function _(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==ai&&D.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function P(D){let S=D.target;S.removeEventListener("dispose",P),R(S),S.isVideoTexture&&h.delete(S)}function b(D){let S=D.target;S.removeEventListener("dispose",b),O(S)}function R(D){let S=n.get(D);if(S.__webglInit===void 0)return;let K=D.source,fe=d.get(K);if(fe){let ye=fe[S.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&A(D),Object.keys(fe).length===0&&d.delete(K)}n.remove(D)}function A(D){let S=n.get(D);i.deleteTexture(S.__webglTexture);let K=D.source,fe=d.get(K);delete fe[S.__cacheKey],o.memory.textures--}function O(D){let S=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(S.__webglFramebuffer[fe]))for(let ye=0;ye<S.__webglFramebuffer[fe].length;ye++)i.deleteFramebuffer(S.__webglFramebuffer[fe][ye]);else i.deleteFramebuffer(S.__webglFramebuffer[fe]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[fe])}else{if(Array.isArray(S.__webglFramebuffer))for(let fe=0;fe<S.__webglFramebuffer.length;fe++)i.deleteFramebuffer(S.__webglFramebuffer[fe]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let fe=0;fe<S.__webglColorRenderbuffer.length;fe++)S.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[fe]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let K=D.textures;for(let fe=0,ye=K.length;fe<ye;fe++){let _e=n.get(K[fe]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(K[fe])}n.remove(D)}let v=0;function T(){v=0}function k(){let D=v;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),v+=1,D}function V(D){let S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function z(D,S){let K=n.get(D);if(D.isVideoTexture&&be(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){let fe=D.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(K,D,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function H(D,S){let K=n.get(D);if(D.version>0&&K.__version!==D.version){te(K,D,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function ee(D,S){let K=n.get(D);if(D.version>0&&K.__version!==D.version){te(K,D,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function oe(D,S){let K=n.get(D);if(D.version>0&&K.__version!==D.version){F(K,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let se={[hs]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[Kh]:i.MIRRORED_REPEAT},de={[ai]:i.NEAREST,[D1]:i.NEAREST_MIPMAP_NEAREST,[Za]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[sh]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},N={[N1]:i.NEVER,[V1]:i.ALWAYS,[F1]:i.LESS,[h0]:i.LEQUAL,[O1]:i.EQUAL,[k1]:i.GEQUAL,[z1]:i.GREATER,[B1]:i.NOTEQUAL};function ne(D,S){if(S.type===er&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===pn||S.magFilter===sh||S.magFilter===Za||S.magFilter===Gi||S.minFilter===pn||S.minFilter===sh||S.minFilter===Za||S.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,se[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,se[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,se[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,N[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ai||S.minFilter!==Za&&S.minFilter!==Gi||S.type===er&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Q(D,S){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",P));let fe=S.source,ye=d.get(fe);ye===void 0&&(ye={},d.set(fe,ye));let _e=V(S);if(_e!==D.__cacheKey){ye[_e]===void 0&&(ye[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ye[_e].usedTimes++;let ke=ye[D.__cacheKey];ke!==void 0&&(ye[D.__cacheKey].usedTimes--,ke.usedTimes===0&&A(S)),D.__cacheKey=_e,D.__webglTexture=ye[_e].texture}return K}function te(D,S,K){let fe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=i.TEXTURE_3D);let ye=Q(D,S),_e=S.source;t.bindTexture(fe,D.__webglTexture,i.TEXTURE0+K);let ke=n.get(_e);if(_e.version!==ke.__version||ye===!0){t.activeTexture(i.TEXTURE0+K);let Ue=Zt.getPrimaries(Zt.workingColorSpace),Ve=S.colorSpace===Dr?null:Zt.getPrimaries(S.colorSpace),nt=S.colorSpace===Dr||Ue===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let De=x(S.image,!1,r.maxTextureSize);De=Le(S,De);let $=s.convert(S.format,S.colorSpace),me=s.convert(S.type),Ae=E(S.internalFormat,$,me,S.colorSpace,S.isVideoTexture);ne(fe,S);let Pe,Se=S.mipmaps,he=S.isVideoTexture!==!0,We=ke.__version===void 0||ye===!0,X=_e.dataReady,Te=_(S,De);if(S.isDepthTexture)Ae=y(S.format===io,S.type),We&&(he?t.texStorage2D(i.TEXTURE_2D,1,Ae,De.width,De.height):t.texImage2D(i.TEXTURE_2D,0,Ae,De.width,De.height,0,$,me,null));else if(S.isDataTexture)if(Se.length>0){he&&We&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,Se[0].width,Se[0].height);for(let ae=0,Me=Se.length;ae<Me;ae++)Pe=Se[ae],he?X&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Pe.width,Pe.height,$,me,Pe.data):t.texImage2D(i.TEXTURE_2D,ae,Ae,Pe.width,Pe.height,0,$,me,Pe.data);S.generateMipmaps=!1}else he?(We&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,De.width,De.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De.width,De.height,$,me,De.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,De.width,De.height,0,$,me,De.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){he&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ae,Se[0].width,Se[0].height,De.depth);for(let ae=0,Me=Se.length;ae<Me;ae++)if(Pe=Se[ae],S.format!==yi)if($!==null)if(he){if(X)if(S.layerUpdates.size>0){let He=Dp(Pe.width,Pe.height,S.format,S.type);for(let ze of S.layerUpdates){let ut=Pe.data.subarray(ze*He/Pe.data.BYTES_PER_ELEMENT,(ze+1)*He/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ze,Pe.width,Pe.height,1,$,ut,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Pe.width,Pe.height,De.depth,$,Pe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ae,Pe.width,Pe.height,De.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Pe.width,Pe.height,De.depth,$,me,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ae,Pe.width,Pe.height,De.depth,0,$,me,Pe.data)}else{he&&We&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,Se[0].width,Se[0].height);for(let ae=0,Me=Se.length;ae<Me;ae++)Pe=Se[ae],S.format!==yi?$!==null?he?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Pe.width,Pe.height,$,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ae,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?X&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Pe.width,Pe.height,$,me,Pe.data):t.texImage2D(i.TEXTURE_2D,ae,Ae,Pe.width,Pe.height,0,$,me,Pe.data)}else if(S.isDataArrayTexture)if(he){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ae,De.width,De.height,De.depth),X)if(S.layerUpdates.size>0){let ae=Dp(De.width,De.height,S.format,S.type);for(let Me of S.layerUpdates){let He=De.data.subarray(Me*ae/De.data.BYTES_PER_ELEMENT,(Me+1)*ae/De.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,De.width,De.height,1,$,me,He)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,$,me,De.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,De.width,De.height,De.depth,0,$,me,De.data);else if(S.isData3DTexture)he?(We&&t.texStorage3D(i.TEXTURE_3D,Te,Ae,De.width,De.height,De.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,$,me,De.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,De.width,De.height,De.depth,0,$,me,De.data);else if(S.isFramebufferTexture){if(We)if(he)t.texStorage2D(i.TEXTURE_2D,Te,Ae,De.width,De.height);else{let ae=De.width,Me=De.height;for(let He=0;He<Te;He++)t.texImage2D(i.TEXTURE_2D,He,Ae,ae,Me,0,$,me,null),ae>>=1,Me>>=1}}else if(Se.length>0){if(he&&We){let ae=Ce(Se[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ae,ae.width,ae.height)}for(let ae=0,Me=Se.length;ae<Me;ae++)Pe=Se[ae],he?X&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,$,me,Pe):t.texImage2D(i.TEXTURE_2D,ae,Ae,$,me,Pe);S.generateMipmaps=!1}else if(he){if(We){let ae=Ce(De);t.texStorage2D(i.TEXTURE_2D,Te,Ae,ae.width,ae.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$,me,De)}else t.texImage2D(i.TEXTURE_2D,0,Ae,$,me,De);m(S)&&u(fe),ke.__version=_e.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function F(D,S,K){if(S.image.length!==6)return;let fe=Q(D,S),ye=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+K);let _e=n.get(ye);if(ye.version!==_e.__version||fe===!0){t.activeTexture(i.TEXTURE0+K);let ke=Zt.getPrimaries(Zt.workingColorSpace),Ue=S.colorSpace===Dr?null:Zt.getPrimaries(S.colorSpace),Ve=S.colorSpace===Dr||ke===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let nt=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,$=[];for(let Me=0;Me<6;Me++)!nt&&!De?$[Me]=x(S.image[Me],!0,r.maxCubemapSize):$[Me]=De?S.image[Me].image:S.image[Me],$[Me]=Le(S,$[Me]);let me=$[0],Ae=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type),Se=E(S.internalFormat,Ae,Pe,S.colorSpace),he=S.isVideoTexture!==!0,We=_e.__version===void 0||fe===!0,X=ye.dataReady,Te=_(S,me);ne(i.TEXTURE_CUBE_MAP,S);let ae;if(nt){he&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Se,me.width,me.height);for(let Me=0;Me<6;Me++){ae=$[Me].mipmaps;for(let He=0;He<ae.length;He++){let ze=ae[He];S.format!==yi?Ae!==null?he?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He,0,0,ze.width,ze.height,Ae,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He,Se,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He,0,0,ze.width,ze.height,Ae,Pe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He,Se,ze.width,ze.height,0,Ae,Pe,ze.data)}}}else{if(ae=S.mipmaps,he&&We){ae.length>0&&Te++;let Me=Ce($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Se,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(De){he?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,$[Me].width,$[Me].height,Ae,Pe,$[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Se,$[Me].width,$[Me].height,0,Ae,Pe,$[Me].data);for(let He=0;He<ae.length;He++){let ut=ae[He].image[Me].image;he?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He+1,0,0,ut.width,ut.height,Ae,Pe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He+1,Se,ut.width,ut.height,0,Ae,Pe,ut.data)}}else{he?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ae,Pe,$[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Se,Ae,Pe,$[Me]);for(let He=0;He<ae.length;He++){let ze=ae[He];he?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He+1,0,0,Ae,Pe,ze.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He+1,Se,Ae,Pe,ze.image[Me])}}}m(S)&&u(i.TEXTURE_CUBE_MAP),_e.__version=ye.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ie(D,S,K,fe,ye,_e){let ke=s.convert(K.format,K.colorSpace),Ue=s.convert(K.type),Ve=E(K.internalFormat,ke,Ue,K.colorSpace);if(!n.get(S).__hasExternalTextures){let De=Math.max(1,S.width>>_e),$=Math.max(1,S.height>>_e);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,_e,Ve,De,$,S.depth,0,ke,Ue,null):t.texImage2D(ye,_e,Ve,De,$,0,ke,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ve(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ye,n.get(K).__webglTexture,0,Re(S)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,ye,n.get(K).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(D,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){let fe=S.depthTexture,ye=fe&&fe.isDepthTexture?fe.type:null,_e=y(S.stencilBuffer,ye),ke=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=Re(S);ve(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,_e,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,_e,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_e,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,D)}else{let fe=S.textures;for(let ye=0;ye<fe.length;ye++){let _e=fe[ye],ke=s.convert(_e.format,_e.colorSpace),Ue=s.convert(_e.type),Ve=E(_e.internalFormat,ke,Ue,_e.colorSpace),nt=Re(S);K&&ve(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Ve,S.width,S.height):ve(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let fe=n.get(S.depthTexture).__webglTexture,ye=Re(S);if(S.depthTexture.format===Ks)ve(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(S.depthTexture.format===io)ve(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Z(D){let S=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){let fe=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),fe){let ye=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,fe.removeEventListener("dispose",ye)};fe.addEventListener("dispose",ye),S.__depthDisposeCallback=ye}S.__boundDepthTexture=fe}if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");W(S.__webglFramebuffer,D)}else if(K){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]===void 0)S.__webglDepthbuffer[fe]=i.createRenderbuffer(),q(S.__webglDepthbuffer[fe],D,!1);else{let ye=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,_e)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),q(S.__webglDepthbuffer,D,!1);else{let fe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,ye)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(D,S,K){let fe=n.get(D);S!==void 0&&ie(fe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Z(D)}function we(D){let S=D.texture,K=n.get(D),fe=n.get(S);D.addEventListener("dispose",b);let ye=D.textures,_e=D.isWebGLCubeRenderTarget===!0,ke=ye.length>1;if(ke||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=S.version,o.memory.textures++),_e){K.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[Ue]=[];for(let Ve=0;Ve<S.mipmaps.length;Ve++)K.__webglFramebuffer[Ue][Ve]=i.createFramebuffer()}else K.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ue=0;Ue<S.mipmaps.length;Ue++)K.__webglFramebuffer[Ue]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Ue=0,Ve=ye.length;Ue<Ve;Ue++){let nt=n.get(ye[Ue]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ve(D)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ye.length;Ue++){let Ve=ye[Ue];K.__webglColorRenderbuffer[Ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ue]);let nt=s.convert(Ve.format,Ve.colorSpace),De=s.convert(Ve.type),$=E(Ve.internalFormat,nt,De,Ve.colorSpace,D.isXRRenderTarget===!0),me=Re(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,$,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),q(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),ne(i.TEXTURE_CUBE_MAP,S);for(let Ue=0;Ue<6;Ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ve=0;Ve<S.mipmaps.length;Ve++)ie(K.__webglFramebuffer[Ue][Ve],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ve);else ie(K.__webglFramebuffer[Ue],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);m(S)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Ue=0,Ve=ye.length;Ue<Ve;Ue++){let nt=ye[Ue],De=n.get(nt);t.bindTexture(i.TEXTURE_2D,De.__webglTexture),ne(i.TEXTURE_2D,nt),ie(K.__webglFramebuffer,D,nt,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,0),m(nt)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,fe.__webglTexture),ne(Ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Ve=0;Ve<S.mipmaps.length;Ve++)ie(K.__webglFramebuffer[Ve],D,S,i.COLOR_ATTACHMENT0,Ue,Ve);else ie(K.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,Ue,0);m(S)&&u(Ue),t.unbindTexture()}D.depthBuffer&&Z(D)}function pe(D){let S=D.textures;for(let K=0,fe=S.length;K<fe;K++){let ye=S[K];if(m(ye)){let _e=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ke=n.get(ye).__webglTexture;t.bindTexture(_e,ke),u(_e),t.unbindTexture()}}}let re=[],L=[];function xe(D){if(D.samples>0){if(ve(D)===!1){let S=D.textures,K=D.width,fe=D.height,ye=i.COLOR_BUFFER_BIT,_e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(D),Ue=S.length>1;if(Ue)for(let Ve=0;Ve<S.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ve=0;Ve<S.length;Ve++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ve]);let nt=n.get(S[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,K,fe,0,0,K,fe,ye,i.NEAREST),c===!0&&(re.length=0,L.length=0,re.push(i.COLOR_ATTACHMENT0+Ve),D.depthBuffer&&D.resolveDepthBuffer===!1&&(re.push(_e),L.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ue)for(let Ve=0;Ve<S.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ve]);let nt=n.get(S[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Re(D){return Math.min(r.maxSamples,D.samples)}function ve(D){let S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(D){let S=o.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function Le(D,S){let K=D.colorSpace,fe=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Gr&&K!==Dr&&(Zt.getTransfer(K)===sn?(fe!==yi||ye!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function Ce(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=T,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=ee,this.setTextureCube=oe,this.rebindTextures=ge,this.setupRenderTarget=we,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ve}function K2(i,e){function t(n,r=Dr){let s,o=Zt.getTransfer(r);if(n===xr)return i.UNSIGNED_BYTE;if(n===ld)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===n0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===e0)return i.BYTE;if(n===t0)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===cd)return i.INT;if(n===us)return i.UNSIGNED_INT;if(n===er)return i.FLOAT;if(n===ya)return i.HALF_FLOAT;if(n===i0)return i.ALPHA;if(n===r0)return i.RGB;if(n===yi)return i.RGBA;if(n===s0)return i.LUMINANCE;if(n===o0)return i.LUMINANCE_ALPHA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===io)return i.DEPTH_STENCIL;if(n===ud)return i.RED;if(n===dd)return i.RED_INTEGER;if(n===a0)return i.RG;if(n===fd)return i.RG_INTEGER;if(n===pd)return i.RGBA_INTEGER;if(n===Ec||n===wc||n===Sc||n===Tc)if(o===sn)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jh||n===Qh||n===jh||n===eu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tu||n===nu||n===iu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tu||n===nu)return o===sn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===iu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ru||n===su||n===ou||n===au||n===cu||n===lu||n===hu||n===uu||n===du||n===fu||n===pu||n===mu||n===gu||n===xu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ru)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===su)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ou)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===au)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===du)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xu)return o===sn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===yu||n===vu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bc)return o===sn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===c0||n===_u||n===Mu||n===Eu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===no?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Nu=class extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ee=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},J2={type:"move"},ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J2)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j2=`
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

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new ei,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nr({vertexShader:Q2,fragmentShader:j2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends Fr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,d=null,f=null,g=null,x=new Fu,m=t.getContextAttributes(),u=null,E=null,y=[],_=[],P=new Oe,b=null,R=new On;R.layers.enable(1),R.viewport=new Qt;let A=new On;A.layers.enable(2),A.viewport=new Qt;let O=[R,A],v=new Nu;v.layers.enable(1),v.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let ie=y[F];return ie===void 0&&(ie=new ea,y[F]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(F){let ie=y[F];return ie===void 0&&(ie=new ea,y[F]=ie),ie.getGripSpace()},this.getHand=function(F){let ie=y[F];return ie===void 0&&(ie=new ea,y[F]=ie),ie.getHandSpace()};function V(F){let ie=_.indexOf(F.inputSource);if(ie===-1)return;let q=y[ie];q!==void 0&&(q.update(F.inputSource,F.frame,l||o),q.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let F=0;F<y.length;F++){let ie=_[F];ie!==null&&(_[F]=null,y[F].disconnect(ie))}T=null,k=null,x.reset(),e.setRenderTarget(u),f=null,d=null,p=null,r=null,E=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new yr(f.framebufferWidth,f.framebufferHeight,{format:yi,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,q=null,W=null;m.depth&&(W=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?io:Ks,q=m.stencil?no:us);let Z={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:s};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(Z),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new yr(d.textureWidth,d.textureHeight,{format:yi,type:xr,depthTexture:new kc(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(F){for(let ie=0;ie<F.removed.length;ie++){let q=F.removed[ie],W=_.indexOf(q);W>=0&&(_[W]=null,y[W].disconnect(q))}for(let ie=0;ie<F.added.length;ie++){let q=F.added[ie],W=_.indexOf(q);if(W===-1){for(let ge=0;ge<y.length;ge++)if(ge>=_.length){_.push(q),W=ge;break}else if(_[ge]===null){_[ge]=q,W=ge;break}if(W===-1)break}let Z=y[W];Z&&Z.connect(q)}}let ee=new w,oe=new w;function se(F,ie,q){ee.setFromMatrixPosition(ie.matrixWorld),oe.setFromMatrixPosition(q.matrixWorld);let W=ee.distanceTo(oe),Z=ie.projectionMatrix.elements,ge=q.projectionMatrix.elements,we=Z[14]/(Z[10]-1),pe=Z[14]/(Z[10]+1),re=(Z[9]+1)/Z[5],L=(Z[9]-1)/Z[5],xe=(Z[8]-1)/Z[0],Re=(ge[8]+1)/ge[0],ve=we*xe,be=we*Re,Le=W/(-xe+Re),Ce=Le*-xe;if(ie.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ce),F.translateZ(Le),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Z[10]===-1)F.projectionMatrix.copy(ie.projectionMatrix),F.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let D=we+Le,S=pe+Le,K=ve-Ce,fe=be+(W-Ce),ye=re*pe/S*D,_e=L*pe/S*D;F.projectionMatrix.makePerspective(K,fe,ye,_e,D,S),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function de(F,ie){ie===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ie.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let ie=F.near,q=F.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(q=x.depthFar)),v.near=A.near=R.near=ie,v.far=A.far=R.far=q,(T!==v.near||k!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,k=v.far);let W=F.parent,Z=v.cameras;de(v,W);for(let ge=0;ge<Z.length;ge++)de(Z[ge],W);Z.length===2?se(v,R,A):v.projectionMatrix.copy(R.projectionMatrix),N(F,v,W)};function N(F,ie,q){q===null?F.matrix.copy(ie.matrixWorld):(F.matrix.copy(q.matrixWorld),F.matrix.invert(),F.matrix.multiply(ie.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(ie.projectionMatrix),F.projectionMatrixInverse.copy(ie.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ro*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ne=null;function Q(F,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){let q=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let W=!1;q.length!==v.cameras.length&&(v.cameras.length=0,W=!0);for(let ge=0;ge<q.length;ge++){let we=q[ge],pe=null;if(f!==null)pe=f.getViewport(we);else{let L=p.getViewSubImage(d,we);pe=L.viewport,ge===0&&(e.setRenderTargetTextures(E,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(E))}let re=O[ge];re===void 0&&(re=new On,re.layers.enable(ge),re.viewport=new Qt,O[ge]=re),re.matrix.fromArray(we.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(we.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(pe.x,pe.y,pe.width,pe.height),ge===0&&(v.matrix.copy(re.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),W===!0&&v.cameras.push(re)}let Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let ge=p.getDepthInformation(q[0]);ge&&ge.isValid&&ge.texture&&x.init(e,ge,r.renderState)}}for(let q=0;q<y.length;q++){let W=_[q],Z=y[q];W!==null&&Z!==void 0&&Z.update(W,ie,l||o)}ne&&ne(F,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let te=new p0;te.setAnimationLoop(Q),this.setAnimationLoop=function(F){ne=F},this.dispose=function(){}}},rs=new ci,eM=new Rt;function tM(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,f0(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,E,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&f(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,E,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===yn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===yn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let E=e.get(u),y=E.envMap,_=E.envMapRotation;y&&(m.envMap.value=y,rs.copy(_),rs.x*=-1,rs.y*=-1,rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(rs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nM(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){let _=y.program;n.uniformBlockBinding(E,_)}function l(E,y){let _=r[E.id];_===void 0&&(g(E),_=h(E),r[E.id]=_,E.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(E,P);let b=e.render.frame;s[E.id]!==b&&(d(E),s[E.id]=b)}function h(E){let y=p();E.__bindingPointIndex=y;let _=i.createBuffer(),P=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let y=r[E.id],_=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,R=_.length;b<R;b++){let A=Array.isArray(_[b])?_[b]:[_[b]];for(let O=0,v=A.length;O<v;O++){let T=A[O];if(f(T,b,O,P)===!0){let k=T.__offset,V=Array.isArray(T.value)?T.value:[T.value],z=0;for(let H=0;H<V.length;H++){let ee=V[H],oe=x(ee);typeof ee=="number"||typeof ee=="boolean"?(T.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,k+z,T.__data)):ee.isMatrix3?(T.__data[0]=ee.elements[0],T.__data[1]=ee.elements[1],T.__data[2]=ee.elements[2],T.__data[3]=0,T.__data[4]=ee.elements[3],T.__data[5]=ee.elements[4],T.__data[6]=ee.elements[5],T.__data[7]=0,T.__data[8]=ee.elements[6],T.__data[9]=ee.elements[7],T.__data[10]=ee.elements[8],T.__data[11]=0):(ee.toArray(T.__data,z),z+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,_,P){let b=E.value,R=y+"_"+_;if(P[R]===void 0)return typeof b=="number"||typeof b=="boolean"?P[R]=b:P[R]=b.clone(),!0;{let A=P[R];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return P[R]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(E){let y=E.uniforms,_=0,P=16;for(let R=0,A=y.length;R<A;R++){let O=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,T=O.length;v<T;v++){let k=O[v],V=Array.isArray(k.value)?k.value:[k.value];for(let z=0,H=V.length;z<H;z++){let ee=V[z],oe=x(ee),se=_%P,de=se%oe.boundary,N=se+de;_+=de,N!==0&&P-N<oe.storage&&(_+=P-N),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=oe.storage}}}let b=_%P;return b>0&&(_+=P-b),E.__size=_,E.__cache={},this}function x(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(let E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}var Vc=class{constructor(e={}){let{canvas:t=sx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=Hr,this.toneMappingExposure=1;let y=this,_=!1,P=0,b=0,R=null,A=-1,O=null,v=new Qt,T=new Qt,k=null,V=new pt(0),z=0,H=t.width,ee=t.height,oe=1,se=null,de=null,N=new Qt(0,0,H,ee),ne=new Qt(0,0,H,ee),Q=!1,te=new ca,F=!1,ie=!1,q=new Rt,W=new Rt,Z=new w,ge=new Qt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function re(){return R===null?oe:1}let L=n;function xe(I,J){return t.getContext(I,J)}try{let I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",ze,!1),L===null){let J="webgl2";if(L=xe(J,I),L===null)throw xe(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Re,ve,be,Le,Ce,D,S,K,fe,ye,_e,ke,Ue,Ve,nt,De,$,me,Ae,Pe,Se,he,We,X;function Te(){Re=new y_(L),Re.init(),he=new K2(L,Re),ve=new d_(L,Re,e,he),be=new Y2(L),ve.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),Le=new M_(L),Ce=new U2,D=new $2(L,Re,be,Ce,ve,he,Le),S=new p_(y),K=new x_(y),fe=new Ax(L),We=new h_(L,fe),ye=new v_(L,fe,Le,We),_e=new w_(L,ye,fe,Le),Ae=new E_(L,ve,D),De=new f_(Ce),ke=new D2(y,S,K,Re,ve,We,De),Ue=new tM(y,Ce),Ve=new N2,nt=new V2(Re),me=new l_(y,S,K,be,_e,d,c),$=new X2(y,_e,ve),X=new nM(L,Le,ve,be),Pe=new u_(L,Re,Le),Se=new __(L,Re,Le),Le.programs=ke.programs,y.capabilities=ve,y.extensions=Re,y.properties=Ce,y.renderLists=Ve,y.shadowMap=$,y.state=be,y.info=Le}Te();let ae=new Ou(y,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let I=Re.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Re.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(I){I!==void 0&&(oe=I,this.setSize(H,ee,!1))},this.getSize=function(I){return I.set(H,ee)},this.setSize=function(I,J,ce=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,ee=J,t.width=Math.floor(I*oe),t.height=Math.floor(J*oe),ce===!0&&(t.style.width=I+"px",t.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(H*oe,ee*oe).floor()},this.setDrawingBufferSize=function(I,J,ce){H=I,ee=J,oe=ce,t.width=Math.floor(I*ce),t.height=Math.floor(J*ce),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(v)},this.getViewport=function(I){return I.copy(N)},this.setViewport=function(I,J,ce,le){I.isVector4?N.set(I.x,I.y,I.z,I.w):N.set(I,J,ce,le),be.viewport(v.copy(N).multiplyScalar(oe).round())},this.getScissor=function(I){return I.copy(ne)},this.setScissor=function(I,J,ce,le){I.isVector4?ne.set(I.x,I.y,I.z,I.w):ne.set(I,J,ce,le),be.scissor(T.copy(ne).multiplyScalar(oe).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(I){be.setScissorTest(Q=I)},this.setOpaqueSort=function(I){se=I},this.setTransparentSort=function(I){de=I},this.getClearColor=function(I){return I.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(I=!0,J=!0,ce=!0){let le=0;if(I){let j=!1;if(R!==null){let Ie=R.texture.format;j=Ie===pd||Ie===fd||Ie===dd}if(j){let Ie=R.texture.type,Be=Ie===xr||Ie===us||Ie===ra||Ie===no||Ie===ld||Ie===hd,Qe=me.getClearColor(),je=me.getClearAlpha(),ot=Qe.r,ct=Qe.g,Ke=Qe.b;Be?(f[0]=ot,f[1]=ct,f[2]=Ke,f[3]=je,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=ot,g[1]=ct,g[2]=Ke,g[3]=je,L.clearBufferiv(L.COLOR,0,g))}else le|=L.COLOR_BUFFER_BIT}J&&(le|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ce&&(le|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),Ve.dispose(),nt.dispose(),Ce.dispose(),S.dispose(),K.dispose(),_e.dispose(),We.dispose(),X.dispose(),ke.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ki),ae.removeEventListener("sessionend",Ui),ii.stop()};function Me(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let I=Le.autoReset,J=$.enabled,ce=$.autoUpdate,le=$.needsUpdate,j=$.type;Te(),Le.autoReset=I,$.enabled=J,$.autoUpdate=ce,$.needsUpdate=le,$.type=j}function ze(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ut(I){let J=I.target;J.removeEventListener("dispose",ut),It(J)}function It(I){Ot(I),Ce.remove(I)}function Ot(I){let J=Ce.get(I).programs;J!==void 0&&(J.forEach(function(ce){ke.releaseProgram(ce)}),I.isShaderMaterial&&ke.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,ce,le,j,Ie){J===null&&(J=we);let Be=j.isMesh&&j.matrixWorld.determinant()<0,Qe=gn(I,J,ce,le,j);be.setMaterial(le,Be);let je=ce.index,ot=1;if(le.wireframe===!0){if(je=ye.getWireframeAttribute(ce),je===void 0)return;ot=2}let ct=ce.drawRange,Ke=ce.attributes.position,At=ct.start*ot,_t=(ct.start+ct.count)*ot;Ie!==null&&(At=Math.max(At,Ie.start*ot),_t=Math.min(_t,(Ie.start+Ie.count)*ot)),je!==null?(At=Math.max(At,0),_t=Math.min(_t,je.count)):Ke!=null&&(At=Math.max(At,0),_t=Math.min(_t,Ke.count));let Vt=_t-At;if(Vt<0||Vt===1/0)return;We.setup(j,le,Qe,ce,je);let Pn,Nt=Pe;if(je!==null&&(Pn=fe.get(je),Nt=Se,Nt.setIndex(Pn)),j.isMesh)le.wireframe===!0?(be.setLineWidth(le.wireframeLinewidth*re()),Nt.setMode(L.LINES)):Nt.setMode(L.TRIANGLES);else if(j.isLine){let st=le.linewidth;st===void 0&&(st=1),be.setLineWidth(st*re()),j.isLineSegments?Nt.setMode(L.LINES):j.isLineLoop?Nt.setMode(L.LINE_LOOP):Nt.setMode(L.LINE_STRIP)}else j.isPoints?Nt.setMode(L.POINTS):j.isSprite&&Nt.setMode(L.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Nt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Nt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let st=j._multiDrawStarts,Gt=j._multiDrawCounts,Ne=j._multiDrawCount,Ze=je?fe.get(je).bytesPerElement:1,wn=Ce.get(le).currentProgram.getUniforms();for(let nn=0;nn<Ne;nn++)wn.setValue(L,"_gl_DrawID",nn),Nt.render(st[nn]/Ze,Gt[nn])}else if(j.isInstancedMesh)Nt.renderInstances(At,Vt,j.count);else if(ce.isInstancedBufferGeometry){let st=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Gt=Math.min(ce.instanceCount,st);Nt.renderInstances(At,Vt,Gt)}else Nt.render(At,Vt)};function mt(I,J,ce){I.transparent===!0&&I.side===Dt&&I.forceSinglePass===!1?(I.side=yn,I.needsUpdate=!0,at(I,J,ce),I.side=tr,I.needsUpdate=!0,at(I,J,ce),I.side=Dt):at(I,J,ce)}this.compile=function(I,J,ce=null){ce===null&&(ce=I),m=nt.get(ce),m.init(J),E.push(m),ce.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),I!==ce&&I.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();let le=new Set;return I.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ie=j.material;if(Ie)if(Array.isArray(Ie))for(let Be=0;Be<Ie.length;Be++){let Qe=Ie[Be];mt(Qe,ce,j),le.add(Qe)}else mt(Ie,ce,j),le.add(Ie)}),E.pop(),m=null,le},this.compileAsync=function(I,J,ce=null){let le=this.compile(I,J,ce);return new Promise(j=>{function Ie(){if(le.forEach(function(Be){Ce.get(Be).currentProgram.isReady()&&le.delete(Be)}),le.size===0){j(I);return}setTimeout(Ie,10)}Re.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let St=null;function Kn(I){St&&St(I)}function Ki(){ii.stop()}function Ui(){ii.start()}let ii=new p0;ii.setAnimationLoop(Kn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(I){St=I,ae.setAnimationLoop(I),I===null?ii.stop():ii.start()},ae.addEventListener("sessionstart",Ki),ae.addEventListener("sessionend",Ui),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(J),J=ae.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,J,R),m=nt.get(I,E.length),m.init(J),E.push(m),W.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),te.setFromProjectionMatrix(W),ie=this.localClippingEnabled,F=De.init(this.clippingPlanes,ie),x=Ve.get(I,u.length),x.init(),u.push(x),ae.enabled===!0&&ae.isPresenting===!0){let Ie=y.xr.getDepthSensingMesh();Ie!==null&&mn(Ie,J,-1/0,y.sortObjects)}mn(I,J,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(se,de),pe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,pe&&me.addToRenderList(x,I),this.info.render.frame++,F===!0&&De.beginShadows();let ce=m.state.shadowsArray;$.render(ce,I,J),F===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();let le=x.opaque,j=x.transmissive;if(m.setupLights(),J.isArrayCamera){let Ie=J.cameras;if(j.length>0)for(let Be=0,Qe=Ie.length;Be<Qe;Be++){let je=Ie[Be];it(le,j,I,je)}pe&&me.render(I);for(let Be=0,Qe=Ie.length;Be<Qe;Be++){let je=Ie[Be];tt(x,I,je,je.viewport)}}else j.length>0&&it(le,j,I,J),pe&&me.render(I),tt(x,I,J);R!==null&&(D.updateMultisampleRenderTarget(R),D.updateRenderTargetMipmap(R)),I.isScene===!0&&I.onAfterRender(y,I,J),We.resetDefaultState(),A=-1,O=null,E.pop(),E.length>0?(m=E[E.length-1],F===!0&&De.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function mn(I,J,ce,le){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)ce=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||te.intersectsSprite(I)){le&&ge.setFromMatrixPosition(I.matrixWorld).applyMatrix4(W);let Be=_e.update(I),Qe=I.material;Qe.visible&&x.push(I,Be,Qe,ce,ge.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||te.intersectsObject(I))){let Be=_e.update(I),Qe=I.material;if(le&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ge.copy(I.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),ge.copy(Be.boundingSphere.center)),ge.applyMatrix4(I.matrixWorld).applyMatrix4(W)),Array.isArray(Qe)){let je=Be.groups;for(let ot=0,ct=je.length;ot<ct;ot++){let Ke=je[ot],At=Qe[Ke.materialIndex];At&&At.visible&&x.push(I,Be,At,ce,ge.z,Ke)}}else Qe.visible&&x.push(I,Be,Qe,ce,ge.z,null)}}let Ie=I.children;for(let Be=0,Qe=Ie.length;Be<Qe;Be++)mn(Ie[Be],J,ce,le)}function tt(I,J,ce,le){let j=I.opaque,Ie=I.transmissive,Be=I.transparent;m.setupLightsView(ce),F===!0&&De.setGlobalState(y.clippingPlanes,ce),le&&be.viewport(v.copy(le)),j.length>0&&rt(j,J,ce),Ie.length>0&&rt(Ie,J,ce),Be.length>0&&rt(Be,J,ce),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function it(I,J,ce,le){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[le.id]===void 0&&(m.state.transmissionRenderTarget[le.id]=new yr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?ya:xr,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let Ie=m.state.transmissionRenderTarget[le.id],Be=le.viewport||v;Ie.setSize(Be.z,Be.w);let Qe=y.getRenderTarget();y.setRenderTarget(Ie),y.getClearColor(V),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),pe&&me.render(ce);let je=y.toneMapping;y.toneMapping=Hr;let ot=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),m.setupLightsView(le),F===!0&&De.setGlobalState(y.clippingPlanes,le),rt(I,ce,le),D.updateMultisampleRenderTarget(Ie),D.updateRenderTargetMipmap(Ie),Re.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ke=0,At=J.length;Ke<At;Ke++){let _t=J[Ke],Vt=_t.object,Pn=_t.geometry,Nt=_t.material,st=_t.group;if(Nt.side===Dt&&Vt.layers.test(le.layers)){let Gt=Nt.side;Nt.side=yn,Nt.needsUpdate=!0,Ye(Vt,ce,le,Pn,Nt,st),Nt.side=Gt,Nt.needsUpdate=!0,ct=!0}}ct===!0&&(D.updateMultisampleRenderTarget(Ie),D.updateRenderTargetMipmap(Ie))}y.setRenderTarget(Qe),y.setClearColor(V,z),ot!==void 0&&(le.viewport=ot),y.toneMapping=je}function rt(I,J,ce){let le=J.isScene===!0?J.overrideMaterial:null;for(let j=0,Ie=I.length;j<Ie;j++){let Be=I[j],Qe=Be.object,je=Be.geometry,ot=le===null?Be.material:le,ct=Be.group;Qe.layers.test(ce.layers)&&Ye(Qe,J,ce,je,ot,ct)}}function Ye(I,J,ce,le,j,Ie){I.onBeforeRender(y,J,ce,le,j,Ie),I.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),j.onBeforeRender(y,J,ce,le,I,Ie),j.transparent===!0&&j.side===Dt&&j.forceSinglePass===!1?(j.side=yn,j.needsUpdate=!0,y.renderBufferDirect(ce,J,le,j,I,Ie),j.side=tr,j.needsUpdate=!0,y.renderBufferDirect(ce,J,le,j,I,Ie),j.side=Dt):y.renderBufferDirect(ce,J,le,j,I,Ie),I.onAfterRender(y,J,ce,le,j,Ie)}function at(I,J,ce){J.isScene!==!0&&(J=we);let le=Ce.get(I),j=m.state.lights,Ie=m.state.shadowsArray,Be=j.state.version,Qe=ke.getParameters(I,j.state,Ie,J,ce),je=ke.getProgramCacheKey(Qe),ot=le.programs;le.environment=I.isMeshStandardMaterial?J.environment:null,le.fog=J.fog,le.envMap=(I.isMeshStandardMaterial?K:S).get(I.envMap||le.environment),le.envMapRotation=le.environment!==null&&I.envMap===null?J.environmentRotation:I.envMapRotation,ot===void 0&&(I.addEventListener("dispose",ut),ot=new Map,le.programs=ot);let ct=ot.get(je);if(ct!==void 0){if(le.currentProgram===ct&&le.lightsStateVersion===Be)return dt(I,Qe),ct}else Qe.uniforms=ke.getUniforms(I),I.onBeforeCompile(Qe,y),ct=ke.acquireProgram(Qe,je),ot.set(je,ct),le.uniforms=Qe.uniforms;let Ke=le.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ke.clippingPlanes=De.uniform),dt(I,Qe),le.needsLights=Bt(I),le.lightsStateVersion=Be,le.needsLights&&(Ke.ambientLightColor.value=j.state.ambient,Ke.lightProbe.value=j.state.probe,Ke.directionalLights.value=j.state.directional,Ke.directionalLightShadows.value=j.state.directionalShadow,Ke.spotLights.value=j.state.spot,Ke.spotLightShadows.value=j.state.spotShadow,Ke.rectAreaLights.value=j.state.rectArea,Ke.ltc_1.value=j.state.rectAreaLTC1,Ke.ltc_2.value=j.state.rectAreaLTC2,Ke.pointLights.value=j.state.point,Ke.pointLightShadows.value=j.state.pointShadow,Ke.hemisphereLights.value=j.state.hemi,Ke.directionalShadowMap.value=j.state.directionalShadowMap,Ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ke.spotShadowMap.value=j.state.spotShadowMap,Ke.spotLightMatrix.value=j.state.spotLightMatrix,Ke.spotLightMap.value=j.state.spotLightMap,Ke.pointShadowMap.value=j.state.pointShadowMap,Ke.pointShadowMatrix.value=j.state.pointShadowMatrix),le.currentProgram=ct,le.uniformsList=null,ct}function Je(I){if(I.uniformsList===null){let J=I.currentProgram.getUniforms();I.uniformsList=Qs.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function dt(I,J){let ce=Ce.get(I);ce.outputColorSpace=J.outputColorSpace,ce.batching=J.batching,ce.batchingColor=J.batchingColor,ce.instancing=J.instancing,ce.instancingColor=J.instancingColor,ce.instancingMorph=J.instancingMorph,ce.skinning=J.skinning,ce.morphTargets=J.morphTargets,ce.morphNormals=J.morphNormals,ce.morphColors=J.morphColors,ce.morphTargetsCount=J.morphTargetsCount,ce.numClippingPlanes=J.numClippingPlanes,ce.numIntersection=J.numClipIntersection,ce.vertexAlphas=J.vertexAlphas,ce.vertexTangents=J.vertexTangents,ce.toneMapping=J.toneMapping}function gn(I,J,ce,le,j){J.isScene!==!0&&(J=we),D.resetTextureUnits();let Ie=J.fog,Be=le.isMeshStandardMaterial?J.environment:null,Qe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gr,je=(le.isMeshStandardMaterial?K:S).get(le.envMap||Be),ot=le.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ct=!!ce.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ke=!!ce.morphAttributes.position,At=!!ce.morphAttributes.normal,_t=!!ce.morphAttributes.color,Vt=Hr;le.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Vt=y.toneMapping);let Pn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Nt=Pn!==void 0?Pn.length:0,st=Ce.get(le),Gt=m.state.lights;if(F===!0&&(ie===!0||I!==O)){let si=I===O&&le.id===A;De.setState(le,I,si)}let Ne=!1;le.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Gt.state.version||st.outputColorSpace!==Qe||j.isBatchedMesh&&st.batching===!1||!j.isBatchedMesh&&st.batching===!0||j.isBatchedMesh&&st.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&st.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&st.instancing===!1||!j.isInstancedMesh&&st.instancing===!0||j.isSkinnedMesh&&st.skinning===!1||!j.isSkinnedMesh&&st.skinning===!0||j.isInstancedMesh&&st.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&st.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&st.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&st.instancingMorph===!1&&j.morphTexture!==null||st.envMap!==je||le.fog===!0&&st.fog!==Ie||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==De.numPlanes||st.numIntersection!==De.numIntersection)||st.vertexAlphas!==ot||st.vertexTangents!==ct||st.morphTargets!==Ke||st.morphNormals!==At||st.morphColors!==_t||st.toneMapping!==Vt||st.morphTargetsCount!==Nt)&&(Ne=!0):(Ne=!0,st.__version=le.version);let Ze=st.currentProgram;Ne===!0&&(Ze=at(le,J,j));let wn=!1,nn=!1,ri=!1,an=Ze.getUniforms(),di=st.uniforms;if(be.useProgram(Ze.program)&&(wn=!0,nn=!0,ri=!0),le.id!==A&&(A=le.id,nn=!0),wn||O!==I){ve.reverseDepthBuffer?(q.copy(I.projectionMatrix),ax(q),cx(q),an.setValue(L,"projectionMatrix",q)):an.setValue(L,"projectionMatrix",I.projectionMatrix),an.setValue(L,"viewMatrix",I.matrixWorldInverse);let si=an.map.cameraPosition;si!==void 0&&si.setValue(L,Z.setFromMatrixPosition(I.matrixWorld)),ve.logarithmicDepthBuffer&&an.setValue(L,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&an.setValue(L,"isOrthographic",I.isOrthographicCamera===!0),O!==I&&(O=I,nn=!0,ri=!0)}if(j.isSkinnedMesh){an.setOptional(L,j,"bindMatrix"),an.setOptional(L,j,"bindMatrixInverse");let si=j.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),an.setValue(L,"boneTexture",si.boneTexture,D))}j.isBatchedMesh&&(an.setOptional(L,j,"batchingTexture"),an.setValue(L,"batchingTexture",j._matricesTexture,D),an.setOptional(L,j,"batchingIdTexture"),an.setValue(L,"batchingIdTexture",j._indirectTexture,D),an.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&an.setValue(L,"batchingColorTexture",j._colorsTexture,D));let Ts=ce.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Ae.update(j,ce,Ze),(nn||st.receiveShadow!==j.receiveShadow)&&(st.receiveShadow=j.receiveShadow,an.setValue(L,"receiveShadow",j.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(di.envMap.value=je,di.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&J.environment!==null&&(di.envMapIntensity.value=J.environmentIntensity),nn&&(an.setValue(L,"toneMappingExposure",y.toneMappingExposure),st.needsLights&&dn(di,ri),Ie&&le.fog===!0&&Ue.refreshFogUniforms(di,Ie),Ue.refreshMaterialUniforms(di,le,oe,ee,m.state.transmissionRenderTarget[I.id]),Qs.upload(L,Je(st),di,D)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Qs.upload(L,Je(st),di,D),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&an.setValue(L,"center",j.center),an.setValue(L,"modelViewMatrix",j.modelViewMatrix),an.setValue(L,"normalMatrix",j.normalMatrix),an.setValue(L,"modelMatrix",j.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){let si=le.uniformsGroups;for(let fi=0,zl=si.length;fi<zl;fi++){let Lo=si[fi];X.update(Lo,Ze),X.bind(Lo,Ze)}}return Ze}function dn(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function Bt(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(I,J,ce){Ce.get(I.texture).__webglTexture=J,Ce.get(I.depthTexture).__webglTexture=ce;let le=Ce.get(I);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ce===void 0,le.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,J){let ce=Ce.get(I);ce.__webglFramebuffer=J,ce.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,ce=0){R=I,P=J,b=ce;let le=!0,j=null,Ie=!1,Be=!1;if(I){let je=Ce.get(I);if(je.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(L.FRAMEBUFFER,null),le=!1;else if(je.__webglFramebuffer===void 0)D.setupRenderTarget(I);else if(je.__hasExternalTextures)D.rebindTextures(I,Ce.get(I.texture).__webglTexture,Ce.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ke=I.depthTexture;if(je.__boundDepthTexture!==Ke){if(Ke!==null&&Ce.has(Ke)&&(I.width!==Ke.image.width||I.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(I)}}let ot=I.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Be=!0);let ct=Ce.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[J])?j=ct[J][ce]:j=ct[J],Ie=!0):I.samples>0&&D.useMultisampledRTT(I)===!1?j=Ce.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?j=ct[ce]:j=ct,v.copy(I.viewport),T.copy(I.scissor),k=I.scissorTest}else v.copy(N).multiplyScalar(oe).floor(),T.copy(ne).multiplyScalar(oe).floor(),k=Q;if(be.bindFramebuffer(L.FRAMEBUFFER,j)&&le&&be.drawBuffers(I,j),be.viewport(v),be.scissor(T),be.setScissorTest(k),Ie){let je=Ce.get(I.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+J,je.__webglTexture,ce)}else if(Be){let je=Ce.get(I.texture),ot=J||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,je.__webglTexture,ce||0,ot)}A=-1},this.readRenderTargetPixels=function(I,J,ce,le,j,Ie,Be){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Ce.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Be!==void 0&&(Qe=Qe[Be]),Qe){be.bindFramebuffer(L.FRAMEBUFFER,Qe);try{let je=I.texture,ot=je.format,ct=je.type;if(!ve.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-le&&ce>=0&&ce<=I.height-j&&L.readPixels(J,ce,le,j,he.convert(ot),he.convert(ct),Ie)}finally{let je=R!==null?Ce.get(R).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(I,J,ce,le,j,Ie,Be){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Ce.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Be!==void 0&&(Qe=Qe[Be]),Qe){let je=I.texture,ot=je.format,ct=je.type;if(!ve.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=I.width-le&&ce>=0&&ce<=I.height-j){be.bindFramebuffer(L.FRAMEBUFFER,Qe);let Ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.bufferData(L.PIXEL_PACK_BUFFER,Ie.byteLength,L.STREAM_READ),L.readPixels(J,ce,le,j,he.convert(ot),he.convert(ct),0);let At=R!==null?Ce.get(R).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,At);let _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ox(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ie),L.deleteBuffer(Ke),L.deleteSync(_t),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,J=null,ce=0){I.isTexture!==!0&&(Rc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1]);let le=Math.pow(2,-ce),j=Math.floor(I.image.width*le),Ie=Math.floor(I.image.height*le),Be=J!==null?J.x:0,Qe=J!==null?J.y:0;D.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,ce,0,0,Be,Qe,j,Ie),be.unbindTexture()},this.copyTextureToTexture=function(I,J,ce=null,le=null,j=0){I.isTexture!==!0&&(Rc("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,I=arguments[1],J=arguments[2],j=arguments[3]||0,ce=null);let Ie,Be,Qe,je,ot,ct;ce!==null?(Ie=ce.max.x-ce.min.x,Be=ce.max.y-ce.min.y,Qe=ce.min.x,je=ce.min.y):(Ie=I.image.width,Be=I.image.height,Qe=0,je=0),le!==null?(ot=le.x,ct=le.y):(ot=0,ct=0);let Ke=he.convert(J.format),At=he.convert(J.type);D.setTexture2D(J,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment);let _t=L.getParameter(L.UNPACK_ROW_LENGTH),Vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Pn=L.getParameter(L.UNPACK_SKIP_PIXELS),Nt=L.getParameter(L.UNPACK_SKIP_ROWS),st=L.getParameter(L.UNPACK_SKIP_IMAGES),Gt=I.isCompressedTexture?I.mipmaps[j]:I.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,ot,ct,Ie,Be,Ke,At,Gt.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,ot,ct,Gt.width,Gt.height,Ke,Gt.data):L.texSubImage2D(L.TEXTURE_2D,j,ot,ct,Ie,Be,Ke,At,Gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,_t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,st),j===0&&J.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(I,J,ce=null,le=null,j=0){I.isTexture!==!0&&(Rc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,le=arguments[1]||null,I=arguments[2],J=arguments[3],j=arguments[4]||0);let Ie,Be,Qe,je,ot,ct,Ke,At,_t,Vt=I.isCompressedTexture?I.mipmaps[j]:I.image;ce!==null?(Ie=ce.max.x-ce.min.x,Be=ce.max.y-ce.min.y,Qe=ce.max.z-ce.min.z,je=ce.min.x,ot=ce.min.y,ct=ce.min.z):(Ie=Vt.width,Be=Vt.height,Qe=Vt.depth,je=0,ot=0,ct=0),le!==null?(Ke=le.x,At=le.y,_t=le.z):(Ke=0,At=0,_t=0);let Pn=he.convert(J.format),Nt=he.convert(J.type),st;if(J.isData3DTexture)D.setTexture3D(J,0),st=L.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)D.setTexture2DArray(J,0),st=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment);let Gt=L.getParameter(L.UNPACK_ROW_LENGTH),Ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ze=L.getParameter(L.UNPACK_SKIP_PIXELS),wn=L.getParameter(L.UNPACK_SKIP_ROWS),nn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ct),I.isDataTexture||I.isData3DTexture?L.texSubImage3D(st,j,Ke,At,_t,Ie,Be,Qe,Pn,Nt,Vt.data):J.isCompressedArrayTexture?L.compressedTexSubImage3D(st,j,Ke,At,_t,Ie,Be,Qe,Pn,Vt.data):L.texSubImage3D(st,j,Ke,At,_t,Ie,Be,Qe,Pn,Nt,Vt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,wn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nn),j===0&&J.generateMipmaps&&L.generateMipmap(st),be.unbindTexture()},this.initRenderTarget=function(I){Ce.get(I).__webglFramebuffer===void 0&&D.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),be.unbindTexture()},this.resetState=function(){P=0,b=0,R=null,be.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gd?"display-p3":"srgb",t.unpackColorSpace=Zt.workingColorSpace===sl?"display-p3":"srgb"}};var Gc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wc=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ir=class extends ei{constructor(e=null,t=1,n=1,r,s,o,a,c,l=ai,h=ai,p,d){super(null,o,a,c,l,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ds=class extends un{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new Rt,Up=new Rt,mc=[],Hp=new Dn,iM=new Rt,Yo=new lt,Zo=new Or,vn=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,iM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Hp.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Hp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Zo.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Yo.geometry=this.geometry,Yo.material=this.material,Yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(n),e.ray.intersectsSphere(Zo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xs),Up.multiplyMatrices(n,Xs),Yo.matrixWorld=Up,Yo.raycast(e,mc);for(let o=0,a=mc.length;o<a;o++){let c=mc[o];c.instanceId=s,c.object=this,t.push(c)}mc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(r*this.count),r,this.count,ud,er));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var fs=class extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xc=new w,qc=new w,Np=new Rt,$o=new oa,gc=new Or,Uh=new w,Fp=new w,zu=class extends yt{constructor(e=new Pt,t=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Xc.fromBufferAttribute(t,r-1),qc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Xc.distanceTo(qc);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(r),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;Np.copy(r).invert(),$o.copy(e.ray).applyMatrix4(Np);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let u=h.getX(x),E=h.getX(x+1),y=xc(this,e,$o,c,u,E);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),u=xc(this,e,$o,c,x,m);u&&t.push(u)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let u=xc(this,e,$o,c,x,x+1);u&&t.push(u)}if(this.isLineLoop){let x=xc(this,e,$o,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xc(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(Xc.fromBufferAttribute(o,r),qc.fromBufferAttribute(o,s),t.distanceSqToSegment(Xc,qc,Uh,Fp)>n)return;Uh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Uh);if(!(c<e.near||c>e.far))return{distance:c,point:Fp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Op=new w,zp=new w,ao=class extends zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Op.fromBufferAttribute(t,r),zp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Op.distanceTo(zp);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zt=class extends ei{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Oe:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,r=[],s=[],o=[],a=new w,c=new Rt;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Tn(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Tn(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ha=class extends qn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Oe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*p+this.aX,l=d*p+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bu=class extends ha{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vd(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,p){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+p)+(c-a)/p;d*=h,f*=h,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var yc=new w,Hh=new vd,Nh=new vd,Fh=new vd,Xt=class extends qn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new w){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(yc.subVectors(r[0],r[1]).add(r[0]),l=yc);let p=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(yc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=yc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(p),f),x=Math.pow(p.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Hh.initNonuniformCatmullRom(l.x,p.x,d.x,h.x,g,x,m),Nh.initNonuniformCatmullRom(l.y,p.y,d.y,h.y,g,x,m),Fh.initNonuniformCatmullRom(l.z,p.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(l.x,p.x,d.x,h.x,this.tension),Nh.initCatmullRom(l.y,p.y,d.y,h.y,this.tension),Fh.initCatmullRom(l.z,p.z,d.z,h.z,this.tension));return n.set(Hh.calc(c),Nh.calc(c),Fh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bp(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function rM(i,e){let t=1-i;return t*t*e}function sM(i,e){return 2*(1-i)*i*e}function oM(i,e){return i*i*e}function ta(i,e,t,n){return rM(i,e)+sM(i,t)+oM(i,n)}function aM(i,e){let t=1-i;return t*t*t*e}function cM(i,e){let t=1-i;return 3*t*t*i*e}function lM(i,e){return 3*(1-i)*i*i*e}function hM(i,e){return i*i*i*e}function na(i,e,t,n,r){return aM(i,e)+cM(i,t)+lM(i,n)+hM(i,r)}var Yc=class extends qn{constructor(e=new Oe,t=new Oe,n=new Oe,r=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Oe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(na(e,r.x,s.x,o.x,a.x),na(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends qn{constructor(e=new w,t=new w,n=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(na(e,r.x,s.x,o.x,a.x),na(e,r.y,s.y,o.y,a.y),na(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zc=class extends qn{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ku=class extends qn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends qn{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ta(e,r.x,s.x,o.x),ta(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends qn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ta(e,r.x,s.x,o.x),ta(e,r.y,s.y,o.y),ta(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(Bp(a,c.x,l.x,h.x,p.x),Bp(a,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Oe().fromArray(r))}return this}},Qc=Object.freeze({__proto__:null,ArcCurve:Bu,CatmullRomCurve3:Xt,CubicBezierCurve:Yc,CubicBezierCurve3:ua,EllipseCurve:ha,LineCurve:Zc,LineCurve3:ku,QuadraticBezierCurve:$c,QuadraticBezierCurve3:Kc,SplineCurve:Jc}),Vu=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Qc[r.type]().fromJSON(r))}return this}},ti=class extends Vu{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Zc(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new $c(this.currentPoint.clone(),new Oe(e,t),new Oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new Yc(this.currentPoint.clone(),new Oe(e,t),new Oe(n,r),new Oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Jc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new ha(e,t,n,r,s,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Br=class i extends Pt{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Tn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/t,p=new w,d=new Oe,f=new w,g=new w,x=new w,m=0,u=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,f.x=u*1,f.y=-m,f.z=u*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let E=0;E<=t;E++){let y=n+E*h*r,_=Math.sin(y),P=Math.cos(y);for(let b=0;b<=e.length-1;b++){p.x=e[b].x*_,p.y=e[b].y,p.z=e[b].x*P,o.push(p.x,p.y,p.z),d.x=E/t,d.y=b/(e.length-1),a.push(d.x,d.y);let R=c[3*b+0]*_,A=c[3*b+1],O=c[3*b+0]*P;l.push(R,A,O)}}for(let E=0;E<t;E++)for(let y=0;y<e.length-1;y++){let _=y+E*e.length,P=_,b=_+e.length,R=_+e.length+1,A=_+1;s.push(P,b,A),s.push(R,A,b)}this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var rr=class i extends Pt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new w,h=new Oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let f=n+p/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ut=class i extends Pt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],d=[],f=[],g=0,x=[],m=n/2,u=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function E(){let _=new w,P=new w,b=0,R=(t-e)/n;for(let A=0;A<=s;A++){let O=[],v=A/s,T=v*(t-e)+e;for(let k=0;k<=r;k++){let V=k/r,z=V*c+a,H=Math.sin(z),ee=Math.cos(z);P.x=T*H,P.y=-v*n+m,P.z=T*ee,p.push(P.x,P.y,P.z),_.set(H,R,ee).normalize(),d.push(_.x,_.y,_.z),f.push(V,1-v),O.push(g++)}x.push(O)}for(let A=0;A<r;A++)for(let O=0;O<s;O++){let v=x[O][A],T=x[O+1][A],k=x[O+1][A+1],V=x[O][A+1];e>0&&(h.push(v,T,V),b+=3),t>0&&(h.push(T,k,V),b+=3)}l.addGroup(u,b,0),u+=b}function y(_){let P=g,b=new Oe,R=new w,A=0,O=_===!0?e:t,v=_===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let T=g;for(let k=0;k<=r;k++){let z=k/r*c+a,H=Math.cos(z),ee=Math.sin(z);R.x=O*ee,R.y=m*v,R.z=O*H,p.push(R.x,R.y,R.z),d.push(0,v,0),b.x=H*.5+.5,b.y=ee*.5*v+.5,f.push(b.x,b.y),g++}for(let k=0;k<r;k++){let V=P+k,z=T+k;_===!0?h.push(z,z+1,V):h.push(z+1,z,V),A+=3}l.addGroup(u,A,_===!0?1:2),u+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kr=class i extends Ut{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gu=class i extends Pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let y=new w,_=new w,P=new w;for(let b=0;b<t.length;b+=3)f(t[b+0],y),f(t[b+1],_),f(t[b+2],P),c(y,_,P,E)}function c(E,y,_,P){let b=P+1,R=[];for(let A=0;A<=b;A++){R[A]=[];let O=E.clone().lerp(_,A/b),v=y.clone().lerp(_,A/b),T=b-A;for(let k=0;k<=T;k++)k===0&&A===b?R[A][k]=O:R[A][k]=O.clone().lerp(v,k/T)}for(let A=0;A<b;A++)for(let O=0;O<2*(b-A)-1;O++){let v=Math.floor(O/2);O%2===0?(d(R[A][v+1]),d(R[A+1][v]),d(R[A][v])):(d(R[A][v+1]),d(R[A+1][v+1]),d(R[A+1][v]))}}function l(E){let y=new w;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(E),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function h(){let E=new w;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];let _=m(E)/2/Math.PI+.5,P=u(E)/Math.PI+.5;o.push(_,1-P)}g(),p()}function p(){for(let E=0;E<o.length;E+=6){let y=o[E+0],_=o[E+2],P=o[E+4],b=Math.max(y,_,P),R=Math.min(y,_,P);b>.9&&R<.1&&(y<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),P<.2&&(o[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function f(E,y){let _=E*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let E=new w,y=new w,_=new w,P=new w,b=new Oe,R=new Oe,A=new Oe;for(let O=0,v=0;O<s.length;O+=9,v+=6){E.set(s[O+0],s[O+1],s[O+2]),y.set(s[O+3],s[O+4],s[O+5]),_.set(s[O+6],s[O+7],s[O+8]),b.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),P.copy(E).add(y).add(_).divideScalar(3);let T=m(P);x(b,v+0,E,T),x(R,v+2,y,T),x(A,v+4,_,T)}}function x(E,y,_,P){P<0&&E.x===1&&(o[y]=E.x-1),_.x===0&&_.z===0&&(o[y]=P/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var wt=class extends ti{constructor(e){super(e),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ti().fromJSON(r))}return this}},uM={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=v0(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,p,d,f;if(n&&(s=gM(i,e,s,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<r;g+=t)p=i[g],d=i[g+1],p<a&&(a=p),d<c&&(c=d),p>l&&(l=p),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return da(s,o,t,a,c,f,0),o}};function v0(i,e,t,n,r){let s,o;if(r===RM(i,e,t,n)>0)for(s=e;s<t;s+=n)o=kp(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=kp(s,i[s],i[s+1],o);return o&&al(o,o.next)&&(pa(o),o=o.next),o}function ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(al(t,t.next)||hn(t.prev,t,t.next)===0)){if(pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function da(i,e,t,n,r,s,o){if(!i)return;!o&&s&&MM(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?fM(i,n,r,s):dM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),pa(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=pM(ps(i),e,t),da(i,e,t,n,r,s,2)):o===2&&mM(i,e,t,n,r,s):da(ps(i),e,t,n,r,s,1);break}}}function dM(i){let e=i.prev,t=i,n=i.next;if(hn(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,p=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=f&&Zs(r,a,s,c,o,l,g.x,g.y)&&hn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fM(i,e,t,n){let r=i.prev,s=i,o=i.next;if(hn(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,p=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<p?h<d?h:d:p<d?p:d,x=a>c?a>l?a:l:c>l?c:l,m=h>p?h>d?h:d:p>d?p:d,u=Wu(f,g,e,t,n),E=Wu(x,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=u&&_&&_.z<=E;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Zs(a,h,c,p,l,d,y.x,y.y)&&hn(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Zs(a,h,c,p,l,d,_.x,_.y)&&hn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=u;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Zs(a,h,c,p,l,d,y.x,y.y)&&hn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=E;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Zs(a,h,c,p,l,d,_.x,_.y)&&hn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function pM(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!al(r,s)&&_0(r,n,n.next,s)&&fa(r,s)&&fa(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),pa(n),pa(n.next),n=i=s),n=n.next}while(n!==i);return ps(n)}function mM(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&SM(o,a)){let c=M0(o,a);o=ps(o,o.next),c=ps(c,c.next),da(o,e,t,n,r,s,0),da(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function gM(i,e,t,n){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=v0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(wM(l));for(r.sort(xM),s=0;s<r.length;s++)t=yM(r[s],t);return t}function xM(i,e){return i.x-e.x}function yM(i,e){let t=vM(i,e);if(!t)return e;let n=M0(t,i);return ps(n,n.next),ps(t,t.next)}function vM(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,p;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&Zs(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(p=Math.abs(o-t.y)/(s-t.x),fa(t,i)&&(p<h||p===h&&(t.x>r.x||t.x===r.x&&_M(r,t)))&&(r=t,h=p)),t=t.next;while(t!==a);return r}function _M(i,e){return hn(i.prev,i,e.prev)<0&&hn(e.next,i,i.next)<0}function MM(i,e,t,n){let r=i;do r.z===0&&(r.z=Wu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,EM(r)}function EM(i){let e,t,n,r,s,o,a,c,l=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(o>1);return i}function Wu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zs(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function SM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!TM(i,e)&&(fa(i,e)&&fa(e,i)&&bM(i,e)&&(hn(i.prev,i,e.prev)||hn(i,e.prev,e))||al(i,e)&&hn(i.prev,i,i.next)>0&&hn(e.prev,e,e.next)>0)}function hn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function al(i,e){return i.x===e.x&&i.y===e.y}function _0(i,e,t,n){let r=_c(hn(i,e,t)),s=_c(hn(i,e,n)),o=_c(hn(t,n,i)),a=_c(hn(t,n,e));return!!(r!==s&&o!==a||r===0&&vc(i,t,e)||s===0&&vc(i,n,e)||o===0&&vc(t,i,n)||a===0&&vc(t,e,n))}function vc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _c(i){return i>0?1:i<0?-1:0}function TM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fa(i,e){return hn(i.prev,i,i.next)<0?hn(i,e,i.next)>=0&&hn(i,i.prev,e)>=0:hn(i,e,i.prev)<0||hn(i,i.next,e)<0}function bM(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function M0(i,e){let t=new Xu(i.i,i.x,i.y),n=new Xu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function kp(i,e,t,n){let r=new Xu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function pa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function RM(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Nr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Vp(e),Gp(n,e);let o=e.length;t.forEach(Vp);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Gp(n,t[c]);let a=uM.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Vp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Gp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var en=class i extends Pt{constructor(e=new wt([new Oe(.5,.5),new Oe(-.5,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ht(r,3)),this.setAttribute("uv",new ht(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:AM,y,_=!1,P,b,R,A;u&&(y=u.getSpacedPoints(h),_=!0,d=!1,P=u.computeFrenetFrames(h,!1),b=new w,R=new w,A=new w),d||(m=0,f=0,g=0,x=0);let O=a.extractPoints(l),v=O.shape,T=O.holes;if(!Nr.isClockWise(v)){v=v.reverse();for(let re=0,L=T.length;re<L;re++){let xe=T[re];Nr.isClockWise(xe)&&(T[re]=xe.reverse())}}let V=Nr.triangulateShape(v,T),z=v;for(let re=0,L=T.length;re<L;re++){let xe=T[re];v=v.concat(xe)}function H(re,L,xe){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(L,xe)}let ee=v.length,oe=V.length;function se(re,L,xe){let Re,ve,be,Le=re.x-L.x,Ce=re.y-L.y,D=xe.x-re.x,S=xe.y-re.y,K=Le*Le+Ce*Ce,fe=Le*S-Ce*D;if(Math.abs(fe)>Number.EPSILON){let ye=Math.sqrt(K),_e=Math.sqrt(D*D+S*S),ke=L.x-Ce/ye,Ue=L.y+Le/ye,Ve=xe.x-S/_e,nt=xe.y+D/_e,De=((Ve-ke)*S-(nt-Ue)*D)/(Le*S-Ce*D);Re=ke+Le*De-re.x,ve=Ue+Ce*De-re.y;let $=Re*Re+ve*ve;if($<=2)return new Oe(Re,ve);be=Math.sqrt($/2)}else{let ye=!1;Le>Number.EPSILON?D>Number.EPSILON&&(ye=!0):Le<-Number.EPSILON?D<-Number.EPSILON&&(ye=!0):Math.sign(Ce)===Math.sign(S)&&(ye=!0),ye?(Re=-Ce,ve=Le,be=Math.sqrt(K)):(Re=Le,ve=Ce,be=Math.sqrt(K/2))}return new Oe(Re/be,ve/be)}let de=[];for(let re=0,L=z.length,xe=L-1,Re=re+1;re<L;re++,xe++,Re++)xe===L&&(xe=0),Re===L&&(Re=0),de[re]=se(z[re],z[xe],z[Re]);let N=[],ne,Q=de.concat();for(let re=0,L=T.length;re<L;re++){let xe=T[re];ne=[];for(let Re=0,ve=xe.length,be=ve-1,Le=Re+1;Re<ve;Re++,be++,Le++)be===ve&&(be=0),Le===ve&&(Le=0),ne[Re]=se(xe[Re],xe[be],xe[Le]);N.push(ne),Q=Q.concat(ne)}for(let re=0;re<m;re++){let L=re/m,xe=f*Math.cos(L*Math.PI/2),Re=g*Math.sin(L*Math.PI/2)+x;for(let ve=0,be=z.length;ve<be;ve++){let Le=H(z[ve],de[ve],Re);W(Le.x,Le.y,-xe)}for(let ve=0,be=T.length;ve<be;ve++){let Le=T[ve];ne=N[ve];for(let Ce=0,D=Le.length;Ce<D;Ce++){let S=H(Le[Ce],ne[Ce],Re);W(S.x,S.y,-xe)}}}let te=g+x;for(let re=0;re<ee;re++){let L=d?H(v[re],Q[re],te):v[re];_?(R.copy(P.normals[0]).multiplyScalar(L.x),b.copy(P.binormals[0]).multiplyScalar(L.y),A.copy(y[0]).add(R).add(b),W(A.x,A.y,A.z)):W(L.x,L.y,0)}for(let re=1;re<=h;re++)for(let L=0;L<ee;L++){let xe=d?H(v[L],Q[L],te):v[L];_?(R.copy(P.normals[re]).multiplyScalar(xe.x),b.copy(P.binormals[re]).multiplyScalar(xe.y),A.copy(y[re]).add(R).add(b),W(A.x,A.y,A.z)):W(xe.x,xe.y,p/h*re)}for(let re=m-1;re>=0;re--){let L=re/m,xe=f*Math.cos(L*Math.PI/2),Re=g*Math.sin(L*Math.PI/2)+x;for(let ve=0,be=z.length;ve<be;ve++){let Le=H(z[ve],de[ve],Re);W(Le.x,Le.y,p+xe)}for(let ve=0,be=T.length;ve<be;ve++){let Le=T[ve];ne=N[ve];for(let Ce=0,D=Le.length;Ce<D;Ce++){let S=H(Le[Ce],ne[Ce],Re);_?W(S.x,S.y+y[h-1].y,y[h-1].x+xe):W(S.x,S.y,p+xe)}}}F(),ie();function F(){let re=r.length/3;if(d){let L=0,xe=ee*L;for(let Re=0;Re<oe;Re++){let ve=V[Re];Z(ve[2]+xe,ve[1]+xe,ve[0]+xe)}L=h+m*2,xe=ee*L;for(let Re=0;Re<oe;Re++){let ve=V[Re];Z(ve[0]+xe,ve[1]+xe,ve[2]+xe)}}else{for(let L=0;L<oe;L++){let xe=V[L];Z(xe[2],xe[1],xe[0])}for(let L=0;L<oe;L++){let xe=V[L];Z(xe[0]+ee*h,xe[1]+ee*h,xe[2]+ee*h)}}n.addGroup(re,r.length/3-re,0)}function ie(){let re=r.length/3,L=0;q(z,L),L+=z.length;for(let xe=0,Re=T.length;xe<Re;xe++){let ve=T[xe];q(ve,L),L+=ve.length}n.addGroup(re,r.length/3-re,1)}function q(re,L){let xe=re.length;for(;--xe>=0;){let Re=xe,ve=xe-1;ve<0&&(ve=re.length-1);for(let be=0,Le=h+m*2;be<Le;be++){let Ce=ee*be,D=ee*(be+1),S=L+Re+Ce,K=L+ve+Ce,fe=L+ve+D,ye=L+Re+D;ge(S,K,fe,ye)}}}function W(re,L,xe){c.push(re),c.push(L),c.push(xe)}function Z(re,L,xe){we(re),we(L),we(xe);let Re=r.length/3,ve=E.generateTopUV(n,r,Re-3,Re-2,Re-1);pe(ve[0]),pe(ve[1]),pe(ve[2])}function ge(re,L,xe,Re){we(re),we(L),we(Re),we(L),we(xe),we(Re);let ve=r.length/3,be=E.generateSideWallUV(n,r,ve-6,ve-3,ve-2,ve-1);pe(be[0]),pe(be[1]),pe(be[3]),pe(be[1]),pe(be[2]),pe(be[3])}function we(re){r.push(c[re*3+0]),r.push(c[re*3+1]),r.push(c[re*3+2])}function pe(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return CM(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Qc[r.type]().fromJSON(r)),new i(n,e.options)}},AM={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],h=e[r*3+1];return[new Oe(s,o),new Oe(a,c),new Oe(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Oe(o,1-c),new Oe(l,1-p),new Oe(d,1-g),new Oe(x,1-u)]:[new Oe(a,1-c),new Oe(h,1-p),new Oe(f,1-g),new Oe(m,1-u)]}};function CM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var jc=class i extends Gu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Vr=class i extends Pt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],h=[],p=e,d=(t-e)/r,f=new w,g=new Oe;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let u=s+m/n*o;f.x=p*Math.cos(u),f.y=p*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}p+=d}for(let x=0;x<r;x++){let m=x*(n+1);for(let u=0;u<n;u++){let E=u+m,y=E,_=E+n+1,P=E+n+2,b=E+1;a.push(y,_,b),a.push(_,P,b)}}this.setIndex(a),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wi=class i extends Pt{constructor(e=new wt([new Oe(0,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(s,3)),this.setAttribute("uv",new ht(o,2));function l(h){let p=r.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Nr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){let E=g[m];Nr.isClockWise(E)===!0&&(g[m]=E.reverse())}let x=Nr.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){let E=g[m];f=f.concat(E)}for(let m=0,u=f.length;m<u;m++){let E=f[m];r.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let m=0,u=x.length;m<u;m++){let E=x[m],y=E[0]+p,_=E[1]+p,P=E[2]+p;n.push(y,_,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return PM(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function PM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var Jt=class i extends Pt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],p=new w,d=new w,f=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let E=[],y=u/n,_=0;u===0&&o===0?_=.5/t:u===n&&c===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){let b=P/t;p.x=-e*Math.cos(r+b*s)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(r+b*s)*Math.sin(o+y*a),g.push(p.x,p.y,p.z),d.copy(p).normalize(),x.push(d.x,d.y,d.z),m.push(b+_,1-y),E.push(l++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){let y=h[u][E+1],_=h[u][E],P=h[u+1][E],b=h[u+1][E+1];(u!==0||o>0)&&f.push(y,_,b),(u!==n-1||c<Math.PI)&&f.push(_,P,b)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $t=class i extends Pt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new w,p=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/n*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),a.push(p.x,p.y,p.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(p,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,E=(r+1)*f+g;o.push(x,m,E),o.push(m,u,E)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var on=class i extends Pt{constructor(e=new Kc(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,c=new w,l=new Oe,h=new w,p=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function x(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),E(),u()}function m(y){h=e.getPointAt(y/t,h);let _=o.normals[y],P=o.binormals[y];for(let b=0;b<=r;b++){let R=b/r*Math.PI*2,A=Math.sin(R),O=-Math.cos(R);c.x=O*_.x+A*P.x,c.y=O*_.y+A*P.y,c.z=O*_.z+A*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,p.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=t;y++)for(let _=1;_<=r;_++){let P=(r+1)*(y-1)+(_-1),b=(r+1)*y+(_-1),R=(r+1)*y+_,A=(r+1)*(y-1)+_;g.push(P,b,A),g.push(b,R,A)}}function E(){for(let y=0;y<=t;y++)for(let _=0;_<=r;_++)l.x=y/t,l.y=_/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Qc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Fe=class extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l0,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qt=class extends Fe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Mc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function IM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var co=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qu=class extends co{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kf,endingEnd:kf}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vf:s=e,a=2*t-n;break;case Gf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vf:o=e,c=2*n-t;break;case Gf:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,u=-d*m+2*d*x-d*g,E=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let P=0;P!==a;++P)s[P]=u*o[h+P]+E*o[l+P]+y*o[c+P]+_*o[p+P];return s}},Yu=class extends co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),p=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*p+o[c+d]*h;return s}},Zu=class extends co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xi=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mc(t,this.TimeBufferType),this.values=Mc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mc(e.times,Array),values:Mc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cc:t=this.InterpolantFactoryMethodDiscrete;break;case wu:t=this.InterpolantFactoryMethodLinear;break;case oh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cc;case this.InterpolantFactoryMethodLinear:return wu;case this.InterpolantFactoryMethodSmooth:return oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&IM(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===oh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let p=a*n,d=p-n,f=p+n;for(let g=0;g!==n;++g){let x=t[p+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[p+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=wu;var ms=class extends Xi{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Cc;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var $u=class extends Xi{};$u.prototype.ValueTypeName="color";var Ku=class extends Xi{};Ku.prototype.ValueTypeName="number";var Ju=class extends co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)ft.slerpFlat(s,0,o,l-a,o,l,c);return s}},el=class extends Xi{InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Xi{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Cc;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Qu=class extends Xi{};Qu.prototype.ValueTypeName="vector";var Wp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ju=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=l.length;p<d;p+=2){let f=l[p],g=l[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},LM=new ju,ma=class{constructor(e){this.manager=e!==void 0?e:LM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var ed=class extends ma{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Wp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=sa("img");function c(){h(),Wp.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(p){h(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var lo=class extends ma{constructor(e){super(e)}load(e,t,n,r){let s=new ei,o=new ed(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ho=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},tl=class extends ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Oh=new Rt,Xp=new w,qp=new w,ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xp),qp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qp),t.updateMatrixWorld(),Oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},td=class extends ga{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ro*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},uo=class extends ho{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new td}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yp=new Rt,Ko=new w,zh=new w,nd=class extends ga{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ko),zh.copy(n.position),zh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zh),n.updateMatrixWorld(),r.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Yp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yp)}},zn=class extends ho{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new nd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},id=class extends ga{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nl=class extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new id}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var il=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Zp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Zp(){return performance.now()}var _d="\\[\\]\\.:\\/",DM=new RegExp("["+_d+"]","g"),Md="[^"+_d+"]",UM="[^"+_d.replace("\\.","")+"]",HM=/((?:WC+[\/:])*)/.source.replace("WC",Md),NM=/(WCOD+)?/.source.replace("WCOD",UM),FM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Md),OM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Md),zM=new RegExp("^"+HM+NM+FM+OM+"$"),BM=["material","materials","bones","map"],rd=class{constructor(e,t,n){let r=n||cn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},cn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DM,"")}static parseTrackName(e){let t=zM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);BM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};cn.Composite=rd;cn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};cn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};cn.prototype.GetterByBindingType=[cn.prototype._getValue_direct,cn.prototype._getValue_array,cn.prototype._getValue_arrayElement,cn.prototype._getValue_toArray];cn.prototype.SetterByBindingTypeAndVersioning=[[cn.prototype._setValue_direct,cn.prototype._setValue_direct_setNeedsUpdate,cn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_array,cn.prototype._setValue_array_setNeedsUpdate,cn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_arrayElement,cn.prototype._setValue_arrayElement_setNeedsUpdate,cn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_fromArray,cn.prototype._setValue_fromArray_setNeedsUpdate,cn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var OE=new Float32Array(1);var $p=new Rt,xa=class{constructor(e,t,n=0,r=1/0){this.ray=new oa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $p.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($p),this}intersectObject(e,t=!0,n=[]){return sd(e,this,n,t),n.sort(Kp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)sd(e[r],this,n,t);return n.sort(Kp),n}};function Kp(i,e){return i.distance-e.distance}function sd(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)sd(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function kM({coarse:i=!1,width:e=1280,cores:t=8,memory:n=8,dpr:r=1}={}){let s=i||e<700||t<=4||n<=4;return Object.freeze({mobile:s,pixelRatio:Math.min(r,s?1.25:1.5),minPixelRatio:Math.min(r,s?.75:1),maxFps:s?30:1/0,shadowSize:s?1024:1536,shadowHz:s?12:24,textureSize:s?256:512,chainSegments:s?16:24,chainRadialSegments:s?4:5,effectsHz:s?24:40,targetFrameMs:s?33.3:22})}var VM=typeof window>"u"?{}:{coarse:matchMedia("(pointer:coarse)").matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1},Ht=kM(VM);function E0(i,{exclude:e=[]}={}){let t=new Set(e),n=new Map,r=new Set,s=new w,o=new w,a=new Mt;i.updateWorldMatrix(!0,!0);let c=i.matrixWorld.clone().invert();function l(f){if(!(!f.visible||t.has(f)||f.userData.chargingAction||f.userData.keyAction||Number.isInteger(f.userData.hoistIndex)||Number.isInteger(f.userData.valveIndex))){if(f.isMesh&&!f.isInstancedMesh&&!f.isSkinnedMesh&&!f.children.length){let g=f.geometry,x=f.material,m=g.attributes;if(x&&!Array.isArray(x)&&!x.transparent&&!g.morphAttributes.position&&g.drawRange.start===0&&g.drawRange.count===1/0&&m.position&&Object.keys(m).every(u=>["position","normal","uv"].includes(u))){f.getWorldPosition(s);let u=`${Math.floor(s.x/3)},${Math.floor(s.z/3)}`,E=[x.uuid,f.castShadow,f.receiveShadow,f.renderOrder,Object.keys(m).sort().join(","),u].join("|");n.has(E)||n.set(E,[]),n.get(E).push(f)}}for(let g of f.children)l(g)}}l(i);let h=0,p=0;for(let f of n.values()){if(f.length<3)continue;let g=Object.keys(f[0].geometry.attributes),x=f.reduce((A,O)=>A+O.geometry.attributes.position.count,0),m=f.reduce((A,O)=>A+(O.geometry.index?.count||O.geometry.attributes.position.count),0),u=new Pt,E={};for(let A of g){let O=f[0].geometry.attributes[A].itemSize;E[A]=new Float32Array(x*O),u.setAttribute(A,new un(E[A],O))}let y=new Uint32Array(m),_=0,P=0;for(let A of f){let O=A.geometry,v=new Rt().multiplyMatrices(c,A.matrixWorld);a.getNormalMatrix(v);for(let k=0;k<O.attributes.position.count;k++)s.fromBufferAttribute(O.attributes.position,k).applyMatrix4(v),s.toArray(E.position,(_+k)*3),E.normal&&(o.fromBufferAttribute(O.attributes.normal,k).applyMatrix3(a).normalize(),o.toArray(E.normal,(_+k)*3)),E.uv&&(E.uv[(_+k)*2]=O.attributes.uv.getX(k),E.uv[(_+k)*2+1]=O.attributes.uv.getY(k));let T=O.index?.count||O.attributes.position.count;for(let k=0;k<T;k++)y[P++]=_+(O.index?O.index.getX(k):k);if(v.determinant()<0)for(let k=P-T;k<P;k+=3){let V=y[k+1];y[k+1]=y[k+2],y[k+2]=V}_+=O.attributes.position.count,r.add(O),A.removeFromParent(),h++}u.setIndex(new un(y,1)),u.computeBoundingBox(),u.computeBoundingSphere();let b=f[0],R=new lt(u,b.material);R.name="Batched static office scenery",R.castShadow=b.castShadow,R.receiveShadow=b.receiveShadow,R.renderOrder=b.renderOrder,R.matrixAutoUpdate=!1,i.add(R),p++}let d=new Set;i.traverse(f=>{f.geometry&&d.add(f.geometry)});for(let f of r)d.has(f)||f.dispose();return{removed:h,batches:p}}function w0(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,"#111812"),n.addColorStop(.48,"#3a4636"),n.addColorStop(1,"#171d12"),t.fillStyle=n,t.fillRect(0,0,256,128),t.fillStyle="#a9b7a3",t.fillRect(78,19,72,3),t.fillStyle="#596e68",t.fillRect(190,38,29,25),t.fillStyle="#435827",t.fillRect(25,64,34,15);let r=new zt(e);r.colorSpace=xt,r.mapping=ia;let s=new oo(i),o=s.fromEquirectangular(r);return s.dispose(),r.dispose(),o}function S0(i,e){if(!new URLSearchParams(location.search).has("profile"))return{mark(){},frame(){}};let t=document.createElement("output");t.id="performance-report",t.hidden=!0,document.body.append(t);let n=performance.now(),r={},s=[],o=0,a=0,c=0;function l(h){r[h]=Math.round(performance.now()-n)}return{mark:l,frame(h){let p=performance.now();if(o||(o=p-n),a&&(s.push(p-a),s.length>90&&s.shift()),a=p,c++,c===1||c%30===0){let d=0;e.traverse(f=>{f.isMesh&&d++}),t.textContent=JSON.stringify({firstFrameMs:Math.round(o),stages:r,frameMs:s.length?Math.round(s.reduce((f,g)=>f+g,0)/s.length*10)/10:0,renderCpuMs:Math.round((p-h)*10)/10,frames:c,calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,textures:i.info.memory.textures,meshes:d,pixelRatio:i.getPixelRatio()})}}}}function T0(i){let n=[],r=new Map,s=0,o=new bt(.735,.41);function a(){let p=document.createElement("canvas");return p.width=1024,p.height=576,[p,p.getContext("2d")]}function c(p,d=!0){let f=new zt(p);return d&&(f.colorSpace=xt),f.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),f}function l(p,d){let f=13817+d*7319+(p==="hole"?20001:p==="live"?481:0),g=()=>(f=f*1664525+1013904223>>>0,f/4294967296),x=(N,ne)=>N+(ne-N)*g(),[m,u]=a(),[E,y]=a(),[_,P]=a(),[b,R]=a();u.fillStyle="#080d10",u.fillRect(0,0,1024,576),P.fillStyle="#545454",P.fillRect(0,0,1024,576),R.fillStyle="#777",R.fillRect(0,0,1024,576);let A=p==="live"||p==="cracked"&&d%2===0,O=u.createLinearGradient(0,0,1024,576);if(O.addColorStop(0,"#1b262a"),O.addColorStop(.45,"#0b1217"),O.addColorStop(1,"#040709"),u.fillStyle=O,u.fillRect(0,0,1024,576),A){u.fillStyle="#253438",u.fillRect(0,0,1024,27),u.fillRect(0,27,150,576);for(let N=0;N<28;N++){let ne=174;for(let Q=0;Q<x(3,10);Q++){u.fillStyle=["#365b51","#47615d","#354847"][Math.floor(g()*3)];let te=x(9,93);u.fillRect(ne,53+N*17,te,2),ne+=te+x(5,15)}}for(let N=0;N<576;N+=3)u.fillStyle="rgba(0,0,0,.18)",u.fillRect(0,N,1024,1)}let v={x:x(1024*.2,1024*.78),y:x(576*.22,576*.78)};function T(N,ne,Q,te,F=0,ie=0){ne.strokeStyle=Q,ne.lineWidth=te,ne.beginPath(),N.forEach(([q,W],Z)=>Z?ne.lineTo(q+F,W+ie):ne.moveTo(q+F,W+ie)),ne.stroke()}function k(N,ne=1){T(N,y,"rgba(0,3,6,.86)",ne*1.9),T(N,y,`rgba(185,212,216,${x(.45,.9)})`,ne*.7,-.7,.35),g()<.3&&T(N,y,"rgba(113,153,163,.35)",.5,.75,-.35),T(N,R,"#242424",ne*1.6),T(N,R,"#bfbfbf",ne*.7,-.7,.35),T(N,P,"#b9b9b9",ne*1.5)}let V=[];if(p!=="live"){let te=function(q,W,Z=1){u.fillStyle=W,u.beginPath(),q.forEach(([ge,we],pe)=>{ge=v.x+(ge-v.x)*Z,we=v.y+(we-v.y)*Z,pe?u.lineTo(ge,we):u.moveTo(ge,we)}),u.closePath(),u.fill()},N=[],ne=p==="hole"?x(68,107):x(42,78),Q=ne*x(.42,.75);for(let q=0;q<72;q++){let W=q/72*Math.PI*2,Z=1+.13*Math.sin(W*5+d)+.07*Math.sin(W*13);N.push([v.x+Math.cos(W)*ne*Z,v.y+Math.sin(W)*Q*Z])}for(let[q,W]of[[1.18,"rgba(56,39,73,.46)"],[1.1,"rgba(36,72,74,.55)"],[1.05,"#151c2a"],[1,"#010204"]])te(N,W,q);if(A||p==="hole"&&d===1){for(let Z=0;Z<61;Z++){let ge=v.x+x(-ne*1.7,ne*1.7),we=Z%3?0:v.y,pe=Z%3?v.y:576;u.fillStyle=["rgba(85,129,115,.65)","rgba(130,62,94,.6)","rgba(70,103,146,.60)","rgba(172,177,161,.48)"][Z%4],u.fillRect(ge,we,x(.4,2),pe-we)}let q=v.x+ne*.4,W=x(35,108);u.fillStyle="rgba(130,151,153,.23)",u.fillRect(q,0,W,v.y);for(let Z=0;Z<v.y;Z+=3)u.fillStyle=`rgba(15,28,32,${x(.15,.65)})`,u.fillRect(q,Z,W,1);for(let Z=0;Z<9;Z++)u.fillStyle=Z%3?"rgba(2,5,8,.85)":"rgba(129,156,153,.45)",u.fillRect(0,v.y+x(-15,18),1024,x(.5,2.4));te(N,"#010204",.98)}let F=12+d%4,ie=Array.from({length:F},(q,W)=>W/F*Math.PI*2+x(-.11,.11));for(let q of ie){let W=[[v.x+Math.cos(q)*3,v.y+Math.sin(q)*3]],Z=x(7,13);for(;Z<1300;){let ge=x(-.021,.021),we=v.x+Math.cos(q+ge)*Z,pe=v.y+Math.sin(q+ge)*Z;if(W.push([we,pe]),Z+=x(16,47),we<0||we>1024||pe<0||pe>576)break}k(W,x(.55,1.2));for(let ge=2;ge<W.length-1;ge++)if(g()<.33){let[we,pe]=W[ge],re=g()<.5?-1:1,L=q+re*x(.18,.65),xe=x(28,145),Re=[[we,pe]];for(let ve=1;ve<=5;ve++)Re.push([we+Math.cos(L)*xe*ve/5+x(-3,3),pe+Math.sin(L)*xe*ve/5+x(-3,3)]);k(Re,x(.3,.64))}}for(let q of[18,35,61,101,155])for(let W=0;W<F;W++){if(g()<.28||q>70&&g()<.45)continue;let Z=ie[W],ge=W===F-1?ie[0]+Math.PI*2:ie[W+1],we=q*x(.8,1.12),pe=[];for(let re=0;re<=4;re++){let L=Z+(ge-Z)*re/4;pe.push([v.x+Math.cos(L)*we+x(-3,3),v.y+Math.sin(L)*we*.84+x(-2,2)])}k(pe,x(.35,.75))}for(let q=0;q<90;q++){let W=g()*Math.PI*2,Z=x(2,25),ge=v.x+Math.cos(W)*Z,we=v.y+Math.sin(W)*Z*.7;k([[ge,we],[ge+x(-6,6),we+x(-5,5)]],x(.3,.8))}if(p==="hole")for(let q=0;q<7;q++){let W=q/7*Math.PI*2,Z=x(8,26),ge=v.x+Math.cos(W)*Z,we=v.y+Math.sin(W)*Z*.7,pe=[[ge,we],[ge+x(4,11),we+x(-6,2)],[ge+x(-3,5),we+x(4,13)]];V.push(pe),u.fillStyle="#000102",u.beginPath(),pe.forEach(([re,L],xe)=>xe?u.lineTo(re,L):u.moveTo(re,L)),u.closePath(),u.fill(),k([...pe,pe[0]],1)}}for(let N=0;N<35;N++){let ne=g()*1024,Q=g()*576,te=x(20,115),F=P.createRadialGradient(ne,Q,0,ne,Q,te);F.addColorStop(0,"rgba(205,205,205,.20)"),F.addColorStop(1,"rgba(160,160,160,0)"),P.fillStyle=F,P.fillRect(ne-te,Q-te,te*2,te*2)}for(let N=0;N<3800;N++){let ne=g()*1024,Q=g()*576;P.fillStyle=`rgba(230,230,230,${x(.06,.4)})`,P.fillRect(ne,Q,x(.4,1.3),x(.4,1.1)),N%9===0&&(y.fillStyle="rgba(135,149,146,.13)",y.fillRect(ne,Q,.65,.65))}for(let N=0;N<70;N++){let ne=g()*1024,Q=g()*576;T([[ne,Q],[ne+x(3,31),Q+x(-8,8)]],P,"rgba(189,189,189,.35)",.7)}y.strokeStyle="rgba(89,93,83,.50)",y.lineWidth=2.4,y.strokeRect(1,1,1022,574);let z=c(m),H=c(_,!1),ee=c(b,!1),oe=new Fe({map:z,roughness:.62,metalness:0,emissiveMap:z,emissive:16777215,emissiveIntensity:p==="live"?.52:A?.28:.025}),se=new qt({color:10137267,metalness:.08,roughness:.36,roughnessMap:H,bumpMap:ee,bumpScale:38e-5,transparent:!0,opacity:.27,depthWrite:!1,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:H,ior:1.52,envMapIntensity:.85,side:tr});n.push(se);let de=new Fe({map:c(E),transparent:!0,depthWrite:!1,roughness:.38,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return{lcdMaterial:oe,glass:se,cracksMaterial:de,holes:V}}function h(p,d){let f=s++%3,g=`${d}-${f}`;r.has(g)||r.set(g,l(d,f));let x=r.get(g);for(let[m,u,E]of[[x.lcdMaterial,.019,"Damaged liquid-crystal panel"],[x.glass,.0205,"Reflective laminated screen glass"],[x.cracksMaterial,.0213,"Fine branching glass fractures"]]){let y=new lt(o,m);y.position.set(0,.381,u),y.name=E,y.castShadow=!1,y.receiveShadow=!0,p.add(y)}for(let m of x.holes){let u=m.flatMap(([_,P],b)=>[(_/1024-.5)*.735,(.5-P/576)*.41+.381,.0215+(b===1?.0018:0)]),E=new Pt;E.setAttribute("position",new ht(u,3)),E.computeVertexNormals();let y=new lt(E,x.glass);y.castShadow=!1,p.add(y)}}return{add:h,setEnvironment(p){for(let d of n)d.envMap=p,d.needsUpdate=!0}}}var hl=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),vr=i=>(i=hl(i),i*i*(3-2*i));function cl(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function vi(i,e){let t=Math.floor(i),n=Math.floor(e),r=vr(i-t),s=vr(e-n);return Ge.lerp(Ge.lerp(cl(t,n),cl(t+1,n),r),Ge.lerp(cl(t,n+1),cl(t+1,n+1),r),s)}function ll(i,e){return vi(i*5,e*5)*.48+vi(i*17+3,e*17)*.29+vi(i*61,e*61+9)*.15+vi(i*187,e*187)*.08}function po(i,e=Ht.textureSize,t=!1){let n=new Uint8Array(e*e*4);for(let s=0;s<e;s++)for(let o=0;o<e;o++){let a=i(o/e,s/e,o,s),c=(s*e+o)*4;for(let l=0;l<4;l++)n[c+l]=Math.round(hl(a[l]??1)*255)}let r=new ir(n,e,e,yi);return r.wrapS=r.wrapT=hs,r.magFilter=pn,r.minFilter=Gi,r.generateMipmaps=!0,r.anisotropy=4,t&&(r.colorSpace=xt),r.needsUpdate=!0,r}var Ed;function li(i=16777215){if(!Ed){let e=(c,l)=>{let h=ll(c,l),p=vi(c*48,l*3),d=vr((h+p*.13-.51)*9),f=vr((vi(c*150,l*150)-.64)*8);return{n:h,rust:d,pit:f}},t=new Float32Array(Ht.textureSize*Ht.textureSize*3),n=po((c,l,h,p)=>{let{n:d,rust:f,pit:g}=e(c,l),x=Math.pow(vi(c*4,l*260),18)*.24,m=(p*Ht.textureSize+h)*3;return t[m]=.45+f*.21+d*.18-g*.25,t[m+1]=.35+f*.57+g*.07,t[m+2]=.88-f*.86,[.39+d*.34,.42+d*.34,.39+d*.32].map((u,E)=>Ge.lerp(u,[.35+d*.3,.12+d*.19,.045+d*.1][E],f)-g*.1+x)},Ht.textureSize,!0),r=po((c,l,h,p)=>{let d=(p*Ht.textureSize+h)*3;return[t[d],t[d+1],t[d+2]]});Ed={map:n,roughnessMap:r,metalnessMap:r,bumpMap:r}}return new Fe({color:i,...Ed,roughness:1,metalness:1,bumpScale:.0035,envMapIntensity:.7})}function b0(){let i=(x,m)=>{let u=ll(x+3,m+2),E=vi(x*70,m*2.3)*vi(x*19,m*6),y=vi(x*170,m*190),_=(1-vr(m/.23))*.78,P=vr((m-.86)/.14)*.34,b=Math.exp(-(((m-.844)*75)**2))*(.2+vi(x*38,1)*.8),R=hl(_+P+b*.52+vr((u-.49)*7)*.45+E*.2),A=vr((u-.37)*4)*.7;return{dirt:R,fog:A,runs:E,scale:y,tide:b}},e=new Float32Array(Ht.textureSize*Ht.textureSize*2),t=po((x,m,u,E)=>{let{dirt:y,fog:_,runs:P,scale:b,tide:R}=i(x,m),A=Math.pow(vi(x*105,m*69),12)*.65,O=(E*Ht.textureSize+u)*2;return e[O]=.4+y*.1+P*.09+b*.025+A,e[O+1]=.08+_*.36+y*.43+P*.1,[.59-y*.3,.63-y*.3,.48-y*.3,hl(.03+_*.23+y*.55+R*.12+b*.025)]},Ht.textureSize,!0),n=po((x,m,u,E)=>{let y=(E*Ht.textureSize+u)*2;return[e[y],e[y+1],0]}),r=n,s=new qt({color:14542029,roughness:.7,roughnessMap:r,metalness:0,transparent:!0,opacity:.17,depthWrite:!1,clearcoat:1,clearcoatRoughness:.14,bumpMap:n,bumpScale:.003,side:Dt,envMapIntensity:.85}),o=new Fe({map:t,roughness:.9,bumpMap:n,bumpScale:.002,transparent:!0,depthWrite:!1,side:Dt}),a=po((x,m)=>{let u=ll(x+11,m+7),E=vi(x*12,m*9);return[.11+u*.19,.24+u*.35,.026+E*.08]},Ht.textureSize/2,!0),c=po((x,m)=>{let u=ll(x+5,m+3),E=vr(m);return[.1+u*.12+E*.06,.17+u*.22+E*.12,.025+u*.055,.93-E*.43]},Ht.textureSize/2,!0),l=new qt({map:c,color:13228945,roughness:.26,transparent:!0,opacity:.76,depthWrite:!1,side:Dt,emissive:1981189,emissiveIntensity:.48,envMapIntensity:.35}),h=new qt({map:a,color:16777215,roughness:.17,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.12,side:Dt,emissive:2374407,emissiveIntensity:.3,envMapIntensity:1.15}),p={value:0};h.onBeforeCompile=x=>{x.uniforms.waterTime=p,x.fragmentShader=`uniform float waterTime;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`)},h.customProgramCacheKey=()=>"slow-water-currents-v1";let d=new Fe({color:9546090,roughness:.79,transparent:!0,opacity:.75,depthWrite:!1,emissive:2503177,emissiveIntensity:.12}),f=new qt({color:13097881,roughness:.07,metalness:0,transparent:!0,opacity:.23,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),g=new vt({color:12505482,transparent:!0,opacity:.18,depthWrite:!1,side:Dt});return{glass:s,haze:o,fluid:l,liquidTop:h,foam:d,bubble:f,ripple:g,waterTime:p}}var GM=i=>Math.max(0,Math.min(1,i)),Sd=i=>{let e=GM(i);return e*e*(3-2*e)};function wd(i,e,t,n,r){if(i<e)return 0;let s=i-e;return s<t?Sd(s/t):s<t+n?1:1-Sd((s-t-n)/r)}var WM=[{at:5,head:-.32,eye:-.52,pitch:.035,hold:1.7},{at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},{at:31.1,head:-.23,eye:-.4,pitch:-.1,hold:1.3}];function R0(i,e=!1,t={}){if(t.headYaw=0,t.gazeYaw=0,t.gazePitch=0,e||i<0)return t;let n=i%43.7;for(let r of WM){let s=wd(n,r.at,.24,r.hold+1,.65),o=wd(n,r.at+.38,.95,r.hold,1.25);t.headYaw+=r.head*o,t.gazeYaw+=r.eye*s,t.gazePitch+=r.pitch*s}return t.gazePitch-=.12*wd(n,25.2,.22,.8,.5),t}function A0(i,e,t,n,r=!1,s={}){let o=Sd((e-1.08)/.42),a=1.1+n*.055,c=r?0:o*.105*(Math.sin(i*a+n)+.12*Math.sin(i*.47+n*.6))/1.12,l=t-.1-e;return s.angle=c,s.x=Math.sin(c)*l,s.y=t-.1-Math.cos(c)*l,s.hookX=s.x-Math.sin(c)*.52,s.hookY=s.y+Math.cos(c)*.52,s}var ul;function XM(){if(ul)return ul;let i=128,e=new Uint8Array(i*i*4),t=new Uint8Array(i*i*4),n=8817,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=(a*i+c)*4,h=r(),p=Math.max(0,Math.sin(c*.056+Math.sin(a*.05)*2)*Math.cos(a*.041)-.15),d=h>.965?.22:0;e[l]=223-p*67-h*16-d*140,e[l+1]=219-p*49-h*15-d*130,e[l+2]=186-p*72-h*17-d*130,e[l+3]=255,t[l]=t[l+1]=t[l+2]=145+h*24-d*255,t[l+3]=255}let s=new ir(e,i,i),o=new ir(t,i,i);for(let a of[s,o])a.wrapS=a.wrapT=hs,a.magFilter=pn,a.minFilter=Gi,a.generateMipmaps=!0,a.needsUpdate=!0;return s.colorSpace=xt,ul=new Fe({map:s,bumpMap:o,bumpScale:.0011,color:16052183,roughness:.72,emissive:12563852,emissiveIntensity:.28}),ul}var qM=new Jt(1,20,14),va=new Fe({color:1580302,roughness:1});function hi(i,e,t=XM()){let n=new lt(i,t);return n.castShadow=!0,n.receiveShadow=!0,e.add(n),n}function Ri(i,e,t,n){let r=hi(qM,i,n);return r.position.set(...e),r.scale.set(...t),r}function bi(i,e,t=.012){return hi(new on(new Xt(e.map(n=>new w(...n))),32,t,8,!1),i)}function dl(i,e,t,n=.012){let r=new w(...e),s=new w(...t),o=s.clone().sub(r),a=hi(new Ut(n*.82,n,o.length(),10),i);return a.position.copy(r).add(s).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new w(0,1,0),o.normalize()),a}function Td(i=!1){let e=new Ee;e.name=i?"Slender forearm bone":"Worn femur";let t=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.1],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]],n=new Br(t.map(s=>new Oe(s[0]*(i?.62:1),s[1])),20),r=n.attributes.position;for(let s=0;s<r.count;s++)r.setX(s,r.getX(s)+.009*Math.sin((r.getY(s)+.16)*Math.PI/.315));return n.computeVertexNormals(),hi(n,e),Ri(e,[.022,.14,0],[.043,.038,.039]),Ri(e,[-.015,-.147,.002],[.028,.03,.034]),Ri(e,[.02,-.15,-.002],[.029,.032,.032]),i&&e.scale.set(.75,1,.8),e}function C0(){let i=new Ee;i.name="Curved rib fragment";let e=[];for(let t=0;t<=20;t++){let n=-.85+t/20*2.9;e.push([Math.cos(n)*.123-.018,Math.sin(n)*.123,.018*Math.sin(n*1.3)])}return bi(i,e),Ri(i,e[0],[.017,.015,.018]),i}function P0(){let i=new Ee;i.name="Detached jaw with uneven teeth",bi(i,[[-.088,.045,-.035],[-.08,-.025,.035],[-.043,-.05,.071],[0,-.054,.082],[.043,-.05,.071],[.08,-.025,.035],[.088,.045,-.035]],.013);for(let e=0;e<8;e++){let t=(e-3.5)*.017,n=.078-Math.abs(t)*.3,r=hi(new Et(.013,.02+e%3*.002,.013),i);r.position.set(t,-.041,n),r.rotation.y=-t*3}return i}function YM(){let i=new Ee;i.name="Goofy buck-toothed skull with wonky eye sockets";let e=new wt;e.moveTo(-.076,-.061),e.quadraticCurveTo(-.133,-.035,-.121,.067),e.bezierCurveTo(-.119,.171,.123,.165,.12,.06),e.quadraticCurveTo(.136,-.029,.077,-.061),e.lineTo(.047,-.071),e.lineTo(-.047,-.073),e.closePath();for(let[s,o,a,c,l]of[[-.052,.019,.039,.043,-.2],[.052,.011,.033,.035,.18]]){let h=new ti;h.absellipse(s,o,a,c,0,Math.PI*2,!0,l),e.holes.push(h)}let t=new ti;t.moveTo(.001,-.026),t.lineTo(-.012,-.05),t.quadraticCurveTo(.001,-.045,.013,-.05),t.closePath(),e.holes.push(t);let n=hi(new en(e,{depth:.022,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),i);n.position.z=.043,Ri(i,[0,.04,-.055],[.12,.121,.077]),Ri(i,[0,.012,.027],[.109,.093,.01],va);for(let s of[-1,1])Ri(i,[s*.093,-.042,.047],[.028,.022,.025]);for(let[s,o,a,c,l]of[[-.019,-.084,.028,.042,-.11],[.017,-.08,.027,.036,.17],[-.06,-.073,.014,.018,-.28],[.06,-.071,.012,.015,.23]]){let h=hi(new Et(a,c,.018),i);h.position.set(s,o,.064),h.rotation.z=l}let r=new Ee;r.name="Lopsided cartoon jaw",r.position.set(.004,-.071,-.003),r.rotation.z=-.12,i.add(r),bi(r,[[-.087,.04,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.04,-.025]],.014);for(let[s,o]of[[-.052,-.04],[.038,-.041],[.057,-.036]]){let a=hi(new Et(.015,.016,.015),r);a.position.set(s,o,.071),a.rotation.z=s*3}return bi(i,[[-.009,.154,-.016],[.003,.15,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=va,i}function bd(){let i=new Ee;i.name="Short articulated spine";for(let e=0;e<6;e++){let t=(e-2.5)*.038,n=.01*Math.sin(e*.7);Ri(i,[0,t,n],[.025,.016,.02]);for(let r of[-1,1])dl(i,[r*.012,t,n],[r*.045,t-.009,n-.008],.007);dl(i,[0,t,n],[0,t+.008,n-.043],.006)}return i}function I0(){let i=new Ee;i.name="Broken rib cage",i.add(bd());for(let e=0;e<5;e++)for(let t of[-1,1]){if(e===4&&t===1)continue;let n=.08-e*.043,r=.08+Math.sin(e/5*Math.PI)*.038;bi(i,[[0,n,-.02],[t*r*.65,n+.018,-.045],[t*r,n-.004,.008],[t*r*.82,n-.031,.065],[t*.018,n-.044,.08]],.0085)}return dl(i,[0,.06,.081],[0,-.12,.079],.01),i}function ZM(i){let e=i===0,t=new Ee;t.name=e?"Pudding-shaped skull with bony party hat":"Sushi-shaped skull with bony beanie";let n=new wt;if(e)n.moveTo(-.3,-.27),n.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),n.quadraticCurveTo(0,.34,.29,.24),n.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),n.quadraticCurveTo(0,-.34,-.3,-.27);else{n.moveTo(-.31,-.225),n.quadraticCurveTo(-.39,-.16,-.34,-.025),n.lineTo(-.41,.17),n.quadraticCurveTo(-.4,.22,-.21,.29),n.quadraticCurveTo(0,.33,.21,.29),n.quadraticCurveTo(.4,.22,.41,.17),n.lineTo(.34,-.025),n.quadraticCurveTo(.39,-.16,.31,-.225);for(let l=7;l>=0;l--){let h=-.31+l*.0775;n.quadraticCurveTo(h+.038,-.285,h,-.225)}}n.closePath();let r=e?.015:-.055,s=e?.13:.14;for(let l of[-1,1]){let h=new ti;h.absellipse(l*s,r,.07,l<0?.065:.057,0,Math.PI*2,!0,l*.18),n.holes.push(h)}let o=new ti;o.moveTo(0,r-.037),o.lineTo(-.023,r-.083),o.quadraticCurveTo(0,r-.075,.023,r-.083),o.closePath(),n.holes.push(o);let a=new ti;a.absellipse(0,e?-.19:-.192,e?.208:.227,e?.064:.042,0,Math.PI*2,!0),n.holes.push(a);let c=hi(new en(n,{depth:.055,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24}),t);c.position.z=.135,Ri(t,[0,.012,-.035],[e?.355:.37,.235,.16]),Ri(t,[0,-.025,.126],[.325,.265,.008],va);for(let l=0;l<7;l++){if(l===1||l===5)continue;let h=hi(new Et(.039,l%2?.037:.05,.035),t);h.position.set((l-3)*.053,e?-.147:-.169,.175),h.rotation.z=(l%3-1)*.12}if(e){bi(t,[[-.3,.19,.19],[-.24,.13,.2],[-.18,.195,.21],[-.11,.095,.21],[-.045,.17,.21],[.025,.085,.21],[.09,.17,.21],[.16,.105,.21],[.23,.19,.2],[.3,.15,.19]],.015);let l=new Ee;l.name="Ivory party-hat crest",l.position.set(.02,.285,0),l.rotation.z=-.12,t.add(l);let h=hi(new kr(.123,.3,32),l);h.position.y=.15;let p=hi(new $t(.12,.012,8,32),l);p.rotation.x=Math.PI/2;for(let d=0;d<5;d++){let f=d/5*Math.PI*2;bi(l,[[Math.cos(f)*.12,.005,Math.sin(f)*.12],[Math.cos(f)*.065,.15,Math.sin(f)*.065],[0,.3,0]],.004)}Ri(l,[0,.314,0],[.028,.03,.028]),bi(t,[[-.2,.27,.15],[-.18,.23,.195],[-.205,.2,.2],[-.18,.17,.2]],.0025).material=va}else{for(let d of[-1,1])bi(t,[[d*.115,.027,.197],[d*.12,.16,.198],[d*.13,.292,.16]],.0035).material=va;bi(t,[[-.37,.01,.17],[-.2,.036,.199],[0,.048,.2],[.2,.036,.199],[.37,.01,.17]],.012);let l=new Ee;l.name="Ribbed ivory beanie crest",l.position.y=.3,t.add(l),hi(new Jt(1,32,16,0,Math.PI*2,0,Math.PI/2),l).scale.set(.235,.235,.2);let p=hi(new $t(.238,.02,10,40),l);p.rotation.x=Math.PI/2,p.scale.y=.86;for(let d=0;d<10;d++){let f=d/10*Math.PI*2,g=[];for(let x=0;x<=8;x++){let m=x/8*Math.PI/2;g.push([Math.cos(f)*.238*Math.cos(m),.237*Math.sin(m),Math.sin(f)*.203*Math.cos(m)])}bi(l,g,.006)}}return t}function L0(i){let e=new Ee;if(e.name=["Pudding Figpal skeleton","Sushi Figpal skeleton","Pufferfish skeleton"][i],i===2){let t=YM();t.scale.set(1.25,1.35,1.05),t.position.set(-.16,.035,.055),e.add(t);for(let n=0;n<7;n++){let r=-.05+n*.055;if(Ri(e,[r,0,0],[.028,.021,.02]),n<5)for(let s of[-1,1])bi(e,[[r,0,0],[r+.026,s*.09,-.01],[r+.014,s*(.22-n*.023),.015]],.01)}for(let n of[-.16,-.08,0,.08,.16])dl(e,[.29,0,0],[.47,n,0],.009)}else e.add(ZM(i));return e}var $M=[[{kind:"femur",x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.9}],[{kind:"ribs",x:.02,y:.4,z:.1,tilt:.3,yaw:-.2,scale:.78},{kind:"spine",x:-.16,y:.4,z:-.08,tilt:-.5,yaw:.4,scale:.75},{kind:"rib",x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}],[{kind:"forearm",x:-.13,y:.42,z:.16,tilt:-.68,yaw:.2,scale:.88},{kind:"jaw",x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}]],KM={femur:Td,forearm:()=>Td(!0),rib:C0,ribs:I0,spine:bd,jaw:P0};function D0(i){let e=new Ee;e.name=`Bones floating in canister ${i+1}`;let t=$M[i].map((r,s)=>{let o=KM[r.kind]();return o.scale.multiplyScalar(r.scale),e.add(o),{...r,object:o,phase:i*1.91+s*2.3}});function n(r,s=!1){let o=s?0:r;for(let a of t){let c=a.phase,l=.022,h=.46;a.object.position.set(a.x+l*Math.sin(o*.27+c),a.y+.014*Math.sin(o*.57+c),a.z+.018*Math.cos(o*.23+c)),a.object.rotation.set(.1*Math.sin(o*.19+c),a.yaw+h*Math.sin(o*.17+c),a.tilt+.11*Math.sin(o*.31+c),"YXZ")}}return n(0),{group:e,update:n}}function U0(i,e){let t=L0(e);t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.parent.add(t),i.updateWorldMatrix(!0,!0);let n=i.matrixWorld.clone().invert(),r=new Dn,s=new Dn;i.traverse(g=>{g.isMesh&&(g.geometry.computeBoundingBox(),s.copy(g.geometry.boundingBox).applyMatrix4(new Rt().multiplyMatrices(n,g.matrixWorld)),r.union(s))});let o=new Ti,a=new Ti;function c(g,x){let m=new Map;g.traverse(u=>{if(!u.isMesh)return;let E=y=>{if(!m.has(y)){let _=y.clone();_.onBeforeCompile=y.onBeforeCompile,_.customProgramCacheKey=y.customProgramCacheKey,_.clippingPlanes=[x],_.clipShadows=!0,m.set(y,_)}return m.get(y)};u.material=Array.isArray(u.material)?u.material.map(E):E(u.material)})}c(i,o),c(t,a);let l=r.min.y-.04,h=!1,p=new w;function d(g){i.updateWorldMatrix(!0,!1),p.setFromMatrixPosition(i.matrixWorld),p.y=g,i.worldToLocal(p),l=Math.max(l,Math.min(r.max.y+.04,p.y)),o.set(new w(0,1,0),-l).applyMatrix4(i.matrixWorld),a.copy(o).negate(),h=l>=r.max.y+.015,i.visible=!h,t.visible=l>r.min.y}d(-100);function f(){l=r.min.y-.04,h=!1,d(-100)}return{skeleton:t,update:d,reset:f,get transformed(){return h},get cutHeight(){return l}}}function H0(){let i=new lo().load(new URL("./assets/open-to-work.png",import.meta.url).href);i.colorSpace=xt,i.anisotropy=4;let e=new Fe({map:i,transparent:!0,alphaTest:.025,depthWrite:!1,roughness:.86,metalness:0,emissiveMap:i,emissive:16777215,emissiveIntensity:.18}),t=new bt(.78,.78,48,2),n=t.attributes.position;for(let r=0;r<n.count;r++)n.setZ(r,Math.sqrt(.49**2-n.getX(r)**2));return t.computeVertexNormals(),t.computeBoundingSphere(),()=>{let r=new lt(t,e);return r.name="#OPENTOWORK decal on curved tank glass",r.position.y=.7,r.renderOrder=8,r}}function N0(){let i=new Ee;i.name="Three suspended Figpals over bubbling green canisters";let e=Math.PI*2,t=193108,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=($,me=.78,Ae=.005)=>new Fe({color:$,roughness:me,emissive:$,emissiveIntensity:Ae}),s=r(1184789,.85,0),o=r(16772534),a=r(16184551),c=r(36072),l=r(15226636),h=r(11022601),p=r(16755746),d=r(16754855),f=r(10214644),g=r(294108),x=r(16765992),m=new vt({color:1053459,side:yn});m.onBeforeCompile=$=>{$.vertexShader=$.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.009;`)},m.customProgramCacheKey=()=>"figpal-outline-v1";function u($,me,Ae=i,Pe=!1){let Se=new lt($,me);if(Se.castShadow=!0,Se.receiveShadow=!0,Ae.add(Se),Pe){let he=new lt($,m);he.name="Ink outline",Se.add(he)}return Se}function E($,me,Ae,Pe,Se=!1){let he=u(new Jt(1,24,16),Ae,Pe,Se);return he.position.set(...$),he.scale.set(...me),he}function y($,me,Ae,Pe=i){let Se=u(new Et(...$),Ae,Pe);return Se.position.set(...me),Se}function _($,me,Ae,Pe,Se=i,he=!1){let We=u(new Ut($,$,me,48,1,he),Pe,Se);return We.position.set(...Ae),We}function P($,me,Ae,Pe=i){let Se=new Xt($.map(he=>new w(...he)));return u(new on(Se,Math.max(16,$.length*5),me,6,!1),Ae,Pe)}function b($,me,Ae,Pe,Se=i){let he=new w(...$),We=new w(...me),X=We.clone().sub(he),Te=_(Ae,X.length(),he.clone().add(We).multiplyScalar(.5).toArray(),Pe,Se);return Te.quaternion.setFromUnitVectors(new w(0,1,0),X.normalize()),Te}function R($,me,Ae,Pe,Se=i){let he=u(new $t($,me,8,64),Pe,Se);return he.rotation.x=Math.PI/2,he.position.y=Ae,he}function A($,me,Ae,Pe,Se=.035){let he=new en($,{depth:me-Se*2,bevelEnabled:!0,bevelSize:Se,bevelThickness:Se,bevelSegments:3,steps:1,curveSegments:16});return he.translate(0,0,-me/2+Se),u(he,Ae,Pe,!0)}function O($,me,Ae,Pe=.105,Se="worried"){let he=new Ee;he.name=`${Se} expression`,$.add(he);for(let We of[-1,1])E([We*Pe,me,Ae],[.022,.031,.013],s,he),P([[We*(Pe+.035),me+.041,Ae+.004],[We*Pe,me+.055,Ae+.007],[We*(Pe-.035),me+.074,Ae+.007]],.01,s,he);Se==="afraid"?E([0,me-.075,Ae+.003],[.026,.038,.012],s,he):P([[-.052,me-.091,Ae],[0,me-.06,Ae+.005],[.052,me-.091,Ae]],.012,s,he)}function v(){let $=new Ee;$.name="Party-hat pudding Figpal";let me=new wt;me.moveTo(-.3,-.27),me.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),me.quadraticCurveTo(0,.34,.29,.24),me.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),me.quadraticCurveTo(0,-.34,-.3,-.27),A(me,.37,p,$,.035);let Ae=new wt;Ae.moveTo(-.29,.25),Ae.quadraticCurveTo(0,.34,.29,.25),Ae.lineTo(.3,.13),Ae.quadraticCurveTo(.28,.1,.22,.16),Ae.lineTo(.15,.055),Ae.quadraticCurveTo(.13,.035,.08,.115),Ae.lineTo(.01,.045),Ae.quadraticCurveTo(-.02,.028,-.09,.12),Ae.lineTo(-.17,.065),Ae.quadraticCurveTo(-.2,.05,-.22,.16),Ae.lineTo(-.3,.13),Ae.closePath();let Pe=A(Ae,.025,o,$,.006);Pe.position.z=.191,O($,-.045,.222);for(let Me of[-1,1])E([Me*.24,-.085,.206],[.045,.028,.012],d,$);let Se=new Ee;Se.position.set(.02,.285,0),Se.rotation.z=-.12,Se.scale.setScalar(.6),$.add(Se);let he=document.createElement("canvas");he.width=512,he.height=256;let We=he.getContext("2d");We.fillStyle="#ffd62d",We.fillRect(0,0,512,256),We.fillStyle="#0088ea";for(let Me=0;Me<4;Me++)for(let He=0;He<7;He++)We.beginPath(),We.ellipse(He*85+Me%2*42,30+Me*67,18,14,0,0,e),We.fill();let X=new zt(he);X.colorSpace=xt;let Te=new Fe({map:X,roughness:.82}),ae=u(new kr(.205,.5,48),Te,Se,!0);ae.position.y=.25,R(.205,.009,0,s,Se),E([0,.515,0],[.042,.045,.041],c,Se);for(let Me=0;Me<8;Me++){let He=Me/8*e;b([0,.515,.005],[Math.cos(He)*.07,.515+Math.sin(He)*.07,.006],.012,c,Se)}return{object:$}}function T(){let $=new Ee;$.name="Orange-beanie sushi Figpal";let me=new wt;me.moveTo(-.32,-.035),me.quadraticCurveTo(-.38,-.11,-.31,-.2);for(let Te=0;Te<8;Te++){let ae=-.31+Te*.0775;me.quadraticCurveTo(ae+.038,-.285,ae+.0775,-.225)}me.quadraticCurveTo(.39,-.13,.32,-.035),me.quadraticCurveTo(0,.035,-.32,-.035),A(me,.43,a,$,.025);let Ae=new wt;Ae.moveTo(-.37,-.015),Ae.lineTo(-.41,.17),Ae.quadraticCurveTo(-.4,.22,-.21,.29),Ae.quadraticCurveTo(0,.33,.21,.29),Ae.quadraticCurveTo(.4,.22,.41,.17),Ae.lineTo(.37,-.015),Ae.quadraticCurveTo(0,.055,-.37,-.015),A(Ae,.43,x,$,.022);let Pe=new wt;Pe.moveTo(-.12,.022),Pe.lineTo(-.13,.31),Pe.quadraticCurveTo(0,.33,.13,.31),Pe.lineTo(.12,.022),Pe.closePath();let Se=A(Pe,.44,s,$,.006);Se.position.z=.008,O($,-.1,.253,.1,"afraid");for(let Te=0;Te<16;Te++){let ae=Te/16*e;E([Math.cos(ae)*.29,-.18+Math.sin(ae)*.025,Math.sin(ae)*.17],[.031,.022,.015],a,$)}let he=new Ee;he.position.y=.3,$.add(he),u(new Jt(1,32,16,0,e,0,Math.PI/2),l,he,!0).scale.set(.235,.235,.2);for(let Te=0;Te<10;Te++){let ae=Te/10*e,Me=[];for(let He=0;He<=14;He++){let ze=.08+He/14*(Math.PI/2-.08);Me.push([Math.sin(ze)*Math.cos(ae)*.238,Math.cos(ze)*.237,Math.sin(ze)*Math.sin(ae)*.204])}P(Me,.006,h,he)}let X=_(.258,.065,[0,.002,0],l,he);X.scale.z=.86,R(.26,.009,-.03,s,he).scale.y=.86,R(.26,.008,.034,s,he).scale.y=.86;for(let Te=0;Te<30;Te++){let ae=Te/30*e;b([Math.cos(ae)*.259,-.025,Math.sin(ae)*.224],[Math.cos(ae)*.259,.027,Math.sin(ae)*.224],.0045,h,he)}return{object:$}}function k(){let $=new Ee;$.name="Propeller-hat pufferfish Figpal",E([0,0,0],[.335,.33,.25],f,$,!0);let me=new wt;me.moveTo(.26,.03),me.quadraticCurveTo(.34,.06,.4,.16),me.quadraticCurveTo(.49,.23,.5,.06),me.quadraticCurveTo(.51,-.11,.43,-.13),me.lineTo(.33,-.05),me.closePath(),A(me,.11,f,$,.02);for(let he=0;he<3;he++)P([[.38,-.025+he*.04,.078],[.465,-.075+he*.085,.078]],.012,g,$);for(let he of[-1,1]){let We=E([he*.303,-.02,.13],[.065,.1,.035],f,$,!0);We.rotation.z=he*.25;for(let X=0;X<3;X++)P([[he*.3,-.06+X*.04,.168],[he*.338,-.075+X*.05,.16]],.01,g,$)}O($,.015,.252,.09,"worried");for(let he=0;he<11;he++){let We=Math.PI*1.03+he/10*Math.PI*.9,X=Math.cos(We)*.26,Te=Math.sin(We)*.25,ae=.25*Math.sqrt(Math.max(.04,1-(X/.335)**2-(Te/.33)**2))+.008;P([[X,Te,ae],[X+.008,Te-.027,ae]],.011,g,$)}for(let he=0;he<7;he++){let We=.15+he/6*Math.PI*.88;b([Math.cos(We)*.31,Math.sin(We)*.31,0],[Math.cos(We)*.37,Math.sin(We)*.37,0],.012,g,$)}let Ae=new Ee;Ae.position.set(0,.275,0),$.add(Ae);let Pe=[r(15746581),x,r(4802281),x];for(let he=0;he<4;he++)u(new Jt(1,12,12,he*e/4,e/4,0,Math.PI/2),Pe[he],Ae).scale.set(.215,.2,.215);R(.218,.011,0,s,Ae),b([0,.2,0],[0,.27,0],.012,a,Ae);let Se=new Ee;Se.position.y=.275,Ae.add(Se),E([0,0,0],[.025,.018,.025],a,Se);for(let he of[-1,1])E([he*.066,0,0],[.083,.012,.029],a,Se);return{object:$,propeller:Se}}let V=li(14802384),z=li(9606540),H=li(15065300),ee=li(14012614);ee.bumpScale=7e-4,ee.envMapIntensity=.85;let oe=new Fe({color:1382417,roughness:.29,metalness:.08}),se=[];for(let $=0;$<=12;$++){let me=$/12*Math.PI;se.push(new w(Math.cos(me)*.015,.01+Math.sin(me)*.015,0))}for(let $=0;$<=12;$++){let me=Math.PI+$/12*Math.PI;se.push(new w(Math.cos(me)*.015,-.01+Math.sin(me)*.015,0))}let de=new on(new Xt(se,!0),Ht.chainSegments,.0048,Ht.chainRadialSegments,!0),N=new yt,ne=new w(0,1,0),Q=new ft;function te($,me,Ae=null){let Pe=new Xt($.map(Te=>new w(...Te))),Se=Pe.getLength(),he=Ae??Math.max(2,Math.ceil(Se/.033)),We=new vn(de,ee,he);We.name="Interlocking steel chain links",We.castShadow=!0,We.receiveShadow=!0,We.frustumCulled=!1,me.add(We);for(let Te=0;Te<he;Te++)We.setColorAt(Te,new pt().setRGB(.67+n()*.3,.58+n()*.3,.45+n()*.34));function X(Te,ae){let Me=new w(...Te),He=new w(...ae),ze=He.clone().sub(Me),ut=ze.length(),It=Math.min(he,Math.max(2,Math.ceil(ut/.033)));We.count=It,ze.normalize();for(let Ot=0;Ot<It;Ot++)N.position.copy(Me).lerp(He,Ot/(It-1)),N.quaternion.setFromUnitVectors(ne,ze),Q.setFromAxisAngle(ne,(Ot%2?Math.PI/2:0)+Math.sin(Ot*7.17)*.07),N.quaternion.multiply(Q),N.scale.setScalar(1),N.updateMatrix(),We.setMatrixAt(Ot,N.matrix);We.instanceMatrix.needsUpdate=!0}if(Ae)We.instanceMatrix.setUsage(Un),X($[0],$.at(-1));else for(let Te=0;Te<he;Te++){let ae=Te/(he-1);N.position.copy(Pe.getPointAt(ae)),N.quaternion.setFromUnitVectors(ne,Pe.getTangentAt(ae)),Q.setFromAxisAngle(ne,(Te%2?Math.PI/2:0)+Math.sin(Te*7.17)*.07),N.quaternion.multiply(Q),N.scale.setScalar(1),N.updateMatrix(),We.setMatrixAt(Te,N.matrix)}return{object:We,setPoints:X}}let F=b0(),ie=H0(),{glass:q,haze:W,fluid:Z,liquidTop:ge,foam:we,bubble:pe,ripple:re,waterTime:L}=F,xe=[],Re=[],ve=[],be=[],Le=new yt,Ce=[{x:-3.05,z:-1.05,height:2.02,winchY:2.8},{x:-2.85,z:.3,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.6,winchY:2.38}];for(let $=0;$<Ce.length-1;$++){let me=Ce[$],Ae=Ce[$+1];b([me.x,3.065,me.z],[Ae.x,3.065,Ae.z],.052,V)}let D=[v,T,k];for(let $=0;$<3;$++){let{x:me,z:Ae,height:Pe,winchY:Se}=Ce[$],he=new Ee;he.position.set(me,.012,Ae),he.name=`Green bubbling canister ${$+1}`,i.add(he),_(.515,.16,[0,.1,0],V,he),_(.46,.035,[0,.025,0],z,he);for(let Ne=0;Ne<8;Ne++){let Ze=Ne/8*e;E([Math.cos(Ze)*.49,.15,Math.sin(Ze)*.49],[.022,.022,.022],H,he)}let We=_(.485,1.02,[0,.72,0],q,he,!0);We.castShadow=!1,We.renderOrder=6;let X=_(.487,1.02,[0,.72,0],W,he,!0);X.name="Condensation, mineral streaks and algae tide marks",X.castShadow=!1,X.renderOrder=7,he.add(ie());let Te=_(.444,.865,[0,.64,0],Z,he,!0);Te.castShadow=!1,Te.renderOrder=2;let ae=D0($);he.add(ae.group),_(.444,.018,[0,.215,0],ge,he);for(let Ne of[.225,1.235])R(.484,.036,Ne,V,he),R(.454,.01,Ne-.018,z,he);for(let Ne of[.15,2.24,4.34]){let Ze=Math.cos(Ne)*.485,wn=Math.sin(Ne)*.485;b([Ze,.22,wn],[Ze,1.23,wn],.021,V,he)}for(let Ne of[-1,1])P([[Ne*.47,.96,0],[Ne*.58,.96,0],[Ne*.58,.74,0],[Ne*.48,.74,0]],.022,V,he);let Me=new Vr(0,.444,Ht.mobile?32:48,Ht.mobile?6:10);Me.rotateX(-Math.PI/2);let He=u(Me,ge,he);He.position.y=1.074,He.castShadow=!1,He.renderOrder=4,R(.441,.006,1.075,ge,he).renderOrder=4;let ze=Array.from({length:48},()=>({x:(n()-.5)*.61,z:(n()-.5)*.61,r:.007+n()**2*.023,phase:n(),speed:.15+n()*.17})),ut=new vn(new Jt(1,12,8),pe,ze.length);ut.name="Rising liquid bubbles",ut.instanceMatrix.setUsage(Un),ut.frustumCulled=!1,ut.renderOrder=3,he.add(ut);let It=[];for(let Ne=0;Ne<24;Ne++){let Ze=n()*e,wn=Ne<18?.4+n()*.025:n()*.34,nn=.006+n()*.016,ri=E([Math.cos(Ze)*wn,1.074,Math.sin(Ze)*wn],[nn,nn*.65,nn],we,he);ri.castShadow=!1,ri.renderOrder=5,It.push({mesh:ri,baseRadius:nn,phase:n()*e})}let Ot=[];for(let Ne=0;Ne<5;Ne++){let Ze=u(new Vr(.96,1,40),re.clone(),he);Ze.rotation.x=-Math.PI/2,Ze.position.set((n()-.5)*.45,1.078,(n()-.5)*.45),Ze.castShadow=!1,Ze.renderOrder=5,Ot.push({mesh:Ze,phase:n()})}let mt=document.createElement("canvas");mt.width=256,mt.height=128;let St=mt.getContext("2d");St.fillStyle="#bec39f",St.fillRect(0,0,256,128),St.fillStyle="#242c22",St.font="bold 67px monospace",St.textAlign="center",St.fillText(`0${$+1}`,128,87);let Kn=new zt(mt);Kn.colorSpace=xt;let Ki=u(new bt(.17,.085),new Fe({map:Kn,roughness:.9}),he);Ki.position.set(0,.115,.517),Ki.castShadow=!1;for(let Ne=0;Ne<5;Ne++){let Ze=y([.065,.065,.007],[-.23+Ne*.115,.12,.5],Ne%2?s:r(10064462,.85,0),he);Ze.rotation.z=-.45}Ki.position.z=.52;let Ui=_(.064,.03,[.32,1.19,.37],V,he);Ui.rotation.x=Math.PI/2,u(new rr(.052,24),o,he).position.set(.32,1.19,.391),P([[.32,1.19,.395],[.3,1.219,.395]],.003,s,he);let mn=new Ee;mn.name=`Tank ${$+1} drain valve`,mn.position.set(.3,.29,.43),mn.userData.valveIndex=$,he.add(mn);let tt=_(.042,.19,[0,0,0],V,mn);tt.rotation.x=Math.PI/2,P([[0,0,.045],[0,-.035,.16],[0,-.1,.23]],.033,V,mn);let it=new yt;it.position.set(0,-.1,.23),mn.add(it);let rt=u(new Vr(.024,.034,20),V,mn);rt.position.copy(it.position),rt.rotation.x=.6;let Ye=u(new rr(.024,20),z,mn);Ye.position.copy(it.position),Ye.position.z-=.001,Ye.rotation.x=.6,b([0,0,.01],[0,.075,.11],.012,V,mn);let at=new Ee;at.name="Spinning red drain handwheel",at.position.set(0,.075,.12),mn.add(at),u(new $t(.088,.01,8,32),h,at);for(let Ne=0;Ne<3;Ne++){let Ze=Ne/3*e;b([0,0,0],[Math.cos(Ze)*.084,Math.sin(Ze)*.084,0],.007,h,at)}let Je=_(.018,.028,[0,0,0],H,at);Je.rotation.x=Math.PI/2;let dt=u(new Jt(.102,12,8),new vt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),at);dt.castShadow=!1,ve.push({object:mn,outlet:it,setOpen(Ne){at.rotation.z=-Ne*Math.PI*4,at.position.z=.12+Ne*.018}});let gn=new zn(7052325,.58,1.7,2);gn.position.set(0,.85,0),he.add(gn),Re.push({surface:He,bubbles:ut,bubbleData:ze,foam:It,ripples:Ot,floatingBones:ae,phase:$*1.7});let dn=Math.atan2(1.85221-me,3.1149-Ae);he.rotation.y=dn;let Bt=new Ee;Bt.name=`Chain hoist ${$+1}`,Bt.position.set(me,0,Ae),Bt.rotation.y=dn,i.add(Bt),y([.4,.05,.34],[0,3.13,0],V,Bt);for(let Ne of[-1,1])b([Ne*.16,3.12,0],[Ne*.16,Se+.1,0],.023,V,Bt),E([Ne*.16,3.12,.08],[.026,.026,.026],H,Bt);let I=new Ee;I.name=`Winch ${$+1}: lower or raise Figpal`,I.position.y=Se,I.userData.hoistIndex=$,Bt.add(I),y([.46,.12,.3],[0,.1,-.03],V,I);for(let Ne of[-1,1]){y([.035,.22,.27],[Ne*.191,.012,-.01],V,I);let Ze=_(.057,.055,[Ne*.205,0,0],oe,I);Ze.rotation.z=Math.PI/2;for(let wn of[-.073,.093])for(let nn of[-.106,.096]){let ri=u(new Ut(.013,.013,.018,6),H,I);ri.position.set(Ne*.215,wn,nn),ri.rotation.z=Math.PI/2}}y([.105,.09,.11],[.3,.15,-.035],z,I),P([[.3,.18,.01],[.38,.21,.06],[.43,.12,.1],[.4,-.04,.07]],.008,oe,I);let J=document.createElement("canvas");J.width=256,J.height=128;let ce=J.getContext("2d");ce.fillStyle="#817653",ce.fillRect(0,0,256,128),ce.fillStyle="#2a2b24",ce.font="bold 22px monospace",ce.fillText("CHAIN HOIST",15,30),ce.font="18px monospace",ce.fillText("250 KG / 1978",15,62),ce.fillText("SERVICE OVERDUE",15,103);for(let Ne=0;Ne<90;Ne++)ce.fillStyle=Ne%2?"rgba(42,25,12,.48)":"rgba(170,156,116,.7)",ce.fillRect(n()*256,n()*128,n()*17,n()*3);let le=new zt(J);le.colorSpace=xt;let j=u(new bt(.25,.1),new Fe({map:le,roughness:.87}),I);j.position.set(-.005,.1,.124),j.rotation.z=.028;let Ie=new Ee;Ie.rotation.z=Math.PI/2,I.add(Ie);let Be=new Ee;Be.name="Rotating chain sprocket",Ie.add(Be),_(.1,.28,[0,0,0],z,Be);for(let Ne of[-1,1]){_(.136,.026,[0,Ne*.16,0],V,Be);for(let Ze=0;Ze<12;Ze++){let wn=Ze/12*e;y([.026,.03,.032],[Math.cos(wn)*.13,Ne*.16,Math.sin(wn)*.13],H,Be)}}let Qe=[];for(let Ne=0;Ne<=120;Ne++){let Ze=Ne/120*e*4;Qe.push([Math.cos(Ze)*.106,-.1+Ne/120*.2,Math.sin(Ze)*.106])}te(Qe,Be).object.name="Greasy chain wound around the drum";let je=_(.105,.24,[.3,.015,-.04],z,I);je.rotation.z=Math.PI/2;for(let Ne=0;Ne<6;Ne++){let Ze=_(.115,.009,[.215+Ne*.033,.015,-.04],V,I);Ze.rotation.z=Math.PI/2}let ot=new Ee;ot.position.set(-.22,0,0),I.add(ot),b([0,0,0],[0,-.13,0],.014,V,ot),b([0,-.13,0],[-.09,-.13,0],.021,z,ot);let ct=new zn(12371885,.4,.85,2);ct.position.set(-.24,.12,.36),I.add(ct),E([0,.17,.28],[.018,.011,.012],new vt({color:7767659}),I);let Ke=new Ee;Ke.name=`Suspended Figpal ${$+1}`,Ke.position.y=Pe,Bt.add(Ke);let At=D[$]();At.object.scale.setScalar(.62),At.object.rotation.z=($-1)*.035,Ke.add(At.object);let _t=U0(At.object,$),Vt=new yt;Vt.position.set(0,.5,0),Ke.add(Vt),be.push(Vt),b([-.22,.45,0],[.22,.45,0],.019,V,Ke);let Pn=u(new $t(.045,.01,6,18,Math.PI*1.65),H,Ke);Pn.position.set(0,.49,0),Pn.rotation.z=-.5,b([-.028,.476,.008],[.016,.511,.008],.004,z,Ke);for(let Ne of[-1,1])te([[Ne*.21,.45,0],[Ne*.245,.11,0],[Ne*.23,-.12,.015],[Ne*.16,-.205,.04],[0,-.222,.045]],Ke);let Nt=te([[0,Se-.1,.025],[0,Pe+.52,0]],Bt,72),st=te([[-.1,Se-.01,-.11],[-.11,Se-.36,-.12],[-.16,Se-.4,-.1],[-.2,Se-.05,-.08]],Bt);st.object.name="Winch return chain loop";let Gt=new Ee;Gt.name=`Canister ${$+1} winch control`,Gt.position.set(.39,.85,.4),Gt.rotation.y=.35,Gt.userData.hoistIndex=$,he.add(Gt),y([.12,.21,.07],[0,0,0],z,Gt),E([0,.047,.047],[.024,.024,.015],r(8072739,.6,0),Gt),E([0,-.047,.047],[.024,.024,.015],r(6913097,.6,0),Gt),P([[.39,.95,.4],[.44,1.02,.35],[.46,1.27,.12],[.44,Se-.13,.06],[.24,Se,0]],.007,z,Bt),xe.push({rig:Bt,hanger:Ke,transformation:_t,captive:At.object,propeller:At.propeller,drum:Be,crank:ot,loadChain:Nt,height:Pe,homeHeight:Pe,targetHeight:Pe,winchY:Se,phase:$*2.1,lowered:!1})}let S=new zn(11712685,.75,3.8,2);S.position.set(-1.75,2.75,-.2),i.add(S);function K($){let me=xe[$];return me?(me.lowered=!me.lowered,me.targetHeight=me.lowered?.65:me.homeHeight,`Figpal ${$+1}${me.transformation.transformed?"'s bones":""} ${me.lowered?"lowering into the canister":"rising above the canister"}.`):null}function fe(){for(let $ of xe)$.lowered=!0,$.targetHeight=.65}function ye(){for(let $ of xe)$.lowered=!1,$.height=$.targetHeight=$.homeHeight,$.hanger.position.set(0,$.homeHeight,0),$.hanger.rotation.z=0,$.loadChain.setPoints([0,$.winchY-.1,.025],[0,$.homeHeight+.52,0]),$.drum.rotation.y=$.crank.rotation.x=0,$.transformation.reset()}let _e=0,ke={};function Ue($,me=!1){let Ae=Math.max(0,Math.min(.05,$-_e));_e=$;let Pe=me?0:$;L.value=Pe;for(let Se of xe){let he=Se.targetHeight-Se.height;Se.height=me?Se.targetHeight:Se.height+Math.sign(he)*Math.min(Math.abs(he),Ae*.15),A0($,Se.height,Se.winchY,Se.phase,me,ke),Se.hanger.position.set(ke.x,ke.y,0),Se.hanger.rotation.z=ke.angle,Se.loadChain.setPoints([0,Se.winchY-.1,.025],[ke.hookX,ke.hookY,0]),Se.drum.rotation.y=(Se.homeHeight-Se.height)/.1,Se.crank.rotation.x=(Se.homeHeight-Se.height)/.1,Se.transformation.update(1.086),Se.propeller&&(Se.propeller.rotation.y=Pe*.18)}for(let Se of Re){Se.floatingBones.update($,me);let he=Se.surface.geometry.attributes.position,We=Se.surface.geometry.attributes.normal;for(let X=0;X<he.count;X++){let Te=he.getX(X),ae=he.getZ(X),Me=Te*17+Pe*1.4+Se.phase,He=ae*14-Pe*1.1,ze=(Te+ae)*28-Pe*2.1;he.setY(X,Math.sin(Me)*Math.cos(He)*.0035+Math.sin(ze)*.0012);let ut=Math.cos(Me)*Math.cos(He)*.0595+Math.cos(ze)*.0336,It=-Math.sin(Me)*Math.sin(He)*.049+Math.cos(ze)*.0336,Ot=Math.hypot(ut,1,It);We.setXYZ(X,-ut/Ot,1/Ot,-It/Ot)}he.needsUpdate=!0,We.needsUpdate=!0,Se.bubbleData.forEach((X,Te)=>{let ae=(Pe*X.speed+X.phase)%1;Le.position.set(X.x+Math.sin(Pe*1.3+Te)*.012,.25+ae*.84,X.z+Math.cos(Pe+Te)*.009),Le.scale.setScalar(X.r*(.65+ae*.5)),Le.updateMatrix(),Se.bubbles.setMatrixAt(Te,Le.matrix)}),Se.bubbles.instanceMatrix.needsUpdate=!0;for(let X of Se.foam){let Te=(Math.sin(Pe*2.4+X.phase)+1)*.5;X.mesh.scale.set(X.baseRadius,X.baseRadius*(.12+Te*.28),X.baseRadius)}for(let X of Se.ripples){let Te=(Pe*.48+X.phase)%1,ae=.012+Te*.075;X.mesh.scale.setScalar(ae),X.mesh.visible=Te<.88,X.mesh.material.opacity=(1-Te)*.16}}}Ue(0);function Ve($){for(let me of[V,z,H,ee,q,Z,ge,pe])me.envMap=$,me.needsUpdate=!0}function nt($){let me=xe[$];return!!me&&!me.transformation.transformed}function De($){let me=xe[$];return nt($)&&!me.lowered&&Math.abs(me.height-me.homeHeight)<.025}return{group:i,update:Ue,valves:ve,toggleHoist:K,isLowered:$=>xe[$]?.lowered??!1,canSpeak:nt,isHanging:De,lowerAll:fe,reset:ye,speechAnchors:be,setEnvironment:Ve}}function F0(i=[]){let e=i.map(n=>(n.updateWorldMatrix(!0,!1),{inverse:n.matrixWorld.clone().invert(),width:n.geometry.parameters.width/2,depth:n.geometry.parameters.depth/2,top:n.getWorldPosition(new w).y+n.geometry.parameters.height/2})),t=new w;return(n,r)=>{let s=.003;for(let o of e)t.set(n,0,r).applyMatrix4(o.inverse),Math.abs(t.x)<=o.width&&Math.abs(t.z)<=o.depth&&(s=Math.max(s,o.top));return s}}function Rd(i,e){i.updateWorldMatrix(!0,!0);let t=1/0,n=new w,r=new Rt,s=new Rt;function o(a){if(a.userData.ignoreFloorContact)return;let c=a.isMesh&&a.geometry.attributes.position;if(c)for(let l=0;l<(a.isInstancedMesh?a.count:1);l++){a.isInstancedMesh?(a.getMatrixAt(l,r),s.multiplyMatrices(a.matrixWorld,r)):s.copy(a.matrixWorld);for(let h=0;h<c.count;h++)n.fromBufferAttribute(c,h).applyMatrix4(s),t=Math.min(t,n.y-e(n.x,n.z))}for(let l of a.children)o(l)}return o(i),t}function ys(i,e=()=>.003){let t=Rd(i,e);if(!Number.isFinite(t))return i;let n=i.getWorldPosition(new w);return n.y+=6e-4-t,i.parent&&i.parent.worldToLocal(n),i.position.copy(n),i.updateWorldMatrix(!1,!0),i.userData.floorProp=!0,i}function fl(i,e){i.updateWorldMatrix(!0,!1);let t=i.geometry,n=t.attributes.position,r=t.parameters.radialSegments+1,s=i.matrixWorld.clone().invert(),o=new w,a=new w,c=t.parameters.radius;for(let l=0;l<n.count;l+=r){o.set(0,0,0);for(let x=0;x<r-1;x++)o.add(a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld));o.divideScalar(r-1);let h=e(o.x,o.z),p=1-Ge.smoothstep(o.y-h,.055,.15),d=i.userData.anchorStart?Ge.smoothstep(l/r,0,3):1,f=i.userData.anchorEnd?Ge.smoothstep((n.count-r-l)/r,0,3):1,g=(h+c+6e-4-o.y)*p*d*f;for(let x=0;x<r;x++)a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld),a.y+=g,a.applyMatrix4(s),n.setXYZ(l+x,a.x,a.y,a.z)}n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere()}function O0(i,e=()=>.003){let t=new Ee;t.name="Fallen nursery mobile with four soft animals",t.position.set(-1.05,0,.55);let n=48319,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=document.createElement("canvas");s.width=s.height=512;let o=s.getContext("2d");o.fillStyle="#c6c1ac",o.fillRect(0,0,512,512);for(let q=0;q<7e3;q++){let W=r()*512,Z=r()*512;o.strokeStyle=q%2?"rgba(58,52,36,.12)":"rgba(246,236,212,.28)",o.lineWidth=.6,o.beginPath(),o.moveTo(W,Z),o.lineTo(W+2,Z+3),o.stroke()}for(let q=0;q<45;q++){let W=r()*512,Z=r()*512,ge=8+r()*70,we=o.createRadialGradient(W,Z,0,W,Z,ge);we.addColorStop(0,"rgba(63,52,31,.15)"),we.addColorStop(1,"rgba(63,52,31,0)"),o.fillStyle=we,o.fillRect(W-ge,Z-ge,ge*2,ge*2)}function a(q){let W=new zt(q);return W.colorSpace=xt,W.anisotropy=4,W}let c=a(s);function l(q,W=c){return new qt({color:q,map:W,bumpMap:c,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:12433832,sheenRoughness:.95})}let h=l(13801630),p=l(14792108),d=l(7839145),f=l(5270656),g=l(14132309),x=l(15128233),m=l(3420203),u=new Fe({color:6313803,roughness:1}),E=new Fe({color:10525568,roughness:1}),y=new Fe({color:1645337,roughness:.48}),_=new Fe({color:12762273,map:c,roughness:.68,bumpMap:c,bumpScale:.001}),P=new Fe({color:8159861,metalness:.65,roughness:.56}),b=document.createElement("canvas");b.width=b.height=512;let R=b.getContext("2d");R.drawImage(s,0,0),R.fillStyle="#343027";for(let q=0;q<12;q++){let W=q*45-15,Z=q%2*30;R.beginPath(),R.moveTo(W,Z),R.bezierCurveTo(W+55,105,W+8,180,W+51,268),R.lineTo(W+23,238),R.bezierCurveTo(W-12,148,W+26,93,W-9,Z),R.fill(),R.beginPath(),R.moveTo(W+25,512),R.bezierCurveTo(W+69,417,W+6,367,W+45,285),R.lineTo(W+24,314),R.bezierCurveTo(W-11,395,W+41,438,W-3,512),R.fill()}let A=l(14262365,a(b)),O=new Jt(1,24,16);function v(q,W,Z=t){let ge=new lt(q,W);return ge.castShadow=!0,ge.receiveShadow=!0,Z.add(ge),ge}function T(q,W,Z,ge){let we=v(O,Z,ge);return we.position.set(...q),we.scale.set(...W),we}function k(q,W,Z,ge=t){return v(new on(new Xt(q.map(we=>new w(...we))),Math.max(20,q.length*6),W,6,!1),Z,ge)}function V(q,W,Z,ge,we=t){let pe=new w(...q),re=new w(...W),L=re.clone().sub(pe),xe=v(new Ut(Z,Z,L.length(),12),ge,we);return xe.position.copy(pe).add(re).multiplyScalar(.5),xe.quaternion.setFromUnitVectors(new w(0,1,0),L.normalize()),xe}function z(q,W,Z,ge=t){let we=v(new Et(...q),Z,ge);return we.position.set(...W),we}function H(q,W,Z,ge){let we=new wt;we.moveTo(-.5,0),we.quadraticCurveTo(-.48,.44,0,1),we.quadraticCurveTo(.49,.49,.5,0),we.quadraticCurveTo(0,-.1,-.5,0);let pe=new en(we,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});pe.translate(0,0,-.09);let re=v(pe,Z,ge);return re.scale.set(...W),re.position.set(...q),re}function ee(q,W,Z=.092,ge=.047){for(let we of[-1,1])T([we*ge,Z,W],[.009,.012,.007],y,q)}function oe(q){let W=new Ee;W.name=`${q} mobile animal`;let Z=q==="Pig"?h:q==="Elephant"?d:q==="Tiger"?A:g,ge=T([0,.065,-.025],[.112,.091,.154],Z,W);ge.name="Soft body resting on the floor";for(let re of[-1,1])T([re*.047,.073,.08],[.077,.09,.09],Z,W);k([[0,.13,.116],[0,.092,.166],[0,.036,.16],[0,.008,.136]],.0018,u,W);for(let re of[-1,1])for(let L of[-.106,.1]){let xe=T([re*.11,.002,L],[.043,.043,.062],Z,W);if(xe.rotation.z=re*.28,T([re*.134,-.007,L+.015],[.021,.03,.041],q==="Pig"?m:q==="Elephant"?f:p,W),q==="Tiger"||q==="Fox")for(let Re=0;Re<3;Re++)T([re*.151,-.012+(Re-1)*.014,L+.034],[.004,.004,.006],m,W)}let we=T([0,.102,-.17],q==="Elephant"?[.097,.094,.094]:[.09,.083,.083],Z,W);if(q==="Pig"){T([0,.08,-.244],[.049,.032,.024],p,W);for(let L of[-1,1])T([L*.019,.082,-.267],[.006,.009,.003],m,W);for(let L of[-1,1]){let xe=H([L*.061,.153,-.177],[.072,.083,.09],h,W);xe.rotation.z=-L*.35}let re=[];for(let L=0;L<=45;L++){let xe=L/45*Math.PI*3.9,Re=.025*(1-L/70);re.push([Math.sin(xe)*Re,.115+Math.cos(xe)*Re,.167+L/45*.028])}k(re,.0065,p,W),ee(W,-.242,.122)}else if(q==="Elephant"){for(let re of[-1,1])T([re*.098,.098,-.16],[.071,.08,.027],d,W),T([re*.113,.101,-.184],[.047,.055,.009],f,W);k([[0,.099,-.24],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,d,W),ee(W,-.248,.127,.043),k([[0,.122,.15],[.025,.115,.185],[.042,.08,.199]],.006,f,W),T([.044,.077,.2],[.013,.018,.012],f,W)}else{for(let re of[-1,1]){let L=H([re*.057,.155,-.172],[.067,.071,.1],Z,W);L.rotation.z=-re*.26,H([re*.057,.162,-.184],[.038,.045,.055],p,W)}for(let re of[-1,1])T([re*.025,.076,-.235],[.035,.027,.023],x,W);if(T([0,.091,-.26],[.015,.011,.011],m,W),ee(W,-.241,.124,.044),q==="Tiger")k([[0,.134,.15],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,A,W),T([.075,.129,.182],[.014,.015,.016],m,W);else{let re=T([.042,.13,.191],[.058,.061,.131],g,W);re.rotation.x=-.45,re.rotation.z=-.25;let L=T([.039,.182,.271],[.045,.046,.061],x,W);L.rotation.x=-.45}}for(let re of[-1,1])k([[re*.1,.1,.07],[re*.113,.065,-.02],[re*.094,.092,-.1]],.0015,u,W);let pe=v(new $t(.014,.004,6,16,Math.PI*1.75),E,W);return pe.position.set(0,.158,-.065),pe.rotation.x=Math.PI/2,{object:W,tab:pe,body:ge}}function se(q,W){q.updateWorldMatrix(!0,!0);let Z=q.getWorldPosition(new w);Z.y-=Rd(W,e)+.006,q.parent.worldToLocal(Z),q.position.copy(Z),q.updateWorldMatrix(!0,!0);let ge=new w,we=new Rt;q.traverse(pe=>{if(!pe.isMesh)return;let re=pe.geometry.clone(),L=re.attributes.position;we.copy(pe.matrixWorld).invert();let xe=!1;for(let Re=0;Re<L.count;Re++){ge.fromBufferAttribute(L,Re).applyMatrix4(pe.matrixWorld);let ve=e(ge.x,ge.z)+6e-4;ge.y>=ve||(ge.y=ve,ge.applyMatrix4(we),L.setXYZ(Re,ge.x,ge.y,ge.z),xe=!0)}xe?(L.needsUpdate=!0,re.computeVertexNormals(),re.computeBoundingBox(),re.computeBoundingSphere(),pe.geometry=re):re.dispose()}),q.userData.floorProp=!0}let de=new Ee;de.name="Toppled mobile support",t.add(de),z([.16,.055,.12],[-.6,.0305,.48],_,de),z([.12,.028,.1],[-.6,.0765,.48],_,de),V([-.6,.0565,.48],[-.6,.1425,.48],.012,P,de),T([-.6,.1455,.48],[.043,.012,.02],_,de),k([[-.59,.039,.44],[-.63,.017,.1],[-.48,.017,-.3],[-.2,.02,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,_,de),ys(de,e);let N=new Ee;N.name="Scuffed mobile music box",N.position.set(0,.116,0),N.rotation.set(.21,0,-.18),t.add(N);let ne=v(new Ut(.103,.103,.068,40),_,N),Q=v(new $t(.103,.002,6,40),u,N);Q.rotation.x=Math.PI/2;let te=T([0,.039,0],[.034,.009,.034],g,N);for(let q=0;q<5;q++)z([.03,.002,.002],[-.049+q*.019,.035,.041],u,N);V([0,-.02,-.093],[0,-.02,-.145],.005,P,N),T([0,-.02,-.15],[.026,.012,.005],P,N),t.updateMatrixWorld(!0),ys(N,e);let F=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];for(let q of F)q[1]=e(t.position.x+q[0],t.position.z+q[2])+.0076,V([0,N.position.y,0],q,.007,P);for(let q of F){let W=v(new $t(.014,.003,6,16),P);W.rotation.x=Math.PI/2,W.position.set(q[0],q[1]-.004,q[2])}let ie=[{kind:"Pig",x:.29,z:.35,rear:!0,yaw:-.12,roll:.08,arm:3},{kind:"Tiger",x:-.38,z:.17,rear:!0,yaw:.36,roll:-.12,arm:0},{kind:"Elephant",x:.34,z:-.29,rear:!1,yaw:-.28,roll:-.24,arm:1},{kind:"Fox",x:-.27,z:-.43,rear:!0,yaw:1.12,roll:.2,arm:2}];for(let q of ie){let{object:W,tab:Z,body:ge}=oe(q.kind);W.position.set(q.x,0,q.z),W.scale.setScalar(.88);let we=Math.atan2(i.x-(t.position.x+q.x),i.z-(t.position.z+q.z));W.rotation.set(q.kind==="Pig"?-.06:.03,we+(q.rear?0:Math.PI)+q.yaw,q.roll,"YXZ"),t.add(W),t.updateMatrixWorld(!0),se(W,ge),t.updateMatrixWorld(!0);let pe=t.worldToLocal(Z.getWorldPosition(new w)),re=F[q.arm],L=k([re,[re[0]+.06,.024,re[2]+.08],[(re[0]+pe.x)/2-.05,.023,(re[2]+pe.z)/2+.08],[pe.x-.04,.025,pe.z+.035],pe.toArray()],.0021,E);L.userData.anchorStart=L.userData.anchorEnd=!0,fl(L,e);let xe=document.createElement("canvas");xe.width=xe.height=64;let Re=xe.getContext("2d"),ve=Re.createRadialGradient(32,32,5,32,32,32);ve.addColorStop(0,"rgba(0,0,0,.65)"),ve.addColorStop(.48,"rgba(0,0,0,.32)"),ve.addColorStop(1,"rgba(0,0,0,0)"),Re.fillStyle=ve,Re.fillRect(0,0,64,64);let be=new Dn().setFromObject(W),Le=be.getSize(new w),Ce=t.worldToLocal(be.getCenter(new w)),D=new bt(Le.x+.05,Le.z+.05,12,12);D.rotateX(-Math.PI/2),D.translate(Ce.x,0,Ce.z);let S=D.attributes.position;for(let fe=0;fe<S.count;fe++)S.setY(fe,e(t.position.x+S.getX(fe),t.position.z+S.getZ(fe))+2e-4);D.computeVertexNormals();let K=v(D,new vt({map:new zt(xe),transparent:!0,depthWrite:!1}));K.name=`${q.kind} floor contact shadow`,K.castShadow=!1,K.userData.ignoreFloorContact=!0}return t}var mo=new Map,Ad=31.7;function JM(i){if(mo.has(i))return mo.get(i);let e=9678115+Math.imul(i,2654435761)>>>0,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=[],r=.65+t()*1.4;for(;r<Ad-2;){let s=2+Math.floor(t()*5);for(let o=0;o<s;o++){let a=.028+t()*.072;n.push([r,a,t()*.045,t()>.23]),r+=a+.045+t()*.16}t()<.42&&(n.push([r,.22+t()*.4,.005,!0]),r+=.75),r+=1.3+t()*4.2}return mo.size>4&&mo.delete(mo.keys().next().value),mo.set(i,n),n}function QM(i,e=!1){if(e)return[.88,.79];let t=Math.floor(i/Ad),n=i-t*Ad,r=JM(t);return[0,1].map(s=>{let o=s?.79:.88;for(let a=0;a<r.length;a++){let[c,l,h,p]=r[a];if(s===1&&!p)continue;let d=c+(s?(a%3-1)*.013:0),f=d+l;if(n>=d&&n<f){let g=Math.min((n-d)/.003,(f-n)/.005,1);o=Ge.lerp(o,h,Math.max(0,g))}else n>=f&&n<f+.025&&(o*=1+.16*(1-(n-f)/.025))}return o*(.985+.015*Math.sin(i*8.7+s))})}function z0(){let i=new Ee;i.name="Crooked failing fluorescent fixture",i.position.set(.22,2.98,-.55),i.rotation.set(.02,.12,-.075);let e=li(9673098),t=li(15065545),n=new Fe({color:2369569,roughness:.9}),r=new Fe({color:11183498,roughness:.72});function s(g,x,m=[0,0,0]){let u=new lt(g,x);return u.position.set(...m),u.castShadow=!0,u.receiveShadow=!0,i.add(u),u}let o=(g,x,m=e)=>s(new Et(...g),m,x);function a(g,x,m,u=e){return s(new Ut(g,g,x,16),u,m)}function c(g,x=n,m=.004){return s(new on(new Xt(g.map(u=>new w(...u))),24,m,5,!1),x)}o([1.53,.055,.32],[0,.012,0],t);for(let g of[-1,1]){let x=o([1.53,.08,.016],[0,-.033,g*.157],t);x.rotation.x=g*.25,o([1.46,.006,.012],[0,-.017,g*.121],n)}o([.38,.045,.085],[.12,.055,0],n);for(let g of[-.69,.69]){o([.065,.05,.275],[g,-.02,0],e);for(let x of[-.132,.132]){let m=a(.012,.012,[g,-.051,x]);o([.016,.002,.003],[g,-.058,x],n),m.rotation.z=.05}}let l=[];for(let[g,x]of[-.078,.078].entries()){let m=document.createElement("canvas");m.width=512,m.height=64;let u=m.getContext("2d"),E=u.createLinearGradient(0,0,512,0);E.addColorStop(0,"#29271f"),E.addColorStop(.035,"#5a5948"),E.addColorStop(.09,"#b4b9a0"),E.addColorStop(.19,"#d9dfc4"),E.addColorStop(.77,"#d0d8bd"),E.addColorStop(.93,"#92977e"),E.addColorStop(.98,"#383c32"),E.addColorStop(1,"#272b22"),u.fillStyle=E,u.fillRect(0,0,512,64);for(let b=0;b<170;b++){let R=b*73.29%512,A=b*23.87%64;u.fillStyle="rgba(35,36,24,.12)",u.fillRect(R,A,1+b%5,1)}let y=new zt(m);y.colorSpace=xt,y.center.set(.5,.5),y.rotation=Math.PI/2;let _=new Fe({map:y,emissiveMap:y,emissive:15003084,emissiveIntensity:2,roughness:.27});l.push(_);let P=a(.019,1.34,[0,-.073,x],_);P.rotation.z=Math.PI/2,P.castShadow=!1;for(let b of[-1,1]){let R=a(.021,.035,[b*.657,-.073,x],e);R.rotation.z=Math.PI/2,o([.037,.075,.056],[b*.704,-.045,x],r);for(let A of[-.007,.007]){let O=a(.0025,.024,[b*.684,-.073,x+A],e);O.rotation.z=Math.PI/2}}c([[-.73,.03,x],[-.77,-.01,x],[-.72,-.04,x+.025]],g?n:new Fe({color:7031093,roughness:.8}))}let h=a(.015,.034,[.54,-.035,0],r);h.rotation.x=.08,c([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],e,.004),c([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],n,.006);let p=new zn(11647895,.25,1.2,2);p.position.set(0,.1,0),i.add(p);function d(g,x){let m=QM(g,x);return l.forEach((u,E)=>u.emissiveIntensity=m[E]*2.9),p.intensity=(m[0]+m[1])*.2,(m[0]+m[1])/1.67}function f(g){for(let x of[e,t])x.envMap=g,x.needsUpdate=!0}return d(0,!1),{group:i,update:d,setEnvironment:f}}function pl(i){let e=Math.max(0,Math.ceil(i));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function B0(i=300,e=()=>performance.now()/1e3){let t=null;return{start(){return t!==null?!1:(t=e()+i,!0)},reset(){t=null},get remainingSeconds(){return t===null?i:Math.max(0,Math.ceil(t-e()))},get status(){return t===null?"waiting":e()>=t?"finished":"running"}}}function k0(i,e){let t=new Ee;t.name="Five-minute red LED countdown timer",t.position.copy(e),t.position.y=.006,t.rotation.y=Math.atan2(i.x-e.x,i.z-e.z)-Ge.degToRad(16),t.scale.setScalar(.72);let n=B0(),r=new Ee;r.position.y=.13,r.rotation.x=-.24,t.add(r);let s=document.createElement("canvas");s.width=512,s.height=256;let o=s.getContext("2d");o.fillStyle="#555951",o.fillRect(0,0,512,256);let a=7418,c=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let te=0;te<1800;te++)o.fillStyle=te%4?"rgba(13,16,12,.18)":"rgba(180,171,142,.26)",o.fillRect(c()*512,c()*256,1+c()*4,1+c()*2);for(let te=0;te<35;te++){o.strokeStyle="rgba(194,190,163,.24)",o.lineWidth=.6;let F=c()*512,ie=c()*256;o.beginPath(),o.moveTo(F,ie),o.lineTo(F+8+c()*39,ie+c()*5),o.stroke()}let l=new zt(s);l.colorSpace=xt;let h=new Fe({color:3619894,map:l,bumpMap:l,bumpScale:7e-4,roughness:.82}),p=new Fe({color:527113,roughness:.66}),d=new Fe({color:7828326,metalness:.65,roughness:.68});function f(te,F,ie=r){let q=new lt(te,F);return q.castShadow=!0,q.receiveShadow=!0,ie.add(q),q}function g(te,F,ie,q=r){let W=f(new Et(...te),ie,q);return W.position.set(...F),W}let x=new wt,m=.59,u=.19,E=.022;x.moveTo(-m/2+E,-u/2),x.lineTo(m/2-E,-u/2),x.quadraticCurveTo(m/2,-u/2,m/2,-u/2+E),x.lineTo(m/2,u/2-E),x.quadraticCurveTo(m/2,u/2,m/2-E,u/2),x.lineTo(-m/2+E,u/2),x.quadraticCurveTo(-m/2,u/2,-m/2,u/2-E),x.lineTo(-m/2,-u/2+E),x.quadraticCurveTo(-m/2,-u/2,-m/2+E,-u/2);let y=new en(x,{depth:.174,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});y.translate(0,0,-.087),f(y,h),g([.538,.16,.01],[0,0,.096],p);let _=g([.518,.143,.002],[0,0,.11],new qt({color:5511450,transparent:!0,opacity:.09,depthWrite:!1,roughness:.22,clearcoat:1,clearcoatRoughness:.1}));_.castShadow=!1;for(let te of[-.279,.279])for(let F of[-.071,.071]){let ie=f(new Ut(.008,.008,.006,12),d);ie.rotation.x=Math.PI/2,ie.position.set(te,F,.098),g([.01,.0015,.001],[te,F,.102],p)}for(let te of[-.23,.23])for(let F of[-.06,.06])g([.052,.016,.052],[te,.008,F],p,t);for(let te of[-1,1])for(let F=0;F<6;F++)g([.002,.04,.006],[te*.301,-.018,-.061+F*.019],p);let P=document.createElement("canvas");P.width=512,P.height=64;let b=P.getContext("2d");b.font="500 20px monospace",b.fillStyle="#8e8b7a",b.textAlign="center",b.fillText("MIN",128,42),b.fillText("SEC",384,42);let R=new zt(P);R.colorSpace=xt;let A=f(new bt(.43,.018),new vt({map:R,transparent:!0,depthWrite:!1}));A.position.set(0,.069,.104),A.castShadow=!1;let O=new vt({color:16721943,toneMapped:!1}),v=new vt({color:2295557,toneMapped:!1}),T=new vt({color:16718087,transparent:!0,opacity:.12,depthWrite:!1,blending:Ac,toneMapped:!1}),k=new wt,V=.066,z=.01,H=.005;k.moveTo(-V/2,0),k.lineTo(-V/2+H,z/2),k.lineTo(V/2-H,z/2),k.lineTo(V/2,0),k.lineTo(V/2-H,-z/2),k.lineTo(-V/2+H,-z/2),k.closePath();let ee=new Wi(k),oe=["abcdef","bc","abdeg","abcdg","bcfg","acdfg","acdefg","abc","abcdefg","abcdfg"],se={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]},de=[];for(let te of[-.187,-.081,.081,.187]){let F=new Ee;F.position.set(te,-.005,.106),r.add(F);let ie=[];for(let[q,[W,Z,ge]]of Object.entries(se)){let we=f(ee,v,F);we.position.set(W,Z,0),we.rotation.z=ge?Math.PI/2:0,we.scale.x=ge?.76:1,we.castShadow=!1;let pe=f(ee,T,F);pe.position.set(W,Z,-2e-4),pe.rotation.z=we.rotation.z,pe.scale.set(we.scale.x*1.12,1.9,1),pe.castShadow=!1,ie.push({key:q,segment:we,glow:pe})}de.push(ie)}for(let te of[-.025,.015]){let F=f(new rr(.005,16),O);F.position.set(0,te,.106),F.castShadow=!1}let N=new zn(16718344,.12,.7,2);N.position.set(0,.06,.16),r.add(N);let ne=-1;function Q(){let te=n.remainingSeconds;if(te!==ne){let F=pl(te).replace(":","");de.forEach((ie,q)=>{let W=oe[Number(F[q])];for(let Z of ie){let ge=W.includes(Z.key);Z.segment.material=ge?O:v,Z.glow.visible=ge}}),ne=te}return te}return Q(),{group:t,start:()=>n.start(),reset(){n.reset(),Q()},update:Q,get status(){return n.status}}}function Cd(i,e,t,n){let r=n/2,s=r/2;i.save(),i.translate(e,t);function o(a,c){i.fillStyle=c,i.beginPath(),i.moveTo(r,a),i.lineTo(s,a),i.arc(s,a+s,s,-Math.PI/2,Math.PI/2,!0),i.lineTo(r,a+r),i.closePath(),i.fill()}o(0,"#f24e1e"),o(r,"#a259ff"),i.fillStyle="#ff7262",i.beginPath(),i.moveTo(r,0),i.lineTo(r+s,0),i.arc(r+s,s,s,-Math.PI/2,Math.PI/2),i.lineTo(r,r),i.closePath(),i.fill(),i.fillStyle="#1abcfe",i.beginPath(),i.arc(r+s,r+s,s,0,Math.PI*2),i.fill(),i.fillStyle="#0acf83",i.beginPath(),i.moveTo(r,2*r),i.lineTo(r,2*r+s),i.arc(s,2*r+s,s,0,Math.PI*1.5),i.closePath(),i.fill(),i.restore()}function V0(i){let e=new Ee;e.name="Worn handsaw beside the countdown timer",e.position.copy(i).add(new w(-.34,0,.25)),e.position.y=0,e.rotation.y=-.12,e.rotation.z=.026;let t=new Ee;t.rotation.x=-Math.PI/2,e.add(t);let n=li(12963014);n.bumpScale=45e-5;let r=new Fe({color:11121068,metalness:.72,roughness:.38}),s=new Fe({color:10258264,metalness:.68,roughness:.62}),o=new Fe({color:3156253,roughness:1}),a=new Uint8Array(256*256*4),c=1903;for(let y=0;y<256;y++)for(let _=0;_<256;_++){c=1664525*c+1013904223>>>0;let P=Math.sin(y*.54+Math.sin(_*.026)*2)*5+Math.sin(y*1.4+_*.012)*3,b=(c>>>24)/255,R=b>.99?28:0,A=(y*256+_)*4;a[A]=98+P+b*12+R,a[A+1]=57+P*.7+b*9+R,a[A+2]=30+P*.3+b*6+R,a[A+3]=255}let l=new ir(a,256,256);l.colorSpace=xt,l.needsUpdate=!0,l.magFilter=pn;let h=new Fe({map:l,roughness:.83,bumpMap:l,bumpScale:5e-4});function p(y,_,P=t){let b=new lt(y,_);return b.castShadow=!0,b.receiveShadow=!0,P.add(b),b}function d(y,_,P,b){let R=new en(y,{depth:_,bevelEnabled:P>0,bevelSize:P,bevelThickness:P,bevelSegments:2,curveSegments:24});R.translate(0,0,-_/2);let A=R.attributes.uv;for(let O=0;O<A.count;O++)A.setXY(O,(A.getX(O)+.37)/.72,(A.getY(O)+.115)/.23);return p(R,b)}let f=new wt;f.moveTo(-.36,.035),f.lineTo(.19,.081),f.lineTo(.205,-.083);let g=38;for(let y=g;y>=0;y--){let _=-.36+y/g*.55,P=-.035-(_+.36)/.55*.048;f.lineTo(_,P),y>0&&f.lineTo(_-.55/g*.4,P-.009)}f.lineTo(-.365,.025),f.closePath();let x=d(f,.0028,35e-5,[n,r]);x.name="Tapered pitted steel blade with saw teeth";let m=new wt;m.moveTo(.145,.092),m.bezierCurveTo(.19,.119,.31,.116,.338,.079),m.lineTo(.326,-.079),m.quadraticCurveTo(.314,-.111,.278,-.102),m.lineTo(.172,-.085),m.quadraticCurveTo(.153,-.07,.157,-.047),m.lineTo(.17,.046),m.closePath();let u=new ti;u.moveTo(.214,.055),u.quadraticCurveTo(.24,.072,.283,.055),u.lineTo(.283,-.057),u.quadraticCurveTo(.253,-.065,.226,-.052),u.lineTo(.209,.032),u.closePath(),m.holes.push(u);let E=d(m,.026,.006,h);E.name="Worn wooden open grip";for(let[y,_]of[[.176,.055],[.183,-.053],[.199,.003]])for(let P of[-1,1]){let b=p(new Ut(.006,.006,.0035,18),s);b.rotation.x=Math.PI/2,b.position.set(y,_,P*.02);let R=p(new Et(.007,.0012,6e-4),o);R.position.set(y,_,P*.022),R.rotation.z=.35}return{group:e,setEnvironment(y){n.envMap=r.envMap=s.envMap=y;for(let _ of[n,r,s])_.envMapIntensity=.9,_.needsUpdate=!0}}}function ml({flies:i=10,moths:e=5,spread:t=[.82,.17,.47],seed:n=29,sizeScale:r=1,dive:s=0}={}){let o=new Ee;o.name="Flies and moths circling the light";let a=new Jt(1,8,6),c=new Fe({color:1382678,roughness:.65}),l=new Fe({color:5589814,roughness:1}),h=new Fe({color:12899016,roughness:.35,transparent:!0,opacity:.58,depthWrite:!1,side:Dt}),p=document.createElement("canvas");p.width=p.height=128;let d=p.getContext("2d");d.fillStyle="#b8aa83",d.fillRect(0,0,128,128);for(let de=0;de<190;de++)d.fillStyle=de%2?"#89795255":"#e2d3ab66",d.fillRect(de*47%128,de*73%128,2,1);d.strokeStyle="#695c3d",d.lineWidth=4,d.beginPath(),d.moveTo(76,0),d.quadraticCurveTo(99,60,76,128),d.stroke(),d.fillStyle="#5b5039",d.beginPath(),d.ellipse(57,68,13,18,.25,0,Math.PI*2),d.fill(),d.fillStyle="#d5c59a",d.beginPath(),d.ellipse(57,68,6,9,.25,0,Math.PI*2),d.fill(),d.strokeStyle="#75684788",d.lineWidth=1;for(let de=0;de<5;de++)d.beginPath(),d.moveTo(0,64),d.lineTo(128,12+de*26),d.stroke();let f=new zt(p);f.colorSpace=xt;let g=new Fe({map:f,roughness:.9,side:Dt,emissive:10127718,emissiveMap:f,emissiveIntensity:.15});function x(de){let N=new wt;N.moveTo(0,-.008),de?(N.bezierCurveTo(.02,-.031,.052,-.036,.058,-.018),N.bezierCurveTo(.06,-.007,.044,.004,.039,.009),N.bezierCurveTo(.047,.026,.023,.034,.013,.019)):(N.bezierCurveTo(.008,-.021,.03,-.024,.033,-.013),N.bezierCurveTo(.035,-.003,.015,.016,.005,.012)),N.lineTo(0,.008),N.closePath();let ne=new Wi(N,10),Q=ne.attributes.position,te=ne.attributes.uv;for(let F=0;F<Q.count;F++)te.setXY(F,Q.getX(F)/.06,(Q.getY(F)+.036)/.07);return ne.rotateX(-Math.PI/2),ne}function m(de,N,ne,Q){let te=new vn(de,N,ne);return te.name=Q,te.instanceMatrix.setUsage(Un),te.frustumCulled=!1,te.raycast=()=>{},o.add(te),te}let u=m(a,c,i*2,"Small dark flies"),E=m(a,l,e*2,"Moth bodies"),y=m(x(!1),h,i*2,"Translucent fly wings"),_=m(x(!0),g,e*2,"Dusty patterned moth wings"),P=new yt,b=new w,R=new w,A=new w,O=new w(0,0,-1),v=new w(0,0,1),T=new w(0,1,0),k=new w,V=new ft,z=new ft,H=new ft().setFromAxisAngle(T,Math.PI),ee=Array.from({length:i+e},(de,N)=>({moth:N>=i,index:N>=i?N-i:N,phase:N*2.399+n*.17,size:r*(.72+(N*17+n)%13/28),speed:N>=i?.95+N%3*.23:1.8+N%4*.46}));function oe(de,N,ne){let Q=de*N.speed+N.phase,te=N.phase,F=N.moth?.72:.46;return ne.set(t[0]*(F*Math.cos(Q)+.17*Math.sin(Q*2.37+te)),t[1]*(.7*Math.sin(Q*1.73+te)+.23*Math.cos(Q*4.13)),t[2]*(F*Math.sin(Q*.91)+.18*Math.cos(Q*2.71-te))),ne.y-=s*(N.moth?1:.38)*Math.pow(.5+.5*Math.sin(Q*.43+te),6),N.moth||(ne.x+=.035*Math.sin(Q*7.3),ne.y+=.014*Math.cos(Q*9.7)),ne}function se(de,N=!1,ne=1){let Q=N?0:de;for(let te of ee){let{moth:F,index:ie,phase:q,size:W}=te,Z=F?E:u,ge=F?_:y;oe(Q,te,b),oe(Q+.012,te,R),A.copy(R).sub(b).normalize(),V.setFromUnitVectors(O,A),z.setFromAxisAngle(v,.25*Math.sin(Q*2.1+q)),V.multiply(z),P.position.copy(b),P.quaternion.copy(V),P.scale.set(F?.006:.0065,F?.007:.0055,F?.021:.011).multiplyScalar(W),P.updateMatrix(),Z.setMatrixAt(ie*2,P.matrix),k.set(0,0,F?-.022:-.013).applyQuaternion(V),P.position.copy(b).addScaledVector(k,W),P.scale.setScalar((F?.006:.0068)*W),P.updateMatrix(),Z.setMatrixAt(ie*2+1,P.matrix);let we=N?.42:.18+Math.sin(Q*(F?39:92)+q)*(F?.9:.74);for(let[pe,re]of[-1,1].entries())k.set(re*.004,0,0).applyQuaternion(V),P.position.copy(b).addScaledVector(k,W),z.setFromAxisAngle(v,re*we),P.quaternion.copy(V).multiply(z),re<0&&P.quaternion.multiply(H),P.scale.setScalar(W),P.updateMatrix(),ge.setMatrixAt(ie*2+pe,P.matrix)}g.emissiveIntensity=.055+.14*Math.max(0,ne);for(let te of[u,E,y,_])te.instanceMatrix.needsUpdate=!0}return se(0),{group:o,update:se}}var go=3,jM=2.8;function eE(i,e){return e<-1.55||Math.abs(i)>2.55&&e<.45}var vs=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function tE(i){let o=[],a=new Dn,c=new w;i.updateWorldMatrix(!0,!0);function l(g){if(g.visible){g.isMesh&&!g.isInstancedMesh&&g.geometry&&(g.geometry.computeBoundingBox(),a.copy(g.geometry.boundingBox).applyMatrix4(g.matrixWorld),a.getSize(c),a.min.y<.13&&a.max.y>.1&&c.y>.065&&Math.min(c.x,c.z)>.018&&o.push({x0:a.min.x-.15,x1:a.max.x+.15,z0:a.min.z-.15,z1:a.max.z+.15}));for(let x of g.children)l(x)}}for(let g of i.children)l(g);let h=Array.from({length:1763},(g,x)=>{let m=x%41,u=Math.floor(x/41),E=-3.6+m*.18,y=-3.65+u*.18;return{id:x,col:m,row:u,x:E,z:y,free:eE(E,y)&&!o.some(_=>E>=_.x0&&E<=_.x1&&y>=_.z0&&y<=_.z1),neighbors:[]}});for(let g of h)if(g.free)for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++){if(!m&&!x)continue;let u=g.col+m,E=g.row+x;if(u<0||u>=41||E<0||E>=43)continue;let y=h[E*41+u];y.free&&(!m||!x||h[g.row*41+u].free&&h[E*41+g.col].free)&&g.neighbors.push(y.id)}let p=h.filter(g=>g.free&&g.neighbors.length);function d(g,x,m){return(m?p.filter(E=>vs(E,m)>=go):p).reduce((E,y)=>!E||(y.x-g)**2+(y.z-x)**2<(E.x-g)**2+(E.z-x)**2?y:E,null)}function f(g,x,m){let u=new Int32Array(h.length).fill(-1),E=[g];u[g]=g;for(let R=0;R<E.length;R++){let A=h[E[R]],O=vs(A,m);for(let v of A.neighbors){let T=vs(h[v],m);u[v]<0&&(T>=go||T>O+.001)&&(u[v]=A.id,E.push(v))}}let y=h[g],_=E.filter(R=>{let A=h[R],O=Math.hypot(A.x-y.x,A.z-y.z);return O>.8&&O<2.8&&vs(A,m)>=go});if(!_.length)return[];let P=_[Math.floor(x()*_.length)],b=[];for(;P!==g;)b.push(h[P]),P=u[P];return b.reverse()}return{closest:d,path:f}}function G0({room:i,floorSupport:e,viewerPosition:t,seed:n=Math.floor(Math.random()*4294967295)}){let r=new Ee;r.name="Tiny mice and rats darting through distant shadows",r.userData.ignoreAcid=!0;let s=n>>>0,o=()=>(s=s*1664525+1013904223>>>0,s/4294967296),a=tE(i),c=new yt,l=new w,h=new w,p=new w,d=new w(0,1,0),f=document.createElement("canvas");f.width=f.height=128;let g=f.getContext("2d");g.fillStyle="#e8e3d9",g.fillRect(0,0,128,128);for(let Q=0;Q<1400;Q++){g.strokeStyle=Q%3?"#7d766f30":"#ffffff66";let te=o()*128,F=o()*128;g.beginPath(),g.moveTo(te,F),g.lineTo(te+(o()-.5)*2,F+3+o()*5),g.stroke()}let x=new zt(f);x.colorSpace=xt;let m=new Fe({map:x,roughness:.96}),u=new Fe({roughness:.72}),E=new Fe({roughness:.88});function y(Q,te,F,ie){let q=new vn(Q,te,F);return q.name=ie,q.instanceMatrix.setUsage(Un),q.frustumCulled=!1,q.castShadow=!0,q.receiveShadow=!0,q.raycast=()=>{},r.add(q),q}let _=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],P=_.length,b=new Jt(1,14,9),R=y(b,m,P*6,"Furry rat and mouse bodies"),A=y(b,u,P*9,"Ears, eyes, noses and running paws"),O=y(new Ut(1,1,1,7),E,P*9,"Long tapered swishing tails"),v=new Float32Array(P*4*2*3),T=new Pt;T.setAttribute("position",new un(v,3).setUsage(Un));let k=new ao(T,new fs({color:12300704,transparent:!0,opacity:.45}));k.frustumCulled=!1,k.raycast=()=>{},r.add(k);let V=[5327684,5854283,4539454],z=_.map(([Q,te],F)=>{let ie=a.closest(Q,te,t)||a.closest(Q,te),q=F!==0;return{mouse:q,cell:ie.id,x:ie.x,z:ie.z,yaw:o()*Math.PI*2,size:.28*(q?.58+o()*.08:.92+o()*.12),color:new pt(V[F]),phase:o()*6.28,speed:3.6*(q?1.05+o()*.3:.88+o()*.25),route:[],pause:1.2+F*1.6+o()*2,gait:0,moving:!1,visibility:1}}),H=new pt(7889757),ee=new pt(6771019),oe=new pt(1118478),se=null;function de(Q,te,F,ie,q=l){let W=Math.cos(Q.yaw),Z=Math.sin(Q.yaw),ge=Q.size*Q.visibility;return q.set(Q.x+(te*W+ie*Z)*ge,e(Q.x,Q.z)+F*ge,Q.z+(-te*Z+ie*W)*ge)}function N(Q,te,F,ie,q,W,Z=0){de(F,...ie),c.position.copy(l),c.rotation.set(0,F.yaw,Z),c.scale.set(...q).multiplyScalar(F.size*F.visibility),c.updateMatrix(),Q.setMatrixAt(te,c.matrix),Q.setColorAt(te,W)}function ne(Q,te=!1,F=t){let ie=se===null?0:Math.min(.1,Math.max(0,Q-se));se=Q;let q=0;for(let[W,Z]of z.entries()){let ve=function(be,Le){let Ce=be/9;return de(Z,Math.sin(Ce*3.5+we*(Z.moving?8:1.6)+Z.phase)*.045*Ce,.026*(1-Ce)+.009,.126+Re*Ce,Le)};Z.moving=!1;let ge=vs(Z,F);if(Z.visibility=Ge.smoothstep(ge,jM,go+.25),!te){let be=Z.route[0];if(be&&vs(be,F)<go&&vs(be,F)<=ge&&(Z.route=[]),ge<go+.35&&(Z.pause=0),Z.pause>0)Z.pause-=ie;else{Z.route.length||(Z.route=a.path(Z.cell,o,F));let Le=Z.speed*ie;for(;Z.route.length&&Le>0;){let Ce=Z.route[0],D=Ce.x-Z.x,S=Ce.z-Z.z,K=Math.hypot(D,S),fe=Math.min(K,Le);if(Z.moving=!0,Z.gait+=fe*45,Le-=fe,K>1e-4){Z.x+=D/K*fe,Z.z+=S/K*fe;let ye=Math.atan2(-D,-S),_e=Ge.euclideanModulo(ye-Z.yaw+Math.PI,Math.PI*2)-Math.PI;Z.yaw+=_e*(1-Math.exp(-ie*28))}fe>=K-1e-4&&(Z.x=Ce.x,Z.z=Ce.z,Z.cell=Ce.id,Z.route.shift(),Z.route.length||(Z.pause=3+o()*5))}!Z.route.length&&!Z.moving&&(Z.pause=1)}}let we=te?0:Q,pe=Z.moving?Math.abs(Math.sin(Z.gait))*.005:Math.sin(we*3+Z.phase)*.0015,re=Z.moving?0:Math.sin(we*12+Z.phase)*.002,L=W*6,xe=W*9;N(R,L,Z,[0,.077+pe,0],[.068,.063,.125],Z.color),N(R,L+1,Z,[0,.081+pe,.068],[.07,.069,.071],Z.color),N(R,L+2,Z,[0,.078+pe,-.115],[.046,.044,.066],Z.color),N(R,L+3,Z,[0,.057+pe+re,-.177],[.03,.024,.05],Z.color);for(let[be,Le]of[-1,1].entries()){let Ce=Z.mouse?1.23:.88;N(R,L+4+be,Z,[Le*.044,.126+pe,-.102],[.03*Ce,.038*Ce,.012],Z.color,Le*.2),N(A,xe+be,Z,[Le*.044,.128+pe,-.113],[.022*Ce,.028*Ce,.004],H,Le*.2),N(A,xe+2+be,Z,[Le*.032,.094+pe,-.149],[.007,.008,.007],oe)}N(A,xe+4,Z,[0,.057+pe+re,-.221],[.011,.009,.009],ee);for(let be=0;be<4;be++){let Le=be%2?-1:1,Ce=be>1,D=Z.gait+(be===0||be===3?0:Math.PI),S=Z.moving?Math.max(0,Math.sin(D))*.023:0,K=Z.moving?Math.cos(D)*.027:0;N(A,xe+5+be,Z,[Le*(Ce?.055:.043),.01+S,(Ce?.08:-.087)+K],[.018,.01,.031],H)}let Re=Z.mouse?.23:.29;for(let be=0;be<9;be++){ve(be,l),ve(be+1,h),p.copy(h).sub(l);let Le=p.length();c.position.copy(l).add(h).multiplyScalar(.5),c.quaternion.setFromUnitVectors(d,p.normalize());let Ce=(.009*(1-be/9)+.001)*Z.size*Z.visibility;c.scale.set(Ce,Le,Ce),c.updateMatrix(),O.setMatrixAt(W*9+be,c.matrix),O.setColorAt(W*9+be,H)}for(let be of[-1,1])for(let Le=0;Le<2;Le++)de(Z,be*.018,.061+pe,-.195),l.toArray(v,q),q+=3,de(Z,be*.08,.062+pe+re,-.2+Le*.027),l.toArray(v,q),q+=3}for(let W of[R,A,O])W.instanceMatrix.needsUpdate=!0,W.instanceColor.needsUpdate=!0;T.attributes.position.needsUpdate=!0}return ne(0),{group:r,update:ne}}function W0(){let i="drawer",e=!1,t=8;function n(r,s=!1){return s?"Detach your shackle before using the charger.":r==="drawer"?(e=!e,e?"Drawer opened. Take the MacBook charger and cable.":"Drawer closed."):r==="charger"?i!=="drawer"?"You already collected the charger.":e?(i="carrying","Charger collected. Plug it into the power strip behind you."):"Open the rear drawer first.":r==="strip"?i==="drawer"?"The power strip is on. Find the charger in the rear drawer.":i==="carrying"?(i="powered","Charger plugged in. Connect its cable to the MacBook."):i==="charging"?"The MacBook is charging.":"The charger has power. Connect the MacBook.":r==="laptop"?i==="powered"?(i="charging","Cable connected. The MacBook is charging."):i==="charging"?`MacBook battery: ${Math.floor(t)}%.`:i==="carrying"?"Plug the charger into the power strip first.":"Find the charger in the rear drawer.":""}return{use:n,update(r){i==="charging"&&(t=Math.min(100,t+Math.max(0,r)*.65))},reset(){i="drawer",e=!1,t=8},get phase(){return i},get drawerOpen(){return e},get battery(){return t},get nextAction(){return i==="drawer"?e?"charger":"drawer":i==="carrying"?"strip":i==="powered"?"laptop":null}}}function X0({adapterExit:i,connectorExit:e,laptop:t,floorSupport:n,strip:r}){let s=i.getWorldPosition(new w),o=e.getWorldPosition(new w),a=new w(1,0,0).transformDirection(i.matrixWorld),c=new w(-1,0,0).transformDirection(e.matrixWorld),l=x=>(x.y=n(x.x,x.z)+.0055,x),h=(x,m)=>l(t.localToWorld(new w(x,0,m))),p=[s,s.clone().addScaledVector(a,.065),l(s.clone().addScaledVector(a,.22))];if(r){let x=r.worldToLocal(s.clone()),m=Math.max(.24,x.y+.045),u=(E,y)=>r.localToWorld(new w(x.x,E,y));p=[s,s.clone().addScaledVector(a,.045),u(m,-.1),u(.1,-.19),l(u(0,-.29))]}let d=[...p,h(-.32,1.45),h(-.61,1.12),h(-.85,.85),h(-.91,.48),h(-.9,.06),l(o.clone().addScaledVector(c,.23)),o.clone().addScaledVector(c,.09),o],f=new Xt(d,!1,"centripetal"),g=new qn;return g.getPoint=(x,m=new w)=>(f.getPoint(x,m),m.y=Math.max(m.y,n(m.x,m.z)+.0055),m),new on(g,112,.0045,8,!1)}function Pd(i,e,t){let n=new wt,r=i/2,s=e/2;return n.moveTo(-r+t,-s),n.lineTo(r-t,-s),n.quadraticCurveTo(r,-s,r,-s+t),n.lineTo(r,s-t),n.quadraticCurveTo(r,s,r-t,s),n.lineTo(-r+t,s),n.quadraticCurveTo(-r,s,-r,s-t),n.lineTo(-r,-s+t),n.quadraticCurveTo(-r,-s,-r+t,-s),n}function Id(i,e,t=.001){let n=new en(i,{depth:e-2*t,bevelEnabled:t>0,bevelSize:t,bevelThickness:t,bevelSegments:2,curveSegments:6});return n.translate(0,0,-e/2+t),n}function _r(i,e,t,n,r){let s=new lt(e,t);return s.position.set(...n),s.name=r,s.castShadow=s.receiveShadow=!0,i.add(s),s}function q0(i,e,t,n,r){return _r(i,new Et(...e),n,t,r)}function gl(i,e,t,n,r,s=.012){return _r(i,Id(Pd(e[0],e[1],s),e[2],Math.min(.002,e[2]/4)),n,t,r)}function Wr(i,e,t,n,r,s,o,a=.012){let c=_r(i,Id(Pd(e,t,a),n,Math.min(.002,n/4)),s,r,o);return c.rotation.x=-Math.PI/2,c}function Y0(){let i=new Ee;i.name="MacBook USB-C power adapter",i.userData.chargingAction="charger";let e=new Fe({color:15065816,roughness:.36}),t=new Fe({color:10855836,roughness:.7}),n=new Fe({color:12239556,metalness:.8,roughness:.3}),r=new Fe({color:1909537,roughness:.8});gl(i,[.142,.147,.065],[0,.083,0],e,"Upright rounded adapter shell"),gl(i,[.143,.148,.0015],[0,.083,0],t,"Adapter casing seam"),gl(i,[.06,.029,.062],[0,.014,-.012],e,"Removable AC duckhead",.006);for(let l of[-.014,.014])q0(i,[.005,.023,.014],[l,-.01,-.012],n,"Downward AC prong");let s=Wr(i,.025,.01,.002,[0,.158,0],r,"USB-C port on top",.003),o=new Ee;o.name="USB-C adapter plug and strain relief",o.visible=!1,i.add(o),gl(o,[.027,.034,.014],[0,.177,0],e,"Upright USB-C plug",.005);let a=_r(o,new Ut(.0045,.007,.024,12),e,[0,.204,0],"Adapter cable strain relief"),c=new yt;return c.name="Adapter cable exit",c.position.set(0,.216,0),c.rotation.z=Math.PI/2,i.add(c),{group:i,plug:o,exit:c}}function Z0(){let i=new Ee;i.name="Powered floor power strip",i.userData.chargingAction="strip";let e=new Fe({color:13223864,roughness:.65}),t=new Fe({color:14736848,roughness:.52}),n=new Fe({color:2369312,roughness:.9}),r=new Fe({color:9279897,metalness:.75,roughness:.45});Wr(i,.646,.132,.05,[0,0,0],e,"Rounded power strip housing",.025),Wr(i,.646,.133,.006,[0,-.012,0],n,"Dark housing joint",.025);for(let d of[-.255,.255])for(let f of[-.041,.041])Wr(i,.035,.021,.006,[d,-.028,f],n,"Rubber foot",.005);let s=[-.205,-.095,.015,.125];for(let[d,f]of s.entries()){Wr(i,.094,.103,.003,[f,.0255,0],n,"Recessed socket surround",.013);let g=Pd(.088,.097,.011);for(let u of[-1,1]){let E=u<0?.0055:.0045,y=.016,_=new ti,P=u*.014,b=.012;_.moveTo(P-E/2,b-y/2),_.lineTo(P-E/2,b+y/2),_.lineTo(P+E/2,b+y/2),_.lineTo(P+E/2,b-y/2),_.closePath(),g.holes.push(_)}let x=new ti;x.absarc(0,-.024,.006,0,Math.PI*2,!0),g.holes.push(x);let m=_r(i,Id(g,.005,4e-4),t,[f,.03,0],`Recessed grounded outlet ${d+1}`);m.rotation.x=-Math.PI/2}Wr(i,.054,.075,.006,[.253,.029,0],n,"Recessed switch bezel",.01);let o=new Fe({color:12074535,roughness:.29,emissive:10232082,emissiveIntensity:.18}),a=Wr(i,.037,.055,.01,[.253,.034,0],o,"Illuminated on-off rocker",.007);a.rotation.z=.1,Wr(i,.003,.014,.001,[.245,.04,0],t,"Switch on symbol",7e-4);let c=new vt({color:8767595});_r(i,new Ut(.003,.003,.001,10),c,[.211,.028,.039],"Surge protection indicator");for(let d of[-.303,.303])_r(i,new Ut(.006,.006,.002,12),r,[d,.026,0],"Recessed casing screw"),q0(i,[.008,8e-4,.001],[d,.0273,0],n,"Screw slot");let l=_r(i,new Ut(.009,.012,.052,12),n,[.344,-.004,0],"Moulded mains strain relief");l.rotation.z=-Math.PI/2;for(let d=0;d<5;d++){let f=_r(i,new $t(.01-d*45e-5,.0014,5,12),n,[.326+d*.009,-.004,0],"Strain relief rib");f.rotation.y=Math.PI/2}let h=new yt;h.name="Power strip mains cable exit",h.position.set(.37,-.004,0),i.add(h);let p=new yt;return p.name="Charger plug seat",p.position.set(s[0],.033,0),i.add(p),{group:i,leadExit:h,adapterSeat:p}}function $0({exit:i,wallPlug:e,floorSupport:t}){let n=i.getWorldPosition(new w),r=new w(1,0,0).transformDirection(i.matrixWorld),s=e.clone(),o=h=>(h.y=t(h.x,h.z)+.0085,h),a=[n,n.clone().addScaledVector(r,.07),o(n.clone().addScaledVector(r,.22)),o(new w(2.73,0,4)),o(new w(2.5,0,4.27)),new w(s.x+.08,.07,s.z-.07),s.clone().add(new w(0,-.06,-.02)),s],c=new Xt(a,!1,"centripetal"),l=new qn;return l.getPoint=(h,p=new w)=>(c.getPoint(h,p),p.y=Math.max(p.y,t(p.x,p.z)+.0085),p),new on(l,88,.0075,7,!1)}function K0({filing:i,laptop:e,floorSupport:t,drawerMaterial:n}){let r=new Ee;r.name="Interactive MacBook charging kit";let s=new zn(10794149,1.5,2.8,2);s.position.set(1.55,1.25,3.25),r.add(s);let o=W0(),a=new Fe({color:14275780,roughness:.51}),c=new Fe({color:15131609,roughness:.42}),l=new Fe({color:2435105,roughness:.88}),h=new Fe({color:9082261,roughness:.4,metalness:.7}),p=new vt({color:16757557}),d=new vt({color:9422728});function f(D,S,K=r){let fe=new lt(D,S);return fe.castShadow=!0,fe.receiveShadow=!0,K.add(fe),fe}function g(D,S,K,fe){let ye=f(new Et(...D),K,fe);return ye.position.set(...S),ye}function x(D,S,K,fe){let[ye,_e,ke]=D,Ue=Math.min(.012,_e*.24),Ve=new wt,nt=ye/2,De=_e/2;Ve.moveTo(-nt+Ue,-De),Ve.lineTo(nt-Ue,-De),Ve.quadraticCurveTo(nt,-De,nt,-De+Ue),Ve.lineTo(nt,De-Ue),Ve.quadraticCurveTo(nt,De,nt-Ue,De),Ve.lineTo(-nt+Ue,De),Ve.quadraticCurveTo(-nt,De,-nt,De-Ue),Ve.lineTo(-nt,-De+Ue),Ve.quadraticCurveTo(-nt,-De,-nt+Ue,-De);let $=Math.min(.004,ke/6),me=new en(Ve,{depth:ke-2*$,bevelEnabled:!0,bevelSize:$,bevelThickness:$,bevelSegments:2,curveSegments:5});me.translate(0,0,-ke/2+$);let Ae=f(me,K,fe);return Ae.position.set(...S),Ae}function m(D,S,K,fe=r){return f(new on(new Xt(D.map(ye=>ye.isVector3?ye:new w(...ye))),48,S,7,!1),K,fe)}function u(D,S,K,fe,ye){let _e=document.createElement("canvas");_e.width=512,_e.height=128;let ke=_e.getContext("2d");ke.fillStyle="#c4c4b6",ke.fillRect(0,0,512,128),ke.fillStyle="#353b35",ke.font="600 58px Arial",ke.textAlign="center",ke.fillText(D,256,85,480);let Ue=new zt(_e);Ue.colorSpace=xt;let Ve=f(new bt(S,K),new Fe({map:Ue,roughness:.9}),ye);return Ve.position.set(...fe),Ve}let E=new Ee;E.name="Rear drawer containing the MacBook charger",E.userData.chargingAction="drawer",E.position.set(-.38,.56,0),i.add(E),g([.71,.32,.025],[0,0,.231],n,E),x([.22,.022,.028],[0,.04,.264],h,E),u("CHARGERS",.2,.047,[0,-.065,.246],E),g([.66,.018,.36],[0,-.145,.025],n,E);for(let D of[-.33,.33])g([.015,.27,.36],[D,-.01,.025],n,E);g([.66,.27,.015],[0,-.01,-.155],n,E);for(let D of[-.348,.348])g([.013,.027,.43],[D,-.08,.015],h,E);let{group:y,plug:_,exit:P}=Y0();E.add(y);let b=new w(.105,-.105,-.055);y.position.copy(b),y.rotation.x=Math.PI/2;let R=u("96W USB-C",.077,.018,[0,.082,-.034],y);R.rotation.y=Math.PI,R.material.color.setHex(10066834);let A=new Ee;A.name="Coiled charger cable",A.userData.chargingAction="charger",E.add(A),A.position.set(-.145,-.127,.06);let O=[];for(let D=0;D<=120;D++){let S=D/120*Math.PI*6;O.push([Math.cos(S)*(.086+D*12e-5),D*45e-6,Math.sin(S)*.06])}m(O,.0045,c,A),x([.041,.014,.019],[.12,.01,0],c,A),g([.014,.009,.014],[.145,.01,0],h,A);let{group:v,leadExit:T,adapterSeat:k}=Z0();v.position.set(1.94,t(1.94,3.72)+.032,3.72),v.rotation.y=-.16,r.add(v),u("SURGE",.04,.012,[.253,.043,-.042],v).rotation.x=-Math.PI/2;let V=x([.12,.16,.018],[2.15,.27,4.424],a,r);for(let D of[.235,.3]){g([.065,.042,.006],[2.15,D,4.411],c,r);for(let S of[2.136,2.164])g([.005,.016,.003],[S,D+.004,4.406],l,r)}x([.054,.043,.055],[2.15,.3,4.383],l,r);let z=f($0({exit:T,wallPlug:new w(2.15,.3,4.35),floorSupport:t}),l);z.name="Power strip mains lead to wall socket",z.raycast=()=>{};let H=new Ee;H.name="MacBook charging port",H.userData.chargingAction="laptop",H.position.set(-.446,.002,-.18),e.object.add(H),g([.005,.01,.035],[0,0,0],l,H);let ee=f(new Et(.045,.048,.085),new vt({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}),H);ee.castShadow=!1;let oe=new Ee;oe.name="Connected MacBook charging cable",oe.visible=!1,r.add(oe),x([.048,.018,.026],[0,0,0],c,oe),g([.014,.008,.022],[.03,0,0],h,oe);let se=f(new Ut(.0048,.008,.032,12),a,oe);se.rotation.z=Math.PI/2,se.position.x=-.041;let de=new yt;de.name="Laptop cable exit",de.position.x=-.057,oe.add(de);let N=g([.01,.003,.007],[.005,.011,0],p,oe);N.castShadow=!1;let ne=document.createElement("canvas");ne.width=512,ne.height=96;let Q=ne.getContext("2d"),te=new zt(ne);te.colorSpace=xt;let F=f(new bt(.245,.046),new vt({map:te}),e.screen);F.name="MacBook battery charge readout",F.position.set(.282,.235,.001),F.visible=!1,F.castShadow=!1;let ie=0,q=-1/0,W=-1/0,Z=null,ge=-1,we="",pe=null,re=new w,L=new w;function xe(D){let S=Z?.geometry,K=X0({adapterExit:P,connectorExit:de,laptop:e.object,floorSupport:t,strip:v});Z?(Z.geometry=K,S.dispose()):(Z=f(K,c),Z.name="Charging cable resting across the floor",Z.raycast=()=>{}),ge=D}function Re(D,S,K=!1){let fe=o.phase,ye=o.use(D,K);return K||(fe==="drawer"&&o.phase==="carrying"&&(y.visible=!1,A.visible=!1),fe==="carrying"&&o.phase==="powered"&&(v.add(y),y.visible=!0,y.rotation.set(0,0,0),y.position.copy(k.position),q=S,r.add(A),A.visible=!0,A.rotation.set(0,.4,0),A.position.set(1.7,t(1.7,3.42)+.008,3.42)),fe==="powered"&&o.phase==="charging"&&(W=S,oe.visible=!0,_.visible=!0,A.visible=!1)),ye}function ve(D,S=!1){let K=pe===null?0:Math.max(0,Math.min(.05,D-pe));pe=D,o.update(K);let fe=o.drawerOpen?1:0;if(ie=S?fe:Ge.damp(ie,fe,8,K),E.position.z=ie*.43,(o.phase==="powered"||o.phase==="charging")&&(y.position.y=k.position.y+(S?0:.19*(1-Ge.smootherstep(D-q,0,.65)))),o.phase==="charging"){let Ue=S?1:Ge.smootherstep(D-W,0,.65);H.getWorldPosition(L),oe.quaternion.copy(e.object.getWorldQuaternion(new ft)),re.set(-.032-(1-Ue)*.12,(1-Ue)*.028,0).applyQuaternion(oe.quaternion),oe.position.copy(L).add(re),(Math.abs(Ue-ge)>.02||Ue===1&&ge!==1)&&xe(Ue),N.material=o.battery>=100?d:p}F.visible=e.openProgress>.35;let ye=Math.floor(o.battery),_e=o.phase==="charging",ke=`${_e?"\u26A1 ":""}${ye}%`;ke!==we&&(we=ke,Q.fillStyle="#222e36",Q.fillRect(0,0,512,96),Q.fillStyle=_e?"#93dba3":"#e3b36d",Q.font="500 44px Arial",Q.textAlign="right",Q.fillText(ke,385,63),Q.strokeStyle=_e?"#93dba3":"#e3b36d",Q.lineWidth=5,Q.strokeRect(405,25,72,44),Q.fillRect(480,37,7,19),Q.fillRect(413,33,56*ye/100,28),te.needsUpdate=!0)}function be(){o.reset(),ie=0,E.position.z=0,E.add(y,A),y.visible=A.visible=!0,y.position.copy(b),y.rotation.set(Math.PI/2,0,0),A.position.set(-.145,-.127,.06),A.rotation.set(0,0,0),oe.visible=!1,_.visible=!1,Z&&(r.remove(Z),Z.geometry.dispose(),Z=null),ge=-1,we="",pe=null}function Le(D){return D==="drawer"?o.drawerOpen?"Close charger drawer":"Open charger drawer":D==="charger"?"Take MacBook charger + cable":D==="strip"?o.phase==="carrying"?"Plug charger into power strip":"Powered power strip":D==="laptop"?o.phase==="powered"?"Connect charger to MacBook":`MacBook battery \xB7 ${Math.floor(o.battery)}%`:o.phase==="carrying"?"Charger collected \xB7 Plug into the power strip [F]":o.phase==="powered"?"Charger powered \xB7 Connect the MacBook [F]":o.phase==="charging"?`${o.battery>=100?"Fully charged":"Charging"} \xB7 ${Math.floor(o.battery)}%`:""}function Ce(D,S){i.updateWorldMatrix(!0,!1),i.localToWorld(D.set(E.position.x,E.position.y+.94,1.08)),i.localToWorld(S.set(E.position.x,E.position.y-.085,.48))}return ve(0),{group:r,use:Re,update:ve,reset:be,hint:Le,getDrawerView:Ce,get drawerOpen(){return o.drawerOpen},get phase(){return o.phase},get nextAction(){return o.nextAction},get drawerReady(){return ie>.85},get battery(){return o.battery}}}function J0(){let i="sealed",e=-1/0;return{get phase(){return i},get hasKey(){return i==="collected"},get startedAt(){return e},pour(t){return i!=="sealed"?!1:(i="pouring",e=t,!0)},update(t){i==="pouring"&&t-e>=3.4&&(i="revealed")},collect(){return i!=="revealed"?!1:(i="collected",!0)},reset(){i="sealed",e=-1/0}}}function Q0(i){let e=i.geometry,t=e.attributes.position,n=t.array.slice(),r=e.parameters.points,s=e.parameters.segments,o=r.length,a=r.filter(m=>m.x>0),c=a[0].y,l=a.at(-1).y,h=new Float32Array(s+1),p=new Float32Array(s+1),d=!1;function f(m){for(let u=1;u<a.length;u++)if(m<=a[u].y){let E=a[u-1],y=a[u],_=(m-E.y)/(y.y-E.y||1);return E.x+(y.x-E.x)*_}return a.at(-1).x}function g(){t.array.set(n),t.needsUpdate=!0,e.computeVertexNormals(),i.visible=!0,d=!1}function x(m){if(m>=.999){i.visible=!1,d=!0;return}if(d)return;i.updateWorldMatrix(!0,!1);let u=i.matrixWorld.elements;if(u[5]>=-.3||m<=0)return;let E=c+(l-c)*m,y=u[5]*E;for(let _=0;_<=s;_++){let P=_/s*Math.PI*2,b=Math.sin(P),R=Math.cos(P),A=c,O=l;for(let v=0;v<18;v++){let T=(A+O)/2,k=f(T);(u[1]*b+u[9]*R)*k+u[5]*T>y?A=T:O=T}h[_]=(A+O)/2,p[_]=f(h[_]);for(let v=0;v<o;v++){let T=_*o+v,k=T*3,V=n[k+1];if(V<h[_]){let z=r[v].x===0;t.setXYZ(T,z?0:b*p[_],z?E:h[_],z?0:R*p[_])}else t.setXYZ(T,n[k],V,n[k+2])}}t.needsUpdate=!0,e.computeVertexNormals()}return{update:x,reset:g}}function j0({bottle:i,contents:e,cap:t,floorSupport:n}){let r=new Ee;r.name="Ketchup spill and hidden shackle key";let s=J0(),o=i.position.clone(),a=i.quaternion.clone();i.userData.keyAction="pour";let c=new w(0,1,0).applyQuaternion(a),l=new ft().setFromUnitVectors(c,new w(-.12,-.99,.06).normalize()).multiply(a),h=o.clone().add(new w(-.32,.42,-.04)),p=Q0(e),d=new w(0,.469,0).applyMatrix4(i.children[0].matrix).multiply(i.scale).applyQuaternion(l).add(h);d.y=n(d.x,d.z)+.009;let f=t.position.clone(),g=t.quaternion.clone();t.updateWorldMatrix(!0,!1);let x=t.getWorldPosition(new w),m=t.getWorldQuaternion(new ft),u=x.clone().add(new w(-.13,0,.1));u.y=n(u.x,u.z)+.016;let E=new Fe({color:13674833,metalness:.72,roughness:.27,emissive:7161877,emissiveIntensity:.18}),y=new Ee;y.name="Brass shackle key",y.userData.keyAction="collect",r.add(y),y.visible=!1;function _(Q,te,F){let ie=new lt(Q,te);return ie.castShadow=!0,ie.receiveShadow=!0,F.add(ie),ie}let P=_(new $t(.025,.0055,8,24),E,y);P.rotation.x=Math.PI/2,P.position.x=-.042;let b=_(new Et(.078,.009,.01),E,y);b.position.x=.013;for(let Q of[.027,.047])_(new Et(.01,.009,.022),E,y).position.set(Q,0,.01);let R=_(new Et(.15,.04,.1),new vt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),y);R.castShadow=!1,R.receiveShadow=!1;let A=new qt({color:12001548,roughness:.28,clearcoat:1,clearcoatRoughness:.18}),O=new Ee;O.position.copy(d),O.position.y-=.006,r.add(O),O.visible=!1;let v=new wt;for(let Q=0;Q<=64;Q++){let te=Q/64*Math.PI*2,F=1+.1*Math.sin(te*5)+.07*Math.cos(te*9),ie=Math.cos(te)*.2*F,q=Math.sin(te)*.13*F;Q===0?v.moveTo(ie,q):v.lineTo(ie,q)}let T=_(new Wi(v,32),A,O);T.rotation.x=-Math.PI/2,T.castShadow=!1;let k=[];for(let Q=0;Q<7;Q++){let te=Q*2.4,F=.05+Q*.016,ie=_(new Jt(1,12,8),A,O);ie.position.set(Math.cos(te)*F,.003,Math.sin(te)*F*.6),ie.scale.set(.015+Q%3*.005,.004,.012),k.push(ie)}let V=_(new Ut(.7,1,1,10),A,r);V.name="Downward ketchup stream",V.visible=!1,V.castShadow=!1;let z=new w,H=new w,ee=new w,oe=new w(0,1,0),se=Q=>{let te=Ge.clamp(Q,0,1);return te*te*(3-2*te)},de=!1;function N(){s.reset(),i.position.copy(o),i.quaternion.copy(a),p.reset(),i.children[0].add(t),t.position.copy(f),t.quaternion.copy(g),t.scale.setScalar(1),de=!1,y.visible=!1,O.visible=!1,V.visible=!1}function ne(Q,te){if(s.update(Q),s.phase==="sealed")return;let F=Q-s.startedAt,ie=se(F/.8)*(1-se((F-3.35)/.8));i.position.copy(o).lerp(h,ie),i.quaternion.copy(a).slerp(l,ie),de||(r.attach(t),de=!0),t.position.copy(x).lerp(u,se(F/.55)),t.position.y+=Math.sin(Math.min(1,F/.55)*Math.PI)*.08,t.quaternion.copy(m).multiply(new ft().setFromAxisAngle(new w(0,0,1),se(F/.55)*2));let q=se((F-.8)/2.5);if(p.update(q),O.visible=F>.75,O.scale.setScalar(Math.max(.01,q)),i.updateWorldMatrix(!0,!0),i.children[0].localToWorld(z.set(0,.469,0)),V.visible=F>.8&&F<3.3,V.visible){H.copy(z).add(d).multiplyScalar(.5),ee.subVectors(z,d),V.position.copy(H),V.quaternion.setFromUnitVectors(oe,ee.clone().normalize());let W=te?1:1+Math.sin(F*21)*.12;V.scale.set(.012*W,ee.length(),.012*W)}if(y.visible=F>=2.5&&!s.hasKey,y.visible){let W=se((F-2.5)/.9);y.position.copy(z).lerp(d,W),y.position.y+=Math.sin(W*Math.PI)*.065,y.rotation.set((1-W)*2,W*.5,(1-W)*3),E.emissiveIntensity=te?.22:.22+.1*Math.sin(Q*3)}}return{group:r,bottle:i,key:y,update:ne,reset:N,get hasKey(){return s.hasKey},get phase(){return s.phase},pour:Q=>s.pour(Q),collect:()=>s.collect(),hint(Q){return Q==="collect"&&!s.hasKey?s.phase==="revealed"?"Pick up the shackle key":"A key is sliding out\u2026":Q==="pour"?s.phase==="sealed"?"Pour out the ketchup":s.phase==="pouring"?"Pouring ketchup\u2026":s.hasKey?"The bottle is empty":"Pick up the key in the ketchup":""}}}var xl=(i,e,t)=>Math.max(e,Math.min(t,i));function em({speed:i=.38,maxPoints:e=180}={}){let t=[],n=null,r=!1;function s(a,c,l,h=!1){return h||n!==null||t.some(p=>p.index===a)?!1:(t.push({index:a,openedAt:l,progress:0,origin:{...c},head:{x:c.x,z:c.z},points:[]}),!0)}function o(a,c,l){if(r)return!1;for(let h of t){if(h.progress=xl((a-h.openedAt)/1.35,0,1),a-h.openedAt<.48)continue;h.points.length||h.points.push({...h.head,born:a,radius:.13});let p=l.x-h.head.x,d=l.z-h.head.z,f=Math.hypot(p,d),g=Math.min(f,i*xl(c,0,.08));if(f>.001){let m=.18*Math.sin((a-h.openedAt)*.85+h.index*1.9),u=Math.sqrt(1+m*m);h.head.x+=(p/f-d/f*m)*g/u,h.head.z+=(d/f+p/f*m)*g/u}let x=h.points.at(-1);Math.hypot(x.x-h.head.x,x.z-h.head.z)>.075&&(h.points.push({...h.head,born:a,radius:.13}),h.points.length>e&&h.points.splice(1,1));for(let[m,u]of h.points.entries()){let E=xl((a-u.born)/3,0,1);u.radius=m===0?.16+.23*E:.12+(.13+.025*Math.sin(u.born*1.8+h.index))*E,n===null&&Math.hypot(l.x-u.x,l.z-u.z)<u.radius+.15&&(n=a)}}return n!==null&&a-n>=.85?(r=!0,!0):!1}return{open:s,update:o,leaks:t,reset(){t.length=0,n=null,r=!1},get dying(){return n!==null},get finished(){return r},blackout(a){return n===null?0:xl((a-n)/.7,0,1)}}}function tm(i,e,t){let n=Ht.textureSize,r=document.createElement("canvas");r.width=r.height=n;let s=r.getContext("2d"),o=new zt(r);o.flipY=!1,o.generateMipmaps=!1,o.minFilter=pn;let a={value:o};function c(y){let _=new qt({color:6519843,roughness:.12,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.08,emissive:2571784,emissiveIntensity:.15,transparent:y,opacity:y?.92:1,depthWrite:!y,side:Dt,envMapIntensity:1.4});return _.onBeforeCompile=P=>{P.uniforms.acidTime=t,P.uniforms.acidWet=a,P.vertexShader=`varying vec3 vWetWorld;
`+P.vertexShader,P.vertexShader=P.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 wetVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     wetVertex=instanceMatrix*wetVertex;
    #endif
    vWetWorld=(modelMatrix*wetVertex).xyz;`),P.fragmentShader=`uniform float acidTime;uniform sampler2D acidWet;varying vec3 vWetWorld;
`+P.fragmentShader,P.fragmentShader=P.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 flowUV=vWetWorld.xz;
    float eddy=sin(flowUV.x*14.0+sin(flowUV.y*9.0-acidTime*.7)+acidTime*.35)*sin(flowUV.y*17.0-acidTime*.8);
    float fine=sin(flowUV.x*71.0+flowUV.y*43.0-acidTime*2.5)*sin(flowUV.y*81.0-flowUV.x*29.0+acidTime*1.8);
    ${y?`float wet=texture2D(acidWet,(flowUV+vec2(4.1,4.2))/vec2(8.2,8.8)).r;
    wet-=.035*eddy+.018*fine;
    if(wet<.055)discard;
    float depth=smoothstep(.12,.95,wet);
    diffuseColor.rgb=mix(vec3(.31,.42,.085),diffuseColor.rgb*.62,depth);
    diffuseColor.a*=smoothstep(.055,.22,wet)*mix(.48,1.0,depth);`:""}
    diffuseColor.rgb*=.94+.07*eddy+.025*fine;`),P.fragmentShader=P.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
    float dx=.045*cos(vWetWorld.x*24.0+vWetWorld.z*12.0-acidTime*2.1)+.018*cos(vWetWorld.x*83.0-vWetWorld.z*36.0+acidTime*3.0);
    float dz=.035*sin(vWetWorld.z*27.0-vWetWorld.x*9.0+acidTime*1.7)+.012*sin(vWetWorld.z*79.0+acidTime*3.4);
    normal=normalize(normal+mat3(viewMatrix)*vec3(dx,0.0,dz));`)},_.customProgramCacheKey=()=>`acid-water-${y?"surface":"jet"}-v2`,_}let l=c(!0),h=c(!1),p=Ht.mobile?48:72,d=new bt(8.2,8.8,p,p);d.rotateX(-Math.PI/2),d.translate(0,0,.2);let f=d.attributes.position,g=d.attributes.uv;for(let y=0;y<f.count;y++){let _=f.getX(y),P=f.getZ(y);f.setY(y,i(_,P)+.006),g.setXY(y,(_+4.1)/8.2,(P+4.2)/8.8)}f.needsUpdate=!0,g.needsUpdate=!0,d.computeVertexNormals();let x=new lt(d,l);x.name="Continuous reflective acid film",x.renderOrder=4,x.receiveShadow=!0;let m=new lt(d,new vt({color:1053961,alphaMap:e,transparent:!0,opacity:.44,depthWrite:!1,alphaTest:.01}));m.name="Damp corroded edge beneath acid",m.position.y=-.002,m.renderOrder=3;let u=-1/0;function E(y,_){if(!(y-u<.1)){u=y,s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,n,n),s.globalCompositeOperation="lighten";for(let P of _)for(let b of P.points){let R=(b.x+4.1)/8.2*n,A=(b.z+4.2)/8.8*n,O=b.radius*n/8.2,v=s.createRadialGradient(R,A,0,R,A,O);v.addColorStop(0,"#fff"),v.addColorStop(.62,"#fff"),v.addColorStop(.85,"#999"),v.addColorStop(1,"#000"),s.fillStyle=v,s.fillRect(R-O,A-O,O*2,O*2)}o.needsUpdate=!0}}return{pool:x,scorch:m,jetMaterial:h,update:E,reset(){u=-1/0,s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,n,n),o.needsUpdate=!0},setEnvironment(y){for(let _ of[l,h])_.envMap=y,_.needsUpdate=!0}}}function nm(i,e,t){let n=new w,r=new ft;i.getWorldPosition(n),i.getWorldQuaternion(r);let s=new w(0,-.25,.6).applyQuaternion(r),o=9.81,a=e(n.x,n.z)+.009,c=Math.max(.01,n.y-a),l=(s.y+Math.sqrt(s.y*s.y+2*o*c))/o,h=n.clone().addScaledVector(s,l);h.y=e(h.x,h.z)+.009;let p=20,d=10,f=new Pt,g=new Float32Array((p+1)*(d+1)*3),x=new Float32Array(g.length),m=[];for(let A=1;A<=p;A++)for(let O=1;O<=d;O++){let v=A*(d+1)+O;m.push(v,v-d-2,v-1,v,v-d-1,v-d-2)}f.setAttribute("position",new un(g,3).setUsage(Un)),f.setAttribute("normal",new un(x,3).setUsage(Un)),f.setIndex(m);let u=new lt(f,t);u.name="Gravity-fed wavering drain stream",u.frustumCulled=!1,u.raycast=()=>{};let E=new w,y=new w,_=new w,P=new w,b=new w;function R(A,O){let v=Ge.smoothstep(O,0,.65);for(let T=0;T<=p;T++){let k=T/p,V=k*l;E.copy(n).addScaledVector(s,V),E.y-=.5*o*V*V,E.x+=Math.sin(A*19-k*13)*.002*k,E.z+=Math.sin(A*16-k*11)*.0015*k,y.copy(s),y.y-=o*V,y.normalize(),_.set(1,0,0).addScaledVector(y,-y.x).normalize(),P.crossVectors(_,y);let z=(.021-.01*k)*(1+.12*Math.sin(k*25-A*23))*v;for(let H=0;H<=d;H++){let ee=H/d*Math.PI*2,oe=(T*(d+1)+H)*3;b.copy(_).multiplyScalar(Math.cos(ee)).addScaledVector(P,Math.sin(ee)),b.toArray(x,oe),g[oe]=E.x+b.x*z,g[oe+1]=E.y+b.y*z,g[oe+2]=E.z+b.z*z}}f.attributes.position.needsUpdate=f.attributes.normal.needsUpdate=!0}return R(0,1),{mesh:u,origin:h,update:R}}function im({valves:i,floorSupport:e}){let t=new Ee;t.name="Corrosive green liquid, bubbles and contact smoke",t.userData.ignoreAcid=!0,t.visible=!1;let n=em(),r=new yt,s=new ft,o={value:0},a=new Map,c=new Map,l=[],h=-1/0,p=document.createElement("canvas");p.width=p.height=512;let d=p.getContext("2d");d.fillStyle="#000",d.fillRect(0,0,512,512);let f=new zt(p);f.generateMipmaps=!1,f.minFilter=pn,f.flipY=!1;let g={value:f};function x(N){if(c.has(N))return c.get(N);let ne=N.clone(),Q=N.onBeforeCompile,te=N.customProgramCacheKey();return ne.onBeforeCompile=F=>{Q.call(N,F),F.uniforms.acidBurn=g,F.vertexShader=`varying vec3 vAcidWorld;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 acidVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     acidVertex=instanceMatrix*acidVertex;
    #endif
    vAcidWorld=(modelMatrix*acidVertex).xyz;`),F.fragmentShader=`uniform sampler2D acidBurn;varying vec3 vAcidWorld;
`+F.fragmentShader,F.fragmentShader=F.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 acidUV=(vAcidWorld.xz+vec2(4.1,4.2))/vec2(8.2,8.8);
    float burned=texture2D(acidBurn,clamp(acidUV,0.0,1.0)).r*(1.0-smoothstep(.035,.32,vAcidWorld.y));
    float pitting=fract(sin(dot(floor(vAcidWorld*145.0),vec3(17.17,83.23,39.71)))*43758.5453);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.063,.025)+pitting*.035,burned*.94);
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`)},ne.customProgramCacheKey=()=>te+"-acid-corrosion-v1",c.set(N,ne),ne}function m(N){let ne=new Dn;function Q(te){if(!te.userData.ignoreAcid){if(te.isMesh&&te.material&&(ne.setFromObject(te),ne.min.y<.4&&ne.max.y>-.01)){ne.max.y>.02&&ne.max.y<.65&&l.push(ne.clone());let F=ie=>ie.isMeshStandardMaterial||ie.isMeshBasicMaterial||ie.isMeshToonMaterial?x(ie):ie;te.material=Array.isArray(te.material)?te.material.map(F):F(te.material)}for(let F of te.children)Q(F)}}for(let te of N)te.updateWorldMatrix(!0,!0),Q(te)}let u=tm(e,f,o);t.add(u.scorch,u.pool);let E=new vn(new Jt(1,10,7),new qt({color:10530404,roughness:.13,clearcoat:1,transparent:!0,opacity:.72,depthWrite:!1}),54);E.instanceMatrix.setUsage(Un),E.frustumCulled=!1,E.count=0,t.add(E);let y=new vn(new Jt(1,8,6),u.jetMaterial,42);y.instanceMatrix.setUsage(Un),y.frustumCulled=!1,y.count=0,y.name="Small falling splash droplets",t.add(y);let _=new Vr(.9,1,32);_.rotateX(-Math.PI/2);let P=new ds(new Float32Array(12),1);_.setAttribute("rippleAlpha",P);let b=new vt({color:11978123,transparent:!0,opacity:.32,depthWrite:!1,side:Dt});b.onBeforeCompile=N=>{N.vertexShader=`attribute float rippleAlpha;varying float vRippleAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRippleAlpha=rippleAlpha;`),N.fragmentShader=`varying float vRippleAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vRippleAlpha;`)};let R=new vn(_,b,12);R.instanceMatrix.setUsage(Un),R.frustumCulled=!1,R.count=0,R.renderOrder=6,R.name="Expanding impact rings",t.add(R);let A=document.createElement("canvas");A.width=A.height=128;let O=A.getContext("2d");for(let N=0;N<7;N++){let ne=64+Math.sin(N*2.4)*23,Q=64+Math.cos(N*3.1)*21,te=O.createRadialGradient(ne,Q,0,ne,Q,36);te.addColorStop(0,"rgba(220,231,199,.3)"),te.addColorStop(1,"rgba(220,231,199,0)"),O.fillStyle=te,O.fillRect(0,0,128,128)}let v=new zt(A),T=new bt(1,1),k=new ds(new Float32Array(84),1);T.setAttribute("smokeAlpha",k);let V=new vt({map:v,transparent:!0,opacity:.27,depthWrite:!1,color:12699827,side:Dt});V.onBeforeCompile=N=>{N.vertexShader=`attribute float smokeAlpha;varying float vSmokeAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeAlpha=smokeAlpha;`),N.fragmentShader=`varying float vSmokeAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vSmokeAlpha;`)};let z=new vn(T,V,84);z.name="Smoke rising from corroding surfaces",z.instanceMatrix.setUsage(Un),z.frustumCulled=!1,z.count=0,z.renderOrder=12,t.add(z),t.traverse(N=>{N.isMesh&&(N.raycast=()=>{})});function H(N,ne){let Q=e(N,ne);for(let te of l)N>=te.min.x&&N<=te.max.x&&ne>=te.min.z&&ne<=te.max.z&&(Q=Math.max(Q,Math.min(.27,te.max.y)));return Q}function ee(N,ne,Q=!1){let te=i[N];if(!te||Q||n.dying||n.leaks.some(ie=>ie.index===N))return!1;let F=nm(te.outlet,e,u.jetMaterial);return n.open(N,F.origin,ne,Q)?(F.mesh.visible=!1,t.add(F.mesh),a.set(N,F),t.visible=!0,!0):(F.mesh.geometry.dispose(),!1)}function oe(N){if(!(N-h<.1)){h=N;for(let ne of n.leaks)for(let Q of ne.points){let te=(Q.x+4.1)/8.2*512,F=(Q.z+4.2)/8.8*512,ie=Q.radius*512/8.2*1.18,q=d.createRadialGradient(te,F,ie*.45,te,F,ie);q.addColorStop(0,"rgba(255,255,255,.13)"),q.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=q,d.fillRect(te-ie,F-ie,ie*2,ie*2)}f.needsUpdate=!0}}function se(N,ne,Q,te,F=!1){if(!n.leaks.length)return!1;let ie=n.update(N,ne,Q),q=F?0:N;o.value=q,te.getWorldQuaternion(s);let W=0,Z=0,ge=0,we=0;for(let pe of n.leaks){i[pe.index].setOpen(F?1:Ge.smootherstep(pe.progress,0,1));let re=a.get(pe.index);if(re.mesh.visible=pe.points.length>0,re.update(q,pe.progress),!!pe.points.length){for(let L=0;L<18;L++){let xe=pe.points[(L*17+pe.index*5)%pe.points.length],Re=(q*.9+L*.618)%1,ve=L*2.399,be=xe.radius*.57;r.position.set(xe.x+Math.cos(ve)*be,e(xe.x,xe.z)+.008+Math.sin(Re*Math.PI)*.005,xe.z+Math.sin(ve)*be);let Le=(.005+L%4*.0025)*Math.sin(Re*Math.PI);r.scale.set(Le,Le*.45,Le),r.quaternion.identity(),r.updateMatrix(),E.setMatrixAt(W++,r.matrix)}for(let L=0;L<14;L++){let xe=(q*2.7+L*.618)%1,Re=L*2.399+pe.index,ve=.015+xe*(.07+L%3*.02),be=.045+L%4*.012;r.position.set(pe.origin.x+Math.cos(Re)*ve,pe.origin.y+4*be*xe*(1-xe),pe.origin.z+Math.sin(Re)*ve);let Le=(.003+L%3*.0015)*(1-xe*.45);r.scale.set(Le,Le*(1.3+xe),Le),r.quaternion.identity(),r.updateMatrix(),y.setMatrixAt(ge++,r.matrix)}for(let L=0;L<4;L++){let xe=(q*1.6+L*.25)%1,Re=.018+xe*.16;r.position.set(pe.origin.x,e(pe.origin.x,pe.origin.z)+.01,pe.origin.z),r.quaternion.identity(),r.scale.set(Re,1,Re*.92),r.updateMatrix(),R.setMatrixAt(we,r.matrix),P.setX(we++,Math.sin(xe*Math.PI)*(1-xe))}for(let L=0;L<16;L++){let xe=L*7%Math.min(35,pe.points.length),Re=pe.points[Math.max(0,pe.points.length-1-xe)],ve=(q*.46+L*.381)%1,be=L*2.4+pe.index,Le=Re.radius*(.45+ve*.5),Ce=.075+ve*.22;r.position.set(Re.x+Math.cos(be)*Le+Math.sin(q+L)*ve*.06,H(Re.x,Re.z)+.015+ve*.34,Re.z+Math.sin(be)*Le),r.quaternion.copy(s),r.rotateZ(L*.9+ve*.4),r.scale.set(Ce,Ce*1.5,1),r.updateMatrix(),z.setMatrixAt(Z,r.matrix),k.setX(Z++,Math.sin(ve*Math.PI)*.58)}}}E.count=W,z.count=Z,y.count=ge,R.count=we;for(let pe of[E,z,y,R])pe.instanceMatrix.needsUpdate=!0;return k.needsUpdate=!0,P.needsUpdate=!0,u.update(N,n.leaks),oe(N),ie}function de(){n.reset(),u.reset(),t.visible=!1,E.count=z.count=y.count=R.count=0;for(let N of a.values())t.remove(N.mesh),N.mesh.geometry.dispose();a.clear();for(let N of i)N.setOpen(0);d.clearRect(0,0,512,512),d.fillStyle="#000",d.fillRect(0,0,512,512),f.needsUpdate=!0,h=-1/0}return{group:t,open:ee,update:se,reset:de,bindTargets:m,setEnvironment:u.setEnvironment,blackout:N=>n.blackout(N),get dying(){return n.dying},get active(){return n.leaks.length>0}}}function rm(i,e){let t=new Ee;t.name="Abandoned technology office";let n=[],r=[],s=M=>(n.push(M),M),o=87021,a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(M,C)=>M+(C-M)*a();function l(M=512){let C=document.createElement("canvas");return C.width=C.height=M,[C,C.getContext("2d")]}function h(M){let C=new zt(M);return C.colorSpace=xt,C.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),C}function p(M,C,U,B,G,Y){let ue=M.createRadialGradient(C,U,0,C,U,B);ue.addColorStop(0,`rgba(${G},${Y})`),ue.addColorStop(1,`rgba(${G},0)`),M.fillStyle=ue,M.fillRect(C-B,U-B,B*2,B*2)}function d(M,C,U,B,G){for(let Y=0;Y<U;Y++)M.fillStyle=`rgba(${B},${a()*G})`,M.fillRect(a()*C,a()*C,c(.4,2.2),c(.4,2))}function f(M,C="paint"){let[U,B]=l();B.fillStyle=M,B.fillRect(0,0,512,512);for(let G=0;G<210;G++)p(B,a()*512,a()*512,c(4,70),G%3?"27,33,23":"110,83,48",c(.025,.15));if(d(B,512,12e3,"18,25,18",.24),d(B,512,4e3,"200,192,159",.18),C==="wood")for(let G=0;G<550;G++){B.strokeStyle=`rgba(36,29,17,${c(.02,.16)})`,B.lineWidth=c(.4,2);let Y=a()*512;B.beginPath(),B.moveTo(0,Y),B.bezierCurveTo(170,Y+c(-12,12),340,Y+c(-12,12),512,Y),B.stroke()}if(C==="metal")for(let G=0;G<250;G++)p(B,a()*512,a()*512,c(2,18),"112,56,24",c(.1,.5));for(let G=0;G<80;G++){B.strokeStyle=`rgba(197,190,160,${c(.08,.3)})`,B.lineWidth=c(.3,1.3);let Y=a()*512,ue=a()*512;B.beginPath(),B.moveTo(Y,ue),B.lineTo(Y+c(3,50),ue+c(-2,4)),B.stroke()}return h(U)}let g=f("#8b8c77"),x=f("#b2b09a"),m=f("#817157","wood"),u=f("#4e5550","metal"),E=f("#44534b"),y=f("#66695a"),_=(M,C=.88,U=null,B=0)=>new Fe({color:M,roughness:C,map:U,bumpMap:U,bumpScale:U?.008:0,metalness:B}),P=_(16777215,.98,g),b=_(16777215,.86,m),R=_(16777215,.8,x),A=_(16777215,.73,u,.42),O=_(16777215,.95,E),v=_(1514521,.86),T=_(1053970,.95),k=_(16777215,.98,y),V=_(8555654,.4,null,.8);function z(M,C,U=t){let B=new lt(M,C);return B.castShadow=!0,B.receiveShadow=!0,U.add(B),B}function H(M,C,U=A,B=t){let G=z(new Et(...M),U,B);return G.position.set(...C),G}let ee=new Jt(1,20,12);function oe(M,C,U,B=t){let G=z(ee,U,B);return G.scale.set(...M),G.position.set(...C),G}function se(M,C,U,B=A,G=t,Y=12){let ue=z(new Ut(M,M,C,Y),B,G);return ue.position.set(...U),ue}function de(M,C,U=.015,B=A,G=t){let Y=new w(...M),ue=new w(...C),Xe=ue.clone().sub(Y),et=se(U,Xe.length(),Y.clone().add(ue).multiplyScalar(.5).toArray(),B,G);return et.quaternion.setFromUnitVectors(new w(0,1,0),Xe.normalize()),et}function N(M,C=.008,U=v,B=t){let G=new Xt(M.map(ue=>new w(...ue))),Y=z(new on(G,Math.max(20,M.length*8),C,6,!1),U,B);return B===t&&M.some(ue=>ue[1]<.06)&&r.push(Y),Y}function ne(M,C,U,B=.025){B=Math.min(B,M*.45,C*.45);let G=new wt,Y=M/2,ue=C/2;G.moveTo(-Y+B,-ue),G.lineTo(Y-B,-ue),G.quadraticCurveTo(Y,-ue,Y,-ue+B),G.lineTo(Y,ue-B),G.quadraticCurveTo(Y,ue,Y-B,ue),G.lineTo(-Y+B,ue),G.quadraticCurveTo(-Y,ue,-Y,ue-B),G.lineTo(-Y,-ue+B),G.quadraticCurveTo(-Y,-ue,-Y+B,-ue);let Xe=Math.min(.012,M/6,C/6,U/6),et=new en(G,{depth:U-Xe*2,bevelEnabled:!0,bevelSize:Xe,bevelThickness:Xe,bevelSegments:2,steps:1,curveSegments:4});return et.translate(0,0,-U/2+Xe),et}function Q(M,C,U,B=t){let G=z(ne(...M),U,B);return G.position.set(...C),G}function te(M,C,U,B=!1){let[G,Y]=l(1024);for(let Xe=0;Xe<290;Xe++)p(Y,a()*1024,B?a()*1024:a()<.6?c(600,1060):a()*1024,c(12,140),"24,30,19",c(.03,.26));if(!B){let Xe=Y.createLinearGradient(0,0,0,1024);Xe.addColorStop(0,"rgba(29,35,24,.4)"),Xe.addColorStop(.3,"rgba(29,35,24,0)"),Xe.addColorStop(.75,"rgba(29,35,24,.07)"),Xe.addColorStop(1,"rgba(23,30,21,.72)"),Y.fillStyle=Xe,Y.fillRect(0,0,1024,1024);for(let et=0;et<80;et++){let Lt=a()*1024,rn=a()*220;Y.strokeStyle=`rgba(62,51,30,${c(.03,.26)})`,Y.lineWidth=c(1,6),Y.beginPath(),Y.moveTo(Lt,rn),Y.lineTo(Lt+c(-8,8),rn+c(80,750)),Y.stroke()}}d(Y,1024,17e3,"16,25,17",.28);let ue=z(new bt(M,C),new Fe({map:h(G),transparent:!0,depthWrite:!1,roughness:1}),U);return ue.castShadow=!1,ue}H([7.8,.15,8.6],[0,-.075,.2],k);let F=te(7.8,8.6,t,!0);F.rotation.x=-Math.PI/2,F.position.set(0,.003,.2);let ie=H([7.8,3.35,.16],[0,1.675,-4.08],P),q=H([.16,3.35,8.6],[-3.98,1.675,.2],_(8556677,.98,g));H([.16,1.1,8.6],[3.98,.55,.2],P),H([.16,.65,8.6],[3.98,3.025,.2],P),H([.16,1.6,1.2],[3.98,1.9,-3.4],P),H([.16,1.6,4.8],[3.98,1.9,2.1],P),te(7.8,3.35,t).position.set(0,1.675,-3.99);let Z=te(8.6,3.35,t);Z.rotation.y=Math.PI/2,Z.position.set(-3.89,1.675,.2);for(let M=0;M<9;M++)H([.012,2.2,.014],[-3.85+M*.96,1.66,-3.977],A);H([7.8,.045,.035],[0,.58,-3.96],A),H([7.8,.045,.035],[0,2.76,-3.96],A);for(let M of[-3.86,3.86])H([.045,.13,8.6],[M,.065,.2],v);H([7.8,.13,.04],[0,.065,-3.95],v);for(let M=0;M<26;M++){let C=new wt,U=c(-3.65,3.65),B=c(.24,3.1),G=c(.05,.22),Y=c(.05,.26);for(let Xe=0;Xe<9;Xe++){let et=Xe/9*Math.PI*2,Lt=c(.6,1),rn=U+Math.cos(et)*G*Lt,Yt=B+Math.sin(et)*Y*Lt;Xe?C.lineTo(rn,Yt):C.moveTo(rn,Yt)}C.closePath();let ue=z(new Wi(C),_(M%3?5199175:11644305,.99));ue.position.z=-3.972,ue.castShadow=!1}let ge=H([7.8,.1,8.6],[0,3.36,.2],v);for(let M=-3.6;M<3.9;M+=1.2)H([.028,.032,8.6],[M,3.12,.2],A);for(let M=-3.9;M<4.5;M+=1.2)H([7.8,.032,.028],[0,3.12,M],A);let we=_(10132616,.98,g);for(let M=-3;M<3.9;M+=1.2)for(let C=-3.3;C<4.5;C+=1.2){if(a()<.25)continue;let U=H([1.15,.035,1.15],[M,3.145,C],we);a()<.12&&(U.rotation.z=c(-.13,.13),U.position.y-=.06)}for(let M=0;M<5;M++)N([[-2+M*.45,3.3,-1.6],[-1.9+M*.45,2.8,-1.5],[-1.7+M*.4,2.53,-1.6],[-1.3+M*.35,3.29,-1.8]],.009,v);let pe=new Ee;pe.position.set(3.88,1.9,-1.5),pe.rotation.y=-Math.PI/2,t.add(pe);let[re,L]=l();L.fillStyle="#778c88",L.fillRect(0,0,512,512);for(let M=0;M<15;M++){let C=M*43,U=c(25,60),B=c(70,290);L.fillStyle=M%2?"#4b5d58":"#526560",L.fillRect(C,512-B,U,B);for(let G=0;G<5;G++)L.fillStyle="#879186",L.fillRect(C+8,512-B+18+G*34,4,10)}let xe=z(new bt(2.8,1.6),new vt({map:h(re),color:3622209}),pe);xe.position.z=-.13,xe.castShadow=!1;for(let M of[-1.43,0,1.43])H([.055,1.7,.09],[M,0,.025],A,pe);for(let M of[-.83,.83])H([2.92,.055,.09],[0,M,.025],A,pe);let Re=_(10336426,.25,null,.25);Re.transparent=!0,Re.opacity=.18,Re.side=Dt;for(let M of[-.72,.72]){let C=H([1.37,1.55,.008],[M,0,.04],Re,pe);C.castShadow=!1}for(let M=0;M<17;M++){if([5,9,14].includes(M))continue;let C=H([2.77,.047,.015],[0,.73-M*.086,.11],_(8160114,.82,x),pe);C.rotation.x=.35,(M===7||M===12)&&(C.rotation.z=M===7?.035:-.05,C.rotation.x=.9)}for(let M of[-.86,.86])N([[M,.8,.15],[M,.12,.16],[M,-.77,.15]],.005,v,pe);N([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.1,.18]],.006,v,pe);let ve=T0(i);o=577513849;let be=ne(.77,.45,.035,.012),Le=_(7042164,.38,null,.7);function Ce(M,C,U=0,B="cracked",G=1){let Y=new Ee;Y.position.set(...C),Y.rotation.y=U,Y.scale.setScalar(G),M.add(Y),Y.name="Damaged widescreen monitor",z(be,v,Y).position.set(0,.375,0),Q([.31,.018,.2],[0,.013,-.025],Le,Y),H([.055,.24,.025],[0,.14,-.035],Le,Y),ve.add(Y,B),H([.18,.16,.032],[0,.36,-.03],Le,Y),oe([.004,.004,.003],[.35,.163,.022],B==="live"?new vt({color:9223008}):v,Y);for(let et=0;et<11;et++)H([.015,.002,.003],[-.25+et*.05,.585,-.02],A,Y);let Xe=N([[.1,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,v,Y);return Xe.name="Monitor power cable",Xe.userData.ignoreFloorContact=!0,Y}let D=new Et(.023,.008,.023);function S(M,C,U=0){let B=new Ee;B.position.set(...C),B.rotation.y=U,M.add(B),Q([.47,.035,.18],[0,0,0],R,B);let G=new vn(D,_(6844e3,.8),56);for(let Y=0;Y<56;Y++){let ue=new yt;ue.position.set(-.206+Y%14*.031,.024,-.065+Math.floor(Y/14)*.036),ue.updateMatrix(),G.setMatrixAt(Y,ue.matrix)}return B.add(G),H([.14,.008,.022],[0,.024,.07],v,B),B}function K(M,C,U=0,B=!1){let G=new Ee;G.position.set(...C),G.rotation.y=U,M.add(G),Q([.25,.53,.46],[0,.265,0],R,G);for(let Y=.32;Y<.49;Y+=.065)H([.195,.042,.012],[0,Y,.239],v,G);for(let Y=0;Y<7;Y++)H([.16,.008,.012],[0,.055+Y*.025,.239],A,G);if(B){H([.012,.42,.35],[.139,.27,0],v,G);for(let Y=0;Y<3;Y++)H([.015,.09,.25],[.15,.16+Y*.105,-.02],_(2706228,.83),G)}return G}function fe(M,C,U,B=0){let G=new Ee;G.position.set(M,0,C),G.rotation.y=B,t.add(G),H([U,.075,.86],[0,.82,0],b,G),H([U,.035,.025],[0,.794,.443],A,G);for(let Y of[-U/2+.08,U/2-.08])H([.048,.79,.68],[Y,.39,0],A,G),H([.24,.035,.74],[Y,.018,0],v,G);return H([U-.16,.19,.035],[0,.45,-.35],A,G),G}let ye=fe(-1,-3.37,5.4);for(let M=0;M<6;M++){let C=-2.24+M*.84;Ce(ye,[C,.86,-.05],c(-.13,.13),M===3?"live":M%2?"hole":"cracked",c(.88,1.04)),S(ye,[C+.03,.87,.3],c(-.16,.16)),M%2===0&&K(ye,[C+.18,0,-.1],c(-.1,.1),!0)}let _e=fe(-1.1,-2.25,2.6,0);for(let M=0;M<3;M++)Ce(_e,[-.84+M*.83,.86,-.1],c(-.2,.2),M===0?"live":"hole",.9),S(_e,[-.84+M*.83,.87,.3],c(-.2,.2));let ke=Ce(t,[-.8,.31,-1.45],.42,"hole",.95);ke.rotation.set(-1.38,.42,.21),s(ke);let Ue=Ce(t,[-2.72,.24,2.58],-.45,"cracked",.73);Ue.rotation.x=-.56,Ue.rotation.z=.24,s(Ue);let Ve=K(t,[-2.22,.13,-.72],.35,!0);Ve.rotation.z=Math.PI/2,s(Ve);for(let M=0;M<3;M++)s(K(t,[-3.32,0,-2.45+M*.31],-.18,!0)).scale.setScalar(.9);let nt=o,De=_(16777215,.78,f("#afb4a9","metal"),.22),$=_(6449762,.7,null,.25),me=_(3225908,.86,E),Ae=_(11383205,.82),Pe=_(6845548,.46,null,.73);function Se(M=0){let[C,U]=l(512);U.lineWidth=1.8;for(let B=0;B<512;B+=7)U.strokeStyle=B%21?"#a0a59a":"#686f65",U.beginPath(),U.moveTo(B,0),U.lineTo(B,512),U.stroke();for(let B=0;B<512;B+=6)U.strokeStyle=B%18?"#7f897e":"#b0b4a5",U.lineWidth=B%18?1.6:2.1,U.beginPath(),U.moveTo(0,B),U.lineTo(512,B),U.stroke();if(M){U.globalCompositeOperation="destination-out",U.fillStyle="#000",U.beginPath();let B=M===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];B.forEach(([G,Y],ue)=>ue?U.lineTo(G,Y):U.moveTo(G,Y)),U.closePath(),U.fill(),U.lineWidth=3;for(let G=0;G<16;G++){let[Y,ue]=B[G%B.length];U.beginPath(),U.moveTo(Y,ue),U.lineTo(Y+c(-24,24),ue+c(-18,18)),U.stroke()}}return new Fe({map:h(C),color:14803929,roughness:.93,side:Dt,alphaTest:.3,alphaToCoverage:!0})}let he=[Se(),Se(1),Se(2)];function We(M,C,U,B,G=0){let ue=new Xt(M.map(fn=>new w(fn[0],fn[1],0)),!0,"centripetal").getSpacedPoints(96).slice(0,-1),Xe=[],et=[],Lt=[],rn=12,Yt=ue.length,mi=Math.min(...ue.map(fn=>fn.x)),zi=Math.max(...ue.map(fn=>fn.x)),Oo=Math.min(...ue.map(fn=>fn.y)),i1=Math.max(...ue.map(fn=>fn.y));for(let fn=0;fn<=rn;fn++)for(let br=0;br<Yt;br++){let Bo=fn/rn,Ya=C[0]+(ue[br].x-C[0])*Bo,ko=C[1]+(ue[br].y-C[1])*Bo;if(Xe.push(...U(Ya,ko,Bo)),et.push((Ya-mi)/(zi-mi),(ko-Oo)/(i1-Oo)),fn<rn){let ih=fn*Yt+br,rh=fn*Yt+(br+1)%Yt;Lt.push(ih,rh,ih+Yt,rh,rh+Yt,ih+Yt)}}let zo=new Pt;zo.setAttribute("position",new ht(Xe,3)),zo.setAttribute("uv",new ht(et,2)),zo.setIndex(Lt),zo.computeVertexNormals();let r1=z(zo,he[G],B);r1.customDepthMaterial=new la({depthPacking:md,map:he[G].map,alphaTest:.3,side:Dt});for(let[fn,br,Bo]of[[1,.025,De],[.925,.007,$]]){let Ya=ue.map(ko=>new w(...U(C[0]+(ko.x-C[0])*fn,C[1]+(ko.y-C[1])*fn,fn)));z(new on(new Xt(Ya,!0),96,br,8,!0),Bo,B)}}function X(M,C=1){let U=new Ee;U.name="Torn mesh back and lumbar support",M.add(U),We([[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.6],[0,.615],[.17,.6],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]],[0,.3],(G,Y,ue)=>[G,Y,-.11*Y/.615+.035*(1-ue*ue)],U,C),N([[0,-.09,-.07],[0,.13,-.08],[-.17,.3,-.09],[-.23,.37,-.09]],.018,De,U),N([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,De,U);for(let G of[.12,.235])oe([.048,.073,.024],[0,G,-.055],me,U);if(N([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,$,U),C)for(let G=0;G<5;G++)N([[-.13+G*.012,.2,-.015],[-.12+G*.012,.15,.001],[-.14+G*.012,.1,-.02]],.0016,he[0],U);return U}function Te(M,C,U=!1){let B=new Ee;M.add(B);let G=C*.295;if(N([[C*.22,.46,-.17],[G,.53,-.2],[G,.67,-.17],[G,.72,-.07]],.023,De,B),U)return oe([.025,.011,.026],[G,.72,-.07],Ae,B),B;let Y=oe([.058,.034,.15],[G,.745,.01],me,B);return Y.rotation.z=C*.06,de([G,.68,-.085],[G,.734,.045],.019,$,B),B}function ae(M,C,U,B,G=0){let Y=new Ee;Y.position.set(C,U,B),Y.rotation.y=G,M.add(Y),de([0,.028,0],[0,.078,.015],.012,Pe,Y);for(let ue of[-1,1]){let Xe=se(.039,.022,[ue*.021,0,0],T,Y,16);Xe.rotation.z=Math.PI/2,oe([.002,.018,.018],[ue*.033,0,0],$,Y)}return Y}function Me(M,C=-1){let U=new Ee;U.name="Five-spoke caster base",M.add(U),se(.057,.09,[0,.16,0],De,U,16),se(.031,.2,[0,.28,0],Pe,U,16);for(let B=0;B<5;B++){let G=B/5*Math.PI*2+.25,Y=Math.cos(G),ue=Math.sin(G);if(B===C){de([0,.16,0],[Y*.13,.135,ue*.13],.025,De,U),oe([.024,.014,.018],[Y*.13,.135,ue*.13],Ae,U);continue}N([[0,.18,0],[Y*.14,.145,ue*.14],[Y*.31,.092,ue*.31]],.022,De,U),ae(U,Y*.31,.04,ue*.31,G)}return U}function He(M,C,U,B){return M.position.set(C,0,U),M.rotation.set(...B),M.updateMatrixWorld(!0),s(M)}function ze(M,C,U,B={}){let G=new Ee;G.name="Broken Aeron-style mesh chair",t.add(G),B.noBase||Me(G,B.missingSpoke??-1),Q([.24,.095,.27],[0,.405,-.035],$,G),se(.045,.13,[0,.405,0],De,G,16),de([-.14,.41,.015],[-.245,.405,.05],.012,Pe,G),oe([.035,.016,.055],[-.25,.405,.055],me,G),oe([.055,.025,.04],[.18,.407,-.04],me,G),We([[-.2,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.2,-.23],[0,-.25]],[0,0],(ue,Xe,et)=>[ue,.51-.035*(1-et*et)-.025*Math.max(0,Xe/.25),Xe],G,B.seatTear??1);for(let ue of[-1,1])N([[ue*.12,.41,-.14],[ue*.22,.46,-.2],[ue*.24,.49,-.15]],.023,De,G),Te(G,ue,ue===B.brokenArm);if(!B.noBack){let ue=X(G,B.backTear??1);ue.position.set(0,.55,-.22),ue.rotation.set(B.backLean??0,0,B.backTwist??0)}return He(G,M,C,U)}ze(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2}),ze(-.3,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16}),ze(2.75,3.3,[-.55,-.8,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.2}),ze(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:!0}),ze(1.35,1.42,[-.3,-.5,-1.28],{noBase:!0,brokenArm:-1,backTwist:-.14,backTear:2});let ut=Me(t,1);ut.name="Detached chair base",He(ut,2.35,2.53,[2.7,.36,.22]);let It=X(t,2);It.name="Snapped mesh backrest",He(It,-.75,2.3,[-1.6,.22,-.4]);let Ot=Te(t,1);Ot.name="Broken chair arm",He(Ot,1.4,2.62,[1.48,.71,.15]),s(ae(t,2.37,.045,2.84,.7)),s(ae(t,-2.15,.045,.95,-.4)),o=nt;for(let M=0;M<22;M++)a();let mt=fe(2.55,-3.38,1.92);H([1.7,.72,.72],[0,.4,-.025],_(6713960,.94,m),mt);for(let M of[-.42,.42]){let C=H([.77,.24,.045],[M,.66,.37],b,mt);M>0&&(C.position.z=.51,C.rotation.z=-.04),de([M-.13,.66,.41],[M+.13,.66,.41],.014,A,mt)}let St=new Ee;St.position.set(-.27,.87,-.04),mt.add(St),Q([.49,.6,.37],[0,.3,0],A,St),H([.4,.35,.025],[0,.26,.2],v,St),Q([.34,.15,.06],[0,.5,.2],R,St),H([.12,.05,.008],[-.07,.515,.236],_(2243883,.4),St);for(let M of[-.08,.08])de([M,.38,.21],[M,.31,.26],.018,V,St);H([.37,.04,.23],[0,.045,.22],v,St);for(let M=0;M<7;M++)H([.017,.012,.19],[-.14+M*.047,.07,.22],V,St);let Kn=se(.12,.17,[0,.68,-.015],new Fe({color:5069384,transparent:!0,opacity:.55,roughness:.45}),St,24),Ki=H([.27,.022,.25],[.025,.78,-.015],v,St);Ki.rotation.z=.13;let Ui=_(12039066,.7,x);function ii(M,C,U=0){let B=new Ee;B.position.set(...C),B.rotation.z=U,M.add(B);let G=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(ue=>new Oe(...ue));z(new Br(G,24,0,Math.PI*1.9),Ui,B);let Y=z(new $t(.036,.008,8,20,Math.PI*1.6),Ui,B);return Y.rotation.x=Math.PI/2,Y.position.set(.066,.07,0),B}ii(St,[0,.07,.23]),ii(mt,[.46,.87,.25],1.25),ii(mt,[.64,.87,-.02]);let mn=_(3877398,.33),tt=z(new rr(.18,32),mn,mt);tt.rotation.x=-Math.PI/2,tt.position.set(.48,.862,.19),tt.scale.y=.65,tt.castShadow=!1,Q([.52,.83,.54],[3.28,.42,-2.4],R);let it=H([.49,.78,.045],[3.21,.43,-2.1],R);it.rotation.y=.24,H([.035,.23,.04],[3.04,.56,-2.065],A),H([.36,.8,.36],[3.39,.4,-1.72],R);let rt=se(.16,.4,[3.39,1.04,-1.72],new Fe({color:7378315,transparent:!0,opacity:.38,roughness:.34}),t,24);rt.rotation.z=.08;let Ye=new Ee;Ye.name="Broken lopsided foosball table",Ye.position.set(2.24,-.104,.03),Ye.rotation.set(0,-.18,-.22),t.add(Ye);let at=_(13812642,.87,m),Je=_(8099956,.92,E);H([1.18,.25,1.91],[0,.91,0],at,Ye),H([1.04,.025,1.74],[0,1.048,0],Je,Ye);for(let M of[-.61,.61])H([.1,.18,2.02],[M,1.12,0],at,Ye);H([1.14,.18,.08],[0,1.12,-.99],at,Ye);let dt=new wt;dt.moveTo(-.57,1.03),dt.lineTo(.57,1.03),dt.lineTo(.57,1.21),dt.lineTo(.23,1.21),dt.lineTo(.12,1.07),dt.lineTo(.02,1.15),dt.lineTo(-.09,1.07),dt.lineTo(-.16,1.21),dt.lineTo(-.57,1.21),dt.closePath();let gn=z(new en(dt,{depth:.08,bevelEnabled:!1}),at,Ye);gn.position.z=.95;for(let M of[-.99,.99])H([.3,.1,.012],[0,1.085,M+(M>0?-.045:.045)],v,Ye);for(let M of[-.47,.47])for(let C of[-.8,.8]){let U=M>0&&C>0,B=M>0;if(H([.11,U?.24:B?.57:.8,.12],[M,U?.68:B?.515:.4,C],A,Ye),U)for(let G=0;G<4;G++)H([.012,.09,.018],[M-.04+G*.023,.555,C+c(-.04,.04)],b,Ye).rotation.z=c(-.2,.2)}let dn=H([.11,.57,.12],[2.89,.09,.98],A);dn.rotation.set(.05,.37,1.42);let Bt=H([.45,.045,.08],[2.55,.045,1.32],at);Bt.rotation.y=.4;let I=[];function J(M,C){I.push(...M,...C)}for(let M of[-.8,.8])J([-.48,1.065,M],[.48,1.065,M]);for(let M of[-.48,.48])J([M,1.065,-.8],[M,1.065,.8]);J([-.48,1.065,0],[.48,1.065,0]);for(let M=0;M<48;M++){let C=M/48*Math.PI*2,U=(M+1)/48*Math.PI*2;J([Math.cos(C)*.19,1.065,Math.sin(C)*.19],[Math.cos(U)*.19,1.065,Math.sin(U)*.19])}let ce=new Pt;ce.setAttribute("position",new ht(I,3)),Ye.add(new ao(ce,new fs({color:9674366})));let le=[_(9124144,.8),_(10658186,.8)];for(let M=0;M<8;M++){let C=-.78+M*.223,U=M%2?1:-1;M===5?N([[-.91,1.21,C],[-.24,1.21,C],[.18,1.36,C+.13],[.91,1.17,C+.08]],.012,V,Ye):de([-.91,1.21,C],[.91,1.21,C],.012,V,Ye),M!==4&&de([U*.8,1.21,C],[U*1.02,1.21,C],.034,v,Ye);let B=M===0||M===7?1:M===1||M===6?2:3;for(let G=0;G<B;G++){if(M===3&&G===0||M===6&&G===1)continue;let Y=(G-(B-1)/2)*.29;H([.055,.1,.037],[Y,1.195,C],le[M%2],Ye),oe([.031,.035,.031],[Y,1.28,C],le[M%2],Ye),H([.06,.045,.045],[Y,1.11,C],le[M%2],Ye)}}oe([.024,.024,.024],[.46,1.09,.69],R,Ye),N([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.3],[.12,1.068,.23],[.48,1.068,.37]],.007,v,Ye);let j=H([.055,.13,.04],[.38,1.09,.51],le[0],Ye);j.rotation.z=Math.PI/2;for(let M of[-1.07,1.07]){de([-.32,1.27,M],[.32,1.27,M],.008,V,Ye);for(let C=0;C<5;C++)oe([.025,.03,.025],[-.25+C*.07,1.27,M],le[M>0?1:0],Ye)}let Ie=new Ee;Ie.name="MacBook Pro on the floor",Ie.position.set(.45,.027,2.18),Ie.rotation.y=Math.atan2(e.x-Ie.position.x,e.z-Ie.position.z),t.add(Ie);let Be=Ie.position.clone().add(new w(1.18,0,0).applyAxisAngle(new w(0,1,0),Ie.rotation.y)),Qe=k0(e,Be);t.add(Qe.group);let je=V0(Be);t.add(je.group),s(je.group);let ot=_(8884628,.35,null,.72),ct=_(1053975,.7);function Ke(M,C,U,B,G,Y,ue=!1){let Xe=Math.min(.012,M/6,C/6,U/6),et=z(ne(M-2*Xe,C-2*Xe,U,.026-Xe),G,Y);return et.position.set(...B),ue&&(et.rotation.x=-Math.PI/2),et}Ke(.88,.59,.026,[0,0,0],ot,Ie,!0),Ke(.66,.275,.003,[0,.0145,-.065],ct,Ie,!0);let At=se(.013,.77,[0,.02,-.281],v,Ie,20);At.rotation.z=Math.PI/2;let _t=new Ee;_t.position.set(0,.034,-.295),_t.rotation.x=Math.PI/2,Ie.add(_t),Ke(.88,.59,.018,[0,.295,0],ot,_t),Ke(.856,.566,.005,[0,.295,.01],ct,_t);for(let M of[-.34,.34])for(let C of[-.21,.21])oe([.025,.006,.025],[M,-.014,C],T,Ie);let Vt=document.createElement("canvas");Vt.width=256,Vt.height=384;let Pn=Vt.getContext("2d");Cd(Pn,28,42,200);let Nt=h(Vt),st=new Fe({map:Nt,transparent:!0,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:Nt,emissive:16777215,emissiveIntensity:.14}),Gt=z(new bt(.115,.1725),st,_t);Gt.name="Off-center Figma vinyl sticker",Gt.position.set(.265,.365,-.0108),Gt.rotation.set(0,Math.PI,-.14),Gt.castShadow=!1;let[Ne,Ze]=l(1024);Ne.height=640,Ze.fillStyle="#111b22",Ze.fillRect(0,0,1024,640),Ze.fillStyle="#222e36",Ze.fillRect(0,0,1024,38),Ze.fillRect(0,38,140,602),Ze.fillRect(894,38,130,602),Cd(Ze,15,6,17),Ze.font="13px sans-serif",Ze.fillStyle="#bac6ca",Ze.fillText("Figma / Wireframes",44,25);for(let M=0;M<7;M++)Ze.fillStyle=M===2?"#48616b":"#657a80",Ze.fillRect(18,85+M*34,85-M%3*18,3);for(let M=0;M<3;M++){let C=181+M*231;Ze.fillStyle="#b2bfbb",Ze.fillRect(C,118,197,390),Ze.fillStyle="#465b62",Ze.fillRect(C+12,137,173,19),Ze.fillRect(C+12,175,173,86),Ze.strokeStyle="#53696d",Ze.lineWidth=2,Ze.beginPath(),Ze.moveTo(C+12,175),Ze.lineTo(C+185,261),Ze.moveTo(C+185,175),Ze.lineTo(C+12,261),Ze.stroke();for(let U=0;U<5;U++)Ze.fillStyle="#82918f",Ze.fillRect(C+13,278+U*20,c(75,170),4);Ze.fillStyle="#526c72",Ze.fillRect(C+14,401,169,28),Ze.strokeStyle="#788c8d",Ze.strokeRect(C+14,447,78,39),Ze.strokeRect(C+105,447,78,39)}for(let M=0;M<12;M++)Ze.fillStyle="#50666e",Ze.fillRect(912,84+M*31,c(35,90),3);let wn=h(Ne),nn=new vt({map:wn,color:8360598}),ri=z(new bt(.823,.525),nn,_t);ri.position.set(0,.3,.013),ri.castShadow=!1,H([.076,.014,.002],[0,.556,.014],ct,_t),oe([.003,.003,.001],[0,.553,.0155],_(1978424,.2),_t);let[an,di]=l(512);an.height=64,di.font="22px sans-serif",di.textAlign="center",di.fillStyle="#9ca5a6",di.fillText("MacBook Pro",256,40);let Ts=z(new bt(.14,.018),new vt({map:h(an),transparent:!0}),_t);Ts.position.set(0,.025,.013),Ts.castShadow=!1;let[si,fi]=l(1024);fi.fillStyle="#151b1e",fi.fillRect(0,0,1024,1024),fi.strokeStyle="#3e494d",fi.fillStyle="#9ca5a6",fi.font="25px sans-serif",fi.textAlign="center";let zl=["1234567890-=","QWERTYUIOP[]","ASDFGHJKL;\u2019","ZXCVBNM,./"];for(let M=0;M<4;M++)for(let C=0;C<12;C++){let U=18+C*83,B=74+M*181;fi.strokeRect(U,B,72,145),fi.fillText(zl[M][C]||"",U+36,B+86)}fi.strokeRect(250,825,524,125);let Lo=z(new bt(.635,.257),new Fe({map:h(si),roughness:.7}),Ie);Lo.rotation.x=-Math.PI/2,Lo.position.set(0,.0165,-.065);let LE=Ke(.34,.17,.001,[0,.0135,.174],_(6714488,.44,null,.62),Ie,!0),hf=new vn(new rr(.0012,5),v,480);for(let M=0;M<480;M++){let C=new yt,U=M<240?-1:1,B=M%240;C.position.set(U*(.355+B%8*.006),.017,-.196+Math.floor(B/8)*.0085),C.rotation.x=-Math.PI/2,C.updateMatrix(),hf.setMatrixAt(M,C.matrix)}Ie.add(hf);for(let M of[-1,1])for(let C=0;C<3;C++)H([.003,.006,.035],[M*.444,.001,-.18+C*.065],ct,Ie);let Bl=new zn(9285310,0,1.4,2);Bl.position.set(0,.29,.14),_t.add(Bl);let Tg=nn.color.clone();nn.color.setScalar(0);let bs=!1,Ji=0,Ua=!1;function kl(M){_t.rotation.x=Ge.lerp(Math.PI/2,-.2,M);let C=Ge.smoothstep(M,.22,.72);nn.color.copy(Tg).multiplyScalar(C),Bl.intensity=.6*C}let uf={object:Ie,screen:ri,get isReady(){return Ji===1},get isOpen(){return bs},get openProgress(){return Ji},getLidGrip(M){return _t.updateWorldMatrix(!0,!1),_t.localToWorld(M.set(.12,.6,-.004))},setOpenProgress(M){Ua=!0,Ji=Ge.clamp(M,0,1),bs=Ji>0,kl(Ji)},open(){return bs?!1:(Ua=!1,bs=!0,!0)},close(){Ua=!1,bs=!1,Ji=0,kl(0)},update(M,C=!1){Ua||!bs||Ji===1||(Ji=C?1:Math.min(1,Ji+M/.95),kl(Ge.smootherstep(Ji,0,1)))}};function bg(){let[M,C]=l();C.fillStyle="#b2af94",C.fillRect(0,0,512,512),C.fillStyle="#4f584c";for(let U=0;U<35;U++){let B=35+U*12;C.fillRect(30,B,c(100,430),c(1,3))}return C.strokeStyle="rgba(64,54,28,.4)",C.lineWidth=4,C.beginPath(),C.arc(345,130,61,0,Math.PI*2),C.stroke(),d(C,512,8e3,"49,45,27",.16),h(M)}let Rg=_(16777215,.99,bg()),Ag=_(2836532,.88),Cg=[R,A,b,_(8619381,.97)],Vl=[],Gl=[];for(let M=0;M<82;M++){let C=c(-3.62,3.58),U=c(-3.75,4);Math.abs(C)<.65&&U<.8&&U>-.9&&(C-=1.2);let B=z(new bt(c(.13,.29),c(.17,.37),4,4),Rg),G=c(-.1,.1),Y=c(-.07,.07),ue=a()*Math.PI*2,Xe=c(.012,.038);B.rotation.set(-Math.PI/2,0,ue),B.position.set(C,.005,U),B.material.side=Dt,B.name="Paper resting on the floor";let et=B.geometry.attributes.position;for(let Lt=0;Lt<et.count;Lt++)et.setZ(Lt,Math.abs(Math.sin(et.getX(Lt)*33+G)*Math.sin(et.getY(Lt)*24+Y))*.0015+Xe*.008);Vl.push(B)}for(let M=0;M<95;M++){let C=c(-3.65,3.65),U=c(-3.7,4);Math.abs(C)<.8&&U>-.8&&U<1.3&&(C-=1.7);let B=H([c(.025,.17),c(.015,.065),c(.035,.2)],[C,c(.025,.055),U],Cg[M%4]);B.rotation.set(c(-.13,.13),a()*Math.PI*2,c(-.13,.13)),B.name="Fallen casing fragment",s(B)}for(let M=0;M<9;M++){let C=new Ee;C.position.set(c(-3,3),.028,c(-2,3)),C.rotation.y=a()*6,t.add(C),C.name="Loose circuit board",s(C),H([.18,.012,.24],[0,0,0],Ag,C);for(let U=0;U<4;U++)H([.035,.017,.05],[-.055+U%2*.1,.013,-.07+Math.floor(U/2)*.12],v,C)}for(let M=0;M<12;M++){let C=H([.09,.018,.09],[c(-3.5,3.5),.03,c(-3.4,3.7)],v);C.rotation.y=a()*6,H([.06,.003,.03],[0,.011,0],R,C),C.name="Broken key cap",s(C)}for(let M=0;M<14;M++){let C=H([c(.3,.7),.012,c(.3,.8)],[c(-3.4,3.4),.007,c(-3.5,3.7)],_(M%2?8948860:10197637,.98,E));C.rotation.y=c(-.15,.15),Gl.push(C)}let Gn=F0(Gl);function df(M,C,U){M.save(),M.lineCap="round";for(let[G,Y,ue,Xe]of U){for(let et=0;et<13;et++){let Lt=Y+et*Xe/12;M.strokeStyle=C,M.globalAlpha=c(.65,.94),M.lineWidth=c(12,27),M.beginPath(),M.moveTo(G+c(-18,35),Lt),M.quadraticCurveTo(G+ue*.45,Lt+c(-12,12),G+ue+c(-35,18),Lt+c(-8,8)),M.stroke()}M.globalAlpha=1;for(let et=0;et<8;et++)p(M,G+a()*ue,Y+a()*Xe,c(13,43),"54,66,61",c(.035,.09))}M.globalAlpha=1;for(let G=0;G<95;G++){let Y=a()*1024,ue=a()<.55?c(800,1045):a()*1024;p(M,Y,ue,c(14,95),G%3?"44,49,38":"103,77,42",c(.045,.16))}let B=M.createLinearGradient(0,0,0,1024);B.addColorStop(0,"rgba(43,44,32,.30)"),B.addColorStop(.13,"rgba(43,44,32,0)"),B.addColorStop(.77,"rgba(43,44,32,0)"),B.addColorStop(1,"rgba(44,40,27,.38)"),M.fillStyle=B,M.fillRect(0,0,1024,1024);for(let G=0;G<23;G++){let Y=a()*1024,ue=c(8,105);M.strokeStyle=`rgba(86,67,38,${c(.06,.17)})`,M.lineWidth=c(1.5,6),M.beginPath(),M.moveTo(Y,ue),M.bezierCurveTo(Y+4,ue+60,Y-3,ue+125,Y+c(-5,5),ue+c(130,460)),M.stroke()}d(M,1024,12e3,"36,42,30",.21),M.restore()}function Wl(M){let[C,U]=l(1024);U.fillStyle="#bfc4b6",U.fillRect(0,0,1024,1024),U.strokeStyle="#304a4d",U.fillStyle="#304a4d",U.lineWidth=4,U.font="28px sans-serif",U.fillText(M?"ONBOARDING / FIRST RUN":"WORKSPACE / DASHBOARD",45,67);function B(G,Y){U.beginPath(),U.moveTo(G,Y),U.lineTo(G+50,Y),U.lineTo(G+37,Y-11),U.moveTo(G+50,Y),U.lineTo(G+37,Y+11),U.stroke()}if(M)for(let G=0;G<3;G++){let Y=48+G*330;U.strokeRect(Y,154,253,593),U.strokeRect(Y+14,174,225,544),U.fillRect(Y+80,187,91,5),U.strokeRect(Y+32,225,189,130),U.beginPath(),U.moveTo(Y+32,225),U.lineTo(Y+221,355),U.moveTo(Y+221,225),U.lineTo(Y+32,355),U.stroke();for(let ue=0;ue<4;ue++)U.fillRect(Y+31,397+ue*25,170-ue%2*41,4);U.strokeRect(Y+32,524,188,54),U.strokeRect(Y+32,602,188,54),G<2&&B(Y+266,451),U.font="23px sans-serif",U.fillText(["01 / welcome","02 / connect","03 / explore"][G],Y+23,803)}else for(let G=0;G<2;G++){let Y=45+G*498;U.strokeRect(Y,165,436,525),U.strokeRect(Y,165,436,44),U.strokeRect(Y+14,223,87,448);for(let ue=0;ue<5;ue++)U.fillRect(Y+25,246+ue*40,59-ue%2*17,4);U.strokeRect(Y+118,230,297,133),U.beginPath(),U.moveTo(Y+135,343),U.lineTo(Y+171,300),U.lineTo(Y+212,325),U.lineTo(Y+270,265),U.lineTo(Y+328,293),U.lineTo(Y+397,248),U.stroke();for(let ue=0;ue<2;ue++)for(let Xe=0;Xe<2;Xe++){U.strokeRect(Y+118+Xe*154,385+ue*145,139,124),U.fillRect(Y+131+Xe*154,404+ue*145,92,5);for(let et=0;et<3;et++)U.fillRect(Y+131+Xe*154,431+ue*145+et*18,103-et*13,3)}}return U.strokeStyle="#7d453b",U.lineWidth=3,U.beginPath(),U.ellipse(510,905,357,48,-.02,0,Math.PI*2),U.stroke(),U.font="25px sans-serif",U.fillStyle="#7d453b",U.fillText(M?"simplify the first step / test again":"less noise \u2014 keep the primary action visible",180,915),df(U,"#bfc4b6",M?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]),h(C)}for(let M=0;M<2;M++){let C=new Ee;C.name="Whiteboard with interface wireframes",C.position.set(M?2.25:.12,2.2,-3.94),C.rotation.z=M?-.025:.012,t.add(C),H([1.78,1.12,.04],[0,0,0],V,C);let U=Wl(!M),B=z(new bt(1.7,1.04),new Fe({map:U,roughness:.75,emissive:16777215,emissiveMap:U,emissiveIntensity:.025}),C);B.position.z=.024,H([1.7,.023,.09],[0,-.57,.025],V,C);for(let G=0;G<3;G++)de([-.58+G*.18,-.546,.057],[-.46+G*.18,-.546,.057],.013,G?v:_(3755626,.7),C)}let Jn=new Ee;Jn.name="Planning whiteboard covered in sticky notes",Jn.position.set(1.9,0,-3),Jn.rotation.y=0,t.add(Jn);for(let M of[-1.12,1.12]){H([.045,.98,.055],[M,.49,0],A,Jn),H([.11,.06,.65],[M,.06,0],A,Jn);for(let C of[-.25,.25])oe([.047,.045,.032],[M,.035,C],v,Jn)}H([2.68,1.94,.05],[0,1.85,0],V,Jn);let ff=new Set([1,4,7,9,13,17,20,22,24]),[Pg,Wt]=l(1024);Wt.fillStyle="#c2c7ba",Wt.fillRect(0,0,1024,1024);for(let M=0;M<65;M++)p(Wt,a()*1024,a()*1024,c(15,110),"60,69,55",.065);Wt.strokeStyle="rgba(38,62,63,.65)",Wt.fillStyle="rgba(38,62,63,.65)",Wt.lineWidth=3;for(let M=0;M<3;M++){let C=170+M*245;Wt.strokeRect(C,560,190,335),Wt.strokeRect(C+12,579,166,28),Wt.strokeRect(C+12,625,166,102),Wt.beginPath(),Wt.moveTo(C+12,625),Wt.lineTo(C+178,727),Wt.moveTo(C+178,625),Wt.lineTo(C+12,727),Wt.stroke();for(let U=0;U<4;U++)Wt.fillRect(C+15,753+U*19,137-U%2*39,3);Wt.strokeRect(C+15,843,160,28),M<2&&(Wt.beginPath(),Wt.moveTo(C+198,727),Wt.lineTo(C+235,727),Wt.lineTo(C+222,717),Wt.moveTo(C+235,727),Wt.lineTo(C+222,737),Wt.stroke())}df(Wt,"#c2c7ba",[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);for(let M of ff){let C=(-1.1+M%9*.273)/2.6*1024+512,U=(.5-(2.63-Math.floor(M/9)*.28-1.85)/1.86)*1024;Wt.fillStyle="rgba(203,203,175,.20)",Wt.fillRect(C-40,U-59,80,118),Wt.fillStyle="rgba(111,96,51,.17)",Wt.fillRect(C-34,U-56,68,8);for(let B=0;B<9;B++)Wt.fillStyle="rgba(77,67,39,.15)",Wt.fillRect(C+c(-33,33),U-53+c(-2,6),c(1,3),c(2,5))}let pf=h(Pg);z(new bt(2.6,1.86),new Fe({map:pf,roughness:.75,emissive:16777215,emissiveMap:pf,emissiveIntensity:.025}),Jn).position.set(0,1.85,.027),H([2.58,.025,.13],[0,.87,.045],V,Jn);for(let M=0;M<3;M++)de([-.63+M*.23,.899,.09],[-.48+M*.23,.899,.09],.017,M===0?_(3428197,.75):v,Jn);H([.18,.045,.07],[.62,.906,.075],v,Jn);let Ig=["#c3b25e","#b38488","#7faaa9","#a4b081"];function Ha(M,C,U,B,G){let[Y,ue]=l(128);ue.fillStyle=Ig[G%4],ue.fillRect(0,0,128,128),ue.fillStyle="rgba(42,49,37,.16)",ue.fillRect(0,0,128,14),ue.strokeStyle="rgba(39,52,47,.68)",ue.lineWidth=2.6;for(let Yt=0;Yt<3+G%3;Yt++){ue.beginPath();let mi=30+Yt*16;ue.moveTo(16,mi);for(let zi=1;zi<8;zi++)ue.lineTo(16+zi*c(8,12),mi+c(-2.4,2.4));ue.stroke()}G%4===0&&(ue.strokeRect(19,75,35,27),ue.strokeRect(72,75,35,27));let Xe=new bt(.205,.215,3,5),et=Xe.attributes.position;for(let Yt=0;Yt<et.count;Yt++){let mi=et.getY(Yt);et.setZ(Yt,Math.max(0,-mi-.015)**2*3.3)}Xe.computeVertexNormals();let Lt=h(Y),rn=z(Xe,new Fe({map:Lt,roughness:.96,side:Dt,emissive:16777215,emissiveMap:Lt,emissiveIntensity:.025}),M);return rn.position.set(C,U,B),rn.rotation.z=c(-.13,.13),rn}for(let M=0;M<3;M++)for(let C=0;C<9;C++)ff.has(M*9+C)||Ha(Jn,-1.1+C*.273+c(-.018,.018),2.63-M*.28+c(-.014,.014),.04,M*9+C);for(let M=0;M<5;M++)M===1||M===4||Ha(Jn,M<3?-1.1:1.09,1.75-M%3*.29,.04,28+M);for(let M=0;M<4;M++){let C=Ha(t,-1.7-M*.3,.005,-.38+M*.26,33+M);C.rotation.set(-Math.PI/2,0,.6+M*.73);let U=C.geometry.attributes.position;for(let B=0;B<U.count;B++)U.setZ(B,U.getZ(B)*.1);Vl.push(C)}let Na=z0();t.add(Na.group);let Xl=ml({flies:14,moths:7,spread:[.88,.23,.5],sizeScale:.55,dive:.65});Xl.group.position.y=-.4,Na.group.add(Xl.group);for(let M of[-.66,.66])de([M,3.3,-.55],[M,2.98,-.55],.006,v);N([[.85,3.3,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.3,3.3,-.7]],.007,v);let Jr=new Ee;Jr.position.set(-2.1,.88,-3.2),ye.parent.add(Jr),se(.11,.035,[0,0,0],v,Jr),de([0,0,0],[.05,.31,0],.016,A,Jr),de([.05,.31,0],[.22,.4,.02],.013,A,Jr),z(new kr(.12,.13,20,1,!0),A,Jr).position.set(.23,.37,.02),oe([.04,.025,.04],[.23,.32,.02],new vt({color:15122820}),Jr);let mf=new zn(15121790,1.2,2.5,2);mf.position.set(-1.87,1.19,-3.18),t.add(mf);let ql=ml({flies:5,moths:3,spread:[.28,.1,.22],seed:113,sizeScale:.55,dive:.1});ql.group.position.set(-1.87,1.14,-3.02),t.add(ql.group);let gf=new qt({color:14102035,roughness:.31,clearcoat:1,clearcoatRoughness:.18}),xf=new qt({color:15790556,roughness:.13,transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),Yl=_(14081488,.49),Fa=_(9016713,.69),Lg=new lo;function Zl(M){let C=Lg.load(new URL(`./labels/${M}.svg`,import.meta.url).href);return C.colorSpace=xt,C.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),new Fe({map:C,transparent:!0,alphaTest:.15,roughness:.72,side:Dt})}let Dg=Zl("ketchup-glass"),Ug=Zl("ketchup-squeeze"),Hg=Zl("ketchup-neck");for(let M=0;M<8140;M++)a();function Ng(M,C){for(let U=1;U<M.length;U++)if(M[U][1]>=C){let[B,G]=M[U-1],[Y,ue]=M[U];return Ge.lerp(B,Y,(C-G)/(ue-G||1))}return M.at(-1)[0]}function $l(M,C,U,B,G,Y=1,ue=1.02){let Xe=new bt(1,1,24,16),et=Xe.attributes.position,Lt=Xe.attributes.uv;for(let Yt=0;Yt<et.count;Yt++){let mi=(Lt.getX(Yt)*2-1)*ue,zi=Ge.lerp(U,B,Lt.getY(Yt)),Oo=Ng(C,zi)+.0018;et.setXYZ(Yt,Math.sin(mi)*Oo,zi,Math.cos(mi)*Oo*Y+8e-4)}Xe.computeVertexNormals();let rn=z(Xe,G,M);return rn.castShadow=!1,rn}function Kl(M,C,U,B=1){let G=z(new Br(M.map(Y=>new Oe(...Y)),48),C,U);return G.scale.z=B,G}function yf(M,C,U,B,G,Y){let ue=new Ee;return ue.name=M.name,ue.add(M),M.position.y=-G,t.add(ue),ue.position.set(C,0,U),ue.rotation.set(...B),ue.scale.setScalar(Y),ue.updateMatrixWorld(!0),ys(ue,Gn)}let lr=new Ee;lr.name="Discarded glass ketchup bottle";let Oa=[[0,0],[.063,0],[.076,.014],[.08,.047],[.079,.19],[.069,.267],[.049,.342],[.03,.41],[.029,.447],[.033,.454],[.032,.471],[0,.471]],vf=Oa.filter(M=>M[1]<.44).map(([M,C])=>[Math.max(0,M-.0035),C+.004]);vf.push([.026,.469],[0,.469]);let Fg=Kl(vf,gf,lr),Og=Kl(Oa,xf,lr);Og.castShadow=!1,$l(lr,Oa,.047,.24,Dg),$l(lr,Oa,.365,.432,Hg,1,.95);let Do=new Ee;Do.position.y=.48,lr.add(Do),se(.037,.036,[0,0,0],Yl,Do,32),se(.0365,.006,[0,.461,0],Fa,lr,32);for(let M=0;M<30;M++){let C=M/30*Math.PI*2;de([Math.cos(C)*.037,-.013,Math.sin(C)*.037],[Math.cos(C)*.037,.014,Math.sin(C)*.037],.0011,Fa,Do)}let _f=z(new $t(.07,.003,6,32),xf,lr);_f.rotation.x=Math.PI/2,_f.position.y=.016;let zg=yf(lr,.98,2.82,[-.25,.45,Math.PI/2],.25,.82),Sr=new Ee;Sr.name="Discarded squeeze ketchup bottle";let Mf=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];Kl(Mf,gf,Sr,.62),$l(Sr,Mf,.122,.403,Ug,.62,1.04);let Bg=se(.069,.06,[0,.034,0],Yl,Sr,40);Bg.scale.z=.73;let kg=se(.0694,.003,[0,.014,0],Fa,Sr,40);kg.scale.z=.73,Q([.042,.012,.01],[0,.014,.051],Yl,Sr),H([.031,.018,.008],[0,.04,-.05],Fa,Sr),yf(Sr,1.95,2.45,[-Math.PI/2,0,-.45],.225,.8);let[Ef,Ct]=l(1024);Ef.height=512,Ct.fillStyle="#86b0b2",Ct.fillRect(0,0,1024,512);for(let M=0;M<180;M++)p(Ct,a()*1024,a()*512,c(5,55),M%2?"225,229,207":"83,125,129",c(.035,.14));Ct.lineCap="round";for(let M=0;M<260;M++){let C=a()*1024,U=a()*512;Ct.strokeStyle=`rgba(44,57,53,${c(.3,.65)})`,Ct.lineWidth=c(2,4),Ct.beginPath(),Ct.moveTo(C,U),Ct.quadraticCurveTo(C-3,U+7,C+c(-2,3),U+c(7,15)),Ct.stroke()}Ct.fillStyle="#eee2c3",Ct.beginPath(),Ct.moveTo(512,176),Ct.bezierCurveTo(459,117,386,112,350,169),Ct.bezierCurveTo(313,243,337,421,410,466),Ct.bezierCurveTo(460,493,565,493,615,466),Ct.bezierCurveTo(687,421,711,243,675,169),Ct.bezierCurveTo(639,112,565,117,512,176),Ct.fill();for(let M of[433,591])p(Ct,M,271,29,"197,123,110",.2),Ct.fillStyle="#3d3630",Ct.beginPath(),Ct.ellipse(M,215,7,4,-.2,0,Math.PI*2),Ct.fill();Ct.strokeStyle="#52443a",Ct.lineWidth=3,Ct.beginPath(),Ct.moveTo(512,274),Ct.lineTo(512,316),Ct.bezierCurveTo(501,335,482,337,472,326),Ct.moveTo(512,316),Ct.bezierCurveTo(523,335,542,337,552,326),Ct.stroke();for(let M of[-1,1])for(let C=0;C<3;C++)Ct.fillStyle="#6e5b46",Ct.beginPath(),Ct.arc(512+M*(25+C*9),300+C%2*12,1.8,0,Math.PI*2),Ct.fill();d(Ct,512,2300,"112,124,109",.07);let Vg=new qt({map:h(Ef),roughness:.29,clearcoat:1,clearcoatRoughness:.16}),wf=new qt({color:9091001,roughness:.25,clearcoat:1,clearcoatRoughness:.14}),[Sf,pi]=l(1024);Sf.height=512,pi.fillStyle="#e8dcba",pi.fillRect(0,0,1024,512);for(let M=0;M<18;M++){let C=M*1024/18;pi.fillStyle=M%2?"#93b8ae":"#7ca6a5",pi.beginPath(),pi.moveTo(C-12,0),pi.bezierCurveTo(C-20,170,C+4,310,C-12,512),pi.lineTo(C+12,512),pi.bezierCurveTo(C+26,310,C+8,170,C+17,0),pi.closePath(),pi.fill()}let za=pi.createLinearGradient(0,220,0,512);za.addColorStop(0,"rgba(103,62,27,0)"),za.addColorStop(.7,"rgba(103,62,27,.09)"),za.addColorStop(1,"rgba(74,39,14,.48)"),pi.fillStyle=za,pi.fillRect(0,0,1024,512);let Tf=new qt({map:h(Sf),roughness:.34,clearcoat:.8,side:Dt}),Hi=new Ee;Hi.name="Blue pointy-eared mug tipped on its side";function bf(M,C){let U=new Br(M.map(Y=>new Oe(...Y)),64),B=U.attributes.uv,G=U.attributes.position;for(let Y=0;Y<G.count;Y++)B.setY(Y,G.getY(Y)/.258);return U.rotateY(Math.PI),z(U,C,Hi)}bf([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.14,.257]],Vg),bf([[.127,.257],[.128,.237],[.121,.09],[.106,.034],[0,.034]],Tf);let Rf=z(new $t(.134,.008,10,64),wf,Hi);Rf.rotation.x=Math.PI/2,Rf.position.y=.254;let Af=z(new $t(.102,.004,8,48),Tf,Hi);Af.rotation.x=Math.PI/2,Af.position.y=.012;for(let M of[-1,1]){let C=new Ee;C.position.set(M*.095,.235,.103),C.rotation.set(-.06,M*Math.atan2(.095,.103),-M*.1),Hi.add(C);let U=new yt;U.name=M<0?"Mug left ear tip":"Mug right ear tip",U.position.y=.142,C.add(U);let B=new wt;B.moveTo(-.047,0),B.bezierCurveTo(-.044,.046,-.015,.112,0,.142),B.bezierCurveTo(.018,.125,.046,.045,.047,0),B.closePath();let G=new en(B,{depth:.013,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});G.translate(0,0,-.0065),z(G,wf,C),N([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,_(5005659,.62),C)}let[Gg,Ba]=l(256);Ba.fillStyle="#e8dfc6",Ba.fillRect(0,0,256,256),Ba.fillStyle="#84adb0";for(let M of[0,95,200])Ba.fillRect(M,0,47,256);let Wg=new qt({map:h(Gg),roughness:.28,clearcoat:1});N([[-.129,.211,0],[-.195,.222,0],[-.249,.188,0],[-.257,.13,0],[-.229,.075,0],[-.178,.057,0],[-.125,.076,0]],.014,Wg,Hi);let Jl=new yt;Jl.name="Mug handle grip",Jl.position.set(-.249,.141,0),Hi.add(Jl);let Uo=new wt;Uo.moveTo(-.021,.01),Uo.quadraticCurveTo(0,.021,.021,.01),Uo.quadraticCurveTo(.021,-.003,0,-.019),Uo.quadraticCurveTo(-.022,-.004,-.021,.01),z(new en(Uo,{depth:.012,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new qt({color:2697251,roughness:.3,clearcoat:1}),Hi).position.set(0,.129,.142);let Qi=new Ee;Qi.name="Spilled animal mug in the left foreground",Qi.add(Hi),Hi.position.y=-.135,t.add(Qi);let Rs=new w(-.55,-.05,.83).normalize(),As=new w(.54,.66,.39);As.addScaledVector(Rs,-As.dot(Rs)).normalize();let Ql=new w().crossVectors(Rs,As).normalize();Qi.quaternion.setFromRotationMatrix(new Rt().makeBasis(Ql,Rs,As)),Qi.scale.setScalar(.72),Qi.position.set(.24,0,3.02),Qi.updateMatrixWorld(!0),ys(Qi,Gn),Qi.updateMatrixWorld(!0);let Cf=Math.hypot(Ql.y,As.y),ka=Hi.localToWorld(new w(-.134*Ql.y/Cf,.254,-.134*As.y/Cf)),Ho=new w(Rs.x,0,Rs.z).normalize(),Cs=ka.clone().addScaledVector(Ho,.23);Cs.y=Gn(Cs.x,Cs.z)+.001;let Pf=new qt({color:5324843,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:!0,opacity:.94,side:Dt}),Xg=new Fe({color:9072713,roughness:.4,transparent:!0,opacity:.68,depthWrite:!1,side:Dt});function If(M,C,U,B,G=0){let Y=new wt;for(let Lt=0;Lt<=80;Lt++){let rn=Lt/80*Math.PI*2,Yt=1+.11*Math.sin(rn*3+G)+.065*Math.sin(rn*7-.3)+.025*Math.cos(rn*13),mi=Math.cos(rn)*U*Yt,zi=Math.sin(rn)*B*Yt;Lt?Y.lineTo(mi,zi):Y.moveTo(mi,zi)}Y.closePath();let ue=new Wi(Y,32),Xe=z(ue,Xg);Xe.rotation.x=-Math.PI/2,Xe.scale.setScalar(1.045),Xe.position.set(M,Gn(M,C)+5e-4,C),Xe.castShadow=!1;let et=z(ue,Pf);return et.rotation.x=-Math.PI/2,et.position.set(M,Gn(M,C)+.001,C),et.castShadow=!1,et}If(Cs.x,Cs.z,.23,.145,.4);let No=ka.clone();No.y=Gn(No.x,No.z)+.008,N([ka.toArray(),No.toArray(),No.clone().addScaledVector(Ho,.09).toArray(),Cs.toArray()],.008,Pf);for(let[M,C,U]of[[.45,.1,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){let B=ka.clone().addScaledVector(Ho,M).add(new w(-Ho.z*C,0,Ho.x*C));If(B.x,B.z,U,U*.65,M*3)}t.updateMatrixWorld(!0);for(let M of Vl){let C=M.geometry.attributes.position;for(let U=0;U<C.count;U++){let B=M.localToWorld(new w(C.getX(U),C.getY(U),0)),G=.003;for(let Y of Gl){let ue=Y.worldToLocal(B.clone()),Xe=Y.geometry.parameters;Math.abs(ue.x)<Xe.width/2&&Math.abs(ue.z)<Xe.depth/2&&(G=Math.max(G,.013))}C.setZ(U,C.getZ(U)+G+.002-M.position.y)}C.needsUpdate=!0,M.geometry.computeVertexNormals(),M.geometry.computeBoundingSphere()}for(let[M,C,U,B,G]of[[-2.53,2.13,1.52,1.08,!0],[-.62,2.13,1.78,1.1,!1]]){let Y=new Ee;Y.name="Left-wall design whiteboard",Y.position.set(-3.86,C,M),Y.rotation.y=Math.PI/2,t.add(Y),H([U,B,.045],[0,0,0],V,Y);let ue=Wl(G),Xe=z(new bt(U-.07,B-.07),new Fe({map:ue,roughness:.85,emissive:16777215,emissiveMap:ue,emissiveIntensity:.025}),Y);Xe.position.z=.026,H([U-.07,.025,.1],[0,-B/2,.035],V,Y),de([-.4,-B/2+.025,.06],[-.23,-B/2+.025,.06],.011,v,Y),H([.13,.035,.065],[U*.29,-B/2+.029,.045],O,Y),Ha(Y,U*.35,B*.21,.034,G?6:9)}let wi=new Ee;wi.name="Worn bookshelf of design books",wi.position.set(-3.65,0,1.65),wi.rotation.y=Math.PI/2,t.add(wi);let Va=_(11643027,.92,m),qg=_(10920589,.98);H([1.56,2.38,.035],[0,1.19,-.185],Va,wi);for(let M of[-.765,.765])H([.045,2.42,.42],[M,1.21,.015],Va,wi);for(let M of[.12,.66,1.2,1.74,2.28])H([1.5,.035,.42],[0,M,.015],Va,wi);H([1.51,.1,.045],[0,.05,.19],Va,wi);let Ga=[["The Design of Everyday Things","#b5ad86"],["Don't Make Me Think","#bd8b36"],["Thinking with Type","#9f392f"],["Grid Systems","#adaf9a"],["Designing Interfaces","#54796f"],["About Face","#393e3e"],["The Elements of User Experience","#758b9d"],["Sprint","#b3a847"],["Universal Principles of Design","#b8b5a4"],["Designing for Interaction","#80665b"],["Sketching User Experiences","#456976"],["The Shape of Design","#bcb296"]],Yg=Ga.map(([M,C],U)=>{let[B,G]=l(128);B.height=1024,G.fillStyle=C,G.fillRect(0,0,128,1024);let Y=G.createLinearGradient(0,0,128,0);return Y.addColorStop(0,"rgba(0,0,0,.35)"),Y.addColorStop(.25,"rgba(0,0,0,0)"),Y.addColorStop(.86,"rgba(230,219,175,.12)"),Y.addColorStop(1,"rgba(0,0,0,.2)"),G.fillStyle=Y,G.fillRect(0,0,128,1024),G.save(),G.translate(76,70),G.rotate(Math.PI/2),G.fillStyle=[2,4,5,6,9,10].includes(U)?"#ded9c5":"#262b26",G.font="600 47px Georgia,serif",G.fillText(M,0,0,820),G.restore(),G.fillStyle="rgba(217,210,181,.55)",G.fillRect(14,947,100,3),G.fillRect(14,963,100,3),d(G,128,400,"22,24,17",.22),new Fe({map:h(B),roughness:.96})});for(let M=0;M<4;M++){let C=-.69;for(let U=0;U<16;U++){let B=(U+M*5)%Ga.length,G=c(.045,.085),Y=c(.3,.44),ue=c(.22,.3);if(C+G>.68)break;if(U===7||M===2&&U===11){C+=.1;continue}let Xe=new Ee;Xe.name=Ga[B][0],wi.add(Xe);let et=U%6===5?-.12:c(-.025,.025);Xe.rotation.z=et,Xe.position.set(C+G/2,.12+M*.54+.018+Math.abs(Math.sin(et))*G/2,.18-ue/2),H([G-.008,Y-.009,ue-.007],[0,Y/2,0],qg,Xe);let Lt=_(Ga[B][1],.93);for(let Yt of[-1,1])H([.004,Y,ue],[Yt*(G/2-.002),Y/2,0],Lt,Xe);H([G,Y,.007],[0,Y/2,ue/2],Lt,Xe);let rn=z(new bt(G-.002,Y-.004),Yg[B],Xe);rn.position.set(0,Y/2,ue/2+.004),rn.castShadow=!1,C+=G+.008}}for(let M of[.14,.68,1.22,1.76,2.3])H([1.44,.002,.035],[0,M,.196],_(7171673,.99),wi);let Zg=H([.32,.055,.24],[.41,2.327,.03],_(6964536,.95),wi);Zg.rotation.y=.17;let[$g,Ft]=l(2048);Ft.fillStyle="#66695d",Ft.fillRect(0,0,2048,2048);for(let M=0;M<1250;M++)p(Ft,a()*2048,a()*2048,c(4,125),M%4?"34,31,21":"135,131,110",c(.035,.22));for(let M=0;M<160;M++){let C=M%4,U=C<2?(C?2048:0)+c(-45,90):a()*2048,B=C<2?a()*2048:(C===2?0:2048)+c(-45,90);p(Ft,U,B,c(60,190),"20,26,19",c(.15,.4))}for(let M=0;M<75;M++){let C=c(80,1968),U=c(80,1968),B=c(14,70);p(Ft,C,U,B*1.7,"57,35,15",c(.13,.35)),Ft.strokeStyle=`rgba(48,35,18,${c(.12,.36)})`,Ft.lineWidth=c(1,4),Ft.beginPath(),Ft.ellipse(C,U,B,B*c(.6,1.2),a()*Math.PI,0,Math.PI*c(1.1,2)),Ft.stroke()}Ft.lineCap="round";for(let M=0;M<340;M++){let C=c(100,1950),U=c(100,1950);Ft.save(),Ft.translate(C,U),Ft.rotate(a()*Math.PI*2),Ft.strokeStyle=`rgba(16,23,19,${c(.1,.3)})`,Ft.lineWidth=c(1,4),Ft.beginPath(),Ft.moveTo(0,0),Ft.quadraticCurveTo(c(15,50),c(-12,12),c(55,160),c(-20,20)),Ft.stroke(),Ft.restore()}for(let M=0;M<17;M++){let C=a()*2048,U=a()*2048;Ft.beginPath(),Ft.moveTo(C,U);for(let B=0;B<9;B++)C+=c(-20,25),U+=c(6,27),Ft.lineTo(C,U);Ft.strokeStyle="rgba(18,23,18,.42)",Ft.lineWidth=2.2,Ft.stroke()}for(let M=0;M<1900;M++){let C=a()*2048,U=a()*2048;Ft.strokeStyle=`rgba(167,163,137,${c(.03,.22)})`,Ft.lineWidth=c(.4,1.3),Ft.beginPath(),Ft.moveTo(C,U),Ft.lineTo(C+c(3,28),U+c(-5,5)),Ft.stroke()}d(Ft,2048,9e4,"16,22,15",.26),d(Ft,2048,3e4,"166,161,135",.2);let Lf=h($g);k.map=Lf,k.bumpMap=Lf,k.bumpScale=.006,k.needsUpdate=!0;let tn=new Ee;tn.name="Weathered entrance wall behind the viewer",tn.position.z=4.48,tn.rotation.y=Math.PI,t.add(tn),H([7.8,3.35,.16],[0,1.675,-.08],_(10068367,.99,g),tn),te(7.8,3.35,tn).position.set(0,1.675,.004),H([7.8,.14,.045],[0,.07,.024],v,tn),H([7.8,.026,.023],[0,2.87,.03],A,tn);let[Kg,In]=l(1024);for(let M=0;M<62;M++){let C=a()*1024,U=c(0,180);In.strokeStyle=`rgba(43,36,22,${c(.1,.32)})`,In.lineWidth=c(.5,5),In.beginPath(),In.moveTo(C,U),In.bezierCurveTo(C+6,U+80,C-4,U+170,C+c(-6,9),U+c(210,650)),In.stroke()}for(let M=0;M<21;M++){let C=a()*1024,U=a()*1024;In.beginPath();for(let B=0;B<12;B++){let G=B/12*Math.PI*2,Y=c(9,27),ue=C+Math.cos(G)*Y,Xe=U+Math.sin(G)*Y*1.7;B?In.lineTo(ue,Xe):In.moveTo(ue,Xe)}In.closePath(),In.fillStyle=M%3?"rgba(61,65,52,.75)":"rgba(149,144,118,.6)",In.fill()}for(let M=0;M<10;M++){let C=a()*1024,U=c(60,850);In.strokeStyle="rgba(28,34,26,.75)",In.lineWidth=.8,In.beginPath(),In.moveTo(C,U);for(let B=0;B<8;B++)C+=c(-9,12),U+=c(5,16),In.lineTo(C,U);In.stroke()}let Df=z(new bt(7.8,3.35),new Fe({map:h(Kg),transparent:!0,depthWrite:!1,roughness:1}),tn);Df.position.set(0,1.675,.007),Df.castShadow=!1;let Sn=new Ee;Sn.name="Scuffed service door and failing exit sign",Sn.position.set(1.2,0,.05),tn.add(Sn);let Wa=_(6910824,.88,u,.22);H([1.12,2.34,.042],[0,1.17,0],v,Sn),H([1.035,2.27,.048],[0,1.153,.022],Wa,Sn);for(let M of[-.565,.565])H([.065,2.4,.1],[M,1.2,.035],A,Sn);H([1.19,.065,.1],[0,2.4,.035],A,Sn),H([1.1,.025,.13],[0,.016,.045],V,Sn),H([.85,.28,.009],[0,.25,.052],_(7239276,.7,u,.55),Sn);for(let M of[-1,1])for(let C of[.14,.35])oe([.008,.008,.003],[M*.39,C,.059],V,Sn);H([.68,.73,.032],[0,1.69,.055],A,Sn);let[Jg,Ni]=l(512);Ni.fillStyle="#293c39",Ni.fillRect(0,0,512,512);for(let M=0;M<170;M++)p(Ni,a()*512,a()*512,c(4,45),"7,14,11",c(.08,.3));Ni.strokeStyle="rgba(100,118,105,.32)",Ni.lineWidth=1.4;for(let M=-512;M<1024;M+=36)Ni.beginPath(),Ni.moveTo(M,0),Ni.lineTo(M+512,512),Ni.moveTo(M,0),Ni.lineTo(M-512,512),Ni.stroke();z(new bt(.6,.65),new qt({map:h(Jg),roughness:.32,clearcoat:.8,metalness:.12}),Sn).position.set(0,1.69,.074),de([.36,.9,.095],[.36,1.05,.095],.017,V,Sn),de([.36,1.03,.095],[.2,1.03,.12],.015,V,Sn);for(let M of[.35,1.2,2.07])H([.07,.1,.034],[-.515,M,.064],A,Sn),se(.012,.12,[-.53,M,.08],V,Sn);function Ps(M,C,U,B,G,Y="#74796b",ue="#d0cdb8"){let[Xe,et]=l(512);Xe.height=128,et.fillStyle=Y,et.fillRect(0,0,512,128),et.fillStyle=ue,et.font="600 50px Arial,sans-serif",et.textAlign="center",et.fillText(M,256,82,470),d(et,512,1500,"14,20,15",.2);let Lt=z(new bt(C,U),new Fe({map:h(Xe),roughness:.9}),B);return Lt.position.set(...G),Lt.castShadow=!1,Lt}Ps("STAFF ONLY",.4,.1,Sn,[0,1.12,.055]),H([.54,.21,.1],[0,2.66,.08],A,Sn);let Xa=Ps("EXIT  \u2192",.48,.15,Sn,[0,2.66,.133],"#263b30","#a8b593");Xa.material.emissive.set(5994071),Xa.material.emissiveMap=Xa.material.map,Xa.material.emissiveIntensity=.25;let Fi=new Ee;Fi.name="Abandoned critique pinboard",Fi.position.set(-.95,1.94,.055),Fi.rotation.z=-.018,tn.add(Fi);let Qg=_(8417362,.99,m);H([1.86,1.25,.045],[0,0,0],Qg,Fi);for(let M of[-.94,.94])H([.035,1.3,.055],[M,0,.01],A,Fi);for(let M of[-.64,.64])H([1.91,.035,.055],[0,M,.01],A,Fi);for(let M=0;M<7;M++){let C=-.68+M%4*.44,U=M<4?.28:-.26,B=Wl(M%2===0),G=z(new bt(.35,.43),new Fe({map:B,color:M%2?12170400:13026996,roughness:1,side:Dt}),Fi);G.position.set(C,U,.028+M%3*.001),G.rotation.z=c(-.1,.1),G.castShadow=!1,oe([.008,.008,.005],[C,U+.195,.039],M%2?v:_(7814963,.8),Fi);let Y=H([.11,.033,.001],[C-.06,U+.2,.031],_(10001011,.98),Fi);Y.rotation.z=c(-.2,.2)}Ps("DESIGN / CRITIQUE",1.1,.1,Fi,[-.11,.56,.028],"#77765a","#252d27"),H([.94,.065,.13],[-.95,2.78,.11],A,tn);let Uf=se(.013,.82,[-.95,2.741,.14],new vt({color:7572357}),tn,12);Uf.rotation.z=Math.PI/2,Uf.castShadow=!1;let qa=new uo(9611936,3.4,3.6,1,.85,2);qa.position.set(-.95,2.72,.36),qa.target.position.set(-1.12,1.35,.04),tn.add(qa,qa.target);let jl=ml({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.5,dive:.22});jl.group.position.set(-.95,2.52,.43),tn.add(jl.group);let oi=new Ee;oi.name="Damaged filing cabinets",oi.position.set(-1.12,0,.26),tn.add(oi),H([1.52,.77,.028],[0,.385,-.2],Wa,oi),H([1.56,.035,.46],[0,.795,0],A,oi);for(let M of[-.745,0,.745])H([.025,.77,.43],[M,.385,0],Wa,oi);for(let M of[.018,.385])H([1.52,.025,.43],[0,M,0],A,oi);for(let M of[-.38,.38])for(let C of[.2,.56]){if(M<0&&C>.4)continue;let U=0;H([.71,.32,.025],[M,C,.231+U],A,oi),de([M-.1,C+.04,.26+U],[M+.1,C+.04,.26+U],.011,V,oi),H([.16,.055,.004],[M,C-.06,.248+U],R,oi),U&&(H([.68,.014,.35],[M,C-.16,.2],A,oi),H([.012,.28,.34],[M-.34,C,.2],A,oi))}let jg=H([.47,.29,.36],[-1.3,.96,.29],_(11573869,.99,m),tn);jg.rotation.y=.14,Ps("ARCHIVE",.25,.075,tn,[-1.3,.97,.483],"#a49471","#3b3d30");let e1=H([.5,.014,.19],[-1.3,1.116,.39],b,tn);e1.rotation.x=.2;let Tr=new Ee;Tr.name="Neglected network and electrical cabinet",Tr.position.set(-2.96,1.6,.08),tn.add(Tr),H([.64,.97,.12],[0,0,0],A,Tr),H([.56,.88,.014],[0,0,.066],v,Tr);for(let M=0;M<4;M++)for(let C=0;C<5;C++)H([.072,.09,.035],[-.2+C*.1,.28-M*.16,.09],Wa,Tr),H([.017,.035,.01],[-.2+C*.1,.28-M*.16,.113],M===1?R:v,Tr);let Fo=new Ee;Fo.position.set(-.32,0,.06),Fo.rotation.y=-.65,Tr.add(Fo),H([.62,.96,.025],[.31,0,0],A,Fo),Ps("CAUTION",.3,.1,Fo,[.32,.26,.014],"#a08d52","#252b24");for(let M=0;M<4;M++)N([[-3.12+M*.08,2.1,.12],[-3.15+M*.08,2.5,.12],[-3.15+M*.08,2.88,.12],[-2.1+M*.08,2.88,.12]],.012,A,tn);for(let M=0;M<6;M++)N([[-3.18+M*.08,1.15,.16],[-3.2+M*.06,.71,.21],[-3.13+M*.1,.32,.17],[-2.85+M*.06,.15,.3]],.005,M%2?v:_(5858907,.9),tn);H([.2,.13,.022],[2.2,.35,.047],R,tn),H([.11,.085,.025],[2.2,.35,.065],v,tn),N([[2.2,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.9,.023,.42],[3.1,.023,.3]],.007,v,tn);let Oi=new Ee;Oi.name="Dusty fire extinguisher",Oi.position.set(2.16,.25,.17),tn.add(Oi);let eh=_(8271401,.78,u,.23);se(.095,.42,[0,.25,0],eh,Oi,24),oe([.095,.065,.095],[0,.47,0],eh,Oi),oe([.093,.045,.093],[0,.04,0],eh,Oi),H([.11,.025,.055],[.015,.56,0],v,Oi),de([0,.51,0],[0,.57,0],.018,V,Oi),N([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,v,Oi),Ps("FIRE",.12,.14,Oi,[0,.27,.097],"#b4ac8c","#33382d"),n.push(ye,_e,mt,Ye,dn,Bt,Ie,Qe.group,Jn,wi,oi,Oi);for(let M of n)ys(M,Gn);for(let M of[ke,Ue]){let C=M.getObjectByName("Monitor power cable");M.remove(C),C.geometry.dispose();let U=M.localToWorld(new w(.1,.23,-.05)),B=U.x,G=U.z,Y=N([U.toArray(),[B+.09,Math.max(Gn(B+.09,G+.1)+.008,U.y*.45),G+.1],[B+.2,Gn(B+.2,G+.2)+.007,G+.2],[B+.38,Gn(B+.38,G+.11)+.007,G+.11]],.006,v);Y.userData.ignoreFloorContact=!0,Y.userData.anchorStart=!0}for(let M of r)fl(M,Gn);t.add(O0(e,Gn));let Qr=N0();Qr.group.userData.ignoreAcid=!0,t.add(Qr.group);let th=im({valves:Qr.valves,floorSupport:Gn});t.add(th.group);let Hf=K0({filing:oi,laptop:uf,floorSupport:Gn,drawerMaterial:A});t.add(Hf.group);let nh=j0({bottle:zg,contents:Fg,cap:Do,floorSupport:Gn});t.add(nh.group);let Nf=G0({room:t,floorSupport:Gn,viewerPosition:e});t.add(Nf.group);function t1(M){th.setEnvironment(M),je.setEnvironment(M),ve.setEnvironment(M),Qr.setEnvironment(M),Na.setEnvironment(M)}let Ff=-1/0;function n1(M,C,U=e){nh.update(M,C);let B=Na.update(M,C);return M-Ff>=1/Ht.effectsHz&&(Ff=M,Nf.update(M,C,U),Qr.update(M,C),Xl.update(M,C,B),jl.update(M,C,.65),ql.update(M,C,.78)),B}return{group:t,laptop:uf,catMug:Qi,handsaw:je.group,acidLeaks:th,chargingKit:Hf,ketchupKey:nh,countdown:Qe,setDisplayEnvironment:t1,update:n1,figpalHoists:Qr,toggleHoist:Qr.toggleHoist}}var _a=["Nooo!!!!","Tell my wife that I love her!","Delete my browser history!"],Ld=["help","I have a family","I swear I didn't detach the component!"];function sm(i,e,t=Math.random){let n=18,r=-1,s=Math.floor(t()*Ld.length);return{update(o,a=!1){if(o<n)return!1;if(a||e.isActive(o))return n=o+2,!1;let c=[0,1,2].filter(h=>i.isHanging(h));if(!c.length)return n=o+2,!1;c.length>1&&(c=c.filter(h=>h!==r));let l=c[Math.floor(t()*c.length)];return e.show(l,o,Ld[s],6),r=l,s=(s+1)%Ld.length,n=o+20+t()*15,!0},reset(o=0){n=o+18,r=-1}}}function om(i){let e=null;return{update(t,n){return t!=="finished"||e!==null?!1:(e=n,i.lowerAll(),!0)},reset(){e!==null&&i.reset(),e=null},get active(){return e!==null},elapsed(t){return e===null?-1:Math.max(0,t-e)}}}function am(i,e,t=()=>!0){let n=document.querySelector("#figpal-dialogues"),r=_a.map((f,g)=>{let x=document.createElement("div");x.className="figpal-speech",x.hidden=!0,x.dataset.figpal=String(g+1);let m=document.createElement("span");m.className="figpal-speech-text",m.textContent=f;let u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("figpal-speech-tail"),u.setAttribute("aria-hidden","true");let E=document.createElementNS("http://www.w3.org/2000/svg","path");return u.append(E),x.append(m,u),n.append(x),x}),s=new w,o=r.map(()=>null),a=r.map(()=>15);function c(f,g,x=_a[f],m=15){if(r[f]){if(!t(f)){p(f);return}o[f]=g,a[f]=m,r[f].children[0].textContent=x}}function l(f){return o.some((g,x)=>t(x)&&g!==null&&f>=g&&f<g+a[x])}function h(f){for(let g=0;g<r.length;g++)c(g,f)}function p(f){if(Number.isInteger(f)){r[f]&&(o[f]=null,r[f].hidden=!0);return}n.hidden=!0;for(let g=0;g<r.length;g++)o[g]=null,r[g].hidden=!0}function d(f,g){n.hidden=!1;let x=e.getBoundingClientRect(),m=0;for(let u=0;u<i.length;u++){if(!t(u)){p(u);continue}let E=r[u],y=o[u]===null?-1:g-o[u],_=a[u];if(y<0||y>=_){E.hidden=!0,y>=_&&(o[u]=null);continue}if(E.style.opacity=String(1-Ge.smoothstep(y,_-1,_)),i[u].getWorldPosition(s),s.y=Math.max(s.y,1.32),s.project(f),s.z<-1||s.z>1||Math.abs(s.x)>1.04||Math.abs(s.y)>1.1){E.hidden=!0;continue}E.hidden=!1;let P=x.left+(s.x*.5+.5)*x.width,b=x.top+(-s.y*.5+.5)*x.height;E.style.transform=`translate3d(${P}px,${b-14}px,0) translate(-50%,-100%)`;let R=E.offsetWidth/2;E.querySelector("path").setAttribute("d",`M ${R-5} 0 L ${R+6} 0 L ${R} 15 Z`),m++}n.hidden=m===0}return p(),{update:d,hide:p,show:c,showAll:h,isActive:l}}var Mr=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function cm({canDetach:i=()=>!0}={}){let e=!0,t=-1/0,n=-1/0,r=!1,s=-1/0;return{get locked(){return e},requestReach(o){return o-t<1.65||!e&&o-n<.85?!1:(t=o,s=o+5.2,r=!e,!0)},detach(o){return!e||!i()?!1:(e=!1,n=o,s=o+2.4,r=!1,!0)},endReach(){s=-1/0,r=!1},sample(o,a=!1){a&&Number.isFinite(t)&&(s=Math.max(s,o+.8));let c=o-t,l=c<.52?Mr(c/.52):c<.86?1:1-Mr((c-.86)/.79),h=!1;!e&&r&&c>=.55&&(h=!0,r=!1);let p=o-n,d=e?0:Mr(p/.14),f=e?0:Mr((p-.12)/.42),g=e?0:Mr((p-.56)/.28),x=e?0:Mr((p-.9)/.65),m=o<s&&(e||p<1.65),u=m?Math.min(Mr(c/.24),Mr((s-o)/.45)):0;return{locked:e,reach:l,visible:m,reveal:u,releaseElapsed:p,unlatch:d,hingeOpen:f,handFree:g,cuffDrop:x,release:e?0:Mr((o-n)/.85),strain:e&&c>.45&&c<.86?Math.sin(c*64)*.003:0,openLaptop:h}},reset(){e=!0,t=-1/0,n=-1/0,r=!1,s=-1/0}}}function lm(i,e,t,n=.43,r=.49){let s=new w().subVectors(e,i),o=s.length();s.normalize(),o>n+r-.015&&i.addScaledVector(s,o-(n+r-.015));let a=Math.max(.001,i.distanceTo(e)),c=Ge.clamp((n*n-r*r+a*a)/(2*a),-n,n),l=new w(.55,-1,.08).addScaledVector(s,-new w(.55,-1,.08).dot(s)).normalize();return t.copy(i).addScaledVector(s,c).addScaledVector(l,Math.sqrt(Math.max(0,n*n-c*c))),t}function hm(i,e){let r=new Pt,s=new Float32Array(609*3),o=[];for(let _=1;_<=20;_++)for(let P=1;P<=28;P++){let b=_*29+P;o.push(b,b-28-2,b-1,b,b-28-1,b-28-2)}r.setAttribute("position",new un(s,3).setUsage(Un)),r.setIndex(o);let a=new lt(r,i);a.name="Full curved forearm",a.castShadow=a.receiveShadow=!0,a.frustumCulled=!1;let c=r.clone(),l=new lt(c,e);l.name="Forearm ink silhouette",l.raycast=()=>{},l.frustumCulled=!1,a.add(l);let h=new ua,p=new w,d=new w,f=new w,g=new w,x=new w,m=new w,u=new w,E=[[0,.076,.061],[.18,.081,.063],[.4,.073,.055],[.65,.059,.043],[.8,.047,.033],[1,.038,.026]];function y(_,P,b){p.set(0,0,1).applyQuaternion(b),h.v0.copy(_),h.v1.lerpVectors(_,P,.31),h.v1.x+=.018,h.v3.copy(P).addScaledVector(p,.075),h.v2.copy(h.v3).addScaledVector(p,.065),m.set(1,0,0).applyQuaternion(b);for(let O=0;O<=20;O++){let v=O/20;v<.8?(h.getPoint(v/.8,d),h.getTangent(v/.8,f)):(d.copy(P).addScaledVector(p,.075*(1-v)/.2),f.copy(p).negate()),g.copy(m).addScaledVector(f,-m.dot(f)).normalize(),x.crossVectors(g,f).normalize();let T=E.findIndex(oe=>oe[0]>=v),k=E[Math.max(0,T-1)],V=E[T],z=k===V?0:Ge.smoothstep(v,k[0],V[0]),H=Ge.lerp(k[1],V[1],z),ee=Ge.lerp(k[2],V[2],z);for(let oe=0;oe<=28;oe++){let se=oe/28*Math.PI*2;u.copy(d).addScaledVector(g,Math.cos(se)*H).addScaledVector(x,Math.sin(se)*ee),u.toArray(s,(O*29+oe)*3)}}r.attributes.position.needsUpdate=!0,r.computeVertexNormals();let R=r.attributes.normal,A=c.attributes.position;for(let O=0;O<A.count;O++)A.setXYZ(O,s[O*3]+R.getX(O)*.0015,s[O*3+1]+R.getY(O)*.0015,s[O*3+2]+R.getZ(O)*.0015);A.needsUpdate=!0}return{mesh:a,update:y}}function um(i,e){let t=i.geometry,n=t.attributes.position,r=t.clone(),s=r.attributes.position,o=1.9/e;for(let c=0;c<s.count;c++){let l=n.getX(c),h=n.getY(c),p=n.getZ(c),d=Math.max(0,-p)*o;p>=0||s.setXYZ(c,l,h*Math.cos(d)-(1-Math.cos(d))/o,-Math.sin(d)/o-h*Math.sin(d))}r.computeVertexNormals(),t.morphAttributes.position=[s],t.morphAttributes.normal=[r.attributes.normal],i.updateMorphTargets();let a=i.children.find(c=>c.name==="Ink silhouette");if(a){let c=s.clone(),l=r.attributes.normal;for(let h=0;h<c.count;h++)c.setXYZ(h,s.getX(h)+l.getX(h)*.002,s.getY(h)+l.getY(h)*.002,s.getZ(h)+l.getZ(h)*.002);a.geometry.morphAttributes.position=[c],a.updateMorphTargets()}return c=>{i.morphTargetInfluences[0]=Ge.clamp(c,0,1),a&&(a.morphTargetInfluences[0]=i.morphTargetInfluences[0])}}var dm=new w(0,1,0);function fm(i,e={}){let t=new Ee;t.name="Player forearm chained to the rear pipes";let n=new Ee;n.name="Camera-relative reaching hand",t.add(n);let r=cm(e),s=new Jt(1,24,16),o=new Fe({color:13871751,roughness:.86,metalness:0,emissive:6832947,emissiveIntensity:.025}),a=new vt({color:2104345,side:yn}),c=li(10857122),l=li(12568e3),h=new Fe({color:1382166,roughness:.9}),p=li(9872814);p.map=null,p.metalnessMap=null,p.metalness=.86,p.roughness=.66,p.bumpScale=35e-5;let d=new Fe({color:11517381,metalness:.92,roughness:.29}),f=new vt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function g(tt,it,rt=n){let Ye=new lt(tt,it);return Ye.castShadow=!0,Ye.receiveShadow=!0,rt.add(Ye),Ye}function x(tt,it,rt,Ye=o){let at=g(s,Ye,tt);return at.position.set(...it),at.scale.set(...rt),at}function m(tt,it,rt,Ye,at){it=new w(...it),rt=new w(...rt);let Je=rt.clone().sub(it),dt=g(new Ut(Ye,Ye,Je.length(),20),at,tt);return dt.position.copy(it).add(rt).multiplyScalar(.5),dt.quaternion.setFromUnitVectors(dm,Je.normalize()),dt}function u(tt,it,rt,Ye){return g(new on(new Xt(it.map(at=>new w(...at))),24,rt,7,!1),Ye,tt)}let E=new Ee;E.name="Cartoon forearm and right hand",n.add(E);function y(tt,it=.002){let rt=tt.geometry.clone(),Ye=rt.attributes.position,at=rt.attributes.normal;for(let dt=0;dt<Ye.count;dt++)Ye.setXYZ(dt,Ye.getX(dt)+at.getX(dt)*it,Ye.getY(dt)+at.getY(dt)*it,Ye.getZ(dt)+at.getZ(dt)*it);Ye.needsUpdate=!0,rt.computeBoundingSphere();let Je=new lt(rt,a);Je.name="Ink silhouette",Je.raycast=()=>{},tt.add(Je)}function _(tt,it,rt=28){let Ye=it.map(([Bt,I,J,ce,le])=>({z:Bt,x:I,y:J,rx:ce,ry:le})),at=[],Je=[],dt=[];for(let Bt=0;Bt<Ye.length;Bt++){let I=Ye[Bt];for(let J=0;J<=rt;J++){let ce=J/rt*Math.PI*2,le=Math.cos(ce),j=Math.sin(ce);if(at.push(I.x+I.rx*le,I.y+I.ry*j,I.z),Je.push(J/rt,Bt/(Ye.length-1)),Bt&&J){let Ie=Bt*(rt+1)+J;dt.push(Ie,Ie-rt-2,Ie-1,Ie,Ie-rt-1,Ie-rt-2)}}}let gn=new Pt;gn.setAttribute("position",new ht(at,3)),gn.setAttribute("uv",new ht(Je,2)),gn.setIndex(dt),gn.computeVertexNormals();let dn=g(gn,o,tt);return y(dn),dn}let P=_(E,[[0,0,0,.097,.078],[-.18,.004,0,.099,.077],[-.42,.008,.003,.092,.073],[-.7,.006,.002,.084,.066],[-1,0,0,.076,.061]],40);P.name="Upper arm";let b=x(E,[0,0,0],[.076,.061,.068]);b.name="Bent elbow";let R=hm(o,a);E.add(R.mesh);let A=new ft,O=new Ee;O.name="Cartoon right hand",E.add(O);let v=new yt;v.name="Saw contact above wrist",v.position.set(0,.044,.095),O.add(v);let T=new yt;T.name="Mug handle contact",T.position.set(0,-.036,-.145),O.add(T),_(O,[[.025,0,0,.037,.025],[0,0,0,.04,.026],[-.03,-.005,0,.059,.036],[-.066,-.005,0,.071,.04],[-.108,-.002,-.002,.071,.037],[-.14,.002,-.003,.065,.031],[-.16,.004,-.004,.051,.022],[-.17,.004,-.004,.006,.004]],40);let k=[],V=[];for(let[tt,it,rt,Ye]of[[0,-.056,.12,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.06,.1,-.23]]){let at=new Ee;at.position.set(it,-.002,-.137+(tt===3?.013:0)),at.rotation.y=Ye,O.add(at),k.push(at);let Je=tt===3?.0175:.02,dt=_(at,[[.014,0,0,Je*.92,Je*.9],[0,0,0,Je,Je],[-rt*.22,0,-.002,Je,Je*.98],[-rt*.48,0,-.005,Je*.96,Je*.94],[-rt*.7,0,-.009,Je*.92,Je*.9],[-rt*.84,0,-.012,Je*.86,Je*.84],[-rt*.94,0,-.014,Je*.64,Je*.64],[-rt*.985,0,-.014,Je*.3,Je*.3],[-rt,0,-.014,3e-4,3e-4]]);dt.name=`Finger ${tt+1}`,V.push(um(dt,rt)),at.userData.spread=Ye}let z=new yt;z.name="Lid contact fingertip",z.position.set(0,-.014,-.136),k[1].add(z);let H=new Ee;H.position.set(-.049,-.008,-.041),H.rotation.y=.88,H.rotation.z=-.26,O.add(H),_(H,[[.018,0,0,.033,.03],[0,0,0,.032,.03],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.02],[-.101,-.006,0,.012,.012],[-.107,-.006,0,3e-4,3e-4]]);let ee=new Ee;ee.name="Wrist cuff and chain \u2014 right-click to detach",ee.userData.playerChain=!0,n.add(ee);let oe=new Ee;oe.name="Close-fitting oval wrist cuff",ee.add(oe);let se=new w(0,0,.033),de=-.056;function N(tt,it,rt){let Ye=new wt;Ye.absellipse(0,0,.061,.049,tt,it,!1),Ye.lineTo(Math.cos(it)*.05,Math.sin(it)*.038),Ye.absellipse(0,0,.05,.038,it,tt,!0),Ye.closePath();let at=new en(Ye,{depth:.044,bevelEnabled:!0,bevelSize:6e-4,bevelThickness:6e-4,bevelSegments:2,curveSegments:28}),Je=g(at,p,rt);Je.position.z=-.022;for(let dt of[0,.044]){let gn=Array.from({length:25},(Bt,I)=>{let J=tt+(it-tt)*I/24;return[.0608*Math.cos(J),.0488*Math.sin(J),dt]}),dn=u(Je,gn,.0016,d);dn.name="Polished shackle rim"}return Je}let ne=N(Math.PI,Math.PI*2,oe);ne.name="Fixed lower cuff";let Q=new Ee;Q.name="Hinged upper cuff",Q.position.x=de,oe.add(Q);let te=N(0,Math.PI,Q);te.position.x=-de,m(oe,[de,0,-.03],[de,0,.03],.008,d);for(let tt of[-.029,.029])x(oe,[de,0,tt],[.009,.009,.003],d);g(new Et(.021,.027,.043),p,oe).position.set(.064,-.01,0);let ie=new Ee;ie.name="Spring-loaded locking clip",ie.position.set(.064-de,.012,0),Q.add(ie),g(new Et(.013,.027,.036),d,ie).position.set(.003,-.008,0),x(oe,[.064,-.006,-.0225],[.0038,.0038,.001],h),g(new Et(.003,.008,.0015),h,oe).position.set(.064,-.011,-.0225);for(let tt of[-.015,.015])x(ie,[.01,-.007,tt],[.002,.003,.003],d);let Z=g(new $t(.014,.0048,8,24),d,oe);Z.name="Welded chain attachment",Z.position.set(.076,-.019,0),Z.rotation.y=Math.PI/2;let ge=g(new Ut(.078,.078,.08,16),f,oe);ge.rotation.x=Math.PI/2,ge.castShadow=!1;let we=new Ee;we.name="Rusted rear pipe anchoring the wrist chain",t.add(we),u(we,[[3.3,.13,4.16],[3.3,.42,4.16],[3.3,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,c);for(let tt of[.3,1.25,2.08]){g(new Et(.2,.16,.025),c,we).position.set(3.3,tt,4.37);for(let Ye of[3.23,3.37]){m(we,[Ye,tt,4.35],[Ye,tt,4.14],.008,l);let at=g(new Ut(.017,.017,.018,6),l,we);at.rotation.x=Math.PI/2,at.position.set(Ye,tt,4.12)}let rt=g(new $t(.058,.01,8,32),l,we);rt.rotation.x=Math.PI/2,rt.position.set(3.3,tt,4.16)}let pe=new w(3.3,2.08,4.1),re=new w,L=g(new $t(.055,.009,8,24),l,we);L.name="Raised wrist-chain pipe anchor",L.position.copy(pe),L.rotation.y=Math.PI/2;let xe=[];for(let tt=0;tt<48;tt++){let it=tt/48*Math.PI*2;xe.push(new w(Math.cos(it)*.017,Math.sin(it)*.028,0))}let Re=new on(new Xt(xe,!0),32,.0055,6,!0),ve=new vn(Re,d,360);ve.name="Heavy interlocking wrist chain",ve.castShadow=!0,ve.receiveShadow=!0,ve.frustumCulled=!1,ee.add(ve);let be=new vn(new Jt(1,8,6),f,360);be.frustumCulled=!1,ee.add(be);let Le=new w,Ce=new w,D=new w,S=new w,K=new w,fe=new w,ye=new yt,_e=new w(.29,-.36,-.73),ke=new w(.45,-.65,-.5),Ue=new w(.15,-.31,-.77),Ve=new w(-.08,-.32,-.83),nt=new w,De=new w(.43,-.66,-.54),$=new w(.22,-.68,-.58),me=new w(.12,-.34,-.05),Ae=new w(0,0,-1),Pe=new w,Se=new w,he=new w,We=new ft,X=new ft,Te=!1,ae=new w,Me=new w,He=new w,ze=new w,ut=new ft,It=new ft,Ot=3,mt=new w(1,0,0),St=Array.from({length:49},()=>new w);function Kn(tt,it,rt){return rt.copy(S).lerp(re,tt),rt.addScaledVector(mt,Math.sin(Math.PI*tt)*it),rt.y-=Math.sin(Math.PI*tt)*it*.9,nt.copy(rt),n.localToWorld(nt),nt.y=Math.max(.032,nt.y),n.worldToLocal(nt),rt.copy(nt),rt}function Ki(){let tt=0,it=1.5;for(let Je=0;Je<9;Je++){let dt=(tt+it)/2,gn=0;for(let dn=0;dn<St.length;dn++)Kn(dn/(St.length-1),dt,St[dn]),dn&&(gn+=St[dn].distanceTo(St[dn-1]));gn>Ot?it=dt:tt=dt}let rt=new Xt(St),Ye=rt.getLength(),at=Math.min(360,Math.max(2,Math.ceil(Ye/.043)));ve.count=be.count=at;for(let Je=0;Je<at;Je++){let dt=Je/(at-1);rt.getPointAt(dt,ye.position),rt.getTangentAt(dt,fe),ye.quaternion.setFromUnitVectors(dm,fe),Je%2&&ye.rotateY(Math.PI/2),ye.scale.set(1,1,1),ye.updateMatrix(),ve.setMatrixAt(Je,ye.matrix),ye.scale.set(.032,.026,.032),ye.updateMatrix(),be.setMatrixAt(Je,ye.matrix)}ve.instanceMatrix.needsUpdate=!0,be.instanceMatrix.needsUpdate=!0}function Ui(tt,it=!1,rt=!1,Ye=null,at=0){let Je=r.sample(tt,rt),dt=Je.reach;n.position.copy(i.position),n.quaternion.copy(i.quaternion);let gn=Math.tan(Ge.degToRad(i.fov/2))/Math.tan(Ge.degToRad(62/2));if(n.scale.set(gn,gn,1),n.updateWorldMatrix(!0,!1),n.visible=Je.visible,E.visible=Je.locked,!Je.visible)return Je.openLaptop;re.copy(pe),n.worldToLocal(re);let dn=Ye?Ye.reveal:it?1:Je.reveal,Bt=(1-dn)*.55;Le.copy(_e).lerp(Je.locked?Ue:Ve,dt),Le.y+=at*.18,Le.x-=at*.12,Je.locked&&(Le.y+=it?0:Je.strain),Ce.copy(ke).lerp(Je.locked?De:$,dt);let I=!Je.locked&&Je.releaseElapsed<1.8&&Te,J=it&&!Je.locked?1:Je.hingeOpen,ce=it&&!Je.locked?1:Je.cuffDrop;if(I){Le.copy(Pe),Ce.copy(he);let le=it?1:Je.handFree;Le.y+=le*.055,Le.z+=le*.025}if(Le.y-=Bt,Ce.y-=Bt,K.copy(Ce).sub(Le).setLength(.35),Ce.copy(Le).add(K),D.copy(Ce).add(me),P.position.copy(D),K.copy(Ce).sub(D),P.quaternion.setFromUnitVectors(Ae,K.clone().normalize()),P.scale.z=K.length(),K.copy(Le).sub(Ce),A.setFromUnitVectors(Ae,K.clone().normalize()),b.position.copy(Ce),b.quaternion.copy(A),O.position.copy(Le),O.quaternion.copy(A),O.rotateX(-.12+dt*.08),O.rotateY(.13-dt*.06),O.rotateZ(-.04),I&&O.quaternion.slerp(We,1-Je.handFree),k.forEach((le,j)=>{le.rotation.x=-.06+(1-dt)*(.11+j*.015)}),H.rotation.x=0,H.rotation.y=.88,H.rotation.z=-.26,V.forEach(le=>le(0)),Ye){let le=Ye.blend,j=Ye.grip,Ie=Ye.gripKind==="handle";k.forEach((Be,Qe)=>{Be.rotation.x=Ge.lerp(Be.rotation.x,(Ie?-.16:-.46)+(Qe===0?.08:0),j),Be.rotation.y=Ge.lerp(Be.userData.spread,Be.userData.spread*.3,j)}),H.rotation.x=(Ie?.42:.28)*j,H.rotation.y=.88-(Ie?.58:.28)*j,Ie&&(V.forEach(Be=>Be(j)),H.rotation.z=-.26+.18*j),k[1].updateMatrix(),Ie?Me.copy(T.position):Me.copy(z.position).applyMatrix4(k[1].matrix),It.copy(i.quaternion).invert(),ut.copy(It).multiply(Ye.quaternion),ae.copy(Ye.position),n.worldToLocal(ae),He.copy(ae).sub(Me.applyQuaternion(ut)),O.position.lerp(He,le),O.quaternion.slerp(ut,le),Le.copy(O.position),D.set(.34,-.66-Bt,-.09),lm(D,Le,ze),Ce.lerp(ze,le),P.position.copy(D),K.copy(Ce).sub(D),P.quaternion.setFromUnitVectors(Ae,K.clone().normalize()),P.scale.z=K.length(),K.copy(Le).sub(Ce),A.setFromUnitVectors(Ae,K.clone().normalize()),b.position.copy(Ce),b.quaternion.copy(A)}else k.forEach(le=>{le.rotation.y=le.userData.spread});return R.update(Ce,O.position,O.quaternion),Je.locked?(oe.position.copy(se).applyQuaternion(O.quaternion).add(Le),oe.quaternion.copy(O.quaternion),Q.rotation.z=0,ie.rotation.z=0):(oe.position.copy(Se),oe.position.y-=Bt+ce*.32,oe.position.x+=ce*.08,oe.quaternion.copy(X),oe.rotateX(ce*.8),oe.rotateZ(ce*.42),Q.rotation.z=J*1.95,ie.rotation.z=-(it?1:Je.unlatch)*.85),oe.updateMatrix(),S.copy(Z.position).applyMatrix4(oe.matrix),Ot=S.distanceTo(re)+(Je.locked?.24*(1-dt)+.018:.42),Ki(),Je.openLaptop}function ii(tt){if(!r.locked)return!1;Pe.copy(Le),he.copy(Ce),We.copy(O.quaternion),X.copy(oe.quaternion),Se.copy(oe.position),Te=!0;let it=r.detach(tt);return it&&(E.visible=!1),it}function mn(){r.reset(),Te=!1,Q.rotation.z=0,ie.rotation.z=0,Ui(0,!0)}return Ui(0,!0),{group:t,target:ee,state:r,update:Ui,reset:mn,getSawContact:tt=>v.getWorldPosition(tt),endReach:()=>r.endReach(),setEnvironment(tt){for(let it of[c,l,p,d])it.envMap=tt,it.envMapIntensity=it===d?1.65:1.15,it.needsUpdate=!0},get locked(){return r.locked},requestReach:tt=>r.requestReach(tt),detach:ii}}function pm(i,{canDetach:e=()=>!0,onBlocked:t=()=>{}}={}){let n=document.querySelector("#chain-menu"),r=n.querySelector("button"),s=document.querySelector("#scene");function o(l=!1){n.hidden=!0,l&&s.focus({preventScroll:!0})}function a(l,h){r.setAttribute("aria-disabled",String(!e())),r.title=e()?"Unlock the shackle with the key":"Find the shackle key first",n.hidden=!1,n.style.left=`${Math.max(8,Math.min(l,innerWidth-n.offsetWidth-8))}px`,n.style.top=`${Math.max(8,Math.min(h,innerHeight-n.offsetHeight-8))}px`,r.focus({preventScroll:!0})}function c(){if(!e()){t();return}o(!0),i()}return r.addEventListener("click",c),n.addEventListener("contextmenu",l=>l.preventDefault()),document.addEventListener("pointerdown",l=>{!n.hidden&&!n.contains(l.target)&&o()},!0),document.addEventListener("keydown",l=>{n.hidden||(l.code==="Escape"?(l.preventDefault(),l.stopPropagation(),o(!0)):l.code==="KeyB"&&l.altKey&&l.metaKey&&!l.ctrlKey&&!l.shiftKey&&(l.preventDefault(),l.stopPropagation(),l.repeat||c()))},!0),window.addEventListener("blur",()=>o()),{show:a,hide:o,get active(){return!n.hidden}}}function mm(i,e){let t=i.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[],n=[],r=.1;for(let s of t){let o=s.replace(/[^\p{L}\p{N}'’]/gu,""),a=(o.toLowerCase().replace(/e$/,"").match(/[aeiouy]+/g)||[]).length,c=Math.max(1,Math.min(4,a)),l=.24+Math.min(o.length,10)*.025+(c-1)*.09;for(let h=0;h<c;h++){let p=l/c;n.push({start:r+h*p,end:r+(h+.87)*p,amount:.78+Math.min(o.length,6)*.025})}r+=l+(/[.!?…]/u.test(s)?.4:/[,;:]/.test(s)?.24:.11)}return{startTime:e,cues:n,duration:r}}function gm(i,e){if(!i)return 0;let t=e-i.startTime;for(let n of i.cues){if(t<n.start)return 0;if(t<=n.end){let r=(t-n.start)/(n.end-n.start),s=Math.min(1,r/.22),o=Math.min(1,(1-r)/.35),a=Math.min(s,o);return n.amount*a*a*(3-2*a)}}return 0}var Dd={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36},nE=i=>Ge.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function xm(i){let e=new w(...Dd.position),t=new w(...Dd.lookAt).sub(e).normalize(),n={yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(t.y),zoom:Dd.fov/i},r=null;return{start(s,o,a){r={time:s,position:o.clone(),yaw:a.yaw,pitch:a.pitch,zoom:a.zoom}},cancel(){r=null},get active(){return r!==null},update(s,o,a,c=!1){if(!r)return;let l=c?1:Ge.clamp((s-r.time)/1.4,0,1),h=l*l*(3-2*l);o.lerpVectors(r.position,e,h),a.yaw=r.yaw+nE(n.yaw-r.yaw)*h,a.pitch=Ge.lerp(r.pitch,n.pitch,h),a.zoom=Ge.lerp(r.zoom,n.zoom,h),l===1&&(o.copy(e),Object.assign(a,n),r=null)}}}var Er=(i,e,t)=>Ge.smootherstep(i,e,t),ym=i=>Ge.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function vm({laptop:i,restraint:e,cameraPosition:t,state:n}){let r=null,s=new w,o=new w,a=new w,c=new w,l=new ft,h=new ft,p=new ci,d=0,f=0,g=1,x=0,m=0,u={position:new w,quaternion:new ft,blend:0,grip:0,reveal:0};function E(P){return r!==null||e.locked||i.isOpen||!e.requestReach(P)?!1:(r=P,s.copy(t),d=n.yaw,f=n.pitch,g=n.zoom??1,i.object.updateWorldMatrix(!0,!1),i.object.localToWorld(o.set(.16,.78,1)),i.object.localToWorld(a.set(0,.32,-.02)),c.copy(a).sub(o).normalize(),x=Math.atan2(-c.x,-c.z),m=Math.asin(c.y),u.blend=u.grip=u.reveal=0,!0)}function y(P,b=!1){if(r===null)return!1;let R=P-r;if(b)return i.setOpenProgress(1),e.endReach(),r=null,!0;let A=Er(R,0,.7)*(1-Er(R,2.7,3.4));t.lerpVectors(s,o,A),n.zoom=Ge.lerp(g,1,A),n.yaw=ym(d+ym(x-d)*A),n.pitch=Ge.lerp(f,m,A);let O=Er(R,.96,2.21);return i.setOpenProgress(O),i.getLidGrip(u.position),i.object.getWorldQuaternion(l),h.setFromEuler(p.set(-.1-.28*O,0,-.1)),u.quaternion.copy(l).multiply(h),u.blend=Er(R,0,.8)*(1-Er(R,2.38,3.02)),u.grip=Er(R,.7,.92)*(1-Er(R,2.21,2.38)),u.reveal=Er(R,0,.18)*(1-Er(R,2.64,3.12)),R<3.4?!1:(t.copy(s),n.yaw=d,n.pitch=f,n.zoom=g,e.endReach(),r=null,!0)}function _(){r!==null&&(t.copy(s),n.yaw=d,n.pitch=f,n.zoom=g,e.endReach(),r=null)}return{start:E,update:y,cancel:_,get active(){return r!==null},get handPose(){return r===null?null:u}}}var _m=i=>Ge.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Mm({position:i,state:e,getView:t}){let n=null,r=null,s=new w,o=new w,a=new w,c=()=>({position:i.clone(),yaw:e.yaw,pitch:e.pitch,zoom:e.zoom});function l(g,x,m){r={from:c(),to:g,time:x,returning:m}}function h(g){n||(n=c()),t(s,o),a.subVectors(o,s).normalize(),l({position:s.clone(),yaw:Math.atan2(-a.x,-a.z),pitch:Math.asin(a.y),zoom:.9},g,!1)}function p(g){n&&l(n,g,!0)}function d(){n=null,r=null}function f(g,x=!1){if(!r)return;let m=x?1:Ge.smootherstep(g-r.time,0,.85),{from:u,to:E,returning:y}=r;i.lerpVectors(u.position,E.position,m),e.yaw=_m(u.yaw+_m(E.yaw-u.yaw)*m),e.pitch=Ge.lerp(u.pitch,E.pitch,m),e.zoom=Ge.lerp(u.zoom,E.zoom,m),m===1&&(r=null,y&&(n=null))}return{start:h,restore:p,cancel:d,update:f,get active(){return n!==null}}}function Em({saw:i,camera:e,restraint:t,hasKey:n}){let r=i.position.clone(),s=i.quaternion.clone(),o=new w,a=new ft,c=new w,l=new w,h=new w,p=new ft,d=new ft,f=new ft,g=new ft().setFromEuler(new ci(Math.PI/2,0,-.16,"ZYX")),x=new w,m=null,u=!1,E=0;function y(b){return n()||!t.locked||m!==null?!1:(i.getWorldPosition(o),i.getWorldQuaternion(a),t.requestReach(b),m=b,!0)}function _(b,R=!1){if(m===null||u)return!1;let A=b-m;if(R)E=Ge.smootherstep(A,.55,1.1);else{let O=Ge.smootherstep(A,0,1.25),v=A<1.4?0:Math.sin((A-1.4)*Math.PI*6)*.085*Ge.smoothstep(A,1.4,1.7);t.getSawContact(c),d.copy(e.quaternion).multiply(g),h.set(-.06,0,.07).applyQuaternion(d),l.copy(c).sub(h),x.set(1,0,0).applyQuaternion(e.quaternion),l.addScaledVector(x,v),i.position.lerpVectors(o,l,O),i.parent.worldToLocal(i.position),p.slerpQuaternions(a,d,O),i.parent.getWorldQuaternion(f),i.quaternion.copy(f.invert()).multiply(p),E=Ge.smootherstep(A,2.75,3.55)}return A<(R?1.2:3.65)?!1:(u=!0,E=1,t.endReach(),!0)}function P(){m=null,u=!1,E=0,i.position.copy(r),i.quaternion.copy(s),t.endReach()}return{start:y,update:_,reset:P,armLift:(b,R=!1)=>m===null||R?0:Ge.smootherstep(b-m,.24,.95),get active(){return m!==null&&!u},get finished(){return u},get blackout(){return E}}}var Ai=(i,e,t)=>Ge.smootherstep(i,e,t);function wm({mug:i,camera:e,restraint:t}){let n=i.position.clone(),r=i.quaternion.clone(),s=new w,o=new ft,a=new w,c=new ft,l=new w,h=new w,p=new w,d=new w,f=new ft,g=new ft,x=new ft,m=new ft,u=new ft().setFromAxisAngle(new w(0,1,0),Math.PI),E=new ft().setFromAxisAngle(new w(0,0,1),-Math.PI/2),y=i.getObjectByName("Mug handle grip"),_=["Mug left ear tip","Mug right ear tip"].map(de=>i.getObjectByName(de)),P=new w,b=new w,R=new w,A=new w,O=new w,v={position:new w,quaternion:new ft,blend:0,grip:0,reveal:0,gripKind:"handle"},T=null,k=!1,V=0,z=0,H=0;function ee(de){if(t.locked||T!==null||k||!t.requestReach(de))return!1;i.updateWorldMatrix(!0,!1),i.getWorldQuaternion(o),e.updateWorldMatrix(!0,!1),e.getWorldPosition(a),e.getWorldQuaternion(c),d.set(0,-.22,-.12).applyQuaternion(c),P.set(0,0,0),A.set(0,0,0),_.forEach((te,F)=>{te.getWorldPosition(b),i.worldToLocal(b),P.add(b),A.addScaledVector(b,F?1:-1)}),P.multiplyScalar(.5),i.getWorldScale(O),s.copy(P),i.localToWorld(s),m.setFromAxisAngle(new w(1,0,0),.82),g.copy(m).multiply(u),A.multiply(O).applyQuaternion(g);let N=e.projectionMatrix.elements,ne=Math.max(e.near*2,Math.abs(A.x)*.5*N[0]/.4);function Q(te,F){return F.set(0,.08*te/N[5],-te).applyQuaternion(c).add(a)}return Q(ne+.3,l),Q(ne,h),T=de,V=z=H=0,v.blend=v.grip=v.reveal=0,!0}function oe(de,N=!1){if(T===null||k)return!1;let ne=de-T;if(N){if(z=Ai(ne,.15,.2),H=.12*Ai(ne,.2,.65),V=Ai(ne,.65,1.15),ne<1.25)return!1}else{let Q=Ai(ne,.82,2.12),te=Ai(ne,2.28,3.7);if(m.setFromAxisAngle(new w(1,0,0),.82*te),g.copy(c).multiply(m).multiply(u),f.slerpQuaternions(o,g,Q),p.lerpVectors(l,h,te).lerp(s,1-Q),p.y+=Math.sin(Math.PI*Q)*.08,R.copy(P).multiply(O).applyQuaternion(f),p.sub(R),p.addScaledVector(d,Ai(ne,3.82,4.2)),i.position.copy(p),i.parent.worldToLocal(i.position),i.parent.getWorldQuaternion(x),i.quaternion.copy(x.invert()).multiply(f),i.updateWorldMatrix(!0,!1),y.getWorldPosition(v.position),v.quaternion.copy(f).multiply(u).multiply(E),v.blend=Ai(ne,0,.72),v.grip=Ai(ne,.48,.8),v.reveal=Ai(ne,0,.22),z=Ai(ne,3.7,3.76),H=Ai(ne,3.76,5.2),V=Ai(ne,4.85,5.5),ne<5.6)return!1}return k=!0,V=1,t.endReach(),!0}function se(){T=null,k=!1,V=z=H=0,i.position.copy(n),i.quaternion.copy(r),i.updateWorldMatrix(!0,!1),v.blend=v.grip=v.reveal=0,t.endReach()}return{start:ee,update:oe,reset:se,get active(){return T!==null&&!k},get finished(){return k},get blackout(){return V},get eyeImpact(){return z},get eyeGrowth(){return H},get handPose(){return T!==null&&!k?v:null}}}var gt=document.querySelector("#scene"),iE=gt.getAttribute("aria-label"),ni=matchMedia("(prefers-reduced-motion: reduce)").matches,Ao={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62},qr=new w(...Ao.position),Ud=new w(...Ao.lookAt).sub(qr).normalize(),Xr={yaw:Math.atan2(-Ud.x,-Ud.z),pitch:Math.asin(Ud.y)},qe={yaw:Xr.yaw,pitch:Xr.pitch,zoom:1,jaw:0,space:!1,time:0,talkUntil:0},Cn=new Vc({canvas:gt,antialias:!Ht.mobile,alpha:!1,powerPreference:"high-performance"});Cn.setPixelRatio(Ht.pixelRatio);Cn.localClippingEnabled=!0;Cn.shadowMap.enabled=!0;Cn.shadowMap.autoUpdate=!1;Cn.shadowMap.type=od;Cn.outputColorSpace=xt;Cn.toneMapping=ad;Cn.toneMappingExposure=.76;var Ei=new Wc;Ei.background=new pt(1449240);Ei.fog=new Gc(2305314,11,26);var Pa=S0(Cn,Ei),jt=new On(Ao.fov,1,.06,35),_n=qr.clone(),Hn=xm(Ao.fov),Sm=new w,Tm=new w,Hd=new w,rE=new tl(9545120,2370600,.62);Ei.add(rE);var zm=17.5,$i=new uo(12898992,zm,12,1.25,.72,2);$i.position.set(.22,2.83,-.55);$i.target.position.set(0,0,-.1);$i.castShadow=!0;$i.shadow.mapSize.set(Ht.shadowSize,Ht.shadowSize);$i.shadow.camera.near=.1;$i.shadow.camera.far=11;$i.shadow.normalBias=.0025;$i.shadow.bias=-5e-5;Ei.add($i,$i.target);var Ii=new nl(10269877,.85);Ii.position.set(6.2,4.1,-1.6);Ii.target.position.set(-1,.35,-.3);Ii.castShadow=!Ht.mobile;Ii.shadow.mapSize.set(1024,1024);Ii.shadow.camera.left=-6;Ii.shadow.camera.right=6;Ii.shadow.camera.top=5;Ii.shadow.camera.bottom=-5;Ii.shadow.normalBias=.003;Ii.shadow.bias=-6e-5;Ei.add(Ii,Ii.target);var Bm=new zn(9348772,2.2,10,2);Bm.position.set(-1,2.6,4);Ei.add(Bm);var Ci=Ge.lerp;function or(i,e=.9){return new Fe({color:i,roughness:e})}function Nn(i,e,t=Ei){let n=new lt(i,e);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),n}function Yr(i,e,t,n,r=3){let s=Nn(new jc(1,r),typeof e=="string"||typeof e=="number"?or(e):e,i);return s.position.set(...t),s.scale.set(...n),s}function Co(i,e,t,n,r=!1){let s=new Xt(i.map(o=>o.isVector3?o:new w(...o)),r);return Nn(new on(s,Math.max(24,i.length*2),e,8,r),t,n)}function sE(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d"),t=2718,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=([l,h])=>[(l+2)/4*i.width,(1-h/3)*i.height];function s(l,h,p=["rgba(211,12,57,.66)","rgba(227,17,62,.50)"]){let d=l.map(r);e.lineCap="round",e.lineJoin="round";for(let f=0;f<3;f++){e.strokeStyle=p[f===0?0:1];for(let g=1;g<d.length;g++){let x=Math.sin(g*1.37+f)*.08+Math.sin(g*.42)*.1;e.lineWidth=h*i.width/4*(1+x)*(f===0?1.13:.77);let m=(n()-.5)*1.5,u=(n()-.5)*1.5;e.beginPath(),e.moveTo(d[g-1][0]+m,d[g-1][1]+u),e.lineTo(d[g][0]+m,d[g][1]+u),e.stroke()}}}let o=[];for(let l=0;l<=140;l++){let h=l/140,p=Ci(-1.65,1.23,h),d=.16*Math.exp(-Math.pow((p+1.65)/.26,2))+.06*Math.pow(Math.max(0,(p-.42)/.81),2);o.push([p,1.45-d+.006*Math.sin(h*12)])}s(o,.075,["rgba(23,25,24,.98)","rgba(23,25,24,.94)"]);let a=[];for(let l=0;l<=80;l++){let h=l/80;a.push([Ci(-.68,.42,h),1.452+.009*Math.sin(h*15)+.012*Math.sin(h*7)])}s(a,.18);for(let l of[-1,1]){let h=[],p=l===-1?-1.13:1.15,d=1.68;for(let f=0;f<=240;f++){let g=f/240,x=g*Math.PI*6.1,m=.017+g*.272+.003*Math.sin(g*39+l);h.push([p+Math.cos(x)*m,d+Math.sin(x)*m*.92+.003*Math.sin(g*43)])}s(h,.047)}e.globalCompositeOperation="destination-out";for(let l=0;l<14e3;l++){e.fillStyle=`rgba(0,0,0,${.08+n()*.48})`;let h=n()*i.width,p=n()*i.height;e.fillRect(h,p,.35+n()*1.2,.4+n()*1.8)}for(let l=0;l<1600;l++){e.strokeStyle=`rgba(0,0,0,${.05+n()*.17})`,e.lineWidth=.4+n()*.7;let h=n()*i.width,p=n()*i.height;e.beginPath(),e.moveTo(h,p),e.lineTo(h+2+n()*6,p+n()*2-1),e.stroke()}let c=new zt(i);return c.colorSpace=xt,c.anisotropy=Cn.capabilities.getMaxAnisotropy(),c}var oE=sE(),Ll=new Fe({color:13882826,roughness:.94});Ll.onBeforeCompile=i=>{i.uniforms.lipstickPaint={value:oE},i.vertexShader=`varying vec3 vStone;
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
 `)};var aE=or(2104866,.98),cE=or(7350072,.98),km=new vt({color:525833,side:Dt}),Yi=new Ee;Yi.name="Figsaw and tricycle";Ei.add(Yi);var En=new Ee;En.name="Figsaw\u2019s red tricycle";Yi.add(En);var Po=new Fe({color:13185848,roughness:.44,metalness:.28}),$r=new Fe({color:11449779,roughness:.34,metalness:.72}),ba=new Fe({color:5462617,roughness:.46,metalness:.65}),Vm=or(8856619,.86),Kd=or(1514523,.93),Gm=or(2369317,.85);function ar(i,e,t,n,r){let s=new w(...e),o=new w(...t),a=o.clone().sub(s),c=Nn(new Ut(n,n,a.length(),16),r,i);return c.position.copy(s).add(o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new w(0,1,0),a.normalize()),c}var Wm=[];function Jd(i,e,t,n,r){let s=new Ee;s.position.set(i,e,t),s.rotation.y=Math.PI/2,s.name=r===8?"Large front wheel":"Small rear wheel",En.add(s),s.userData.radius=n,Wm.push(s);let o=n>.7?.045:.033;Nn(new $t(n-o,o,12,80),Kd,s),Nn(new $t(n-o*2,.018,10,80),ba,s);for(let a of[-1,1]){let c=Nn(new $t(n-o*1.65,.006,6,80),$r,s);c.position.z=a*.024}for(let a=0;a<r;a++){let c=a/r*Math.PI*2+.16;ar(s,[0,0,0],[Math.cos(c)*(n-o*2),Math.sin(c)*(n-o*2),0],n>.7?.013:.011,ba)}ar(s,[0,0,-.14],[0,0,.14],.082,Po);for(let a of[-1,1])Yr(s,$r,[0,0,a*.15],[.061,.061,.027],2);return s}var Qd=1.39,jd=1.52,wl=.89,To=-1.23;Jd(0,Qd,jd,.86,8);Jd(-1.05,wl,To,.36,6);Jd(1.05,wl,To,.36,6);ar(En,[-1.16,wl,To],[1.16,wl,To],.045,ba);var bm=new Xt([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(i=>new w(...i))),Xm=[],Dl=[],Ma=64;for(let i=0;i<=Ma;i++){let e=bm.getPoint(i/Ma),t=bm.getTangent(i/Ma),n=new w(0,-t.z,t.y).normalize();for(let[r,s]of[[-.055,-1],[.055,-1],[.055,1],[-.055,1]])Xm.push(e.x+r,e.y+n.y*.074*s,e.z+n.z*.074*s);if(i<Ma)for(let r=0;r<4;r++){let s=i*4+r,o=i*4+(r+1)%4;Dl.push(s,o+4,o,s,s+4,o+4)}}Dl.push(0,1,2,0,2,3);var xo=Ma*4;Dl.push(xo,xo+2,xo+1,xo,xo+3,xo+2);var Ul=new Pt;Ul.setAttribute("position",new ht(Xm,3));Ul.setIndex(Dl);Ul.computeVertexNormals();Nn(Ul,Po,En);ar(En,[0,1.72,-.45],[0,2.02,-.45],.064,Po);var lE=Nn(new Et(1.91,.07,.29),Po,En);lE.position.set(0,.99,To);for(let i=-5;i<=5;i++)Nn(new Et(.012,.006,.24),Vm,En).position.set(i*.16,1.028,To);var Io=new wt;Io.moveTo(-.2,-.58);Io.bezierCurveTo(-.3,-.18,-.72,.02,-.7,.34);Io.bezierCurveTo(-.66,.57,.66,.57,.7,.34);Io.bezierCurveTo(.72,.02,.3,-.18,.2,-.58);Io.quadraticCurveTo(0,-.7,-.2,-.58);var qm=Nn(new en(Io,{depth:.08,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),Gm,En);qm.rotation.x=-Math.PI/2;qm.position.set(0,2,-.45);for(let i of[-1,1])Co([[i*.16,Qd,jd],[i*.18,1.76,1.48],[i*.17,2.1,1.29],[i*.1,2.27,1.2]],.046,Po,En);ar(En,[0,2.15,1.22],[0,2.43,1.17],.084,Po);Co([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,$r,En);Co([[-1.11,2.99,.86],[-1.1,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.6,2.69,1.45],[0,2.69,1.43],[.6,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.1,2.98,1.12],[1.11,2.99,.86]],.048,$r,En);ar(En,[-.1,2.69,1.43],[.1,2.69,1.43],.064,$r);Yr(En,ba,[0,2.69,1.491],[.027,.027,.015],2);for(let i of[-1,1])ar(En,[i*1.1,2.98,1.12],[i*1.11,2.99,.86],.061,Vm),Yr(En,ba,[i*1.11,2.99,.85],[.061,.061,.022],2);var Zr=new Ee;Zr.name="Rotating pedal crank";Zr.position.set(0,Qd,jd);En.add(Zr);var Ym=[];for(let i of[-1,1]){let e=i*.17,t=-i*.19;ar(Zr,[i*.17,0,0],[i*.3,e,t],.025,$r),ar(Zr,[i*.3,e,t],[i*.53,e,t],.023,$r);let n=new Ee;n.position.set(i*.44,e,t),Zr.add(n),Ym.push(n),Nn(new Et(.27,.075,.19),Kd,n);for(let r=-1;r<=1;r++)Nn(new Et(.24,.008,.012),Gm,n).position.set(0,.041,r*.05)}function hE(i){for(let e of Wm)e.rotation.z=i/e.userData.radius;Zr.rotation.x=i/.86;for(let e of Ym)e.rotation.x=-Zr.rotation.x}Yr(En,$r,[-.47,2.76,1.45],[.085,.055,.085]);ar(En,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,Kd);var Zm=.72,$m=2.08,kn=new Ee;kn.scale.setScalar(Zm);kn.position.set(0,$m,-.45);Yi.add(kn);var Hl=2.8,_i=64,Km=160,Zn=32,An=8*Math.PI*2/Km,Gd=-.13,uE=.05+Zn/_i*Hl,Rm=.12;function dE(i){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.4)*(1.19-.45*i)}function Ra(i,e){let t=dE(i),n=1+.018*Math.sin(e*5+i*9)+.012*Math.cos(e*9-i*7),r=Ge.clamp(i/(Zn/_i),0,1),s=i<Zn/_i?.2*Math.pow(Math.sin(Math.PI*r),.8)*Math.pow(Math.max(0,Math.cos(e)),3):0,o=new w(Math.sin(e)*t*n-.28*i,.05+i*Hl,Math.cos(e)*t*.68*n+s),a=Ge.smoothstep(Math.cos(e),.25,.65);for(let c of[-1.13,1.15]){let l=((o.x-c)/.36)**2+((o.y-1.68)/.33)**2;l<1&&(o.z+=.09*(1-l)**2*a)}return o}function Wd(i,e){let t=-Math.PI/2,n=Math.PI/2;for(let r=0;r<22;r++){let s=(t+n)/2;Ra(i,s).x<e?t=s:n=s}return(t+n)/2}var Am=[Ra(Zn/_i,-An).x,Ra(Zn/_i,An).x],Nd=new Map;function fE(i){if(i===0||i>=Zn/_i)return[-An,An];let e=i.toFixed(7);if(Nd.has(e))return Nd.get(e);let t=i/(Zn/_i),n=Math.sin(Math.PI*t),r=[Wd(i,Am[0]-.018*n),Wd(i,Am[1]+.018*n)];return Nd.set(e,r),r}function Nl(i,e){if(i<=Zn/_i){let[t,n]=fE(i);e<-An?e=Ci(-Math.PI,t,(e+Math.PI)/(Math.PI-An)):e<=An?e=Ci(t,n,(e+An)/(An*2)):e=Ci(n,Math.PI,(e-An)/(Math.PI-An))}return Ra(i,e)}function Jm(i,e){let t=(e-.05)/Hl;return Ra(t,Wd(t,i)).z}function ef(i=!1,e=!1){let t=[],n=[],r=i?-An:-Math.PI,s=i?An:Math.PI,o=i?20:Km,a=i?Zn:_i;for(let l=0;l<=a;l++)for(let h=0;h<=o;h++){let p=Nl(l/_i,Ci(r,s,h/o));e&&(p.z=Math.min(p.z-.24,.72)),t.push(p.x,p.y,p.z)}for(let l=0;l<a;l++)for(let h=0;h<o;h++){let p=Ci(r,s,(h+.5)/o);if(!i&&l<Zn&&Math.abs(p)<An-1e-4)continue;let d=l*(o+1)+h,f=d+1,g=d+o+2,x=d+o+1;n.push(d,f,x,f,g,x)}let c=new Pt;return c.setAttribute("position",new ht(t,3)),c.setIndex(n),c.computeVertexNormals(),c}var Qm=new vt({color:1513752,side:yn});Qm.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.058;`)};function jm(i,e){let t=new lt(i,Qm);return t.name="Black stone outline",e.add(t),t}var eg=ef(),pE=Nn(eg,Ll,kn);pE.name="Figsaw";jm(eg,kn);var mE=Nn(ef(!0,!0),km,kn);mE.castShadow=!1;function tg(i,e=!1){let t=[],n=[];for(let o=0;o<=40;o++){let a=Nl(Zn/_i,Ci(-An,An,o/40)),c=a.y+(e?-.008:.008);if(t.push(a.x,c,a.z-.075,a.x,c,.7),o<40){let l=o*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}}let r=new Pt;r.setAttribute("position",new ht(t,3)),r.setIndex(n),r.computeVertexNormals();let s=Nn(r,km,i);s.castShadow=!1}tg(kn);var Ss=new Ee;kn.add(Ss);function gE(){let i=ef(!0),e=Array.from(i.attributes.position.array),t=Array.from(i.index.array),n=i.attributes.position.count;for(let o=0;o<n;o++)e.push(e[o*3],e[o*3+1],e[o*3+2]-.14);let r=t.slice();for(let o=0;o<r.length;o+=3)t.push(r[o]+n,r[o+2]+n,r[o+1]+n);let s=[];for(let o=0;o<=20;o++)s.push(o);for(let o=1;o<=Zn;o++)s.push(o*21+20);for(let o=19;o>=0;o--)s.push(Zn*21+o);for(let o=Zn-1;o>0;o--)s.push(o*21);for(let o=0;o<s.length;o++){let a=s[o],c=s[(o+1)%s.length];t.push(a,a+n,c,c,a+n,c+n)}return i.setAttribute("position",new ht(e,3)),i.setIndex(t),i.deleteAttribute("normal"),i.computeVertexNormals(),i}var ng=gE(),ig=Ll.clone();ig.onBeforeCompile=Ll.onBeforeCompile;Nn(ng,ig,Ss);jm(ng,Ss);tg(Ss,!0);Yr(Ss,cE,[Gd,uE-.025,.83],[.25,.016,.055]);var rg=[];for(let i=0;i<=30;i++){let e=Nl(Zn/_i,Ci(-An,An,i/30));e.z+=.002,rg.push(e)}Co(rg,.008,aE,kn);for(let i of[-1,1]){let e=[];for(let t=4;t<=Zn;t++){let n=Nl(t/_i,i*An);n.z+=.009,e.push(n)}Co(e,.033,new vt({color:1513752}),kn)}var sg=[],tf=or(16061736,.36);tf.emissive.set(12127514);tf.emissiveIntensity=.12;var Sl={headYaw:0,gazeYaw:0,gazePitch:0},Fd=new w,yo=new w,Cm=new w,xE=new w(0,1,0),Pm=new ft;for(let i of[-1,1]){let e=i*.42-.09,t=1.84+(i===-1?.045:0),n=Jm(e,t)+.044,r=new Ee;r.position.set(e,t,n),kn.add(r),sg.push(r),Yr(r,or(1052693,.25),[0,0,0],[.156,.156,.075]),Yr(r,tf,[0,0,.055],[.084,.084,.029]),Yr(r,or(657676,.32),[0,0,.074],[.039,.039,.016])}var bo=new Ee;bo.name="Red bow tie";bo.position.set(Gd,.4,Jm(Gd,.4)+.065);Ss.add(bo);var og=new qt({color:13046566,roughness:.76,sheen:.55,sheenColor:15747667,sheenRoughness:.82}),Kr=new wt;Kr.moveTo(.055,.065);Kr.bezierCurveTo(.18,.085,.32,.185,.43,.19);Kr.quadraticCurveTo(.49,.19,.485,.12);Kr.bezierCurveTo(.47,.03,.5,-.075,.48,-.14);Kr.quadraticCurveTo(.47,-.195,.4,-.175);Kr.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);Kr.closePath();var yE=new en(Kr,{depth:.055,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});for(let i of[-1,1]){let e=Nn(yE,og,bo);e.scale.x=i,e.rotation.y=-i*.1;let t=or(9965598,.9);for(let n of[-1,1])Co([[i*.09,n*.026,.08],[i*.19,n*.055,.087],[i*.34,n*.11,.088]],.005,t,bo)}var ag=Nn(new Jt(1,24,16),og,bo);ag.position.set(0,0,.07);ag.scale.set(.105,.12,.075);var nf=.26,vo=-.53*nf+.0036;Yi.scale.setScalar(nf);var Tl=new Xt([[2.45,vo,-2.4],[2.05,vo,-1.7],[1.05,vo,-1.28],[.35,vo,-1.1],[.24,vo,-.66],[.12,vo,.1]].map(i=>new w(...i)),!1,"centripetal");Tl.arcLengthDivisions=240;var cg=1,lg=8.5,vE=Tl.getLength(),yl=new w,Od=new w,qi=document.querySelector("#figsaw-dialogue"),hg=document.querySelector("#dialogue-announcement"),ug=document.querySelector("#game-countdown"),wa=document.querySelector("#countdown-announcement"),Sa=null,Xd=300,bl=["I want to play a game...","Those who don't appreciate design do not deserve it.","Complete the design challenges to escape... but every 5 minutes one of your Figpals will be dropped into the tank of acid.","Let the games begin..."],Rl=-1,rf=1/0,vl=new w,_s=new w,_l=new xa,zd=new w,dg=0,_o=!1,qd=0,Im=!1,Yd=0,sf=null;function fg(i){let e=bl[i];Rl=i,qi.classList.toggle("long-dialogue",e.length>80),qi.querySelector(".dialogue-bubble span").textContent=e,hg.textContent=`Figsaw. ${e}`;let t=mm(e,qe.time);sf=ni?null:t,rf=i<bl.length-1?t.startTime+t.duration+1:1/0,i===0&&(Sa=t.startTime+t.duration)}function of(i){let e=i-dg-cg,t=ni?1:Ge.smoothstep(e,0,lg);Tl.getPointAt(t,yl),Tl.getTangentAt(t,Od),Yi.position.copy(yl),Yi.rotation.y=Math.atan2(Od.x,Od.z);let n=Math.atan2(qr.x-yl.x,qr.z-yl.z),r=Ge.euclideanModulo(n-Yi.rotation.y+Math.PI,Math.PI*2)-Math.PI;hE(t*vE/nf),t===1&&!_o&&(_o=!0,qd=i,Hn.start(qe.time,_n,qe),fg(0)),R0(_o?i-qd:-1,ni,Sl),kn.rotation.y=Ge.clamp(r*.58,-.7,.7)+Sl.headYaw}of(0);Pa.mark("characterBuilt");var{group:Ia,laptop:Zi,catMug:La,handsaw:Da,acidLeaks:Fn,chargingKit:Bn,ketchupKey:Pi,countdown:Mo,setDisplayEnvironment:_E,update:ME,figpalHoists:wr,toggleHoist:EE}=rm(Cn,qr);Ei.add(Ia);Pa.mark("officeBuilt");var Kt=fm(jt,{canDetach:()=>Pi.hasKey});Ei.add(Kt.group);var $n=vm({laptop:Zi,restraint:Kt,cameraPosition:_n,state:qe}),Yn=Mm({position:_n,state:qe,getView:Bn.getDrawerView}),ln=wm({mug:La,camera:jt,restraint:Kt}),Mn=Em({saw:Da,camera:jt,restraint:Kt,hasKey:()=>Pi.hasKey}),Aa=document.querySelector("#game-over"),pg=Aa.querySelector(".game-over-content"),mg=document.querySelector("#restart-game"),Eo=document.querySelector("#mug-eye-impact"),Vn=!1;mg.addEventListener("click",()=>{Zd({skipIntro:!0}),gt.focus({preventScroll:!0})});var Mi=document.querySelector("#restraint-status"),Ta=document.querySelector("#charging-hint"),Ro=null,Es=null,Ms="",Fl=0,cr=pm(()=>{if(!Pi.hasKey){wo("The shackle is locked. Find its key first.");return}Kt.detach(qe.time)&&(Mi.textContent="Instance detached. Your wrist is free. You can open the laptop, drink from the cat mug, or turn a tank drain valve.",gt.classList.remove("over-chain"),gt.setAttribute("aria-label",gt.getAttribute("aria-label").replace("Your wrist is chained to the rear pipes. Pour the glass ketchup bottle beside the cat mug, collect the key, then click or right-click the shackle and choose Detach instance to free your hand.","Your wrist is free. Click the laptop, cat mug, or a red tank drain valve to use it.")))},{canDetach:()=>Pi.hasKey,onBlocked:()=>wo("The shackle is locked. Find its key first.")}),Al=om(wr),ws=am(wr.speechAnchors,gt,wr.canSpeak),gg=sm(wr,ws),xg=w0(Cn);_E(xg.texture);Kt.setEnvironment(xg.texture);Fn.bindTargets([Ia,Yi]);E0(Ia,{exclude:[Zi.object,La,Da,wr.group,Mo.group,Bn.group,Pi.group]});Pa.mark("scenePrepared");function wE(i){if(!_o||Al.active){qi.hidden=!0;return}kn.localToWorld(vl.set(-.28,Hl+.24,0)),_s.copy(vl).project(jt);let e=Math.min(.7,.4/(jt.position.distanceTo(vl)*Math.tan(Ge.degToRad(jt.fov/2))*jt.aspect));if(_s.z<-1||_s.z>1||Math.abs(_s.x)>1+e||Math.abs(_s.y)>1){qi.hidden=!0;return}if(i>=Yd){Yd=i+.12,zd.copy(vl).sub(jt.position);let s=zd.length();_l.set(jt.position,zd.normalize()),_l.near=.06,_l.far=Math.max(.06,s-.035),Im=_l.intersectObject(Ia,!0).length>0}if(Im){qi.hidden=!0;return}qi.hidden=!1;let t=gt.getBoundingClientRect(),n=t.left+(_s.x*.5+.5)*t.width,r=t.top+(-_s.y*.5+.5)*t.height;qi.style.transform=`translate3d(${n}px,${r-8}px,0) translate(-50%,-100%)`}var Lm=new xa,Dm=new Oe;function af(i){let e=gt.getBoundingClientRect();Dm.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),Lm.setFromCamera(Dm,jt);let t=Lm.intersectObjects([Ia,Yi,Kt.group],!0).find(n=>{for(let r=n.object;r;r=r.parent)if(!r.visible)return!1;return!0});for(let n=t?.object;n;n=n.parent)if(n===Kt.target||n===Zi.object||n===La||n===Da||n===kn||n.userData.chargingAction||n.userData.keyAction||Number.isInteger(n.userData.valveIndex)||Number.isInteger(n.userData.hoistIndex))return n;return null}function wo(i){Ms=i,Fl=qe.time+4.5,Mi.textContent=i}function SE(i){$n.active||ln.active||Mn.active||Vn||Fn.dying||(Hn.cancel(),ui=!1,i==="pour"?Pi.pour(qe.time)?wo("You tip the bottle. Something metal is sliding through the ketchup\u2026"):wo(Pi.hint("pour")):i==="collect"&&Pi.collect()&&(wo("Shackle key collected. Click your shackle and choose Detach instance."),Kt.requestReach(qe.time)))}function cf(i){if(!i||$n.active||ln.active||Mn.active||Vn||Fn.dying)return;let e=Bn.drawerOpen,t=Bn.phase;Es=null,gt.classList.remove("over-charging"),Kt.locked&&Kt.requestReach(qe.time),i==="charger"&&Bn.phase==="drawer"&&!Bn.drawerReady&&!Kt.locked?Ms="Let the drawer finish opening.":Ms=Bn.use(i,qe.time,Kt.locked),Fl=qe.time+3.8,Mi.textContent=Ms,Hn.cancel(),ui=!1,Kt.locked||(i==="drawer"&&!e&&Bn.drawerOpen?(Di(),Yn.start(qe.time)):(i==="drawer"&&e&&!Bn.drawerOpen||t==="drawer"&&Bn.phase==="carrying")&&(Di(),Yn.restore(qe.time)))}function TE(){let i=qe.time<Fl?Ms:Ro?Pi.hint(Ro):Es?Bn.hint(Es):Pi.hasKey&&Kt.locked?"Shackle key collected \xB7 Click the shackle to unlock":Bn.hint(null);Ta.textContent!==i&&(Ta.textContent=i),Ta.hidden=!i||Vn||ln.active||Mn.active||$n.active}function yg(){if(!($n.active||ln.active||Mn.active||Vn||Fn.dying)){if(Kt.locked){Kt.requestReach(qe.time),Mi.textContent="The chain pulls tight. You can't reach the laptop.";return}if(Bn.phase==="powered"){cf("laptop");return}if(Zi.isOpen){vg();return}Yn.cancel(),$n.start(qe.time)&&(Di(),Hn.cancel(),ui=!1,Mi.textContent="You reach for the front edge of the laptop.")}}function vg(i=!1){!i&&!Zi.open()||(Mi.textContent="You lift the lid and let go. The laptop is open.",gt.classList.remove("over-laptop"),gt.setAttribute("aria-label",gt.getAttribute("aria-label").replace("a closed MacBook Pro","an open MacBook Pro").replace(" Click the laptop or press Enter to open it.","")))}function _g(){if(!($n.active||ln.active||Mn.active||Vn||Fn.dying)){if(Kt.locked){Kt.requestReach(qe.time),Mi.textContent="The chain pulls tight. Detach the shackle before picking up the mug.";return}ln.start(qe.time)&&(Yn.cancel(),Di(),Hn.cancel(),ui=!1,cr.hide(),gt.classList.remove("over-mug"),Mi.textContent="You pick up the cat mug by its handle and raise it for a drink.")}}function bE(){if(!($n.active||ln.active||Mn.active||Vn||Fn.dying)){if(Pi.hasKey){wo("You already have the key. There is no need to use the saw.");return}Mn.start(qe.time)&&(Yn.cancel(),Hn.cancel(),ui=!1,Di(),cr.hide(),Ms="",Ta.hidden=!0,gt.classList.remove("over-saw"),Mi.textContent="You pick up the saw and start sawing at your chained wrist.")}}function Mg(i){if(!($n.active||ln.active||Mn.active||Vn||Fn.dying)){if(Kt.locked){Kt.requestReach(qe.time),Mi.textContent="The chain pulls tight. Detach the shackle before turning a tank valve.";return}Fn.open(i,qe.time,Kt.locked)&&(Yn.cancel(),Hn.cancel(),ui=!1,cr.hide(),Mi.textContent=`Tank ${i+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`)}}function RE(){let i=0,e=1/0,t=new w;return wr.valves.forEach((n,r)=>{n.object.getWorldPosition(t);let s=t.distanceToSquared(_n);s<e&&(e=s,i=r)}),i}function Bd(i){Vn||(Vn=!0,Yn.cancel(),Di(),cr.hide(),qi.hidden=!0,ws.hide(),document.body.classList.add("game-over"),gt.inert=!0,pg.hidden=!1,mg.focus({preventScroll:!0}),Mi.textContent=i)}function Eg(i){if(ln.active||Mn.active||Vn||Fn.dying)return;let e=EE(i);if(!e)return;let t=wr.isLowered(i);t?ws.show(i,qe.time):ws.hide(i),document.querySelector("#hoist-status").textContent=t&&wr.canSpeak(i)?`${e} ${_a[i]}`:e}var ui=!1,Li=null,El=null,Cl=0,AE=new Set(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ"]),sr=new Set,So=i=>Ge.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Zd({skipIntro:i=!1}={}){Il(),Pi.reset(),Ro=null,Bn.reset(),Es=null,Ms="",Fl=0,Ta.hidden=!0,Vn=!1,Fn.reset(),ln.reset(),Mn.reset(),Eo.hidden=!0,Eo.style.opacity="0",Eo.style.removeProperty("--eye-scale"),Aa.hidden=!0,Aa.style.opacity="0",pg.hidden=!0,document.body.classList.remove("game-over","mug-impact"),gt.inert=!1,$n.cancel(),Hn.cancel(),Yn.cancel(),Kt.reset(),Zi.close(),cr.hide(),Mi.textContent="",gt.setAttribute("aria-label",iE),Al.reset(),ws.hide(),gg.reset(qe.time),Di(),ui=!i,dg=qe.time-(i?cg+lg:0),_o=i,qd=qe.time,qi.hidden=!0,qi.classList.remove("long-dialogue"),hg.textContent="",sf=null,Rl=i?bl.length-1:-1,rf=1/0,qe.jaw=0,qe.talkUntil=0,Yd=0,Sa=null,Mo.reset(),Xd=300,ug.textContent="05:00",wa.textContent="",i&&(qi.querySelector(".dialogue-bubble span").textContent=bl[Rl],Hn.start(qe.time,_n,qe),Hn.update(qe.time,_n,qe,!0),of(qe.time),Mo.start(),wa.textContent="The five-minute countdown has started.")}function Di(){sr.clear(),qe.space=!1,Li=null}document.addEventListener("keydown",i=>{if(Vn){i.code==="KeyR"&&!i.repeat&&(i.preventDefault(),Zd(),gt.focus({preventScroll:!0}));return}if(($n.active||ln.active||Mn.active||Fn.dying)&&i.code!=="KeyR"){i.preventDefault();return}if(!cr.active&&!(i.target.closest('input,textarea,select,[contenteditable="true"]')||i.metaKey||i.ctrlKey||i.altKey)){if(AE.has(i.code)){i.preventDefault(),Hn.cancel(),Yn.cancel(),sr.add(i.code),ui=!1;return}if(i.code==="Escape"&&Yn.active){i.preventDefault(),Yn.restore(qe.time);return}i.target.closest("button")&&(i.code==="Space"||i.code==="Enter")||(i.code==="Enter"&&i.target===gt&&(i.preventDefault(),yg()),i.code==="KeyF"&&i.target===gt&&!i.repeat&&(i.preventDefault(),cf(Bn.nextAction)),i.code==="KeyM"&&i.target===gt&&!i.repeat&&(i.preventDefault(),_g()),i.code==="KeyV"&&i.target===gt&&!i.repeat&&(i.preventDefault(),Mg(RE())),/^Digit[1-3]$/.test(i.code)&&i.target===gt&&!i.repeat&&(i.preventDefault(),Eg(Number(i.code.slice(-1))-1)),i.code==="Space"&&(i.preventDefault(),qe.space=!0),i.code==="KeyR"&&!i.repeat&&Zd(),i.code.startsWith("Arrow")&&(i.preventDefault(),Hn.cancel(),Yn.cancel(),ui=!1,i.code==="ArrowLeft"&&(qe.yaw=So(qe.yaw+.08)),i.code==="ArrowRight"&&(qe.yaw=So(qe.yaw-.08)),i.code==="ArrowUp"&&(qe.pitch=Ge.clamp(qe.pitch+.05,-1.4,1.4)),i.code==="ArrowDown"&&(qe.pitch=Ge.clamp(qe.pitch-.05,-1.4,1.4))))}});document.addEventListener("keyup",i=>{sr.delete(i.code),i.code==="Space"&&(qe.space=!1)});window.addEventListener("blur",Di);document.addEventListener("visibilitychange",()=>{document.hidden&&Di()});gt.addEventListener("contextmenu",i=>{i.preventDefault(),Di(),!(ln.active||Mn.active||Vn||Fn.dying)&&(Kt.locked&&af(i)===Kt.target?cr.show(i.clientX,i.clientY):cr.hide())});gt.addEventListener("pointerdown",i=>{$n.active||ln.active||Mn.active||Vn||Fn.dying||i.button===0&&Li===null&&(gt.focus({preventScroll:!0}),Li=i.pointerId,ui=!1,Cl=0,El={x:i.clientX,y:i.clientY},gt.setPointerCapture(i.pointerId))});gt.addEventListener("pointermove",i=>{if($n.active||ln.active||Mn.active||Vn||Fn.dying)return;if(Li===null){let n=af(i);Ro=n?.userData.keyAction||null,gt.classList.toggle("over-key",!!Ro),Es=n?.userData.chargingAction||(n===Zi.object&&Bn.phase==="powered"?"laptop":null),gt.classList.toggle("over-charging",!!Es),gt.classList.toggle("over-laptop",n===Zi.object&&!Zi.isOpen),gt.classList.toggle("over-hoist",Number.isInteger(n?.userData.hoistIndex)),gt.classList.toggle("over-mug",n===La),gt.classList.toggle("over-saw",n===Da),gt.classList.toggle("over-valve",Number.isInteger(n?.userData.valveIndex)),gt.classList.toggle("over-chain",n===Kt.target&&Kt.locked);return}if(i.pointerId!==Li)return;let e=i.clientX-El.x,t=i.clientY-El.y;Cl+=Math.abs(e)+Math.abs(t),Cl>=6&&(Hn.cancel(),Yn.cancel()),qe.yaw=So(qe.yaw+e*.004),qe.pitch=Ge.clamp(qe.pitch+t*.003,-1.4,1.4),El={x:i.clientX,y:i.clientY}});gt.addEventListener("pointerup",i=>{if(i.pointerId===Li&&(Li=null,Cl<6)){let e=af(i);e?.userData.keyAction?SE(e.userData.keyAction):e===Kt.target&&Kt.locked?cr.show(i.clientX,i.clientY):e?.userData.chargingAction?cf(e.userData.chargingAction):e===Zi.object?yg():e===La?_g():e===Da?bE():Number.isInteger(e?.userData.valveIndex)?Mg(e.userData.valveIndex):e===kn?qe.talkUntil=qe.time+1.8:Number.isInteger(e?.userData.hoistIndex)&&Eg(e.userData.hoistIndex)}});gt.addEventListener("pointerleave",()=>{Ro=null,Es=null,gt.classList.remove("over-key","over-laptop","over-hoist","over-chain","over-mug","over-saw","over-valve","over-charging")});gt.addEventListener("pointercancel",i=>{i.pointerId===Li&&(Li=null)});gt.addEventListener("lostpointercapture",i=>{i.pointerId===Li&&(Li=null)});gt.addEventListener("wheel",i=>{i.preventDefault(),!($n.active||ln.active||Mn.active||Vn||Fn.dying)&&(Hn.cancel(),Yn.cancel(),ui=!1,qe.zoom=Ge.clamp(qe.zoom+i.deltaY*5e-4,.78,1))},{passive:!1});var Ol=document.querySelector("#copy-view"),Um=Ol.querySelector("span"),Hm=document.querySelector("#copy-status"),$d=document.querySelector("#copy-fallback"),kd=document.querySelector("#view-text"),Nm;function CE(){let i=n=>n.toArray().map(r=>Number(r.toFixed(6))),e=jt.getWorldDirection(new w),t={position:i(jt.position),lookAt:i(jt.position.clone().add(e)),fov:Number(jt.fov.toFixed(4))};return`Set this as the default camera view for Figsaw:
${JSON.stringify(t,null,2)}`}function PE(i){let e=document.createElement("textarea");e.value=i,e.readOnly=!0,e.style.cssText="position:fixed;left:-9999px;top:0;font-size:16px",document.body.append(e),e.focus(),e.select(),e.setSelectionRange(0,i.length);let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),Ol.focus({preventScroll:!0}),t}Ol.addEventListener("click",async()=>{let i=CE();kd.value=i,clearTimeout(Nm);let e=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(i),e=!0)}catch{}e||(e=PE(i)),e?($d.hidden=!0,Um.textContent="Copied",Hm.textContent="View copied. Paste it into the chat to set the default view."):($d.hidden=!1,kd.focus(),kd.select(),Hm.textContent="Select and copy the view below, then paste it into the chat."),Nm=setTimeout(()=>{Um.textContent="Copy view"},2200)});document.querySelector("#close-copy").addEventListener("click",()=>{$d.hidden=!0,Ol.focus()});function lf(){let{width:i,height:e}=gt.getBoundingClientRect();!i||!e||(Cn.setSize(i,e,!1),jt.aspect=i/e,jt.fov=Ao.fov*qe.zoom,jt.updateProjectionMatrix())}var IE=new ResizeObserver(lf);IE.observe(gt);lf();var Pl=new il,wg=!1,Ca=0,Ea=0,Fm=-1/0,Om=0,Vd=0,Ml=0;function Il(){wg&&!Ca&&!document.hidden&&(Ca=requestAnimationFrame(Sg))}document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ca),Ca=0,Di()):(Ea=0,Pl.getDelta(),Il())});function Sg(){if(Ca=0,document.hidden)return;if(Vn){Pl.getDelta();return}let i=performance.now(),e=Ea?i-Ea:0;if(Ea&&e<1e3/Ht.maxFps-1){Il();return}Ea=i;let t=Math.min(Pl.getDelta(),.04),n=qe.time+=t,r=1-Math.exp(-t*12);ui&&(qe.yaw=So(qe.yaw+So(Xr.yaw-qe.yaw)*r*.5),qe.pitch=Ci(qe.pitch,Xr.pitch,r*.5),qe.zoom=Ci(qe.zoom,1,r*.5),_n.lerp(qr,r*.5),Math.abs(So(qe.yaw-Xr.yaw))+Math.abs(qe.pitch-Xr.pitch)+Math.abs(qe.zoom-1)+_n.distanceTo(qr)<.005&&(qe.yaw=Xr.yaw,qe.pitch=Xr.pitch,qe.zoom=1,_n.copy(qr),ui=!1)),of(n),_o&&n>=rf&&fg(Rl+1),Hn.active&&(ui=!1),(sr.size||Li!==null)&&Hn.cancel(),($n.active||ln.active||Mn.active||Yn.active)&&Hn.cancel(),Hn.update(n,_n,qe,ni),Yn.update(n,ni),$n.update(n,ni)&&vg(!0);let s=qe.yaw,o=Number(sr.has("KeyW"))-Number(sr.has("KeyS")),a=Number(sr.has("KeyD"))-Number(sr.has("KeyA")),c=Number(sr.has("KeyE"))-Number(sr.has("KeyQ"));Hd.set(-Math.sin(s)*o+Math.cos(s)*a,c,-Math.cos(s)*o-Math.sin(s)*a),Hd.lengthSq()>0&&(_n.addScaledVector(Hd.normalize(),t*1.05),_n.x=Ge.clamp(_n.x,-3.72,3.72),_n.y=Ge.clamp(_n.y,.08,3),_n.z=Ge.clamp(_n.z,-3.78,4.25)),jt.position.copy(_n),Tm.set(-Math.sin(s)*Math.cos(qe.pitch),Math.sin(qe.pitch),-Math.cos(s)*Math.cos(qe.pitch)),Sm.copy(_n).add(Tm),jt.lookAt(Sm);let l=Ao.fov*qe.zoom;Math.abs(jt.fov-l)>.001&&(jt.fov=l,jt.updateProjectionMatrix()),Sa!==null&&n>=Sa&&(Mo.start(),Sa=null,wa.textContent="The five-minute countdown has started.");let h=Mo.update();h!==Xd&&(ug.textContent=pl(h),Xd=h,h===0&&(wa.textContent="The countdown has reached zero.")),Al.update(Mo.status,n)&&(ws.showAll(n),wa.textContent=`Time is up. All three Figpals are lowering into the green liquid. ${_a.filter((_,P)=>wr.canSpeak(P)).join(" ")}`);let p=gm(sf,n),d=n<qe.talkUntil?.16+.7*Math.sin(n*10)**2:0,f=qe.space?1:Math.max(p,d);qe.jaw=Ci(qe.jaw,f,r),Ss.position.y=-qe.jaw*Rm,kn.position.y=$m+qe.jaw*Rm*Zm;let g=Fn.update(n,t,_n,jt,ni);Fn.dying&&Di();let x=ln.update(n,ni);Kt.update(n,ni,cr.active||ln.active||Mn.active,ln.handPose||$n.handPose,Mn.armLift(n,ni));let m=Mn.update(n,ni),u=Math.max(ln.blackout,Mn.blackout,Fn.blackout(n));Eo.hidden=ln.eyeImpact<=0||u>=1,ln.eyeImpact>0&&(Eo.style.opacity=String(ln.eyeImpact),Eo.style.setProperty("--eye-scale",String(.035+.965*ln.eyeGrowth)),document.body.classList.add("mug-impact")),u>0&&(Aa.hidden=!1,Aa.style.opacity=String(u),document.body.classList.add("mug-impact")),m?Bd("You used the saw before finding the key. Your hand is lost. Game over."):g?Bd("The corrosive green liquid reaches you. Game over."):x&&Bd("The mug's pointed ears hit your eyes. Everything goes dark. Game over."),Zi.update(t,ni),Bn.update(n,ni),TE(),$i.intensity=zm*ME(n,ni,jt.position),Yi.updateMatrixWorld(!0),kn.localToWorld(Fd.set(-.09,1.86,1)),yo.copy(jt.position).sub(Fd);let E=Math.max(1,yo.length());yo.normalize().applyAxisAngle(xE,Sl.gazeYaw),yo.y+=Sl.gazePitch,yo.normalize(),Cm.copy(Fd).addScaledVector(yo,E);for(let _ of sg)Pm.copy(_.quaternion),_.lookAt(Cm),ni||_.quaternion.copy(Pm.slerp(_.quaternion,1-Math.exp(-t*16)));n-Fm>=1/Ht.shadowHz&&(Cn.shadowMap.needsUpdate=!0,Fm=n),Cn.render(Ei,jt),wE(n),gg.update(n,Al.active),ws.update(jt,n),Pa.frame(i);let y=performance.now()-i;Ml++,(y>Ht.targetFrameMs||e>Ht.targetFrameMs*1.4)&&Vd++,n-Om>4&&(Ml>30&&Vd/Ml>.65&&Cn.getPixelRatio()>Ht.minPixelRatio&&(Cn.setPixelRatio(Math.max(Ht.minPixelRatio,Cn.getPixelRatio()-.25)),lf()),Om=n,Vd=0,Ml=0),Il()}Cn.compileAsync(Ei,jt).then(()=>{Pa.mark("shadersReady"),wg=!0,Pl.getDelta(),Sg(),document.querySelector("#loading-status")?.remove()}).catch(i=>{console.error(i);let e=document.querySelector("#loading-status");e&&(e.textContent="The room could not load. Please reload to try again.")});gt.addEventListener("webglcontextlost",i=>i.preventDefault());gt.addEventListener("webglcontextrestored",()=>location.reload());
