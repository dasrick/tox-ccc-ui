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
        templateUrl: '/views/common/header-right.html',
        controller: 'SecurityLogoutController as vm'
      }
    }
  },
  'customer': {
    url: '/customer/{customerId:[0-9]{1,}}',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/sidebar-customer.html'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html',
        controller: 'SecurityLogoutController as vm'
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
        templateUrl: '/views/common/header-right.html',
        controller: 'SecurityLogoutController as vm'
      }
    }
  },
  'security': {
    url: '',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/template/1col-centerbox.html'
      }
    }
  }
};
