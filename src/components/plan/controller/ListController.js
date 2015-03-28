'use strict';
/**
 * @ngInject
 */
module.exports = function (plans) {
  var vm = this;
  vm.plans = plans;
  vm.preparedList = [];
  angular.forEach(vm.plans, function (plan) {
    vm.preparedList.push({
      id: plan.id,
      active: true,
      reviewStatus: plan.reviewStatus,
      title: plan.title
    });
  });
};
