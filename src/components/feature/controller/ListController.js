'use strict';
/**
 * @ngInject
 */
module.exports = function (features) {
  var vm = this;
  vm.features = features;
  vm.preparedList = [];
  angular.forEach(vm.features, function (feature) {
    vm.preparedList.push({
      id: feature.id,
      state: (feature.active) ? 'success' : 'default',
      inUse: feature.inUse,
      reviewStatus: feature.reviewStatus,
      title: feature.name,
      titleTranslatable: true
    });
  });
};
