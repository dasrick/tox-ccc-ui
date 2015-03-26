'use strict';

var IsInBaseState = require('../../../src/shared/directive/IsInBaseState');

describe('Shared:Directive:IsInBaseState', function () {
  var $state, button;
  $state = jasmine.createSpy('$state');
  button = '<button is-in-base-state="base.test" exclude="global" />\n<button is-in-base-state="base.test.global" />';
  beforeEach(function () {
    angular.mock.module(function ($compileProvider, $provide) {
      $compileProvider.directive('isInBaseState', IsInBaseState);
      $provide.service('$state', function () {
        return $state;
      });
    });
  });

  it('should set global state to true', angular.mock.inject(function ($compile, $rootScope) {
    $state.current = {
      name: 'base.test.global'
    };
    $compile(button)($rootScope);
    $rootScope.$apply();
    expect($rootScope.isInBaseState['base.test']).toBeFalsy();
    expect($rootScope.isInBaseState['base.test.global']).toBeTruthy();
  }));

  it('should set global state to false', angular.mock.inject(function ($compile, $rootScope) {
    $state.current = {
      name: 'other'
    };
    $compile(button)($rootScope);
    $rootScope.$apply();
    expect($rootScope.isInBaseState['base.test']).toBeFalsy();
    expect($rootScope.isInBaseState['base.test.global']).toBeFalsy();
  }));

  it('should set global state to false and base to true', angular.mock.inject(function ($compile, $rootScope) {
    $state.current = {
      name: 'base.test'
    };
    $compile(button)($rootScope);
    $rootScope.$apply();
    expect($rootScope.isInBaseState['base.test']).toBeTruthy();
    expect($rootScope.isInBaseState['base.test.global']).toBeFalsy();
  }));

  it('should change state after event is throw', angular.mock.inject(function ($compile, $rootScope) {
    $state.current = {
      name: 'base.test'
    };
    $compile(button)($rootScope);
    $rootScope.$apply();
    expect($rootScope.isInBaseState['base.test']).toBeTruthy();
    expect($rootScope.isInBaseState['base.test.global']).toBeFalsy();
    $rootScope.$emit('$stateChangeStart', {
      name: 'base.test.global'
    });
    expect($rootScope.isInBaseState['base.test']).toBeFalsy();
    expect($rootScope.isInBaseState['base.test.global']).toBeTruthy();
  }));

});
