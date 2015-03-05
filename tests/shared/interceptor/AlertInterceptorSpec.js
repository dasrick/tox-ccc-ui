'use strict';

var AlertInterceptor = require('../../../src/shared/interceptor/AlertInterceptor');

describe('Shared:Interceptor:AlertInterceptor', function () {

  var AlertInterceptorInstance, $q, AlertService;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var locals;
      $q = $injector.get('$q');
      AlertService = jasmine.createSpyObj('AlertService', ['add']);
      locals = {
        $q: $q,
        AlertService: AlertService
      };
      AlertInterceptorInstance = $injector.instantiate(AlertInterceptor, locals);
    });
  });

  it('should be called on request', function () {
    AlertInterceptorInstance.request({});
  });

  it('should be called on request without config', function () {
    AlertInterceptorInstance.request();
  });

  it('should be called on requestError', function () {
    AlertInterceptorInstance.requestError({});
  });

  it('should be called on response', function () {
    AlertInterceptorInstance.response({});
  });

  it('should be called on response wihtout response', function () {
    AlertInterceptorInstance.response();
  });

  it('should be called on responseError', function () {
    AlertInterceptorInstance.responseError({});
  });

});