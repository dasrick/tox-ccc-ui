'use strict';

/**
 * @ngInject
 * @param {Object} instance
 * @param {service} $scope
 * @param {service} $state
 * @param {service} AlertService
 * @param {service} $translate
 * @param {service} InstanceResource
 */
module.exports = function (instance, $scope, $state, AlertService, $translate, InstanceResource) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.create = create;
  vm.update = update;
  // variables
  vm.originalModel = angular.copy(instance);
  vm.model = instance;
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);
  vm.underReview = (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none');

  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  function reset() {
    vm.model = vm.originalModel;
    $scope.formInstance.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function create() {
    instance.$save(
      function () {
        AlertService.add('success', 'instance.msg.create.success');
        $state.go('^', {}, {reload: true});
      }, function () {
        AlertService.add('danger', 'instance.msg.create.error');
      }
    );
  }

  function update(reviewer) {
    var data = {
      vmproInstance: instance,
      review: {
        reviewer: reviewer,
        baseUrl: $state.href('app.profile.review', {}, {absolute: true})
      }
    };
    InstanceResource.update({instanceId: instance.id}, data).$promise.then(
      function () {
        AlertService.add('success', 'instance.msg.update.success');
        $state.go('^', {}, {reload: true});
      }, function () {
        AlertService.add('danger', 'instance.msg.update.error');
      }
    );
  }

  // private methods ///////////////////////////////////////////////////////////////////////////////////////////////////

  function getFields() {
    // case of reviewStatus
    var fieldDisabled = false;
    if (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none') {
      fieldDisabled = true;
    }
    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.name.label'),
          placeholder: $translate.instant('instance.form.name.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'baseUrl',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.baseUrl.label'),
          placeholder: $translate.instant('instance.form.baseUrl.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'authUrl',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authUrl.label'),
          placeholder: $translate.instant('instance.form.authUrl.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'authClientId',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authClientId.label'),
          placeholder: $translate.instant('instance.form.authClientId.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'authClientSecret',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authClientSecret.label'),
          placeholder: $translate.instant('instance.form.authClientSecret.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'authUsername',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authUsername.label'),
          placeholder: $translate.instant('instance.form.authUsername.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'authPassword',
        type: 'input',
        templateOptions: {
          label: $translate.instant('instance.form.authPassword.label'),
          placeholder: $translate.instant('instance.form.authPassword.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      }
    ];
  }

};
