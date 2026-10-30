import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createDocumentViewer} from '../dist/wall-documents.js';

function fixture(t){
 const previous=globalThis.Image,loads=[];
 globalThis.Image=class{decode(){return new Promise(resolve=>loads.push({src:this.src,resolve}));}};
 t.after(()=>{globalThis.Image=previous;});
 const targets=['a','b','c'].map(id=>{const target=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:new THREE.Texture()}));target.userData.wallDocument=id;return target;});
 const entries=new Map(targets.map(target=>{const id=target.userData.wallDocument;return [id,{src:`${id}.svg`,detailSrc:`${id}.webp`}];}));
 const viewer=createDocumentViewer({documents:{entries},position:new THREE.Vector3(0,0,3),state:{time:0,yaw:0,pitch:0,zoom:1},scene:new THREE.Scene()});
 const finish=async index=>{loads[index].resolve();await Promise.resolve();};
 return {viewer,targets,entries,loads,finish};
}

test('poster detail survives reopening, restores world materials and evicts old maps within its budget',async t=>{
 const {viewer,targets,loads,finish}=fixture(t),[a,b,c]=targets,original=a.material;
 viewer.show(a);await finish(0);const first=a.material.map;let disposed=0;first.addEventListener('dispose',()=>disposed++);
 viewer.hide();assert.equal(a.material,original);assert.equal(disposed,0);
 viewer.show(a);assert.equal(loads.length,1);assert.equal(a.material.map,first);
 viewer.show(b);await finish(1);assert.equal(a.material,original);assert.equal(disposed,0);
 viewer.show(c);await finish(2);assert.equal(disposed,1,'desktop retains at most two detail maps');
 viewer.hide();viewer.show(a);assert.equal(loads.length,4,'evicted artwork can be decoded again');await finish(3);viewer.hide();
});

test('late poster decodes cannot replace a newer view, and changed org roles get a fresh map',async t=>{
 const {viewer,targets,entries,loads,finish}=fixture(t),[a,b]=targets,original=a.material;
 viewer.show(a);viewer.show(b);await finish(1);const active=b.material;
 await finish(0);assert.equal(a.material,original);assert.equal(b.material,active);
 viewer.hide();entries.set('a',{src:'blob:roles-1'});viewer.show(a);await finish(2);const first=a.material.map;
 viewer.hide();entries.set('a',{src:'blob:roles-2'});viewer.show(a);assert.equal(loads[3].src,'blob:roles-2');await finish(3);
 assert.notEqual(a.material.map,first);viewer.hide();
});
