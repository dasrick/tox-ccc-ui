'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('common', []);

angular.module('common').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('common');
});

