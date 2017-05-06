'use strict';


angular.module('moviemanager')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movie', {
            templateUrl: 'movie/movie.html',
            controller: 'movieCtrl'
        }).when('/movie/:id', {
            templateUrl: 'movie/movie.html',
            controller: 'movieCtrl'
        });
    }])

    .controller('movieCtrl', ['$scope', '$routeParams', '$location', 'movieService',
        function ($scope, $routeParams, $location, movieService) {

            $scope.save = _save;
            $scope.back = _back;

            _init();

            function _init() {
                if ($routeParams.id) {
                    movieService.get({id: $routeParams.id}, function (movie) {
                        $scope.movie = movie;
                        setTimeout(Materialize.updateTextFields, 100);
                    });
                }
                _generateYears();
            }

            function _save(movie) {
                movieService.save(movie, function () {
                    _back();
                })
            }

            function _back() {
                $location.url('/movies');
            }

            function _generateYears() {
                var years = [];
                var currentYear = new Date().getFullYear();
                for (var year = currentYear; year >= 1900; year--) {
                    years.push(year);
                }

                $scope.years = years;


                setTimeout(function () {
                    $('select').material_select();
                }, 200);
            }

        }]);

