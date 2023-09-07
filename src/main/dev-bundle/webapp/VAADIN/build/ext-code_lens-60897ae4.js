function R(d,b){for(var i=0;i<b.length;i++){const r=b[i];if(typeof r!="string"&&!Array.isArray(r)){for(const g in r)if(g!=="default"&&!(g in d)){const h=Object.getOwnPropertyDescriptor(r,g);h&&Object.defineProperty(d,g,h.get?h:{enumerable:!0,get:()=>r[g]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var C={},D={get exports(){return C},set exports(d){C=d}};(function(d,b){ace.define("ace/ext/code_lens",["require","exports","module","ace/line_widgets","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/editor","ace/config"],function(i,r,g){var h=i("../line_widgets").LineWidgets,O=i("../lib/event"),T=i("../lib/lang"),w=i("../lib/dom");function k(e){var t=e.$textLayer,n=t.$lenses;n&&n.forEach(function(o){o.remove()}),t.$lenses=null}function W(e,t){var n=e&t.CHANGE_LINES||e&t.CHANGE_FULL||e&t.CHANGE_SCROLL||e&t.CHANGE_TEXT;if(n){var o=t.session,s=t.session.lineWidgets,p=t.$textLayer,a=p.$lenses;if(!s){a&&k(t);return}var L=t.$textLayer.$lines.cells,l=t.layerConfig,x=t.$padding;a||(a=p.$lenses=[]);for(var f=0,$=0;$<L.length;$++){var u=L[$].row,m=s[u],_=m&&m.lenses;if(!(!_||!_.length)){var c=a[f];c||(c=a[f]=w.buildDom(["div",{class:"ace_codeLens"}],t.container)),c.style.height=l.lineHeight+"px",f++;for(var v=0;v<_.length;v++){var y=c.childNodes[2*v];y||(v!=0&&c.appendChild(w.createTextNode(" | ")),y=w.buildDom(["a"],c)),y.textContent=_[v].title,y.lensCommand=_[v]}for(;c.childNodes.length>2*v-1;)c.lastChild.remove();var P=t.$cursorLayer.getPixelPosition({row:u,column:0},!0).top-l.lineHeight*m.rowsAbove-l.offset;c.style.top=P+"px";var H=t.gutterWidth,E=o.getLine(u).search(/\S|$/);E==-1&&(E=0),H+=E*l.characterWidth,c.style.paddingLeft=x+H+"px"}}for(;f<a.length;)a.pop().remove()}}function N(e){if(e.lineWidgets){var t=e.widgetManager;e.lineWidgets.forEach(function(n){n&&n.lenses&&t.removeLineWidget(n)})}}r.setLenses=function(e,t){var n=Number.MAX_VALUE;return N(e),t&&t.forEach(function(o){var s=o.start.row,p=o.start.column,a=e.lineWidgets&&e.lineWidgets[s];(!a||!a.lenses)&&(a=e.widgetManager.$registerLineWidget({rowCount:1,rowsAbove:1,row:s,column:p,lenses:[]})),a.lenses.push(o.command),s<n&&(n=s)}),e._emit("changeFold",{data:{start:{row:n}}}),n};function S(e){e.codeLensProviders=[],e.renderer.on("afterRender",W),e.$codeLensClickHandler||(e.$codeLensClickHandler=function(n){var o=n.target.lensCommand;o&&(e.execCommand(o.id,o.arguments),e._emit("codeLensClick",n))},O.addListener(e.container,"click",e.$codeLensClickHandler,e)),e.$updateLenses=function(){var n=e.session;if(!n)return;n.widgetManager||(n.widgetManager=new h(n),n.widgetManager.attach(e));var o=e.codeLensProviders.length,s=[];e.codeLensProviders.forEach(function(a){a.provideCodeLenses(n,function(L,l){L||(l.forEach(function(x){s.push(x)}),o--,o==0&&p())})});function p(){var a=n.selection.cursor,L=n.documentToScreenRow(a),l=n.getScrollTop(),x=r.setLenses(n,s),f=n.$undoManager&&n.$undoManager.$lastDelta;if(!(f&&f.action=="remove"&&f.lines.length>1)){var $=n.documentToScreenRow(a),u=e.renderer.layerConfig.lineHeight,m=n.getScrollTop()+($-L)*u;x==0&&l<u/4&&l>-u/4&&(m=-u),n.setScrollTop(m)}}};var t=T.delayedCall(e.$updateLenses);e.$updateLensesOnInput=function(){t.delay(250)},e.on("input",e.$updateLensesOnInput)}function A(e){e.off("input",e.$updateLensesOnInput),e.renderer.off("afterRender",W),e.$codeLensClickHandler&&e.container.removeEventListener("click",e.$codeLensClickHandler)}r.registerCodeLensProvider=function(e,t){e.setOption("enableCodeLens",!0),e.codeLensProviders.push(t),e.$updateLensesOnInput()},r.clear=function(e){r.setLenses(e,null)};var M=i("../editor").Editor;i("../config").defineOptions(M.prototype,"editor",{enableCodeLens:{set:function(e){e?S(this):A(this)}}}),w.importCssString(`
.ace_codeLens {
    position: absolute;
    color: #aaa;
    font-size: 88%;
    background: inherit;
    width: 100%;
    display: flex;
    align-items: flex-end;
    pointer-events: none;
}
.ace_codeLens > a {
    cursor: pointer;
    pointer-events: auto;
}
.ace_codeLens > a:hover {
    color: #0000ff;
    text-decoration: underline;
}
.ace_dark > .ace_codeLens > a:hover {
    color: #4e94ce;
}
`,"codelense.css",!1)}),function(){ace.require(["ace/ext/code_lens"],function(i){d&&(d.exports=i)})}()})(D);const I=C,G=R({__proto__:null,default:I},[C]);export{G as e};
