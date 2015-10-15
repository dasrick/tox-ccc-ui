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

    console.log('shared foo env', process.env.NODE_ENV);

    var resources = require('./resource/index');
    ResourceBuilderProvider.addResources(resources);
  })
  // ===================================================================================================================
;
