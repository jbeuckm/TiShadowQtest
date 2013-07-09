

describe("Async Utility", function() {
	
	it("should load data", function() {
	    
	    require('/async_utility').getData()
	       .then(function(){
	           expect(true).toEqual(true);
	       })
	       .fail(function(){
	           expect(true).toEqual(false);
	       });
	});

});

