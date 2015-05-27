'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('player-skin', []);

angular.module('player-skin').controller('PlayerSkinListController', require('./controller/ListController'));
angular.module('player-skin').controller('PlayerSkinDetailController', require('./controller/DetailController'));
angular.module('player-skin').factory('PlayerSkinResource', function ($resource, EnvConfigService) {
  var apiUrl = EnvConfigService.get('apiUrl');
  return $resource(apiUrl + '/api/player-skins/:playerSkinId', {playerSkinId: '@id', type: '@type'}, {});
});
angular.module('player-skin').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('player-skin');
});

