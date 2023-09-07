function i(t,s){for(var n=0;n<s.length;n++){const e=s[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const p=Object.getOwnPropertyDescriptor(e,r);p&&Object.defineProperty(t,r,p.get?p:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},u={get exports(){return o},set exports(t){o=t}};(function(t,s){ace.define("ace/snippets/drools.snippets",["require","exports","module"],function(n,e,r){r.exports=`
snippet rule
	rule "\${1?:rule_name}"
	when
		\${2:// when...} 
	then
		\${3:// then...}
	end

snippet query
	query \${1?:query_name}
		\${2:// find} 
	end
	
snippet declare
	declare \${1?:type_name}
		\${2:// attributes} 
	end

`}),ace.define("ace/snippets/drools",["require","exports","module","ace/snippets/drools.snippets"],function(n,e,r){e.snippetText=n("./drools.snippets"),e.scope="drools"}),function(){ace.require(["ace/snippets/drools"],function(n){t&&(t.exports=n)})}()})(u);const c=o,d=i({__proto__:null,default:c},[o]);export{d};
