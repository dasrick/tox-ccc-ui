'use strict';
/**
 * @ngInject
 */
module.exports = function (CustomerService) {
  var vm = this;
  vm.appversion = process.env.appversion;
  vm.customer = {};
  vm.customer.selected = CustomerService.getSelectedCustomer();
};
