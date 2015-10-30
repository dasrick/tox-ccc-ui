'use strict';

var UserListController = require('../../../../src/components/user/controller/ListController');

describe('Components:User:Controller:ListController', function () {

  var createController;
  var users, CurrentUserService;

  beforeEach(function () {
    CurrentUserService = jasmine.createSpyObj('CurrentUserService', ['getUser']);
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      createController = function () {
        var locals = {
          users: users,
          CurrentUserService: CurrentUserService
        };
        return $controller(UserListController, locals);
      };
    });
  });

  it('should init the users', function () {
    CurrentUserService.getUser.and.returnValue({id:2342});
    users = 'users';
    var controller = createController();
    expect(controller.users).toBe('users');
  });

});