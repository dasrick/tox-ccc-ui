'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('customer', []);

angular.module('customer').controller('CustomerListController', require('./controller/ListController'));
angular.module('customer').controller('CustomerDetailController', require('./controller/DetailController'));
//angular.module('customer').service("InstanceService", require('./service/InstanceService'));
angular.module('customer').factory('CustomerResource', function ($resource, EnvConfigService) {
  var apiUrl = EnvConfigService.get('apiUrl');
  return $resource(apiUrl + '/api/customers/:customerId', {customerId: '@id', parent: '@parentId'}, {});
});
angular.module('customer').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('customer');
});

