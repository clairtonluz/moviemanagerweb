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
                        var list = [];
                        var sublist = [];

                        movies.forEach(function (movie) {
                            movie.favorite = getFavorite(favorites, movie)
                            sublist.push(movie);
                            if (sublist.length === 2) {
                                list.push(sublist);
                                sublist = [];
                            }
                        });

                        if (sublist.length) {
                            list.push(sublist);
                        }

                        $scope.list = list;
                    });
                });
            }

            function _onFavorite(movie) {
                if (movie.favorite) {
                    favoriteService.remove({id: movie.favorite.id}, function () {
                        getMovies();
                    });
                } else {
                    favoriteService.save({movie: movie}, function () {
                        getMovies();
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

