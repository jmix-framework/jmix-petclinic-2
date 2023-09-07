function p(e,i){for(var n=0;n<i.length;n++){const t=i[n];if(typeof t!="string"&&!Array.isArray(t)){for(const s in t)if(s!=="default"&&!(s in e)){const r=Object.getOwnPropertyDescriptor(t,s);r&&Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:()=>t[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o={},c={get exports(){return o},set exports(e){o=e}};(function(e,i){ace.define("ace/snippets/csound_orchestra.snippets",["require","exports","module"],function(n,t,s){s.exports=`# else
snippet else
	else
		\${1:/* statements */}
# elseif
snippet elseif
	elseif \${1:/* condition */} then
		\${2:/* statements */}
# if
snippet if
	if \${1:/* condition */} then
		\${2:/* statements */}
	endif
# instrument block
snippet instr
	instr \${1:name}
		\${2:/* statements */}
	endin
# i-time while loop
snippet iwhile
	i\${1:Index} = \${2:0}
	while i\${1:Index} < \${3:/* count */} do
		\${4:/* statements */}
		i\${1:Index} += 1
	od
# k-rate while loop
snippet kwhile
	k\${1:Index} = \${2:0}
	while k\${1:Index} < \${3:/* count */} do
		\${4:/* statements */}
		k\${1:Index} += 1
	od
# opcode
snippet opcode
	opcode \${1:name}, \${2:/* output types */ 0}, \${3:/* input types */ 0}
		\${4:/* statements */}
	endop
# until loop
snippet until
	until \${1:/* condition */} do
		\${2:/* statements */}
	od
# while loop
snippet while
	while \${1:/* condition */} do
		\${2:/* statements */}
	od
`}),ace.define("ace/snippets/csound_orchestra",["require","exports","module","ace/snippets/csound_orchestra.snippets"],function(n,t,s){t.snippetText=n("./csound_orchestra.snippets"),t.scope="csound_orchestra"}),function(){ace.require(["ace/snippets/csound_orchestra"],function(n){e&&(e.exports=n)})}()})(c);const d=o,a=p({__proto__:null,default:d},[o]);export{a as c};
