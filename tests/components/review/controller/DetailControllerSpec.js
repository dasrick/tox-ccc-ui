'use strict';

var ReviewDetailController = require('../../../../src/components/review/controller/DetailController');

describe('Components:Review:Controller:DetailController', function () {

  var createController, review;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(ReviewDetailController, {review: review});
      };
    });
  });

  it('should init the Review', function () {
    review = 'review';
    var controller = createController();
    expect(controller.review).toBe('review');
  });

});