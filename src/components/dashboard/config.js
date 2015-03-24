'use strict';

module.exports = {
  'customer.dashboard': {
    url: '/dashboard',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'customer.dashboard.list': {
    url: '',
    views: {
      'data-body': {
        templateUrl: '/views/dashboard/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  }
};
