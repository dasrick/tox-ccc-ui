'use strict';

var ReviewListController = require('../../../../src/components/review/controller/ListController');

describe('Components:Review:Controller:ListController', function () {

  var createController;
  var reviews, $translate;

  beforeEach(function () {
    $translate = jasmine.createSpyObj('$translate', ['instant']);
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        var locals = {
          reviews: reviews,
          $translate: $translate
        };
        return $controller(ReviewListController, locals);
      };
    });
  });

  it('should init the reviews', function () {
    reviews = {
      opener: [],
      reviewer: []
    };
    var controller = createController();
    expect(controller.preparedOpenerList).toEqual([]);
    expect(controller.preparedReviewerList).toEqual([]);
  });

});