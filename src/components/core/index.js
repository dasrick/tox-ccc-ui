'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('core', []);

angular.module('core').controller('CoreController', require('./controller/CoreController'));
angular.module('core').controller('HeaderLeftController', require('./controller/HeaderLeftController'));
angular.module('core').controller('HeaderRightController', require('./controller/HeaderRightController'));
angular.module('core').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('core');
});

