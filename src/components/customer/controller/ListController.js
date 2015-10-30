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
      state: 'success', // TODO ist das wirklich so?
      reviewStatus: customer.reviewStatus,
      title: customer.name
    });
  });
};
