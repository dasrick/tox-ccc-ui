'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('player_skin', []);

angular.module('player_skin').controller('PlayerSkinListController', require('./controller/ListController'));
angular.module('player_skin').controller('PlayerSkinDetailController', require('./controller/DetailController'));
//angular.module('player_skin').service("InstanceService", require('./service/InstanceService'));
angular.module('player_skin').factory('PlayerSkinResource', function ($resource) {
  return $resource('https://ccc.mi24.dev/api/player-skins/:playerSkinId', {playerSkinId: '@id', type: '@type'}, {});
});
angular.module('player_skin').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('player_skin');
});

