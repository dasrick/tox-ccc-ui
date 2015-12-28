'use strict';

/**
 * @ngInject
 * @param {service} CurrentUserService
 */
module.exports = function (CurrentUserService) {
  var vm = this;
  vm.customer = {};
  vm.selectedCustomer = CurrentUserService.getSelectedCustomer();
};
