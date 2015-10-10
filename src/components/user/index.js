'use strict';

var ModuleName = 'user',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('UserListController', require('./controller/ListController'))
  .controller('UserDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
