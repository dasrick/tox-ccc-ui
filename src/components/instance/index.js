'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('instance', []);

angular.module('instance').controller('InstanceListController', require('./controller/ListController'));
angular.module('instance').controller('InstanceDetailController', require('./controller/DetailController'));
angular.module('instance').controller('InstanceNewController', require('./controller/NewController'));
angular.module('instance').controller('InstanceEditController', require('./controller/EditController'));
angular.module('instance').factory('InstanceResource', function ($resource, EnvConfigService) {
  var apiUrl = EnvConfigService.get('apiUrl');
  return $resource(apiUrl + '/api/vmproinstance/:instanceId', {instanceId: '@id'}, {});
});
angular.module('instance').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('instance');
});

