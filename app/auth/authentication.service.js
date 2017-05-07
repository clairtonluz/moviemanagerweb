'use strict';

angular.module('moviemanager')
    .factory('AuthenticationService',
        ['$http', '$cookieStore', '$rootScope', '$timeout',
            function ($http, $cookieStore, $rootScope) {
                var service = {};

                service.setCredentials = function (user) {
                    $rootScope.globals = {
                        currentUser: user
                    };
                    $cookieStore.put('globals', $rootScope.globals);
                };

                service.clearCredentials = function () {
                    $rootScope.globals = {};
                    $cookieStore.remove('globals');
                };

                service.login = function (username, password, callback) {
                    var authdata = btoa(username + ':' + password);

                    var req = {
                        method: 'GET',
                        url: 'http://localhost:8080/api/login',
                        headers: {
                            'Authorization': 'Basic ' + authdata
                        },
                        data: {test: 'test'}
                    };

                    $http(req).then(function (response) {
                        if (response) {
                            var user = response.data;
                            user.authdata = authdata;
                            service.setCredentials(user);
                            callback(null, user);
                        } else {
                            callback('Username or password is incorrect');
                        }
                    }, function () {
                        callback('Username or password is incorrect');
                    });

                };

                return service;
            }]);