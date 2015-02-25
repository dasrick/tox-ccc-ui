'use strict';

var InstanceDetailController = require('../../../../src/components/instance/controller/DetailController');

describe('Components:Instance:Controller:InstanceDetailController', function () {

  var createController, instance;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(InstanceDetailController, {instance: instance});
      };
    });
  });

  it('should init the instance', function () {
    instance = 'instance';
    var controller = createController();
    expect(controller.instance).toBe('instance');
  });

});