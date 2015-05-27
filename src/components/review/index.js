'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('review', []);

angular.module('review').controller('ReviewListController', require('./controller/ListController'));
angular.module('review').controller('ReviewDetailController', require('./controller/DetailController'));
//angular.module('review').service("InstanceService", require('./service/InstanceService'));
angular.module('review').factory('ReviewResource', function ($resource, EnvConfigService) {
  var apiUrl = EnvConfigService.get('apiUrl');
  return $resource(apiUrl + '/api/review/:reviewId', {reviewId: '@id'}, {});
});
angular.module('review').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('review');
});

