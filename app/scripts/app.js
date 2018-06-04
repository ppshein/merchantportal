(function() {
    'use strict';
    var wmApp = angular.module('wmApp', ['ngRoute', 'ngSanitize']);
    
    // it's router, I cannot create separate file because of error message
    wmApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl:  '/welcome.html',
                controllerAs:  'welcomeCtrl'
            })
            .when('/checkout', {
                templateUrl:  '/checkout.html',
                controllerAs:  'checkoutCtrl'
            })
            .when('/callback', {
                templateUrl:  '/callback.html',
                controllerAs:  'callbackCtrl'
            })
            .otherwise({redirectTo:'/'});
        $locationProvider.html5Mode(false);
    }]);

    // Declare all require variable here, never declare controller files for common usage.
    wmApp.run(['$rootScope', function ($rootScope, utilService, apiService) {
        $rootScope.headers = {
            'callbackUrl': 'http://sanmel.wave.money/#/callback',
            'client_id': 'd0e46216fe3b4889ad586d545a42bba6',
            'client_secret':  '23D13F7A330449C59C8F0D3792a10DaA',
            'Content-Type': 'application/json'
        };
        $rootScope.api = 'https://api.wavemoney.io:8100/wmt-mfs-merchant-exp/pay-with-wave';
    }]);
})();