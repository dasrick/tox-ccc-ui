'use strict';

/**
 * @ngInject
 */
module.exports = function (UserService) {
  return {
    hasRole: function (roleName) {
      var user;
      user = UserService.getUser();
      if (!user) {
        return false;
      }
      return user.reachableRoles.indexOf(roleName) > -1;
    },
    hasType: function (typeName) {
      var user;
      user = UserService.getUser();
      if (!user) {
        return false;
      }
      return user.customer.type === typeName;
    }
  };
};
