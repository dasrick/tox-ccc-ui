'use strict';

/**
 * @ngInject
 */
module.exports = function (assignment, instances, products, $filter, $log, $scope, $translate) {
  var vm = this;
  // functions (public)
  vm.reset = reset;
  vm.create = create;
  vm.update = update;
  // variables

  // form setup
  vm.originalModel = angular.copy(assignment);
  vm.model = getModelPrepared(assignment);
  vm.options = {};
  vm.fields = getFields();
  // vm.originalFields = angular.copy(vm.fields);

  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  function reset() {
    vm.model = vm.originalModel;
    $scope.theForm.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function create() {
    $log.warn('assignment - create - NOT implemented yet', assignment);
  }

  function update() {
    $log.warn('assignment - update - NOT implemented yet', assignment);
  }

  // private methods ///////////////////////////////////////////////////////////////////////////////////////////////////

  function getFields() {
    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: $translate.instant('assignment.form.name.label'),
          placeholder: $translate.instant('assignment.form.name.placeholder'),
          required: true
          // disabled: inUpdateMode()  // nur bei CREATE enabled
        // },
        // validation: {
        //   show: true
        }
      },
      {// duration.startDate (datepicker)
        key: 'startDate',
        type: 'datepicker',
        model: vm.model.duration,
        templateOptions: {
          label: $translate.instant('assignment.form.duration.startdate.label'),
          type: 'text',
          datepickerOptions: {
            format: 'dd.MM.yyyy',
            showWeeks: false,
            startingDay: 1,
            minDate: new Date() // maybe only for CREATE
          },
          closeText: $translate.instant('assignment.form.datepicker.close.title'),
          currentText: $translate.instant('assignment.form.datepicker.current.title'),
          clearText: $translate.instant('assignment.form.datepicker.clear.title'),
          required: true
        },
        validation: {
          show: true
        }
      },
      {// duration.endDate (datepicker)
        key: 'endDate',
        type: 'datepicker',
        model: vm.model.duration,
        templateOptions: {
          label: $translate.instant('assignment.form.duration.enddate.label'),
          type: 'text',
          datepickerOptions: {
            format: 'dd.MM.yyyy',
            showWeeks: false,
            startingDay: 1
          },
          closeText: $translate.instant('assignment.form.datepicker.close.title'),
          currentText: $translate.instant('assignment.form.datepicker.current.title'),
          clearText: $translate.instant('assignment.form.datepicker.clear.title'),
          required: true
        },
        expressionProperties: {
          'templateOptions.datepickerOptions.minDate': 'model.startDate'
        },
        validation: {
          show: true
        }
      },
      { // product (reference select-option)
        key: 'id',
        type: 'select',
        model: vm.model.product,
        templateOptions: {
          label: $translate.instant('assignment.form.product.label'),
          placeholder: $translate.instant('assignment.form.product.placeholder'),
          required: true,
          options: getOptionsProduct()
          // disabled: // TODO maybe only available in CREATE mode
        }
      },
      { // vmproInstance (reference select-option)
        key: 'id',
        type: 'select',
        model: vm.model.vmproInstance,
        templateOptions: {
          label: $translate.instant('assignment.form.instance.label'),
          placeholder: $translate.instant('assignment.form.instance.placeholder'),
          required: true,
          options: getOptionsInstance(),
          disabled: isUpdateMode()
        }
      }
      // permanentlyDeleteVideosAllowed (bool) (ONLY at CREATE)
      // auditLogEnabled (bool) (ONLY at CREATE)
      // Tarife ... via checkboxes?
    ];
  }

  function isUpdateMode() {
    return (angular.isDefined(vm.model.id));
  }

  function getModelPrepared(model) {
    var modelPrepared = model;

    var modelDefault = {
      additionalFeatures: [], // TODO necessayr?
      auditLogEnabled: false,  // TODO necessayr?
      // customer // customer: {id: vm.selectedCustomer.id},   // TODO necessayr?
      duration: {
        startDate: new Date(),  // TODO maybe new date - and check again
        endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) // TODO maybe tomorrow - and check again
      },
      durationHostory: [],   // TODO necessayr?
      inactivename: false,   // TODO necessayr?
      permanentlyDeleteVideosAllowed: false,   // TODO necessayr?
      plans: [],   // TODO necessayr?
      playerSkins: [],   // TODO necessayr?
      product: {id: null},  // necessary because of select-option and sub-model
      transcoderProfiles: [],  // TODO necessayr?
      type: null,  // TODO necessayr?
      vmproInstance: {id: null} // necessary because of select-option and sub-model
    };

    // definitiv nicht schön, aber selten ...
    for (var property in modelDefault) {
      // level 1
      if (angular.isUndefined(model[property])) {
        modelPrepared[property] = modelDefault[property];
      } else {
        // level 2
        if (angular.isObject(modelDefault[property])) {
          for (var subproperty in modelDefault[property]) {
            if (angular.isUndefined(model[property][subproperty])) {
              modelPrepared[property][subproperty] = modelDefault[property][subproperty];
            }
          }
        }
      }
    }

    return modelPrepared;
  }

  function getOptionsProduct() {
    var optionsProduct = [];

    angular.forEach(products, function (product) {
      optionsProduct.push({
        value: product.id,
        // name: product.name  // TODO ist diese tranlateted version ...
        name: $filter('translateModel')(product.name)
      });
    });

    return optionsProduct;
  }

  function getOptionsInstance() {
    var optionsInstance = [];
    angular.forEach(instances, function (instance) {
      optionsInstance.push({
        value: instance.id,
        name: instance.name
      });
    });

    return optionsInstance;
  }

};
