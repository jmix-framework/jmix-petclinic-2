function i(t,p){for(var n=0;n<p.length;n++){const e=p[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},a={get exports(){return s},set exports(t){s=t}};(function(t,p){ace.define("ace/snippets/maze.snippets",["require","exports","module"],function(n,e,r){r.exports=`snippet >
description assignment
scope maze
	-> \${1}= \${2}

snippet >
description if
scope maze
	-> IF \${2:**} THEN %\${3:L} ELSE %\${4:R}
`}),ace.define("ace/snippets/maze",["require","exports","module","ace/snippets/maze.snippets"],function(n,e,r){e.snippetText=n("./maze.snippets"),e.scope="maze"}),function(){ace.require(["ace/snippets/maze"],function(n){t&&(t.exports=n)})}()})(a);const c=s,f=i({__proto__:null,default:c},[s]);export{f as m};
