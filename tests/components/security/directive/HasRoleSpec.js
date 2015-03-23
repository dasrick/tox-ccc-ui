'use strict';

var HasRole = require('../../../../src/components/security/directive/HasRole');

describe('Components:Security:Directive:HasRole', function () {

  var PermissionService, template;

  template = '<button has-role="admin" />';
  PermissionService = jasmine.createSpyObj('PermissionService', ['hasRole']);

  beforeEach(function () {
    angular.mock.module(function ($compileProvider, $provide) {
      $compileProvider.directive('hasRole', HasRole);
      $provide.service('PermissionService', function () {
        return PermissionService;
      });
    });
  });

  it('should set hasRole to true', function () {
    angular.mock.inject(function ($compile, $rootScope) {
      PermissionService.hasRole.and.returnValue(true);
      $compile(template)($rootScope);
      $rootScope.$apply();
      expect($rootScope.hasRole.admin).toBeTruthy();
      expect(PermissionService.hasRole).toHaveBeenCalledWith('admin');
    });
  });

  it('should set hasRole to false', function () {
    angular.mock.inject(function ($compile, $rootScope) {
      PermissionService.hasRole.and.returnValue(false);
      $compile(template)($rootScope);
      $rootScope.$apply();
      expect($rootScope.hasRole.admin).toBeFalsy();
      expect(PermissionService.hasRole).toHaveBeenCalledWith('admin');
    });
  });

  it('should set hasRole to false for admin and true for other', function () {
    angular.mock.inject(function ($compile, $rootScope) {
      var button;
      PermissionService.hasRole.and.callFake(function (role) {
        return role !== 'admin';
      });
      button = '<button has-role="other" />';
      $compile(template + button)($rootScope);
      $rootScope.$apply();
      expect($rootScope.hasRole.admin).toBeFalsy();
      expect($rootScope.hasRole.other).toBeTruthy();
      expect(PermissionService.hasRole).toHaveBeenCalledWith('admin');
      expect(PermissionService.hasRole).toHaveBeenCalledWith('other');
    });
  });

});
