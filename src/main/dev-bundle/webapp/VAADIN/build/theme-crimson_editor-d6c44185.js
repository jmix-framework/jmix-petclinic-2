function t(r,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const c in e)if(c!=="default"&&!(c in r)){const o=Object.getOwnPropertyDescriptor(e,c);o&&Object.defineProperty(r,c,o.get?o:{enumerable:!0,get:()=>e[c]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},s={get exports(){return a},set exports(r){a=r}};(function(r,i){ace.define("ace/theme/crimson_editor.css",["require","exports","module"],function(n,e,c){c.exports=`.ace-crimson-editor .ace_gutter {
  background: #ebebeb;
  color: #333;
  overflow : hidden;
}

.ace-crimson-editor .ace_gutter-layer {
  width: 100%;
  text-align: right;
}

.ace-crimson-editor .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-crimson-editor {
  background-color: #FFFFFF;
  color: rgb(64, 64, 64);
}

.ace-crimson-editor .ace_cursor {
  color: black;
}

.ace-crimson-editor .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-crimson-editor .ace_identifier {
  color: black;
}

.ace-crimson-editor .ace_keyword {
  color: blue;
}

.ace-crimson-editor .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-crimson-editor .ace_constant.ace_language {
  color: rgb(255, 156, 0);
}

.ace-crimson-editor .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-crimson-editor .ace_invalid {
  text-decoration: line-through;
  color: rgb(224, 0, 0);
}

.ace-crimson-editor .ace_fold {
}

.ace-crimson-editor .ace_support.ace_function {
  color: rgb(192, 0, 0);
}

.ace-crimson-editor .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-crimson-editor .ace_support.ace_type,
.ace-crimson-editor .ace_support.ace_class {
  color: rgb(109, 121, 222);
}

.ace-crimson-editor .ace_keyword.ace_operator {
  color: rgb(49, 132, 149);
}

.ace-crimson-editor .ace_string {
  color: rgb(128, 0, 128);
}

.ace-crimson-editor .ace_comment {
  color: rgb(76, 136, 107);
}

.ace-crimson-editor .ace_comment.ace_doc {
  color: rgb(0, 102, 255);
}

.ace-crimson-editor .ace_comment.ace_doc.ace_tag {
  color: rgb(128, 159, 191);
}

.ace-crimson-editor .ace_constant.ace_numeric {
  color: rgb(0, 0, 64);
}

.ace-crimson-editor .ace_variable {
  color: rgb(0, 64, 128);
}

.ace-crimson-editor .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-crimson-editor .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}

.ace-crimson-editor .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-crimson-editor .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-crimson-editor .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-crimson-editor .ace_marker-layer .ace_active-line {
  background: rgb(232, 242, 254);
}

.ace-crimson-editor .ace_gutter-active-line {
    background-color : #dcdcdc;
}

.ace-crimson-editor .ace_meta.ace_tag {
  color:rgb(28, 2, 255);
}

.ace-crimson-editor .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-crimson-editor .ace_string.ace_regex {
  color: rgb(192, 0, 192);
}

.ace-crimson-editor .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

.ace-crimson-editor .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
} 
`}),ace.define("ace/theme/crimson_editor",["require","exports","module","ace/theme/crimson_editor.css","ace/lib/dom"],function(n,e,c){e.isDark=!1,e.cssText=n("./crimson_editor.css"),e.cssClass="ace-crimson-editor";var o=n("../lib/dom");o.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/crimson_editor"],function(n){r&&(r.exports=n)})}()})(s);const d=a,A=t({__proto__:null,default:d},[a]);export{A as t};
