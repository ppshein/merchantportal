(function() {
    'use strict';
    var wmApp = angular.module('wmApp');
    angular.module('wmApp').service('apiService', ['$rootScope', '$q', function($rootScope, $q) {
        
        this.apiPostRequest = (paymentId, params) => {
            var deferred = $q.defer();
            $rootScope.headers['paymentRequestId'] = paymentId;
            console.log(JSON.stringify($rootScope.headers));
            fetch($rootScope.api, {
                headers: $rootScope.headers,
                method: 'POST',
                body: JSON.stringify(params)
            }).then(function (response) {
                if (!response.ok) {
                    throw err;
                }
                return response.json();
            }).then(function (data) {
                console.log('data ' + JSON.stringify(data));
                deferred.resolve(data);
            }).catch(function (error) {
                console.log('error ' + JSON.stringify(error));
                deferred.reject(error);
            });
            return deferred.promise;
        };

    }]);
})();