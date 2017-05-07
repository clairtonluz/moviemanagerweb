'use strict';

angular.module('moviemanager')
    .factory('favoriteService', ['$resource', 'config',
        function ($resource, config) {
            return $resource(config.api + '/favorites/:id', {id: '@id'}, {});
        }]);