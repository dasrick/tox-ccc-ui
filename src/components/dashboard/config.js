'use strict';

module.exports = {
  'customer.dashboard': {
    url: '/dashboard',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/dashboard/base.html'
      }
    }
  },
  'customer.dashboard.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/dashboard/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  }
};
