'use strict';
/**
 * @ngInject
 */
module.exports = function (instance, $scope, $state, AlertService) {
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

  //////////

  function reset() {
    vm.instance = vm.instanceOriginal;
    $scope.formInstance.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function save() {
    //console.log('save');
    //console.log('vm.instance: ', vm.instance);
    //console.log('instance: ', instance);

    if (angular.isDefined(instance.id)) {
      console.log('it should be an UPDATE');
    } else {
      console.log('it should be a CREATE');
      //instance.$save(); // IT WORKS
      AlertService.add('success', 'instance.msg.create.success');
      $state.go('^', {}, {reload: true});
    }
  }
};
