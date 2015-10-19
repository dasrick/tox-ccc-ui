'use strict';

var ModuleName = 'security',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('SecurityLoginController', require('./controller/LoginController'))
  .controller('SecurityPasswordRequestController', require('./controller/PasswordRequestController'))
  .controller('SecurityPasswordResetController', require('./controller/PasswordResetController'))

  .factory('PermissionService', require('./service/PermissionService'))
  .factory('AuthService', require('./service/AuthService'))

  .directive('hasRole', require('./directive/HasRole'))
  .directive('hasType', require('./directive/HasType'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
