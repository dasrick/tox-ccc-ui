'use strict';

module.exports = {
  'app.management.dashboard': {
    url: '/dashboard',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.management.dashboard.list': {
    url: '',
    views: {
      'data-body': {
        templateUrl: '/views/dashboard/list.html'
      }
    }
  }
};
