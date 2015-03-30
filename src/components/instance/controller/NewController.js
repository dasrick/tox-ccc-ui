'use strict';
/**
 * @ngInject
 */
module.exports = function (InstanceResource) {
  var vm = this;
  vm.instance = new InstanceResource();
  vm.save = function() {
    vm.instance.save();
  };
};
