'use strict';

var LogoutController = require('../../../../src/components/common/controller/HeaderRightController');

describe('Components:Common:Controller:HeaderRightController', function () {

  var createController, $q, $rootScope, locals;

  var $state = jasmine.createSpyObj('$state', ['go']);
  var SecurityService = jasmine.createSpyObj('SecurityService', ['logout']);
  var UserService = jasmine.createSpyObj('UserService', ['getUser']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      locals = {
        'SecurityService': SecurityService,
        '$state': $state,
        'UserService': UserService
      };
      createController = function () {
        return $controller(LogoutController, locals);
      };

    });
  });

  it('should log out an user and redirect to login page', function () {
    var controller = createController();
    SecurityService.logout.and.returnValue($q.when('true'));
    controller.logout();
    $rootScope.$apply();
    expect($state.go).toHaveBeenCalledWith('security.login');
  });

});