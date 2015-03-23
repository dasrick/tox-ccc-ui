'use strict';

var PermissionService = require('../../../../src/components/security/service/PermissionService');

describe('Components:Security:Service:Permission', function () {

  var PermissionInstance, UserService;

  PermissionInstance = null;
  UserService = jasmine.createSpyObj('UserService', ['getUser']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var locals;
      locals = {
        UserService: UserService
      };
      PermissionInstance = $injector.instantiate(PermissionService, locals);
    });
  });

  it('should false if no user is logged in', function () {
    UserService.getUser.and.returnValue(false);
    expect(PermissionInstance.hasRole('admin')).toBeFalsy();
  });

  it('should false if user has not the role', function () {
    UserService.getUser.and.returnValue({
      reachableRoles: ['dummy', 'test']
    });
    expect(PermissionInstance.hasRole('admin')).toBeFalsy();
  });

  it('should true if user has the role', function () {
    UserService.getUser.and.returnValue({
      reachableRoles: ['dummy', 'admin']
    });
    expect(PermissionInstance.hasRole('admin')).toBeTruthy();
  });

  it('should false if no user is logged in', function () {
    UserService.getUser.and.returnValue(false);
    expect(PermissionInstance.hasType('admin')).toBeFalsy();
  });

  it('should true if user.customer has the type', function () {
    UserService.getUser.and.returnValue({
      customer: {
        type: 'admin'
      }
    });
    expect(PermissionInstance.hasType('admin')).toBeTruthy();
  });

  it('should false if user.customer has not the type', function () {
    UserService.getUser.and.returnValue({
      customer: {
        type: 'consumer'
      }
    });
    expect(PermissionInstance.hasType('admin')).toBeFalsy();
  });

});
