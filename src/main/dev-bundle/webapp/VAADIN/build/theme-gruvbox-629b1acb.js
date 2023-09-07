function u(r,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const o in e)if(o!=="default"&&!(o in r)){const c=Object.getOwnPropertyDescriptor(e,o);c&&Object.defineProperty(r,o,c.get?c:{enumerable:!0,get:()=>e[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},g={get exports(){return a},set exports(r){a=r}};(function(r,t){ace.define("ace/theme/gruvbox.css",["require","exports","module"],function(n,e,o){o.exports=`.ace-gruvbox .ace_gutter-active-line {
  background-color: #3C3836;
}

.ace-gruvbox {
  color: #EBDAB4;
  background-color: #1D2021;
}

.ace-gruvbox .ace_invisible {
  color: #504945;
}

.ace-gruvbox .ace_marker-layer .ace_selection {
  background: rgba(179, 101, 57, 0.75)
}

.ace-gruvbox.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #002240;
}

.ace-gruvbox .ace_keyword {
  color: #8ec07c;
}

.ace-gruvbox .ace_comment {
  font-style: italic;
  color: #928375;
}

.ace-gruvbox .ace-statement {
  color: red;
}

.ace-gruvbox .ace_variable {
  color: #84A598;
}

.ace-gruvbox .ace_variable.ace_language {
  color: #D2879B;
}

.ace-gruvbox .ace_constant {
  color: #C2859A;
}

.ace-gruvbox .ace_constant.ace_language {
  color: #C2859A;
}

.ace-gruvbox .ace_constant.ace_numeric {
  color: #C2859A;
}

.ace-gruvbox .ace_string {
  color: #B8BA37;
}

.ace-gruvbox .ace_support {
  color: #F9BC41;
}

.ace-gruvbox .ace_support.ace_function {
  color: #F84B3C;
}

.ace-gruvbox .ace_storage {
  color: #8FBF7F;
}

.ace-gruvbox .ace_keyword.ace_operator {
  color: #EBDAB4;
}

.ace-gruvbox .ace_punctuation.ace_operator {
  color: yellow;
}

.ace-gruvbox .ace_marker-layer .ace_active-line {
  background: #3C3836;
}

.ace-gruvbox .ace_marker-layer .ace_selected-word {
  border-radius: 4px;
  border: 8px solid #3f475d;
}

.ace-gruvbox .ace_print-margin {
  width: 5px;
  background: #3C3836;
}

.ace-gruvbox .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQUFD4z6Crq/sfAAuYAuYl+7lfAAAAAElFTkSuQmCC") right repeat-y;
}

.ace-gruvbox .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/gruvbox",["require","exports","module","ace/theme/gruvbox.css","ace/lib/dom"],function(n,e,o){e.isDark=!0,e.cssClass="ace-gruvbox",e.cssText=n("./gruvbox.css");var c=n("../lib/dom");c.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/gruvbox"],function(n){r&&(r.exports=n)})}()})(g);const l=a,A=u({__proto__:null,default:l},[a]);export{A as t};
