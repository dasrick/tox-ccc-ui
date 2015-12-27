'use strict';

/**
 * @ngInject
 */
var ModuleName = 'transcoder-profile',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('TranscoderProfileListController', require('./controller/ListController'))
  .controller('TranscoderProfileDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })


  // default response error handling ///////////////////////////////////////////////////////////////////////////////////
  .config(['ResponseErrorInterceptorProvider', function (ResponseErrorInterceptorProvider) {
    ResponseErrorInterceptorProvider
      .addErrorHandling('/api/transcoderprofiles', 'GET', 'common.error.transcoderprofiles.get.list');
  }])
  // ===================================================================================================================
;
