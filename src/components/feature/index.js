'use strict';

var ModuleName = 'feature',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('FeatureListController', require('./controller/ListController'))
  .controller('FeatureDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
