'use strict';
/**
 * @ngInject
 */
module.exports = require('angular')
  .module('shared', [
    require('./reviewable').name
  ])

  .directive('isInBaseState', require('./directive/IsInBaseState'))
  .directive('rowListItem', require('./directive/RowListItem'))

  .factory('CurrentUserService', require('./service/CurrentUserService'))
  .factory('EnvConfigService', require('./service/EnvConfigService')) // the only one who is using this ... AuthService

  // mi-angular-resource-builder ///////////////////////////////////////////////////////////////////////////////////////
  .config(function (ResourceBuilderProvider) {
    // unschön ...
    var common = require('./common');
    var config = common.config();

    //var EnvConfigService = $injector.get('EnvConfigService');
    //var apiUrl = EnvConfigService.get('apiUrl');
    //console.log('apiUrl: ', apiUrl);

    // append url based on environment
    var resources = require('./resource/index');
    for (var resource in resources) {
      if (resources.hasOwnProperty(resource)) {
        if (resources[resource].hasOwnProperty('url')) {
          resources[resource].url = config.apiUrl + resources[resource].url;
        }
      }
    }
    ResourceBuilderProvider.addResources(resources);
  })
  // ===================================================================================================================
;
