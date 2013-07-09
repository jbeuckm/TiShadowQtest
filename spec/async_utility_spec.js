describe("Async Utility", function() {

    it("should load data", function() {

        var data = '', loaded = false;

        runs(function() {
            require('/async_utility').getData().then(function(response) {
                data = response;
                loaded = true;
            });
        })
    
        waitsFor(function() {
            return loaded;
        }, "The data should be loaded", 2000);

        runs(function() {
            expect(data).not.toEqual('');
        });
    });

});

