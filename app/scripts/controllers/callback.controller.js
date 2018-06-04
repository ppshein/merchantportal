(function() {
    'use strict';
    var wmApp = angular.module('wmApp');
    
    wmApp.controller('callbackCtrl', CallbackCtrl);
    CallbackCtrl.$inject = ['$scope', '$window', '$routeParams', 'apiService'];
    function CallbackCtrl($scope, $window, $routeParams, apiService) {
        
    }
})();