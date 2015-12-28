'use strict';

/**
 * @ngInject
 * @param {service} CurrentUserService
 */
module.exports = function (CurrentUserService) {
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

  if (CurrentUserService.isLoggedIn() === true) {
    vm.currentUser = CurrentUserService.getUser();
    vm.selectedCustomer = CurrentUserService.getSelectedCustomer();
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
