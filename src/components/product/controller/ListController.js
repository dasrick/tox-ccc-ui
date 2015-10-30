'use strict';
/**
 * @ngInject
 */
module.exports = function (products) {
  var vm = this;
  vm.products = products;
  vm.preparedList = [];
  angular.forEach(vm.products, function (product) {
    vm.preparedList.push({
      id: product.id,
      state: (product.active) ? 'success' : 'default',
      inUse: product.inUse,
      reviewStatus: product.reviewStatus,
      title: product.name
    });
  });
};
