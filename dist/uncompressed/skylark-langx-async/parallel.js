define([
    "skylark-langx-objects",
    "./async",
    "./deferred"
],function(objects,async,Deferred){
    function parallel(arr,args,ctx) {
        var rets = [];
        ctx = ctx || null;
        args = args || [];

        objects.each(arr,function(i,func){
            rets.push(func.apply(ctx,args));
        });

        return Deferred.all(rets);
    }

	return async.parallel = parallel;
});