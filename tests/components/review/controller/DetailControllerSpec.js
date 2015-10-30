'use strict';

var ReviewDetailController = require('../../../../src/components/review/controller/DetailController');

describe('Components:Review:Controller:DetailController', function () {

  var createController;
  var review, $state, AlertService, $translate, ReviewResource;

  beforeEach(function () {
    $state = jasmine.createSpyObj('$state', ['go']);
    AlertService = jasmine.createSpyObj('AlertService', ['add']);
    $translate = jasmine.createSpyObj('$translate', ['instant']);
    ReviewResource = jasmine.createSpyObj('ReviewResource', ['allow', 'deny']);
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        var locals = {
          review: review,
          $state: $state,
          AlertService: AlertService,
          $translate: $translate,
          ReviewResource: ReviewResource
        };
        return $controller(ReviewDetailController, locals);
      };
    });
  });

  it('should init the Review', function () {
    review = {
      opener: {
        firstName: 'firstName',
        lastName: 'lastName'
      },
      action: 'edit',
      reviewObject: {
        type: 'plan'
      }
    };
    var controller = createController();
    expect(controller.review).toBe(review);
  });

});