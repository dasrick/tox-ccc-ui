'use strict';
/**
 * @ngInject
 */
module.exports = function (instance) {
  var vm = this;
  vm.instance = instance;
  vm.save = function() {
    vm.instance.$save();
  };
};
