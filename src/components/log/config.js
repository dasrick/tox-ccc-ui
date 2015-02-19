'use strict';

module.exports = {
  'customer.log': {
    url: '/log',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/log/base.html'
      }
    }
  },
  'customer.log.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/log/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'customer.log.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/log/detail.html'
        //controller: 'InstanceDetailController as vm'
      }
    }
  }
};
