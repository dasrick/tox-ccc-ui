'use strict';

var AlertService = require('../../../src/shared/service/AlertService');

describe('Shared:Service:AlertService', function () {

  var AlertServiceInstance;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      AlertServiceInstance = $injector.instantiate(AlertService);
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
    var alertId =2342;
    AlertServiceInstance.closeAlertIdx(alertId);
  });

  it('should clear all alerts', function () {
    AlertServiceInstance.clear();
  });

});