'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('product', []);

angular.module('product').controller('ProductListController', require('./controller/ListController'));
angular.module('product').controller('ProductDetailController', require('./controller/DetailController'));
//angular.module('product').service("InstanceService", require('./service/InstanceService'));
angular.module('product').factory('ProductResource', function ($resource) {
  return $resource('https://ccc.mi24.dev/api/products/:productId', {productId: '@id'}, {});
});
angular.module('product').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('product');
});

