'use strict';

var UserDetailController = require('../../../../src/components/user/controller/DetailController');

describe('Components:User:Controller:DetailController', function () {

  var createController, user;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(UserDetailController, {user: user});
      };
    });
  });

  it('should init the User', function () {
    user = 'user';
    var controller = createController();
    expect(controller.user).toBe('user');
  });

});