/**
 * skylark-langx-async - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-objects","./async","./deferred"],function(n,e,l){return e.parallel=function(e,a,r){var u=[];return r=r||null,a=a||[],n.each(e,function(n,e){u.push(e.apply(r,a))}),l.all(u)}});
//# sourceMappingURL=sourcemaps/parallel.js.map
