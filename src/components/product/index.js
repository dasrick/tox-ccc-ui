'use strict';

//var angular = require('angular');
var ModuleName = 'product',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('ProductListController', require('./controller/ListController'))
  .controller('ProductDetailController', require('./controller/DetailController'))

  .factory('ProductResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/products/:productId', {productId: '@id'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
