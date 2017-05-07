'use strict';

// Declare app level module which depends on views, and components
angular.module('moviemanager', [
  'ngRoute',
  'ngResource',
  'ngCookies'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/movies'});
}]);
