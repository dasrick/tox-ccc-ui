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

  .config(['ResponseErrorInterceptorProvider', function (ResponseErrorInterceptorProvider) {
    ResponseErrorInterceptorProvider.addErrorHandling('/api/customers', 'GET', 'common.error.customers.get.list');
    //ResponseErrorInterceptorProvider.addErrorHandling('/vam/rest/vms/{vmid}/users/{email}', 'GET', 'common.error.vms.users.get.single');
    //ResponseErrorInterceptorProvider.addErrorHandling('/vam/rest/vms/{vmid}/users/{uid}', 'PATCH', 'common.error.vms.users.patch.single');
    //ResponseErrorInterceptorProvider.addErrorHandling('/vam/rest/vms/{vmid}/users/{uid}', 'DELETE', 'common.error.vms.users.delete.single');
  }])
;
