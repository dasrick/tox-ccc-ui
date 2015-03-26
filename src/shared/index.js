'use strict';

module.exports = require('angular')
  .module('shared', [])
  .directive('isInBaseState', require('./directive/IsInBaseState'))
  .factory('AlertService', require('./service/AlertService'))
  .factory('AlertInterceptor', require('./interceptor/AlertInterceptor'))
  .service('UserService', require('./service/UserService'));
