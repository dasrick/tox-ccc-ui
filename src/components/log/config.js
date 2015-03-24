'use strict';

module.exports = {
  'customer.log': {
    url: '/log',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'customer.log.list': {
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
  'customer.log.detail': {
    url: '/path-for-id',
    views: {
      'data-body': {
        templateUrl: '/views/log/detail.html'
        //controller: 'InstanceDetailController as vm'
      }
    }
  }
};
