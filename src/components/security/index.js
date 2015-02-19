'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('security', []);

//angular.module('security').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('security').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('security').service("InstanceService", require('./service/InstanceService'));
angular.module('security').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('security');
});

