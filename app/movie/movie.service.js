'use strict';

angular.module('moviemanager')
    .factory('movieService', function ($resource) {
        return $resource('http://localhost:8080/api/movies/:id', {id: '@id'}, {});
    });