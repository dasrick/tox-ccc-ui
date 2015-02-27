'use strict';

var CustomerDetailController = require('../../../../src/components/customer/controller/DetailController');

describe('Components:Customer:Controller:DetailController', function () {

  var createController, customer;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(CustomerDetailController, {customer: customer});
      };
    });
  });

  it('should init the Customer', function () {
    customer = 'customer';
    var controller = createController();
    expect(controller.customer).toBe('customer');
  });

});