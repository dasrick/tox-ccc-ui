'use strict';
/**
 * @ngInject
 */
module.exports = function (customers) {
  var vm = this;
  vm.customers = customers;
  vm.preparedList = [];
  angular.forEach(vm.customers, function (customer) {
    vm.preparedList.push({
      id: customer.id,
      active: true,
      reviewStatus: customer.reviewStatus,
      title: customer.name
    });
  });
};
