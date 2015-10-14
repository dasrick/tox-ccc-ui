'use strict';

var CustomerDetailController = require('../../../../src/components/customer/controller/DetailController');

describe('Components:Customer:Controller:DetailController', function () {

  var createController, $rootScope;
  var customer, countries, $scope, $state, AlertService, $translate, CurrentUserService;

  countries = [
    {name: 'foooo', short: 'fo'},
    {name: 'baaar', short: 'ba'}
  ];

  beforeEach(function () {
    $state = jasmine.createSpyObj('$state', ['go']);
    AlertService = jasmine.createSpyObj('AlertService', ['add']);
    $translate = jasmine.createSpyObj('$translate', ['instant']);
    CurrentUserService = jasmine.createSpyObj('CurrentUserService', ['getUser', 'getSelectedCustomer']);
    angular.mock.inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      var $controller = $injector.get('$controller');
      createController = function () {
        var locals = {
          customer: customer,
          countries: countries,
          $scope: $scope,
          $state: $state,
          AlertService: AlertService,
          $translate: $translate,
          CurrentUserService: CurrentUserService
        };
        return $controller(CustomerDetailController, locals);
      };
    });
  });

  it('should init the Customer', function () {
    customer = 'customer';
    var currentUser = {
      id: 23,
      customer: {
        type: 'admin'
      }
    };
    CurrentUserService.getUser.and.returnValue(currentUser);
    var controller = createController();
    expect(controller.model).toBe('customer');
  });

});