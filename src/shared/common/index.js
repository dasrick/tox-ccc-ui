'use strict';
/**
 * @ngInject
 */
var env = require('./env.json');

exports.config = function () {
  var nodeEnv = process.env.NODE_ENV || 'development';
  //console.log('common-index: nodeEnv: ', nodeEnv);
  return env[nodeEnv];
};
