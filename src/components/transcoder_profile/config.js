'use strict';

module.exports = {
  'admin.transcoder_profile': {
    url: '/transcoder-profile',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'admin.transcoder_profile.list': {
    url: '',
    views: {
      'data-body': {
        templateUrl: '/views/transcoder_profile/list.html',
        controller: 'TranscoderProfileListController as vm'
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
  'admin.transcoder_profile.detail': {
    url: '/path-for-id',
    views: {
      'data-body': {
        templateUrl: '/views/transcoder_profile/detail.html',
        controller: 'TranscoderProfileDetailController as vm'
      }
    }
  }
};
