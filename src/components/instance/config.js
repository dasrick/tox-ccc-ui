'use strict';

module.exports = {
  'admin.instance': {
    url: '/instance',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/instance/base.html'
      }
    }
  },
  'admin.instance.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/instance/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'admin.instance.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/instance/detail.html'
        //controller: 'InstanceDetailController as vm'
      }
    }
  }
};
