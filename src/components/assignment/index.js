'use strict';

var ModuleName = 'assignment',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('AssignmentListController', require('./controller/ListController'))
  .controller('AssignmentDetailController', require('./controller/DetailController'))

  .factory('AssignmentResource', function ($resource, EnvConfigService) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $resource(apiUrl + '/api/assignments/:assignmentId', {assignmentId: '@id'}, {});
  })

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
