'use strict';

var UserService = require('../../../src/shared/service/UserService');

describe('Shared:Service:UserService', function () {

  var UserServiceInstance, Cache;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      Cache = jasmine.createSpyObj('Cache', ['put', 'get', 'removeAll']);
      var CacheFactory = jasmine.createSpy('CacheFactory');
      CacheFactory.and.returnValue(Cache);
      UserServiceInstance = $injector.instantiate(UserService, {CacheFactory: CacheFactory});
      expect(CacheFactory).toHaveBeenCalledWith('userData', {storageMode: 'sessionStorage'});
    });
  });

  it('should set a token', function () {
    UserServiceInstance.setToken('token');
    expect(Cache.put).toHaveBeenCalledWith('jwt_token', 'token');
  });

  it('should return the token', function () {
    Cache.get.and.returnValue('token');
    expect(UserServiceInstance.getToken()).toBe('token');
    expect(Cache.get).toHaveBeenCalledWith('jwt_token');
  });

  it('should return if the user is logged in or not', function () {
    Cache.get.and.returnValue('token');
    expect(UserServiceInstance.isLoggedIn()).toBeTruthy();
    Cache.get.and.returnValue(undefined);
    expect(UserServiceInstance.isLoggedIn()).toBeFalsy();
    expect(Cache.get).toHaveBeenCalledWith('jwt_token');
  });

  it('should logout an user and remove all from cache', function () {
    UserServiceInstance.logout();
    expect(Cache.removeAll).toHaveBeenCalled();
  });

  it('should set a user', function () {
    UserServiceInstance.setUser('userObject');
    expect(Cache.put).toHaveBeenCalledWith('user', 'userObject');
  });

  it('should return the current (logged) user', function () {
    Cache.get.and.returnValue('token');
    Cache.get.and.returnValue('userObject');
    expect(UserServiceInstance.getUser()).toBe('userObject');
  });

  it('should try to return the current (logged) user, but no token', function () {
    expect(UserServiceInstance.getUser()).toBeUndefined();
  });

});