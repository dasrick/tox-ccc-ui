'use strict';

var SecurityService = require('../../../../src/components/security/service/SecurityService');

describe('Components:Security:Service:SecurityService', function () {

  var SecurityServiceInstance, $httpBackend, UserService, AlertService, EnvConfigService, CustomerResource, CustomerService, $state, locals;

  UserService = jasmine.createSpyObj('UserService', ['setToken', 'setUser', 'logout']);
  AlertService = jasmine.createSpyObj('AlertService', ['add']);
  EnvConfigService = jasmine.createSpyObj('EnvConfigService', ['get']);
  CustomerService = jasmine.createSpyObj('CustomerService', ['setSelectedCustomer']);
  CustomerResource = jasmine.createSpyObj('CustomerResource', ['get']);
  $state = jasmine.createSpyObj('$state', ['href']);

  var tokenValid = 'oooooo.eyJleHAiOjE0MjcyODI5NzQsInVzZXJuYW1lIjoiQWRtaW5AY2NjLm1pMjQuZGV2Iiwic3RvbXAiOnsiaG9zdCI6Ilwvc3RvbXAiLCJ1c2VyIjoiZ3Vlc3QiLCJwYXNzd29yZCI6Imd1ZXN0Iiwidmhvc3QiOiJcLyJ9LCJ1c2VyIjoie1wiaWRcIjpcIjU0ZTc3MDBlMWU3Y2UxMDEwMDhiNDU3ZFwiLFwiZmlyc3ROYW1lXCI6XCJNYXJ5XCIsXCJsYXN0TmFtZVwiOlwiQm9obmJhY2hcIixcImVtYWlsXCI6XCJBZG1pbkBjY2MubWkyNC5kZXZcIixcImxvY2FsZVwiOlwiZGVcIixcImN1c3RvbWVyXCI6e1wiaWRcIjoyLFwidHlwZVwiOlwiYWRtaW5cIn0sXCJyZWFjaGFibGVSb2xlc1wiOltcInVzZXJfZWRpdFwiLFwidXNlcl9jcmVhdGVcIixcInVzZXJfZGVsZXRlXCIsXCJ1c2VyX3NldF9yb2xlXCIsXCJ1c2VyX2FkbWluXCIsXCJjdXN0b21lcl9lZGl0XCIsXCJjdXN0b21lcl9jcmVhdGVcIixcImN1c3RvbWVyX2RlbGV0ZVwiLFwiY3VzdG9tZXJfYWRtaW5cIixcInByb2R1Y3RfZWRpdFwiLFwicHJvZHVjdF9jcmVhdGVcIixcInByb2R1Y3RfZGVsZXRlXCIsXCJwcm9kdWN0X2FkbWluXCIsXCJhc3NpZ25tZW50X2VkaXRcIixcImFzc2lnbm1lbnRfZGVhY3RpdmF0ZVwiLFwiYXNzaWdubWVudF9jcmVhdGVcIixcImFzc2lnbm1lbnRfYWRtaW5cIixcImFkbWluXCIsXCJ1c2VyXCIsXCJ0cmFuc2NvZGVycHJvZmlsZV9yZWFkXCIsXCJ0cmFuc2NvZGVycHJvZmlsZV9jcmVhdGVcIixcInRyYW5zY29kZXJwcm9maWxlX2VkaXRcIixcInRyYW5zY29kZXJwcm9maWxlX2RlbGV0ZVwiLFwidHJhbnNjb2RlcnByb2ZpbGVfYWRtaW5cIixcInBsYW5fcmVhZFwiLFwicGxhbl9jcmVhdGVcIixcInBsYW5fZWRpdFwiLFwicGxhbl9kZWxldGVcIixcInBsYW5fYWRtaW5cIixcInBsYXllcl9za2luX2NyZWF0ZVwiLFwicGxheWVyX3NraW5fZWRpdFwiLFwicGxheWVyX3NraW5fZGVsZXRlXCIsXCJwbGF5ZXJfc2tpbl9hZG1pblwiLFwiaW5zdGFuY2VfcmVhZFwiLFwiaW5zdGFuY2VfY3JlYXRlXCIsXCJpbnN0YW5jZV9lZGl0XCIsXCJpbnN0YW5jZV9kZWxldGVcIixcImluc3RhbmNlX2FkbWluXCJdLFwicmV2aWV3Q291bnRcIjowfSIsImlhdCI6IjE0MjcxOTY1NzQifQ.oooooo';
  var apiUrl = 'https://ccc.mi24.dev';

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      locals = {
        UserService: UserService,
        AlertService: AlertService,
        EnvConfigService: EnvConfigService,
        CustomerResource: CustomerResource,
        CustomerService: CustomerService,
        $state: $state
      };
      SecurityServiceInstance = $injector.instantiate(SecurityService, locals);
    });
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should login an user and set the jwt token', function () {
    EnvConfigService.get.and.returnValue(apiUrl);
    $httpBackend.when('POST', apiUrl + '/api/security/login').respond({token: tokenValid});
    $httpBackend.expectPOST(apiUrl + '/api/security/login', 'data');
    SecurityServiceInstance.login('data');
    $httpBackend.flush();
    expect(UserService.setToken).toHaveBeenCalledWith(tokenValid);
  });

  it('should try to login an user and return an unknown error', function () {
    EnvConfigService.get.and.returnValue(apiUrl);
    var status = 666;
    var msg = 'security.msg.login.error.unknown';
    $httpBackend.when('POST', apiUrl + '/api/security/login').respond(status);
    $httpBackend.expectPOST(apiUrl + '/api/security/login', 'data');
    SecurityServiceInstance.login('data');
    $httpBackend.flush();
    expect(AlertService.add).toHaveBeenCalledWith('danger', msg, 10000);
  });

  it('should try to login an user and return error 401', function () {
    var status = 401;
    var msg = 'security.msg.login.error.unauthorized';
    $httpBackend.when('POST', apiUrl + '/api/security/login').respond(status);
    $httpBackend.expectPOST(apiUrl + '/api/security/login', 'data');
    SecurityServiceInstance.login('data');
    $httpBackend.flush();
    expect(AlertService.add).toHaveBeenCalledWith('danger', msg, 10000);
  });

  it('should try to login an user and return error 401 and header "locked"', function () {
    var status = 401;
    var data = '';
    var headers = {'mi24-reason': 'locked'};
    var msg = 'security.msg.login.error.user_locked';
    $httpBackend.when('POST', apiUrl + '/api/security/login').respond(status, data, headers);
    $httpBackend.expectPOST(apiUrl + '/api/security/login', 'data');
    SecurityServiceInstance.login('data');
    $httpBackend.flush();
    expect(AlertService.add).toHaveBeenCalledWith('danger', msg, 10000);
  });

  it('should logout an user', function () {
    SecurityServiceInstance.logout();
    expect(UserService.logout).toHaveBeenCalled();
  });

});