'use strict';

var PlanDetailController = require('../../../../src/components/plan/controller/DetailController');

describe('Components:Plan:Controller:DetailController', function () {

  var createController, $rootScope;
  var plan, $scope, $state, AlertService, $translate, PlanResource;

  beforeEach(function () {
    $state = jasmine.createSpyObj('$state', ['go']);
    AlertService = jasmine.createSpyObj('AlertService', ['add']);
    $translate = jasmine.createSpyObj('$translate', ['instant']);
    PlanResource = jasmine.createSpyObj('PlanResource', ['save', 'save']);
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
          $translate: $translate,
          PlanResource: PlanResource
        };
        return $controller(PlanDetailController, locals);
      };
    });
  });

  it('should init the Plan', function () {
    plan = 'plan';
    /*jshint camelcase: false */
    var preparedPlan = {
      title: undefined,
      hosting_enabled: false,
      hosting: Object({value: null, unit: 'minutes'}),
      traffic_enabled: false,
      traffic: Object({value: null, unit: null}),
      user_enabled: false,
      user: Object({value: null, unit: 'item'})
    };
    /*jshint camelcase: true */
    var controller = createController();
    expect(controller.model).toEqual(preparedPlan);
  });

});