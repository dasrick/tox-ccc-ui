'use strict';
/**
 * @ngInject
 */
module.exports = function (plan, $scope, $state, AlertService, $translate) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.save = save;
  // variables
  vm.originalModel = angular.copy(plan);
  vm.model = plan;
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);
  vm.underReview = (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none');

  //////////

  function getFields() {
    // case of reviewStatus
    var fieldDisabled = false;
    if (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none') {
      fieldDisabled = true;
    }
    // case CREATE - preset for country
    var defaultValueTrafficUnit = '';
    if (angular.isDefined(vm.model.traffic) && angular.isDefined(vm.model.traffic.unit)) {
      defaultValueTrafficUnit = vm.model.traffic.unit;
    }
    // preset for units of traffic
    var trafifcUnits = [
      {name: 'MB', value: 'mb'},
      {name: 'GB', value: 'gb'},
      {name: 'TB', value: 'tb'},
      {name: 'PB', value: 'pb'}
    ];
    return [
      {
        key: 'title',
        type: 'input',
        templateOptions: {
          label: $translate.instant('plan.form.title.label'),
          placeholder: $translate.instant('plan.form.title.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'hosting_enabled',
        type: 'checkbox',
        defaultValue: (angular.isDefined(vm.model.hosting)),
        templateOptions: {
          label: $translate.instant('plan.form.hosting_enabled.label'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'value',
        type: 'input',
        model: vm.model.hosting,
        templateOptions: {
          label: $translate.instant('plan.form.hosting.value.label'),
          placeholder: $translate.instant('plan.form.hosting.value.placeholder'),
          type: 'number',
          required: true,
          disabled: fieldDisabled
        },
        'hideExpression': '!model.hosting_enabled'
      },
      {
        noFormControl: true,
        template: '<hr>'
      },
      {
        key: 'traffic_enabled',
        type: 'checkbox',
        defaultValue: (angular.isDefined(vm.model.traffic)),
        templateOptions: {
          label: $translate.instant('plan.form.traffic_enabled.label'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'value',
        type: 'input',
        model: vm.model.traffic,
        templateOptions: {
          label: $translate.instant('plan.form.traffic.value.label'),
          placeholder: $translate.instant('plan.form.traffic.value.placeholder'),
          type: 'number',
          required: true,
          disabled: fieldDisabled
        },
        'hideExpression': '!model.traffic_enabled'
      },
      {
        key: 'unit',
        type: 'select',
        defaultValue: defaultValueTrafficUnit,
        templateOptions: {
          label: $translate.instant('plan.form.traffic.unit.label'),
          options: trafifcUnits,
          required: true,
          disabled: fieldDisabled
        },
        'hideExpression': '!model.traffic_enabled'
      },
      {
        noFormControl: true,
        template: '<hr>'
      },
      {
        key: 'user_enabled',
        type: 'checkbox',
        defaultValue: (angular.isDefined(vm.model.user)),
        templateOptions: {
          label: $translate.instant('plan.form.user_enabled.label'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'value',
        type: 'input',
        model: vm.model.user,
        templateOptions: {
          label: $translate.instant('plan.form.user.value.label'),
          placeholder: $translate.instant('plan.form.user.value.placeholder'),
          type: 'number',
          required: true,
          disabled: fieldDisabled
        },
        'hideExpression': '!model.user_enabled'
      },
      {
        noFormControl: true,
        template: '<hr><h4 class="text-danger">' + $translate.instant('plan.form.msg.required') + '</h4>',
        'hideExpression': 'model.user_enabled || model.traffic_enabled || model.hosting_enabled'
      }
    ];
  }

  function reset() {
    vm.model = vm.originalModel;
    $scope.formInstance.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function save() {
    if (angular.isDefined(plan.id)) {
      console.log('it should be an UPDATE');
    } else {
      console.log('it should be a CREATE');
      //plan.$save(); // IT WORKS
      AlertService.add('success', 'plan.msg.create.success');
      $state.go('^', {}, {reload: true});
    }
  }
};
