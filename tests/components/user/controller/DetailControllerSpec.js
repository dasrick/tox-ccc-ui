'use strict';

var UserDetailController = require('../../../../src/components/user/controller/DetailController');

describe('Components:User:Controller:DetailController', function () {

  var createController, $rootScope;
  var user, locales, $scope, $state, AlertService, $translate, CurrentUserService;

  locales = [
    {name: 'foooo', short: 'fo'},
    {name: 'baaar', short: 'ba'}
  ];

  beforeEach(function () {
    $state = jasmine.createSpyObj('$state', ['go']);
    AlertService = jasmine.createSpyObj('AlertService', ['add']);
    $translate = jasmine.createSpyObj('$translate', ['instant']);
    CurrentUserService = jasmine.createSpyObj('CurrentUserService', ['getSelectedCustomer']);

    angular.mock.inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      var $controller = $injector.get('$controller');
      createController = function () {
        var locals = {
          user: user,
          locales: locales,
          $scope: $scope,
          $state: $state,
          AlertService: AlertService,
          $translate: $translate,
          CurrentUserService: CurrentUserService
        };
        return $controller(UserDetailController, locals);
      };
    });
  });

  it('should init the User', function () {
    user = 'user';
    var controller = createController();
    expect(controller.model).toBe('user');
  });

});