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
      },
      LocaleResource: 'LocaleResource',
      CurrentUserService: 'CurrentUserService',
      locales: function (LocaleResource, CurrentUserService) {
        var locale = CurrentUserService.getUser().locale;
        return LocaleResource.query({locale: locale}).$promise;
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
      },
      LocaleResource: 'LocaleResource',
      CurrentUserService: 'CurrentUserService',
      locales: function (LocaleResource, CurrentUserService) {
        var locale = CurrentUserService.getUser().locale;
        return LocaleResource.query({locale: locale}).$promise;
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
      LocaleResource: 'LocaleResource',
      CurrentUserService: 'CurrentUserService',
      user: function (UserResource, $stateParams) {
        return UserResource.get({userId: $stateParams.userId}).$promise;
      },
      locales: function (LocaleResource, CurrentUserService) {
        var locale = CurrentUserService.getUser().locale;
        return LocaleResource.query({locale: locale}).$promise;
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
      LocaleResource: 'LocaleResource',
      CurrentUserService: 'CurrentUserService',
      user: function (UserResource) {
        return new UserResource();
      },
      locales: function (LocaleResource, CurrentUserService) {
        var locale = CurrentUserService.getUser().locale;
        return LocaleResource.query({locale: locale}).$promise;
      }
    }
  },
  // profile part //////////////////////////////////////////////////////////////////////////////////////////////////////
  'app.profile.user': {
    url: '/user',
    views: {
      'content@app.profile': {
        templateUrl: '/views/user/detail.html',
        controller: 'UserDetailController as userDetailVm'
      }
    },
    resolve: {
      UserResource: 'UserResource',
      LocaleResource: 'LocaleResource',
      CurrentUserService: 'CurrentUserService',
      user: function (UserResource, CurrentUserService) {
        var userId = CurrentUserService.getUser().id;
        return UserResource.get({userId: userId}).$promise;
      },
      locales: function (LocaleResource, CurrentUserService) {
        var locale = CurrentUserService.getUser().locale;
        return LocaleResource.query({locale: locale}).$promise;
      }
    }
  }
};
