'use strict';

//var angular = require('angular');
var ModuleName = 'log',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .factory('LogResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/logs/:logId', {logId: '@id'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
