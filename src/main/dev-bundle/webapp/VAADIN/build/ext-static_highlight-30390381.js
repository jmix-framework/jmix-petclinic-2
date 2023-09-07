function z(p,S){for(var a=0;a<S.length;a++){const d=S[a];if(typeof d!="string"&&!Array.isArray(d)){for(const l in d)if(l!=="default"&&!(l in p)){const v=Object.getOwnPropertyDescriptor(d,l);v&&Object.defineProperty(p,l,v.get?v:{enumerable:!0,get:()=>d[l]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var b={},P={get exports(){return b},set exports(p){b=p}};(function(p,S){ace.define("ace/ext/static.css",["require","exports","module"],function(a,d,l){l.exports=`.ace_static_highlight {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'Source Code Pro', 'source-code-pro', 'Droid Sans Mono', monospace;
    font-size: 12px;
    white-space: pre-wrap
}

.ace_static_highlight .ace_gutter {
    width: 2em;
    text-align: right;
    padding: 0 3px 0 0;
    margin-right: 3px;
    contain: none;
}

.ace_static_highlight.ace_show_gutter .ace_line {
    padding-left: 2.6em;
}

.ace_static_highlight .ace_line { position: relative; }

.ace_static_highlight .ace_gutter-cell {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    top: 0;
    bottom: 0;
    left: 0;
    position: absolute;
}


.ace_static_highlight .ace_gutter-cell:before {
    content: counter(ace_line, decimal);
    counter-increment: ace_line;
}
.ace_static_highlight {
    counter-reset: ace_line;
}
`}),ace.define("ace/ext/static_highlight",["require","exports","module","ace/edit_session","ace/layer/text","ace/ext/static.css","ace/config","ace/lib/dom","ace/lib/lang"],function(a,d,l){var v=a("../edit_session").EditSession,j=a("../layer/text").Text,L=a("./static.css"),w=a("../config"),$=a("../lib/dom"),E=a("../lib/lang").escapeHTML,N=function(){function t(e){this.type=e,this.style={},this.textContent=""}return t.prototype.cloneNode=function(){return this},t.prototype.appendChild=function(e){this.textContent+=e.toString()},t.prototype.toString=function(){var e=[];if(this.type!="fragment"){e.push("<",this.type),this.className&&e.push(" class='",this.className,"'");var r=[];for(var o in this.style)r.push(o,":",this.style[o]);r.length&&e.push(" style='",r.join(""),"'"),e.push(">")}return this.textContent&&e.push(this.textContent),this.type!="fragment"&&e.push("</",this.type,">"),e.join("")},t}(),_={createTextNode:function(t,e){return E(t)},createElement:function(t){return new N(t)},createFragment:function(){return new N("fragment")}},M=function(){this.config={},this.dom=_};M.prototype=j.prototype;var x=function(t,e,r){var o=t.className.match(/lang-(\w+)/),m=e.mode||o&&"ace/mode/"+o[1];if(!m)return!1;var c=e.theme||"ace/theme/textmate",n="",g=[];if(t.firstElementChild)for(var h=0,s=0;s<t.childNodes.length;s++){var i=t.childNodes[s];i.nodeType==3?(h+=i.data.length,n+=i.data):g.push(h,i)}else n=t.textContent,e.trim&&(n=n.trim());x.render(n,m,c,e.firstLineNumber,!e.showGutter,function(f){$.importCssString(f.css,"ace_highlight"),t.innerHTML=f.html;for(var y=t.firstChild.firstChild,u=0;u<g.length;u+=2){var C=f.session.doc.indexToPosition(g[u]),O=g[u+1],T=y.children[C.row];T&&T.appendChild(O)}r&&r()})};x.render=function(t,e,r,o,m,c){var n=1,g=v.prototype.$modes;typeof r=="string"&&(n++,w.loadModule(["theme",r],function(i){r=i,--n||s()}));var h;e&&typeof e=="object"&&!e.getTokenizer&&(h=e,e=h.path),typeof e=="string"&&(n++,w.loadModule(["mode",e],function(i){(!g[e]||h)&&(g[e]=new i.Mode(h)),e=g[e],--n||s()}));function s(){var i=x.renderSync(t,e,r,o,m);return c?c(i):i}return--n||s()},x.renderSync=function(t,e,r,o,m){o=parseInt(o||1,10);var c=new v("");c.setUseWorker(!1),c.setMode(e);var n=new M;n.setSession(c),Object.keys(n.$tabStrings).forEach(function(u){if(typeof n.$tabStrings[u]=="string"){var C=_.createFragment();C.textContent=n.$tabStrings[u],n.$tabStrings[u]=C}}),c.setValue(t);var g=c.getLength(),h=_.createElement("div");h.className=r.cssClass;var s=_.createElement("div");s.className="ace_static_highlight"+(m?"":" ace_show_gutter"),s.style["counter-reset"]="ace_line "+(o-1);for(var i=0;i<g;i++){var f=_.createElement("div");if(f.className="ace_line",!m){var y=_.createElement("span");y.className="ace_gutter ace_gutter-cell",y.textContent="",f.appendChild(y)}n.$renderLine(f,i,!1),f.textContent+=`
`,s.appendChild(f)}return h.appendChild(s),{css:L+r.cssText,html:h.toString(),session:c}},l.exports=x,l.exports.highlight=x}),function(){ace.require(["ace/ext/static_highlight"],function(a){p&&(p.exports=a)})}()})(P);const D=b,H=z({__proto__:null,default:D},[b]);export{H as e};
