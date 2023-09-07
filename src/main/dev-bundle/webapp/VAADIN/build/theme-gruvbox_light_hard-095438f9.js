function g(r,t){for(var a=0;a<t.length;a++){const e=t[a];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const c=Object.getOwnPropertyDescriptor(e,n);c&&Object.defineProperty(r,n,c.get?c:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o={},l={get exports(){return o},set exports(r){o=r}};(function(r,t){ace.define("ace/theme/gruvbox_light_hard.css",["require","exports","module"],function(a,e,n){n.exports=`.ace-gruvbox-light-hard .ace_gutter {
  background: #f9f5d7;
  color: rgb(155,151,135)
}

.ace-gruvbox-light-hard .ace_print-margin {
  width: 1px;
  background: #e8e8e8
}

.ace-gruvbox-light-hard {
  background-color: #f9f5d7;
  color: rgba(60, 56, 54, 0.50)
}

.ace-gruvbox-light-hard .ace_cursor {
  color: #7c6f64
}

.ace-gruvbox-light-hard .ace_marker-layer .ace_selection {
  background: #ebdbb2
}

.ace-gruvbox-light-hard.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #f9f5d7;
  border-radius: 2px
}

.ace-gruvbox-light-hard .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174)
}

.ace-gruvbox-light-hard .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(60, 56, 54, 0.15)
}

.ace-gruvbox-light-hard .ace_marker-layer .ace_active-line {
  background: #ebdbb2
}

.ace-gruvbox-light-hard .ace_gutter-active-line {
  background-color: #ebdbb2
}

.ace-gruvbox-light-hard .ace_marker-layer .ace_selected-word {
  border: 1px solid #ebdbb2
}

.ace-gruvbox-light-hard .ace_fold {
  background-color: #79740e;
  border-color: rgba(60, 56, 54, 0.50)
}

.ace-gruvbox-light-hard .ace_keyword {
  color: #9d0006
}

.ace-gruvbox-light-hard .ace_keyword.ace_operator {
  color: #427b58
}

.ace-gruvbox-light-hard .ace_keyword.ace_other.ace_unit {
  color: #b16286
}

.ace-gruvbox-light-hard .ace_constant {
  color: #8f3f71
}

.ace-gruvbox-light-hard .ace_constant.ace_numeric {
  color: #8f3f71
}

.ace-gruvbox-light-hard .ace_constant.ace_character.ace_escape {
  color: #9d0006
}

.ace-gruvbox-light-hard .ace_constant.ace_other {
  color: #8f3f71
}

.ace-gruvbox-light-hard .ace_support.ace_function {
  color: #427b58
}

.ace-gruvbox-light-hard .ace_support.ace_constant {
  color: #8f3f71
}

.ace-gruvbox-light-hard .ace_support.ace_constant.ace_property-value {
  color: #1d2021
}

.ace-gruvbox-light-hard .ace_support.ace_class {
  color: #b57614
}

.ace-gruvbox-light-hard .ace_support.ace_type {
  color: #b57614
}

.ace-gruvbox-light-hard .ace_storage {
  color: #9d0006
}

.ace-gruvbox-light-hard .ace_invalid {
  color: #1d2021;
  background-color: #9d0006
}

.ace-gruvbox-light-hard .ace_string {
  color: #79740e
}

.ace-gruvbox-light-hard .ace_string.ace_regexp {
  color: #79740e
}

.ace-gruvbox-light-hard .ace_comment {
  font-style: italic;
  color: #928374
}

.ace-gruvbox-light-hard .ace_variable {
  color: #076678
}

.ace-gruvbox-light-hard .ace_variable.ace_language {
  color: #8f3f71
}

.ace-gruvbox-light-hard .ace_variable.ace_parameter {
  color: #1d2021
}

.ace-gruvbox-light-hard .ace_meta.ace_tag {
  color: #1d2021
}

.ace-gruvbox-light-hard .ace_entity.ace_other.ace_attribute-name {
  color: #b57614
}

.ace-gruvbox-light-hard .ace_entity.ace_name.ace_function {
  color: #79740e
}

.ace-gruvbox-light-hard .ace_entity.ace_name.ace_tag {
  color: #076678
}

.ace-gruvbox-light-hard .ace_markup.ace_heading {
  color: #79740e
}

.ace-gruvbox-light-hard .ace_markup.ace_list {
  color: #076678
}

.ace-gruvbox-light-hard .ace_indent-guide {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

.ace-gruvbox-light-hard .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
} 
`}),ace.define("ace/theme/gruvbox_light_hard",["require","exports","module","ace/theme/gruvbox_light_hard.css","ace/lib/dom"],function(a,e,n){e.isDark=!1,e.cssClass="ace-gruvbox-light-hard",e.cssText=a("./gruvbox_light_hard.css");var c=a("../lib/dom");c.importCssString(e.cssText,e.cssClass)}),function(){ace.require(["ace/theme/gruvbox_light_hard"],function(a){r&&(r.exports=a)})}()})(l);const h=o,i=g({__proto__:null,default:h},[o]);export{i as t};
