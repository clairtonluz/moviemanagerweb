'use strict';

angular.module('moviemanager')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/favorite', {
    templateUrl: 'favorite/favorite.html',
    controller: 'favoriteCtrl'
  });
}])

.controller('favoriteCtrl', [function() {

  console.log('tesste');
}]);