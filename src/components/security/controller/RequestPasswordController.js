'use strict';

/**
 * @ngInject
 */
module.exports = function ($state, SecurityService) {
  var vm = this;

  vm.requestPassword = function (email) {
    SecurityService.requestPassword(email).then(function () {
      $state.go('^.login');
    });
  };
};
