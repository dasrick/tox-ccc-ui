'use strict';

var HasType = require('../../../../src/components/security/directive/HasType');

describe('Components:Security:Directive:HasType', function () {

  var PermissionService, template;

  template = '<button has-type="admin" />';
  PermissionService = jasmine.createSpyObj('PermissionService', ['hasType']);

  beforeEach(function () {
    angular.mock.module(function ($compileProvider, $provide) {
      $compileProvider.directive('hasType', HasType);
      $provide.service('PermissionService', function () {
        return PermissionService;
      });
    });
  });

  it('should set hasType to true', function () {
    angular.mock.inject(function ($compile, $rootScope) {
      PermissionService.hasType.and.returnValue(true);
      $compile(template)($rootScope);
      $rootScope.$apply();
      expect($rootScope.hasType.admin).toBeTruthy();
      expect(PermissionService.hasType).toHaveBeenCalledWith('admin');
    });
  });

  it('should set hasType to false', function () {
    angular.mock.inject(function ($compile, $rootScope) {
      PermissionService.hasType.and.returnValue(false);
      $compile(template)($rootScope);
      $rootScope.$apply();
      expect($rootScope.hasType.admin).toBeFalsy();
      expect(PermissionService.hasType).toHaveBeenCalledWith('admin');
    });
  });

  it('should set hasType to false for admin and true for other', function () {
    angular.mock.inject(function ($compile, $rootScope) {
      var button;
      PermissionService.hasType.and.callFake(function (role) {
        return role !== 'admin';
      });
      button = '<button has-type="other" />';
      $compile(template + button)($rootScope);
      $rootScope.$apply();
      expect($rootScope.hasType.admin).toBeFalsy();
      expect($rootScope.hasType.other).toBeTruthy();
      expect(PermissionService.hasType).toHaveBeenCalledWith('admin');
      expect(PermissionService.hasType).toHaveBeenCalledWith('other');
    });
  });

});
