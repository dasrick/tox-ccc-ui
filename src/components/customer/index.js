'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('customer', []);

//angular.module('customer').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('customer').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('customer').service("InstanceService", require('./service/InstanceService'));
angular.module('customer').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('customer');
});

