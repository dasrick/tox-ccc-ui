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
      'data': {
        templateUrl: '/views/transcoder_profile/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'admin.transcoder_profile.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/transcoder_profile/detail.html'
        //controller: 'InstanceDetailController as vm'
      }
    }
  }
};
