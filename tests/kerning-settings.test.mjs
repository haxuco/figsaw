import test from 'node:test';
import assert from 'node:assert/strict';
import {createKerningDraft,serializeKerningSettings} from '../dist/kerning-settings.js';
import {measureKerningLayout} from '../dist/laptop-program.js';

const spec={word:'Figma',family:'Arial, sans-serif',style:'normal',weight:'700',fontSize:148,label:'Arial / Bold'};
const context={measureText(word){return {width:[...word].length*60*Number(this.font.match(/([\d.]+)px/)[1])/148};}};

test('custom type keeps its case and font metadata, and long words fit the laptop',()=>{
 const layout=measureKerningLayout(context,spec);assert.equal(layout.word,'Figma');assert.equal(layout.family,spec.family);assert.equal(layout.positions.length,5);assert.equal(layout.widths.length,5);assert.match(layout.font,/148px/);
 const long=measureKerningLayout(context,{...spec,word:'ABCDEFGHIJKLMNOPQRST'});assert.ok(long.fontSize<148);assert.match(long.font,new RegExp(`${long.fontSize}px`));assert.ok(long.positions[0]>=80);assert.ok(long.positions.at(-1)+long.widths.at(-1)<=720);
});

test('diagnostic drafts move the first and last glyphs while preserving order and the original challenge data',()=>{
 const layout=measureKerningLayout(context,spec),original=[...layout.positions],draft=createKerningDraft(layout);
 assert.equal(draft.move(0,original[0]-10),true);assert.equal(draft.move(4,original[4]+10),true);assert.equal(draft.positions[0],original[0]-10);assert.equal(draft.positions[4],original[4]+10);assert.deepEqual(layout.positions,original);
 draft.move(0,-10000);assert.equal(draft.positions[0],24);draft.move(4,10000);assert.equal(draft.positions[4],776-layout.widths[4]);draft.move(2,Infinity);draft.move(2,-10000);assert.ok(draft.positions[2]>draft.positions[1]);assert.ok(draft.positions[2]<draft.positions[3]);
 const copy=draft.positions;copy[0]=-9;assert.equal(draft.positions[0],24);
});

test('the settings export contains the displayed word, exact font, coordinate system and adjusted glyph origins',()=>{
 const layout=measureKerningLayout(context,spec),draft=createKerningDraft(layout);draft.move(0,175.123456789);
 const settings=JSON.parse(serializeKerningSettings(layout,draft.positions,1));assert.equal(settings.word,'Figma');assert.equal(settings.round,2);assert.equal(settings.positions[0],175.123457);assert.deepEqual(settings.typeface,{family:spec.family,weight:spec.weight,style:spec.style,fontSize:148,font:layout.font});assert.deepEqual(settings.coordinateSpace,{width:800,height:510,baseline:318});assert.equal(settings.positions.length,[...settings.word].length);
});
