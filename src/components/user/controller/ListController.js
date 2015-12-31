'use strict';

/**
 * @ngInject
 * @param {Object[]} users - list of users
 * @param {service} CurrentUserService
 */
module.exports = function (users, CurrentUserService) {
  var vm = this;
  vm.users = users;
  vm.currentUser = CurrentUserService.getUser();
  vm.preparedList = [];
  angular.forEach(vm.users, function (user) {
    vm.preparedList.push({
      id: user.id,
      state: (user.enabled) ? 'success' : 'default',
      locked: user.locked,
      disabled: (vm.currentUser.id === user.id),
      reviewStatus: user.reviewStatus,
      title: user.firstName + ' ' + user.lastName,
      subtitle: user.email
    });
  });
};
