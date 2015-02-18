'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('player_skin', []);

//angular.module('player_skin').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('player_skin').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('player_skin').service("InstanceService", require('./service/InstanceService'));
angular.module('player_skin').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('player_skin');
});

