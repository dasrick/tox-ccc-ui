'use strict';

module.exports = {
  'admin.plan': {
    url: '/plan',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'admin.plan.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/plan/list.html',
        controller: 'PlanListController as vm'
      }
    },
    resolve: {
      PlanResource: 'PlanResource',
      plans: function (PlanResource) {
        return PlanResource.query().$promise;
      }
    }
  },
  'admin.plan.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/plan/detail.html',
        controller: 'PlanDetailController as vm'
      }
    }
  }
};
