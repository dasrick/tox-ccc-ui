'use strict';

var SecurityService = require('../../../../src/components/security/service/SecurityService');

describe('Components:Security:Service:SecurityService', function () {

  var SecurityServiceInstance, $httpBackend;

  var UserService = jasmine.createSpyObj('UserService', ['setToken', 'logout']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.when('POST', 'https://ccc.mi24.dev/api/security/login')
        .respond({token: 'token'});
      SecurityServiceInstance = $injector.instantiate(SecurityService, {UserService: UserService});
    });
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should login an user and set the jwt token', function () {
    $httpBackend.expectPOST('https://ccc.mi24.dev/api/security/login', 'data');
    SecurityServiceInstance.login('data');
    $httpBackend.flush();
    expect(UserService.setToken).toHaveBeenCalledWith('token');
  });

  it('should logout an user', function () {
    SecurityServiceInstance.logout();
    expect(UserService.logout).toHaveBeenCalled();
  });

});