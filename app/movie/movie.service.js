'use strict';

angular.module('moviemanager')
    .factory('movieService', ['$resource', 'config',
        function ($resource, config) {
            return $resource(config.api + '/movies/:id', {id: '@id'}, {});
        }]);