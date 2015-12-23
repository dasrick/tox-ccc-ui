'use strict';
/**
 * @ngInject
 * @param {Object[]} customers - The list of customers
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
