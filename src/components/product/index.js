'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('product', []);

//angular.module('product').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('product').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('product').service("InstanceService", require('./service/InstanceService'));
angular.module('product').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('product');
});

