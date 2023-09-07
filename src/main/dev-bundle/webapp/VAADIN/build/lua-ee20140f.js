function s(t,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const p=Object.getOwnPropertyDescriptor(e,r);p&&Object.defineProperty(t,r,p.get?p:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},a={get exports(){return o},set exports(t){o=t}};(function(t,i){ace.define("ace/snippets/lua.snippets",["require","exports","module"],function(n,e,r){r.exports=`snippet #!
	#!/usr/bin/env lua
	$1
snippet local
	local \${1:x} = \${2:1}
snippet fun
	function \${1:fname}(\${2:...})
		\${3:-- body}
	end
snippet for
	for \${1:i}=\${2:1},\${3:10} do
		\${4:print(i)}
	end
snippet forp
	for \${1:i},\${2:v} in pairs(\${3:table_name}) do
	   \${4:-- body}
	end
snippet fori
	for \${1:i},\${2:v} in ipairs(\${3:table_name}) do
	   \${4:-- body}
	end
`}),ace.define("ace/snippets/lua",["require","exports","module","ace/snippets/lua.snippets"],function(n,e,r){e.snippetText=n("./lua.snippets"),e.scope="lua"}),function(){ace.require(["ace/snippets/lua"],function(n){t&&(t.exports=n)})}()})(a);const u=o,f=s({__proto__:null,default:u},[o]);export{f as l};
