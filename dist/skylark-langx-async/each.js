/**
 * skylark-langx-async - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./async"],function(n){return n.each=function(n,e,i){if(0===n.length)return i(void 0,n);var r=new Array(n.length),t=0,f=!1;n.forEach(function(o,c){e(o,function(e,o){if(!f)return e?(f=!0,i(e)):(r[c]=o,(t+=1)===n.length?i(void 0,r):void 0)})})}});
//# sourceMappingURL=sourcemaps/each.js.map
