'use strict';

/**
 * @ngInject
 */
module.exports = function ($scope, $state, SecurityService, UserService, CustomerService, customers) {
  var vm = this;
  vm.currentUser = UserService.getUser();
  vm.customers = customers;
  vm.customer = {};
  vm.customer.selected = CustomerService.getSelectedCustomer();

  $scope.$watch('headerRightVm.customer.selected', function (customer, oldCustomer) {
    if ((customer != null) && oldCustomer.id !== customer.id) {
      CustomerService.setSelectedCustomer(customer);
      $state.go('app.management.dashboard.list', {selectedCustomerId: customer.id});
    }
  });

  vm.logout = function () {
    SecurityService.logout();
    CustomerService.clear();
    $state.go('app.security.login');
  };

};
