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
    url: '/request-password',
    views: {
      'content': {
        templateUrl: '/views/security/request-password.html',
        controller: 'SecurityRequestPasswordController as requestPasswordVm'
      }
    }
  },
  'app.security.password-set': {
    url: '/set-password',
    views: {
      'content': {
        templateUrl: '/views/security/set-password.html'
      }
    }
  }
};
