function o(t,i){for(var p=0;p<i.length;p++){const e=i[p];if(typeof e!="string"&&!Array.isArray(e)){for(const s in e)if(s!=="default"&&!(s in t)){const r=Object.getOwnPropertyDescriptor(e,s);r&&Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:()=>e[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n={},c={get exports(){return n},set exports(t){n=t}};(function(t,i){ace.define("ace/snippets/snippets.snippets",["require","exports","module"],function(p,e,s){s.exports=`# snippets for making snippets :)
snippet snip
	snippet \${1:trigger}
		\${2}
snippet msnip
	snippet \${1:trigger} \${2:description}
		\${3}
snippet v
	{VISUAL}
`}),ace.define("ace/snippets/snippets",["require","exports","module","ace/snippets/snippets.snippets"],function(p,e,s){e.snippetText=p("./snippets.snippets"),e.scope="snippets"}),function(){ace.require(["ace/snippets/snippets"],function(p){t&&(t.exports=p)})}()})(c);const a=n,f=o({__proto__:null,default:a},[n]);export{f as s};
