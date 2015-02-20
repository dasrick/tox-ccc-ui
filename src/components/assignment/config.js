'use strict';

module.exports = {
  'customer.assignment': {
    url: '/assignment',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'customer.assignment.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/assignment/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'customer.assignment.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/assignment/detail.html'
        //controller: 'InstanceDetailController as vm'
      }
    }
  }
};
