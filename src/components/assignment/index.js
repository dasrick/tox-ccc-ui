'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('assignment', []);

//angular.module('assignment').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('assignment').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('assignment').service("InstanceService", require('./service/InstanceService'));
angular.module('assignment').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('assignment');
});

