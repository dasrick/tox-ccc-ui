'use strict';

var ModuleName = 'log',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
