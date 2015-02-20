'use strict';

module.exports = {
  'admin.user': {
    abstract: true,
    url: '/user',
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'admin.user.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html'
        //controller: 'ProfileUserEditDataController'
      }
    }
  },
  'admin.user.detail': {
    url: '/path-to-id',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html'
        //controller: 'ProfileUserEditPasswordController'
      }
    }
  },
  'customer.user': {
    abstract: true,
    url: '/user',
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'customer.user.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html'
        //controller: 'ProfileUserEditDataController'
      }
    }
  },
  'customer.user.detail': {
    url: '/path-to-id',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html'
        //controller: 'ProfileUserEditPasswordController'
      }
    }
  },
  'profile.user': {
    abstract: true,
    url: '/user',
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
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
};
