'use strict';

var ModuleName = 'plan',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('PlanListController', require('./controller/ListController'))
  .controller('PlanDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
  // default response error handling ///////////////////////////////////////////////////////////////////////////////////
  .config(['ResponseErrorInterceptorProvider', function (ResponseErrorInterceptorProvider) {
    ResponseErrorInterceptorProvider
      .addErrorHandling('/api/plans', 'GET', 'common.error.plans.get.list');
    //ResponseErrorInterceptorProvider.addErrorHandling('/vam/rest/vms/{vmid}/users/{email}', 'GET', 'common.error.vms.users.get.single');
    //ResponseErrorInterceptorProvider.addErrorHandling('/vam/rest/vms/{vmid}/users/{uid}', 'PATCH', 'common.error.vms.users.patch.single');
    //ResponseErrorInterceptorProvider.addErrorHandling('/vam/rest/vms/{vmid}/users/{uid}', 'DELETE', 'common.error.vms.users.delete.single');
  }])
  // ===================================================================================================================
;
