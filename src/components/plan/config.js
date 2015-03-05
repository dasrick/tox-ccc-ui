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
      //AlertService: 'AlertService',
      plans: function (PlanResource) {
        PlanResource.query().$promise.then(function (data) {
          return data;
        //}, function (error) {
        //  console.log(error);
        //  var msg = (error.data.code + ' - ' + error.data.message);
        //  AlertService.add('danger', msg);
        }
        );
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
