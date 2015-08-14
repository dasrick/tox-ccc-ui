'use strict';
/**
 * @ngInject
 */
module.exports = function ($http, UserService, AlertService, EnvConfigService, CustomerResource, CustomerService, $state) {

  this.login = function (data) {
    var apiUrl = EnvConfigService.get('apiUrl');
    return $http.post(apiUrl + '/api/security/login', data)
      .success(function (data) {
        // set token
        UserService.setToken(data.token);
        // set user
        var payload = JSON.parse(atob(data.token.split('.')[1]));
        var user = JSON.parse(payload.user);
        UserService.setUser(user);

        // vielleicht setzt man hier auch gleich den selectedCustomer initial
        CustomerResource.get({customerId: user.customer.id}, function (customer) {
          CustomerService.setSelectedCustomer(customer);
        });

      })
      .error(function (data, status, headers) {
        var msg = 'security.msg.login.error.unknown';
        if (status === 401) {
          msg = 'security.msg.login.error.unauthorized';
          if (headers('mi24-reason') === 'locked') {
            msg = 'security.msg.login.error.user_locked';
          }
        }
        AlertService.add('danger', msg);
      });
  };

  this.logout = function () {
    UserService.logout();
  };

  this.requestPassword = function (email) {
    var apiUrl = EnvConfigService.get('apiUrl');
    var data = {
      baseUrl: $state.href('app.security.password-set', {}, {absolute: true})
    };
    return $http.put(apiUrl + '/api/security/request-password/' + encodeURIComponent(email), data)
      .success(function () {
        var msg = 'security.msg.request-password.success';
        AlertService.add('success', msg);
      })
      .error(function () {
        var msg = 'security.msg.request-password.error';
        AlertService.add('danger', msg);
      });
  };
};
