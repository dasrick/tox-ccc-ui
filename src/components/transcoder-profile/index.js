'use strict';

//var angular = require('angular');
var ModuleName = 'transcoder-profile',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('TranscoderProfileListController', require('./controller/ListController'))
  .controller('TranscoderProfileDetailController', require('./controller/DetailController'))

  .factory('TranscoderProfileResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/transcoderprofiles/:transcoderProfileId', {
      transcoderProfileId: '@id',
      type: '@type'
    }, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
