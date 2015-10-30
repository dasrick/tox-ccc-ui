'use strict';
/**
 * @ngInject
 */
module.exports = function (instances) {
  var vm = this;
  vm.instances = instances;
  vm.preparedList = [];
  angular.forEach(vm.instances, function (instance) {
    vm.preparedList.push({
      id: instance.id,
      state: (instance.active) ? 'success' : 'default',
      inUse: instance.inUse,
      reviewStatus: instance.reviewStatus,
      title: instance.name,
      subtitle: instance.baseUrl
    });
  });
};
