'use strict';

var LogoutController = require('../../../../src/components/security/controller/LogoutController');

describe('Components:Security:Controller:LogoutController', function () {

  var createController, $q, $rootScope;

  var $state = jasmine.createSpyObj('$state', ['go']);
  var SecurityService = jasmine.createSpyObj('SecurityService', ['logout']);

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      createController = function () {
        return $controller(LogoutController, {'SecurityService': SecurityService, '$state': $state});
      };

    });
  });

  it('should log out an user and redirect to login page', function () {
    var controller = createController();
    SecurityService.logout.and.returnValue($q.when('true'));
    controller.logout();
    $rootScope.$apply();
    expect($state.go).toHaveBeenCalledWith('app.security.login');
  });

});