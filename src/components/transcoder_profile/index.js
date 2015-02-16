'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('transcoder_profile', []);

//angular.module('transcoder_profile').controller("InstanceListController", require('./controller/InstanceListController'));
//angular.module('transcoder_profile').controller("InstanceDetailController", require('./controller/InstanceDetailController'));
//angular.module('transcoder_profile').service("InstanceService", require('./service/InstanceService'));
angular.module('transcoder_profile').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config)
  });
  $translatePartialLoaderProvider.addPart('transcoder_profile');
});

