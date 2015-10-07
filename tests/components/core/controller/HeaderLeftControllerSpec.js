'use strict';

var HeaderLeftController = require('../../../../src/components/core/controller/HeaderLeftController');

describe('Components:Core:Controller:HeaderLeftController', function () {

  var createController, $q, $rootScope, locals;

  var CurrentUserService = jasmine.createSpyObj('CurrentUserService', ['getSelectedCustomer']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      locals = {
        CurrentUserService: CurrentUserService
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