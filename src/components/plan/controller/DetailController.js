'use strict';
/**
 * @ngInject
 */
module.exports = function (plan, $scope, $state, AlertService, $translate, PlanResource) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.create = create;
  vm.update = update;
  // variables
  vm.model = getModelPrepared();
  vm.originalModel = angular.copy(vm.model);
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);
  vm.underReview = (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none');

  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  function reset() {
    vm.model = vm.originalModel;
    $scope.formPlan.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function create() {
    var planCleaned = getModelCleaned();
    PlanResource.save(planCleaned).$promise.then(
      function () {
        AlertService.add('success', 'plan.msg.create.success');
        $state.go('^', {}, {reload: true});
      }, function () {
        AlertService.add('danger', 'plan.msg.create.error');
      }
    );
  }

  function update(reviewer) {
    var planCleaned = getModelCleaned();
    var data = {
      plan: planCleaned,
      review: {
        reviewer: reviewer,
        baseUrl: $state.href('app.profile.review', {}, {absolute: true})
      }
    };
    PlanResource.update({planId: planCleaned.id}, data).$promise.then(
      function () {
        AlertService.add('success', 'plan.msg.update.success');
        $state.go('^', {}, {reload: true});
      }, function () {
        AlertService.add('danger', 'plan.msg.update.error');
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
    // case CREATE - preset
    var defaultValueTrafficUnit = '';
    if (angular.isDefined(vm.model.traffic) && angular.isDefined(vm.model.traffic.unit)) {
      defaultValueTrafficUnit = vm.model.traffic.unit;
    }

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
        noFormControl: true,
        template: '<div class="alert alert-danger" role="alert"><p><i class="fa fa-fw fa-exclamation-triangle"></i><span translate="plan.form.msg.required"></span></p></div>',
        hideExpression: 'model.user_enabled || model.traffic_enabled || model.hosting_enabled'
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
        className: 'row',
        fieldGroup: [
          {
            className: 'col-xs-6',
            key: 'value',
            type: 'input',
            model: vm.model.hosting,
            templateOptions: {
              label: $translate.instant('plan.form.hosting.value.label'),
              placeholder: $translate.instant('plan.form.hosting.value.placeholder'),
              type: 'number',
              min: 1,
              required: true,
              disabled: fieldDisabled
            },
            hideExpression: '!model.hosting_enabled'
          },
          {
            className: 'col-xs-6',
            key: 'unit',
            type: 'select',
            defaultValue: vm.model.hosting.unit,
            model: vm.model.hosting,
            templateOptions: {
              label: $translate.instant('plan.form.unit.label'),
              options: getOptionsHostingUnit(),
              required: true,
              disabled: true
            },
            hideExpression: '!model.hosting_enabled'
          }
        ]
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
        className: 'row',
        fieldGroup: [
          {
            className: 'col-xs-6',
            key: 'value',
            type: 'input',
            model: vm.model.traffic,
            templateOptions: {
              label: $translate.instant('plan.form.traffic.value.label'),
              placeholder: $translate.instant('plan.form.traffic.value.placeholder'),
              type: 'number',
              min: 1,
              required: true,
              disabled: fieldDisabled
            },
            hideExpression: '!model.traffic_enabled'
          },
          {
            className: 'col-xs-6',
            key: 'unit',
            type: 'select',
            defaultValue: defaultValueTrafficUnit,
            model: vm.model.traffic,
            templateOptions: {
              label: $translate.instant('plan.form.unit.label'),
              options: getOptionsTrafficUnit(),
              required: true,
              disabled: fieldDisabled
            },
            hideExpression: '!model.traffic_enabled'
          }
        ]
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
        className: 'row',
        fieldGroup: [
          {
            className: 'col-xs-6',
            key: 'value',
            type: 'input',
            model: vm.model.user,
            templateOptions: {
              label: $translate.instant('plan.form.user.value.label'),
              placeholder: $translate.instant('plan.form.user.value.placeholder'),
              type: 'number',
              min: 1,
              required: true,
              disabled: fieldDisabled
            },
            hideExpression: '!model.user_enabled'
          },
          {
            className: 'col-xs-6',
            key: 'unit',
            type: 'select',
            defaultValue: vm.model.user.unit,
            model: vm.model.user,
            templateOptions: {
              label: $translate.instant('plan.form.unit.label'),
              options: getOptionsUserUnit(),
              required: true,
              disabled: true
            },
            hideExpression: '!model.user_enabled'
          }
        ]
      }
    ];
  }

  function getOptionsHostingUnit() {
    return [
      {value: 'minutes', name: 'Minuten (plz transl)'}
    ];
  }

  function getOptionsTrafficUnit() {
    return [
      {value: 'mb', name: 'MB'},
      {value: 'gb', name: 'GB'},
      {value: 'tb', name: 'TB'},
      {value: 'pb', name: 'PB'}
    ];
  }

  function getOptionsUserUnit() {
    return [
      {value: 'item', name: 'Anzahl (plz transl)'}
    ];
  }

  function getModelPrepared() {
    /*jshint camelcase: false */

    var planPrepared = {
      title: plan.title
    };

    if (angular.isDefined(plan.id)) {
      planPrepared.id = plan.id;
    }

    if (angular.isDefined(plan.reviewStatus)) {
      planPrepared.reviewStatus = plan.reviewStatus;
    }

    if (angular.isDefined(plan.hosting)) {
      planPrepared.hosting_enabled = true;
      planPrepared.hosting = plan.hosting;
    } else {
      planPrepared.hosting_enabled = false;
      planPrepared.hosting = {
        value: null,
        unit: 'minutes'
      };
    }

    if (angular.isDefined(plan.traffic)) {
      planPrepared.traffic_enabled = true;
      planPrepared.traffic = plan.traffic;
    } else {
      planPrepared.traffic_enabled = false;
      planPrepared.traffic = {
        value: null,
        unit: null
      };
    }

    if (angular.isDefined(plan.user)) {
      planPrepared.user_enabled = true;
      planPrepared.user = plan.user;
    } else {
      planPrepared.user_enabled = false;
      planPrepared.user = {
        value: null,
        unit: 'item'
      };
    }

    /*jshint camelcase: true */
    return planPrepared;
  }

  function getModelCleaned() {
    /*jshint camelcase: false */
    var planCleaned = angular.copy(vm.model);

    if (vm.model.hosting_enabled !== true) {
      delete planCleaned.hosting;
    }
    delete planCleaned.hosting_enabled;

    if (vm.model.traffic_enabled !== true) {
      delete planCleaned.traffic;
    }
    delete planCleaned.traffic_enabled;

    if (vm.model.user_enabled !== true) {
      delete planCleaned.user;
    }
    delete planCleaned.user_enabled;

    delete planCleaned.reviewStatus;

    /*jshint camelcase: true */
    return planCleaned;
  }
};
