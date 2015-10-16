'use strict';
/**
 * @ngInject
 */
module.exports = require('angular')
  .module('shared', [])

  .directive('isInBaseState', require('./directive/IsInBaseState'))
  .directive('rowListItem', require('./directive/RowListItem'))

  .factory('CurrentUserService', require('./service/CurrentUserService'))
  .service('EnvConfigService', require('./service/EnvConfigService')) // the last one who is using this ... AuthService

  // mi-angular-resource-builder ///////////////////////////////////////////////////////////////////////////////////////
  .config(function (ResourceBuilderProvider) {
    // unschön ...
    var common = require('./common');
    var config = common.config();
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
