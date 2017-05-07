'use strict';

angular.module('moviemanager')
    .factory('HttpInterceptor', ['$rootScope', '$cookieStore', '$location',
        function ($rootScope, $cookieStore, $location) {
            return {
                request: function (config) {
                    if (config.url.indexOf('/api/') !== -1) {
                        if (!$rootScope.globals) {
                            $rootScope.globals = $cookieStore.get('globals');
                        }

                        if ($rootScope.globals && $rootScope.globals.currentUser) {
                            config.headers['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
                        }
                    }

                    return config;
                },
                responseError: function (rejection) {
                    if (rejection.config.url.indexOf('/api/login') === -1 && (rejection.status === 401 || rejection.status === -1)) {
                        $location.path('/login');
                    }
                }
            };
        }])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    });