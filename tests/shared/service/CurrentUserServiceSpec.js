'use strict';

var CurrentUserService = require('../../../src/shared/service/CurrentUserService');

describe('Shared:Service:CurrentUserService', function () {

  var CurrentUserInstance;
  var Cache, jwtHelper;
  var testToken = 'accessToken';
  var testUser = {id:23,name:'foo',customer:{id:42,type:'admin'}};
  var testCustomer = {id:42,type:'admin',name:'bar'};

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      Cache = jasmine.createSpyObj('Cache', ['put', 'get', 'removeAll']);
      jwtHelper = jasmine.createSpyObj('jwtHelper', ['isTokenExpired', 'decodeToken']);
      var CacheFactory = jasmine.createSpy('CacheFactory');
      CacheFactory.and.returnValue(Cache);
      var locals = {
        CacheFactory: CacheFactory,
        jwtHelper: jwtHelper
      };
      CurrentUserInstance = $injector.instantiate(CurrentUserService, locals);
      expect(CacheFactory).toHaveBeenCalledWith('currentUser', {storageMode: 'sessionStorage'});
    });
  });

  it('should return the access token', function () {
    Cache.get.and.returnValue(testToken);
    expect(CurrentUserInstance.getAccessToken()).toBe(testToken);
    expect(Cache.get).toHaveBeenCalledWith('jwt_access_token');
  });

  it('should set the access token', function () {
    CurrentUserInstance.setAccessToken(testToken);
    expect(Cache.put).toHaveBeenCalledWith('jwt_access_token', testToken);
  });

  //it('should return the refresh token', function () {
  //  Cache.get.and.returnValue(testToken);
  //  expect(CurrentUserInstance.getRefreshToken()).toBe(testToken);
  //  expect(Cache.get).toHaveBeenCalledWith('jwt_refresh_token');
  //});
  //
  //it('should set the refresh token', function () {
  //  CurrentUserInstance.setRefreshToken(testToken);
  //  expect(Cache.put).toHaveBeenCalledWith('jwt_refresh_token', testToken);
  //});

  it('should return the current user', function () {
    Cache.get.and.returnValue(testUser);
    expect(CurrentUserInstance.getUser()).toBe(testUser);
    expect(Cache.get).toHaveBeenCalledWith('currentUser');
  });

  it('should set a user as current', function () {
    CurrentUserInstance.setUser(testUser);
    expect(Cache.put).toHaveBeenCalledWith('currentUser', testUser);
  });

  it('should get the selected customer', function () {
    Cache.get.and.returnValue(testCustomer);
    expect(CurrentUserInstance.getSelectedCustomer()).toEqual(testCustomer);
    expect(Cache.get).toHaveBeenCalledWith('selectedCustomer');
  });

  it('should set a customer as selected', function () {
    CurrentUserInstance.setSelectedCustomer(testCustomer);
    expect(Cache.put).toHaveBeenCalledWith('selectedCustomer', testCustomer);
  });

  it('should should trigger isAuthenticated', function () {
    Cache.get.and.returnValue(undefined);
    expect(CurrentUserInstance.isAuthenticated()).toBeFalsy();
    Cache.get.and.returnValue(testToken);
    expect(CurrentUserInstance.isAuthenticated()).toBeTruthy();
  });

  it('should trigger isExpired', function () {
    jwtHelper.isTokenExpired.and.returnValue(false);
    expect(CurrentUserInstance.isExpired()).toBeFalsy();
    jwtHelper.isTokenExpired.and.returnValue(true);
    expect(CurrentUserInstance.isExpired()).toBeTruthy();
  });

  it('should trigger isLoggedIn in all variations', function () {
    // no access token
    Cache.get.and.returnValue();
    expect(CurrentUserInstance.isLoggedIn()).toBeFalsy();

    // existing access token but expired
    Cache.get.and.returnValue(testToken);
    jwtHelper.isTokenExpired.and.returnValue(true);
    expect(CurrentUserInstance.isLoggedIn()).toBeFalsy();

    // existing access token NOT expired - the one and only constellation to be logged in
    Cache.get.and.returnValue(testToken);
    jwtHelper.isTokenExpired.and.returnValue(false);
    expect(CurrentUserInstance.isLoggedIn()).toBeTruthy();
  });

  it('should logout an user and remove all from cache', function () {
    CurrentUserInstance.logout();
    expect(Cache.removeAll).toHaveBeenCalled();
  });

  //it('should save response data with valid data', function () {
  //  var validResponse = {
  //    status: 200,
  //    data: {
  //      accessToken: 'accessToken',
  //      refreshToken: 'refreshToken',
  //      validForVideoManager: 1,
  //      videoManagerList: [{
  //        'id':1,
  //        'uuid': 'uuid1'
  //      },{
  //        'id': 2,
  //        'uuid': 'uuid2'
  //      }]
  //    }
  //  };
  //  //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
  //  var validToken = {
  //    preferred_username: 'preferred_username',
  //    realm_access: 'realm_access'
  //  };
  //  //jscs:enable requireCamelCaseOrUpperCaseIdentifiers
  //  jwtHelper.decodeToken.and.returnValue(validToken);
  //  CurrentUserInstance.setResponseData(validResponse);
  //  expect(Cache.put).toHaveBeenCalledWith('jwt_access_token', validResponse.data.accessToken);
  //  expect(Cache.put).toHaveBeenCalledWith('jwt_refresh_token', validResponse.data.refreshToken);
  //  expect(Cache.put).toHaveBeenCalledWith('videoManagerId', validResponse.data.validForVideoManager);
  //  expect(Cache.put).toHaveBeenCalledWith('videoManagerList', validResponse.data.videoManagerList);
  //  //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
  //  expect(Cache.put).toHaveBeenCalledWith('email', validToken.preferred_username);
  //  expect(Cache.put).toHaveBeenCalledWith('permissions', validToken.realm_access);
  //  expect(Cache.put).toHaveBeenCalledWith('videoManagerUUId', validResponse.data.videoManagerList[0].uuid);
  //  //jscs:enable requireCamelCaseOrUpperCaseIdentifiers
  //});
  //
  //it('should save response data with valid data but invalid token', function () {
  //  var validResponse = {
  //    status: 200,
  //    data: {
  //      accessToken: 'accessToken',
  //      refreshToken: 'refreshToken',
  //      validForVideoManager: 1,
  //      videoManagerList: [{
  //        'id':1,
  //        'uuid': 'uuid1'
  //      },{
  //        'id': 2,
  //        'uuid': 'uuid2'
  //      }]
  //    }
  //  };
  //  jwtHelper.decodeToken.and.returnValue(false);
  //  CurrentUserInstance.setResponseData(validResponse);
  //  expect(Cache.put).toHaveBeenCalledWith('jwt_access_token', validResponse.data.accessToken);
  //  expect(Cache.put).toHaveBeenCalledWith('jwt_refresh_token', validResponse.data.refreshToken);
  //  expect(Cache.put).toHaveBeenCalledWith('videoManagerId', validResponse.data.validForVideoManager);
  //  expect(Cache.put).toHaveBeenCalledWith('videoManagerList', validResponse.data.videoManagerList);
  //});
  //
  //it('should NOT save response data because of invalid data', function () {
  //  var validResponse = {
  //    status: 200,
  //    data: {
  //      wrong: 'wrong'
  //    }
  //  };
  //  CurrentUserInstance.setResponseData(validResponse);
  //  expect(Cache.put).not.toHaveBeenCalled();
  //});

});