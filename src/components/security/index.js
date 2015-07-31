'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('security', []);

angular.module('security').controller('SecurityLoginController', require('./controller/LoginController'));
angular.module('security').controller('SecurityLogoutController', require('./controller/LogoutController'));
angular.module('security').controller('SecurityRequestPasswordController', require('./controller/RequestPasswordController'));
angular.module('security').factory('PermissionService', require('./service/PermissionService'));
angular.module('security').service('SecurityService', require('./service/SecurityService'));
angular.module('security').directive('hasRole', require('./directive/HasRole'));
angular.module('security').directive('hasType', require('./directive/HasType'));
angular.module('security').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('security');
});

