'use strict';

/**
 * @ngInject
 */
module.exports = function (SecurityService, $state) {
  var vm = this;

  vm.logout = function () {
    SecurityService.logout();
    $state.go('app.security.login');
  };
};
