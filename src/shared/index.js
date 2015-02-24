'use strict';

module.exports = require('angular')
  .module('shared', [])
  .service('UserService', require('./service/UserService'));
