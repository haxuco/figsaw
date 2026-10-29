import test from 'node:test';
import assert from 'node:assert/strict';
import {createStartupProgress} from '../dist/startup-progress.js';

function fixture(){
 const attributes={},label={textContent:'',hidden:true},bar={value:0,hidden:false,setAttribute:(k,v)=>attributes[k]=v},frames=[];
 const root={hidden:false,querySelector:selector=>selector==='#loading-message'?label:bar,setAttribute:(k,v)=>attributes[k]=v};
 return {root,label,bar,frames,progress:createStartupProgress(root,callback=>frames.push(callback))};
}
test('startup progress advances with construction and only completes after the scene is ready',()=>{
 const {root,label,bar,frames,progress}=fixture();progress.update('Creating Figsaw…');const first=bar.value;
 progress.update('Preparing the tanks…');assert.ok(bar.value>first&&bar.value<100);
 const tanks=bar.value;progress.update('Building the office…');assert.equal(bar.value,tanks,'progress cannot run backwards');
 progress.update('Warming up the lights…');assert.ok(bar.value<100);
 progress.finish();assert.equal(bar.value,100);assert.equal(label.hidden,true);assert.equal(root.hidden,false);
 frames.shift()();assert.equal(root.hidden,false);frames.shift()();assert.equal(root.hidden,true);
});
test('a failed load shows the error and never leaves a completed or stuck loading bar',()=>{
 const {root,label,bar,frames,progress}=fixture();progress.update('Preparing the room…');progress.finish();progress.fail();
 while(frames.length)frames.shift()();assert.equal(root.hidden,false);assert.equal(bar.hidden,true);assert.equal(label.hidden,false);assert.match(label.textContent,/could not load/);
 progress.update('Warming up the lights…');assert.match(label.textContent,/could not load/);
});
