'use strict';

var LoginController = require('../../../../src/components/security/controller/LoginController');

describe('Components:Security:Controller:LoginController', function () {

  var createController, $q, $rootScope, $controller, locals;

  var SecurityService = jasmine.createSpyObj('SecurityService', ['login']);
  var $state = jasmine.createSpyObj('$state', ['go']);
  var UserService = jasmine.createSpyObj('UserService', ['getUser']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      locals = {
        'SecurityService': SecurityService,
        '$state': $state,
        'UserService': UserService
      };
      createController = function () {
        return $controller(LoginController, locals);
      };
    });
  });

  it('should log in an user and redirect after success to customer dashboard', function () {
    var controller = createController();
    controller.loginData = 'data';
    SecurityService.login.and.returnValue($q.when('true'));
    UserService.getUser.and.returnValue({customer: {id: 2342}});
    controller.login();
    $rootScope.$apply();
    expect($state.go).toHaveBeenCalledWith('customer.dashboard.list', {customerId: 2342});
  });

});