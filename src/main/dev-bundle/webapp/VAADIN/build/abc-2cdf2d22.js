function i(t,s){for(var n=0;n<s.length;n++){const e=s[n];if(typeof e!="string"&&!Array.isArray(e)){for(const p in e)if(p!=="default"&&!(p in t)){const r=Object.getOwnPropertyDescriptor(e,p);r&&Object.defineProperty(t,p,r.get?r:{enumerable:!0,get:()=>e[p]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},a={get exports(){return o},set exports(t){o=t}};(function(t,s){ace.define("ace/snippets/abc.snippets",["require","exports","module"],function(n,e,p){p.exports=`
snippet zupfnoter.print
	%%%%hn.print {"startpos": \${1:pos_y}, "t":"\${2:title}", "v":[\${3:voices}], "s":[[\${4:syncvoices}1,2]], "f":[\${5:flowlines}],  "sf":[\${6:subflowlines}], "j":[\${7:jumplines}]}

snippet zupfnoter.note
	%%%%hn.note {"pos": [\${1:pos_x},\${2:pos_y}], "text": "\${3:text}", "style": "\${4:style}"}

snippet zupfnoter.annotation
	%%%%hn.annotation {"id": "\${1:id}", "pos": [\${2:pos}], "text": "\${3:text}"}

snippet zupfnoter.lyrics
	%%%%hn.lyrics {"pos": [\${1:x_pos},\${2:y_pos}]}

snippet zupfnoter.legend
	%%%%hn.legend {"pos": [\${1:x_pos},\${2:y_pos}]}



snippet zupfnoter.target
	"^:\${1:target}"

snippet zupfnoter.goto
	"^@\${1:target}@\${2:distance}"

snippet zupfnoter.annotationref
	"^#\${1:target}"

snippet zupfnoter.annotation
	"^!\${1:text}@\${2:x_offset},\${3:y_offset}"


`}),ace.define("ace/snippets/abc",["require","exports","module","ace/snippets/abc.snippets"],function(n,e,p){e.snippetText=n("./abc.snippets"),e.scope="abc"}),function(){ace.require(["ace/snippets/abc"],function(n){t&&(t.exports=n)})}()})(a);const c=o,f=i({__proto__:null,default:c},[o]);export{f as a};
