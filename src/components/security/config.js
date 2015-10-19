'use strict';

module.exports = {
  'app.security.login': {
    url: '/login',
    views: {
      'content': {
        templateUrl: '/views/security/login.html',
        controller: 'SecurityLoginController as loginVm'
      }
    }
  },
  'app.security.password-request': {
    url: '/password-request',
    views: {
      'content': {
        templateUrl: '/views/security/password-request.html',
        controller: 'SecurityPasswordRequestController as passwordRequestVm'
      }
    }
  },
  'app.security.password-reset': {
    url: '/password-reset/{resetToken}',
    views: {
      'content': {
        templateUrl: '/views/security/password-reset.html',
        controller: 'SecurityPasswordResetController as passwordResetVm'
      }
    },
    resolve: {
      resetToken: function ($stateParams) {
        return $stateParams.resetToken;
      }
    }
  }
};
