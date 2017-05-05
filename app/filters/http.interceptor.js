'use strict';

angular.module('moviemanager')
    .factory('HttpInterceptor', ['$rootScope', '$location', function ($rootScope, $location) {
        return {
            request: function (config) {
                config.headers['Authorization'] = 'Basic YWRtaW46YWRtaW4=';
                console.log(config.headers);
                return config;
            },
            responseError: function (rejection) {
                console.log(rejection);
                if (rejection.status === 401) {
                    console.log('teste');
                    $location.path('/login');
                }
            }
        };
    }])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    });