'use strict';

/**
 * @ngInject
 */
module.exports = function ($scope, $state, CurrentUserService, customers) {
  var vm = this;
  vm.currentUser = CurrentUserService.getUser();
  vm.customers = customers;
  vm.selectedCustomer = CurrentUserService.getSelectedCustomer();
  vm.logout = logout;

  ////////////

  function logout() {
    CurrentUserService.logout();
    $state.go('app.security.login', {}, {'reload': true});
  }

  $scope.$watch('headerRightVm.selectedCustomer', function (newCustomer, oldCustomer) {
    if ((newCustomer != null) && oldCustomer.id !== newCustomer.id) {
      CurrentUserService.setSelectedCustomer(newCustomer);
      $state.go('.', {selectedCustomerId: newCustomer.id}, {'reload':true});
    }
  });

};
