'use strict';

module.exports = {
  'app.management.log': {
    url: '/log',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.management.log.list': {
    url: '',
    views: {
      'data-body': {
        templateUrl: '/views/log/list.html'
        //controller: 'InstanceListController as vm'
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
      'data-body': {
        templateUrl: '/views/log/detail.html'
        //controller: 'InstanceDetailController as vm'
      }
    }
  }
};
