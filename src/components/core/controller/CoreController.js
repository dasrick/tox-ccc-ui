'use strict';
/**
 * @ngInject
 */
module.exports = function (UserService, CustomerService) {
  var vm = this;
  vm.appversion = process.env.appversion;
  vm.settings = {
    sidebarFolded: false
  };
  vm.toggleSection = toggleSection;
  vm.showSection = {
    management: false,
    admin: false,
    profile: false
  };

  if (UserService.isLoggedIn() === true) {
    vm.currentUser = UserService.getUser();
    vm.selectedCustomer = CustomerService.getSelectedCustomer();
  }

  function toggleSection(section) {
    angular.forEach(vm.showSection, function(value, key) {
      if (section === key) {
        vm.showSection[key] = !vm.showSection[key];
      } else {
        vm.showSection[key] = false;
      }
    });
  }

};
