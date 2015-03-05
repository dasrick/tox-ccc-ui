'use strict';

module.exports = require('angular')
  .module('shared', [])
  .factory('AlertService', require('./service/AlertService'))
  .factory('AlertInterceptor', require('./interceptor/AlertInterceptor'))
  .service('UserService', require('./service/UserService'));
