

describe("Async Utility", function() {
	
	it("should load data", function() {
	    
	    require('/async_utility').getData()
	       .then(function(){
	           assert(true).equals(true);
	       })
	       .fail(function(){
	           assert(true).equals(false);
	       });
	});

});

