'use strict';
/**
 * @ngInject
 */
module.exports = function (instance) {
  var vm = this;
  vm.instanceOriginal = angular.copy(instance);
  vm.instance = instance;
  vm.reset = reset;
  vm.save = save;

  // the key is used for translation and data binding
  // the other properties should be self-explanatory
  vm.fields = {
    name: {
      inputType: 'text',
      required: true
    },
    baseUrl: {
      inputType: 'text',
      required: true
    },
    authUrl: {
      inputType: 'text',
      required: true
    },
    authClientId: {
      inputType: 'text',
      required: true
    },
    authClientSecret: {
      inputType: 'text',
      required: true
    },
    authUsername: {
      inputType: 'text',
      required: true
    },
    authPassword: {
      inputType: 'text',
      required: true
    }
  };

  function reset() {
    vm.instance = vm.instanceOriginal;
  }

  function save() {
    console.log('save');
    console.log('vm.instance.name: ', vm.instance.name);
    console.log('instance.name: ', instance.name);
  }
};
