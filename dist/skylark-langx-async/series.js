/**
 * skylark-langx-async - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-objects","./async","./deferred"],function(e,n,r){return n.series=function(n,t,u){var l=[],s=new r,a=s.promise;return u=u||null,t=t||[],s.resolve(),e.each(n,function(e,n){a=a.then(function(){return n.apply(u,t)}),l.push(a)}),r.all(l)}});
//# sourceMappingURL=sourcemaps/series.js.map
