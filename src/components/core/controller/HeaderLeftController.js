'use strict';
/**
 * @ngInject
 */
module.exports = function (CurrentUserService) {
  var vm = this;
  vm.customer = {};
  vm.selectedCustomer = CurrentUserService.getSelectedCustomer();
};
