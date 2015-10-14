'use strict';

var TranscoderProfileDetailController = require('../../../../src/components/transcoder-profile/controller/DetailController');

describe('Components:TranscoderProfile:Controller:DetailController', function () {

  var createController, $rootScope;
  var transcoderProfile, $scope, $state, AlertService, $translate;

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
          transcoderProfile: transcoderProfile,
          $scope: $scope,
          $state: $state,
          AlertService: AlertService,
          $translate: $translate
        };
        return $controller(TranscoderProfileDetailController, locals);
      };
    });
  });

  it('should init the TranscoderProfile', function () {
    transcoderProfile = 'transcoderProfile';
    var controller = createController();
    expect(controller.model).toBe('transcoderProfile');
  });

});