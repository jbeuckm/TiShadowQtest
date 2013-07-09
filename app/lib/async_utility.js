
function getData() {
    
    var def = require('/q').defer();
    
    var xhr = Ti.Network.createHTTPClient({
        onload: function(data) {
            def.resolve(data);
        },
        onerror: function(err) {
            def.reject(err);
        }
    });
    
    xhr.open('GET', 'http://aljazeera.net');
    xhr.send();
    
    return def.promise;
}

exports = {
    getData: getData
}
