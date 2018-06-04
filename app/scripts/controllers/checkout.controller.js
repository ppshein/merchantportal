(function() {
    'use strict';
    var wmApp = angular.module('wmApp');
    
    wmApp.controller('checkoutCtrl', CheckoutCtrl);
    CheckoutCtrl.$inject = ['$scope', '$window', '$routeParams', 'apiService'];
    function CheckoutCtrl($scope, $window, $routeParams, apiService) {
        var checkoutData = angular.fromJson($window.sessionStorage.getItem('checkout'));
        $scope.amount = checkoutData.amount;
        $scope.quantity = checkoutData.quantity;

        $scope.callbackAction = () => {
            var requestBody = {
                'purchaserMsisdn': $scope.entryFormData.msisdn,
                'purchaserAmount': $scope.amount,
                'timeOut': 30
            };

            $scope.merchantResponse = 'Please wait...';
            apiService.apiPostRequest($scope.entryFormData.request, requestBody).then((response) => {
                $scope.merchantResponse = JSON.stringify(response.additionalStatus);
            }).catch(err => {
                console.log('err');
                $scope.merchantResponse = JSON.stringify(err);
            });
        };
    }
})();