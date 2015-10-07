'use strict';

var PermissionService = require('../../../../src/components/security/service/PermissionService');

describe('Components:Security:Service:Permission', function () {

  var PermissionInstance, CurrentUserService;

  PermissionInstance = null;
  CurrentUserService = jasmine.createSpyObj('CurrentUserService', ['getUser']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var locals;
      locals = {
        CurrentUserService: CurrentUserService
      };
      PermissionInstance = $injector.instantiate(PermissionService, locals);
    });
  });

  it('should false if no user is logged in', function () {
    CurrentUserService.getUser.and.returnValue(false);
    expect(PermissionInstance.hasRole('admin')).toBeFalsy();
  });

  it('should false if user has not the role', function () {
    CurrentUserService.getUser.and.returnValue({
      reachableRoles: ['dummy', 'test']
    });
    expect(PermissionInstance.hasRole('admin')).toBeFalsy();
  });

  it('should true if user has the role', function () {
    CurrentUserService.getUser.and.returnValue({
      reachableRoles: ['dummy', 'admin']
    });
    expect(PermissionInstance.hasRole('admin')).toBeTruthy();
  });

  it('should false if no user is logged in', function () {
    CurrentUserService.getUser.and.returnValue(false);
    expect(PermissionInstance.hasType('admin')).toBeFalsy();
  });

  it('should true if user.customer has the type', function () {
    CurrentUserService.getUser.and.returnValue({
      customer: {
        type: 'admin'
      }
    });
    expect(PermissionInstance.hasType('admin')).toBeTruthy();
  });

  it('should false if user.customer has not the type', function () {
    CurrentUserService.getUser.and.returnValue({
      customer: {
        type: 'consumer'
      }
    });
    expect(PermissionInstance.hasType('admin')).toBeFalsy();
  });

});
