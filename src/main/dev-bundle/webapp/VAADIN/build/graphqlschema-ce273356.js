function a(n,i){for(var t=0;t<i.length;t++){const e=i[t];if(typeof e!="string"&&!Array.isArray(e)){for(const p in e)if(p!=="default"&&!(p in n)){const s=Object.getOwnPropertyDescriptor(e,p);s&&Object.defineProperty(n,p,s.get?s:{enumerable:!0,get:()=>e[p]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var r={},c={get exports(){return r},set exports(n){r=n}};(function(n,i){ace.define("ace/snippets/graphqlschema.snippets",["require","exports","module"],function(t,e,p){p.exports=`# Type Snippet
trigger type
snippet type
	type \${1:type_name} {
		\${2:type_siblings}
	}

# Input Snippet
trigger input
snippet input
	input \${1:input_name} {
		\${2:input_siblings}
	}

# Interface Snippet
trigger interface
snippet interface
	interface \${1:interface_name} {
		\${2:interface_siblings}
	}

# Interface Snippet
trigger union
snippet union
	union \${1:union_name} = \${2:type} | \${3: type}

# Enum Snippet
trigger enum
snippet enum
	enum \${1:enum_name} {
		\${2:enum_siblings}
	}
`}),ace.define("ace/snippets/graphqlschema",["require","exports","module","ace/snippets/graphqlschema.snippets"],function(t,e,p){e.snippetText=t("./graphqlschema.snippets"),e.scope="graphqlschema"}),function(){ace.require(["ace/snippets/graphqlschema"],function(t){n&&(n.exports=t)})}()})(c);const o=r,u=a({__proto__:null,default:o},[r]);export{u as g};
