'use strict';

/**
 * @ngInject
 */
function PasswordResetController(AuthService, AlertService, $state, resetToken) {
  var vm = this;
  vm.formData = {
    resetToken: resetToken
  };
  vm.passwordReset = passwordReset;

  ////////////

  function passwordReset() {
    AuthService.passwordReset(vm.formData).then(
      function () {
        AlertService.add('success', 'security.msg.password-reset.success');
        $state.go('app.security.login', {}, {'reload': true});
      }, function (response) {
        var msg;
        switch (response.status) {
          case 400:
            msg = 'security.msg.password-reset.error.400';
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

module.exports = PasswordResetController;
