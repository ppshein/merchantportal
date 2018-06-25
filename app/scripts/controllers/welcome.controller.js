(function() {
    'use strict';
    var wmApp = angular.module('wmApp');
    
    wmApp.controller('welcomeCtrl', WelcomeCtrl);
    WelcomeCtrl.$inject = ['$scope', '$rootScope', '$window', '$location'];
    function WelcomeCtrl($scope, $rootScope, $window, $location) {
        $scope.amount = 1;
        $scope.entryFormData = {};

        $scope.checkoutAction = () => {
            $window.sessionStorage.setItem('checkout', angular.toJson({
                amount: $scope.amount,
                quantity: $scope.entryFormData.quantity
            }));
            $location.path('checkout');
        };
    }
})();