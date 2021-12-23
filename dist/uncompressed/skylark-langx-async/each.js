define([
	"./async"
],function(async){

	function each(items, next, callback) {
		if (items.length === 0) return callback(undefined, items);

		var transformed = new Array(items.length);
		var count = 0;
		var returned = false;

		items.forEach(function(item, index) {
			next(item, function(error, transformedItem) {
		    	if (returned) return;
		    	if (error) {
		      		returned = true;
		      		return callback(error);
		    	}
		    	transformed[index] = transformedItem;
		    	count += 1;
		    	if (count === items.length) {
		    		return callback(undefined, transformed);
		    	}
			});
		});
	}

	return async.each = each;

});