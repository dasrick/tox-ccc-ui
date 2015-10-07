'use strict';

var HeaderRightController = require('../../../../src/components/core/controller/HeaderRightController');

describe('Components:Core:Controller:HeaderRightController', function () {

  var createController, $q, $rootScope, locals, customers;

  var $state = jasmine.createSpyObj('$state', ['go']);
  var CurrentUserService = jasmine.createSpyObj('CurrentUserService', ['getUser', 'getSelectedCustomer', 'logout', 'setSelectedCustomer']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      locals = {
        $scope: $rootScope,
        $state: $state,
        CurrentUserService: CurrentUserService,
        customers: customers
      };
      createController = function () {
        return $controller(HeaderRightController, locals);
      };

    });
  });

  it('should log out an user and redirect to login page', function () {
    var controller = createController();
    CurrentUserService.logout.and.returnValue($q.when('true'));
    controller.logout();
    $rootScope.$apply();
    expect($state.go).toHaveBeenCalledWith('app.security.login', {}, {'reload': true});
  });

  it('should change the selected customer', function () {
    var selectedCustomerInit = {id:23};
    var selectedCustomerNew = {id:42};
    CurrentUserService.getUser.and.returnValue({id:2,customer:selectedCustomerInit});
    CurrentUserService.getSelectedCustomer.and.returnValue(selectedCustomerInit);
    createController();
    // init
    $rootScope.$apply('headerRightVm.selectedCustomer = ' + JSON.stringify(selectedCustomerInit));
    // change
    $rootScope.$apply('headerRightVm.selectedCustomer = ' + JSON.stringify(selectedCustomerNew));
    expect(CurrentUserService.setSelectedCustomer).toHaveBeenCalledWith(selectedCustomerNew);
    expect($state.go).toHaveBeenCalledWith('.', {selectedCustomerId: selectedCustomerNew.id}, {'reload':true});
  });

});