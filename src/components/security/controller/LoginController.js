'use strict';

/**
 * @ngInject
 */
module.exports = function (SecurityService, $state, UserService) {
  var vm = this;
  vm.loginData = {};

  vm.login = function () {
    SecurityService.login(vm.loginData).then(function () {
      var user = UserService.getUser();
      $state.go('app.management.dashboard.list', {selectedCustomerId: user.customer.id});
    });
  };
};
