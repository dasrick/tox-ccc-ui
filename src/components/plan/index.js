'use strict';

//var angular = require('angular');
var ModuleName = 'plan',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('PlanListController', require('./controller/ListController'))
  .controller('PlanDetailController', require('./controller/DetailController'))

  .factory('PlanResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/plans/:planId', {planId: '@id'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
