'use strict';

var HeaderRightController = require('../../../../src/components/core/controller/HeaderRightController');

describe('Components:Core:Controller:HeaderRightController', function () {

  var createController, $q, $rootScope, locals, customers;

  var $state = jasmine.createSpyObj('$state', ['go']);
  var SecurityService = jasmine.createSpyObj('SecurityService', ['logout']);
  var UserService = jasmine.createSpyObj('UserService', ['getUser']);
  var CustomerService = jasmine.createSpyObj('CustomerService', ['getSelectedCustomer', 'clear']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      locals = {
        $scope: $rootScope,
        $state: $state,
        SecurityService: SecurityService,
        UserService: UserService,
        CustomerService: CustomerService,
        customers: customers
      };
      createController = function () {
        return $controller(HeaderRightController, locals);
      };

    });
  });

  it('should log out an user and redirect to login page', function () {
    var controller = createController();
    SecurityService.logout.and.returnValue($q.when('true'));
    controller.logout();
    $rootScope.$apply();
    expect($state.go).toHaveBeenCalledWith('app.security.login');
  });

});