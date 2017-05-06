'use strict';

angular.module('moviemanager')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/favorites', {
            templateUrl: 'favorite/favorites.html',
            controller: 'favoritesCtrl'
        });
    }])

    .controller('favoritesCtrl', ['$scope', 'favoriteService',
        function ($scope, favoriteService) {

            var getFavorites = _getFavorites;
            $scope.onFavorite = _onFavorite;

            getFavorites();

            function _getFavorites() {
                favoriteService.query({}, function (favorites) {
                    $scope.favorites = favorites;
                });
            }

            function _onFavorite(favorite) {
                $scope.clickedId = favorite.id;
                favoriteService.remove({id: favorite.id}, function () {
                    getFavorites();
                });
            }
        }]);