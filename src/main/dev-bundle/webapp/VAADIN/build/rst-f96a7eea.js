function o(t,p){for(var n=0;n<p.length;n++){const e=p[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},c={get exports(){return s},set exports(t){s=t}};(function(t,p){ace.define("ace/snippets/rst.snippets",["require","exports","module"],function(n,e,r){r.exports=`# rst

snippet :
	:\${1:field name}: \${2:field body}
snippet *
	*\${1:Emphasis}*
snippet **
	**\${1:Strong emphasis}**
snippet _
	\\\`\${1:hyperlink-name}\\\`_
	.. _\\\`$1\\\`: \${2:link-block}
snippet =
	\${1:Title}
	=====\${2:=}
	\${3}
snippet -
	\${1:Title}
	-----\${2:-}
	\${3}
snippet cont:
	.. contents::
	
`}),ace.define("ace/snippets/rst",["require","exports","module","ace/snippets/rst.snippets"],function(n,e,r){e.snippetText=n("./rst.snippets"),e.scope="rst"}),function(){ace.require(["ace/snippets/rst"],function(n){t&&(t.exports=n)})}()})(c);const a=s,f=o({__proto__:null,default:a},[s]);export{f as r};
