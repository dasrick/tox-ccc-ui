'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('user', []);

angular.module('user').controller('UserListController', require('./controller/ListController'));
angular.module('user').controller('UserDetailController', require('./controller/DetailController'));
angular.module('user').factory('UserResource', function ($resource, EnvConfigService) {
  var apiUrl = EnvConfigService.get('apiUrl');
  return $resource(apiUrl + '/api/users/:userId', {userId: '@id', customer: '@customer'}, {});
});
angular.module('user').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('user');
});

