'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('log', []);

//angular.module('log').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('log').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('log').service("InstanceService", require('./service/InstanceService'));
angular.module('log').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('log');
});

