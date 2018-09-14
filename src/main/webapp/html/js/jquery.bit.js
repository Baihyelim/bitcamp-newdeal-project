$.parseQuery = function(url) {
    var paramMap = {};

    var qs = url.split('?');
    console.log(qs);
    if (qs.length > 1) {
        var params = qs[1].split('&');
        console.log(params);
        for (var param of params) {
        	console.log(param);
            var kv = param.split('=')
            console.log(kv);
            paramMap[kv[0]] = kv[1];
        }
    }
    return paramMap;
};