'use strict';
/**
 * @ngInject
 */
module.exports = function () {

  var env = require('../common/env.json');

  //var _environments = {
  //    local: {
  //      host: 'localhost:3000',
  //      config: {
  //        apiUrl: 'https://ccc.mi24.dev'
  //        //apiUrl: 'https://ccc-qa.video-cdn.net'
  //      }
  //    },
  //    stage: {
  //      host: 'tox-ccc-ui.herokuapp.com',
  //      config: {
  //        apiUrl: 'https://ccc-qa.video-cdn.net'
  //      }
  //    }
  //  };
  //var _environment;

  var EnvConfigService = {
    getEnvironment: getEnvironment,
    get: get
  };

  return EnvConfigService;

  ////////////

  function getEnvironment() {
    var nodeEnv = process.env.NODE_ENV || 'development';
    //console.log('EnvConfigService: nodeEnv: ', nodeEnv);
    return env[nodeEnv];


    //var host = window.location.host;
    //if (_environment) {
    //  return _environment;
    //}
    //for (var environment in _environments) {
    //  if (_environments.hasOwnProperty(environment) && typeof(_environments[environment].host)) {
    //    if (typeof(_environments[environment].host) === 'object') {
    //      if (_environments[environment].host.indexOf(host) >= 0) {
    //        _environment = environment;
    //        return _environment;
    //      }
    //    } else {
    //      if (_environments[environment].host === host) {
    //        _environment = environment;
    //        return _environment;
    //      }
    //    }
    //  }
    //}
    //return null;
  }

  function get(property) {
    return getEnvironment()[property];
    //return _environments[EnvConfigService.getEnvironment()].config[property];
  }
};
