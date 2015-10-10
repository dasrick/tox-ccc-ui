'use strict';

var ModuleName = 'assignment',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('AssignmentListController', require('./controller/ListController'))
  .controller('AssignmentDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
