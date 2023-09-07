function x(c,y){for(var t=0;t<y.length;t++){const a=y[t];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in c)){const s=Object.getOwnPropertyDescriptor(a,r);s&&Object.defineProperty(c,r,s.get?s:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var f={},_={get exports(){return f},set exports(c){f=c}};(function(c,y){ace.define("ace/ext/menu_tools/settings_menu.css",["require","exports","module"],function(t,a,r){r.exports=`#ace_settingsmenu, #kbshortcutmenu {
    background-color: #F7F7F7;
    color: black;
    box-shadow: -5px 4px 5px rgba(126, 126, 126, 0.55);
    padding: 1em 0.5em 2em 1em;
    overflow: auto;
    position: absolute;
    margin: 0;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: 9991;
    cursor: default;
}

.ace_dark #ace_settingsmenu, .ace_dark #kbshortcutmenu {
    box-shadow: -20px 10px 25px rgba(126, 126, 126, 0.25);
    background-color: rgba(255, 255, 255, 0.6);
    color: black;
}

.ace_optionsMenuEntry:hover {
    background-color: rgba(100, 100, 100, 0.1);
    transition: all 0.3s
}

.ace_closeButton {
    background: rgba(245, 146, 146, 0.5);
    border: 1px solid #F48A8A;
    border-radius: 50%;
    padding: 7px;
    position: absolute;
    right: -8px;
    top: -8px;
    z-index: 100000;
}
.ace_closeButton{
    background: rgba(245, 146, 146, 0.9);
}
.ace_optionsMenuKey {
    color: darkslateblue;
    font-weight: bold;
}
.ace_optionsMenuCommand {
    color: darkcyan;
    font-weight: normal;
}
.ace_optionsMenuEntry input, .ace_optionsMenuEntry button {
    vertical-align: middle;
}

.ace_optionsMenuEntry button[ace_selected_button=true] {
    background: #e7e7e7;
    box-shadow: 1px 0px 2px 0px #adadad inset;
    border-color: #adadad;
}
.ace_optionsMenuEntry button {
    background: white;
    border: 1px solid lightgray;
    margin: 0px;
}
.ace_optionsMenuEntry button:hover{
    background: #f0f0f0;
}`}),ace.define("ace/ext/menu_tools/overlay_page",["require","exports","module","ace/lib/dom","ace/ext/menu_tools/settings_menu.css"],function(t,a,r){var s=t("../../lib/dom"),b=t("./settings_menu.css");s.importCssString(b,"settings_menu.css",!1),r.exports.overlayPage=function(o,d,p){var n=document.createElement("div"),l=!1;function i(g){g.keyCode===27&&e()}function e(){n&&(document.removeEventListener("keydown",i),n.parentNode.removeChild(n),o&&o.focus(),n=null,p&&p())}function m(g){l=g,g&&(n.style.pointerEvents="none",d.style.pointerEvents="auto")}return n.style.cssText="margin: 0; padding: 0; position: fixed; top:0; bottom:0; left:0; right:0;z-index: 9990; "+(o?"background-color: rgba(0, 0, 0, 0.3);":""),n.addEventListener("click",function(g){l||e()}),document.addEventListener("keydown",i),d.addEventListener("click",function(g){g.stopPropagation()}),n.appendChild(d),document.body.appendChild(n),o&&o.blur(),{close:e,setIgnoreFocusOut:m}}}),ace.define("ace/ext/menu_tools/get_editor_keyboard_shortcuts",["require","exports","module","ace/lib/keys"],function(t,a,r){var s=t("../../lib/keys");r.exports.getEditorKeybordShortcuts=function(b){s.KEY_MODS;var u=[],o={};return b.keyBinding.$handlers.forEach(function(d){var p=d.commandKeyBinding;for(var n in p){var l=n.replace(/(^|-)\w/g,function(e){return e.toUpperCase()}),i=p[n];Array.isArray(i)||(i=[i]),i.forEach(function(e){typeof e!="string"&&(e=e.name),o[e]?o[e].key+="|"+l:(o[e]={key:l,command:e},u.push(o[e]))})}}),u}}),ace.define("ace/ext/keybinding_menu",["require","exports","module","ace/editor","ace/ext/menu_tools/overlay_page","ace/ext/menu_tools/get_editor_keyboard_shortcuts"],function(t,a,r){var s=t("../editor").Editor;function b(u){if(!document.getElementById("kbshortcutmenu")){var o=t("./menu_tools/overlay_page").overlayPage,d=t("./menu_tools/get_editor_keyboard_shortcuts").getEditorKeybordShortcuts,p=d(u),n=document.createElement("div"),l=p.reduce(function(i,e){return i+'<div class="ace_optionsMenuEntry"><span class="ace_optionsMenuCommand">'+e.command+'</span> : <span class="ace_optionsMenuKey">'+e.key+"</span></div>"},"");n.id="kbshortcutmenu",n.innerHTML="<h1>Keyboard Shortcuts</h1>"+l+"</div>",o(u,n)}}r.exports.init=function(u){s.prototype.showKeyboardShortcuts=function(){b(this)},u.commands.addCommands([{name:"showKeyboardShortcuts",bindKey:{win:"Ctrl-Alt-h",mac:"Command-Alt-h"},exec:function(o,d){o.showKeyboardShortcuts()}}])}}),function(){ace.require(["ace/ext/keybinding_menu"],function(t){c&&(c.exports=t)})}()})(_);const v=f,h=x({__proto__:null,default:v},[f]);export{h as e};
