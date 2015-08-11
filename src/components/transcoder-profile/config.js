'use strict';

module.exports = {
  'app.admin.transcoder-profile': {
    url: '/transcoder-profile',
    views: {
      'content@app.admin': {
        templateUrl: '/views/transcoder-profile/list.html',
        controller: 'TranscoderProfileListController as transcoderProfileListVm'
      }
    },
    resolve: {
      TranscoderProfileResource: 'TranscoderProfileResource',
      transcoderProfiles: function (TranscoderProfileResource) {
        var type = 'all';
        return TranscoderProfileResource.query({type: type}).$promise;
      }
    }
  },
  'app.admin.transcoder-profile.detail': {
    url: '/{transcoderProfileId:[0-9a-zA-Z]{1,}}',
    views: {
      'content@app.admin': {
        templateUrl: '/views/transcoder-profile/detail.html',
        controller: 'TranscoderProfileDetailController as transcoderProfileDetailVm'
      }
    },
    resolve: {
      TranscoderProfileResource: 'TranscoderProfileResource',
      transcoderProfile: function (TranscoderProfileResource, $stateParams) {
        // Extract instance ID from $stateParams
        var transcoderProfileId = $stateParams.transcoderProfileId;
        // Return a promise to make sure the customer is completely
        // resolved before the controller is instantiated
        return TranscoderProfileResource.get({transcoderProfileId: transcoderProfileId}).$promise;
      }
    }
  }
};
