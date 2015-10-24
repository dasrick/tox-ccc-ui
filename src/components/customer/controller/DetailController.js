'use strict';
/**
 * @ngInject
 */
module.exports = function (customer, countries, $scope, $state, AlertService, $translate, CurrentUserService) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.save = save;
  // variables
  vm.originalModel = angular.copy(customer);
  vm.model = customer;
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);

  //////////

  function getFields() {
    // case CREATE - preset for country
    var defaultValueCountry = '';
    if (angular.isDefined(vm.model.address) && angular.isDefined(vm.model.address.country)) {
      defaultValueCountry = vm.model.address.country;
    }

    // TODO vielleicht kann das in eine separate function
    var optionsCountry = [];

    function logArrayElements(element) {
      optionsCountry.push({
        name: element.name,
        value: element.short
      });
    }

    countries.forEach(logArrayElements);

    var fieldDisabled = false;
    var fieldDisabledType = false;
    var currentUser = CurrentUserService.getUser();
    var types = [
      {
        name: 'consumer', // TODO und nicht einmal lokalisiert
        value: 'consumer'
      }];
    if (currentUser.customer.type === 'admin') {
      types.push(
        {
          name: 'partner', // TODO und nicht einmal lokalisiert
          value: 'partner'
        }
      );
    }
    if (vm.model.id === currentUser.customer.id) {
      types.push(
        {
          name: 'admin', // TODO und nicht einmal lokalisiert
          value: 'admin'
        }
      );
      fieldDisabledType = true;
    }

    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: $translate.instant('customer.form.name.label'),
          placeholder: $translate.instant('customer.form.name.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'street',
        type: 'input',
        model: vm.model.address,
        templateOptions: {
          label: $translate.instant('customer.form.address.street.label'),
          placeholder: $translate.instant('customer.form.address.street.placeholder'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'zip',
        type: 'input',
        model: vm.model.address,
        templateOptions: {
          label: $translate.instant('customer.form.address.zip.label'),
          placeholder: $translate.instant('customer.form.address.zip.placeholder'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'city',
        type: 'input',
        model: vm.model.address,
        templateOptions: {
          label: $translate.instant('customer.form.address.city.label'),
          placeholder: $translate.instant('customer.form.address.city.placeholder'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'phone',
        type: 'input',
        templateOptions: {
          label: $translate.instant('customer.form.phone.label'),
          placeholder: $translate.instant('customer.form.phone.placeholder'),
          type: 'tel',
          disabled: fieldDisabled
        }
      },
      {
        key: 'fax',
        type: 'input',
        templateOptions: {
          label: $translate.instant('customer.form.fax.label'),
          placeholder: $translate.instant('customer.form.fax.placeholder'),
          type: 'tel',
          disabled: fieldDisabled
        }
      },
      {
        key: 'country',
        type: 'select',
        model: vm.model.address,
        defaultValue: defaultValueCountry, //vm.model.address.country,
        templateOptions: {
          label: $translate.instant('customer.form.address.country.label'),
          options: optionsCountry,
          disabled: fieldDisabled
        }
      },
      {
        key: 'type',
        type: 'select',
        defaultValue: vm.model.type,
        templateOptions: {
          label: $translate.instant('customer.form.type.label'),
          options: types,
          disabled: fieldDisabledType
        }
      },
      {
        noFormControl: true,
        template: '<hr>'
      },
      {
        key: 'title',
        type: 'input',
        model: vm.model.contact,
        templateOptions: {
          label: $translate.instant('customer.form.contact.title.label'),
          placeholder: $translate.instant('customer.form.contact.title.placeholder'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'salutation',
        type: 'input',
        model: vm.model.contact,
        templateOptions: {
          label: $translate.instant('customer.form.contact.salutation.label'),
          placeholder: $translate.instant('customer.form.contact.salutation.placeholder'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'firstName',
        type: 'input',
        model: vm.model.contact,
        templateOptions: {
          label: $translate.instant('customer.form.contact.firstName.label'),
          placeholder: $translate.instant('customer.form.contact.firstName.placeholder'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'lastName',
        type: 'input',
        model: vm.model.contact,
        templateOptions: {
          label: $translate.instant('customer.form.contact.lastName.label'),
          placeholder: $translate.instant('customer.form.contact.lastName.placeholder'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'email',
        type: 'input',
        model: vm.model.contact,
        templateOptions: {
          label: $translate.instant('customer.form.contact.email.label'),
          placeholder: $translate.instant('customer.form.contact.email.placeholder'),
          type: 'email',
          disabled: fieldDisabled
        }
      },
      {
        key: 'phone',
        type: 'input',
        model: vm.model.contact,
        templateOptions: {
          label: $translate.instant('customer.form.phone.label'),
          placeholder: $translate.instant('customer.form.phone.placeholder'),
          type: 'tel',
          disabled: fieldDisabled
        }
      },
      {
        key: 'fax',
        type: 'input',
        model: vm.model.contact,
        templateOptions: {
          label: $translate.instant('customer.form.fax.label'),
          placeholder: $translate.instant('customer.form.fax.placeholder'),
          type: 'tel',
          disabled: fieldDisabled
        }
      }
    ];
  }

  function reset() {
    vm.model = vm.originalModel;
    $scope.formCustomer.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function save() {
    if (angular.isDefined(customer.id)) {
      console.log('it should be an UPDATE', customer);
    } else {
      // prepare new object
      // parent is the currently selected customer
      customer.parent = {
        id: CurrentUserService.getSelectedCustomer().id
      };
      console.log('it should be a CREATE', customer);
    }
    // TODO save-Methode müsste man mal zuschalten und prüfen
    //customer.$save(); // MAYBE IT WORKS
    AlertService.add('success', 'customer.msg.create.success');

    // im falle vom app.profile.user muss nicht umgeleitet werden ...
    if ($state.current.name !== 'app.profile.customer') {
      $state.go('^', {}, {reload: true});
    }
  }

};
