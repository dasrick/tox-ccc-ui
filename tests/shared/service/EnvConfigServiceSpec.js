'use strict';

var EnvConfigService = require('../../../src/shared/service/EnvConfigService');

describe('Shared:Service:EnvConfigService', function () {

  var EnvConfigServiceInstance;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      EnvConfigServiceInstance = $injector.instantiate(EnvConfigService);
    });
  });

  var _environments = {
    karma: {
      host: 'localhost:9876',
      config: {
        apiUrl: 'https://ccc.mi24.dev'
      }
    },
    local: {
      host: 'localhost:3000',
      config: {
        apiUrl: 'https://ccc.mi24.dev'
      }
    },
    stage: {
      host: 'tox-ccc-ui.herokuapp.com',
      config: {
        apiUrl: 'https://ccc-qa.video-cdn.net'
      }
    }
  };

  //it('should call getEnvironment return null', function () {
  //  var environment = EnvConfigServiceInstance.getEnvironment();
  //  expect(environment).toBe(null);
  //});

  //it('should call getEnvironment return "cached" result', function () {
  //  EnvConfigService._environments = _environments;
  //  EnvConfigServiceInstance._environments = _environments;
  //  EnvConfigService._environment = {foo:'bar'};
  //  EnvConfigServiceInstance._environment = {foo:'bar'};
  //  var environmentY = EnvConfigServiceInstance.getEnvironment();
  //  //expect(environment).toBe('fooo');
  //});


  //it('should call getEnvironment return null', function () {
  //  var property = EnvConfigServiceInstance.get('apiUrl');
  //  expect(property).toBe('moooh');
  //});


  //it('should add an alert with timer', function () {
  //  // prepare
  //  expect($rootScope.alerts.length).toBe(0);
  //  $translate.instant.and.returnValue('translated-msg');
  //
  //  // trigger and compare
  //  EnvConfigServiceInstance.add('danger', 'msg', 1000);
  //  expect($rootScope.alerts.length).toBe(1);
  //  expect($rootScope.alerts[0].type).toBe('danger');
  //  expect($rootScope.alerts[0].msg).toBe('translated-msg');
  //  $timeout.flush();
  //  expect($rootScope.alerts.length).toBe(0);
  //});
  //
  //it('should close an alert by id', function () {
  //  EnvConfigServiceInstance.closeAlert('alert');
  //});
  //
  //it('should close an alert by index', function () {
  //  // prepare
  //  expect($rootScope.alerts.length).toBe(0);
  //  $translate.instant.and.returnValue('translated-msg');
  //  EnvConfigServiceInstance.add('danger', 'msg');    // index 0
  //  EnvConfigServiceInstance.add('warning', 'msg');   // index 1
  //  EnvConfigServiceInstance.add('info', 'msg');      // index 2
  //  expect($rootScope.alerts.length).toBe(3);
  //  expect($rootScope.alerts[1].type).toBe('warning');
  //
  //  // trigger and compare
  //  var alertIndex = 1;
  //  EnvConfigServiceInstance.closeAlertIdx(alertIndex);
  //  expect($rootScope.alerts.length).toBe(2);
  //  expect($rootScope.alerts[1].type).toBe('info');
  //});
  //
  //it('should clear all alerts', function () {
  //  // prepare
  //  expect($rootScope.alerts.length).toBe(0);
  //  $translate.instant.and.returnValue('translated-msg');
  //  EnvConfigServiceInstance.add('danger', 'msg');
  //  EnvConfigServiceInstance.add('warning', 'msg');
  //  EnvConfigServiceInstance.add('info', 'msg');
  //  expect($rootScope.alerts.length).toBe(3);
  //
  //  // trigger and compare
  //  EnvConfigServiceInstance.clear();
  //  expect($rootScope.alerts.length).toBe(0);
  //});

});