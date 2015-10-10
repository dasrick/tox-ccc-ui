'use strict';

var ModuleName = 'instance',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('InstanceListController', require('./controller/ListController'))
  .controller('InstanceDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
