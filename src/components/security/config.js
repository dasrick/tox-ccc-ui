'use strict';

module.exports = {
  'security.login': {
    url: '/login',
    views: {
      'content': {
        templateUrl: '/views/security/login.html',
        controller: 'SecurityLoginController as vm'
      }
    }
  },
  'security.password-request': {
    url: '/request-password',
    views: {
      'content': {
        templateUrl: '/views/security/request-password.html'
      }
    }
  },
  'security.password-set': {
    url: '/set-password',
    views: {
      'content': {
        templateUrl: '/views/security/set-password.html'
      }
    }
  }
};
