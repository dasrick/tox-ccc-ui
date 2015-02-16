'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('plan', []);

//angular.module('plan').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('plan').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('plan').service("InstanceService", require('./service/InstanceService'));
angular.module('plan').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config)
  });
  $translatePartialLoaderProvider.addPart('plan');
});

