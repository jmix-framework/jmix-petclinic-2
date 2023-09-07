function o(n,p){for(var e=0;e<p.length;e++){const t=p[e];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in n)){const r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},c={get exports(){return s},set exports(n){s=n}};(function(n,p){ace.define("ace/snippets/tcl.snippets",["require","exports","module"],function(e,t,i){i.exports=`# #!/usr/bin/env tclsh
snippet #!
	#!/usr/bin/env tclsh
	
# Process
snippet pro
	proc \${1:function_name} {\${2:args}} {
		\${3:#body ...}
	}
#xif
snippet xif
	\${1:expr}? \${2:true} : \${3:false}
# Conditional
snippet if
	if {\${1}} {
		\${2:# body...}
	}
# Conditional if..else
snippet ife
	if {\${1}} {
		\${2:# body...}
	} else {
		\${3:# else...}
	}
# Conditional if..elsif..else
snippet ifee
	if {\${1}} {
		\${2:# body...}
	} elseif {\${3}} {
		\${4:# elsif...}
	} else {
		\${5:# else...}
	}
# If catch then
snippet ifc
	if { [catch {\${1:#do something...}} \${2:err}] } {
		\${3:# handle failure...}
	}
# Catch
snippet catch
	catch {\${1}} \${2:err} \${3:options}
# While Loop
snippet wh
	while {\${1}} {
		\${2:# body...}
	}
# For Loop
snippet for
	for {set \${2:var} 0} {$$2 < \${1:count}} {\${3:incr} $2} {
		\${4:# body...}
	}
# Foreach Loop
snippet fore
	foreach \${1:x} {\${2:#list}} {
		\${3:# body...}
	}
# after ms script...
snippet af
	after \${1:ms} \${2:#do something}
# after cancel id
snippet afc
	after cancel \${1:id or script}
# after idle
snippet afi
	after idle \${1:script}
# after info id
snippet afin
	after info \${1:id}
# Expr
snippet exp
	expr {\${1:#expression here}}
# Switch
snippet sw
	switch \${1:var} {
		\${3:pattern 1} {
			\${4:#do something}
		}
		default {
			\${2:#do something}
		}
	}
# Case
snippet ca
	\${1:pattern} {
		\${2:#do something}
	}\${3}
# Namespace eval
snippet ns
	namespace eval \${1:path} {\${2:#script...}}
# Namespace current
snippet nsc
	namespace current
`}),ace.define("ace/snippets/tcl",["require","exports","module","ace/snippets/tcl.snippets"],function(e,t,i){t.snippetText=e("./tcl.snippets"),t.scope="tcl"}),function(){ace.require(["ace/snippets/tcl"],function(e){n&&(n.exports=e)})}()})(c);const a=s,f=o({__proto__:null,default:a},[s]);export{f as t};
