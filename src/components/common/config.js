'use strict';

module.exports = {
  'admin': {
    url: '/admin',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/sidebar-admin.html'
      },
      'headerLeft': {
        templateUrl: '/views/template/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
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
      'headerLeft': {
        templateUrl: '/views/template/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
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
      'headerLeft': {
        templateUrl: '/views/template/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
      }
    }
  },
  'security': {
    url: '',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/template/1col-centerbox.html'
      },
      'headerLeft': {
        templateUrl: '/views/template/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      }
    }
  }
};
