'use strict';
/**
 * @ngInject
 */
module.exports = function (users) {
  var vm = this;
  vm.users = users;
  vm.preparedList = [];
  angular.forEach(vm.users, function (user) {
    vm.preparedList.push({
      id: user.id,
      active: user.enabled,
      title: user.firstName + ' ' + user.lastName,
      subtitle: user.email
    });
  });
};
