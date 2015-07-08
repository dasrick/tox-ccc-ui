'use strict';

var RoutingConfig = require('./config');

module.exports = angular.module('assignment', []);

angular.module('assignment').controller('AssignmentListController', require('./controller/ListController'));
angular.module('assignment').controller('AssignmentDetailController', require('./controller/DetailController'));
//angular.module('assignment').service("InstanceService", require('./service/InstanceService'));
angular.module('assignment').factory('AssignmentResource', function ($resource, EnvConfigService) {
  var apiUrl = EnvConfigService.get('apiUrl');
  return $resource(apiUrl + '/api/assignments/:assignmentId', {assignmentId: '@id'}, {});
});
angular.module('assignment').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('assignment');
});

