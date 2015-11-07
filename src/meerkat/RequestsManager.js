var RequestsManager = cc.Class.extend({
    _encode: true,
    _encryption: false,
    ctor: function () {
        cc.assert(RequestsManager._instance == null, "can be instantiated once only");
    },

    getGame: function(bundle) {
        var url = BACKEND_ADDRESS + "api/game";  
    },

    postGameProgress: function(userId, gameId, star, timeTaken, callback) {
        var url = BACKEND_ADDRESS + "api/gameProgress";
        var self = this;

        var data = {
            user_id: userId,
            game_id: gameId,
            data: {
                star: star,
                time_taken: timeTaken
            }
        };

        // cc.log(JSON.stringify(data));

        RequestHelper.post(url, JSON.stringify(data), function(succeed, responseText) {
            if (succeed) {
                var data = JSON.parse(responseText);
                callback && callback(true, data);
            } else
                callback && callback(false, null);
        });
    }
});

RequestsManager._instance = null;

RequestsManager.getInstance = function () {
    return RequestsManager._instance || RequestsManager.setupInstance();
};

RequestsManager.setupInstance = function () {
    RequestsManager._instance = new RequestsManager();
    return RequestsManager._instance;
};

var RequestHelper = {
    isSuccessHttpRequest: function (request) {
        return request.status == 200 && request.readyState == 4
    },
    get: function (url, cb) {
        var request = cc.loader.getXMLHttpRequest();
        request.onreadystatechange = function () {
            if (RequestHelper.isSuccessHttpRequest(request)) {
                cb && cb(true, request.responseText)
            } else {
                cb && cb(false, null)
            }
        };
        request.onerror = function() {
            cb && cb(false, null)
        };
        request.ontimeout = function() {
            cb && cb(false, null)  
        };
        request.open("GET", url, true);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send();
    },
    post: function (url, data, cb, authName, authPass) {
        var request = cc.loader.getXMLHttpRequest();
        request.onreadystatechange = function () {
            if (RequestHelper.isSuccessHttpRequest(request)) {
                cb && cb(true, request.responseText)
            } else {
                cb && cb(false, null)
            }
        };
        request.onerror = function() {
            cb && cb(false, null)
        };
        request.ontimeout = function() {
            cb && cb(false, null)  
        };
        request.open("POST", url);
        request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        if (authName != null && authPass != null)
            request.setRequestHeader("Authorization", "Basic " + Base64.encode(authName + ":" + authPass)); 

        request.send(data);
    }
};