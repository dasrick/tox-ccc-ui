'use strict';

module.exports = {
  'admin': {
    url: '/admin',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/sidebar-admin.html'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html'
      }
    }
  },
  'customer': {
    url: '/customer/{customerId:[0-9]{1,}}',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/sidebar-customer.html'
        //controller: 'CommonController as vm'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html'
      }
    }
  },
  'profile': {
    url: '/profile',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/sidebar-profile.html'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html'
      }
    }
  },
  'security': {
    url: '',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/1col.html'
      }
    }
  }
};
