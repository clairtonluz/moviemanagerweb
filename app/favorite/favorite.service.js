'use strict';

angular.module('moviemanager')
    .factory('favoriteService', function ($resource) {
        return $resource('http://localhost:8080/api/favorites/:id', {id: '@id'}, {});
    });