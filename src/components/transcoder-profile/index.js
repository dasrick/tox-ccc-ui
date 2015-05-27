'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('transcoder-profile', []);

angular.module('transcoder-profile').controller('TranscoderProfileListController', require('./controller/ListController'));
angular.module('transcoder-profile').controller('TranscoderProfileDetailController', require('./controller/DetailController'));
//angular.module('transcoder-profile').service("InstanceService", require('./service/InstanceService'));
angular.module('transcoder-profile').factory('TranscoderProfileResource', function ($resource, EnvConfigService) {
  var apiUrl = EnvConfigService.get('apiUrl');
  return $resource(apiUrl + '/api/transcoderprofiles/:transcoderProfileId', {
    transcoderProfileId: '@id',
    type: '@type'
  }, {});
});
angular.module('transcoder-profile').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('transcoder-profile');
});

