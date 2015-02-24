'use strict';
/**
 * @ngInject
 */
module.exports = function ($http, UserService) {
  var baseUrl = 'https://ccc.mi24.dev';
  this.login = function (data) {
    return $http.post(baseUrl + '/api/security/login', data).success(function (data) {
      UserService.setToken(data.token);
    });
  };
  this.logout = function () {
    UserService.logout();
  }
};
