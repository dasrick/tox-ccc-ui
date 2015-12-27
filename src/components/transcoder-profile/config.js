'use strict';

/**
 * @ngInject
 */
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
      /**
       * @param TranscoderProfileResource
       * @returns {*|Function}
       */
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
      /**
       * @param TranscoderProfileResource
       * @param $stateParams
       * @returns {*|Function}
       */
      transcoderProfile: function (TranscoderProfileResource, $stateParams) {
        return TranscoderProfileResource.get({transcoderProfileId: $stateParams.transcoderProfileId}).$promise;
      }
    }
  },
  'app.admin.transcoder-profile.create': {
    views: {
      'content@app.admin': {
        templateUrl: '/views/transcoder-profile/detail.html',
        controller: 'TranscoderProfileDetailController as transcoderProfileDetailVm'
      }
    },
    resolve: {
      TranscoderProfileResource: 'TranscoderProfileResource',
      /**
       * @param TranscoderProfileResource
       * @returns {*}
       */
      transcoderProfile: function (TranscoderProfileResource) {
        return new TranscoderProfileResource();
      }
    }
  }
};
