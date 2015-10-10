'use strict';
/**
 * @ngInject
 */
module.exports = function (instance, $scope, $state, AlertService, $translate) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.save = save;
  // variables
  vm.originalModel = angular.copy(instance);
  vm.model = instance;
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);

  //////////

  function getFields() {
    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.name.label'),
          placeholder: $translate.instant('instance.form.name.placeholder'),
          required: true
        }
      },
      {
        key: 'baseUrl',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.baseUrl.label'),
          placeholder: $translate.instant('instance.form.baseUrl.placeholder'),
          required: true
        }
      },
      {
        key: 'authUrl',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authUrl.label'),
          placeholder: $translate.instant('instance.form.authUrl.placeholder'),
          required: true
        }
      },
      {
        key: 'authClientId',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authClientId.label'),
          placeholder: $translate.instant('instance.form.authClientId.placeholder'),
          required: true
        }
      },
      {
        key: 'authClientSecret',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authClientSecret.label'),
          placeholder: $translate.instant('instance.form.authClientSecret.placeholder'),
          required: true
        }
      },
      {
        key: 'authUsername',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authUsername.label'),
          placeholder: $translate.instant('instance.form.authUsername.placeholder'),
          required: true
        }
      },
      {
        key: 'authPassword',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authPassword.label'),
          placeholder: $translate.instant('instance.form.authPassword.placeholder'),
          required: true
        }
      }
    ];
  }

  function reset() {
    vm.model = vm.originalModel;
    $scope.formInstance.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function save() {
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
