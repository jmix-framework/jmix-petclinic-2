function u(t,r){for(var n=0;n<r.length;n++){const e=r[n];if(typeof e!="string"&&!Array.isArray(e)){for(const s in e)if(s!=="default"&&!(s in t)){const c=Object.getOwnPropertyDescriptor(e,s);c&&Object.defineProperty(t,s,c.get?c:{enumerable:!0,get:()=>e[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},p={get exports(){return o},set exports(t){o=t}};(function(t,r){ace.define("ace/snippets/csound_document.snippets",["require","exports","module"],function(n,e,s){s.exports=`# <CsoundSynthesizer>
snippet synth
	<CsoundSynthesizer>
	<CsInstruments>
	\${1}
	</CsInstruments>
	<CsScore>
	e
	</CsScore>
	</CsoundSynthesizer>
`}),ace.define("ace/snippets/csound_document",["require","exports","module","ace/snippets/csound_document.snippets"],function(n,e,s){e.snippetText=n("./csound_document.snippets"),e.scope="csound_document"}),function(){ace.require(["ace/snippets/csound_document"],function(n){t&&(t.exports=n)})}()})(p);const i=o,d=u({__proto__:null,default:i},[o]);export{d as c};
