'use strict';

var ModuleName = 'plan',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('PlanListController', require('./controller/ListController'))
  .controller('PlanDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
