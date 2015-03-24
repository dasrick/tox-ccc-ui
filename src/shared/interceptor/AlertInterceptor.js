'use strict';
/**
 * @ngInject
 */
module.exports = function ($q, AlertService) {

  return {
    // request success
    request: function (config) {
      //AlertService.add('success', config, 3000);
      return config || $q.when(config);
    },
    // request failure
    requestError: function (rejection) {
      //console.log(rejection);
      var msg = rejection.data || 'Unknown request error occured';
      AlertService.add('danger', msg, 10000);
      return $q.reject(rejection);
    },
    // response success
    response: function (response) {
      //AlertService.add('success', response, 3000);
      return response || $q.when(response);
    },
    // response failure
    responseError: function (rejection) {
      //console.log(rejection);
      //var msg = rejection.data || 'Unknown response error occured';
      //AlertService.add('danger', msg, 10000);
      return $q.reject(rejection);
    }
  };

};
