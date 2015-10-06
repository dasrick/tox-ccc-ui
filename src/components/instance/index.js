'use strict';

//var angular = require('angular');
var ModuleName = 'instance',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('InstanceListController', require('./controller/ListController'))
  .controller('InstanceDetailController', require('./controller/DetailController'))
  .controller('InstanceNewController', require('./controller/NewController'))
  .controller('InstanceEditController', require('./controller/EditController'))

  .factory('InstanceResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/vmproinstance/:instanceId', {instanceId: '@id'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
