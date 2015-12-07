'use strict';

/**
 * @ngInject
 */module.exports = {
  'app.management.log': {
    url: '/log',
    views: {
      'content@app.management': {
        templateUrl: '/views/log/list.html'
      }
    },
    resolve: {
      LogResource: 'LogResource',
      instances: function (LogResource) {
        return LogResource.query().$promise;
      }
    }
  },
  'app.management.log.detail': {
    url: '/path-for-id',
    views: {
      'content@app.management': {
        templateUrl: '/views/log/detail.html'
      }
    }
  }
};
