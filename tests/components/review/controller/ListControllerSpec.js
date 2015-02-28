'use strict';

var ReviewListController = require('../../../../src/components/review/controller/ListController');

describe('Components:Review:Controller:ListController', function () {

  var createController, reviews;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(ReviewListController, {reviews: reviews});
      };
    });
  });

  it('should init the reviews', function () {
    reviews = 'reviews';
    var controller = createController();
    expect(controller.reviews).toBe('reviews');
  });

});