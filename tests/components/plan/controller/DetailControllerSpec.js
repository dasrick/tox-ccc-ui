'use strict';

var PlanDetailController = require('../../../../src/components/plan/controller/DetailController');

describe('Components:Plan:Controller:DetailController', function () {

  var createController, plan;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(PlanDetailController, {plan: plan});
      };
    });
  });

  it('should init the Plan', function () {
    plan = 'plan';
    var controller = createController();
    expect(controller.plan).toBe('plan');
  });

});