'use strict';

var CustomerListController = require('../../../../src/components/customer/controller/ListController');

describe('Components:Customer:Controller:ListController', function () {

  var createController, customers;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(CustomerListController, {customers: customers});
      };
    });
  });

  it('should init the customers', function () {
    customers = 'customers';
    var controller = createController();
    expect(controller.customers).toBe('customers');
  });

});