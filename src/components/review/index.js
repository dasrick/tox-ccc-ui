'use strict';

var ModuleName = 'review',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('ReviewListController', require('./controller/ListController'))
  .controller('ReviewDetailController', require('./controller/DetailController'))
  .filter('diff', require('./filter/Diff'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
