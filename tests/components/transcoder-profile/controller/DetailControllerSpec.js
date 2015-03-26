'use strict';

var TranscoderProfileDetailController = require('../../../../src/components/transcoder-profile/controller/DetailController');

describe('Components:TranscoderProfile:Controller:DetailController', function () {

  var createController, transcoderProfile;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(TranscoderProfileDetailController, {transcoderProfile: transcoderProfile});
      };
    });
  });

  it('should init the TranscoderProfile', function () {
    transcoderProfile = 'transcoderProfile';
    var controller = createController();
    expect(controller.transcoderProfile).toBe('transcoderProfile');
  });

});