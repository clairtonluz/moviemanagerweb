'use strict';

angular.module('moviemanager')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movie', {
            templateUrl: 'movie/movie.html',
            controller: 'movieCtrl'
        });
    }])

    .controller('movieCtrl', ['$scope', 'movieService', function ($scope, movieService) {
        movieService.query({}, function (movies) {
            $scope.movies = movies;
        });
    }]);