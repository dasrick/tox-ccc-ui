'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('review', []);

//angular.module('review').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('review').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('review').service("InstanceService", require('./service/InstanceService'));
angular.module('review').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('review');
});

