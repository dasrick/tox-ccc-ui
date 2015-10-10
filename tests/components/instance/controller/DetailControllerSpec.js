'use strict';

var InstanceDetailController = require('../../../../src/components/instance/controller/DetailController');

describe('Components:Instance:Controller:DetailController', function () {

  var createController, $rootScope;
  var instance, $scope, $state, AlertService, $translate;


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
          instance: instance,
          $scope: $scope,
          $state: $state,
          AlertService: AlertService,
          $translate: $translate
        };
        return $controller(InstanceDetailController, locals);
      };
    });
  });

  it('should init the instance', function () {
    instance = 'instance';
    var controller = createController();
    expect(controller.model).toBe('instance');
  });

});