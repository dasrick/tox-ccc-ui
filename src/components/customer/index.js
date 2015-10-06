'use strict';

//var angular = require('angular');
var ModuleName = 'customer',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('CustomerListController', require('./controller/ListController'))
  .controller('CustomerDetailController', require('./controller/DetailController'))

  .factory('CustomerResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/customers/:customerId', {customerId: '@id', parent: '@parentId'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
