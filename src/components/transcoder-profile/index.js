'use strict';

var ModuleName = 'transcoder-profile',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('TranscoderProfileListController', require('./controller/ListController'))
  .controller('TranscoderProfileDetailController', require('./controller/DetailController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
