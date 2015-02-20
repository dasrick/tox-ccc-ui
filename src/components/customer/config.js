'use strict';

module.exports = {
  'admin.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
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
        templateUrl: '/views/template/base.html'
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
        templateUrl: '/views/template/base.html'
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
