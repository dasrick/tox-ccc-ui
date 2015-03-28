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
      'data-header': {
        templateUrl: '/views/plan/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/plan/list-body.html',
        controller: 'PlanListController as planListVm'
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
    url: '/{planId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-header': {
        templateUrl: '/views/plan/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/plan/detail-body.html',
        controller: 'PlanDetailController as planDetailVm'
      }
    },
    resolve: {
      PlanResource: 'PlanResource',
      plan: function (PlanResource, $stateParams) {
        return PlanResource.get({planId: $stateParams.planId}).$promise;
      }
    }
  }
};
