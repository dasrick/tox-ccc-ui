'use strict';

var angular = require('angular');
var RoutingConfig = require('./config');

module.exports = angular.module('transcoder_profile', []);

angular.module('transcoder_profile').controller('TranscoderProfileListController', require('./controller/ListController'));
angular.module('transcoder_profile').controller('TranscoderProfileDetailController', require('./controller/DetailController'));
//angular.module('transcoder_profile').service("InstanceService", require('./service/InstanceService'));
angular.module('transcoder_profile').factory('TranscoderProfileResource', function ($resource) {
  return $resource('https://ccc.mi24.dev/api/transcoderprofiles/:transcoderProfileId', {
    transcoderProfileId: '@id',
    type: '@type'
  }, {});
});
angular.module('transcoder_profile').config(function ($stateProvider, $translatePartialLoaderProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
  $translatePartialLoaderProvider.addPart('transcoder_profile');
});

