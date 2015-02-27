'use strict';

var UserListController = require('../../../../src/components/user/controller/ListController');

describe('Components:User:Controller:ListController', function () {

  var createController, users;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        return $controller(UserListController, {users: users});
      };
    });
  });

  it('should init the users', function () {
    users = 'users';
    var controller = createController();
    expect(controller.users).toBe('users');
  });

});