function s(t,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const i in e)if(i!=="default"&&!(i in t)){const p=Object.getOwnPropertyDescriptor(e,i);p&&Object.defineProperty(t,i,p.get?p:{enumerable:!0,get:()=>e[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var r={},l={get exports(){return r},set exports(t){r=t}};(function(t,o){ace.define("ace/snippets/textile.snippets",["require","exports","module"],function(n,e,i){i.exports=`# Jekyll post header
snippet header
	---
	title: \${1:title}
	layout: post
	date: \${2:date} \${3:hour:minute:second} -05:00
	---

# Image
snippet img
	!\${1:url}(\${2:title}):\${3:link}!

# Table
snippet |
	|\${1}|\${2}

# Link
snippet link
	"\${1:link text}":\${2:url}

# Acronym
snippet (
	(\${1:Expand acronym})\${2}

# Footnote
snippet fn
	[\${1:ref number}] \${3}

	fn$1. \${2:footnote}
	
`}),ace.define("ace/snippets/textile",["require","exports","module","ace/snippets/textile.snippets"],function(n,e,i){e.snippetText=n("./textile.snippets"),e.scope="textile"}),function(){ace.require(["ace/snippets/textile"],function(n){t&&(t.exports=n)})}()})(l);const a=r,c=s({__proto__:null,default:a},[r]);export{c as t};
