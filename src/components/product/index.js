'use strict';

var ModuleName = 'product',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('ProductListController', require('./controller/ListController'))
  .controller('ProductDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
