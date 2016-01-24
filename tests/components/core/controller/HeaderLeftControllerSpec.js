'use strict';

var HeaderLeftController = require('../../../../src/components/core/controller/HeaderLeftController');

describe('Components:Core:Controller:HeaderLeftController', function () {

  //var createController, $q, $rootScope, locals;
  var createController;

  var CurrentUserService = jasmine.createSpyObj('CurrentUserService', ['getSelectedCustomer']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      //var $q = $injector.get('$q');
      //var $rootScope = $injector.get('$rootScope');
      var locals = {
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