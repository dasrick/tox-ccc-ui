'use strict';
/**
 * @ngInject
 */
module.exports = function (assignments) {
  var vm = this;
  vm.assignments = assignments;
  vm.preparedList = [];
  angular.forEach(vm.assignments, function (assignment) {
    vm.preparedList.push({
      id: assignment.id,
      state: 'success',
      reviewStatus: assignment.reviewStatus,
      title: assignment.name
    });
  });
};
