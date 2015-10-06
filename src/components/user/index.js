'use strict';

//var angular = require('angular');
var ModuleName = 'user',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('UserListController', require('./controller/ListController'))
  .controller('UserDetailController', require('./controller/DetailController'))

  .factory('UserResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/users/:userId', {userId: '@id', customer: '@customer'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
