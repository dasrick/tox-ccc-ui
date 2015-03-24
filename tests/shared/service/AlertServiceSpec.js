'use strict';

var AlertService = require('../../../src/shared/service/AlertService');

describe('Shared:Service:AlertService', function () {

  var AlertServiceInstance, locals, $rootScope, $timeout, $translate;

  $translate = jasmine.createSpyObj('$translate', ['instant']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $timeout = $injector.get('$timeout');
      locals = {
        $rootScope: $rootScope,
        $timeout: $timeout,
        $translate: $translate
      };
      AlertServiceInstance = $injector.instantiate(AlertService, locals);
    });
  });

  it('should add an alert', function () {
    AlertServiceInstance.add('alert', {});
  });

  it('should add an alert with timer', function () {
    AlertServiceInstance.add('alert', {}, 1000);
  });

  it('should close an alert by id', function () {
    AlertServiceInstance.closeAlert('alert');
  });

  it('should close an alert by id', function () {
    var alertId = 2342;
    AlertServiceInstance.closeAlertIdx(alertId);
  });

  it('should clear all alerts', function () {
    AlertServiceInstance.clear();
  });

});