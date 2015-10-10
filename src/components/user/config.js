'use strict';

module.exports = {
  // admin part ////////////////////////////////////////////////////////////////////////////////////////////////////////
  'app.admin.user': {
    url: '/user',
    views: {
      'content@app.admin': {
        templateUrl: '/views/user/list.html',
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
      'content@app.admin': {
        templateUrl: '/views/user/detail.html',
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
  'app.admin.user.create': {
    views: {
      'content@app.admin': {
        templateUrl: '/views/user/detail.html',
        controller: 'UserDetailController as userDetailVm'
      }
    },
    resolve: {
      UserResource: 'UserResource',
      user: function (UserResource) {
        return new UserResource();
      }
    }
  },
  // management part ///////////////////////////////////////////////////////////////////////////////////////////////////
  'app.management.user': {
    url: '/user',
    views: {
      'content@app.management': {
        templateUrl: '/views/user/list.html',
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
      'content@app.management': {
        templateUrl: '/views/user/detail.html',
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
  'app.management.user.create': {
    views: {
      'content@app.management': {
        templateUrl: '/views/user/detail.html',
        controller: 'UserDetailController as userDetailVm'
      }
    },
    resolve: {
      UserResource: 'UserResource',
      user: function (UserResource) {
        return new UserResource();
      }
    }
  },
  // profile part //////////////////////////////////////////////////////////////////////////////////////////////////////
  'app.profile.user': {
    url: '/user',
    views: {
      'content@app.profile': {
        templateUrl: '/views/user/list.html'
      }
    }
  },
  'app.profile.user.data': {
    url: '/data',
    views: {
      'data-body': {
        templateUrl: '/views/user/data.html'
      }
    }
  },
  'app.profile.user.password': {
    url: '/password',
    views: {
      'data-body': {
        templateUrl: '/views/user/password.html'
      }
    }
  }
};
