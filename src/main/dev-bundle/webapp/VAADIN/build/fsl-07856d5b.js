function p(t,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const s in e)if(s!=="default"&&!(s in t)){const o=Object.getOwnPropertyDescriptor(e,s);o&&Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:()=>e[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var r={},a={get exports(){return r},set exports(t){r=t}};(function(t,i){ace.define("ace/snippets/fsl.snippets",["require","exports","module"],function(n,e,s){s.exports=`snippet header
	machine_name     : "";
	machine_author   : "";
	machine_license  : MIT;
	machine_comment  : "";
	machine_language : en;
	machine_version  : 1.0.0;
	fsl_version      : 1.0.0;
	start_states     : [];
`}),ace.define("ace/snippets/fsl",["require","exports","module","ace/snippets/fsl.snippets"],function(n,e,s){e.snippetText=n("./fsl.snippets"),e.scope="fsl"}),function(){ace.require(["ace/snippets/fsl"],function(n){t&&(t.exports=n)})}()})(a);const c=r,f=p({__proto__:null,default:c},[r]);export{f};
