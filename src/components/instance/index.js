'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('instance', []);

//angular.module('instance').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('instance').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('instance').service("InstanceService", require('./service/InstanceService'));
angular.module('instance').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config)
  });
  $translatePartialLoaderProvider.addPart('instance');
});

