'use strict';
/**
 * @ngInject
 */
module.exports = function ($http, UserService, AlertService) {
  var baseUrl = 'https://ccc.mi24.dev';
  this.login = function (data) {
    return $http.post(baseUrl + '/api/security/login', data)
      .success(function (data) {
        // set token
        UserService.setToken(data.token);
        // set user
        var payload = JSON.parse(atob(data.token.split('.')[1]));
        var user = JSON.parse(payload.user);
        UserService.setUser(user);
      })
      .error(function (data, status, headers) {
        var msg = 'security.alert.login.unknown';
        if (status === 401) {
          msg = 'security.alert.login.unauthorized';
          if (headers('mi24-reason') === 'locked') {
            msg = 'security.alert.login.user_locked';
          }
        }
        AlertService.add('danger', msg, 10000);
      });
  };
  this.logout = function () {
    UserService.logout();
  };
};
