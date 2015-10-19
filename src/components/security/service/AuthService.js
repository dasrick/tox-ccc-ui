'use strict';
/**
 * @ngInject
 */
function Auth($http, EnvConfigService) {

  var httpConf = {skipAuthorization: true};
  var apiUrl = EnvConfigService.get('apiUrl');

  return {
    login: login,
    refresh: refresh,
    //register: register,
    passwordRequest: passwordRequest,
    passwordReset: passwordReset
  };

  ////////////

  function login(httpData) {
    var httpUrl = apiUrl + '/api/security/login';

    return $http.post(httpUrl, httpData, httpConf);
  }

  function refresh(refreshToken) {
    // TODO ist im Backend noch nicht implementiert - deshalb ist das hier alles nur symbolish - nichts ist fix
    var httpUrl = apiUrl + '/api/security/login';
    var httpData = {refreshToken: refreshToken};

    return $http.post(httpUrl, httpData, httpConf);
  }

  //function register(httpData) {
  //  var httpUrl = '/vam/rest/vms/register';
  //
  //  return $http.post(httpUrl, httpData, httpConf);
  //}

  function passwordRequest(httpData) {
    // old code
    // return $http.put(apiUrl + '/api/security/request-password/' + encodeURIComponent(email), data)
    //
    // CCC-API: path: /security/request-password/{email}
    // TODO email is missing
    // TODO put NOT post
    var httpUrl = apiUrl + '/api/security/request-password/';

    return $http.post(httpUrl, httpData, httpConf);
  }

  function passwordReset(httpData) {
    // CCC-API: path: /security/reset-password/{token}
    // TODO token is missing
    var httpUrl = apiUrl + '/api/security/reset-password/';

    return $http.post(httpUrl, httpData, httpConf);
  }

}

module.exports = Auth;
