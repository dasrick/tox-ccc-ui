'use strict';

//var angular = require('angular');
var ModuleName = 'player-skin',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('PlayerSkinListController', require('./controller/ListController'))
  .controller('PlayerSkinDetailController', require('./controller/DetailController'))

  .factory('PlayerSkinResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/player-skins/:playerSkinId', {playerSkinId: '@id', type: '@type'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
