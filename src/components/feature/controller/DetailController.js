'use strict';
/**
 * @ngInject
 */
module.exports = function (feature, locales, $scope, $state, AlertService, $translate, FeatureResource) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.create = create;
  vm.update = update;

  vm.addFieldsOfConfig = addFieldsOfConfig;
  // variables
  vm.model = getModelPrepared(feature);
  vm.originalModel = angular.copy(vm.model);
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);
  vm.underReview = (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none');

  vm.fieldsOfConfig = getFieldsOfConfig();


  //console.log(locales);

  //var x = {
  //  'id': '5630993d4758732d008b456b',
  //  'name': {
  //    'de': 'Austausch'
  //  },
  //  'inUse': false,
  //  'active': true,
  //  'reviewStatus': 'none',
  //  'configurations': [],
  //  'customConfigurations': [],
  //  'supportedTypes': [1] // this id match to product type of vm pro
  //};

  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  function reset() {
    vm.model = getModelPrepared(feature);
    $scope.formFeature.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function create() {
    var modelCleaned = getModelCleaned();
    console.log('create', modelCleaned);
    //FeatureResource.save(modelCleaned).$promise.then(
    //  function () {
    //    AlertService.add('success', 'transcoder-profile.msg.create.success');
    //    $state.go('^', {}, {reload: true});
    //  }, function () {
    //    AlertService.add('danger', 'transcoder-profile.msg.create.error');
    //  }
    //);
  }

  function update() {
    var modelCleaned = getModelCleaned();
    console.log('update', modelCleaned);
    //FeatureResource.update({featureId: modelCleaned.key}, modelCleaned).$promise.then(
    //  function () {
    //    AlertService.add('success', 'transcoder-profile.msg.update.success');
    //    $state.go('^', {}, {reload: true});
    //  }, function () {
    //    AlertService.add('danger', 'transcoder-profile.msg.update.error');
    //  }
    //);
  }

  // private methods ///////////////////////////////////////////////////////////////////////////////////////////////////

  function getFields() {
    // case of reviewStatus
    //var fieldGlobalDisabled = false;
    //if (vm.underReview) {
    //  fieldGlobalDisabled = true;
    //}

    var fields = [];
    var fieldsName = getFieldsName();
    var fieldsSupportedTypes = getFieldsSupportedTypes();

    return fields.concat(fieldsName, fieldsSupportedTypes);
  }

  function getFieldsName() {
    // derzeit ist nicht klar, ob es vereinheitlichte listen von psrachen gibt, in die der titel des fetsures
    // übersetzt werden soll - soll heißen, sollte es eine definierte liste an sprachen geben, wer verwaltet diese dann?
    // eine definierte liste an sparchen ist leider notwendig, da bei einer dynamischen variante leider keine sprache
    // als fallback sichergestellt werden kann ... verstanden?
    // deshalb setze ich jetzt mal zwei Sprachen als Pflichtfelder voraus ... de und ens
    var nameFields = [];
    var registeredLanguages = ['de', 'en']; // TODO auch diese information sollte irgend wie zentral abrufbar sein
    var locales = getLocales();
    angular.forEach(registeredLanguages, function (language) {
      var field = {
        key: language,
        type: 'input',
        model: vm.model.name,
        templateOptions: {
          label: $translate.instant('feature.form.name.label') + ' (' + locales[language] + ')',
          placeholder: $translate.instant('feature.form.name.placeholder'),
          required: true
        }
      };
      nameFields.push(field);
    });

    return nameFields;
  }

  function getFieldsSupportedTypes() {
    return [
      {
        key: 'supportedTypes',
        type: 'multiCheckbox',
        templateOptions: {
          label: $translate.instant('feature.form.supportedTypes.label'),
          options: getOptionsSupportedTypes(),
          required: true
        }
      }
    ];
  }

  function getOptionsSupportedTypes() {
    return [
      {value: 1, name: $translate.instant('feature.product.type.vm_pro')}
    ];
  }

  function getModelPrepared(model) {
    /*jshint camelcase: false */

    //var x = {
    //  'id': '5630993d4758732d008b456b',
    //  'name': {
    //    'de': 'Austausch'
    //  },
    //  'inUse': false,
    //  'active': true,
    //  'reviewStatus': 'none',
    //  'configurations': [],
    //  'customConfigurations': [],
    //  'supportedTypes': [1] // this id match to product type of vm pro
    //};

    var modelPrepared = {
      name: model.name
    };

    if (angular.isDefined(model.id)) {
      modelPrepared.id = model.id;
    }

    if (angular.isDefined(model.reviewStatus)) {
      modelPrepared.reviewStatus = model.reviewStatus;
    }

    if (angular.isDefined(model.supportedTypes)) {
      modelPrepared.supportedTypes = model.supportedTypes;
    } else {
      modelPrepared.supportedTypes = [];
    }

    /*jshint camelcase: true */
    return modelPrepared;
  }

  function getModelCleaned() {
    /*jshint camelcase: false */
    var modelCleaned = angular.copy(vm.model);

    //// still
    //if (vm.model.createStill !== true) {
    //  delete modelCleaned.stillExtension;
    //}

    // allways
    delete modelCleaned.inUse;
    delete modelCleaned.active;
    delete modelCleaned.reviewStatus;

    /*jshint camelcase: true */
    return modelCleaned;
  }

  function getLocales() {
    // TODO diese lustige methode wird sicherlihc auch noch an anderen stellen benötigt ... evtl. service o.ä.
    var localeArray = [];
    locales.forEach(function (element) {
      localeArray[element.short] = element.name;
    });

    return localeArray;
  }




  function getFieldsOfConfig() {
    // TODO fehlt noch ne uuid für den key ...
    // vlt so http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    return [
      {
        key: 'blah',
        type: 'input',
        model: vm.model.configurations, // TODO why ...didnt ???
        templateOptions: {
          label: $translate.instant('plan.form.blah.label'),
          placeholder: $translate.instant('plan.form.blah.placeholder'),
          required: true
        }
      }
    ];
  }

  function addFieldsOfConfig() {
    var addField =
      {
        key: 'blub',
        type: 'input',
        model: vm.model.configurations, // TODO why ...didnt ???
        templateOptions: {
          label: $translate.instant('plan.form.blub.label'),
          placeholder: $translate.instant('plan.form.blub.placeholder'),
          required: true
        }
      }
    ;
    return vm.fieldsOfConfig.push(addField);
  }


};
