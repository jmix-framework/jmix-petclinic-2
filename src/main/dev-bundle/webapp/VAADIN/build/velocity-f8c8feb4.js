function p(t,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const o in e)if(o!=="default"&&!(o in t)){const c=Object.getOwnPropertyDescriptor(e,o);c&&Object.defineProperty(t,o,c.get?c:{enumerable:!0,get:()=>e[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var r={},s={get exports(){return r},set exports(t){r=t}};(function(t,i){ace.define("ace/snippets/velocity.snippets",["require","exports","module"],function(n,e,o){o.exports=`# macro
snippet #macro
	#macro ( \${1:macroName} \${2:\\$var1, [\\$var2, ...]} )
		\${3:## macro code}
	#end
# foreach
snippet #foreach
	#foreach ( \${1:\\$item} in \${2:\\$collection} )
		\${3:## foreach code}
	#end
# if
snippet #if
	#if ( \${1:true} )
		\${0}
	#end
# if ... else
snippet #ife
	#if ( \${1:true} )
		\${2}
	#else
		\${0}
	#end
#import
snippet #import
	#import ( "\${1:path/to/velocity/format}" )
# set
snippet #set
	#set ( $\${1:var} = \${0} )
`}),ace.define("ace/snippets/velocity",["require","exports","module","ace/snippets/velocity.snippets"],function(n,e,o){e.snippetText=n("./velocity.snippets"),e.scope="velocity",e.includeScopes=["html","javascript","css"]}),function(){ace.require(["ace/snippets/velocity"],function(n){t&&(t.exports=n)})}()})(s);const a=r,f=p({__proto__:null,default:a},[r]);export{f as v};
