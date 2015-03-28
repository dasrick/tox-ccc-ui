'use strict';

module.exports = {
  // TODO: seperate templates or dynamic solution inside of single templates for the three routes ...
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
      'data-header': {
        templateUrl: '/views/user/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/user/list-body.html',
        controller: 'UserListController as userListVm'
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
    url: '/{userId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-header': {
        templateUrl: '/views/user/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/user/detail-body.html',
        controller: 'UserDetailController as userDetailVm'
      }
    },
    resolve: {
      UserResource: 'UserResource',
      user: function (UserResource, $stateParams) {
        return UserResource.get({userId: $stateParams.userId}).$promise;
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
      'data-header': {
        templateUrl: '/views/user/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/user/list-body.html',
        controller: 'UserListController as userListVm'
      }
    },
    resolve: {
      UserResource: 'UserResource',
      users: function (UserResource, $stateParams) {
        return UserResource.query({customerId: $stateParams.customerId}).$promise;
      }
    }
  },
  'customer.user.detail': {
    url: '/{userId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-header': {
        templateUrl: '/views/user/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/user/detail-body.html',
        controller: 'UserDetailController as userDetailVm'
      }
    },
    resolve: {
      UserResource: 'UserResource',
      user: function (UserResource, $stateParams) {
        return UserResource.get({userId: $stateParams.userId}).$promise;
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
      'data-body': {
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
      'data-body': {
        templateUrl: '/views/user/detail.html'
        //controller: 'UserDetailController as vm'
      }
    }
  }
};
