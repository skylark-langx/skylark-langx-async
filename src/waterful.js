define([
    "skylark-langx-objects",
    "./async",
    "./deferred"
],function(objects,async,Deferred){
    function waterful(arr,args,ctx) {
        var d = new Deferred(),
            p = d.promise;

        ctx = ctx || null;
        args = args || [];

        d.resolveWith(ctx,args);

        objects.each(arr,function(i,func){
            p = p.then(func);
        });
        return p;
    }

	return async.waterful = waterful;
});