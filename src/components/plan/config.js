'use strict';

module.exports = {
  'admin.plan': {
    url: '/plan',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/plan/base.html'
      }
    }
  },
  'admin.plan.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/plan/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'admin.plan.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/plan/detail.html'
        //controller: 'InstanceDetailController as vm'
      }
    }
  }
};
