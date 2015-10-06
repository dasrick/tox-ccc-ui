'use strict';

//var angular = require('angular');
var ModuleName = 'review',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('ReviewListController', require('./controller/ListController'))
  .controller('ReviewDetailController', require('./controller/DetailController'))

  .factory('ReviewResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/review/:reviewId', {reviewId: '@id'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
