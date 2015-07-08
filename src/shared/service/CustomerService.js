'use strict';
/**
 * @ngInject
 */
module.exports = function (CacheFactory) {

  var customerData = CacheFactory('customerData', {storageMode: 'sessionStorage'});
  var customerService = {
    getSelectedCustomer: getSelectedCustomer,
    setSelectedCustomer: setSelectedCustomer,
    clear: clear
  };

  return customerService;

  ////////////

  function getSelectedCustomer() {
    return customerData.get('selected');
  }

  function setSelectedCustomer(value) {
    customerData.put('selected', value);
  }

  function clear() {
    customerData.removeAll();
  }

};
