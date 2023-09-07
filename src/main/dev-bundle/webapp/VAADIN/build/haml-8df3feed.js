function s(e,a){for(var n=0;n<a.length;n++){const t=a[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var p={},o={get exports(){return p},set exports(e){p=e}};(function(e,a){ace.define("ace/snippets/haml.snippets",["require","exports","module"],function(n,t,r){r.exports=`snippet t
	%table
		%tr
			%th
				\${1:headers}
		%tr
			%td
				\${2:headers}
snippet ul
	%ul
		%li
			\${1:item}
		%li
snippet =rp
	= render :partial => '\${1:partial}'
snippet =rpl
	= render :partial => '\${1:partial}', :locals => {}
snippet =rpc
	= render :partial => '\${1:partial}', :collection => @$1

`}),ace.define("ace/snippets/haml",["require","exports","module","ace/snippets/haml.snippets"],function(n,t,r){t.snippetText=n("./haml.snippets"),t.scope="haml"}),function(){ace.require(["ace/snippets/haml"],function(n){e&&(e.exports=n)})}()})(o);const l=p,c=s({__proto__:null,default:l},[p]);export{c as h};
