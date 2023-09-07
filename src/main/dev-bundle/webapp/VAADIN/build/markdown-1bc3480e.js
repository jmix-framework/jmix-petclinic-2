function r(e,i){for(var n=0;n<i.length;n++){const t=i[n];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(t,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var p={},l={get exports(){return p},set exports(e){p=e}};(function(e,i){ace.define("ace/snippets/markdown.snippets",["require","exports","module"],function(n,t,o){o.exports=`# Markdown

# Includes octopress (http://octopress.org/) snippets

snippet [
	[\${1:text}](http://\${2:address} "\${3:title}")
snippet [*
	[\${1:link}](\${2:\`@*\`} "\${3:title}")\${4}

snippet [:
	[\${1:id}]: http://\${2:url} "\${3:title}"
snippet [:*
	[\${1:id}]: \${2:\`@*\`} "\${3:title}"

snippet ![
	![\${1:alttext}](\${2:/images/image.jpg} "\${3:title}")
snippet ![*
	![\${1:alt}](\${2:\`@*\`} "\${3:title}")\${4}

snippet ![:
	![\${1:id}]: \${2:url} "\${3:title}"
snippet ![:*
	![\${1:id}]: \${2:\`@*\`} "\${3:title}"

snippet ===
regex /^/=+/=*//
	\${PREV_LINE/./=/g}
	
	\${0}
snippet ---
regex /^/-+/-*//
	\${PREV_LINE/./-/g}
	
	\${0}
snippet blockquote
	{% blockquote %}
	\${1:quote}
	{% endblockquote %}

snippet blockquote-author
	{% blockquote \${1:author}, \${2:title} %}
	\${3:quote}
	{% endblockquote %}

snippet blockquote-link
	{% blockquote \${1:author} \${2:URL} \${3:link_text} %}
	\${4:quote}
	{% endblockquote %}

snippet bt-codeblock-short
	\`\`\`
	\${1:code_snippet}
	\`\`\`

snippet bt-codeblock-full
	\`\`\` \${1:language} \${2:title} \${3:URL} \${4:link_text}
	\${5:code_snippet}
	\`\`\`

snippet codeblock-short
	{% codeblock %}
	\${1:code_snippet}
	{% endcodeblock %}

snippet codeblock-full
	{% codeblock \${1:title} lang:\${2:language} \${3:URL} \${4:link_text} %}
	\${5:code_snippet}
	{% endcodeblock %}

snippet gist-full
	{% gist \${1:gist_id} \${2:filename} %}

snippet gist-short
	{% gist \${1:gist_id} %}

snippet img
	{% img \${1:class} \${2:URL} \${3:width} \${4:height} \${5:title_text} \${6:alt_text} %}

snippet youtube
	{% youtube \${1:video_id} %}

# The quote should appear only once in the text. It is inherently part of it.
# See http://octopress.org/docs/plugins/pullquote/ for more info.

snippet pullquote
	{% pullquote %}
	\${1:text} {" \${2:quote} "} \${3:text}
	{% endpullquote %}
`}),ace.define("ace/snippets/markdown",["require","exports","module","ace/snippets/markdown.snippets"],function(n,t,o){t.snippetText=n("./markdown.snippets"),t.scope="markdown"}),function(){ace.require(["ace/snippets/markdown"],function(n){e&&(e.exports=n)})}()})(l);const $=p,c=r({__proto__:null,default:$},[p]);export{c as m};
