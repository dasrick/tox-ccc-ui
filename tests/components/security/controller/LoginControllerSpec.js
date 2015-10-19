'use strict';

var LoginController = require('../../../../src/components/security/controller/LoginController');

describe('Components:Security:Controller:LoginController', function () {

  var createController, $q, $rootScope, $controller, locals;

  var $state = jasmine.createSpyObj('$state', ['go']);
  var AuthService = jasmine.createSpyObj('AuthService', ['login']);
  var CurrentUserService = jasmine.createSpyObj('CurrentUserService', ['isLoggedIn', 'setResponseData', 'getUser', 'logout']);
  var AlertService = jasmine.createSpyObj('AlertService', ['add']);
  var CustomerResource = jasmine.createSpyObj('CustomerResource', ['get']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      locals = {
        '$state': $state,
        AuthService: AuthService,
        CurrentUserService: CurrentUserService,
        AlertService: AlertService,
        CustomerResource: CustomerResource
      };
      createController = function () {
        return $controller(LoginController, locals);
      };
    });
  });

  it('should log in an user and redirect after success to management dashboard', function () {

    var currentUser = {
      id: 23,
      name: 'employeee',
      customer: {
        id: 42,
        name: 'company'
      }
    };
    var selectedCustomer = {
      id: 42,
      name: 'company',
      type: 'admin'
    };

    AuthService.login.and.returnValue($q.when('true'));
    CurrentUserService.getUser.and.returnValue(currentUser);
    CustomerResource.get.and.returnValue($q.when(selectedCustomer));
    //CurrentUserService.isLoggedIn.and.returnValue(false, true);

    var controller = createController();
    controller.loginData = 'data';

    controller.login();
    $rootScope.$apply();

    // TODO ... something have to been excpected ...
    //
    //expect($state.go).toHaveBeenCalledWith('app.management.dashboard', {selectedCustomerId: 2342});
  });

});