'use strict';

var ModuleName = 'customer',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('CustomerListController', require('./controller/ListController'))
  .controller('CustomerDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
