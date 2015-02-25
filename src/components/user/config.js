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
        templateUrl: '/views/user/list.html',
        controller: 'UserListController as vm'
      }
    },
    resolve: {
      UserResource: 'UserResource',
      users: function (UserResource) {
        return UserResource.query().$promise;
      }
    }
  },
  'admin.user.detail': {
    url: '/path-to-id',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html',
        controller: 'UserDetailController as vm'
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
        templateUrl: '/views/user/list.html',
        controller: 'UserListController as vm'
      }
    },
    resolve: {
      UserResource: 'UserResource',
      users: function (UserResource) {
        var customerId = 2;
        return UserResource.query({customerId: customerId}).$promise;
      }
    }
  },
  'customer.user.detail': {
    url: '/path-to-id',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html',
        controller: 'UserDetailController as vm'
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
        templateUrl: '/views/user/list.html'
        //controller: 'UserListController as vm'
      }
    //},
    //resolve: {
    //  UserResource: 'UserResource',
    //  users: function (UserResource) {
    //    return UserResource.query().$promise;
    //  }
    }
  },
  'profile.user.password': {
    url: '/password',
    views: {
      'data': {
        templateUrl: '/views/user/detail.html'
        //controller: 'UserDetailController as vm'
      }
    }
  }
};
