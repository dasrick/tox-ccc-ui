'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('common', []);

angular.module('common').controller('HeaderLeftController', require('./controller/HeaderLeftController'));
angular.module('common').controller('HeaderRightController', require('./controller/HeaderRightController'));
angular.module('common').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('common');
});

