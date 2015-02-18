'use strict';

module.exports = {
  'admin': {
    url: '/admin',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/admin.html'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html'
      }
    }
  },
  //'customer': {
  //  url: '/customer/{customerId:[0-9]{1,}}',
  //  abstract: true,
  //  views: {
  //    "main": {
  //      templateUrl: '/views/common/2col.html',
  //      controller: 'CommonController as vm'
  //    }
  //  }
  //},
  'profile': {
    url: '/profile',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/profile.html'
      },
      'headerMiddle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'headerRight': {
        templateUrl: '/views/common/header-right.html'
      }
    }
  }
  //'security': {
  //  url: '/security',
  //  abstract: true,
  //  views: {
  //    "main@": {
  //      templateUrl: '/views/common/1col.html',
  //      controller: 'CommonController as vm'
  //    }
  //  }
  //}
};
