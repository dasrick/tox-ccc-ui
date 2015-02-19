'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('dashboard', []);

//angular.module('dashboard').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('dashboard').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('dashboard').service("InstanceService", require('./service/InstanceService'));
angular.module('dashboard').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('dashboard');
});

