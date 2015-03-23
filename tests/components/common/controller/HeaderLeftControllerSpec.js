'use strict';

var HeaderLeftController = require('../../../../src/components/common/controller/HeaderLeftController');

describe('Components:Common:Controller:HeaderLeftController', function () {

  var createController;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(HeaderLeftController);
      };
    });
  });

  it('should init the Contoller', function () {
    createController();
  });

});