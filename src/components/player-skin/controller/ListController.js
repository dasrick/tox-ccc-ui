'use strict';
/**
 * @ngInject
 */
module.exports = function (playerSkins) {
  var vm = this;
  vm.playerSkins = playerSkins;
  vm.preparedList = [];
  angular.forEach(vm.playerSkins, function (playerSkin) {
    vm.preparedList.push({
      id: playerSkin.id,
      state: (playerSkin.active) ? 'success' : 'default',
      inUse: playerSkin.inUse,
      custom: playerSkin.custom,
      reviewStatus: playerSkin.reviewStatus,
      title: playerSkin.name,
      titleTranslatable: true
    });
  });
};
