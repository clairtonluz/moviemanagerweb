'use strict';

angular.module('moviemanager')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'auth/login.html',
            controller: 'loginCtrl'
        });
    }])

    .controller('loginCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope, $location, AuthenticationService) {
            // reset login status
            AuthenticationService.clearCredentials();

            $scope.login = function () {
                $scope.dataLoading = true;
                AuthenticationService.login($scope.username, $scope.password, function (error) {
                    if (error) {
                        $scope.dataLoading = false;
                        $scope.errorUsername = "Inválido";
                        $scope.errorPassword = "Inválido";
                    } else {
                        $location.path('/');
                    }
                });
            };

        }]);

