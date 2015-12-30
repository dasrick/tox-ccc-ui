'use strict';

/**
 * @ngInject
 * @param {Object} user
 * @param {Object[]} locales
 * @param {service} $scope
 * @param {service} $state
 * @param {service} AlertService
 * @param {service} $translate
 * @param {service} CurrentUserService
 */
module.exports = function (user, locales, $scope, $state, AlertService, $translate, CurrentUserService) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.create = create;
  vm.update = update;
  // variables
  vm.originalModel = angular.copy(user);
  vm.model = user;
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);

  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  function reset() {
    vm.model = vm.originalModel;
    $scope.formUser.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function create() {
    user.customer = {
      id: CurrentUserService.getSelectedCustomer().id
    };
    user.baseUrl = $state.href('app.security.password-reset', {}, {absolute: true});
    user.$save(
      function () {
        AlertService.add('success', 'user.msg.create.success');
        if ($state.current.name !== 'app.profile.user') {
          $state.go('^', {}, {reload: true});
        }
      }, function () {
        AlertService.add('danger', 'user.msg.create.error');
      }
    );
  }

  function update() {
    user.$update(
      function () {
        AlertService.add('success', 'user.msg.update.success');
        if ($state.current.name !== 'app.profile.user') {
          $state.go('^', {}, {reload: true});
        }
      }, function () {
        AlertService.add('danger', 'user.msg.update.error');
      }
    );
  }

  // private methods ///////////////////////////////////////////////////////////////////////////////////////////////////

  function getFields() {
    //// case CREATE - preset for country
    //var defaultValueCountry = '';
    //if (angular.isDefined(vm.model.address) && angular.isDefined(vm.model.address.country)) {
    //  defaultValueCountry = vm.model.address.country;
    //}

    var fieldDisabledEmail = false;
    if (angular.isDefined(vm.model.id)) {
      fieldDisabledEmail = true;
    }

    // TODO vielleicht kann das in eine separate function
    var optionsLocale = [];

    function logArrayElements(element) {
      optionsLocale.push({
        name: element.name,
        value: element.short
      });
    }

    locales.forEach(logArrayElements);

    return [
      {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: $translate.instant('user.form.firstName.label'),
          placeholder: $translate.instant('user.form.firstName.placeholder'),
          required: true
        }
      },
      {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: $translate.instant('user.form.lastName.label'),
          placeholder: $translate.instant('user.form.lastName.placeholder'),
          required: true
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: $translate.instant('user.form.email.label'),
          placeholder: $translate.instant('user.form.email.placeholder'),
          required: true,
          type: 'email',
          disabled: fieldDisabledEmail
        }
      },
      {
        key: 'locale',
        type: 'select',
        defaultValue: vm.model.locale,
        templateOptions: {
          label: $translate.instant('user.form.locale.label'),
          required: true,
          options: optionsLocale
        }
      }
    ];
  }

};
