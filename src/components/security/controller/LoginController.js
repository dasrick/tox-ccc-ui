'use strict';

/**
 * @ngInject
 */
module.exports = function ($state, AuthService, CurrentUserService, AlertService, CustomerResource) {
  var vm = this;
  vm.loginData = {};
  vm.login = login;

  redirect();

  ////////////

  function login() {
    AuthService.login(vm.loginData).then(
      function (response) {
        CurrentUserService.setResponseData(response);
        // only at login the default for selected customer will set
        var currentUser = CurrentUserService.getUser();
        CustomerResource.get({customerId: currentUser.customer.id}, function (customer) {
          CurrentUserService.setSelectedCustomer(customer);
          redirect();
        });
      }, function (response) {
        CurrentUserService.logout();
        var msg;
        switch (response.status) {
          case 400:
            msg = 'security.msg.login.error.400';
            break;
          case 404:
            msg = 'security.msg.common.error.404';
            break;
          default:
            msg = 'security.msg.common.error.unknown';
        }
        AlertService.add('danger', msg);
      }
    );
  }

  function redirect() {
    if (CurrentUserService.isLoggedIn() && angular.isDefined(CurrentUserService.getSelectedCustomer())) {
      var selectedCustomer = CurrentUserService.getSelectedCustomer();
      $state.go('app.management.dashboard', {selectedCustomerId: selectedCustomer.id}, {'reload': true});
    } else {
      CurrentUserService.logout();
    }
  }
};
