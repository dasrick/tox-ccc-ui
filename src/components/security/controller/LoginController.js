'use strict';

/**
 * @ngInject
 */
module.exports = function (SecurityService, $state) {
  var vm = this;

  vm.loginData = {};

  // root binding for alertService
  //$rootScope.closeAlert = AlertService.closeAlert;

  vm.login = function () {
    SecurityService.login(vm.loginData).then(function () {
      $state.go('customer.dashboard.list');
    //}, function (error) {
    //  console.log(error);
      //var msg = (error.data.code + ' - ' + error.data.message);
      //AlertService.add('danger', 'whoosah');
    });
  };
};
