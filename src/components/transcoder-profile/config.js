'use strict';

module.exports = {
  'app.admin.transcoder-profile': {
    url: '/transcoder-profile',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.admin.transcoder-profile.list': {
    url: '',
    views: {
      'data-header': {
        templateUrl: '/views/transcoder-profile/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/transcoder-profile/list-body.html',
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
      'data-header': {
        templateUrl: '/views/transcoder-profile/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/transcoder-profile/detail-body.html',
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
