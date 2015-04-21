'use strict';

var InstanceEditController = require('../../../../src/components/instance/controller/EditController');

describe('Components:Instance:Controller:InstanceEditController', function () {

  var createController, $q;

  var instance = jasmine.createSpyObj('instance', ['save']);

  var instanceObject = {id: 2342};

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      createController = function () {
        return $controller(InstanceEditController, {instance: instance});
      };
    });
  });

  it('should init the controller', function () {
    var controller = createController();
    controller.instance = instanceObject;
    expect(controller.instance).toBe(instanceObject);
  });

  it('should call save on instance', function () {
    var controller = createController();
    controller.instance = instance;
    controller.save();
    expect(instance.save).toHaveBeenCalled();
  });

});