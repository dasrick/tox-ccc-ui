'use strict';
/**
 * @ngInject
 */
module.exports = function(CacheFactory) {

  var userData = CacheFactory('userData', {storageMode: 'sessionStorage'});

  this.setToken = function(token) {
    userData.put('jwt_token', token);
  };

  this.getToken = function() {
    return userData.get('jwt_token');
  };

  this.isLoggedIn = function() {
    return angular.isDefined(userData.get('jwt_token'));
  };

  this.logout = function() {
    userData.removeAll();
  };

  this.setUser = function (user) {
    userData.put('user', user);
  };

  this.getUser = function () {
    if (this.getToken() != null) {
      return userData.get('user');
    }
  };
};
