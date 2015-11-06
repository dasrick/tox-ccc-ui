'use strict';

var TranscoderProfileDetailController = require('../../../../src/components/transcoder-profile/controller/DetailController');

describe('Components:TranscoderProfile:Controller:DetailController', function () {

  var createController, $rootScope;
  var transcoderProfile, $scope, $state, AlertService, $translate, TranscoderProfileResource;

  beforeEach(function () {
    $state = jasmine.createSpyObj('$state', ['go']);
    AlertService = jasmine.createSpyObj('AlertService', ['add']);
    $translate = jasmine.createSpyObj('$translate', ['instant']);
    TranscoderProfileResource = jasmine.createSpyObj('TranscoderProfileResource', ['create', 'update']);
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
          $translate: $translate,
          TranscoderProfileResource: TranscoderProfileResource
        };
        return $controller(TranscoderProfileDetailController, locals);
      };
    });
  });

  it('should init the TranscoderProfile', function () {
    transcoderProfile = 'transcoderProfile';
    /*jshint camelcase: false */
    var modelPrepared = {
      quality: undefined,
      custom: undefined,
      videoExtension: undefined,
      createStill: undefined,
      video: Object({
        codec: Object({name: null, properties: Object({})}),
        resolution: Object({width: null, height: null}),
        keyFrame: null,
        frameRate: null,
        bitRate: null,
        aspectRatio: Object({width: null, height: null})
      }),
      audio: Object({
        codec: Object({name: null}),
        bitRate: null,
        sampleRate: null,
        channels: null
      }),
      container: Object({name: null})
    };
    /*jshint camelcase: true */
    var controller = createController();
    expect(controller.model).toEqual(modelPrepared);
  });

});