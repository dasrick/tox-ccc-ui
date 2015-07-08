'use strict';

module.exports = {
  // TODO: seperate templates or dynamic solution inside of single templates for the three routes ...
  'app.admin.user': {
    abstract: true,
    url: '/user',
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.admin.user.list': {
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
  'app.admin.user.detail': {
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
  'app.management.user': {
    abstract: true,
    url: '/user',
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.management.user.list': {
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
        return UserResource.query({customer: $stateParams.selectedCustomerId}).$promise;
      }
    }
  },
  'app.management.user.detail': {
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
  'app.profile.user': {
    abstract: true,
    url: '/user',
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.profile.user.data': {
    url: '/data',
    views: {
      'data-body': {
        templateUrl: '/views/user/list-body.html'
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
  'app.profile.user.password': {
    url: '/password',
    views: {
      'data-body': {
        templateUrl: '/views/user/detail-body.html'
        //controller: 'UserDetailController as vm'
      }
    }
  }
};
