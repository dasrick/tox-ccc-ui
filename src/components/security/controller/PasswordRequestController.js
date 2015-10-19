'use strict';

/**
 * @ngInject
 */
function PasswordRequestController(AuthService, AlertService, $state) {
  var vm = this;
  vm.formData = {};
  vm.passwordRequest = passwordRequest;

  ////////////

  function passwordRequest() {
    AuthService.passwordRequest(vm.formData).then(
      function () {
        AlertService.add('success', 'security.msg.password-request.success');
        $state.go('app.security.login', {}, {'reload': true});
      }, function (response) {
        var msg;
        switch (response.status) {
          case 400:
            msg = 'security.msg.password-request.error.400';
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
}

module.exports = PasswordRequestController;
