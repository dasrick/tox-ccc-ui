'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('common', []);

angular.module('common').controller('CommonController', require('./controller/CommonController'));
angular.module('common').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config)
  });
  $translatePartialLoaderProvider.addPart('common');
});

