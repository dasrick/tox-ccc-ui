'use strict';
/**
 * @ngInject
 */
module.exports = function (user, locales, $scope, $state, AlertService, $translate, CurrentUserService) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.save = save;
  // variables
  vm.originalModel = angular.copy(user);
  vm.model = user;
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);

  //var userResponse = {
  //  'id': '55cd815f53767e01008b457b',
  //  'firstName': 'Gerolf',
  //  'lastName': 'Graf',
  //  'email': 'test@ccc.mi24.dev',
  //  'enabled': true,
  //  'locale': 'de',
  //  'customer': {
  //    'id': 15,
  //    'name': 'SecurityCustomerAdmin',
  //    'type': 'admin',
  //    'contact': {
  //      'firstName': 'Elwira',
  //      'lastName': 'Gertz',
  //      'email': 'heinzjoachim.steinberg@trubin.com',
  //      'title': 'B.Eng.',
  //      'salutation': 'Univ.Prof.',
  //      'phone': '+4930330966000',
  //      'fax': '+4930330966099'
  //    },
  //    'address': {'street': 'Hans-Martin-D\u00f6rr-Allee 0', 'zip': '76954', 'city': 'Uffenheim', 'country': 'CY'},
  //    'phone': '+4930330966000',
  //    'fax': '+4930330966099',
  //    'reviewStatus': 'none'
  //  },
  //  'roles': ['user', 'admin'],
  //  'locked': false,
  //  'reachableRoles': [],
  //  'reviewStatus': 'none'
  //};

  //////////

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
          options: optionsLocale
        }
      }
    ];
  }


  function reset() {
    vm.model = vm.originalModel;
    $scope.formUser.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function save() {
    if (angular.isDefined(user.id)) {
      console.log('it should be an UPDATE', user);
    } else {
      // prepare new object
      // customer is the currently selected customer
      user.customer = {
        id: CurrentUserService.getSelectedCustomer().id
      };
      console.log('it should be a CREATE', user);
    }
    // TODO save-Methode müsste man mal zuschalten und prüfen
    //user.$save(); // MAYBE IT WORKS
    AlertService.add('success', 'user.msg.create.success');
    // TODO Ziel ist je nach aktueller Route unterschiedlich
    $state.go('^', {}, {reload: true}); // in route app.profile this can't work - '.'
  }
};
