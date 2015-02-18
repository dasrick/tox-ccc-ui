'use strict';

module.exports = {
  'profile.user': {
    abstract: true,
    url: '/user',
    views: {
      'content': {
        templateUrl: '/views/user/base.html'
      }
    }
  },
  'profile.user.data': {
    url: '/data',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html'
        //controller: 'ProfileUserEditDataController'
      }
    }
  },
  'profile.user.password': {
    url: '/password',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html'
        //controller: 'ProfileUserEditPasswordController'
      }
    }
  }

  //'customer.user': {
  //  url: '/user',
  //  views: {
  //    'data': {
  //      templateUrl: '/views/user/detail.html'
  //      //controller: 'InstanceDetailController as vm'
  //    }
  //  }
  //}
};
