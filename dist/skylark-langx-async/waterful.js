/**
 * skylark-langx-async - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-objects","./async","./deferred"],function(e,n,r){return n.waterful=function(n,t,u){var a=new r,c=a.promise;return u=u||null,t=t||[],a.resolveWith(u,t),e.each(n,function(e,n){c=c.then(n)}),c}});
//# sourceMappingURL=sourcemaps/waterful.js.map
