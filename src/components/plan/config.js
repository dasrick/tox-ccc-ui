'use strict';

module.exports = {
  'app.admin.plan': {
    url: '/plan',
    views: {
      'content@app.admin': {
        templateUrl: '/views/plan/list.html',
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
  'app.admin.plan.detail': {
    url: '/{planId:[0-9a-zA-Z]{1,}}',
    views: {
      'content@app.admin': {
        templateUrl: '/views/plan/detail.html',
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
