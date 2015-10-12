'use strict';

var PlanDetailController = require('../../../../src/components/plan/controller/DetailController');

describe('Components:Plan:Controller:DetailController', function () {

  var createController, $rootScope;
  var plan, $scope, $state, AlertService, $translate;

  beforeEach(function () {
    $state = jasmine.createSpyObj('$state', ['go']);
    AlertService = jasmine.createSpyObj('AlertService', ['add']);
    $translate = jasmine.createSpyObj('$translate', ['instant']);
    angular.mock.inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      var $controller = $injector.get('$controller');
      createController = function () {
        var locals = {
          plan: plan,
          $scope: $scope,
          $state: $state,
          AlertService: AlertService,
          $translate: $translate
        };
        return $controller(PlanDetailController, locals);
      };
    });
  });

  it('should init the Plan', function () {
    plan = 'plan';
    var controller = createController();
    expect(controller.model).toBe('plan');
  });

});