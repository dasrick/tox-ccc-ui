'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('plan', []);

angular.module('plan').controller('PlanListController', require('./controller/ListController'));
angular.module('plan').controller('PlanDetailController', require('./controller/DetailController'));
//angular.module('plan').service("InstanceService", require('./service/InstanceService'));
angular.module('plan').factory('PlanResource', function ($resource, EnvConfigService) {
  var apiUrl = EnvConfigService.get('apiUrl');
  return $resource(apiUrl + '/api/plans/:planId', {planId: '@id'}, {});
});
angular.module('plan').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('plan');
});

