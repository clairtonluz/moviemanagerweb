'use strict';


angular.module('moviemanager')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movie', {
            templateUrl: 'movie/movie.html',
            controller: 'movieCtrl'
        });
    }])

    .controller('movieCtrl', ['$scope', 'movieService', 'favoriteService',
        function ($scope, movieService, favoriteService) {

            var getMovies = _getMovies;
            var getFavorite = _getFavorite;
            $scope.onFavorite = _onFavorite;

            getMovies();

            function _getMovies() {
                movieService.query({}, function (movies) {
                    favoriteService.query({}, function (favorites) {
                        movies.forEach(function (movie) {
                            movie.favorite = getFavorite(favorites, movie)
                        });
                        $scope.movies = movies;
                    });
                });
            }

            function _onFavorite(movie) {
                $scope.clickedId = movie.id;
                if (movie.favorite) {
                    favoriteService.remove({id: movie.favorite.id}, function () {
                        getMovies();
                        $scope.clickedId = null;
                    });
                } else {
                    favoriteService.save({movie: movie}, function () {
                        getMovies();
                        $scope.clickedId = null;
                    })
                }
            }

            function _getFavorite(favorites, movie) {
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].movie.id === movie.id) {
                        return favorites[i];
                    }
                }
                return false;
            }
        }]);

