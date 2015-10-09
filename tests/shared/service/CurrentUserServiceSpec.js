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

  it('should save response data with valid data', function () {
    var validResponse = {
      status: 200,
      data: {
        token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NDQ0NTcyMTQsInVzZXJuYW1lIjoiQWRtaW5AY2NjLm1pMjQuZGV2Iiwic3RvbXAiOnsiaG9zdCI6Ilwvc3RvbXAiLCJ1c2VyIjoiZ3Vlc3QiLCJwYXNzd29yZCI6Imd1ZXN0Iiwidmhvc3QiOiJcLyJ9LCJ1c2VyIjoie1wiaWRcIjpcIjU1Y2Q4MTVmNTM3NjdlMDEwMDhiNDU3ZFwiLFwiZmlyc3ROYW1lXCI6XCJKYXNtaW5cIixcImxhc3ROYW1lXCI6XCJFaW1lclwiLFwiZW1haWxcIjpcIkFkbWluQGNjYy5taTI0LmRldlwiLFwibG9jYWxlXCI6XCJkZVwiLFwiY3VzdG9tZXJcIjp7XCJpZFwiOjE1LFwidHlwZVwiOlwiYWRtaW5cIn0sXCJyZWFjaGFibGVSb2xlc1wiOltcInVzZXJfZWRpdFwiLFwidXNlcl9jcmVhdGVcIixcInVzZXJfZGVsZXRlXCIsXCJ1c2VyX3NldF9yb2xlXCIsXCJ1c2VyX2FkbWluXCIsXCJjdXN0b21lcl9lZGl0XCIsXCJjdXN0b21lcl9jcmVhdGVcIixcImN1c3RvbWVyX2RlbGV0ZVwiLFwiY3VzdG9tZXJfYWRtaW5cIixcInByb2R1Y3RfZWRpdFwiLFwicHJvZHVjdF9jcmVhdGVcIixcInByb2R1Y3RfZGVsZXRlXCIsXCJwcm9kdWN0X2FkbWluXCIsXCJhc3NpZ25tZW50X2VkaXRcIixcImFzc2lnbm1lbnRfZGVhY3RpdmF0ZVwiLFwiYXNzaWdubWVudF9jcmVhdGVcIixcImFzc2lnbm1lbnRfYWRtaW5cIixcImFkbWluXCIsXCJ1c2VyXCIsXCJ0cmFuc2NvZGVycHJvZmlsZV9yZWFkXCIsXCJ0cmFuc2NvZGVycHJvZmlsZV9jcmVhdGVcIixcInRyYW5zY29kZXJwcm9maWxlX2VkaXRcIixcInRyYW5zY29kZXJwcm9maWxlX2RlbGV0ZVwiLFwidHJhbnNjb2RlcnByb2ZpbGVfYWRtaW5cIixcInBsYW5fcmVhZFwiLFwicGxhbl9jcmVhdGVcIixcInBsYW5fZWRpdFwiLFwicGxhbl9kZWxldGVcIixcInBsYW5fYWRtaW5cIixcInBsYXllcl9za2luX2NyZWF0ZVwiLFwicGxheWVyX3NraW5fZWRpdFwiLFwicGxheWVyX3NraW5fZGVsZXRlXCIsXCJwbGF5ZXJfc2tpbl9hZG1pblwiLFwiaW5zdGFuY2VfcmVhZFwiLFwiaW5zdGFuY2VfY3JlYXRlXCIsXCJpbnN0YW5jZV9lZGl0XCIsXCJpbnN0YW5jZV9kZWxldGVcIixcImluc3RhbmNlX2FkbWluXCJdLFwicmV2aWV3Q291bnRcIjowfSIsImlhdCI6IjE0NDQzNzA4MTQifQ.f9ijFYipoUNl91SIbTbt3Mk5Y3B4u5O9ooxg60yusyOXOLynalFSyTE8HSRrrxud8WAtiRyfOcCwGjZ-GQZUkEPETQzbrYwJWZd_rpRuXklQD_cxFk85iOjqA_owWxc43VArDEFAHMZ8Nb1VcPn4zieRhLS4nhoVyKLsvXpX4_q6EGXjoOrp2KvEttR_bJlp4j-lTeQSNqRwmPRWG1UjCm3RNxxf8JHMr1UHhAD0B29Sefk3CGSDxJBYyTmGi4RhRRQrIHd1cpnxAwSA-GkZ97MPJBANbd2wvL8jUMHI545FbmPTATo8_6W0y_tCMKXFO9cYNmxn45y-raGAGO_jmML8C21BIvv8NxhC1Y77pYPPXHGoa1RIr3l_9_7dGDZeJD1zl7TLcKSJL-dcpTxTMhcOhtsp0dv_ACE9LuNxoXtW6uNRUAn1aOmcGLQLVTI5HDNLlwZcwZVbutXSg7E5o5PKCggOIJALSggKfULTJyHt3aCsqdu4S_z2Hq6coXpaVz1rN08EaR4oe3Jiwmp8Jf-LZDmMNASalietSmKFxzcPaLcZyHm_6L8dcqXp33RPqONvZODh2MiO8DNggPcuBdcSkS2dXci2qA5tGREsoMcgYMBfUo96qsBSb_4ZhoExMybmOTkXtLSOmiV4ZKutVDDBfVKLt2iYNFN4n8woJCY'
      }
    };
    var payload = JSON.parse(atob(validResponse.data.token.split('.')[1]));
    var user = JSON.parse(payload.user);

    CurrentUserInstance.setResponseData(validResponse);
    expect(Cache.put).toHaveBeenCalledWith('jwt_access_token', validResponse.data.token);
    expect(Cache.put).toHaveBeenCalledWith('currentUser', user);
  });

  it('should NOT save response data because of invalid data', function () {
    var invalidResponse = {
      status: 200,
      data: {
        wrong: 'wrong'
      }
    };
    CurrentUserInstance.setResponseData(invalidResponse);
    expect(Cache.put).not.toHaveBeenCalled();
  });

});