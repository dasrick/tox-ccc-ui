'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('user', []);

//angular.module('user').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('user').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('user').service("InstanceService", require('./service/InstanceService'));
angular.module('user').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('user');
});

