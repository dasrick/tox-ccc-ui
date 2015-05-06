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

  it('should add an alert and trigger close', function () {
    // prepare
    expect($rootScope.alerts.length).toBe(0);
    $translate.instant.and.returnValue('translated-msg');

    // trigger and compare
    AlertServiceInstance.add('danger', 'msg');
    expect($rootScope.alerts.length).toBe(1);
    expect($rootScope.alerts[0].type).toBe('danger');
    expect($rootScope.alerts[0].msg).toBe('translated-msg');
    $rootScope.alerts[0].close();
    expect($rootScope.alerts.length).toBe(0);
  });

  it('should add an alert with timer', function () {
    // prepare
    expect($rootScope.alerts.length).toBe(0);
    $translate.instant.and.returnValue('translated-msg');

    // trigger and compare
    AlertServiceInstance.add('danger', 'msg', 1000);
    expect($rootScope.alerts.length).toBe(1);
    expect($rootScope.alerts[0].type).toBe('danger');
    expect($rootScope.alerts[0].msg).toBe('translated-msg');
    $timeout.flush();
    expect($rootScope.alerts.length).toBe(0);
  });

  it('should close an alert by id', function () {
    AlertServiceInstance.closeAlert('alert');
  });

  it('should close an alert by index', function () {
    // prepare
    expect($rootScope.alerts.length).toBe(0);
    $translate.instant.and.returnValue('translated-msg');
    AlertServiceInstance.add('danger', 'msg');    // index 0
    AlertServiceInstance.add('warning', 'msg');   // index 1
    AlertServiceInstance.add('info', 'msg');      // index 2
    expect($rootScope.alerts.length).toBe(3);
    expect($rootScope.alerts[1].type).toBe('warning');

    // trigger and compare
    var alertIndex = 1;
    AlertServiceInstance.closeAlertIdx(alertIndex);
    expect($rootScope.alerts.length).toBe(2);
    expect($rootScope.alerts[1].type).toBe('info');
  });

  it('should clear all alerts', function () {
    // prepare
    expect($rootScope.alerts.length).toBe(0);
    $translate.instant.and.returnValue('translated-msg');
    AlertServiceInstance.add('danger', 'msg');
    AlertServiceInstance.add('warning', 'msg');
    AlertServiceInstance.add('info', 'msg');
    expect($rootScope.alerts.length).toBe(3);

    // trigger and compare
    AlertServiceInstance.clear();
    expect($rootScope.alerts.length).toBe(0);
  });

});