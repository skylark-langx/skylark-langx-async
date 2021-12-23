define([
    "skylark-langx-objects",
    "./async",
    "./deferred"
],function(objects,async,Deferred){
     function series(arr,args,ctx) {
        var rets = [],
            d = new Deferred(),
            p = d.promise;

        ctx = ctx || null;
        args = args || [];

        d.resolve();
        objects.each(arr,function(i,func){
            p = p.then(function(){
                return func.apply(ctx,args);
            });
            rets.push(p);
        });

        return Deferred.all(rets);
    }

	return async.series = series;
});