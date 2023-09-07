function a(t,s){for(var p=0;p<s.length;p++){const n=s[p];if(typeof n!="string"&&!Array.isArray(n)){for(const e in n)if(e!=="default"&&!(e in t)){const r=Object.getOwnPropertyDescriptor(n,e);r&&Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},$={get exports(){return i},set exports(t){i=t}};(function(t,s){ace.define("ace/snippets/r.snippets",["require","exports","module"],function(p,n,e){e.exports=`snippet #!
	#!/usr/bin/env Rscript

# includes
snippet lib
	library(\${1:package})
snippet req
	require(\${1:package})
snippet source
	source('\${1:file}')

# conditionals
snippet if
	if (\${1:condition}) {
		\${2:code}
	}
snippet el
	else {
		\${1:code}
	}
snippet ei
	else if (\${1:condition}) {
		\${2:code}
	}

# functions
snippet fun
	\${1:name} = function (\${2:variables}) {
		\${3:code}
	}
snippet ret
	return(\${1:code})

# dataframes, lists, etc
snippet df
	\${1:name}[\${2:rows}, \${3:cols}]
snippet c
	c(\${1:items})
snippet li
	list(\${1:items})
snippet mat
	matrix(\${1:data}, nrow=\${2:rows}, ncol=\${3:cols})

# apply functions
snippet apply
	apply(\${1:array}, \${2:margin}, \${3:function})
snippet lapply
	lapply(\${1:list}, \${2:function})
snippet sapply
	sapply(\${1:list}, \${2:function})
snippet vapply
	vapply(\${1:list}, \${2:function}, \${3:type})
snippet mapply
	mapply(\${1:function}, \${2:...})
snippet tapply
	tapply(\${1:vector}, \${2:index}, \${3:function})
snippet rapply
	rapply(\${1:list}, \${2:function})

# plyr functions
snippet dd
	ddply(\${1:frame}, \${2:variables}, \${3:function})
snippet dl
	dlply(\${1:frame}, \${2:variables}, \${3:function})
snippet da
	daply(\${1:frame}, \${2:variables}, \${3:function})
snippet d_
	d_ply(\${1:frame}, \${2:variables}, \${3:function})

snippet ad
	adply(\${1:array}, \${2:margin}, \${3:function})
snippet al
	alply(\${1:array}, \${2:margin}, \${3:function})
snippet aa
	aaply(\${1:array}, \${2:margin}, \${3:function})
snippet a_
	a_ply(\${1:array}, \${2:margin}, \${3:function})

snippet ld
	ldply(\${1:list}, \${2:function})
snippet ll
	llply(\${1:list}, \${2:function})
snippet la
	laply(\${1:list}, \${2:function})
snippet l_
	l_ply(\${1:list}, \${2:function})

snippet md
	mdply(\${1:matrix}, \${2:function})
snippet ml
	mlply(\${1:matrix}, \${2:function})
snippet ma
	maply(\${1:matrix}, \${2:function})
snippet m_
	m_ply(\${1:matrix}, \${2:function})

# plot functions
snippet pl
	plot(\${1:x}, \${2:y})
snippet ggp
	ggplot(\${1:data}, aes(\${2:aesthetics}))
snippet img
	\${1:(jpeg,bmp,png,tiff)}(filename="\${2:filename}", width=\${3}, height=\${4}, unit="\${5}")
	\${6:plot}
	dev.off()

# statistical test functions
snippet fis
	fisher.test(\${1:x}, \${2:y})
snippet chi
	chisq.test(\${1:x}, \${2:y})
snippet tt
	t.test(\${1:x}, \${2:y})
snippet wil
	wilcox.test(\${1:x}, \${2:y})
snippet cor
	cor.test(\${1:x}, \${2:y})
snippet fte
	var.test(\${1:x}, \${2:y})
snippet kvt 
	kv.test(\${1:x}, \${2:y})
`}),ace.define("ace/snippets/r",["require","exports","module","ace/snippets/r.snippets"],function(p,n,e){n.snippetText=p("./r.snippets"),n.scope="r"}),function(){ace.require(["ace/snippets/r"],function(p){t&&(t.exports=p)})}()})($);const l=i,o=a({__proto__:null,default:l},[i]);export{o as r};
