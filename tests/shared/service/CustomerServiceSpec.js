'use strict';

var CustomerService = require('../../../src/shared/service/CustomerService');

describe('Shared:Service:CustomerService', function () {

  var CustomerServiceInstance, Cache;

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      Cache = jasmine.createSpyObj('Cache', ['put', 'get', 'removeAll']);
      var CacheFactory = jasmine.createSpy('CacheFactory');
      CacheFactory.and.returnValue(Cache);
      CustomerServiceInstance = $injector.instantiate(CustomerService, {CacheFactory: CacheFactory});
      expect(CacheFactory).toHaveBeenCalledWith('customerData', {storageMode: 'sessionStorage'});
    });
  });

  it('should set selectedCustomer', function () {
    var dummy = {id: 23, name: '2342'};
    CustomerServiceInstance.setSelectedCustomer(dummy);
    expect(Cache.put).toHaveBeenCalledWith('selected', dummy);
  });

  it('should return the selectedCustomer', function () {
    var dummy = {id: 23, name: '2342'};
    Cache.get.and.returnValue(dummy);
    expect(CustomerServiceInstance.getSelectedCustomer()).toBe(dummy);
    expect(Cache.get).toHaveBeenCalledWith('selected');
  });

  it('should destroy all caches in customerData', function () {
    CustomerServiceInstance.clear();
    expect(Cache.removeAll).toHaveBeenCalled();
  });


});