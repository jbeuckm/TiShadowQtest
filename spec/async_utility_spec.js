

describe("Async Utility", function() {
	
	it("should load data", function() {
	    
	    var data = '';
	    
	    runs(function(){
	        require('/async_utility').getData()
               .then(function(response){
                   data = response;
               });
	    })
	    
	    waitsFor(function(){
	        expect(data).not.toEqual('');
	    }, "The data should be loaded", 2000);

	});

});

