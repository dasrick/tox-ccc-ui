'use strict';
/**
 * @ngInject
 */
module.exports = function (CustomerService) {
  var vm = this;
  vm.customer = {};
  vm.customer.selected = CustomerService.getSelectedCustomer();
};
