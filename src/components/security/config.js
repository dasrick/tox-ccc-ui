'use strict';

module.exports = {
  'security.login': {
    url: '/login',
    views: {
      'content': {
        templateUrl: '/views/security/login.html'
      }
    }
  },
  'security.password.request': {
    url: '/request-password',
    views: {
      'content': {
        templateUrl: '/views/security/request-password.html'
      }
    }
  },
  'security.password.set': {
    url: '/set-password',
    views: {
      'content': {
        templateUrl: '/views/security/set-password.html'
      }
    }
  }
};
