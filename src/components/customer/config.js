'use strict';

module.exports = {
  'admin.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/customer/base.html'
      }
    }
  },
  'admin.customer.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/customer/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'customer.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/customer/base.html'
      }
    }
  },
  'customer.customer.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/customer/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'profile.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/customer/base.html'
      }
    }
  },
  'profile.customer.data': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/customer/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },

};
