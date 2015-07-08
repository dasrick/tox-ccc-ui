'use strict';

var HeaderLeftController = require('../../../../src/components/common/controller/HeaderLeftController');

describe('Components:Common:Controller:HeaderLeftController', function () {

  var createController, $q, $rootScope, locals;

  var CustomerService = jasmine.createSpyObj('CustomerService', ['getSelectedCustomer']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      locals = {
        'CustomerService': CustomerService
      };
      createController = function () {
        return $controller(HeaderLeftController, locals);
      };
    });
  });

  it('should init the Contoller', function () {
    createController();
  });

});