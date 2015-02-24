'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('security', []);

angular.module('security').controller("SecurityLoginController", require('./controller/LoginController'));
angular.module('security').controller("SecurityLogoutController", require('./controller/LogoutController'));
//angular.module('security').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
angular.module('security').service("SecurityService", require('./service/SecurityService'));
angular.module('security').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('security');
});

