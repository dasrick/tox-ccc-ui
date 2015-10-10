'use strict';

var ModuleName = 'player-skin',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('PlayerSkinListController', require('./controller/ListController'))
  .controller('PlayerSkinDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
