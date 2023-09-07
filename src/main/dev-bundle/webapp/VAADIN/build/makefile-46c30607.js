function p(t,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},f={get exports(){return i},set exports(t){i=t}};(function(t,o){ace.define("ace/snippets/makefile.snippets",["require","exports","module"],function(n,e,r){r.exports=`snippet ifeq
	ifeq (\${1:cond0},\${2:cond1})
		\${3:code}
	endif
`}),ace.define("ace/snippets/makefile",["require","exports","module","ace/snippets/makefile.snippets"],function(n,e,r){e.snippetText=n("./makefile.snippets"),e.scope="makefile"}),function(){ace.require(["ace/snippets/makefile"],function(n){t&&(t.exports=n)})}()})(f);const a=i,c=p({__proto__:null,default:a},[i]);export{c as m};
