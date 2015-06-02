'use strict';

/**
 * @ngInject
 */
module.exports = function (SecurityService, $state, UserService) {
  var vm = this;
  vm.currentUser = UserService.getUser();

  vm.logout = function () {
    SecurityService.logout();
    $state.go('security.login');
  };
};
